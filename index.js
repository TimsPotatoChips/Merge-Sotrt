let sortingList = [3, 10, 9, 7, 13, 12, 11, -2000, -56797, 5761999, 2000143];

function merge(leftArray, rightArray) {
   let combinedList = [];

   while (leftArray.length !== 0 && rightArray.length !== 0) {
      if (leftArray[0] < rightArray[0]) {
         combinedList.push(leftArray[0]);

         leftArray.shift();
      }

      else if (leftArray[0] > rightArray[0]) {
         combinedList.push(rightArray[0]);

         rightArray.shift();
      }
   }

   return [...combinedList, ...leftArray, ...rightArray];
}

function mergeSort(list) {
   if (list.length < 2) {
      return list;
   }

   let splitNumber = Math.ceil(list.length / 2);

   let tempArray = [];
   let tempArrayTwo = [];

   for (let a = 0; a < splitNumber; a++) {
      tempArray.push(list[a]);
   }

   for (let b = splitNumber; b < list.length; b++) {
      tempArrayTwo.push(list[b]);
   }

   return merge(mergeSort(tempArray), mergeSort(tempArrayTwo));
}

let sorted = mergeSort(sortingList);

console.log(sorted);