function translateToRobber(text) {
  var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];
  var result = '';

  for (i = 0; i < text.length; ++i) {
    let char = text[i];
    result += char;

    if (consonants.includes(char.toLowerCase())) {
      result += 'o' + char.toLowerCase();
    }
  }
  return result;
}

document.querySelector('textarea').addEventListener('keyup', function(event) {
  document.querySelector('#output').innerHTML = translateToRobber(event.target.value);
});
