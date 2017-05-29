$(() => {

  const $playing = $('#playing');
  const $win = $('#win');
  const hands = [];
  $('.submit').on('click', deal);


///CREATE A DECK/////////////

  const deck = [];
  const values = {'A': 1,'J': 11, 'Q': 12, 'K': 13 };

  ['D','S','C','H'].forEach((suit) => {
    ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'].forEach((face) => {
      deck.push({
        suit,
        //face,
        value: values[face] || face
      });
    });
  });

  ////////SHUFFLE DECK//////////////////

  function shuffle(array){
    var i = 0
    , j = 0
    , temp = null;

    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  shuffle(deck);
  //console.log('reshuffled deck',deck);

  /////////DEAL CARDS TO PLEAYER //////////

  function deal(){
    const players = $('#numOfplayers').val();
    const numOfCards = $('#numOfCards').val();
    //console.log('these are the number of players',players);
    //console.log('these are the number of cards',numOfCards);
    if (numOfCards * players <= 52) {
      for ( let i = 0; i < players; ++i) {
        const playerHand = [];
        for (let i = 0; i < numOfCards; i++) {
          const card = deck.shift();
          playerHand.push(card);
        }
        hands.push(playerHand);
        displayHands(playerHand);
      }
      findWinner();
    } else {
      alert('please choose different number');
      const players = '';
      const numOfCards = '';
      //console.log('these are the number of players after',players);
      //console.log('these are the number of cards after',numOfCards);
    }
  }


////////////////////display cards to user //////////////////////

  function displayHands(array) {
    const eachPlayer = JSON.stringify(array);
    const str = eachPlayer.replace(/[\[\]\{\}"]/g, ' ');
    return $playing.append(str, '<br/><br/>');
  }

/////////////////function to find th winner //////////////////
  function findWinner(){
    const totals = hands.map((hand) => {
      return hand.reduce((total, card) => {
        return total + card.value;
      }, 0);
    });
    //console.log('this is the total within the findWinner function', totals);
    const winningValue = totals.reduce((a, b) => Math.max(a,b));
    const winningIndex = totals.indexOf(winningValue);
    const winner = `Player ${winningIndex + 1} won with ${winningValue} points`;
    return $win.append(winner);
  }

}); ///document load ends here
