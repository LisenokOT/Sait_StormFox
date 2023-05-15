import React from 'react';
import main from'../module_css/main.module.css'
import {NavLink} from 'react-router-dom'
import AddTalk from './AddTalk';
import {Routes, Route} from 'react-router-dom'

const Elem = (props) => {
    return(
        <div>
            <NavLink to={'/talk/' + props.id_elem}>
            <button className={main.button}>
                Обсуждение {props.name}</button>
            </NavLink>

        </div>

    ); 
}

const Talk = (props) => {
    let talk_elem = props.elemData.elemData.map( e => <Elem name = {e.name} id_elem = {e.id_elem} key = {e.id}/>)
    return(
        <div className={main.main}>
            <div className={main.add}>
                <h1>Ветки обсуждений</h1>
                <NavLink className={main.addpost} to={'/talk/addtalk'}>
                    <button className={main.addpo}>Добавить обсуждение</button>
                </NavLink>
            </div>
            <Routes>
                <Route path='/addtalk' element={<AddTalk dispatch={props.dispatch} newTalkText={props.elemData.newTalkText}/>}/>
            </Routes>
            {talk_elem}
            
        </div>
    ); 
}
 
export default Talk