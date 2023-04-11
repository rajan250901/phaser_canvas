const myCustomCanvas = document.createElement('canvas');
myCustomCanvas.id = 'myCustomCanvas';
document.body.appendChild(myCustomCanvas);

const config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: window.innerWidth,
    height: window.innerHeight,
    canvas: document.getElementById('myCustomCanvas'),
    scene: {
        preload: preload,
        create: create,
        update:update
    }
};

const game = new Phaser.Game(config);

function preload ()
{
    this.load.image('pic', 'images/scenery.jpeg');
}

function create ()
{
    this.add.image(400, 300, 'pic');
}
function update(){

}
