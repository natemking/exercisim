//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const sentenceArr = sentence.toLowerCase().split('').sort().filter(char => (/[a-z]/ig).test(char));
  const cleanArr = [...new Set(sentenceArr)];

  for (let i = 0; i < alphabet.length; i++) {
    if(alphabet[i] !== cleanArr[i]) return false;
  }

  return true;
  
};
