import React from 'react';
import PropTypes from 'prop-types';

import './form.scss';

const Form = ({ manageSubmit, newMessage, setNewMessage }) => (
  <form
    className="form"
    onSubmit={(event) => {
      event.preventDefault();
      manageSubmit();
    }}
  >
    {
    // Au changement du champ, on exécutera une fonction anonyme.
    // Celle-ci permet de récupérer la valeur saisie dans le champ de formulaire
    // et la transmet en argument à la fonction reçu en prop setNewMessage.
    // C'est le container qui définira cette fonction et permettra d'emettre
    // l'intention SET_NEW_MESSAGE vers le store.
    }
    <input
      type="text"
      className="form__message"
      placeholder="Saisissez votre message"
      value={newMessage}
      onChange={(event) => setNewMessage(event.target.value)}
    />
    <button type="submit" className="form__submit">&gt;</button>
  </form>
);

Form.propTypes = {
  manageSubmit: PropTypes.func.isRequired,
  newMessage: PropTypes.string.isRequired,
  setNewMessage: PropTypes.func.isRequired,
};

export default Form;
