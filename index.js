/**
 * Fisher-Yates shuffles an array of items in O(n) time.
 * The algorithm effectively puts all elements into a hat and continually
 * draws random elements from the hat until no elements remain.
 */
export default items => {
  if (!isArray(items)) {
    throw new TypeError(`Expected Array, got ${typeof items}`);
  }
  let shuffledItems = [...items];
  for (let index = 0; index < shuffledItems.length - 2; index++) {
    let randomIndex = Math.floor(Math.random() * index);
    // swap indices with es6 destructuring e.g. let [a, b] = [b, a]
    [shuffledItems[index], shuffledItems[randomIndex]] = [
      shuffledItems[randomIndex],
      shuffledItems[index]
    ];
  }
  return shuffledItems;
};

function isArray(x) {
  return !!x && x.constructor === Array;
}
