const userInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultText = document.getElementById("result");

const checkPalindrome = () => {
    if(userInput === '') {
        alert("Enter any text!");
        return;
    } 
    resultText.textContent = "";
    const reverseText = userInput.split(' ').reverse().join('');

    if (userInput === reverseText) {
        resultText.textContent = '${userInput} is a palindrome.';
    }  else {
        resultText.textContent = '${UserInput} is not a plaindrome.';
    }
};


checkButton.addEventListener("click", checkPalindrome);