import React from 'react';
import autoriz from'../module_css/Autorization.module.css'
import { useNavigate } from 'react-router-dom';
import { logoutCreator } from '../../redux/Postgresql'

const Autorization = (props) => {
    let navigate = useNavigate()
    if (props.state.role === 'user' || props.state.role === 'admin'){
        navigate('/autorization')
    }
    let logout = () =>{
        props.dispatch(logoutCreator());
    }
    let ordPassElem = React.createRef();
    let newPassElem = React.createRef();
    let newPassC = React.createRef();
    return(
        <div className={autoriz.main}>
            <div className={autoriz.mypage_contener}>
                <h1 className={autoriz.header}>Личная страница</h1>
                <div>
                    <h3>Логин: {props.state.login}</h3>
                
                    <h3>Смена пароля</h3>
                    <p>Введите текущий пароль</p>
                    <input type='password' ref={ordPassElem}/>
                    <p>Введите новый пароль</p>
                    <input type='password' ref={newPassElem}/>
                    <p>Подтвердите новый пароль</p>
                    <input type='password' ref={newPassC}/>
                </div>
                <button onClick={logout}>Выйти из профиля</button>
            </div>
        </div>
    );

}

export default Autorization;