// 4
const paragraph = 'Bob hit a ball, the hit BALL flew far after it was hit.';
const banned = ['hit'];

function answer4(paragraph: string, banned: string[]): string {
  const regexp: string = paragraph.toLowerCase().replace(/[\,\.]/g, '');
  const toArr: string[] = regexp.split(' ');

  // 타입스크립트에서는 reduce 메써드 쓰기 위해서 꼭 초기값 설정 해줘야함.. 왜...? index 값이 string이 들어갈지 number이 들어갈지 모름...
  let init: { [index: string]: number } = {};

  const countObj = toArr.reduce((acc, crr) => {
    acc[crr] = ++acc[crr] || 1;
    return acc;
  }, init);

  const result = Object.entries(countObj).sort((a, b) => b[1] - a[1]);

  return result[0][0] === banned[0] ? result[1][0] : result[0][0];
}

console.log(answer4(paragraph, banned));

// 5
const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
function groupAnagrams(value: string[]): any {
  let init: { [index: string]: Array<string> } = {};
  value.map(item => {
    const sortValue = [...item].sort().join('');
    // 순서 주의
    if (init[sortValue]) init[sortValue].push(item);
    if (!init[sortValue]) init[sortValue] = [item];
  });
  return Object.values(init);
}

console.log(groupAnagrams(strs));
