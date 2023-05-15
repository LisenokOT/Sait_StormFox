import React from 'react';
import {addPostActionCreator, updatePostCreator} from '../../redux/ReduserPost'

const Addpost = (props) => {
    
    let addpost = () =>{
        props.dispatch(addPostActionCreator());
    }
    let newPostElem = React.createRef();

    let onPostChange = () =>{
        let text = newPostElem.current.value;
        // props.dispatch.update(text);
        let action = updatePostCreator(text);
        props.dispatch(action);
    }
    return(
        <div>
            <div> Введите текст поста </div>
            <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElem} />
            <button onClick={ addpost }>Опубликовать</button>
    
        </div>

    ); 
}

export default Addpost;