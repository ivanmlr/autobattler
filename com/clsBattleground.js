class clsBattleground{
    constructor(){
        this.rows=3;
        this.col=3;
        this.cell_num=this.col*this.rows;

        this.cells=[];
        this.InitBground();
        
    }

    InitBground(){
        for (var i =0;i<this.cell_num;i++){
            var tR = new clsCell(i);
            this.cells.push(tR);
        }
    }
}