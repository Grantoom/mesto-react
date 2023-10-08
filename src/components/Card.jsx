import React from "react";
import '../index.css';

function Card({link, name, likes = []}) {
    return (
        
        <div className="element">
    
          <img className="element__img" src={link} alt="#" />
          <button className="element__trash" type="button" aria-label="Удалить карточку"></button>
    
          <div className="element__description">
            <h2 className="element__text">{name}</h2>
            <button className="element__vector" type="button" aria-label="Поставить лайк"></button>
            <p className="element__like-count">{likes.length}</p>
          </div>
    
        </div>
    );
}

export default Card;