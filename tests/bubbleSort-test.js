const { expect, assert } = require('chai');
const bubbleSort = require('../scripts/bubbleSort.js')

describe('bubbleSort function', () => {

  it('should be a function', () => {
    assert.isFunction(bubbleSort);
  })

  it('should be able to sort an array', () => {
    let unsortedArray = ['z', 'a', 'w', 'l', 'm'];

    expect(unsortedArray).to.deep.equal(['z', 'a', 'w', 'l', 'm']);
    bubbleSort(unsortedArray);
    expect(unsortedArray).to.deep.equal(['a', 'l', 'm', 'w', 'z'])
  })

  it('should be able to sort a large, randomly generated database', () => {
    let unsortedArray = [];
    let randomNumber = 1000;
    
    for (let i = 0; i < randomNumber; i++) {
      unsortedArray.push(Math.floor(Math.random() * (1000 - 100 + 1)) + 100)
    }

    let copy = Array.from(unsortedArray)

    expect(unsortedArray).to.deep.equal(unsortedArray);
    bubbleSort(unsortedArray);
    expect(unsortedArray).to.deep.equal(copy.sort( (a, b) => {
      a - b;
    }))
  })
})
