
let wins = 0;
let losses = 0;
let ties = 0;

let choseR = 0;
let choseP = 0;
let choseS = 0;

const validInput = function()
{   
    let isValid = false;
    while (isValid === false)
    {
        let playerChoice = prompt("Choose r, p, or s");

        if (playerChoice === "r")
        {
            choseR++;
            return playerChoice; 
        }
        else if (playerChoice === "p")
        {
            choseP++;
            return playerChoice; 
        }
        else if (playerChoice === "s")
        {
            choseS++;
            return playerChoice;
        }
        else
        {
            alert("Invalid input")
        }
    }
       
}

do
{
    let validChoice = validInput();

    let computerRandom = Math.floor(Math.random() * 3);
    let computerChoice;

    if (computerRandom === 0)
    {
        computerChoice = "r"
    }
    else if (computerRandom === 1)
    {
        computerChoice = "p"
    }
    else if (computerRandom === 2)
    {
        computerChoice = "s"
    }


    if ((validChoice === computerChoice))
    {
        alert("It's a tie");
        ties++;
    }
    else if ((validChoice === "r" && computerChoice === "p") || (validChoice === "p" && validChoice === "s") || (playerChoice === "s" && computerChoice === "r") )
    {
        alert(`Computer chose ${computerChoice}.\nYou lose`);
        losses++;
    }
    else if ((validChoice === "p" && computerChoice === "r") || (validChoice === "s" && computerChoice === "p") || (validChoice === "r" && computerChoice === "s"))
    {
        alert(`Computer chose ${computerChoice}.\nYou won!`);
        wins++
    }
    

}
while(window.confirm("Do you want to continue playing?"))

alert(`wins: ${wins}\nlosses:${losses}\nties: ${ties}\n\nChoices:\nr:${choseR}\np:${choseP}\ns:${choseS}`);
