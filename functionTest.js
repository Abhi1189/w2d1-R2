var result = require('./http-functions');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
  };

result.getHTML(requestOptions, result.printHTML);