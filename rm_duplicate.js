array = [ -5,1,2,2,2,6,9,17,17,21];

i = 1;
while(i < array.length){
    if(array[i] == array[i-1]){
        for(j = i; j < array.length -1 ; j++){
            array[j] = array[j+1];
        }
        array.length = array.length - 1;
    }
    else{
        i++;}
}
console.log(array)