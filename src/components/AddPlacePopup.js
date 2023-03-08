import { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {


  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');

  function handleInputAddTitle(event) {
    setTitle(event.target.value);
  }

  function handleInputAddLink(event) {
    setLink(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddPlace({
      name: title,
      link: link,
    });
  }

  return (
    <PopupWithForm name={'card'} title={'Новое место'} submitTitle={'Создать'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <label className="popup__input-field">
        <input type="text" name="title" onChange={handleInputAddTitle} className="popup__input popup__input_field_placename" id="placename-input"
          placeholder="Название" minLength="2" maxLength="30" required />
        <span className="popup__input-error placename-input-error"></span>
      </label>
      <label className="popup__input-field">
        <input type="url" name="link" onChange={handleInputAddLink} className="popup__input popup__input_field_link" id="link-input"
          placeholder="Ссылка на картинку" required />
        <span className="popup__input-error link-input-error"></span>
      </label>
    </PopupWithForm>
  )

}

export default AddPlacePopup;

