function count(str,w) 
{
 var wc = 0;
 for (var p = 0; p < str.length; p++) 
 {
    if (str.charAt(p) ==w) 
      {
      wc=wc+1
      }
  }
  return wc;
}

console.log(wordcount('himalayrajwani', 'a'));