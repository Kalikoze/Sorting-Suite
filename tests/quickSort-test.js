const { expect, assert } = require('chai');
const quickSort = require('../scripts/quickSort.js')

describe('quickSort function', () => {

  it('should be a function', () => {
    assert.isFunction(quickSort);
  })

  it('should be able to sort an array', () => {
    let unsortedArray = ['z', 'a', 'w', 'l', 'm'];

    expect(unsortedArray).to.deep.equal(['z', 'a', 'w', 'l', 'm']);
    let sortedArray = quickSort(unsortedArray);
    expect(unsortedArray).to.deep.equal(unsortedArray, ['a', 'l', 'm', 'w', 'z'])
  })

  it('should be able to sort an array of negative numbers', () => {
    let unsortedArray = [-1, -84, -25, -155, -7]

    expect(unsortedArray).to.deep.equal([-1, -84, -25, -155, -7]);
    let sortedArray = quickSort(unsortedArray);
    expect(sortedArray).to.deep.equal([-155, -84, -25, -7, -1])
  })

  it('should be able to sort a large, randomly generated database', () => {
    let unsortedArray = [];
    let randomNumber = 50000;

    for (let i = 0; i < randomNumber; i++) {
      unsortedArray.push(Math.floor(Math.random() * (1000 - 100 + 1)) + 100)
    }

    let copy = Array.from(unsortedArray);

    expect(unsortedArray).to.deep.equal(unsortedArray);
    let sortedArray = quickSort(unsortedArray);
    expect(sortedArray).to.deep.equal(copy.sort((a, b) => {
      return a - b;
    }))
  })
})
