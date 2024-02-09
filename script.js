let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const option = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
}

const drawGame = () =>{
    console.group("Game was drawn");
    msg.innerHTML = "Draw.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin) =>{
    if(userWin){
        console.log("You Win!!");
        msg.innerHTML = "You Win!!";
        msg.style.backgroundColor = "green";

        userScore++;
        userScorePara.innerText = userScore;
    }
    else{
        console.log("You Lose!");
        msg.innerHTML = "You Lose.";
        msg.style.backgroundColor = "red";

        compScore++;
        compScorePara.innerText = compScore;
    }
}

const playGame = (userChoice) =>{
    console.log("User choice is", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice is", compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin = true;

        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "rock" ? true : false;
        }
        else if(userChoice === "scissors"){
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});