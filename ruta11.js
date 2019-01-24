/* let contador = 0;
const correcta1 = document.getElementById("calentamiento");
let allRadio = document.getElementsByTagName("input");
const co2 = document.getElementById("emision");
const co2Value = co2.value;

const pesticidas = document.getElementById("pesticidas");
const pesticidasValue = pesticidas.value;


const answerfinal1= document.getElementById("textAswer1"); 
const answerfinal2= document.getElementById("textAswer2"); 
const answerfinal3= document.getElementById("textAswer3"); 

 */


function conteo() {
    let correctas = 0; let incorrectas= 0;
    /*let inputRadioAll = new Array(document.getElementsByTagName('input'));*/
    var inputRadioAll = new Array();
    var inputRadioAll=document.getElementsByTagName('input');

    // var inputRadioAll=document.getElementsByTagName('input');
    // let inputRadioAllArray=inputRadioAll.push(document.getElementsByTagName('input'));
    let i;
    for (i=0; i<inputRadioAll.length; i++) {
    
    if (inputRadioAll[i].type=='radio'){
     
    if(inputRadioAll[i].checked == true){
    if (inputRadioAll[i].value == '0'){
    incorrectas++;
    }
    if (inputRadioAll[i].value == '1'){
    correctas++;
    }
    }
     
    }
    }
     console.log(inputRadioAll);
    alert(`Tus respuestas correctas son :   ${correctas}  y Tus resuestas incorrectas son : ${incorrectas}`);
     
    }
     

// switch (correcta1.checked) {
//     case correcta1.checked == true : 
//     contador++ ;
//     // contDOR +0
    
//       break;
//     case  allRadio.value == co2Value : 
//       contador + 0;
     
//       break; 
//     case  allRadio.value == pesticidasValue :
//     contador + 0;
//     break; 
   
//     default: 
//     answerfinal1.innerHTML = `marca una respuesta`;

//   }
