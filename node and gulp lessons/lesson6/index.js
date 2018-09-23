/*
var util = require('util');

function Car(){

}

Car.prototype.logName = function(){
    console.log('This name is ', this.name)
};

function BMW(name){
    this.name = name || "Unknown";
}

BMW.prototype.drive = function(){
    console.log('In driving!')
};

util.inherits(BMW,Car);

var bmw = new BMW('XG');
bmw.logName();
bmw.drive();*/
var EventEmitter = require('events').EventEmitter;

var dispatcher = new EventEmitter();

dispatcher.on('connect', function(data){
    console.log('Connect 1', data);
});

dispatcher.on('error', function(err){
    console.log('Error !');
});

dispatcher.on('connect', function(data){
    console.log('Connect 2', data);
});
dispatcher.emit('error', new Error('Something error'));
dispatcher.emit('connect', {foo:1});


