const Bday = document.querySelector("#date");

const btn = document.querySelector("#checkBtn");

const output = document.querySelector("#output");


// function to reverse a date string
function reverseString(string) {

    let replaced = replaceHyphen(string);
    let charList = replaced.split("");
    let reversedList = charList.reverse();
    let joinedList = reversedList.join("");
    return joinedList
}


function Onlynumberify(date) {
    let hyphenOut = replaceHyphen(date)
    let numberedDate = numberification(hyphenOut);
    return numberedDate
}


function checkPalindrome() {

    let Birthday = Bday.value;
    let reversedStr = reverseString(Birthday);
    let numbered = numberification(reversedStr);

    let notReversedDate = Onlynumberify(Birthday);

    if (numbered === notReversedDate) { 
        output.style.display="block"
        output.innerText = `Yayyy.. your birthday is a palindrome!!`
        
    }
    else {
        output.style.display="block"
        output.innerText = `Nope, your birthday is not a palindrome!`
    }
}


function numberification(string) {
    let numberified = (Number(string))
    return numberified
}



function replaceHyphen(date) {
    let hyphenOut = date.replaceAll("-", "")
    return hyphenOut
}


btn.addEventListener("click", () => {
    output.style.display="none";
    checkPalindrome()
})