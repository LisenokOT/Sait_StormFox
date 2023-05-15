import React from 'react';
import {addNewsActionCreator, updateNewsCreator} from '../../redux/ReduserNews'

const AddNews = (props) => {
    let addnews = () =>{
        props.dispatch(addNewsActionCreator());
    }
    let newNewsElem = React.createRef();

    let onNewsChange = () =>{
        let text = newNewsElem.current.value;
        let action = updateNewsCreator(text);
        props.dispatch(action);
    }
    return(
        <div>
            <div> Введите текст новости </div>
            <textarea onChange={onNewsChange} value={props.newNewsText} ref={newNewsElem} />
            <button onClick={ addnews }>Опубликовать</button>
            
        </div>
    ); 
}

export default AddNews;