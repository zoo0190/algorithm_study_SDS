// 1
const test = 'A man, a plan, a canal: Panama';

const answer = (s: string): boolean => {
  let lowerCase = s.toLowerCase();
  lowerCase = lowerCase.replace(/[^a-z0-9]/g, '');
  let value = lowerCase.split('');

  return value.join() === value.reverse().join() ? true : false;
};
const result = answer(test);
console.log(result);

// 2
const test2 = ['h', 'e', 'l', 'o', 'o'];

const answer2 = (s: string[]): string[] => {
  let first = 0;
  let last = s.length - 1;
  while (first < last) {
    let temp = '';
    temp = s[first];
    s.splice(first, 1, s[last]);
    s.splice(last, 1, temp);

    first++;
    last--;
  }
  return s;
};

console.log(answer2(test2));
