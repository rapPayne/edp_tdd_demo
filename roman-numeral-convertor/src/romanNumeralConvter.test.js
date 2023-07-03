import toRoman from "./romanNumeralConverter";

test('can run a smoke test', () => {
  expect(1).toBe(1)
})


test('given 1 returns "i"', () => {
  const expected = "i";
  const inputArabic = 1;
  const actual = toRoman(inputArabic);
  expect(actual).toBe(expected);
})

test('converting numeral 5 to string capital V', () => {
  const expected = "V";
  const inputArabic = 5;
  const actual = toRoman(inputArabic);
  expect(actual).toBe(expected)
})