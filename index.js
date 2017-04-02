

/**
 * Return caller module.
 *
 * @param {String} parent
 * @return {String}
 * @api public
 */

module.exports = function(parent) {
  var file
  var trace = Error.prepareStackTrace
  Error.prepareStackTrace = function (_, stack) {
    Error.prepareStackTrace = trace
    return stack
  }
  var stack = (new Error()).stack
  do {
    var result = file
    file = stack.shift().getFileName()
    if(file === parent) return result
  } while (true)
}
