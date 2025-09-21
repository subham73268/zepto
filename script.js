document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let email = document.getElementById("email").value.trim();
  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();
  let message = document.getElementById("message");

  if (email === "" || username === "" || password === "") {
    message.style.color = "red";
    message.textContent = "⚠ Please fill all fields!";
  } else {
    message.style.color = "green";
    message.textContent = "✅ Account Created Successfully!";
    
    // Future: Save data to database or localStorage
    console.log({ email, username, password });
  }
});