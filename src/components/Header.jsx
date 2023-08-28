import headerLogo from '../images/logo.svg';
import { Routes, Route, Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <Link to="/">
                <img className="header__logo" src={headerLogo} alt="Логотип" />
            </Link>

            <Routes>
                <Route path="/" element={
                    <div className="header__profile">
                        <p className="header__email">email@example.com</p>
                        <Link to="/sign-in" className="header__link">Выйти</Link>
                    </div>
                } />
                <Route path="/sign-in" element={<Link to="/sign-up" className="header__link">Регистрация</Link>} />
                <Route path="/sign-up" element={<Link to="/sign-in" className="header__link">Войти</Link>} />

            </Routes>

        </header>
    );
}

export default Header;