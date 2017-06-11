const emojis = require('./emojis')

const isWordEscaped = word => {
    const firstChar = word.charAt(0)
    const lastChar = word.slice(-1)

    return firstChar === ':' && lastChar === ':'
}

const getEmoji = word => {
    word = word.slice(1, word.length - 1)
    return emojis[word] || `:${ word }:`
}

const emojify = text => {
    const words = text.split(' ')
    const numOfWords = words.length
    let emoji = ''
    let currentWord

    for (let i = 0; i < numOfWords; i++) {
        currentWord = words[i]

        if (isWordEscaped(currentWord)) {
            emoji = getEmoji(currentWord);
            words[i] = emoji
        }
    }

    const sentance = words.join(' ')

    return sentance;
}
