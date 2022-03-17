class clsAutoBattler {
    constructor(pWin, pDoc) {
        /*console.log('__clsAsteroirdGame_______________');
        this.Doc = pDoc;
        this.win = pWin;
        this.roza=-0.03;
        this.maxvelo=2;
        //this.pretime=0;
        this.canvas=this.Doc.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');


        this.rocks=[];
        this.rocknum=3; // configuración
        // ereasethis.rock= new clsRock(this.ctx)
        //this.imageNAVE = new clsImage('imgs/spaceship.png', this.ctx, 1);
        this.imageBACKG0;
        this.imageBACKG1;
        this.imageBACKG2;
        this.CreateBackground();

        this.player1=  new clsSpaceShip(this.ctx);//new clsSprite(this.ctx,"imgs/spaceship/",1, '.png');
        //this.player1.sprite.ignoreimagerotation=1;
        
        this.INTERACT= new clsInteract(this);
   
        this.CreateSprites();
        this.CreateEvents();
        this._loop();*/

        this.Doc = pDoc;
        this.canvas=this.Doc.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.CreateBackground();
        this.battleground = new clsBattleground;
        this.player1 = new clsPlayer(this.ctx);
        this.fire = [];
        this.fire2 = new clsFire(this.ctx,this.posfirex,this.posfirey,0);
        this.firenum = 10;
        this.dognum = 4;
        this.demondog = [] 
        //this.player1=  new clsSpaceShip(this.ctx);//new clsSprite(this.ctx,"imgs/spaceship/",1, '.png');
        //this.player1.sprite.ignoreimagerotation=1;
        this.currframe=0;
        this.posfirey=0;
        this.posfirex=0;
        this.firing=false;
        this.firingmode=1;
        this.INTERACT= new clsInteract(this);
        this.CreateSprites();
        this.CreateEvents();
        this._loop();

    }

    //////////////////////////////////////////////////////////////////////////

    CreateEvents(){
        this.Doc.addEventListener('__KEYPRESS_CUSTOM', this._InteractionCallBack.bind(this));
        this.Doc.addEventListener('__KEYUP_CUSTOM', this._Firing.bind(this));

    }
/////////////////////////////////////////////////////////////////////////////
    CreateBackground(){
        this.imageBACKG0 = new clsImage('imgs/background/bk1bien.png', this.ctx, 1,null,null,1.3);
    }
    ////////////////////////////////////////////////////////////////////////////
    CreateSprites(){

        for (var i=0;i<this.firenum;i++){
            var num= 250 +GetRandom(800);
            var num1= GetRandom(500);
            this.posfirey=num1;
            this.posfirex=num;
            var tR= new clsHoguera(this.ctx,this.posfirex,this.posfirey,1);
            this.fire.push(tR);

        }
        for (var i=0;i<this.dognum;i++){
            var num1= GetRandom(500);
            var tR= new clsDemon(this.ctx,1000,num1,0);
            this.demondog.push(tR);

        }


    }
    ////////////////////////////////////////////////////////////////////////////
   _Firing(e){
    if ( e.keyCode==32){
        if(this.firingmode == 1){
            this.firing = false;
        } 

    }
   }
    ////////////////////////////////////////////////////////////////////////////
    _InteractionCallBack(e){
        console.log('_InteractionCallBack=  ' + e.keyCode);

        if (e.keyCode==119){ //
            ///this.player1.sprite.flw._rotation=3.1415;
            this.player1.sprite.flw.displaceDown();
        }
        if (e.keyCode==115){
            
            this.player1.sprite.flw.displaceUp();
        }
        if (e.keyCode==97){
            console.log("rotateeleffff");
            this.player1.sprite.flw.decreaseVelocity();
        }
        if (e.keyCode==100){
            this.player1.sprite.flw.increaseVelocity();
        }

        if ( e.keyCode==32){
            if(this.firing==false){
                if(this.firingmode==1){
                    this.firing=true;
                }

                this.player1.Fire();
            }
        }

        if (e.keyCode==65){
            this.player1.sprite.flw.DisplaceLeft();;
        }
        if (e.keyCode==98){
            console.log("change firemode")
            if(this.firingmode==1){
                this.firingmode=0;
                this.firing = false;
            }
            else if(this.firingmode==0){
                this.firingmode=1;
            }
        }
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    _DrawCanvasRect(){
        this.ctx.beginPath();
        this.ctx.lineWidth = "4";
        this.ctx.strokeStyle = "green";
        this.ctx.rect(0, 0, 1000, 520);
        this.ctx.stroke();
    }

    ////////////////////////////////////////////////////////////////////////////
    _loop() {

        this._CheckHits()
        this.ctx.clearRect(0,0,1000,520);
        this.imageBACKG0.Draw();
        this.player1.Draw();
        
        var i = 0;
        while(i<this.firenum){
            this.fire[i].Draw();
            i++;
        }
        i = 0;
        while(i<this.dognum ){
            this.demondog[i].Draw();
            i++;
        }
        this.fire2.Draw();
        this.currframe++;
        window.requestAnimationFrame(this._loop.bind(this));
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////

   _CheckHits(){
        this.player1.sprite.GoToAndStop(1);
        for (var i=0;i<this.rocknum;i++){
            if (this.player1.sprite.Collide (this.rocks[i].sprite)){
                //console.log('Colission')
                this.player1.HasACollision()
            };
        };


        if (this.player1.fire==undefined) return;
        for (var i=0;i<this.rocknum;i++){
            if (this.player1.fire.Collide (this.rocks[i].sprite)){
                //console.log('Colission misil')
                //this.player1.HasACollision()
                this.rocks[i].sprite.GoToAndStop(2);
            };
        };/**/
   }


    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////

}