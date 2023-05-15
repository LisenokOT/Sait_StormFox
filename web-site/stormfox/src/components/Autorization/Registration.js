import React from 'react';
import autoriz from'../module_css/Autorization.module.css'
import {NavLink} from 'react-router-dom'

const Elem = (props) => {
    return(
        <div>
            <p>{props.name}</p>
            <input type={props.type}/>
        </div>
    );
}

const Registration = () => {
    return(
        <div className={autoriz.main}>
            <div className={autoriz.reg_contener}>
                <h1 className={autoriz.header}>Регистрация</h1>
                <Elem name='Логин' type='text'/>
                <Elem name='Пароль' type='password'/>
                <Elem name='Подтвердите пароль' type='password'/>
                <button>Регистрация</button>
                <NavLink className={autoriz.button} to="/autorization"><button>Войти</button></NavLink>
            </div>
        </div>
        
    );
}

export default Registration;