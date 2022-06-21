//Storing the source folder
var source = "images/";

//Defining the random number for firstPlayer
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var firstPlayer = source + randomDiceImage1;

//Defining the random number for secondPlayer
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var secondPlayer = source + randomDiceImage2;

//Manipulating the HTML images via JS using querySelector
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",firstPlayer);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",secondPlayer);



//Checking for the winner
if (randomNumber1 > randomNumber2)
    document.querySelector("h1").textContent = "🚩Player 1 Wins!";

else if (randomNumber1 < randomNumber2)
    document.querySelector("h1").textContent = "Player 2 WINS!🚩";

else
    document.querySelector("h1").textContent = "Draw!";