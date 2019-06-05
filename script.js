function add(a,b){
    return Number(a)+Number(b);
}

function sub(a,b){
    return Number(a)-Number(b);
}

function multiply(a,b){
    return Number(a)*Number(b);
}

function divide(a,b){
    return Number(a)/Number(b);
}

function solve(a,b,c){
    switch(b){
        case "+":
            return add(a,c);
        case "-":
            return sub(a,c);
        case "*":
            return multiply(a,c);
        case "/":
            return divide(a,c);
    }
}

function displayFiller(nodeList){
    nodeList.forEach(element => {
        if(element.getAttribute("class")=="equal"){
            element.addEventListener('click',calculate);
        }
        else{
            element.addEventListener('click',(e)=>{
                let display = document.querySelector(".display");
                let input = e.srcElement.innerText;
                if(input=="CLEAR"){
                    display.value="";
                    userInput="";
                }
                else{
                    if(input=='+'||input=='-'||input=='*'||input=='/'){
                        userInput+=`,${input},`;
                    }
                    else userInput+=input;
                    display.value+=input;
                };
            });
        }
    });
}

function calculate(){
    let userArray = userInput.split(',');
    while(userArray.indexOf("/")!=-1){
        userArray=operate("/",userArray);
    }
    while(userArray.indexOf("*")!=-1){
        userArray=operate("*",userArray);
    }
    while(userArray.indexOf("-")!=-1){
        userArray=operate("-",userArray);
    }
    while(userArray.indexOf("+")!=-1){
        userArray=operate("+",userArray);
    }
    document.querySelector(".display").value = userArray;
    userInput = userArray.join("");
}

function operate(operator,input){
    let answer=solve(input[input.indexOf(operator)-1],operator,input[input.indexOf(operator)+1]);
    input.splice(input.indexOf(operator)-1,3,answer);
    return input;
}

displayFiller(document.querySelectorAll(".digits div"));
displayFiller(document.querySelectorAll(".symbols div"));
let userInput = "";