module.exports = function(type,target,options) {
  var markup = '<a href="' + options.fn(this) + '" ';
  if (target == 'blank') {
    markup += 'target="_blank" ';
  }
  if (type == 'buy') {
    markup += 'class="yellow-button"><h4>Buy Online!</h4></a>'
  }
  if (type == 'find') {
    markup += 'class="green-button"><h4>Find a Store!</h4></a>'
  }
  return markup;
}
