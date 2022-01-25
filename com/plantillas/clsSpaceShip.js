class clsSpaceShip{
    constructor(pCtx){
        this.ctx=pCtx
        this.sprite=new clsSprite(pCtx, 'nave',"imgs/spaceship2/",2, '.png', 50,30,0.1); 
        this.sprite.flw.pt.x=400;
        this.sprite.flw.pt.y=300;
        this.fire=null
        this.sprite.flw.friction=-0.01;
        this.sprite.flw.yfloor=550;

        this.sprite.flw.gravity=1;
    }

    Fire(){
        console.log("Fire________________");
        this.fire=new clsSprite(this.ctx,null, "imgs/misil/",1, '.png', 0,0);

        this.fire.flw._rotation=this.sprite.flw._rotation;
        this.fire.flw._velocity=3+this.sprite.flw._velocity;
        this.fire.flw.pt.x=this.sprite.flw.pt.x;
        this.fire.flw.pt.y=this.sprite.flw.pt.y;
    }

    HasACollision(){
        this.sprite.GoToAndStop(2);
    }
    ///////////////////////////////////////////////////////////////////////////
    Draw(){
        
        //console.log("Draw clsSpaceShip");
        if (this.fire && this.fire !== 'null' && this.fire !=='undefined'){
            this.fire.Draw()
        };
        this.sprite.Draw()
    }
}