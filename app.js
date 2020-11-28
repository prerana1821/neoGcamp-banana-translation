//ex02: using javascript
// let input = prompt('Enter User Input: ');
// alert('Hello ' + input);

let inputButton = document.querySelector('#btn-translate');
let textInput = document.querySelector('textarea');
let outputText = document.querySelector('#output-text');

// console.log(inputButton);

inputButton.addEventListener("click", function userClick() {
    console.log("click");
    console.log(textInput.value);
    outputText.innerText = 'Hello ' + textInput.value;
});

//live exercise:to fetch data from mock - API
text1 = "Hello I'm Iron Man";
text2 = "Hello I'm Shaktimaan Man";
text3 = "Hello I'm BatMan";

function urlText(text) {
    return "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" + "?text=" + text;
}

function urlFetch(text) {
    fetch(urlText(text)).then(response => response.json()).then(json => console.log(json));
}

// function urlFetch(text) {
//     fetch(urlText(text)).then(function getResponse(response) {
//         return response.json();
//     }).then(function getJsonLog(json) {
//         console.log(json);
//     });
// }

urlFetch(text1);
urlFetch(text2);
urlFetch(text3);