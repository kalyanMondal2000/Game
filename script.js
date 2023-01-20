//variables
const character = document.getElementById("character");
const game = document.getElementById("game");
const button = document.getElementById("button");
const enemy = document.getElementById("enemy")
const score = document.getElementById("scoreSpan");
let counter = 0;
enemy.style.animation = "none"

//jump
document.addEventListener("keydown", function(e){
    if(e.keyCode == 32){
        if(character.classList == "animate"){return}
        character.classList.add("animate");
        setTimeout(function(){
            character.classList.remove("animate");
        },300);
    }
})
const points = () =>{
    counter++; 
    score.innerHTML = Math.floor(counter/200);
}

function detectCollision(a, b) {
    var aRect = a.getBoundingClientRect();
    var bRect = b.getBoundingClientRect();
    return !(
        ((aRect.top + aRect.height) < (bRect.top)) ||
        (aRect.top > (bRect.top + bRect.height)) ||
        ((aRect.left + aRect.width) < bRect.left) ||
        (aRect.left > (bRect.left + bRect.width))
    );
}



const play = () =>{
    button.setAttribute("disabled","disabled" )
    enemy.style.animation = "enemy 1s infinite linear"
    var thing = setInterval(function(){
        if(detectCollision(enemy, character)){
            clearInterval(thing);
            enemy.style.animation = "none";
            button.disabled = false;
            counter = 0;
        }else{
        points();}
    },1)
}

