import React, {useState} from 'react';

const Card = (props) =>{

    const [flipCard, setFlipCard] = useState(props.card.baseImage)

    const handleFlip = (url) =>{

    setFlipCard(url)
  }

    const finalFunc = (event)=>{
        event.preventDefault()
        handleFlip(props.card.cardImage);
        props.handleFlipCount(props.card)
    }
    return(
        <img src={flipCard}
            alt={props.card.rank}
            onClick={finalFunc}
        ></img>
    )
}

export default Card;