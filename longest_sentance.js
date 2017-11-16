
/*
Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 
*/

function LongestWord(sen) { 
  
  let arr = sen.replace(/[^A-Za-z\s]/g, '').split(' ');

  let answer = arr.reduce((x, y) => {
    return x.length >= y.length ? x : y
  })

  console.log(answer);

// code goes here  
return sen; 
       
}
 
// keep this function call here 
LongestWord("I love dogs!!!");                            
