var csv = require("fast-csv");
var request = require('request');
var fs = require('fs');
var promisesArray = [];
var counter = 0;
 
function getData() {
    return new Promise(function(resolve, reject){
        request
            .get('http://127.0.0.1:3000/request', function(err, result){
                resolve(result.body);
            })
    });
}

console.log(new Date());;

var stream = fs.createReadStream("samplecsv.csv");
 
var onEnd = function() {
    console.log("done");
    console.log(new Date());
    counter = 0;
}

csv
 .fromStream(stream, {ignoreEmpty: true})
 .on("data", function(data, xxx){

    /*
        Approach 1: push all Promises to an array
        OnEnd of streaming, invoke all promises using Promise.all()
        Finally call finalCallback 
    */
    promisesArray.push(getData());

    /*
        Approach 2: Use a simple counter and compare at each
                    step against the total count

        When condition is met, invoke onEnd Function
    */
     
    getData()
    .then((response) => {
        console.log(response);
        counter++;
        if(counter === data.length)
            onEnd();
    })
    .catch((error) => console.log(error));
 }).on("end", function(){
     Promise.all(promisesArray).then(() => {
         console.log("done!");
         console.log(new Date());
         counter = 0;
     });
 });
