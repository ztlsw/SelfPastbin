/*language selector*/
const LANGUAGES = 
{
    "en":
    {
        texts:
        {
            "btn-submit":"Submit",
            "Titleid":"Title",
            "Contentid":"Content"
        }
    },
    "cn":
    {
        texts:
        {
            "btn-submit":"提交",
            "Titleid":"标题",
            "Contentid":"内容"
        }
    }
};

/*load_language*/
var current_language = localStorage.getItem("lang") || "cn";
if (current_language != "cn") {
    document.getElementById("language-selector").value = current_language;
}
function load_language()
{
    let curLang = LANGUAGES[current_language];
    let localTexts = curLang.texts;
    Object.entries(localTexts).forEach(([key,value])=>{
        document.getElementById(key).innerHTML = value;
    });
}
load_language();
document.getElementById("language-selector").addEventListener("change", (e) => {
    current_language = e.target.value;
    localStorage.setItem("lang", e.target.value);
    load_language();
});


/*lose forcus*/
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


/*maxlength*/ 
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