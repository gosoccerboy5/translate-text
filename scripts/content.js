chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "openWindow") {
            window.open(request.url, "_blank", "location=yes,height=500,width=1000,scrollbars=yes,status=yes");
        }
    }
);
