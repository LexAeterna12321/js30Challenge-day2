const secsArm = document.querySelector(".second-hand");
const minsArm = document.querySelector(".min-hand");
const hoursArm = document.querySelector(".hour-hand");

const timeFlies = ()=>{
    const now = new Date();

    secsDegree = (now.getSeconds() / 60 * 360)+ 90;
    secsArm.style.transform = `rotate(${secsDegree}deg)`;

    minsDegree = (now.getMinutes() / 60 * 360)+ 90;
    minsArm.style.transform = `rotate(${minsDegree}deg)`;

    hoursDegree = (now.getHours() / 60 / 12 * 360)+ 90;
    hoursArm.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(timeFlies,1000);