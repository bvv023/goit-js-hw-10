import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

document.addEventListener('DOMContentLoaded', function() {
  const now = new Date();

  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: now,
    minuteIncrement: 1,
    onClose(selectedDates) {
      const selectedDate = selectedDates[0];

      if (selectedDate.getTime() <= now.getTime()) {
        iziToast.error({
          title: 'Error',
          message: 'Please choose a date in the future',
        });

        document.querySelector('[data-start]').disabled = true;
      } else {
        document.querySelector('[data-start]').disabled = false;
      }
    },
  };

  const flatpickrInstance = flatpickr("#datetime-picker", options);

  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }

  function updateTimer(endDate) {
    const remainingTime = endDate - new Date();

    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      document.querySelector('[data-start]').disabled = false;
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(remainingTime);

    document.querySelector('[data-days]').textContent = addLeadingZero(days);
    document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
    document.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
    document.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);
  }

  let timerInterval;

  document.querySelector('[data-start]').addEventListener('click', function() {
    const selectedDate = flatpickrInstance.selectedDates[0];

    this.disabled = true;

    timerInterval = setInterval(function() {
      updateTimer(selectedDate);
    }, 1000);

    
    updateTimer(selectedDate);
  });
});
