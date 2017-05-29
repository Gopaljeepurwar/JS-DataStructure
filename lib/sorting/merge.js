Array.prototype.mergeSort = function mergeSort(){
    var arr = this;
    if(arr.length == 1){
        return arr;
    }
    var middle = Math.ceil(arr.length/2);
    var left = arr.slice(0,middle);
    var right = arr.slice(middle,arr.length);
    return merge(left.mergeSort(),right.mergeSort());
}




function merge(left,right) {
    var result = [];
    var i=0,j=0,k=0;
    while(i<left.length && j<right.length){
        if(left[i] <= right[j]){
            result.push(left[i]);
            i++;
        }else{
            result.push(right[j]);
            j++;
        }
    }


    while(i<left.length){
        result.push(left[i]);
        i++;
    }

    while(j<right.length){
        result.push(right[j]);
        j++;
    }

    return result;

}
