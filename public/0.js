(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Navbar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/Navbar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_auth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/apis/auth.js */ "./resources/js/apis/auth.js");
/* harmony import */ var _utils_auth_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/auth.js */ "./resources/js/utils/auth.js");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  methods: {
    signOut: function () {
      var _signOut = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_apis_auth_js__WEBPACK_IMPORTED_MODULE_1__["logout"])();

              case 3:
                this.$store.commit('user/set_is_login', false);
                Object(_utils_auth_js__WEBPACK_IMPORTED_MODULE_2__["removeToken"])();
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
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Navbar.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/Navbar.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.dropdown-item {\r\n  cursor: pointer;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/dist/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Navbar.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/Navbar.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Navbar.vue?vue&type=style&index=0&lang=css&");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Navbar.vue?vue&type=template&id=20dbcd74&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/Navbar.vue?vue&type=template&id=20dbcd74& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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
                    _vm._m(6),
                    _vm._v(" "),
                    _vm._m(7),
                    _vm._v(" "),
                    _vm._m(8),
                    _vm._v(" "),
                    _vm._m(9),
                    _vm._v(" "),
                    _vm._m(10),
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
          _vm._m(11)
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
    return _c("div", { staticClass: "dropdown-header text-center" }, [
      _c("img", {
        staticClass: "img-md rounded-circle",
        attrs: {
          src: "/admin/assets/images/faces/face8.jpg",
          alt: "Profile image"
        }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mb-1 mt-3 font-weight-semibold" }, [
        _vm._v("Allen Moreno")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "font-weight-light text-muted mb-0" }, [
        _vm._v("allenmoreno@gmail.com")
      ])
    ])
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass:
          "navbar-toggler navbar-toggler-right d-lg-none align-self-center",
        attrs: { type: "button", "data-toggle": "offcanvas" }
      },
      [_c("span", { staticClass: "mdi mdi-menu" })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/layouts/Navbar.vue":
/*!*****************************************!*\
  !*** ./resources/js/layouts/Navbar.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbar_vue_vue_type_template_id_20dbcd74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue?vue&type=template&id=20dbcd74& */ "./resources/js/layouts/Navbar.vue?vue&type=template&id=20dbcd74&");
/* harmony import */ var _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.vue?vue&type=script&lang=js& */ "./resources/js/layouts/Navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Navbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar.vue?vue&type=style&index=0&lang=css& */ "./resources/js/layouts/Navbar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navbar_vue_vue_type_template_id_20dbcd74___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Navbar_vue_vue_type_template_id_20dbcd74___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/Navbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/Navbar.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/layouts/Navbar.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/Navbar.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************!*\
  !*** ./resources/js/layouts/Navbar.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Navbar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_dist_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_dist_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/layouts/Navbar.vue?vue&type=template&id=20dbcd74&":
/*!************************************************************************!*\
  !*** ./resources/js/layouts/Navbar.vue?vue&type=template&id=20dbcd74& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_20dbcd74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=template&id=20dbcd74& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Navbar.vue?vue&type=template&id=20dbcd74&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_20dbcd74___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_20dbcd74___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);