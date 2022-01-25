class clsBackground{
    constructor(pCtx, pId){
        //this.imageBACKG = new clsImage('imgs/background/1.png', this.ctx, 1,null,null,1.3);

        this.sprite=new clsSprite(pCtx, pId,"imgs/background/", 1, '.png', 20,20, 1 );
        this.id =pId;
        var flw=this.sprite.flw;

        flw.pt.x= GetRandom(800);
        flw.pt.y=GetRandom(600);
        
        flw.spin_velo=GetRandom(0.001)
        
        this.sprite.scale=1.5;;

        flw._velocity= GetRandom(0.1);;
        flw._rotation=GetRandom(360);;
        //
        flw.friction=0//-0.001;
    }
    /////////////////////////////////////////////////////////////
    configureFollower(){

    }
    /////////////////////////////////////////////////////////////
    Draw(){
        //console.log("Draw clsRock");
        //this.sprite.flw._rotation=this.sprite.flw._rotation+0.01
        //this.sprite.flw.rotateRight()
        this.sprite.Draw()
    }
}