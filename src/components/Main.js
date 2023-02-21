import {useEffect, useState} from 'react';
import { api } from '../utils/Api'
import Card from './Card'

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getAllNeededData()
      .then(([userData, initialCards]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(`Произошла ошибка ${err}`);
      });

  }, []);

  return (
    <main className="content">
      <section className="profile page__section">
        <div className="profile__wrapper" onClick={onEditAvatar} >
          <img className="profile__avatar" src={`${userAvatar}`} alt="" />
        </div>
        <div className="profile__info">
          <div className="profile__name-wrapper">
            <h1 className="profile__name">{userName}</h1>
            <button type="button" onClick={onEditProfile} className="profile__button-edit"></button>
          </div>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button type="button" className="profile__button-add" onClick={onAddPlace}></button>
      </section>

      <section className="elements page__section" aria-label="Подборка фотографий автора">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card key={card._id} title={card.name} likes={card.likes.length} src={card.link} onCardClick={onCardClick} card={card} />
          ))}
        </ul>
      </section>

    </main>
  );
}

export default Main;
