function isVowel(char) {
  const letter = char.toLowerCase();
  if (
    letter === 'a' ||
    letter === 'e' ||
    letter === 'i' ||
    letter === 'o' ||
    letter === 'u'
  ) {
    return true;
  } else {
    return false;
  }
}
isVowel();
