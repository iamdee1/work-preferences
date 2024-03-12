document.addEventListener("DOMContentLoaded", function() {
  const checkboxes = document.querySelectorAll('.check-checkbox');
  
  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      const innerBorder = this.parentElement.parentElement;
      const label = innerBorder.querySelector('.checkbox-container_gov');
      
      if (this.checked) {
        innerBorder.style.backgroundColor = '#548BAB';
        label.style.color = 'white';
      } else {
        innerBorder.style.backgroundColor = '#C9DFEE';
        label.style.color = '#548BAB';
      }
    });
  });
});
