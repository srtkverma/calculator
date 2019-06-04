function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(a,b,c){
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