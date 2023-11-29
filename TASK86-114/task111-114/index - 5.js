const selectedFont = localStorage.getItem('selectedFont') || 'Open Sans';
  const selectedColor = localStorage.getItem('selectedColor') || '#333';
  const selectedSize = localStorage.getItem('selectedSize') || '16px';
  document.getElementById('fontSelector').value = selectedFont;
  document.getElementById('colorSelector').value = selectedColor;
  document.getElementById('sizeSelector').value = selectedSize;
  applySelectedStyles();
  document.getElementById('fontSelector').addEventListener('change', function() {
    localStorage.setItem('selectedFont', this.value);
    applySelectedStyles();
  });

  document.getElementById('colorSelector').addEventListener('change', function() {
    localStorage.setItem('selectedColor', this.value);
    applySelectedStyles();
  });

  document.getElementById('sizeSelector').addEventListener('change', function() {
    localStorage.setItem('selectedSize', this.value);
    applySelectedStyles();
  });
  function applySelectedStyles() {
    const selectedFont = localStorage.getItem('selectedFont') || 'Open Sans';
    const selectedColor = localStorage.getItem('selectedColor') || '#333';
    const selectedSize = localStorage.getItem('selectedSize') || '16px';

    document.body.style.fontFamily = selectedFont;
    document.body.style.color = selectedColor;
    document.body.style.fontSize = selectedSize;
  }
//TASK-2
document.getElementById('input1').value = localStorage.getItem('input1') || '';
document.getElementById('input2').value = localStorage.getItem('input2') || '';
document.getElementById('input3').value = localStorage.getItem('input3') || '';
document.getElementById('selectBox').value = localStorage.getItem('selectBox') || 'option1';
document.getElementById('myForm').addEventListener('submit', function(event) {
  localStorage.setItem('input1', document.getElementById('input1').value);
  localStorage.setItem('input2', document.getElementById('input2').value);
  localStorage.setItem('input3', document.getElementById('input3').value);
  localStorage.setItem('selectBox', document.getElementById('selectBox').value);
});
window.addEventListener('beforeunload', function() {
  localStorage.removeItem('input1');
  localStorage.removeItem('input2');
  localStorage.removeItem('input3');
  localStorage.removeItem('selectBox');
});