
let initialState = {NewData: [
    {id_elem:1, text_news:'Новость 1'}, 
    {id_elem:2, text_news:'Новость 2'}, 
    ],
    newNewsText: ''
}

const ReduserNews = (state = initialState, action) =>{
    if (action.type === 'ADD-NEWS'){
        let newNews = {
            id_elem: 3,
            text_news: state.newNewsText,
        };
        state.NewData.push(newNews)
        state.newNewsText = ''
        return state;
    } else if (action.type === 'UPDATE-NEWS'){
        state.newNewsText = action.newText
        return state;
    }
    else
        return state;
}

export const addNewsActionCreator = () =>({type: 'ADD-NEWS'})
export const updateNewsCreator = (text) =>({type: 'UPDATE-NEWS', newText: text})
export default ReduserNews;