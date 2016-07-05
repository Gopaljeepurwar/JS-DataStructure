/**
 * Created by gopaljee on 05/07/16.
 */


Array.prototype.selectionSort = function () {
    var min,pos,temp;
    for(i=0;i< this.length;i++){
        min=this[i];
        pos=i;
        for(j=i;j<this.length;j++){
            if(this[j] < min){
                min = this[j];
                pos = j;
            }
        }

        temp = this[i];
        this[i] = this[pos];
        this[pos] = temp;
    }
    return this;
};