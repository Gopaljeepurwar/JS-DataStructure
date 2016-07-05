/**
 * Created by gopaljee on 05/07/16.
 */

Array.prototype.bubbleSort = function () {
    var i, j,temp;
    for(i=0;i<this.length;i++){
        for(j=0;j<this.length;j++){
            if(this[j]>this[j+1]){
                temp = this[j];
                this[j] = this[j+1];
                this[j+1] = temp;
            }
        }
    }

    return this;
};




