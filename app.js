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
const downloadBaseAssessmentLink = document.getElementById(
  "downloadBaseAssessmentLink"
);

const body = document.getElementById("body");
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
  const rrName = input.value;
  const rName = rrName.toLowerCase().replace(/\s/g, "");
  const name = rName;

  console.log(name);
  const person = persons.find(
    (p) => p.name.toLowerCase().replace(/\s/g, "") === name
  );

  if (person) {
    foundDiv.textContent = `Name "${rrName}" exists in register, proceed to download assessment`;
    downloadBaseAssessmentButton.disabled = false;
    downloadBaseAssessmentLink.href = "./assessment/base.png";
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

downloadMyAssessmentButton.addEventListener("click", () => {
  const deviceId = Math.floor(Math.random() * 1000000);
  document.cookie = `deviceId=${deviceId}`;
  setTimeout(vanquish(), 2000);
});

const thanks = ` <main class="sub">
    <h1 class="sub">Assessment Downloaded Successfully</h1>
    <p class="sub">We wish you the best. Additional info on submission will be disseminated later.</p>
  </main>`;

const vanquish = () => {
  body.className = "sub";
  body.innerHTML = "";
  body.innerHTML = thanks;
};
