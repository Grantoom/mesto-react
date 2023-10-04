import '../index.css';


import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="root">

    <div className="page">
  
      <Header />
  
      <Main />
  
      <Footer />
  
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