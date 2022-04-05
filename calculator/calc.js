/* Calculator project for Project Odin */

class Calculator {
  constructor(prevOpText, currOpText) {
    this.prevOpText = prevOpText
    this.currOpText = currOpText
    this.clear()
  }
  /* reset the calculator text display */
  clear() {
    this.currOperand = ''
    this.prevOperand = ''
    this.operation = undefined
  }
  /* delete last operand entered */
  delete() {
    this.currOperand = this.currOperand.toString().slice(0, -1)
  }
  /* add number to calculation */
  appendNumber(number) {
    if (number === '.' && this.currOperand.includes('.')) return
    this.currOperand = this.currOperand.toString() + number.toString()
  }
  /* choose an operator for calculation */
  chooseOperation(operation) {
    if (this.currOperand === '') return
    if (this.prevOperand !== '') {
      this.calculate()
    }
    this.operation = operation
    this.prevOperand = this.currOperand
    this.currOperand = ''
  }
  /* run the calculation of currently entered numbers and operations */
  calculate() {
    let calculation
    const prev = parseFloat(this.prevOperand)
    const current = parseFloat(this.currOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        calculation = prev + current
        break
      case '-':
        calculation = prev - current
        break
      case '*':
        calculation = prev * current
        break
      case '÷':
        calculation = prev / current
        break
      default:
        return
    }
    this.currOperand = calculation
    this.operation = undefined
    this.prevOperand = ''
  }
  /* format numbers to display correctly */
  getNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }
  /* ensure the calculator screen text is updated */
  refresh() {
    this.currOpText.innerText =
      this.getNumber(this.currOperand)
    if (this.operation != null) {
      this.prevOpText.innerText =
        `${this.getNumber(this.prevOperand)} ${this.operation}`
    } else {
      this.prevOpText.innerText = ''
    }
  }
}

/* take input from the calculator buttons */
const numBtns = document.querySelectorAll('[data-num]')
const opBtns = document.querySelectorAll('[data-op')
const equalsBtn = document.querySelector('[data-equals]')
const delBtn = document.querySelector('[data-del]')
const allClear = document.querySelector('[data-all-clear]')
const prevOpText = document.querySelector('[data-prev-op]')
const currOpText = document.querySelector('[data-curr-op]')

const calculator = new Calculator(prevOpText, currOpText)

numBtns.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.refresh()
  })
})

opBtns.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.refresh()
  })
})

equalsBtn.addEventListener('click', button => {
  calculator.calculate()
  calculator.refresh()
})

allClear.addEventListener('click', button => {
  calculator.clear()
  calculator.refresh()
})

delBtn.addEventListener('click', button => {
  calculator.delete()
  calculator.refresh()
})

document.addEventListener('keydown', function (event) {
  let patternForNumbers = /[0-9]/g;
  let patternForOperators = /[+\-*\/]/g
  if (event.key.match(patternForNumbers)) {
    event.preventDefault();
    calculator.appendNumber(event.key)
    calculator.refresh()
  }
  if (event.key === '.') {
    event.preventDefault();
    calculator.appendNumber(event.key)
    calculator.refresh()
  }
  if (event.key.match(patternForOperators)) {
    event.preventDefault();
    calculator.chooseOperation(event.key)
    calculator.refresh()
  }
  if (event.key === 'Enter' || event.key === '=') {
    event.preventDefault();
    calculator.calculate()
    calculator.refresh()
  }
  if (event.key === "Backspace") {
    event.preventDefault();
    calculator.delete()
    calculator.refresh()
  }
  if (event.key == 'Delete') {
    event.preventDefault();
    calculator.clear()
    calculator.refresh()
  }

});