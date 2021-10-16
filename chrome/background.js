chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        "title": "Translate text",
        "id": "translate-text",
        "contexts": ["selection"],
        "type": "normal",
    });
    chrome.storage.sync.set({language: "en"});
});

chrome.contextMenus.onClicked.addListener(function(info, onClickData) {
    chrome.storage.sync.get("language", function({language}) {
        if (info.selectionText !== undefined) {
            chrome.windows.create({
                url: `https://translate.google.com/?sl=auto&tl=${language}&text=${info.selectionText}&op=translate`,
                type: "popup",
                height: 500,
                width: 1000,
            });
        }
    });
});