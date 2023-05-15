
let initialState = {EventData: [
    {id_elem:1, Event_text:'Событие 1'}, 
    {id_elem:2, Event_text:'Событие 2'}, 
    ],
    newEventText: ''
}

const ReduserEvent = (state = initialState, action) =>{
    if (action.type === 'ADD-EVENT'){
        let newEvent = {
            id_elem: 5,
            Event_text: state.newEventText,
        };
        state.EventData.push(newEvent)
        state.newEventText = ''
        return state;
    } else if (action.type === 'UPDATE-EVENT'){
        state.newEventText = action.newText
        return state;
    }
    else
        return state;
}

export const addEventActionCreator = () =>({type: 'ADD-EVENT'})
export const updateEventCreator = (text) =>({type: 'UPDATE-EVENT', newText: text})
export default ReduserEvent;