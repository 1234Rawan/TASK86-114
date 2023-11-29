var userInput = prompt("Print Number From – To", "Example: 5-20")
if (userInput !== null && userInput !== "") {
  var numbers = userInput.split("-").map(Number);
  var startNumber = Math.min(numbers[0], numbers[1]);
  var endNumber = Math.max(numbers[0], numbers[1]);
  for (var i = startNumber; i <= endNumber; i++) {
    console.log(i);
  }
} else {
  console.log("User canceled or entered an empty string.");
}
//TASK-2
function createPopup() {
    var popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = '<p>This is a Popup</p><button class="close-btn" onclick="closePopup()">Close</button>';
    document.body.appendChild(popup);
  }
  function closePopup() {
    var popup = document.querySelector('.popup');
    if (popup) {
      document.body.removeChild(popup);
    }
  }
  setTimeout(createPopup, 5000);
  //TASK-3
  var counterDiv = document.getElementById('counterDiv');
  var count = parseInt(counterDiv.innerText);
  var counterInterval = setInterval(function() {
    counterDiv.innerText = count--;
    if (count < 0) {
      clearInterval(counterInterval);
    }
  }, 1000);
   //TASK-4
   var counterDiv = document.getElementById('counterDiv');
   var count = parseInt(counterDiv.innerText);
   var counterInterval = setInterval(function() {
     counterDiv.innerText = count--;
     if (count < 0) {
       window.location.href = 'https://elzero.org';
       clearInterval(counterInterval);
     }
   }, 1000);
   //TASK-5
   var counterDiv = document.getElementById('counterDiv');
   var count = parseInt(counterDiv.innerText);
   var counterInterval = setInterval(function() {
     counterDiv.innerText = count--;
     if (count === 0) {
       clearInterval(counterInterval);
       window.location.href = 'https://elzero.org';
     }
     if (count === 5) {
       window.open('https://elzero.org', '_blank', 'width=600,height=400');
     }
   }, 1000);