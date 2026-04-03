const form = document.getElementById("student-form");
const result = document.getElementById("result");
const resultContent = document.getElementById("result-content");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const formData = new FormData(form);
  const studentInfo = Object.fromEntries(formData.entries());

  resultContent.textContent = JSON.stringify(studentInfo, null, 2);
  result.hidden = false;
});
