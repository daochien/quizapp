webpackJsonp([1],{

/***/ 48:
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

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_babel_preset_env_modules_false_targets_browsers_2_forceAllTransforms_true_plugins_babel_plugin_proposal_object_rest_spread_babel_plugin_transform_runtime_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Dashboard_vue__ = __webpack_require__(64);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_34eee96e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dashboard_vue__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(61);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_babel_preset_env_modules_false_targets_browsers_2_forceAllTransforms_true_plugins_babel_plugin_proposal_object_rest_spread_babel_plugin_transform_runtime_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Dashboard_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_34eee96e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dashboard_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_34eee96e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dashboard_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\js\\pages\\Dashboard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-34eee96e", Component.options)
  } else {
    hotAPI.reload("data-v-34eee96e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 61:
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

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = addStylesClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listToStyles__ = __webpack_require__(63);
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

/***/ 63:
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

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_Navbar__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_SideBar__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layouts_FooterBar__ = __webpack_require__(85);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    NavBar: __WEBPACK_IMPORTED_MODULE_0__layouts_Navbar__["a" /* default */],
    SideBar: __WEBPACK_IMPORTED_MODULE_1__layouts_SideBar__["a" /* default */],
    FooterBar: __WEBPACK_IMPORTED_MODULE_2__layouts_FooterBar__["a" /* default */]
  },
  computed: {
    getbreadcrumb: function getbreadcrumb() {
      return this.$route.matched;
    }
  },
  created: function created() {}
});

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__apis_auth_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_auth_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(14);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      showSideBarMobile: false
    };
  },
  computed: _objectSpread({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["b" /* mapGetters */])('user', ['getName', 'getEmail'])),
  methods: _objectSpread({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["c" /* mapMutations */])('sidebar', ['set_active']), {
    showMenuMobile: function showMenuMobile() {
      this.showSideBarMobile = !this.showSideBarMobile;
      this.set_active(this.showSideBarMobile);
    },
    signOut: function () {
      var _signOut = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_1__apis_auth_js__["b" /* logout */])();

              case 3:
                this.$store.commit('user/set_is_login', false);
                Object(__WEBPACK_IMPORTED_MODULE_2__utils_auth_js__["b" /* removeToken */])();
                this.$router.push({
                  name: 'Login'
                });
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function signOut() {
        return _signOut.apply(this, arguments);
      }

      return signOut;
    }()
  })
});

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(14);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: _objectSpread({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapGetters */])('user', ['getName']), {}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapGetters */])('sidebar', ['activeMenuMobile']))
});

/***/ }),

/***/ 67:
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
/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_babel_preset_env_modules_false_targets_browsers_2_forceAllTransforms_true_plugins_babel_plugin_proposal_object_rest_spread_babel_plugin_transform_runtime_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Navbar_vue__ = __webpack_require__(65);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_19843641_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Navbar_vue__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(61);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(78)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_babel_preset_env_modules_false_targets_browsers_2_forceAllTransforms_true_plugins_babel_plugin_proposal_object_rest_spread_babel_plugin_transform_runtime_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Navbar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_19843641_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Navbar_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_19843641_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Navbar_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\js\\layouts\\Navbar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-19843641", Component.options)
  } else {
    hotAPI.reload("data-v-19843641", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(79);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(62).default
var update = add("1d73f77c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Navbar.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Navbar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)(false);
// imports


// module
exports.push([module.i, "\n.dropdown-item {\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    {
      staticClass:
        "navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row"
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "navbar-menu-wrapper d-flex align-items-center" },
        [
          _vm._m(1),
          _vm._v(" "),
          _vm._m(2),
          _vm._v(" "),
          _c("ul", { staticClass: "navbar-nav ml-auto" }, [
            _vm._m(3),
            _vm._v(" "),
            _vm._m(4),
            _vm._v(" "),
            _c(
              "li",
              {
                staticClass:
                  "nav-item dropdown d-none d-xl-inline-block user-dropdown"
              },
              [
                _vm._m(5),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "dropdown-menu dropdown-menu-right navbar-dropdown",
                    attrs: { "aria-labelledby": "UserDropdown" }
                  },
                  [
                    _c("div", { staticClass: "dropdown-header text-center" }, [
                      _c("img", {
                        staticClass: "img-md rounded-circle",
                        attrs: {
                          src: "/admin/assets/images/faces/face8.jpg",
                          alt: "Profile image"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "mb-1 mt-3 font-weight-semibold" },
                        [_vm._v(_vm._s(_vm.getName))]
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "font-weight-light text-muted mb-0" },
                        [_vm._v(_vm._s(_vm.getEmail))]
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(6),
                    _vm._v(" "),
                    _vm._m(7),
                    _vm._v(" "),
                    _vm._m(8),
                    _vm._v(" "),
                    _vm._m(9),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "dropdown-item",
                        on: {
                          click: function($event) {
                            return _vm.signOut()
                          }
                        }
                      },
                      [
                        _vm._v("Sign Out"),
                        _c("i", {
                          staticClass: "dropdown-item-icon ti-power-off"
                        })
                      ]
                    )
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass:
                "navbar-toggler navbar-toggler-right d-lg-none align-self-center",
              attrs: { type: "button", "data-toggle": "offcanvas" },
              on: {
                click: function($event) {
                  return _vm.showMenuMobile()
                }
              }
            },
            [_c("span", { staticClass: "mdi mdi-menu" })]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "text-center navbar-brand-wrapper d-flex align-items-top justify-content-center"
      },
      [
        _c("a", { staticClass: "navbar-brand brand-logo" }, [
          _c("img", {
            attrs: { src: "/admin/assets/images/logo.svg", alt: "logo" }
          })
        ]),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "navbar-brand brand-logo-mini",
            attrs: { href: "index.html" }
          },
          [
            _c("img", {
              attrs: { src: "/admin/assets/images/logo-mini.svg", alt: "logo" }
            })
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "navbar-nav" }, [
      _c(
        "li",
        { staticClass: "nav-item font-weight-semibold d-none d-lg-block" },
        [_vm._v("Help : +050 2992 709")]
      ),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item dropdown language-dropdown" }, [
        _c(
          "a",
          {
            staticClass:
              "nav-link dropdown-toggle px-2 d-flex align-items-center",
            attrs: {
              id: "LanguageDropdown",
              href: "#",
              "data-toggle": "dropdown",
              "aria-expanded": "false"
            }
          },
          [
            _c("div", { staticClass: "d-inline-flex mr-0 mr-md-3" }, [
              _c("div", { staticClass: "flag-icon-holder" }, [
                _c("i", { staticClass: "flag-icon flag-icon-us" })
              ])
            ]),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass: "profile-text font-weight-medium d-none d-md-block"
              },
              [_vm._v("English")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "dropdown-menu dropdown-menu-left navbar-dropdown py-2",
            attrs: { "aria-labelledby": "LanguageDropdown" }
          },
          [
            _c("a", { staticClass: "dropdown-item" }, [
              _c("div", { staticClass: "flag-icon-holder" }, [
                _c("i", { staticClass: "flag-icon flag-icon-us" })
              ]),
              _vm._v("English\n            ")
            ]),
            _vm._v(" "),
            _c("a", { staticClass: "dropdown-item" }, [
              _c("div", { staticClass: "flag-icon-holder" }, [
                _c("i", { staticClass: "flag-icon flag-icon-fr" })
              ]),
              _vm._v("French\n            ")
            ]),
            _vm._v(" "),
            _c("a", { staticClass: "dropdown-item" }, [
              _c("div", { staticClass: "flag-icon-holder" }, [
                _c("i", { staticClass: "flag-icon flag-icon-ae" })
              ]),
              _vm._v("Arabic\n            ")
            ]),
            _vm._v(" "),
            _c("a", { staticClass: "dropdown-item" }, [
              _c("div", { staticClass: "flag-icon-holder" }, [
                _c("i", { staticClass: "flag-icon flag-icon-ru" })
              ]),
              _vm._v("Russian\n            ")
            ])
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "form",
      {
        staticClass: "ml-auto search-form d-none d-md-block",
        attrs: { action: "#" }
      },
      [
        _c("div", { staticClass: "form-group" }, [
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "search", placeholder: "Search Here" }
          })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item dropdown" }, [
      _c(
        "a",
        {
          staticClass: "nav-link count-indicator",
          attrs: {
            id: "messageDropdown",
            href: "#",
            "data-toggle": "dropdown",
            "aria-expanded": "false"
          }
        },
        [
          _c("i", { staticClass: "mdi mdi-bell-outline" }),
          _vm._v(" "),
          _c("span", { staticClass: "count" }, [_vm._v("7")])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0",
          attrs: { "aria-labelledby": "messageDropdown" }
        },
        [
          _c("a", { staticClass: "dropdown-item py-3" }, [
            _c("p", { staticClass: "mb-0 font-weight-medium float-left" }, [
              _vm._v("You have 7 unread mails ")
            ]),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "badge badge-pill badge-primary float-right" },
              [_vm._v("View all")]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "dropdown-divider" }),
          _vm._v(" "),
          _c("a", { staticClass: "dropdown-item preview-item" }, [
            _c("div", { staticClass: "preview-thumbnail" }, [
              _c("img", {
                staticClass: "img-sm profile-pic",
                attrs: {
                  src: "/admin/assets/images/faces/face10.jpg",
                  alt: "image"
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "preview-item-content flex-grow py-2" }, [
              _c(
                "p",
                {
                  staticClass:
                    "preview-subject ellipsis font-weight-medium text-dark"
                },
                [_vm._v("Marian Garner ")]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "font-weight-light small-text" }, [
                _vm._v(" The meeting is cancelled ")
              ])
            ])
          ]),
          _vm._v(" "),
          _c("a", { staticClass: "dropdown-item preview-item" }, [
            _c("div", { staticClass: "preview-thumbnail" }, [
              _c("img", {
                staticClass: "img-sm profile-pic",
                attrs: {
                  src: "/admin/assets/images/faces/face12.jpg",
                  alt: "image"
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "preview-item-content flex-grow py-2" }, [
              _c(
                "p",
                {
                  staticClass:
                    "preview-subject ellipsis font-weight-medium text-dark"
                },
                [_vm._v("David Grey ")]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "font-weight-light small-text" }, [
                _vm._v(" The meeting is cancelled ")
              ])
            ])
          ]),
          _vm._v(" "),
          _c("a", { staticClass: "dropdown-item preview-item" }, [
            _c("div", { staticClass: "preview-thumbnail" }, [
              _c("img", {
                staticClass: "img-sm profile-pic",
                attrs: {
                  src: "/admin/assets/images/faces/face1.jpg",
                  alt: "image"
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "preview-item-content flex-grow py-2" }, [
              _c(
                "p",
                {
                  staticClass:
                    "preview-subject ellipsis font-weight-medium text-dark"
                },
                [_vm._v("Travis Jenkins ")]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "font-weight-light small-text" }, [
                _vm._v(" The meeting is cancelled ")
              ])
            ])
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item dropdown" }, [
      _c(
        "a",
        {
          staticClass: "nav-link count-indicator",
          attrs: {
            id: "notificationDropdown",
            href: "#",
            "data-toggle": "dropdown"
          }
        },
        [
          _c("i", { staticClass: "mdi mdi-email-outline" }),
          _vm._v(" "),
          _c("span", { staticClass: "count bg-success" }, [_vm._v("3")])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0",
          attrs: { "aria-labelledby": "notificationDropdown" }
        },
        [
          _c("a", { staticClass: "dropdown-item py-3 border-bottom" }, [
            _c("p", { staticClass: "mb-0 font-weight-medium float-left" }, [
              _vm._v("You have 4 new notifications ")
            ]),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "badge badge-pill badge-primary float-right" },
              [_vm._v("View all")]
            )
          ]),
          _vm._v(" "),
          _c("a", { staticClass: "dropdown-item preview-item py-3" }, [
            _c("div", { staticClass: "preview-thumbnail" }, [
              _c("i", { staticClass: "mdi mdi-alert m-auto text-primary" })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "preview-item-content" }, [
              _c(
                "h6",
                {
                  staticClass:
                    "preview-subject font-weight-normal text-dark mb-1"
                },
                [_vm._v("Application Error")]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "font-weight-light small-text mb-0" }, [
                _vm._v(" Just now ")
              ])
            ])
          ]),
          _vm._v(" "),
          _c("a", { staticClass: "dropdown-item preview-item py-3" }, [
            _c("div", { staticClass: "preview-thumbnail" }, [
              _c("i", { staticClass: "mdi mdi-settings m-auto text-primary" })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "preview-item-content" }, [
              _c(
                "h6",
                {
                  staticClass:
                    "preview-subject font-weight-normal text-dark mb-1"
                },
                [_vm._v("Settings")]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "font-weight-light small-text mb-0" }, [
                _vm._v(" Private message ")
              ])
            ])
          ]),
          _vm._v(" "),
          _c("a", { staticClass: "dropdown-item preview-item py-3" }, [
            _c("div", { staticClass: "preview-thumbnail" }, [
              _c("i", { staticClass: "mdi mdi-airballoon m-auto text-primary" })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "preview-item-content" }, [
              _c(
                "h6",
                {
                  staticClass:
                    "preview-subject font-weight-normal text-dark mb-1"
                },
                [_vm._v("New user registration")]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "font-weight-light small-text mb-0" }, [
                _vm._v(" 2 days ago ")
              ])
            ])
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "nav-link dropdown-toggle",
        attrs: {
          id: "UserDropdown",
          href: "#",
          "data-toggle": "dropdown",
          "aria-expanded": "false"
        }
      },
      [
        _c("img", {
          staticClass: "img-xs rounded-circle",
          attrs: {
            src: "/admin/assets/images/faces/face8.jpg",
            alt: "Profile image"
          }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "dropdown-item" }, [
      _vm._v("My Profile "),
      _c("span", { staticClass: "badge badge-pill badge-danger" }, [
        _vm._v("1")
      ]),
      _c("i", { staticClass: "dropdown-item-icon ti-dashboard" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "dropdown-item" }, [
      _vm._v("Messages"),
      _c("i", { staticClass: "dropdown-item-icon ti-comment-alt" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "dropdown-item" }, [
      _vm._v("Activity"),
      _c("i", { staticClass: "dropdown-item-icon ti-location-arrow" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "dropdown-item" }, [
      _vm._v("FAQ"),
      _c("i", { staticClass: "dropdown-item-icon ti-help-alt" })
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-19843641", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_babel_preset_env_modules_false_targets_browsers_2_forceAllTransforms_true_plugins_babel_plugin_proposal_object_rest_spread_babel_plugin_transform_runtime_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_SideBar_vue__ = __webpack_require__(66);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2959694a_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SideBar_vue__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(61);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(82)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2959694a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_babel_preset_env_modules_false_targets_browsers_2_forceAllTransforms_true_plugins_babel_plugin_proposal_object_rest_spread_babel_plugin_transform_runtime_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_SideBar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2959694a_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SideBar_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2959694a_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SideBar_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\js\\layouts\\SideBar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2959694a", Component.options)
  } else {
    hotAPI.reload("data-v-2959694a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(62).default
var update = add("4c994f15", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-2959694a\",\"scoped\":true,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SideBar.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-2959694a\",\"scoped\":true,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SideBar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    {
      staticClass: "sidebar sidebar-offcanvas",
      class: { active: _vm.activeMenuMobile },
      attrs: { id: "sidebar" }
    },
    [
      _c("ul", { staticClass: "nav" }, [
        _c("li", { staticClass: "nav-item nav-profile" }, [
          _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "text-wrapper" }, [
              _c("p", { staticClass: "profile-name" }, [
                _vm._v(_vm._s(_vm.getName))
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "designation" }, [_vm._v("Premium user")])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item nav-category" }, [
          _vm._v("Main Menu")
        ]),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "nav-item" },
          [
            _c(
              "router-link",
              {
                staticClass: "nav-link",
                attrs: { to: { name: "Dashboard" }, href: "../../index.html" }
              },
              [
                _c("i", { staticClass: "menu-icon typcn typcn-document-text" }),
                _vm._v(" "),
                _c("span", { staticClass: "menu-title" }, [_vm._v("Dashboard")])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "nav-item" },
          [
            _c(
              "router-link",
              {
                staticClass: "nav-link",
                attrs: { to: { name: "CourseManage" } }
              },
              [
                _c("i", { staticClass: "menu-icon typcn typcn-shopping-bag" }),
                _vm._v(" "),
                _c("span", { staticClass: "menu-title" }, [
                  _vm._v("Quản lý khóa học")
                ])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "nav-item" },
          [
            _c(
              "router-link",
              {
                staticClass: "nav-link",
                attrs: { to: { name: "QuestionManage" } }
              },
              [
                _c("i", {
                  staticClass: "menu-icon typcn typcn-th-large-outline"
                }),
                _vm._v(" "),
                _c("span", { staticClass: "menu-title" }, [
                  _vm._v("Quản lý câu hỏi")
                ])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "nav-item" },
          [
            _c(
              "router-link",
              { staticClass: "nav-link", attrs: { to: { name: "Media" } } },
              [
                _c("i", { staticClass: "menu-icon typcn typcn-bell" }),
                _vm._v(" "),
                _c("span", { staticClass: "menu-title" }, [
                  _vm._v("Quản lý media")
                ])
              ]
            )
          ],
          1
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "profile-image" }, [
      _c("img", {
        staticClass: "img-xs rounded-circle",
        attrs: {
          src: "/admin/assets/images/faces/face8.jpg",
          alt: "profile image"
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "dot-indicator bg-success" })
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2959694a", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_babel_preset_env_modules_false_targets_browsers_2_forceAllTransforms_true_plugins_babel_plugin_proposal_object_rest_spread_babel_plugin_transform_runtime_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_FooterBar_vue__ = __webpack_require__(67);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7bb6ce52_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FooterBar_vue__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(61);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(86)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7bb6ce52"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_babel_preset_env_modules_false_targets_browsers_2_forceAllTransforms_true_plugins_babel_plugin_proposal_object_rest_spread_babel_plugin_transform_runtime_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_FooterBar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7bb6ce52_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FooterBar_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7bb6ce52_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FooterBar_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\js\\layouts\\FooterBar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7bb6ce52", Component.options)
  } else {
    hotAPI.reload("data-v-7bb6ce52", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(87);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(62).default
var update = add("afc1941c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-7bb6ce52\",\"scoped\":true,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FooterBar.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-7bb6ce52\",\"scoped\":true,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FooterBar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", { staticClass: "footer" }, [
      _c("div", { staticClass: "container-fluid clearfix" }, [
        _c(
          "span",
          {
            staticClass:
              "text-muted d-block text-center text-sm-left d-sm-inline-block"
          },
          [
            _vm._v("Copyright © 2019 "),
            _c(
              "a",
              {
                attrs: {
                  href: "http://www.bootstrapdash.com/",
                  target: "_blank"
                }
              },
              [_vm._v("Bootstrapdash")]
            ),
            _vm._v(". All rights reserved.")
          ]
        ),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass:
              "float-none float-sm-right d-block mt-1 mt-sm-0 text-center"
          },
          [
            _vm._v("Hand-crafted & made with "),
            _c("i", { staticClass: "mdi mdi-heart text-danger" })
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
    require("vue-hot-reload-api")      .rerender("data-v-7bb6ce52", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 89:
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
    { staticClass: "container-scroller" },
    [
      _c("nav-bar"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "container-fluid page-body-wrapper" },
        [
          _c("side-bar"),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "main-panel" },
            [
              _c(
                "div",
                { staticClass: "content-wrapper" },
                [
                  _c("div", { staticClass: "row page-title-header" }, [
                    _c("div", { staticClass: "col-12" }, [
                      _c("div", { staticClass: "page-header" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "quick-link-wrapper w-100 d-md-flex flex-md-wrap"
                          },
                          [
                            _c(
                              "ul",
                              { staticClass: "quick-links" },
                              _vm._l(_vm.getbreadcrumb, function(item, index) {
                                return _c(
                                  "li",
                                  { key: index },
                                  [
                                    _c(
                                      "router-link",
                                      { attrs: { to: { name: item.name } } },
                                      [_vm._v(_vm._s(item.meta.title))]
                                    )
                                  ],
                                  1
                                )
                              }),
                              0
                            ),
                            _vm._v(" "),
                            _vm._m(0)
                          ]
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("router-view")
                ],
                1
              ),
              _vm._v(" "),
              _c("footer-bar")
            ],
            1
          )
        ],
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
    return _c("ul", { staticClass: "quick-links ml-auto" }, [
      _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Settings")])]),
      _vm._v(" "),
      _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Analytics")])]),
      _vm._v(" "),
      _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Watchlist")])])
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-34eee96e", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});