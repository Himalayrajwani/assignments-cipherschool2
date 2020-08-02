function replacevowels(str) {
    return str.replace(/[aeiou]/gi, (vowel, off) => off + 1);
  }
  console.log(replacevowels('cipherschool'));
