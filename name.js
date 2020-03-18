const form = document.querySelector("form");
const input = form.querySelector("input");
const userInLS = "currentUser"; 
const greeting = document.querySelector(".js-greeting")
const SHOW_CN = "showingUp"
const innerGreeting = document.querySelector(".greet")

function saveName(text){
    localStorage.setItem(userInLS,text)
}
function greetingfcn(text){
    greeting.classList.add(SHOW_CN);
    form.classList.remove(SHOW_CN);
    greetingSaying = `Hello~~!! ${text}!`;
    console.log(greetingSaying)
    innerGreeting.innerText=`${greetingSaying}`
    innerGreeting.classList.add(SHOW_CN);
}

function handleSubmit(event){
    event.preventDefault();
    const currentName = input.value;
    saveName(currentName);
    greetingfcn(currentName);
    input.value = "";
}

function askName(){
    form.classList.add(SHOW_CN);
    greeting.classList.remove(SHOW_CN);
    form.addEventListener("submit",handleSubmit);
}

function loadName(){
    const userName = localStorage.getItem(userInLS);
    if (userName==null){
        askName();
    }
    else{
        
        greetingfcn(userName);
    }

}


function inIt(){
    loadName();

}

inIt();