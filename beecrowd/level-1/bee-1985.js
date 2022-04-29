// Resolving BEE 1985 exercise
// https://www.beecrowd.com.br/judge/pt/problems/view/1985

const input = `5
1001 500
1005 300
1003 23
1002 52
1004 44`;
var lines = input.split('\n');

let total = 0;

for (let i = 0; i < lines[0]; i += 1) {
  const [code, quant] = lines[i+1].split(" ");
  const value = +code.split('')[3] + 0.5;
  total += value * quant;
}

console.log(total.toFixed(2));
