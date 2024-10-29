function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  let ans = (weight)/((height/100)**2);
  let comment = "idk";
   if(ans < 18.5) comment = "Underweight";
    else if(ans >= 18.5 && ans <= 24.9) comment = "Healthy Weight";
    else if(ans >= 25.0 && ans <= 29.9) comment = "Overweight";
    else if(ans >= 30 ) comment = "Obese";
  alert(`${ans} \n ${comment}`);


  let ageBasedComment = "idk";

    if(age >=19 && age <=24 && ans >= 19 && ans <= 24)  ageBasedComment= "Healthy";
    else if(age >=19 && age <=24 && ans <= 19 || ans >= 24)  ageBasedComment= "Not Healthy";
    
    if(age >=25 && age <=34 && ans >= 20 && ans <= 25)  ageBasedComment= "Healthy";
    else if(age >=25 && age <=34 && ans <= 20 || ans >= 25)  ageBasedComment= "Not Healthy";

    if(age >=35 && age <=44 && ans >= 21 && ans <= 26)  ageBasedComment= "Healthy";
    else if(age >=35 && age <=44 && ans <= 21 || ans >= 26)  ageBasedComment= "Not Healthy";

    if(age >=45 && age <=54 && ans >= 22 && ans <= 27)  ageBasedComment= "Healthy";
    else if(age >=45 && age <=54 && ans <= 22 || ans >= 27)  ageBasedComment= "Not Healthy";

    if(age >=55 && age <=64 && ans >= 23 && ans <= 28)  ageBasedComment= "Healthy";
    else if(age >=55 && age <=64 && ans <= 23 || ans >= 28)  ageBasedComment= "Not Healthy";

    if(age >=65 && ans >= 24 && ans <= 29)  ageBasedComment= "Healthy";
    else if(age >=65 && ans <= 24 || ans >= 29)  ageBasedComment= "Not Healthy";

    alert(`based on age you are ${ageBasedComment}`)
}
