import React from "react";
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.owner._id === currentUser._id;
  const isLiked = props.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = ( 
    `card__like-button ${isLiked && 'card__like-button_active'}` 
  );; 
  return (
      <div className="element">
        <img onClick = {() => props.onCardClick({link: props.link, name: props.name})} className="element__img" src={props.link} alt={`На карточке ${props.name}`} />
        {isOwn && <button onClick={props.openDelete} className="element__trash" type="button" aria-label="Удалить карточку"></button>}
        <div className="element__description">
          <h2 className="element__text">{props.name}</h2>
          {cardLikeButtonClassName && <button className="element__vector" type="button" aria-label="Поставить лайк"></button>}
          <p className="element__like-count">{props.likes.length}</p>
        </div>
      </div>
  );
}

export default Card;
