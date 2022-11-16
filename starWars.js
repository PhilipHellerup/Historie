let point = document.getElementById("tal")
let score = 0;

document.getElementById("svar1").onclick = function(){
    score +=10;
    point.innerHTML = score;
    document.getElementById("svar1").disabled = true

}

document.getElementById("svar2").onclick = function(){
    score +=10;
    point.innerHTML = score;
    document.getElementById("svar2").disabled = true

}
document.getElementById("svar3").onclick = function(){
    score +=10;
    point.innerHTML = score;
    document.getElementById("svar3").disabled = true
}
document.getElementById("svar4").onclick = function(){
    score +=10;
    point.innerHTML = score;
    document.getElementById("svar4").disabled = true
}
document.getElementById("svar5").onclick = function(){
    score +=10;
    point.innerHTML = score;
    document.getElementById("svar5").disabled = true
}
