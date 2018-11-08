import shuffle from './index';

test('Shuffle', () => {
  shuffle(123).catch(e => {
    expect(e).toBe(TypeError);
    expect(e.message).toEqual('Expected Array, got number');
  });

  expect(shuffle([1, 2, 3, 4, 5, 6])).not.toEqual([1, 2, 3, 4, 5, 6]);
});
