var fs = require('fs');

//fs.writeFileSync('test.txt', "Hello? word");
//var data = fs.readFileSync('test.txt',{encoding :'utf-8' } );
//console.log(data);

fs.writeFile('test.txt', 'Hello, word', function(error){
    if(error) throw new Error(error);

    fs.rename('test.txt', "test2.txt", function(error){
        if(error) throw new Error(error);

        fs.readFile('test2.txt',{encoding :'utf-8' }, function(err,data){
            if(error) throw new Error(error);
            console.log(data);
        });
    });
});




