const https = require('https');
const { resolve } = require('path');
const url = "https://run.mocky.io/v3/5443fb50-b0bb-4a83-b2b0-afade1b4a108";

var getList = function getList(){
    return new Promise((resolve,rehect) => {
        https.get(url,(res) => {
        
            var body = "";
    
            res.on("data",(chunk) => {
                body += chunk;
            });
    
            res.on("end",() => {
                var data = "저희가 판매하는 품목은 다음과 같습니다. \n";
                var json = JSON.parse(body);
    
                for(let i = 0; i < json.length; i++){
                    let curObj = json[i];
                    data += `도넛 ID: ${curObj.id} 도넛 이름: ${curObj.name}`;
                }
                resolve(data);
            });
        });
    });
}

module.exports = getList;