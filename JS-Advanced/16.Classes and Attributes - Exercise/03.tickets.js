function tickets(data, sortData) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }
  let myList = [];
  data.forEach((el) => {
    let [destination, price, status] = el.split("|");
    price = Number(price);
    let tempTicket = new Ticket(destination, price, status);
    myList.push(tempTicket);
  });

  return myList.sort((a, b) => {
    if (sortData === "price") {
      return a[sortData] - b[sortData];
    }
    return a[sortData].localeCompare(b[sortData]);
  });
}

console.table(
  tickets(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "destination"
  )
);
