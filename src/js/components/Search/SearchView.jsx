import React, { Component } from 'react';

import { enterCity, getWeather, updateHistory } from './SearchActions';

export default class SearchView extends Component {
  constructor(props) {
    super(props);

    this.handleEnterCity = this.handleEnterCity.bind(this);
    this.handleGetWeather = this.handleGetWeather.bind(this);
  }

  handleEnterCity(e) {
    const { dispatch } = this.props;
    dispatch(enterCity(e.target.value));
    e.target.classList.contains('btn') ? this.handleGetWeather(e, 'btn') : '';
  }

  handleGetWeather(e, btn) {
    e.preventDefault();
    const { city, dispatch } = this.props;
    btn ? dispatch(updateHistory(e.target.value)) : dispatch(updateHistory(city));
    btn ? dispatch(getWeather(e.target.value)) : dispatch(getWeather(city));
  }

  render() {
    return (
      <div>
        <div className="btn-group">
          <button type="button" className="btn bg-primary text-light" value="San Diego" onClick={this.handleEnterCity}>
            San Diego
          </button>
          <button type="button" className="btn bg-primary text-light" value="New York" onClick={this.handleEnterCity}>
            New York
          </button>
          <button type="button" className="btn bg-primary text-light" value="Washington" onClick={this.handleEnterCity}>
            Washington D.C.
          </button>
          <button type="button" className="btn bg-primary text-light" value="London" onClick={this.handleEnterCity}>
            London
          </button>
          <button type="button" className="btn bg-primary text-light" value="Tokyo" onClick={this.handleEnterCity}>
            Tokyo
          </button>
        </div>
        <form>
          <div className="input-group">
            <input
              type="text"
              name="city-input"
              placeholder="Enter a city..."
              className="form-control w-100"
              onChange={this.handleEnterCity}
            />
            <div className="input-group-append">
              <button className="btn" type="submit" onClick={this.handleGetWeather}>
                Go!
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
