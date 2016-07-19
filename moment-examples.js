var moment = require('moment');
var now = moment();

console.log(now.format());
console.log(now.format('X'));
console.log(now.valueOf());

var timestamp = 1468889214512;
var timestampMoment = moment.utc(timestamp); // UTC timestamp

console.log(timestampMoment.local().format('h:mm a')); // To local time

// now.subtract(1, 'year');

// console.log(now.format());
// console.log(now.format('MMMM Do YYYY, h:mm:ss a')); // July 18th 2016, 5:30 pm
