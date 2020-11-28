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

//live exercise: querySelector
// 1. document.querySelector('textarea');
// 2. document.querySelector('.btn-primary');
// 3. document.querySelector('#input-btn');
// 4. document.querySelector('input[name="translator"]');