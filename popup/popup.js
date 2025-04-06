
// Re-inject script to generate new navigator values 
document.getElementById("generate").addEventListener("click", async () => {

    clearDisplay();


    try{

        window.postMessage({type:"SET_STORAGE"}, "*");

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length === 0) return;
            chrome.tabs.sendMessage(tabs[0].id, { action: "runInjectScript" });
        });
    }
    catch(error){
        console.log(`test error: ${error}`)
    }
    

});



document.getElementById("get_data").addEventListener("click", async () => {

    clearDisplay();

    await getCurrentData();

});


// Return current navigator data
async function getCurrentData(){


    var mediaDevices = await getMediaDevices();

    var outputMessage = document.createElement('div');
    outputMessage.classList.add('outputMessage');

    outputMessage.appendChild(genMessage([
                                            'General', 
                                            ['userAgent',navigator.userAgent],
                                            ['appVersion', navigator.appVersion],
                                            ['Operating System', navigator.platform],
                                            ['Browser Language', navigator.language],
                                            ['Preferred Languages', navigator.languages]
                                        ]
    ));


    outputMessage.appendChild(genMessage([
                                            'Device Information', 
                                            ['CPU Cores',navigator.hardwareConcurrency],
                                            ['RAM', navigator.deviceMemory],
                                            ['TouchPoints', navigator.maxTouchPoints],
                                        ]
    ));


    outputMessage.appendChild(genMessage([
                                            'Network Information', 
                                            ['OnLine',navigator.onLine],
                                            ['EffectiveType', navigator.connection.effectiveType],
                                            ['Downlink', navigator.connection.downlink],
                                            ['rtt', navigator.connection.rtt]
                                        ]
    ));


    outputMessage.appendChild(genMessage([
                                            'Security', 
                                            ['CookiesEnabled', navigator.cookieEnabled],
                                            ['doNotTrack', navigator.doNotTrack]
                                        ]
    ));


    outputMessage.appendChild(genMessage([
                                            'Features', 
                                            ['Webdriver', navigator.webdriver],
                                            ['pdfViewerEnabled', navigator.pdfViewerEnabled],
                                            ['product', navigator.product],
                                        ]
    ));

    
    var temp = "";
    mediaDevices.forEach(device => {
        temp += `   - ${device.kind}: ${device.label || "Unknown"}\n`;
    });


    outputMessage.appendChild(genMessage([
                                            'Media', 
                                            ['Devices', temp],
                                        ]
    ));


    document.getElementById('output_window').appendChild(outputMessage);
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

function genMessage(data){
    var section = document.createElement('div');
    section.classList.add('section');

    var title = document.createElement('h3');
    title.innerText = data[0];

    section.appendChild(title);

    for(i = 1; i < data.length; i++){
        var elem1 = document.createElement('p');
        elem1.innerHTML = `<i>${data[i][0]}</i>: ${data[i][1]}\n`;

        section.appendChild(elem1);
    }

    return section;
}

function clearDisplay(){
    document.getElementById('output_window').innerHTML = '';
}


