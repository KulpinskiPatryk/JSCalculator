let screenvalue = 0;
let buffer;
let sign;

const screen = document.getElementById("screen");

addNumer = function(number){
    let lenghtOfValue = Math.ceil(Math.log(screenvalue + 1) / Math.LN10);
    if ( lenghtOfValue <= 9){
        if (screenvalue => 1){
            screenvalue = screenvalue * 10;
            screenvalue += number;
        }else{
            console.log(screenvalue);
            screenvalue = number;
        }
    }
}

document.getElementById("butC").onclick = function(){
    screenvalue = 0;
    screen.innerText = screenvalue;
}
document.getElementById("but1").onclick = function(){
    addNumer(1)
    screen.innerText = screenvalue;
}
document.getElementById("but2").onclick = function(){
    addNumer(2)
    screen.innerText = screenvalue;
}
document.getElementById("but3").onclick = function(){
    addNumer(3)
    screen.innerText = screenvalue;
}
document.getElementById("but4").onclick = function(){
    addNumer(4)
    screen.innerText = screenvalue;
}
document.getElementById("but5").onclick = function(){
    addNumer(5)
    screen.innerText = screenvalue;
}
document.getElementById("but6").onclick = function(){
    addNumer(6)
    screen.innerText = screenvalue;
}
document.getElementById("but7").onclick = function(){
    addNumer(7)
    screen.innerText = screenvalue;
}
document.getElementById("but8").onclick = function(){
    addNumer(8)
    screen.innerText = screenvalue;
}
document.getElementById("but9").onclick = function(){
    addNumer(9)
    screen.innerText = screenvalue;
}
document.getElementById("but0").onclick = function(){
    addNumer(0)
    screen.innerText = screenvalue;
}

document.getElementById("butAdd").onclick = function(){
    buffer = screenvalue;
    sign = "+";
    screenvalue = 0;
    screen.innerText = screenvalue;
}
document.getElementById("butSub").onclick = function(){
    buffer = screenvalue;
    sign = "-";
    screenvalue = 0;
    screen.innerText = screenvalue;
}
document.getElementById("butMult").onclick = function(){
    buffer = screenvalue;
    sign = "*";
    screenvalue = 0;
    screen.innerText = screenvalue;
}
document.getElementById("butDiv").onclick = function(){
    buffer = screenvalue;
    sign = "/";
    screenvalue = 0;
    screen.innerText = screenvalue;
}

document.getElementById("butEq").onclick = function(){
    switch(sign){
        case "+":
            screenvalue = buffer + screenvalue;
            screen.innerText = screenvalue;
            break;
        case "-":
            screenvalue = buffer - screenvalue;
            screen.innerText = screenvalue;
            break;
        case "*":
            screenvalue = buffer * screenvalue;
            screen.innerText = screenvalue;
            break;
        case "/":
            screenvalue = buffer / screenvalue;
            screen.innerText = screenvalue;
            break;            
            
    }

}