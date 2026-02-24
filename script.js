const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

function setClock(){
    const now = new Date();

    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hr = now.getHours();

    const secDeg = sec * 6;        // 360 / 60
    const minDeg = min * 6;        // 360 / 60
    const hrDeg = hr * 30;         // 360 / 12

    second.style.transform = `translateX(-50%) rotate(${secDeg}deg)`;
    minute.style.transform = `translateX(-50%) rotate(${minDeg}deg)`;
    hour.style.transform = `translateX(-50%) rotate(${hrDeg}deg)`;
}

setInterval(setClock, 1000);
setClock();