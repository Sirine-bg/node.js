var fs = require('fs')
fs.readFile(process.argv[2], function(err,content){
        if (err) return console.error(err);
        else return console.log(content.toString().split('\n').length - 1); 
    })
