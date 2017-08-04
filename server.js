var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'articleone': {
        title:"Article 1 | Aditya's Website",
        heading:"ARTICLE ONE!!!"
    },
    'articletwo': {
        title:"Article 2 | Aditya's Website",
        heading:"ARTICLE TWO!!!"
    },
    'articlethree': {
        title:"Article 3 | Aditya's Website",
        heading:"ARTICLE THREE!!!"
    }
};
var createtemplate=function(data){
    var title = data.title;
    var heading = data.heading;
    var htmltemplate =  `
    <!doctype html>
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="bodhi">
                <div>
                    <a href="/">BACK TO HOME PAGE</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    insert date here
                </div>
                <div>
                    <p>
                        Here is the great article you have been searching for. Get all the knowledge you need in this world.
                        Thats all Im bored to write further. So this should suffice ----------------------------------------
                        ----------------------------------------------------------------------------------------------------
                        ----------------------------------------------------------------------------------------------------
                    </p>
                    <p>
                        The second para already? Continue reading. ---------------------------------------------------------
                        ----------------------------------------------------------------------------------------------------
                        ----------------------------------------------------------------------------------------------------
                        ----------------------------------------------------------------------------------------------------
                    </p>
                    <p>
                        Last one no more reading. Thats it------------------------------------------------------------------
                        ----------------------------------------------------------------------------------------------------
                        ----------------------------------------------------------------------------------------------------
                    </p>
                </div>
            </div>
        </body>
    </html>`
    ;
    return htmltemplate;
};
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/:articlename', function (req, res) {
    var articlename = req.params.articlename;
  res.send(createtemplate(articles[articlename]));
});

app.get('/article2', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article2.html'));
});

app.get('/article3', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article3.html'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
