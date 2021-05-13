/* 
# Creator: Arreaum
# GitHub: https://github.com/arriaoedu123/
# Creation date: 29/03/2021
# Update date: 30/03/2021
# Version: 1.1
*/

//Função de manipulação do Display
class Calculadora {
	constructor(numeroAnteriorText, numeroAtualText) {
		this.numeroAnteriorText = numeroAnteriorText
		this.numeroAtualText = numeroAtualText
		this.limpar()
	}

//Script do botão de limpar o Display
	limpar() {
		this.numeroAtual = ''
		this.numeroAnterior = ''
		this.operacao = undefined
	}

//Script do botão de deletar
	deletar() {
		this.numeroAtual = this.numeroAtual.toString().slice(0, -1)
	}

	teclaNumero(numero) {
		if (numero === '.' && this.numeroAtual.includes('.')) return
		this.numeroAtual = this.numeroAtual.toString() + numero.toString()
	}

//Script dos botões de operação
	teclaOperacao(operacao) {
		if (this.numeroAtual === '') return
		if (this.numeroAnterior !== '') {
			this.calcular()
		}
		this.operacao = operacao
		this.numeroAnterior = this.numeroAtual
		this.numeroAtual = ''
	}

//Função para calcular a operação
	calcular() {
		let calculo
		const anterior = parseFloat(this.numeroAnterior)
		const atual = parseFloat(this.numeroAtual)
		if (isNaN(anterior) || isNaN(atual)) return
		switch (this.operacao) {
			case '+':
				calculo = anterior + atual
				break
			case '-':
				calculo = anterior - atual
				break
			case '*':
				calculo = anterior * atual
				break
			case '/':
				calculo = anterior / atual
				break
			default:
				return
		}
		this.numeroAtual = calculo
		this.operacao = undefined
		this.numeroAnterior = ''
	}

//Função para checar o '.' nas operações
	checarNumeroDoDisplay(numero) {
		const stringNumber = numero.toString()
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

//Função para atualizar o display toda vez que um botão é clicado
	atualizarDisplay() {
		this.numeroAtualText.innerText = 
		this.checarNumeroDoDisplay(this.numeroAtual)
		if (this.operacao != null) {
			this.numeroAnteriorText.innerText = 
			`${this.checarNumeroDoDisplay(this.numeroAnterior)} ${this.operacao}`
		} else {
			this.numeroAnteriorText.innerText = ''
		}
	}
}

//Const dos botões
const numeroBtn = document.querySelectorAll('[btn-numero]')
const operacaoBtn = document.querySelectorAll('[btn-operacao]')
const igualBtn = document.querySelector('[btn-igual]')
const deletarBtn = document.querySelector('[btn-deletar]')
const limparBtn = document.querySelector('[btn-limpar]')
const numeroAnteriorText = document.querySelector('[numero-anterior]')
const numeroAtualText = document.querySelector('[numero-atual]')

const calculadora = new Calculadora(numeroAnteriorText, numeroAtualText)

//Função dos botões numéricos
numeroBtn.forEach(button => {
	button.addEventListener('click', () => {
		calculadora.teclaNumero(button.innerText)
		calculadora.atualizarDisplay()
	})
})

//Função dos botões de operação
operacaoBtn.forEach(button => {
	button.addEventListener('click', () => {
		calculadora.teclaOperacao(button.innerText)
		calculadora.atualizarDisplay()
	})
})

//Função do botão igual
igualBtn.addEventListener('click', button => {
	calculadora.calcular()
	calculadora.atualizarDisplay()
})

//Função do botão de limpar o display
limparBtn.addEventListener('click', button => {
	calculadora.limpar()
	calculadora.atualizarDisplay()
})

//Função do botão de deletar
deletarBtn.addEventListener('click', button => {
	calculadora.deletar()
	calculadora.atualizarDisplay()
})

