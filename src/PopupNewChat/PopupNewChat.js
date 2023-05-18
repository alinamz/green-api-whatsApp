import React from "react";
import api from "../api/api";

function PopupNewChat({ setIsOpen, isOpen, setNumberContact, chats, setChats }) {

  const [dataNumber, setDataNumber] = React.useState('');

  function onClose() {
    setIsOpen(false)
  }

  function onSubmit(e) {
    e.preventDefault();
    setNumberContact(dataNumber);
    sessionStorage.setItem('numbers', dataNumber);
    setIsOpen(false);
    api.getDataContact(sessionStorage.getItem('idInstance'), sessionStorage.getItem('apiTokenInstance'), sessionStorage.getItem('numbers'))
      .then((data) => {
        setChats([...chats, data])
      })
      .catch((err) => console.log(err))
  }

  function onChange(e) {
    e.preventDefault();
    setDataNumber(e.target.value)
  }


  return (
    <div
      className={`popup ${isOpen && "popup_opened"
        }`}
    >
      <div className="popup__container">
        <h3 className="popup__title">Введите номер телефона</h3>
        <form className="form" onSubmit={onSubmit}>
          <input class='popup__input' onChange={onChange} type="text" />
          <button
            className="popup__button"
            type="submit"
          >
            Создать чат
          </button>
        </form>
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  )
}

export default PopupNewChat