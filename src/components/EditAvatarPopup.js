import { useRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import React from 'react';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {

  const avatarRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  useEffect(() => {
    avatarRef.current.value = '';
  }, [isOpen]);

  return (
    <PopupWithForm name={'update-avatar'} title={'Обновить аватар'} submitTitle={'Сохранить'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <label className="popup__input-field">
        <input type="url" name="avatar" ref={avatarRef} className="popup__input popup__input_field_link" id="link-avatar"
          placeholder="Ссылка на аватар" required />
        <span className="popup__input-error link-avatar-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
