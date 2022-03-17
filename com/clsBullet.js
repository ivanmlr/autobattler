class clsBullet{
    constructor(pCtx,posx,posy){
        this.ctx=pCtx
        this.sprite=new clsSprite(this.ctx,null, "imgs/misil/",1, '.png', 0,0);
        this.sprite.scale = 0.02;
        this.sprite.flw.wall=1;
        this.sprite.flw._rotation=this.sprite.flw._rotation;
        this.sprite.flw._velocity=15;
        this.sprite.flw.pt.x=posx;
        this.sprite.flw.pt.y=posy;
        this.fire=[];
        this.bullet=0;
        this.bulletnum = 60;
        this.shot=0;
        //this.sprite.flw.friction=-0.01;
        this.sprite.flw.gravity=0; 
        this.Draw(); 
    }
    ///////////////////////////////////////////////////////////////////////////
    Draw(){
        
        //console.log("Draw clsSpaceShip");
        this.sprite.Draw()
        window.requestAnimationFrame(this.Draw.bind(this));
    }






}