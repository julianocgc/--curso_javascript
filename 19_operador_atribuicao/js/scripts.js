var x = 1;
var y = 2;

// soma
console.log(x = x + y); // x vale 3
console.log(x += y); // x vale 5

// subtração
console.log(x -= y); // x vale 3

// multiplicação
console.log(x *= y); // x vale 6

// divisão
console.log(x /= y); // x vale 3

console.log(x++); // x vale 3
console.log(x--); // x vale 4

while(x <= 100) {
    console.log(x);
    x *= 2;
}

console.log(x);

while(x > 0) {
    console.log(x);
    x -= 5;
}