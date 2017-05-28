$(() => {

  const $demo = $('#demo');

///CREATE A DECK////
  const deck = [];
  const values = {'A': 1,'J': 11, 'Q': 12, 'K': 13 };

  ['H','S','C','D'].forEach((suit) => {
    ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'].forEach((face) => {
      deck.push({
        suit,
        face,
        value: values[face] || face
      });
    });
  });

  ////////SHUFFLE DECK////

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
  console.log('reshuffled deck',deck);

  const hands = [];
  $('.submit').on('click', deal);

  function deal(){
    //const hands = [];
    const players = $('#numOfplayers').val();
    const numOfCards = $('#numOfCards').val();
    console.log('these are the number of players',players);
    console.log('these are the number of cards',numOfCards);
    if (numOfCards * players < 52) {
      for ( let i = 0; i < players; ++i) {
        const playerHand = [];
        for (let i = 0; i < numOfCards; i++) {
          const card = deck.shift();
          playerHand.push(card);
          // const eachPlayer = JSON.stringify(playerHand);
          // console.log('this is the playerHands array',playerHand);
          // //console.log('these are the hands of each player stringified (eachplayer)', eachPlayer);
          // $demo.append(eachPlayer, '<br/>');
        }
        hands.push(playerHand);

      }
      displayHands();
      findWinner();
      console.log( 'these are the hands inide the deal function', hands);
    } else {
      alert('please choose different number');
      const players = '';
      const numOfCards = '';
      console.log('these are the number of players',players);
      console.log('these are the number of cards',numOfCards);
    }
  }

  function displayHands() {
    for (let i = 0; i < hands; i++) {
      const eachPlayer = JSON.stringify(playerHand);
      console.log('this is the playerHands array',playerHand);
      //console.log('these are the hands of each player stringified (eachplayer)', eachPlayer);
      $demo.append(eachPlayer, '<br/>');
    }
  }

/////////////////function to find th winner //////////////////
  function findWinner(){
    console.log('these are the hands inside the winner function', hands);
    const totals = hands.map((hand) => {
      return hand.reduce((total, card) => {
        return total + card.value;
      }, 0);
    });
    console.log('this is the total within the findWinner function', totals);
    const winningValue = totals.reduce((a, b) => Math.max(a,b));
    const winningIndex = totals.indexOf(winningValue);
    console.log('the winning number', winningValue);
    const winner = `Player ${winningIndex + 1} won`;
    console.log(winner);
  }



}); ///document load ends here
