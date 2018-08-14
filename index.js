var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  let position = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${position} in line.`;
}

let number = 1;

function takeANumber2 (katzDeliLine, x) {
  let number = 1;
  katzDeliLine.push(number);
  number++;
  return `You are ${number} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var first = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${first}.`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
     let stringLine = [];
     for (var i = 0; i < katzDeliLine.length; i++) {
       stringLine.push(` ${i+1}. ${katzDeliLine[i]}`);
     }
  return `The line is currently:${stringLine}`;
  }
}
