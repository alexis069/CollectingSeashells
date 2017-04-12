var demo = {}; 
var speed = 6; 
var adam;

//create variable cursors
var cursors;

demo.state0 = function () {};


demo.state0.prototype = {
	preload: function(){
		game.load.image('clouds', 'assets/sunsetTrees.png'); //this is where we load the BG image
		game.load.spritesheet('mason', 'assets/masonwalkingpiskel.png', 240, 370);

	},

	create: function(){
    game.world.setBounds(0,0, 2813,1000);
      //add physics to game
        game.physics.startSystem(Phaser.Physics.ARCADE);
		
       var cloud = game.add.sprite(0, 0, 'clouds');//this is where we add the image
	mason = game.add.sprite(0, 450, 'mason');
 	
       game.physics.enable(mason);
        
 //     adding gravity to adam
        mason.body.gravity.y = 600;

        
        mason.body.collideWorldBounds = true;
        
        mason.scale.setTo(0.7, 0.7);
        
        mason.animations.add('walk', [0,1,2,3,4,5,6]);
        
       // creating cursor keys: lets you press buttons for your avatar to move
        cursors = game.input.keyboard.createCursorKeys();


	},

	update: function(){
        
//   updated these if statements
        if (cursors.right.isDown){
//  changed how he moves to use physics
             mason.body.velocity.x = 150;

        mason.animations.play('walk');
		}
        else if(cursors.left.isDown){
            //  Move to the left
        mason.body.velocity.x = -150;

        mason.animations.play('walk');
        }
        //else{
            mason.body.velocity.x = 0;
            //  Stand still
            mason.animations.stop();
            
// select which frame to use when I am not moving
            mason.frame = 0;
        //}
        if(cursors.down.isDown){
        mason.body.velocity.y = 200;
        }
        
//  Lets adam jump at a specific speed
        if (cursors.up.isDown){
        adam.body.velocity.y = 200;
        }
	}

};