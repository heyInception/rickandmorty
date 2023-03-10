import React, {useContext, useState} from "react";
import {AuthContext} from "../../../Context/Context";

const Login = ({active, setActive}) => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const [isActive, setIsActive] = useState(false);
    const [login, setLogin] = useState(() => {
        return {
            login: "",
            email: "",
            username: "",
            lastname: "",
            password: "",
        }
    })


    const changeInputLogin = event => {
        event.persist()
        setLogin(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }



    const handleClick = event => {
        setIsActive(current => !current);
    };

    const checkLogin = event => {
        event.preventDefault();

        // stored data from the register-form
        const storedName = localStorage.getItem(`users`);
        const jParse = JSON.parse(storedName);
        const userName = document.getElementById('authLogin');
        const userPw = document.getElementById('authPassword');
        let authUsers;
        if (!localStorage.authUsers) {
            authUsers = [];
        } else {
            authUsers = JSON.parse(localStorage.authUsers);
        }
        const indexUsers = jParse.map(el => el.email).indexOf(userName.value)




        // check if stored data from register-form is equal to data from login form
        for (let i = 0; i < jParse.length; i++) {
            if (jParse.map(el => el.email).indexOf(userName.value) !== -1 &&  userPw.value === jParse[indexUsers].password) {
                setIsAuth(true);
                const currentUser = {
                    id: jParse[indexUsers].id,
                    login: login.login || login.email,
                    password: login.password,
                    username: jParse[indexUsers].username,
                    lastname: jParse[indexUsers].lastname
                };
                authUsers.push(currentUser)
                localStorage.authUsers = JSON.stringify(authUsers);
                break
            } else if (jParse.map(el => el.login).indexOf(userName.value) !== -1 && userPw.value === jParse[indexUsers].password) {
                setIsAuth(true);
                const currentUser = {
                    id: jParse[indexUsers].id,
                    login: login.login || login.email,
                    password: login.password,
                    username: jParse[indexUsers].username,
                    lastname: jParse[indexUsers].lastname,
                };
                authUsers.push(currentUser)
                localStorage.authUsers = JSON.stringify(authUsers);
                break
            }
            else {
                alert('Error')
                break
            }
        }


    }



    return (
        <div>
            <form onSubmit={checkLogin}>
                <h3>Войти</h3>
                <input
                    type="text"
                    name="login"
                    id="authLogin"
                    value={login.email || login.login}
                    onChange={changeInputLogin}
                    placeholder="Введите логин или E-mail"
                />
                <label className="label-input">
                    <span className="icon-svg" className={isActive ? 'icon-svg icon-svg_open' : 'icon-svg'} onClick={handleClick}>
                    </span>


                    <input
                    type={isActive ? 'text' : 'password'}
                    name="password"
                    id="authPassword"
                    onChange={changeInputLogin}
                    placeholder="Введите  пароль"
                />
                </label>
                <label htmlFor="modal-checkbox">
                    <input type="checkbox" name="" id="modal-checkbox" />
                    <span>Запомнить</span>
                </label>
                <input type="submit" value="Войти"  />
            </form>
        </div>
    );
};

export default Login;