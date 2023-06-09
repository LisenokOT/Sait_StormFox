import axios from 'axios';

let initialState = {
  login: '',
  password: '',
  role: ''
};
 
const Postgresql = (state = initialState, action) => {
  if (action.type === 'AUTORIZATION-USER') {
    let role = '';
    let errorrol = '';
    axios.get('http://stormfox.ru/api/users', {
        params: {
          username: action.login_user,
          password: action.password_user
        },
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        // Обработка ответа от сервера и обновление состояния в React
        if (response.data === "user" || response.data === "admin"){
          console.log("Ok");
          role = response.data;
        }
      })
      .catch(error => {
        errorrol = 'error'
        // Обработка ошибок и обновление состояния в React
      })
    if (errorrol === ''){
      state.role='user';
      state.login = action.login_user;
    }
    return state;
  } else if (action.type === 'REGISTRATION-USER') {
    axios.post('http://stormfox.ru/api/users', {
      params: {
        username: action.login_user,
        password: action.password_user
      },
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.data === "The user has been successfully registered!"){
          console.log('Ok');
        }
      })
      .catch(error => {
        console.error(error);
        // Обработка ошибок и обновление состояния в React
      });
    return state;
  } else if (action.type === 'LOGOUT-USER'){
    state.login = '';
    state.role = '';
    return state;
  }
    else {
    return state;
  }
};

export const registrationCreator = (login, password) => ({type: 'REGISTRATION-USER', login_user: login, password_user: password});
export const autorizationCreator = (login, password) => ({type: 'AUTORIZATION-USER', login_user: login, password_user: password});
export const logoutCreator = () =>({type: 'LOGOUT-USER'});
export default Postgresql;
