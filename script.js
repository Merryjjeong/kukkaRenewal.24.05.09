console.clear();

AOS.init();

// 헤더 nav
function HeaderMenuSlide__init() {
  $(".header-menu > ul > li").mouseenter(function () {
    $(this).find("ul").stop().slideDown(400);
  });
  $(".header-menu > ul > li").mouseleave(function () {
    $(this).find("ul").stop().slideUp(400);
  });
}

HeaderMenuSlide__init();

// nav 스크롤시 이미지 변경
$(window).scroll(function () {
  const scrollPosition = $(window).scrollTop();
  if (scrollPosition > 0) {
    $(".logo-img-2, .logo-img-1").addClass("active");
  } else {
    $(".logo-img-2, .logo-img-1").removeClass("active");
  }
});

// 스크롤 시 로고 이미지 회전
window.onscroll = function () {
  scrollRotate();
};

// 스크롤 시 로고 이미지 회전
window.onscroll = function () {
  scrollRotate();
};

function scrollRotate() {
  let logoImg = document.getElementById("logo");
  logo.style.transform = "rotate(" + window.pageYOffset / 5 + "deg)";
}

// 메인 브랜드 스와이퍼 - PC
const MainBrandBgPcSlider = new Swiper(".main-brand-pc .swiper", {
  loop: true, // 슬라이드 바녹 여부
  slidesPerView: 1, // 한 페이지에 보여질 슬라이드 개수
  spaceBetween: 0,
  speed: 1500, //슬라이드 전환속도
  effect: "fade-left",
  fadeEffect: {
    crossFade: true,
  },
  direction: "horizontal",
  autoplay: {
    //슬라이드 자동재생
    delay: 4000,
  },
});

// 메인 브랜드 스와이퍼 - MB
const MainBrandMbBgSlider = new Swiper(".main-brand-mb .swiper", {
  loop: true, // 슬라이드 바녹 여부
  spaceBetween: 0,
  speed: 1500, //슬라이드 전환속도
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    //슬라이드 자동재생
    delay: 4000,
  },
});

// 메인 마켓 탭메뉴
$(document).ready(function () {
  $(".market-tabs li").click(function () {
    var tab_id = $(this).attr("data-tab");

    $(".market-tabs li").removeClass("current");
    $(".tab-content").removeClass("current");

    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });
});

// 메인마켓 스와이퍼
const MainMarketSlider = new Swiper(".main-market-wrap .tab-content .swiper", {
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 5000,
  loop: true,
  loopAdditionalSlides: 1,
  slidesPerView: 2.5,
  spaceBetween: 20,
  breakpoints: {
    1180: {
      slidesPerView: 4.5,
    },

    768: {
      slidesPerView: 3.5,
    },
  },
});

// 모바일 시 사이드 바 구현
function MobileTopBar__init() {
  $("#side-menu-btn").click(function () {
    MobileSideBar__show();
  });

  $(".side-menu-content, #close-btn").click(function () {
    MobileSideBar__hide();
  });

  $(".side-menu-content").click(function (e) {
    e.stopPropagation();
    // return false;
  });
}

MobileTopBar__init();

// 모바일 사이드바 노출
function MobileSideBar__show() {
  $(".side-menu-wrap-mb").addClass("active");
  $("html").addClass(".side-menu-wrap-mb-actived");
}

// 모바일 사이드바 숨김
function MobileSideBar__hide() {
  $(".side-menu-wrap-mb").removeClass("active");
  $("html").removeClass(".side-menu-wrap-mb-actived");
  MobileMenuBox1__hide();
}

// 사이드바
function MobileMenuBox1__init() {
  $(".side-menu-list > ul ul").slideUp();

  $(".side-menu-list ul > li").click(function () {
    // console.log("실행");
    let $this = $(this);
    let has = $this.hasClass("active");

    $this.siblings(".active").find(" > ul").slideUp(300);

    $this.siblings(".active").find(".active").removeClass("active");

    // 클릭 당한 녀석의 형제 active 클래스가 붙어 있는 형제
    $this.siblings(".active").removeClass("active");

    if (has) {
      $this.find(" > ul").stop().slideUp(500);
      $this.find(".active").removeClass("active"); // 기존에 열어둔 메뉴를 다시 정리해줌
      $this.removeClass("active");
    } else {
      $this.find(" > ul").stop().slideDown(500);
      $this.addClass("active");
    }

    $(".side-menu-list ul").click(function (e) {
      return false;
    });
  });
}

function MobileMenuBox1__hide() {
  $("side-menu-list .active").removeClass("active");
}

MobileMenuBox1__init();
