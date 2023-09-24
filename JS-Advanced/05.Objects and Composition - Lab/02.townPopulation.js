function townPopulation(data) {
    const townList = {}
    for (line of data) {
        let [town, population] = line.split(' <-> ');
        population = Number(population)
        if (townList.hasOwnProperty(town)) {
            townList[town] += population
        } else {
            townList[town] = population
        }
    }
    for (let townName in townList) {
        console.log(townName + ' : ' + townList[townName])
    }
}

townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'])