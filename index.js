var express = require("express")
var port = process.env.PORT || 8080;
var app = express()

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.get("/:timeString", function(req, res) {
    var par = req.params.timeString;
    var ans = {}
    var date = new Date(par)
    // console.log(date) 
    if ( date !== "Invalid Date" ){
         if(date.getTime() > 0){
            //  res.end("Valid ")
             
            var nat = date.toLocaleString("en-us", { month: "long" }) + ' '+ date.getDate().toString() + ", " + date.getFullYear().toString()
                // console.log(nat)
            ans = {
                unix:date.getTime() / 1000,
                natural: nat
            }
         }
         else{
            var date = new Date(parseInt(par) * 1000)
            if(date.getTime() > 0){
                var nat = date.toLocaleString("en-us", { month: "long" }) + ' '+ date.getDate().toString() + ", " + date.getFullYear().toString()
                        // console.log(nat)
                    ans = {
                        unix:date.getTime() / 1000,
                        natural: nat
                    }
                
            }
             else{
                ans = {
                    unix:null,
                    natural:null
                }
            }
         }
    }
    else{
        ans = {
            unix:null,
            natural:null
        }
    }
    res.end(JSON.stringify(ans));
})

app.get("/", function(req, res) {
    res.render("index.html");
})
app.listen(port, function() {
    console.log("listening on " + port)
});