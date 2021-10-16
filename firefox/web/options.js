const $ = document.querySelector.bind(document);

browser.storage.local.get("language", function({language}) {
    $("#language").value = language;
});
$("#language").addEventListener("change", function(event) {
    browser.storage.local.set({language: $("#language").value});
});