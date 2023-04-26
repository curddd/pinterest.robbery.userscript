import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import https from 'https'
import cors from 'cors'
import path from 'path'
import url from 'url'


const app = express();
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '500mb'
}));


app.post('/hot_links', cors(), function (req, res, next) {
    console.log("hOt LONK!", req.body.link);
    if (req.body.link) {
        let par = url.parse(req.body.link);
        let dest = IMAGE_FOLDER + "/" + path.basename(par.pathname);
        var file = fs.createWriteStream(dest);
        https.get(par, function (ress) { ress.pipe(file) });
    }

    res.send();
})



/*
var port = 443;
var server = https.createServer({key:privKeySSL,cert:pubKeySSL},app).listen(port, function(){
    console.log("Expr listening on port " +port);
});
*/

let port = 8080;
app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`)
});
