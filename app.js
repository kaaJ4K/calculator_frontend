let expression = "";

const backendURL = "http://127.0.0.1:5000";


// 显示内容
function updateDisplay() {

    const display =
        document.getElementById("display");

    display.innerText =
        expression === "" ? "0" : expression;

}


// 输入数字和符号
function addValue(value) {

    expression += value;

    updateDisplay();

}


// 清空
function clearDisplay() {

    expression = "";

    updateDisplay();

}


// 删除最后一个字符
function deleteLast() {

    expression =
        expression.substring(
            0,
            expression.length - 1
        );

    updateDisplay();

}



// 计算
async function calculate() {


    if(expression === ""){

        return;

    }


    try {


        const response =
            await fetch(
                backendURL + "/api/calculate",
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



        const data =
            await response.json();



        if(data.success){


            expression =
                String(data.result);


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


        console.log(error);

    }

}



// 获取历史
async function loadHistory(){


    const response =
        await fetch(
            backendURL + "/api/history"
        );


    const data =
        await response.json();



    const history =
        document.getElementById("history");



    history.innerHTML = "";



    data.forEach(item => {


        history.innerHTML += `

        <div>

            <p>
            ${item.expression}
            =
            ${item.result}

            <br>

            ${item.created_at}

            </p>


            <button onclick="deleteHistory(${item.id})">

            Delete

            </button>


        </div>

        <hr>

        `;


    });


}



// 删除历史
async function deleteHistory(id){


    await fetch(

        backendURL +
        "/api/history/" +
        id,

        {

            method:"DELETE"

        }

    );


    loadHistory();


}



// 页面打开自动读取
window.onload = function(){

    loadHistory();

};