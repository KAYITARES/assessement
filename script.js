function outputmessage() {
    var firstNumber = parseInt(document.getElementById("firstvalue").value);
    var secondNumber = parseInt(document.getElementById("secondtvalue").value);
    var thirdNumber = parseInt(document.getElementById("thirdvalue").value);
    var text;
    var array = [firstNumber, secondNumber, thirdNumber];
    //if for entering positive value with 3side
    if (firstNumber <= 0 || secondNumber <= 0 || thirdNumber <= 0) {
        text = "A triangle must have 3 sides with positive definate length!";
    }
    //if for not a triangle
    else if (
        (firstNumber + secondNumber <= thirdNumber &&
            secondNumber + firstNumber <= thirdNumber) ||
        (firstNumber + thirdNumber <= secondNumber &&
            thirdNumber + firstNumber <= secondNumber) ||
        (secondNumber + thirdNumber <= firstNumber && thirdNumber + secondNumber <= firstNumber)
    ) {
        text = " Not a Triangle";

    }

    //if triangle is equilateral
    else if (
        firstNumber === secondNumber &&
        secondNumber === thirdNumber &&
        thirdNumber === firstNumber
    ) {
        text = " equilateral.";
    }

    //if triangle is isosceles
    else if (
        firstNumber === secondNumber ||
        secondNumber === thirdNumber ||
        thirdNumber === firstNumber
    ) {
        text = " isosceles.";
    }
    //if triangle is scalene
    else if (
        firstNumber !== secondNumber &&

        firstNumber !== thirdNumber &&

        secondNumber !== thirdNumber
    ) {
        text = " scalene";
    }
    //if triangle is eror
    else {
        text = " error";
    }
    document.getElementById("demo").innerHTML = "the values you enter are:" + " [" + array.join() + "]" + "<br> The triangle formed is";
    document.getElementById("demo").innerHTML += text.toUpperCase();
}
