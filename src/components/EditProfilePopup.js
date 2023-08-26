import React, { useState, useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {

  const currentUser = useContext(CurrentUserContext);

  // const [name, setName] = useState('');
  // const [description, setDescription] = useState('');

  const [userData, setUserData] = useState({
    name: '',
    about: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    })
  }

  useEffect(() => {
    setUserData(currentUser);
  }, [currentUser])

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onUpdateUser(userData);
  };
  


  // function handleNameChange(evt) {
  //     setName(evt.target.value);
  // }

  // function handleDescriptionChange(evt) {
  //     setDescription(evt.target.value);
  // }

  // useEffect(() => {
  //   setName(currentUser.name);
  //   setDescription(currentUser.about);
  // }, [currentUser]);

  // function handleSubmit(evt) {
  //   evt.preventDefault();
  //   props.onUpdateUser({
  //     name,
  //     about: description,
  //   });
  // }

  return (
    <PopupWithForm
      name="profile-edit"
      title="Редактировать профиль"
      buttonText={props.isLoading ? 'Сохранение...' : 'Сохранить'}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}>

      <label className="form__field">
        <input
          onChange={handleChange}
          className="form__item form__item_user_name"
          type="text"
          id="name"
          name="name"
          value={userData.name || ''}
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required />
        <span className="form__error" id="name-error"></span>
      </label>

      <label className="form__field">
        <input
          onChange={handleChange}
          className="form__item form__item_user_about"
          type="text"
          id="about"
          name="about"
          value={userData.about || ''}
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required />
        <span className="form__error" id="about-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default EditProfilePopup;