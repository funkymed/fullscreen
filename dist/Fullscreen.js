'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*!
 * jQuery fullscreen
 *
 * Copyright 2014 Cyril Pereira
 * Licensed under the Apache License v2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 */

var fullscreen = function fullscreen(item, options) {
  this.item = (0, _jquery2.default)(item);

  if (options) {

    if (options.transition && options.speed) {
      var _transition = 'all ' + options.speed + 's ' + options.transition;
      this.item.css({ 'transition': _transition });
    }

    if (options.fade) this.fade = options.fade;
    if (options.width) this.orgW = options.width;
    if (options.height) this.orgH = options.height;
  }

  if (this.item[0] && this.item[0].nodeName) {
    if (this.item[0].nodeName == 'IMG') {
      this.item.hide();
      this.item.on('load', _jquery2.default.proxy(this.onLoadIMG, this));
    } else {
      this.onResize();
    }
  } else {
    console.log('node not found');
  }
};

fullscreen.prototype = {
  orgW: 0,
  orgH: 0,
  item: null,
  onLoadIMG: function onLoadIMG(i) {
    this.orgW = (0, _jquery2.default)(i.currentTarget).width();
    this.orgH = (0, _jquery2.default)(i.currentTarget).height();
    this.onResize();

    if (this.fade) this.item.fadeIn(this.fade);else this.item.fadeIn();
  },
  getViewportSize: function getViewportSize() {
    var elmt = window,
        prop = "inner";
    if (!("innerWidth" in window)) {
      elmt = document.documentElement || document.body;
      prop = "client";
    }
    return {
      width: elmt[prop + "Width"],
      height: elmt[prop + "Height"]
    };
  },
  getPortrait: function getPortrait(vp) {
    var ratio = vp.height / this.orgH;
    var _w = this.orgW * ratio;
    return {
      position: 'absolute',
      height: vp.height,
      width: _w,
      left: -(_w / 2 - vp.width / 2),
      top: ''
    };
  },
  getPaysage: function getPaysage(vp) {
    var ratio = vp.width / this.orgW;
    var _h = this.orgH * ratio;
    return {
      position: 'absolute',
      height: _h,
      width: vp.width,
      left: '',
      top: -(_h / 2 - vp.height / 2)
    };
  },
  onResize: function onResize() {
    var vp = this.getViewportSize(),
        options = {};

    if (vp.width > vp.height) {
      options = this.getPaysage(vp);
      if (options.height < vp.height) {
        options = this.getPortrait(vp);
      }
    } else {
      options = this.getPortrait(vp);
      if (options.width < vp.width) {
        options = this.getPaysage(vp);
      }
    }
    (0, _jquery2.default)(this.item).css(options);
  }
};

_jquery2.default.fn.extend({
  Fullscreen: function Fullscreen(options) {
    var _jQ = new fullscreen(this, options);
    (0, _jquery2.default)(window).on('resize', _jquery2.default.proxy(_jQ.onResize, _jQ));
  }
});