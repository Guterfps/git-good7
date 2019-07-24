class Renderer{
    constructor(){

    }
    renderBoard(board){
        $('#board').empty()
        const source = $("#template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({board: board})
        
        $('#board').append(newHTML)

    }
    renderScores(player){
        $('#score').empty()
        const source = $("#template1").html()
        const template = Handlebars.compile(source)
        const newHTML = template({player:player})
        
        $('#score').append(newHTML)
    }
}