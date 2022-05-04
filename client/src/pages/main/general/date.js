exports.getDate = function (date) {
  const date = new Date(date);
  return date.getFullYear() +"/" +(date.getMonth() + 1) +"/" +date.getDate()
}
  