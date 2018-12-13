function outputmessage() {
    var firstNumber= document.getElementById("firstvalue").value;
    var secondNumber=document.getElementById("secondtvalue").value;
    var thirdNumber= document.getElementById("thirdvalue").value;
    var text;

    //if triangle is equivalent
    if(firstNumber===secondNumber && secondNumber===thirdNumber) {
        text = "The triangle is equivalent.";   
    }
    //if triangle is isosceles
    else if(firstNumber===secondNumber || firstNumber===thirdNumber || secondNumber===thirdNumber) {
        text="The triangle is isosceles.";
    } 
    //if triangle is scalene
    else if(firstNumber!==secondNumber && firstNumber!==thirdNumber && secondNumber!==thirdNumber) {
        text="triangle is scalene "
    }
   
    else {
           text = "error";
        }
document.getElementById("demo").innerHTML = text;
    }