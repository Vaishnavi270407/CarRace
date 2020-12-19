class Form {
    constructor(){
        this.title = createElement("h2");
        this.button  = createButton("Play");
        this.input =  createInput("Name");
        this.greeting = createElement("h3");
    }
    display(){
        
        this.title.position(130,0);
        this.input.position(130,160);
        this.button.position(250,200);
        this.title.html("Car Racing Game");

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            pCount++;
            player.index = pCount;

            player.updateCount(pCount);
            player.name =  this.input.value();
            player.update();
            
            this.greeting.position(130,160);
            this.greeting.html("Hello "+player.name);
        })

    }

}
