import React, {useEffect, useState} from 'react'
import validator from 'validator';
import Modal from "../../Modal/modal";
import errorSVG from '../../../assets/img/error.svg'
import {type} from "@testing-library/user-event/dist/type";

export default function Register () {
    const [modalActive, setModalActive] = useState()
    const [register, setRegister] = useState(() => {
        return {
            username: "",
            lastname: "",
            login: "",
            email: "",
            password: "",
            password2: "",
            id: 0,
            favoritesCharacters: [],
            favoritesLocations: [],
            favoritesEpisodes: [],
        }
    })




    const changeInputRegister = event => {
        event.persist()
        setRegister(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }





    const submitChackin = event => {
        event.preventDefault();
        if(!validator.isEmail(register.email) && !validator.isLength(register.email , {min:6, max: 50})) {
            document.querySelector('[name="email"]').classList.add("invalid");
        } else if(!validator.isAlphanumeric(register.login , 'en-US') && !validator.isLength(register.login , {min:6, max: 20})) {
            document.querySelector('[name="login"]').classList.add("invalid");
        } else if(!validator.isLength(register.username , {min:2, max: 50})) {
            document.querySelector('[name="username"]').classList.add("invalid");
        } else if(!validator.isLength(register.lastname , {min:2, max: 50})) {
            document.querySelector('[name="lastname"]').classList.add("invalid");
        } else if(register.password !== register.password2) {
            document.querySelector('[name="password"]').classList.add("invalid");
        } else if(!validator.isStrongPassword(register.password, { minLength: 6, minNumbers: 1, minSymbols: 0})) {
            document.querySelector('[name="password2"]').classList.add("invalid");
        } else {
            if ('localStorage' in window && window['localStorage'] !== null) {

                let users;
                if (!localStorage.users) {
                    users = [];
                } else {
                    users = JSON.parse(localStorage.users);
                }

                // don't stringify the data yet
                const currentUser = {
                    email: register.email,
                    login: register.login,
                    username: register.username,
                    lastname: register.lastname,
                    password: register.password,
                    id: users.length,
                    favoritesCharacters: [],
                    favoritesLocations: [],
                    favoritesEpisodes: [],
                };
                if (users.map(el => el.login).indexOf(register.login) === 0) {
                    alert('Логин существует ')

                } else if (users.map(el => el.email).indexOf(register.email) === 0) {
                    alert('Почта существует ')
                } else {
                    users.push(currentUser);
                    let modalActive = document.querySelectorAll('.Modal-active .modal__content .register__main')
                    modalActive.forEach(e => {
                        e.insertAdjacentHTML('beforebegin', '<div class="authLogined"><p>Вы успешно авторизированы</p></div>');
                        setTimeout(function () {
                            document.querySelector('.authLogined').outerHTML = ''
                        }, 2000)
                    })
                }



                try {
                    localStorage.users = JSON.stringify(users);

                    return true
                } catch (e) {
                    alert('Quota exceeded!');
                }

            } else {
                    alert('Cannot store user preferences as your browser do not support local storage');
                }
        }
    }

    const handleFocus = e => {
        if(!validator.isEmail(register.email) && !validator.isLength(register.email , {min:6, max: 50})) {
            e.target.classList.remove("invalid");
        }else if(!validator.isAlphanumeric(register.login , 'en-US') && !validator.isLength(register.login , {min:6, max: 20})) {
            e.target.classList.remove("invalid");
        }
        if(!validator.isLength(register.username , {min:2, max: 50})) {
            e.target.classList.remove("invalid");
        }
        if(!validator.isLength(register.lastname , {min:2, max: 50})) {
            e.target.classList.remove("invalid");
        }
        if(register.password !== register.password2) {
            e.target.classList.remove("invalid");
        }
        if(!validator.isStrongPassword(register.password, { minLength: 6, minNumbers: 1, minSymbols: 0})) {
            e.target.classList.remove("invalid");
        }

    };

    const handleBlur = e => {
        if(!validator.isEmail(register.email) && !validator.isLength(register.email , {min:6, max: 50})) {
            e.target.classList.add("invalid");
        } else if(!validator.isAlphanumeric(register.login , 'en-US') && !validator.isLength(register.login , {min:6, max: 20})) {
            e.target.classList.add("invalid");
        } else if(!validator.isLength(register.username , {min:2, max: 50})) {
            e.target.classList.add("invalid");
        } else if(!validator.isLength(register.lastname , {min:2, max: 50})) {
            e.target.classList.add("invalid");
        } else if(register.password !== register.password2) {
            e.target.classList.add("invalid");
        } else if(!validator.isStrongPassword(register.password, { minLength: 6, minNumbers: 1, minSymbols: 0})) {
            e.target.classList.add("invalid");
        }
    };

    return (
        <div className="register__main">
            <form onSubmit={submitChackin} className="form">
                <h2>Регистрация:</h2>
                <div className="input__box">
                    <input
                        type="email"
                        name="email"
                        value={register.email}
                        onChange={changeInputRegister}
                        placeholder="Введите E-mail"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        className={
                            !validator.isEmail(register.email) && !validator.isLength(register.email , {min:6, max: 50})
                                ? ''
                                : 'correctly'
                        }
                    />
                    {!validator.isEmail(register.email) && !validator.isLength(register.email , {min:6, max: 50}) && (
                        <div className='error_input'>
                            <img src={errorSVG} alt='error' />
                            <span>Не правильно введён E-mail</span>
                        </div>

                    )}
                </div>
                <div className="input__box">
                <input
                    type="login"
                    name="login"
                    value={register.login}
                    onChange={changeInputRegister}
                    placeholder="Введите логин"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={!validator.isAlphanumeric(register.login , 'en-US') && !validator.isLength(register.login , {min:6, max: 20}) ? "" : "correctly"}
                />
                    {!validator.isAlphanumeric(register.login , 'en-US') && !validator.isLength(register.login , {min:6, max: 20})  && (
                        <div className='error_input'>
                            <img src={errorSVG} alt='error' />
                            <span>Не правильно введён Логин</span>
                        </div>

                    )}
                </div>
                <div className="input__box">
                <input
                    type="username"
                    name="username"
                    value={register.username}
                    onChange={changeInputRegister}
                    placeholder="Введите имя"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={!validator.isLength(register.username , {min:2, max: 50}) ? "" : "correctly"}
                />
                    {!validator.isLength(register.username , {min:2, max: 50}) && (
                        <div className='error_input'>
                            <img src={errorSVG} alt='error' />
                            <span>Имя: обязательное поле, длина не менее 2 и не более 50 символов;</span>
                        </div>

                    )}
                </div>
                <div className="input__box">
                <input
                    type="lastname"
                    name="lastname"
                    value={register.lastname}
                    onChange={changeInputRegister}
                    placeholder="Введите имя"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={!validator.isLength(register.lastname , {min:2, max: 50}) ? "" : "correctly"}
                />
                    {!validator.isLength(register.lastname , {min:2, max: 50}) && (
                        <div className='error_input'>
                            <img src={errorSVG} alt='error' />
                            <span>Фамилия: обязательное поле, длина не менее 2 и не более 50 символов;</span>
                        </div>

                    )}
                </div>
                <div className="input__box">
                <input
                    type="password"
                    name="password"
                    value={register.password}
                    onChange={changeInputRegister}
                    placeholder="Введите  пароль"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={(register.password.value == null) || register.password !== register.password2 ? "" : "correctly"}
                />
                    {(register.password == '') || (register.password !== register.password2) && (
                        <div className='error_input'>
                            <img src={errorSVG} alt='error' />
                            <span>Пароль не соответствует</span>
                        </div>

                    )}
                 </div>
                  <div className="input__box">
                <input
                    type="password"
                    name="password2"
                    value={register.password2}
                    onChange={changeInputRegister}
                    placeholder="Повторите  пароль"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={!validator.isStrongPassword(register.password, { minLength: 6, minNumbers: 1, minSymbols: 0}) ? "" : "correctly"}
                />
                      {!validator.isStrongPassword(register.password, { minLength: 6, minNumbers: 1, minSymbols: 0}) && (
                          <div className='error_input'>
                              <img src={errorSVG} alt='error' />
                              <span>Пароль: обязательное поле, должен содержать символы верхнего регистра (A-Z), нижнего регистра (a-z) и цифры (0-9), длина не менее 6 и не более 50 символов;</span>
                          </div>

                      )}
                  </div>
                <input type="submit"  value="Зарегистрировать" />
            </form>
        </div>
    )
}