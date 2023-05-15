import React from 'react';
import {addEventActionCreator, updateEventCreator} from '../../redux/ReduserEvent'

const AddEvent = (props) => {
    let addevent = () =>{
        props.dispatch(addEventActionCreator());
    }
    let newEventElem = React.createRef();

    let onEventChange = () =>{
        let text = newEventElem.current.value;
        let action = updateEventCreator(text);
        props.dispatch(action);
    }
    return(
        <div>
            <div> Введите текст события </div> 
            <textarea onChange={onEventChange} value={props.newEventText} ref={newEventElem} />
            <button onClick={ addevent }>Опубликовать</button>
            
                
        </div>

    ); 
}

export default AddEvent;