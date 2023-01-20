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
    score.innerHTML = counter;
}



const play = () =>{
    button.setAttribute("disabled","disabled" )
    setInterval(function(){
        points();
    },300)
}

  