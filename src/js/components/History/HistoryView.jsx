import React, { Component } from 'react';

export default class HistoryView extends Component {
  render() {
    const { history, times } = this.props;
    return (
      <div className="card mt-5">
        <div className="card-header bg-info text-light">
          <strong>Search History</strong>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            {history.map((record, i) => {
              return (
                <li className="list-group-item" key={i}>
                  <span className="float-left">{record}</span>
                  <span className="float-right">
                    {times[i].date}
                    <br />
                    {times[i].time}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
