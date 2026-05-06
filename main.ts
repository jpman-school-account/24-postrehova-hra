let hraBezi = false
let mince: game.LedSprite = null
input.onButtonPressed(Button.A, function () {
    if (hraBezi) {
        if (mince.get(LedSpriteProperty.X) < 2) {
            game.addScore(1)
        } else {
            game.removeLife(1)
        }
        generujMinci()
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (!(hraBezi)) {
        hraBezi = true
        game.setScore(0)
        game.setLife(3)
        game.startCountdown(20000)
        generujMinci()
    }
})
input.onButtonPressed(Button.AB, function () {
    if (hraBezi) {
        if (mince.get(LedSpriteProperty.X) == 2) {
            game.addScore(1)
        } else {
            game.removeLife(1)
        }
        generujMinci()
    }
})
input.onButtonPressed(Button.B, function () {
    if (hraBezi) {
        if (mince.get(LedSpriteProperty.X) > 2) {
            game.addScore(1)
        } else {
            game.removeLife(1)
        }
        generujMinci()
    }
})
function generujMinci () {
    if (mince) {
        mince.delete()
    }
    mince = game.createSprite(randint(0, 4), randint(0, 4))
}
