let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

module.exports.fomartDateTime = timestamp => {};

module.exports.formatTime = timestamp => {
  if (timestamp) {
    this.date = new Date(timestamp);
  } else {
    this.date = new Date();
  }

  let getTime = (hours, minutes, seconds) => {
    if (hours >= 13) {
      hours = hours - 12;
      return `${hours}:${minutes}:${seconds} PM`;
    } else if (hours === 12) {
      return `${hours}:${minutes}:${seconds} PM`;
    } else if (hours === 24) {
      return `${12}:${minutes}:${seconds} AM`;
    } else {
      return `${hours}:${minutes}:${seconds} AM`;
    }
  };

  let currentTime = `${getTime(
    this.date.getHours(),
    this.date.getMinutes(),
    this.date.getSeconds()
  )} `;

  return currentTime;
};

module.exports.formatDate = (timestamp, seperator) => {
  if (timestamp) {
    //Convert the value from seconds to milliseconds by multiplying it to 1000
    this.date = new Date(timestamp * 1000);
  } else {
    this.date = new Date();
  }
  let today = days[this.date.getDay()];
  let thisMonth = months[this.date.getMonth()];

  let currentDate = `${today}, ${thisMonth} ${this.date.getFullYear()}`;

  return currentDate;
};

module.exports.formatTimeAgo = timestamp => {
  var date = new Date(); // Gets the current time

  var timeStampNow = Math.floor(date.getTime() / 1000);
  var seconds = timeStampNow - timestamp;

  // more that two days
  if (seconds > 2 * 24 * 3600) {
    return "a few days ago";
  }
  // a day
  if (seconds > 24 * 3600) {
    return "yesterday";
  }
  //Some hours
  if (seconds > 3600) {
    return "a few hours ago";
  }
  //half an hour
  if (seconds > 1800) {
    return "half an hour ago";
  }
  //seconds
  if (seconds > 60) {
    return Math.floor(seconds / 60) + " minutes ago";
  }
  if (seconds < 60) {
    return seconds + " seconds ago";
  }
};
