//functions were rewritten to not involve dom interations for testing purposes

import { morseCodeLookup } from "./lookupTable";
export const testMorseToEng = (inputArray) => {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] != "") {
      inputArray[i] = Object.keys(morseCodeLookup).find(
        (key) => morseCodeLookup[key] === inputArray[i]
      );
    } else {
      inputArray[i] = " ";
    }
  }
  inputArray = inputArray.join("");
  return inputArray;
};

export const testEngToMorse = (inputArray) => {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] != " ") {
      inputArray[i] = morseCodeLookup[inputArray[i]] + " ";
    }
  }
  inputArray = inputArray.join("");
  return inputArray;
};
