console.log("good morning welcome in Extension Area");
document.body.style.background="#aaccee";


    let image = document.querySelector("img[alt='Google']");
    console.log(image);
    if(image){
        console.log('Reaches here');
        let imagePath = chrome.runtime.getURL("images/logo.png");
        image.src = imagePath;
        image.srcset = imagePath;
    }



  