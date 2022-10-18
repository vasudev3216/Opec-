

//slider

const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');
const slides = document.querySelectorAll('.slide');
const maxSlide = slides.length - 1;
slides.forEach((s, i) => s.style.transform = `translateX(${60 * i}em)`)

let curSlide = 0;
btnRight.addEventListener('click', function () {
    if (curSlide === maxSlide) {
        curSlide = 0;
    }
    else {
        curSlide++;
    }
    slides.forEach((s, i) => s.style.transform = `translateX(${60 * (i - curSlide)}em)`);
    console.log('hii');
})

btnLeft.addEventListener('click', function () {
    if (curSlide === 0) {
        curSlide = maxSlide;
    }
    else {
        curSlide--;
    }
    slides.forEach((s, i) => s.style.transform = `translateX(${60 * (i - curSlide)}em)`);
})



//testinomial slider

const btnRights = document.querySelector('.slider__btns--right');
const btnLefts = document.querySelector('.slider__btns--left');
const slidess = document.querySelectorAll('.client_slide');

slidess.forEach((s, i) => s.style.transform = `translateX(${65 * i}em)`)

const maxxSlide = slidess.length - 1;
slidess.forEach((s, i) => s.style.transform = `translateX(${65 * i}em)`)

let currSlide = 0;
btnRights.addEventListener('click', function () {
    if (currSlide === maxxSlide) {
        currSlide = 0;
    }
    else {
        currSlide++;
    }
    slidess.forEach((s, i) => s.style.transform = `translateX(${65 * (i - currSlide)}em)`);
    console.log('hii');
})

btnLefts.addEventListener('click', function () {
    if (currSlide === 0) {
        currSlide = maxxSlide;
    }
    else {
        currSlide--;
    }
    slidess.forEach((s, i) => s.style.transform = `translateX(${65 * (i - currSlide)}em)`);
})


//MENUBAR

const shownavbar = document.querySelector('.menubar');
const navi = document.querySelector('.nav_links');
const btnnav = document.querySelector('.btn_contact');
const btnClose = document.querySelector('.closebar');

shownavbar.addEventListener('click', function () {
    console.log('hi');
    navi.classList.remove('shownav');
    btnnav.classList.remove('shownav');

})

btnClose.addEventListener('click', function () {
    navi.classList.add('shownav');
    btnnav.classList.add('shownav');
})

//FORM

const formName = document.getElementById('fname');
const formEmail = document.getElementById('email');
const formPhone = document.getElementById('phone');
const form = document.querySelector('.form_designing');
const formMessage = document.getElementById('message');
const error = document.querySelector('.error')
const formSubmit = document.querySelector('.form_btn');
const success = document.querySelector('.success')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let messages = [];
    if (formName.value === '' || formName.value === null) {
        messages.push('Name is required');
        error.innerText = messages.join(',')
    }
    else if (formPhone.value.length < 5) {
        messages.push('Enter Valid Phone Number');
        error.innerText = messages.join(',');
    }
    else if (formEmail.value.length < 5) {
        messages.push('Enter Valid Email')
        error.innerText = messages.join(',');
    }
    else if (formMessage.value.length < 10) {
        messages.push('Message should be more then 10 words');
        error.innerText = messages.join(',');

    }
    else {
        messages.push('form submitted successfully');
        success.innerText = messages.join(',');
    }

    formName.value = '';
    formEmail.value = '';
    formPhone.value = '';
    formMessage.value = '';
    setTimeout(function () {
        success.innerText = '';
        error.innerText = '';
    }, 5000)

})