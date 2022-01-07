
//Atividade online 2

let dataAtual = new Date()
let dataEvento = new Date('2022-01-01') //ano - mês - dia

if (dataEvento > dataAtual) {
    console.log("Evento permitido")
} else {
    console.log("ALERTA : cadastro não será permitido por data inválida!")
}

let IdadeParticipante = 25

if (IdadeParticipante >= 18) {
    console.log("Cadastro do particante permitido")
} else {
    console.log("ALERTA : cadastro não é permitido pela idade!")
}

numeroParticipantes = 90

if (numeroParticipantes < 100) {
    console.log("Cadastro permitido")
} else {
    console.log("ALERTA : cadastro não será permitido por ter excedido o limite")
}

participantesEvento = ["Pedro", "Ana", "Felipe", "Paulo", "Isabela"]
palestrantesEvento = ["Bruno", "Arthur"]

console.log("Participantes do evento:")
for (let i = 0; i < participantesEvento.length; i++) {
    console.log(participantesEvento[i])
}
console.log("Palestrantes do evento:")
for (let i = 0; i < palestrantesEvento.length; i++) {
    console.log(palestrantesEvento[i])
}
