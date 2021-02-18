
exports.min = function min (array) {
  return Math.min(...arr);
}

exports.max = function max (array) {
    return Math.max(...arr);
}

exports.avg = function avg (array) {
  return arr.reduce((a,b) => a + b, 0) / arr.length
}
