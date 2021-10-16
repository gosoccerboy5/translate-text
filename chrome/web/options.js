const $ = document.querySelector.bind(document);

chrome.storage.sync.get("language", function({language}) {
    $("#language").value = language;
});
$("#language").addEventListener("change", function(event) {
    chrome.storage.sync.set({language: $("#language").value});
});