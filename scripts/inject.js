

(async function () {

    window.postMessage({ type: "SET_STORAGE" }, "*");

    // req data from session 
    window.postMessage({type: "GET_STORAGE"}, "*");

    window.addEventListener('message', (event) =>{
        if (event.source !== window || event.data.type !== "SESSION_STORAGE_RESPONSE") return;

        const storedValues = event.data.value;

        console.log(storedValues);

        if (!storedValues || !storedValues.spoofedNavigator) return;

        function spoofProperty(property, value) {

            if(property == "effectiveLink" || property == "downlink" || property == "rtt"){
                Object.defineProperty(navigator.connection, property, {
                    get: () => value,
                    configurable: true
                });
            }
            else{
                Object.defineProperty(navigator, property, {
                    get: () => value,
                    configurable: true
                });
            }
        }

        for(const key in storedValues){
            console.log(`${key}: ${storedValues[key]}`);
            spoofProperty(key, storedValues[key])
        }
    
        console.log("Navigator properties spoofed!");
    })

    //const storedValues = await chrome.storage.local.get(['spoofedNavigator']);


})();


console.log(navigator.userAgent);
console.log(navigator.connection.rtt);
console.log(navigator.platform);









