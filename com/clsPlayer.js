class clsPlayer{
    constructor(pCtx){
        this.ctx=pCtx
        this.sprite=new clsSprite(pCtx, 'AR',"imgs/pj/",1, '.png', 50,30,0.1); 
        this.sprite.flw.pt.x=100;
        this.sprite.flw.pt.y=300;
        this.sprite.flw.xfloor=149;
        this.sprite.scale = 0.2;
        this.sprite.flw.friction =-0.2;
        this.bullets=[];
        this.shot=0;
        
        //this.sprite.flw.friction=-0.01;
        this.sprite.flw.gravity=0; 
    }

    ///////////////////////////////////////////////////////////////////////////

    Fire(){
        
        if(this.bullets.length >30){

           var a=this.bullets.shift();
           a=null;
           
        }
        var tR = new clsBullet(this.ctx,this.sprite.flw.pt.x+30,this.sprite.flw.pt.y-18);
        this.bullets.push(tR);
    }
    
    ///////////////////////////////////////////////////////////////////////////

    HasACollision(){
        this.sprite.GoToAndStop(2);
    }
    ///////////////////////////////////////////////////////////////////////////
    Draw(){
        
        //console.log("Draw clsSpaceShip");
        /*var i=0;
        while(i<this.bullets.length){
            this.bullets[i].Draw()
            i++;
        }*/
        this.sprite.Draw()
    }
}