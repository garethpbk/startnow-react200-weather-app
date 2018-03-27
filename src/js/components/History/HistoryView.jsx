import React, { Component } from 'react';

export default class HistoryView extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="card mt-5">
        <div className="card-header bg-info text-light">
          <strong>Search History</strong>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            {history.map((record, i) => {
              let dt = new Date();
              let dF = dt.getMonth() + 1 + '/' + dt.getDate() + '/' + dt.getFullYear();
              let tF =
                ('0' + dt.getHours()).slice(-2) +
                ':' +
                ('0' + dt.getMinutes()).slice(-2) +
                ':' +
                ('0' + dt.getSeconds()).slice(-2);
              return (
                <li className="list-group-item" key={i}>
                  <span className="float-left">{record}</span>
                  <span className="float-right">
                    {dF}
                    <br />
                    {tF}
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
