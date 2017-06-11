/* eslint-env mocha */

const expect = require('chai').expect
const emojify = require('../index')

describe('emojify', () => {
  it('should convert an emoji correctly', () => {
    const result = emojify(':smile:')
    expect(result).to.equal('😀')
  })

  it('should convert an emoji correctly at the end of sentance', () => {
    const result = emojify('node is :thumbsup:')
    expect(result).to.equal('node is 👍')
  })

  it('should convert an emoji correctly in the middle of sentance', () => {
    const result = emojify('today the weather :thumbsdown: but tomorrow will be better')
    expect(result).to.equal('today the weather 👎 but tomorrow will be better')
  })

  it('should do nothing if word is not an emoji', () => {
    const result = emojify('I don\'t think this will ever be an emoji :seganike:')
    expect(result).to.equal('I don\'t think this will ever be an emoji :seganike:')
  })
})
