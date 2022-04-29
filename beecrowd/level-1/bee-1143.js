// Resolving BEE 1143 exercise
// https://www.beecrowd.com.br/judge/pt/problems/view/1143

const input = '5';

for (let i = 1; i <= +input; i += 1) {
  console.log(`${i} ${Math.pow(i, 2)} ${Math.pow(i, 3)}`);
}
