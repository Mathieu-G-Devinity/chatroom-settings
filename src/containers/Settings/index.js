import { connect } from 'react-redux';

import Settings from 'src/components/Settings';
import { setToggle } from '../../actions';

// on vient lire le state pour alimenter
// la prop toggle du composant de présentation Form
const mapStateToprops = (state) => ({
  toggle: state.toggle,
});

const mapDispatchToProps = (dispatch) => ({
  manageToggle: () => {
    dispatch(setToggle());
  },
});


export default connect(mapStateToprops, mapDispatchToProps)(Settings);
