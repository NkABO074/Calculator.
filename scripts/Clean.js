/**
 * @file Clean.js
 * @author nkwe ahoume boris
 * Clear the calculator view.
 */


/**
 * Handle the suppresion of the screen.
 * @param valuesId the html ID of the button
 */
function Supp(valuesId) {
    let  values = document.getElementById(valuesId);
    values.onclick = function(){
        try{
            if(valuesId === "del") {
                let currentScreenValue = document.getElementById("Calculator-screen").value;
                currentScreenValue = currentScreenValue.slice(0, -1);
                document.getElementById("Calculator-screen").value = currentScreenValue;
            } else if (valuesId === "clsr") {
                currentScreenValue = "";
                document.getElementById("Calculator-screen").value = currentScreenValue;
            }
        } catch(error) {
            alert(error);
        }

    }
}

Supp("del");
Supp("clsr");

//window.onload = function() {
//}