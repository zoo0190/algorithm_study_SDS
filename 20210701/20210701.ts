const paragraph = 'Bob hit a ball, the hit BALL flew far after it was hit.';
const banned = ['hit'];

type ObjType = {
  [index: string]: object;
};

function answer(paragraph: string, banned: string[]): string {
  const regexp = paragraph.toLowerCase().replace(/[\,\.]/g, '');
  const toArr = regexp.split(' ');
  const countObj = toArr.reduce((acc, crr): object => {
    acc[crr] = ++acc[crr] || 1;
    return acc;
  }, {});
  const result = Object.entries(countObj)
    .sort((a, b) => b[1] - a[1])
    .filter(item => {
      return item[0] !== banned[0];
    });
  return result[0][0];
}

console.log(answer(paragraph, banned));
