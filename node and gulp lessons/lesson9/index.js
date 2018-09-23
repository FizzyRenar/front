//console.log(process.argv);
//for(var i=2; i < process.argv.length; i++){
//    console.log(process.argv[i])
//}

var optimist = require('optimist');
var message = optimist.argv.message;
console.log("hello " + message);