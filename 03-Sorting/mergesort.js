function split(wholeArray) {
  let mitad = Math.floor(wholeArray.length / 2);
  let primeraMitad = wholeArray.slice(0, mitad);
  let segundaMitad = wholeArray.slice(mitad);

  return [primeraMitad, segundaMitad];
}




function split(wholeArray) {
  let mitad = Math.floor(wholeArray.length / 2);
  let primeraMitad = wholeArray.slice(0, mitad);
  let segundaMitad = wholeArray.slice(mitad);
  return [primeraMitad, segundaMitad];
}

console.log(split([1, 2, 3, 4, 5])
);
// [2,1,3,5,4], [7,9,6]
function merge(array1, array2) {
  let mergeArr = [];
  let indice1 = 0;
  let indice2 = 0;
  while (indice1 < array1.length || indice2 < arr2.length)
    if (array1[indice1] < array2[indice2]) {
      indice1++;
      mergeArr.push(array1[indice1]);
    } else {
      mergeArr.push(array2[indice2]);
      indice2++;
    }
}