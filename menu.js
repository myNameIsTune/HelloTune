const dailyMenuArray =document.querySelectorAll(".daily_menu"),
      menuName=document.querySelector(".daily_menu_name"),
      menuIngredients=document.querySelector(".daily__menu_ingredients");


function handleClick(event){
    const target = event.path;
    console.log(target);
    target.forEach(function(div){
        if(div.className==="daily_menu"){
            console.dir(div);
            div.firstElementChild.classList.toggle("daily_menu_folding")
            div.lastElementChild.classList.toggle("daily_menu_folding")
        }
    });
}
    
    


function inItn(){
    dailyMenuArray.forEach(
        function(menu)
        {
        menu.addEventListener("click",handleClick)
        }
    )
}
inItn()