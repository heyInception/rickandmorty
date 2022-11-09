import React, {useState} from "react";
import Modal from "./modal/modal";

export const Account = () => {
    const [modalActive, setModalActive] = useState()
    const [modalActiveSign, setModalActiveSign] = useState()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)

    const [emailError, setEmailError] = useState('Текст ошибки')
    const [passwordError, setPasswordError] = useState('Текст ошибки')

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорркетный E-mail')
        } else {
            setEmailError('')
        }
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length < 3 || e.target.value.length > 8) {
            setPasswordError('Пароль должен быть больше 3 но меньше 8')
            if (!e.target.value) {
                setPasswordError('Некорркетный Пароль')
            }
        } else {
            setEmailError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    return (
        <div className="account">
            <div className="account__row">
                <div className="account__reg">
                    <button className="btn-reset" onClick={() => setModalActive(true)}>Регистрация</button>
                </div>
                <div className="account__in">
                    <button className="btn-reset" onClick={() => setModalActiveSign(true)}>Войти</button>
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <form action="">
                    <h3>Регистрация</h3>
                    {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
                    <input onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} type="email" name="email" id="" placeholder="Введите E-mail"/>
                    <input type="text" placeholder="Придумайте логин"/>
                    <input type="text" placeholder="Введите имя"/>
                    <input type="text" placeholder="Введите фамилию"/>
                    {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
                    <input onChange={e => passwordHandler(e)} onBlur={e => blurHandler(e)} type="password" name="password" id="" placeholder="Введите  пароль"/>
                    <input type="password" name="" id="" placeholder="Повторите  пароль"/>
                    <input type="submit" value="Зарегистрировать"/>
                </form>
            </Modal>
            <Modal active={modalActiveSign} setActive={setModalActiveSign}>
                <form action="">
                    <h3>Войти</h3>
                    <input type="text" placeholder="Придумайте логин"/>
                    <input type="password" name="" id="" placeholder="Введите  пароль"/>
                    <label htmlFor="modal-checkbox">
                        <input type="checkbox" name="" id="modal-checkbox" />
                        <span>Запомнить</span>
                    </label>
                    <input type="submit" value="Войти"/>
                </form>
            </Modal>

        </div>
    )
}
