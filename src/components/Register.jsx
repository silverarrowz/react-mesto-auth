import { Link } from "react-router-dom";

const Register = () => {

    return (
        <div className="auth__container">
            <h2 className="popup__title auth__title">
                Регистрация
            </h2>

            <form
                className="form auth__form"
                name="signin">

                <label className="form__field auth__form-field">
                    <input
                        className="form__item auth__form-item"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        minlength="2"
                        maxlength="30"
                        required
                        value="" />
                    <span className="form__error form__error_field_email" id="email-error">
                    </span>
                </label>

                <label className="form__field auth__form-field">
                    <input
                        className="form__item auth__form-item"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Пароль"
                        minlength="2"
                        required
                        value="" />
                    <span className="form__error form__error_field_password" id="password-error">
                    </span>
                </label>

                <button
                    className="form__save-btn auth__submit-btn"
                    type="submit"
                    aria-label="Зарегистрироваться">
                    Зарегистрироваться
                </button>
            </form>
            <Link to="/sign-in" className="auth__signin-link">Уже зарегистрированы? Войти</Link>
        </div>
    )
}

export default Register;