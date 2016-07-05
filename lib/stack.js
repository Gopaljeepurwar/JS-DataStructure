'use strict';

(function (module) {
    function Stack(){
        this.stack =[];
    }

    Stack.prototype.push = function(val){
        this.stack.push(val);
    };

    Stack.prototype.pop = function () {
        if(this.stack.length === 0){
            return 'stack empty';
        }
        return this.stack.pop();
    };

    Stack.prototype.getCurrentState= function () {
        return this.stack;
    };

    module.exports = Stack;
})(module);


