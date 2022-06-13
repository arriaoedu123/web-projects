/* 
# Creator: Arreaum
# GitHub: https://github.com/arriaoedu123/
# Creation date: 29/03/2021
# Update date: 18/08/2021
# Version: 1.2
*/

//display manipulation function
class Calculator {
	constructor(previousNumber, actualNumber) {
		this.previousNumber = previousNumber
		this.actualNumber = actualNumber
		this.clear()
	}

//display clear button script
clear() {
	this.actualText = ''
	this.previousText = ''
	this.operation = undefined
}

//delete button script
delete() {
	this.actualText = this.actualText.toString().slice(0, -1)
}

numberKey(number) {
	if (number === '.' && this.actualText.includes('.')) return
		this.actualText = this.actualText.toString() + number.toString()
}

//operation buttons script
operationKey(operation) {
	if (this.actualText === '') return
		if (this.previousText !== '') {
			this.calculate()
		}
		this.operation = operation
		this.previousText = this.actualText
		this.actualText = ''
	}

//function to calculate the operation
calculate() {
	let calculation
	const previous = parseFloat(this.previousText)
	const actual = parseFloat(this.actualText)
	if (isNaN(previous) || isNaN(actual)) return
		switch (this.operation) {
			case '+':
			calculation = previous + actual
			break
			case '-':
			calculation = previous - actual
			break
			case '*':
			calculation = previous * actual
			break
			case '/':
			calculation = previous / actual
			break
			default:
			return
		}
		this.actualText = calculation
		this.operation = undefined
		this.previousText = ''
	}

//limit one dot for the operations
checkDot(number) {
	const stringNumber = number.toString()
	const integerDigits = parseFloat(stringNumber.split('.')[0])
	const decimalDigits = stringNumber.split('.')[1]
	let integerDisplay
	if (isNaN(integerDigits)) {
		integerDisplay = ''
	} else {
		integerDisplay = integerDigits.toLocaleString('en', {
			maximumFractionDigits: 0})
	}
	if (decimalDigits != null) {
		return `${integerDisplay}.${decimalDigits}`
	} else {
		return integerDisplay
	}
}

//function to refresh display when any button is clicked
refreshDisplay() {
	this.actualNumber.innerText = 
	this.checkDot(this.actualText)
	if (this.operation != null) {
		this.previousNumber.innerText = 
		`${this.checkDot(this.previousText)} ${this.operation}`
	} else {
		this.previousNumber.innerText = ''
	}
}
}

const numberBtn = document.querySelectorAll('[btn-number]')
const operationBtn = document.querySelectorAll('[btn-operation]')
const equalBtn = document.querySelector('[btn-equal]')
const deleteBtn = document.querySelector('[btn-delete]')
const clearBtn = document.querySelector('[btn-clear]')
const previousNumber = document.querySelector('[previous-number]')
const actualNumber = document.querySelector('[actual-number]')

const calculator = new Calculator(previousNumber, actualNumber)

//numeric keys event
numberBtn.forEach(button => {
	button.addEventListener('click', () => {
		calculator.numberKey(button.innerText)
		calculator.refreshDisplay()
	})
})

//operations keys event
operationBtn.forEach(button => {
	button.addEventListener('click', () => {
		calculator.operationKey(button.innerText)
		calculator.refreshDisplay()
	})
})

//equal key event
equalBtn.addEventListener('click', button => {
	calculator.calculate()
	calculator.refreshDisplay()
})

//clear display key event
clearBtn.addEventListener('click', button => {
	calculator.clear()
	calculator.refreshDisplay()
})

//delete key event
deleteBtn.addEventListener('click', button => {
	calculator.delete()
	calculator.refreshDisplay()
})

