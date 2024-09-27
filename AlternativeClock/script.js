const timeDisplay = document.getElementById('time-display');

function generateDateTimeString(format = 'MMddyyHHmmss') {
  const now = new Date();
  let dateTimeString = '';

  switch (format) {
    case 'MMddyyHHmmss':
      dateTimeString = `${padZero(now.getMonth() + 1)}${padZero(now.getDate())}${now.getFullYear().toString().substr(2, 2)}${padZero(now.getHours())}${padZero(now.getMinutes())}${padZero(now.getSeconds())}`;
      break;
    default:
      dateTimeString = `${padZero(now.getMonth() + 1)}${padZero(now.getDate())}${now.getFullYear().toString().substr(2, 2)}${padZero(now.getHours())}${padZero(now.getMinutes())}${padZero(now.getSeconds())}`;
  }

  return dateTimeString;
}

function padZero(num) {
  return (num < 10 ? '0' : '') + num;
}

function convertLettersToNumbers(letters) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let numbers = '';
  for (let i = 0; i < letters.length; i++) {
    const index = alphabet.indexOf(letters[i].toUpperCase());
    numbers += padZero(index + 1);
  }
  return numbers;
}

const urlParams = new URLSearchParams(window.location.search);
const prefixFromUrl = urlParams.get('prefix');

function updateDateTime() {
  const dateTimeString = generateDateTimeString();
  const prefix = prefixFromUrl ? convertLettersToNumbers(prefixFromUrl) : '';
  const finalString = `${prefix}${dateTimeString}`;
  timeDisplay.innerText = finalString;
}

setInterval(updateDateTime, 1000); // update every 1 second
