sprites.onCreated(SpriteKind.Projectile, function (sprite) {
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    info.startCountdown(4)
    Strawberry.setPosition(Math.randomRange(10, 160), Math.randomRange(10, 120))
    music.pewPew.playUntilDone()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    Shark.destroy(effects.spray, 500)
    myEnemy.destroy(effects.spray, 500)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
4 4 4 . . 4 4 4 4 4 . . . . . . 
4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
. b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
. b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
. c 4 5 5 5 5 d d d 5 5 5 5 5 b 
. c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
. . c 4 4 d 4 4 4 4 4 d d 5 d c 
. . . c 4 4 4 4 4 4 4 4 5 5 5 4 
. . . . c c b 4 4 4 b b 4 5 4 4 
. . . . . . c c c c c c b b 4 . 
`, Ducky, Math.randomRange(-100, 100), Math.randomRange(-100, 100))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.siren.stop()
    info.changeLifeBy(-1)
})
info.onCountdownEnd(function () {
    game.splash("Swim faster!")
    music.jumpDown.playUntilDone()
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    game.over(false, effects.slash)
})
let projectile2: Sprite = null
let myEnemy: Sprite = null
let Shark: Sprite = null
let Ducky: Sprite = null
let Strawberry: Sprite = null
music.baDing.play()
info.setLife(3)
Strawberry = sprites.create(img`
. . . . . . . 6 . . . . . . . . 
. . . . . . 8 6 6 . . . 6 8 . . 
. . . e e e 8 8 6 6 . 6 7 8 . . 
. . e 2 2 2 2 e 8 6 6 7 6 . . . 
. e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
. e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
e 2 2 2 2 2 2 2 4 e 2 e e c . . 
e e 2 e 2 2 4 2 2 e e e c . . . 
e e e e 2 e 2 2 e e e c . . . . 
e e e 2 e e c e c c c . . . . . 
. c c c c c c c . . . . . . . . 
`, SpriteKind.Food)
scene.setBackgroundColor(9)
Ducky = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . b 5 5 b . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. b b b b b 5 5 5 5 5 5 5 b . . 
. b d 5 b 5 5 5 5 5 5 5 5 b . . 
. . b 5 5 b 5 d 1 f 5 d 4 f . . 
. . b d 5 5 b 1 f f 5 4 4 c . . 
b b d b 5 5 5 d f b 4 4 4 4 b . 
b d d c d 5 5 b 5 4 4 4 4 4 4 b 
c d d d c c b 5 5 5 5 5 5 5 b . 
c b d d d d d 5 5 5 5 5 5 5 b . 
. c d d d d d d 5 5 5 5 5 d b . 
. . c b d d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
`, SpriteKind.Player)
Ducky.setFlag(SpriteFlag.StayInScreen, true)
Shark = sprites.create(img`
. . . . . . . . . . . . . c c f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . c d d b b f . . . . . . . . . . . . . . 
. . . . . . . . . . . c d d b b f . . . . . . . . . . . . . . . 
. . . . . . . . . . f c c b b c f . . . . . . . . . . . . c c c 
. . . . f f f f f f c c c c c c f f . . . . . . . . . c c b b c 
. . f f b b b b b b b b b b b b b c f f f . . . . . c d b b c . 
f f b b b b b b b b b c b c b b b b c c c f f . . c d d b b f . 
f b c b b b b b f f b b c b c b b b c c c c c f f f d b b f . . 
f b b b 1 1 1 1 f f 1 b c b c b b b c c c c c c c b b b c f . . 
. f b 1 1 1 1 1 1 1 1 b b b b b b c c c c c c c c c b c c f . . 
. . f c c c 3 3 c c 1 1 b b b b c c c c c c c c f f f b b c f . 
. . . f c 1 3 1 c 1 1 1 b b b c c c c c b d b c . . . f b b f . 
. . . . f 3 3 c 1 1 1 c b b b f d d d d d c c . . . . . f b b f 
. . . . . f f 1 1 1 1 f b d b b f d d c c . . . . . . . . f f f 
. . . . . . . c c c c c f b d b b f c . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
Shark.setVelocity(30, 30)
Shark.setPosition(Math.randomRange(10, 160), Math.randomRange(10, 20))
Shark.follow(Ducky, 10)
controller.moveSprite(Ducky)
game.onUpdateInterval(5000, function () {
    myEnemy = sprites.create(img`
. . . . . . . . . . . . . c c f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . c d d b b f . . . . . . . . . . . . . . 
. . . . . . . . . . . c d d b b f . . . . . . . . . . . . . . . 
. . . . . . . . . . f c c b b c f . . . . . . . . . . . . c c c 
. . . . f f f f f f c c c c c c f f . . . . . . . . . c c b b c 
. . f f b b b b b b b b b b b b b c f f f . . . . . c d b b c . 
f f b b b b b b b b b c b c b b b b c c c f f . . c d d b b f . 
f b c b b b b b f f b b c b c b b b c c c c c f f f d b b f . . 
f b b b 1 1 1 1 f f 1 b c b c b b b c c c c c c c b b b c f . . 
. f b 1 1 1 1 1 1 1 1 b b b b b b c c c c c c c c c b c c f . . 
. . f c c c 3 3 c c 1 1 b b b b c c c c c c c c f f f b b c f . 
. . . f c 1 3 1 c 1 1 1 b b b c c c c c b d b c . . . f b b f . 
. . . . f 3 3 c 1 1 1 c b b b f d d d d d c c . . . . . f b b f 
. . . . . f f 1 1 1 1 f b d b b f d d c c . . . . . . . . f f f 
. . . . . . . c c c c c f b d b b f c . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    myEnemy.setPosition(10, 10)
    myEnemy.follow(Ducky, 10)
})
