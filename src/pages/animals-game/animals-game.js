import React, { useEffect, useState } from "react";
import {Howl, Howler} from 'howler';
import elefantVoice from "../../assets/animals-game-voices/Elefant.mp3";
import elefantImg from "../../assets/animals-game-img/Elefant.jpg";
import bonyVoice from "../../assets/animals-game-voices/Pony.mp3";
import bonyImg from "../../assets/animals-game-img/pony.jpg"
import SingleCardAnimals from "../../component/singleCardAnimals/singleCard.componet";
import gorilaImg from "../../assets/animals-game-img/Gorilla.jpg";
import gorilaVoice from "../../assets/animals-game-voices/Gorilla.mp3"
import wolfVoice from "../../assets/animals-game-voices/wolf.mp3"
import wolfImg from "../../assets/animals-game-img/wolf.jpg"
import alligatorImg from "../../assets/animals-game-img/alligator.jpg"
import alligatorVoice from "../../assets/animals-game-voices/alligator.mp3"
import leopardImg from "../../assets/animals-game-img/leopard.jpg"
import leopardVoice from "../../assets/animals-game-voices/Leopard.mp3"

const AnimalsGame = () => {
    const cardImgVoic = [
        { url: elefantImg, voice: elefantVoice},
        { url: bonyImg, voice: bonyVoice},
        { url: gorilaImg, voice: gorilaVoice },
        { url: wolfImg, voice: wolfVoice },
        { url: alligatorImg, voice: alligatorVoice },
        { url: leopardImg, voice: leopardVoice }
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
      <h1>أصوات الحيوانات</h1>
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