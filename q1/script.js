class Counter {
  constructor() {
    this.number = 0;
  }
  Initialize = (value) => {
    this.number = value;
  };
  Increment = () => {
    this.number++;
  };
  Go = (value) => {
    let string ="";
    for (let index = 0; index <= value; index++) {
      string += index + ' ';
    }
    return string;
  };
}
// Get Elements
let numberInput = document.getElementById("numberInputHandler");
let startBtn = document.getElementById("startHandler");
let increaseHandle = document.getElementById("increaseHandle");
let goHandler = document.getElementById("goHandler");
let mainContainer = document.getElementsByClassName('mainContainer')[0];

// Create Elements
let allNumbers = document.createElement('p');

// Declare variables
let counter;
let number;


numberInput.addEventListener("change", (e) => {
  number = e.target.value;
});

startBtn.addEventListener("click", (e) => {
  counter = new Counter();
  counter.Initialize(number);
  increaseHandle.disabled = false;
  goHandler.disabled = false;
});

increaseHandle.addEventListener("click", (e) => {
  counter.Increment();
  numberInput.value = counter.number;
});

goHandler.addEventListener('click', (e)=>{
    allNumbers.innerHTML =  counter.Go(counter.number);
    mainContainer.append(allNumbers);
});
