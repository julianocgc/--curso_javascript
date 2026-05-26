var idade = 17;
var nome = "João";

if(nome == "João" && idade == 16) {
    console.log("O João pode participar da aula.");
} else {
    console.log("O João não pode participar da aula.")
}

if(1 == 1 && 3 > 2 && true) {
    console.log("Passou");
}

if(1 == 1 && 3 > 5 && true) {
    console.log("Não passou")
} else if(nome === "João" && idade >= 14) {
console.log("Aqui passa!")
}