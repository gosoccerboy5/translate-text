browser.storage.local.set({ language: "en" });

browser.contextMenus.create({
    id: "translate-text",
    title: "Translate text",
    contexts: ["selection"],
});
browser.contextMenus.onClicked.addListener(function(info, tab) {
    browser.storage.local.get("language", function({ language }) {
        browser.windows.create({
            url: `https://translate.google.com/?sl=auto&tl=${language}&text=${info.selectionText}&op=translate`,
            type: "popup",
            width: 1000,
            height: 500,
        });
    });
});