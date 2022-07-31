function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector("button[data-start]");
const btnStop = document.querySelector("button[data-stop]");
const bodyEl = document.querySelector("body");

let intervalId = null;

btnStart.addEventListener("click", onBtnStartClick);
btnStop.addEventListener("click", onBtnStopClick);

function onBtnStartClick() {
    intervalId =  setInterval(() => {
        bodyEl.style.backgroundColor = getRandomHexColor();
    }, 1000);
    btnStart.setAttribute("disabled", "disabled");
    btnStop.removeAttribute("disabled");
}

function onBtnStopClick() {
    clearInterval(intervalId);
    btnStop.setAttribute("disabled", "disabled");
    btnStart.removeAttribute("disabled");
}