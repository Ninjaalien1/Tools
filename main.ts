let Mr_Moving_Dot: game.LedSprite = null
function Move_Dot_Between_LEDs() {
    Mr_Moving_Dot = game.createSprite(0, 2)
    while (true) {
        Mr_Moving_Dot.move(1)
        basic.pause(100)
        Mr_Moving_Dot.move(1)
        basic.pause(100)
        Mr_Moving_Dot.move(1)
        basic.pause(100)
        Mr_Moving_Dot.move(1)
        basic.pause(100)
        Mr_Moving_Dot.move(-1)
        basic.pause(100)
        Mr_Moving_Dot.move(-1)
        basic.pause(100)
        Mr_Moving_Dot.move(-1)
        basic.pause(100)
        Mr_Moving_Dot.move(-1)
        basic.pause(100)
    }
}
function Play_Happy_Birthday() {
    music.beginMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
}
function Play_Notes() {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(294, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(330, music.beat(BeatFraction.Whole))
}
function SadFace() {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . # . .
        . # # # .
        # . . . #
        `)
}
function HappyFace() {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . # . .
        # . . . #
        . # # # .
        `)
}
 