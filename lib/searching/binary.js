/**
 * Created by gopaljee on 05/07/16.
 */

Array.prototype.binarySearch = function (value) {
    var start = 0,mid,end = this.length -1;
    while(start <= end){
        mid= parseInt((start + end)/2);
        if(value < this[mid]){
            end = mid-1;
        }else if(value > this[mid]){
            start = mid+1;
        }else{
            return true;
        }
    }
    return false;
};

