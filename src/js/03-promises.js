import Notiflix from 'notiflix';

const formEl = document.querySelector(".form");

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  }) 
}

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  let firstDelay = Number(formEl.elements.delay.value);
  let stepDelay = Number(formEl.elements.step.value);
  let amount = formEl.elements.amount.value;

  for (let i = 1; i <= amount; i += 1) {

    createPromise(i, firstDelay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    firstDelay += stepDelay;
    }
}


