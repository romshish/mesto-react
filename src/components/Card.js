
function Card({ title, likes, src, onCardClick, card }) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="element">
      <img className="element__image" src={src} alt={title} onClick={handleClick} />
      <button type="button" className="element__trash"></button>
      <div className="element__info">
        <h2 className="element__title">{title}</h2>
        <div className="element__title-wrapper">
          <button type="button" className="element__like"></button>
          <p className="element__sum-likes">{likes}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
