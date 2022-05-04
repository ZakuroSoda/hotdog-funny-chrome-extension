// Future JavaScript will go here
//Generate a random number
function getRandom(){
    var random = Math.random() * 100000000000000000;
    return random;
}
document.getElementById("number").innerHTML = getRandom();