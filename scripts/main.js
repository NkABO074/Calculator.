/**
 * @file main.js
 * @author nkwe ahoume boris
 * @email nkabo074@gmail.com    
 * Handle the expresion in the "Calculator Screen" so they can be proced.
 * 
 */


//**After adding a button,insert your function here**

/**
 * Returns the cosinus.
 * @param x A numeric expression.
 */
function Cos(x) {
    return Math.cos(x);
}

/**
 * Return the sinus.
 * @param x A numeric expression.
 */
function Sin(x) {
    return Math.sin(x);
}

/**
 * Return the square root of the given number.
 * @param x A numeric expression.
 */
function Sqrt(x) {
   try {
        return Math.sqrt(x);
   } catch (error) {
        return error;
   }
    
}

/**
 * Return the natural logarithm of the given number.
 * @param x A numeric expression.
 */
function Ln(x){
   try {
        return Math.log(x);
   } catch (error) {
        return error;
   }
    
}

/**
 * Return the base10 logarithm of the given number.
 * @param x A numeric expression.
 */
function Log10(x) {
    try {
        return Math.log10(x);
   } catch (error) {
        return error;
   }
    
}

/**
 * Return "e" rised to the power of the given number.
 * @param x A numeric expression.
 */
function eˣ(x) {
    return Math.exp(x);
}

/**
 * Return the percentage of the given number.
 * @param x A numeric expression.
 */
function Percent(x) {
    return x / 100;
}

/**
 * Return 10ˣ
 * @param x A numeric expression.
 */
function e10ˣ(x){
    return Math.pow(10,x);
}

/**
 * Return the factorial of a number.
 * @param x A numeric expression.
 */
function Fact(x) {
    if (x === 1 || x === 0) {
        return 1;
    } else {
        return x * Fact(x-1);
    }
}
//****

//Pi constant
const π = 3.141592654;
//Euler's number.
const e = 2.718281828;

/**
 * take the mathematical exprssion whithin a input and return a result.
 * @param expression the expression that the function should verified.
 * @returns the result of the computed expresion.
 * @returns the error message to the calculator screen.
 */
function computeExpression (expression) {
    try {
        let result = eval(expression);
        return result;
    } catch (error) {
        // Handle any errors that occur during evaluation
        return error; // Return an empty string if an error occurs
    }
}

let result = document.getElementById("sendResult");

result.onclick = function(){
    let expresion = document.getElementById("Calculator-screen").value;

    try{
        let rsultsOfcompt = computeExpression(expresion);
        document.getElementById("Calculator-screen").value = rsultsOfcompt;
    } catch(error) {
        alert(error);
    }

}

//window.onload = function() {
//}