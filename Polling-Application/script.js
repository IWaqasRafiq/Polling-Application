const addButton = document.getElementById("addButton");
const createPoll = document.getElementById("Create");
const inputDisplay = document.getElementById("userinput").value;
const input = document.querySelector("#userQ"); 
const result = document.querySelector("#Question"); 
const inputFirst = document.getElementById("input");
const deleteInput = document.getElementById("dltBtn");
 
console.log(inputFirst)
addButton.addEventListener("click", (e) => {
    e.preventDefault();
  const newInput = document.createElement("input");
  input.type = "text";
  newInput.setAttribute("class", "input");
  newInput.setAttribute("placeholder", "Add");
    console.log(newInput)
  inputFirst.parentElement.appendChild(newInput);

  const deleteButton = document.createElement("img");
  deleteButton.setAttribute("src", "./Img/x-circle.svg");
  deleteButton.setAttribute("class", "dltBtn");
  deleteButton.addEventListener("click", () => {
    inputFirst.parentElement.removeChild(newInput);
    inputFirst.parentElement.removeChild(deleteButton);
  });
  inputFirst.parentElement.appendChild(deleteButton);

});

createPoll.addEventListener("click",(e) => {
    e.preventDefault();
    // document.getElementById("Question").innerHTML = `userQuestion`;
    result.innerHTML = input.value;
    console.log(result);
    // document.getElementById("input").innerHTML = 'inputDisplay';
    document.querySelector(".poll").style.display = "none";
    // document.querySelector(".input").style.display = "none";
    // document.querySelector("#userQ").style.display = "none";

}

)
