import '../index.css';
import api from '../utils/Api.js';

import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';

function App() {
  const [isAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false);
  const [isProfilePopupOpen, setProfilePopupOpen] = React.useState(false);
  const [isPhotoPopupOpen, setPhotoPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [isDeleteOpen, setDeleteOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState('');

  React.useEffect(() => {
    function fetchUserInfo() {
      api.getUserInfo()
        .then(userInfo => {
          setCurrentUser(userInfo);
        })
        .catch(err => console.log(`Что-то пошло не так: ${err}`));
    }
  
    fetchUserInfo();
  }, []);

  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopupOpen(true);
  }

  function handleDeletePopupClick() {
    setDeleteOpen(true);
  }

  function handleEditAvatarClick() {
    setAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setPhotoPopupOpen(true);
  }

  const closeAllPopup = () => {
    setProfilePopupOpen(false);
    setAvatarPopupOpen(false);
    setPhotoPopupOpen(false);
    setImagePopupOpen(false);
    setDeleteOpen(false);
  };

  return (
    <div className="root">
      <div className="page">
        <Header />
        <CurrentUserContext.Provider value={currentUser}>
          <Main
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onAddPhoto={handleAddPlaceClick}
            onCardClick={handleCardClick}
            openDelete={handleDeletePopupClick}
          />
        </CurrentUserContext.Provider>
        <Footer />
      </div>

      <PopupWithForm
        isOpen={isProfilePopupOpen}
        onClose={closeAllPopup}
        name="edit-profile"
        containerClass=""
        formName="popupFormProfile"
        method="POST"
        title="Редактировать профиль"
        buttonText="Сохранить"
        buttonClass="popup__submit-button_edit-profile"
      >
        <label className="popup__label">
          <input
            id="userName-input"
            className="popup__input popup__input_role_name"
            placeholder="Имя"
            name="username"
            type="text"
            minLength="2"
            maxLength="40"
            required
          />
          <span id="username-error" className="popup__error-visible"></span>
        </label>
        <label className="popup__label">
          <input
            id="userProf-input"
            className="popup__input popup__input_role_about"
            placeholder="О себе"
            name="profession"
            type="text"
            minLength="2"
            maxLength="200"
            required
          />
          <span id="profession-error" className="popup__error-visible"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isAvatarPopupOpen}
        onClose={closeAllPopup}
        name="type_avatar"
        containerClass="popup__container-avatar"
        formName="inputAvatar"
        title="Обновить аватар"
        buttonText="Сохранить"
      >
        <label className="popup__label">
          <input
            id="url"
            className="popup__input popup__input_type_title"
            type="url"
            name="userAvatar"
            placeholder="Введите ссылку на аватар"
            minLength="2"
            maxLength="200"
            required
          />
          <span id="userAvatar-error" className="popup__error-visible"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isPhotoPopupOpen}
        onClose={closeAllPopup}
        name="add-photo"
        containerClass=""
        formName="popupFormAddCard"
        method="POST"
        title="Новое место"
        buttonText="Создать"
        buttonClass="popup__submit-button_add-photo"
      >
        <label className="popup__label">
          <input
            id="placeName-input"
            className="popup__input popup__input_NameCard"
            placeholder="Название"
            name="name"
            type="text"
            minLength="2"
            maxLength="30"
            required
          />
          <span id="name-error" className="popup__error-visible"></span>
        </label>
        <label className="popup__label">
          <input
            id="placeLink-input"
            className="popup__input popup__input_UrlCard"
            placeholder="Ссылка на картинку"
            name="link"
            type="url"
            required
          />
          <span id="link-error" className="popup__error-visible"></span>
        </label>
      </PopupWithForm>

      <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopup} />

      <PopupWithForm
        isOpen={isDeleteOpen}
        onClose={closeAllPopup}
        name="type_delete-card"
        containerClass="popup__container-delete"
        title="Вы уверены?"
        buttonText="Да"
        buttonClass="popup__type-delete"
      />
    </div>
  );
}

export default App;
