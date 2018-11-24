
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
        //tweet quote
        $("#click-to-tweet").on("click", clickToTweet) 
       
        //show next quote                        
        $("#next-quote").on("click", getQuote) 
                      
})       


