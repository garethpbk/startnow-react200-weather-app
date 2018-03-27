import { connect } from 'react-redux';
import HistoryView from './HistoryView';

function mapStoreToProps(store) {
  return {
    history: store.search.history,
    times: store.search.times
  };
}

export default connect(mapStoreToProps)(HistoryView);
