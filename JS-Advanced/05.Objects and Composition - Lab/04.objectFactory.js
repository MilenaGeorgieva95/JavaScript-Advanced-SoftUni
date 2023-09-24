function objectFactory(library, arr) {
    const resultArr = [];
    for (let order of arr) {
        const myPart = Object.assign({}, order.template);

        for (let func of order.parts) {
            myPart[func] = library[func]
        }

        resultArr.push(myPart)
    }
    return resultArr;
}

objectFactory({
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
},
    [
        {
            template: { name: 'ACME Printer' },
            parts: ['print']
        },
        {
            template: { name: 'Initech Scanner' },
            parts: ['scan']
        },
        {
            template: { name: 'ComTron Copier' },
            parts: ['scan', 'print']
        },
        {
            template: { name: 'BoomBox Stereo' },
            parts: ['play']
        }
    ])

// function objectLibrary(library, arr) {
//     const resultArr = [];
//     for (let order of arr) {
//         const myPart = {
//             name: order.template.name
//         }
//         for (let func of order.parts) {
//             myPart[func] = library[func]
//         }
//         resultArr.push(myPart)
//     }
//     return resultArr;
// }