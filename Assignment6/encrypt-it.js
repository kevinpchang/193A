/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    console.log("Window loaded!");

    const encryptButton = document.getElementById("encrypt-it");
    const inputText = document.getElementById("input-text");
    const result = document.getElementById("result");

    encryptButton.addEventListener("click", function() {
      handleClick(inputText.value, result);
    });

    const resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", function() {
      handleReset(inputText, result);
    });
    

  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
  function handleClick(message, result) {
    console.log("Encrypt button clicked!");
    console.log("Original message: " + message);
    message = message.toLowerCase();
    let encryptedMessage = "";
    for (let i = 0; i < message.length; i++) {
      if (message[i] < "a" || message[i] > "z") {
        encryptedMessage += message[i];
      }
      else if (message[i] === " ") {
        encryptedMessage += " ";
      }
      else if (message[i] === "z") {
        encryptedMessage += "a";
      }
      else {
        encryptedMessage += String.fromCharCode(message.charCodeAt(i) + 1);
      }
    }
    console.log("Encrypted message: " + encryptedMessage);
    result.textContent = encryptedMessage;
  }

  function handleReset(inputText, result) {
    console.log("Reset button clicked!");
    inputText.value = "";
    result.textContent = "";
  }
})();
