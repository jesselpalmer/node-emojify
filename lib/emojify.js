const emojis = require('./emojis')

const isWordEscaped = word => {
  const firstChar = word.charAt(0)
  const lastChar = word.slice(-1)

  return firstChar === ':' && lastChar === ':'
}

const getEmoji = word => {
  const trimmedWord = word.slice(1, word.length - 1)

  return emojis[trimmedWord] || word
}

const emojify = text => {
  const words = text.split(' ')
  const numOfWords = words.length
  let emoji = ''
  let currentWord = ''

  for (let i = 0; i < numOfWords; i++) {
    currentWord = words[i]

    if (isWordEscaped(currentWord)) {
      emoji = getEmoji(currentWord)
      words[i] = emoji
    }
  }

  const sentance = words.join(' ')

  return sentance
}

module.exports = emojify
