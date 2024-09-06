 document.getElementById("btn").addEventListener("click",function(){
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        //console.log(tabs[0].url);
        let tabUrl = tabs[0].url;
        if(tabUrl.indexOf("flipkaet.com")==-1){
            chrome.tabs.create({url: "https://www.flipkart.com",active:true}, function(tab){
                //alert("tab is opened");
            });
        }
    });
 });