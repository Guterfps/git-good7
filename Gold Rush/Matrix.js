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
                matrix[i].push('.')
            }
        }
        for (let i=0;i<=matrix.length*matrix[0].length;i++){
            let coinx= Math.floor(Math.random()*matrix[0].length)
            let coiny=Math.floor(Math.random()*matrix.length)
            matrix[coiny][coinx]='c'
            }
            for (let i=0;i<=matrix.length*matrix[0].length;i++){
                let obsx= Math.floor(Math.random()*matrix[0].length)
                let obsy=Math.floor(Math.random()*matrix.length)
                if(matrix[obsy][obsx]!=='c'){
                matrix[obsy][obsx]='x'
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

//module.exports=Matrix