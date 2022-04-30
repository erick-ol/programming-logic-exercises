// Resolving BEE 1079 exercise
// https://www.beecrowd.com.br/judge/pt/problems/view/1079

const input = `3
6.5 4.3 6.2
5.1 4.2 8.1
8.0 9.0 10.0`;
const lines = input.split('\n');

for (let i = 0; i < lines[0]; i += 1) {
  const [n1, n2, n3] = lines[i + 1].split(' ');
  const average = ((n1 * 2) + (n2 * 3) + (n3 * 5)) / 10;
  console.log(average.toFixed(1));
}
