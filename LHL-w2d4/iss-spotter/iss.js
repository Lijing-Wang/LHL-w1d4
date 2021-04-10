const request = require('request');
 
const fetchMyIp = (callback) => {
  request('https://api.ipify.org?format=json', callback);
};

const fetchCoordsByIp = (ip, callback) => {
  request(`https://freegeoip.app/json/${ip}`, callback);
};

const fetchIssFlyOverTimes = (coords, callback) => {
  request(`http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`, callback);
};

const nextIssTimesForMyLocation = (callback) => {
  fetchMyIp((error, response, body) => {
    if (error) {
      console.log('error', error);
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      console.log('Failed', msg);
    }
    if (body) {
      const localIp = JSON.parse(body).ip;
      console.log("localIp", localIp);
      
      fetchCoordsByIp(localIp, (error, response, body) => {
        if (error) {
          console.log('error', error);
        }
        if (response.statusCode !== 200) {
          const msg = `Status Code ${response.statusCode} when fetching coordinates by IP. Response: ${body}`;
          console.log('Failed', msg);
        }
        if (body) {
          const {latitude, longitude} = JSON.parse(body);
          const localCoords = {latitude, longitude};
          console.log('localCoords', localCoords);
      
          fetchIssFlyOverTimes(localCoords, (error, response, body) => {
            if (error) {
              console.log('error', error);
            }
            if (response.statusCode !== 200) {
              const msg = `Status Code ${response.statusCode} when fetching iss pass times by coordinates. Response: ${body}`;
              console.log('Failed', msg);
            }
            if (body) {
              callback(body);
            }
          });
        }
      });
    }
  });
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

module.exports = {timeConverter, nextIssTimesForMyLocation};