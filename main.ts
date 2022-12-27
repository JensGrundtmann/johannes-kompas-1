let retning = 0
basic.forever(function () {
    led.setBrightness(100)
    retning = input.compassHeading()
    if (retning >= 315 && retning <= 360 || retning >= 0 && retning <= 45) {
        basic.showString("N")
    } else if (retning > 45 && retning <= 135) {
        if (retning == 90) {
            led.setBrightness(255)
        }
        basic.showLeds(`
            # # # # #
            # . . # #
            # . # . #
            # # . . #
            # # # # #
            `)
    } else if (retning > 135 && retning <= 225) {
        basic.showString("S")
    } else if (retning > 225 && retning <= 315) {
        basic.showString("V")
    }
})
