let quoteText = document.getElementById("quote");
let authorName = document.getElementById("author");


let nextBtn = document.getElementById("newqoutes");

nextBtn.addEventListener("click", function(){
         quoteText.innerHTML="Loading..."
    fetch("https://api.api-ninjas.com/v1/quotes",{
        method:'GET',
        headers:{
            "X-Api-Key":"vyapWyMMz6RwsvulvRZb1w==jilXpmDjcYKlNQ6Z"
        }
    }).then((Response)=>{
        return Response.json();
       
    }).then((data)=>{
           setTimeout(() => {
       
              quoteText.innerHTML=data[0].quote;
        authorName.innerHTML=data[0].author;
        }, 500);
      
     
})})


document.querySelector("#copy").addEventListener("click", function () {
    if(quoteText.length.trim()=== 0) return ;
    else{
    let fullText = quoteText.innerHTML + " — " + authorName.innerHTML;

    navigator.clipboard.writeText(fullText).then(() => {
        let copiedMsg = document.getElementById("copied-msg");
        copiedMsg.style.display = "inline";

        setTimeout(() => {
            copiedMsg.style.display = "none";
        }, 2000);
    });
}
});



document.querySelector("#share").addEventListener("click", function () { 
    let fullText = quoteText.innerHTML + " — " + authorName.innerHTML;  
    navigator.share({
        title:"Quote",
        text:fullText
    }).then(()=>{
        console.log("shared successfully")
    })    .catch((error) => {
            console.error("Error sharing:", error);
        });
})

// async function translateText() {
// const res = await fetch("https://libretranslate.com/translate", {
//   method: "POST",
//   body: JSON.stringify({
//     q:quoteText.innerHTML,
//     source: "auto",
//     target: "ar"
//   }),
//   headers: { "Content-Type": "application/json" },
// });


//   const data = await res.json();
//   console.log(data);

//   // تقدر تعرض الترجمة مثلًا في عنصر معين:
//   document.getElementById("translated").innerText = data.translatedText;

// }


// translateText()






/** to achive
 * get qoutes from api ✅
 * get authors from api ✅
 * display them in the page ✅
 * copy the quote
 * get new quote ✅
 * translte the quote
 * make it look good
 */