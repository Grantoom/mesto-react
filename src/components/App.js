import '../index.css';

import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

function App() {

  const [isProfilePopupOpen, setProfilePopupOpen] = React.useState(false);
  const [isAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false);
  const [isPhotoPopupOpen, setPhotoPopupOpen] = React.useState(false);

  function handleEditAvatarClick () {
    setAvatarPopupOpen(true);   
  }

  function handleEditProfileClick () {
    setProfilePopupOpen(true);
  }

  function handleAddPlaceClick () {
    setPhotoPopupOpen(true);
  }

  const closeAllPopup = () => {
    setProfilePopupOpen(false);
    setAvatarPopupOpen(false);
    setPhotoPopupOpen(false);
  }

  return (
    <div className="root">

    <div className="page">
  
      <Header />
  
      <Main 

      onEditProfile={handleEditProfileClick}
      onEditAvatar={handleEditAvatarClick}
      onAddPhoto={handleAddPlaceClick}
      
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
            <input id="userName-input" className="popup__input popup__input_role_name" placeholder="Имя" name="username" type="text" minlength="2" maxlength="40" required  />
            <span id="username-error" className="popup__error-visible"></span>
          </label>
          <label className="popup__label">
            <input id="userProf-input" className="popup__input popup__input_role_about" placeholder="О себе" name="profession" type="text" minlength="2" maxlength="200" required  />
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
            <input id="url" className="popup__input popup__input_type_title" type="url" name="userAvatar" placeholder="Введите ссылку на аватар" minlength="2" maxlength="200" required  />
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
            <input id="placeName-input" className="popup__input popup__input_NameCard" placeholder="Название" name="name" type="text" minlength="2" maxlength="30" required  />
            <span id="name-error" className="popup__error-visible"></span>
          </label>
          <label className="popup__label">
            <input id="placeLink-input" className="popup__input popup__input_UrlCard" placeholder="Ссылка на картинку" name="link" type="url" required  />
            <span id="link-error" className="popup__error-visible"></span>
          </label>
    </PopupWithForm>
  
    <div className="popup popup-image">
      <div className="popup-image__container">
  
        <button className="popup__exit" type="button" aria-label="Закрыть окно"></button>
        <img className="popup-image__pic" alt="#" src="#"  />
        <p className="popup-image__title"></p>
  
      </div>
    </div>
  
    <PopupWithForm
      name='type_delete-card'
      containerClass="popup__container-delete"
      title='Вы уверены?'
      buttonText="Да"
      buttonClass="popup__type-delete"
    >
    </PopupWithForm>

    <template id="element-template">
      <div className="element">
  
        <img className="element__img" src="#" alt="#"  />
        <button className="element__trash" type="button" aria-label="Удалить карточку"></button>
  
        <div className="element__description">
          <h2 className="element__text"></h2>
          <button className="element__vector" type="button" aria-label="Поставить лайк"></button>
          <p className="element__like-count">0</p>
        </div>
  
      </div>
    </template>
  
  </div>
  );
}

export default App;