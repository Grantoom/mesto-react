import React from "react";
import Card from './Card.jsx';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';

function Main({onEditProfile, onEditAvatar, onAddPhoto, onCardClick, openDelete, cards, onCardLike}) {

    const currentUser = React.useContext(CurrentUserContext);

    return (
        <main className="content">
            <section className="profile">
                <button onClick={onEditAvatar} className="profile__avatar-edit-button" type="button" aria-label="Редактировать-аватар"></button>
                <img src={currentUser.avatar} alt="Фото профиля" className="profile__avatar"  />

                <div className="profile__info">
                    <h1 className="profile__section-title">{currentUser.name}</h1>
                    <button onClick={onEditProfile} className="profile__edit-button" type="button" aria-label="Изменить"></button>
                    <p className="profile__section-subtitle">{currentUser.about}</p>
                </div>

                <button onClick={onAddPhoto} className="profile__add-button" type="button" aria-label="Добавить"></button>

            </section>

            <section className="elements" aria-label="Фотографии">
                {cards.map((card) => {
                    return (
                        <Card
                            key={card._id}
                            card={card}
                            onCardClick={onCardClick}
                            openDelete={openDelete}
                            onCardLike={onCardLike}
                        />
                    );
                })}
            </section>

        </main>
    )
}

export default Main;