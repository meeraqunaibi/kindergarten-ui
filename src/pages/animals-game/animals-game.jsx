import React, { useEffect, useState } from "react";
import {Howl, Howler} from 'howler';
import elefantVoice from "../../assets/animals-game-voices/Elefant.mp3";
import elefantImg from "../../assets/animals-game-img/Elefant.jpg";
import bonyVoice from "../../assets/animals-game-voices/Pony.mp3";
import bonyImg from "../../assets/animals-game-img/pony.jpg"
import SingleCardAnimals from "../../component/singleCardAnimals/singleCard.componet";

const AnimalsGame = () => {
    const cardImgVoic = [
        { url: elefantImg, voice: elefantVoice},
        { url: bonyImg, voice: bonyVoice}
        // { img: helmet, voice: false },
        // { img: helmet, voice: false },
        // { img: helmet, voice: false },
        // { img: helmet, voice: false },
        // { img: helmet, voice: false },
      ];

      const handelVoice = (card) => {
        
        console.log(card.voice)
        var sound = new Howl({
          src: [card.voice]
        });
        sound.play();
      }

    return ( 
<div className="game-wrapper">
      <h1>Animal Voice</h1>
      <div className="card-grid">
        {cardImgVoic.map((card) => (
          <SingleCardAnimals
            key={card.id}
            card={card}
            handelVoice={handelVoice}
          />
        ))}
      </div>
        </div>
    );
};

export default AnimalsGame;