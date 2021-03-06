module.exports = function(type,target,options) {
  var markup = '<a href="' + options.fn(this) + '" ';
  if (target == 'blank') {
    markup += 'target="_blank" ';
  }
  if (type == 'buy') {
    markup += `class="yellow-button" onclick="ga('send', 'event', 'Bed Bath & Beyond', 'Click', 'Buy Online', '1'); goog_report_conversion('${options.fn(this)}'); console.log('click');"><h4>Buy Online!</h4></a>`;
  }
  if (type == 'find') {
    markup += `class="green-button" onclick="ga('send', 'event', 'Bed Bath & Beyond', 'Click', 'Find a Store', '1'); goog_report_conversion('${options.fn(this)}'); console.log('click');"><h4>Find a Store!</h4></a>`;
  }
  return markup;
}
