let userScore = 0;
let compScore = 0;

const choice = document.querySelectorAll(".choices");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    // Hm log Math.floor ko random number print kernay ke like use kerty h 
    const randixd = Math.floor(Math.random()*3);
    return options[randixd];
}
const GameDraw = () => {
    console.log("Game was Draw ");
    msg.innerText = ("Game was Draw , Play Again ");
    msg.style.backgroundColor=("#081b31");
}

const showWinner = (userWin) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = ("you win");
        msg.style.backgroundColor=("green");
        
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose");
        msg.innerText = ("you lose");
        msg.style.backgroundColor=("red");
    }

}

//user choice 
const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);
    // Computer Genrate 
    const compChoice = getCompChoice();
    console.log("Computer choice =", compChoice);

    if(userChoice === compChoice){
        // Game Draw 
        GameDraw();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            // scissor, paper 
            userWin = compChoice === "paper" ? false : true; 
        }else if(userChoice === "paper"){
            // rock , scissor 
            userWin = compChoice === "scissor" ? false : true;
        }else{
            //rock paper  
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choice.forEach((choices) => {
    choices.addEventListener("click", () => {
        const userChoice = choices.getAttribute("id");
        // console.log("choice was clicked ", userChoice);
        playGame(userChoice);
    });
});