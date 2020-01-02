function LongestWord(sen) { 
  sen = sen.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  let words = sen.split(' ');
  let longest = words.reduce((previous, current) => {
    if (current.length > previous.length) {
      return current;
    } else {
      return previous;
    }
    if (current === previous) {
    return previous;
  }
  }, "");
  
  return longest; 
}
   
// keep this function call here 
console.log(LongestWord("To be or not to be, that is the question"));