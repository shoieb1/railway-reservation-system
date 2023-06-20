var selectedCoach = "";
function coachselection() {
  var coachSelect = document.getElementById("coach");
  selectedCoach = coachSelect.value;
}

function addPassengerFields() {
    var number = parseInt(document.getElementById("number").value);
    var passengerDetails = document.getElementById("passengerDetails");
    var submitBtn = document.getElementById("submitBtn");
  
    // Clear previous passenger details
    passengerDetails.innerHTML = "";
  
    // Validate number of passengers
    if (isNaN(number) || number < 1 || number > 6) {
      alert("Please enter a valid number of passenger.");
      return;
    }
  
    // Add passenger fields
    passengerDetails.innerHTML = "<h2>Passenger Details</h2>";
  
    for (var i = 1; i <= number; i++) {
      passengerDetails.innerHTML += `
        <div class="passenger">
          <label for="name${i}">Name:</label>
          <input type="text" id="name${i}" required>
          <label for="dob${i}">Date of Birth:</label>
          <input type="date" id="dob${i}" onchange="calculateAge(${i})" required>
          <div id="age${i}"></div>
          <label for="gender${i}">Gender:</label>
          <select id="gender${i}" required>
          <option value="">select one</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="transgender">transgender</option>
          </select>
        </div>
      `;
    }
  
    // Display submit button
    submitBtn.style.display = "block";
  }
  
  function calculateAge(passengerNumber) {
    var dob = document.getElementById("dob" + passengerNumber).value;
  
    // Get the current date
    var currentDate = new Date();
  
    // Convert the date of birth string to a Date object
    var birthDate = new Date(dob);
  
    // Check if the selected date is after the current date
    if (birthDate > currentDate) {
      alert("Please select a date that is not after the current date.");
      document.getElementById("dob" + passengerNumber).value = "";
      document.getElementById("age" + passengerNumber).textContent = "";
      return;
    }
  
    // Calculate the age
    var ageYear = currentDate.getFullYear() - birthDate.getFullYear();
    var ageMonth = currentDate.getMonth() - birthDate.getMonth();
    var ageDay = currentDate.getDate() - birthDate.getDate();
  
    // Adjust the age if the current month and day are earlier than the birth month and day
    if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
      ageYear--;
      ageMonth += 12;
      if (ageDay < 0) {
        ageMonth--;
        ageDay += getLastDayOfMonth(currentDate.getMonth(), currentDate.getFullYear());
      }
    }
  
    // Display the age
    document.getElementById("age" + passengerNumber).textContent = "Age: " + ageYear + " years, " + ageMonth + " months, " + ageDay + " days";
  }
  
  function getLastDayOfMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
  } 
  
  function submitForm() {
    // Retrieve passenger details
    var passengerDetails = document.getElementById("passengerDetails");
    var passengers = passengerDetails.getElementsByClassName("passenger");
  
    var passengerData = [];
  
    for (var i = 0; i < passengers.length; i++) {
      var passenger = passengers[i];
      var name = passenger.querySelector("input[type='text']").value;
      var dob = passenger.querySelector("input[type='date']").value;
      var age = passenger.querySelector("div[id^='age']").textContent;
      var gender = passenger.querySelector("select").value;
  
      passengerData.push({
        name: name,
        dob: dob,
        age: age,
        gender: gender
      });
    }
  
    // Display passenger data (you can modify this part according to your requirement)
    console.log(passengerData);
  }
  var coachSelect = document.getElementById("coach");
var coachError = document.getElementById("coachError");

coachSelect.addEventListener("change", function() {
  if (coachSelect.value === "") {
    coachError.style.display = "block";
  } else {
    coachError.style.display = "none";
  }
});
