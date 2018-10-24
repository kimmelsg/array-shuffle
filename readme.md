# array-shuffle [![Build Status](https://travis-ci.org/audiolion/array-shuffle.svg?branch=master)](https://travis-ci.org/audiolion/array-shuffle) [![codecov](https://codecov.io/gh/audiolion/array-shuffle/badge.svg?branch=master)](https://codecov.io/gh/audiolion/array-shuffle?branch=master)

> [Fisher-Yates](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle) shuffle of an array of items producing an unbiased permutation.

## Install

```
$ npm install @kimmel/array-shuffle
```

## Usage

```js
import shuffle from 'array-shuffle';

const shuffledArray = shuffle([1, 2, 3, 4, 5, 6]);
//=> [3, 1, 2, 5, 6, 4]
```

`shuffle` does _not_ mutate the original array.

## API

### shuffle(items)

#### items

Type: `array`

['hello', 2, 5, { foo: 'bar' }]

## License

MIT © [Ryan Castner](https://kimmel.com)
