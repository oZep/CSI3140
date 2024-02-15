var heads = 0;
var tails = 0;

function toss(){

    if(flip() == true){
        heads++;
    }
    else tails++;

    document.getElementById("heads").innerText = heads;
    document.getElementById("tails").innerText = tails
}

function flip(){
    if(Math.random() > 0.5){
        return true;
    }
    return false;
}