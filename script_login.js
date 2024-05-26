let loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let className = document.querySelectorAll(".className");
  for (const item of className) {
    if (item.value === "") {
      alert("Вы не заполнили форму(");
      return;
    }
  }
  window.location.href = "https://shaum.p-host.in/diploma/lk.html";
});