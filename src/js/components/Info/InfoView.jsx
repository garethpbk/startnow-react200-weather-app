import React, { Component } from 'react';

export default class InfoView extends Component {
  render() {
    const { city, weather } = this.props;

    const kToF = f => {
      return (f * (9 / 5) - 459.67).toFixed(1);
    };

    const latLong = () => {
      if (weather) {
        return weather.coord.lat + ', ' + weather.coord.lon;
      } else {
        return '';
      }
    };

    return (
      <div className="card mt-5">
        <div className="card-header bg-info text-light">
          <strong>City Information</strong>
        </div>
        <div className="card-body">
          <h5 className="card-title">{city ? city : '\u00A0'}</h5>
          <p>
            <strong>Lat/Long: {latLong()}</strong>
          </p>
          <hr />
          <div className="row">
            <div className="col-4">
              <p>
                <strong>Temperature (F)</strong>
              </p>
              <p>{weather ? kToF(weather.main.temp) : '\u00A0'}</p>
            </div>
            <div className="col-4">
              <p>
                <strong>Pressure</strong>
              </p>
              <p>{weather ? weather.main.pressure : '\u00A0'}</p>
            </div>
            <div className="col-4">
              <p>
                <strong>Humidity</strong>
              </p>
              <p>{weather ? weather.main.humidity + '%' : '\u00A0'}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <p>
                <strong>Lowest Temp (F)</strong>
              </p>
              <p>{weather ? kToF(weather.main.temp_min) : '\u00A0'}</p>
            </div>
            <div className="col-4">
              <p>
                <strong>Highest Temp (F)</strong>
              </p>
              <p>{weather ? kToF(weather.main.temp_max) : '\u00A0'}</p>
            </div>
            <div className="col-4">
              <p>
                <strong>Wind Speed</strong>
              </p>
              <p>{weather ? weather.wind.speed + 'mph' : '\u00A0'}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
