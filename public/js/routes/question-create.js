webpackJsonp([1],{

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(111);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(64).default
var update = add("a27b5fb6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-4c128768\",\"scoped\":true,\"sourceMap\":false}!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Create.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-4c128768\",\"scoped\":true,\"sourceMap\":false}!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Create.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(false);
// imports


// module
exports.push([module.i, "\n.toggle-show[data-v-4c128768]{float:right\n}\n", ""]);

// exports


/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_babel_preset_env_modules_false_targets_browsers_2_forceAllTransforms_true_plugins_babel_plugin_proposal_object_rest_spread_babel_plugin_transform_runtime_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_ItemQuestion_vue__ = __webpack_require__(75);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2bdbb2e9_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ItemQuestion_vue__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(63);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(113)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2bdbb2e9"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_babel_preset_env_modules_false_targets_browsers_2_forceAllTransforms_true_plugins_babel_plugin_proposal_object_rest_spread_babel_plugin_transform_runtime_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_ItemQuestion_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2bdbb2e9_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ItemQuestion_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2bdbb2e9_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ItemQuestion_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\js\\pages\\question\\ItemQuestion.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2bdbb2e9", Component.options)
  } else {
    hotAPI.reload("data-v-2bdbb2e9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(114);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(64).default
var update = add("39bda7b4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-2bdbb2e9\",\"scoped\":true,\"sourceMap\":false}!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ItemQuestion.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-2bdbb2e9\",\"scoped\":true,\"sourceMap\":false}!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ItemQuestion.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(false);
// imports


// module
exports.push([module.i, "\n.item-answer .remove-item-answer[data-v-2bdbb2e9]{float:right;color:red;cursor:pointer\n}\n.item-answer .remove-item-answer[data-v-2bdbb2e9]:hover{text-decoration:underline\n}\n.item-answer .add-item-answer[data-v-2bdbb2e9]{float:right;color:#0099ff;cursor:pointer\n}\n.item-answer .add-item-answer[data-v-2bdbb2e9]:hover{text-decoration:underline\n}\n", ""]);

// exports


/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-md-6 item-answer" }, [
    _c("div", { staticClass: "form-group" }, [
      _c("label", [_vm._v("Đáp án " + _vm._s(_vm.increments + 1))]),
      _vm._v(" "),
      _vm.increments > 0
        ? _c(
            "label",
            {
              staticClass: "remove-item-answer",
              on: {
                click: function($event) {
                  return _vm.removeAnswer(_vm.increments)
                }
              }
            },
            [_vm._v("Xóa")]
          )
        : _c(
            "label",
            {
              staticClass: "add-item-answer",
              on: {
                click: function($event) {
                  return _vm.addAnswer()
                }
              }
            },
            [_vm._v("Thêm")]
          )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c(
        "select",
        {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.answer.type,
              expression: "answer.type"
            }
          ],
          staticClass: "form-control",
          on: {
            change: function($event) {
              var $$selectedVal = Array.prototype.filter
                .call($event.target.options, function(o) {
                  return o.selected
                })
                .map(function(o) {
                  var val = "_value" in o ? o._value : o.value
                  return val
                })
              _vm.$set(
                _vm.answer,
                "type",
                $event.target.multiple ? $$selectedVal : $$selectedVal[0]
              )
            }
          }
        },
        [
          _c("option", { attrs: { value: "text" } }, [_vm._v("Text")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "media" } }, [_vm._v("Media")])
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.answer.type === "media",
            expression: "answer.type === 'media'"
          }
        ],
        staticClass: "form-group"
      },
      [
        _c("div", { staticClass: "col-sm-12 row" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.answer.media,
                expression: "answer.media"
              }
            ],
            staticClass: "file-upload-default",
            attrs: { type: "text", name: "img[]" },
            domProps: { value: _vm.answer.media },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.answer, "media", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm._m(0)
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.answer.type === "media",
            expression: "answer.type === 'media'"
          }
        ],
        staticClass: "form-group"
      },
      [_vm._m(1)]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("textarea", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.answer.content,
            expression: "answer.content"
          }
        ],
        staticClass: "form-control",
        attrs: { placeholder: "Đáp án...", rows: "3" },
        domProps: { value: _vm.answer.content },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.answer, "content", $event.target.value)
          }
        }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("div", { staticClass: "form-check form-check-flat" }, [
        _c("label", { staticClass: "form-check-label" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.answer.isTrue,
                expression: "answer.isTrue"
              }
            ],
            staticClass: "form-check-input",
            attrs: { type: "checkbox" },
            domProps: {
              checked: Array.isArray(_vm.answer.isTrue)
                ? _vm._i(_vm.answer.isTrue, null) > -1
                : _vm.answer.isTrue
            },
            on: {
              change: function($event) {
                var $$a = _vm.answer.isTrue,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 && _vm.$set(_vm.answer, "isTrue", $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      _vm.$set(
                        _vm.answer,
                        "isTrue",
                        $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                      )
                  }
                } else {
                  _vm.$set(_vm.answer, "isTrue", $$c)
                }
              }
            }
          }),
          _vm._v(" Đúng "),
          _c("i", { staticClass: "input-helper" })
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group col-xs-12" }, [
      _c("input", {
        staticClass: "form-control file-upload-info",
        attrs: { type: "text", disabled: "", placeholder: "Upload File" }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "input-group-append" }, [
        _c("button", { staticClass: "file-upload-browse btn btn-info" }, [
          _vm._v("Upload")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-12 row" }, [
      _c("img", {
        staticClass: "card-img-top",
        attrs: {
          src:
            "https://www.bootstrapdash.com/demo/star-admin-pro/src/assets/images/dashboard/img_2.jpg"
        }
      })
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2bdbb2e9", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_babel_preset_env_modules_false_targets_browsers_2_forceAllTransforms_true_plugins_babel_plugin_proposal_object_rest_spread_babel_plugin_transform_runtime_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_FileManage_vue__ = __webpack_require__(76);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ab4ca070_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FileManage_vue__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(63);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(117)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ab4ca070"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_babel_preset_env_modules_false_targets_browsers_2_forceAllTransforms_true_plugins_babel_plugin_proposal_object_rest_spread_babel_plugin_transform_runtime_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_FileManage_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ab4ca070_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FileManage_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ab4ca070_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FileManage_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\js\\components\\modal\\FileManage.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ab4ca070", Component.options)
  } else {
    hotAPI.reload("data-v-ab4ca070", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(118);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(64).default
var update = add("5297cb6e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-ab4ca070\",\"scoped\":true,\"sourceMap\":false}!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FileManage.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-ab4ca070\",\"scoped\":true,\"sourceMap\":false}!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FileManage.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(false);
// imports


// module
exports.push([module.i, "\n.file-manager-component[data-v-ab4ca070]{padding:20px 10px;min-height:500px\n}\n.file-manager-component .list-media[data-v-ab4ca070]{margin-top:20px\n}\n", ""]);

// exports


/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_babel_preset_env_modules_false_targets_browsers_2_forceAllTransforms_true_plugins_babel_plugin_proposal_object_rest_spread_babel_plugin_transform_runtime_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_ListImage_vue__ = __webpack_require__(77);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_98964a46_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ListImage_vue__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(63);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(120)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-98964a46"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_babel_preset_env_modules_false_targets_browsers_2_forceAllTransforms_true_plugins_babel_plugin_proposal_object_rest_spread_babel_plugin_transform_runtime_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_ListImage_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_98964a46_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ListImage_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_98964a46_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ListImage_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\js\\components\\media\\ListImage.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-98964a46", Component.options)
  } else {
    hotAPI.reload("data-v-98964a46", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(121);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(64).default
var update = add("5cb03dfb", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-98964a46\",\"scoped\":true,\"sourceMap\":false}!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ListImage.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-98964a46\",\"scoped\":true,\"sourceMap\":false}!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ListImage.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(false);
// imports


// module
exports.push([module.i, "\n.image-media .stretch-card[data-v-98964a46]{position:relative\n}\n.image-media .stretch-card .remove-media[data-v-98964a46]{position:absolute;right:8px;top:-12px;cursor:pointer\n}\n.image-media .info-media[data-v-98964a46]{padding:10px\n}\n", ""]);

// exports


/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "col-md-12 image-media row" },
    [
      _vm._l(_vm.items, function(item, index) {
        return _c(
          "div",
          {
            key: index,
            staticClass: "col-xl-3 col-md-4 grid-margin stretch-card"
          },
          [_vm._m(0, true), _vm._v(" "), _vm._m(1, true)]
        )
      }),
      _vm._v(" "),
      _vm._m(2)
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card" }, [
      _c("img", {
        staticClass: "card-img-top",
        attrs: {
          src:
            "https://www.bootstrapdash.com/demo/star-admin-pro/src/assets/images/dashboard/img_1.jpg",
          alt: "card images"
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "card-body pb-0 info-media" }, [
        _c("p", { staticClass: "text-muted" }, [_vm._v("xxx")]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "d-flex align-items-center justify-content-between text-muted border-top py-3 mt-3"
          },
          [_c("p", { staticClass: "mb-0" }, [_vm._v("May 23, 2018")])]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "remove-media" }, [
      _c("img", {
        attrs: { src: "/icons/cancel.png", width: "16", height: "16" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12 float-right" }, [
      _c("nav", { staticClass: "float-right" }, [
        _c(
          "ul",
          { staticClass: "pagination rounded-separated pagination-danger" },
          [
            _c("li", { staticClass: "page-item" }, [
              _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
                _c("i", { staticClass: "mdi mdi-chevron-left" })
              ])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "page-item active" }, [
              _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
                _vm._v("1")
              ])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "page-item" }, [
              _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
                _vm._v("2")
              ])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "page-item" }, [
              _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
                _vm._v("3")
              ])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "page-item" }, [
              _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
                _vm._v("4")
              ])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "page-item" }, [
              _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
                _c("i", { staticClass: "mdi mdi-chevron-right" })
              ])
            ])
          ]
        )
      ])
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-98964a46", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_babel_preset_env_modules_false_targets_browsers_2_forceAllTransforms_true_plugins_babel_plugin_proposal_object_rest_spread_babel_plugin_transform_runtime_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_UploadMedia_vue__ = __webpack_require__(78);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6be3fce3_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UploadMedia_vue__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(63);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(124)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6be3fce3"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_babel_preset_env_modules_false_targets_browsers_2_forceAllTransforms_true_plugins_babel_plugin_proposal_object_rest_spread_babel_plugin_transform_runtime_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_UploadMedia_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6be3fce3_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UploadMedia_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6be3fce3_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UploadMedia_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\js\\components\\media\\UploadMedia.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6be3fce3", Component.options)
  } else {
    hotAPI.reload("data-v-6be3fce3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(125);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(64).default
var update = add("6796ee21", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-6be3fce3\",\"scoped\":true,\"sourceMap\":false}!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UploadMedia.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-6be3fce3\",\"scoped\":true,\"sourceMap\":false}!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UploadMedia.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(false);
// imports


// module
exports.push([module.i, "\n.media-review[data-v-6be3fce3]{margin-bottom:20px\n}\n.media-review .item-review img[data-v-6be3fce3]{width:50%\n}\n.media-review i[data-v-6be3fce3]{font-size:16px;cursor:pointer\n}\n", ""]);

// exports


/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = upload;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(17);

function upload(data) {
  return new Promise(function (resolve, reject) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
      url: '/media/upload',
      method: 'post',
      data: data,
      header: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(function (response) {
      if (response.status) {
        resolve(response.data);
      } else {
        reject({
          errors: response.errors,
          message: response.message
        });
      }
    })["catch"](function (error) {
      reject(error);
    });
  });
}

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-md-12 row" }, [
    _c("form", { staticClass: "forms-sample col-md-12" }, [
      _c("div", { staticClass: "form-group " }, [
        _c("div", { staticClass: "input-group" }, [
          _c("input", {
            staticClass: "form-control file-upload-info",
            attrs: { type: "text", disabled: "", placeholder: "Upload Media" }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "input-group-append" }, [
            _c("input", {
              ref: "file",
              staticStyle: { display: "none" },
              attrs: { type: "file", id: "files", multiple: "" },
              on: { change: _vm.onImageChange }
            }),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "file-upload-browse btn btn-info",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.$refs.file.click()
                  }
                }
              },
              [_vm._v("Chọn")]
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-12" }, [
      _c("div", { staticClass: "media-review row" }, [
        _c("div", { staticClass: "item-review col-md-12" }, [
          _c("table", { staticClass: "table table-striped" }, [
            _c(
              "tbody",
              _vm._l(_vm.media.files, function(item, index) {
                return _c("tr", { key: index }, [
                  _c("td", { staticStyle: { width: "10%" } }, [
                    _vm._v(
                      "\n                                " +
                        _vm._s(index + 1) +
                        "\n                            "
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(" " + _vm._s(_vm._f("limitString")(item.name)) + " ")
                  ]),
                  _vm._v(" "),
                  _c("td", { staticStyle: { width: "10%" } }, [
                    _vm._v(
                      " " + _vm._s(Math.ceil(item.size / (1024 * 1024))) + "mb "
                    )
                  ]),
                  _vm._v(" "),
                  _vm._m(0, true),
                  _vm._v(" "),
                  _c("td", { staticStyle: { width: "10%" } }, [
                    _c("i", {
                      staticClass: "fa fa-trash-o",
                      on: {
                        click: function($event) {
                          return _vm.removeMedia(index)
                        }
                      }
                    })
                  ])
                ])
              }),
              0
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-12 text-center" }, [
      _c(
        "button",
        {
          staticClass: "file-upload-browse btn btn-danger",
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.uploadMedia()
            }
          }
        },
        [_vm._v("Upload")]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticStyle: { width: "30%" } }, [
      _c("div", { staticClass: "progress" }, [
        _c("div", {
          staticClass: "progress-bar bg-success",
          staticStyle: { width: "25%" },
          attrs: {
            role: "progressbar",
            "aria-valuenow": "25",
            "aria-valuemin": "0",
            "aria-valuemax": "100"
          }
        })
      ])
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6be3fce3", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "file-manager-component" }, [
    _c("div", { staticClass: "col-md-12 text-center" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-inverse-warning btn-fw",
          attrs: { type: "button" },
          on: {
            click: function($event) {
              return _vm.changeFolder("UploadMedia")
            }
          }
        },
        [_vm._v("Upload Media")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-inverse-success btn-fw",
          attrs: { type: "button" },
          on: {
            click: function($event) {
              return _vm.changeFolder("ListImage")
            }
          }
        },
        [_vm._v("Image")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-inverse-primary btn-fw",
          attrs: { type: "button" },
          on: {
            click: function($event) {
              return _vm.changeFolder("ListVideo")
            }
          }
        },
        [_vm._v("Video")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-inverse-info btn-fw",
          attrs: { type: "button" },
          on: {
            click: function($event) {
              return _vm.changeFolder("ListAudio")
            }
          }
        },
        [_vm._v("Audio")]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "list-media" },
      [_c("keep-alive", [_c(_vm.showComponent, { tag: "component" })], 1)],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ab4ca070", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "col-lg-12 grid-margin stretch-card" },
    [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-body" }, [
          _c("form", { staticClass: "form-sample" }, [
            _c("h3", { staticClass: "card-title" }, [_vm._v("Câu hỏi")]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c("label", { staticClass: "col-sm-2 col-form-label" }, [
                _vm._v("Tiêu đề")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-8" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.question.title,
                      expression: "question.title"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.question.title },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.question, "title", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c("label", { staticClass: "col-sm-2 col-form-label" }, [
                _vm._v("Kiểu")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-2" }, [
                _c("div", { staticClass: "form-radio" }, [
                  _c("label", { staticClass: "form-check-label" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.question.type,
                          expression: "question.type"
                        }
                      ],
                      staticClass: "form-check-input",
                      attrs: {
                        type: "radio",
                        name: "type_question",
                        value: "text"
                      },
                      domProps: { checked: _vm._q(_vm.question.type, "text") },
                      on: {
                        change: function($event) {
                          return _vm.$set(_vm.question, "type", "text")
                        }
                      }
                    }),
                    _vm._v(" Text\n                                "),
                    _c("i", { staticClass: "input-helper" })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-2" }, [
                _c("div", { staticClass: "form-radio" }, [
                  _c("label", { staticClass: "form-check-label" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.question.type,
                          expression: "question.type"
                        }
                      ],
                      staticClass: "form-check-input",
                      attrs: {
                        type: "radio",
                        name: "type_question",
                        value: "image"
                      },
                      domProps: { checked: _vm._q(_vm.question.type, "image") },
                      on: {
                        change: function($event) {
                          return _vm.$set(_vm.question, "type", "image")
                        }
                      }
                    }),
                    _vm._v(" Image\n                                "),
                    _c("i", { staticClass: "input-helper" })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-2" }, [
                _c("div", { staticClass: "form-radio" }, [
                  _c("label", { staticClass: "form-check-label" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.question.type,
                          expression: "question.type"
                        }
                      ],
                      staticClass: "form-check-input",
                      attrs: {
                        type: "radio",
                        name: "type_question",
                        value: "video"
                      },
                      domProps: { checked: _vm._q(_vm.question.type, "video") },
                      on: {
                        change: function($event) {
                          return _vm.$set(_vm.question, "type", "video")
                        }
                      }
                    }),
                    _vm._v(" Video\n                                "),
                    _c("i", { staticClass: "input-helper" })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-2" }, [
                _c("div", { staticClass: "form-radio" }, [
                  _c("label", { staticClass: "form-check-label" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.question.type,
                          expression: "question.type"
                        }
                      ],
                      staticClass: "form-check-input",
                      attrs: {
                        type: "radio",
                        name: "type_question",
                        value: "audio"
                      },
                      domProps: { checked: _vm._q(_vm.question.type, "audio") },
                      on: {
                        change: function($event) {
                          return _vm.$set(_vm.question, "type", "audio")
                        }
                      }
                    }),
                    _vm._v(" Audio\n                                "),
                    _c("i", { staticClass: "input-helper" })
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c("label", { staticClass: "col-sm-2 col-form-label" }, [
                _vm._v("Nội dung")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-8" }, [
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.question.content,
                      expression: "question.content"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { rows: "5" },
                  domProps: { value: _vm.question.content },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.question, "content", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c("label", { staticClass: "col-sm-2 col-form-label" }, [
                _vm._v("File upload")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-6" }, [
                _c("input", {
                  staticClass: "file-upload-default",
                  attrs: { type: "file", name: "img[]" }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "input-group col-xs-12" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.question.media,
                        expression: "question.media"
                      }
                    ],
                    staticClass: "form-control file-upload-info",
                    attrs: {
                      type: "text",
                      disabled: "",
                      placeholder: "Upload File"
                    },
                    domProps: { value: _vm.question.media },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.question, "media", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "input-group-append" }, [
                    _c(
                      "button",
                      {
                        staticClass: "file-upload-browse btn btn-info",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.show("file-manager")
                          }
                        }
                      },
                      [_vm._v("Upload")]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("h3", { staticClass: "card-title" }, [
              _vm._v("\n                    Câu trả lời\n                    "),
              _c(
                "span",
                {
                  staticClass: "toggle-show",
                  on: {
                    click: function($event) {
                      return _vm.toggleShowAnswers()
                    }
                  }
                },
                [
                  _c(
                    "svg",
                    {
                      attrs: {
                        width: "22",
                        height: "22",
                        viewBox: "0 0 22 22",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }
                    },
                    [
                      _c("rect", {
                        attrs: {
                          x: "0.5",
                          y: "0.5",
                          width: "21",
                          height: "21",
                          fill: "white",
                          stroke: "#E0E0E0"
                        }
                      }),
                      _vm._v(" "),
                      _c("rect", {
                        attrs: {
                          x: "5",
                          y: "10",
                          width: "12",
                          height: "2",
                          rx: "1",
                          fill: "#BDBDBD"
                        }
                      })
                    ]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.showAnswers,
                    expression: "showAnswers"
                  }
                ],
                staticClass: "list-answers row",
                staticStyle: { "padding-left": "15px" }
              },
              _vm._l(_vm.listAnswers, function(item, index) {
                return _c("item-question", {
                  key: index,
                  attrs: { answer: item, increments: index }
                })
              }),
              1
            ),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _vm._m(0)
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "modal",
        { attrs: { name: "file-manager", width: "50%", height: "auto" } },
        [_c("file-manage")],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row" }, [
      _c("div", { staticClass: "col-sm-12 text-center" }, [
        _c("button", { staticClass: "btn btn-success btn-fw" }, [
          _vm._v("Tạo mới")
        ]),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-inverse-danger btn-fw" }, [
          _vm._v("Hủy bỏ")
        ])
      ])
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4c128768", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 50:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_babel_preset_env_modules_false_targets_browsers_2_forceAllTransforms_true_plugins_babel_plugin_proposal_object_rest_spread_babel_plugin_transform_runtime_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Create_vue__ = __webpack_require__(74);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4c128768_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Create_vue__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(63);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(110)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4c128768"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_babel_preset_env_modules_false_targets_browsers_2_forceAllTransforms_true_plugins_babel_plugin_proposal_object_rest_spread_babel_plugin_transform_runtime_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Create_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4c128768_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Create_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4c128768_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Create_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\js\\pages\\question\\Create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4c128768", Component.options)
  } else {
    hotAPI.reload("data-v-4c128768", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponent;
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = addStylesClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listToStyles__ = __webpack_require__(65);
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__["a" /* default */])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__["a" /* default */])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = listToStyles;
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_question_ItemQuestion_vue__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_modal_FileManage_vue__ = __webpack_require__(116);
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
  components: {
    ItemQuestion: __WEBPACK_IMPORTED_MODULE_0__pages_question_ItemQuestion_vue__["a" /* default */],
    FileManage: __WEBPACK_IMPORTED_MODULE_1__components_modal_FileManage_vue__["a" /* default */]
  },
  data: function data() {
    return {
      question: {
        title: '',
        content: '',
        type: 'text',
        media: ''
      },
      showAnswers: true,
      listAnswers: [{
        type: 'text',
        media: '',
        content: '',
        isTrue: false
      }, {
        type: 'text',
        media: '',
        content: '',
        isTrue: false
      }, {
        type: 'text',
        media: '',
        content: '',
        isTrue: false
      }, {
        type: 'text',
        media: '',
        content: '',
        isTrue: false
      }],
      showPopup: false
    };
  },
  methods: {
    toggleShowAnswers: function toggleShowAnswers() {
      this.showAnswers = !this.showAnswers;
    },
    show: function show(title) {
      this.$modal.show(title);
    },
    hide: function hide() {
      this.$modal.hide(title);
    }
  },
  created: function created() {
    var self = this;
    this.$bus.on('add-answer', function (data) {
      self.listAnswers.push({
        type: 'text',
        media: '',
        content: '',
        isTrue: false
      });
    });
    this.$bus.on('remove-answer', function (index) {
      self.listAnswers.splice(index, 1);
    });
  }
});

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  props: {
    'increments': Number,
    'answer': Object
  },
  data: function data() {
    return {
      showUpload: false
    };
  },
  methods: {
    addAnswer: function addAnswer() {
      this.$bus.emit('add-answer', true);
    },
    removeAnswer: function removeAnswer(index) {
      this.$bus.emit('remove-answer', index);
    }
  }
});

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_media_ListImage_vue__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_media_UploadMedia_vue__ = __webpack_require__(123);
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
  name: 'modal',
  components: {
    ListImage: __WEBPACK_IMPORTED_MODULE_0__components_media_ListImage_vue__["a" /* default */],
    UploadMedia: __WEBPACK_IMPORTED_MODULE_1__components_media_UploadMedia_vue__["a" /* default */]
  },
  data: function data() {
    return {
      showComponent: 'UploadMedia'
    };
  },
  methods: {
    close: function close() {
      this.$emit('close');
    },
    changeFolder: function changeFolder(component) {
      this.showComponent = component;
    }
  }
});

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  data: function data() {
    return {
      items: 6
    };
  }
});

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__apis_media_js__ = __webpack_require__(127);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  data: function data() {
    return {
      media: {
        files: [],
        extentions: ''
      },
      data: new FormData()
    };
  },
  methods: {
    onImageChange: function onImageChange(e) {
      try {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;

        for (var i = files.length - 1; i >= 0; i--) {
          this.media.files.push(files[i]);
        }

        document.getElementById("files").value = [];
      } catch (error) {
        console.log(error);
      }
    },
    uploadMedia: function () {
      var _uploadMedia = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.prepareFields();
                _context.next = 4;
                return Object(__WEBPACK_IMPORTED_MODULE_1__apis_media_js__["a" /* upload */])(this.data);

              case 4:
                data = _context.sent;
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function uploadMedia() {
        return _uploadMedia.apply(this, arguments);
      }

      return uploadMedia;
    }(),
    prepareFields: function prepareFields() {
      if (this.media.files.length > 0) {
        for (var i = 0; i < this.media.files.length; i++) {
          var attachment = this.media.files[i];
          this.data.append('files[]', attachment);
        }
      }
    },
    removeMedia: function removeMedia(index) {
      this.data = new FormData();
      this.media.files.splice(index, 1);
    },
    resetData: function resetData() {
      this.data = new FormData(); // Reset it completely

      this.media.files = [];
    }
  }
});

/***/ })

});