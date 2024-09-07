console.log('background page');  

chrome.runtime.onInstalled.addListener(function(){
    chrome.contextMenus.create({
        "id": "sampleContextMenu",
        "title": "Sample context menu",
        "contexts": ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info,tab)=>{
    console.log(info);
    console.log(tab);
    if(info.selectionText){
        let searchText = info.selectionText;
        let searchUrl="https://www.google.com/search?q=" + searchText;
        chrome.tabs.create({url:searchUrl,active:true},function(tab){
            
        });
    }
});
chrome.runtime.onMessage.addListener((result,sender,sendeResponse)=>{
    if(result.from =="content"){
        let response = await
         fetch("https://dummyjson.com/quotes")
        .then(response => response.json())
        .then(records => {
            console.log(records);
            sendeResponse(records);
        });
     }else if(result.form == "popup"){
         
    }
return true;
});

<img class="lnXdpd"
 alt="Paris Games Equestrian" height="200" src="/logos/doodles/2024/paris-games-equestrian-6753651837110573-law.gif" title="Paris Games Equestrian" width="500" id="hplogo" 
data-csiid="S9LbZqLSE6Hl1e8Ps97RmQ0_1" data-atf="1"></img>