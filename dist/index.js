/**
 * Fisher-Yates shuffles an array of items in O(n) time.
 * The algorithm effectively puts all elements into a hat and continually
 * draws random elements from the hat until no elements remain.
 * @param {array} items - An array of items.
 * @returns {array} shuffledItems - A new array of shuffled items.
 */
export default function shuffle(items) {
    var _a;
    if (!Array.isArray(items)) {
        throw new TypeError("Expected Array, got " + typeof items);
    }
    var shuffledItems = items.slice();
    for (var index = 0; index < shuffledItems.length - 2; index++) {
        var randomIndex = Math.floor(Math.random() * index);
        // Swap indices with es6 destructuring e.g. [a, b] = [b, a]
        _a = [
            shuffledItems[randomIndex],
            shuffledItems[index],
        ], shuffledItems[index] = _a[0], shuffledItems[randomIndex] = _a[1];
    }
    return shuffledItems;
}
//# sourceMappingURL=index.js.map