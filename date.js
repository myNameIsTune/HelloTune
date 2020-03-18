const currentdate = document.querySelector(".js-date");

function paintingDate(date,month,year){
currentdate.innerText=`${year}-${month+1}-${date}`;

}

function getConsoleDate(){
    const consoleDate = new Date();
    const date = consoleDate.getDate();
    const month = consoleDate.getMonth();
    const year = consoleDate.getFullYear();
    paintingDate(date,month,year);
  
}

function inIt(){
getConsoleDate()

}

inIt()