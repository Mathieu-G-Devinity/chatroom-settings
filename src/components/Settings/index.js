import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Settings = ({ manageToggle, toggle }) => (
  <div className={
    toggle ? "container-form" : "container-form-hidden"
  }>

    <div className ="form-hide-show">
      <button className={
        toggle ? "connect-button" : "connect-button-hidden"
      }
       onClick={manageToggle} >+</button>
    </div>

    <form className="connect-form" >
      <input className="connect-form-email" placeholder="Email"></input>
      <input className="connect-form-password" placeholder="Mot de passe"></input>
      <button className="connect-button-submit" >Envoyer</button>
    </form>
    
  </div>
);

/*Settings.propTypes = {
  manageToggle: PropTypes.func.isRequired,
};*/

export default Settings;

