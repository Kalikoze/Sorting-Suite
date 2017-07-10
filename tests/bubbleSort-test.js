const { expect, assert } = require('chai');
const bubbleSort = require('../scripts/bubbleSort.js')

describe('bubbleSort function', () => {

  it('should be a function', () => {
    assert.isFunction(bubbleSort);
  })

  it('should be able to sort an array', () => {
    let unsortedArray = ['z', 'a', 'w', 'l', 'm'];

    expect(unsortedArray).to.equal(unsortedArray, ['z', 'a', 'w', 'l', 'm']);
    bubbleSort(unsortedArray);
    expect(unsortedArray).to.equal(unsortedArray, ['a', 'l', 'm', 'w', 'z'])
  })

  it('should be able to sort a large, randomly generated database', () => {
    let unsortedArray = [];
    for (let i = 0; i < 1000; i++) {
      unsortedArray.push(Math.floor(Math.random() * (1000 - 100 + 1)) + 100)
    }

    expect(unsortedArray).to.equal(unsortedArray);
    bubbleSort(unsortedArray);
    expect(unsortedArray).to.equal(unsortedArray.sort())
  })
})
