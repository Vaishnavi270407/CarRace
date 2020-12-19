var gState = 0, pCount,db,form,player,game,canvas,allPlayers;

function setup(){
    canvas = createCanvas(500,500);
    db=firebase.database();
    
    console.log("setup");
    game = new Game();
    game.getState();
    console.log(gState)
    game.start();

}

function draw(){
    
}
