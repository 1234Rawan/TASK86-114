//TASK-1
document.addEventListener("DOMContentLoaded", function() {
    var openLinks = document.querySelectorAll('.open');
    for (var i = 0; i < openLinks.length; i++) {
      if (openLinks[i].textContent.trim() === 'Elzero') {
        openLinks[i].classList.add('opened');
      }
    }
  });
  //TASK-2
  let result = document.querySelector(".assign .classes-list div");
  let addInput = document.querySelector(".classes-to-add");
  let removeInput = document.querySelector(".classes-to-remove");
  addInput.onblur = function () {
  let addArray = addInput.value.toLowerCase().split(" ");
  for (let i = 0; i < addArray.length; i++) {
  if (addArray[i] !== "") {
  let span = document.createElement("span");
  let spanText = document.createTextNode(addArray[i]);
  span.appendChild(spanText);
  result.appendChild(span);
  }
  }
  let text = document.querySelector("p.result");
  if (result.children.length > 0 && text !== null) {
  text.remove();
  }
  addInput.value = "";
  };
  removeInput.onblur = function () {
  let removeArray = removeInput.value.toLowerCase().split(" ");
  let allSpans = document.querySelectorAll("span");
  
  for (let i = 0; i < allSpans.length; i++) {
  if (removeArray.indexOf(allSpans[i].textContent) !== -1) {
  allSpans[i].remove();
  }
  }
  
  if (result.children.length === 0) {
  createText();
  }
  removeInput.value = "";
  };
  function createText() {
  let text = document.createElement("p");
  text.className = "result";
  text.appendChild(document.createTextNode("No Classes To Show"));
  result.appendChild(text);
  }
  createText();
  //TASK-3
   let my = document.querySelector("p");
my.remove();
let ourElement = document.querySelector(".our-element");
let preDiv = document.createElement("div");
preDiv.className = "start";
preDiv.setAttribute("title", "start Element");
preDiv.setAttribute("data-value", "start");
preDiv.innerHTML = "Start";
ourElement.before(preDiv);
afterDev = document.createElement("div");
afterDev.className = "end";
afterDev.setAttribute("end", "start Element");
afterDev.setAttribute("data-value", "end");
afterDev.innerHTML = "End";
ourElement.after(afterDev);
//TASK-4
var divElement = document.querySelector('div');
var textWithoutSpaces = divElement.textContent.trim();
console.log(textWithoutSpaces);
//TASK-5
function printElementType(element) {
    var elementType = element.tagName.toLowerCase();
    console.log('This Is "' + elementType + '"');
  }