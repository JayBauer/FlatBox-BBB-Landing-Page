module.exports = function(type,target,link) {
  var markup = '<a href="'+link+'" ';

  if (target == 'blank') {
    markup += 'target="_blank" ';
  }
  if (type == 'buy') {
    markup += 'class="yellow-button"><h4>Buy Online!</h4></a>'
  }
  else if (type == 'find') {
    markup += 'class="green-button""><h4>Find a Store!</h4></a>'
  }
  return markup;
}
