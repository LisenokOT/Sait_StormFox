
let initialState = {
    data: ''
}

const Postgresql = (state = initialState, action) =>{
    if (action.type === 'ADD-POST'){
        
        return state;
    } else if (action.type === 'UPDATE-POST'){
        
        return state;
    }
    else
        return state;
}

export default Postgresql;