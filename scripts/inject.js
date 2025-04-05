
const WIDTH = [1920,1366,1280,1440,1600,1680,1024,2560,3840];
const HEIGHT = [1080,768,1024,900,900,1050,768,1440,2160];

(async function () {

    window.postMessage({ type: "SET_STORAGE" }, "*");

    // req data from session 
    window.postMessage({type: "GET_STORAGE"}, "*");

    window.addEventListener('message', (event) =>{
        if (event.source !== window || event.data.type !== "SESSION_STORAGE_RESPONSE") return;

        const storedValues = event.data.value;

        if (!storedValues && !storedValues.spoofedNavigator) return;

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

        // Spoof Navigator values
        for(const key in storedValues){
            console.log(`${key}: ${storedValues[key]}`);
            spoofProperty(key, storedValues[key])
        }

        // Spoof window size
        const temp = Math.floor(Math.random() * 9);
        Object.defineProperty(window, 'innerWidth', {
            get: () => WIDTH[temp],
            configurable: true
        });

        Object.defineProperty(window, 'innerHeight', {
            get: () => HEIGHT[temp],
            configurable: true
        });

        Object.defineProperty(screen, 'width', {
            get: () => WIDTH[temp],
            configurable: true
        });

        Object.defineProperty(screen, 'height', {
            get: () => HEIGHT[temp],
            configurable: true
        });

        // prevent canvas elements
        HTMLCanvasElement.prototype.getContext = function(type) {
            console.log(`Canvas context "${type}" blocked`);
            return null; 
        };

        // Spoof Intl api
        spoofIntl();


        // remove all Iframes
        document.querySelectorAll('iframe').forEach(iframe => {
            console.log("Removing existing iframe:", iframe.src);
            iframe.remove();
        });
          
        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
              for (const node of mutation.addedNodes) {
                if (node.tagName === 'IFRAME' && node.hasAttribute('sandbox')) {
                  console.log("Blocked sandbox iframe:", node.src);
                  node.remove();
                }
              }
            }
        });
          
        observer.observe(document.body, { childList: true, subtree: true });
          
          
    
        console.log("Navigator properties spoofed!");
    });
})();


function spoofIntl(){
    const fakeLocale = ["fr-FR", "de-DE", "ru-RU", "nl-NL"];
    const fakeTimeZone = ["Europe/Paris"];

    const originalDateTimeFormat = Intl.DateTimeFormat;

    Intl.DateTimeFormat = function(...args){
        const instance = new originalDateTimeFormat(...args);

        return new Proxy(instance,{
            get(target,prop){
                if(prop === "resolvedoption"){
                    return () => ({
                        locale: fakeLocale[0],
                        calendar: "greg",
                        numberingSystem: "latn",
                        timeZone: fakeTimeZone[0],
                    });
                }
                return target[prop];
            }
        })
    }
}




