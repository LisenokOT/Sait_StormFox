import React from 'react';
import main from'../module_css/main.module.css'
import {Routes, Route, NavLink} from 'react-router-dom'
import AddNews from './AddNews';

const News_elem = (props) => {
    return(
        <div>
            <div className={main.elem}>{props.text_news}</div>
        </div>
    ); 
}

const News = (props) => {
    
    let news_elem = props.newsData.NewData.map( e => <News_elem text_news = {e.text_news} id_elem = {e.id_elem} key = {e.id}/>)
    return(
        <div className={main.main}>
            <div className={main.add}>
                <h1>Новости</h1>
                <NavLink className={main.addpost} to={'/news/addnews'}>
                    <button className={main.addpo}>Добавить новость</button>
                </NavLink>
            </div>
            <Routes>
                <Route path='/addnews' element={<AddNews dispatch={props.dispatch} newNewsText={props.newsData.newNewsText}/>}/>
            </Routes>
            {news_elem}
        </div>
    ); 
}

export default News;