// DATA VALUES SPOOFING
const data = {
    General: {
        userAgent:{
            data:["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Edge/91.0.864.59 Safari/537.36",
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Trident/7.0; AS; eNS) like Gecko",
                    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36 Edge/91.0.864.59",
                    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36",
                    "Mozilla/5.0 (Linux; Android 10; Pixel 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36",
                    "Mozilla/5.0 (Linux; Android 9; Samsung Galaxy S9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Mobile Safari/537.36",
                    "Mozilla/5.0 (Linux; Android 8.0.0; Nexus 5X Build/OPR1.170623.022) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.91 Mobile Safari/537.36",
                    "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Firefox/89.0 Safari/537.36",
                    "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:60.0) Gecko/20100101 Firefox/60.0",
                    "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36 OPR/77.0.4054.172",
                    "Mozilla/5.0 (Windows NT 6.1; x64; rv:85.0) Gecko/20100101 Firefox/85.0",
                    "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36"
                ]
        },
        appVersion:{
            data:["5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                    "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Edge/91.0.864.59 Safari/537.36",
                    "4.0 (Windows NT 10.0; Win64; x64) Trident/7.0; AS; eNS) like Gecko",
                    "5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                    "5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36 Edge/91.0.864.59",
                    "5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36",
                    "5.0 (Linux; Android 10; Pixel 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36",
                    "5.0 (Linux; Android 9; Samsung Galaxy S9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Mobile Safari/537.36",
                    "5.0 (Linux; Android 8.0.0; Nexus 5X Build/OPR1.170623.022) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.91 Mobile Safari/537.36",
                    "5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Firefox/89.0 Safari/537.36",
                    "5.0 (Windows NT 6.1; WOW64; rv:60.0) Gecko/20100101 Firefox/60.0",
                    "5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36 OPR/77.0.4054.172",
                    "5.0 (Windows NT 6.1; x64; rv:85.0) Gecko/20100101 Firefox/85.0",
                    "5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36"
                ]
        },
        platform:{
            data:["Win32",             // Windows 32-bit
                    "Win64",             // Windows 64-bit
                    "MacIntel",          // macOS (Intel-based)
                    "Linux x86_64",      // Linux (64-bit)
                    "Linux i686",        // Linux (32-bit)
                    "MacPPC",            // macOS (PowerPC-based)
                    "WinCE",             // Windows CE
                    "Android",           // Android OS
                    "iPhone",            // iOS on iPhone
                    "iPad",              // iOS on iPad
                    "iPod",              // iOS on iPod
                    "CrOS",              // Chrome OS
                    "Linux armv7l",      // Linux (ARM 32-bit)
                    "Linux aarch64",     // Linux (ARM 64-bit)
                    "Windows NT 6.1"
                ]
        },
        language:{
            data:["en-US",   // English (United States)
                    "en-GB",   // English (United Kingdom)
                    "fr-FR",   // French (France)
                    "de-DE",   // German (Germany)
                    "es-ES",   // Spanish (Spain)
                    "it-IT",   // Italian (Italy)
                    "pt-PT",   // Portuguese (Portugal)
                    "ru-RU",   // Russian (Russia)
                    "zh-CN",   // Chinese (Simplified, China)
                    "ja-JP",   // Japanese (Japan)
                    "ko-KR",   // Korean (South Korea)
                    "ar-SA",   // Arabic (Saudi Arabia)
                    "hi-IN",   // Hindi (India)
                    "sv-SE",   // Swedish (Sweden)
                    "nl-NL"    // Dutch (Netherlands)
                ]
        },
        languages:{
            data:[["en-US", "en", "es-ES"],       // English (US), English, Spanish (Spain)
                    ["fr-FR", "fr", "en-GB"],       // French (France), French, English (GB)
                    ["de-DE", "de", "en"],          // German (Germany), German, English
                    ["es-ES", "es", "en"],          // Spanish (Spain), Spanish, English
                    ["it-IT", "it", "en"],          // Italian (Italy), Italian, English
                    ["pt-PT", "pt", "en"],          // Portuguese (Portugal), Portuguese, English
                    ["ru-RU", "ru", "en"],          // Russian (Russia), Russian, English
                    ["zh-CN", "zh", "en"],          // Chinese (Simplified, China), Chinese, English
                    ["ja-JP", "ja", "en"],          // Japanese (Japan), Japanese, English
                    ["ko-KR", "ko", "en"],          // Korean (South Korea), Korean, English
                    ["ar-SA", "ar", "en"],          // Arabic (Saudi Arabia), Arabic, English
                    ["hi-IN", "hi", "en"],          // Hindi (India), Hindi, English
                    ["sv-SE", "sv", "en"],          // Swedish (Sweden), Swedish, English
                    ["nl-NL", "nl", "en"],          // Dutch (Netherlands), Dutch, English
                    ["en-GB", "en", "fr-FR"]
                ]
        }
    },
    Device: {
        hardwareConcurrency:{
            data:[1,   // Single-core processor
                    2,   // Dual-core processor
                    4,   // Quad-core processor
                    8,   // Octa-core processor
                    16,  // 16-core processor
                    12,  // 12-core processor
                    32,  // 32-core processor
                    64,  // 64-core processor (common in high-end servers)
                    2,   // Dual-core with hyper-threading
                    4,   // Quad-core with hyper-threading
                    6,   // Hexa-core processor
                    24,  // 24-core processor
                    128, // 128-core processor (high-performance systems)
                    10,  // 10-core processor
                    2    // Dual-core processor in a laptop or mobile device
                ]
        },
        deviceMemory:{
            data:[  0.5,  // 512 MB of RAM (typical for very low-end devices)
                    1,    // 1 GB of RAM (common in basic smartphones or low-end laptops)
                    2,    // 2 GB of RAM (entry-level smartphones, older laptops)
                    3,    // 3 GB of RAM (low-end smartphones)
                    4,    // 4 GB of RAM (common in mid-range smartphones, budget laptops)
                    6,    // 6 GB of RAM (mid-range smartphones, higher-end laptops)
                    8,    // 8 GB of RAM (common in modern smartphones, laptops, and desktops)
                    12,   // 12 GB of RAM (higher-end laptops and desktops)
                    16,   // 16 GB of RAM (common in gaming laptops, high-end desktops)
                    24,   // 24 GB of RAM (high-performance workstations, gaming PCs)
                    32,   // 32 GB of RAM (workstations, high-end gaming PCs)
                    64,   // 64 GB of RAM (high-performance desktops, servers)
                    128,  // 128 GB of RAM (servers or high-performance systems)
                    256,  // 256 GB of RAM (enterprise-level servers, supercomputers)
                    512   // 512 GB of RAM (top-tier servers or specialized systems)
                ]
        },
        maxTouchPoints:{
            data:[
                0,    // No touch support (e.g., desktop with mouse and keyboard)
                1,    // Single-touch device (basic touch devices or simple touchscreens)
                2,    // Dual-touch device (some older or basic smartphones/tablets)
                3,    // Three touch points (some specialty devices or older phones)
                4,    // Four touch points (less common, usually old tablets)
                5,    // Five touch points (some older smartphones or tablets)
                6,    // Six touch points (mid-range touchscreen devices)
                10,   // Ten touch points (standard for many modern smartphones and tablets)
                12,   // Twelve touch points (higher-end touch-enabled devices)
                16,   // Sixteen touch points (advanced or specialty touch-enabled devices)
                20,   // Twenty touch points (could be supported by high-end or specialized tablets)
                32,   // Thirty-two touch points (used in high-end touchscreens or interactive displays)
                64,   // Sixty-four touch points (specialized devices with large touch areas or interactive kiosks)
                128,  // One hundred twenty-eight touch points (usually professional-grade interactive touchscreens)
                256   // Two hundred fifty-six touch points (specialized or cutting-edge technology, like high-tech touch displays)
              
            ]
        }
    },
    Network: {
        onLine:{
            data:[true,false]
        },
        effectiveType:{
            data:[
                "slow-2g",   // Very slow 2G network (old, very slow mobile networks)
                "2g",        // 2G network (basic mobile data speeds)
                "3g",        // 3G network (moderate mobile data speeds)
                "4g",        // 4G network (high-speed mobile data)
                "5g",        // 5G network (very high-speed mobile data)
                "none",      // No network connection (offline)
                "slow-3g",   // Slow 3G network (lower than typical 3G speeds)
                "fast-2g",   // Faster-than-usual 2G connection
                "fast-3g",   // Faster-than-usual 3G connection
                "fast-4g",   // Faster-than-usual 4G connection
                "very-slow", // Very slow connection (could be an unstable network)
                "moderate",  // Moderate network connection (lower quality than 4G)
                "excellent", // Excellent connection (fast 4G or better)
                "wifi",      // Wi-Fi connection (typically faster than mobile data)
                "unknown"    // Network type not detectable or unknown
            ]
        },
        downlink:{
            "data":[
                0.1,   // Very slow connection (e.g., 2G or slow 3G)
                0.2,   // Slow connection (e.g., 2G)
                0.5,   // Slow connection, could be 3G
                1,     // 1 Mbps (basic mobile data speeds)
                1.5,   // 1.5 Mbps (low 3G or slower 4G)
                2,     // 2 Mbps (typical 3G speed)
                2.5,   // 2.5 Mbps (faster 3G, slower 4G)
                3,     // 3 Mbps (moderate 4G)
                5,     // 5 Mbps (typical 4G)
                7,     // 7 Mbps (fast 4G or good Wi-Fi)
                10,    // 10 Mbps (high-speed 4G or typical Wi-Fi)
                15,    // 15 Mbps (very fast 4G or Wi-Fi)
                20,    // 20 Mbps (very high-speed 4G or Wi-Fi)
                50,    // 50 Mbps (fast Wi-Fi or fiber connection)
                100    // 100 Mbps (high-speed fiber or fast Wi-Fi)
            ]
        },
        rtt:{
            "data":[
                1000,   // Very high RTT (slow, unreliable connections)
                900,    // Very high RTT (poor 2G or slow 3G)
                800,    // High RTT (slow 3G)
                700,    // High RTT (slow 3G or congested network)
                600,    // High RTT (low-end mobile connections)
                500,    // Moderate RTT (3G)
                400,    // Moderate RTT (standard 3G)
                300,    // Moderate RTT (slow 4G or better Wi-Fi)
                200,    // Low RTT (typical 4G)
                150,    // Low RTT (fast 4G or good Wi-Fi)
                100,    // Very low RTT (good 4G or excellent Wi-Fi)
                50,     // Very low RTT (high-speed Wi-Fi)
                30,     // Extremely low RTT (fiber or fast Wi-Fi)
                20,     // Extremely low RTT (fiber or very high-speed internet)
                10      // Ultra-low RTT (high-speed fiber or enterprise-grade connections)
            ]
        }

    },
    Security: {
        cookieEnabled:{
            data:[true, false]
        },
        doNotTrace:{
            data:[true, false]
        },
        geoLocation:{
            data:[
                { latitude: 37.7749, longitude: -122.4194 },   // San Francisco, USA (valid location)
                { latitude: 40.7128, longitude: -74.0060 },    // New York City, USA (valid location)
                { latitude: 51.5074, longitude: -0.1278 },     // London, UK (valid location)
                { latitude: 48.8566, longitude: 2.3522 },      // Paris, France (valid location)
                { latitude: 34.0522, longitude: -118.2437 },   // Los Angeles, USA (valid location)
                { latitude: 35.6762, longitude: 139.6503 },    // Tokyo, Japan (valid location)
                { latitude: 39.9042, longitude: 116.4074 },    // Beijing, China (valid location)
                { latitude: -33.8688, longitude: 151.2093 },   // Sydney, Australia (valid location)
                { latitude: 37.7749, longitude: -122.4194 },   // Another instance for San Francisco
                { latitude: null, longitude: null },           // Geolocation unavailable
                { latitude: undefined, longitude: undefined }, // Geolocation unavailable (browser prompt denied)
                { latitude: 0, longitude: 0 },                // Default location when GPS is not available
                { latitude: 51.1657, longitude: 10.4515 },    // Central location in Germany
                { latitude: 55.7558, longitude: 37.6173 },    // Moscow, Russia (valid location)
                { latitude: 37.7749, longitude: -122.4194 }    // Again, San Francisco, with another request
            ]
        }
    },
    Capabilities: {
        webDriver:{
            data:[true, false]
        },
        pdfViewerEnabled:{
            data:[true, false]
        },
        product:{
            data:[
                "Gecko",        // Firefox browser (Gecko engine)
                "WebKit",       // Safari and Chrome (WebKit engine, used in older versions of Chrome)
                "Blink",        // Chrome and other Chromium-based browsers (Blink engine)
                "AppleWebKit",  // Older Safari/Chrome browsers (used to identify WebKit-based browsers)
                "Trident",      // Internet Explorer (Trident engine)
                "Presto",       // Opera browser (Presto engine, used in older versions of Opera)
                "EdgeHTML",     // Microsoft Edge (before Chromium-based versions, used EdgeHTML engine)
                "KHTML",        // Konqueror (older KDE browser engine)
                "UCBrowser",    // UC Browser
                "Chrome",       // Google Chrome (often found in user-agent string)
                "Safari",       // Safari (Apple browser)
                "IE",           // Internet Explorer (when specifically mentioned in user-agent)
                "Android",      // Android browser (may be used as a product string in Android-based browsers)
                "Firefox",      // Mozilla Firefox browser (indicated in the product string)
                "Opera"         // Opera browser (modern version, uses Blink engine)
            ]
        }
    },
    Media: {
        mediaDevices:{
            data:[
                { deviceId: "1", kind: "audioinput", label: "Built-in Microphone", groupId: "0", facing: "user" },
                { deviceId: "2", kind: "audioinput", label: "External Microphone", groupId: "0", facing: "environment" },
                { deviceId: "3", kind: "videoinput", label: "Front Camera", groupId: "1", facing: "user" },
                { deviceId: "4", kind: "videoinput", label: "Back Camera", groupId: "1", facing: "environment" },
                { deviceId: "5", kind: "audioinput", label: "Microphone (Realtek)", groupId: "0", facing: "user" },
                { deviceId: "6", kind: "videoinput", label: "HD Webcam", groupId: "1", facing: "user" },
                { deviceId: "7", kind: "audioinput", label: "USB Microphone", groupId: "0", facing: "environment" },
                { deviceId: "8", kind: "audioinput", label: "Bluetooth Headset Microphone", groupId: "0", facing: "user" },
                { deviceId: "9", kind: "videoinput", label: "1080p Camera", groupId: "1", facing: "user" },
                { deviceId: "10", kind: "audioinput", label: "Laptop Microphone", groupId: "0", facing: "environment" },
                { deviceId: "11", kind: "videoinput", label: "Webcam", groupId: "1", facing: "environment" },
                { deviceId: "12", kind: "audioinput", label: "Built-in Microphone (Mac)", groupId: "0", facing: "user" },
                { deviceId: "13", kind: "audioinput", label: "Headset Microphone", groupId: "0", facing: "environment" },
                { deviceId: "14", kind: "videoinput", label: "External Camera (Logitech)", groupId: "1", facing: "user" },
                { deviceId: "15", kind: "videoinput", label: "Virtual Camera", groupId: "1", facing: "environment" }
              
            ]
        }
    }
}


document.getElementById("clickMe").addEventListener("click", async () => {

    generateNewData();

});

document.getElementById("data").addEventListener("click", async () => {

    await getCurrentData();

});





function generateNewData(){

    // GENERAL
    Object.defineProperty(navigator, "userAgent", { get: () => data['General']['userAgent']['data'][Math.floor(Math.random() * 15)] });
    Object.defineProperty(navigator, "appVersion", { get: () => data['General']['appVersion']['data'][Math.floor(Math.random() * 15)] });
    Object.defineProperty(navigator, "platform", { get: () => data['General']['platform']['data'][Math.floor(Math.random() * 15)] });
    Object.defineProperty(navigator, "language", { get: () => data['General']['language']['data'][Math.floor(Math.random() * 15)] });
    Object.defineProperty(navigator, "languages", { get: () => data['General']['languages']['data'][Math.floor(Math.random() * 15)] });
    
    // DEVICE & HARDWARE
    Object.defineProperty(navigator, "hardwareConcurrency", { get: () => data['Device']['hardwareConcurrency']['data'][Math.floor(Math.random() * 15)] });
    Object.defineProperty(navigator, "deviceMemory", { get: () => data['Device']['deviceMemory']['data'][Math.floor(Math.random() * 15)] });
    Object.defineProperty(navigator, "maxTouchPoints", { get: () => data['Device']['maxTouchPoints']['data'][Math.floor(Math.random() * 15)] });

    // NETWORK
    Object.defineProperty(navigator, "onLine", { get: () => data['Network']['onLine']['data'][Math.floor(Math.random() * 2)] });
    Object.defineProperty(navigator.connection, "effectiveType", { get: () => data['Network']['effectiveType']['data'][Math.floor(Math.random() * 15)] });
    Object.defineProperty(navigator.connection, "downlink", { get: () => data['Network']['downlink']['data'][Math.floor(Math.random() * 15)] });
    Object.defineProperty(navigator.connection, "rtt", { get: () => data['Network']['rtt']['data'][Math.floor(Math.random() * 15)] });

    // SECURITY
    Object.defineProperty(navigator, "cookieEnabled", { get: () => data['Security']['cookieEnabled']['data'][1] });
    Object.defineProperty(navigator, "doNotTrace", { get: () => data['Security']['doNotTrace']['data'][0] });
    Object.defineProperty(navigator, "geoLocation", { get: () => data['Security']['geoLocation']['data'][Math.floor(Math.random() * 15)] });

    // FEATURES & CAPABILITIES
    Object.defineProperty(navigator, "webdriver", { get: () => data['Capabilities']['webDriver']['data'][Math.floor(Math.random() * 2)] });
    Object.defineProperty(navigator, "pdfViewerEnabled", { get: () => data['Capabilities']['pdfViewerEnabled']['data'][Math.floor(Math.random() * 2)] });
    Object.defineProperty(navigator, "product", { get: () => data['Capabilities']['product']['data'][Math.floor(Math.random() * 15)] });

    // MEDIA
    Object.defineProperty(navigator, "mediaDevices", { get: () => ({
        enumerateDevices: async function(){
            const randomDevice = data['Media']['mediaDevices']['data'][Math.floor(Math.random() * 15)];
            return [randomDevice];
        }
    })});
}

async function getCurrentData(){
    var useragent = navigator.userAgent;
    var appVersion = navigator.appVersion;
    var os = navigator.platform;
    var language = navigator.languages;
    var cpuCores = navigator.hardwareConcurrency;
    var RAM = navigator.deviceMemory;
    var touchPoints = navigator.maxTouchPoints;
    var mediaDevices = await getMediaDevices();

    var output = "";

    output += `\nUser Agent: ${useragent}\n`;
    output += `\nApp Version: ${appVersion}\n`;
    output += `\nOS: ${os}\n`;
    output += `\nlanguages: ${language}\n`;
    output += `\nCPU cores: ${cpuCores}\n`;
    output += `\nRAM: ${RAM}\n`;
    output += `\nTouch Points: ${touchPoints}\n`;
    
    mediaDevices.forEach(device => {
        output += `   - ${device.kind}: ${device.label || "Unknown"}\n`;
    });


    alert(output);
}

async function getMediaDevices(){
    try{
        let devices = await navigator.mediaDevices.enumerateDevices();
        return devices;
    }
    catch(error){
        alert(error);
    }
}

