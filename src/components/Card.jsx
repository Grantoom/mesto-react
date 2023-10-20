import React from "react";
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';

function Card({card, name, link, likes, owner, onCardClick, openDelete, onCardLike}) {

  function handleLikeClick() {
    onCardLike(card);
  }
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = owner._id === currentUser._id;
  const isLiked = likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = `card__like-button ${isLiked ? 'card__like-button_active' : ''}`;

  return (
      <div className="element">
        <img onClick = {() => onCardClick({link: link, name: name})} className="element__img" src={link} alt={`На карточке ${name}`} />
        {isOwn && <button onClick={openDelete} className="element__trash" type="button" aria-label="Удалить карточку"></button>}
        <div className="element__description">
          <h2 className="element__text">{name}</h2>
          {cardLikeButtonClassName && <button onClick={handleLikeClick} className="element__vector" type="button" aria-label="Поставить лайк"></button>}
          <p className="element__like-count">{likes.length}</p>
        </div>
      </div>
  );
}

export default Card;