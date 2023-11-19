function playSong() {
    for (i=99; i>=0;i--){
        if (i>=3){
            document.getElementById("song").innerText += i + " bottles of beer on the wall, " + i + " bottles of beer\n";
            document.getElementById("song").innerText += "Take one down, pass it around, " + (i-1) + " bottles of beer on the wall\n\n";
        }
        else if (i==2){
            document.getElementById("song").innerText += i + " bottles of beer on the wall, " + i + " bottles of beer\n";
            document.getElementById("song").innerText += "Take one down, pass it around, " + (i-1) + " bottle of beer on the wall\n\n";
        }
        else if (i==1){
            document.getElementById("song").innerText += i + " bottle of beer on the wall, " + i + " bottle of beer\n";
            document.getElementById("song").innerText += "Take one down, pass it around, no more bottles of beer on the wall\n\n";
        }
        else{
            document.getElementById("song").innerText += "No more bottles of beer on the wall, no more bottles of beer\n";
            document.getElementById("song").innerText += "Go to the store and buy some more, 99 bottles of beer on the wall\n\n";
        }
    }
}