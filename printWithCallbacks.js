var https = require('https');

function getHTML (options, callback) {

    /* Add your code here */
    https.get(options, function(response){
        var data = '';
        response.setEncoding('utf-8');

        response.on('data', function(chunk){
            data += chunk;
            callback(data);
        });

        
    })

  
  }
  
  function printHTML (html) {
    console.log(html);
  }
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };

  getHTML(requestOptions, printHTML);