'use strict';

/**
 * Fisher-Yates shuffles an array of items in O(n) time.
 * The algorithm effectively puts all elements into a hat and continually
 * draws random elements from the hat until no elements remain.
 * @param {array} items - An array of items.
 * @returns {array} shuffledItems - A new array of shuffled items.
 */

module.exports = items => {
  if (!Array.isArray(items)) {
    throw new TypeError(`Expected Array, got ${typeof items}`);
  }
  const shuffledItems = [...items];
  for (let index = 0; index < shuffledItems.length - 2; index++) {
    const randomIndex = Math.floor(Math.random() * index);
    // Swap indices with es6 destructuring e.g. [a, b] = [b, a]
    [shuffledItems[index], shuffledItems[randomIndex]] = [
      shuffledItems[randomIndex],
      shuffledItems[index],
    ];
  }
  return shuffledItems;
};
