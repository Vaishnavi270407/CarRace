class Game {
    constructor(){

    }
    getState(){
        console.log("get")
        db.ref("/").on("value",function (data){
            gState = data.val();
        })
        
    }
    updateState(state){
        db.ref("/").update({
            gameState:state
        })
    }
    start(){
        console.log("start",gState)
        if(gState == 0){
            player = new Player();
            form = new Form();
            form.display();
            player.getCount();
        }

    }
}

