webpackJsonp([2],{

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(106);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(64).default
var update = add("2dd73fdf", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-1d055c35\",\"scoped\":true,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Manage.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-1d055c35\",\"scoped\":true,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Manage.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(false);
// imports


// module
exports.push([module.i, "\n.btn-fw[data-v-1d055c35]\n{\n    margin-bottom: 15px;\n    float:right;\n}\n", ""]);

// exports


/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-lg-12 grid-margin stretch-card" }, [
    _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-body" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-inverse-primary btn-fw",
            attrs: { type: "button" },
            on: {
              click: function($event) {
                return _vm.$router.push({ name: "QuestionCreate" })
              }
            }
          },
          [_vm._v("Thêm mới")]
        ),
        _vm._v(" "),
        _vm._m(0)
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("table", { staticClass: "table table-bordered" }, [
      _c("thead", [
        _c("tr", [
          _c("th", [_vm._v(" # ")]),
          _vm._v(" "),
          _c("th", [_vm._v(" Media ")]),
          _vm._v(" "),
          _c("th", [_vm._v(" Nội dung ")]),
          _vm._v(" "),
          _c("th", [_vm._v(" Kiểu ")]),
          _vm._v(" "),
          _c("th", [_vm._v(" Ngày tạo ")])
        ])
      ]),
      _vm._v(" "),
      _c("tbody", [
        _c("tr", [
          _c("td", [_vm._v(" 1 ")]),
          _vm._v(" "),
          _c("td", [_vm._v(" Herman Beck ")]),
          _vm._v(" "),
          _c("td", [
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
          ]),
          _vm._v(" "),
          _c("td", [_vm._v(" $ 77.99 ")]),
          _vm._v(" "),
          _c("td", [_vm._v(" May 15, 2015 ")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v(" 2 ")]),
          _vm._v(" "),
          _c("td", [_vm._v(" Messsy Adam ")]),
          _vm._v(" "),
          _c("td", [
            _c("div", { staticClass: "progress" }, [
              _c("div", {
                staticClass: "progress-bar bg-danger",
                staticStyle: { width: "75%" },
                attrs: {
                  role: "progressbar",
                  "aria-valuenow": "75",
                  "aria-valuemin": "0",
                  "aria-valuemax": "100"
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("td", [_vm._v(" $245.30 ")]),
          _vm._v(" "),
          _c("td", [_vm._v(" July 1, 2015 ")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v(" 3 ")]),
          _vm._v(" "),
          _c("td", [_vm._v(" John Richards ")]),
          _vm._v(" "),
          _c("td", [
            _c("div", { staticClass: "progress" }, [
              _c("div", {
                staticClass: "progress-bar bg-warning",
                staticStyle: { width: "90%" },
                attrs: {
                  role: "progressbar",
                  "aria-valuenow": "90",
                  "aria-valuemin": "0",
                  "aria-valuemax": "100"
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("td", [_vm._v(" $138.00 ")]),
          _vm._v(" "),
          _c("td", [_vm._v(" Apr 12, 2015 ")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v(" 4 ")]),
          _vm._v(" "),
          _c("td", [_vm._v(" Peter Meggik ")]),
          _vm._v(" "),
          _c("td", [
            _c("div", { staticClass: "progress" }, [
              _c("div", {
                staticClass: "progress-bar bg-primary",
                staticStyle: { width: "50%" },
                attrs: {
                  role: "progressbar",
                  "aria-valuenow": "50",
                  "aria-valuemin": "0",
                  "aria-valuemax": "100"
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("td", [_vm._v(" $ 77.99 ")]),
          _vm._v(" "),
          _c("td", [_vm._v(" May 15, 2015 ")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v(" 5 ")]),
          _vm._v(" "),
          _c("td", [_vm._v(" Edward ")]),
          _vm._v(" "),
          _c("td", [
            _c("div", { staticClass: "progress" }, [
              _c("div", {
                staticClass: "progress-bar bg-danger",
                staticStyle: { width: "35%" },
                attrs: {
                  role: "progressbar",
                  "aria-valuenow": "35",
                  "aria-valuemin": "0",
                  "aria-valuemax": "100"
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("td", [_vm._v(" $ 160.25 ")]),
          _vm._v(" "),
          _c("td", [_vm._v(" May 03, 2015 ")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v(" 6 ")]),
          _vm._v(" "),
          _c("td", [_vm._v(" John Doe ")]),
          _vm._v(" "),
          _c("td", [
            _c("div", { staticClass: "progress" }, [
              _c("div", {
                staticClass: "progress-bar bg-info",
                staticStyle: { width: "65%" },
                attrs: {
                  role: "progressbar",
                  "aria-valuenow": "65",
                  "aria-valuemin": "0",
                  "aria-valuemax": "100"
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("td", [_vm._v(" $ 123.21 ")]),
          _vm._v(" "),
          _c("td", [_vm._v(" April 05, 2015 ")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v(" 7 ")]),
          _vm._v(" "),
          _c("td", [_vm._v(" Henry Tom ")]),
          _vm._v(" "),
          _c("td", [
            _c("div", { staticClass: "progress" }, [
              _c("div", {
                staticClass: "progress-bar bg-warning",
                staticStyle: { width: "20%" },
                attrs: {
                  role: "progressbar",
                  "aria-valuenow": "20",
                  "aria-valuemin": "0",
                  "aria-valuemax": "100"
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("td", [_vm._v(" $ 150.00 ")]),
          _vm._v(" "),
          _c("td", [_vm._v(" June 16, 2015 ")])
        ])
      ])
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1d055c35", { render: render, staticRenderFns: staticRenderFns })
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

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_babel_preset_env_modules_false_targets_browsers_2_forceAllTransforms_true_plugins_babel_plugin_proposal_object_rest_spread_babel_plugin_transform_runtime_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Manage_vue__ = __webpack_require__(73);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1d055c35_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Manage_vue__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(63);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(105)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1d055c35"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_babel_preset_env_modules_false_targets_browsers_2_forceAllTransforms_true_plugins_babel_plugin_proposal_object_rest_spread_babel_plugin_transform_runtime_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Manage_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1d055c35_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Manage_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1d055c35_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Manage_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\js\\pages\\question\\Manage.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1d055c35", Component.options)
  } else {
    hotAPI.reload("data-v-1d055c35", Component.options)
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

/***/ 73:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    return {};
  },
  created: function created() {}
});

/***/ })

});