//   What ties the Input & Button to the JavaScript   //
const input = document.getElementById("input");
const HoL = document.getElementById("HigherOrLower")
const ScB = document.getElementById("ScoreBoard")
const button = document.getElementById("button");
//   Makes the click of the Button Act accordingly  //
button.addEventListener('click', CheckNumber);
//         rNumber is equal to the return code       //
let rNumber = randomNumber(); 

var score = 0; 

function UpdateScore(value)
{
    score += value; 
    ScB.textContent = score; 
}

//            Function of the Random Number         //
function randomNumber()
{
    return Math.floor(Math.random() * 100 + 1);
}

function CheckNumber()
{
    var inp = Number(input.value); 
    
    if(inp > rNumber)
    {
        //is Lower
        HoL.textContent = "Lower";
        HoL.style.backgroundColor = "Red";
        ScB.style.backgroundColor = "Red"
       UpdateScore(-5);
    }
    else if(inp < rNumber)
    {
        //is higher
        HoL.textContent = "Higher";
        HoL.style.backgroundColor = "Red"
        UpdateScore(+5);
        ScB.style.backgroundColor = "Red"
    }
    else if(inp == rNumber)
    {
        //is equal
        HoL.textContent = "Winner!";
        HoL.style.backgroundColor = "Green"
        ScB.textContent = "Winner!"
        ScB.style.backgroundColor = "Green"
    }
}