import { connect } from 'react-redux';

import Message from 'src/components/Messages/Message';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);

  return {
    isMine: state.username === ownProps.author,
  };
};

export default connect(mapStateToProps)(Message);
