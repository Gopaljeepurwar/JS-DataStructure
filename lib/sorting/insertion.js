/**
 * Created by gopaljee on 05/07/16.
 */

Array.prototype.insertionSort = function () {
    var i, p,bufferValue;
    for(i=1;i<this.length;i++){
        bufferValue  = this[i];
        p=i-1;
        while (p >= 0 && bufferValue < this[p] ){
            this[p+1] = this[p];
            p--;
        }
        this[p+1] = bufferValue;
    }

    return this;
};