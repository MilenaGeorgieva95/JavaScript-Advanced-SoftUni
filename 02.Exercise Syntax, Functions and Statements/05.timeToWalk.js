function timeToWalk(steps, footprint, speed) {
    let distanceInM = steps * footprint;
    let speedMetresInSec = speed / 3.6
    let time = distanceInM / speedMetresInSec
    let rest = Math.floor(distanceInM / 500);
    time += rest * 60

    let timeInMins = Math.floor(time / 60)
    let timeInSec = Math.ceil(time - timeInMins * 60)

    let timeInHours = Math.floor(timeInMins / 60)
    timeInMins -= timeInHours * 60

    timeInHours += ''
    timeInMins += ''
    timeInSec += ''

    console.log(`${timeInHours.padStart(2, '0')}:${timeInMins.padStart(2, '0')}:${timeInSec.padStart(2, '0')}`)

}

timeToWalk(4000, 0.60, 5)