const { expect, assert } = require('chai');
const { mergeSort, merge } = require('../scripts/mergeSort.js')

describe('mergeSort function', () => {

  it('should have a mergeSort and merge function', () => {
    assert.isFunction(mergeSort);
    assert.isFunction(merge);
  })

  it('should be able to sort an array', () => {
    let unsortedArray = ['z', 'a', 'w', 'l', 'm'];

    expect(unsortedArray).to.deep.equal(['z', 'a', 'w', 'l', 'm']);
    mergeSort(unsortedArray);
    expect(unsortedArray).to.deep.equal(['a', 'l', 'm', 'w', 'z'])
  })

  it.skip('should be able to sort a large, randomly generated database', () => {
    let unsortedArray = [];
    let randomNumber = 10000;

    for (let i = 0; i < randomNumber; i++) {
      unsortedArray.push(Math.floor(Math.random() * (1000 - 100 + 1)) + 100)
    }

    let copy = Array.from(unsortedArray);

    expect(unsortedArray).to.deep.equal(unsortedArray);
    mergeSort(unsortedArray);
    expect(unsortedArray).to.deep.equal(copy.sort((a, b) => {
      return a - b;
    }))
  })
})
