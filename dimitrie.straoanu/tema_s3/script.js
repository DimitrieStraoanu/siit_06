var compareValues = function () {

    var result;

    var a = prompt("Input first number:\nEx: 3");
    a = Number(a);

    var b = prompt("Input second number:\nEx: 6");
    b = Number(b);

    if (a === b) {
        result = true;
        alert(result + "\nNumbers are the equal.");
    } else {
        result = false;
        alert(result + "\nNumbers are different.");
    }

}

//---------------------------------------------------------------------------

var compareValuesAgain = function () {

    var result;

    var a = prompt("Input first number:\nEx: 3");
    a = Number(a);

    var b = prompt("Input second number:\nEx: 6");
    b = Number(b);

    if (a < b) {
        result = -1;
        alert("Your result: " + result + "\nFirst number is smaller.");

    } else if (a === b) {
        result = 0;
        alert("Your result: " + result + "\nNumbers are equal.");

    } else {
        result = 1;
        alert("Your result: " + result + "\nFirst number is bigger.");
    }

}

//---------------------------------------------------------------------------

var returnMax = function () {

    var a = prompt("Input first number:\nEx: 3");
    a = Number(a);

    var b = prompt("Input second number:\nEx: 6");
    b = Number(b);

    if (a > b) {
        alert("Maximum is: " + a);
    } else {
        alert("Maximum is: " + b);
    }

}

//---------------------------------------------------------------------------

var returnMin = function () {

    var a = prompt("Input first number:\nEx: 3");
    a = Number(a);

    var b = prompt("Input second number:\nEx: 6");
    b = Number(b);

    if (a < b) {
        alert("Minimum is: " + a);
    } else {
        alert("Minimum is: " + b);
    }

}

//---------------------------------------------------------------------------

var sumNaturalNumbersN = function () {

    var a = prompt("Input limit:\nEx: 8");
    a = Number(a);

    var sum = 0;
    var natNr = 0;

    for (var i = 1; i <= a; i++) {
        natNr++;
        sum = sum + natNr;
    }

    alert("Sum of first " + a + " natural numbers is: " + sum);

}

//---------------------------------------------------------------------------

var primeNumberCheck = function () {

    var a = prompt("Input number to check:\nEx: 7")
    a = Number(a);

    var divisor = 2;
    var isPrimeNumber = true;

    for (var i = 2; i < a; i++) {

        if (a % divisor === 0) {
            isPrimeNumber = false;
        } else {
            divisor++;
        }

    }

    if (a !== 0 && a !== 1 && isPrimeNumber === true) {
        alert("Number " + a + " is prime.")
    } else {
        alert("Nope! " + a + " not a prime number.")
    }

}

//---------------------------------------------------------------------------

var sumPrimeNumbersN = function () {

    var a = prompt("Input limit:\nEx: 15");
    a = Number(a);

    var number = 2;
    var divisor = 2;
    var primeNumbersFound = 0;
    var isPrimeNumber = true;
    var sum = 0;

    while (primeNumbersFound < a) {

        for (var i = 2; i < number; i++) {

            if ((number % divisor) === 0) {
                isPrimeNumber = false;
            } else {
                divisor++;
            }

        }

        if (isPrimeNumber === true) {
            primeNumbersFound++;
            sum = sum + number;
        }

        number++;
        divisor = 2;
        isPrimeNumber = true;

    }

    alert("Suma primelor " + a + " numere prime este: " + sum);

}

//---------------------------------------------------------------------------

var reverseString = function () {

    var string = prompt("Input string:\nEx: abcdef");
    string = Array.from(string);

    var stringReversed = [];
    var lastElement;


    while (string.length > 0) {
        lastElement = string[string.length - 1];
        stringReversed.push(lastElement);
        string.pop();
    }


    alert("Reversed string: " + stringReversed.join(""));

}

//---------------------------------------------------------------------------

var sumOddPositiveNumbersN = function () {

    var a = prompt("Input limit:\nEx: 12");
    a = Number(a);

    var number = 0;
    var oddNumbersFound = 0;
    var sum = 0;

    while (oddNumbersFound < Number(a)) {

        if (number % 2 !== 0) {

            oddNumbersFound++;
            sum = sum + number;
        }

        number++;

    }

    alert("Sum of first " + a + " positive odd numbers is: " + sum);

}

//---------------------------------------------------------------------------

var findInArray = function () {

    var arr = prompt("Input array of numbers:\nEx: 1,2,34,5,67");
    arr = arr.split(",");
    arr = arr.map(Number);

    var x = prompt("Input number to find in array:\nEx: 5");
    x = Number(x);

    var isInArr;
    var instances=0;

    for (i = 1; i <= arr.length; i++) {

        if (x === arr[i - 1]) {
            isInArr = true;
            instances++;
        }
    }

    if (isInArr === true) {
        alert("Number " + x + " is in array " + instances + " times.")

    } else {
        alert("Nope, not in array.")
    }

}