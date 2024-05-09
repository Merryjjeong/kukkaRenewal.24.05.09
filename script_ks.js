console.clear();

AOS.init();

// 메인 브랜드 스와이퍼
const MainBrandSlider = new Swiper(".main-brand-wrap .swiper", {
  loop: true, // 슬라이드 바녹 여부
  slidesPerView: 1, // 한 페이지에 보여질 슬라이드 개수
  speed: 2000, //슬라이드 전환속도
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    //슬라이드 자동재생
    delay: 4000,
  },
});

// 메인 사용법 스와이퍼
const MainHowToUseSlider = new Swiper(".main-how_to_use-wrap .swiper", {
  loop: true, // 슬라이드 바녹 여부
  slidesPerView: 1, // 한 페이지에 보여질 슬라이드 개수
  speed: 2000, //슬라이드 전환속도
  effect: "fade-left",
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    //슬라이드 자동재생
    delay: 4000,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

// 메인 풀페이지
var isFullPageInitialized = false;

function fullpageActivete() {
  if (!isFullPageInitialized) {
    $("#fullpage").fullpage({
      scrollingSpeed: 1000,
      anchors: ["section-1", "section-2", "section-3", "section-4"],
    });
    isFullPageInitialized = true;
  }
}

fullpageActivete();

$(window).resize(function () {
  if ($(this).width() < 1180 && isFullPageInitialized) {
    $.fn.fullpage.destroy("all");
    isFullPageInitialized = false;
  } else if ($(this).width() >= 1180 && !isFullPageInitialized) {
    fullpageActivete();
  }
});

$(window).trigger("resize");
