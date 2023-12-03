let students = ["John","Sarah","Bob","Mary"]

function getStudent(){
    studNumber = parseInt(prompt("Type the index of the student you want to know:"));
    alert("You selected student "+students[studNumber-1]);
}