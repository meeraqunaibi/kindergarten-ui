import React from "react";
import cover from "../../assets/memory-game-img/cover.png";

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <div className={`game-card ${flipped ? "flipped" : ""}`}>
      <img className="front" src={card.url} alt="card-front" />
      <img
        className="back"
        src={cover}
        onClick={handleClick}
        alt="card-front"
      />
    </div>
  );
};

export default SingleCard;
