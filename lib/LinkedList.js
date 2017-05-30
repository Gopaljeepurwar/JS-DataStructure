'use strict';

(function (module) {
    function LinkedList(){
        this.start=null;
        this.end=null;
    }

    LinkedList.prototype.addNodeAtEnd = function(data){
        var newNode={
            data:data,
            next:null
        };
        if(this.start == null){
            this.end=this.start=newNode;
        }else{
            this.end.next=newNode;
            this.end=newNode;
        }
    };

    LinkedList.prototype.traverseLinkList = function () {
        var dataArray = [];
        var currentNode = this.start;
        while(currentNode != null){
            dataArray.push(currentNode.data);
            currentNode=currentNode.next;
        }
        return dataArray;
    };

    LinkedList.prototype.addNodeAtStart = function (data) {
        var newNode={
            data:data,
            next:this.start
        };

        if(this.start == null){
            this.end = newNode;
        }
        this.start = newNode;
    };


    LinkedList.prototype.deleteNodeAtStart = function () {
        var deletedValue;
        if(this.start == null){
            return "Empty Link List"
        }else if(this.start == this.end){
            deletedValue=this.start.data;
            this.start=this.end=null;
        }else{
            deletedValue=this.start.data;
            this.start = this.start.next;
        }

        return deletedValue;
    };



    LinkedList.prototype.deleteNodeAtEnd = function(){
        var deletedValue;
        var currentNode = this.start,tempNode;
        if(this.end == null){
            return "Empty Linked List";
        }


        while(currentNode != this.end){
            tempNode = currentNode;
            currentNode = currentNode.next;
        }


        deletedValue=this.end.data;
        this.end = tempNode;
        this.end.next = null;

        return deletedValue;
    };


    LinkedList.prototype.addNodeToSpecificPosition = function (data,position) {
        var p,q,index=1;
        var newNode={
            data:data,
            next:this.start
        };
        p=this.start;
        while(index <= position){
            if(p.next == null){
                return "Position is not found";
            }
            q=p;
            p = p.next;
            index++;
        }

        q.next = newNode;
        newNode.next = p;
    };


    LinkedList.prototype.rotate = function () {
        var p,q,r;
        p = this.start;
        q = p.next;
        while(q){
            r = q.next;
            q.next = p;
            p=k;
            q=r;
        }
        this.start.next = null;
        this.end = this.start;
        this.start = p;
    };

    module.exports = LinkedList;
})(module);


