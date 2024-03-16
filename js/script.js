const navbar = document.getElementById('navbar');
const toggleImage = document.getElementById('point');
const pointf = document.getElementById('point1');
const pointh = document.getElementById('point2');

toggleImage.addEventListener('click', () => {
    if (navbar.style.display === 'none') {
        navbar.style.display = 'block';
    } else {
        navbar.style.display = 'none';
    }
});
const text = document.querySelector('.text');

window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const distanceFromTop = scrollY / windowHeight;

    if (distanceFromTop > 0.7) {
        text.classList.add('show');
    }
});
const textone = document.querySelector('.text1');

window.addEventListener('scroll', function () {
    const scrollY1 = window.scrollY;
    const windowHeight1 = window.innerHeight;
    const distanceFromTop1 = scrollY1 / windowHeight1;

    if (distanceFromTop1 > 0.9) {
        textone.classList.add('show1');
    }
});
const texttwo = document.querySelector('.text2');

window.addEventListener('scroll', function () {
    const scrollY2 = window.scrollY;
    const windowHeight2 = window.innerHeight;
    const distanceFromTop2 = scrollY2 / windowHeight2;

    if (distanceFromTop2 > 1.1) {
        texttwo.classList.add('show2');
    }
});
const textthree = document.querySelector('.text3');
window.addEventListener('scroll', function () {
    const scrollY3 = window.scrollY;
    const windowHeight3 = window.innerHeight;
    const distanceFromTop3 = scrollY3 / windowHeight3;

    if (distanceFromTop3 > 1.3) {
        textthree.classList.add('show3');
    }
});
const textfour = document.querySelector('.text4');
window.addEventListener('scroll', function () {
    const scrollY4 = window.scrollY;
    const windowHeight4 = window.innerHeight;
    const distanceFromTop4 = scrollY4 / windowHeight4;

    if (distanceFromTop4 > 1.5) {
        textfour.classList.add('show4');
    }
});
const textfive = document.querySelector('.text5');
window.addEventListener('scroll', function () {
    const scrollY5 = window.scrollY;
    const windowHeight5 = window.innerHeight;
    const distanceFromTop5 = scrollY5 / windowHeight5;

    if (distanceFromTop5 > 3.0) {
        textfive.classList.add('show5');
    }
});
const however1 = document.querySelector('.however');
window.addEventListener('scroll', function () {
    const scrollY6 = window.scrollY;
    const windowHeight6 = window.innerHeight;
    const distanceFromTop6 = scrollY6 / windowHeight6;

    if (distanceFromTop6 > 3.2) {
        however1.classList.add('show6');
    }
});
const textseven = document.querySelector('.text6');
window.addEventListener('scroll', function () {
    const scrollY7 = window.scrollY;
    const windowHeight7 = window.innerHeight;
    const distanceFromTop7 = scrollY7 / windowHeight7;

    if (distanceFromTop7 > 3.4) {
        textseven.classList.add('show7');
    }
});
const picture222 = document.querySelector('.picture2');
window.addEventListener('scroll', function () {
    const scrollY8 = window.scrollY;
    const windowHeight8 = window.innerHeight;
    const distanceFromTop8 = scrollY8 / windowHeight8;

    if (distanceFromTop8 > 2.6) {
        picture222.classList.add('show8');
    }
    else {
        picture222.classList.remove('show8');
    }
});
const picture444 = document.querySelector('.picture4');
window.addEventListener('scroll', function () {
    const scrollY9 = window.scrollY;
    const windowHeight9 = window.innerHeight;
    const distanceFromTop9 = scrollY9 / windowHeight9;

    if (distanceFromTop9 > 2.2) {
        picture444.classList.add('show9');
    }
    else {
        picture444.classList.remove('show9');
    }
});
const picture333 = document.querySelector('.picture3');
window.addEventListener('scroll', function () {
    const scrollY10 = window.scrollY;
    const windowHeight10 = window.innerHeight;
    const distanceFromTop10 = scrollY10 / windowHeight10;

    if (distanceFromTop10 > 2.4) {
        picture333.classList.add('show10');
    }
    else {
        picture333.classList.remove('show10');
    }
});
const numberDisplay = document.getElementById('one');
let currentNumber = 999840;
const targetNumber = 1000000;
const increment = 5;
const duration = 200;

function updateNumber() {
    if (currentNumber < targetNumber) {
        currentNumber += increment;
        numberDisplay.textContent = currentNumber;
        setTimeout(updateNumber, duration);
    }
}

updateNumber();
window.onload = function () {
    setTimeout(function () {
        var circle1 = document.getElementById("circle");
        circle1.style.animation = "move-up 1.05s forwards";
    }, 3000);
};
document.addEventListener("DOMContentLoaded", function () {
    var parents = document.querySelectorAll('li');

    parents.forEach(function (ss) {
        ss.addEventListener('click', function () {
            this.classList.toggle('open');
        });
    });
});