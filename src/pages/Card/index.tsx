import React, { useState, useEffect, useCallback, MouseEvent, useRef } from 'react';
import { Repositories } from './styles';

interface ICard {
  id: string;
  name: string;
  detail: string;
  isPressed: boolean;
}

const Card: React.FC = () => {

  let cards: ICard[] = [];

  const [isPressed, setPressed] = useState(true);

  for (let i: number = 1; i <= 5; i++) {

    const card: ICard = {
      id: i.toString(),
      name: `name: ${i}`,
      detail: `name: ${i} detail`,
      isPressed: false,
    }
    cards.push(card);
  }

  const divStyle1 = {
    color: '#ff9000',
    border: '1px solid red'
  };

  const divStyle2 = {
    color: '#fd6595',
    border: '1px solid blue'
  };

  const handleClick = (e: MouseEvent) => {
    setPressed(!isPressed);

    cards.map(card => {
      if (card.id === e.currentTarget.id) {
        card.isPressed = !card.isPressed;

      }

      console.log(card.id + '-' + card.isPressed);

    })

  };

  return (
    <>
      {
        cards.map(card => (
          <Repositories id={card.id} key={card.id} onClick={handleClick}>
            {card.isPressed ? card.detail : card.name}
          </Repositories>
        ))}
    </>
  );
}

export default Card;
