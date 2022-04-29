// Resolving BEE 1323 exercise
// https://www.beecrowd.com.br/judge/pt/problems/view/1323

const input = `2
1
8
0`;
const lines = input.split('\n');

for (let i = 0; i < lines.length; i += 1) {
  if (+lines[i] !== 0)  {
    let value = 0;
    for(let j = 1; j <= lines[i]; j++){
      value +=  j * j;
    }
    console.log(value);
  }
}
