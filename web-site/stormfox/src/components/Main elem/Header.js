import React from 'react';
import pop from '../module_css/Popap.module.css'
import h from '../module_css/header.module.css';
import {NavLink} from 'react-router-dom'
import { useTheme } from '../../hooks/UseTheme'

const PopupMenu = (props) =>{
    const { theme, setTheme } = useTheme()
    const LightTheme = () => {
        setTheme('light')
    }
    const DarkTheme = () => {
        setTheme('dark')
    }
    return(
        <div className={props.isActive? pop.modal_active:pop.modal} onClick={()=>{props.setActive(false)}}>
            <div className={pop.modal_cont} onClick={e=>e.stopPropagation()}>
                <button className={pop.button} onClick={DarkTheme}>Темная тема</button>
                <button className={pop.button} onClick={LightTheme}>Светлая тема</button>
            </div>
        </div>
    );
}

const Header = (props) => {
    
    const [ModalActive, ModalSetActive] = React.useState(false);
    const User =()=>{
        if (props.appstate.postgre.login === ''){
        return(
            <NavLink to="/autorization"
                    className={({ isActive }) => isActive ? h.active_login : h.login_href
                    }>Войти
                </NavLink>
        );}
        else {
            return(
                <NavLink to="/mypage"
                    className={({ isActive }) => isActive ? h.active_login : h.login_href
                    }>{props.appstate.postgre.login}
                </NavLink>
            );
        }
    }
    return(
        <div className={h.header}>
            <div className={h.header_left}>
                <NavLink to="/post"
                    className={({ isActive }) => isActive ? h.active_logo : h.logo_header
                    }>Главная
                </NavLink>
            </div>
            <div className={h.header_right}>
                <div className={h.button} onClick={() => {ModalActive? ModalSetActive(false):ModalSetActive(true)}}>Настройки</div>
                {User()}
                
                <PopupMenu isActive={ModalActive} setActive={ModalSetActive}/>
            </div>
            
        </div>

    );
}

export default Header;