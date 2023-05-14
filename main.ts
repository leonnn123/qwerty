input.onButtonPressed(Button.A, function () {
    basic.showString("mario")
    for (let index = 0; index < 80; index++) {
        music.playMelody("D G D F D E D C ", 639)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("luigi")
    for (let index = 0; index < 80; index++) {
        music.playMelody("D G D F D A D C ", 639)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("Mario or Luigi")
})
basic.forever(function () {
	
})
