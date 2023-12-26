// slick slider
var swiper = new Swiper(".qqq", {
  slidesPerView: 2,
  spaceBetween: 20,
  sliderPerGroup: 2,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  //   dynamicBullets: true,
  // },
  navigation: {
    nextEl: ".aaa",
    prevEl: ".zzz",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 1,
    },
    958: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    },
  },
});

var swiper1 = new Swiper(".www", {
  slidesPerView: 3,
  spaceBetween: 20,
  sliderPerGroup: 3,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  navigation: {
    nextEl: ".ddd",
    prevEl: ".ccc",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1180: {
      slidesPerView: 3,
    },
  },
});

// navbar
const navbar = document.querySelector('.checkbox');
const menu = document.querySelector('.menu-items');
const itemName = document.querySelectorAll('.item');
const main = document.querySelector('.main')
const footer = document.querySelector('.footer');
let click = 0;
let timer

// navbar click
navbar.onclick = () => {
  menu.classList.toggle('move');
  navbar.classList.toggle('open');
  document.querySelector('.wrapper').classList.toggle('open');
  document.querySelector('.line1').classList.toggle('rotate-one');
  document.querySelector('.line3').classList.toggle('rotate-three');
  document.querySelector('.hamburger-lines').classList.toggle('down');
  navbar.style.display = 'none';
  setTimeout(() => {
    navbar.style.display = "block";
  }, 600);


  if(click == 0) {
    document.querySelector('.hamburger-text').textContent = 'Закрити';
    click++;
  } else {
    document.querySelector('.hamburger-text').textContent = 'Меню';
    click = 0;
  }

  if (!main.classList.contains('unvisible')) {
    timer = setTimeout(() => {
      main.classList.add('unvisible');
      footer.classList.add('unvisible');
    }, 600)
  }
  else {
    timer = setTimeout(() => {
      main.classList.remove('unvisible');
      footer.classList.remove('unvisible');
    }, 0)
    console.log(0);
  }
}

// menu items click
itemName.forEach((item) => {
  item.onclick = () => {
    menu.classList.remove('move');
    navbar.classList.remove('open');
    document.querySelector('.wrapper').classList.remove('open');
    document.querySelector('.line1').classList.remove('rotate-one');
    document.querySelector('.line3').classList.remove('rotate-three');
    main.classList.remove('unvisible');
    footer.classList.remove('unvisible');
    document.querySelector('.hamburger-lines').classList.remove('down');
    document.querySelector('.hamburger-text').textContent = 'Меню';
    click = 0

  }
})

// verify screen width for menu
function checkScreenWidth() {
    var screenWidth = window.innerWidth;
    if (screenWidth > 1179 && menu.classList.contains('move')) {
        menu.classList.remove('move');
        navbar.classList.remove('open');
        document.querySelector('.wrapper').classList.remove('open');
        document.querySelector('.line1').classList.remove('rotate-one');
        document.querySelector('.line3').classList.remove('rotate-three');
        main.classList.remove('unvisible');
        footer.classList.remove('unvisible');
        document.querySelector('.hamburger-lines').classList.remove('down');
        document.querySelector('.hamburger-text').textContent = 'Меню';
        click = 0
    }
}

// resize
window.addEventListener('resize', checkScreenWidth);

// current year
document.getElementById("year").innerHTML = new Date().getFullYear();

// services
function myFunction(element, num) {
  let zero = 0;
  let interval = 0;
  let timer = setInterval(() => {
    element.textContent = zero;
    if(zero === num) {
      clearInterval(timer);
    }
    else {
      zero++;
    }
  }, 5)
}

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        // rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 200 &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// scroll func
function onScroll() {
    var targetBlock = document.getElementById('facts');
    if (isElementInViewport(targetBlock)) {
      const divs = document.querySelectorAll('.num1');
      divs.forEach((elem) => {
        const alt = parseInt(elem.getAttribute('num'), 10);
        myFunction(elem, alt)
      });
      window.removeEventListener('scroll', onScroll);
    } 
}

window.addEventListener('scroll', onScroll);
