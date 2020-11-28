//ex02: using javascript
// let input = prompt('Enter User Input: ');
// alert('Hello ' + input);

//ex03: wiring button click
let inputButton = document.querySelector('#btn-translate');
console.log(inputButton);

inputButton.addEventListener("click", function userClick() {
    console.log("click");
});