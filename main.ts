makerbit.setLedPins(makerbit.level(PinLevel.Low))
led.enable(false)
let frequency = [247, 262, 294, 330, 349, 392, 440, 494, 523, 587]
basic.forever(function () {
    loops.forLoop(5, 16, function (index) {
        if (makerbit.isTouched(index)) {
            makerbit.setDigitalPin(index, makerbit.level(PinLevel.High))
        } else {
            makerbit.setDigitalPin(index, makerbit.level(PinLevel.Low))
        }
    })
})
