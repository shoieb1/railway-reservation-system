// Define an array of users with their login credentials
var users = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
  { username: "user3", password: "password3" },
  { username: "user4", password: "password4" },
  { username: "user5", password: "password5" }
];

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the input values
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Validate the input
  var validUser = users.find(function(user) {
    return user.username === username && user.password === password;
  });

  if (validUser) {
    alert("Successfully logged in!");

    // Redirect to another page
    window.location.href = "booking.html";
  } else {
    alert("Invalid username or password. Please try again.");
  }
});
