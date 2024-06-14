let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector("score-board");
const result_p = document.querySelector(".result > p");
const piedra_div = document.getElementById("pi");
const papel_div = document.getElementById("pa");
const tijera_div = document.getElementById("ti");

function getComputerChoice(){
    const choices = ['pi', 'pa', 'ti'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function convertToWord(letter){
    if (letter == "pi") return "PIEDRA";
    if (letter == "pa") return "PAPEL";
    return "TIJERA";

}

function win(userChoice, computerChoice){
    const smallUserWord = "Tu".fontsize(3).sup();
    const smallCompWord = "David".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord (userChoice)}${smallUserWord}  vence ${convertToWord(computerChoice)}${smallCompWord}.  GANASTE :)`;
    userChoice_div.classList.add('green-glow')
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(userChoice, computerChoice){
    const smallUserWord = "Tu".fontsize(3).sup();
    const smallCompWord = "David".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord (userChoice)}${smallUserWord}  pierde contra ${convertToWord(computerChoice)}${smallCompWord}.  PERDISTE :( `;
    userChoice_div.classList.add('red-glow')
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}
function draw(userChoice, computerChoice){
    const smallUserWord = "Tu".fontsize(3).sup();
    const smallCompWord = "David".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord (userChoice)}${smallUserWord}  es igual a ${convertToWord(computerChoice)}${smallCompWord}.  ES UN EMPATE :O`;
    userChoice_div.classList.add('grey-glow')
    setTimeout(() => userChoice_div.classList.remove('grey-glow'), 300);
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "piti":
        case "papi":
        case "tipa":
            win(userChoice, computerChoice);
        break;
        case "pipa":
        case "pati":
        case "tipi":
            lose(userChoice, computerChoice);
            break;
        case "pipi":
        case "papa":
        case "titi":
            draw(userChoice, computerChoice);
            break;
    }
}

function main(){
    piedra_div.addEventListener('click', () => game("pi")); 

    papel_div.addEventListener('click', () => game("pa")); 

    tijera_div.addEventListener('click',() => game("ti")); 


}

main();