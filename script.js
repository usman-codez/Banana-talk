let textField=document.querySelector("#txt");
let Button=document.querySelector(".btn");
let outputField=document.querySelector("#output")

Button.addEventListener('click',function eventHandler() {
    
    outputField.innerText=('Translation of Text is : ' + textField.value)

})