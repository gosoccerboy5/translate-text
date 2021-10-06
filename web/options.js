const $ = document.querySelector.bind(document);

$("#language").addEventListener("change", function(event) {
    chrome.storage.sync.set({language: $("#language").value})
});