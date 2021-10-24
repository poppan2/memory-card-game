import React, {useState} from "react";
import Card from "./Card";
import cards from './cards'

const CardGame = ()=>{

    const [flipCount, setFlipCount] = useState(0)
    const [clickedCards, setClickedCards] = useState([])

    const handleFlipCount = (card)=>{

        setFlipCount(flipCount + 1)
        setClickedCards([...clickedCards, card])
    }


    const cardArr = cards.map((card, index) => {

        return(
          <Card card={card} key={index} handleFlipCount={handleFlipCount}/>
        )

    })
    
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    } 
    
    shuffleArray(cards)
    if (flipCount === 2){
       
        document.getElementById('message').style.display = "block"
        document.getElementById('game-board').style.opacity = "0.3";
        

        if(clickedCards[0].rank === clickedCards[1].rank){
            
            document.getElementById('message').innerHTML = 'You Found a match';
        }else{
            
            document.getElementById('message').innerHTML ='Sorry, not a match';
        }
    }
    
    return(
        <div>
            {cardArr}
        </div>
    )
}

export default CardGame;