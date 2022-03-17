class clsDemon{
    constructor(pCtx,posx=1000,posy=200,type=0){
        this.ctx=pCtx

        this.sprite=new clsSprite(this.ctx,null, "imgs/demons/dog/",8, '.png', 0,0);
        this.sprite.scale = 0.6;
        this.sprite.flw.reverse = 1;
        this.sprite.flw.wall=1;
        this.sprite.flw._rotation=0;
        this.sprite.flw._velocity=2;
        this.sprite.flw.pt.x=1000;
        this.sprite.flw.pt.y=posy;
        this.sprite.delay=5;
        this.type=type;

        //this.sprite.flw.friction=-0.01;

        this.sprite.flw.gravity=0; 
    }
    ///////////////////////////////////////////////////////////////////////////
    Draw(){
        
        //console.log("Draw clsSpaceShip");
       
        this.sprite.Draw();
        


        
    }
}
