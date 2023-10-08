import React from "react";
import profileAvatar from '../images/Man.jpg';
import api from '../utils/Api.js';



function Main(props) {

    const[userName, setUserName] = React.useState('');
    const[userDescription, setUserDescription] = React.useState('');
    const[userAvatar, setUserAvatar] = React.useState('');

    React.useEffect(() => {
        api.getUserInfo()
            .then((data) => {
                setUserName(data.name);
                setUserDescription(data.about);
                setUserAvatar(data.avatar);
            })
            .catch((err) => {
                console.log('Ошибка. Запрос не выполнен: ', err);
            });
      }, []);


    return (
        <main className="content">
            <section className="profile">
                <button onClick={props.onEditAvatar} className="profile__avatar-edit-button" type="button" aria-label="Редактировать-аватар"></button>
                <img style={{ backgroundImage: `url(${userAvatar})` }} src={userAvatar} alt="Фото профиля" className="profile__avatar"  />

                <div className="profile__info">
                <h1 className="profile__section-title">{userName}</h1>
                <button onClick={props.onEditProfile} className="profile__edit-button" type="button" aria-label="Изменить"></button>
                <p className="profile__section-subtitle">{userDescription}</p>
                </div>

                <button onClick={props.onAddPhoto} className="profile__add-button" type="button" aria-label="Добавить"></button>

            </section>

            <section className="cardsPlace" aria-label="Фотографии"></section>
        </main>
    )
}

export default Main;
