import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

function getFormData() {
  const delay = parseInt(document.querySelector('[name="delay"]').value);
  const state = document.querySelector('[name="state"]:checked').value;
  return { delay, state };
}

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else if (state === 'rejected') {
        reject(delay);
      }
    }, delay);
  });
}

function handleFulfilled(delay) {
  iziToast.success({
    title: 'Fulfilled promise',
    message: `✅ Fulfilled promise in ${delay}ms`
  });
}

function handleRejected(delay) {
  iziToast.error({
    title: 'Rejected promise',
    message: `❌ Rejected promise in ${delay}ms`
  });
}

function handleSubmit(event) {
  event.preventDefault(); 
  const { delay, state } = getFormData();
  const promise = createPromise(delay, state);
  promise.then(handleFulfilled).catch(handleRejected);
}

document.querySelector('.form').addEventListener('submit', handleSubmit);
