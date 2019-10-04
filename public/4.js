webpackJsonp([4],{

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__apis_auth_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_auth_js__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {

    }
  },
  methods: {
    async signOut() {
      try {
        await Object(__WEBPACK_IMPORTED_MODULE_0__apis_auth_js__["b" /* logout */])();
        this.$store.commit('user/set_is_login', false);
        Object(__WEBPACK_IMPORTED_MODULE_1__utils_auth_js__["b" /* removeToken */])();
        this.$router.push({name: 'Login'});
      } catch(errors) {
        console.log(errors);
      }
    }
  }

});


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navbar_vue_vue_type_template_id_20dbcd74___ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navbar_vue_vue_type_template_id_20dbcd74____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Navbar_vue_vue_type_template_id_20dbcd74___);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Navbar_vue_vue_type_script_lang_js___ = __webpack_require__(55);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Navbar_vue_vue_type_style_index_0_lang_css___ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Navbar_vue_vue_type_style_index_0_lang_css____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Navbar_vue_vue_type_style_index_0_lang_css___);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(51);






/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Navbar_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Navbar_vue_vue_type_template_id_20dbcd74___["render"],
  __WEBPACK_IMPORTED_MODULE_0__Navbar_vue_vue_type_template_id_20dbcd74___["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) {
  var api = require("C:\\OSPanel\\domains\\quizapp\\node_modules\\vue-hot-reload-api\\dist\\index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('20dbcd74')) {
      api.createRecord('20dbcd74', component.options)
    } else {
      api.reload('20dbcd74', component.options)
    }
    module.hot.accept("./Navbar.vue?vue&type=template&id=20dbcd74&", function () {
      api.rerender('20dbcd74', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/js/layouts/Navbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 62:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:0)\nYou may need an appropriate loader to handle this file type.\n| \n| <nav class=\"navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row\">\n|     <div class=\"text-center navbar-brand-wrapper d-flex align-items-top justify-content-center\">\n|       <a class=\"navbar-brand brand-logo\" >");

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (175:0)\nYou may need an appropriate loader to handle this file type.\n| \n| \n| .dropdown-item {\n|   cursor: pointer;\n| }");

/***/ })

});