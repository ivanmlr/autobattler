class clsRock{
    constructor(pCtx, pId){

        this.sprite=new clsSprite(pCtx, pId,"imgs/rocks2/", 2, '.png', 20,20, 1 );
        this.id =pId;
        var flw=this.sprite.flw;

        flw.pt.x= GetRandom(800);
        flw.pt.y=GetRandom(600);
        
        flw.spin_velo=GetRandom(0.005)
        
        this.sprite.scale=GetRandom(0.1);;

        flw._velocity=2+ GetRandom(0.5);;
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