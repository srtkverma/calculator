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

function addEvents(nodeList){
    nodeList.forEach(element => {
        element.addEventListener('click',(e)=>{
            manageInput(e.srcElement.innerText);
        });
    });
}

function manageInput(input){
    let display = document.querySelector(".display");    
    if(input=="C"){
        display.value="";
        userInput="";
    }
    else if(input=="<"||input=="Backspace"){
        display.value = display.value.slice(0,display.value.length-1);
        if(userInput[userInput.length-1].search(/\d/)==0)
            userInput = userInput.slice(0,userInput.length-1);
        else userInput = userInput.slice(0,userInput.length-3);
    }
    else if(input.search(/[\+\-\*/=]/)==0||input=="Enter"){
        if(display.value[display.value.length-1].search(/\d/)==0){
            if(input=="="||input=="Enter"){
                calculate();
            }
            else{
                userInput+=`,${input},`;
                display.value+=input;
            }
        }
    }
    else if(input.search(/\d/)==0) {
        userInput+=input;
        display.value+=input;
    }
    else return;
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
    userInput = userArray.join("");
    if(userInput==Infinity){
        alert("Infinity");
        userInput="";
    }
    document.querySelector(".display").value = userInput;
}

function operate(operator,input){
    let answer=solve(input[input.indexOf(operator)-1],operator,input[input.indexOf(operator)+1]);
    input.splice(input.indexOf(operator)-1,3,answer);
    return input;
}

addEvents(document.querySelectorAll(".digits div"));
addEvents(document.querySelectorAll(".symbols div"));
window.addEventListener('keydown',(e)=>{
    manageInput(e.key);
})

let userInput = " ";