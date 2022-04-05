"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* Calculator project for Project Odin */
var Calculator =
/*#__PURE__*/
function () {
  function Calculator(prevOpText, currOpText) {
    _classCallCheck(this, Calculator);

    this.prevOpText = prevOpText;
    this.currOpText = currOpText;
    this.clear();
  }
  /* reset the calculator text display */


  _createClass(Calculator, [{
    key: "clear",
    value: function clear() {
      this.currOperand = '';
      this.prevOperand = '';
      this.operation = undefined;
    }
    /* delete last operand entered */

  }, {
    key: "delete",
    value: function _delete() {
      this.currOperand = this.currOperand.toString().slice(0, -1);
    }
    /* add number to calculation */

  }, {
    key: "appendNumber",
    value: function appendNumber(number) {
      if (number === '.' && this.currOperand.includes('.')) return;
      this.currOperand = this.currOperand.toString() + number.toString();
    }
    /* choose an operator for calculation */

  }, {
    key: "chooseOperation",
    value: function chooseOperation(operation) {
      if (this.currOperand === '') return;

      if (this.prevOperand !== '') {
        this.calculate();
      }

      this.operation = operation;
      this.prevOperand = this.currOperand;
      this.currOperand = '';
    }
    /* run the calculation of currently entered numbers and operations */

  }, {
    key: "calculate",
    value: function calculate() {
      var calculation;
      var prev = parseFloat(this.prevOperand);
      var current = parseFloat(this.currOperand);
      if (isNaN(prev) || isNaN(current)) return;

      switch (this.operation) {
        case '+':
          calculation = prev + current;
          break;

        case '-':
          calculation = prev - current;
          break;

        case '*':
          calculation = prev * current;
          break;

        case '÷':
          calculation = prev / current;
          break;

        default:
          return;
      }

      this.currOperand = calculation;
      this.operation = undefined;
      this.prevOperand = '';
    }
    /* format numbers to display correctly */

  }, {
    key: "getNumber",
    value: function getNumber(number) {
      var stringNumber = number.toString();
      var integerDigits = parseFloat(stringNumber.split('.')[0]);
      var decimalDigits = stringNumber.split('.')[1];
      var integerDisplay;

      if (isNaN(integerDigits)) {
        integerDisplay = '';
      } else {
        integerDisplay = integerDigits.toLocaleString('en', {
          maximumFractionDigits: 0
        });
      }

      if (decimalDigits != null) {
        return "".concat(integerDisplay, ".").concat(decimalDigits);
      } else {
        return integerDisplay;
      }
    }
    /* ensure the calculator screen text is updated */

  }, {
    key: "refresh",
    value: function refresh() {
      this.currOpText.innerText = this.getNumber(this.currOperand);

      if (this.operation != null) {
        this.prevOpText.innerText = "".concat(this.getNumber(this.prevOperand), " ").concat(this.operation);
      } else {
        this.prevOpText.innerText = '';
      }
    }
  }]);

  return Calculator;
}();
/* take input from the calculator buttons */


var numBtns = document.querySelectorAll('[data-num]');
var opBtns = document.querySelectorAll('[data-op');
var equalsBtn = document.querySelector('[data-equals]');
var delBtn = document.querySelector('[data-del]');
var allClear = document.querySelector('[data-all-clear]');
var prevOpText = document.querySelector('[data-prev-op]');
var currOpText = document.querySelector('[data-curr-op]');
var calculator = new Calculator(prevOpText, currOpText);
numBtns.forEach(function (button) {
  button.addEventListener('click', function () {
    calculator.appendNumber(button.innerText);
    calculator.refresh();
  });
});
opBtns.forEach(function (button) {
  button.addEventListener('click', function () {
    calculator.chooseOperation(button.innerText);
    calculator.refresh();
  });
});
equalsBtn.addEventListener('click', function (button) {
  calculator.calculate();
  calculator.refresh();
});
allClear.addEventListener('click', function (button) {
  calculator.clear();
  calculator.refresh();
});
delBtn.addEventListener('click', function (button) {
  calculator["delete"]();
  calculator.refresh();
});
document.addEventListener('keydown', function (event) {
  var patternForNumbers = /[0-9]/g;
  var patternForOperators = /[+\-*\/]/g;

  if (event.key.match(patternForNumbers)) {
    event.preventDefault();
    calculator.appendNumber(event.key);
    calculator.refresh();
  }

  if (event.key === '.') {
    event.preventDefault();
    calculator.appendNumber(event.key);
    calculator.refresh();
  }

  if (event.key.match(patternForOperators)) {
    event.preventDefault();
    calculator.chooseOperation(event.key);
    calculator.refresh();
  }

  if (event.key === 'Enter' || event.key === '=') {
    event.preventDefault();
    calculator.calculate();
    calculator.refresh();
  }

  if (event.key === "Backspace") {
    event.preventDefault();
    calculator["delete"]();
    calculator.refresh();
  }

  if (event.key == 'Delete') {
    event.preventDefault();
    calculator.clear();
    calculator.refresh();
  }
});
//# sourceMappingURL=calc.dev.js.map
