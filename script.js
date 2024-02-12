const noBtn = document.querySelector('.no-button');

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