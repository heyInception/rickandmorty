import React, {useContext, useState, useEffect} from "react";
import Modal from "../../Modal/modal";
import Register from "../Authorization/Register";
import Login from "../Authorization/Login";
import {AuthContext} from "../../../Context/Context";
import {useNavigate} from 'react-router-dom'

export const Account = () => {
    const [modalActive, setModalActive] = useState()
    const [modalActiveSign, setModalActiveSign] = useState()
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const navigate = useNavigate();
    const listName = JSON.parse(localStorage.getItem(`authUsers`))

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('authUsers')
        localStorage.setItem('favorites', JSON.stringify([]))
        navigate('/')
    }
    const usersAuth = JSON.parse(localStorage.getItem('authUsers'))


    useEffect( () => {
        if (usersAuth) {
            setIsAuth(true)
        }
    })

    return (
        isAuth
            ?
       <div className="account">
                <div className="account__row">
                    <div className="account__reg">
                        <div>{listName[0].username} {listName[0].lastname[0]}.</div>
                    </div>
                    <div className="account__in">
                        <button className="btn-reset" onClick={logout}>Выйти</button>
                    </div>
                </div>
                <Modal active={modalActive} setActive={setModalActive}>
                    <Login/>
                </Modal>
                <Modal active={modalActiveSign} setActive={setModalActiveSign}>
                    <div className="authLogined">
                        <p>Вы успешно авторизированы</p>
                    </div>
                </Modal>

            </div>
            :
            <div className="account">
                <div className="account__row">
                    <div className="account__reg">
                        <button className="btn-reset" onClick={() => setModalActive(true)}>Регистрация</button>
                    </div>
                    <div className="account__in">
                        <button className="btn-reset" onClick={() => setModalActiveSign(true)}>Войти</button>
                    </div>
                </div>
                <Modal active={modalActive} setActive={setModalActive} >
                    <Register/>
                </Modal>
                <Modal active={modalActiveSign} setActive={setModalActiveSign}>
                    <Login/>
                </Modal>

            </div>
    )
}
