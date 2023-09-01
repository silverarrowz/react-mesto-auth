import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as api from "../utils/apiAuth";
import { useFormAndValidation } from "../hooks/useFormAndValidation";

const Register = ({ setInfoToolTipOpen, setAuthSuccess }) => {

    const { values, handleChange, errors, isValid, resetForm, isSubmitBtnDisabled, setSubmitBtnDisabled } = useFormAndValidation();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        setIsLoading(true);
        e.preventDefault();
        api.register(values.email, values.password)
            .then((data) => {
                if (data) {
                    setAuthSuccess(true)
                    setInfoToolTipOpen(true);
                    navigate("/sign-in", { replace: true });
                }
            })
            .catch((err) => {
                console.error(err);
                setAuthSuccess(false);
                setInfoToolTipOpen(true);
            })
            .finally(() => {
                resetForm();
                setIsLoading(false);
            })
    }

    return (
        <div className="auth__container">
            <h2 className="popup__title auth__title">
                Регистрация
            </h2>

            <form
                onSubmit={handleSubmit}
                className="form auth__form"
                name="signin">

                <label className="form__field auth__form-field">
                    <input
                        onChange={handleChange}
                        value={values.email || ''}
                        className={`form__item auth__form-item ${!isValid && 'form__item_type_error'}`}
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required />
                    <span className="form__error form__error_field_email" id="email-error">
                        {errors.email}
                    </span>
                </label>

                <label className="form__field auth__form-field">
                    <input
                        onChange={handleChange}
                        value={values.password || ''}
                        className={`form__item auth__form-item ${!isValid && 'form__item_type_error'}`}
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Пароль"
                        required />
                    <span className="form__error form__error_field_password" id="password-error">
                        {errors.password}
                    </span>
                </label>

                <button
                    className={`form__save-btn auth__submit-btn ${isSubmitBtnDisabled && 'form__save-btn_disabled'}`}
                    type="submit"
                    aria-label="Зарегистрироваться">
                    {isLoading ? 'Подождите...' : 'Зарегистрироваться'}
                </button>
            </form>
            <Link to="/sign-in" className="auth__signin-link">Уже зарегистрированы? Войти</Link>
        </div>
    )
}

export default Register;