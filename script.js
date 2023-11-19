let textField=document.querySelector("#txt");
let Button=document.querySelector(".btn");
let outputField=document.querySelector("#output");
let Url='https://api.funtranslations.com/translate/minion.json'

function Translation(input) {
   return Url+ '?' + 'text=' + input;

}
function ErrorHandling(error) {
    console.log(error)
    alert('Something wrong with server, try again after sometime')
}

Button.addEventListener('click',function eventHandler() {
    // outputField.innerText=('Translation of Text is : ' + textField.value)
    var TextInput=textField.value;
    fetch(Translation(TextInput))
    .then(Response=> Response.json()) 
    .then(json=> {
        var translateText= json.contents.translated;
        outputField.innerText=translateText;
    })
    .catch(ErrorHandling)

})