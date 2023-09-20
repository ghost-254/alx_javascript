#!/usr/bin/node

function divideBy(firstNumber) {
    return function(secondNumber) {
      return secondNumber / firstNumber;
    };
  }
  
  function addBy(firstNumber) {
    return function(secondNumber) {
      return secondNumber + firstNumber;
    };
  }
  
  var addBy100 = addBy(100);
  var addBy1000 = addBy(1000);
  var divideBy10 = divideBy(10);
  var divideBy100 = divideBy(100);
  
  console.log(addBy100(20)); // Should display 120
  console.log(divideBy10(20)); // Should display 2
  console.log(divideBy100(200)); // Should display 2
  console.log(addBy1000(20)); // Should display 1020
