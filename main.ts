let retning = 0
basic.forever(function () {
    led.setBrightness(100)
    retning = input.compassHeading()
    if (retning >= 315 && retning <= 360 || retning >= 0 && retning <= 45) {
        basic.showString("N")
    } else if (retning > 45 && retning <= 135) {
        led.setBrightness(Math.map(retning, 45, 90, 50, 255))
        led.setBrightness(Math.map(retning, 90, 135, 255, 50))
        if (retning == 90) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                . . # . .
                . . # . .
                `)
        } else {
            basic.showLeds(`
                # # # # #
                # . . # #
                # . # . #
                # # . . #
                # # # # #
                `)
        }
    } else if (retning > 135 && retning <= 225) {
        basic.showString("S")
    } else if (retning > 225 && retning <= 315) {
        basic.showString("V")
    }
})
