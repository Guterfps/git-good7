const r=new Renderer()
//const game=new goldrush(5,5)
//game.loud()

//r.renderBoard(game.matrix)
//r.renderScores(game.players)
let game
$('body').on('click','button',function(){
    let y=$(this).siblings('#y').val()
    let x=$(this).siblings('#x').val()
    $('#board').css(`width`,`${y*100}`)
    $('#board').css(`height`,`${x*100}`)
    $('#board').css(`grid-template`,` repeat(${x}, 1fr) / repeat(${y}, 1fr)`)
     game=new goldrush(y,x)
     game.loud()
    r.renderBoard(game.matrix)
    r.renderScores(game.players)
    let boxs=$('.box')
    for (let b of boxs){
        if (b.innerHTML==='x'){
           $(b).css('color','red')
        }
        if (b.innerHTML==='c'){
            $(b).css('color','yellow')
         }
    }
})


$(document).keypress(function (e) {

    if (e.which == 97) {
          game.movePlayer(1, "up")
         
    }
    if (e.which == 100) {
        game.movePlayer(1, "down")
       
  }
  if (e.which == 119) {
    game.movePlayer(1, "left")
   
}
if (e.which == 115) {
    game.movePlayer(1, "right")
   
}
if (e.which == 107) {
    game.movePlayer(2, "right")
   
}
if (e.which == 105) {
    game.movePlayer(2, "left")
   
}
if (e.which == 106) {
    game.movePlayer(2, "up")
   
}
if (e.which == 108) {
    game.movePlayer(2, "down")
   
}
  r.renderBoard(game.matrix)
r.renderScores(game.players)
let boxs=$('.box')
for (let b of boxs){
    if (b.innerHTML==='x'){
       $(b).css('color','red')
    }
    if (b.innerHTML==='c'){
        $(b).css('color','yellow')
     }
}
if(game.victory!==false){
    $('#score').append(`<h1>${game.victory}</h1>`)
}

})


