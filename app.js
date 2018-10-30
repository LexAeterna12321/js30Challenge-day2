const secsArm = document.querySelector(".second-hand");
const minsArm = document.querySelector(".min-hand");
const hoursArm = document.querySelector(".hour-hand");

const timeFlies = ()=>{
    const now = new Date();
 
    secsDegree = (now.getSeconds() / 60 * 360) + 90;
    secsArm.style.transform = `rotate(${secsDegree}deg)`;

    minsDegree = (now.getMinutes() / 60 * 360) + 90;
    minsArm.style.transform = `rotate(${minsDegree}deg)`;
    console.log((now.getHours() / 12 * 360) + 90);
    hoursDegree = (now.getHours()  / 12 * 360) + 90;
    hoursArm.style.transform = `rotate(${hoursDegree}deg)`;

    secsDegree == 90 ? secsArm.style.transition = "0s" : secsArm.style.transition = "all 0.4s cubic-bezier(0.78, 0.63, 0, 1.58) 0s";
    minsDegree == 90 ? minsArm.style.transition = "0s" : minsArm.style.transition = "all 0.4s cubic-bezier(0.78, 0.63, 0, 1.58) 0s";
    hoursDegree == 90 ? hoursArm.style.transition = "0s" : hoursArm.style.transition = "all 0.4s cubic-bezier(0.78, 0.63, 0, 1.58) 0s";
 
}
setInterval(timeFlies,1000);