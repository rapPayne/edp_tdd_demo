import { romanToArabic } from "./romanNumeralConvertor";

test("runs", () => {
  expect(romanToArabic).toBeTruthy()
})

test("takes roman and returns arabic", () => {
  const arabic = romanToArabic("XVI");
  expect(arabic).toBe(16);
})