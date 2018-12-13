function outputmessage() {
    var firstNumber= document.getElementById("firstvalue").value;
    var secondNumber=document.getElementById("secondtvalue").value;
    var thirdNumber= document.getElementById("thirdvalue").value;
    var text;

     if(firstNumber <=0 || secondNumber<=0 || thirdNumber<=0){
         text="A triangle must have 3 sides with positive definate length!";
    }
    //if is not trianle
    else if(firstNumber + secondNumber <= thirdNumber && firstNumber + thirdNumber <= secondNumber && secondNumber + thirdNumber <= firstNumber){
        text = "Is Not Triangle";
    
    }
    //if triangle is equilateral
    else if(firstNumber===secondNumber && secondNumber===thirdNumber) {
        text = "The triangle is equilateral.";   
    }
    //if triangle is isosceles
    else if(firstNumber===secondNumber || firstNumber===thirdNumber || secondNumber===thirdNumber) {
        text="The triangle is isosceles.";
    } 
    //if triangle is scalene
    else if(firstNumber!==secondNumber && firstNumber!==thirdNumber && secondNumber!==thirdNumber) {
        text="triangle is scalene ";
    }
    
    else {
           text = "error";
        }
document.getElementById("demo").innerHTML = text;
    }