import {combineReducers, legacy_createStore as createStore} from 'redux';
import ReduserPost from './ReduserPost';
import ReduserTalk from './ReduserTalk';
import Postgresql from './Postgresql';
import ReduserEvent from './ReduserEvent';
import ReduserNews from './ReduserNews';

let reduser = combineReducers({
    postData:ReduserPost,
    eventData:ReduserEvent,
    newsData:ReduserNews,
    elemData:ReduserTalk,
    postgre:Postgresql,
    
})

let store = createStore(reduser);

export default store;