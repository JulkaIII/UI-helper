document.addEventListener("DOMContentLoaded", function () {
  var input1 = document.getElementById("textToFind");
  var input2 = document.getElementById("changeToText");
  var button = document.getElementById("changeButton");

  button.addEventListener("click", function () {
    var textToFind = input1.value;
    var newText = input2.value;
    console.log("popup.js: ", textToFind, newText);
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        textToFind: textToFind,
        newText: newText
      });
    });
  });
});
