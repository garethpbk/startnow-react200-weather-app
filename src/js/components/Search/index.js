import { connect } from 'react-redux';
import SearchView from './SearchView';

function mapStoreToProps(store) {
  return {
    city: store.search.city,
    weather: store.search.weather
  };
}

export default connect(mapStoreToProps)(SearchView);
