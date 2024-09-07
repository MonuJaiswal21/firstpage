  
//   setTimeout(()=>{
//     let loginLink = document.querySelector('a[href*="login"]');
//     if(loginLink){
//         loginLink.click();
//     }
//  },2000);  
function openLoginPopup(){
    let loginLink=document.querySelector('a[href*="login"]');
    if(loginLink){
        loginLink.click();
    }
}
 chrome.runtime.onMessage.addListener((message,sender,sendResponse)=>{
    console.log(message);
    console.log(sender);
    console.log(sendResponse);
    if(message.open_login){
        
    }
 });

 chrome.storage.local.get(["open_login"],function(result){
    if(result.open_login){
        serTimeout(()=>{
            openLoginPopup();
        chrome.storage.local.remove(["open_login"],function(result){
            console.log("storage is removed");
        });
        },2000);
        
    }
 });

 setTimeout(()=>{
    let btn = document.createElement("button");
    btn.innerHTML = "click to send message";
    btn.style.position = "absolute";
    btn.style.top = "60px";
    btn.style.left = "20px";
    btn.style.cursor = "pointer";
    btn.style.color = "red";
    btn.style.zIndex = 999999;
    btn.addEventListener("click",function(){
        
        chrome.runtime.sendMessage({"form":"content","message":"Good Morning"},(message)=>{
            console.log(message);
        });

//    fetch("https://dummyjson.com/quotes")
//     .then(response => response.json())
//     .then(data =>{
//         console.log(data);
//     })

    });
 document.body.appendChild(btn);
},2000);

 chrome.runtime.onMessage.addListener((message,sender,sendResponse)=>{
    if(result.form == "content"){
        console.log(result.message);
        sendResponse("Form Background"+ Math.random());
 
    }else if(result.form == "popup"){

    }
 })