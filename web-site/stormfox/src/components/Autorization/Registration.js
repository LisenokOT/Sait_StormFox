import React from 'react';
import autoriz from'../module_css/Autorization.module.css'
import {NavLink} from 'react-router-dom'
import {registrationCreator} from '../../redux/Postgresql'
import { useNavigate } from 'react-router-dom';

const Registration = (props) => {
    let newLogElem = React.createRef();
    let newPassCheckElem = React.createRef();
    let newPassElem = React.createRef();
    let navigate = useNavigate();
    let adduser = () =>{
        if (newPassElem.current.value===newPassCheckElem.current.value)
            props.dispatch(registrationCreator(newLogElem.current.value, newPassElem.current.value));
            navigate('/autorization');
    }
    return(
        <div className={autoriz.main}>
            <div className={autoriz.reg_contener}>
                <h1 className={autoriz.header}>Регистрация</h1>
                <div>
                    <p>Логин</p>
                    <input type='text' ref={newLogElem}/>
                </div>
                <div>
                    <p>Пароль</p>
                    <input type='password' ref={newPassElem}/>
                </div>
                <div>
                    <p>Подтвердите пароль</p>
                    <input type='password' ref={newPassCheckElem}/>
                </div>
                <button onClick={adduser}>Регистрация</button>
                <NavLink className={autoriz.button} to="/autorization"><button>Войти</button></NavLink>
            </div>
        </div>
        
    );
}

// export {Redirect};
export default Registration;