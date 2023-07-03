import { toRoman } from "./romanNumeralConverter";

describe('Roman Numeral Converter', () => {
  it('given 1 returns "I"', () => {
    const expected = "I";
    const inputArabic = 1;
    const actual = toRoman(inputArabic);
    expect(actual).toBe(expected);
  })

  it('can convert numeral 5 to string capital V', () => {
    const expected = "V";
    const inputArabic = 5;
    const actual = toRoman(inputArabic);
    expect(actual).toBe(expected)
  })

  it('is able to convert numeral 4 to string capital IV', () => {
    const expected = "IV";
    const inputArabic = 4;
    const actual = toRoman(inputArabic);
    expect(actual).toBe(expected)
  })
})

