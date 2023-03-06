const checkRegisterButton = document.getElementById("checkName");
const genAsstButton = document.getElementById("genAsst");
const downloadMyAssessmentLink = document.getElementById(
  "downloadMyAssessmentLink"
);
const downloadMyAssessmentButton = document.getElementById(
  "downloadMyAssessment"
);
const downloadBaseAssessmentButton = document.getElementById(
  "downloadBaseAssessment"
);

let persons = [];

const files = [
  { id: 1, file: "./assessment/1.jpg" },
  { id: 2, file: "./assessment/2.jpg" },
  { id: 3, file: "./assessment/3.png" },
  { id: 4, file: "./assessment/4.png" },
  { id: 5, file: "./assessment/5.png" },
];

fetch("persons.json")
  .then((response) => response.json())
  .then((data) => {
    persons = data;
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function getRandomFile(files) {
  const randomIndex = Math.floor(Math.random() * files.length);
  return files[randomIndex];
}
const input = document.querySelector("input");

const foundDiv = document.querySelector(".found");

checkRegisterButton.addEventListener("click", () => {
  const name = input.value;
  const person = persons.find((p) => p.name === name);

  if (person) {
    foundDiv.textContent = `Name "${name}" exists in register, proceed to download assessment`;
  } else {
    foundDiv.textContent = "Name not found. Contact Division Lead";
  }
});

downloadBaseAssessmentButton.addEventListener("click", () => {
  genAsstButton.disabled = false;
  downloadBaseAssessmentButton.disabled = true;
});

genAsstButton.addEventListener("click", () => {
  // Disable the generate button
  genAsstButton.disabled = true;
  downloadMyAssessmentButton.disabled = false;
  const a = getRandomFile(files);
  let link = `${a.file}`;
  downloadMyAssessmentLink.href = link;
});
