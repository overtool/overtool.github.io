function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const msg = document.getElementById("msg");

  if (user === "admin" && pass === "letmein") {
    msg.style.color = "#00ff9f";
    msg.innerText = "ACCESS GRANTED...";

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);

  } else {
    msg.style.color = "red";
    msg.innerText = "ACCESS DENIED";

    setTimeout(() => {
      msg.innerText = "Incident logged (not really)";
    }, 1000);
  }
}

// press Enter to login
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") login();
});

function logout() {
  window.location.href = "index.html";
}
