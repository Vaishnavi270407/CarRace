class Player{
    constructor(){
        
    }
    getCount(){
        db.ref("playerCount").on("value",function (data){
            pCount = data.val();
        })
    }

    updateCount(count){
        db.ref("/").update({
            playerCount:count
        })
    }
    update(name){
        var playerIndex = "player"+pCount;
        db.ref(playerIndex).set({
            name:name
        })

    }
}