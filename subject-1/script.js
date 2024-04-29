const data = {
  hamburger: [
    {
      img: 'https://d3af5evjz6cdzs.cloudfront.net/images/uploads/800x0/hamburger_7fc7027f97ceb265ec92b41177d215fd1709173118.jpg',
      title: '햄버거',
      content:
        '100% 순 쇠고기 패티에 상큼한 피클과 양파, 기본에 충실한 맥도날드 햄버거.',
      price: 4800,
    },
    {
      img: 'https://d3af5evjz6cdzs.cloudfront.net/images/uploads/800x0/cheeseburger_03074fb9705045bb2b77f6374406804c1709173180.jpg',
      title: '치즈버거',
      content:
        '고소하고 부드러운 치즈와 100% 순 쇠고기 패티, 맥도날드만의 심플한 클래식 치즈버거.',
      price: 5100,
    },
    {
      img: 'https://d3af5evjz6cdzs.cloudfront.net/images/uploads/800x0/double-cheeseburger_9bf4c71eb84baf9addf29ef927d547e51709173239.jpg',
      title: '더블 치즈버거',
      content:
        '고소하고 부드러운 치즈와 100% 순 쇠고기 패티가 두개 맥도날드만의 더블 치즈버거!!',
      price: 7000,
    },
  ],
  fries: [
    {
      img: 'https://d3af5evjz6cdzs.cloudfront.net/images/uploads/800x0/french-fries_eced7c573f1c8306dcbfe5cd000e0f6f1709175350.jpg',
      title: '후렌치 후라이',
      content:
        '통으로 썰어낸 감자를 맥도날드만의 노하우로 튀겨낸 남다른 맛과 바삭함! 맥도날드의 역사가 담긴 월드 클래스 후렌치 후라이',
      price: 3500,
    },
    {
      img: 'https://d3af5evjz6cdzs.cloudfront.net/images/uploads/800x0/golden-mozzarella-cheese-sticks_3cd90be25480b6c8fae70072d93af37d1709175416.jpg',
      title: '골든 모짜렐라 치즈스틱',
      content:
        '속이 꽉 찬 황금빛 바삭함! 자연 모짜렐라 치즈로 빈틈 없이 고소한 맥도날드 치즈스틱을 2조각과 4조각으로 다양하게 즐겨보세요!',
      price: 4800,
    },
    {
      img: 'https://d3af5evjz6cdzs.cloudfront.net/images/uploads/800x0/mcnuggets_97f56eac3df59bd5669a2fa7a1c7ae771709175486.jpg',
      title: '맥너겟',
      content:
        '바삭하고 촉촉한 치킨이 한 입에 쏙! 다양한 소스로 입맛에 맞게 즐겨보세요!',
      price: 4900,
    },
  ],
  juices: [
    {
      img: 'https://d3af5evjz6cdzs.cloudfront.net/images/uploads/800x0/coca_23ca083f1d9cf06e0387ae006ae2134b1709176046.jpg',
      title: '콜라',
      content: '코카-콜라',
      price: 3400,
    },
    {
      img: 'https://d3af5evjz6cdzs.cloudfront.net/images/uploads/800x0/fanta_8efa322e5ea92b08969b5f7eb45de75f1709176318.jpg',
      title: '환타',
      content: '환타',
      price: 3400,
    },
  ],
};

const btn = document.querySelector('.buttonLists');

const container = document.createElement('div');

const makeTable = (type, img, title, content, price) => {
  const menu = document.createElement('div'); // container generate
  const containerImg = document.createElement('img'); // img generate
  const containerTitle = document.createElement('h3'); // title generate
  const containerContent = document.createElement('div');
  const containerPrice = document.createElement('p');
  menu.className = type;
  containerImg.height = 150;
  containerImg.src = img;
  containerImg.alt = title;
  containerTitle.innerText = title;
  containerContent.innerText = content;
  containerPrice.innerText = `가격 : ${price}원`;
  menu.appendChild(containerImg);
  menu.appendChild(containerTitle);
  menu.appendChild(containerContent);
  menu.appendChild(containerPrice);

  return menu;
};

const content = document.querySelector('.content');

btn.addEventListener('click', (e) => {
  if (e.target.classList.contains('buttons')) {
    const target = e.target.id;

    content.innerHTML = '';

    if (target === 'all') {
      Object.keys(data).map((type) => {
        data[type].map((item) => {
          content.appendChild(
            makeTable(target, item.img, item.title, item.content, item.price)
          );
        });
      });
    } else {
      data[target].map((data) => {
        content.appendChild(
          makeTable(target, data.img, data.title, data.content, data.price)
        );
      });
    }
  }
});
