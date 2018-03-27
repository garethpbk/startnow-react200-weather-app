import React from 'react';

import Title from './components/Title/Title';
import SearchView from './components/Search';
import InfoView from './components/Info';
import HistoryView from './components/History';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Title />
        <SearchView />
        <div className="row">
          <div className="col">
            <InfoView />
          </div>
          <div className="col">
            <HistoryView />
          </div>
        </div>
      </div>
    );
  }
}
