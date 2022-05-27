'use strict';

// 1. printIndices
function printIndices(items) {
  for (let i = 0; i < items.length; i+=1) {
    console.log(`${items[i]} ${i}`)
  }
}

// 2. everyOtherItem
function everyOtherItem(items) {
  let result = [];
  for (let i=0; i < items.length; i+=1) {
    if (i % 2 === 0) {
      result.push(items[i])
    }
  }
  console.log(result)
}


// 3. smallestNItems
function smallestNItems(items, n) {
  let sortedItems = items.sort(function(a, b){return a-b})
  let sortedNnItems = sortedItems.slice(0, n)
  sortedNnItems.reverse(function(a, b){return b-a})
  console.log(sortedNnItems)
}
