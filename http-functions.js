var https = require('https');

module.exports =
{
    /* Your code here */
    getHTML: function getHTML(options, callback){
        https.get(options, function(response){
            var data = '';
            response.setEncoding('utf-8');
    
            response.on('data', function(chunk){
                data += chunk;
                callback(data);
            });
    
        });
    },

    printHTML: function printHTML(html){
        console.log(html);
    }

};