import React from 'react';
import autoriz from'../module_css/Autorization.module.css'
import {NavLink} from 'react-router-dom'
import {autorizationCreator} from '../../redux/Postgresql'
import { useNavigate } from 'react-router-dom';

const Autorization = (props) => {
    let navigate = useNavigate()
    if (props.state.role === 'user' || props.state.role === 'admin'){
        navigate('/mypage')
    }
    let adduser = () =>{
        props.dispatch(autorizationCreator(newLogElem.current.value, newPassElem.current.value));
    }
    let newLogElem = React.createRef();
    let newPassElem = React.createRef();
    return(
        <div className={autoriz.main}>
            <div className={autoriz.contener}>
                <h1 className={autoriz.header}>Авторизация</h1>
                <div>
                    <p>Логин</p>
                    <input type='text' ref={newLogElem}/>
                </div>
                <div>
                    <p>Пароль</p>
                    <input type='password' ref={newPassElem}/>
                </div>
                <button onClick={adduser}>Авторизация</button>
                <NavLink className={autoriz.button} to="/registration"><button>Зарегистрироваться</button> </NavLink>
            </div>
        </div>
    );

}

export default Autorization;