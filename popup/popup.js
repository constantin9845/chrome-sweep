// DATA VALUES SPOOFING



document.getElementById("clickMe").addEventListener("click", async () => {

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


});

Object.defineProperty(navigator, "platform", { get: () => "Linux x86_64" });


async function getMediaDevices(){
    try{
        let devices = await navigator.mediaDevices.enumerateDevices();
        return devices;
    }
    catch(error){
        alert(error);
    }
}