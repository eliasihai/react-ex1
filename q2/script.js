class Duck {
  constructor(name, color, age, weight, img) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.weight = weight;
    this.img = img;
  }

  ShowHandler() {
    let detailsContainer = document.querySelector(".detailsContainer") || false;
    if (detailsContainer) {
      while (detailsContainer.hasChildNodes()) {
        detailsContainer.removeChild(detailsContainer.firstChild);
      }
    } else {
      detailsContainer = document.createElement("div");
      detailsContainer.className = `detailsContainer`;
    }

    let ele;
    for (const item of Object.keys(duck)) {
      if (item === "img") {
        ele = document.createElement("img");
        ele.src = duck[item];
      } else {
        ele = document.createElement("div");
        ele.innerHTML = item + ": " + duck[item];
      }
      detailsContainer.appendChild(ele);
    }
    container.appendChild(detailsContainer);
  }

  QuackHandler() {
    const quackContainer = document.querySelector('.quackContainer');
    quackContainer.innerHTML = ``;
    const onAudioEnded=()=>{
      loopCount++;
      if (loopCount < maxLoopCount) {
        // Play again
        audio.currentTime = 0;
        audio.play();
      } else {
        // Reset loop count for future use
        loopCount = 0;
        audio.removeEventListener("ended", onAudioEnded);
      }
    };

    const printTimes = (duck.age * duck.weight) / 2;
    for (let i = 0; i < printTimes; i++) {
      quackContainer.innerHTML += "Quck ";
    }
    const audio = document.getElementById("audio");
    let loopCount = 0;
    const maxLoopCount = 3;

    if (loopCount < maxLoopCount) {
      audio.loop = false; // Disable loop to control the number of plays
      audio.addEventListener("ended", onAudioEnded);
      audio.play();
    }

  }
}

// Get Elements
const container = document.getElementsByClassName("container")[0];
const hiddenContainer = document.getElementsByClassName("hiddenContainer")[0];
const showBtn = document.getElementById("show");
const duckBtn = document.getElementById("duck");

// Variables
let duck;
const validateForm = (event) => {
  let name = document.forms["myForm"]["name"].value;
  let color = document.forms["myForm"]["color"].value;
  let age = document.forms["myForm"]["age"].value;
  let weight = document.forms["myForm"]["weight"].value;
  let imgUrl = document.forms["myForm"]["imgUrl"].value;

  // Only chars
  let regex = /^[a-zA-Z]+$/;
  // Only numbers
  var numbers = /^[0-9]+$/;
  if (name == "") {
    alert("Name must be filled out");
    return false;
  }
  if (!regex.test(name)){
    alert("Name must be filled with chars");
    return false;
  }
  if (color == "") {
    alert("Color must be filled out");
    return false;
  }
  if (!regex.test(color)){
    alert("Color must be filled with chars");
    return false;
  }
  if (age == "") {
    alert("Age must be filled out");
    return false;
  }
  if(!age.match(numbers)){
    alert('Age must be filled with numeric characters only');
    return false;
  }
  if (weight == "") {
    alert("Weight must be filled out");
    return false;
  }
  if(!weight.match(numbers)){
    alert('Wright must be filled with numeric characters only');
    return false;
  }
  if (imgUrl == "") {
    alert("Image URL must be filled out");
    return false;
  }
  if (!isImage(imgUrl)) {
    alert("Please fill image url");
    return false;
  }
  duck = new Duck(name, color, age, weight, imgUrl);
  document.getElementById("submitButton").disabled = true;
  hiddenContainer.style.display = "flex";
  event.preventDefault();
};
const isImage = (url) => {
  let str = ["jpg", "jpeg", "png", "webp", "avif", "gif", "svg"];
  let isTrue = false;
  str.forEach((element) => {
    if (url.toLowerCase().indexOf(element) > -1) {
      isTrue = true;
    }
  });
  return isTrue;
};
showBtn.addEventListener("click", (e) => {
  duck.ShowHandler();
});
duckBtn.addEventListener("click", (e) => {
  duck.QuackHandler();
});
