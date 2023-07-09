// Create button click event handler
document.getElementById("createButtonM").addEventListener("click", function() {
    var userQuestion = document.getElementById("userQM").value;
    var options = document.getElementsByClassName("Minput");
    var resultsContainer = document.getElementById("resultsContainer");

    // Create a new response container
    var responseContainer = document.createElement("div");
    responseContainer.classList.add("Pcard");

    // Create the question paragraph
    var questionParagraph = document.createElement("p");
    questionParagraph.textContent = userQuestion;
    questionParagraph.classList.add("ques");
    responseContainer.appendChild(questionParagraph);

    // Create the options container
    var optionsContainer = document.createElement("div");
    optionsContainer.classList.add("option");

    // Add the progress bars and progress texts for each option
    for (var i = 0; i < options.length; i++) {
        var option = options[i].value;

        // Create the option container
        var optionContainer = document.createElement("div");
        optionContainer.classList.add("option-item");

        // Create the option text
        var optionText = document.createElement("p");
        optionText.textContent = option;
        optionContainer.appendChild(optionText);

        // Create the progress bar
        var progressBar = document.createElement("progress");
        progressBar.setAttribute("id", "file" + i);
        progressBar.setAttribute("id", "Ppro");
        progressBar.setAttribute("max", "100");
        progressBar.setAttribute("value", "0");

        // Create the progress text
        var progressText = document.createElement("span");
        progressText.setAttribute("class", "progress-text");
        progressText.textContent = "0%";

        // Add event listener to each progress bar
        progressBar.addEventListener("click", (function(progressBar, progressText) {
            return function() {
                var currentValue = Number(progressBar.value) + 1; // Increment the current value by 1
                progressBar.value = currentValue; // Update the progress bar value
                progressText.textContent = currentValue + "%"; // Update the progress text
            };
        })(progressBar, progressText));

        // Append the progress bar and progress text to the option container
        optionContainer.appendChild(progressBar);
        optionContainer.appendChild(progressText);

        // Append the option container to the options container
        optionsContainer.appendChild(optionContainer);
    }

    // Append the options container to the response container
    responseContainer.appendChild(optionsContainer);

    // Append the new response to the results container
    resultsContainer.appendChild(responseContainer);

    // Clear the input fields
    document.getElementById("userQM").value = "";
    for (var i = 0; i < options.length; i++) {
        options[i].value = "";
    }
        // Close the modal
        let modal = document.getElementById("exampleModal");
        let modalInstance = bootstrap.Modal.getInstance(modal);
        modalInstance.hide();
});
