const playerScore = document.querySelector('#player');
const computerScore = document.querySelector('#computer');
const leftCount = document.querySelector('#count-num');
const result = document.querySelector('.result');
const subContainer = document.querySelector('.sub-container');
const content = document.createElement('p');

const results = ['컴퓨터 승리', '플레이어 승리', '무승부'];

let gameResult = '';

cnt = 10;

leftCount.textContent = cnt;

const btn = document.querySelector('.buttonLists');

const refreshButton = document.createElement('button');
refreshButton.setAttribute('class', 'refresh');
refreshButton.textContent = '다시 하기';

btn.addEventListener('click', (e) => {
  //   console.log(e.target.classList);
  if (e.target.classList.contains('buttons')) {
    if (cnt > 0) {
      result.innerHTML = '';
      const randomIdx = Math.floor(Math.random() * results.length);
      content.textContent = results[randomIdx];
      giveByStringResults(results[randomIdx]);
      result.appendChild(content);
      cnt--;
      leftCount.textContent = cnt;
    } else {
      let player = parseInt(playerScore.textContent);
      console.log(player);
      let computer = parseInt(computerScore.textContent);
      console.log(computer);
      if (player > computer) {
        gameResult = '게임에서 이겼습니다.';
      } else if (player < computer) {
        gameResult = '게임에서 졌습니다.';
      } else {
        gameResult = '무승부';
      }
      document.querySelector('.sub-container').innerHTML = '게임 종료';
      const node = document.createElement('div');
      node.setAttribute('class', 'game-result');
      node.textContent = gameResult;
      subContainer.appendChild(node);
      subContainer.appendChild(refreshButton);
    }
  }
});

refreshButton.addEventListener('click', () => {
  location.reload();
});

giveByStringResults = (content) => {
  if (content === results[0]) {
    computerScore.textContent = parseInt(computerScore.textContent) + 1;
  }
  if (content === results[1]) {
    playerScore.textContent = parseInt(playerScore.textContent) + 1;
  }
};
