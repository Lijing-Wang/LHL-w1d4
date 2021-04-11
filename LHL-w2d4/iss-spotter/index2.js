const fetchMyIp = require('./iss_promised').fetchMyIp;
const fetchCoordsByIp = require('./iss_promised').fetchCoordsByIp;
const fetchIssFlyOverTimes = require('./iss_promised').fetchIssFlyOverTimes;
const timeConverter = require('./iss_promised').timeConverter;

fetchMyIp()
  .then((data) => {
    const localIp = JSON.parse(data).ip;
    console.log("localIp", localIp);
    return fetchCoordsByIp(localIp);
  })
  .then((data)=>{
    const {latitude, longitude} = JSON.parse(data);
    const localCoords = {latitude, longitude};
    console.log('localCoords', localCoords);
    return fetchIssFlyOverTimes(localCoords);
  })
  .then((data)=>{
    console.log('Next 5 iss pass times:');
    JSON.parse(data).response.forEach(passTime => {
      console.log(`will pass from ${timeConverter(passTime.risetime)} to ${timeConverter(passTime.duration + passTime.risetime)}`);
    });
  })
  .catch((error)=>{
    console.log('error', error);
  });