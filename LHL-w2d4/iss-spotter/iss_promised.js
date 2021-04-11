const request = require('request-promise-native');

const fetchMyIp = () => {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIp = (ip) => {
  return request(`https://freegeoip.app/json/${ip}`);
};
  
const fetchIssFlyOverTimes = (coords) => {
  return request(`http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`);
};

const timeConverter = (timestamp) => {
  let a = new Date(timestamp * 1000);
  let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  let year = a.getFullYear();
  let month = months[a.getMonth()];
  let date = a.getDate();
  let hour = a.getHours();
  let min = a.getMinutes();
  let sec = a.getSeconds();
  let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
  return time;
};

module.exports = {fetchMyIp, fetchCoordsByIp, fetchIssFlyOverTimes, timeConverter};