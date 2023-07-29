'use strict';
(self.webpackChunkmetmail_frontend =
  self.webpackChunkmetmail_frontend || []).push([
  [533],
  {
    './src/shared/ui/Loader/Loader.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Dark: () => Dark,
          Light: () => Light,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _Light$parameters,
        _Light$parameters2,
        _Dark$parameters,
        _Dark$parameters2,
        shared_config_storybook_ThemeDecorator_ThemeDecorator___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            './src/shared/config/storybook/ThemeDecorator/ThemeDecorator..tsx',
          ),
        app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__('./src/app/providers/ThemeProvider/index.ts');
      function _typeof(obj) {
        return (
          (_typeof =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    'function' == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? 'symbol'
                    : typeof obj;
                }),
          _typeof(obj)
        );
      }
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(source), !0).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source),
              )
            : ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key),
                );
              });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        return (
          (key = (function _toPropertyKey(arg) {
            var key = (function _toPrimitive(input, hint) {
              if ('object' !== _typeof(input) || null === input) return input;
              var prim = input[Symbol.toPrimitive];
              if (void 0 !== prim) {
                var res = prim.call(input, hint || 'default');
                if ('object' !== _typeof(res)) return res;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.',
                );
              }
              return ('string' === hint ? String : Number)(input);
            })(arg, 'string');
            return 'symbol' === _typeof(key) ? key : String(key);
          })(key)) in obj
            ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: 'shared/Loader',
        component: __webpack_require__('./src/shared/ui/Loader/Loader.tsx').a,
        parameters: { layout: 'fullscreen' },
      };
      var Light = { args: {} },
        Dark = {
          args: {},
          decorators: [
            (0,
            shared_config_storybook_ThemeDecorator_ThemeDecorator___WEBPACK_IMPORTED_MODULE_0__.F)(
              app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__.Q2.DARK,
            ),
          ],
        };
      (Light.parameters = _objectSpread(
        _objectSpread({}, Light.parameters),
        {},
        {
          docs: _objectSpread(
            _objectSpread(
              {},
              null === (_Light$parameters = Light.parameters) ||
                void 0 === _Light$parameters
                ? void 0
                : _Light$parameters.docs,
            ),
            {},
            {
              source: _objectSpread(
                { originalSource: '{\n  args: {}\n}' },
                null === (_Light$parameters2 = Light.parameters) ||
                  void 0 === _Light$parameters2 ||
                  null === (_Light$parameters2 = _Light$parameters2.docs) ||
                  void 0 === _Light$parameters2
                  ? void 0
                  : _Light$parameters2.source,
              ),
            },
          ),
        },
      )),
        (Dark.parameters = _objectSpread(
          _objectSpread({}, Dark.parameters),
          {},
          {
            docs: _objectSpread(
              _objectSpread(
                {},
                null === (_Dark$parameters = Dark.parameters) ||
                  void 0 === _Dark$parameters
                  ? void 0
                  : _Dark$parameters.docs,
              ),
              {},
              {
                source: _objectSpread(
                  {
                    originalSource:
                      '{\n  args: {},\n  decorators: [ThemeDecorator(Theme.DARK)]\n}',
                  },
                  null === (_Dark$parameters2 = Dark.parameters) ||
                    void 0 === _Dark$parameters2 ||
                    null === (_Dark$parameters2 = _Dark$parameters2.docs) ||
                    void 0 === _Dark$parameters2
                    ? void 0
                    : _Dark$parameters2.source,
                ),
              },
            ),
          },
        ));
      var __namedExportsOrder = ['Light', 'Dark'];
    },
    './src/shared/lib/classNames/classNames.ts': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null != _i) {
              var _s,
                _e,
                _x,
                _r,
                _arr = [],
                _n = !0,
                _d = !1;
              try {
                if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
                  if (Object(_i) !== _i) return;
                  _n = !1;
                } else
                  for (
                    ;
                    !(_n = (_s = _x.call(_i)).done) &&
                    (_arr.push(_s.value), _arr.length !== i);
                    _n = !0
                  );
              } catch (err) {
                (_d = !0), (_e = err);
              } finally {
                try {
                  if (
                    !_n &&
                    null != _i.return &&
                    ((_r = _i.return()), Object(_r) !== _r)
                  )
                    return;
                } finally {
                  if (_d) throw _e;
                }
              }
              return _arr;
            }
          })(arr, i) ||
          _unsupportedIterableToArray(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function _toConsumableArray(arr) {
        return (
          (function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return _arrayLikeToArray(arr);
          })(arr) ||
          (function _iterableToArray(iter) {
            if (
              ('undefined' != typeof Symbol && null != iter[Symbol.iterator]) ||
              null != iter['@@iterator']
            )
              return Array.from(iter);
          })(arr) ||
          _unsupportedIterableToArray(arr) ||
          (function _nonIterableSpread() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (o) {
          if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          return (
            'Object' === n && o.constructor && (n = o.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(o)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? _arrayLikeToArray(o, minLen)
              : void 0
          );
        }
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function classNames(cls) {
        var mode =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return [cls]
          .concat(
            _toConsumableArray(
              (arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : []
              ).filter(Boolean),
            ),
            _toConsumableArray(
              Object.entries(mode)
                .filter(function (_ref) {
                  var _ref2 = _slicedToArray(_ref, 2),
                    value = (_ref2[0], _ref2[1]);
                  return Boolean(value);
                })
                .map(function (_ref3) {
                  return _slicedToArray(_ref3, 1)[0];
                }),
            ),
          )
          .join(' ');
      }
      __webpack_require__.d(__webpack_exports__, { A: () => classNames });
    },
    './src/shared/ui/Loader/Loader.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { a: () => Loader });
      var classNames = __webpack_require__(
          './src/shared/lib/classNames/classNames.ts',
        ),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag,
        ),
        styleDomAPI = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleDomAPI.js',
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertBySelector.js',
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes,
        ),
        insertStyleElement = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertStyleElement.js',
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleTagTransform.js',
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        Loader_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Loader/Loader.module.scss',
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, 'head')),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Loader_module.Z, options);
      const Loader_Loader_module =
        Loader_module.Z && Loader_module.Z.locals
          ? Loader_module.Z.locals
          : void 0;
      var jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        ),
        Loader = function Loader(props) {
          var className = props.className;
          return (0, jsx_runtime.jsxs)('div', {
            className: (0, classNames.A)(Loader_Loader_module['lds-grid'], {}, [
              className,
            ]),
            children: [
              (0, jsx_runtime.jsx)('div', {}),
              (0, jsx_runtime.jsx)('div', {}),
              (0, jsx_runtime.jsx)('div', {}),
              (0, jsx_runtime.jsx)('div', {}),
              (0, jsx_runtime.jsx)('div', {}),
              (0, jsx_runtime.jsx)('div', {}),
              (0, jsx_runtime.jsx)('div', {}),
              (0, jsx_runtime.jsx)('div', {}),
              (0, jsx_runtime.jsx)('div', {}),
            ],
          });
        };
      Loader.displayName = 'Loader';
      try {
        (Loader.displayName = 'Loader'),
          (Loader.__docgenInfo = {
            description: '',
            displayName: 'Loader',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/shared/ui/Loader/Loader.tsx#Loader'] =
              {
                docgenInfo: Loader.__docgenInfo,
                name: 'Loader',
                path: 'src/shared/ui/Loader/Loader.tsx#Loader',
              });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Loader/Loader.module.scss':
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/sourceMaps.js',
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/api.js',
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '.src-shared-ui-Loader-Loader-module__lds-grid--qbWUs{display:inline-block;position:relative;width:80px;height:80px}.src-shared-ui-Loader-Loader-module__lds-grid--qbWUs div{position:absolute;width:16px;height:16px;border-radius:50%;background:var(--inverted-bg-color);animation:src-shared-ui-Loader-Loader-module__lds-grid--qbWUs 1.2s linear infinite}.src-shared-ui-Loader-Loader-module__lds-grid--qbWUs div:nth-child(1){top:8px;left:8px;animation-delay:0s}.src-shared-ui-Loader-Loader-module__lds-grid--qbWUs div:nth-child(2){top:8px;left:32px;animation-delay:-0.4s}.src-shared-ui-Loader-Loader-module__lds-grid--qbWUs div:nth-child(3){top:8px;left:56px;animation-delay:-0.8s}.src-shared-ui-Loader-Loader-module__lds-grid--qbWUs div:nth-child(4){top:32px;left:8px;animation-delay:-0.4s}.src-shared-ui-Loader-Loader-module__lds-grid--qbWUs div:nth-child(5){top:32px;left:32px;animation-delay:-0.8s}.src-shared-ui-Loader-Loader-module__lds-grid--qbWUs div:nth-child(6){top:32px;left:56px;animation-delay:-1.2s}.src-shared-ui-Loader-Loader-module__lds-grid--qbWUs div:nth-child(7){top:56px;left:8px;animation-delay:-0.8s}.src-shared-ui-Loader-Loader-module__lds-grid--qbWUs div:nth-child(8){top:56px;left:32px;animation-delay:-1.2s}.src-shared-ui-Loader-Loader-module__lds-grid--qbWUs div:nth-child(9){top:56px;left:56px;animation-delay:-1.6s}@keyframes src-shared-ui-Loader-Loader-module__lds-grid--qbWUs{0%,100%{opacity:1}50%{opacity:.5}}',
          '',
          {
            version: 3,
            sources: ['webpack://./src/shared/ui/Loader/Loader.module.scss'],
            names: [],
            mappings:
              'AAAA,qDACE,oBAAA,CACA,iBAAA,CACA,UAAA,CACA,WAAA,CAGF,yDACE,iBAAA,CACA,UAAA,CACA,WAAA,CACA,iBAAA,CACA,mCAAA,CACA,kFAAA,CAGF,sEACE,OAAA,CACA,QAAA,CACA,kBAAA,CAGF,sEACE,OAAA,CACA,SAAA,CACA,qBAAA,CAGF,sEACE,OAAA,CACA,SAAA,CACA,qBAAA,CAGF,sEACE,QAAA,CACA,QAAA,CACA,qBAAA,CAGF,sEACE,QAAA,CACA,SAAA,CACA,qBAAA,CAGF,sEACE,QAAA,CACA,SAAA,CACA,qBAAA,CAGF,sEACE,QAAA,CACA,QAAA,CACA,qBAAA,CAGF,sEACE,QAAA,CACA,SAAA,CACA,qBAAA,CAGF,sEACE,QAAA,CACA,SAAA,CACA,qBAAA,CAGF,+DACE,QACE,SAAA,CAGF,IACE,UAAA,CAAA',
            sourcesContent: [
              '.lds-grid {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n\n.lds-grid div {\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: var(--inverted-bg-color);\n  animation: lds-grid 1.2s linear infinite;\n}\n\n.lds-grid div:nth-child(1) {\n  top: 8px;\n  left: 8px;\n  animation-delay: 0s;\n}\n\n.lds-grid div:nth-child(2) {\n  top: 8px;\n  left: 32px;\n  animation-delay: -0.4s;\n}\n\n.lds-grid div:nth-child(3) {\n  top: 8px;\n  left: 56px;\n  animation-delay: -0.8s;\n}\n\n.lds-grid div:nth-child(4) {\n  top: 32px;\n  left: 8px;\n  animation-delay: -0.4s;\n}\n\n.lds-grid div:nth-child(5) {\n  top: 32px;\n  left: 32px;\n  animation-delay: -0.8s;\n}\n\n.lds-grid div:nth-child(6) {\n  top: 32px;\n  left: 56px;\n  animation-delay: -1.2s;\n}\n\n.lds-grid div:nth-child(7) {\n  top: 56px;\n  left: 8px;\n  animation-delay: -0.8s;\n}\n\n.lds-grid div:nth-child(8) {\n  top: 56px;\n  left: 32px;\n  animation-delay: -1.2s;\n}\n\n.lds-grid div:nth-child(9) {\n  top: 56px;\n  left: 56px;\n  animation-delay: -1.6s;\n}\n\n@keyframes lds-grid {\n  0%, 100% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.5;\n  }\n}\n',
            ],
            sourceRoot: '',
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            'lds-grid': 'src-shared-ui-Loader-Loader-module__lds-grid--qbWUs',
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
