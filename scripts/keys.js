/**
 * @file keys.js
 * @author nkwe ahoume boris
 * @email nkabo074@gmail.com
 * handle the behevior of a key when it pressed.
 */


/**
 * Change the general behevior of the calculator key in function of the parameters.
 * @param valuesId HTML id of the button.
 * @param valPrint Numbers and operators that are printed to the calculator screen.
 * 
 */
function keybindings(valuesId, valPrint) {
    let  values = document.getElementById(valuesId);
    values.onclick = function(){
        try{
            let currentScreenValue = document.getElementById("Calculator-screen").value;
            document.getElementById("Calculator-screen").value = currentScreenValue + valPrint;
        } catch(error){
            alert(error);
        }

    }
}
//After adding your button in HTML, place it here...
window.onload = function() {
    //numbers
    keybindings("zero","0");
    keybindings("nine","9");
    keybindings("heigt","8");
    keybindings("seven","7");
    keybindings("six","6");
    keybindings("five","5");
    keybindings("four","4");
    keybindings("three","3");
    keybindings("two","2");
    keybindings("one","1");
    keybindings("pi","π");
    keybindings("eulerNumber","e");

    //operators & symbols
    keybindings("div","/");
    keybindings("mult","*");
    keybindings("add","+");
    keybindings("subs","-");
    keybindings("leftPara","(");
    keybindings("rightPara",")");

    //Functions
    keybindings("cosinus","Cos(");
    keybindings("sinus", "Sin(");
    keybindings("squareRoot","Sqrt(");
    keybindings("NapierLog","Ln(");
    keybindings("decLog","Log10(");
    keybindings("expTheX","eˣ(");
    keybindings("decimalExp","e10ˣ(");
    keybindings("percent","Percent(");
    keybindings("factorial","Fact(");
}