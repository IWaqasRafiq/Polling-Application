// Add button click event handler
document.getElementById("addButtonM").addEventListener("click", (e) => {
    e.preventDefault();
    let optionsContainer = document.getElementById("optionsContainer");

    // Create a new option div
    let optionDiv = document.createElement("div");
    optionDiv.classList.add("option");

    // Create the input field
    let input = document.createElement("input");
    input.classList.add("Minput");
    input.type = "text";
    input.placeholder = "Add";
    input.required = true;

    // Create the delete button
    let deleteButton = document.createElement("span");
    deleteButton.innerHTML = '<img class="dltBtn" src="../Img/x-circle.svg" alt="">';

    // Add the input field and delete button to the option div
    optionDiv.appendChild(input);
    optionDiv.appendChild(deleteButton);

    // Add the option div to the options container
    optionsContainer.appendChild(optionDiv);
});

// Create button click event handler
document.getElementById("createButtonM").addEventListener("click", () => {
    let userQuestion = document.getElementById("userQM").value;
    let options = document.getElementsByClassName("Minput");
    let resultsContainer = document.getElementById("resultsContainer");

    // Create a new response container
    let responseContainer = document.createElement("div");
    responseContainer.classList.add("Pcard");

    // Create the question paragraph
    let questionParagraph = document.createElement("p");
    questionParagraph.textContent = userQuestion;
    questionParagraph.classList.add("ques");
    responseContainer.appendChild(questionParagraph);

    // Create the options paragraph
    let optionsParagraph = document.createElement("p");
    optionsParagraph.classList.add("option");
    for (let i = 0; i < options.length; i++) {
        let option = options[i].value;
        optionsParagraph.innerHTML += option + "<br>";
    }
    responseContainer.appendChild(optionsParagraph);

    // Create the progress bar
    let progressBar = document.createElement("progress");
    progressBar.setAttribute("id", "file");
    progressBar.setAttribute("max", "100");
    progressBar.setAttribute("value", "0");
    progressBar.addEventListener("click", () => {
        let currentValue = progressBar.value;
        currentValue = Number(currentValue) + 1; // Increment the current value by 1
        progressBar.value = currentValue; // Update the progress bar value
        progressText.textContent = `${currentValue}%`; // Update the progress text
    });

    // Create the progress text
    let progressText = document.createElement("span");
    progressText.setAttribute("class", "progress-text");
    progressText.textContent = "0%";

    // Append the progress bar and progress text to the options paragraph
    optionsParagraph.appendChild(progressBar);
    optionsParagraph.appendChild(progressText);

    // Append the new response to the results container
    resultsContainer.appendChild(responseContainer);

    // Clear the input fields
    document.getElementById("userQM").value = "";
    for (let i = 0; i < options.length; i++) {
        options[i].value = "";
    }
});


