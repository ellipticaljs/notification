
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
