const imgBiscoito = document.querySelector(".imgBiscoito")
const biscoito1 = document.querySelector(".biscoito1")
const biscoito2 = document.querySelector(".biscoito2")
const fraseBiscoito = document.querySelector("#fraseBiscoito")
let fraseRandom = (Math.random() * 10.0).toFixed(0)


let listMsg = [
    'A vida trará coisas boas se tiver paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.',
    'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
    'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
    'A juventude não é uma época da vida, é um estado de espírito.',
    'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
    'Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.'
]

function chengeScreen(){
    biscoito1.classList.toggle("hide")
    biscoito2.classList.toggle("hide")

    fraseBiscoito.innerHTML = listMsg[fraseRandom]
    fraseRandom = (Math.random() * 10.0).toFixed(0)
}



imgBiscoito.addEventListener('click', chengeScreen)
openAnotherBiscoito.addEventListener('click', chengeScreen)