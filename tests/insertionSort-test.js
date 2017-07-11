const { expect, assert } = require('chai');
const insertionSort = require('../scripts/insertionSort.js')

describe('insertionSort function', () => {

  it('should be a function', () => {
    assert.isFunction(insertionSort);
  })

  it('should be able to sort an array', () => {
    let unsortedArray = ['z', 'a', 'w', 'l', 'm'];

    expect(unsortedArray).to.deep.equal(['z', 'a', 'w', 'l', 'm']);
    insertionSort(unsortedArray);
    expect(unsortedArray).to.deep.equal(unsortedArray, ['a', 'l', 'm', 'w', 'z'])
  })

  it('should be able to sort a large, randomly generated database', () => {
    let unsortedArray = [];
    let randomNumber = 10000;

    for (let i = 0; i < randomNumber; i++) {
      unsortedArray.push(Math.floor(Math.random() * (1000 - 100 + 1)) + 100)
    }

    let copy = Array.from(unsortedArray);

    expect(unsortedArray).to.deep.equal(unsortedArray);
    insertionSort(unsortedArray);
    expect(unsortedArray).to.deep.equal(copy.sort((a, b) => {
      a - b;
    }))
  })
})
