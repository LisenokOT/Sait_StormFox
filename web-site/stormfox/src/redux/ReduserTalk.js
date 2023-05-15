
let initialState = {elemData: [
    {id_elem:1, name:'"Базы данных"'}, 
    {id_elem:2, name:'"Модель Шеллинга"'}, 
    {id_elem:3, name:'"Контейнеризация"'}, 
    {id_elem:4, name:'"Виртуализация"'}
],
newTalkText:''}

const ReduserTalk = (state = initialState, action) =>{
    if (action.type === 'ADD-TALK'){
        let newTalk = {
            id_elem: 5,
            name: state.newTalkText,
        };
        state.elemData.push(newTalk)
        state.newTalkText = ''
        return state;
    } else if (action.type === 'UPDATE-TALK'){
        state.newTalkText = action.newText
        return state;
    }
    else
        return state;
}

export const addTalkActionCreator = () =>({type: 'ADD-TALK'})
export const updateTalkCreator = (text) =>({type: 'UPDATE-TALK', newText: text})
export default ReduserTalk;