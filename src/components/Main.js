import React from "react";
import profileAvatar from '../images/Man.jpg';
import api from '../utils/Api.js';

function Main(props) {

    return (
        <main className="content">
            <section className="profile">
                <button onClick={props.onEditAvatar} className="profile__avatar-edit-button" type="button" aria-label="Редактировать-аватар"></button>
                <img src={profileAvatar} alt="Фото профиля" className="profile__avatar"  />

                <div className="profile__info">
                <h1 className="profile__section-title">Жак-Ив Кусто</h1>
                <button onClick={props.onEditProfile} className="profile__edit-button" type="button" aria-label="Изменить"></button>
                <p className="profile__section-subtitle">Исследователь океана</p>
                </div>

                <button onClick={props.onAddPhoto} className="profile__add-button" type="button" aria-label="Добавить"></button>

            </section>

            <section className="cardsPlace" aria-label="Фотографии"></section>
        </main>
    )
}

export default Main;
