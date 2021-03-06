(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    //commonjs
    module.exports = factory(require('elliptical-class'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['elliptical-class'], factory);
  } else {
    // Browser globals (root is window)
    root.elliptical.Dialog = factory(root.elliptical.Class);
    root.returnExports = root.elliptical.Dialog;
  }
}(this, function (Class) {


  var Dialog = Class.extend({
    '@resource': 'Dialog', //{String}
    $provider: null,

    /**
     * @param {object} params
     * @public
     */
    show: function (params) {
      return this.$provider.show(params);
    },

    /**
     * @public
     */
    hide: function () {
      return this.$provider.hide();
    },

    /**
     * @param {string} html
     */
    setContent: function (html) {
      return this.$provider.setContent(html);
    },

    getContent: function () {
      return this.$provider.getContent();
    },

    removeContent: function () {
      return this.$provider.removeContent();
    },

    setActionLabel: function (text) {
      return this.$provider.setActionLabel(text);
    },

    setActionId:function(id){
      return this.$provider.setActionId(id);
    },

    setAction:function(text,id){
      return this.$provider.setAction(text,id);
    },

    setCancelLabel: function (text) {
      return this.$provider.setCancelLabel(text);
    },

    setHeight: function (height) {
      return this.$provider.setHeight(height);
    },

    setWidth: function (width) {
      return this.$provider.setWidth(width);
    },

    hideAction: function (bool) {
      return this.$provider.hideAction(bool);
    },

    removeAction: function () {
      return this.$provider.removeAction();
    },

    disableModal: function (bool) {
      return this.$provider.disableModal(bool);
    },

    reset:function(){
      return this.$provider.reset();
    }

  }, {
    /**
     * @constructs
     * @param {string} name
     * @param {object} provider
     */
    init: function (name, provider) {
      var length = arguments.length;
      if (length === 1) {
        if (typeof name === 'string') this.constructor["@resource"] = name;
        else this.constructor.$provider = name;
      } else if (length === 2) {
        this.constructor["@resource"] = name;
        this.constructor.$provider = provider;
      }
    },

    /**
     * @param {object} params
     * @public
     */
    show: function (params) {
      return this.constructor.show(params);
    },

    /**
     * @public
     */
    hide: function () {
      return this.constructor.hide();
    },

    /**
     * @param {string} html
     */
    setContent: function (html) {
      return this.constructor.setContent(html);
    },

    getContent:function(){
      return this.constructor.getContent();
    },

    removeContent:function(html){
      return this.constructor.removeContent();
    },

    setActionLabel: function (text) {
      return this.constructor.setActionLabel(text);
    },

    setActionId:function(id){
      return this.constructor.setActionId(id);
    },

    setAction:function(text,id){
      return this.constructor.setAction(text,id);
    },

    setCancelLabel: function (text) {
      return this.constructor.setCancelLabel(text);
    },

    setHeight: function (height) {
      return this.constructor.setHeight(height);
    },

    setWidth: function (width) {
      return this.constructor.setWidth(width);
    },

    hideAction: function (bool) {
      return this.constructor.hideAction(bool);
    },

    removeAction: function () {
      return this.constructor.removeAction();
    },

    disableModal: function (bool) {
      return this.constructor.disableModal(bool);
    },

    reset:function(){
      return this.constructor.reset();
    }

  });

  return Dialog;

}));


