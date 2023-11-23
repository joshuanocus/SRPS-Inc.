// script.js

function login() {

  window.location.href = "index.html";
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // In a real-world scenario, you would perform server-side validation and authentication here.
  // For simplicity, let's use a hardcoded username and password for demonstration.
  if (username === 'user' && password === 'pass') {
    alert('Login successful!');
  } else {
    alert('Login failed. Please check your username and password.');
  }
}
