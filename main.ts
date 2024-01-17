let cc = 0
music.setVolume(255)
basic.forever(function () {
    led.plot(randint(0, 4), randint(0, 4))
    music.ringTone(randint(131, 988))
    cc += 1
    basic.pause(1000)
    basic.clearScreen()
    music.stopAllSounds()
})
