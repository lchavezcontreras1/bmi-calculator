$(document).ready(
    function (){
        $("form").submit(bmiCalculation);
});
function bmiCalculation(e){
    e.preventDefault();
    let weight = parseFloat($("input#weight").val());
    let height = parseFloat($("input#height").val());
    let bmiOutput = (weight/(height**2))*703;
    $("p#bmi-output").text(`Your BMI is ${bmiOutput.toFixed(1)}`);
    if (bmiOutput<=18.5){
        $("p#bmi-msg").text(`Underweight`);
    }
    else if (bmiOutput<=25){
        $("p#bmi-msg").text(`Healthy`);
    }
    else if (bmiOutput<=30){
        $("p#bmi-msg").text(`Overweight`);
    }
    else{
        $("p#bmi-msg").text(`Obese`);
    }
}