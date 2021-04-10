const timeConverter = require('./iss').timeConverter;
const nextIssTimesForMyLocation = require('./iss').nextIssTimesForMyLocation;

nextIssTimesForMyLocation((data) => {
  console.log('Next 5 iss pass times:');
  JSON.parse(data).response.forEach(passTime => {
    console.log(`will pass from ${timeConverter(passTime.risetime)} to ${timeConverter(passTime.duration + passTime.risetime)}`);
  });
});
