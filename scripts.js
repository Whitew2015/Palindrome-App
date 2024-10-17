const checkButton = document.getElementById("check-btn");

function checkPalindrome () {
    const userInput = document.getElementById("text-input").value;
    const resultText = document.getElementById("result");

    //clear previous result
    resultText.innerHTML = "";
    
    //check if user input is empty
    if(userInput === "") {
        alert("Please input a value");
        return; //exit function if not text is entered
    } 
    
    //convert user input text to lowercase letters
    const cleanUserInput = userInput.toLowerCase().replace(/[^a-z0-9]/gi, '');

    //reverse string from text input
    const reverseText = cleanUserInput.split('').reverse().join('');

    //compares reverse text to user input text
    if (cleanUserInput === reverseText) {
        resultText.innerHTML = `${userInput} is a palindrome`;
    }  else {
        resultText.innerHTML = `${userInput} is not a palindrome`;
    }
};

// button functionality to check if a text is a palindrome
checkButton.addEventListener("click", checkPalindrome);