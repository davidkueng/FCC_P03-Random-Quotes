
// JQUERY WET VERSION 

var quotesURL = "http://quotes.stormconsultancy.co.uk/random.json";                   

$(document).ready(function() {
    //preload quote
        $.getJSON(quotesURL, function(json) {       
            $("#print-quote").html(JSON.stringify = `${json.quote}`);
            $("#print-author").html(JSON.stringify = "- " + `${json.author}`);

        //click to tweet preloaded quote
        $("#click-to-tweet").on("click", function() {
            var quoteContent = $("#print-quote").html(); 
            window.open("http://twitter.com/intent/tweet?url=&text=" 
            + quoteContent); 
            });       
        })        
        //show next quote                        
            $("#next-quote").on( "click", function() {  
                $.getJSON(quotesURL, function(json) {       
                    $("#print-quote").html(JSON.stringify = `${json.quote}`);
                    $("#print-author").html(JSON.stringify = "- " + `${json.author}`);
                    //click to tweet next quote 
                    $("#click-to-tweet").on("click", function() {
                        var quoteContent = $("#print-quote").html(); 
                        window.open("http://twitter.com/intent/tweet?url=&text=" 
                        + quoteContent); 
                    });                  
                    })
                })
            })       

/* TESTING VANILLA JS WITH ARROW FUNC (WORKS)

document.querySelector("#get-another-quote")
.onclick = () => fetch("http://quotes.stormconsultancy.co.uk/random.json")
.then(response => response.json())
.then(json => {
    document.querySelector("#print-quote").innerHTML = `${json.quote}`
}).catch(error => {
    console.log(error)
})
*/

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
    



