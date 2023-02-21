

function PopupWithForm(props) {

  return (
    <section className={`popup ${props.isOpen ? 'popup_opened' : ''} popup_purpose_${props.name}`}>
      <div className={`popup__wraper popup__wraper_purpose_${props.name}`}>
        <form name={`${props.name}-form`} className="popup__form" noValidate>
          <h2 className="popup__title">{props.title}</h2>
          <button type="button" onClick={props.onClose} className="popup__close"></button>
          {props.children}
          <button className="popup__submit" type="submit">{props.submitTitle}</button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
