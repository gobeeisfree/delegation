


const data = [
  {
    "id": 1,
    "src": "visual1.jpg",
    "alt": "모던한 테이블과 화분의 조화를 표현한 공간"
  },
  {
    "id": 2,
    "src": "visual2.jpg",
    "alt": "강렬한 의자의 색상과 따뜻한 느낌의 공간"
  },
  {
    "id": 3,
    "src": "visual3.jpg",
    "alt": "호텔 라운지 느낌의 편안한 의자가 있는 공간"
  },
  {
    "id": 4,
    "src": "visual4.jpg",
    "alt": "물방을 모양의 독특한 디자인의 의자들을 나열한 공간"
  }
]


// 1. navigation을 선택 후 이벤트 위임을 걸어주세요.
// 2. target은 li요소가 잘 나와야 합니다.



const navigation = getNode('.navigation');
// const list = getNodes('.navigation li');
const visualImage = getNode('.visual img');

// querySelectorAll
// elementNode.children

function handleSlider(e){
  e.preventDefault();
  
  const target = e.target.closest('li');
  const anchor = e.target.closest('a');
  
  if(!target || !anchor) return;

  
  const list = [...navigation.children];
  const index = attr(target,'data-index');


  list.forEach(li => removeClass(li,'is-active'));


  addClass(target,'is-active')

  attr(visualImage,'src',`./assets/part01/${data[index -1].src}`)
  attr(visualImage,'alt',data[index -1].alt)

  // visualImage.setAttribute('src',`./assets/part01/${data[index -1].src}`);
  // visualImage.setAttribute('alt',data[index -1].alt);

}



navigation.addEventListener('click',handleSlider);






// 선택한 대상의 data-index값을 가져와주세요.


// 비주얼 안에 있는 이미지를 가져온다. 
// 이미지의 src 속성에 접근한다.
// src의 값을 index로 바꾼다.
// alt 값을 변경한다.



// 화살표 함수 쓰세요 ! 


















