import axios from 'axios';

const API_KEY = '448f354b11211280911ac07e1667ceba';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

export function enterCity(city) {
  return {
    type: 'UPDATE_CITY',
    payload: city
  };
}

export function getWeather(city) {
  const req = axios.get(`${ROOT_URL}&q=${city}`);
  return {
    type: 'GET_WEATHER',
    payload: req
  };
}

export function updateHistory(city) {
  let dt = new Date();
  let dF = dt.getMonth() + 1 + '/' + dt.getDate() + '/' + dt.getFullYear();
  let tF =
    ('0' + dt.getHours()).slice(-2) + ':' + ('0' + dt.getMinutes()).slice(-2) + ':' + ('0' + dt.getSeconds()).slice(-2);
  return {
    type: 'UPDATE_HISTORY',
    payload: {
      city: city,
      time: {
        date: dF,
        time: tF
      }
    }
  };
}
