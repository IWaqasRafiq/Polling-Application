
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
  document.querySelector(".Qcard").style.display = "none";
  document.querySelector(".Pcard").style.display = "block";
  document.querySelector(".Qmodal").style.display = "block";
});


function displayUserInputs() {
  userInputContainer.innerHTML = "";

  for (let i = 0; i < userInputs.length; i++) {
    const optionDiv = document.createElement("div");
    optionDiv.setAttribute("class", "option");

    const userInputElement = document.createElement("p");
    userInputElement.textContent = userInputs[i];
    optionDiv.appendChild(userInputElement);

    // const clicksData = "clickedValue"
    const progressBar = document.createElement("progress");
    progressBar.setAttribute("id", "file");
    progressBar.setAttribute("max", "100");
    progressBar.setAttribute("value", "0");
    const progressText = document.createElement("span");
    progressText.setAttribute("class", "progress-text");
    progressText.textContent = "0%";

    progressBar.addEventListener("click", () => {
      let currentValue = progressBar.value;
      currentValue = Number(currentValue) + 1; // Increment the current value by 1
      progressBar.value = currentValue; // Update the progress bar value
      progressText.textContent = `${currentValue}%`; // Update the progress text
    });

    optionDiv.appendChild(progressBar);
    optionDiv.appendChild(progressText);
    
    userInputContainer.appendChild(optionDiv);
  }
}

document.getElementById("addButtonM").addEventListener("click", (event) => {
  // Prevent the modal from being closed
  event.preventDefault();
  // event.stopPropagation();
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