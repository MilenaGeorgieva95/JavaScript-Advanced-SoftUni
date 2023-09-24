function cityTaxes(name, population, treasury) {
    return {
        taxRate: 10,
        name,
        population,
        treasury,

        collectTaxes: function () {
            this.treasury += this.population * this.taxRate
        },
        applyGrowth: function (percentage) {
            this.population += Math.floor(this.population * percentage / 100)
        },
        applyRecession: function (percentage) {
            this.treasury -= Math.floor(this.treasury * percentage / 100)
        }
    }
}


cityTaxes('Tortuga',
    7000,
    15000)
