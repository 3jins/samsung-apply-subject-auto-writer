const raw = '2013\t1\t지교\t물리학및실험1\tfalse\t3\tA\n' +
  '2013\t겨울계절\t핵교\t음악의이해\tfalse\t3\tB+\n' +
  '2014\t2\t전선\t알고리즘\tfalse\t3\tB+\n' +
  '2017\t1\t전필\t자료구조\ttrue\t3\tA\n' +
  '2018\t1\t전선\t소프트웨어검증\tfalse\t3\tA+\n' +
  '2018\t1\t전선\t컴퓨터네트워크\tfalse\t3\tA\n' +
  '2019\t1\t심교\t한국행정의이해\tfalse\t2\tA+';

const keyList = ['year', 'semester', 'type', 'title', 'retake', 'points', 'score'];
const result = raw
  .split('\n')
  .map(subject => subject
    .split('\t')
    .reduce((subjectObj, item, idx) => {
      const key = keyList[idx];
      if (key === 'type') {
        if (['전필', '전선'].includes(item)) {
          subjectObj[key] = 'A';
        } else {
          subjectObj[key] = 'C';
        }
      } else if (key === 'retake') {
        subjectObj[key] = item === 'true';
      } else {
        subjectObj[key] = item;
      }
      return subjectObj;
    }, {}));

console.log(result);
