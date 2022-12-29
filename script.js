const character = document.getElementById("character");
const game = document.getElementById("game");
const button = document.getElementById("button");
const enemy = document.getElementById("enemy")

document.addEventListener("keydown", function(e){
    if(e.keyCode == 32){
        if(character.classList == "animate"){return}
        character.classList.add("animate");
        setTimeout(function(){
            character.classList.remove("animate");
        },300);
    }
})


