exports.getDate = function (timestamp) {
  const date = new Date(timestamp);
  return date.getFullYear() +"/" +(date.getMonth() + 1) +"/" +date.getDate()
}
exports.getHours = function (timestamp) { return  new Date(timestamp*1000).getHours()}
exports.getMinutes = function (timestamp) { return new Date(timestamp*1000).getMinutes()}
  