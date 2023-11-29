var elementById = document.getElementById('elzero');
var elementByClass = document.getElementsByClassName('element')[0];
var elementByTag = document.getElementsByTagName('div')[0];
var elementByQueryId = document.querySelector('#elzero');
var elementByQueryClass = document.querySelector('.element');
var elementByQueryAttribute = document.querySelector('[name="js"]');
var elementByQueryComplex = document.querySelector('div.element[name="js"]');
var elementsByQueryAll = document.querySelectorAll('.element')[0];
var elementsByQueryAllAttr = document.querySelectorAll('[name="js"]')[0];
var elementsByQueryAllComplex = document.querySelectorAll('div.element[name="js"]')[0];
var elementByParentNode = document.getElementById('elzero').parentNode.firstElementChild;
var elementByNextSibling = document.getElementById('elzero').nextElementSibling;
var elementByPrevSibling = document.getElementById('elzero').previousElementSibling;
var elementByChildren = document.getElementById('elzero').parentElement.children[0];
var elementByClosest = document.getElementById('elzero').closest('.element');
// Task2
let myImg = document.querySelectorAll("div img");
for (let s = 0; s < myImg.length; s++) {
myImg[s].src = "https://tse3.mm.bing.net/th?id=OIP.yaRCntjAj0spPRmOlgg3ZgHaEK&pid=Api&P=0&h=220";
myImg[s].setAttribute("alt", "Elzero Logo");
myImg[s].style.backgroundColor = "black";
}
//Task3
let myInput = document.querySelector("[name='dollar']");
let myResult = document.querySelector(".result");
let form = document.getElementsByTagName("form");
myInput.oninput = function () {
myResult.textContent = `{${myInput.value} USD Dollar = {${(
myInput.value * 15
).toFixed(2)}} Egyptian Pound}`;
};

//Task4
let A = document.querySelector(".one");
let B = document.querySelector(".two");
A.title = "one";
B.title = "two";
let textOne = A.textContent;
let textTwo = B.textContent;
A.textContent = textTwo;
B.textContent = `${textOne} ${++B.childNodes.length}`;
//Task5
var images = document.querySelectorAll('img');
  images.forEach(function(img) {
    if (img.alt) {
      img.alt = 'Old';
    } else {
      img.alt = 'Elzero New';
    }
  });
  //Task6
  function createElements() {
   var numElements = document.querySelector('[name="elements"]').value;
   var elementType = document.querySelector('[name="type"]').value;
   var elementText = document.querySelector('[name="texts"]').value;
   var resultsDiv = document.querySelector('.results');
   resultsDiv.innerHTML = '';
   for (var i = 1; i <= numElements; i++) {
     var newElement = document.createElement(elementType);
     newElement.className = 'box';
     newElement.title = 'Element';
     newElement.id = 'id-' + i;
     newElement.textContent = elementText;
     resultsDiv.appendChild(newElement);
   }
 }