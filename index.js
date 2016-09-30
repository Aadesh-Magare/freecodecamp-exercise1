var express = require("express")
var port = process.env.PORT || 8080;
var app = express()

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.get("/:timeString", function(req, res){
    var par = req.params.timeString;
    // console.log(par)
    // console.log(Date.parse(par))
    if(isNaN(Date.parse(par))){
        var err = { "unix": null, "natural": null }
        res.end(JSON.stringify(err));
    }
    else{
        var date = new Date(par);
        var nat = date.toLocaleString("en-us", { month: "long" }) + ' '+ date.getDate().toString() + ", " + date.getFullYear().toString()
        console.log(nat)
        var NatDate = {
            unix:date.getTime(),
            natural: nat
        }
        res.end(JSON.stringify(NatDate));
    }
})
app.get("/", function(req, res){
    res.render("index.html");
})
app.listen(port, function(){
    console.log("listening on " + port)
});