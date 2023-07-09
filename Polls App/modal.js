
const firebaseApp = firebase.initializeApp(
    {
      apiKey: "AIzaSyCzZTDuR5mwE-2Wq6D8-cK3lDnfpAkecbw",
      authDomain: "real-time-polling-app.firebaseapp.com",
      databaseURL: "https://real-time-polling-app-default-rtdb.firebaseio.com",
      projectId: "real-time-polling-app",
      storageBucket: "real-time-polling-app.appspot.com",
      messagingSenderId: "151148454470",
      appId: "1:151148454470:web:d1e8eaa2c32102e4f36047"
    });
    let database = firebase.database();


document.getElementById("createButtonM").addEventListener("click", function() {
    let userQuestion = document.getElementById("userQM").value;
    let options = document.getElementsByClassName("Minput");
    let resultsContainer = document.getElementById("resultsContainer");

    let responseContainer = document.createElement("div");
    responseContainer.classList.add("Pcard");

    let questionParagraph = document.createElement("p");
    questionParagraph.textContent = userQuestion;
    questionParagraph.classList.add("ques");
    responseContainer.appendChild(questionParagraph);

    let optionsContainer = document.createElement("div");
    optionsContainer.classList.add("option");

    for (let i = 0; i < options.length; i++) {
        let option = options[i].value;

        let optionContainer = document.createElement("div");
        optionContainer.classList.add("option-item");

        let optionText = document.createElement("p");
        optionText.textContent = option;
        optionContainer.appendChild(optionText);

        let progressBar = document.createElement("progress");
        progressBar.setAttribute("id", "file" + i);
        progressBar.setAttribute("id", "Ppro");
        progressBar.setAttribute("max", "100");
        progressBar.setAttribute("value", "0");

        let progressText = document.createElement("span");
        progressText.setAttribute("class", "progress-text");
        progressText.textContent = "0%";

        progressBar.addEventListener("click", (function(progressBar, progressText) {
            return function() {
                let currentValue = Number(progressBar.value) + 1; // Increment the current value by 1
                progressBar.value = currentValue; // Update the progress bar value
                progressText.textContent = currentValue + "%"; // Update the progress text
            };
        })(progressBar, progressText));

        optionContainer.appendChild(progressBar);
        optionContainer.appendChild(progressText);

        optionsContainer.appendChild(optionContainer);
    }

    responseContainer.appendChild(optionsContainer);

    resultsContainer.appendChild(responseContainer);

    
    let pollData = {
        question: userQuestion,
        options: []
    };
console.log("poll data", pollData)
    for (let i = 0; i < options.length; i++) {
        let option = options[i].value;
        let optionData = {
            text: option,
            votes: 0
        };
        pollData.options.push(optionData);
    }

    let newPollRef = database.ref("polls").push();
    let pollId = newPollRef.key;

    newPollRef.set(pollData);

    document.getElementById("userQM").value = "";
    for (let i = 0; i < options.length; i++) {
        options[i].value = "";
    }
        let modal = document.getElementById("exampleModal");
        let modalInstance = bootstrap.Modal.getInstance(modal);
        modalInstance.hide();
});


const pollsRef = database.ref("polls");

function displayPollData(pollId, pollData) {
  let responseContainer = document.getElementById(pollId);

  if (responseContainer) {
    let optionsContainer = responseContainer.querySelector(".option");

  let existingContainers = document.querySelectorAll(".Pcard");
  existingContainers.forEach(function(container) {
    if (container.id !== pollId) {
      container.remove();
    }
  });
    for (let i = 0; i < pollData.options.length; i++) {
      let option = pollData.options[i];
      let progressBar = optionsContainer.querySelector("#file" + i);
      let progressText = optionsContainer.querySelector(".progress-text");

      progressBar.value = option.votes; 
      progressText.textContent = option.votes + "%";
    }
  } else {
    let responseContainer = document.createElement("div");
    responseContainer.classList.add("Pcard");
    responseContainer.id = pollId;

    let questionParagraph = document.createElement("p");
    questionParagraph.textContent = pollData.question;
    questionParagraph.classList.add("ques");
    responseContainer.appendChild(questionParagraph);

    let optionsContainer = document.createElement("div");
    optionsContainer.classList.add("option");

    for (let i = 0; i < pollData.options.length; i++) {
      let option = pollData.options[i];

      let optionContainer = document.createElement("div");
      optionContainer.classList.add("option-item");

      let optionText = document.createElement("p");
      optionText.textContent = option.text;
      optionContainer.appendChild(optionText);

      let progressBar = document.createElement("progress");
      progressBar.setAttribute("id", "file" + i);
      progressBar.setAttribute("class", "Ppro");
      progressBar.setAttribute("max", "100");
      progressBar.setAttribute("value", option.votes);

      let progressText = document.createElement("span");
      progressText.setAttribute("class", "progress-text");
      progressText.textContent = option.votes + "%";

      progressBar.addEventListener("click", function () {
        let currentValue = Number(progressBar.value) + 1; // Increment the current value by 1
        progressBar.value = currentValue; // Update the progress bar value
        progressText.textContent = currentValue + "%"; // Update the progress text

        pollsRef
          .child(pollId)
          .child("options")
          .child(i)
          .child("votes")
          .set(currentValue);
      });

      optionContainer.appendChild(progressBar);
      optionContainer.appendChild(progressText);

      optionsContainer.appendChild(optionContainer);
    }

    responseContainer.appendChild(optionsContainer);

    let resultsContainer = document.getElementById("resultsContainer");
    resultsContainer.appendChild(responseContainer);
  }
}

function retrieveAndDisplayPollData() {
  pollsRef.on("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      let pollId = childSnapshot.key;
      let pollData = childSnapshot.val();
      displayPollData(pollId, pollData);
    });
  });
}

window.addEventListener("load", retrieveAndDisplayPollData);
