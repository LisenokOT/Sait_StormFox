import React from 'react';
import {NavLink} from 'react-router-dom'
import {addTalkActionCreator, updateTalkCreator} from '../../redux/ReduserTalk'

const Addtalk = (props) => {
    
    let addtalk = () =>{
        props.dispatch(addTalkActionCreator());
    }
    let newTalkElem = React.createRef();

    let onTalkChange = () =>{
        let text = newTalkElem.current.value;
        // props.dispatch.update(text);
        let action = updateTalkCreator(text);
        props.dispatch(action);
    }
    return(
        <div>
            <div> Введите текст поста </div>
            <textarea onChange={onTalkChange} value={props.newTalkText} ref={newTalkElem} />
            <button onClick={ addtalk }>Опубликовать</button>
    
        </div>

    ); 
}

export default Addtalk;