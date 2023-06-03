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


var maxSizeInBytes = 1024*1024;
document.getElementById('btn-submit').addEventListener('click',(e)=>{
    var textarea = document.getElementById('Content').value;
    var titlearea = document.getElementById('Title').value;
    if(textarea.length>maxSizeInBytes||titlearea.length>3000)
    {
        e.preventDefault();
        alert('内容长度超过限制');
    }
});