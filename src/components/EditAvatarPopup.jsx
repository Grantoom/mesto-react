import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {

    const avatarRef = useRef('')

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar({
            avatar: avatarRef.current.value
        });
    }
    
    return (
        <PopupWithForm
        isOpen={props.inOpen}
        onClose={props.onClose}
        onSubmit={handleSubmit}
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
    )
}

export default EditAvatarPopup;