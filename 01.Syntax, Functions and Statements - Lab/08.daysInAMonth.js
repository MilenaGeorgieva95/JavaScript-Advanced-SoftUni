function daysInAMonth(monthNum, yearNum) {
  let endOfTheMonthDate = new Date(yearNum, monthNum, 0);
  let daysCount = endOfTheMonthDate.getDate();
  console.log(daysCount);
}

daysInAMonth(1, 2012);
