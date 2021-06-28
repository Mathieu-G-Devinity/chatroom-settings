export const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';

export const addNewMessage = () => ({
  type: ADD_NEW_MESSAGE,
});

export const SET_NEW_MESSAGE = 'SET_NEW_MESSAGE';

export const setNewMessage = (newMessage) => ({
  type: SET_NEW_MESSAGE,
  newMessage,
});

export const SET_TOGGLE = 'SET_TOGGLE';

export const setToggle = () => ({
  type: SET_TOGGLE,
});
