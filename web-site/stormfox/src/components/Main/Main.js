import React from 'react';
import m from'../module_css/Main_page.module.css'
import Posts from '../Posts/Posts';
import Event from '../Event/Event';
import Like from '../Like/Like';
import News from '../News/News';
import Registration from'../Autorization/Registration'
import Talk from '../Talk/Talk';
import Bok_menu from '../Main elem/Left_menu';
import Autorization from '../Autorization/Autorization';
import {Routes, Route} from 'react-router-dom'
import Dop_info from '../Main elem/Dop_info';

const Main = (props) => {
    
    return( 
            <div className={m.main_block}>
                <Bok_menu />
                    <Routes>
                        <Route path='/post/*' element={<Posts dispatch={props.dispatch} postData={props.appstate.postData}/>}/>
                        <Route path='/' element={<Posts dispatch={props.dispatch} postData={props.appstate.postData}/>}/>
                        <Route path='/autorization' element={<Autorization/>}/>
                        <Route path='/event/*' element={<Event dispatch={props.dispatch} eventData={props.appstate.eventData}/>}/>
                        <Route path='/news/*' element={<News dispatch={props.dispatch} newsData={props.appstate.newsData}/>}/>
                        <Route path='/talk/*' element={<Talk dispatch={props.dispatch} elemData={props.appstate.elemData}/>}/>
                        <Route path='/like' element={<Like/>}/>
                        <Route path='/registration' element={<Registration/>}/>
                    </Routes>
                <Dop_info r1 = 'Проект на реакте' r2 = 'Эта информация пропсы'/>
            </div>
    );
}

export default Main;