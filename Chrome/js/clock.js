const clock = document.querySelector("#clock > span");
const apm = document.createElement("span");

function getClock(){
    const date = new Date();
    let h = String(date.getHours()).padStart(2, "0");
    const m = String(date.getMinutes()).padStart(2, "0");
    const s = String(date.getSeconds()).padStart(2, "0");

    if(h > 12){
        h -= 12;
        apm.innerText = "PM";
    }
    else{
        apm.innerText = "AM";
    }
    clock.innerText = `${h}:${m}:${s}`;
    clock.prepend(apm);
}

getClock();
setInterval(getClock, 1000);