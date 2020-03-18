const body =document.querySelector("body");

function loadingCheck(){
    console.log("complete loading the image")
}

function pantingBG(num){
    const image = new Image();
    image.src = `${num}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
    image.addEventListener("loadend",loadingCheck)
}

function randomeNum(){
    return Math.ceil(Math.random()*6);
}

function inIt(){
    const randomNum = randomeNum();
    pantingBG(randomNum);
}

inIt();