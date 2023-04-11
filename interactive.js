//Moving Letters
var typed = new Typed(".welcome", {
    strings: ["Welcome To RPS-Games!"],
    typeSpeed: 150,
    backSpeed: 150,
});

let botcounter = 0, ycounter = 0;

var btn = document.getElementById("start").addEventListener('click', ()=>{
    var x = document.getElementById("rps1");
    if (x.style.display === "none") {
      x.style.display = "block";
    }else{
        x.style.display = "none";
        const resty = document.getElementById('yscore');
        const restbot = document.getElementById('bscore');
        const remText = document.getElementById("endtext");
        remText.innerHTML = "";
        resty.innerText = 0;        
        restbot.innerText = 0;
        botcounter = 0;
        ycounter = 0;
        document.getElementById("rock").disabled = false;
        document.getElementById("paper").disabled = false;
        document.getElementById("scissors").disabled = false;

    }
})



const yscore1 = document.getElementById('yscore');
// console.log(yscore1.textContent);
const botscore1 = document.getElementById('bscore');

function getComputerChoice() {
    const arr = ["Rock", "Paper", "Scissors"];
    let num = parseInt(Math.random() * 3);
    // console.log(arr[num]);
    return arr[num].toLowerCase();
}

let rpss = document.querySelectorAll(".rps");
for(let i=0; i<rpss.length; i++){
    rpss[i].addEventListener('click', getPlayerChoice);
}

function getPlayerChoice(e){
    const delText = document.getElementById("endtext");
    delText.innerText="";
    playRound(getComputerChoice(), e.target.id.toLowerCase());
    getComputerChoice();
    console.log(e.target.id.toLowerCase());
    return e.target.id;
      
}

let playRound = (computer , player) => {
    if(computer == "rock" && player == "scissors"){
        botcounter++;
        console.log(botcounter+" "+ycounter);
        botscore1.innerText = botcounter.toString();
        yscore1.innerText = ycounter.toString();
    }else if(computer == "paper" &&  player =="rock"){
        botcounter++;
        console.log(botcounter+" "+ycounter);
        botscore1.innerText = botcounter.toString();
        yscore1.innerText = ycounter.toString();
    }else if(computer == "scissors" && player == "paper"){
        botcounter++;
        console.log(botcounter+" "+ycounter);
        botscore1.innerText = botcounter.toString();
        yscore1.innerText = ycounter.toString();
    }else if(computer == "scissors" && player == "rock"){
        ycounter++;
        console.log(botcounter+" "+ycounter);
        yscore1.innerText = ycounter.toString();
        botscore1.innerText = botcounter.toString();
    }else if(computer == "rock" && player == "paper"){
        ycounter++;
        console.log(botcounter+" "+ycounter);
        yscore1.innerText = ycounter.toString();
        botscore1.innerText = botcounter.toString();
    }else if(computer == "paper" && player == "scissors"){
        ycounter++;
        console.log(botcounter+" "+ycounter);
        yscore1.innerText = ycounter.toString();
        botscore1.innerText = botcounter.toString();
    }else {
        var tie = new Typed(".endTextIn", {
            strings: ["Whoops! That's a tie."],
            typeSpeed: 150,
            backSpeed: 150,
        })
    }

    if(botcounter == 5 || ycounter == 5){
        if(botcounter == 5){
            console.log("Aliens win");
            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissors").disabled = true;
            var aliens = new Typed(".endTextIn", {
                strings: ["Aliens Won! They will take over earth. :("],
                typeSpeed: 150,
                backSpeed: 150,
            });
        }else if(ycounter == 5){
            console.log("Humans win");
            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissors").disabled = true;
            var newTyped = new Typed(".endTextIn", {
                strings: ["Humans Won! You made it, Saved earth."],
                typeSpeed: 150,
                backSpeed: 150,
            });
        }
    } 
}



