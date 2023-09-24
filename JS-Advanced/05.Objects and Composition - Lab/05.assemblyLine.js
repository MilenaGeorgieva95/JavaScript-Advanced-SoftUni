function createAssemblyLine() {
    return {
        hasClima: (obj) => {
            const template = {
                temp: 21,
                tempSettings: 21,
                adjustTemp: () => {
                    if (obj.temp < obj.tempSettings) {
                        obj.temp++;
                    } else if (obj.temp > obj.tempSettings) {
                        obj.temp--;
                    }
                }
            }
            return Object.assign(obj, template)
        },
        hasAudio: (obj) => {
            const template = {
                currentTrack: {
                    name: null,
                    artist: null
                },
                nowPlaying: () => {
                    if (currentTrack.name && currentTrack.artist) {
                        console.log(
                            `Now playing '${currentTrack.name}' by ${currentTrack.artist}`)
                    }
                }
            }
            return Object.assign(obj, template)
        },
        hasParktronic: (obj) => {
            const template = {
                checkDistance: (distance) => {
                    if (distance < 0.1) {
                        console.log("Beep! Beep! Beep!")
                    } else if (distance < 0.25) {
                        console.log("Beep! Beep!")
                    } else if (distance < 0.5) {
                        console.log("Beep!")
                    } else {
                        console.log('')
                    }
                }
            }
            return Object.assign(obj, template)
        }
    }
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

// function createAssemblyLine() {
//     return {
//         hasClima: (obj) => {
//             obj.temp = 21,
//                 obj.tempSettings = 21,
//                 obj.adjustTemp = () => {
//                     if (obj.temp < obj.tempSettings) {
//                         obj.temp++;
//                     } else if (obj.temp > obj.tempSettings) {
//                         obj.temp--;
//                     }
//                 }
//         },
//         hasAudio: (obj) => {
//             obj.currentTrack = {
//                 name: null,
//                 artist: null
//             },
//                 obj.nowPlaying = () => {
//                     if (obj.currentTrack.name && obj.currentTrack.artist) {
//                         console.log(`Now playing '${obj.currentTrack.name}' by ${obj.currentTrack.artist}`)
//                     }
//                 }
//         },
//         hasParktronic: (obj) => {
//             obj.checkDistance = (distance) => {
//                 if (distance < 0.1) {
//                     console.log("Beep! Beep! Beep!")
//                 } else if (distance < 0.25) {
//                     console.log("Beep! Beep!")
//                 } else if (distance < 0.5) {
//                     console.log("Beep!")
//                 } else {
//                     console.log('')
//                 }
//             }
//         }
//     }
// }