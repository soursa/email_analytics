'use strict';
(self.webpackChunkmetmail_frontend =
  self.webpackChunkmetmail_frontend || []).push([
  [967],
  {
    './src/pages/NotFoundPage/ui/NotFoundPage.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Dark: () => Dark,
          Light: () => Light,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => NotFoundPage_stories,
        });
      var ThemeDecorator_ = __webpack_require__(
          './src/shared/config/storybook/ThemeDecorator/ThemeDecorator..tsx',
        ),
        ThemeProvider = __webpack_require__(
          './src/app/providers/ThemeProvider/index.ts',
        ),
        classNames = __webpack_require__(
          './src/shared/lib/classNames/classNames.ts',
        ),
        es = __webpack_require__(
          './node_modules/react-i18next/dist/es/index.js',
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
        NotFoundPage_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/NotFoundPage/ui/NotFoundPage.module.scss',
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, 'head')),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(NotFoundPage_module.Z, options);
      const ui_NotFoundPage_module =
        NotFoundPage_module.Z && NotFoundPage_module.Z.locals
          ? NotFoundPage_module.Z.locals
          : void 0;
      var jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        ),
        NotFoundPage = function NotFoundPage() {
          var t = (0, es.$G)().t;
          return (0, jsx_runtime.jsx)('div', {
            className: (0, classNames.A)(
              ui_NotFoundPage_module.NotFoundPage,
              {},
              [],
            ),
            children: t('Page not found'),
          });
        };
      NotFoundPage.displayName = 'NotFoundPage';
      const ui_NotFoundPage = NotFoundPage;
      try {
        (NotFoundPage.displayName = 'NotFoundPage'),
          (NotFoundPage.__docgenInfo = {
            description: '',
            displayName: 'NotFoundPage',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/pages/NotFoundPage/ui/NotFoundPage.tsx#NotFoundPage'
            ] = {
              docgenInfo: NotFoundPage.__docgenInfo,
              name: 'NotFoundPage',
              path: 'src/pages/NotFoundPage/ui/NotFoundPage.tsx#NotFoundPage',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var _Light$parameters,
        _Light$parameters2,
        _Dark$parameters,
        _Dark$parameters2;
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
      const NotFoundPage_stories = {
        title: 'pages/NotFoundPage',
        component: ui_NotFoundPage,
        parameters: { layout: 'fullscreen' },
      };
      var Light = { args: {} },
        Dark = {
          args: {},
          decorators: [(0, ThemeDecorator_.F)(ThemeProvider.Q2.DARK)],
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
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/NotFoundPage/ui/NotFoundPage.module.scss':
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
          '.src-pages-NotFoundPage-ui-NotFoundPage-module__NotFoundPage--s3qI9{font-size:50px;display:flex;justify-content:center;align-items:center;height:100%}',
          '',
          {
            version: 3,
            sources: [
              'webpack://./src/pages/NotFoundPage/ui/NotFoundPage.module.scss',
            ],
            names: [],
            mappings:
              'AAAA,oEACE,cAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,WAAA',
            sourcesContent: [
              '.NotFoundPage {\n  font-size: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}',
            ],
            sourceRoot: '',
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            NotFoundPage:
              'src-pages-NotFoundPage-ui-NotFoundPage-module__NotFoundPage--s3qI9',
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
