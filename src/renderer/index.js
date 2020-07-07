"use strict";
import "./renderer.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "popper.js/dist/esm/popper.min";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Vue from "vue/dist/vue.esm.browser.min";

import template from './template.js'


import start from './start.js'




(function init() {
  (Vue.config.devtools = false),
    (Vue.config.productionTip = false),
    new Vue({
      data: {},
      methods: {},
      template:template,
      mounted() {
      start()
      },
    }).$mount("#app");
})();
//window.nodeRequire = window.require;
