import React, { useEffect, useState } from "react";
import "./memory-game.css";
import helmet from "../../assets/memory-game-img/helmet-1.png";
import potion from "../../assets/memory-game-img/potion-1.png";
import ring from "../../assets/memory-game-img/ring-1.png";
import scroll from "../../assets/memory-game-img/scroll-1.png";
import shield from "../../assets/memory-game-img/shield-1.png";
import sword from "../../assets/memory-game-img/sword-1.png";
import SingleCard from "../../component/singleCard/singleCard.componet";

const MemoryGame = () => {
  const cardImages = [
    { url: helmet, matched: false },
    { url: potion, matched: false },
    { url: ring, matched: false },
    { url: scroll, matched: false },
    { url: shield, matched: false },
    { url: sword, matched: false },
  ];
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.url === choiceTwo.url) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.url === choiceOne.url) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        console.log("match");
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);
  useEffect(() => {
    shuffledCards();
  }, []);
  console.log(cards);
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurn) => prevTurn + 1);
    setDisabled(false);
  };
  const shuffledCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  return (
    <div className="game-wrapper">
      <h1>Magic Match</h1>
      <button onClick={shuffledCards} className="new-game">
        New Game
      </button>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
};

export default MemoryGame;
