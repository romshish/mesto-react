import { useEffect, useState, useContext } from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const userData = useContext(CurrentUserContext);

  function handleInputChangeName(event) {
    setName(event.target.value);
  }

  function handleInputChangeDescription(event) {
    setDescription(event.target.value);
  }

  useEffect(() => {
    setName(userData.name);
    setDescription(userData.about);
  }, [userData]);

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm name={'profile'} title={'Редактировать профиль'} submitTitle={'Сохранить'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <label className="popup__input-field">
        <input type="text" name="name" className="popup__input popup__input_field_name popup__input" id="name-input"
          placeholder="Имя" minLength="2" maxLength="40" required onChange={handleInputChangeName} />
        <span className="popup__input-error name-input-error"></span>
      </label>
      <label className="popup__input-field">
        <input type="text" name="job" className="popup__input popup__input_field_job" id="job-input" placeholder="О себе"
          minLength="2" maxLength="200" required onChange={handleInputChangeDescription} />
        <span className="popup__input-error job-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
