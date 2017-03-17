(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    //commonjs
    module.exports = factory(require('elliptical-class'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['elliptical-class'], factory);
  } else {
    // Browser globals (root is window)
    root.elliptical.$Dialog = factory(root.elliptical.Class);
    root.returnExports = root.elliptical.$Dialog;
  }
}(this, function (Class) {


  return Class.extend({
    '@resource': '$DialogProvider', //{String}
    _element: null,

    /**
     * @public
     */
    show: function () {
      var element = this._getElement();
      if (element) element.open();
      else this._throwWarning();
    },

    /**
     * @public
     */
    hide: function () {
      var element = this._getElement();
      if (element) element.close();
      else this._throwWarning();
    },

    /**
     * @param {string} html
     */
    setContent: function (html) {
      var element = this._getElement();
      if (element) element.setContent(html);
      else this._throwWarning();
    },

    removeContent: function (html) {
      var element = this._getElement();
      if (element) element.removeContent();
      else this._throwWarning();
    },

    getContent: function () {
      var element = this._getElement();
      if (element) return element.getContent();
      else this._throwWarning();
    },

    setActionLabel: function (text) {
      var element = this._getElement();
      if (element) element.action = text;
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

    setCancelLabel: function (text) {
      var element = this._getElement();
      if (element) element.cancel = text;
      else this._throwWarning();
    },

    setHeight: function (height) {
      var element = this._getElement();
      if (element) element.height = height;
      else this._throwWarning();
    },

    setWidth: function (width) {
      var element = this._getElement();
      if (element) element.width = width;
      else this._throwWarning();
    },

    hideAction: function (bool) {
      var element = this._getElement();
      if (element) element.hideAction = bool;
      else this._throwWarning();
    },

    disableModal: function (bool) {
      var element = this._getElement();
      if (element) element.disableModal = bool;
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
    _getElement: function () {
      if (this._element) return this._element;
      else {
        this._element = document.querySelector('md-dialog');
        return this._element;
      }
    },

    _throwWarning: function () {
      console.warn('no dialog element available');
    }

  }, {});


}));



