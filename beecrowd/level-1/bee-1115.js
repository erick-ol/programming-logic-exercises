// Resolving BEE 1115 exercise
// https://www.beecrowd.com.br/judge/pt/problems/view/1115

const input = `2 2
3 -2
-8 -1
-7 1
0 2`;
const lines = input.split('\n');

for (let i = 0; i < lines.length; i += 1) {
  const [n1, n2] = lines[i].split(' ');

  // first quadrant
  if (+n1 > 0 && +n2 > 0) console.log('primeiro');

  // second quadrant
  if (+n1 < 0 && +n2 > 0) console.log('segundo');

  // third quadrant
  if (+n1 < 0 && +n2 < 0) console.log('terceiro');

  // fourth quadrant
  if (+n1 > 0 && +n2 < 0) console.log('quarto');
}
