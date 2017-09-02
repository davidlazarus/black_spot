/* List and create your functions and shit here */


var deck = [  
   {  
      "value":"A",
      "suit":"Heart",
      "color":"Red",
      "score":"15"

   },
   {  
      "value":"2",
      "suit":"Heart",
      "color":"Red",
      "score":"2"

   },
   {  
      "value":"3",
      "suit":"Heart",
      "color":"Red",
      "score":"3"

   },
   {  
      "value":"4",
      "suit":"Heart",
      "color":"Red",
      "score":"4"
   },
   {  
      "value":"5",
      "suit":"Heart",
      "color":"Red",
      "score":"5"
   },
   {  
      "value":"6",
      "suit":"Heart",
      "color":"Red",
      "score":"6"
   },
   {  
      "value":"7",
      "suit":"Heart",
      "color":"Red",
      "score":"7"
   },
   {  
      "value":"8",
      "suit":"Heart",
      "color":"Red",
      "score":"8"
   },
   {  
      "value":"9",
      "suit":"Heart",
      "color":"Red",
      "score":"9"
   },
   {  
      "value":"10",
      "suit":"Heart",
      "color":"Red",
      "score":"10"
   },
   {  
      "value":"J",
      "suit":"Heart",
      "color":"Red",
      "score":"11"
   },
   {  
      "value":"Q",
      "suit":"Heart",
      "color":"Red",
      "score":"12"
   },
   {  
      "value":"K",
      "suit":"Heart",
      "color":"Red",
      "score":"13"
   },
   {  
      "value":"A",
      "suit":"Diamond",
      "color":"Red",
      "score":"15"
   },
   {  
      "value":"2",
      "suit":"Diamond",
      "color":"Red",
      "score":"2"
   },
   {  
      "value":"3",
      "suit":"Diamond",
      "color":"Red",
      "score":"3"
   },
   {  
      "value":"4",
      "suit":"Diamond",
      "color":"Red",
      "score":"4"
   },
   {  
      "value":"5",
      "suit":"Diamond",
      "color":"Red",
      "score":"5"
   },
   {  
      "value":"6",
      "suit":"Diamond",
      "color":"Red",
      "score":"6"
   },
   {  
      "value":"7",
      "suit":"Diamond",
      "color":"Red",
      "score":"7"
   },
   {  
      "value":"8",
      "suit":"Diamond",
      "color":"Red",
      "score":"8"
   },
   {  
      "value":"9",
      "suit":"Diamond",
      "color":"Red",
      "score":"9"
   },
   {  
      "value":"10",
      "suit":"Diamond",
      "color":"Red",
      "score":"10"
   },
   {  
      "value":"J",
      "suit":"Diamond",
      "color":"Red",
      "score":"11"
   },
   {  
      "value":"Q",
      "suit":"Diamond",
      "color":"Red",
      "score":"12"
   },
   {  
      "value":"K",
      "suit":"Diamond",
      "color":"Red",
      "score":"13"
   },
   {  
      "value":"A",
      "suit":"Club",
      "color":"Black",
      "score":"15"
   },
   {  
      "value":"2",
      "suit":"Club",
      "color":"Black",
      "score":"2"
   },
   {  
      "value":"3",
      "suit":"Club",
      "color":"Black",
       "score":"3"
   },
   {  
      "value":"4",
      "suit":"Club",
      "color":"Black",
      "score":"4"
   },
   {  
      "value":"5",
      "suit":"Club",
      "color":"Black",
      "score":"5"
   },
   {  
      "value":"6",
      "suit":"Club",
      "color":"Black",
      "score":"6"
   },
   {  
      "value":"7",
      "suit":"Club",
      "color":"Black",
      "score":"7"
   },
   {  
      "value":"8",
      "suit":"Club",
      "color":"Black",
      "score":"8"
   },
   {  
      "value":"9",
      "suit":"Club",
      "color":"Black",
      "score":"9"
   },
   {  
      "value":"10",
      "suit":"Club",
      "color":"Black",
      "score":"10"
   },
   {  
      "value":"J",
      "suit":"Club",
      "color":"Black",
      "score":"11"
   },
   {  
      "value":"Q",
      "suit":"Club",
      "color":"Black",
      "score":"12"
   },
   {  
      "value":"K",
      "suit":"Club",
      "color":"Black",
      "score":"13"
   },
   {  
      "value":"A",
      "suit":"Spade",
      "color":"Black",
      "score":"15"
   },
   {  
      "value":"2",
      "suit":"Spade",
      "color":"Black",
      "score":"2"
   },
   {  
      "value":"3",
      "suit":"Spade",
      "color":"Black",
      "score":"3"
   },
   {  
      "value":"4",
      "suit":"Spade",
      "color":"Black",
      "score":"4"
   },
   {  
      "value":"5",
      "suit":"Spade",
      "color":"Black",
      "score":"5"
   },
   {  
      "value":"6",
      "suit":"Spade",
      "color":"Black",
      "score":"6"
   },
   {  
      "value":"7",
      "suit":"Spade",
      "color":"Black",
      "score":"7"
   },
   {  
      "value":"8",
      "suit":"Spade",
      "color":"Black",
      "score":"8"
   },
   {  
      "value":"9",
      "suit":"Spade",
      "color":"Black",
      "score":"9"
   },
   {  
      "value":"10",
      "suit":"Spade",
      "color":"Black",
      "score":"10"
   },
   {  
      "value":"J",
      "suit":"Spade",
      "color":"Black",
      "score":"11"
   },
   {  
      "value":"Q",
      "suit":"Spade",
      "color":"Black",
      "score":"12"
   },
   {  
      "value":"K",
      "suit":"Spade",
      "color":"Black",
      "score":"13"
   }
];

var score = 0;

var cardNumbers = []

while(cardNumbers.length < 4){
   var randomnumber = Math.ceil(Math.random()*53)
   if(cardNumbers.indexOf(randomnumber) > -1) continue;
   cardNumbers[cardNumbers.length] = randomnumber;
}

var deck_Length = deck.length;

function get_FourRandomCards(){

	var card_One_Value = deck[cardNumbers[0]].value;
   var card_One_Suit = deck[cardNumbers[0]].suit;
	var card_One_Color = deck[cardNumbers[0]].color;
   var card_One_Score = deck[cardNumbers[0]].score;

	var card_Two_Value = deck[cardNumbers[1]].value;
   var card_Two_Suit = deck[cardNumbers[1]].suit;
	var card_Two_Color = deck[cardNumbers[1]].color;
   var card_Two_Score = deck[cardNumbers[1]].score;


	var card_Three_Value = deck[cardNumbers[2]].value;
   var card_Three_Suit = deck[cardNumbers[2]].suit;
	var card_Three_Color = deck[cardNumbers[2]].color;
   var card_Three_Score = deck[cardNumbers[2]].score;


	var card_Four_Value = deck[cardNumbers[3]].value;
   var card_Four_Suit = deck[cardNumbers[3]].suit;
	var card_Four_Color = deck[cardNumbers[3]].color;
   var card_Four_Score = deck[cardNumbers[3]].score;


	console.log("card one is", card_One_Value, card_One_Suit, "card two is", card_Two_Value, card_Two_Suit);
	console.log("card three is", card_Three_Value, card_Three_Suit, "card four is", card_Four_Value, card_Four_Suit);

	guess_Firstcard(card_One_Color, card_One_Score, card_One_Value, card_One_Suit);
   show_Question2();
   guess_Secondcard(card_One_Score, card_Two_Score, card_Two_Value, card_Two_Suit);
   guess_Thirdcard(card_Three_Score, card_Two_Score, card_One_Score, card_Three_Value, card_Three_Suit);
   show_Question3();

};


function guess_Firstcard(card_One_Color, card_One_Score, card_One_Value, card_One_Suit) {

	$('.button1').click(function(){
		var guess_One = $(this).attr('id');
		console.log(guess_One);
	
		if (guess_One == card_One_Color) {
			score += parseInt(card_One_Score);

		} else {
			score -= parseInt(card_One_Score);
		};
   	console.log("this is the score after button one click" + score);
      $('.card_One_Reveal').append("card 1:" + card_One_Value + card_One_Suit + "Score:" + score);
   });
};

function show_Question2(){
   $('.button1').click(function(){
      $('.two').show();

   });
};

function guess_Secondcard(card_One_Score, card_Two_Score, card_Two_Value, card_Two_Suit){

   $('.button2').click(function(){
     var guess_Two = $(this).attr('id');
     console.log(guess_Two);
     console.log(card_Two_Score);

      if ((guess_Two == "higher") && (card_Two_Score > card_One_Score)) {
         score += parseInt(card_Two_Score);
     
      } else if ((guess_Two == "lower") && (card_Two_Score < card_One_Score)) {
         score += parseInt(card_Two_Score);
      
      } else {
         score -= parseInt(card_Two_Score);
      };
      console.log("this is score after button two click" + score);
      $('.card_Two_Reveal').append("card 2:" + card_Two_Value + card_Two_Suit + "Score:" + score);

});
};


function guess_Thirdcard(card_Three_Score, card_Two_Score, card_One_Score, card_Three_Value, card_Three_Suit){
   $('.button3').click(function(){
     var guess_Three = $(this).attr('id');
     console.log(guess_Three);
     console.log(card_Three_Score);

      if ((guess_Three == "outside") && (((card_Three_Score < card_Two_Score) && (card_Three_Score < card_One_Score))||((card_Three_Score > card_One_Score) && (card_Three_Score > card_Two_Score)))) {
         score += parseInt(card_Three_Score);
     

      } else if ((guess_Three == "inside") && ((card_Two_Score < card_Three_Score < card_One_Score)||(card_One_Score < card_Three_Score < card_Two_Score))) {
         score += parseInt(card_Three_Score);
      
      } else {
         score -= parseInt(card_Three_Score);
      };
      console.log("this is score after button three click" + score);
      $('.card_Three_Reveal').append("card 3:" + card_Three_Value + card_Three_Suit + "Score:" + score);

});
};

function show_Question3(){
   $('.button2').click(function(){
      $('.three').show();

   });
};

$(document).ready(function(){
	$('.two').hide();
   $('.three').hide();
   get_FourRandomCards();

});


