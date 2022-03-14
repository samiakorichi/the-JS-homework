//array = [ -2,8,9,11,8,0,14,5,-4,-1,8,-3,3];
array = [ -2,8,9,11,8,0,14,5,-4,-1,8,-3,3];

var elt = 8; //deleted element
i = 0;
while(i < array.length){
    if(array[i] == elt){
        for(j = i; j < array.length -1 ; j++){
            array[j] = array[j+1];
        }
        array.length = array.length - 1;
    } 
    else{i = i + 1;}
}

console.log(array)