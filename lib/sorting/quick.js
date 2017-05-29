function quickSort(arr,left,right){
    var partitionIndex;
    if(left<right){
        partitionIndex = partition(arr,left,right);
        quickSort(arr,left,partitionIndex-1);
        quickSort(arr,partitionIndex+1,right);
    }
}

function partition(arr,left,right){
    var partitionIndex =left;
    var pivot = arr[right];
    for(var i=left;i < right;i++){
        if(arr[i] < pivot){
            swap(arr,i,partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr,partitionIndex,right);
    return partitionIndex;
}

function swap(arr,i,j) {
    var temp;
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
