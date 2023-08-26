basic.forever(function () {
    if (input.lightLevel() > 5) {
        basic.clearScreen()
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Prelude), music.PlaybackMode.UntilDone)
        basic.showString("buenos dias")
    } else {
        basic.showLeds(`
            # # # # #
            . . . # .
            . . # . .
            . # . . .
            # # # # #
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . # # # #
            . . . # .
            . . # . .
            . # # # #
            `)
        basic.pause(200)
    }
})
