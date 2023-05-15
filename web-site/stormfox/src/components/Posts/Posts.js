import React from 'react';
import post from'../module_css/Posts.module.css'
import main from'../module_css/main.module.css'
import Addpost from './AddPost';
import {Routes, Route, NavLink} from 'react-router-dom'

const Post = (props) => {
    let newPostAll = React.createRef();
    let newPost_1 = React.createRef();
    let newPost_2 = React.createRef();
    let all_text = () =>{
        newPostAll.current.className=post.post_new;
        newPost_1.current.className=post.clic_none;
        newPost_2.current.className=post.clic;
    }
    let smal_text = () =>{
        newPostAll.current.className=post.post;
        newPost_1.current.className=post.clic;
        newPost_2.current.className=post.clic_none;
    }
    return(
        <div className={post.posts}>
            <div className={post.post} ref={newPostAll}>{props.post_text}</div>
            <button className={post.clic} ref={newPost_1} onClick={all_text}>Подробнее</button>
            <button className={post.clic_none} ref={newPost_2} onClick={smal_text}>Скрыть</button>
        </div>
    ); 
}

const Temp = (props) => {
    let post_elem = props.postData.postData.map( e => <Post post_text = {e.post_text} id_elem = {e.id_elem} key = {e.id}/>)
    return(
        <div className={main.main}>
            <div className={main.add}>
                <h1>Посты</h1>
                <NavLink className={post.addpost} to={'/post/addpost'}>
                    <button className={main.addpo}>Добавить пост</button>
                </NavLink>
            </div>
            <Routes>
                <Route path='/addpost' element={<Addpost dispatch={props.dispatch} newPostText={props.postData.newPostText}/>}/>
            </Routes>
            {post_elem}
        </div>
    ); 
} 

export default Temp;