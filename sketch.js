const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world,database;
var player,bg_img2,player_animation,bg_img,bg_img3;
var level1_img,level2_img,level3_img,level4_img,level5_img,level6_img,
    level7_img,leve8l_img,level9_img,level10_img,lockedLevel_img,end_level_img,
    level_1,level_2,level_3,level_4,level_5,level_6,level_7,level_8,level_9,level_10,level_locked,end_level
var gameState = 0;
var x = -500
var grassBlock,grassSlab,grassSlope,block,ore1,ore2,ore3,box,
    grassBlock_img,grassSlab_img,grassSlope_img,block_img,ore1_img,ore2_img,ore3_img,box_img;
var game;
var playButton;
var displayWidth, displayHeight;

function preload(){

    player_animation = loadAnimation("img/PC1.png","img/PC2.png","img/PC3.png","img/PC4.png",
                                        "img/PC5.png","img/PC6.png","img/PC7.png","img/PC8.png");
    bg_img = loadImage("img/mainmenu1.png");
    bg_img2 = loadImage("img/selectbg.png");
    bg_img3 = loadImage("img/bg.png");
    level1_img = loadImage("img/level1.png");
    level2_img = loadImage("img/level2.png");
    level3_img = loadImage("img/level3.png");
    level4_img = loadImage("img/level4.png");
    level5_img = loadImage("img/level5.png");
    level6_img = loadImage("img/level6.png");
    level7_img = loadImage("img/level7.png");
    level8_img = loadImage("img/level8.png");
    level9_img = loadImage("img/level9.png");
    level10_img = loadImage("img/level10.png");
    lockedLevel_img = loadImage("img/lockedlevel.png");
    end_level_img = loadImage("img/endlevel.png");
    grassBlock_img = loadImage("img/grassblock.png");
    grassSlab_img = loadImage("img/grassSlab.png");
    grassSlope_img = loadImage("img/grassSlope.png");
    block_img = loadImage("img/block.png");
    ore1_img = loadImage("img/ore1.png");
    ore2_img = loadImage("img/ore2.png");
    ore3_img = loadImage("img/ore3.png");
    box_img = loadImage("img/box.png");

}

function setup(){

    createCanvas(displayWidth,displayHeight);

    // database = firebase.database();
    engine = Engine.create();
    world = engine.world;

    game = new Game();
    player = new Player(displayWidth/2-600,displayHeight/2+200,100,100)

    playButton = createSprite(displayWidth/2+3,displayHeight/2+275,150,130);
    playButton.visible = false;

    grassBlock = createSprite(displayWidth/2-650,displayHeight/2+290);
    grassBlock.addImage(grassBlock_img);
    grassBlock.scale = 0.40;
    
    if (gameState === 0){
        game.start();
    }


    

}

function draw(){

    Engine.update(engine);
    if (mousePressedOver(playButton)){
        gameState = 1;
    }
    if (gameState === 1){
        background(bg_img2);
        drawSprites();
        if (mousePressedOver(level_1)){
            gameState = 2;
            hide();    
        }
    }
    if (gameState === 2){
       background(bg_img3)
        
        drawSprites();
        player.display();
        // console.log(grassBlock.x);
        // for(; x < 1000; x+=30){
        //     grassBlock.position.x = x;
        //     drawSprites();
        //     console.log(grassBlock.x);
        // }    
        // console.log(grassBlock.position.x);
        // player.display();
      //  gameState = 3;
    //   if(grassBlock.x < 900){
    //     grassBlock.velocityX = 41
    // }else{
    //     grassBlock.velocityX = 0;
    // }
    //console.log(grassBlock.x)    
    }
    

}
function hide(){
    level_1.remove();
    level_2.remove();
    level_3.remove();
    level_4.remove();
    level_5.remove();
    level_6.remove(); 
    level_7.remove(); 
    level_8.remove();
    level_9.remove(); 
    level_10.remove(); 
    level_locked.remove();
    console.log("hided")
}