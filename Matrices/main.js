const makematrix=function(rows,colums){
let matrix=[]
let count=1
for (let i=0;i<rows;i++){
    matrix.push([])
    for(let x=0;x<colums;x++){
        matrix[i].push([count++])
    }
}
return matrix
}

const matrix= makematrix(3,4)
/*
for (let x in matrix){
    for (let y of matrix[x])
    console.log(y)
}
*/

const get=function(rownum,colnum){
    return matrix[rownum][colnum]
}

//console.log(get(1, 2))

const print =function(matrix){
    
    for(let y=0;y<matrix.length;y++){
        let line=''
        for (let x=0;x<matrix[y].length;x++){
            line+=(matrix[y][x]+'\t')
        }
        console.log(line)
    }
}

//print(matrix)

const printRow=function(rownum){
    let line=''
        for(let x=0;x<matrix[rownum].length;x++){
            line+=(matrix[rownum][x]+'\t')
            
        }
        console.log(line)
}

//printRow(1)


const alter=function(x,y,z){
     matrix[x][y]=z
     console.log(matrix)
}

//alter(1, 3, 174)



class Matrix{
    constructor(x,y){
        this.matrix=this.makematrix(x,y)
    }
    makematrix(rows,colums){
        let matrix=[]
        let count=1
        for (let i=0;i<rows;i++){
            matrix.push([])
            for(let x=0;x<colums;x++){
                matrix[i].push([count++])
            }
        }
        return matrix
        }
        alter(y,x,z){
            this.matrix[y][x]=z
            //console.log(this.matrix)
       }
       printRow(rownum){
        let line=''
            for(let x=0;x<this.matrix[rownum].length;x++){
                line+=(this.matrix[rownum][x]+'\t')
                
            }
            console.log(line)
    }
    printColumn(colnum){
        let line=''
        for (let x=0;x<this.matrix.length;x++){
                line+=(this.matrix[x][colnum]+'\t')
        }
        console.log(line)
    }
    print(){
        for(let y=0;y<this.matrix.length;y++){
            let line=''
            for (let x=0;x<this.matrix[y].length;x++){
                line+=(this.matrix[y][x]+'\t')
            }
            console.log(line)
        }
    }
    get(rownum,colnum){
        return this.matrix[rownum][colnum]
    }
    findCoordinate(value){
        for (let y=0;y<this.matrix.length;y++){
            for(let x=0;x<this.matrix[y].length;x++){
                if(this.matrix[y][x][0]===value){
                  return  {'x':x,'y':y}
                }
            }
        }
    }
}


//let m = new Matrix(3, 4)
//m.print()

//m.alter(0, 0, m.get(1, 1))
//m.printColumn(0) //prints 6, 5, 9 (separate lines)
//m.printRow(0) //prints 6, 2, 3, 4 (separate lines)

//console.log(m.findCoordinate(12)) //prints {x: 3, y: 2}
//console.log(m.findCoordinate(7)) //prints {x: 2, y: 1}


class EmployeeMatrix extends Matrix{
    constructor(){
        super()
    }
    loadData(salaryData){
        const newmatrix= this.makematrix(salaryData.length,4)
        this.matrix=newmatrix
        for(let y=0;y<this.matrix.length;y++){
            this.alter(y,0,salaryData[y]._id)
            this.alter(y,1,salaryData[y].name)
            this.alter(y,2,salaryData[y].department)
            this.alter(y,3,salaryData[y].salary)
        }
    }
    getEmployees(department){
        let arr=[]
        for(let y=0;y<this.matrix.length;y++){
            if(department===this.matrix[y][2]){
                arr.push(this.matrix[y][1])
            }
        }
        return arr
    }
    getTotalSalary(department){
        let sum=0
        for(let y=0;y<this.matrix.length;y++){
            if(department===this.matrix[y][2]){
                sum+= this.matrix[y][3]
            }
        }
        return sum
    }
    findRichest(){
        let salary=[]
        for(let y=0;y<this.matrix.length;y++){
            if(salary[salary.length-1]===undefined){
                salary.push({name:this.matrix[y][1],salary:this.matrix[y][3]})
            }else if(this.matrix[y][3]>salary[salary.length-1].salary){
                salary.push({name:this.matrix[y][1],salary:this.matrix[y][3]})
            }
        }
        
        return salary[salary.length-1].name
    }
}

let data = [
    { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
    { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
    { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
    { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
    { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
    { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 }
]

let m = new EmployeeMatrix()

m.loadData(data)
//m.print()

//console.log(m.getEmployees("Finance")) //prints [ 'Gillian', 'Anisha' ]
//console.log(m.getEmployees("Design")) //prints [ 'Tibor', 'Jakub', 'Mar', 'Nisha' ]

//console.log(m.getTotalSalary("Finance")) //prints 4300
//console.log(m.getTotalSalary("Design")) //prints 5300

//console.log(m.findRichest()) //prints Anisha

/* TicTacToe GAME! */

class TicTacToe extends Matrix{
    constructor(){
        super()
        this.playerconter=[]
    }
    loadBoard(){
        const newmatrix= this.makematrix(3,3)
        this.matrix=newmatrix
       for (let y=0;y<this.matrix.length;y++){
           for (let x=0;x<this.matrix[y].length;x++){
               this.alter(y,x,'.')
           }
       }
       this.matrix=newmatrix
    }
    play(rowNum,columnNum,player){
        let victory=false
        if(this.playerconter[this.playerconter.length-1]===player){
            console.log(`${player} wait for your turn`)
        }else{
        if(player===1){
            if(this.get(rowNum,columnNum)==='.'){
            this.alter(rowNum,columnNum,'x')
            }else {console.log('sry m8 already taken')}
        }else{ if(this.get(rowNum,columnNum)==='.'){
            this.alter(rowNum,columnNum,'o')
        }else{console.log('sry m8 already taken')}
        }
    
    
            if(this.matrix[rowNum].every(v=> v===this.matrix[rowNum][0])){
                console.log(`Congratulations Player ${player}`)
                victory=true
            }
            
        
        let a=[]
        
        for( let y=0 ; y<this.matrix.length; y++){
            a.push(this.matrix[y][columnNum])
        }
        if(a.every(v=>v===a[0])){
            console.log(`Congratulations Player ${player}`)
            victory=true
        }
        
        
        let cross=[[this.matrix[0][0],this.matrix[1][1],this.matrix[2][2]],[this.matrix[0][2],this.matrix[1][1],this.matrix[2][0]]]
        if(cross[0].every(v=>v===this.get(rowNum,columnNum))){
            console.log(`Congratulations Player ${player}`)
            victory=true
        }
        if(cross[1].every(v=>v===this.get(rowNum,columnNum))){
            console.log(`Congratulations Player ${player}`)
            victory=true
        }
    }
    this.playerconter.push(player)
    if(victory){
        this.loadBoard()
    }
    }
}

let board = new TicTacToe()
board.loadBoard()
//board.play(2, 2, 1)
//board.play(0, 0, 2)

//board.print()

board.play(0, 2, 1)
board.play(0, 0, 0)
board.play(1, 2, 1)
board.play(1, 0, 0)
board.play(2, 2, 1) //prints Congratulations Player 1

board.print()