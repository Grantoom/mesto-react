import React from "react";
import api from '../utils/Api.js';
import Card from './Card.jsx';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';

function Main(props) {

    const[cards, setCards] = React.useState([]);
    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        Promise.all([api.getCards()])
            .then(([resDataCard]) => {
                
                setCards(resDataCard)
            })
            .catch(err => console.log(`Что-то пошло не так: ${err}`))
    }, [])

    return (
        <main className="content">
            <section className="profile">
                <button onClick={props.onEditAvatar} className="profile__avatar-edit-button" type="button" aria-label="Редактировать-аватар"></button>
                <img src={currentUser.avatar} alt="Фото профиля" className="profile__avatar"  />

                <div className="profile__info">
                    <h1 className="profile__section-title">{currentUser.name}</h1>
                    <button onClick={props.onEditProfile} className="profile__edit-button" type="button" aria-label="Изменить"></button>
                    <p className="profile__section-subtitle">{currentUser.about}</p>
                </div>

                <button onClick={props.onAddPhoto} className="profile__add-button" type="button" aria-label="Добавить"></button>

            </section>

            <section className="cardsPlace" aria-label="Фотографии">
                {cards.map((item) => {
                    return (
                        <Card
                            key={item._id}
                            {...item}
                            onCardClick={props.onCardClick}
                            openDelete={props.openDelete}
                        />
                    );
                })}
            </section>

        </main>
    )
}

export default Main;