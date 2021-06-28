import { ADD_NEW_MESSAGE, SET_NEW_MESSAGE, SET_TOGGLE } from '../actions';
import { getHighestId } from '../selectors';

const initialState = {
  username: 'Super chat',
  newMessage: '',
  toggle: true,
  messages: [
    {
      id: 1,
      author: 'Super chien',
      message: 'Salut ça va ?',
    },
    {
      id: 2,
      author: 'Super chat',
      message: 'T\'as pas des super croquettes ?',
    },
    {
      id: 3,
      author: 'Super chien',
      message: 'un peu ouais !',
    },
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // on traduit l'intention de mettre à jour le message (SET_NEW_MESSAGE)
    // par une modification du state (la valeur de la propriété newMessage)
    // dans la future version du state sera la valeur transmise en payload de l'action
    case SET_NEW_MESSAGE:
      return {
        ...state,
        newMessage: action.newMessage,
      };
    case ADD_NEW_MESSAGE: {
      // on prépare le message à ajouter
      const newMessage = {
        id: getHighestId(state) + 1,
        author: 'Super chat',
        message: state.newMessage,
      };

      // on crée une copie du tableau de message présent dans le state
      // (on respecte le principe d'immutabilité)
      // et on y ajoute le nouveau message
      const newMessages = [...state.messages, newMessage];

      // on retourne le nouveau state
      // c'est une copie de l'ancien state dans laquelle on remplace la lste des messages
      return {
        ...state,
        messages: newMessages,
        newMessage: '',
      };
    }
    case SET_TOGGLE:
      return {
        ...state,
        toggle: !state.toggle,
      };
    default:
      return state;
  }
};

export default reducer;
