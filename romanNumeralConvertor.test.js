import { romanToArabic } from "./romanNumeralConvertor";

describe('Roman numberal convertor', () => {
  test("runs", () => {
    expect(romanToArabic).toBeTruthy()
  })

  test("returns 16 given XVI", () => {
    const arabic = romanToArabic("XVI");
    expect(arabic).toBe(16);
  })

  test("returns 5 given V", () => {
    // ARRANGE
    const expected = 5
    // ACT
    const actual = romanToArabic("V")
    // ASSERT
    expect(actual).toBe(expected)
  })

  test("return 4 given IV", () => {
    const expected = 4;
    const actual = romanToArabic("IV")
    expect(actual).toBe(expected)
  })
});