let hour = "hour-count";
let min  = "min-count";
let sec  = "sec-count";
let milisec = "milisec-count";

function getId(data) {
    return document.getElementById(data);
}

let hourInput = getId(hour);
let minInput = getId(min);
let secInput = getId(sec);
let miliSecInput = getId(milisec);

let circleInput1 = document.getElementById('counter1');
let circleInput2 = document.getElementById('counter2');
let circleInput3 = document.getElementById('counter3');
let circleInput4 = document.getElementById('counter4');

let hourCount = 0;
let minCount = 0;
let secCount = 0;
let miliSecCount = 0;

let interval;

function counter() {
    miliSecCount++;
    miliSecInput.innerHTML = miliSecCount;
    if(miliSecCount == 100) {
        secCount++;
        secInput.innerHTML = secCount;
        miliSecCount = 0;
    } else if(secCount == 60) {
        minCount++;
        minInput.innerHTML = minCount;
        secCount = 0;
    } else if(minCount == 60) {
        hourCount++;
        hourInput.innerHTML = hourCount;
        minCount = 0;
    }
}

function start(data) {
    circleInput1.style.animationPlayState = "running";
    circleInput2.style.animationPlayState = "running";
    circleInput3.style.animationPlayState = "running";
    circleInput4.style.animationPlayState = "running";
    circleInput1.style.animationDuration = "1s";
    circleInput2.style.animationDuration = "1s";
    circleInput3.style.animationDuration = "1s";
    circleInput4.style.animationDuration = "1s";
    data.disabled = true;
    document.getElementById('stopBtn').disabled = false;
    interval = setInterval(counter, 10);
}

function stop(data) {
    clearInterval(interval);
    data.disabled = true;
    document.getElementById('startBtn').disabled = false;
    circleInput1.style.animationPlayState = "paused";
    circleInput2.style.animationPlayState = "paused";
    circleInput3.style.animationPlayState = "paused";
    circleInput4.style.animationPlayState = "paused";
} 

function reset(){
    document.getElementById('startBtn').disabled = false;
    document.getElementById('stopBtn').disabled = false;
    document.getElementById('resetBtn').disabled = false;
    clearInterval(interval)
    hourCount = 0;
    minCount = 0;
    secCount = 0;
    miliSecCount = 0;
    hourInput.innerHTML = 00;
    minInput.innerHTML = 00;
    secInput.innerHTML = 00;
    miliSecInput.innerHTML = 00;
}

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });