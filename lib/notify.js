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


