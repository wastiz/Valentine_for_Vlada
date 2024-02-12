const noBtn = document.querySelector('.no-button');
const yesBtn = document.querySelector('.yes-button');
const nextBtn = document.querySelector('.next-button');
const firstPart = document.querySelector('.first-part');
const secondPart = document.querySelector('.second-part');
const thirdPart = document.querySelector('.third-part');
const fourhPart = document.querySelector('.fourh-part');
const loveLetter = document.querySelector('.love-letter');



function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}
noBtn.addEventListener('mouseenter', function(e){
    let x = getRandom(-30, 30);
    let y = getRandom(-30, 30);
    e.target.style.cssText = `top: ${y}vh; left: ${x}vh`;
});

noBtn.addEventListener('touchstart', function(e){
    let x = getRandom(-30, 30);
    let y = getRandom(-30, 30);
    e.target.style.cssText = `top: ${y}vh; left: ${x}vh`;
});

yesBtn.addEventListener('click', function(e){
    firstPart.classList.add('hidden');
    secondPart.classList.remove('hidden');
});

nextBtn.addEventListener('click', function(e){
    secondPart.classList.add('hidden');
    thirdPart.classList.remove('hidden');
});

loveLetter.addEventListener('click', function(e){
    thirdPart.classList.add('hidden');
    fourhPart.classList.remove('hidden');
});