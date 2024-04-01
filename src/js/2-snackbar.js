import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.querySelector('.form').addEventListener('submit', function(event) {
  event.preventDefault(); 


  const delay = parseInt(this.querySelector('[name="delay"]').value);
  const state = this.querySelector('[name="state"]:checked').value;

  const promise = new Promise((resolve, reject) => {
    if (state === 'fulfilled') {
      setTimeout(() => {
        resolve(delay);
      }, delay);
    } else if (state === 'rejected') {
      setTimeout(() => {
        reject(delay);
      }, delay);
    }
  });

  promise.then((delay) => {
    iziToast.success({
      title: 'Fulfilled promise',
      message: `✅ Fulfilled promise in ${delay}ms`
    });
  }).catch((delay) => {
    iziToast.error({
      title: 'Rejected promise',
      message: `❌ Rejected promise in ${delay}ms`
    });
  });
});
