
test('can run a smoke test', () => {
  expect(1).toBe(1)
})

test('given 1 returns "i"', () => {
  const expected = "i";
  const inputArabic = 1;
  const actual = toRoman(inputArabic);
  expect(actual).toBe(expected);
})