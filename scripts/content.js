

// Inject script
function injectSpoofScript() {
    const script = document.createElement("script");
    script.src = chrome.runtime.getURL("scripts/inject.js");
    script.onload = function () {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(script);
}

injectSpoofScript();

// re-inject 
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "runInjectScript") {
        console.log("Re-injecting");
        injectSpoofScript();
    }
});


// send req from inject to background
window.addEventListener("message", (event) => {
    if (event.source !== window || event.data.type !== "GET_STORAGE") return;

    chrome.runtime.sendMessage({ action: "getSessionStorage" }, (response) => {
        console.log("*****************")
        console.log(response);
        console.log("*****************")
        window.postMessage({ type: "SESSION_STORAGE_RESPONSE", value: response }, "*");
    });
});


// send req from inject to background
window.addEventListener("message", (event) => {
    if (event.source !== window || event.data.type !== "SET_STORAGE") return;

    chrome.runtime.sendMessage({ action: "setSessionStorage" });
});