// variáveis globais podem ser usadas em qualquer parte do código
// variáveis locais só podem ser usadas dentro de suas funções

var x = 1; // escopo global

var y = 3; // escopo global

console.log(x, y);

function teste() {

    var z = 0; // escopo local

    console.log(z);

    console.log(x); // variável global

}

teste();

// console.log(z); // variável local

function testando() {

    var z = 5;
    console.log(z);
}

testando();

if(true) {

    var p = 1;

}

console.log(p);