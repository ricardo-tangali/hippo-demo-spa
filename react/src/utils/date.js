function parseDate(date) {
  const parsedDate = parseFloat(date);
  if(isNaN(parsedDate)) {
    return null;
  }

  const dateObj = new Date(parsedDate);

  return (
    dateObj.getMonthName() + ' ' +
    dateObj.getDate() + ', ' +
    dateObj.getFullYear()
  );
}

export { parseDate };

// extend JavaScript Date object to return full month names
// eslint-disable-next-line
Date.prototype.getMonthName = function() {
  var months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return months[this.getMonth()];
};