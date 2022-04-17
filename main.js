'use strict'

let result = document.getElementById('result');
let boal = true;

function clickbutton(key) {
  let keyText = key.innerHTML;
  if (boal == true) {
    if (keyText == "=") {
      result.innerHTML = eval(result.innerHTML);
      boal = false;
    } else if (keyText == "AC") {
      result.innerHTML = "0";
      boal = true;
    } else if (result.innerHTML.slice(0) == "0") {
      result.innerHTML = result.innerHTML.replace(result.innerHTML.slice(0), keyText);
      boal = true;
    } else {
      result.innerHTML += keyText;
      boal = true;
    }
  } else {
    if (keyText == "=" || keyText == "AC") {
      result.innerHTML = "0";
      boal = true;
    } else {
      result.innerHTML = keyText;
      boal = true;
    } 
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
  if (boal == true) {
    if (result.innerHTML.slice(0) == "0") {
      result.innerHTML = 0;
    } else if (result.innerHTML.slice(-1) == "+" || result.innerHTML.slice(-1) == "-" || result.innerHTML.slice(-1) == "*" || result.innerHTML.slice(-1) == "/") {
      result.innerHTML = result.innerHTML + "0";
    } else {
      result.innerHTML += zerobutton.innerHTML;
    }
  }
}



