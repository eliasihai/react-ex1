class Clock {
  constructor(seconds, minutes, hours, country) {
    this.seconds = seconds;
    this.minutes = minutes;
    this.hours = hours;
    this.country = country;
  }

  ConvertToSeconds() {
    let res =
      parseInt(this.seconds) * 3600 +
      parseInt(this.minutes) * 60 +
      parseInt(this.hours);
    return res;
  }

  Show() {
    const numberCheck = (value) => {
      if (value.split("")[0] == "0") return value;
      if (value >= 0 && value < 10) return "0" + value;
      return value;
    };

    return (
      numberCheck(this.hours) +
      ":" +
      numberCheck(this.minutes) +
      ":" +
      numberCheck(this.seconds)
    );
  }
}

// Get elements
const timeContainer = document.querySelector(".timeContainer");
// Declare variables
let timeObj;
let timesArray = [];
const validateForm = (event) => {
  let seconds = document.forms["myForm"]["seconds"].value;
  let minutes = document.forms["myForm"]["minutes"].value;
  let hours = document.forms["myForm"]["hours"].value;
  let country = document.forms["myForm"]["country"].value;

  // Only chars
  let regex = /^[a-zA-Z]+$/;
  // Only numbers
  var numbers = /^[0-9]+$/;
  if (seconds == "") {
    alert("Seconds must be filled out");
    return false;
  }
  if (!seconds.match(numbers)) {
    alert("Seconds must be filled with numeric characters only");
    return false;
  }
  if (minutes == "") {
    alert("Minutes must be filled out");
    return false;
  }
  if (!minutes.match(numbers)) {
    alert("Minutes must be filled with numeric characters only");
    return false;
  }
  if (hours == "") {
    alert("Hours must be filled out");
    return false;
  }
  if (!hours.match(numbers)) {
    alert("Hours must be filled with numeric characters only");
    return false;
  }
  if (country == "") {
    alert("Country must be filled out");
    return false;
  }
  if (!regex.test(country)) {
    alert("Country must be filled with chars");
    return false;
  }
  timeObj = new Clock(seconds, minutes, hours, country);
  timesArray.push(timeObj);

  if (timesArray.length == 5) {
    document.getElementById("submitButton").disabled = true;
    timesArray.forEach((element) => {
      let ele = document.createElement("div");
      ele.className = "row fs-4 text";
      ele.innerHTML =
        element.country +
        " " +
        element.Show() +
        " " +
        element.ConvertToSeconds();
      timeContainer.appendChild(ele);
    });
  }
  document.forms["myForm"].reset();
  event.preventDefault();
};
