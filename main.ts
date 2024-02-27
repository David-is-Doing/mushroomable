namespace SpriteKind {
    export const Gui = SpriteKind.create()
}
function setDisplay () {
    anger.setImage(blueLights[petBrain[0]])
}
let petBrain: number[] = []
let blueLights: Image[] = []
let anger: Sprite = null
scene.setBackgroundImage(assets.image`LIGHIT`)
anger = sprites.create(assets.image`ZERO`, SpriteKind.Gui)
blueLights = [
assets.image`ZERO`,
assets.image`BLUEONE`,
assets.image`BLUETWO`,
assets.image`BLUETHRE`,
assets.image`BLUEFOUR`,
assets.image`BLUEFIVE`,
assets.image`BLUESIX`,
assets.image`BLUESEVE`,
assets.image`BLUEEIGH`,
assets.image`BLUENINE`,
assets.image`BLUETEN`,
assets.image`BLUEELEV`,
assets.image`BLUETWEL`,
assets.image`BLUETHIR`,
assets.image`BLUEFRTN`,
assets.image`BLUEFIFT`,
assets.image`BLUESIXT`,
assets.image`BLUESVTN`,
assets.image`BLUEEGTN`,
assets.image`BLUENITN`,
assets.image`BLUETWEN`
]
let myPet = sprites.create(assets.image`BODY`, SpriteKind.Player)
myPet.setPosition(40, 60)
petBrain = [
0,
0,
0,
0,
0,
0,
0,
0,
0,
0
]
music.play(music.createSong(assets.song`BOOTUP`), music.PlaybackMode.UntilDone)
