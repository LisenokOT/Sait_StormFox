import React from 'react';
import m from'../module_css/Left_menu.module.css'
import Menu_key from '../Menu_k/Menu_key';

const Bok_menu = () => {
    return(
        <div className={m.menu}>
            <div className={m.bok_menu}>
            <Menu_key key_name = 'Новости' key_ref = 'news'/>
            <Menu_key key_name = 'События' key_ref = 'event'/>
            <Menu_key key_name = 'Обсуждения' key_ref = 'talk'/>
            <Menu_key key_name = 'Понравилось' key_ref = 'like'/>
            </div>
        </div>
    );
}

export default Bok_menu;