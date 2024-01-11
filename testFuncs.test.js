import { expect, jest, test } from "@jest/globals";
import { testMorseToEng } from "./testFuncs";
import { testEngToMorse } from "./testFuncs";

const testArray = [
  "....",
  "..",
  "",
  "--",
  "-.--",
  "",
  "-.",
  ".-",
  "--",
  ".",
  "",
  "..",
  "...",
  "",
  ".---",
  ".-",
  "-.-.",
  "-.-",
];

const testTwoArray = [
  "H",
  "I",
  " ",
  "M",
  "Y",
  " ",
  "N",
  "A",
  "M",
  "E",
  " ",
  "I",
  "S",
  " ",
  "J",
  "A",
  "C",
  "K",
];

test("morse code to english conversion test", () => {
  expect(testMorseToEng(testArray)).toBe("HI MY NAME IS JACK");
});

test("english to morse code conversion test", () => {
  expect(testEngToMorse(testArray)).toBe(
    ".... ..  -- -.--  -. .- -- .  .. ...  .--- .- -.-. -.- "
  );
});
