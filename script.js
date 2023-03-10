//시간을 밀리초단위로 변환
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour*24;

//값을 바꿀 element를 가져오기
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const newyearEl = document.getElementById("newyear");
//두자리수로 formatting
function fillZero(num){
    
    return String(num).padStart(2, "0");
}

//내년 1월 1일까지 남은 시간을 계산하는 함수
function getCountDown(){
    const now = new Date();
    //console.log(now);
    const nowTime = now.getTime();
    //console.log(nowTime);
    const newYear = "01/01/"+(now.getFullYear()+1);
    const newYearTime = new Date(newYear).getTime();
    const distance = newYearTime-nowTime;
    //console.log(Math.floor(distance/day));
    daysEl.innerText = fillZero(Math.floor(distance/day));
    hoursEl.innerText = fillZero(Math.floor((distance%day)/hour));
    minutesEl.innerText = fillZero(Math.floor((distance%hour/minute)));
    secondsEl.innerText = fillZero(Math.floor((distance%minute)/second));
    newyearEl.innerText = now.getFullYear() + 1;
}

setInterval(getCountDown, 1)