const playerChoice = document.querySelector(".playerChoice");
const playerImg = playerChoice.previousElementSibling;

const computerChoice = document.querySelector(".computerChoice");
const computerImg = computerChoice.previousElementSibling;

const weapons = document.querySelectorAll(".img");
const result = document.querySelector(".result");

function randomNumber(){
    return Math.floor(Math.random()*3);
}

function computer(){
    const choices = ["Rock","Paper","Scissors"];
    const choice = choices[randomNumber()];
    computerImg.src = `images/${choice}.png` ;
    computerImg.id= choice;
    computerChoice.innerHTML = choice;
    computerImg.style.transform = `rotateY(${180}deg)`
}

weapons.forEach((weapon)=>{
    weapon.addEventListener("click",()=>{
        const item = weapon.childNodes[1];
        console.log(weapon);
        playerImg.src = item.src ;
        playerImg.id = weapon.id ;
        console.log(weapon.id);
        playerChoice.innerHTML = weapon.id;

        computer();
        check(playerImg.id,computerImg.id);
    })
})

function check(a,b){
    if(a==b){
        result.innerHTML = "DRAW"
    }else{
        switch(true){
            case a=="Rock":
                result.innerHTML = (b=="Scissors")?"You Win":"You lose";
                break;
            case a=="Paper":
                result.innerHTML = (b=="Rock")?"You Win":"You lose";
                break;
            case a=="Scissors":
                result.innerHTML = (b=="Paper")?"You Win":"You lose";
                break;
        }
    }
    document.body.style.pointerEvents="none";
    setInterval(()=>{
        result.innerHTML+="." ;
    },700); 
    setTimeout(()=>{
        location.reload();
    },700*3);
}