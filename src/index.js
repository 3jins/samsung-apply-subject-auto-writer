/* 사용법
 *
 * 1. 이수교과목 입력 페이지에서 과정이랑 전공명을 먼저 선택해주세요. 얘들은 코드로 조작이 안됩니다.
 * 2. subjectList 변수를 형식에 맞게 채워주세요.
 *  2-1. 엑셀파일이 있다면 subjectConverter.js를 활용하시면 좀 더 편리합니다.
 *  2-2. 학교마다 조금씩 형식 다른 건 알아서 코드 수정해서 쓰세요. ^^
 * 3. 전체 코드를 복사해서 이수교과목 입력 페이지의 개발자도구 - 콘솔에 붙여넣으면 끝.
 */

const subjectList = [
  {
    year: '2013',
    semester: '1',
    type: 'C',
    title: '물리학및실험1',
    retake: false,
    points: '3',
    score: 'A'
  },
  {
    year: '2013',
    semester: '겨울계절',
    type: 'C',
    title: '음악의이해',
    retake: false,
    points: '3',
    score: 'B+'
  },
  {
    year: '2014',
    semester: '2',
    type: 'A',
    title: '알고리즘',
    retake: false,
    points: '3',
    score: 'B+'
  },
  {
    year: '2014',
    semester: '2',
    type: 'A',
    title: '컴퓨터응용및실습2',
    retake: false,
    points: '3',
    score: 'C+'
  },
  {
    year: '2014',
    semester: '2',
    type: 'C',
    title: '창의적문제해결',
    retake: false,
    points: '3',
    score: 'A+'
  },
  {
    year: '2014',
    semester: '2',
    type: 'C',
    title: '건학정신과대학생활',
    retake: false,
    points: '1',
    score: 'PASS'
  },
  {
    year: '2014',
    semester: '2',
    type: 'C',
    title: '서울의역사와문화',
    retake: false,
    points: '2',
    score: 'A+'
  },
  {
    year: '2017',
    semester: '1',
    type: 'A',
    title: '자료구조',
    retake: true,
    points: '3',
    score: 'A'
  },
  {
    year: '2018',
    semester: '1',
    type: 'A',
    title: '소프트웨어검증',
    retake: false,
    points: '3',
    score: 'A+'
  },
  {
    year: '2018',
    semester: '1',
    type: 'A',
    title: '컴퓨터네트워크',
    retake: false,
    points: '3',
    score: 'A'
  },
  {
    year: '2019',
    semester: '1',
    type: 'C',
    title: '한국행정의이해',
    retake: false,
    points: '2',
    score: 'A+'
  },
];

subjectList.forEach(subject => {
  const {
    year, semester, type, retake, title, points, score,
  } = subject;

  document.getElementsByName('tmp_regyr')[0].value = year;
  document.getElementsByName('tmp_semst')[0].value = semester; // 1, 2, 3, 여름계절, 겨울계절
  document.getElementsByName('tmp_majtypecd')[0].value = type; // 'A'가 전공, 'C'가 교양기타
  document.getElementsByName('tmp_retakeyn')[0].value = retake ? 'Y' : 'N';
  document.getElementById('tmp_majcurrinm').value = title;
  document.getElementsByName('tmp_obtpt')[0].value = points; // 1 ~ 10, 0
  document.getElementsByName('tmp_obtpov')[0].value = score; // A+, A, B+, ..., PASS, FAIL

  // 추가
  doAction('mySheet', 'AddMajdet');
});
