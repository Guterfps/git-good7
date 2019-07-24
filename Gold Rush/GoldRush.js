//const Matrix=require('./Matrix')

class goldrush extends Matrix{
    constructor(x,y){
        super(x,y)
        this.players=[{'y':0,'x':0 ,'score':0},{'y':this.matrix.length-1,'x':this.matrix[0].length-1 ,'score':0}]

    }
    loud(){
        this.alter(this.players[0].y, this.players[0].x,1)
        this.alter(this.players[1].y, this.players[1].x,2)
        this.print()
    }
    
    movePlayer(player,direction){
        let z=1
        if(player===1){z=2}
        this.alter(this.players[player-1].y, this.players[player-1].x,'.')
        if(direction==='down'){
            if(this.players[player-1].y+1<this.matrix.length){
                if(this.matrix[this.players[player-1].y+1][this.players[player-1].x]!=='x'){
                if(this.matrix[this.players[player-1].y+1][this.players[player-1].x]!==z){
            this.players[player-1].y++
            if(this.matrix[this.players[player-1].y][this.players[player-1].x]==='c'){
                this.players[player-1].score+=10
            }
            }
        }
        }
            this.alter(this.players[player-1].y, this.players[player-1].x,player)
        }
        if(direction==='left'){
            if(this.players[player-1].x-1>=0 ){
                if(this.matrix[this.players[player-1].y][this.players[player-1].x-1]!=='x'){
                if(this.matrix[this.players[player-1].y][this.players[player-1].x-1]!==z){
                this.players[player-1].x--
                if(this.matrix[this.players[player-1].y][this.players[player-1].x]==='c'){
                    this.players[player-1].score+=10
                }
                }
            }
            }
            this.alter(this.players[player-1].y, this.players[player-1].x,player)
        }
        if(direction==='up'){
            if(this.players[player-1].y-1>=0 ){
                if(this.matrix[this.players[player-1].y-1][this.players[player-1].x]!=='x'){
                if(this.matrix[this.players[player-1].y-1][this.players[player-1].x]!==z){
                this.players[player-1].y--
                if(this.matrix[this.players[player-1].y][this.players[player-1].x]==='c'){
                    this.players[player-1].score+=10
                }
                }
            }
            }
            this.alter(this.players[player-1].y, this.players[player-1].x,player)
        }
        if(direction==='right'){
            if(this.players[player-1].x+1<this.matrix[0].length ){
                if(this.matrix[this.players[player-1].y][this.players[player-1].x+1]!=='x'){
                if(this.matrix[this.players[player-1].y][this.players[player-1].x+1]!==z){
                this.players[player-1].x++
                if(this.matrix[this.players[player-1].y][this.players[player-1].x]==='c'){
                    this.players[player-1].score+=10
                }
                }
            }
            }
            this.alter(this.players[player-1].y, this.players[player-1].x,player)
        }
    }
   
}
/*
let board=new goldrush(5,5)
console.log(board.players[0].score)

board.loud()
board.movePlayer(1, "s")
console.log(board.players[0].score) //prints 0
board.print()
board.movePlayer(1, "s")
console.log(board.players[0].score) //prints 0
board.print()
board.movePlayer(1, "s")
console.log(board.players[0].score) //prints 10
board.print()*/


