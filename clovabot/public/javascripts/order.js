const https = require('https');
const url = "https://run.mocky.io/v3/5443fb50-b0bb-4a83-b2b0-afade1b4a108"

var orderDount = function order(id){
    return new Promise((resolve,reject) =>{
        https.get(url,(res) => {
            var body = "";

            res.on("data",(chunk) => {
                body += chunk;
            });

            res.on("end",(id) => {
                var json = JSON.parse(body);

                resolve(json);
            })
        })
    })
}

module.exports = orderDount;
