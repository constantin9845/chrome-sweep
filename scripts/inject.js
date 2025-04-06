
const WIDTH = [1920,1366,1280,1440,1600,1680,1024,2560,3840];
const HEIGHT = [1080,768,1024,900,900,1050,768,1440,2160];
const spoofedIntlConfigs = [
    {
      locale: "en-US",
      timeZone: "America/New_York",
      calendar: "gregory",
      numberingSystem: "latn"
    },
    {
      locale: "en-GB",
      timeZone: "Europe/London",
      calendar: "gregory",
      numberingSystem: "latn"
    },
    {
      locale: "fr-FR",
      timeZone: "Europe/Paris",
      calendar: "gregory",
      numberingSystem: "latn"
    },
    {
      locale: "de-DE",
      timeZone: "Europe/Berlin",
      calendar: "gregory",
      numberingSystem: "latn"
    },
    {
      locale: "es-ES",
      timeZone: "Europe/Madrid",
      calendar: "gregory",
      numberingSystem: "latn"
    },
    {
      locale: "ja-JP",
      timeZone: "Asia/Tokyo",
      calendar: "japanese",
      numberingSystem: "latn"
    },
    {
      locale: "zh-CN",
      timeZone: "Asia/Shanghai",
      calendar: "gregory",
      numberingSystem: "hanidec"
    },
    {
      locale: "ko-KR",
      timeZone: "Asia/Seoul",
      calendar: "gregory",
      numberingSystem: "latn"
    },
    {
      locale: "th-TH",
      timeZone: "Asia/Bangkok",
      calendar: "buddhist",
      numberingSystem: "thai"
    },
    {
      locale: "hi-IN",
      timeZone: "Asia/Kolkata",
      calendar: "gregory",
      numberingSystem: "deva"
    },
    {
      locale: "ar-SA",
      timeZone: "Asia/Riyadh",
      calendar: "islamic-umalqura",
      numberingSystem: "arab"
    },
    {
      locale: "he-IL",
      timeZone: "Asia/Jerusalem",
      calendar: "hebrew",
      numberingSystem: "latn"
    },
    {
      locale: "ru-RU",
      timeZone: "Europe/Moscow",
      calendar: "gregory",
      numberingSystem: "latn"
    },
    {
      locale: "pt-BR",
      timeZone: "America/Sao_Paulo",
      calendar: "gregory",
      numberingSystem: "latn"
    },
    {
      locale: "fa-IR",
      timeZone: "Asia/Tehran",
      calendar: "persian",
      numberingSystem: "arabext"
    }
];
const languageHeader = [
    "en-US,en;q=0.9",
    "en-GB,en;q=0.9",
    "fr-FR,fr;q=0.9,en;q=0.8",
    "de-DE,de;q=0.9,en;q=0.8",
    "es-ES,es;q=0.9,en;q=0.8",
    "ja-JP,ja;q=0.9,en-US;q=0.8,en;q=0.7",
    "zh-CN,zh;q=0.9,en;q=0.8",
    "ko-KR,ko;q=0.9,en;q=0.8",
    "th-TH,th;q=0.9,en-US;q=0.8,en;q=0.7",
    "hi-IN,hi;q=0.9,en-IN;q=0.8,en;q=0.7",
    "ar-EG,ar;q=0.9,en-US;q=0.8,en;q=0.7",
    "he-IL,he;q=0.9,en-US;q=0.8,en;q=0.7",
    "ru-RU,ru;q=0.9,en;q=0.8",
    "pt-BR,pt;q=0.9,en;q=0.8"
];
  

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
        
        try{
            observer.observe(document.body, { childList: true, subtree: true });
        }
        catch(error){
            console.log(error);
        }

          
        // Spoof Intl api
        const temp2 = Math.floor(Math.random()*15);
        spoofIntl(temp2);
          
        console.log("Navigator properties spoofed!");
    });
})();


function spoofIntl(temp){

    const originalIntl = window.Intl;

    window.Intl = new Proxy(originalIntl, {
    get(target, prop, receiver) {
        if (prop === 'DateTimeFormat') {
        return function(...args) {
            const original = Reflect.apply(target[prop], target, args);
            const modified = Object.create(original);
            modified.resolvedOptions = () => ({
            timeZone: spoofedIntlConfigs[temp]['timeZone'],
            locale: spoofedIntlConfigs[temp]['locale'],
            calendar: spoofedIntlConfigs[temp]['calendar'],
            });
            return modified;
        };
        }

        if (prop === 'NumberFormat') {
        return function(...args) {
            const original = Reflect.apply(target[prop], target, args);
            const modified = Object.create(original);
            modified.resolvedOptions = () => ({
            locale: spoofedIntlConfigs[temp]['locale'],
            numberingSystem: spoofedIntlConfigs[temp]['numberingSystem'],
            });
            return modified;
        };
        }

        return Reflect.get(target, prop, receiver);
    }
    });

}




