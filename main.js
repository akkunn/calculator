'use strict'

let result = document.getElementById('result');

function clickbutton(key) {
  let keyText = key.innerHTML;
  if (keyText == "=") {
    result.innerHTML = eval(result.innerHTML);
    return;
  } else if (keyText == "AC") {
    result.innerHTML = "0";
  } else if (result.innerHTML.slice(0) == "0") {
    result.innerHTML = result.innerHTML.replace(result.innerHTML.slice(0), keyText);
  } else {
    result.innerHTML += keyText;
  }
}

function clickCalcButton(calcbutton) {
  if (result.innerHTML.slice(-1) == "+" || result.innerHTML.slice(-1) == "-" || result.innerHTML.slice(-1) == "*" || result.innerHTML.slice(-1) == "/") {
    result.innerHTML = result.innerHTML.replace(result.innerHTML.slice(-1), calcbutton.innerHTML);
  } else {
  result.innerHTML += calcbutton.innerHTML;
  }
}

function clickPointButton(pointbutton) {
  if (result.innerHTML.slice(-1) == '.') {
    result.innerHTML = result.innerHTML.replace(result.innerHTML.slice(-1), pointbutton.innerHTML);
  } else {
    result.innerHTML += pointbutton.innerHTML;
  }
}

function clickZeroZerobutton(zerobutton) {
  if (result.innerHTML.slice(0) == "0") {
    result.innerHTML = 0;
  } else {
    result.innerHTML += zerobutton.innerHTML;
  }
}




