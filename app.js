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
        case "sasso forbici":
        case "carta sasso":
        case "forbici carta":
            document.getElementById("battleresult").textContent="You win";
            user++;
            document.getElementById("UserScore").textContent=user;
            break;
        case "sasso sasso":
        case "carta carta":
        case "forbici forbici":
            document.getElementById("battleresult").textContent="It's a draw?";
            break;
        case "sasso carta":
        case "carta forbici":
        case "forbici sasso":
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
            return "sasso";
            break;
        case 2:
            return "carta";
            break;
        case 3:
            return "forbici";
            break;
        
    }
}