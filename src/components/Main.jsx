import React from "react";
import api from '../utils/Api.js';
import Card from './Card.jsx';

function Main(props) {

    const[userName, setUserName] = React.useState('');
    const[userDescription, setUserDescription] = React.useState('');
    const[userAvatar, setUserAvatar] = React.useState('');
    const[cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getCards()])
            .then(([resDataUser, resDataCard]) => {
                setUserName(resDataUser.name)
                setUserDescription(resDataUser.about)
                setUserAvatar(resDataUser.avatar)
                setCards(resDataCard)
            })
            .catch(err => console.log(`Что-то пошло не так: ${err}`))
    }, [])

    return (
        <main className="content">
            <section className="profile">
                <button onClick={props.onEditAvatar} className="profile__avatar-edit-button" type="button" aria-label="Редактировать-аватар"></button>
                <img src={userAvatar} alt="Фото профиля" className="profile__avatar"  />

                <div className="profile__info">
                <h1 className="profile__section-title">{userName}</h1>
                <button onClick={props.onEditProfile} className="profile__edit-button" type="button" aria-label="Изменить"></button>
                <p className="profile__section-subtitle">{userDescription}</p>
                </div>

                <button onClick={props.onAddPhoto} className="profile__add-button" type="button" aria-label="Добавить"></button>

            </section>

            <section className="cardsPlace" aria-label="Фотографии">
                {cards.map((item) => {
                    return <Card key={item._id} {...item}/>
                })}
            </section>
        </main>
    )
}

export default Main;