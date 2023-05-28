import React from "react";
import cover from "../../assets/memory-game-img/cover.png";

const SingleCardAnimals = ({ card, handelVoice}) => {
  const handleClick = () => {
    handelVoice(card);
  };
  return (
    <div className="game-card">
      {/* <img className="front" src={card.url} alt="card-front" /> */}
      <img
        className="back"
        src={card.url }
        alt="card-front"
        onClick={handleClick}
      />
    </div>
  );
};

export default SingleCardAnimals;
