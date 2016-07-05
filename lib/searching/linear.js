/**
 * Created by gopaljee on 05/07/16.
 */

Array.prototype.linearSearch = function(data){
   var found=false;
   this.forEach(function (value,index) {
       if(value === data){
           found = true;
       }
   });

    return found;
};

