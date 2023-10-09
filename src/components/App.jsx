import '../index.css';

import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false);
  const [isProfilePopupOpen, setProfilePopupOpen] = React.useState(false);
  const [isPhotoPopupOpen, setPhotoPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [isDeleteOpen, setDeleteOpen] = React.useState(false);

  function handleCardClick(card) {
    setSelectedCard({
      link: card.link,
      name: card.name,
    });
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
  };

  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPhoto={handleAddPlaceClick}
          onCardClick={handleCardClick}
          openDelete={handleDeletePopupClick}
        />
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
