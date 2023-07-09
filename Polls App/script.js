
const addButton = document.getElementById("addButton");
const createPoll = document.getElementById("Create");
const input = document.querySelector("#userQ");
const result = document.querySelector("#Question");
const inputFirst = document.getElementById("input");
const deleteInput = document.getElementById("dltBtn");
const userInputContainer = document.getElementById("userinput");
 
console.log(inputFirst);

const userInputs = [];


document.getElementById("addButtonM").addEventListener("click", () => {
  var optionsContainer = document.getElementById("optionsContainer");

  var optionDiv = document.createElement("div");
  optionDiv.classList.add("option");

  var input = document.createElement("input");
  input.classList.add("Minput");
  input.type = "text";
  input.placeholder = "Add";
  input.required = true;

  var deleteButton = document.createElement("span");
  deleteButton.innerHTML = '<img class="dltBtn" src="../Img/x-circle.svg" alt="">';

  deleteButton.addEventListener("click", () => {
    optionDiv.parentNode.removeChild(optionDiv);
  });


  optionDiv.appendChild(input);
  optionDiv.appendChild(deleteButton);

  optionsContainer.appendChild(optionDiv);
});
