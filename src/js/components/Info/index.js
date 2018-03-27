import { connect } from 'react-redux';
import InfoView from './InfoView';

function mapStoreToProps(store) {
  return {
    city: store.search.city,
    weather: store.search.weather.data
  };
}

export default connect(mapStoreToProps)(InfoView);
