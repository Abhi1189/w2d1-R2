var https = require('https');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };


function getAndPrintHTML (options) {
    var data = '';

  
    /* Add your code here */
    https.get(options, function(response){
        response.setEncoding('utf-8');

 
        // response.on('error', function(err){
        //     console.log("oh my goodness, that's bad", err);
        // })


        response.on('data', function(chunk){
                data += chunk;
        });

        response.on('end', function(){
            console.log(data);
            console.log("Program ended.");
        });
            

    });
    
}

getAndPrintHTML(requestOptions);