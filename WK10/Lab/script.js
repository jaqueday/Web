// variables and set to zero
let subjResults= [];
let subjAverage = 0;
let sum = 0;

// function 
function getSubjects(){
    subjNumber = parseInt(prompt("How many subjects you have?"));
    for (i=0; i<subjNumber;i++){
        subjResults[i] = parseInt(prompt("What was your result for subject "+[i+1]));
        sum +=subjResults[i];
    }
    subjAverage = (sum / subjNumber); // get average 

    document.getElementById("results").innerText = "Your grades were "+subjResults.join(', ');
    document.getElementById("average").innerHTML = "Your average was "+subjAverage;
}