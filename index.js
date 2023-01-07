const addDays = require("date-fns/addDays");

function days(no_of_days) {
  const newDate = addDays(new Date(2020, 7, 22), no_of_days);
  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
}
module.exports = days;
