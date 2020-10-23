class Game {
    constructor(){


    }
    getState(){
    var gameStateRef = database.ref("gameState")
    gameStateRef.on("value",function(data){
        gameState=data.val();
        }
    )
    }
    update(State){
    database.ref("/").update({
        gameState:State
    })    
    }
    async start(){
        if(gameState===0){
            player=new Player()
            var playerCountref = await database.ref("playerCount").once("value");
            if(playerCountref.exists()){
                playerCount=playerCountref.val()
                player.getCount()
            }
            form = new Form()
            form.display()
            car1 = createSprite(100,200)
            car2 = createSprite(300,200)
            car3 = createSprite(500,200)
            car4 = createSprite(700,200)
            cars= [car1,car2,car3,car4]
        }
    }
    play(){
    form.hide();
    Player. getPlayerInfo();
    if(allPlayers!==undefined){
        var index = 0 ;
        var x = 0 
        var y = y ;
        var displayposition = 300
        for(var plr in allPlayers){
            y = displayHeight - allPlayers[plr].distance
            x = x+200;
            cars[index].x = x ;
            cars[index].y = y ;
            if(plr==="player"+player.index)
            {fill(255,0,0)}
            else
            {fill(0,0,255)}
    text(allPlayers[plr].name+":"+allPlayers[plr].distance,400,displayposition)
    displayposition += 40
    index = index + 1
            }

 drawSprites();
    }
    if(keyDown("UP_ARROW")){
    player.distance = player.distance + 50 ;
    player.update();
    }
 console.log(allPlayers);
    }
}