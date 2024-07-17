function calculate(event) {
     event.preventDefault();
     let weight = document.getElementById('weight').value;
     let height = document.getElementById('height').value;
 
     console.log(weight);
     console.log(height);
 
     let originalHeight = height / 100; // Convert cm to meters
     let BMI = weight / (originalHeight * originalHeight);
 
     document.getElementById('bmivalue').innerHTML = BMI.toFixed(1); // Display BMI value rounded to 1 decimal place
 
     let struct = document.getElementById('struct');
 
     if (BMI < 18.5) {
         struct.innerHTML = " Underweight";
         struct.style.color = "rgb(230, 246, 5)";
     } else if (BMI >= 18.5 && BMI <= 24.9) {
         struct.innerHTML = " Healthy";
         struct.style.color = "green";
     } else if (BMI >= 25 && BMI <= 29.9) {
         struct.innerHTML = "Overweight";
         struct.style.color = "rgb(255, 166, 2)";
     } else if (BMI > 29.9) {
         struct.innerHTML = " Obesive";
         struct.style.color = "red";
     }
 }
 
 document.getElementById('bmi-form').addEventListener('submit', calculate);
 
 function reset() {
     window.location.reload();
 }
 