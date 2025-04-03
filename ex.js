var msg;
function bmiCalculator(weight, height) {
    var weight = document.getElementById("weight").value.trim();
    var height = document.getElementById("height").value.trim();

    if (weight === "" || height === "") {
        document.getElementById("output").innerText = "Please enter both names!";
        document.getElementById("score").innerText = "";
        return;
    }
    document.getElementById("output").innerText ="Your is "+ weight +" Your height " +height;

    var interpretation = weight / (height * height);
    var wh=Math.floor(interpretation);
   

    if (interpretation < 18.5) {
        msg=" Underweight.";
    } else if (interpretation >= 18.5 && interpretation <= 24.9) {
        msg=" Normal weight.";
   } else {
    msg=" Overweight.";
   }
   
   document.getElementById("score").innerText = msg;
}

   // console.log("Your BMI is:", interpretation);
   // return interpretation;
