// length

var arr = [1, 2, 3, 4, 5];

console.log(arr.length);

// push = adicionar elemento ao array
arr.push(6);
arr.push('Qualquer coisa');
console.log(arr);

// pop = remover elemento do array
arr.pop();
console.log(arr);

// unshift = adicionar elemento ao inicio do array
arr.unshift(0);
arr.unshift('teste');
console.log(arr);

// shift = remover elemento do inicio do array
arr.shift();
console.log(arr);

// acessar o último elemento
console.log(arr[arr.length - 1]);

// isArray
console.log(Array.isArray(5));
console.log(Array.isArray(arr));