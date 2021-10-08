chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        "title": "Translate text",
        "id": "my-context-item",
        "contexts": ["selection"],
        "type": "normal",
        "checked": true
    });
    chrome.storage.sync.set({language: "en"});
});

chrome.contextMenus.onClicked.addListener(function(info, onClickData) {
    chrome.storage.sync.get("language", function({language}) {
        if (info.selectionText !== undefined) {
            chrome.tabs.sendMessage(onClickData.id, {
                message: "openWindow",
                url: `https://translate.google.com/?sl=auto&tl=${language}&text=${info.selectionText}&op=translate`
            });
        }
    });
});