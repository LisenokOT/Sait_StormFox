import React from 'react';
import autoriz from'../module_css/Autorization.module.css'
import {NavLink} from 'react-router-dom'
import main from'../module_css/main.module.css'

const Elem = (props) => {
    return(
        <div>
            <p>{props.name}</p>
            <input type={props.type}/>
        </div>
    );
}

const Autorization = () => {
    return(
        <div className={autoriz.main}>
            <div className={autoriz.contener}>
                <h1 className={autoriz.header}>Авторизация</h1>
                <Elem name='Логин' type='text'/>
                <Elem name='Пароль' type='password'/>
                <button>Авторизация</button>
                <NavLink className={autoriz.button} to="/registration"><button>Зарегистрироваться</button> </NavLink>
            </div>
        </div>
    );
}

export default Autorization;