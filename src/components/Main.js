import React from 'react';
import { api } from './utils/Api'
import Card from './Card'

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {

  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((err) => {
        console.log(`Произошла ошибка ${err}`);
      });

  }, []);

  React.useEffect(() => {
    api.getCardsFromApi()
      .then((initialCards) => {
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
          <img className="profile__avatar" src="" alt="" style={{ backgroundImage: `url(${userAvatar})` }} />
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
