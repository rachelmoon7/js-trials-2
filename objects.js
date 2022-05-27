'use strict';

// 1. countWords
function countWords(phrase) {
  let wordCount = {};
  for (let word of phrase.split(' ')) {
    if (wordCount.hasOwnProperty(word)) {
      wordCount[word] += 1;
    } else {
      wordCount[word] = 1;
    }
  } return wordCount;
}

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  let melonPrices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
};
  if (!melonPrices.hasOwnProperty(price)) {
    return;
  }
  return melonPrices[price].sort();
}
