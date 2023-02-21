import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import {useState} from 'react';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState();
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState();
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState();
  const [selectedCard, setSelectedCard] = useState({ name: '', link: '' });

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleCardClick(card) {
    setSelectedCard({ name: card.name, link: card.link })
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ name: '', link: '' });
  }

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm name={'profile'} title={'Редактировать профиль'} submitTitle={'Сохранить'} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} >
        <label className="popup__input-field">
          <input type="text" name="name" className="popup__input popup__input_field_name popup__input" id="name-input"
            placeholder="Имя" minLength="2" maxLength="40" required />
          <span className="popup__input-error name-input-error"></span>
        </label>
        <label className="popup__input-field">
          <input type="text" name="job" className="popup__input popup__input_field_job" id="job-input" placeholder="О себе"
            minLength="2" maxLength="200" required />
          <span className="popup__input-error job-input-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm name={'update-avatar'} title={'Обновить аватар'} submitTitle={'Сохранить'} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <label className="popup__input-field">
          <input type="url" name="avatar" className="popup__input popup__input_field_link" id="link-avatar"
            placeholder="Ссылка на аватар" required />
          <span className="popup__input-error link-avatar-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm name={'card'} title={'Новое место'} submitTitle={'Создать'} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <label className="popup__input-field">
          <input type="text" name="title" className="popup__input popup__input_field_placename" id="placename-input"
            placeholder="Название" minLength="2" maxLength="30" required />
          <span className="popup__input-error placename-input-error"></span>
        </label>
        <label className="popup__input-field">
          <input type="url" name="link" className="popup__input popup__input_field_link" id="link-input"
            placeholder="Ссылка на картинку" required />
          <span className="popup__input-error link-input-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm name={'confirm'} title={'Вы уверены?'} submitTitle={'Да'} />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
