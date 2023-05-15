import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import store from './redux/store'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
let renderroot = (state) =>{

  root.render(
    <React.StrictMode>
      <App appstate={state} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>
  );
}

renderroot(store.getState());

store.subscribe(()=>{
  let state = store.getState()
  renderroot(state);
});