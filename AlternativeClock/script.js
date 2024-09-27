const timeDisplay = document.getElementById('time-display');

function getDateTime() {
  const now = new Date();
  const mm = now.getMonth() + 1; // getMonth() returns 0-11, so add 1
  const dd = now.getDate();
  const yy = now.getFullYear().toString().substr(2, 2); // get last 2 digits of year
  const hh = now.getHours();
  const mn = now.getMinutes();
  const ss = now.getSeconds();

  let dateTimeString = `${mm}${dd}${yy}${hh}${mn}${ss}`;

  // Get URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const prefix = urlParams.get('prefix');

  if (prefix) {
    const prefixMap = {
      'A': '01', 'B': '02', 'C': '03', 'D': '04', 'E': '05', 'F': '06',
      'G': '07', 'H': '08', 'I': '09', 'J': '10', 'K': '11', 'L': '12',
      'M': '13', 'N': '14', 'O': '15', 'P': '16', 'Q': '17', 'R': '18',
      'S': '19', 'T': '20', 'U': '21', 'V': '22', 'W': '23', 'X': '24',
      'Y': '25', 'Z': '26'
    };
    dateTimeString = prefixMap[prefix.toUpperCase()] + dateTimeString;
  }

  timeDisplay.innerText = dateTimeString;
}

setInterval(getDateTime, 1000); // update every 1 second
