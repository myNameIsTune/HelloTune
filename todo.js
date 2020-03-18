const jjssForm = document.querySelector(".jss-formToDos"),
      jsInpunt = jjssForm.querySelector("input"),
      list = document.querySelector(".js-listToDos"),
      toDos_LS = 'toDos';
const toDos =[];

function removeElement(event){
    const target = event.target;
    const li= target.parentElement;
    list.removeChild(li);
   
}

function saveToDos(){
    localStorage.setItem(toDos_LS,JSON.stringify(toDos));
}

function paintingToDos(text){
    const li= document.createElement("li");
    const span = document.createElement("span");
    const xButton = document.createElement("button");
    const checkBox = document.createElement("checklist");
    const newId = toDos.length+1;
    span.innerText = `${text}`;
    xButton.innerText ="X";
    li.id=newId;
    li.appendChild(checkBox);
    li.appendChild(span);
    li.appendChild(xButton);
    list.appendChild(li);
    toDosObj={
        text:text,
        id: newId
    }
    toDos.push(toDosObj);
    saveToDos();
    xButton.addEventListener("click",removeElement);
}

function handleSubmit(event){
    event.preventDefault();
    const currentData = jsInpunt.value;
    paintingToDos(currentData);
    jsInpunt.value ="";
      
}

function loadData(){
    const loadedtoDos = localStorage.getItem(toDos_LS);
    const parsedToDos = JSON.parse(loadedtoDos);
    if(loadedtoDos!==null){
        parsedToDos.forEach(function(toDo){
            paintingToDos(toDo.text)
        }
        );
    }
    
}

function inIt(){
loadData();
jjssForm.addEventListener("submit",handleSubmit);

}

inIt()