var result = require('./http-functions');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/uppercase.html'
  };

function printUppercase(html){
    var str = '';
    for(var i in html){
        str += html[i].toUpperCase();
    }
    console.log(str);
}

result.getHTML(requestOptions, printUppercase);