const clockChrome = document.querySelector(".js-clock"),
      clockTime = clockChrome.querySelector(".clockTime");
const day = document.querySelector(".js-date"),
      daymonth = day.querySelector(".date");


function showTime()
{
  const consoleTime = new Date();
  const hour = consoleTime.getHours();
  const minutes = consoleTime.getMinutes();
  const seconds = consoleTime.getSeconds();

  clockTime.innerText=`${hour < 10 ? `0${hour}`: hour} : ${minutes<10 ? `0${minutes}`:minutes} : ${seconds<10 ? `0${seconds}`:seconds}`
}

function showDates(){
  const consoleTime = new Date();
  const date = consoleTime.getDate();
  const month = consoleTime.getMonth();
  daymonth.innerText=`${month}.${date}`;
}


function inIt(){
  showDates();
  showTime();
  setInterval(showTime,1000);
}

inIt();
