import { connect } from 'react-redux';
import HistoryView from './HistoryView';

function mapStoreToProps(store) {
  return {
    history: store.search.history
  };
}

export default connect(mapStoreToProps)(HistoryView);
