let userScore=document.getElementById("UserScore");
let computerScore=document.getElementById("ComputerScore");
let battleResult=document.getElementById("battleresult");
let user=0;
let computer=0;
function battle(s1){
    s2=random();
    document.getElementById("userChoise").textContent=s1;
    document.getElementById("computerChoise").textContent=s2;
    switch(s1+" "+s2){
        case "rock scissors":
        case "paper rock":
        case "scissors paper":
            document.getElementById("battleresult").textContent="You win";
            user++;
            document.getElementById("UserScore").textContent=user;
            break;
        case "rock rock":
        case "paper paper":
        case "scissors scissors":
            document.getElementById("battleresult").textContent="It's a draw?";
            break;
        case "rock paper":
        case "paper scissors":
        case "scissors rock":
            document.getElementById("battleresult").textContent=" You lost...";
            computer++;
            document.getElementById("ComputerScore").textContent=computer;
            break;
    }
    if(user==3) {
        window.location.href = "destiny/win.html";
    }
    if(computer==3) {
        window.location.href = "destiny/loose.html";
    }
}



function random(){
    let a=Math.floor(Math.random() *3)+1;
    switch(a){
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
        
    }
}

const f1=document.querySelector("#f1");
const f2=document.querySelector("#f2");
const f3=document.querySelector("#f3");
const f4=document.querySelector("#f4");
const weapons=document.querySelector(".weapons");
const pointers=document.querySelector(".pointers");
const skip=document.querySelector(".skip");

skip.addEventListener("click",jump);

function jump(){
f1.style.animation="null";
f2.style.animation="null";
f3.style.animation="null";
f4.style.animationDelay="0s";
weapons.style.animationDelay="0s";
pointers.style.animationDelay="0s";
skip.classList.add("dissapear");
}