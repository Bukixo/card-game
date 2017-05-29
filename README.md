We want you to build an application that shuffles a standard 52-card deck, and then deals a
fixed number of cards to each player.
  - use .random() to randomise/shuffle the cards. Number of cards dealt should be the players choice.
  - then assign random cards to player, each card is pushed into the players array

After each player has been dealt their cards, add up the value of each hand and declare a
winner (or winners, in the case of a draw).
 - simple addition of the values of each card. Add all the numbers in the array using .reduce


Score each hand by summing the face value of each card (for Ace through ten), and the
following values for face cards: Jack = 11, Queen = 12, King = 13.
  - assign face with a value which then gets pushed into a cards array

The number of players should be configurable, as should the number of cards dealt. The
game should prevent an impossible combination of players and cards.
  - number of players cannot be more than 52 as each player should have at least 1 card from the deck. Therefore if we times number cards by player, as we can play the game as long as the sum is not more than 52


The basic solution doesn’t need a user interface beyond inputs (e.g. number of players) and
outputs (e.g. winning player).
  - basic html forms with ids to link back to the jquery

HTML user interface to input variables and display each player’s hand.
  - user 'JSON.stringify' to print out the objects
  - find the index of each object within the array. Set it to a variable, so that when we print the card hand we can also print out the number of the player using the index of the object within the array.

  ```ie let a = array.indexOf("");
  console.log('player ${a} won')```

●Sort each player’s hand after dealing, using card suit followed by value. (Descending suit order is Hearts, Spades, Diamonds, Clubs).
  - map out a new object of the suits, where we attach a value to the suit. we then use .sort to sort out the suits according to their value

●Enhance the scoring system by giving a bonus of 10 points for each pair, 20 points for each three of a kind, 40 points for a straight. (Each card can only be used once per combination).
  -  first we set "a = 0 ", then we find number of occurance (amount of cards that are the same) in each array of the player, depending on the number of occurance we run an if statement where we change the value of "a". For example

  ```if (numOfOcc === 2){ let a = 10 } elseif (numOfOcc === 3) { a = 20}} else { a = 0 };"```


  so that when we reduce the numbers within the array, we set a to the total.
  
  - 40pts? Maybe compare again using '.inlcude' with '.sort' to check if we have an ascending number of values that match?

●Tie-breaker: use card suit to determine an overall winner.
  - maybe using the newly mapped suit object to firstly reduce and then determine the winner by using Max.math to select the highest number associated with the suit.
