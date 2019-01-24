const btnTrue1= document.getElementById("true1");
const btnTrue2= document.getElementById("true2");
const btnTrue3= document.getElementById("true3");
const btnfalse12= document.getElementById("false12");
const btnfalse11= document.getElementById("true11");
const btnfalse22= document.getElementById("false22");
const btnfalse21= document.getElementById("true21");
const btnfalse32= document.getElementById("false32");
const btnfalse31= document.getElementById("true31");


const btnVerifyFinal = document.getElementById("verifyBtn");
//btnVerifyFinal.addEventListener("click",verifyAll);


allBtnClass = document.getElementsByClassName("btnRuT");
const answerfinal1= document.getElementById("textAswer1"); 
const answerfinal2= document.getElementById("textAswer2"); 
const answerfinal3= document.getElementById("textAswer3"); 

const valueFalse1 = btnfalse11.value


//contador empeza en 0

switch (allBtnClass.value) {
    case allBtnClass.value == valueFalse1 : 
    btnfalse11.addEventListener("click",saveValue1False);
    function saveValue1False(){
    answerfinal1.innerHTML = `respuestaIncorrecta`;
    btnfalse12.classList.add("wrong");
    // contDOR +0
    } 
      break;
    case  allBtnClass.value = falseTwo : 
    btnfalse21.addEventListener("click",saveValue2False);
    function saveValue2False(){
    answerfinal1.innerHTML = `respuestaIncorrecta`;
    btnfalse12.classList.add("wrong");
    } 
      break; 
    case  allBtnClass.value = true1 :
    btnTrue1.addEventListener("click",saveValue1True);
    function saveValue1True(){
    answerfinal1.innerHTML = `respuestaCorrecta`;
    btnTrue1.classList.add("good");
    } 
    break; 
   
    default: 
    answerfinal1.innerHTML = `marca una respuesta`;

  }



btnTrue2.addEventListener("click",saveValue2True);
function saveValue2True(){
answerfinal2.innerHTML = `respuestaCorrecta`;
}



btnTrue3.addEventListener("click",saveValue3True);
function saveValue3True(){
answerfinal3.innerHTML = `respuestaCorrecta`;
}


