var result = require('./http-functions');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/reverse.html'
  };

function printReverse(html){
    var str = html.split('').reverse().join('');
    
    console.log(str);
}

result.getHTML(requestOptions, printReverse);