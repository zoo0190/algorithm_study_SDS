const paragraph = 'Bob hit a ball, the hit BALL flew far after it was hit.';
const banned = ['hit'];

function answer(paragraph: string, banned: string[]) {
  const regexp = paragraph.toLowerCase().replace(/[\,\.]/g, '');
  const toArr = regexp.split(' ');
  const countObj = toArr.reduce((acc, crr) => {
    acc[crr] = ++acc[crr] || 1;
    return acc;
  }, {});
  console.log(Object.entries(countObj));
}

answer(paragraph, banned);
