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

let btn = document.createElement("button");
btn.innerHTML = "Click to Display all Links";
btn.addEventListener("click",function(){

});

btn.className = "top_button"
document.body.appendChild(btn);
  
// btn.addEventListener("click",function(){
//     console.log("yes it is clicked");
//     let allLinkes =document.querySelectorAll("a");
//     let linkArray = [];
//     allLinks.forEach((item)=>{
//         linkArray.push(item.href);
//     })
//     console.log(linkArray);
// });

btn.addEventListener("click", function() {
    console.log("yes it is clicked");
    let allLinks = document.querySelectorAll("a"); // Corrected variable name
    let linkArray = [];
    allLinks.forEach((item) => {
        linkArray.push(item.href);
    });
    //console.log(linkArray);
    generatePopToDisplay(linkArray);
});

function generatePopToDisplay(links){
    let element =document.createElement("div");
    element.id = "top_div";
    let output = '';
    output += `<table>
    <tr>
        <th>Link Href</th>
    </tr>
    `;
    links.forEach((value)=>{
        output += `<tr>
        <td>${value}</td>
        </tr>`;
    });
    element.innerHTML = output;
    document.body.appendChild(element);
}
