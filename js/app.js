// Enemies our player must avoid
var Enemy = function(locationX, locationY, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = locationX;
    this.y = locationY;
    this.speed = speed;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + (this.speed * dt);
    if(this.x > 505) // canvas width
    {
        this.x = -101;
    }
    
    //console.log('called');
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(locationX, locationY){
    this.x = locationX;
    this.y = locationY;
    
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(){
    if(this.y < 20)
    {
        this.resetPlayer();
    }
};

Player.prototype.resetPlayer = function(){
    this.x = 200;
    this.y = 405;
};

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(allowedKey){
    switch(allowedKey)
    {
        case 'left':
            this.x = this.x - 101;
            if(this.x < -100)
            {
                this.x = this.x + 101;
            }
            break;
        case 'right':
            this.x = this.x + 101;
            if(this.x > 450)
            {
                this.x = this.x - 101;
            }
            break;
        case 'up':
            this.y = this.y - 83;
            if(this.y < -20)
            {
                this.y = this.y + 83;
            }
            break;
        case 'down':
            this.y = this.y + 83;
            if(this.y > 450)
            {
                this.y = this.y - 83;
            }
            break;
        default:
            break;
    }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [
    new Enemy(Math.floor(Math.random() * 505),62,60),
    new Enemy(Math.floor(Math.random() * 505),145,120),
    new Enemy(Math.floor(Math.random() * 505),228,240)
];

var player = new Player(200,405);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
