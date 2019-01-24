const button1 = document.getElementById("next")
const replaceInput= document.getElementById("replace");
const containerTwobuttons = document.getElementById("containerButtons");
button1.addEventListener("click",nextPageAndName);
function nextPageAndName(){
 document.getElementById("name").innerHTML = ` ${replaceInput.value}  , bienvenidx a la trivia `;
   button1.classList.add("hidden");
   replaceInput.classList.add("hidden");
   document.getElementById("firstText").innerHTML = `Elige una tematica `;
   containerTwobuttons.classList.remove("hidden");
}




