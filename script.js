var formElements = document.querySelectorAll('.form-control');
formElements.forEach((element)=>{
    let limstr = element.getAttribute('placeholder');
    element.addEventListener('focus', function() {
        element.placeholder = '';
      });
      
      element.addEventListener('blur', function() {
        element.placeholder = limstr;
      });
});