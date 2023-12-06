function townsToJson(input) {
  let result = [];
  let data = input.map((el) => {
    let line = el.split(/[ ]*[|][ ]*/);
    line.pop();
    line.shift();
    return line;
  });

  data.shift();

  for (let town of data) {
    let template = {
      Town: town[0],
      Latitude: Number(Number(town[1]).toFixed(2)),
      Longitude: Number(Number(town[2]).toFixed(2)),
    };
    result.push(template);
  }

  return JSON.stringify(result);
}

townsToJson([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
