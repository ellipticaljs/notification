(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    //commonjs
    module.exports = factory(require('elliptical-class'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['elliptical-class'], factory);
  } else {
    // Browser globals (root is window)
    root.elliptical.Dialog=factory(root.elliptical.Class);
    root.returnExports = root.elliptical.Dialog;
  }
}(this, function (Class) {


  var Dialog=Class.extend({
    '@resource':'Dialog', //{String}
    $provider:null,

    /**
     * @param {object} params
     * @public
     */
    show:function(params){
      return this.$provider.show(params);
    },

    /**
     * @public
     */
    hide:function(){
      return this.$provider.hide();
    },

    /**
     * @param {string} html
     */
    setContent:function(html){
      return this.$provider.setContent(html);
    },

    getContent:function(){
      return this.$provider.getContent();
    },

    removeContent:function(){
      return this.$provider.removeContent();
    },

    setActionLabel:function(text){
      return this.$provider.setActionLabel(text);
    },

    setActionId:function(id){
      return this.$provider.setActionId(id);
    },

    setAction:function(text,id){
      return this.$provider.setAction(text,id);
    },

    setCancelLabel:function(text){
      return this.$provider.setCancelLabel(text);
    },

    setHeight:function(height){
      return this.$provider.setHeight(height);
    },

    setWidth:function(width){
      return this.$provider.setWidth(width);
    },

    hideAction:function(bool){
      return this.$provider.hideAction(bool);
    },

    removeAction:function(){
      return this.$provider.removeAction();
    },

    disableModal:function(bool){
      return this.$provider.disableModal(bool);
    },

    reset:function(){
      return this.$provider.reset();
    }

  },{
    /**
     * @constructs
     * @param {string} name
     * @param {object} provider
     */
    init:function(name,provider){
      var length = arguments.length;
      if(length===1){
        if(typeof name==='string') this.constructor["@resource"]=name;
        else this.constructor.$provider=name;
      }else if(length===2){
        this.constructor["@resource"]=name;
        this.constructor.$provider=provider;
      }
    },

    /**
     * @param {object} params
     * @public
     */
    show:function(params){
      return this.constructor.show(params);
    },

    /**
     * @public
     */
    hide:function(){
      return this.constructor.hide();
    },

    /**
     * @param {string} html
     */
    setContent:function(html){
      return this.constructor.setContent(html);
    },

    getContent:function(){
      return this.constructor.getContent();
    },

    removeContent:function(html){
      return this.constructor.removeContent();
    },

    setActionLabel:function(text){
      return this.constructor.setActionLabel(text);
    },

    setActionId:function(id){
      return this.constructor.setActionId(id);
    },

    setAction:function(text,id){
      return this.constructor.setAction(text,id);
    },

    setCancelLabel:function(text){
      return this.constructor.setCancelLabel(text);
    },

    setHeight:function(height){
      return this.constructor.setHeight(height);
    },

    setWidth:function(width){
      return this.constructor.setWidth(width);
    },

    hideAction:function(bool){
      return this.constructor.hideAction(bool);
    },

    removeAction:function(){
      return this.constructor.removeAction();
    },

    disableModal:function(bool){
      return this.constructor.disableModal(bool);
    },

    reset:function(){
      return this.constructor.reset();
    }

  });

  return Dialog;

}));



(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    //commonjs
    module.exports = factory(require('elliptical-class'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['elliptical-class'], factory);
  } else {
    // Browser globals (root is window)

    root.elliptical.Notify=factory(root.elliptical.Class);
    root.returnExports = root.elliptical.Notify;
  }
}(this, function (Class) {


  var Notify=Class.extend({
    '@resource':'Notify', //{String}
    $provider:null,

    /**
     *
     * @param {string} text
     * @param {object} params
     * @public
     */
    show:function(text,params){
      return this.$provider.show(text,params);
    },

    /**
     *
     * @public
     */
    hide:function(){
      return this.$provider.hide();
    },

    /**
     *
     * @returns {boolean}
     * @public
     */
    visible:function(){
      return this.$provider.visible();
    }

  },{

    /**
     * @constructs
     * @param {string} name
     * @param {object} provider
     */
    init:function(name,provider){
      var length = arguments.length;
      if(length===1){
        if(typeof name==='string') this.constructor["@resource"]=name;
        else this.constructor.$provider=name;
      }else if(length===2){
        this.constructor["@resource"]=name;
        this.constructor.$provider=provider;
      }

      this.queuedFlag=false;
    },

    /**
     *
     * @param {string} text
     * @param {object} params
     * @returns {*}
     * @public
     */
    show:function(text,params){
      return this.constructor.show(text,params);
    },

    /**
     *
     * @param text {string}
     * @param params {object}
     * @param delay {number}
     */
    showOnDelay:function(text,params,delay){
      var self=this;
      if(delay===undefined) delay=750;
      this.queuedFlag=true;
      setTimeout(function(){
        if(self.queuedFlag) {
          self.queuedFlag=false;
          self.show(text,params);
        }
      },delay)
    },

    /**
     *
     * @returns {*}
     * @public
     */
    hide:function(){
      return this.constructor.hide();
    },

    /**
     *  @public
     */
    hideOnDelay:function(){
      var self=this;
      if(!this.queuedFlag) {
        setTimeout(function(){
          self.hide();
        },1000);
      }
      this.queuedFlag=false;
    },

    /**
     *
     * @returns {*}
     * @public
     */
    visible:function(){
      return this.constructor.visible();
    }
  });

  return Notify;



}));



(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    //commonjs
    module.exports = factory(require('elliptical-class'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['elliptical-class'], factory);
  } else {
    // Browser globals (root is window)
    root.elliptical.$Dialog=factory(root.elliptical.Class);
    root.returnExports = root.elliptical.$Dialog;
  }
}(this, function (Class) {


  return Class.extend({
    '@resource':'$DialogProvider', //{String}
    _element:null,

    /**
     * @public
     */
    show:function(){
      var element = this._getElement();
      if (element) element.open();
      else this._throwWarning();
    },

    /**
     * @public
     */
    hide:function(){
      var element = this._getElement();
      if(element) element.close();
      else this._throwWarning();
    },

    /**
     * @param {string} html
     */
    setContent:function(html){
      var element = this._getElement();
      if(element) element.setContent(html);
      else this._throwWarning();
    },

    removeContent:function(html){
      var element = this._getElement();
      if(element) element.removeContent();
      else this._throwWarning();
    },

    getContent:function(){
      var element = this._getElement();
      if(element) return element.getContent();
      else this._throwWarning();
    },

    setActionLabel:function(text){
      var element = this._getElement();
      if(element) element.action=text;
      else this._throwWarning();
    },

    setActionId:function(id){
      var element = this._getElement();
      if(element) element.setActionId(id);
      else this._throwWarning();
    },

    setAction:function(text,id){
      var element = this._getElement();
      if(element) element.setAction(text,id);
      else this._throwWarning();
    },

    setCancelLabel:function(text){
      var element = this._getElement();
      if(element) element.cancel=text;
      else this._throwWarning();
    },

    setHeight:function(height){
      var element = this._getElement();
      if(element) element.height=height;
      else this._throwWarning();
    },

    setWidth:function(width){
      var element = this._getElement();
      if(element) element.width=width;
      else this._throwWarning();
    },

    hideAction:function(bool){
      var element = this._getElement();
      if(element) element.hideAction=bool;
      else this._throwWarning();
    },

    removeAction:function(){
      var element = this._getElement();
      if(element) element.removeAction();
      else this._throwWarning();
    },

    disableModal:function(bool){
      var element = this._getElement();
      if(element) element.disableModal=bool;
      else this._throwWarning();
    },

    reset:function(){
      var element = this._getElement();
      if(element) element.reset();
      else this._throwWarning();
    },

    /**
     * @returns {object}
     * @private
     */
    _getElement:function(){
      if (this._element) return this._element;
      else {
        this._element=document.querySelector('md-dialog');
        return this._element;
      }
    },

    _throwWarning:function(){
      console.warn('no dialog element available');
    }

  },{});



}));





(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    //commonjs
    module.exports = factory(require('elliptical-class'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['elliptical-class'], factory);
  } else {
    // Browser globals (root is window)

    root.elliptical.$Notify=factory(root.elliptical.Class);
    root.returnExports = root.elliptical.$Notify;
  }
}(this, function (Class) {


  return Class.extend({
    '@resource':'$NotifyProvider', //{String}
    _element:null,

    /**
     *
     * @param {string} text
     * @param {object} params
     * @returns {*}
     * @public
     */
    show:function(text,params){
      var element = this._getElement();
      if(!element){
        this._throwWarning();
        return;
      }
      if (params === undefined) params = {};
      var duration = params.duration;
      if (duration === undefined) {
        duration = 3000;
      }
      element.text = text;
      if (!element.visible) {
        element.duration = duration;
        try {
          element.show();
        } catch (ex) {

        }
      }
    },

    /**
     *
     * @public
     */
    hide:function(){
      var element = this._getElement();
      if(element) element.hide();
      else this._throwWarning();
    },

    /**
     *
     * @returns {boolean}
     * @public
     */
    visible:function(){
      var element = this._getElement();
      if(element) return element.visible;
      else return false;
    },


    /**
     *
     * @returns {object}
     * @private
     */
    _getElement:function(){
      if (this._element) return this._element;
      else {
        this._element=document.querySelector('paper-toast');
        return this._element;
      }
    },

    /**
     *
     * @private
     */
    _throwWarning:function(){
      console.warn('no notify element available');
    }

  },{});


}));
