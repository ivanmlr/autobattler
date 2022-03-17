class clsInteract{
    constructor(pParent){
        this.Doc=pParent.Doc;
        this.parent=pParent;
        this.Doc.addEventListener('keypress', this._keypressed.bind(this))
        this.Doc.addEventListener('mousemove', this._mousemove.bind(this))
        this.Doc.addEventListener('keyup', this._firing.bind(this))
    }

    _keypressed(e){
        e.preventDefault();
        console.log('_______keypress  == ' + e.keyCode);
        var tEvent=new Event('__KEYPRESS_CUSTOM', e);
        var new_event = new e.constructor(tEvent.type, e)
        this.Doc.dispatchEvent(new_event);
    }

    _mousemove(e){
        var tP=GetMousePos(e.x,e.y);
        var t = tP.x + " / " + tP.y;
        Print(t);
      
    }

    _firing(e){
        
        var tEvent=new Event('__KEYUP_CUSTOM', e);
        var new_event = new e.constructor(tEvent.type, e)
        this.Doc.dispatchEvent(new_event);

    }



}