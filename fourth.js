//error handling


function calculateAge(){

  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;
  
  var birthDate = new Date(year, month-1, day);

  //verifying the date
  let m = moment([year, month - 1, day]);
  if (!m.isValid()) {
    const d = document.getElementById("day");
    const m = document.getElementById("month");
    const y = document.getElementById("year");

    d.style.borderColor = "#FF5757";
    m.style.borderColor = "#FF5757";
    y.style.borderColor = "#FF5757";

    var errorDayElements = document.getElementsByClassName("error-day");
for (var i = 0; i < errorDayElements.length; i++) {
  errorDayElements[i].innerText = "Please type a valid date";
}
    

    
    return false;
  }
  else{
     const d = document.getElementById("day");
    const m = document.getElementById("month");
    const y = document.getElementById("year");
    d.style.borderColor = "black";
    m.style.borderColor = "black";
    y.style.borderColor = "black";
    var errorDayElements = document.getElementsByClassName("error-day");
for (var i = 0; i < errorDayElements.length; i++) {
  errorDayElements[i].innerText = "";
}
  }

 
  var today = new Date();
  var ageDay = today.getDate() - birthDate.getDate();
  var ageMonth = today.getMonth() - birthDate.getMonth();
  var ageYear = today.getFullYear() - birthDate.getFullYear();




  if(ageMonth < 0){
    ageYear--;
    ageMonth = ageMonth + 12;
  }

  if(ageYear < 0 || (ageYear === 0 && ageMonth < 0)){
    return null;
  }

  if(ageDay < 0){
    ageMonth--;
    var d = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    console.log(d);
    ageDay = ageDay + d;

  

  if(ageMonth < 0){
    ageYear--;
    ageMonth = ageMonth + 12;
  }
} 

  document.getElementById("output-year").innerHTML = ageYear;
  document.getElementById("output-month").innerHTML = ageMonth;
  document.getElementById("output-day").innerHTML = ageDay;
}

