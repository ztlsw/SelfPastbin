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
    let messageTitle = document.getElementById('messageTitle');
    let messageContent = document.getElementById('messageContent');
    if(titlearea.length >= 3000)
    {
        e.preventDefault();
        messageTitle.textContent = '标题长度过长';
        messageContent.textContent = '';
    }
    else if(textarea.length>=maxSizeInBytes)
    {
        e.preventDefault();
        messageContent.textContent = '内容长度过长';
        messageTitle.textContent = '';
    } 
    else 
    {
        messageTitle.textContent = '';
        messageContent.textContent = '';
    }
});