import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector("#datetime-picker");
const btnStart = document.querySelector("[data-start]");
const daysEl = document.querySelector("[data-days]");
const hoursEl = document.querySelector("[data-hours]");
const minutesEl = document.querySelector("[data-minutes]");
const secondsEl = document.querySelector("[data-seconds]");
const timerEl = document.querySelector(".timer");
const fieldEl = document.querySelectorAll(".field");

let chosenDate = null;
let intervalId = null;

btnStart.setAttribute("disabled", "disabled");
timerEl.style.display = "flex";
timerEl.style.marginTop = "10px";
fieldEl.forEach(el => el.style.marginRight = "10px");
fieldEl.forEach(el => el.style.fontSize = "17px");
fieldEl.forEach(el => el.style.color = "blue");

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        chosenDate = selectedDates[0];
        if (selectedDates[0] < options.defaultDate) {
            return alert("Please choose a date in the future")
        }

        btnStart.removeAttribute("disabled");
        btnStart.style.cursor = "pointer"
        btnStart.style.backgroundColor = "blue";
        btnStart.style.color = "white";
        btnStart.style.fontSize = "15px";
    },
};

flatpickr(input, options);

btnStart.addEventListener('click', onBtnStartClick); 

function onBtnStartClick() {
    btnStart.setAttribute("disabled", "disabled");
    input.setAttribute("disabled", "disabled");
    intervalId = setInterval(() => {
        const delta = chosenDate - Date.now();
        daysEl.textContent = convertMs(delta).days;
        hoursEl.textContent = convertMs(delta).hours;
        minutesEl.textContent = convertMs(delta).minutes;
        secondsEl.textContent = convertMs(delta).seconds;
        stopTimer();
    }, 1000);
     
}

function stopTimer() {
    if (daysEl.textContent === "00" &&
        hoursEl.textContent === "00" &&
        minutesEl.textContent === "00" &&
        secondsEl.textContent === "00") {
            clearInterval(intervalId);
        }  
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

