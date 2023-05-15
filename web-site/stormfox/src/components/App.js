import './App.css';
import React from 'react';
import Header from './Main elem/Header';
import {BrowserRouter} from 'react-router-dom'
import Main from './Main/Main';

function App(props) {
  return (
    <BrowserRouter>
    <Header/>
    <Main appstate={props.appstate} dispatch={props.dispatch}/>
    </BrowserRouter>
  );
}

export default App;
