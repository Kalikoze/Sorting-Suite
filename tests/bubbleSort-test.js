const { expect, assert } = require('chai');
const bubbleSort = require('../scripts/bubbleSort.js')

describe('bubbleSort function', () => {

  it('should be a function', () => {
    assert.isFunction(bubbleSort);
  })

  it('should be able to sort an array of letters', () => {
    let unsortedArray = ['z', 'a', 'w', 'l', 'm'];

    expect(unsortedArray).to.deep.equal(['z', 'a', 'w', 'l', 'm']);
    bubbleSort(unsortedArray);
    expect(unsortedArray).to.deep.equal(['a', 'l', 'm', 'w', 'z'])
  })

  it('should be able to sort an array of negative numbers', () => {
    let unsortedArray = [-1, -84, -25, -155, -7]

    expect(unsortedArray).to.deep.equal([-1, -84, -25, -155, -7]);
    bubbleSort(unsortedArray);
    expect(unsortedArray).to.deep.equal([-155, -84, -25, -7, -1])
  })

  it('should be able to sort a large, randomly generated database', () => {
    let unsortedArray = [];
    let randomNumber = 15000;

    for (let i = 0; i < randomNumber; i++) {
      unsortedArray.push(Math.floor(Math.random() * (1000 - 100 + 1)) + 100)
    }

    let copy = Array.from(unsortedArray);

    expect(unsortedArray).to.deep.equal(unsortedArray);
    bubbleSort(unsortedArray);
    expect(unsortedArray).to.deep.equal(copy.sort((a, b) => {
      return a - b;
    }))
  })
})
