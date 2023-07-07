
const addButton = document.getElementById("addButton");
const createPoll = document.getElementById("Create");
const input = document.querySelector("#userQ");
const result = document.querySelector("#Question");
const inputFirst = document.getElementById("input");
const deleteInput = document.getElementById("dltBtn");
const userInputContainer = document.getElementById("userinput");
 
console.log(inputFirst);

const userInputs = [];

addButton.addEventListener("click", (e) => {
  e.preventDefault();
const newInput = document.createElement("input");
input.type = "text";
newInput.setAttribute("class", "input");
newInput.setAttribute("placeholder", "Add");
  console.log(newInput)
inputFirst.parentElement.appendChild(newInput);

const deleteButton = document.createElement("img");
deleteButton.setAttribute("src", "../Img/x-circle.svg");
deleteButton.setAttribute("class", "dltBtn");
deleteButton.addEventListener("click", () => {
  inputFirst.parentElement.removeChild(newInput);
  inputFirst.parentElement.removeChild(deleteButton);
});
inputFirst.parentElement.appendChild(deleteButton);

});

createPoll.addEventListener("click", (e) => {
  e.preventDefault();
  result.textContent = input.value;
  const optionInputs = document.querySelectorAll(".input");
  optionInputs.forEach((optionInput) => {
    userInputs.push(optionInput.value);
  });

  displayUserInputs();
  document.querySelector(".poll").style.display = "none";
  document.querySelector(".pollAnswer").style.display = "block";
});


function displayUserInputs() {
  userInputContainer.innerHTML = "";

  for (let i = 0; i < userInputs.length; i++) {
    const optionDiv = document.createElement("div");
    optionDiv.setAttribute("class", "option");

    const userInputElement = document.createElement("p");
    userInputElement.textContent = userInputs[i];

    const progressBar = document.createElement("progress");
    progressBar.setAttribute("id", "file");
    progressBar.setAttribute("max", "100");
    progressBar.setAttribute("value", "50");

    optionDiv.appendChild(userInputElement);
    optionDiv.appendChild(progressBar);
    userInputContainer.appendChild(optionDiv);
  }
}
