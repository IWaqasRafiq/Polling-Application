const addButton = document.getElementById("addButton");
const inputFirst = document.getElementById("input");
 
console.log(inputFirst)
addButton.addEventListener("click", (e) => {
    e.preventDefault();
  const newInput = document.createElement("input");
  input.type = "text";
  newInput.setAttribute("class", "input")
  newInput.setAttribute("placeholder", "Add")
    console.log(newInput)
  inputFirst.parentElement.appendChild(newInput);
});