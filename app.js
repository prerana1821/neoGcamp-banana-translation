//ex02: using javascript
// let input = prompt('Enter User Input: ');
// alert('Hello ' + input);

let inputButton = document.querySelector('#btn-translate');
let textInput = document.querySelector('textarea');

// console.log(inputButton);

inputButton.addEventListener("click", function userClick() {
    console.log("click");
    console.log(textInput.value);
});