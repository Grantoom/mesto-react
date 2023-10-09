import React from "react";

function Card(props) {
  return (
      <div className="element">
        <img onClick = {() => props({link: props.link, name: props.name})} className="element__img" src={props.link} alt="Изображение карточки" />
        <button onClick={props.onClose} className="element__trash" type="button" aria-label="Удалить карточку"></button>
        <div className="element__description">
          <h2 className="element__text">{props.name}</h2>
          <button className="element__vector" type="button" aria-label="Поставить лайк"></button>
          <p className="element__like-count">{props.likes.length}</p>
        </div>
      </div>
  );
}

export default Card;
