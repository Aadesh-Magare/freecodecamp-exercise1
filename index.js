var express = require("express")

var app = express()

app.get("/", function(req, res){
    res.send("Hello man")
})
app.listen(8080, function(){
    console.log("listening on 8080")
});