module.exports = function(type,link='#') {
  var pagelink = link.fn(this);
  if (type == 'buy') {
    return '<a href="'+pagelink+'" class="yellow-button" target="_blank"><h4>Buy Online!</h4></a>'
  }
  else if (type == 'find') {
    return '<a href="'+pagelink+'" class="green-button" target="_blank"><h4>Find a Store!</h4></a>'
  }
}
