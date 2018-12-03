var result = require('./http-functions');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/lowercase.html'
  };

function printLowercase(html){
    var str = '';
    for(var i in html){
        str += html[i].toLowerCase();
    }
    console.log(str);
}

result.getHTML(requestOptions, printLowercase);