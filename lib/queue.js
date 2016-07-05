'use strict';

(function (module) {
    function Queue(){
        this.queue = [];
    }

    Queue.prototype.insert = function (value) {
        this.queue.push(value);
    };

    Queue.prototype.remove = function(){
        var value;

        if(!this.queue.length){
            return "Empty Queue";
        }
        value = this.queue[0];
        this.queue =  this.queue.slice(1,this.queue.length);
        return value;
    };

    Queue.prototype.getQueue = function () {
        return this.queue;
    };

    module.exports = Queue;
})(module);



