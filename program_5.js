function reverse_String(str) {

    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}


let string = prompt('Enter a string: ');

let result = reverse_String(string);
console.log(result);









function checkPalindrome(str) {


    const len = string.length;


    for (let i = 0; i < len / 2; i++) {


        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

//let string = prompt('Enter a string: ');


let value = checkPalindrome(string);

console.log(value);