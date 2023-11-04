const nameInput = document.getElementById("name");
const schoolInput = document.getElementById("school");
const emailInput = document.getElementById("email");
const writingInput = document.getElementById("theater");
const certificateInput = document.getElementById("approval");
const form = document.getElementById("form");

form.addEventListener("submit", event => {
  event.preventDefault();

  const name = nameInput.value;
  const school = schoolInput.value;
  const email = emailInput.value;
  const writing = writingInput.files[0];
  const certificate = certificateInput.files[0];

  const formData = new FormData();

  formData.append("name", name);
  formData.append("school", school);
  formData.append("email", email);
  formData.append(`${email}_writing.pdf`, writing);
  formData.append(`${email}_certificate.pdf`, certificate);

  fetch("/application/", {
    method: "POST",
    body: formData,
  });
});
