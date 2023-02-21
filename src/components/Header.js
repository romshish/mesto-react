import logoPath from '../images/Vector.svg';

function Header() {
  return (
    <header className="header page__section">
      <img className="header__logo" src={logoPath} alt="Лого" />
    </header>
  );
}

export default Header;
