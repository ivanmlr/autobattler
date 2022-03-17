
class clsFire{
    constructor(pCtx,posx=980,posy=200,type=0){
        this.ctx=pCtx
        if(type == 1){
            this.sprite=new clsSprite(this.ctx,null, "imgs/fire/",5, '.png', 0,0);
        }
        if(type == 0){
            this.sprite=new clsSprite(this.ctx,null, "imgs/fire/fire2/",61, '.png', 0,0);
        }


        this.sprite.scale = 0.3;
        this.sprite.flw.wall=1;
        this.sprite.flw._rotation=0;
        this.sprite.flw._velocity=0;
        this.sprite.flw.pt.x=790;
        this.sprite.flw.pt.y=-10;
        this.sprite.delay=5;
        //this.sprite.flw.friction=-0.01; 
        this.sprite.flw.gravity=0; 
    }



    createSprite(){

        //this.sprite=new clsSprite(this.ctx,null, "imgs/fire/fire2/",61, '.png', 0,0);

    }
    ///////////////////////////////////////////////////////////////////////////
    Draw(){
        
        //console.log("Draw clsSpaceShip");
        this.sprite.Draw();


        
    }






}


class clsHoguera extends clsFire{
    constructor(pCtx,posx,posy,type){
        super(pCtx,posx,posy,type);

        this.sprite.flw.pt.x=posx;
        this.sprite.flw.pt.y=posy;
        this.sprite.delay=12;
    }

}