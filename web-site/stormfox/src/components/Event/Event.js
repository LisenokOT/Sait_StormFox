import React from 'react';
import {Routes, Route, NavLink} from 'react-router-dom'
import AddEvent from './AddEvent';
import main from'../module_css/main.module.css'

const Event_elem = (props) => {
    return(
        <div>
            <div className={main.elem}>{props.text_event}</div>
        </div>
    ); 
}

const Event = (props) => {
    let news_elem = props.eventData.EventData.map( e => <Event_elem text_event = {e.Event_text} id_elem = {e.id_elem} key = {e.id}/>)
    
    return(
        <div className={main.main}>
            <div className={main.add}>
                <h1 className='header'>События</h1>
                <NavLink className={main.addpost} to={'/event/addevent'}>
                    <button className={main.addpo}>Добавить событие</button>
                </NavLink>
            </div>
            <Routes>
                <Route path='/addevent' element={<AddEvent dispatch={props.dispatch} newEventText={props.eventData.newEventText}/>}/>
            </Routes>
            {news_elem}
        </div>
    ); 
}

export default Event;