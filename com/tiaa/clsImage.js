class clsImage{
    constructor(pImagePath, pCtx, pAutodraw, pXoff, pYoff, pScale=1, pCenterPoint=0){
        console.log('clsIMage constructor');
        this.image = new Image();
        this.caption="";
        this.imagepath = pImagePath;
        this.centerpoint=pCenterPoint;
        this.ctx = pCtx;
        this._loaded = 0;
        this.scale=pScale;
        this._autodraw = pAutodraw;
        this.Xoff=0;
        this.Yoff=0;
        if (pXoff)this.Xoff= pXoff;
        if (pYoff) this.Yoff=pYoff;
        this.Initialize();
        return this;
    }
/////////////////////////////////////////////////////////////////
    Initialize(){
        this._CreateListeners();
        this.LoadImage();
    }
/////////////////////////////////////////////////////////////////
    _CreateListeners(){
        this.image.addEventListener('load',this._onLoad.bind(this));
    }
/////////////////////////////////////////////////////////////////
    _onLoad(){
        console.log('clsImage->onload' + this.image.width);
        this._loaded=1;
        if (this._autodraw){
            this.Draw();
        }
    }
/////////////////////////////////////////////////////////////////
    LoadImage(){
        this.image.src=this.imagepath;
    }
/////////////////////////////////////////////////////////////////
    Draw(pPT, pScale=1){
        if(pPT==null ){
            pPT=new clsPoint(0,0,0);
            pScale=this.scale;
        }
        if (this._loaded==1){
            var tRot=pPT.rotation;
            if (pPT.spin!=null && pPT.spin>0){
                tRot=pPT.spin;

            }
            this.drawImage2(this.ctx, this.image, pPT.x,pPT.y, pScale,  tRot);

/*
            this.ctx.save();
                this.ctx.scale(pScale,pScale);
                this.ctx.translate(pPT.x,pPT.y);
                this.ctx.rotate(pPT.rotation);       
                this.ctx.translate(0,0);
                
                this.ctx.drawImage(this.image,-this.Xoff,-this.Yoff);

            this.ctx.restore();
  */
        }
        
    }
/////////////////////////////////////////////////////////////////

 drawImage2(ctx,image, x, y, scale, rotation=0){
    //console.log("rot" + rotation+ "  x=" + x);

    ctx.save();
    ctx.setTransform(scale, 0, 0, scale, x, y); // sets scale and origin
    ctx.rotate(rotation);

    if (this.centerpoint==0){
        ctx.drawImage(image, 0,0);
    }else{
        ctx.drawImage(image, -image.width / 2, -image.height / 2);
        //console.log(image.width)
    }

    /*this.ctx.beginPath();
    this.ctx.lineWidth = "4";
    this.ctx.strokeStyle = "red";
    this.ctx.rect(0, 0, 1, 1);
    this.ctx.stroke();
    */

    //this.ctx.font="30px Arial"
    //this.ctx.fillStyle="red"
    //this.ctx.fillText(this.caption, 0,0)


    ctx.restore();
    //
} 
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
}