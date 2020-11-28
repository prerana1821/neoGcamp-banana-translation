//ex02: using javascript
// let input = prompt('Enter User Input: ');
// alert('Hello ' + input);

let inputButton = document.querySelector('#btn-translate');
let textInput = document.querySelector('textarea');
let outputText = document.querySelector('#output-text');

// let serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
let serverUrl = "https://lessonfourapi.prerananawar.repl.co/translate/yoda.json";
// https://repl.it/@PreranaNawar/lessonfourapi#index.js

// console.log(text);

function urlText(text) {
    // let text = textInput.value;
    return serverUrl + "?text=" + text;
}

// function urlFetch(text) {
//     fetch(urlText(text)).then(response => response.json()).then(json => console.log(json));
// }

inputButton.addEventListener("click", function userClick() {
    // console.log("click");
    // console.log(textInput.value);
    // outputText.innerText = 'Hello ' + textInput.value;
    fetch(urlText(textInput.value)).then(response => response.json()).then(function getJsonLog(json) {
        console.log(json);
        outputText.innerText = json.contents.text;
    }).catch(function errorHandling(error) {
        console.log("Sorry an Error Occured", error);
        alert("Something went wrong with our server! Try again after some time")
    });
});

//live exercise:to fetch data from mock - API
// text1 = "Hello I'm Iron Man";
// text2 = "Hello I'm Shaktimaan Man";
// text3 = "Hello I'm BatMan";

// function urlText(text) {
//     return "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" + "?text=" + text;
// }

// function urlFetch(text) {
//     fetch(urlText(text)).then(response => response.json()).then(json => console.log(json));
// }

// // function urlFetch(text) {
// //     fetch(urlText(text)).then(function getResponse(response) {
// //         return response.json();
// //     }).then(function getJsonLog(json) {
// //         console.log(json);
// //     });
// // }

// urlFetch(text1);
// urlFetch(text2);
// urlFetch(text3);