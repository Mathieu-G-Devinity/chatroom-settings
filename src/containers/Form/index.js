import { connect } from 'react-redux';

import Form from 'src/components/Form';
import { addNewMessage, setNewMessage } from '../../actions';

// on vient lire le state pour alimenter
// la prop newMessage du composant de présentation Form
const mapStateToprops = (state) => ({
  newMessage: state.newMessage,
});

// on vient définir la prop de type fonction du
// composant de présentation Form en indiquant
// qu'elle dispatche l'action de type ADD_NEW_MESSAGE
// vers le store
const mapDispatchToProps = (dispatch) => ({
  manageSubmit: () => {
    dispatch(addNewMessage());
  },
  setNewMessage: (newMessage) => {
    // on émet l'intention de me mettre à jour le message vers le store
    // cette action a besoin d'être précisée (quel est donc le nouveu message ?).
    // ceci est fait en ajoutant un payload à l'action
    dispatch(setNewMessage(newMessage));
  },
});

export default connect(mapStateToprops, mapDispatchToProps)(Form);
