/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navClose = document.getElementById('nav-close'),
      navToggle = document.getElementById('nav-toggle')
// Menu Show
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
// Menu Hide
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')
function linkAction() {
    navMenu.classList.remove('show-menu')
}
navLink.forEach(eachLink => eachLink.addEventListener('click', linkAction))
/*=============== CHANGE BACKGROUND HEADER ===============*/
const header = document.getElementById('header')
function scrollHeaderAction() {
    // When the scroll amount is bigger the 50 viewport height then add the scroll-header class in the header tag
    if(this.scrollY >= 50) {
        header.classList.add('scroll-header')
    }else {
        header.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeaderAction)
/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper('.popular__container', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 24,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },1024: {
            spaceBetween: 46,
        }
    }
})

/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatured = mixitup('.featured__content', {
    selectors: {
        target: '.featured__card'
    },
    animation: {
        duration: 300
    }
})
/* Link active featured */ 
const  featuredButton = document.querySelectorAll('.featured__item')
function activeFeaturedButton() {
    featuredButton.forEach((previousButton) => {
        previousButton.classList.remove('active-featured')
    })
    this.classList.add('active-featured')
}
featuredButton.forEach((currentButton)=> {
    currentButton.addEventListener('click', activeFeaturedButton)
})

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')
    // when the viewport height is more than 350 add the show-scroll class 
    if(this.scrollY >= 350) {
        scrollUp.classList.add('show-scroll')
    }else {
        // when the viewport height is less than 350 remove the show-scroll class
        scrollUp.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              scrolledTo = document.querySelector(`.nav__menu a[href*= ${sectionId}]`)
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            scrolledTo.classList.add('active-link')
        }else{
            scrolledTo.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

// Home
sr.reveal('.home__title')
sr.reveal('.home__subtitle', {delay: 500})
sr.reveal('.home__elec', {delay: 600})
sr.reveal('.home__img', {delay: 800})
sr.reveal('.home__car-data', {delay: 900, interval: 100, origin: 'bottom'})
sr.reveal('.home__button', {delay: 1000, origin: 'bottom'})
// About
sr.reveal('.about__group', {origin: 'left'})
sr.reveal('.about__data', {origin: 'right'})
// Popular
sr.reveal('.popular__container')
// Features
sr.reveal('.features__img')
sr.reveal('.features__map', {origin: 'bottom',delay: 600})
sr.reveal('.features__card', {interval: 300})
// Featured
sr.reveal('.featured__filters')
sr.reveal('.featured__card', {interval: 100})
// Offer
sr.reveal('.offer__data', {origin: 'left'})
sr.reveal('.offer__img', {origin: 'right'})
// Logos
sr.reveal('.logos__content', {interval: 100})
// Footer
sr.reveal('.footer__content', {interval: 100})
sr.reveal('.footer__copy', {origin: 'bottom'})