let expression="";


const display=document.getElementById("display");



function updateDisplay(){


if(expression===""){

display.innerText="0";

}

else{

display.innerText=expression;

}


}




function appendValue(value){


expression += value;


updateDisplay();


}




function clearDisplay(){


expression="";


updateDisplay();


}




function deleteLast(){


expression = expression.slice(0,-1);


updateDisplay();


}




async function calculate(){



if(expression==="") return;



try{


let response = await fetch(

"http://127.0.0.1:5000/api/calculate",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},


body:JSON.stringify({

expression:expression

})


}

);



let data = await response.json();



if(data.success){


expression=data.result.toString();


updateDisplay();


loadHistory();


}

else{


alert(data.message);


}



}

catch(error){


alert(
"Backend connection failed"
);


}


}






async function loadHistory(){



try{


let response = await fetch(

"http://127.0.0.1:5000/api/history"

);



let data = await response.json();



let history=document.getElementById("history");


history.innerHTML="";



data.forEach(item=>{


history.innerHTML += `

<div class="history-item">


<span>

${item.expression}

=

${item.result}

</span>


<button class="delete-btn"

onclick="deleteHistory(${item.id})">

Delete

</button>


</div>


`;


});


}

catch(error){


console.log(error);


}


}





async function deleteHistory(id){


try{


await fetch(

"http://127.0.0.1:5000/api/history/"+id,

{

method:"DELETE"

}

);



loadHistory();



}

catch(error){


console.log(error);


}


}




window.onload=function(){


loadHistory();


}
