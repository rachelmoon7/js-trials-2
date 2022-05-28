'use strict';

function wordsInCommon(words1, words2) {
  const words1Set = new Set(words1);
  const words2Set = new Set(words2);

  const result = new Set(); 

  for (const word of words1Set) {
    if (words2Set.has(word)) {
      result.add(word);
    }
  }
  return Array.from(result);
}

function kidsGame(names) {
  const result = [names.shift()];
  let counter = 0;
  // console.log(lastLetter)
  while (counter < names.length) {
    counter += 1;
    for (let i = 0; i < names.length; i+=1) {
      let word = result[result.length-1]
      // console.log(word[word.length-1])
      let lastLetter = word[word.length-1]
        // console.log(word[lastLetter])
      if (lastLetter === names[i][0] && !result.includes(names[i]) && result.length < names.length) {
        // console.log(names[i])
        result.push(names[i]);
        break
        }
      }
  }
  return result;
}

console.log(kidsGame(["bagon", "baltoy", "yamask", "starly", "nosepass", "kalob", "nicky", "booger"]))

// function kidsGame(names) {
//   const result = [names.shift];
  

// }
// result = [words[0]]
    
// //     #iterate through the list to find if first letter matches last letter of word 
//     // # for target_words in result:
//     for target_words in result:
//         // #nested for loop to iterate through the words argument simultaneously
//         for i in range(1, len(words)):
//                     // #add to result if last letter of the last word in result matches the first letter of word in words
//             if result[-1][-1] == words[i][0]:
//                 result.append(words[i])
//     return result

