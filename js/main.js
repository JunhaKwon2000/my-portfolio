// ScrollMagic 사용
const spyEls = document.querySelectorAll('section.scroll-spy');

const controller = new ScrollMagic.Controller();
spyEls.forEach(spyEl => {
  new ScrollMagic.Scene({
    // 감시할 장면 추가 및 옵션 지정
    triggerElement: spyEl, // 이놈을 감시
    triggerHook: 0.5, // 화면의 50% 지점에서 보여짐 여부를 감시(0 ~ 1)
  })
  .setClassToggle(spyEl, 'show') // 클래스를 넣어줘!
  .addTo(controller); // 컨트롤러에 장면을 할당해줘!(필수) - 라이브러리에서 지정한 문법으로 깊게 이해 X
})

// Swiper 사용
const swiper = new Swiper('.project .swiper', {
  // 슬라이드 옵션 지정
  direction: 'horizontal', // 수평 슬라이드(default)
  // direction: 'vertical' // 수직 슬라이드
  loop: true, // 반복 재생 여부, 1 -> 2 -> 3 다시 1 ...
  autoplay: { // 자동 재생 여부
    delay: 3000 // 5초마다 슬라이드가 바뀜(autoplay: true = 3000 (3초))
  },

  // 페이지네이션 옵션
  pagination: {
    el: '.project .swiper-pagination',
    clickable: true // 사용자의 페이지네이션 요소 제어 가능 여부
  },

  // 이전/다음 슬라이드 버튼 옵션
  navigation: {
    nextEl: '.project .swiper-button-next',
    prevEl: '.project .swiper-button-prev',
  },
});

// 모달창 띄우기
const modalBtn = document.querySelector('.project .btn-modal');
const modalEl = document.querySelector('#modal');
const modalContentEl = document.querySelector('#modal .modal-content');
const closeEl = document.querySelector('.btn-close');

modalBtn.addEventListener('click', () => {
  modalEl.style.display = 'flex';
  modalContentEl.style.zIndex = 9999;
})

closeEl.addEventListener('click', () => {
  modalEl.style.display = 'none';
})

modalEl.addEventListener('click', () => {
  modalEl.style.display = 'none';
})





const imageModalBtn = document.querySelectorAll('.project .btn-modal-image');
const imageModalEl = document.querySelector('#image-modal');
const closeImageEl = document.querySelector('#image-modal .btn-close');
const modalImage = document.querySelector('#image-modal img');

imageModalBtn.forEach((imgModalBtns, idx) => {
  imgModalBtns.addEventListener('click', () => {
    imageModalEl.style.display = 'flex';
    let activeImage = document.querySelector(`.project .inner div:nth-of-type(${idx+1}) .swiper-slide-active img`);
    modalImage.setAttribute('src', activeImage.getAttribute('src'));
  })
})

closeImageEl.addEventListener('click', () => {
  imageModalEl.style.display = 'none';
})


// imgModalBtns.dataset.imageSrc

// 추가로 더 해볼 만한 것!
// 모달 바깥 영역 클릭 시 닫기
// ESC 키로 닫기 - keydown, keypress 이벤트 사용해야댐
// fade 애니메이션 넣기

// -------------------------------------------------- ESC
document.onkeydown = function (evt) {
  if (evt.key === 'Escape') {
      modalEl.style.display = 'none';
      imageModalEl.style.display = 'none';
  }
};
// --------------------------------------------------


// 현재 year 표시
// 날짜 정보를 가진 JS의 Date 객체를 활용
// console.log(new Date());
const nowYear = new Date();
// console.log(nowYear.getFullYear());
const copyrightEl = document.querySelector('.this-year');
copyrightEl.textContent = nowYear.getFullYear();
// copyrightEl.innerText = nowYear.getFullYear();


// 페이지 최산단으로 이동
const up = document.querySelector('#to-top');

// 페이지에 스크롤 이벤트 감지를 추가!
// window: 브라우저 창 객체
window.addEventListener('scroll', () => {
  // console.log(window.scrollY);
  // 페이지 스크롤 위치가 500px 을 넘으면 요소를 보이고, 500px을 넘지 않으면 요소 숨기기!
  if (window.scrollY > 500) {
    up.style.opacity = '1';
    up.style.transform = 'translateX(0)';
  }
  else {
    up.style.opacity = '0';
    up.style.transform = 'translateX(100px)';
  }
})