var https = require('https');

function getAndPrintHTML () {
    var data = '';
    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step2.html'
    };
  
    /* Add your code here */
    https.get(requestOptions, function(response){
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

getAndPrintHTML();