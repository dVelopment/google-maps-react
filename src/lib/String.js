export const camelize = function(str) {
  return str.split(/[_\s]/).map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join('');
}
