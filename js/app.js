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

  //////////dealing decks
  //function deal(){
    // const hands = [];
    // const players = $('#numOfplayers').val();
    // const numOfCards = $('#numOfCards').val();
    // console.log(players);
    // console.log(numOfCards);
    //
    // for ( let i = 0; i < players; ++i) {
    //   const playerHand = [];
    //   for (let i = 0; i < numOfCards; i++) {
    //     const card = deck.shift();
    //     playerHand.push(card);
    //   }
    //   hands.push(playerHand);
    //   console.log(playerHand);
    // }
  //}
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
          const eachPlayer = JSON.stringify(playerHand);
          $demo.append(eachPlayer);
          console.log('this is the players hands',playerHand);
          console.log('these are the eachplayer', eachPlayer);

        }
        console.log('these are the hands');
        hands.push(playerHand);


      }
      // $demo.append(hands);
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
  // var obj = { "name":"John", "age":30, "city":"New York"};
  // var myJSON = JSON.stringify(obj);
  // document.getElementById("demo").innerHTML = myJSON;
////FIND WINNER

  function findWinner(){
    console.log('these are the hands inside the winner function', hands);
    const totals = hands.map((hand) => {
      return hand.reduce((total, card) => {
        return total + card.value;
      });
    });
    console.log('this is the total within the findWinner function', totals);
    const winningValue = Math.max(totals);
    const winningIndex = totals.indexOf(winningValue);
    console.log('the winning number', winningValue);
    const winner = `Player ${winningIndex} won`;
    console.log(winner);
  }



}); ///document load ends here
