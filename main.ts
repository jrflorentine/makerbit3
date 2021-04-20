makerbit.setLedPins(makerbit.level(PinLevel.Low))
led.enable(false)
let frequency = [0, 1, 2, 3, 4, 247, 262, 294, 330, 349, 392, 440, 494, 523, 587, 659, 698]
basic.forever(function () {
    loops.forLoop(5, 16, function (index) {
        if (makerbit.isTouched(index)) {
            makerbit.setDigitalPin(index, makerbit.level(PinLevel.High))
            makerbit.showStringOnLcd1602("" + (frequency[index]), makerbit.position1602(LcdPosition1602.Pos1), 3)
            music.playTone(frequency[index], music.beat(BeatFraction.Half))
            makerbit.setDigitalPin(index, makerbit.level(PinLevel.Low))
        } else {
            makerbit.setDigitalPin(index, makerbit.level(PinLevel.Low))
        }
    })
})
