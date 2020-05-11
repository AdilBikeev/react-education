const ADD_MESSAGE = 'ADD-MESSAGE';
const TEXT_CHANGE_MESSAGE = 'TEXT-CHANGE-MESSAGE';

const messageReducer = (state, action) => {
    if (action.type === TEXT_CHANGE_MESSAGE) {
        state.messageNew = action.newText;
    } else if (action.type === ADD_MESSAGE) {
        action.message.id = state.messages.length;
        action.message.message = state.messageNew;

        state.messages.push(action.message);
    }
}

export default messageReducer;

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE,
        message: {
            name: 'Me',
            dateSend: new Date(Date.now())
        }
    };
};

export const textChangeMessageActionCreator = (text) => {
    return {
        type: TEXT_CHANGE_MESSAGE,
        newText: text
    }
};