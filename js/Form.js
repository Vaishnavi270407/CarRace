class Form {
    constructor(){

    }
    diaplay(){
        var title = createElement("h2");
        var button  = createButton("Play");
        var input =  createInput("Name");
        title.position(130,0);
        input.position(130,160);
        button.position(250,200);
        title.html("Car Racing Game");

        button.mousePressed(function(){
            input.hide();
            button.hide();
            pCount++;

            player.updateCount(pCount);
            var name =  input.value();
            player.update(name);
            var greeting = createElement("h3");
            greeting.position(130,160);
            title.html("Hello "+name);
        })

    }

}