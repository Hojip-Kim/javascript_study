const quizs = {
  quiz: [
    { title: '1 + 2 = ?', example: [3, 5, 7], answer: 3 },
    { title: '3 + 5 = ?', example: [8, 12, 3], answer: 8 },
    { title: '2 * 6 = ?', example: [7, 3, 12], answer: 12 },
  ],
};

const titleNode = document.querySelector('.title');
const exampleNode = document.querySelector('.example');
const answerNode = document.querySelector('.answer-box');
const countNode = document.querySelector('.count');

let cnt = 1;

renderQuiz = (quiz) => {
  const quizTitle = quiz.title;
  const quizExample = quiz.example;
  const quizAnswer = quiz.answer;

  titleNode.textContent = '';
  titleNode.textContent = quizTitle;
  countNode.textContent = `${cnt}/${quizs.quiz.length}`;

  exampleNode.textContent = '';
  quizExample.map((element) => createExampleList(element, quizAnswer));
};

createExampleList = (example, answer) => {
  const listNode = document.createElement('p');
  listNode.textContent = example;
  exampleNode.appendChild(listNode);

  listNode.addEventListener('click', () => {
    console.log(cnt);
    if (answer === parseInt(listNode.textContent)) {
      answerNode.textContent = '';
      //   answerNode.textContent = '맞았습니다';
      if (cnt === quizs.quiz.length) {
        alert('퀴즈가 종료되었습니다');
        const refreshButton = document.createElement('button');
        refreshButton.textContent = '다시하기';
        refreshButton.addEventListener('click', () => {
          location.reload();
        });

        answerNode.appendChild(refreshButton);
      } else {
        cnt += 1;
        alert('맞았습니다');
        renderQuiz(quizs.quiz[cnt - 1]);
      }
    } else {
      if (cnt === quizs.quiz.length) {
        alert('퀴즈가 종료되었습니다');
      } else {
        answerNode.textContent = '';
        alert('틀렸습니다');
      }
    }
  });
  listNode.textContent = example;
  exampleNode.appendChild(listNode);
};

renderQuiz(quizs.quiz[cnt - 1]);
