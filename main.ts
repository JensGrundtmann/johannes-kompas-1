let retning = 0
let Lysstyrkelav = 30
let LysstyrkeHøj = 255
basic.forever(function () {
    retning = input.compassHeading()
    if (retning >= 315 && retning <= 360 || retning >= 0 && retning <= 45) {
        led.setBrightness(Math.map(retning, 315, 360, Lysstyrkelav, LysstyrkeHøj))
        led.setBrightness(Math.map(retning, 0, 45, LysstyrkeHøj, Lysstyrkelav))
        basic.showString("N")
    } else if (retning > 45 && retning <= 135) {
        led.setBrightness(Math.map(retning, 45, 90, Lysstyrkelav, LysstyrkeHøj))
        led.setBrightness(Math.map(retning, 90, 135, LysstyrkeHøj, Lysstyrkelav))
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
        led.setBrightness(Math.map(retning, 135, 180, Lysstyrkelav, LysstyrkeHøj))
        led.setBrightness(Math.map(retning, 180, 225, LysstyrkeHøj, Lysstyrkelav))
        basic.showString("S")
    } else if (retning > 225 && retning <= 315) {
        led.setBrightness(Math.map(retning, 225, 270, Lysstyrkelav, LysstyrkeHøj))
        led.setBrightness(Math.map(retning, 270, 315, LysstyrkeHøj, Lysstyrkelav))
        basic.showString("V")
    }
})
