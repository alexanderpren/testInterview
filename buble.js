function bubleShort(arr1, arr2) {
    // Write your code here
  let size = arr1.length + arr2.length;
  let newArray = arr1.concat(arr2)
  
  for (let i = 0 ; i < size -1 ; i++){
    for ( let j = 0;j < size ; j++){
      if( newArray[j] > newArray[j+1]){
        let aux =  newArray[j];
         newArray[j] = newArray[j+1]
         newArray[j+1] =  aux
      }
      
    }
    
  }
 

return newArray

}


let firstArray =  [4,7,9,10];
let secondArray = [ 1, 3, 7, 10 ] 


bubleShort(firstArray, secondArray)
