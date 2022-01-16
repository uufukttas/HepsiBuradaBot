var request = require("request");
var htmlParser = require('html-parser');

var parseMyAwesomeHtml = html => {
    let elements = [];
    htmlParser.parse(html, {
        openElement: function(name) { elements.push(name); },
        // closeOpenedElement: function(name, token, unary) { console.log('token: %s, unary: %s', token, unary); },
        // closeElement: function(name) { console.log('close: %s', name); },
        // comment: function(value) { console.log('comment: %s', value); },
        // cdata: function(value) { console.log('cdata: %s', value); },
        // attribute: function(name, value) { console.log('attribute: %s=%s', name, value); },
        // docType: function(value) { console.log('doctype: %s', value); },
        // text: function(value) { console.log('text: %s', value); }
    });

    const elem = htmlParser('div.container')
    console.log(elem)
};

request("http://ufuktas.me", (error, response, body) => {
    if (!error) {
        parseMyAwesomeHtml(body);
    } else {
        console.log(error);
    }
});