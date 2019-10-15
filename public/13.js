webpackJsonp([13],{

/***/ 119:
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

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_babel_preset_env_modules_false_targets_browsers_2_forceAllTransforms_true_plugins_babel_plugin_proposal_object_rest_spread_babel_plugin_transform_runtime_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_ItemQuestion_vue__ = __webpack_require__(119);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2bdbb2e9_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ItemQuestion_vue__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(61);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(121)
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

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(122);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(62).default
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

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)(false);
// imports


// module
exports.push([module.i, "\n.item-answer .remove-item-answer[data-v-2bdbb2e9]{float:right;color:red;cursor:pointer\n}\n.item-answer .remove-item-answer[data-v-2bdbb2e9]:hover{text-decoration:underline\n}\n.item-answer .add-item-answer[data-v-2bdbb2e9]{float:right;color:#0099ff;cursor:pointer\n}\n.item-answer .add-item-answer[data-v-2bdbb2e9]:hover{text-decoration:underline\n}\n", ""]);

// exports


/***/ }),

/***/ 123:
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

/***/ })

});