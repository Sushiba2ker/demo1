(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  const dayMonth = "10/02/";
  let birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + (yyyy + 1);
  }

  const countdownElement = document.getElementById("countdown");
  const headlineElement = document.getElementById("headline");
  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  const countDownInterval = setInterval(function () {
    const now = new Date().getTime();
    const distance = new Date(birthday).getTime() - now;

    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);

    daysElement.innerText = days;
    hoursElement.innerText = hours;
    minutesElement.innerText = minutes;
    secondsElement.innerText = seconds;

    if (distance < 0) {
      headlineElement.innerText = "Love you ♥️";
      countdownElement.style.display = "none";
      clearInterval(countDownInterval);
      animateText();
    }
  }, 1000);

  function animateText() {
    const animationClass = "animate__animated animate__heartBeat";
    const text = headlineElement.innerText;

    // Wrap the text with a span element and add animation class
    headlineElement.innerHTML = `<span class="${animationClass}">${text}</span>`;
  }
})();