
// JQUERY WET VERSION 

let quotesURL = "http://quotes.stormconsultancy.co.uk/random.json";   

let getQuote = () => {
                    $.getJSON(quotesURL, (json) => {
                    $("#print-quote").html(JSON.stringify = `${json.quote}`);
                    $("#print-author").html(JSON.stringify = "- " + `${json.author}`);
               });
            }

let clickToTweet = () => { 
                    let quoteContent = $("#print-quote").html(); 
                    window.open("http://twitter.com/intent/tweet?url=&text=" 
                    + quoteContent); 
                };  

$(document).ready( () => { 
    getQuote();
    //preload quote
        // $.getJSON(quotesURL, function(json) {       
        //     $("#print-quote").html(JSON.stringify = `${json.quote}`);
        //     $("#print-author").html(JSON.stringify = "- " + `${json.author}`);
        // }) 
        // getQuote;
        // click to tweet preloaded quote
        $("#click-to-tweet").on("click", clickToTweet) 
        //     let quoteContent = $("#print-quote").html(); 
        //     window.open("http://twitter.com/intent/tweet?url=&text=" 
        //     + quoteContent); 
            // });    
        // clickToTweet   
    // })
        //show next quote                        
        $("#next-quote").on("click", getQuote) 
        // {  
            // getQuote
//                 $.getJSON(quotesURL, function(json) {       
//                     $("#print-quote").html(JSON.stringify = `${json.quote}`);
//                     $("#print-author").html(JSON.stringify = "- " + `${json.author}`);
//  })
         
                    // // click to tweet quote 
                    // $("#click-to-tweet").on("click", function() {
                    //     let quoteContent = $("#print-quote").html(); 
                    //     window.open("http://twitter.com/intent/tweet?url=&text=" 
                    //     + quoteContent); 
                    // });
// clickToTweet                   
                   
               
            })       


            

// TESTING VANILLA JS WITH ARROW FUNC (WORKS)

// document.querySelector("#get-another-quote")
// .onclick = () => fetch("http://quotes.stormconsultancy.co.uk/random.json")
// .then(response => response.json())
// .then(json => {
//     document.querySelector("#print-quote").innerHTML = `${json.quote}`
// }).catch(error => {
//     console.log(error)
// })


/* TESTING VANILLA JS WITHOUT ARROW FUNC (HAS AN ERROR AT :18)

document.querySelector("#get-another-quote").onclick = function() {
    fetch("http://quotes.stormconsultancy.co.uk/random.json")
}
.then(function(response) {
    response.json()
})
.then(function(json) {
    document.querySelector("#print-quote").innerHTML = `${json.quote}`
}).catch(function(error) {
    console.log(error)
})
*/
    



