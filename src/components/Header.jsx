import headerLogo from '../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';

function Header({ userEmail, onSignOut }) {

    const location = useLocation();

    return (
        <header className="header">
            <Link to="/">
                <img className="header__logo" src={headerLogo} alt="Логотип" />
            </Link>

            {location.pathname === "/" &&
                <div className="header__profile">
                    <p className="header__email">
                        {userEmail}
                    </p>
                    <Link to="/sign-in" className="header__link" onClick={onSignOut}>
                        Выйти
                    </Link>
                </div>
            }

            {location.pathname === "/sign-in" && <Link to="/sign-up" className="header__link">Регистрация</Link>}
            {location.pathname === "/sign-up" && <Link to="/sign-in" className="header__link">Войти</Link>}


        </header>
    );
}

export default Header;