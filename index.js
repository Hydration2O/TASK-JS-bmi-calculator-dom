function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  let BMI = weight / (height / 100) ** 2;
  let comment = "idk";
  if (BMI < 18.5) comment = "Underweight";
  else if (BMI >= 18.5 && BMI <= 24.9) comment = "Healthy Weight";
  else if (BMI >= 25.0 && BMI <= 29.9) comment = "Overweight";
  else if (BMI >= 30) comment = "Obese";
  alert(`${BMI} \n ${comment}`);

  let BMIStatus = "idk";

  if (age >= 19 && age <= 24 && BMI >= 19 && BMI <= 24)
    BMIStatus = "Healthy";
  else if ((age >= 19 && age <= 24 && BMI <= 19) || BMI >= 24)
    BMIStatus = "Not Healthy";

  if (age >= 25 && age <= 34 && BMI >= 20 && BMI <= 25)
    BMIStatus = "Healthy";
  else if ((age >= 25 && age <= 34 && BMI <= 20) || BMI >= 25)
    BMIStatus = "Not Healthy";

  if (age >= 35 && age <= 44 && BMI >= 21 && BMI <= 26)
    BMIStatus = "Healthy";
  else if ((age >= 35 && age <= 44 && BMI <= 21) || BMI >= 26)
    BMIStatus = "Not Healthy";

  if (age >= 45 && age <= 54 && BMI >= 22 && BMI <= 27)
    BMIStatus = "Healthy";
  else if ((age >= 45 && age <= 54 && BMI <= 22) || BMI >= 27)
    BMIStatus = "Not Healthy";

  if (age >= 55 && age <= 64 && BMI >= 23 && BMI <= 28)
    BMIStatus = "Healthy";
  else if ((age >= 55 && age <= 64 && BMI <= 23) || BMI >= 28)
    BMIStatus = "Not Healthy";

  if (age >= 65 && BMI >= 24 && BMI <= 29) BMIStatus = "Healthy";
  else if ((age >= 65 && BMI <= 24) || BMI >= 29)
    BMIStatus = "Not Healthy";

  alert(`based on age you are ${BMIStatus}`);
}
