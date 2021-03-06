import { connect } from 'react-redux';
import Main from '../components/main';

const mapStateToProps = (state, props) => {
  return {
    contentLoaded: state.loaded,
    activeTab: state.activeTab,
    song: state.song
  }
};

export default connect(mapStateToProps)(Main);
