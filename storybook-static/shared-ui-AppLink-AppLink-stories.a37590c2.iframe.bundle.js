'use strict';
(self.webpackChunkmetmail_frontend =
  self.webpackChunkmetmail_frontend || []).push([
  [210],
  {
    './src/shared/ui/AppLink/AppLink.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Primary: () => Primary,
          PrimaryDark: () => PrimaryDark,
          PrimaryInverted: () => PrimaryInverted,
          PrimaryInvertedDark: () => PrimaryInvertedDark,
          Secondary: () => Secondary,
          SecondaryDark: () => SecondaryDark,
          SecondaryInverted: () => SecondaryInverted,
          SecondaryInvertedDark: () => SecondaryInvertedDark,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _Primary$parameters,
        _Primary$parameters2,
        _PrimaryInverted$para,
        _PrimaryInverted$para2,
        _Secondary$parameters,
        _Secondary$parameters2,
        _SecondaryInverted$pa,
        _SecondaryInverted$pa2,
        _PrimaryDark$paramete,
        _PrimaryDark$paramete2,
        _PrimaryInvertedDark$,
        _PrimaryInvertedDark$2,
        _SecondaryDark$parame,
        _SecondaryDark$parame2,
        _SecondaryInvertedDar,
        _SecondaryInvertedDar2,
        shared_config_storybook_ThemeDecorator_ThemeDecorator___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            './src/shared/config/storybook/ThemeDecorator/ThemeDecorator..tsx',
          ),
        app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__('./src/app/providers/ThemeProvider/index.ts'),
        _AppLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/shared/ui/AppLink/AppLink.tsx',
        );
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
        title: 'shared/AppLink',
        component: _AppLink__WEBPACK_IMPORTED_MODULE_2__.F,
        parameters: { layout: 'fullscreen' },
      };
      var Primary = { args: { to: '/', children: 'Link' } },
        PrimaryInverted = {
          args: {
            to: '/',
            children: 'Link',
            theme: _AppLink__WEBPACK_IMPORTED_MODULE_2__.u.PRIMARY_INVERTED,
          },
        },
        Secondary = {
          args: {
            to: '/',
            children: 'Link',
            theme: _AppLink__WEBPACK_IMPORTED_MODULE_2__.u.SECONDARY,
          },
        },
        SecondaryInverted = {
          args: {
            to: '/',
            children: 'Link',
            theme: _AppLink__WEBPACK_IMPORTED_MODULE_2__.u.SECONDARY_INVERTED,
          },
        },
        PrimaryDark = {
          args: { to: '/', children: 'Link' },
          decorators: [
            (0,
            shared_config_storybook_ThemeDecorator_ThemeDecorator___WEBPACK_IMPORTED_MODULE_0__.F)(
              app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__.Q2.DARK,
            ),
          ],
        },
        PrimaryInvertedDark = {
          args: {
            to: '/',
            children: 'Link',
            theme: _AppLink__WEBPACK_IMPORTED_MODULE_2__.u.PRIMARY_INVERTED,
          },
          decorators: [
            (0,
            shared_config_storybook_ThemeDecorator_ThemeDecorator___WEBPACK_IMPORTED_MODULE_0__.F)(
              app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__.Q2.DARK,
            ),
          ],
        },
        SecondaryDark = {
          args: {
            to: '/',
            children: 'Link',
            theme: _AppLink__WEBPACK_IMPORTED_MODULE_2__.u.SECONDARY,
          },
          decorators: [
            (0,
            shared_config_storybook_ThemeDecorator_ThemeDecorator___WEBPACK_IMPORTED_MODULE_0__.F)(
              app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__.Q2.DARK,
            ),
          ],
        },
        SecondaryInvertedDark = {
          args: {
            to: '/',
            children: 'Link',
            theme: _AppLink__WEBPACK_IMPORTED_MODULE_2__.u.SECONDARY_INVERTED,
          },
          decorators: [
            (0,
            shared_config_storybook_ThemeDecorator_ThemeDecorator___WEBPACK_IMPORTED_MODULE_0__.F)(
              app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__.Q2.DARK,
            ),
          ],
        };
      (Primary.parameters = _objectSpread(
        _objectSpread({}, Primary.parameters),
        {},
        {
          docs: _objectSpread(
            _objectSpread(
              {},
              null === (_Primary$parameters = Primary.parameters) ||
                void 0 === _Primary$parameters
                ? void 0
                : _Primary$parameters.docs,
            ),
            {},
            {
              source: _objectSpread(
                {
                  originalSource:
                    "{\n  args: {\n    to: '/',\n    children: 'Link'\n  }\n}",
                },
                null === (_Primary$parameters2 = Primary.parameters) ||
                  void 0 === _Primary$parameters2 ||
                  null === (_Primary$parameters2 = _Primary$parameters2.docs) ||
                  void 0 === _Primary$parameters2
                  ? void 0
                  : _Primary$parameters2.source,
              ),
            },
          ),
        },
      )),
        (PrimaryInverted.parameters = _objectSpread(
          _objectSpread({}, PrimaryInverted.parameters),
          {},
          {
            docs: _objectSpread(
              _objectSpread(
                {},
                null === (_PrimaryInverted$para = PrimaryInverted.parameters) ||
                  void 0 === _PrimaryInverted$para
                  ? void 0
                  : _PrimaryInverted$para.docs,
              ),
              {},
              {
                source: _objectSpread(
                  {
                    originalSource:
                      "{\n  args: {\n    to: '/',\n    children: 'Link',\n    theme: AppLinkTheme.PRIMARY_INVERTED\n  }\n}",
                  },
                  null ===
                    (_PrimaryInverted$para2 = PrimaryInverted.parameters) ||
                    void 0 === _PrimaryInverted$para2 ||
                    null ===
                      (_PrimaryInverted$para2 = _PrimaryInverted$para2.docs) ||
                    void 0 === _PrimaryInverted$para2
                    ? void 0
                    : _PrimaryInverted$para2.source,
                ),
              },
            ),
          },
        )),
        (Secondary.parameters = _objectSpread(
          _objectSpread({}, Secondary.parameters),
          {},
          {
            docs: _objectSpread(
              _objectSpread(
                {},
                null === (_Secondary$parameters = Secondary.parameters) ||
                  void 0 === _Secondary$parameters
                  ? void 0
                  : _Secondary$parameters.docs,
              ),
              {},
              {
                source: _objectSpread(
                  {
                    originalSource:
                      "{\n  args: {\n    to: '/',\n    children: 'Link',\n    theme: AppLinkTheme.SECONDARY\n  }\n}",
                  },
                  null === (_Secondary$parameters2 = Secondary.parameters) ||
                    void 0 === _Secondary$parameters2 ||
                    null ===
                      (_Secondary$parameters2 = _Secondary$parameters2.docs) ||
                    void 0 === _Secondary$parameters2
                    ? void 0
                    : _Secondary$parameters2.source,
                ),
              },
            ),
          },
        )),
        (SecondaryInverted.parameters = _objectSpread(
          _objectSpread({}, SecondaryInverted.parameters),
          {},
          {
            docs: _objectSpread(
              _objectSpread(
                {},
                null ===
                  (_SecondaryInverted$pa = SecondaryInverted.parameters) ||
                  void 0 === _SecondaryInverted$pa
                  ? void 0
                  : _SecondaryInverted$pa.docs,
              ),
              {},
              {
                source: _objectSpread(
                  {
                    originalSource:
                      "{\n  args: {\n    to: '/',\n    children: 'Link',\n    theme: AppLinkTheme.SECONDARY_INVERTED\n  }\n}",
                  },
                  null ===
                    (_SecondaryInverted$pa2 = SecondaryInverted.parameters) ||
                    void 0 === _SecondaryInverted$pa2 ||
                    null ===
                      (_SecondaryInverted$pa2 = _SecondaryInverted$pa2.docs) ||
                    void 0 === _SecondaryInverted$pa2
                    ? void 0
                    : _SecondaryInverted$pa2.source,
                ),
              },
            ),
          },
        )),
        (PrimaryDark.parameters = _objectSpread(
          _objectSpread({}, PrimaryDark.parameters),
          {},
          {
            docs: _objectSpread(
              _objectSpread(
                {},
                null === (_PrimaryDark$paramete = PrimaryDark.parameters) ||
                  void 0 === _PrimaryDark$paramete
                  ? void 0
                  : _PrimaryDark$paramete.docs,
              ),
              {},
              {
                source: _objectSpread(
                  {
                    originalSource:
                      "{\n  args: {\n    to: '/',\n    children: 'Link'\n  },\n  decorators: [ThemeDecorator(Theme.DARK)]\n}",
                  },
                  null === (_PrimaryDark$paramete2 = PrimaryDark.parameters) ||
                    void 0 === _PrimaryDark$paramete2 ||
                    null ===
                      (_PrimaryDark$paramete2 = _PrimaryDark$paramete2.docs) ||
                    void 0 === _PrimaryDark$paramete2
                    ? void 0
                    : _PrimaryDark$paramete2.source,
                ),
              },
            ),
          },
        )),
        (PrimaryInvertedDark.parameters = _objectSpread(
          _objectSpread({}, PrimaryInvertedDark.parameters),
          {},
          {
            docs: _objectSpread(
              _objectSpread(
                {},
                null ===
                  (_PrimaryInvertedDark$ = PrimaryInvertedDark.parameters) ||
                  void 0 === _PrimaryInvertedDark$
                  ? void 0
                  : _PrimaryInvertedDark$.docs,
              ),
              {},
              {
                source: _objectSpread(
                  {
                    originalSource:
                      "{\n  args: {\n    to: '/',\n    children: 'Link',\n    theme: AppLinkTheme.PRIMARY_INVERTED\n  },\n  decorators: [ThemeDecorator(Theme.DARK)]\n}",
                  },
                  null ===
                    (_PrimaryInvertedDark$2 = PrimaryInvertedDark.parameters) ||
                    void 0 === _PrimaryInvertedDark$2 ||
                    null ===
                      (_PrimaryInvertedDark$2 = _PrimaryInvertedDark$2.docs) ||
                    void 0 === _PrimaryInvertedDark$2
                    ? void 0
                    : _PrimaryInvertedDark$2.source,
                ),
              },
            ),
          },
        )),
        (SecondaryDark.parameters = _objectSpread(
          _objectSpread({}, SecondaryDark.parameters),
          {},
          {
            docs: _objectSpread(
              _objectSpread(
                {},
                null === (_SecondaryDark$parame = SecondaryDark.parameters) ||
                  void 0 === _SecondaryDark$parame
                  ? void 0
                  : _SecondaryDark$parame.docs,
              ),
              {},
              {
                source: _objectSpread(
                  {
                    originalSource:
                      "{\n  args: {\n    to: '/',\n    children: 'Link',\n    theme: AppLinkTheme.SECONDARY\n  },\n  decorators: [ThemeDecorator(Theme.DARK)]\n}",
                  },
                  null ===
                    (_SecondaryDark$parame2 = SecondaryDark.parameters) ||
                    void 0 === _SecondaryDark$parame2 ||
                    null ===
                      (_SecondaryDark$parame2 = _SecondaryDark$parame2.docs) ||
                    void 0 === _SecondaryDark$parame2
                    ? void 0
                    : _SecondaryDark$parame2.source,
                ),
              },
            ),
          },
        )),
        (SecondaryInvertedDark.parameters = _objectSpread(
          _objectSpread({}, SecondaryInvertedDark.parameters),
          {},
          {
            docs: _objectSpread(
              _objectSpread(
                {},
                null ===
                  (_SecondaryInvertedDar = SecondaryInvertedDark.parameters) ||
                  void 0 === _SecondaryInvertedDar
                  ? void 0
                  : _SecondaryInvertedDar.docs,
              ),
              {},
              {
                source: _objectSpread(
                  {
                    originalSource:
                      "{\n  args: {\n    to: '/',\n    children: 'Link',\n    theme: AppLinkTheme.SECONDARY_INVERTED\n  },\n  decorators: [ThemeDecorator(Theme.DARK)]\n}",
                  },
                  null ===
                    (_SecondaryInvertedDar2 =
                      SecondaryInvertedDark.parameters) ||
                    void 0 === _SecondaryInvertedDar2 ||
                    null ===
                      (_SecondaryInvertedDar2 = _SecondaryInvertedDar2.docs) ||
                    void 0 === _SecondaryInvertedDar2
                    ? void 0
                    : _SecondaryInvertedDar2.source,
                ),
              },
            ),
          },
        ));
      var __namedExportsOrder = [
        'Primary',
        'PrimaryInverted',
        'Secondary',
        'SecondaryInverted',
        'PrimaryDark',
        'PrimaryInvertedDark',
        'SecondaryDark',
        'SecondaryInvertedDark',
      ];
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
    './src/shared/ui/AppLink/AppLink.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        F: () => AppLink,
        u: () => AppLinkTheme,
      });
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
        AppLink_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/AppLink/AppLink.module.scss',
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, 'head')),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(AppLink_module.Z, options);
      const AppLink_AppLink_module =
        AppLink_module.Z && AppLink_module.Z.locals
          ? AppLink_module.Z.locals
          : void 0;
      var dist = __webpack_require__(
          './node_modules/react-router-dom/dist/index.js',
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        );
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
      var _excluded = ['to', 'theme', 'className', 'children'];
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
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var AppLinkTheme = (function (AppLinkTheme) {
          return (
            (AppLinkTheme.PRIMARY = 'primary'),
            (AppLinkTheme.PRIMARY_INVERTED = 'primary--inverted'),
            (AppLinkTheme.SECONDARY = 'secondary'),
            (AppLinkTheme.SECONDARY_INVERTED = 'secondary--inverted'),
            AppLinkTheme
          );
        })({}),
        AppLink = function AppLink(props) {
          var to = props.to,
            _props$theme = props.theme,
            theme =
              void 0 === _props$theme ? AppLinkTheme.PRIMARY : _props$theme,
            className = props.className,
            children = props.children,
            otherProps = _objectWithoutProperties(props, _excluded);
          return (0, jsx_runtime.jsx)(
            dist.rU,
            _objectSpread(
              _objectSpread(
                {
                  to,
                  className: (0, classNames.A)('', {}, [
                    className,
                    AppLink_AppLink_module[theme],
                  ]),
                },
                otherProps,
              ),
              {},
              { children },
            ),
          );
        };
      AppLink.displayName = 'AppLink';
      try {
        (AppLink.displayName = 'AppLink'),
          (AppLink.__docgenInfo = {
            description: '',
            displayName: 'AppLink',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"primary"' },
                    { value: '"primary--inverted"' },
                    { value: '"secondary"' },
                    { value: '"secondary--inverted"' },
                  ],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/shared/ui/AppLink/AppLink.tsx#AppLink'
            ] = {
              docgenInfo: AppLink.__docgenInfo,
              name: 'AppLink',
              path: 'src/shared/ui/AppLink/AppLink.tsx#AppLink',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/AppLink/AppLink.module.scss':
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
          '.src-shared-ui-AppLink-AppLink-module__primary--lPwbq{color:var(--primary-color)}.src-shared-ui-AppLink-AppLink-module__primary--inverted--v4By6{color:var(--inverted-primary-color)}.src-shared-ui-AppLink-AppLink-module__secondary--E8eho{color:var(--secondary-color)}.src-shared-ui-AppLink-AppLink-module__secondary--inverted--y5Su2{color:var(--inverted-secondary-color)}',
          '',
          {
            version: 3,
            sources: ['webpack://./src/shared/ui/AppLink/AppLink.module.scss'],
            names: [],
            mappings:
              'AAAA,sDACE,0BAAA,CAGF,gEACE,mCAAA,CAGF,wDACE,4BAAA,CAGF,kEACE,qCAAA',
            sourcesContent: [
              '.primary {\n  color: var(--primary-color);\n}\n\n.primary--inverted {\n  color: var(--inverted-primary-color)\n}\n\n.secondary {\n  color: var(--secondary-color);\n}\n\n.secondary--inverted {\n  color: var(--inverted-secondary-color)\n}',
            ],
            sourceRoot: '',
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            primary: 'src-shared-ui-AppLink-AppLink-module__primary--lPwbq',
            'primary--inverted':
              'src-shared-ui-AppLink-AppLink-module__primary--inverted--v4By6',
            secondary: 'src-shared-ui-AppLink-AppLink-module__secondary--E8eho',
            'secondary--inverted':
              'src-shared-ui-AppLink-AppLink-module__secondary--inverted--y5Su2',
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
