const expect = require('chai').expect
const emojify = require('../index')

describe('emojify', () => {
  it('should convert an emoji correctly', () => {
    const result = emojify(':smile:');
    expect(result).to.equal('😀');
  });

  it('should convert an emoji correctly at the end of sentance ', () => {
    const result = emojify('node is :thumbsup:');
    expect(result).to.equal('node is 👍');
  });

  it('should convert an emoji correctly in the middle of sentance ', () => {
		const result = emojify('today the weather :thumbsdown: but tomorrow will be better');
    expect(result).to.equal('today the weather 👎 but tomorrow will be better');
  });
})