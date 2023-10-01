import './index.css';

import headerLogo from './images/logo.svg'; 
import profileAvatar from './images/Man.jpg';

function App() {
  return (
    <div className="root">

    <div className="page">
  
      <header className="header">
        <img src={headerLogo} alt="Логотип место" className="header__logo" />
      </header>
  
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
  
      <footer className="footer">
        <p className="footer__copyrights" lang="en">&copy; 2023 Mesto Russia</p>
      </footer>
  
    </div>
  
    
    <div className="popup popup_edit-profile">
      <div className="popup__container">
        <button className="popup__exit" type="button" aria-label="Закрыть окно"></button>
  
        <h2 className="popup__header">Редактировать профиль</h2>
        <form className="popup__form popup__form_edit-profile" name="popupFormProfile" method="POST" novalidate>
          <label className="popup__label">
            <input id="userName-input" className="popup__input popup__input_role_name" placeholder="Имя" name="username" type="text" minlength="2" maxlength="40" required  />
            <span id="username-error" className="popup__error-visible"></span>
          </label>
          <label className="popup__label">
            <input id="userProf-input" className="popup__input popup__input_role_about" placeholder="О себе" name="profession" type="text" minlength="2" maxlength="200" required  />
            <span id="profession-error" className="popup__error-visible"></span>
          </label>
          <button className="popup__submit-button popup__submit-button_edit-profile" type="submit">Сохранить</button>
        </form>
  
      </div>
    </div>
  
     
     <div className="popup popup_type_avatar">
      <div className="popup__container-avatar">
  
        <button className="popup__exit" type="button"></button>
        <form className="popup__form popup__form_avatar" name="inputAvatar" novalidate>
          <h2 className="popup__header">Обновить аватар</h2>
          <label className="popup__label">
            <input id="url" className="popup__input popup__input_type_title" type="url" name="userAvatar" placeholder="Введите ссылку на аватар" minlength="2" maxlength="200" required  />
            <span id="userAvatar-error" className="popup__error-visible"></span>
          </label>
          <button className="popup__submit-button" type="submit">Сохранить</button>
        </form>
  
      </div>
    </div>
  
     
    <div className="popup popup_add-photo">
      <div className="popup__container">
        <button className="popup__exit" type="button" aria-label="Закрыть окно"></button>
  
        <h2 className="popup__header">Новое место</h2>
        <form className="popup__form popup__form_add-photo" name="popupFormAddCard" method="POST" novalidate>
          <label className="popup__label">
            <input id="placeName-input" className="popup__input popup__input_NameCard" placeholder="Название" name="name" type="text" minlength="2" maxlength="30" required  />
            <span id="name-error" className="popup__error-visible"></span>
          </label>
          <label className="popup__label">
            <input id="placeLink-input" className="popup__input popup__input_UrlCard" placeholder="Ссылка на картинку" name="link" type="url" required  />
            <span id="link-error" className="popup__error-visible"></span>
          </label>
          <button className="popup__submit-button popup__submit-button_add-photo" type="submit" aria-label="Создать новую карточку">Создать</button>
        </form>
  
      </div>
    </div>
  
     
    <div className="popup popup-image">
      <div className="popup-image__container">
  
        <button className="popup__exit" type="button" aria-label="Закрыть окно"></button>
        <img className="popup-image__pic" alt="#" src="#"  />
        <p className="popup-image__title"></p>
  
      </div>
    </div>
  
  
  <div className="popup popup_type_delete-card">
    <div className="popup__container-delete">
  
      <form className="popup__form popup__form_delete">
        <button className="popup__exit" type="button"></button>
        <h2 className="popup__header">Вы уверены?</h2>
        <button type="submit" className="popup__submit-button popup__type-delete" aria-label="Удалить карточку">Да</button>
      </form>
  
    </div>
  </div>
  
    
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
