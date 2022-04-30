// Resolving BEE 1117 exercise
// https://www.beecrowd.com.br/judge/pt/problems/view/1117

const input = `-3.5
3.5
11.0
10.0`;
const lines = input.split('\n');

let noteQuant = 0;
let average = 0;
for (let i = 0; i < lines.length; i += 1) {
  if (+lines[i] < 0 || +lines[i] > 10) console.log('nota invalida');
  else {
    noteQuant += 1;
    average += +lines[i];
  }

  if (noteQuant === 2) console.log(`media = ${(average / 2).toFixed(2)}`);
}
