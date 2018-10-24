import test from "ava";
import shuffle from ".";

test("Shuffle", t => {
  const err = t.throws(() => {
    shuffle(123);
  }, TypeError);
  t.is(err.message, "Expected Array, got number");

  t.notDeepEqual(shuffle([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
});
