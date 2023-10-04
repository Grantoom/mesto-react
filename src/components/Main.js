import React from "react";
import profileAvatar from '../images/Man.jpg';

function Main() {
    return(
        <main className="content">
  
        <section className="profile">
            <button className="profile__avatar-edit-button" type="button" aria-label="Редактировать-аватар"></button>
            <img src={profileAvatar} alt="Фото профиля" className="profile__avatar"  />

            <div className="profile__info">
            <h1 className="profile__section-title">Жак-Ив Кусто</h1>
            <button className="profile__edit-button" type="button" aria-label="Изменить"></button>
            <p className="profile__section-subtitle">Исследователь океана</p>
            </div>

            <button className="profile__add-button" type="button" aria-label="Добавить"></button>

        </section>

        <section className="cardsPlace" aria-label="Фотографии"></section>

        </main>
    )
}

export default Main;