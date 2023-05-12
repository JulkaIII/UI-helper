chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.textToFind && request.newText) {
    var textToFind = request.textToFind;
    var newText = request.newText;
    console.log("content-script.js: ", textToFind, newText);
    var elements = document.getElementsByTagName("*");

    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      if (element.innerHTML.includes(textToFind)) {
        element.innerHTML = element.innerHTML.replace(
          new RegExp(textToFind, "g"),
          newText
        );
        element.style.backgroundColor = "yellow";
      }
    }
  }
});
