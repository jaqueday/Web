function loopMinus(){
    for (i = -100; i <= 0; i++) {
        document.getElementById("result1").innerText += " " + i + ", ";
    }
}
function loopPlus(){
    for (i = 100; i >= 0; i--) {
        document.getElementById("result2").innerText += " " + i + ", ";
    }
}
function loopEven(){
    for (i = -10; i <= 10; i+=2) {
        document.getElementById("result3").innerText += " " + i + ", ";
    }
}

function takeTwo() {
    var numb1 = document.getElementById("numberInput1").value;
    numb1 = Number(numb1); // Convert input to a number
    var numb2 = document.getElementById("numberInput2").value;
    numb2 = Number(numb2); // Convert input to a number
    for (i = numb1; i <= numb2; i++) {
        document.getElementById("result4").innerText += " " + i + ", ";
    }
}
function takeThree() {
    var numb3 = document.getElementById("numberInput3").value;
    numb3 = Number(numb3); // Convert input to a number
    var numb4 = document.getElementById("numberInput4").value;
    numb4 = Number(numb4); // Convert input to a number
    var numb5 = document.getElementById("numberInput5").value;
    numb5 = Number(numb5); // Convert input to a number
    for (i = numb3; i <= numb4; i+=numb5) {
        document.getElementById("result5").innerText += " " + i + ", ";
    }
}