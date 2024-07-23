let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");






setInterval(()=>{
let time = new Date()
let secondTime =time.getSeconds();
let minutesTime =time.getMinutes();
let hourTime=time.getHours();

let secondRotate = 6* secondTime;
let minutesRotate = 6*minutesTime;
let hourRotate= 30*hourTime+minutesTime/2


    second.style.transform = `rotate(${secondRotate}deg)`;
    minute.style.transform = `rotate(${minutesRotate}deg)`;
    hour.style.transform = `rotate(${hourRotate}deg)`;

},1000)
