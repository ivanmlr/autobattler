class clsFollow{
    constructor(){
        this.verbose=0;
        this.pt = new clsPoint(0,0,0,0)
        this._velocity=0;//Math.random()*5;
        this.friction=0;
        this.rotationFriction=-0.001
        this._velomax=20;
        this._rotation=0;
        this.rotationVelo=0;
        this.rotation_dir=0;
        this.spin_velo=0;
        this._velo_x=0;
        this._velo_y=0;
        this.reverse=0;

        this.wall = 0;
        this.yfloor=999999;
        this.xfloor = 99999;
        this.gravity=0;
    }
    ///////////////////////////////////////////////
    setVelocity(pVelo){
        if (pVelo<0) pVelo=0;
        if (pVelo>this._velomax) pVelo=this._velomax;

        this._velocity=pVelo;
        this._velo_x=this._velocity*Math.cos(this._rotation);
        this._velo_y=this._velocity*Math.sin(this._rotation);
        
        //console.log('Velo_ '+this._velocity);
    }
    ////////////////////////////////////////////////
    increaseVelocity(){
        //console.log('Velocitiy Increase');
        this.pt.x+=5;
    }
    decreaseVelocity(){
        this.pt.x-=5;
    }
    displaceUp(){
        this.pt.y+=5;
    }
    displaceDown(){
        this.pt.y-=5;
    }
    ////////////////////////////////////////////////
    rotateRight(){
        if (this.verbose==1){
            console.log('rotateLeft inc rot='+ this.rotation);
        };
        this.rotationVelo=this.rotationVelo+0.02;
        this.rotation_dir=0;
        if (this.rotationVelo>0.1) {this.rotationVelo=0.1}
    }
    rotateLeft(){
        if (this.verbose==1){
            console.log('rotateRight inc rot='+ this.rotation);
        };
        this.rotation_dir=1;
        this.rotationVelo=this.rotationVelo+0.02;
        if (this.rotationVelo>1) {this.rotationVelo=1}
    }
    ///////////////////////////////////////////////
    setRotation(){
        this.rotationVelo=this.rotationVelo+this.rotationFriction;
        if(this.rotationVelo<0){this.rotationVelo=0};
        
        if (this.rotation_dir==0){
            this._rotation=this._rotation+this.rotationVelo;
        }else{
            this._rotation=this._rotation-this.rotationVelo;
        }
    }
    ///////////////////////////////////////////////
    Move(){
        //console.log('pt.rot='+this.pt.rotation);
        if(this.wall == 0){
            if (this.IsOutsideX()==true){
                //console.log('fuerraaaaa');
            }
            if (this.IsOutsideY()==true){
                //console.log('fuerraaaaa');
            }
        }
        this.setVelocity(this._velocity + this.friction);
        this.setRotation();
        if(this.reverse == 0){
            this.pt.x=this.pt.x+this._velo_x;
        }
        else{
            this.pt.x=this.pt.x-this._velo_x;
        }

        this.pt.y=this.pt.y+this._velo_y;//+ this.gravity;

        if (this.pt.y>this.yfloor){
            this.pt.y=this.yfloor;
        }
        if (this.pt.x>this.xfloor){
            this.pt.x=this.xfloor;
        }

        this.pt.rotation=this._rotation;
        this.pt.spin=this.pt.spin+this.spin_velo;
    }
    ///////////////////////////////////////////////
    IsOutsideX(){
        if (this._velo_x>0){
            if (this.pt.x > 800){
                this.pt.x=0;
                return true;
            };
        } else {
            if (this.pt.x < 0){
                this.pt.x=800;
                return true;
            };
        };
        return false;
    }
    //////////////////////////////////////////////////////////
    IsOutsideY(){
        if (this._velo_y>0){
            if (this.pt.y > 600){
                this.pt.y=0;
                return true;
            };
        } else {
            if (this.pt.y < 0){
                this.pt.y=600;
                return true;
            };
        };
        return false;
    }

}