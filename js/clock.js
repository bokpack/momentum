const clock = document.querySelector("h2#clock")

// interval : 매번 일어나야하는 무언가 예 : 매 2초마다 

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText=`${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock,1000)

// setInterval(sayHello, 5000)
// 5초마다 보요줌

// setTimeout(sayHello, 5000)
// // 계속 다시 실행

// 길이가 2가 되지 않는다면 0을 추가한다
//"1".padStart(2,"0") // 01출력
// padEnd도 있음