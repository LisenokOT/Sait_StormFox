import React from 'react';
import m from'../module_css/Menu_key.module.css'
import {NavLink} from 'react-router-dom'

const Menu_key = (props) => {
    return(
            <NavLink
                to={props.key_ref}
                className={({ isActive }) => isActive ? m.active_elem : m.elem
                }>{props.key_name}
            </NavLink>
    );
}

export default Menu_key;