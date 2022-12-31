const character = document.getElementById("character");
const game = document.getElementById("game");
const button = document.getElementById("button");
const enemy = document.getElementById("enemy")
let counter = 0;

document.addEventListener("keydown", function(e){
    if(e.keyCode == 32){
        if(character.classList == "animate"){return}
        character.classList.add("animate");
        setTimeout(function(){
            character.classList.remove("animate");
        },300);
    }
})

let checkAlive = setInterval(function(){
    let characterTop = character.style.top;
    let enemyLeft = enemy.style.left;
    let characterLeft = character.style.left;
    let enemyTop = enemy.style.top;
    if(enemyLeft-"10px" == characterLeft-"25px" && characterTop == enemyTop){
        console.log("in the if")
        enemy.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        enemy.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
},10)
