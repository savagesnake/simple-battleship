var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk){
  guess = prompt("Ready, Aim,Fire! (enter a number from 0-6):");
  if(guess < 0 || guess > 6){
      alert("please enter a valid number");
    // end if statement
  }else{
    // increment the number of guesses
    guesses += 1;

    //check if the guess is a hit and imcrement hits
    if(guess == location1 || guess == location2 || guess == location3 ){
      hits +=1;
      alert("Hit!")
    }else{
      alert("Miss!")
    }

    if (hits === 3){
      isSunk = true;
      alert("You sank my battleship!");
      // end if
    }

    // end of else
  }
  // end of while loop
}

var stats = "You took " +guesses+ " guesses to sink my battleship,"+
            "which means your shooting accuracy was "+ (3/guesses)*100+"%";

alert(stats)
