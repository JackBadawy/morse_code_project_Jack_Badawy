import {
  engInputBox,
  engToMorseBtn,
  legendContainer,
  morseInputBox,
  morseToEngBtn,
  resultContainer,
} from "./variables.js";

import { morseCodeLookup } from "./lookupTable.js";

let inputArray = [];
let inputString = "";

addMorseLegend();
function addMorseLegend() {
  let legendKeys = Object.keys(morseCodeLookup);
  for (let i = 0; i < legendKeys.length; i++) {
      let legendItemContainer = document.createElement("div");
      legendItemContainer.className = "info-box__legend-container__item-box";
      let legendItemTitle = document.createElement("p");
      let legendItemMorse = document.createElement("p");
      legendItemTitle.textContent = legendKeys[i];
      if (legendItemTitle.textContent != ":") {
          legendItemTitle.textContent += ":";
      }
      legendItemContainer.appendChild(legendItemTitle);
      legendItemMorse.textContent = morseCodeLookup[legendKeys[i]];
      if (legendItemTitle.textContent != ":SPACE:") {
        legendItemContainer.appendChild(legendItemMorse)
      } else {
        legendItemContainer.id = "space"
      }
      legendContainer.appendChild(legendItemContainer);

      
      legendItemContainer.addEventListener('click', function() {
          let currentValue = morseInputBox.value;
          
          if (currentValue && !currentValue.endsWith(' ')) {
              currentValue += ' ';
          }
          morseInputBox.value = currentValue + morseCodeLookup[legendKeys[i]] + ' ';
      });
      legendItemContainer.style.cursor = 'pointer';
  }
}

engToMorseBtn.addEventListener("click", function () {
  inputString = engInputBox.value.toUpperCase();
  inputArray = inputString.split("");
  engToMorse();
});

morseToEngBtn.addEventListener("click", function () {
  inputString = morseInputBox.value;
  inputArray = inputString.split(" ");
  morseToEng(inputArray);
});

const engToMorse = () => {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] != " ") {
      inputArray[i] = morseCodeLookup[inputArray[i]] + " ";
    }
  }
  resultBoxDisplay(inputArray);
};

const morseToEng = (inputArray) => {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] != "") {
      inputArray[i] = Object.keys(morseCodeLookup).find(
        (key) => morseCodeLookup[key] === inputArray[i]
      );
    } else {
      inputArray[i] = " ";
    }
  }
  resultBoxDisplay(inputArray);
  return inputArray;
};

function resultBoxDisplay(valuesToDisplay) {
  let resultString = valuesToDisplay.join("");
  resultContainer.value = resultString;
}