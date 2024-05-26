let signBtn = document.getElementById("signBtn");
let signForm = document.getElementById("signForm");
let className = document.querySelectorAll(".className");

signBtn.addEventListener("click", function() {
  for (const item of className) {
    if (item.value === ""){
      alert("Вы не заполнили форму(");
      return;
    }
  }
  alert("Вы зарегистрированы!)")
})
