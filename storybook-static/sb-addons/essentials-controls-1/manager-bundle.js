try {
  var Ly = Object.create;
  var da = Object.defineProperty;
  var jy = Object.getOwnPropertyDescriptor;
  var qy = Object.getOwnPropertyNames;
  var My = Object.getPrototypeOf,
    $y = Object.prototype.hasOwnProperty;
  var ur = ((e) =>
    typeof require < 'u'
      ? require
      : typeof Proxy < 'u'
      ? new Proxy(e, { get: (t, r) => (typeof require < 'u' ? require : t)[r] })
      : e)(function (e) {
    if (typeof require < 'u') return require.apply(this, arguments);
    throw Error('Dynamic require of "' + e + '" is not supported');
  });
  var Xe = (e, t) => () => (e && (t = e((e = 0))), t);
  var S = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    pu = (e, t) => {
      for (var r in t) da(e, r, { get: t[r], enumerable: !0 });
    },
    Uy = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let a of qy(t))
          !$y.call(e, a) &&
            a !== r &&
            da(e, a, {
              get: () => t[a],
              enumerable: !(n = jy(t, a)) || n.enumerable,
            });
      return e;
    };
  var fe = (e, t, r) => (
    (r = e != null ? Ly(My(e)) : {}),
    Uy(
      t || !e || !e.__esModule
        ? da(r, 'default', { value: e, enumerable: !0 })
        : r,
      e,
    )
  );
  var l = Xe(() => {});
  var c = Xe(() => {});
  var d = Xe(() => {});
  var g,
    Kr,
    Je,
    fu,
    gI,
    yI,
    bI,
    hu,
    AI,
    he,
    sr,
    ha,
    EI,
    vI,
    DI,
    CI,
    mu,
    xI,
    me,
    Le,
    FI,
    ge,
    SI,
    gu,
    rt,
    wI,
    Fe,
    ae,
    BI,
    wt = Xe(() => {
      l();
      c();
      d();
      (g = __REACT__),
        ({
          Children: Kr,
          Component: Je,
          Fragment: fu,
          Profiler: gI,
          PureComponent: yI,
          StrictMode: bI,
          Suspense: hu,
          __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: AI,
          cloneElement: he,
          createContext: sr,
          createElement: ha,
          createFactory: EI,
          createRef: vI,
          forwardRef: DI,
          isValidElement: CI,
          lazy: mu,
          memo: xI,
          useCallback: me,
          useContext: Le,
          useDebugValue: FI,
          useEffect: ge,
          useImperativeHandle: SI,
          useLayoutEffect: gu,
          useMemo: rt,
          useReducer: wI,
          useRef: Fe,
          useState: ae,
          version: BI,
        } = __REACT__);
    });
  var vu = {};
  pu(vu, {
    A: () => Gy,
    ActionBar: () => ba,
    AddonPanel: () => Aa,
    Badge: () => Wy,
    Bar: () => Vy,
    Blockquote: () => Ky,
    Button: () => Yy,
    ClipboardCode: () => Xy,
    Code: () => Ea,
    DL: () => Jy,
    Div: () => Qy,
    DocumentWrapper: () => Zy,
    ErrorFormatter: () => va,
    FlexBar: () => Da,
    Form: () => Be,
    H1: () => e2,
    H2: () => Ca,
    H3: () => xa,
    H4: () => t2,
    H5: () => r2,
    H6: () => n2,
    HR: () => a2,
    IconButton: () => ht,
    IconButtonSkeleton: () => Fa,
    Icons: () => Te,
    Img: () => o2,
    LI: () => i2,
    Link: () => lr,
    ListItem: () => u2,
    Loader: () => Sa,
    OL: () => s2,
    P: () => l2,
    Placeholder: () => c2,
    Pre: () => d2,
    ResetWrapper: () => wa,
    ScrollArea: () => p2,
    Separator: () => f2,
    Spaced: () => h2,
    Span: () => m2,
    StorybookIcon: () => g2,
    StorybookLogo: () => y2,
    Symbols: () => b2,
    SyntaxHighlighter: () => Yr,
    TT: () => A2,
    TabBar: () => E2,
    TabButton: () => v2,
    TabWrapper: () => D2,
    Table: () => C2,
    Tabs: () => x2,
    TabsState: () => Ba,
    TooltipLinkList: () => F2,
    TooltipMessage: () => S2,
    TooltipNote: () => Ta,
    UL: () => w2,
    WithTooltip: () => Xr,
    WithTooltipPure: () => _a,
    Zoom: () => Oa,
    codeCommon: () => Bt,
    components: () => Ra,
    createCopyToClipboardFunction: () => B2,
    default: () => zy,
    getStoryHref: () => Pa,
    icons: () => T2,
    interleaveSeparators: () => _2,
    nameSpaceClassNames: () => Ia,
    resetComponents: () => O2,
    withReset: () => Tt,
  });
  var zy,
    Gy,
    ba,
    Aa,
    Wy,
    Vy,
    Ky,
    Yy,
    Xy,
    Ea,
    Jy,
    Qy,
    Zy,
    va,
    Da,
    Be,
    e2,
    Ca,
    xa,
    t2,
    r2,
    n2,
    a2,
    ht,
    Fa,
    Te,
    o2,
    i2,
    lr,
    u2,
    Sa,
    s2,
    l2,
    c2,
    d2,
    wa,
    p2,
    f2,
    h2,
    m2,
    g2,
    y2,
    b2,
    Yr,
    A2,
    E2,
    v2,
    D2,
    C2,
    x2,
    Ba,
    F2,
    S2,
    Ta,
    w2,
    Xr,
    _a,
    Oa,
    Bt,
    Ra,
    B2,
    Pa,
    T2,
    _2,
    Ia,
    O2,
    Tt,
    cr = Xe(() => {
      l();
      c();
      d();
      (zy = __STORYBOOKCOMPONENTS__),
        ({
          A: Gy,
          ActionBar: ba,
          AddonPanel: Aa,
          Badge: Wy,
          Bar: Vy,
          Blockquote: Ky,
          Button: Yy,
          ClipboardCode: Xy,
          Code: Ea,
          DL: Jy,
          Div: Qy,
          DocumentWrapper: Zy,
          ErrorFormatter: va,
          FlexBar: Da,
          Form: Be,
          H1: e2,
          H2: Ca,
          H3: xa,
          H4: t2,
          H5: r2,
          H6: n2,
          HR: a2,
          IconButton: ht,
          IconButtonSkeleton: Fa,
          Icons: Te,
          Img: o2,
          LI: i2,
          Link: lr,
          ListItem: u2,
          Loader: Sa,
          OL: s2,
          P: l2,
          Placeholder: c2,
          Pre: d2,
          ResetWrapper: wa,
          ScrollArea: p2,
          Separator: f2,
          Spaced: h2,
          Span: m2,
          StorybookIcon: g2,
          StorybookLogo: y2,
          Symbols: b2,
          SyntaxHighlighter: Yr,
          TT: A2,
          TabBar: E2,
          TabButton: v2,
          TabWrapper: D2,
          Table: C2,
          Tabs: x2,
          TabsState: Ba,
          TooltipLinkList: F2,
          TooltipMessage: S2,
          TooltipNote: Ta,
          UL: w2,
          WithTooltip: Xr,
          WithTooltipPure: _a,
          Zoom: Oa,
          codeCommon: Bt,
          components: Ra,
          createCopyToClipboardFunction: B2,
          getStoryHref: Pa,
          icons: T2,
          interleaveSeparators: _2,
          nameSpaceClassNames: Ia,
          resetComponents: O2,
          withReset: Tt,
        } = __STORYBOOKCOMPONENTS__);
    });
  var _e,
    dr,
    ka = Xe(() => {
      l();
      c();
      d();
      (_e = (e) => `control-${e.replace(/\s+/g, '-')}`),
        (dr = (e) => `set-${e.replace(/\s+/g, '-')}`);
    });
  var fk,
    hk,
    mk,
    gk,
    Du,
    yk,
    bk,
    Cu,
    Ak,
    Ek,
    vk,
    Dk,
    Ck,
    xk,
    R2,
    xu,
    Fk,
    Sk,
    wk,
    Bk,
    M,
    Na,
    Tk,
    Fu,
    _k,
    La = Xe(() => {
      l();
      c();
      d();
      (fk = __STORYBOOKTHEMING__),
        ({
          CacheProvider: hk,
          ClassNames: mk,
          Global: gk,
          ThemeProvider: Du,
          background: yk,
          color: bk,
          convert: Cu,
          create: Ak,
          createCache: Ek,
          createGlobal: vk,
          createReset: Dk,
          css: Ck,
          darken: xk,
          ensure: R2,
          ignoreSsrWarning: xu,
          isPropValid: Fk,
          jsx: Sk,
          keyframes: wk,
          lighten: Bk,
          styled: M,
          themes: Na,
          typography: Tk,
          useTheme: Fu,
          withTheme: _k,
        } = __STORYBOOKTHEMING__);
    });
  var Va = S((Q7, Ru) => {
    l();
    c();
    d();
    function y1(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
        a[r] = t(e[r], r, e);
      return a;
    }
    Ru.exports = y1;
  });
  var Iu = S((rN, Pu) => {
    l();
    c();
    d();
    function b1() {
      (this.__data__ = []), (this.size = 0);
    }
    Pu.exports = b1;
  });
  var Qr = S((iN, ku) => {
    l();
    c();
    d();
    function A1(e, t) {
      return e === t || (e !== e && t !== t);
    }
    ku.exports = A1;
  });
  var gr = S((cN, Nu) => {
    l();
    c();
    d();
    var E1 = Qr();
    function v1(e, t) {
      for (var r = e.length; r--; ) if (E1(e[r][0], t)) return r;
      return -1;
    }
    Nu.exports = v1;
  });
  var ju = S((hN, Lu) => {
    l();
    c();
    d();
    var D1 = gr(),
      C1 = Array.prototype,
      x1 = C1.splice;
    function F1(e) {
      var t = this.__data__,
        r = D1(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : x1.call(t, r, 1), --this.size, !0;
    }
    Lu.exports = F1;
  });
  var Mu = S((bN, qu) => {
    l();
    c();
    d();
    var S1 = gr();
    function w1(e) {
      var t = this.__data__,
        r = S1(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    qu.exports = w1;
  });
  var Uu = S((DN, $u) => {
    l();
    c();
    d();
    var B1 = gr();
    function T1(e) {
      return B1(this.__data__, e) > -1;
    }
    $u.exports = T1;
  });
  var zu = S((SN, Hu) => {
    l();
    c();
    d();
    var _1 = gr();
    function O1(e, t) {
      var r = this.__data__,
        n = _1(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    Hu.exports = O1;
  });
  var yr = S((_N, Gu) => {
    l();
    c();
    d();
    var R1 = Iu(),
      P1 = ju(),
      I1 = Mu(),
      k1 = Uu(),
      N1 = zu();
    function Pt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Pt.prototype.clear = R1;
    Pt.prototype.delete = P1;
    Pt.prototype.get = I1;
    Pt.prototype.has = k1;
    Pt.prototype.set = N1;
    Gu.exports = Pt;
  });
  var Vu = S((IN, Wu) => {
    l();
    c();
    d();
    var L1 = yr();
    function j1() {
      (this.__data__ = new L1()), (this.size = 0);
    }
    Wu.exports = j1;
  });
  var Yu = S((jN, Ku) => {
    l();
    c();
    d();
    function q1(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    Ku.exports = q1;
  });
  var Ju = S((UN, Xu) => {
    l();
    c();
    d();
    function M1(e) {
      return this.__data__.get(e);
    }
    Xu.exports = M1;
  });
  var Zu = S((WN, Qu) => {
    l();
    c();
    d();
    function $1(e) {
      return this.__data__.has(e);
    }
    Qu.exports = $1;
  });
  var Ka = S((XN, es) => {
    l();
    c();
    d();
    var U1 =
      typeof window == 'object' && window && window.Object === Object && window;
    es.exports = U1;
  });
  var je = S((eL, ts) => {
    l();
    c();
    d();
    var H1 = Ka(),
      z1 = typeof self == 'object' && self && self.Object === Object && self,
      G1 = H1 || z1 || Function('return this')();
    ts.exports = G1;
  });
  var gt = S((aL, rs) => {
    l();
    c();
    d();
    var W1 = je(),
      V1 = W1.Symbol;
    rs.exports = V1;
  });
  var is = S((sL, os) => {
    l();
    c();
    d();
    var ns = gt(),
      as = Object.prototype,
      K1 = as.hasOwnProperty,
      Y1 = as.toString,
      br = ns ? ns.toStringTag : void 0;
    function X1(e) {
      var t = K1.call(e, br),
        r = e[br];
      try {
        e[br] = void 0;
        var n = !0;
      } catch {}
      var a = Y1.call(e);
      return n && (t ? (e[br] = r) : delete e[br]), a;
    }
    os.exports = X1;
  });
  var ss = S((pL, us) => {
    l();
    c();
    d();
    var J1 = Object.prototype,
      Q1 = J1.toString;
    function Z1(e) {
      return Q1.call(e);
    }
    us.exports = Z1;
  });
  var yt = S((gL, ds) => {
    l();
    c();
    d();
    var ls = gt(),
      eb = is(),
      tb = ss(),
      rb = '[object Null]',
      nb = '[object Undefined]',
      cs = ls ? ls.toStringTag : void 0;
    function ab(e) {
      return e == null
        ? e === void 0
          ? nb
          : rb
        : cs && cs in Object(e)
        ? eb(e)
        : tb(e);
    }
    ds.exports = ab;
  });
  var Ue = S((EL, ps) => {
    l();
    c();
    d();
    function ob(e) {
      var t = typeof e;
      return e != null && (t == 'object' || t == 'function');
    }
    ps.exports = ob;
  });
  var Ya = S((xL, fs) => {
    l();
    c();
    d();
    var ib = yt(),
      ub = Ue(),
      sb = '[object AsyncFunction]',
      lb = '[object Function]',
      cb = '[object GeneratorFunction]',
      db = '[object Proxy]';
    function pb(e) {
      if (!ub(e)) return !1;
      var t = ib(e);
      return t == lb || t == cb || t == sb || t == db;
    }
    fs.exports = pb;
  });
  var ms = S((BL, hs) => {
    l();
    c();
    d();
    var fb = je(),
      hb = fb['__core-js_shared__'];
    hs.exports = hb;
  });
  var bs = S((RL, ys) => {
    l();
    c();
    d();
    var Xa = ms(),
      gs = (function () {
        var e = /[^.]+$/.exec((Xa && Xa.keys && Xa.keys.IE_PROTO) || '');
        return e ? 'Symbol(src)_1.' + e : '';
      })();
    function mb(e) {
      return !!gs && gs in e;
    }
    ys.exports = mb;
  });
  var Ja = S((NL, As) => {
    l();
    c();
    d();
    var gb = Function.prototype,
      yb = gb.toString;
    function bb(e) {
      if (e != null) {
        try {
          return yb.call(e);
        } catch {}
        try {
          return e + '';
        } catch {}
      }
      return '';
    }
    As.exports = bb;
  });
  var vs = S((ML, Es) => {
    l();
    c();
    d();
    var Ab = Ya(),
      Eb = bs(),
      vb = Ue(),
      Db = Ja(),
      Cb = /[\\^$.*+?()[\]{}|]/g,
      xb = /^\[object .+?Constructor\]$/,
      Fb = Function.prototype,
      Sb = Object.prototype,
      wb = Fb.toString,
      Bb = Sb.hasOwnProperty,
      Tb = RegExp(
        '^' +
          wb
            .call(Bb)
            .replace(Cb, '\\$&')
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              '$1.*?',
            ) +
          '$',
      );
    function _b(e) {
      if (!vb(e) || Eb(e)) return !1;
      var t = Ab(e) ? Tb : xb;
      return t.test(Db(e));
    }
    Es.exports = _b;
  });
  var Cs = S((zL, Ds) => {
    l();
    c();
    d();
    function Ob(e, t) {
      return e?.[t];
    }
    Ds.exports = Ob;
  });
  var it = S((KL, xs) => {
    l();
    c();
    d();
    var Rb = vs(),
      Pb = Cs();
    function Ib(e, t) {
      var r = Pb(e, t);
      return Rb(r) ? r : void 0;
    }
    xs.exports = Ib;
  });
  var Zr = S((QL, Fs) => {
    l();
    c();
    d();
    var kb = it(),
      Nb = je(),
      Lb = kb(Nb, 'Map');
    Fs.exports = Lb;
  });
  var Ar = S((rj, Ss) => {
    l();
    c();
    d();
    var jb = it(),
      qb = jb(Object, 'create');
    Ss.exports = qb;
  });
  var Ts = S((ij, Bs) => {
    l();
    c();
    d();
    var ws = Ar();
    function Mb() {
      (this.__data__ = ws ? ws(null) : {}), (this.size = 0);
    }
    Bs.exports = Mb;
  });
  var Os = S((cj, _s) => {
    l();
    c();
    d();
    function $b(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    _s.exports = $b;
  });
  var Ps = S((hj, Rs) => {
    l();
    c();
    d();
    var Ub = Ar(),
      Hb = '__lodash_hash_undefined__',
      zb = Object.prototype,
      Gb = zb.hasOwnProperty;
    function Wb(e) {
      var t = this.__data__;
      if (Ub) {
        var r = t[e];
        return r === Hb ? void 0 : r;
      }
      return Gb.call(t, e) ? t[e] : void 0;
    }
    Rs.exports = Wb;
  });
  var ks = S((bj, Is) => {
    l();
    c();
    d();
    var Vb = Ar(),
      Kb = Object.prototype,
      Yb = Kb.hasOwnProperty;
    function Xb(e) {
      var t = this.__data__;
      return Vb ? t[e] !== void 0 : Yb.call(t, e);
    }
    Is.exports = Xb;
  });
  var Ls = S((Dj, Ns) => {
    l();
    c();
    d();
    var Jb = Ar(),
      Qb = '__lodash_hash_undefined__';
    function Zb(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = Jb && t === void 0 ? Qb : t),
        this
      );
    }
    Ns.exports = Zb;
  });
  var qs = S((Sj, js) => {
    l();
    c();
    d();
    var eA = Ts(),
      tA = Os(),
      rA = Ps(),
      nA = ks(),
      aA = Ls();
    function It(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    It.prototype.clear = eA;
    It.prototype.delete = tA;
    It.prototype.get = rA;
    It.prototype.has = nA;
    It.prototype.set = aA;
    js.exports = It;
  });
  var Us = S((_j, $s) => {
    l();
    c();
    d();
    var Ms = qs(),
      oA = yr(),
      iA = Zr();
    function uA() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Ms(),
          map: new (iA || oA)(),
          string: new Ms(),
        });
    }
    $s.exports = uA;
  });
  var zs = S((Ij, Hs) => {
    l();
    c();
    d();
    function sA(e) {
      var t = typeof e;
      return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
        ? e !== '__proto__'
        : e === null;
    }
    Hs.exports = sA;
  });
  var Er = S((jj, Gs) => {
    l();
    c();
    d();
    var lA = zs();
    function cA(e, t) {
      var r = e.__data__;
      return lA(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map;
    }
    Gs.exports = cA;
  });
  var Vs = S((Uj, Ws) => {
    l();
    c();
    d();
    var dA = Er();
    function pA(e) {
      var t = dA(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Ws.exports = pA;
  });
  var Ys = S((Wj, Ks) => {
    l();
    c();
    d();
    var fA = Er();
    function hA(e) {
      return fA(this, e).get(e);
    }
    Ks.exports = hA;
  });
  var Js = S((Xj, Xs) => {
    l();
    c();
    d();
    var mA = Er();
    function gA(e) {
      return mA(this, e).has(e);
    }
    Xs.exports = gA;
  });
  var Zs = S((eq, Qs) => {
    l();
    c();
    d();
    var yA = Er();
    function bA(e, t) {
      var r = yA(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    Qs.exports = bA;
  });
  var en = S((aq, el) => {
    l();
    c();
    d();
    var AA = Us(),
      EA = Vs(),
      vA = Ys(),
      DA = Js(),
      CA = Zs();
    function kt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    kt.prototype.clear = AA;
    kt.prototype.delete = EA;
    kt.prototype.get = vA;
    kt.prototype.has = DA;
    kt.prototype.set = CA;
    el.exports = kt;
  });
  var rl = S((sq, tl) => {
    l();
    c();
    d();
    var xA = yr(),
      FA = Zr(),
      SA = en(),
      wA = 200;
    function BA(e, t) {
      var r = this.__data__;
      if (r instanceof xA) {
        var n = r.__data__;
        if (!FA || n.length < wA - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new SA(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    tl.exports = BA;
  });
  var tn = S((pq, nl) => {
    l();
    c();
    d();
    var TA = yr(),
      _A = Vu(),
      OA = Yu(),
      RA = Ju(),
      PA = Zu(),
      IA = rl();
    function Nt(e) {
      var t = (this.__data__ = new TA(e));
      this.size = t.size;
    }
    Nt.prototype.clear = _A;
    Nt.prototype.delete = OA;
    Nt.prototype.get = RA;
    Nt.prototype.has = PA;
    Nt.prototype.set = IA;
    nl.exports = Nt;
  });
  var ol = S((gq, al) => {
    l();
    c();
    d();
    var kA = '__lodash_hash_undefined__';
    function NA(e) {
      return this.__data__.set(e, kA), this;
    }
    al.exports = NA;
  });
  var ul = S((Eq, il) => {
    l();
    c();
    d();
    function LA(e) {
      return this.__data__.has(e);
    }
    il.exports = LA;
  });
  var Qa = S((xq, sl) => {
    l();
    c();
    d();
    var jA = en(),
      qA = ol(),
      MA = ul();
    function rn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new jA(); ++t < r; ) this.add(e[t]);
    }
    rn.prototype.add = rn.prototype.push = qA;
    rn.prototype.has = MA;
    sl.exports = rn;
  });
  var cl = S((Bq, ll) => {
    l();
    c();
    d();
    function $A(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    ll.exports = $A;
  });
  var Za = S((Rq, dl) => {
    l();
    c();
    d();
    function UA(e, t) {
      return e.has(t);
    }
    dl.exports = UA;
  });
  var eo = S((Nq, pl) => {
    l();
    c();
    d();
    var HA = Qa(),
      zA = cl(),
      GA = Za(),
      WA = 1,
      VA = 2;
    function KA(e, t, r, n, a, o) {
      var i = r & WA,
        u = e.length,
        s = t.length;
      if (u != s && !(i && s > u)) return !1;
      var p = o.get(e),
        y = o.get(t);
      if (p && y) return p == t && y == e;
      var A = -1,
        h = !0,
        m = r & VA ? new HA() : void 0;
      for (o.set(e, t), o.set(t, e); ++A < u; ) {
        var E = e[A],
          b = t[A];
        if (n) var x = i ? n(b, E, A, t, e, o) : n(E, b, A, e, t, o);
        if (x !== void 0) {
          if (x) continue;
          h = !1;
          break;
        }
        if (m) {
          if (
            !zA(t, function (F, B) {
              if (!GA(m, B) && (E === F || a(E, F, r, n, o))) return m.push(B);
            })
          ) {
            h = !1;
            break;
          }
        } else if (!(E === b || a(E, b, r, n, o))) {
          h = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), h;
    }
    pl.exports = KA;
  });
  var to = S((Mq, fl) => {
    l();
    c();
    d();
    var YA = je(),
      XA = YA.Uint8Array;
    fl.exports = XA;
  });
  var ml = S((zq, hl) => {
    l();
    c();
    d();
    function JA(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, a) {
          r[++t] = [a, n];
        }),
        r
      );
    }
    hl.exports = JA;
  });
  var nn = S((Kq, gl) => {
    l();
    c();
    d();
    function QA(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    gl.exports = QA;
  });
  var vl = S((Qq, El) => {
    l();
    c();
    d();
    var yl = gt(),
      bl = to(),
      ZA = Qr(),
      eE = eo(),
      tE = ml(),
      rE = nn(),
      nE = 1,
      aE = 2,
      oE = '[object Boolean]',
      iE = '[object Date]',
      uE = '[object Error]',
      sE = '[object Map]',
      lE = '[object Number]',
      cE = '[object RegExp]',
      dE = '[object Set]',
      pE = '[object String]',
      fE = '[object Symbol]',
      hE = '[object ArrayBuffer]',
      mE = '[object DataView]',
      Al = yl ? yl.prototype : void 0,
      ro = Al ? Al.valueOf : void 0;
    function gE(e, t, r, n, a, o, i) {
      switch (r) {
        case mE:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case hE:
          return !(e.byteLength != t.byteLength || !o(new bl(e), new bl(t)));
        case oE:
        case iE:
        case lE:
          return ZA(+e, +t);
        case uE:
          return e.name == t.name && e.message == t.message;
        case cE:
        case pE:
          return e == t + '';
        case sE:
          var u = tE;
        case dE:
          var s = n & nE;
          if ((u || (u = rE), e.size != t.size && !s)) return !1;
          var p = i.get(e);
          if (p) return p == t;
          (n |= aE), i.set(e, t);
          var y = eE(u(e), u(t), n, a, o, i);
          return i.delete(e), y;
        case fE:
          if (ro) return ro.call(e) == ro.call(t);
      }
      return !1;
    }
    El.exports = gE;
  });
  var an = S((rM, Dl) => {
    l();
    c();
    d();
    function yE(e, t) {
      for (var r = -1, n = t.length, a = e.length; ++r < n; ) e[a + r] = t[r];
      return e;
    }
    Dl.exports = yE;
  });
  var He = S((iM, Cl) => {
    l();
    c();
    d();
    var bE = Array.isArray;
    Cl.exports = bE;
  });
  var no = S((cM, xl) => {
    l();
    c();
    d();
    var AE = an(),
      EE = He();
    function vE(e, t, r) {
      var n = t(e);
      return EE(e) ? n : AE(n, r(e));
    }
    xl.exports = vE;
  });
  var Sl = S((hM, Fl) => {
    l();
    c();
    d();
    function DE(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, a = 0, o = []; ++r < n; ) {
        var i = e[r];
        t(i, r, e) && (o[a++] = i);
      }
      return o;
    }
    Fl.exports = DE;
  });
  var ao = S((bM, wl) => {
    l();
    c();
    d();
    function CE() {
      return [];
    }
    wl.exports = CE;
  });
  var on = S((DM, Tl) => {
    l();
    c();
    d();
    var xE = Sl(),
      FE = ao(),
      SE = Object.prototype,
      wE = SE.propertyIsEnumerable,
      Bl = Object.getOwnPropertySymbols,
      BE = Bl
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                xE(Bl(e), function (t) {
                  return wE.call(e, t);
                }));
          }
        : FE;
    Tl.exports = BE;
  });
  var Ol = S((SM, _l) => {
    l();
    c();
    d();
    function TE(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    _l.exports = TE;
  });
  var Ze = S((_M, Rl) => {
    l();
    c();
    d();
    function _E(e) {
      return e != null && typeof e == 'object';
    }
    Rl.exports = _E;
  });
  var Il = S((IM, Pl) => {
    l();
    c();
    d();
    var OE = yt(),
      RE = Ze(),
      PE = '[object Arguments]';
    function IE(e) {
      return RE(e) && OE(e) == PE;
    }
    Pl.exports = IE;
  });
  var un = S((jM, Ll) => {
    l();
    c();
    d();
    var kl = Il(),
      kE = Ze(),
      Nl = Object.prototype,
      NE = Nl.hasOwnProperty,
      LE = Nl.propertyIsEnumerable,
      jE = kl(
        (function () {
          return arguments;
        })(),
      )
        ? kl
        : function (e) {
            return kE(e) && NE.call(e, 'callee') && !LE.call(e, 'callee');
          };
    Ll.exports = jE;
  });
  var ql = S((UM, jl) => {
    l();
    c();
    d();
    function qE() {
      return !1;
    }
    jl.exports = qE;
  });
  var sn = S((vr, Lt) => {
    l();
    c();
    d();
    var ME = je(),
      $E = ql(),
      Ul = typeof vr == 'object' && vr && !vr.nodeType && vr,
      Ml = Ul && typeof Lt == 'object' && Lt && !Lt.nodeType && Lt,
      UE = Ml && Ml.exports === Ul,
      $l = UE ? ME.Buffer : void 0,
      HE = $l ? $l.isBuffer : void 0,
      zE = HE || $E;
    Lt.exports = zE;
  });
  var ln = S((YM, Hl) => {
    l();
    c();
    d();
    var GE = 9007199254740991,
      WE = /^(?:0|[1-9]\d*)$/;
    function VE(e, t) {
      var r = typeof e;
      return (
        (t = t ?? GE),
        !!t &&
          (r == 'number' || (r != 'symbol' && WE.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    Hl.exports = VE;
  });
  var cn = S((ZM, zl) => {
    l();
    c();
    d();
    var KE = 9007199254740991;
    function YE(e) {
      return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= KE;
    }
    zl.exports = YE;
  });
  var Wl = S((n$, Gl) => {
    l();
    c();
    d();
    var XE = yt(),
      JE = cn(),
      QE = Ze(),
      ZE = '[object Arguments]',
      ev = '[object Array]',
      tv = '[object Boolean]',
      rv = '[object Date]',
      nv = '[object Error]',
      av = '[object Function]',
      ov = '[object Map]',
      iv = '[object Number]',
      uv = '[object Object]',
      sv = '[object RegExp]',
      lv = '[object Set]',
      cv = '[object String]',
      dv = '[object WeakMap]',
      pv = '[object ArrayBuffer]',
      fv = '[object DataView]',
      hv = '[object Float32Array]',
      mv = '[object Float64Array]',
      gv = '[object Int8Array]',
      yv = '[object Int16Array]',
      bv = '[object Int32Array]',
      Av = '[object Uint8Array]',
      Ev = '[object Uint8ClampedArray]',
      vv = '[object Uint16Array]',
      Dv = '[object Uint32Array]',
      ce = {};
    ce[hv] =
      ce[mv] =
      ce[gv] =
      ce[yv] =
      ce[bv] =
      ce[Av] =
      ce[Ev] =
      ce[vv] =
      ce[Dv] =
        !0;
    ce[ZE] =
      ce[ev] =
      ce[pv] =
      ce[tv] =
      ce[fv] =
      ce[rv] =
      ce[nv] =
      ce[av] =
      ce[ov] =
      ce[iv] =
      ce[uv] =
      ce[sv] =
      ce[lv] =
      ce[cv] =
      ce[dv] =
        !1;
    function Cv(e) {
      return QE(e) && JE(e.length) && !!ce[XE(e)];
    }
    Gl.exports = Cv;
  });
  var dn = S((u$, Vl) => {
    l();
    c();
    d();
    function xv(e) {
      return function (t) {
        return e(t);
      };
    }
    Vl.exports = xv;
  });
  var pn = S((Dr, jt) => {
    l();
    c();
    d();
    var Fv = Ka(),
      Kl = typeof Dr == 'object' && Dr && !Dr.nodeType && Dr,
      Cr = Kl && typeof jt == 'object' && jt && !jt.nodeType && jt,
      Sv = Cr && Cr.exports === Kl,
      oo = Sv && Fv.process,
      wv = (function () {
        try {
          var e = Cr && Cr.require && Cr.require('util').types;
          return e || (oo && oo.binding && oo.binding('util'));
        } catch {}
      })();
    jt.exports = wv;
  });
  var io = S((h$, Jl) => {
    l();
    c();
    d();
    var Bv = Wl(),
      Tv = dn(),
      Yl = pn(),
      Xl = Yl && Yl.isTypedArray,
      _v = Xl ? Tv(Xl) : Bv;
    Jl.exports = _v;
  });
  var uo = S((b$, Ql) => {
    l();
    c();
    d();
    var Ov = Ol(),
      Rv = un(),
      Pv = He(),
      Iv = sn(),
      kv = ln(),
      Nv = io(),
      Lv = Object.prototype,
      jv = Lv.hasOwnProperty;
    function qv(e, t) {
      var r = Pv(e),
        n = !r && Rv(e),
        a = !r && !n && Iv(e),
        o = !r && !n && !a && Nv(e),
        i = r || n || a || o,
        u = i ? Ov(e.length, String) : [],
        s = u.length;
      for (var p in e)
        (t || jv.call(e, p)) &&
          !(
            i &&
            (p == 'length' ||
              (a && (p == 'offset' || p == 'parent')) ||
              (o &&
                (p == 'buffer' || p == 'byteLength' || p == 'byteOffset')) ||
              kv(p, s))
          ) &&
          u.push(p);
      return u;
    }
    Ql.exports = qv;
  });
  var fn = S((D$, Zl) => {
    l();
    c();
    d();
    var Mv = Object.prototype;
    function $v(e) {
      var t = e && e.constructor,
        r = (typeof t == 'function' && t.prototype) || Mv;
      return e === r;
    }
    Zl.exports = $v;
  });
  var so = S((S$, ec) => {
    l();
    c();
    d();
    function Uv(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    ec.exports = Uv;
  });
  var rc = S((_$, tc) => {
    l();
    c();
    d();
    var Hv = so(),
      zv = Hv(Object.keys, Object);
    tc.exports = zv;
  });
  var ac = S((I$, nc) => {
    l();
    c();
    d();
    var Gv = fn(),
      Wv = rc(),
      Vv = Object.prototype,
      Kv = Vv.hasOwnProperty;
    function Yv(e) {
      if (!Gv(e)) return Wv(e);
      var t = [];
      for (var r in Object(e)) Kv.call(e, r) && r != 'constructor' && t.push(r);
      return t;
    }
    nc.exports = Yv;
  });
  var lo = S((j$, oc) => {
    l();
    c();
    d();
    var Xv = Ya(),
      Jv = cn();
    function Qv(e) {
      return e != null && Jv(e.length) && !Xv(e);
    }
    oc.exports = Qv;
  });
  var qt = S((U$, ic) => {
    l();
    c();
    d();
    var Zv = uo(),
      eD = ac(),
      tD = lo();
    function rD(e) {
      return tD(e) ? Zv(e) : eD(e);
    }
    ic.exports = rD;
  });
  var co = S((W$, uc) => {
    l();
    c();
    d();
    var nD = no(),
      aD = on(),
      oD = qt();
    function iD(e) {
      return nD(e, oD, aD);
    }
    uc.exports = iD;
  });
  var cc = S((X$, lc) => {
    l();
    c();
    d();
    var sc = co(),
      uD = 1,
      sD = Object.prototype,
      lD = sD.hasOwnProperty;
    function cD(e, t, r, n, a, o) {
      var i = r & uD,
        u = sc(e),
        s = u.length,
        p = sc(t),
        y = p.length;
      if (s != y && !i) return !1;
      for (var A = s; A--; ) {
        var h = u[A];
        if (!(i ? h in t : lD.call(t, h))) return !1;
      }
      var m = o.get(e),
        E = o.get(t);
      if (m && E) return m == t && E == e;
      var b = !0;
      o.set(e, t), o.set(t, e);
      for (var x = i; ++A < s; ) {
        h = u[A];
        var F = e[h],
          B = t[h];
        if (n) var I = i ? n(B, F, h, t, e, o) : n(F, B, h, e, t, o);
        if (!(I === void 0 ? F === B || a(F, B, r, n, o) : I)) {
          b = !1;
          break;
        }
        x || (x = h == 'constructor');
      }
      if (b && !x) {
        var j = e.constructor,
          w = t.constructor;
        j != w &&
          'constructor' in e &&
          'constructor' in t &&
          !(
            typeof j == 'function' &&
            j instanceof j &&
            typeof w == 'function' &&
            w instanceof w
          ) &&
          (b = !1);
      }
      return o.delete(e), o.delete(t), b;
    }
    lc.exports = cD;
  });
  var pc = S((eU, dc) => {
    l();
    c();
    d();
    var dD = it(),
      pD = je(),
      fD = dD(pD, 'DataView');
    dc.exports = fD;
  });
  var hc = S((aU, fc) => {
    l();
    c();
    d();
    var hD = it(),
      mD = je(),
      gD = hD(mD, 'Promise');
    fc.exports = gD;
  });
  var po = S((sU, mc) => {
    l();
    c();
    d();
    var yD = it(),
      bD = je(),
      AD = yD(bD, 'Set');
    mc.exports = AD;
  });
  var yc = S((pU, gc) => {
    l();
    c();
    d();
    var ED = it(),
      vD = je(),
      DD = ED(vD, 'WeakMap');
    gc.exports = DD;
  });
  var xr = S((gU, xc) => {
    l();
    c();
    d();
    var fo = pc(),
      ho = Zr(),
      mo = hc(),
      go = po(),
      yo = yc(),
      Cc = yt(),
      Mt = Ja(),
      bc = '[object Map]',
      CD = '[object Object]',
      Ac = '[object Promise]',
      Ec = '[object Set]',
      vc = '[object WeakMap]',
      Dc = '[object DataView]',
      xD = Mt(fo),
      FD = Mt(ho),
      SD = Mt(mo),
      wD = Mt(go),
      BD = Mt(yo),
      bt = Cc;
    ((fo && bt(new fo(new ArrayBuffer(1))) != Dc) ||
      (ho && bt(new ho()) != bc) ||
      (mo && bt(mo.resolve()) != Ac) ||
      (go && bt(new go()) != Ec) ||
      (yo && bt(new yo()) != vc)) &&
      (bt = function (e) {
        var t = Cc(e),
          r = t == CD ? e.constructor : void 0,
          n = r ? Mt(r) : '';
        if (n)
          switch (n) {
            case xD:
              return Dc;
            case FD:
              return bc;
            case SD:
              return Ac;
            case wD:
              return Ec;
            case BD:
              return vc;
          }
        return t;
      });
    xc.exports = bt;
  });
  var Rc = S((EU, Oc) => {
    l();
    c();
    d();
    var bo = tn(),
      TD = eo(),
      _D = vl(),
      OD = cc(),
      Fc = xr(),
      Sc = He(),
      wc = sn(),
      RD = io(),
      PD = 1,
      Bc = '[object Arguments]',
      Tc = '[object Array]',
      hn = '[object Object]',
      ID = Object.prototype,
      _c = ID.hasOwnProperty;
    function kD(e, t, r, n, a, o) {
      var i = Sc(e),
        u = Sc(t),
        s = i ? Tc : Fc(e),
        p = u ? Tc : Fc(t);
      (s = s == Bc ? hn : s), (p = p == Bc ? hn : p);
      var y = s == hn,
        A = p == hn,
        h = s == p;
      if (h && wc(e)) {
        if (!wc(t)) return !1;
        (i = !0), (y = !1);
      }
      if (h && !y)
        return (
          o || (o = new bo()),
          i || RD(e) ? TD(e, t, r, n, a, o) : _D(e, t, s, r, n, a, o)
        );
      if (!(r & PD)) {
        var m = y && _c.call(e, '__wrapped__'),
          E = A && _c.call(t, '__wrapped__');
        if (m || E) {
          var b = m ? e.value() : e,
            x = E ? t.value() : t;
          return o || (o = new bo()), a(b, x, r, n, o);
        }
      }
      return h ? (o || (o = new bo()), OD(e, t, r, n, a, o)) : !1;
    }
    Oc.exports = kD;
  });
  var Ao = S((xU, kc) => {
    l();
    c();
    d();
    var ND = Rc(),
      Pc = Ze();
    function Ic(e, t, r, n, a) {
      return e === t
        ? !0
        : e == null || t == null || (!Pc(e) && !Pc(t))
        ? e !== e && t !== t
        : ND(e, t, r, n, Ic, a);
    }
    kc.exports = Ic;
  });
  var Lc = S((BU, Nc) => {
    l();
    c();
    d();
    var LD = tn(),
      jD = Ao(),
      qD = 1,
      MD = 2;
    function $D(e, t, r, n) {
      var a = r.length,
        o = a,
        i = !n;
      if (e == null) return !o;
      for (e = Object(e); a--; ) {
        var u = r[a];
        if (i && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
      }
      for (; ++a < o; ) {
        u = r[a];
        var s = u[0],
          p = e[s],
          y = u[1];
        if (i && u[2]) {
          if (p === void 0 && !(s in e)) return !1;
        } else {
          var A = new LD();
          if (n) var h = n(p, y, s, e, t, A);
          if (!(h === void 0 ? jD(y, p, qD | MD, n, A) : h)) return !1;
        }
      }
      return !0;
    }
    Nc.exports = $D;
  });
  var Eo = S((RU, jc) => {
    l();
    c();
    d();
    var UD = Ue();
    function HD(e) {
      return e === e && !UD(e);
    }
    jc.exports = HD;
  });
  var Mc = S((NU, qc) => {
    l();
    c();
    d();
    var zD = Eo(),
      GD = qt();
    function WD(e) {
      for (var t = GD(e), r = t.length; r--; ) {
        var n = t[r],
          a = e[n];
        t[r] = [n, a, zD(a)];
      }
      return t;
    }
    qc.exports = WD;
  });
  var vo = S((MU, $c) => {
    l();
    c();
    d();
    function VD(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    $c.exports = VD;
  });
  var Hc = S((zU, Uc) => {
    l();
    c();
    d();
    var KD = Lc(),
      YD = Mc(),
      XD = vo();
    function JD(e) {
      var t = YD(e);
      return t.length == 1 && t[0][2]
        ? XD(t[0][0], t[0][1])
        : function (r) {
            return r === e || KD(r, e, t);
          };
    }
    Uc.exports = JD;
  });
  var Fr = S((KU, zc) => {
    l();
    c();
    d();
    var QD = yt(),
      ZD = Ze(),
      eC = '[object Symbol]';
    function tC(e) {
      return typeof e == 'symbol' || (ZD(e) && QD(e) == eC);
    }
    zc.exports = tC;
  });
  var mn = S((QU, Gc) => {
    l();
    c();
    d();
    var rC = He(),
      nC = Fr(),
      aC = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      oC = /^\w*$/;
    function iC(e, t) {
      if (rC(e)) return !1;
      var r = typeof e;
      return r == 'number' ||
        r == 'symbol' ||
        r == 'boolean' ||
        e == null ||
        nC(e)
        ? !0
        : oC.test(e) || !aC.test(e) || (t != null && e in Object(t));
    }
    Gc.exports = iC;
  });
  var Kc = S((rH, Vc) => {
    l();
    c();
    d();
    var Wc = en(),
      uC = 'Expected a function';
    function Do(e, t) {
      if (typeof e != 'function' || (t != null && typeof t != 'function'))
        throw new TypeError(uC);
      var r = function () {
        var n = arguments,
          a = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(a)) return o.get(a);
        var i = e.apply(this, n);
        return (r.cache = o.set(a, i) || o), i;
      };
      return (r.cache = new (Do.Cache || Wc)()), r;
    }
    Do.Cache = Wc;
    Vc.exports = Do;
  });
  var Xc = S((iH, Yc) => {
    l();
    c();
    d();
    var sC = Kc(),
      lC = 500;
    function cC(e) {
      var t = sC(e, function (n) {
          return r.size === lC && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    Yc.exports = cC;
  });
  var Qc = S((cH, Jc) => {
    l();
    c();
    d();
    var dC = Xc(),
      pC =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      fC = /\\(\\)?/g,
      hC = dC(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(''),
          e.replace(pC, function (r, n, a, o) {
            t.push(a ? o.replace(fC, '$1') : n || r);
          }),
          t
        );
      });
    Jc.exports = hC;
  });
  var ad = S((hH, nd) => {
    l();
    c();
    d();
    var Zc = gt(),
      mC = Va(),
      gC = He(),
      yC = Fr(),
      bC = 1 / 0,
      ed = Zc ? Zc.prototype : void 0,
      td = ed ? ed.toString : void 0;
    function rd(e) {
      if (typeof e == 'string') return e;
      if (gC(e)) return mC(e, rd) + '';
      if (yC(e)) return td ? td.call(e) : '';
      var t = e + '';
      return t == '0' && 1 / e == -bC ? '-0' : t;
    }
    nd.exports = rd;
  });
  var id = S((bH, od) => {
    l();
    c();
    d();
    var AC = ad();
    function EC(e) {
      return e == null ? '' : AC(e);
    }
    od.exports = EC;
  });
  var Sr = S((DH, ud) => {
    l();
    c();
    d();
    var vC = He(),
      DC = mn(),
      CC = Qc(),
      xC = id();
    function FC(e, t) {
      return vC(e) ? e : DC(e, t) ? [e] : CC(xC(e));
    }
    ud.exports = FC;
  });
  var $t = S((SH, sd) => {
    l();
    c();
    d();
    var SC = Fr(),
      wC = 1 / 0;
    function BC(e) {
      if (typeof e == 'string' || SC(e)) return e;
      var t = e + '';
      return t == '0' && 1 / e == -wC ? '-0' : t;
    }
    sd.exports = BC;
  });
  var gn = S((_H, ld) => {
    l();
    c();
    d();
    var TC = Sr(),
      _C = $t();
    function OC(e, t) {
      t = TC(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[_C(t[r++])];
      return r && r == n ? e : void 0;
    }
    ld.exports = OC;
  });
  var dd = S((IH, cd) => {
    l();
    c();
    d();
    var RC = gn();
    function PC(e, t, r) {
      var n = e == null ? void 0 : RC(e, t);
      return n === void 0 ? r : n;
    }
    cd.exports = PC;
  });
  var fd = S((jH, pd) => {
    l();
    c();
    d();
    function IC(e, t) {
      return e != null && t in Object(e);
    }
    pd.exports = IC;
  });
  var md = S((UH, hd) => {
    l();
    c();
    d();
    var kC = Sr(),
      NC = un(),
      LC = He(),
      jC = ln(),
      qC = cn(),
      MC = $t();
    function $C(e, t, r) {
      t = kC(t, e);
      for (var n = -1, a = t.length, o = !1; ++n < a; ) {
        var i = MC(t[n]);
        if (!(o = e != null && r(e, i))) break;
        e = e[i];
      }
      return o || ++n != a
        ? o
        : ((a = e == null ? 0 : e.length),
          !!a && qC(a) && jC(i, a) && (LC(e) || NC(e)));
    }
    hd.exports = $C;
  });
  var Co = S((WH, gd) => {
    l();
    c();
    d();
    var UC = fd(),
      HC = md();
    function zC(e, t) {
      return e != null && HC(e, t, UC);
    }
    gd.exports = zC;
  });
  var bd = S((XH, yd) => {
    l();
    c();
    d();
    var GC = Ao(),
      WC = dd(),
      VC = Co(),
      KC = mn(),
      YC = Eo(),
      XC = vo(),
      JC = $t(),
      QC = 1,
      ZC = 2;
    function ex(e, t) {
      return KC(e) && YC(t)
        ? XC(JC(e), t)
        : function (r) {
            var n = WC(r, e);
            return n === void 0 && n === t ? VC(r, e) : GC(t, n, QC | ZC);
          };
    }
    yd.exports = ex;
  });
  var xo = S((ez, Ad) => {
    l();
    c();
    d();
    function tx(e) {
      return e;
    }
    Ad.exports = tx;
  });
  var vd = S((az, Ed) => {
    l();
    c();
    d();
    function rx(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Ed.exports = rx;
  });
  var Cd = S((sz, Dd) => {
    l();
    c();
    d();
    var nx = gn();
    function ax(e) {
      return function (t) {
        return nx(t, e);
      };
    }
    Dd.exports = ax;
  });
  var Fd = S((pz, xd) => {
    l();
    c();
    d();
    var ox = vd(),
      ix = Cd(),
      ux = mn(),
      sx = $t();
    function lx(e) {
      return ux(e) ? ox(sx(e)) : ix(e);
    }
    xd.exports = lx;
  });
  var Fo = S((gz, Sd) => {
    l();
    c();
    d();
    var cx = Hc(),
      dx = bd(),
      px = xo(),
      fx = He(),
      hx = Fd();
    function mx(e) {
      return typeof e == 'function'
        ? e
        : e == null
        ? px
        : typeof e == 'object'
        ? fx(e)
          ? dx(e[0], e[1])
          : cx(e)
        : hx(e);
    }
    Sd.exports = mx;
  });
  var So = S((Ez, wd) => {
    l();
    c();
    d();
    var gx = it(),
      yx = (function () {
        try {
          var e = gx(Object, 'defineProperty');
          return e({}, '', {}), e;
        } catch {}
      })();
    wd.exports = yx;
  });
  var yn = S((xz, Td) => {
    l();
    c();
    d();
    var Bd = So();
    function bx(e, t, r) {
      t == '__proto__' && Bd
        ? Bd(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    Td.exports = bx;
  });
  var bn = S((Bz, _d) => {
    l();
    c();
    d();
    var Ax = yn(),
      Ex = Qr(),
      vx = Object.prototype,
      Dx = vx.hasOwnProperty;
    function Cx(e, t, r) {
      var n = e[t];
      (!(Dx.call(e, t) && Ex(n, r)) || (r === void 0 && !(t in e))) &&
        Ax(e, t, r);
    }
    _d.exports = Cx;
  });
  var Pd = S((Rz, Rd) => {
    l();
    c();
    d();
    var xx = bn(),
      Fx = Sr(),
      Sx = ln(),
      Od = Ue(),
      wx = $t();
    function Bx(e, t, r, n) {
      if (!Od(e)) return e;
      t = Fx(t, e);
      for (var a = -1, o = t.length, i = o - 1, u = e; u != null && ++a < o; ) {
        var s = wx(t[a]),
          p = r;
        if (s === '__proto__' || s === 'constructor' || s === 'prototype')
          return e;
        if (a != i) {
          var y = u[s];
          (p = n ? n(y, s, u) : void 0),
            p === void 0 && (p = Od(y) ? y : Sx(t[a + 1]) ? [] : {});
        }
        xx(u, s, p), (u = u[s]);
      }
      return e;
    }
    Rd.exports = Bx;
  });
  var wo = S((Nz, Id) => {
    l();
    c();
    d();
    var Tx = gn(),
      _x = Pd(),
      Ox = Sr();
    function Rx(e, t, r) {
      for (var n = -1, a = t.length, o = {}; ++n < a; ) {
        var i = t[n],
          u = Tx(e, i);
        r(u, i) && _x(o, Ox(i, e), u);
      }
      return o;
    }
    Id.exports = Rx;
  });
  var An = S((Mz, kd) => {
    l();
    c();
    d();
    var Px = so(),
      Ix = Px(Object.getPrototypeOf, Object);
    kd.exports = Ix;
  });
  var Bo = S((zz, Nd) => {
    l();
    c();
    d();
    var kx = an(),
      Nx = An(),
      Lx = on(),
      jx = ao(),
      qx = Object.getOwnPropertySymbols,
      Mx = qx
        ? function (e) {
            for (var t = []; e; ) kx(t, Lx(e)), (e = Nx(e));
            return t;
          }
        : jx;
    Nd.exports = Mx;
  });
  var jd = S((Kz, Ld) => {
    l();
    c();
    d();
    function $x(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    Ld.exports = $x;
  });
  var Md = S((Qz, qd) => {
    l();
    c();
    d();
    var Ux = Ue(),
      Hx = fn(),
      zx = jd(),
      Gx = Object.prototype,
      Wx = Gx.hasOwnProperty;
    function Vx(e) {
      if (!Ux(e)) return zx(e);
      var t = Hx(e),
        r = [];
      for (var n in e)
        (n == 'constructor' && (t || !Wx.call(e, n))) || r.push(n);
      return r;
    }
    qd.exports = Vx;
  });
  var En = S((rG, $d) => {
    l();
    c();
    d();
    var Kx = uo(),
      Yx = Md(),
      Xx = lo();
    function Jx(e) {
      return Xx(e) ? Kx(e, !0) : Yx(e);
    }
    $d.exports = Jx;
  });
  var To = S((iG, Ud) => {
    l();
    c();
    d();
    var Qx = no(),
      Zx = Bo(),
      eF = En();
    function tF(e) {
      return Qx(e, eF, Zx);
    }
    Ud.exports = tF;
  });
  var _o = S((cG, Hd) => {
    l();
    c();
    d();
    var rF = Va(),
      nF = Fo(),
      aF = wo(),
      oF = To();
    function iF(e, t) {
      if (e == null) return {};
      var r = rF(oF(e), function (n) {
        return [n];
      });
      return (
        (t = nF(t)),
        aF(e, r, function (n, a) {
          return t(n, a[0]);
        })
      );
    }
    Hd.exports = iF;
  });
  var Cn = S((bp, $o) => {
    l();
    c();
    d();
    (function (e) {
      if (typeof bp == 'object' && typeof $o < 'u') $o.exports = e();
      else if (typeof define == 'function' && define.amd) define([], e);
      else {
        var t;
        typeof window < 'u' || typeof window < 'u'
          ? (t = window)
          : typeof self < 'u'
          ? (t = self)
          : (t = this),
          (t.memoizerific = e());
      }
    })(function () {
      var e, t, r;
      return (function n(a, o, i) {
        function u(y, A) {
          if (!o[y]) {
            if (!a[y]) {
              var h = typeof ur == 'function' && ur;
              if (!A && h) return h(y, !0);
              if (s) return s(y, !0);
              var m = new Error("Cannot find module '" + y + "'");
              throw ((m.code = 'MODULE_NOT_FOUND'), m);
            }
            var E = (o[y] = { exports: {} });
            a[y][0].call(
              E.exports,
              function (b) {
                var x = a[y][1][b];
                return u(x || b);
              },
              E,
              E.exports,
              n,
              a,
              o,
              i,
            );
          }
          return o[y].exports;
        }
        for (var s = typeof ur == 'function' && ur, p = 0; p < i.length; p++)
          u(i[p]);
        return u;
      })(
        {
          1: [
            function (n, a, o) {
              a.exports = function (i) {
                if (typeof Map != 'function' || i) {
                  var u = n('./similar');
                  return new u();
                } else return new Map();
              };
            },
            { './similar': 2 },
          ],
          2: [
            function (n, a, o) {
              function i() {
                return (
                  (this.list = []),
                  (this.lastItem = void 0),
                  (this.size = 0),
                  this
                );
              }
              (i.prototype.get = function (u) {
                var s;
                if (this.lastItem && this.isEqual(this.lastItem.key, u))
                  return this.lastItem.val;
                if (((s = this.indexOf(u)), s >= 0))
                  return (this.lastItem = this.list[s]), this.list[s].val;
              }),
                (i.prototype.set = function (u, s) {
                  var p;
                  return this.lastItem && this.isEqual(this.lastItem.key, u)
                    ? ((this.lastItem.val = s), this)
                    : ((p = this.indexOf(u)),
                      p >= 0
                        ? ((this.lastItem = this.list[p]),
                          (this.list[p].val = s),
                          this)
                        : ((this.lastItem = { key: u, val: s }),
                          this.list.push(this.lastItem),
                          this.size++,
                          this));
                }),
                (i.prototype.delete = function (u) {
                  var s;
                  if (
                    (this.lastItem &&
                      this.isEqual(this.lastItem.key, u) &&
                      (this.lastItem = void 0),
                    (s = this.indexOf(u)),
                    s >= 0)
                  )
                    return this.size--, this.list.splice(s, 1)[0];
                }),
                (i.prototype.has = function (u) {
                  var s;
                  return this.lastItem && this.isEqual(this.lastItem.key, u)
                    ? !0
                    : ((s = this.indexOf(u)),
                      s >= 0 ? ((this.lastItem = this.list[s]), !0) : !1);
                }),
                (i.prototype.forEach = function (u, s) {
                  var p;
                  for (p = 0; p < this.size; p++)
                    u.call(s || this, this.list[p].val, this.list[p].key, this);
                }),
                (i.prototype.indexOf = function (u) {
                  var s;
                  for (s = 0; s < this.size; s++)
                    if (this.isEqual(this.list[s].key, u)) return s;
                  return -1;
                }),
                (i.prototype.isEqual = function (u, s) {
                  return u === s || (u !== u && s !== s);
                }),
                (a.exports = i);
            },
            {},
          ],
          3: [
            function (n, a, o) {
              var i = n('map-or-similar');
              a.exports = function (y) {
                var A = new i(!1),
                  h = [];
                return function (m) {
                  var E = function () {
                    var b = A,
                      x,
                      F,
                      B = arguments.length - 1,
                      I = Array(B + 1),
                      j = !0,
                      w;
                    if ((E.numArgs || E.numArgs === 0) && E.numArgs !== B + 1)
                      throw new Error(
                        'Memoizerific functions should always be called with the same number of arguments',
                      );
                    for (w = 0; w < B; w++) {
                      if (
                        ((I[w] = { cacheItem: b, arg: arguments[w] }),
                        b.has(arguments[w]))
                      ) {
                        b = b.get(arguments[w]);
                        continue;
                      }
                      (j = !1),
                        (x = new i(!1)),
                        b.set(arguments[w], x),
                        (b = x);
                    }
                    return (
                      j &&
                        (b.has(arguments[B])
                          ? (F = b.get(arguments[B]))
                          : (j = !1)),
                      j ||
                        ((F = m.apply(null, arguments)),
                        b.set(arguments[B], F)),
                      y > 0 &&
                        ((I[B] = { cacheItem: b, arg: arguments[B] }),
                        j ? u(h, I) : h.push(I),
                        h.length > y && s(h.shift())),
                      (E.wasMemoized = j),
                      (E.numArgs = B + 1),
                      F
                    );
                  };
                  return (
                    (E.limit = y),
                    (E.wasMemoized = !1),
                    (E.cache = A),
                    (E.lru = h),
                    E
                  );
                };
              };
              function u(y, A) {
                var h = y.length,
                  m = A.length,
                  E,
                  b,
                  x;
                for (b = 0; b < h; b++) {
                  for (E = !0, x = 0; x < m; x++)
                    if (!p(y[b][x].arg, A[x].arg)) {
                      E = !1;
                      break;
                    }
                  if (E) break;
                }
                y.push(y.splice(b, 1)[0]);
              }
              function s(y) {
                var A = y.length,
                  h = y[A - 1],
                  m,
                  E;
                for (
                  h.cacheItem.delete(h.arg), E = A - 2;
                  E >= 0 &&
                  ((h = y[E]), (m = h.cacheItem.get(h.arg)), !m || !m.size);
                  E--
                )
                  h.cacheItem.delete(h.arg);
              }
              function p(y, A) {
                return y === A || (y !== y && A !== A);
              }
            },
            { 'map-or-similar': 1 },
          ],
        },
        {},
        [3],
      )(3);
    });
  });
  var Ep = S((RG, Ap) => {
    l();
    c();
    d();
    function ES(e, t, r, n) {
      for (var a = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < a; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    Ap.exports = ES;
  });
  var Dp = S((NG, vp) => {
    l();
    c();
    d();
    function vS(e) {
      return e !== e;
    }
    vp.exports = vS;
  });
  var xp = S((MG, Cp) => {
    l();
    c();
    d();
    function DS(e, t, r) {
      for (var n = r - 1, a = e.length; ++n < a; ) if (e[n] === t) return n;
      return -1;
    }
    Cp.exports = DS;
  });
  var Sp = S((zG, Fp) => {
    l();
    c();
    d();
    var CS = Ep(),
      xS = Dp(),
      FS = xp();
    function SS(e, t, r) {
      return t === t ? FS(e, t, r) : CS(e, xS, r);
    }
    Fp.exports = SS;
  });
  var Bp = S((KG, wp) => {
    l();
    c();
    d();
    var wS = Sp();
    function BS(e, t) {
      var r = e == null ? 0 : e.length;
      return !!r && wS(e, t, 0) > -1;
    }
    wp.exports = BS;
  });
  var _p = S((QG, Tp) => {
    l();
    c();
    d();
    function TS(e, t, r) {
      for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
        if (r(t, e[n])) return !0;
      return !1;
    }
    Tp.exports = TS;
  });
  var Rp = S((rW, Op) => {
    l();
    c();
    d();
    function _S() {}
    Op.exports = _S;
  });
  var Ip = S((iW, Pp) => {
    l();
    c();
    d();
    var Uo = po(),
      OS = Rp(),
      RS = nn(),
      PS = 1 / 0,
      IS =
        Uo && 1 / RS(new Uo([, -0]))[1] == PS
          ? function (e) {
              return new Uo(e);
            }
          : OS;
    Pp.exports = IS;
  });
  var Np = S((cW, kp) => {
    l();
    c();
    d();
    var kS = Qa(),
      NS = Bp(),
      LS = _p(),
      jS = Za(),
      qS = Ip(),
      MS = nn(),
      $S = 200;
    function US(e, t, r) {
      var n = -1,
        a = NS,
        o = e.length,
        i = !0,
        u = [],
        s = u;
      if (r) (i = !1), (a = LS);
      else if (o >= $S) {
        var p = t ? null : qS(e);
        if (p) return MS(p);
        (i = !1), (a = jS), (s = new kS());
      } else s = t ? [] : u;
      e: for (; ++n < o; ) {
        var y = e[n],
          A = t ? t(y) : y;
        if (((y = r || y !== 0 ? y : 0), i && A === A)) {
          for (var h = s.length; h--; ) if (s[h] === A) continue e;
          t && s.push(A), u.push(y);
        } else a(s, A, r) || (s !== u && s.push(A), u.push(y));
      }
      return u;
    }
    kp.exports = US;
  });
  var jp = S((hW, Lp) => {
    l();
    c();
    d();
    var HS = Np();
    function zS(e) {
      return e && e.length ? HS(e) : [];
    }
    Lp.exports = zS;
  });
  var Mp = S((bW, qp) => {
    l();
    c();
    d();
    function GS(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    qp.exports = GS;
  });
  var Br = S((DW, $p) => {
    l();
    c();
    d();
    var WS = bn(),
      VS = yn();
    function KS(e, t, r, n) {
      var a = !r;
      r || (r = {});
      for (var o = -1, i = t.length; ++o < i; ) {
        var u = t[o],
          s = n ? n(r[u], e[u], u, r, e) : void 0;
        s === void 0 && (s = e[u]), a ? VS(r, u, s) : WS(r, u, s);
      }
      return r;
    }
    $p.exports = KS;
  });
  var Hp = S((SW, Up) => {
    l();
    c();
    d();
    var YS = Br(),
      XS = qt();
    function JS(e, t) {
      return e && YS(t, XS(t), e);
    }
    Up.exports = JS;
  });
  var Gp = S((_W, zp) => {
    l();
    c();
    d();
    var QS = Br(),
      ZS = En();
    function ew(e, t) {
      return e && QS(t, ZS(t), e);
    }
    zp.exports = ew;
  });
  var Xp = S((Tr, Ht) => {
    l();
    c();
    d();
    var tw = je(),
      Yp = typeof Tr == 'object' && Tr && !Tr.nodeType && Tr,
      Wp = Yp && typeof Ht == 'object' && Ht && !Ht.nodeType && Ht,
      rw = Wp && Wp.exports === Yp,
      Vp = rw ? tw.Buffer : void 0,
      Kp = Vp ? Vp.allocUnsafe : void 0;
    function nw(e, t) {
      if (t) return e.slice();
      var r = e.length,
        n = Kp ? Kp(r) : new e.constructor(r);
      return e.copy(n), n;
    }
    Ht.exports = nw;
  });
  var Qp = S((LW, Jp) => {
    l();
    c();
    d();
    function aw(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    Jp.exports = aw;
  });
  var ef = S(($W, Zp) => {
    l();
    c();
    d();
    var ow = Br(),
      iw = on();
    function uw(e, t) {
      return ow(e, iw(e), t);
    }
    Zp.exports = uw;
  });
  var rf = S((GW, tf) => {
    l();
    c();
    d();
    var sw = Br(),
      lw = Bo();
    function cw(e, t) {
      return sw(e, lw(e), t);
    }
    tf.exports = cw;
  });
  var af = S((YW, nf) => {
    l();
    c();
    d();
    var dw = Object.prototype,
      pw = dw.hasOwnProperty;
    function fw(e) {
      var t = e.length,
        r = new e.constructor(t);
      return (
        t &&
          typeof e[0] == 'string' &&
          pw.call(e, 'index') &&
          ((r.index = e.index), (r.input = e.input)),
        r
      );
    }
    nf.exports = fw;
  });
  var xn = S((ZW, uf) => {
    l();
    c();
    d();
    var of = to();
    function hw(e) {
      var t = new e.constructor(e.byteLength);
      return new of(t).set(new of(e)), t;
    }
    uf.exports = hw;
  });
  var lf = S((nV, sf) => {
    l();
    c();
    d();
    var mw = xn();
    function gw(e, t) {
      var r = t ? mw(e.buffer) : e.buffer;
      return new e.constructor(r, e.byteOffset, e.byteLength);
    }
    sf.exports = gw;
  });
  var df = S((uV, cf) => {
    l();
    c();
    d();
    var yw = /\w*$/;
    function bw(e) {
      var t = new e.constructor(e.source, yw.exec(e));
      return (t.lastIndex = e.lastIndex), t;
    }
    cf.exports = bw;
  });
  var gf = S((dV, mf) => {
    l();
    c();
    d();
    var pf = gt(),
      ff = pf ? pf.prototype : void 0,
      hf = ff ? ff.valueOf : void 0;
    function Aw(e) {
      return hf ? Object(hf.call(e)) : {};
    }
    mf.exports = Aw;
  });
  var bf = S((mV, yf) => {
    l();
    c();
    d();
    var Ew = xn();
    function vw(e, t) {
      var r = t ? Ew(e.buffer) : e.buffer;
      return new e.constructor(r, e.byteOffset, e.length);
    }
    yf.exports = vw;
  });
  var Ef = S((AV, Af) => {
    l();
    c();
    d();
    var Dw = xn(),
      Cw = lf(),
      xw = df(),
      Fw = gf(),
      Sw = bf(),
      ww = '[object Boolean]',
      Bw = '[object Date]',
      Tw = '[object Map]',
      _w = '[object Number]',
      Ow = '[object RegExp]',
      Rw = '[object Set]',
      Pw = '[object String]',
      Iw = '[object Symbol]',
      kw = '[object ArrayBuffer]',
      Nw = '[object DataView]',
      Lw = '[object Float32Array]',
      jw = '[object Float64Array]',
      qw = '[object Int8Array]',
      Mw = '[object Int16Array]',
      $w = '[object Int32Array]',
      Uw = '[object Uint8Array]',
      Hw = '[object Uint8ClampedArray]',
      zw = '[object Uint16Array]',
      Gw = '[object Uint32Array]';
    function Ww(e, t, r) {
      var n = e.constructor;
      switch (t) {
        case kw:
          return Dw(e);
        case ww:
        case Bw:
          return new n(+e);
        case Nw:
          return Cw(e, r);
        case Lw:
        case jw:
        case qw:
        case Mw:
        case $w:
        case Uw:
        case Hw:
        case zw:
        case Gw:
          return Sw(e, r);
        case Tw:
          return new n();
        case _w:
        case Pw:
          return new n(e);
        case Ow:
          return xw(e);
        case Rw:
          return new n();
        case Iw:
          return Fw(e);
      }
    }
    Af.exports = Ww;
  });
  var Cf = S((CV, Df) => {
    l();
    c();
    d();
    var Vw = Ue(),
      vf = Object.create,
      Kw = (function () {
        function e() {}
        return function (t) {
          if (!Vw(t)) return {};
          if (vf) return vf(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    Df.exports = Kw;
  });
  var Ff = S((wV, xf) => {
    l();
    c();
    d();
    var Yw = Cf(),
      Xw = An(),
      Jw = fn();
    function Qw(e) {
      return typeof e.constructor == 'function' && !Jw(e) ? Yw(Xw(e)) : {};
    }
    xf.exports = Qw;
  });
  var wf = S((OV, Sf) => {
    l();
    c();
    d();
    var Zw = xr(),
      e5 = Ze(),
      t5 = '[object Map]';
    function r5(e) {
      return e5(e) && Zw(e) == t5;
    }
    Sf.exports = r5;
  });
  var Of = S((kV, _f) => {
    l();
    c();
    d();
    var n5 = wf(),
      a5 = dn(),
      Bf = pn(),
      Tf = Bf && Bf.isMap,
      o5 = Tf ? a5(Tf) : n5;
    _f.exports = o5;
  });
  var Pf = S((qV, Rf) => {
    l();
    c();
    d();
    var i5 = xr(),
      u5 = Ze(),
      s5 = '[object Set]';
    function l5(e) {
      return u5(e) && i5(e) == s5;
    }
    Rf.exports = l5;
  });
  var Lf = S((HV, Nf) => {
    l();
    c();
    d();
    var c5 = Pf(),
      d5 = dn(),
      If = pn(),
      kf = If && If.isSet,
      p5 = kf ? d5(kf) : c5;
    Nf.exports = p5;
  });
  var Uf = S((VV, $f) => {
    l();
    c();
    d();
    var f5 = tn(),
      h5 = Mp(),
      m5 = bn(),
      g5 = Hp(),
      y5 = Gp(),
      b5 = Xp(),
      A5 = Qp(),
      E5 = ef(),
      v5 = rf(),
      D5 = co(),
      C5 = To(),
      x5 = xr(),
      F5 = af(),
      S5 = Ef(),
      w5 = Ff(),
      B5 = He(),
      T5 = sn(),
      _5 = Of(),
      O5 = Ue(),
      R5 = Lf(),
      P5 = qt(),
      I5 = En(),
      k5 = 1,
      N5 = 2,
      L5 = 4,
      jf = '[object Arguments]',
      j5 = '[object Array]',
      q5 = '[object Boolean]',
      M5 = '[object Date]',
      $5 = '[object Error]',
      qf = '[object Function]',
      U5 = '[object GeneratorFunction]',
      H5 = '[object Map]',
      z5 = '[object Number]',
      Mf = '[object Object]',
      G5 = '[object RegExp]',
      W5 = '[object Set]',
      V5 = '[object String]',
      K5 = '[object Symbol]',
      Y5 = '[object WeakMap]',
      X5 = '[object ArrayBuffer]',
      J5 = '[object DataView]',
      Q5 = '[object Float32Array]',
      Z5 = '[object Float64Array]',
      e3 = '[object Int8Array]',
      t3 = '[object Int16Array]',
      r3 = '[object Int32Array]',
      n3 = '[object Uint8Array]',
      a3 = '[object Uint8ClampedArray]',
      o3 = '[object Uint16Array]',
      i3 = '[object Uint32Array]',
      le = {};
    le[jf] =
      le[j5] =
      le[X5] =
      le[J5] =
      le[q5] =
      le[M5] =
      le[Q5] =
      le[Z5] =
      le[e3] =
      le[t3] =
      le[r3] =
      le[H5] =
      le[z5] =
      le[Mf] =
      le[G5] =
      le[W5] =
      le[V5] =
      le[K5] =
      le[n3] =
      le[a3] =
      le[o3] =
      le[i3] =
        !0;
    le[$5] = le[qf] = le[Y5] = !1;
    function Fn(e, t, r, n, a, o) {
      var i,
        u = t & k5,
        s = t & N5,
        p = t & L5;
      if ((r && (i = a ? r(e, n, a, o) : r(e)), i !== void 0)) return i;
      if (!O5(e)) return e;
      var y = B5(e);
      if (y) {
        if (((i = F5(e)), !u)) return A5(e, i);
      } else {
        var A = x5(e),
          h = A == qf || A == U5;
        if (T5(e)) return b5(e, u);
        if (A == Mf || A == jf || (h && !a)) {
          if (((i = s || h ? {} : w5(e)), !u))
            return s ? v5(e, y5(i, e)) : E5(e, g5(i, e));
        } else {
          if (!le[A]) return a ? e : {};
          i = S5(e, A, u);
        }
      }
      o || (o = new f5());
      var m = o.get(e);
      if (m) return m;
      o.set(e, i),
        R5(e)
          ? e.forEach(function (x) {
              i.add(Fn(x, t, r, x, e, o));
            })
          : _5(e) &&
            e.forEach(function (x, F) {
              i.set(F, Fn(x, t, r, F, e, o));
            });
      var E = p ? (s ? C5 : D5) : s ? I5 : P5,
        b = y ? void 0 : E(e);
      return (
        h5(b || e, function (x, F) {
          b && ((F = x), (x = e[F])), m5(i, F, Fn(x, t, r, F, e, o));
        }),
        i
      );
    }
    $f.exports = Fn;
  });
  var zf = S((JV, Hf) => {
    l();
    c();
    d();
    var u3 = Uf(),
      s3 = 1,
      l3 = 4;
    function c3(e) {
      return u3(e, s3 | l3);
    }
    Hf.exports = c3;
  });
  var Zf = S((LK, Qf) => {
    l();
    c();
    d();
    function U3(e) {
      return function (t, r, n) {
        for (var a = -1, o = Object(t), i = n(t), u = i.length; u--; ) {
          var s = i[e ? u : ++a];
          if (r(o[s], s, o) === !1) break;
        }
        return t;
      };
    }
    Qf.exports = U3;
  });
  var t0 = S(($K, e0) => {
    l();
    c();
    d();
    var H3 = Zf(),
      z3 = H3();
    e0.exports = z3;
  });
  var n0 = S((GK, r0) => {
    l();
    c();
    d();
    var G3 = t0(),
      W3 = qt();
    function V3(e, t) {
      return e && G3(e, t, W3);
    }
    r0.exports = V3;
  });
  var On = S((YK, a0) => {
    l();
    c();
    d();
    var K3 = yn(),
      Y3 = n0(),
      X3 = Fo();
    function J3(e, t) {
      var r = {};
      return (
        (t = X3(t, 3)),
        Y3(e, function (n, a, o) {
          K3(r, a, t(n, a, o));
        }),
        r
      );
    }
    a0.exports = J3;
  });
  var i0 = S((ZK, o0) => {
    l();
    c();
    d();
    var Q3 = wo(),
      Z3 = Co();
    function eB(e, t) {
      return Q3(e, t, function (r, n) {
        return Z3(e, n);
      });
    }
    o0.exports = eB;
  });
  var c0 = S((nY, l0) => {
    l();
    c();
    d();
    var u0 = gt(),
      tB = un(),
      rB = He(),
      s0 = u0 ? u0.isConcatSpreadable : void 0;
    function nB(e) {
      return rB(e) || tB(e) || !!(s0 && e && e[s0]);
    }
    l0.exports = nB;
  });
  var f0 = S((uY, p0) => {
    l();
    c();
    d();
    var aB = an(),
      oB = c0();
    function d0(e, t, r, n, a) {
      var o = -1,
        i = e.length;
      for (r || (r = oB), a || (a = []); ++o < i; ) {
        var u = e[o];
        t > 0 && r(u)
          ? t > 1
            ? d0(u, t - 1, r, n, a)
            : aB(a, u)
          : n || (a[a.length] = u);
      }
      return a;
    }
    p0.exports = d0;
  });
  var m0 = S((dY, h0) => {
    l();
    c();
    d();
    var iB = f0();
    function uB(e) {
      var t = e == null ? 0 : e.length;
      return t ? iB(e, 1) : [];
    }
    h0.exports = uB;
  });
  var y0 = S((mY, g0) => {
    l();
    c();
    d();
    function sB(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    g0.exports = sB;
  });
  var E0 = S((AY, A0) => {
    l();
    c();
    d();
    var lB = y0(),
      b0 = Math.max;
    function cB(e, t, r) {
      return (
        (t = b0(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, a = -1, o = b0(n.length - t, 0), i = Array(o);
            ++a < o;

          )
            i[a] = n[t + a];
          a = -1;
          for (var u = Array(t + 1); ++a < t; ) u[a] = n[a];
          return (u[t] = r(i)), lB(e, this, u);
        }
      );
    }
    A0.exports = cB;
  });
  var D0 = S((CY, v0) => {
    l();
    c();
    d();
    function dB(e) {
      return function () {
        return e;
      };
    }
    v0.exports = dB;
  });
  var F0 = S((wY, x0) => {
    l();
    c();
    d();
    var pB = D0(),
      C0 = So(),
      fB = xo(),
      hB = C0
        ? function (e, t) {
            return C0(e, 'toString', {
              configurable: !0,
              enumerable: !1,
              value: pB(t),
              writable: !0,
            });
          }
        : fB;
    x0.exports = hB;
  });
  var w0 = S((OY, S0) => {
    l();
    c();
    d();
    var mB = 800,
      gB = 16,
      yB = Date.now;
    function bB(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = yB(),
          a = gB - (n - r);
        if (((r = n), a > 0)) {
          if (++t >= mB) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    S0.exports = bB;
  });
  var T0 = S((kY, B0) => {
    l();
    c();
    d();
    var AB = F0(),
      EB = w0(),
      vB = EB(AB);
    B0.exports = vB;
  });
  var O0 = S((qY, _0) => {
    l();
    c();
    d();
    var DB = m0(),
      CB = E0(),
      xB = T0();
    function FB(e) {
      return xB(CB(e, void 0, DB), e + '');
    }
    _0.exports = FB;
  });
  var P0 = S((HY, R0) => {
    l();
    c();
    d();
    var SB = i0(),
      wB = O0(),
      BB = wB(function (e, t) {
        return e == null ? {} : SB(e, t);
      });
    R0.exports = BB;
  });
  var Pn = S((VY, q0) => {
    'use strict';
    l();
    c();
    d();
    function Rn(e) {
      return Array.prototype.slice.apply(e);
    }
    var L0 = 'pending',
      I0 = 'resolved',
      k0 = 'rejected';
    function ne(e) {
      (this.status = L0),
        (this._continuations = []),
        (this._parent = null),
        (this._paused = !1),
        e &&
          e.call(
            this,
            this._continueWith.bind(this),
            this._failWith.bind(this),
          );
    }
    function _r(e) {
      return e && typeof e.then == 'function';
    }
    function TB(e) {
      return e;
    }
    ne.prototype = {
      then: function (e, t) {
        var r = ne.unresolved()._setParent(this);
        if (this._isRejected()) {
          if (this._paused)
            return (
              this._continuations.push({ promise: r, nextFn: e, catchFn: t }), r
            );
          if (t)
            try {
              var n = t(this._error);
              return _r(n)
                ? (this._chainPromiseData(n, r), r)
                : ne.resolve(n)._setParent(this);
            } catch (a) {
              return ne.reject(a)._setParent(this);
            }
          return ne.reject(this._error)._setParent(this);
        }
        return (
          this._continuations.push({ promise: r, nextFn: e, catchFn: t }),
          this._runResolutions(),
          r
        );
      },
      catch: function (e) {
        if (this._isResolved()) return ne.resolve(this._data)._setParent(this);
        var t = ne.unresolved()._setParent(this);
        return (
          this._continuations.push({ promise: t, catchFn: e }),
          this._runRejections(),
          t
        );
      },
      finally: function (e) {
        var t = !1;
        function r(n, a) {
          if (!t) {
            (t = !0), e || (e = TB);
            var o = e(n);
            return _r(o)
              ? o.then(function () {
                  if (a) throw a;
                  return n;
                })
              : n;
          }
        }
        return this.then(function (n) {
          return r(n);
        }).catch(function (n) {
          return r(null, n);
        });
      },
      pause: function () {
        return (this._paused = !0), this;
      },
      resume: function () {
        var e = this._findFirstPaused();
        return (
          e && ((e._paused = !1), e._runResolutions(), e._runRejections()), this
        );
      },
      _findAncestry: function () {
        return this._continuations.reduce(function (e, t) {
          if (t.promise) {
            var r = { promise: t.promise, children: t.promise._findAncestry() };
            e.push(r);
          }
          return e;
        }, []);
      },
      _setParent: function (e) {
        if (this._parent) throw new Error('parent already set');
        return (this._parent = e), this;
      },
      _continueWith: function (e) {
        var t = this._findFirstPending();
        t && ((t._data = e), t._setResolved());
      },
      _findFirstPending: function () {
        return this._findFirstAncestor(function (e) {
          return e._isPending && e._isPending();
        });
      },
      _findFirstPaused: function () {
        return this._findFirstAncestor(function (e) {
          return e._paused;
        });
      },
      _findFirstAncestor: function (e) {
        for (var t = this, r; t; ) e(t) && (r = t), (t = t._parent);
        return r;
      },
      _failWith: function (e) {
        var t = this._findFirstPending();
        t && ((t._error = e), t._setRejected());
      },
      _takeContinuations: function () {
        return this._continuations.splice(0, this._continuations.length);
      },
      _runRejections: function () {
        if (!(this._paused || !this._isRejected())) {
          var e = this._error,
            t = this._takeContinuations(),
            r = this;
          t.forEach(function (n) {
            if (n.catchFn)
              try {
                var a = n.catchFn(e);
                r._handleUserFunctionResult(a, n.promise);
              } catch (o) {
                n.promise.reject(o);
              }
            else n.promise.reject(e);
          });
        }
      },
      _runResolutions: function () {
        if (!(this._paused || !this._isResolved() || this._isPending())) {
          var e = this._takeContinuations(),
            t = this._data,
            r = this;
          if (
            (e.forEach(function (n) {
              if (n.nextFn)
                try {
                  var a = n.nextFn(t);
                  r._handleUserFunctionResult(a, n.promise);
                } catch (o) {
                  r._handleResolutionError(o, n);
                }
              else n.promise && n.promise.resolve(t);
            }),
            _r(this._data))
          )
            return this._handleWhenResolvedDataIsPromise(this._data);
        }
      },
      _handleResolutionError: function (e, t) {
        if ((this._setRejected(), t.catchFn))
          try {
            t.catchFn(e);
            return;
          } catch (r) {
            e = r;
          }
        t.promise && t.promise.reject(e);
      },
      _handleWhenResolvedDataIsPromise: function (e) {
        var t = this;
        return e
          .then(function (r) {
            (t._data = r), t._runResolutions();
          })
          .catch(function (r) {
            (t._error = r), t._setRejected(), t._runRejections();
          });
      },
      _handleUserFunctionResult: function (e, t) {
        _r(e) ? this._chainPromiseData(e, t) : t.resolve(e);
      },
      _chainPromiseData: function (e, t) {
        e.then(function (r) {
          t.resolve(r);
        }).catch(function (r) {
          t.reject(r);
        });
      },
      _setResolved: function () {
        (this.status = I0), this._paused || this._runResolutions();
      },
      _setRejected: function () {
        (this.status = k0), this._paused || this._runRejections();
      },
      _isPending: function () {
        return this.status === L0;
      },
      _isResolved: function () {
        return this.status === I0;
      },
      _isRejected: function () {
        return this.status === k0;
      },
    };
    ne.resolve = function (e) {
      return new ne(function (t, r) {
        _r(e)
          ? e
              .then(function (n) {
                t(n);
              })
              .catch(function (n) {
                r(n);
              })
          : t(e);
      });
    };
    ne.reject = function (e) {
      return new ne(function (t, r) {
        r(e);
      });
    };
    ne.unresolved = function () {
      return new ne(function (e, t) {
        (this.resolve = e), (this.reject = t);
      });
    };
    ne.all = function () {
      var e = Rn(arguments);
      return (
        Array.isArray(e[0]) && (e = e[0]),
        e.length
          ? new ne(function (t, r) {
              var n = [],
                a = 0,
                o = function () {
                  a === e.length && t(n);
                },
                i = !1,
                u = function (s) {
                  i || ((i = !0), r(s));
                };
              e.forEach(function (s, p) {
                ne.resolve(s)
                  .then(function (y) {
                    (n[p] = y), (a += 1), o();
                  })
                  .catch(function (y) {
                    u(y);
                  });
              });
            })
          : ne.resolve([])
      );
    };
    function N0(e) {
      return typeof window < 'u' && 'AggregateError' in window
        ? new window.AggregateError(e)
        : { errors: e };
    }
    ne.any = function () {
      var e = Rn(arguments);
      return (
        Array.isArray(e[0]) && (e = e[0]),
        e.length
          ? new ne(function (t, r) {
              var n = [],
                a = 0,
                o = function () {
                  a === e.length && r(N0(n));
                },
                i = !1,
                u = function (s) {
                  i || ((i = !0), t(s));
                };
              e.forEach(function (s, p) {
                ne.resolve(s)
                  .then(function (y) {
                    u(y);
                  })
                  .catch(function (y) {
                    (n[p] = y), (a += 1), o();
                  });
              });
            })
          : ne.reject(N0([]))
      );
    };
    ne.allSettled = function () {
      var e = Rn(arguments);
      return (
        Array.isArray(e[0]) && (e = e[0]),
        e.length
          ? new ne(function (t) {
              var r = [],
                n = 0,
                a = function () {
                  (n += 1), n === e.length && t(r);
                };
              e.forEach(function (o, i) {
                ne.resolve(o)
                  .then(function (u) {
                    (r[i] = { status: 'fulfilled', value: u }), a();
                  })
                  .catch(function (u) {
                    (r[i] = { status: 'rejected', reason: u }), a();
                  });
              });
            })
          : ne.resolve([])
      );
    };
    if (Promise === ne)
      throw new Error(
        'Please use SynchronousPromise.installGlobally() to install globally',
      );
    var j0 = Promise;
    ne.installGlobally = function (e) {
      if (Promise === ne) return e;
      var t = _B(e);
      return (Promise = ne), t;
    };
    ne.uninstallGlobally = function () {
      Promise === ne && (Promise = j0);
    };
    function _B(e) {
      if (typeof e > 'u' || e.__patched) return e;
      var t = e;
      return (
        (e = function () {
          var r = j0;
          t.apply(this, Rn(arguments));
        }),
        (e.__patched = !0),
        e
      );
    }
    q0.exports = { SynchronousPromise: ne };
  });
  var Wo = S((oX, $0) => {
    l();
    c();
    d();
    var OB = yt(),
      RB = An(),
      PB = Ze(),
      IB = '[object Object]',
      kB = Function.prototype,
      NB = Object.prototype,
      M0 = kB.toString,
      LB = NB.hasOwnProperty,
      jB = M0.call(Object);
    function qB(e) {
      if (!PB(e) || OB(e) != IB) return !1;
      var t = RB(e);
      if (t === null) return !0;
      var r = LB.call(t, 'constructor') && t.constructor;
      return typeof r == 'function' && r instanceof r && M0.call(r) == jB;
    }
    $0.exports = qB;
  });
  var H0 = S((lX, U0) => {
    l();
    c();
    d();
    U0.exports = MB;
    function MB(e, t) {
      if (Vo('noDeprecation')) return e;
      var r = !1;
      function n() {
        if (!r) {
          if (Vo('throwDeprecation')) throw new Error(t);
          Vo('traceDeprecation') ? console.trace(t) : console.warn(t), (r = !0);
        }
        return e.apply(this, arguments);
      }
      return n;
    }
    function Vo(e) {
      try {
        if (!window.localStorage) return !1;
      } catch {
        return !1;
      }
      var t = window.localStorage[e];
      return t == null ? !1 : String(t).toLowerCase() === 'true';
    }
  });
  var X0 = S((_X, Y0) => {
    'use strict';
    l();
    c();
    d();
    Y0.exports = function () {
      if (
        typeof Symbol != 'function' ||
        typeof Object.getOwnPropertySymbols != 'function'
      )
        return !1;
      if (typeof Symbol.iterator == 'symbol') return !0;
      var t = {},
        r = Symbol('test'),
        n = Object(r);
      if (
        typeof r == 'string' ||
        Object.prototype.toString.call(r) !== '[object Symbol]' ||
        Object.prototype.toString.call(n) !== '[object Symbol]'
      )
        return !1;
      var a = 42;
      t[r] = a;
      for (r in t) return !1;
      if (
        (typeof Object.keys == 'function' && Object.keys(t).length !== 0) ||
        (typeof Object.getOwnPropertyNames == 'function' &&
          Object.getOwnPropertyNames(t).length !== 0)
      )
        return !1;
      var o = Object.getOwnPropertySymbols(t);
      if (
        o.length !== 1 ||
        o[0] !== r ||
        !Object.prototype.propertyIsEnumerable.call(t, r)
      )
        return !1;
      if (typeof Object.getOwnPropertyDescriptor == 'function') {
        var i = Object.getOwnPropertyDescriptor(t, r);
        if (i.value !== a || i.enumerable !== !0) return !1;
      }
      return !0;
    };
  });
  var Z0 = S((IX, Q0) => {
    'use strict';
    l();
    c();
    d();
    var J0 = typeof Symbol < 'u' && Symbol,
      rT = X0();
    Q0.exports = function () {
      return typeof J0 != 'function' ||
        typeof Symbol != 'function' ||
        typeof J0('foo') != 'symbol' ||
        typeof Symbol('bar') != 'symbol'
        ? !1
        : rT();
    };
  });
  var rh = S((jX, th) => {
    'use strict';
    l();
    c();
    d();
    var eh = { foo: {} },
      nT = Object;
    th.exports = function () {
      return (
        { __proto__: eh }.foo === eh.foo && !({ __proto__: null } instanceof nT)
      );
    };
  });
  var ah = S((UX, nh) => {
    'use strict';
    l();
    c();
    d();
    var aT = 'Function.prototype.bind called on incompatible ',
      Jo = Array.prototype.slice,
      oT = Object.prototype.toString,
      iT = '[object Function]';
    nh.exports = function (t) {
      var r = this;
      if (typeof r != 'function' || oT.call(r) !== iT)
        throw new TypeError(aT + r);
      for (
        var n = Jo.call(arguments, 1),
          a,
          o = function () {
            if (this instanceof a) {
              var y = r.apply(this, n.concat(Jo.call(arguments)));
              return Object(y) === y ? y : this;
            } else return r.apply(t, n.concat(Jo.call(arguments)));
          },
          i = Math.max(0, r.length - n.length),
          u = [],
          s = 0;
        s < i;
        s++
      )
        u.push('$' + s);
      if (
        ((a = Function(
          'binder',
          'return function (' +
            u.join(',') +
            '){ return binder.apply(this,arguments); }',
        )(o)),
        r.prototype)
      ) {
        var p = function () {};
        (p.prototype = r.prototype),
          (a.prototype = new p()),
          (p.prototype = null);
      }
      return a;
    };
  });
  var jn = S((WX, oh) => {
    'use strict';
    l();
    c();
    d();
    var uT = ah();
    oh.exports = Function.prototype.bind || uT;
  });
  var uh = S((XX, ih) => {
    'use strict';
    l();
    c();
    d();
    var sT = jn();
    ih.exports = sT.call(Function.call, Object.prototype.hasOwnProperty);
  });
  var $n = S((eJ, ph) => {
    'use strict';
    l();
    c();
    d();
    var te,
      Kt = SyntaxError,
      dh = Function,
      Vt = TypeError,
      Qo = function (e) {
        try {
          return dh('"use strict"; return (' + e + ').constructor;')();
        } catch {}
      },
      vt = Object.getOwnPropertyDescriptor;
    if (vt)
      try {
        vt({}, '');
      } catch {
        vt = null;
      }
    var Zo = function () {
        throw new Vt();
      },
      lT = vt
        ? (function () {
            try {
              return arguments.callee, Zo;
            } catch {
              try {
                return vt(arguments, 'callee').get;
              } catch {
                return Zo;
              }
            }
          })()
        : Zo,
      Gt = Z0()(),
      cT = rh()(),
      Ee =
        Object.getPrototypeOf ||
        (cT
          ? function (e) {
              return e.__proto__;
            }
          : null),
      Wt = {},
      dT = typeof Uint8Array > 'u' || !Ee ? te : Ee(Uint8Array),
      Dt = {
        '%AggregateError%': typeof AggregateError > 'u' ? te : AggregateError,
        '%Array%': Array,
        '%ArrayBuffer%': typeof ArrayBuffer > 'u' ? te : ArrayBuffer,
        '%ArrayIteratorPrototype%': Gt && Ee ? Ee([][Symbol.iterator]()) : te,
        '%AsyncFromSyncIteratorPrototype%': te,
        '%AsyncFunction%': Wt,
        '%AsyncGenerator%': Wt,
        '%AsyncGeneratorFunction%': Wt,
        '%AsyncIteratorPrototype%': Wt,
        '%Atomics%': typeof Atomics > 'u' ? te : Atomics,
        '%BigInt%': typeof BigInt > 'u' ? te : BigInt,
        '%BigInt64Array%': typeof BigInt64Array > 'u' ? te : BigInt64Array,
        '%BigUint64Array%': typeof BigUint64Array > 'u' ? te : BigUint64Array,
        '%Boolean%': Boolean,
        '%DataView%': typeof DataView > 'u' ? te : DataView,
        '%Date%': Date,
        '%decodeURI%': decodeURI,
        '%decodeURIComponent%': decodeURIComponent,
        '%encodeURI%': encodeURI,
        '%encodeURIComponent%': encodeURIComponent,
        '%Error%': Error,
        '%eval%': eval,
        '%EvalError%': EvalError,
        '%Float32Array%': typeof Float32Array > 'u' ? te : Float32Array,
        '%Float64Array%': typeof Float64Array > 'u' ? te : Float64Array,
        '%FinalizationRegistry%':
          typeof FinalizationRegistry > 'u' ? te : FinalizationRegistry,
        '%Function%': dh,
        '%GeneratorFunction%': Wt,
        '%Int8Array%': typeof Int8Array > 'u' ? te : Int8Array,
        '%Int16Array%': typeof Int16Array > 'u' ? te : Int16Array,
        '%Int32Array%': typeof Int32Array > 'u' ? te : Int32Array,
        '%isFinite%': isFinite,
        '%isNaN%': isNaN,
        '%IteratorPrototype%': Gt && Ee ? Ee(Ee([][Symbol.iterator]())) : te,
        '%JSON%': typeof JSON == 'object' ? JSON : te,
        '%Map%': typeof Map > 'u' ? te : Map,
        '%MapIteratorPrototype%':
          typeof Map > 'u' || !Gt || !Ee
            ? te
            : Ee(new Map()[Symbol.iterator]()),
        '%Math%': Math,
        '%Number%': Number,
        '%Object%': Object,
        '%parseFloat%': parseFloat,
        '%parseInt%': parseInt,
        '%Promise%': typeof Promise > 'u' ? te : Promise,
        '%Proxy%': typeof Proxy > 'u' ? te : Proxy,
        '%RangeError%': RangeError,
        '%ReferenceError%': ReferenceError,
        '%Reflect%': typeof Reflect > 'u' ? te : Reflect,
        '%RegExp%': RegExp,
        '%Set%': typeof Set > 'u' ? te : Set,
        '%SetIteratorPrototype%':
          typeof Set > 'u' || !Gt || !Ee
            ? te
            : Ee(new Set()[Symbol.iterator]()),
        '%SharedArrayBuffer%':
          typeof SharedArrayBuffer > 'u' ? te : SharedArrayBuffer,
        '%String%': String,
        '%StringIteratorPrototype%': Gt && Ee ? Ee(''[Symbol.iterator]()) : te,
        '%Symbol%': Gt ? Symbol : te,
        '%SyntaxError%': Kt,
        '%ThrowTypeError%': lT,
        '%TypedArray%': dT,
        '%TypeError%': Vt,
        '%Uint8Array%': typeof Uint8Array > 'u' ? te : Uint8Array,
        '%Uint8ClampedArray%':
          typeof Uint8ClampedArray > 'u' ? te : Uint8ClampedArray,
        '%Uint16Array%': typeof Uint16Array > 'u' ? te : Uint16Array,
        '%Uint32Array%': typeof Uint32Array > 'u' ? te : Uint32Array,
        '%URIError%': URIError,
        '%WeakMap%': typeof WeakMap > 'u' ? te : WeakMap,
        '%WeakRef%': typeof WeakRef > 'u' ? te : WeakRef,
        '%WeakSet%': typeof WeakSet > 'u' ? te : WeakSet,
      };
    if (Ee)
      try {
        null.error;
      } catch (e) {
        (sh = Ee(Ee(e))), (Dt['%Error.prototype%'] = sh);
      }
    var sh,
      pT = function e(t) {
        var r;
        if (t === '%AsyncFunction%') r = Qo('async function () {}');
        else if (t === '%GeneratorFunction%') r = Qo('function* () {}');
        else if (t === '%AsyncGeneratorFunction%')
          r = Qo('async function* () {}');
        else if (t === '%AsyncGenerator%') {
          var n = e('%AsyncGeneratorFunction%');
          n && (r = n.prototype);
        } else if (t === '%AsyncIteratorPrototype%') {
          var a = e('%AsyncGenerator%');
          a && Ee && (r = Ee(a.prototype));
        }
        return (Dt[t] = r), r;
      },
      lh = {
        '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
        '%ArrayPrototype%': ['Array', 'prototype'],
        '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
        '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
        '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
        '%ArrayProto_values%': ['Array', 'prototype', 'values'],
        '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
        '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
        '%AsyncGeneratorPrototype%': [
          'AsyncGeneratorFunction',
          'prototype',
          'prototype',
        ],
        '%BooleanPrototype%': ['Boolean', 'prototype'],
        '%DataViewPrototype%': ['DataView', 'prototype'],
        '%DatePrototype%': ['Date', 'prototype'],
        '%ErrorPrototype%': ['Error', 'prototype'],
        '%EvalErrorPrototype%': ['EvalError', 'prototype'],
        '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
        '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
        '%FunctionPrototype%': ['Function', 'prototype'],
        '%Generator%': ['GeneratorFunction', 'prototype'],
        '%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
        '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
        '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
        '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
        '%JSONParse%': ['JSON', 'parse'],
        '%JSONStringify%': ['JSON', 'stringify'],
        '%MapPrototype%': ['Map', 'prototype'],
        '%NumberPrototype%': ['Number', 'prototype'],
        '%ObjectPrototype%': ['Object', 'prototype'],
        '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
        '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
        '%PromisePrototype%': ['Promise', 'prototype'],
        '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
        '%Promise_all%': ['Promise', 'all'],
        '%Promise_reject%': ['Promise', 'reject'],
        '%Promise_resolve%': ['Promise', 'resolve'],
        '%RangeErrorPrototype%': ['RangeError', 'prototype'],
        '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
        '%RegExpPrototype%': ['RegExp', 'prototype'],
        '%SetPrototype%': ['Set', 'prototype'],
        '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
        '%StringPrototype%': ['String', 'prototype'],
        '%SymbolPrototype%': ['Symbol', 'prototype'],
        '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
        '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
        '%TypeErrorPrototype%': ['TypeError', 'prototype'],
        '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
        '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
        '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
        '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
        '%URIErrorPrototype%': ['URIError', 'prototype'],
        '%WeakMapPrototype%': ['WeakMap', 'prototype'],
        '%WeakSetPrototype%': ['WeakSet', 'prototype'],
      },
      Ir = jn(),
      qn = uh(),
      fT = Ir.call(Function.call, Array.prototype.concat),
      hT = Ir.call(Function.apply, Array.prototype.splice),
      ch = Ir.call(Function.call, String.prototype.replace),
      Mn = Ir.call(Function.call, String.prototype.slice),
      mT = Ir.call(Function.call, RegExp.prototype.exec),
      gT =
        /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
      yT = /\\(\\)?/g,
      bT = function (t) {
        var r = Mn(t, 0, 1),
          n = Mn(t, -1);
        if (r === '%' && n !== '%')
          throw new Kt('invalid intrinsic syntax, expected closing `%`');
        if (n === '%' && r !== '%')
          throw new Kt('invalid intrinsic syntax, expected opening `%`');
        var a = [];
        return (
          ch(t, gT, function (o, i, u, s) {
            a[a.length] = u ? ch(s, yT, '$1') : i || o;
          }),
          a
        );
      },
      AT = function (t, r) {
        var n = t,
          a;
        if ((qn(lh, n) && ((a = lh[n]), (n = '%' + a[0] + '%')), qn(Dt, n))) {
          var o = Dt[n];
          if ((o === Wt && (o = pT(n)), typeof o > 'u' && !r))
            throw new Vt(
              'intrinsic ' +
                t +
                ' exists, but is not available. Please file an issue!',
            );
          return { alias: a, name: n, value: o };
        }
        throw new Kt('intrinsic ' + t + ' does not exist!');
      };
    ph.exports = function (t, r) {
      if (typeof t != 'string' || t.length === 0)
        throw new Vt('intrinsic name must be a non-empty string');
      if (arguments.length > 1 && typeof r != 'boolean')
        throw new Vt('"allowMissing" argument must be a boolean');
      if (mT(/^%?[^%]*%?$/, t) === null)
        throw new Kt(
          '`%` may not be present anywhere but at the beginning and end of the intrinsic name',
        );
      var n = bT(t),
        a = n.length > 0 ? n[0] : '',
        o = AT('%' + a + '%', r),
        i = o.name,
        u = o.value,
        s = !1,
        p = o.alias;
      p && ((a = p[0]), hT(n, fT([0, 1], p)));
      for (var y = 1, A = !0; y < n.length; y += 1) {
        var h = n[y],
          m = Mn(h, 0, 1),
          E = Mn(h, -1);
        if (
          (m === '"' ||
            m === "'" ||
            m === '`' ||
            E === '"' ||
            E === "'" ||
            E === '`') &&
          m !== E
        )
          throw new Kt('property names with quotes must have matching quotes');
        if (
          ((h === 'constructor' || !A) && (s = !0),
          (a += '.' + h),
          (i = '%' + a + '%'),
          qn(Dt, i))
        )
          u = Dt[i];
        else if (u != null) {
          if (!(h in u)) {
            if (!r)
              throw new Vt(
                'base intrinsic for ' +
                  t +
                  ' exists, but the property is not available.',
              );
            return;
          }
          if (vt && y + 1 >= n.length) {
            var b = vt(u, h);
            (A = !!b),
              A && 'get' in b && !('originalValue' in b.get)
                ? (u = b.get)
                : (u = u[h]);
          } else (A = qn(u, h)), (u = u[h]);
          A && !s && (Dt[i] = u);
        }
      }
      return u;
    };
  });
  var bh = S((aJ, Un) => {
    'use strict';
    l();
    c();
    d();
    var ei = jn(),
      Yt = $n(),
      mh = Yt('%Function.prototype.apply%'),
      gh = Yt('%Function.prototype.call%'),
      yh = Yt('%Reflect.apply%', !0) || ei.call(gh, mh),
      fh = Yt('%Object.getOwnPropertyDescriptor%', !0),
      Ct = Yt('%Object.defineProperty%', !0),
      ET = Yt('%Math.max%');
    if (Ct)
      try {
        Ct({}, 'a', { value: 1 });
      } catch {
        Ct = null;
      }
    Un.exports = function (t) {
      var r = yh(ei, gh, arguments);
      if (fh && Ct) {
        var n = fh(r, 'length');
        n.configurable &&
          Ct(r, 'length', {
            value: 1 + ET(0, t.length - (arguments.length - 1)),
          });
      }
      return r;
    };
    var hh = function () {
      return yh(ei, mh, arguments);
    };
    Ct ? Ct(Un.exports, 'apply', { value: hh }) : (Un.exports.apply = hh);
  });
  var Dh = S((sJ, vh) => {
    'use strict';
    l();
    c();
    d();
    var Ah = $n(),
      Eh = bh(),
      vT = Eh(Ah('String.prototype.indexOf'));
    vh.exports = function (t, r) {
      var n = Ah(t, !!r);
      return typeof n == 'function' && vT(t, '.prototype.') > -1 ? Eh(n) : n;
    };
  });
  var Ch = S(() => {
    l();
    c();
    d();
  });
  var Hh = S((yJ, Uh) => {
    l();
    c();
    d();
    var ci = typeof Map == 'function' && Map.prototype,
      ti =
        Object.getOwnPropertyDescriptor && ci
          ? Object.getOwnPropertyDescriptor(Map.prototype, 'size')
          : null,
      zn = ci && ti && typeof ti.get == 'function' ? ti.get : null,
      xh = ci && Map.prototype.forEach,
      di = typeof Set == 'function' && Set.prototype,
      ri =
        Object.getOwnPropertyDescriptor && di
          ? Object.getOwnPropertyDescriptor(Set.prototype, 'size')
          : null,
      Gn = di && ri && typeof ri.get == 'function' ? ri.get : null,
      Fh = di && Set.prototype.forEach,
      DT = typeof WeakMap == 'function' && WeakMap.prototype,
      Nr = DT ? WeakMap.prototype.has : null,
      CT = typeof WeakSet == 'function' && WeakSet.prototype,
      Lr = CT ? WeakSet.prototype.has : null,
      xT = typeof WeakRef == 'function' && WeakRef.prototype,
      Sh = xT ? WeakRef.prototype.deref : null,
      FT = Boolean.prototype.valueOf,
      ST = Object.prototype.toString,
      wT = Function.prototype.toString,
      BT = String.prototype.match,
      pi = String.prototype.slice,
      ct = String.prototype.replace,
      TT = String.prototype.toUpperCase,
      wh = String.prototype.toLowerCase,
      Nh = RegExp.prototype.test,
      Bh = Array.prototype.concat,
      We = Array.prototype.join,
      _T = Array.prototype.slice,
      Th = Math.floor,
      oi = typeof BigInt == 'function' ? BigInt.prototype.valueOf : null,
      ni = Object.getOwnPropertySymbols,
      ii =
        typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
          ? Symbol.prototype.toString
          : null,
      Xt = typeof Symbol == 'function' && typeof Symbol.iterator == 'object',
      we =
        typeof Symbol == 'function' &&
        Symbol.toStringTag &&
        (typeof Symbol.toStringTag === Xt || 'symbol')
          ? Symbol.toStringTag
          : null,
      Lh = Object.prototype.propertyIsEnumerable,
      _h =
        (typeof Reflect == 'function'
          ? Reflect.getPrototypeOf
          : Object.getPrototypeOf) ||
        ([].__proto__ === Array.prototype
          ? function (e) {
              return e.__proto__;
            }
          : null);
    function Oh(e, t) {
      if (
        e === 1 / 0 ||
        e === -1 / 0 ||
        e !== e ||
        (e && e > -1e3 && e < 1e3) ||
        Nh.call(/e/, t)
      )
        return t;
      var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
      if (typeof e == 'number') {
        var n = e < 0 ? -Th(-e) : Th(e);
        if (n !== e) {
          var a = String(n),
            o = pi.call(t, a.length + 1);
          return (
            ct.call(a, r, '$&_') +
            '.' +
            ct.call(ct.call(o, /([0-9]{3})/g, '$&_'), /_$/, '')
          );
        }
      }
      return ct.call(t, r, '$&_');
    }
    var ui = Ch(),
      Rh = ui.custom,
      Ph = qh(Rh) ? Rh : null;
    Uh.exports = function e(t, r, n, a) {
      var o = r || {};
      if (
        lt(o, 'quoteStyle') &&
        o.quoteStyle !== 'single' &&
        o.quoteStyle !== 'double'
      )
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
      if (
        lt(o, 'maxStringLength') &&
        (typeof o.maxStringLength == 'number'
          ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0
          : o.maxStringLength !== null)
      )
        throw new TypeError(
          'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`',
        );
      var i = lt(o, 'customInspect') ? o.customInspect : !0;
      if (typeof i != 'boolean' && i !== 'symbol')
        throw new TypeError(
          'option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`',
        );
      if (
        lt(o, 'indent') &&
        o.indent !== null &&
        o.indent !== '	' &&
        !(parseInt(o.indent, 10) === o.indent && o.indent > 0)
      )
        throw new TypeError(
          'option "indent" must be "\\t", an integer > 0, or `null`',
        );
      if (lt(o, 'numericSeparator') && typeof o.numericSeparator != 'boolean')
        throw new TypeError(
          'option "numericSeparator", if provided, must be `true` or `false`',
        );
      var u = o.numericSeparator;
      if (typeof t > 'u') return 'undefined';
      if (t === null) return 'null';
      if (typeof t == 'boolean') return t ? 'true' : 'false';
      if (typeof t == 'string') return $h(t, o);
      if (typeof t == 'number') {
        if (t === 0) return 1 / 0 / t > 0 ? '0' : '-0';
        var s = String(t);
        return u ? Oh(t, s) : s;
      }
      if (typeof t == 'bigint') {
        var p = String(t) + 'n';
        return u ? Oh(t, p) : p;
      }
      var y = typeof o.depth > 'u' ? 5 : o.depth;
      if ((typeof n > 'u' && (n = 0), n >= y && y > 0 && typeof t == 'object'))
        return si(t) ? '[Array]' : '[Object]';
      var A = KT(o, n);
      if (typeof a > 'u') a = [];
      else if (Mh(a, t) >= 0) return '[Circular]';
      function h(X, R, _) {
        if ((R && ((a = _T.call(a)), a.push(R)), _)) {
          var q = { depth: o.depth };
          return (
            lt(o, 'quoteStyle') && (q.quoteStyle = o.quoteStyle),
            e(X, q, n + 1, a)
          );
        }
        return e(X, o, n + 1, a);
      }
      if (typeof t == 'function' && !Ih(t)) {
        var m = qT(t),
          E = Hn(t, h);
        return (
          '[Function' +
          (m ? ': ' + m : ' (anonymous)') +
          ']' +
          (E.length > 0 ? ' { ' + We.call(E, ', ') + ' }' : '')
        );
      }
      if (qh(t)) {
        var b = Xt
          ? ct.call(String(t), /^(Symbol\(.*\))_[^)]*$/, '$1')
          : ii.call(t);
        return typeof t == 'object' && !Xt ? kr(b) : b;
      }
      if (GT(t)) {
        for (
          var x = '<' + wh.call(String(t.nodeName)),
            F = t.attributes || [],
            B = 0;
          B < F.length;
          B++
        )
          x += ' ' + F[B].name + '=' + jh(OT(F[B].value), 'double', o);
        return (
          (x += '>'),
          t.childNodes && t.childNodes.length && (x += '...'),
          (x += '</' + wh.call(String(t.nodeName)) + '>'),
          x
        );
      }
      if (si(t)) {
        if (t.length === 0) return '[]';
        var I = Hn(t, h);
        return A && !VT(I)
          ? '[' + li(I, A) + ']'
          : '[ ' + We.call(I, ', ') + ' ]';
      }
      if (PT(t)) {
        var j = Hn(t, h);
        return !('cause' in Error.prototype) &&
          'cause' in t &&
          !Lh.call(t, 'cause')
          ? '{ [' +
              String(t) +
              '] ' +
              We.call(Bh.call('[cause]: ' + h(t.cause), j), ', ') +
              ' }'
          : j.length === 0
          ? '[' + String(t) + ']'
          : '{ [' + String(t) + '] ' + We.call(j, ', ') + ' }';
      }
      if (typeof t == 'object' && i) {
        if (Ph && typeof t[Ph] == 'function' && ui)
          return ui(t, { depth: y - n });
        if (i !== 'symbol' && typeof t.inspect == 'function')
          return t.inspect();
      }
      if (MT(t)) {
        var w = [];
        return (
          xh &&
            xh.call(t, function (X, R) {
              w.push(h(R, t, !0) + ' => ' + h(X, t));
            }),
          kh('Map', zn.call(t), w, A)
        );
      }
      if (HT(t)) {
        var k = [];
        return (
          Fh &&
            Fh.call(t, function (X) {
              k.push(h(X, t));
            }),
          kh('Set', Gn.call(t), k, A)
        );
      }
      if ($T(t)) return ai('WeakMap');
      if (zT(t)) return ai('WeakSet');
      if (UT(t)) return ai('WeakRef');
      if (kT(t)) return kr(h(Number(t)));
      if (LT(t)) return kr(h(oi.call(t)));
      if (NT(t)) return kr(FT.call(t));
      if (IT(t)) return kr(h(String(t)));
      if (!RT(t) && !Ih(t)) {
        var N = Hn(t, h),
          H = _h
            ? _h(t) === Object.prototype
            : t instanceof Object || t.constructor === Object,
          V = t instanceof Object ? '' : 'null prototype',
          U =
            !H && we && Object(t) === t && we in t
              ? pi.call(dt(t), 8, -1)
              : V
              ? 'Object'
              : '',
          Q =
            H || typeof t.constructor != 'function'
              ? ''
              : t.constructor.name
              ? t.constructor.name + ' '
              : '',
          ee =
            Q +
            (U || V
              ? '[' + We.call(Bh.call([], U || [], V || []), ': ') + '] '
              : '');
        return N.length === 0
          ? ee + '{}'
          : A
          ? ee + '{' + li(N, A) + '}'
          : ee + '{ ' + We.call(N, ', ') + ' }';
      }
      return String(t);
    };
    function jh(e, t, r) {
      var n = (r.quoteStyle || t) === 'double' ? '"' : "'";
      return n + e + n;
    }
    function OT(e) {
      return ct.call(String(e), /"/g, '&quot;');
    }
    function si(e) {
      return (
        dt(e) === '[object Array]' &&
        (!we || !(typeof e == 'object' && we in e))
      );
    }
    function RT(e) {
      return (
        dt(e) === '[object Date]' && (!we || !(typeof e == 'object' && we in e))
      );
    }
    function Ih(e) {
      return (
        dt(e) === '[object RegExp]' &&
        (!we || !(typeof e == 'object' && we in e))
      );
    }
    function PT(e) {
      return (
        dt(e) === '[object Error]' &&
        (!we || !(typeof e == 'object' && we in e))
      );
    }
    function IT(e) {
      return (
        dt(e) === '[object String]' &&
        (!we || !(typeof e == 'object' && we in e))
      );
    }
    function kT(e) {
      return (
        dt(e) === '[object Number]' &&
        (!we || !(typeof e == 'object' && we in e))
      );
    }
    function NT(e) {
      return (
        dt(e) === '[object Boolean]' &&
        (!we || !(typeof e == 'object' && we in e))
      );
    }
    function qh(e) {
      if (Xt) return e && typeof e == 'object' && e instanceof Symbol;
      if (typeof e == 'symbol') return !0;
      if (!e || typeof e != 'object' || !ii) return !1;
      try {
        return ii.call(e), !0;
      } catch {}
      return !1;
    }
    function LT(e) {
      if (!e || typeof e != 'object' || !oi) return !1;
      try {
        return oi.call(e), !0;
      } catch {}
      return !1;
    }
    var jT =
      Object.prototype.hasOwnProperty ||
      function (e) {
        return e in this;
      };
    function lt(e, t) {
      return jT.call(e, t);
    }
    function dt(e) {
      return ST.call(e);
    }
    function qT(e) {
      if (e.name) return e.name;
      var t = BT.call(wT.call(e), /^function\s*([\w$]+)/);
      return t ? t[1] : null;
    }
    function Mh(e, t) {
      if (e.indexOf) return e.indexOf(t);
      for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
      return -1;
    }
    function MT(e) {
      if (!zn || !e || typeof e != 'object') return !1;
      try {
        zn.call(e);
        try {
          Gn.call(e);
        } catch {
          return !0;
        }
        return e instanceof Map;
      } catch {}
      return !1;
    }
    function $T(e) {
      if (!Nr || !e || typeof e != 'object') return !1;
      try {
        Nr.call(e, Nr);
        try {
          Lr.call(e, Lr);
        } catch {
          return !0;
        }
        return e instanceof WeakMap;
      } catch {}
      return !1;
    }
    function UT(e) {
      if (!Sh || !e || typeof e != 'object') return !1;
      try {
        return Sh.call(e), !0;
      } catch {}
      return !1;
    }
    function HT(e) {
      if (!Gn || !e || typeof e != 'object') return !1;
      try {
        Gn.call(e);
        try {
          zn.call(e);
        } catch {
          return !0;
        }
        return e instanceof Set;
      } catch {}
      return !1;
    }
    function zT(e) {
      if (!Lr || !e || typeof e != 'object') return !1;
      try {
        Lr.call(e, Lr);
        try {
          Nr.call(e, Nr);
        } catch {
          return !0;
        }
        return e instanceof WeakSet;
      } catch {}
      return !1;
    }
    function GT(e) {
      return !e || typeof e != 'object'
        ? !1
        : typeof HTMLElement < 'u' && e instanceof HTMLElement
        ? !0
        : typeof e.nodeName == 'string' && typeof e.getAttribute == 'function';
    }
    function $h(e, t) {
      if (e.length > t.maxStringLength) {
        var r = e.length - t.maxStringLength,
          n = '... ' + r + ' more character' + (r > 1 ? 's' : '');
        return $h(pi.call(e, 0, t.maxStringLength), t) + n;
      }
      var a = ct.call(ct.call(e, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, WT);
      return jh(a, 'single', t);
    }
    function WT(e) {
      var t = e.charCodeAt(0),
        r = { 8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r' }[t];
      return r
        ? '\\' + r
        : '\\x' + (t < 16 ? '0' : '') + TT.call(t.toString(16));
    }
    function kr(e) {
      return 'Object(' + e + ')';
    }
    function ai(e) {
      return e + ' { ? }';
    }
    function kh(e, t, r, n) {
      var a = n ? li(r, n) : We.call(r, ', ');
      return e + ' (' + t + ') {' + a + '}';
    }
    function VT(e) {
      for (var t = 0; t < e.length; t++)
        if (
          Mh(
            e[t],
            `
`,
          ) >= 0
        )
          return !1;
      return !0;
    }
    function KT(e, t) {
      var r;
      if (e.indent === '	') r = '	';
      else if (typeof e.indent == 'number' && e.indent > 0)
        r = We.call(Array(e.indent + 1), ' ');
      else return null;
      return { base: r, prev: We.call(Array(t + 1), r) };
    }
    function li(e, t) {
      if (e.length === 0) return '';
      var r =
        `
` +
        t.prev +
        t.base;
      return (
        r +
        We.call(e, ',' + r) +
        `
` +
        t.prev
      );
    }
    function Hn(e, t) {
      var r = si(e),
        n = [];
      if (r) {
        n.length = e.length;
        for (var a = 0; a < e.length; a++) n[a] = lt(e, a) ? t(e[a], e) : '';
      }
      var o = typeof ni == 'function' ? ni(e) : [],
        i;
      if (Xt) {
        i = {};
        for (var u = 0; u < o.length; u++) i['$' + o[u]] = o[u];
      }
      for (var s in e)
        lt(e, s) &&
          ((r && String(Number(s)) === s && s < e.length) ||
            (Xt && i['$' + s] instanceof Symbol) ||
            (Nh.call(/[^\w$]/, s)
              ? n.push(t(s, e) + ': ' + t(e[s], e))
              : n.push(s + ': ' + t(e[s], e))));
      if (typeof ni == 'function')
        for (var p = 0; p < o.length; p++)
          Lh.call(e, o[p]) && n.push('[' + t(o[p]) + ']: ' + t(e[o[p]], e));
      return n;
    }
  });
  var Gh = S((vJ, zh) => {
    'use strict';
    l();
    c();
    d();
    var fi = $n(),
      Jt = Dh(),
      YT = Hh(),
      XT = fi('%TypeError%'),
      Wn = fi('%WeakMap%', !0),
      Vn = fi('%Map%', !0),
      JT = Jt('WeakMap.prototype.get', !0),
      QT = Jt('WeakMap.prototype.set', !0),
      ZT = Jt('WeakMap.prototype.has', !0),
      e8 = Jt('Map.prototype.get', !0),
      t8 = Jt('Map.prototype.set', !0),
      r8 = Jt('Map.prototype.has', !0),
      hi = function (e, t) {
        for (var r = e, n; (n = r.next) !== null; r = n)
          if (n.key === t)
            return (r.next = n.next), (n.next = e.next), (e.next = n), n;
      },
      n8 = function (e, t) {
        var r = hi(e, t);
        return r && r.value;
      },
      a8 = function (e, t, r) {
        var n = hi(e, t);
        n ? (n.value = r) : (e.next = { key: t, next: e.next, value: r });
      },
      o8 = function (e, t) {
        return !!hi(e, t);
      };
    zh.exports = function () {
      var t,
        r,
        n,
        a = {
          assert: function (o) {
            if (!a.has(o))
              throw new XT('Side channel does not contain ' + YT(o));
          },
          get: function (o) {
            if (Wn && o && (typeof o == 'object' || typeof o == 'function')) {
              if (t) return JT(t, o);
            } else if (Vn) {
              if (r) return e8(r, o);
            } else if (n) return n8(n, o);
          },
          has: function (o) {
            if (Wn && o && (typeof o == 'object' || typeof o == 'function')) {
              if (t) return ZT(t, o);
            } else if (Vn) {
              if (r) return r8(r, o);
            } else if (n) return o8(n, o);
            return !1;
          },
          set: function (o, i) {
            Wn && o && (typeof o == 'object' || typeof o == 'function')
              ? (t || (t = new Wn()), QT(t, o, i))
              : Vn
              ? (r || (r = new Vn()), t8(r, o, i))
              : (n || (n = { key: {}, next: null }), a8(n, o, i));
          },
        };
      return a;
    };
  });
  var Kn = S((FJ, Wh) => {
    'use strict';
    l();
    c();
    d();
    var i8 = String.prototype.replace,
      u8 = /%20/g,
      mi = { RFC1738: 'RFC1738', RFC3986: 'RFC3986' };
    Wh.exports = {
      default: mi.RFC3986,
      formatters: {
        RFC1738: function (e) {
          return i8.call(e, u8, '+');
        },
        RFC3986: function (e) {
          return String(e);
        },
      },
      RFC1738: mi.RFC1738,
      RFC3986: mi.RFC3986,
    };
  });
  var yi = S((TJ, Kh) => {
    'use strict';
    l();
    c();
    d();
    var s8 = Kn(),
      gi = Object.prototype.hasOwnProperty,
      xt = Array.isArray,
      Ve = (function () {
        for (var e = [], t = 0; t < 256; ++t)
          e.push('%' + ((t < 16 ? '0' : '') + t.toString(16)).toUpperCase());
        return e;
      })(),
      l8 = function (t) {
        for (; t.length > 1; ) {
          var r = t.pop(),
            n = r.obj[r.prop];
          if (xt(n)) {
            for (var a = [], o = 0; o < n.length; ++o)
              typeof n[o] < 'u' && a.push(n[o]);
            r.obj[r.prop] = a;
          }
        }
      },
      Vh = function (t, r) {
        for (
          var n = r && r.plainObjects ? Object.create(null) : {}, a = 0;
          a < t.length;
          ++a
        )
          typeof t[a] < 'u' && (n[a] = t[a]);
        return n;
      },
      c8 = function e(t, r, n) {
        if (!r) return t;
        if (typeof r != 'object') {
          if (xt(t)) t.push(r);
          else if (t && typeof t == 'object')
            ((n && (n.plainObjects || n.allowPrototypes)) ||
              !gi.call(Object.prototype, r)) &&
              (t[r] = !0);
          else return [t, r];
          return t;
        }
        if (!t || typeof t != 'object') return [t].concat(r);
        var a = t;
        return (
          xt(t) && !xt(r) && (a = Vh(t, n)),
          xt(t) && xt(r)
            ? (r.forEach(function (o, i) {
                if (gi.call(t, i)) {
                  var u = t[i];
                  u && typeof u == 'object' && o && typeof o == 'object'
                    ? (t[i] = e(u, o, n))
                    : t.push(o);
                } else t[i] = o;
              }),
              t)
            : Object.keys(r).reduce(function (o, i) {
                var u = r[i];
                return gi.call(o, i) ? (o[i] = e(o[i], u, n)) : (o[i] = u), o;
              }, a)
        );
      },
      d8 = function (t, r) {
        return Object.keys(r).reduce(function (n, a) {
          return (n[a] = r[a]), n;
        }, t);
      },
      p8 = function (e, t, r) {
        var n = e.replace(/\+/g, ' ');
        if (r === 'iso-8859-1') return n.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
          return decodeURIComponent(n);
        } catch {
          return n;
        }
      },
      f8 = function (t, r, n, a, o) {
        if (t.length === 0) return t;
        var i = t;
        if (
          (typeof t == 'symbol'
            ? (i = Symbol.prototype.toString.call(t))
            : typeof t != 'string' && (i = String(t)),
          n === 'iso-8859-1')
        )
          return escape(i).replace(/%u[0-9a-f]{4}/gi, function (y) {
            return '%26%23' + parseInt(y.slice(2), 16) + '%3B';
          });
        for (var u = '', s = 0; s < i.length; ++s) {
          var p = i.charCodeAt(s);
          if (
            p === 45 ||
            p === 46 ||
            p === 95 ||
            p === 126 ||
            (p >= 48 && p <= 57) ||
            (p >= 65 && p <= 90) ||
            (p >= 97 && p <= 122) ||
            (o === s8.RFC1738 && (p === 40 || p === 41))
          ) {
            u += i.charAt(s);
            continue;
          }
          if (p < 128) {
            u = u + Ve[p];
            continue;
          }
          if (p < 2048) {
            u = u + (Ve[192 | (p >> 6)] + Ve[128 | (p & 63)]);
            continue;
          }
          if (p < 55296 || p >= 57344) {
            u =
              u +
              (Ve[224 | (p >> 12)] +
                Ve[128 | ((p >> 6) & 63)] +
                Ve[128 | (p & 63)]);
            continue;
          }
          (s += 1),
            (p = 65536 + (((p & 1023) << 10) | (i.charCodeAt(s) & 1023))),
            (u +=
              Ve[240 | (p >> 18)] +
              Ve[128 | ((p >> 12) & 63)] +
              Ve[128 | ((p >> 6) & 63)] +
              Ve[128 | (p & 63)]);
        }
        return u;
      },
      h8 = function (t) {
        for (
          var r = [{ obj: { o: t }, prop: 'o' }], n = [], a = 0;
          a < r.length;
          ++a
        )
          for (
            var o = r[a], i = o.obj[o.prop], u = Object.keys(i), s = 0;
            s < u.length;
            ++s
          ) {
            var p = u[s],
              y = i[p];
            typeof y == 'object' &&
              y !== null &&
              n.indexOf(y) === -1 &&
              (r.push({ obj: i, prop: p }), n.push(y));
          }
        return l8(r), t;
      },
      m8 = function (t) {
        return Object.prototype.toString.call(t) === '[object RegExp]';
      },
      g8 = function (t) {
        return !t || typeof t != 'object'
          ? !1
          : !!(
              t.constructor &&
              t.constructor.isBuffer &&
              t.constructor.isBuffer(t)
            );
      },
      y8 = function (t, r) {
        return [].concat(t, r);
      },
      b8 = function (t, r) {
        if (xt(t)) {
          for (var n = [], a = 0; a < t.length; a += 1) n.push(r(t[a]));
          return n;
        }
        return r(t);
      };
    Kh.exports = {
      arrayToObject: Vh,
      assign: d8,
      combine: y8,
      compact: h8,
      decode: p8,
      encode: f8,
      isBuffer: g8,
      isRegExp: m8,
      maybeMap: b8,
      merge: c8,
    };
  });
  var em = S((PJ, Zh) => {
    'use strict';
    l();
    c();
    d();
    var Jh = Gh(),
      Ai = yi(),
      jr = Kn(),
      A8 = Object.prototype.hasOwnProperty,
      Yh = {
        brackets: function (t) {
          return t + '[]';
        },
        comma: 'comma',
        indices: function (t, r) {
          return t + '[' + r + ']';
        },
        repeat: function (t) {
          return t;
        },
      },
      tt = Array.isArray,
      E8 = String.prototype.split,
      v8 = Array.prototype.push,
      Qh = function (e, t) {
        v8.apply(e, tt(t) ? t : [t]);
      },
      D8 = Date.prototype.toISOString,
      Xh = jr.default,
      xe = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: 'utf-8',
        charsetSentinel: !1,
        delimiter: '&',
        encode: !0,
        encoder: Ai.encode,
        encodeValuesOnly: !1,
        format: Xh,
        formatter: jr.formatters[Xh],
        indices: !1,
        serializeDate: function (t) {
          return D8.call(t);
        },
        skipNulls: !1,
        strictNullHandling: !1,
      },
      C8 = function (t) {
        return (
          typeof t == 'string' ||
          typeof t == 'number' ||
          typeof t == 'boolean' ||
          typeof t == 'symbol' ||
          typeof t == 'bigint'
        );
      },
      bi = {},
      x8 = function e(t, r, n, a, o, i, u, s, p, y, A, h, m, E, b, x) {
        for (
          var F = t, B = x, I = 0, j = !1;
          (B = B.get(bi)) !== void 0 && !j;

        ) {
          var w = B.get(t);
          if (((I += 1), typeof w < 'u')) {
            if (w === I) throw new RangeError('Cyclic object value');
            j = !0;
          }
          typeof B.get(bi) > 'u' && (I = 0);
        }
        if (
          (typeof s == 'function'
            ? (F = s(r, F))
            : F instanceof Date
            ? (F = A(F))
            : n === 'comma' &&
              tt(F) &&
              (F = Ai.maybeMap(F, function (K) {
                return K instanceof Date ? A(K) : K;
              })),
          F === null)
        ) {
          if (o) return u && !E ? u(r, xe.encoder, b, 'key', h) : r;
          F = '';
        }
        if (C8(F) || Ai.isBuffer(F)) {
          if (u) {
            var k = E ? r : u(r, xe.encoder, b, 'key', h);
            if (n === 'comma' && E) {
              for (
                var N = E8.call(String(F), ','), H = '', V = 0;
                V < N.length;
                ++V
              )
                H +=
                  (V === 0 ? '' : ',') + m(u(N[V], xe.encoder, b, 'value', h));
              return [
                m(k) + (a && tt(F) && N.length === 1 ? '[]' : '') + '=' + H,
              ];
            }
            return [m(k) + '=' + m(u(F, xe.encoder, b, 'value', h))];
          }
          return [m(r) + '=' + m(String(F))];
        }
        var U = [];
        if (typeof F > 'u') return U;
        var Q;
        if (n === 'comma' && tt(F))
          Q = [{ value: F.length > 0 ? F.join(',') || null : void 0 }];
        else if (tt(s)) Q = s;
        else {
          var ee = Object.keys(F);
          Q = p ? ee.sort(p) : ee;
        }
        for (
          var X = a && tt(F) && F.length === 1 ? r + '[]' : r, R = 0;
          R < Q.length;
          ++R
        ) {
          var _ = Q[R],
            q = typeof _ == 'object' && typeof _.value < 'u' ? _.value : F[_];
          if (!(i && q === null)) {
            var G = tt(F)
              ? typeof n == 'function'
                ? n(X, _)
                : X
              : X + (y ? '.' + _ : '[' + _ + ']');
            x.set(t, I);
            var Y = Jh();
            Y.set(bi, x),
              Qh(U, e(q, G, n, a, o, i, u, s, p, y, A, h, m, E, b, Y));
          }
        }
        return U;
      },
      F8 = function (t) {
        if (!t) return xe;
        if (
          t.encoder !== null &&
          typeof t.encoder < 'u' &&
          typeof t.encoder != 'function'
        )
          throw new TypeError('Encoder has to be a function.');
        var r = t.charset || xe.charset;
        if (
          typeof t.charset < 'u' &&
          t.charset !== 'utf-8' &&
          t.charset !== 'iso-8859-1'
        )
          throw new TypeError(
            'The charset option must be either utf-8, iso-8859-1, or undefined',
          );
        var n = jr.default;
        if (typeof t.format < 'u') {
          if (!A8.call(jr.formatters, t.format))
            throw new TypeError('Unknown format option provided.');
          n = t.format;
        }
        var a = jr.formatters[n],
          o = xe.filter;
        return (
          (typeof t.filter == 'function' || tt(t.filter)) && (o = t.filter),
          {
            addQueryPrefix:
              typeof t.addQueryPrefix == 'boolean'
                ? t.addQueryPrefix
                : xe.addQueryPrefix,
            allowDots: typeof t.allowDots > 'u' ? xe.allowDots : !!t.allowDots,
            charset: r,
            charsetSentinel:
              typeof t.charsetSentinel == 'boolean'
                ? t.charsetSentinel
                : xe.charsetSentinel,
            delimiter: typeof t.delimiter > 'u' ? xe.delimiter : t.delimiter,
            encode: typeof t.encode == 'boolean' ? t.encode : xe.encode,
            encoder: typeof t.encoder == 'function' ? t.encoder : xe.encoder,
            encodeValuesOnly:
              typeof t.encodeValuesOnly == 'boolean'
                ? t.encodeValuesOnly
                : xe.encodeValuesOnly,
            filter: o,
            format: n,
            formatter: a,
            serializeDate:
              typeof t.serializeDate == 'function'
                ? t.serializeDate
                : xe.serializeDate,
            skipNulls:
              typeof t.skipNulls == 'boolean' ? t.skipNulls : xe.skipNulls,
            sort: typeof t.sort == 'function' ? t.sort : null,
            strictNullHandling:
              typeof t.strictNullHandling == 'boolean'
                ? t.strictNullHandling
                : xe.strictNullHandling,
          }
        );
      };
    Zh.exports = function (e, t) {
      var r = e,
        n = F8(t),
        a,
        o;
      typeof n.filter == 'function'
        ? ((o = n.filter), (r = o('', r)))
        : tt(n.filter) && ((o = n.filter), (a = o));
      var i = [];
      if (typeof r != 'object' || r === null) return '';
      var u;
      t && t.arrayFormat in Yh
        ? (u = t.arrayFormat)
        : t && 'indices' in t
        ? (u = t.indices ? 'indices' : 'repeat')
        : (u = 'indices');
      var s = Yh[u];
      if (t && 'commaRoundTrip' in t && typeof t.commaRoundTrip != 'boolean')
        throw new TypeError('`commaRoundTrip` must be a boolean, or absent');
      var p = s === 'comma' && t && t.commaRoundTrip;
      a || (a = Object.keys(r)), n.sort && a.sort(n.sort);
      for (var y = Jh(), A = 0; A < a.length; ++A) {
        var h = a[A];
        (n.skipNulls && r[h] === null) ||
          Qh(
            i,
            x8(
              r[h],
              h,
              s,
              p,
              n.strictNullHandling,
              n.skipNulls,
              n.encode ? n.encoder : null,
              n.filter,
              n.sort,
              n.allowDots,
              n.serializeDate,
              n.format,
              n.formatter,
              n.encodeValuesOnly,
              n.charset,
              y,
            ),
          );
      }
      var m = i.join(n.delimiter),
        E = n.addQueryPrefix === !0 ? '?' : '';
      return (
        n.charsetSentinel &&
          (n.charset === 'iso-8859-1'
            ? (E += 'utf8=%26%2310003%3B&')
            : (E += 'utf8=%E2%9C%93&')),
        m.length > 0 ? E + m : ''
      );
    };
  });
  var nm = S((LJ, rm) => {
    'use strict';
    l();
    c();
    d();
    var Qt = yi(),
      Ei = Object.prototype.hasOwnProperty,
      S8 = Array.isArray,
      ve = {
        allowDots: !1,
        allowPrototypes: !1,
        allowSparse: !1,
        arrayLimit: 20,
        charset: 'utf-8',
        charsetSentinel: !1,
        comma: !1,
        decoder: Qt.decode,
        delimiter: '&',
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1e3,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1,
      },
      w8 = function (e) {
        return e.replace(/&#(\d+);/g, function (t, r) {
          return String.fromCharCode(parseInt(r, 10));
        });
      },
      tm = function (e, t) {
        return e && typeof e == 'string' && t.comma && e.indexOf(',') > -1
          ? e.split(',')
          : e;
      },
      B8 = 'utf8=%26%2310003%3B',
      T8 = 'utf8=%E2%9C%93',
      _8 = function (t, r) {
        var n = {},
          a = r.ignoreQueryPrefix ? t.replace(/^\?/, '') : t,
          o = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
          i = a.split(r.delimiter, o),
          u = -1,
          s,
          p = r.charset;
        if (r.charsetSentinel)
          for (s = 0; s < i.length; ++s)
            i[s].indexOf('utf8=') === 0 &&
              (i[s] === T8 ? (p = 'utf-8') : i[s] === B8 && (p = 'iso-8859-1'),
              (u = s),
              (s = i.length));
        for (s = 0; s < i.length; ++s)
          if (s !== u) {
            var y = i[s],
              A = y.indexOf(']='),
              h = A === -1 ? y.indexOf('=') : A + 1,
              m,
              E;
            h === -1
              ? ((m = r.decoder(y, ve.decoder, p, 'key')),
                (E = r.strictNullHandling ? null : ''))
              : ((m = r.decoder(y.slice(0, h), ve.decoder, p, 'key')),
                (E = Qt.maybeMap(tm(y.slice(h + 1), r), function (b) {
                  return r.decoder(b, ve.decoder, p, 'value');
                }))),
              E &&
                r.interpretNumericEntities &&
                p === 'iso-8859-1' &&
                (E = w8(E)),
              y.indexOf('[]=') > -1 && (E = S8(E) ? [E] : E),
              Ei.call(n, m) ? (n[m] = Qt.combine(n[m], E)) : (n[m] = E);
          }
        return n;
      },
      O8 = function (e, t, r, n) {
        for (var a = n ? t : tm(t, r), o = e.length - 1; o >= 0; --o) {
          var i,
            u = e[o];
          if (u === '[]' && r.parseArrays) i = [].concat(a);
          else {
            i = r.plainObjects ? Object.create(null) : {};
            var s =
                u.charAt(0) === '[' && u.charAt(u.length - 1) === ']'
                  ? u.slice(1, -1)
                  : u,
              p = parseInt(s, 10);
            !r.parseArrays && s === ''
              ? (i = { 0: a })
              : !isNaN(p) &&
                u !== s &&
                String(p) === s &&
                p >= 0 &&
                r.parseArrays &&
                p <= r.arrayLimit
              ? ((i = []), (i[p] = a))
              : s !== '__proto__' && (i[s] = a);
          }
          a = i;
        }
        return a;
      },
      R8 = function (t, r, n, a) {
        if (t) {
          var o = n.allowDots ? t.replace(/\.([^.[]+)/g, '[$1]') : t,
            i = /(\[[^[\]]*])/,
            u = /(\[[^[\]]*])/g,
            s = n.depth > 0 && i.exec(o),
            p = s ? o.slice(0, s.index) : o,
            y = [];
          if (p) {
            if (
              !n.plainObjects &&
              Ei.call(Object.prototype, p) &&
              !n.allowPrototypes
            )
              return;
            y.push(p);
          }
          for (
            var A = 0;
            n.depth > 0 && (s = u.exec(o)) !== null && A < n.depth;

          ) {
            if (
              ((A += 1),
              !n.plainObjects &&
                Ei.call(Object.prototype, s[1].slice(1, -1)) &&
                !n.allowPrototypes)
            )
              return;
            y.push(s[1]);
          }
          return s && y.push('[' + o.slice(s.index) + ']'), O8(y, r, n, a);
        }
      },
      P8 = function (t) {
        if (!t) return ve;
        if (
          t.decoder !== null &&
          t.decoder !== void 0 &&
          typeof t.decoder != 'function'
        )
          throw new TypeError('Decoder has to be a function.');
        if (
          typeof t.charset < 'u' &&
          t.charset !== 'utf-8' &&
          t.charset !== 'iso-8859-1'
        )
          throw new TypeError(
            'The charset option must be either utf-8, iso-8859-1, or undefined',
          );
        var r = typeof t.charset > 'u' ? ve.charset : t.charset;
        return {
          allowDots: typeof t.allowDots > 'u' ? ve.allowDots : !!t.allowDots,
          allowPrototypes:
            typeof t.allowPrototypes == 'boolean'
              ? t.allowPrototypes
              : ve.allowPrototypes,
          allowSparse:
            typeof t.allowSparse == 'boolean' ? t.allowSparse : ve.allowSparse,
          arrayLimit:
            typeof t.arrayLimit == 'number' ? t.arrayLimit : ve.arrayLimit,
          charset: r,
          charsetSentinel:
            typeof t.charsetSentinel == 'boolean'
              ? t.charsetSentinel
              : ve.charsetSentinel,
          comma: typeof t.comma == 'boolean' ? t.comma : ve.comma,
          decoder: typeof t.decoder == 'function' ? t.decoder : ve.decoder,
          delimiter:
            typeof t.delimiter == 'string' || Qt.isRegExp(t.delimiter)
              ? t.delimiter
              : ve.delimiter,
          depth:
            typeof t.depth == 'number' || t.depth === !1 ? +t.depth : ve.depth,
          ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
          interpretNumericEntities:
            typeof t.interpretNumericEntities == 'boolean'
              ? t.interpretNumericEntities
              : ve.interpretNumericEntities,
          parameterLimit:
            typeof t.parameterLimit == 'number'
              ? t.parameterLimit
              : ve.parameterLimit,
          parseArrays: t.parseArrays !== !1,
          plainObjects:
            typeof t.plainObjects == 'boolean'
              ? t.plainObjects
              : ve.plainObjects,
          strictNullHandling:
            typeof t.strictNullHandling == 'boolean'
              ? t.strictNullHandling
              : ve.strictNullHandling,
        };
      };
    rm.exports = function (e, t) {
      var r = P8(t);
      if (e === '' || e === null || typeof e > 'u')
        return r.plainObjects ? Object.create(null) : {};
      for (
        var n = typeof e == 'string' ? _8(e, r) : e,
          a = r.plainObjects ? Object.create(null) : {},
          o = Object.keys(n),
          i = 0;
        i < o.length;
        ++i
      ) {
        var u = o[i],
          s = R8(u, n[u], r, typeof e == 'string');
        a = Qt.merge(a, s, r);
      }
      return r.allowSparse === !0 ? a : Qt.compact(a);
    };
  });
  var vi = S(($J, am) => {
    'use strict';
    l();
    c();
    d();
    var I8 = em(),
      k8 = nm(),
      N8 = Kn();
    am.exports = { formats: N8, parse: k8, stringify: I8 };
  });
  var cm = S((SZ, lm) => {
    l();
    c();
    d();
    (function () {
      'use strict';
      function e(i) {
        if (i == null) return !1;
        switch (i.type) {
          case 'ArrayExpression':
          case 'AssignmentExpression':
          case 'BinaryExpression':
          case 'CallExpression':
          case 'ConditionalExpression':
          case 'FunctionExpression':
          case 'Identifier':
          case 'Literal':
          case 'LogicalExpression':
          case 'MemberExpression':
          case 'NewExpression':
          case 'ObjectExpression':
          case 'SequenceExpression':
          case 'ThisExpression':
          case 'UnaryExpression':
          case 'UpdateExpression':
            return !0;
        }
        return !1;
      }
      function t(i) {
        if (i == null) return !1;
        switch (i.type) {
          case 'DoWhileStatement':
          case 'ForInStatement':
          case 'ForStatement':
          case 'WhileStatement':
            return !0;
        }
        return !1;
      }
      function r(i) {
        if (i == null) return !1;
        switch (i.type) {
          case 'BlockStatement':
          case 'BreakStatement':
          case 'ContinueStatement':
          case 'DebuggerStatement':
          case 'DoWhileStatement':
          case 'EmptyStatement':
          case 'ExpressionStatement':
          case 'ForInStatement':
          case 'ForStatement':
          case 'IfStatement':
          case 'LabeledStatement':
          case 'ReturnStatement':
          case 'SwitchStatement':
          case 'ThrowStatement':
          case 'TryStatement':
          case 'VariableDeclaration':
          case 'WhileStatement':
          case 'WithStatement':
            return !0;
        }
        return !1;
      }
      function n(i) {
        return r(i) || (i != null && i.type === 'FunctionDeclaration');
      }
      function a(i) {
        switch (i.type) {
          case 'IfStatement':
            return i.alternate != null ? i.alternate : i.consequent;
          case 'LabeledStatement':
          case 'ForStatement':
          case 'ForInStatement':
          case 'WhileStatement':
          case 'WithStatement':
            return i.body;
        }
        return null;
      }
      function o(i) {
        var u;
        if (i.type !== 'IfStatement' || i.alternate == null) return !1;
        u = i.consequent;
        do {
          if (u.type === 'IfStatement' && u.alternate == null) return !0;
          u = a(u);
        } while (u);
        return !1;
      }
      lm.exports = {
        isExpression: e,
        isStatement: r,
        isIterationStatement: t,
        isSourceElement: n,
        isProblematicIfStatement: o,
        trailingStatement: a,
      };
    })();
  });
  var Di = S((_Z, dm) => {
    l();
    c();
    d();
    (function () {
      'use strict';
      var e, t, r, n, a, o;
      (t = {
        NonAsciiIdentifierStart:
          /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
        NonAsciiIdentifierPart:
          /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
      }),
        (e = {
          NonAsciiIdentifierStart:
            /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
          NonAsciiIdentifierPart:
            /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
        });
      function i(x) {
        return 48 <= x && x <= 57;
      }
      function u(x) {
        return (
          (48 <= x && x <= 57) || (97 <= x && x <= 102) || (65 <= x && x <= 70)
        );
      }
      function s(x) {
        return x >= 48 && x <= 55;
      }
      r = [
        5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202,
        8239, 8287, 12288, 65279,
      ];
      function p(x) {
        return (
          x === 32 ||
          x === 9 ||
          x === 11 ||
          x === 12 ||
          x === 160 ||
          (x >= 5760 && r.indexOf(x) >= 0)
        );
      }
      function y(x) {
        return x === 10 || x === 13 || x === 8232 || x === 8233;
      }
      function A(x) {
        if (x <= 65535) return String.fromCharCode(x);
        var F = String.fromCharCode(Math.floor((x - 65536) / 1024) + 55296),
          B = String.fromCharCode(((x - 65536) % 1024) + 56320);
        return F + B;
      }
      for (n = new Array(128), o = 0; o < 128; ++o)
        n[o] =
          (o >= 97 && o <= 122) || (o >= 65 && o <= 90) || o === 36 || o === 95;
      for (a = new Array(128), o = 0; o < 128; ++o)
        a[o] =
          (o >= 97 && o <= 122) ||
          (o >= 65 && o <= 90) ||
          (o >= 48 && o <= 57) ||
          o === 36 ||
          o === 95;
      function h(x) {
        return x < 128 ? n[x] : t.NonAsciiIdentifierStart.test(A(x));
      }
      function m(x) {
        return x < 128 ? a[x] : t.NonAsciiIdentifierPart.test(A(x));
      }
      function E(x) {
        return x < 128 ? n[x] : e.NonAsciiIdentifierStart.test(A(x));
      }
      function b(x) {
        return x < 128 ? a[x] : e.NonAsciiIdentifierPart.test(A(x));
      }
      dm.exports = {
        isDecimalDigit: i,
        isHexDigit: u,
        isOctalDigit: s,
        isWhiteSpace: p,
        isLineTerminator: y,
        isIdentifierStartES5: h,
        isIdentifierPartES5: m,
        isIdentifierStartES6: E,
        isIdentifierPartES6: b,
      };
    })();
  });
  var fm = S((IZ, pm) => {
    l();
    c();
    d();
    (function () {
      'use strict';
      var e = Di();
      function t(h) {
        switch (h) {
          case 'implements':
          case 'interface':
          case 'package':
          case 'private':
          case 'protected':
          case 'public':
          case 'static':
          case 'let':
            return !0;
          default:
            return !1;
        }
      }
      function r(h, m) {
        return !m && h === 'yield' ? !1 : n(h, m);
      }
      function n(h, m) {
        if (m && t(h)) return !0;
        switch (h.length) {
          case 2:
            return h === 'if' || h === 'in' || h === 'do';
          case 3:
            return h === 'var' || h === 'for' || h === 'new' || h === 'try';
          case 4:
            return (
              h === 'this' ||
              h === 'else' ||
              h === 'case' ||
              h === 'void' ||
              h === 'with' ||
              h === 'enum'
            );
          case 5:
            return (
              h === 'while' ||
              h === 'break' ||
              h === 'catch' ||
              h === 'throw' ||
              h === 'const' ||
              h === 'yield' ||
              h === 'class' ||
              h === 'super'
            );
          case 6:
            return (
              h === 'return' ||
              h === 'typeof' ||
              h === 'delete' ||
              h === 'switch' ||
              h === 'export' ||
              h === 'import'
            );
          case 7:
            return h === 'default' || h === 'finally' || h === 'extends';
          case 8:
            return h === 'function' || h === 'continue' || h === 'debugger';
          case 10:
            return h === 'instanceof';
          default:
            return !1;
        }
      }
      function a(h, m) {
        return h === 'null' || h === 'true' || h === 'false' || r(h, m);
      }
      function o(h, m) {
        return h === 'null' || h === 'true' || h === 'false' || n(h, m);
      }
      function i(h) {
        return h === 'eval' || h === 'arguments';
      }
      function u(h) {
        var m, E, b;
        if (
          h.length === 0 ||
          ((b = h.charCodeAt(0)), !e.isIdentifierStartES5(b))
        )
          return !1;
        for (m = 1, E = h.length; m < E; ++m)
          if (((b = h.charCodeAt(m)), !e.isIdentifierPartES5(b))) return !1;
        return !0;
      }
      function s(h, m) {
        return (h - 55296) * 1024 + (m - 56320) + 65536;
      }
      function p(h) {
        var m, E, b, x, F;
        if (h.length === 0) return !1;
        for (F = e.isIdentifierStartES6, m = 0, E = h.length; m < E; ++m) {
          if (((b = h.charCodeAt(m)), 55296 <= b && b <= 56319)) {
            if (
              (++m,
              m >= E || ((x = h.charCodeAt(m)), !(56320 <= x && x <= 57343)))
            )
              return !1;
            b = s(b, x);
          }
          if (!F(b)) return !1;
          F = e.isIdentifierPartES6;
        }
        return !0;
      }
      function y(h, m) {
        return u(h) && !a(h, m);
      }
      function A(h, m) {
        return p(h) && !o(h, m);
      }
      pm.exports = {
        isKeywordES5: r,
        isKeywordES6: n,
        isReservedWordES5: a,
        isReservedWordES6: o,
        isRestrictedWord: i,
        isIdentifierNameES5: u,
        isIdentifierNameES6: p,
        isIdentifierES5: y,
        isIdentifierES6: A,
      };
    })();
  });
  var Ci = S((Yn) => {
    l();
    c();
    d();
    (function () {
      'use strict';
      (Yn.ast = cm()), (Yn.code = Di()), (Yn.keyword = fm());
    })();
  });
  var hm = S((UZ, t_) => {
    t_.exports = {
      name: 'doctrine',
      description: 'JSDoc parser',
      homepage: 'https://github.com/eslint/doctrine',
      main: 'lib/doctrine.js',
      version: '3.0.0',
      engines: { node: '>=6.0.0' },
      directories: { lib: './lib' },
      files: ['lib'],
      maintainers: [
        {
          name: 'Nicholas C. Zakas',
          email: 'nicholas+npm@nczconsulting.com',
          web: 'https://www.nczonline.net',
        },
        {
          name: 'Yusuke Suzuki',
          email: 'utatane.tea@gmail.com',
          web: 'https://github.com/Constellation',
        },
      ],
      repository: 'eslint/doctrine',
      devDependencies: {
        coveralls: '^3.0.1',
        dateformat: '^1.0.11',
        eslint: '^1.10.3',
        'eslint-release': '^1.0.0',
        linefix: '^0.1.1',
        mocha: '^3.4.2',
        'npm-license': '^0.3.1',
        nyc: '^10.3.2',
        semver: '^5.0.3',
        shelljs: '^0.5.3',
        'shelljs-nodecli': '^0.1.1',
        should: '^5.0.1',
      },
      license: 'Apache-2.0',
      scripts: {
        pretest: 'npm run lint',
        test: 'nyc mocha',
        coveralls: 'nyc report --reporter=text-lcov | coveralls',
        lint: 'eslint lib/',
        'generate-release': 'eslint-generate-release',
        'generate-alpharelease': 'eslint-generate-prerelease alpha',
        'generate-betarelease': 'eslint-generate-prerelease beta',
        'generate-rcrelease': 'eslint-generate-prerelease rc',
        'publish-release': 'eslint-publish-release',
      },
      dependencies: { esutils: '^2.0.2' },
    };
  });
  var gm = S((HZ, mm) => {
    l();
    c();
    d();
    function r_(e, t) {
      if (!e) throw new Error(t || 'unknown assertion error');
    }
    mm.exports = r_;
  });
  var xi = S((qr) => {
    l();
    c();
    d();
    (function () {
      'use strict';
      var e;
      (e = hm().version), (qr.VERSION = e);
      function t(n) {
        (this.name = 'DoctrineError'), (this.message = n);
      }
      (t.prototype = (function () {
        var n = function () {};
        return (n.prototype = Error.prototype), new n();
      })()),
        (t.prototype.constructor = t),
        (qr.DoctrineError = t);
      function r(n) {
        throw new t(n);
      }
      (qr.throwError = r), (qr.assert = gm());
    })();
  });
  var ym = S((Mr) => {
    l();
    c();
    d();
    (function () {
      'use strict';
      var e, t, r, n, a, o, i, u, s, p, y, A;
      (s = Ci()),
        (p = xi()),
        (e = {
          NullableLiteral: 'NullableLiteral',
          AllLiteral: 'AllLiteral',
          NullLiteral: 'NullLiteral',
          UndefinedLiteral: 'UndefinedLiteral',
          VoidLiteral: 'VoidLiteral',
          UnionType: 'UnionType',
          ArrayType: 'ArrayType',
          RecordType: 'RecordType',
          FieldType: 'FieldType',
          FunctionType: 'FunctionType',
          ParameterType: 'ParameterType',
          RestType: 'RestType',
          NonNullableType: 'NonNullableType',
          OptionalType: 'OptionalType',
          NullableType: 'NullableType',
          NameExpression: 'NameExpression',
          TypeApplication: 'TypeApplication',
          StringLiteralType: 'StringLiteralType',
          NumericLiteralType: 'NumericLiteralType',
          BooleanLiteralType: 'BooleanLiteralType',
        }),
        (t = {
          ILLEGAL: 0,
          DOT_LT: 1,
          REST: 2,
          LT: 3,
          GT: 4,
          LPAREN: 5,
          RPAREN: 6,
          LBRACE: 7,
          RBRACE: 8,
          LBRACK: 9,
          RBRACK: 10,
          COMMA: 11,
          COLON: 12,
          STAR: 13,
          PIPE: 14,
          QUESTION: 15,
          BANG: 16,
          EQUAL: 17,
          NAME: 18,
          STRING: 19,
          NUMBER: 20,
          EOF: 21,
        });
      function h(T) {
        return (
          '><(){}[],:*|?!='.indexOf(String.fromCharCode(T)) === -1 &&
          !s.code.isWhiteSpace(T) &&
          !s.code.isLineTerminator(T)
        );
      }
      function m(T, P, L, O) {
        (this._previous = T),
          (this._index = P),
          (this._token = L),
          (this._value = O);
      }
      (m.prototype.restore = function () {
        (o = this._previous),
          (a = this._index),
          (i = this._token),
          (u = this._value);
      }),
        (m.save = function () {
          return new m(o, a, i, u);
        });
      function E(T, P) {
        return A && (T.range = [P[0] + y, P[1] + y]), T;
      }
      function b() {
        var T = r.charAt(a);
        return (a += 1), T;
      }
      function x(T) {
        var P,
          L,
          O,
          $ = 0;
        for (L = T === 'u' ? 4 : 2, P = 0; P < L; ++P)
          if (a < n && s.code.isHexDigit(r.charCodeAt(a)))
            (O = b()),
              ($ = $ * 16 + '0123456789abcdef'.indexOf(O.toLowerCase()));
          else return '';
        return String.fromCharCode($);
      }
      function F() {
        var T = '',
          P,
          L,
          O,
          $,
          z;
        for (P = r.charAt(a), ++a; a < n; )
          if (((L = b()), L === P)) {
            P = '';
            break;
          } else if (L === '\\')
            if (((L = b()), s.code.isLineTerminator(L.charCodeAt(0))))
              L === '\r' && r.charCodeAt(a) === 10 && ++a;
            else
              switch (L) {
                case 'n':
                  T += `
`;
                  break;
                case 'r':
                  T += '\r';
                  break;
                case 't':
                  T += '	';
                  break;
                case 'u':
                case 'x':
                  (z = a), ($ = x(L)), $ ? (T += $) : ((a = z), (T += L));
                  break;
                case 'b':
                  T += '\b';
                  break;
                case 'f':
                  T += '\f';
                  break;
                case 'v':
                  T += '\v';
                  break;
                default:
                  s.code.isOctalDigit(L.charCodeAt(0))
                    ? ((O = '01234567'.indexOf(L)),
                      a < n &&
                        s.code.isOctalDigit(r.charCodeAt(a)) &&
                        ((O = O * 8 + '01234567'.indexOf(b())),
                        '0123'.indexOf(L) >= 0 &&
                          a < n &&
                          s.code.isOctalDigit(r.charCodeAt(a)) &&
                          (O = O * 8 + '01234567'.indexOf(b()))),
                      (T += String.fromCharCode(O)))
                    : (T += L);
                  break;
              }
          else {
            if (s.code.isLineTerminator(L.charCodeAt(0))) break;
            T += L;
          }
        return P !== '' && p.throwError('unexpected quote'), (u = T), t.STRING;
      }
      function B() {
        var T, P;
        if (((T = ''), (P = r.charCodeAt(a)), P !== 46)) {
          if (((T = b()), (P = r.charCodeAt(a)), T === '0')) {
            if (P === 120 || P === 88) {
              for (
                T += b();
                a < n && ((P = r.charCodeAt(a)), !!s.code.isHexDigit(P));

              )
                T += b();
              return (
                T.length <= 2 && p.throwError('unexpected token'),
                a < n &&
                  ((P = r.charCodeAt(a)),
                  s.code.isIdentifierStartES5(P) &&
                    p.throwError('unexpected token')),
                (u = parseInt(T, 16)),
                t.NUMBER
              );
            }
            if (s.code.isOctalDigit(P)) {
              for (
                T += b();
                a < n && ((P = r.charCodeAt(a)), !!s.code.isOctalDigit(P));

              )
                T += b();
              return (
                a < n &&
                  ((P = r.charCodeAt(a)),
                  (s.code.isIdentifierStartES5(P) ||
                    s.code.isDecimalDigit(P)) &&
                    p.throwError('unexpected token')),
                (u = parseInt(T, 8)),
                t.NUMBER
              );
            }
            s.code.isDecimalDigit(P) && p.throwError('unexpected token');
          }
          for (; a < n && ((P = r.charCodeAt(a)), !!s.code.isDecimalDigit(P)); )
            T += b();
        }
        if (P === 46)
          for (
            T += b();
            a < n && ((P = r.charCodeAt(a)), !!s.code.isDecimalDigit(P));

          )
            T += b();
        if (P === 101 || P === 69)
          if (
            ((T += b()),
            (P = r.charCodeAt(a)),
            (P === 43 || P === 45) && (T += b()),
            (P = r.charCodeAt(a)),
            s.code.isDecimalDigit(P))
          )
            for (
              T += b();
              a < n && ((P = r.charCodeAt(a)), !!s.code.isDecimalDigit(P));

            )
              T += b();
          else p.throwError('unexpected token');
        return (
          a < n &&
            ((P = r.charCodeAt(a)),
            s.code.isIdentifierStartES5(P) && p.throwError('unexpected token')),
          (u = parseFloat(T)),
          t.NUMBER
        );
      }
      function I() {
        var T, P;
        for (u = b(); a < n && h(r.charCodeAt(a)); ) {
          if (((T = r.charCodeAt(a)), T === 46)) {
            if (a + 1 >= n) return t.ILLEGAL;
            if (((P = r.charCodeAt(a + 1)), P === 60)) break;
          }
          u += b();
        }
        return t.NAME;
      }
      function j() {
        var T;
        for (o = a; a < n && s.code.isWhiteSpace(r.charCodeAt(a)); ) b();
        if (a >= n) return (i = t.EOF), i;
        switch (((T = r.charCodeAt(a)), T)) {
          case 39:
          case 34:
            return (i = F()), i;
          case 58:
            return b(), (i = t.COLON), i;
          case 44:
            return b(), (i = t.COMMA), i;
          case 40:
            return b(), (i = t.LPAREN), i;
          case 41:
            return b(), (i = t.RPAREN), i;
          case 91:
            return b(), (i = t.LBRACK), i;
          case 93:
            return b(), (i = t.RBRACK), i;
          case 123:
            return b(), (i = t.LBRACE), i;
          case 125:
            return b(), (i = t.RBRACE), i;
          case 46:
            if (a + 1 < n) {
              if (((T = r.charCodeAt(a + 1)), T === 60))
                return b(), b(), (i = t.DOT_LT), i;
              if (T === 46 && a + 2 < n && r.charCodeAt(a + 2) === 46)
                return b(), b(), b(), (i = t.REST), i;
              if (s.code.isDecimalDigit(T)) return (i = B()), i;
            }
            return (i = t.ILLEGAL), i;
          case 60:
            return b(), (i = t.LT), i;
          case 62:
            return b(), (i = t.GT), i;
          case 42:
            return b(), (i = t.STAR), i;
          case 124:
            return b(), (i = t.PIPE), i;
          case 63:
            return b(), (i = t.QUESTION), i;
          case 33:
            return b(), (i = t.BANG), i;
          case 61:
            return b(), (i = t.EQUAL), i;
          case 45:
            return (i = B()), i;
          default:
            return s.code.isDecimalDigit(T)
              ? ((i = B()), i)
              : (p.assert(h(T)), (i = I()), i);
        }
      }
      function w(T, P) {
        p.assert(i === T, P || 'consumed token not matched'), j();
      }
      function k(T, P) {
        i !== T && p.throwError(P || 'unexpected token'), j();
      }
      function N() {
        var T,
          P = a - 1;
        if (
          (w(t.LPAREN, 'UnionType should start with ('),
          (T = []),
          i !== t.RPAREN)
        )
          for (; T.push(K()), i !== t.RPAREN; ) k(t.PIPE);
        return (
          w(t.RPAREN, 'UnionType should end with )'),
          E({ type: e.UnionType, elements: T }, [P, o])
        );
      }
      function H() {
        var T,
          P = a - 1,
          L;
        for (
          w(t.LBRACK, 'ArrayType should start with ['), T = [];
          i !== t.RBRACK;

        ) {
          if (i === t.REST) {
            (L = a - 3),
              w(t.REST),
              T.push(E({ type: e.RestType, expression: K() }, [L, o]));
            break;
          } else T.push(K());
          i !== t.RBRACK && k(t.COMMA);
        }
        return k(t.RBRACK), E({ type: e.ArrayType, elements: T }, [P, o]);
      }
      function V() {
        var T = u;
        if (i === t.NAME || i === t.STRING) return j(), T;
        if (i === t.NUMBER) return w(t.NUMBER), String(T);
        p.throwError('unexpected token');
      }
      function U() {
        var T,
          P = o;
        return (
          (T = V()),
          i === t.COLON
            ? (w(t.COLON), E({ type: e.FieldType, key: T, value: K() }, [P, o]))
            : E({ type: e.FieldType, key: T, value: null }, [P, o])
        );
      }
      function Q() {
        var T,
          P = a - 1,
          L;
        if (
          (w(t.LBRACE, 'RecordType should start with {'),
          (T = []),
          i === t.COMMA)
        )
          w(t.COMMA);
        else for (; i !== t.RBRACE; ) T.push(U()), i !== t.RBRACE && k(t.COMMA);
        return (
          (L = a), k(t.RBRACE), E({ type: e.RecordType, fields: T }, [P, L])
        );
      }
      function ee() {
        var T = u,
          P = a - T.length;
        return (
          k(t.NAME),
          i === t.COLON &&
            (T === 'module' || T === 'external' || T === 'event') &&
            (w(t.COLON), (T += ':' + u), k(t.NAME)),
          E({ type: e.NameExpression, name: T }, [P, o])
        );
      }
      function X() {
        var T = [];
        for (T.push(Z()); i === t.COMMA; ) w(t.COMMA), T.push(Z());
        return T;
      }
      function R() {
        var T,
          P,
          L = a - u.length;
        return (
          (T = ee()),
          i === t.DOT_LT || i === t.LT
            ? (j(),
              (P = X()),
              k(t.GT),
              E({ type: e.TypeApplication, expression: T, applications: P }, [
                L,
                o,
              ]))
            : T
        );
      }
      function _() {
        return (
          w(t.COLON, 'ResultType should start with :'),
          i === t.NAME && u === 'void'
            ? (w(t.NAME), { type: e.VoidLiteral })
            : K()
        );
      }
      function q() {
        for (var T = [], P = !1, L, O = !1, $, z = a - 3, pe; i !== t.RPAREN; )
          i === t.REST && (w(t.REST), (O = !0)),
            ($ = o),
            (L = K()),
            L.type === e.NameExpression &&
              i === t.COLON &&
              ((pe = o - L.name.length),
              w(t.COLON),
              (L = E({ type: e.ParameterType, name: L.name, expression: K() }, [
                pe,
                o,
              ]))),
            i === t.EQUAL
              ? (w(t.EQUAL),
                (L = E({ type: e.OptionalType, expression: L }, [$, o])),
                (P = !0))
              : P && p.throwError('unexpected token'),
            O && (L = E({ type: e.RestType, expression: L }, [z, o])),
            T.push(L),
            i !== t.RPAREN && k(t.COMMA);
        return T;
      }
      function G() {
        var T,
          P,
          L,
          O,
          $,
          z = a - u.length;
        return (
          p.assert(
            i === t.NAME && u === 'function',
            "FunctionType should start with 'function'",
          ),
          w(t.NAME),
          k(t.LPAREN),
          (T = !1),
          (L = []),
          (P = null),
          i !== t.RPAREN &&
            (i === t.NAME && (u === 'this' || u === 'new')
              ? ((T = u === 'new'),
                w(t.NAME),
                k(t.COLON),
                (P = R()),
                i === t.COMMA && (w(t.COMMA), (L = q())))
              : (L = q())),
          k(t.RPAREN),
          (O = null),
          i === t.COLON && (O = _()),
          ($ = E({ type: e.FunctionType, params: L, result: O }, [z, o])),
          P && (($.this = P), T && ($.new = !0)),
          $
        );
      }
      function Y() {
        var T, P;
        switch (i) {
          case t.STAR:
            return w(t.STAR), E({ type: e.AllLiteral }, [o - 1, o]);
          case t.LPAREN:
            return N();
          case t.LBRACK:
            return H();
          case t.LBRACE:
            return Q();
          case t.NAME:
            if (((P = a - u.length), u === 'null'))
              return w(t.NAME), E({ type: e.NullLiteral }, [P, o]);
            if (u === 'undefined')
              return w(t.NAME), E({ type: e.UndefinedLiteral }, [P, o]);
            if (u === 'true' || u === 'false')
              return (
                w(t.NAME),
                E({ type: e.BooleanLiteralType, value: u === 'true' }, [P, o])
              );
            if (((T = m.save()), u === 'function'))
              try {
                return G();
              } catch {
                T.restore();
              }
            return R();
          case t.STRING:
            return (
              j(),
              E({ type: e.StringLiteralType, value: u }, [o - u.length - 2, o])
            );
          case t.NUMBER:
            return (
              j(),
              E({ type: e.NumericLiteralType, value: u }, [
                o - String(u).length,
                o,
              ])
            );
          default:
            p.throwError('unexpected token');
        }
      }
      function K() {
        var T, P;
        return i === t.QUESTION
          ? ((P = a - 1),
            w(t.QUESTION),
            i === t.COMMA ||
            i === t.EQUAL ||
            i === t.RBRACE ||
            i === t.RPAREN ||
            i === t.PIPE ||
            i === t.EOF ||
            i === t.RBRACK ||
            i === t.GT
              ? E({ type: e.NullableLiteral }, [P, o])
              : E({ type: e.NullableType, expression: Y(), prefix: !0 }, [
                  P,
                  o,
                ]))
          : i === t.BANG
          ? ((P = a - 1),
            w(t.BANG),
            E({ type: e.NonNullableType, expression: Y(), prefix: !0 }, [P, o]))
          : ((P = o),
            (T = Y()),
            i === t.BANG
              ? (w(t.BANG),
                E({ type: e.NonNullableType, expression: T, prefix: !1 }, [
                  P,
                  o,
                ]))
              : i === t.QUESTION
              ? (w(t.QUESTION),
                E({ type: e.NullableType, expression: T, prefix: !1 }, [P, o]))
              : i === t.LBRACK
              ? (w(t.LBRACK),
                k(
                  t.RBRACK,
                  'expected an array-style type declaration (' + u + '[])',
                ),
                E(
                  {
                    type: e.TypeApplication,
                    expression: E({ type: e.NameExpression, name: 'Array' }, [
                      P,
                      o,
                    ]),
                    applications: [T],
                  },
                  [P, o],
                ))
              : T);
      }
      function Z() {
        var T, P;
        if (((T = K()), i !== t.PIPE)) return T;
        for (P = [T], w(t.PIPE); P.push(K()), i === t.PIPE; ) w(t.PIPE);
        return E({ type: e.UnionType, elements: P }, [0, a]);
      }
      function se() {
        var T;
        return i === t.REST
          ? (w(t.REST), E({ type: e.RestType, expression: Z() }, [0, a]))
          : ((T = Z()),
            i === t.EQUAL
              ? (w(t.EQUAL), E({ type: e.OptionalType, expression: T }, [0, a]))
              : T);
      }
      function Re(T, P) {
        var L;
        return (
          (r = T),
          (n = r.length),
          (a = 0),
          (o = 0),
          (A = P && P.range),
          (y = (P && P.startIndex) || 0),
          j(),
          (L = Z()),
          P && P.midstream
            ? { expression: L, index: o }
            : (i !== t.EOF && p.throwError('not reach to EOF'), L)
        );
      }
      function Pe(T, P) {
        var L;
        return (
          (r = T),
          (n = r.length),
          (a = 0),
          (o = 0),
          (A = P && P.range),
          (y = (P && P.startIndex) || 0),
          j(),
          (L = se()),
          P && P.midstream
            ? { expression: L, index: o }
            : (i !== t.EOF && p.throwError('not reach to EOF'), L)
        );
      }
      function J(T, P, L) {
        var O, $, z;
        switch (T.type) {
          case e.NullableLiteral:
            O = '?';
            break;
          case e.AllLiteral:
            O = '*';
            break;
          case e.NullLiteral:
            O = 'null';
            break;
          case e.UndefinedLiteral:
            O = 'undefined';
            break;
          case e.VoidLiteral:
            O = 'void';
            break;
          case e.UnionType:
            for (
              L ? (O = '') : (O = '('), $ = 0, z = T.elements.length;
              $ < z;
              ++$
            )
              (O += J(T.elements[$], P)), $ + 1 !== z && (O += P ? '|' : ' | ');
            L || (O += ')');
            break;
          case e.ArrayType:
            for (O = '[', $ = 0, z = T.elements.length; $ < z; ++$)
              (O += J(T.elements[$], P)), $ + 1 !== z && (O += P ? ',' : ', ');
            O += ']';
            break;
          case e.RecordType:
            for (O = '{', $ = 0, z = T.fields.length; $ < z; ++$)
              (O += J(T.fields[$], P)), $ + 1 !== z && (O += P ? ',' : ', ');
            O += '}';
            break;
          case e.FieldType:
            T.value
              ? (O = T.key + (P ? ':' : ': ') + J(T.value, P))
              : (O = T.key);
            break;
          case e.FunctionType:
            for (
              O = P ? 'function(' : 'function (',
                T.this &&
                  (T.new
                    ? (O += P ? 'new:' : 'new: ')
                    : (O += P ? 'this:' : 'this: '),
                  (O += J(T.this, P)),
                  T.params.length !== 0 && (O += P ? ',' : ', ')),
                $ = 0,
                z = T.params.length;
              $ < z;
              ++$
            )
              (O += J(T.params[$], P)), $ + 1 !== z && (O += P ? ',' : ', ');
            (O += ')'), T.result && (O += (P ? ':' : ': ') + J(T.result, P));
            break;
          case e.ParameterType:
            O = T.name + (P ? ':' : ': ') + J(T.expression, P);
            break;
          case e.RestType:
            (O = '...'), T.expression && (O += J(T.expression, P));
            break;
          case e.NonNullableType:
            T.prefix
              ? (O = '!' + J(T.expression, P))
              : (O = J(T.expression, P) + '!');
            break;
          case e.OptionalType:
            O = J(T.expression, P) + '=';
            break;
          case e.NullableType:
            T.prefix
              ? (O = '?' + J(T.expression, P))
              : (O = J(T.expression, P) + '?');
            break;
          case e.NameExpression:
            O = T.name;
            break;
          case e.TypeApplication:
            for (
              O = J(T.expression, P) + '.<', $ = 0, z = T.applications.length;
              $ < z;
              ++$
            )
              (O += J(T.applications[$], P)),
                $ + 1 !== z && (O += P ? ',' : ', ');
            O += '>';
            break;
          case e.StringLiteralType:
            O = '"' + T.value + '"';
            break;
          case e.NumericLiteralType:
            O = String(T.value);
            break;
          case e.BooleanLiteralType:
            O = String(T.value);
            break;
          default:
            p.throwError('Unknown type ' + T.type);
        }
        return O;
      }
      function qe(T, P) {
        return P == null && (P = {}), J(T, P.compact, P.topLevel);
      }
      (Mr.parseType = Re),
        (Mr.parseParamType = Pe),
        (Mr.stringify = qe),
        (Mr.Syntax = e);
    })();
  });
  var bm = S((Ke) => {
    l();
    c();
    d();
    (function () {
      'use strict';
      var e, t, r, n, a;
      (n = Ci()), (e = ym()), (t = xi());
      function o(w, k, N) {
        return w.slice(k, N);
      }
      a = (function () {
        var w = Object.prototype.hasOwnProperty;
        return function (N, H) {
          return w.call(N, H);
        };
      })();
      function i(w) {
        var k = {},
          N;
        for (N in w) w.hasOwnProperty(N) && (k[N] = w[N]);
        return k;
      }
      function u(w) {
        return (
          (w >= 97 && w <= 122) || (w >= 65 && w <= 90) || (w >= 48 && w <= 57)
        );
      }
      function s(w) {
        return w === 'param' || w === 'argument' || w === 'arg';
      }
      function p(w) {
        return w === 'return' || w === 'returns';
      }
      function y(w) {
        return w === 'property' || w === 'prop';
      }
      function A(w) {
        return (
          s(w) ||
          y(w) ||
          w === 'alias' ||
          w === 'this' ||
          w === 'mixes' ||
          w === 'requires'
        );
      }
      function h(w) {
        return A(w) || w === 'const' || w === 'constant';
      }
      function m(w) {
        return y(w) || s(w);
      }
      function E(w) {
        return y(w) || s(w);
      }
      function b(w) {
        return (
          s(w) ||
          p(w) ||
          w === 'define' ||
          w === 'enum' ||
          w === 'implements' ||
          w === 'this' ||
          w === 'type' ||
          w === 'typedef' ||
          y(w)
        );
      }
      function x(w) {
        return (
          b(w) ||
          w === 'throws' ||
          w === 'const' ||
          w === 'constant' ||
          w === 'namespace' ||
          w === 'member' ||
          w === 'var' ||
          w === 'module' ||
          w === 'constructor' ||
          w === 'class' ||
          w === 'extends' ||
          w === 'augments' ||
          w === 'public' ||
          w === 'private' ||
          w === 'protected'
        );
      }
      var F =
          '[ \\f\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u202f\\u205f\\u3000\\ufeff]',
        B =
          '(' +
          F +
          '*(?:\\*' +
          F +
          `?)?)(.+|[\r
\u2028\u2029])`;
      function I(w) {
        return w
          .replace(/^\/\*\*?/, '')
          .replace(/\*\/$/, '')
          .replace(new RegExp(B, 'g'), '$2')
          .replace(/\s*$/, '');
      }
      function j(w, k) {
        for (
          var N = w.replace(/^\/\*\*?/, ''), H = 0, V = new RegExp(B, 'g'), U;
          (U = V.exec(N));

        )
          if (((H += U[1].length), U.index + U[0].length > k + H))
            return k + H + w.length - N.length;
        return w.replace(/\*\/$/, '').replace(/\s*$/, '').length;
      }
      (function (w) {
        var k, N, H, V, U, Q, ee, X, R;
        function _() {
          var L = U.charCodeAt(N);
          return (
            (N += 1),
            n.code.isLineTerminator(L) &&
              !(L === 13 && U.charCodeAt(N) === 10) &&
              (H += 1),
            String.fromCharCode(L)
          );
        }
        function q() {
          var L = '';
          for (_(); N < V && u(U.charCodeAt(N)); ) L += _();
          return L;
        }
        function G() {
          var L,
            O,
            $ = N;
          for (O = !1; $ < V; ) {
            if (
              ((L = U.charCodeAt($)),
              n.code.isLineTerminator(L) &&
                !(L === 13 && U.charCodeAt($ + 1) === 10))
            )
              O = !0;
            else if (O) {
              if (L === 64) break;
              n.code.isWhiteSpace(L) || (O = !1);
            }
            $ += 1;
          }
          return $;
        }
        function Y(L, O, $) {
          for (var z, pe, oe, ie, Ae = !1; N < O; )
            if (((z = U.charCodeAt(N)), n.code.isWhiteSpace(z))) _();
            else if (z === 123) {
              _();
              break;
            } else {
              Ae = !0;
              break;
            }
          if (Ae) return null;
          for (pe = 1, oe = ''; N < O; )
            if (((z = U.charCodeAt(N)), n.code.isLineTerminator(z))) _();
            else {
              if (z === 125) {
                if (((pe -= 1), pe === 0)) {
                  _();
                  break;
                }
              } else z === 123 && (pe += 1);
              oe === '' && (ie = N), (oe += _());
            }
          return pe !== 0
            ? t.throwError('Braces are not balanced')
            : E(L)
            ? e.parseParamType(oe, { startIndex: Pe(ie), range: $ })
            : e.parseType(oe, { startIndex: Pe(ie), range: $ });
        }
        function K(L) {
          var O;
          if (
            !n.code.isIdentifierStartES5(U.charCodeAt(N)) &&
            !U[N].match(/[0-9]/)
          )
            return null;
          for (O = _(); N < L && n.code.isIdentifierPartES5(U.charCodeAt(N)); )
            O += _();
          return O;
        }
        function Z(L) {
          for (
            ;
            N < L &&
            (n.code.isWhiteSpace(U.charCodeAt(N)) ||
              n.code.isLineTerminator(U.charCodeAt(N)));

          )
            _();
        }
        function se(L, O, $) {
          var z = '',
            pe,
            oe;
          if ((Z(L), N >= L)) return null;
          if (U.charCodeAt(N) === 91)
            if (O) (pe = !0), (z = _());
            else return null;
          if (((z += K(L)), $))
            for (
              U.charCodeAt(N) === 58 &&
                (z === 'module' || z === 'external' || z === 'event') &&
                ((z += _()), (z += K(L))),
                U.charCodeAt(N) === 91 &&
                  U.charCodeAt(N + 1) === 93 &&
                  ((z += _()), (z += _()));
              U.charCodeAt(N) === 46 ||
              U.charCodeAt(N) === 47 ||
              U.charCodeAt(N) === 35 ||
              U.charCodeAt(N) === 45 ||
              U.charCodeAt(N) === 126;

            )
              (z += _()), (z += K(L));
          if (pe) {
            if ((Z(L), U.charCodeAt(N) === 61)) {
              (z += _()), Z(L);
              for (var ie, Ae = 1; N < L; ) {
                if (
                  ((ie = U.charCodeAt(N)),
                  n.code.isWhiteSpace(ie) &&
                    (oe || (Z(L), (ie = U.charCodeAt(N)))),
                  ie === 39 && (oe ? oe === "'" && (oe = '') : (oe = "'")),
                  ie === 34 && (oe ? oe === '"' && (oe = '') : (oe = '"')),
                  ie === 91)
                )
                  Ae++;
                else if (ie === 93 && --Ae === 0) break;
                z += _();
              }
            }
            if ((Z(L), N >= L || U.charCodeAt(N) !== 93)) return null;
            z += _();
          }
          return z;
        }
        function Re() {
          for (; N < V && U.charCodeAt(N) !== 64; ) _();
          return N >= V ? !1 : (t.assert(U.charCodeAt(N) === 64), !0);
        }
        function Pe(L) {
          return U === Q ? L : j(Q, L);
        }
        function J(L, O) {
          (this._options = L),
            (this._title = O.toLowerCase()),
            (this._tag = { title: O, description: null }),
            this._options.lineNumbers && (this._tag.lineNumber = H),
            (this._first = N - O.length - 1),
            (this._last = 0),
            (this._extra = {});
        }
        (J.prototype.addError = function (O) {
          var $ = Array.prototype.slice.call(arguments, 1),
            z = O.replace(/%(\d)/g, function (pe, oe) {
              return (
                t.assert(oe < $.length, 'Message reference must be in range'),
                $[oe]
              );
            });
          return (
            this._tag.errors || (this._tag.errors = []),
            R && t.throwError(z),
            this._tag.errors.push(z),
            ee
          );
        }),
          (J.prototype.parseType = function () {
            if (b(this._title))
              try {
                if (
                  ((this._tag.type = Y(
                    this._title,
                    this._last,
                    this._options.range,
                  )),
                  !this._tag.type &&
                    !s(this._title) &&
                    !p(this._title) &&
                    !this.addError('Missing or invalid tag type'))
                )
                  return !1;
              } catch (L) {
                if (((this._tag.type = null), !this.addError(L.message)))
                  return !1;
              }
            else if (x(this._title))
              try {
                this._tag.type = Y(
                  this._title,
                  this._last,
                  this._options.range,
                );
              } catch {}
            return !0;
          }),
          (J.prototype._parseNamePath = function (L) {
            var O;
            return (
              (O = se(this._last, X && E(this._title), !0)),
              !O && !L && !this.addError('Missing or invalid tag name')
                ? !1
                : ((this._tag.name = O), !0)
            );
          }),
          (J.prototype.parseNamePath = function () {
            return this._parseNamePath(!1);
          }),
          (J.prototype.parseNamePathOptional = function () {
            return this._parseNamePath(!0);
          }),
          (J.prototype.parseName = function () {
            var L, O;
            if (h(this._title))
              if (
                ((this._tag.name = se(
                  this._last,
                  X && E(this._title),
                  m(this._title),
                )),
                this._tag.name)
              )
                (O = this._tag.name),
                  O.charAt(0) === '[' &&
                    O.charAt(O.length - 1) === ']' &&
                    ((L = O.substring(1, O.length - 1).split('=')),
                    L.length > 1 && (this._tag.default = L.slice(1).join('=')),
                    (this._tag.name = L[0]),
                    this._tag.type &&
                      this._tag.type.type !== 'OptionalType' &&
                      (this._tag.type = {
                        type: 'OptionalType',
                        expression: this._tag.type,
                      }));
              else {
                if (!A(this._title)) return !0;
                if (s(this._title) && this._tag.type && this._tag.type.name)
                  (this._extra.name = this._tag.type),
                    (this._tag.name = this._tag.type.name),
                    (this._tag.type = null);
                else if (!this.addError('Missing or invalid tag name'))
                  return !1;
              }
            return !0;
          }),
          (J.prototype.parseDescription = function () {
            var O = o(U, N, this._last).trim();
            return (
              O &&
                (/^-\s+/.test(O) && (O = O.substring(2)),
                (this._tag.description = O)),
              !0
            );
          }),
          (J.prototype.parseCaption = function () {
            var O = o(U, N, this._last).trim(),
              $ = '<caption>',
              z = '</caption>',
              pe = O.indexOf($),
              oe = O.indexOf(z);
            return (
              pe >= 0 && oe >= 0
                ? ((this._tag.caption = O.substring(pe + $.length, oe).trim()),
                  (this._tag.description = O.substring(oe + z.length).trim()))
                : (this._tag.description = O),
              !0
            );
          }),
          (J.prototype.parseKind = function () {
            var O, $;
            return (
              ($ = {
                class: !0,
                constant: !0,
                event: !0,
                external: !0,
                file: !0,
                function: !0,
                member: !0,
                mixin: !0,
                module: !0,
                namespace: !0,
                typedef: !0,
              }),
              (O = o(U, N, this._last).trim()),
              (this._tag.kind = O),
              !(!a($, O) && !this.addError("Invalid kind name '%0'", O))
            );
          }),
          (J.prototype.parseAccess = function () {
            var O;
            return (
              (O = o(U, N, this._last).trim()),
              (this._tag.access = O),
              !(
                O !== 'private' &&
                O !== 'protected' &&
                O !== 'public' &&
                !this.addError("Invalid access name '%0'", O)
              )
            );
          }),
          (J.prototype.parseThis = function () {
            var O = o(U, N, this._last).trim();
            if (O && O.charAt(0) === '{') {
              var $ = this.parseType();
              return ($ && this._tag.type.type === 'NameExpression') ||
                this._tag.type.type === 'UnionType'
                ? ((this._tag.name = this._tag.type.name), !0)
                : this.addError('Invalid name for this');
            } else return this.parseNamePath();
          }),
          (J.prototype.parseVariation = function () {
            var O, $;
            return (
              ($ = o(U, N, this._last).trim()),
              (O = parseFloat($, 10)),
              (this._tag.variation = O),
              !(isNaN(O) && !this.addError("Invalid variation '%0'", $))
            );
          }),
          (J.prototype.ensureEnd = function () {
            var L = o(U, N, this._last).trim();
            return !(L && !this.addError("Unknown content '%0'", L));
          }),
          (J.prototype.epilogue = function () {
            var O;
            return (
              (O = this._tag.description),
              !(
                E(this._title) &&
                !this._tag.type &&
                O &&
                O.charAt(0) === '[' &&
                ((this._tag.type = this._extra.name),
                this._tag.name || (this._tag.name = void 0),
                !X && !this.addError('Missing or invalid tag name'))
              )
            );
          }),
          (k = {
            access: ['parseAccess'],
            alias: ['parseNamePath', 'ensureEnd'],
            augments: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            constructor: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            class: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            extends: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            example: ['parseCaption'],
            deprecated: ['parseDescription'],
            global: ['ensureEnd'],
            inner: ['ensureEnd'],
            instance: ['ensureEnd'],
            kind: ['parseKind'],
            mixes: ['parseNamePath', 'ensureEnd'],
            mixin: ['parseNamePathOptional', 'ensureEnd'],
            member: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            method: ['parseNamePathOptional', 'ensureEnd'],
            module: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            func: ['parseNamePathOptional', 'ensureEnd'],
            function: ['parseNamePathOptional', 'ensureEnd'],
            var: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            name: ['parseNamePath', 'ensureEnd'],
            namespace: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            private: ['parseType', 'parseDescription'],
            protected: ['parseType', 'parseDescription'],
            public: ['parseType', 'parseDescription'],
            readonly: ['ensureEnd'],
            requires: ['parseNamePath', 'ensureEnd'],
            since: ['parseDescription'],
            static: ['ensureEnd'],
            summary: ['parseDescription'],
            this: ['parseThis', 'ensureEnd'],
            todo: ['parseDescription'],
            typedef: ['parseType', 'parseNamePathOptional'],
            variation: ['parseVariation'],
            version: ['parseDescription'],
          }),
          (J.prototype.parse = function () {
            var O, $, z, pe;
            if (!this._title && !this.addError('Missing or invalid title'))
              return null;
            for (
              this._last = G(this._title),
                this._options.range &&
                  (this._tag.range = [
                    this._first,
                    U.slice(0, this._last).replace(/\s*$/, '').length,
                  ].map(Pe)),
                a(k, this._title)
                  ? (z = k[this._title])
                  : (z = [
                      'parseType',
                      'parseName',
                      'parseDescription',
                      'epilogue',
                    ]),
                O = 0,
                $ = z.length;
              O < $;
              ++O
            )
              if (((pe = z[O]), !this[pe]())) return null;
            return this._tag;
          });
        function qe(L) {
          var O, $, z;
          if (!Re()) return null;
          for (O = q(), $ = new J(L, O), z = $.parse(); N < $._last; ) _();
          return z;
        }
        function T(L) {
          var O = '',
            $,
            z;
          for (z = !0; N < V && (($ = U.charCodeAt(N)), !(z && $ === 64)); )
            n.code.isLineTerminator($)
              ? (z = !0)
              : z && !n.code.isWhiteSpace($) && (z = !1),
              (O += _());
          return L ? O : O.trim();
        }
        function P(L, O) {
          var $ = [],
            z,
            pe,
            oe,
            ie,
            Ae;
          if (
            (O === void 0 && (O = {}),
            typeof O.unwrap == 'boolean' && O.unwrap ? (U = I(L)) : (U = L),
            (Q = L),
            O.tags)
          )
            if (Array.isArray(O.tags))
              for (oe = {}, ie = 0, Ae = O.tags.length; ie < Ae; ie++)
                typeof O.tags[ie] == 'string'
                  ? (oe[O.tags[ie]] = !0)
                  : t.throwError('Invalid "tags" parameter: ' + O.tags);
            else t.throwError('Invalid "tags" parameter: ' + O.tags);
          for (
            V = U.length,
              N = 0,
              H = 0,
              ee = O.recoverable,
              X = O.sloppy,
              R = O.strict,
              pe = T(O.preserveWhitespace);
            (z = qe(O)), !!z;

          )
            (!oe || oe.hasOwnProperty(z.title)) && $.push(z);
          return { description: pe, tags: $ };
        }
        w.parse = P;
      })((r = {})),
        (Ke.version = t.VERSION),
        (Ke.parse = r.parse),
        (Ke.parseType = e.parseType),
        (Ke.parseParamType = e.parseParamType),
        (Ke.unwrapComment = I),
        (Ke.Syntax = i(e.Syntax)),
        (Ke.Error = t.DoctrineError),
        (Ke.type = {
          Syntax: Ke.Syntax,
          parseType: e.parseType,
          parseParamType: e.parseParamType,
          stringify: e.stringify,
        });
    })();
  });
  var Um = S((vee, $m) => {
    l();
    c();
    d();
    $m.exports = {
      tocSelector: '.js-toc',
      contentSelector: '.js-toc-content',
      headingSelector: 'h1, h2, h3',
      ignoreSelector: '.js-toc-ignore',
      hasInnerContainers: !1,
      linkClass: 'toc-link',
      extraLinkClasses: '',
      activeLinkClass: 'is-active-link',
      listClass: 'toc-list',
      extraListClasses: '',
      isCollapsedClass: 'is-collapsed',
      collapsibleClass: 'is-collapsible',
      listItemClass: 'toc-list-item',
      activeListItemClass: 'is-active-li',
      collapseDepth: 0,
      scrollSmooth: !0,
      scrollSmoothDuration: 420,
      scrollSmoothOffset: 0,
      scrollEndCallback: function (e) {},
      headingsOffset: 1,
      throttleTimeout: 50,
      positionFixedSelector: null,
      positionFixedClass: 'is-position-fixed',
      fixedSidebarOffset: 'auto',
      includeHtml: !1,
      includeTitleTags: !1,
      onClick: function (e) {},
      orderedList: !0,
      scrollContainer: null,
      skipRendering: !1,
      headingLabelCallback: !1,
      ignoreHiddenElements: !1,
      headingObjectCallback: null,
      basePath: '',
      disableTocScrollSync: !1,
      tocScrollOffset: 0,
    };
  });
  var zm = S((Fee, Hm) => {
    l();
    c();
    d();
    Hm.exports = function (e) {
      var t = [].forEach,
        r = [].some,
        n = document.body,
        a,
        o = !0,
        i = ' ';
      function u(F, B) {
        var I = B.appendChild(p(F));
        if (F.children.length) {
          var j = y(F.isCollapsed);
          F.children.forEach(function (w) {
            u(w, j);
          }),
            I.appendChild(j);
        }
      }
      function s(F, B) {
        var I = !1,
          j = y(I);
        if (
          (B.forEach(function (w) {
            u(w, j);
          }),
          (a = F || a),
          a !== null)
        )
          return (
            a.firstChild && a.removeChild(a.firstChild),
            B.length === 0 ? a : a.appendChild(j)
          );
      }
      function p(F) {
        var B = document.createElement('li'),
          I = document.createElement('a');
        return (
          e.listItemClass && B.setAttribute('class', e.listItemClass),
          e.onClick && (I.onclick = e.onClick),
          e.includeTitleTags && I.setAttribute('title', F.textContent),
          e.includeHtml && F.childNodes.length
            ? t.call(F.childNodes, function (j) {
                I.appendChild(j.cloneNode(!0));
              })
            : (I.textContent = F.textContent),
          I.setAttribute('href', e.basePath + '#' + F.id),
          I.setAttribute(
            'class',
            e.linkClass +
              i +
              'node-name--' +
              F.nodeName +
              i +
              e.extraLinkClasses,
          ),
          B.appendChild(I),
          B
        );
      }
      function y(F) {
        var B = e.orderedList ? 'ol' : 'ul',
          I = document.createElement(B),
          j = e.listClass + i + e.extraListClasses;
        return (
          F &&
            ((j = j + i + e.collapsibleClass),
            (j = j + i + e.isCollapsedClass)),
          I.setAttribute('class', j),
          I
        );
      }
      function A() {
        if (e.scrollContainer && document.querySelector(e.scrollContainer)) {
          var F;
          F = document.querySelector(e.scrollContainer).scrollTop;
        } else F = document.documentElement.scrollTop || n.scrollTop;
        var B = document.querySelector(e.positionFixedSelector);
        e.fixedSidebarOffset === 'auto' && (e.fixedSidebarOffset = a.offsetTop),
          F > e.fixedSidebarOffset
            ? B.className.indexOf(e.positionFixedClass) === -1 &&
              (B.className += i + e.positionFixedClass)
            : (B.className = B.className
                .split(i + e.positionFixedClass)
                .join(''));
      }
      function h(F) {
        var B = 0;
        return (
          F !== null &&
            ((B = F.offsetTop),
            e.hasInnerContainers && (B += h(F.offsetParent))),
          B
        );
      }
      function m(F) {
        if (e.scrollContainer && document.querySelector(e.scrollContainer)) {
          var B;
          B = document.querySelector(e.scrollContainer).scrollTop;
        } else B = document.documentElement.scrollTop || n.scrollTop;
        e.positionFixedSelector && A();
        var I = F,
          j;
        if (o && a !== null && I.length > 0) {
          r.call(I, function (Q, ee) {
            if (h(Q) > B + e.headingsOffset + 10) {
              var X = ee === 0 ? ee : ee - 1;
              return (j = I[X]), !0;
            } else if (ee === I.length - 1) return (j = I[I.length - 1]), !0;
          });
          var w = a.querySelector('.' + e.activeLinkClass),
            k = a.querySelector(
              '.' +
                e.linkClass +
                '.node-name--' +
                j.nodeName +
                '[href="' +
                e.basePath +
                '#' +
                j.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/\\@])/g, '\\$1') +
                '"]',
            );
          if (w === k) return;
          var N = a.querySelectorAll('.' + e.linkClass);
          t.call(N, function (Q) {
            Q.className = Q.className.split(i + e.activeLinkClass).join('');
          });
          var H = a.querySelectorAll('.' + e.listItemClass);
          t.call(H, function (Q) {
            Q.className = Q.className.split(i + e.activeListItemClass).join('');
          }),
            k &&
              k.className.indexOf(e.activeLinkClass) === -1 &&
              (k.className += i + e.activeLinkClass);
          var V = k && k.parentNode;
          V &&
            V.className.indexOf(e.activeListItemClass) === -1 &&
            (V.className += i + e.activeListItemClass);
          var U = a.querySelectorAll(
            '.' + e.listClass + '.' + e.collapsibleClass,
          );
          t.call(U, function (Q) {
            Q.className.indexOf(e.isCollapsedClass) === -1 &&
              (Q.className += i + e.isCollapsedClass);
          }),
            k &&
              k.nextSibling &&
              k.nextSibling.className.indexOf(e.isCollapsedClass) !== -1 &&
              (k.nextSibling.className = k.nextSibling.className
                .split(i + e.isCollapsedClass)
                .join('')),
            E(k && k.parentNode.parentNode);
        }
      }
      function E(F) {
        return F &&
          F.className.indexOf(e.collapsibleClass) !== -1 &&
          F.className.indexOf(e.isCollapsedClass) !== -1
          ? ((F.className = F.className.split(i + e.isCollapsedClass).join('')),
            E(F.parentNode.parentNode))
          : F;
      }
      function b(F) {
        var B = F.target || F.srcElement;
        typeof B.className != 'string' ||
          B.className.indexOf(e.linkClass) === -1 ||
          (o = !1);
      }
      function x() {
        o = !0;
      }
      return {
        enableTocAnimation: x,
        disableTocAnimation: b,
        render: s,
        updateToc: m,
      };
    };
  });
  var Wm = S((Tee, Gm) => {
    l();
    c();
    d();
    Gm.exports = function (t) {
      var r = [].reduce;
      function n(p) {
        return p[p.length - 1];
      }
      function a(p) {
        return +p.nodeName.toUpperCase().replace('H', '');
      }
      function o(p) {
        if (!(p instanceof window.HTMLElement)) return p;
        if (t.ignoreHiddenElements && (!p.offsetHeight || !p.offsetParent))
          return null;
        let y =
          p.getAttribute('data-heading-label') ||
          (t.headingLabelCallback
            ? String(t.headingLabelCallback(p.textContent))
            : p.textContent.trim());
        var A = {
          id: p.id,
          children: [],
          nodeName: p.nodeName,
          headingLevel: a(p),
          textContent: y,
        };
        return (
          t.includeHtml && (A.childNodes = p.childNodes),
          t.headingObjectCallback ? t.headingObjectCallback(A, p) : A
        );
      }
      function i(p, y) {
        for (
          var A = o(p),
            h = A.headingLevel,
            m = y,
            E = n(m),
            b = E ? E.headingLevel : 0,
            x = h - b;
          x > 0 && ((E = n(m)), !(E && h === E.headingLevel));

        )
          E && E.children !== void 0 && (m = E.children), x--;
        return h >= t.collapseDepth && (A.isCollapsed = !0), m.push(A), m;
      }
      function u(p, y) {
        var A = y;
        t.ignoreSelector &&
          (A = y.split(',').map(function (m) {
            return m.trim() + ':not(' + t.ignoreSelector + ')';
          }));
        try {
          return p.querySelectorAll(A);
        } catch {
          return console.warn('Headers not found with selector: ' + A), null;
        }
      }
      function s(p) {
        return r.call(
          p,
          function (A, h) {
            var m = o(h);
            return m && i(m, A.nest), A;
          },
          { nest: [] },
        );
      }
      return { nestHeadingsArray: s, selectHeadings: u };
    };
  });
  var Km = S((Pee, Vm) => {
    l();
    c();
    d();
    Vm.exports = function (t) {
      var r = t.tocElement || document.querySelector(t.tocSelector);
      if (r && r.scrollHeight > r.clientHeight) {
        var n = r.querySelector('.' + t.activeListItemClass);
        n && (r.scrollTop = n.offsetTop - t.tocScrollOffset);
      }
    };
  });
  var Xm = S((Ym) => {
    l();
    c();
    d();
    Ym.initSmoothScrolling = Y6;
    function Y6(e) {
      var t = e.duration,
        r = e.offset,
        n = location.hash ? i(location.href) : location.href;
      a();
      function a() {
        document.body.addEventListener('click', s, !1);
        function s(p) {
          !o(p.target) ||
            p.target.className.indexOf('no-smooth-scroll') > -1 ||
            (p.target.href.charAt(p.target.href.length - 2) === '#' &&
              p.target.href.charAt(p.target.href.length - 1) === '!') ||
            p.target.className.indexOf(e.linkClass) === -1 ||
            X6(p.target.hash, {
              duration: t,
              offset: r,
              callback: function () {
                u(p.target.hash);
              },
            });
        }
      }
      function o(s) {
        return (
          s.tagName.toLowerCase() === 'a' &&
          (s.hash.length > 0 || s.href.charAt(s.href.length - 1) === '#') &&
          (i(s.href) === n || i(s.href) + '#' === n)
        );
      }
      function i(s) {
        return s.slice(0, s.lastIndexOf('#'));
      }
      function u(s) {
        var p = document.getElementById(s.substring(1));
        p &&
          (/^(?:a|select|input|button|textarea)$/i.test(p.tagName) ||
            (p.tabIndex = -1),
          p.focus());
      }
    }
    function X6(e, t) {
      var r = window.pageYOffset,
        n = {
          duration: t.duration,
          offset: t.offset || 0,
          callback: t.callback,
          easing: t.easing || A,
        },
        a =
          document.querySelector(
            '[id="' + decodeURI(e).split('#').join('') + '"]',
          ) || document.querySelector('[id="' + e.split('#').join('') + '"]'),
        o =
          typeof e == 'string'
            ? n.offset +
              (e
                ? (a && a.getBoundingClientRect().top) || 0
                : -(
                    document.documentElement.scrollTop ||
                    document.body.scrollTop
                  ))
            : e,
        i = typeof n.duration == 'function' ? n.duration(o) : n.duration,
        u,
        s;
      requestAnimationFrame(function (h) {
        (u = h), p(h);
      });
      function p(h) {
        (s = h - u),
          window.scrollTo(0, n.easing(s, r, o, i)),
          s < i ? requestAnimationFrame(p) : y();
      }
      function y() {
        window.scrollTo(0, r + o),
          typeof n.callback == 'function' && n.callback();
      }
      function A(h, m, E, b) {
        return (
          (h /= b / 2),
          h < 1 ? (E / 2) * h * h + m : (h--, (-E / 2) * (h * (h - 2) - 1) + m)
        );
      }
    }
  });
  var Zm = S((Jm, Qm) => {
    l();
    c();
    d();
    (function (e, t) {
      typeof define == 'function' && define.amd
        ? define([], t(e))
        : typeof Jm == 'object'
        ? (Qm.exports = t(e))
        : (e.tocbot = t(e));
    })(typeof window < 'u' ? window : window || window, function (e) {
      'use strict';
      var t = Um(),
        r = {},
        n = {},
        a = zm(),
        o = Wm(),
        i = Km(),
        u,
        s,
        p =
          !!e &&
          !!e.document &&
          !!e.document.querySelector &&
          !!e.addEventListener;
      if (typeof window > 'u' && !p) return;
      var y,
        A = Object.prototype.hasOwnProperty;
      function h() {
        for (var x = {}, F = 0; F < arguments.length; F++) {
          var B = arguments[F];
          for (var I in B) A.call(B, I) && (x[I] = B[I]);
        }
        return x;
      }
      function m(x, F, B) {
        F || (F = 250);
        var I, j;
        return function () {
          var w = B || this,
            k = +new Date(),
            N = arguments;
          I && k < I + F
            ? (clearTimeout(j),
              (j = setTimeout(function () {
                (I = k), x.apply(w, N);
              }, F)))
            : ((I = k), x.apply(w, N));
        };
      }
      function E(x) {
        try {
          return x.contentElement || document.querySelector(x.contentSelector);
        } catch {
          return (
            console.warn('Contents element not found: ' + x.contentSelector),
            null
          );
        }
      }
      function b(x) {
        try {
          return x.tocElement || document.querySelector(x.tocSelector);
        } catch {
          return console.warn('TOC element not found: ' + x.tocSelector), null;
        }
      }
      return (
        (n.destroy = function () {
          var x = b(r);
          x !== null &&
            (r.skipRendering || (x && (x.innerHTML = '')),
            r.scrollContainer && document.querySelector(r.scrollContainer)
              ? (document
                  .querySelector(r.scrollContainer)
                  .removeEventListener('scroll', this._scrollListener, !1),
                document
                  .querySelector(r.scrollContainer)
                  .removeEventListener('resize', this._scrollListener, !1),
                u &&
                  document
                    .querySelector(r.scrollContainer)
                    .removeEventListener('click', this._clickListener, !1))
              : (document.removeEventListener(
                  'scroll',
                  this._scrollListener,
                  !1,
                ),
                document.removeEventListener(
                  'resize',
                  this._scrollListener,
                  !1,
                ),
                u &&
                  document.removeEventListener(
                    'click',
                    this._clickListener,
                    !1,
                  )));
        }),
        (n.init = function (x) {
          if (p) {
            (r = h(t, x || {})),
              (this.options = r),
              (this.state = {}),
              r.scrollSmooth &&
                ((r.duration = r.scrollSmoothDuration),
                (r.offset = r.scrollSmoothOffset),
                (n.scrollSmooth = Xm().initSmoothScrolling(r))),
              (u = a(r)),
              (s = o(r)),
              (this._buildHtml = u),
              (this._parseContent = s),
              (this._headingsArray = y),
              n.destroy();
            var F = E(r);
            if (F !== null) {
              var B = b(r);
              if (
                B !== null &&
                ((y = s.selectHeadings(F, r.headingSelector)), y !== null)
              ) {
                var I = s.nestHeadingsArray(y),
                  j = I.nest;
                r.skipRendering || u.render(B, j),
                  (this._scrollListener = m(function (k) {
                    u.updateToc(y), !r.disableTocScrollSync && i(r);
                    var N =
                      k &&
                      k.target &&
                      k.target.scrollingElement &&
                      k.target.scrollingElement.scrollTop === 0;
                    ((k && (k.eventPhase === 0 || k.currentTarget === null)) ||
                      N) &&
                      (u.updateToc(y),
                      r.scrollEndCallback && r.scrollEndCallback(k));
                  }, r.throttleTimeout)),
                  this._scrollListener(),
                  r.scrollContainer && document.querySelector(r.scrollContainer)
                    ? (document
                        .querySelector(r.scrollContainer)
                        .addEventListener('scroll', this._scrollListener, !1),
                      document
                        .querySelector(r.scrollContainer)
                        .addEventListener('resize', this._scrollListener, !1))
                    : (document.addEventListener(
                        'scroll',
                        this._scrollListener,
                        !1,
                      ),
                      document.addEventListener(
                        'resize',
                        this._scrollListener,
                        !1,
                      ));
                var w = null;
                return (
                  (this._clickListener = m(function (k) {
                    r.scrollSmooth && u.disableTocAnimation(k),
                      u.updateToc(y),
                      w && clearTimeout(w),
                      (w = setTimeout(function () {
                        u.enableTocAnimation();
                      }, r.scrollSmoothDuration));
                  }, r.throttleTimeout)),
                  r.scrollContainer && document.querySelector(r.scrollContainer)
                    ? document
                        .querySelector(r.scrollContainer)
                        .addEventListener('click', this._clickListener, !1)
                    : document.addEventListener(
                        'click',
                        this._clickListener,
                        !1,
                      ),
                  this
                );
              }
            }
          }
        }),
        (n.refresh = function (x) {
          n.destroy(), n.init(x || this.options);
        }),
        (e.tocbot = n),
        n
      );
    });
  });
  function Ft() {
    return (Ft =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }).apply(this, arguments);
  }
  function Ni(e, t) {
    if (e == null) return {};
    var r,
      n,
      a = {},
      o = Object.keys(e);
    for (n = 0; n < o.length; n++) t.indexOf((r = o[n])) >= 0 || (a[r] = e[r]);
    return a;
  }
  function Ri(e) {
    var t = Fe(e),
      r = Fe(function (n) {
        t.current && t.current(n);
      });
    return (t.current = e), r.current;
  }
  function cg(e, t, r) {
    var n = Ri(r),
      a = ae(function () {
        return e.toHsva(t);
      }),
      o = a[0],
      i = a[1],
      u = Fe({ color: t, hsva: o });
    ge(
      function () {
        if (!e.equal(t, u.current.color)) {
          var p = e.toHsva(t);
          (u.current = { hsva: p, color: t }), i(p);
        }
      },
      [t, e],
    ),
      ge(
        function () {
          var p;
          sg(o, u.current.hsva) ||
            e.equal((p = e.fromHsva(o)), u.current.color) ||
            ((u.current = { hsva: o, color: p }), n(p));
        },
        [o, e, n],
      );
    var s = me(function (p) {
      i(function (y) {
        return Object.assign({}, y, p);
      });
    }, []);
    return [o, s];
  }
  var nr,
    zr,
    Pi,
    eg,
    tg,
    Li,
    Gr,
    ji,
    De,
    J6,
    Q6,
    Ii,
    Z6,
    e4,
    t4,
    r4,
    ng,
    ki,
    ta,
    ag,
    n4,
    ea,
    a4,
    og,
    ig,
    ug,
    sg,
    lg,
    o4,
    i4,
    u4,
    s4,
    rg,
    dg,
    l4,
    c4,
    pg,
    d4,
    fg,
    p4,
    hg,
    f4,
    mg,
    gg = Xe(() => {
      l();
      c();
      d();
      wt();
      (nr = function (e, t, r) {
        return (
          t === void 0 && (t = 0),
          r === void 0 && (r = 1),
          e > r ? r : e < t ? t : e
        );
      }),
        (zr = function (e) {
          return 'touches' in e;
        }),
        (Pi = function (e) {
          return (e && e.ownerDocument.defaultView) || self;
        }),
        (eg = function (e, t, r) {
          var n = e.getBoundingClientRect(),
            a = zr(t)
              ? (function (o, i) {
                  for (var u = 0; u < o.length; u++)
                    if (o[u].identifier === i) return o[u];
                  return o[0];
                })(t.touches, r)
              : t;
          return {
            left: nr((a.pageX - (n.left + Pi(e).pageXOffset)) / n.width),
            top: nr((a.pageY - (n.top + Pi(e).pageYOffset)) / n.height),
          };
        }),
        (tg = function (e) {
          !zr(e) && e.preventDefault();
        }),
        (Li = g.memo(function (e) {
          var t = e.onMove,
            r = e.onKey,
            n = Ni(e, ['onMove', 'onKey']),
            a = Fe(null),
            o = Ri(t),
            i = Ri(r),
            u = Fe(null),
            s = Fe(!1),
            p = rt(
              function () {
                var m = function (x) {
                    tg(x),
                      (zr(x) ? x.touches.length > 0 : x.buttons > 0) &&
                      a.current
                        ? o(eg(a.current, x, u.current))
                        : b(!1);
                  },
                  E = function () {
                    return b(!1);
                  };
                function b(x) {
                  var F = s.current,
                    B = Pi(a.current),
                    I = x ? B.addEventListener : B.removeEventListener;
                  I(F ? 'touchmove' : 'mousemove', m),
                    I(F ? 'touchend' : 'mouseup', E);
                }
                return [
                  function (x) {
                    var F = x.nativeEvent,
                      B = a.current;
                    if (
                      B &&
                      (tg(F),
                      !(function (j, w) {
                        return w && !zr(j);
                      })(F, s.current) && B)
                    ) {
                      if (zr(F)) {
                        s.current = !0;
                        var I = F.changedTouches || [];
                        I.length && (u.current = I[0].identifier);
                      }
                      B.focus(), o(eg(B, F, u.current)), b(!0);
                    }
                  },
                  function (x) {
                    var F = x.which || x.keyCode;
                    F < 37 ||
                      F > 40 ||
                      (x.preventDefault(),
                      i({
                        left: F === 39 ? 0.05 : F === 37 ? -0.05 : 0,
                        top: F === 40 ? 0.05 : F === 38 ? -0.05 : 0,
                      }));
                  },
                  b,
                ];
              },
              [i, o],
            ),
            y = p[0],
            A = p[1],
            h = p[2];
          return (
            ge(
              function () {
                return h;
              },
              [h],
            ),
            g.createElement(
              'div',
              Ft({}, n, {
                onTouchStart: y,
                onMouseDown: y,
                className: 'react-colorful__interactive',
                ref: a,
                onKeyDown: A,
                tabIndex: 0,
                role: 'slider',
              }),
            )
          );
        })),
        (Gr = function (e) {
          return e.filter(Boolean).join(' ');
        }),
        (ji = function (e) {
          var t = e.color,
            r = e.left,
            n = e.top,
            a = n === void 0 ? 0.5 : n,
            o = Gr(['react-colorful__pointer', e.className]);
          return g.createElement(
            'div',
            {
              className: o,
              style: { top: 100 * a + '%', left: 100 * r + '%' },
            },
            g.createElement('div', {
              className: 'react-colorful__pointer-fill',
              style: { backgroundColor: t },
            }),
          );
        }),
        (De = function (e, t, r) {
          return (
            t === void 0 && (t = 0),
            r === void 0 && (r = Math.pow(10, t)),
            Math.round(r * e) / r
          );
        }),
        (J6 = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) }),
        (Q6 = function (e) {
          return og(Ii(e));
        }),
        (Ii = function (e) {
          return (
            e[0] === '#' && (e = e.substring(1)),
            e.length < 6
              ? {
                  r: parseInt(e[0] + e[0], 16),
                  g: parseInt(e[1] + e[1], 16),
                  b: parseInt(e[2] + e[2], 16),
                  a:
                    e.length === 4 ? De(parseInt(e[3] + e[3], 16) / 255, 2) : 1,
                }
              : {
                  r: parseInt(e.substring(0, 2), 16),
                  g: parseInt(e.substring(2, 4), 16),
                  b: parseInt(e.substring(4, 6), 16),
                  a:
                    e.length === 8
                      ? De(parseInt(e.substring(6, 8), 16) / 255, 2)
                      : 1,
                }
          );
        }),
        (Z6 = function (e, t) {
          return t === void 0 && (t = 'deg'), Number(e) * (J6[t] || 1);
        }),
        (e4 = function (e) {
          var t =
            /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
              e,
            );
          return t
            ? t4({
                h: Z6(t[1], t[2]),
                s: Number(t[3]),
                l: Number(t[4]),
                a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1),
              })
            : { h: 0, s: 0, v: 0, a: 1 };
        }),
        (t4 = function (e) {
          var t = e.s,
            r = e.l;
          return {
            h: e.h,
            s:
              (t *= (r < 50 ? r : 100 - r) / 100) > 0
                ? ((2 * t) / (r + t)) * 100
                : 0,
            v: r + t,
            a: e.a,
          };
        }),
        (r4 = function (e) {
          return a4(ag(e));
        }),
        (ng = function (e) {
          var t = e.s,
            r = e.v,
            n = e.a,
            a = ((200 - t) * r) / 100;
          return {
            h: De(e.h),
            s: De(
              a > 0 && a < 200
                ? ((t * r) / 100 / (a <= 100 ? a : 200 - a)) * 100
                : 0,
            ),
            l: De(a / 2),
            a: De(n, 2),
          };
        }),
        (ki = function (e) {
          var t = ng(e);
          return 'hsl(' + t.h + ', ' + t.s + '%, ' + t.l + '%)';
        }),
        (ta = function (e) {
          var t = ng(e);
          return 'hsla(' + t.h + ', ' + t.s + '%, ' + t.l + '%, ' + t.a + ')';
        }),
        (ag = function (e) {
          var t = e.h,
            r = e.s,
            n = e.v,
            a = e.a;
          (t = (t / 360) * 6), (r /= 100), (n /= 100);
          var o = Math.floor(t),
            i = n * (1 - r),
            u = n * (1 - (t - o) * r),
            s = n * (1 - (1 - t + o) * r),
            p = o % 6;
          return {
            r: De(255 * [n, u, i, i, s, n][p]),
            g: De(255 * [s, n, n, u, i, i][p]),
            b: De(255 * [i, i, s, n, n, u][p]),
            a: De(a, 2),
          };
        }),
        (n4 = function (e) {
          var t =
            /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
              e,
            );
          return t
            ? og({
                r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
                g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
                b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
                a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1),
              })
            : { h: 0, s: 0, v: 0, a: 1 };
        }),
        (ea = function (e) {
          var t = e.toString(16);
          return t.length < 2 ? '0' + t : t;
        }),
        (a4 = function (e) {
          var t = e.r,
            r = e.g,
            n = e.b,
            a = e.a,
            o = a < 1 ? ea(De(255 * a)) : '';
          return '#' + ea(t) + ea(r) + ea(n) + o;
        }),
        (og = function (e) {
          var t = e.r,
            r = e.g,
            n = e.b,
            a = e.a,
            o = Math.max(t, r, n),
            i = o - Math.min(t, r, n),
            u = i
              ? o === t
                ? (r - n) / i
                : o === r
                ? 2 + (n - t) / i
                : 4 + (t - r) / i
              : 0;
          return {
            h: De(60 * (u < 0 ? u + 6 : u)),
            s: De(o ? (i / o) * 100 : 0),
            v: De((o / 255) * 100),
            a,
          };
        }),
        (ig = g.memo(function (e) {
          var t = e.hue,
            r = e.onChange,
            n = Gr(['react-colorful__hue', e.className]);
          return g.createElement(
            'div',
            { className: n },
            g.createElement(
              Li,
              {
                onMove: function (a) {
                  r({ h: 360 * a.left });
                },
                onKey: function (a) {
                  r({ h: nr(t + 360 * a.left, 0, 360) });
                },
                'aria-label': 'Hue',
                'aria-valuenow': De(t),
                'aria-valuemax': '360',
                'aria-valuemin': '0',
              },
              g.createElement(ji, {
                className: 'react-colorful__hue-pointer',
                left: t / 360,
                color: ki({ h: t, s: 100, v: 100, a: 1 }),
              }),
            ),
          );
        })),
        (ug = g.memo(function (e) {
          var t = e.hsva,
            r = e.onChange,
            n = { backgroundColor: ki({ h: t.h, s: 100, v: 100, a: 1 }) };
          return g.createElement(
            'div',
            { className: 'react-colorful__saturation', style: n },
            g.createElement(
              Li,
              {
                onMove: function (a) {
                  r({ s: 100 * a.left, v: 100 - 100 * a.top });
                },
                onKey: function (a) {
                  r({
                    s: nr(t.s + 100 * a.left, 0, 100),
                    v: nr(t.v - 100 * a.top, 0, 100),
                  });
                },
                'aria-label': 'Color',
                'aria-valuetext':
                  'Saturation ' + De(t.s) + '%, Brightness ' + De(t.v) + '%',
              },
              g.createElement(ji, {
                className: 'react-colorful__saturation-pointer',
                top: 1 - t.v / 100,
                left: t.s / 100,
                color: ki(t),
              }),
            ),
          );
        })),
        (sg = function (e, t) {
          if (e === t) return !0;
          for (var r in e) if (e[r] !== t[r]) return !1;
          return !0;
        }),
        (lg = function (e, t) {
          return e.replace(/\s/g, '') === t.replace(/\s/g, '');
        }),
        (o4 = function (e, t) {
          return e.toLowerCase() === t.toLowerCase() || sg(Ii(e), Ii(t));
        });
      (u4 = typeof window < 'u' ? gu : ge),
        (s4 = function () {
          return (
            i4 || (typeof __webpack_nonce__ < 'u' ? __webpack_nonce__ : void 0)
          );
        }),
        (rg = new Map()),
        (dg = function (e) {
          u4(function () {
            var t = e.current ? e.current.ownerDocument : document;
            if (t !== void 0 && !rg.has(t)) {
              var r = t.createElement('style');
              (r.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`),
                rg.set(t, r);
              var n = s4();
              n && r.setAttribute('nonce', n), t.head.appendChild(r);
            }
          }, []);
        }),
        (l4 = function (e) {
          var t = e.className,
            r = e.colorModel,
            n = e.color,
            a = n === void 0 ? r.defaultColor : n,
            o = e.onChange,
            i = Ni(e, ['className', 'colorModel', 'color', 'onChange']),
            u = Fe(null);
          dg(u);
          var s = cg(r, a, o),
            p = s[0],
            y = s[1],
            A = Gr(['react-colorful', t]);
          return g.createElement(
            'div',
            Ft({}, i, { ref: u, className: A }),
            g.createElement(ug, { hsva: p, onChange: y }),
            g.createElement(ig, {
              hue: p.h,
              onChange: y,
              className: 'react-colorful__last-control',
            }),
          );
        }),
        (c4 = {
          defaultColor: '000',
          toHsva: Q6,
          fromHsva: function (e) {
            return r4({ h: e.h, s: e.s, v: e.v, a: 1 });
          },
          equal: o4,
        }),
        (pg = function (e) {
          return g.createElement(l4, Ft({}, e, { colorModel: c4 }));
        }),
        (d4 = function (e) {
          var t = e.className,
            r = e.hsva,
            n = e.onChange,
            a = {
              backgroundImage:
                'linear-gradient(90deg, ' +
                ta(Object.assign({}, r, { a: 0 })) +
                ', ' +
                ta(Object.assign({}, r, { a: 1 })) +
                ')',
            },
            o = Gr(['react-colorful__alpha', t]),
            i = De(100 * r.a);
          return g.createElement(
            'div',
            { className: o },
            g.createElement('div', {
              className: 'react-colorful__alpha-gradient',
              style: a,
            }),
            g.createElement(
              Li,
              {
                onMove: function (u) {
                  n({ a: u.left });
                },
                onKey: function (u) {
                  n({ a: nr(r.a + u.left) });
                },
                'aria-label': 'Alpha',
                'aria-valuetext': i + '%',
                'aria-valuenow': i,
                'aria-valuemin': '0',
                'aria-valuemax': '100',
              },
              g.createElement(ji, {
                className: 'react-colorful__alpha-pointer',
                left: r.a,
                color: ta(r),
              }),
            ),
          );
        }),
        (fg = function (e) {
          var t = e.className,
            r = e.colorModel,
            n = e.color,
            a = n === void 0 ? r.defaultColor : n,
            o = e.onChange,
            i = Ni(e, ['className', 'colorModel', 'color', 'onChange']),
            u = Fe(null);
          dg(u);
          var s = cg(r, a, o),
            p = s[0],
            y = s[1],
            A = Gr(['react-colorful', t]);
          return g.createElement(
            'div',
            Ft({}, i, { ref: u, className: A }),
            g.createElement(ug, { hsva: p, onChange: y }),
            g.createElement(ig, { hue: p.h, onChange: y }),
            g.createElement(d4, {
              hsva: p,
              onChange: y,
              className: 'react-colorful__last-control',
            }),
          );
        }),
        (p4 = {
          defaultColor: 'hsla(0, 0%, 0%, 1)',
          toHsva: e4,
          fromHsva: ta,
          equal: lg,
        }),
        (hg = function (e) {
          return g.createElement(fg, Ft({}, e, { colorModel: p4 }));
        }),
        (f4 = {
          defaultColor: 'rgba(0, 0, 0, 1)',
          toHsva: n4,
          fromHsva: function (e) {
            var t = ag(e);
            return 'rgba(' + t.r + ', ' + t.g + ', ' + t.b + ', ' + t.a + ')';
          },
          equal: lg,
        }),
        (mg = function (e) {
          return g.createElement(fg, Ft({}, e, { colorModel: f4 }));
        });
    });
  var bg = S((Yee, yg) => {
    'use strict';
    l();
    c();
    d();
    yg.exports = {
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 134, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 250, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      grey: [128, 128, 128],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 221],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      rebeccapurple: [102, 51, 153],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [112, 128, 144],
      slategrey: [112, 128, 144],
      snow: [255, 250, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 50],
    };
  });
  var qi = S((Zee, Eg) => {
    l();
    c();
    d();
    var Wr = bg(),
      Ag = {};
    for (let e of Object.keys(Wr)) Ag[Wr[e]] = e;
    var W = {
      rgb: { channels: 3, labels: 'rgb' },
      hsl: { channels: 3, labels: 'hsl' },
      hsv: { channels: 3, labels: 'hsv' },
      hwb: { channels: 3, labels: 'hwb' },
      cmyk: { channels: 4, labels: 'cmyk' },
      xyz: { channels: 3, labels: 'xyz' },
      lab: { channels: 3, labels: 'lab' },
      lch: { channels: 3, labels: 'lch' },
      hex: { channels: 1, labels: ['hex'] },
      keyword: { channels: 1, labels: ['keyword'] },
      ansi16: { channels: 1, labels: ['ansi16'] },
      ansi256: { channels: 1, labels: ['ansi256'] },
      hcg: { channels: 3, labels: ['h', 'c', 'g'] },
      apple: { channels: 3, labels: ['r16', 'g16', 'b16'] },
      gray: { channels: 1, labels: ['gray'] },
    };
    Eg.exports = W;
    for (let e of Object.keys(W)) {
      if (!('channels' in W[e]))
        throw new Error('missing channels property: ' + e);
      if (!('labels' in W[e]))
        throw new Error('missing channel labels property: ' + e);
      if (W[e].labels.length !== W[e].channels)
        throw new Error('channel and label counts mismatch: ' + e);
      let { channels: t, labels: r } = W[e];
      delete W[e].channels,
        delete W[e].labels,
        Object.defineProperty(W[e], 'channels', { value: t }),
        Object.defineProperty(W[e], 'labels', { value: r });
    }
    W.rgb.hsl = function (e) {
      let t = e[0] / 255,
        r = e[1] / 255,
        n = e[2] / 255,
        a = Math.min(t, r, n),
        o = Math.max(t, r, n),
        i = o - a,
        u,
        s;
      o === a
        ? (u = 0)
        : t === o
        ? (u = (r - n) / i)
        : r === o
        ? (u = 2 + (n - t) / i)
        : n === o && (u = 4 + (t - r) / i),
        (u = Math.min(u * 60, 360)),
        u < 0 && (u += 360);
      let p = (a + o) / 2;
      return (
        o === a
          ? (s = 0)
          : p <= 0.5
          ? (s = i / (o + a))
          : (s = i / (2 - o - a)),
        [u, s * 100, p * 100]
      );
    };
    W.rgb.hsv = function (e) {
      let t,
        r,
        n,
        a,
        o,
        i = e[0] / 255,
        u = e[1] / 255,
        s = e[2] / 255,
        p = Math.max(i, u, s),
        y = p - Math.min(i, u, s),
        A = function (h) {
          return (p - h) / 6 / y + 1 / 2;
        };
      return (
        y === 0
          ? ((a = 0), (o = 0))
          : ((o = y / p),
            (t = A(i)),
            (r = A(u)),
            (n = A(s)),
            i === p
              ? (a = n - r)
              : u === p
              ? (a = 1 / 3 + t - n)
              : s === p && (a = 2 / 3 + r - t),
            a < 0 ? (a += 1) : a > 1 && (a -= 1)),
        [a * 360, o * 100, p * 100]
      );
    };
    W.rgb.hwb = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2],
        a = W.rgb.hsl(e)[0],
        o = (1 / 255) * Math.min(t, Math.min(r, n));
      return (
        (n = 1 - (1 / 255) * Math.max(t, Math.max(r, n))), [a, o * 100, n * 100]
      );
    };
    W.rgb.cmyk = function (e) {
      let t = e[0] / 255,
        r = e[1] / 255,
        n = e[2] / 255,
        a = Math.min(1 - t, 1 - r, 1 - n),
        o = (1 - t - a) / (1 - a) || 0,
        i = (1 - r - a) / (1 - a) || 0,
        u = (1 - n - a) / (1 - a) || 0;
      return [o * 100, i * 100, u * 100, a * 100];
    };
    function h4(e, t) {
      return (e[0] - t[0]) ** 2 + (e[1] - t[1]) ** 2 + (e[2] - t[2]) ** 2;
    }
    W.rgb.keyword = function (e) {
      let t = Ag[e];
      if (t) return t;
      let r = 1 / 0,
        n;
      for (let a of Object.keys(Wr)) {
        let o = Wr[a],
          i = h4(e, o);
        i < r && ((r = i), (n = a));
      }
      return n;
    };
    W.keyword.rgb = function (e) {
      return Wr[e];
    };
    W.rgb.xyz = function (e) {
      let t = e[0] / 255,
        r = e[1] / 255,
        n = e[2] / 255;
      (t = t > 0.04045 ? ((t + 0.055) / 1.055) ** 2.4 : t / 12.92),
        (r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92),
        (n = n > 0.04045 ? ((n + 0.055) / 1.055) ** 2.4 : n / 12.92);
      let a = t * 0.4124 + r * 0.3576 + n * 0.1805,
        o = t * 0.2126 + r * 0.7152 + n * 0.0722,
        i = t * 0.0193 + r * 0.1192 + n * 0.9505;
      return [a * 100, o * 100, i * 100];
    };
    W.rgb.lab = function (e) {
      let t = W.rgb.xyz(e),
        r = t[0],
        n = t[1],
        a = t[2];
      (r /= 95.047),
        (n /= 100),
        (a /= 108.883),
        (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116),
        (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116),
        (a = a > 0.008856 ? a ** (1 / 3) : 7.787 * a + 16 / 116);
      let o = 116 * n - 16,
        i = 500 * (r - n),
        u = 200 * (n - a);
      return [o, i, u];
    };
    W.hsl.rgb = function (e) {
      let t = e[0] / 360,
        r = e[1] / 100,
        n = e[2] / 100,
        a,
        o,
        i;
      if (r === 0) return (i = n * 255), [i, i, i];
      n < 0.5 ? (a = n * (1 + r)) : (a = n + r - n * r);
      let u = 2 * n - a,
        s = [0, 0, 0];
      for (let p = 0; p < 3; p++)
        (o = t + (1 / 3) * -(p - 1)),
          o < 0 && o++,
          o > 1 && o--,
          6 * o < 1
            ? (i = u + (a - u) * 6 * o)
            : 2 * o < 1
            ? (i = a)
            : 3 * o < 2
            ? (i = u + (a - u) * (2 / 3 - o) * 6)
            : (i = u),
          (s[p] = i * 255);
      return s;
    };
    W.hsl.hsv = function (e) {
      let t = e[0],
        r = e[1] / 100,
        n = e[2] / 100,
        a = r,
        o = Math.max(n, 0.01);
      (n *= 2), (r *= n <= 1 ? n : 2 - n), (a *= o <= 1 ? o : 2 - o);
      let i = (n + r) / 2,
        u = n === 0 ? (2 * a) / (o + a) : (2 * r) / (n + r);
      return [t, u * 100, i * 100];
    };
    W.hsv.rgb = function (e) {
      let t = e[0] / 60,
        r = e[1] / 100,
        n = e[2] / 100,
        a = Math.floor(t) % 6,
        o = t - Math.floor(t),
        i = 255 * n * (1 - r),
        u = 255 * n * (1 - r * o),
        s = 255 * n * (1 - r * (1 - o));
      switch (((n *= 255), a)) {
        case 0:
          return [n, s, i];
        case 1:
          return [u, n, i];
        case 2:
          return [i, n, s];
        case 3:
          return [i, u, n];
        case 4:
          return [s, i, n];
        case 5:
          return [n, i, u];
      }
    };
    W.hsv.hsl = function (e) {
      let t = e[0],
        r = e[1] / 100,
        n = e[2] / 100,
        a = Math.max(n, 0.01),
        o,
        i;
      i = (2 - r) * n;
      let u = (2 - r) * a;
      return (
        (o = r * a),
        (o /= u <= 1 ? u : 2 - u),
        (o = o || 0),
        (i /= 2),
        [t, o * 100, i * 100]
      );
    };
    W.hwb.rgb = function (e) {
      let t = e[0] / 360,
        r = e[1] / 100,
        n = e[2] / 100,
        a = r + n,
        o;
      a > 1 && ((r /= a), (n /= a));
      let i = Math.floor(6 * t),
        u = 1 - n;
      (o = 6 * t - i), i & 1 && (o = 1 - o);
      let s = r + o * (u - r),
        p,
        y,
        A;
      switch (i) {
        default:
        case 6:
        case 0:
          (p = u), (y = s), (A = r);
          break;
        case 1:
          (p = s), (y = u), (A = r);
          break;
        case 2:
          (p = r), (y = u), (A = s);
          break;
        case 3:
          (p = r), (y = s), (A = u);
          break;
        case 4:
          (p = s), (y = r), (A = u);
          break;
        case 5:
          (p = u), (y = r), (A = s);
          break;
      }
      return [p * 255, y * 255, A * 255];
    };
    W.cmyk.rgb = function (e) {
      let t = e[0] / 100,
        r = e[1] / 100,
        n = e[2] / 100,
        a = e[3] / 100,
        o = 1 - Math.min(1, t * (1 - a) + a),
        i = 1 - Math.min(1, r * (1 - a) + a),
        u = 1 - Math.min(1, n * (1 - a) + a);
      return [o * 255, i * 255, u * 255];
    };
    W.xyz.rgb = function (e) {
      let t = e[0] / 100,
        r = e[1] / 100,
        n = e[2] / 100,
        a,
        o,
        i;
      return (
        (a = t * 3.2406 + r * -1.5372 + n * -0.4986),
        (o = t * -0.9689 + r * 1.8758 + n * 0.0415),
        (i = t * 0.0557 + r * -0.204 + n * 1.057),
        (a = a > 0.0031308 ? 1.055 * a ** (1 / 2.4) - 0.055 : a * 12.92),
        (o = o > 0.0031308 ? 1.055 * o ** (1 / 2.4) - 0.055 : o * 12.92),
        (i = i > 0.0031308 ? 1.055 * i ** (1 / 2.4) - 0.055 : i * 12.92),
        (a = Math.min(Math.max(0, a), 1)),
        (o = Math.min(Math.max(0, o), 1)),
        (i = Math.min(Math.max(0, i), 1)),
        [a * 255, o * 255, i * 255]
      );
    };
    W.xyz.lab = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2];
      (t /= 95.047),
        (r /= 100),
        (n /= 108.883),
        (t = t > 0.008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116),
        (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116),
        (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116);
      let a = 116 * r - 16,
        o = 500 * (t - r),
        i = 200 * (r - n);
      return [a, o, i];
    };
    W.lab.xyz = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2],
        a,
        o,
        i;
      (o = (t + 16) / 116), (a = r / 500 + o), (i = o - n / 200);
      let u = o ** 3,
        s = a ** 3,
        p = i ** 3;
      return (
        (o = u > 0.008856 ? u : (o - 16 / 116) / 7.787),
        (a = s > 0.008856 ? s : (a - 16 / 116) / 7.787),
        (i = p > 0.008856 ? p : (i - 16 / 116) / 7.787),
        (a *= 95.047),
        (o *= 100),
        (i *= 108.883),
        [a, o, i]
      );
    };
    W.lab.lch = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2],
        a;
      (a = (Math.atan2(n, r) * 360) / 2 / Math.PI), a < 0 && (a += 360);
      let i = Math.sqrt(r * r + n * n);
      return [t, i, a];
    };
    W.lch.lab = function (e) {
      let t = e[0],
        r = e[1],
        a = (e[2] / 360) * 2 * Math.PI,
        o = r * Math.cos(a),
        i = r * Math.sin(a);
      return [t, o, i];
    };
    W.rgb.ansi16 = function (e, t = null) {
      let [r, n, a] = e,
        o = t === null ? W.rgb.hsv(e)[2] : t;
      if (((o = Math.round(o / 50)), o === 0)) return 30;
      let i =
        30 +
        ((Math.round(a / 255) << 2) |
          (Math.round(n / 255) << 1) |
          Math.round(r / 255));
      return o === 2 && (i += 60), i;
    };
    W.hsv.ansi16 = function (e) {
      return W.rgb.ansi16(W.hsv.rgb(e), e[2]);
    };
    W.rgb.ansi256 = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2];
      return t === r && r === n
        ? t < 8
          ? 16
          : t > 248
          ? 231
          : Math.round(((t - 8) / 247) * 24) + 232
        : 16 +
            36 * Math.round((t / 255) * 5) +
            6 * Math.round((r / 255) * 5) +
            Math.round((n / 255) * 5);
    };
    W.ansi16.rgb = function (e) {
      let t = e % 10;
      if (t === 0 || t === 7)
        return e > 50 && (t += 3.5), (t = (t / 10.5) * 255), [t, t, t];
      let r = (~~(e > 50) + 1) * 0.5,
        n = (t & 1) * r * 255,
        a = ((t >> 1) & 1) * r * 255,
        o = ((t >> 2) & 1) * r * 255;
      return [n, a, o];
    };
    W.ansi256.rgb = function (e) {
      if (e >= 232) {
        let o = (e - 232) * 10 + 8;
        return [o, o, o];
      }
      e -= 16;
      let t,
        r = (Math.floor(e / 36) / 5) * 255,
        n = (Math.floor((t = e % 36) / 6) / 5) * 255,
        a = ((t % 6) / 5) * 255;
      return [r, n, a];
    };
    W.rgb.hex = function (e) {
      let r = (
        ((Math.round(e[0]) & 255) << 16) +
        ((Math.round(e[1]) & 255) << 8) +
        (Math.round(e[2]) & 255)
      )
        .toString(16)
        .toUpperCase();
      return '000000'.substring(r.length) + r;
    };
    W.hex.rgb = function (e) {
      let t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!t) return [0, 0, 0];
      let r = t[0];
      t[0].length === 3 &&
        (r = r
          .split('')
          .map((u) => u + u)
          .join(''));
      let n = parseInt(r, 16),
        a = (n >> 16) & 255,
        o = (n >> 8) & 255,
        i = n & 255;
      return [a, o, i];
    };
    W.rgb.hcg = function (e) {
      let t = e[0] / 255,
        r = e[1] / 255,
        n = e[2] / 255,
        a = Math.max(Math.max(t, r), n),
        o = Math.min(Math.min(t, r), n),
        i = a - o,
        u,
        s;
      return (
        i < 1 ? (u = o / (1 - i)) : (u = 0),
        i <= 0
          ? (s = 0)
          : a === t
          ? (s = ((r - n) / i) % 6)
          : a === r
          ? (s = 2 + (n - t) / i)
          : (s = 4 + (t - r) / i),
        (s /= 6),
        (s %= 1),
        [s * 360, i * 100, u * 100]
      );
    };
    W.hsl.hcg = function (e) {
      let t = e[1] / 100,
        r = e[2] / 100,
        n = r < 0.5 ? 2 * t * r : 2 * t * (1 - r),
        a = 0;
      return n < 1 && (a = (r - 0.5 * n) / (1 - n)), [e[0], n * 100, a * 100];
    };
    W.hsv.hcg = function (e) {
      let t = e[1] / 100,
        r = e[2] / 100,
        n = t * r,
        a = 0;
      return n < 1 && (a = (r - n) / (1 - n)), [e[0], n * 100, a * 100];
    };
    W.hcg.rgb = function (e) {
      let t = e[0] / 360,
        r = e[1] / 100,
        n = e[2] / 100;
      if (r === 0) return [n * 255, n * 255, n * 255];
      let a = [0, 0, 0],
        o = (t % 1) * 6,
        i = o % 1,
        u = 1 - i,
        s = 0;
      switch (Math.floor(o)) {
        case 0:
          (a[0] = 1), (a[1] = i), (a[2] = 0);
          break;
        case 1:
          (a[0] = u), (a[1] = 1), (a[2] = 0);
          break;
        case 2:
          (a[0] = 0), (a[1] = 1), (a[2] = i);
          break;
        case 3:
          (a[0] = 0), (a[1] = u), (a[2] = 1);
          break;
        case 4:
          (a[0] = i), (a[1] = 0), (a[2] = 1);
          break;
        default:
          (a[0] = 1), (a[1] = 0), (a[2] = u);
      }
      return (
        (s = (1 - r) * n),
        [(r * a[0] + s) * 255, (r * a[1] + s) * 255, (r * a[2] + s) * 255]
      );
    };
    W.hcg.hsv = function (e) {
      let t = e[1] / 100,
        r = e[2] / 100,
        n = t + r * (1 - t),
        a = 0;
      return n > 0 && (a = t / n), [e[0], a * 100, n * 100];
    };
    W.hcg.hsl = function (e) {
      let t = e[1] / 100,
        n = (e[2] / 100) * (1 - t) + 0.5 * t,
        a = 0;
      return (
        n > 0 && n < 0.5
          ? (a = t / (2 * n))
          : n >= 0.5 && n < 1 && (a = t / (2 * (1 - n))),
        [e[0], a * 100, n * 100]
      );
    };
    W.hcg.hwb = function (e) {
      let t = e[1] / 100,
        r = e[2] / 100,
        n = t + r * (1 - t);
      return [e[0], (n - t) * 100, (1 - n) * 100];
    };
    W.hwb.hcg = function (e) {
      let t = e[1] / 100,
        n = 1 - e[2] / 100,
        a = n - t,
        o = 0;
      return a < 1 && (o = (n - a) / (1 - a)), [e[0], a * 100, o * 100];
    };
    W.apple.rgb = function (e) {
      return [(e[0] / 65535) * 255, (e[1] / 65535) * 255, (e[2] / 65535) * 255];
    };
    W.rgb.apple = function (e) {
      return [(e[0] / 255) * 65535, (e[1] / 255) * 65535, (e[2] / 255) * 65535];
    };
    W.gray.rgb = function (e) {
      return [(e[0] / 100) * 255, (e[0] / 100) * 255, (e[0] / 100) * 255];
    };
    W.gray.hsl = function (e) {
      return [0, 0, e[0]];
    };
    W.gray.hsv = W.gray.hsl;
    W.gray.hwb = function (e) {
      return [0, 100, e[0]];
    };
    W.gray.cmyk = function (e) {
      return [0, 0, 0, e[0]];
    };
    W.gray.lab = function (e) {
      return [e[0], 0, 0];
    };
    W.gray.hex = function (e) {
      let t = Math.round((e[0] / 100) * 255) & 255,
        n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
      return '000000'.substring(n.length) + n;
    };
    W.rgb.gray = function (e) {
      return [((e[0] + e[1] + e[2]) / 3 / 255) * 100];
    };
  });
  var Dg = S((nte, vg) => {
    l();
    c();
    d();
    var ra = qi();
    function m4() {
      let e = {},
        t = Object.keys(ra);
      for (let r = t.length, n = 0; n < r; n++)
        e[t[n]] = { distance: -1, parent: null };
      return e;
    }
    function g4(e) {
      let t = m4(),
        r = [e];
      for (t[e].distance = 0; r.length; ) {
        let n = r.pop(),
          a = Object.keys(ra[n]);
        for (let o = a.length, i = 0; i < o; i++) {
          let u = a[i],
            s = t[u];
          s.distance === -1 &&
            ((s.distance = t[n].distance + 1), (s.parent = n), r.unshift(u));
        }
      }
      return t;
    }
    function y4(e, t) {
      return function (r) {
        return t(e(r));
      };
    }
    function b4(e, t) {
      let r = [t[e].parent, e],
        n = ra[t[e].parent][e],
        a = t[e].parent;
      for (; t[a].parent; )
        r.unshift(t[a].parent),
          (n = y4(ra[t[a].parent][a], n)),
          (a = t[a].parent);
      return (n.conversion = r), n;
    }
    vg.exports = function (e) {
      let t = g4(e),
        r = {},
        n = Object.keys(t);
      for (let a = n.length, o = 0; o < a; o++) {
        let i = n[o];
        t[i].parent !== null && (r[i] = b4(i, t));
      }
      return r;
    };
  });
  var xg = S((ute, Cg) => {
    l();
    c();
    d();
    var Mi = qi(),
      A4 = Dg(),
      ar = {},
      E4 = Object.keys(Mi);
    function v4(e) {
      let t = function (...r) {
        let n = r[0];
        return n == null ? n : (n.length > 1 && (r = n), e(r));
      };
      return 'conversion' in e && (t.conversion = e.conversion), t;
    }
    function D4(e) {
      let t = function (...r) {
        let n = r[0];
        if (n == null) return n;
        n.length > 1 && (r = n);
        let a = e(r);
        if (typeof a == 'object')
          for (let o = a.length, i = 0; i < o; i++) a[i] = Math.round(a[i]);
        return a;
      };
      return 'conversion' in e && (t.conversion = e.conversion), t;
    }
    E4.forEach((e) => {
      (ar[e] = {}),
        Object.defineProperty(ar[e], 'channels', { value: Mi[e].channels }),
        Object.defineProperty(ar[e], 'labels', { value: Mi[e].labels });
      let t = A4(e);
      Object.keys(t).forEach((n) => {
        let a = t[n];
        (ar[e][n] = D4(a)), (ar[e][n].raw = v4(a));
      });
    });
    Cg.exports = ar;
  });
  var Sg = S((dte, Fg) => {
    l();
    c();
    d();
    var C4 = je(),
      x4 = function () {
        return C4.Date.now();
      };
    Fg.exports = x4;
  });
  var Bg = S((mte, wg) => {
    l();
    c();
    d();
    var F4 = /\s/;
    function S4(e) {
      for (var t = e.length; t-- && F4.test(e.charAt(t)); );
      return t;
    }
    wg.exports = S4;
  });
  var _g = S((Ate, Tg) => {
    l();
    c();
    d();
    var w4 = Bg(),
      B4 = /^\s+/;
    function T4(e) {
      return e && e.slice(0, w4(e) + 1).replace(B4, '');
    }
    Tg.exports = T4;
  });
  var Ig = S((Cte, Pg) => {
    l();
    c();
    d();
    var _4 = _g(),
      Og = Ue(),
      O4 = Fr(),
      Rg = 0 / 0,
      R4 = /^[-+]0x[0-9a-f]+$/i,
      P4 = /^0b[01]+$/i,
      I4 = /^0o[0-7]+$/i,
      k4 = parseInt;
    function N4(e) {
      if (typeof e == 'number') return e;
      if (O4(e)) return Rg;
      if (Og(e)) {
        var t = typeof e.valueOf == 'function' ? e.valueOf() : e;
        e = Og(t) ? t + '' : t;
      }
      if (typeof e != 'string') return e === 0 ? e : +e;
      e = _4(e);
      var r = P4.test(e);
      return r || I4.test(e) ? k4(e.slice(2), r ? 2 : 8) : R4.test(e) ? Rg : +e;
    }
    Pg.exports = N4;
  });
  var Lg = S((wte, Ng) => {
    l();
    c();
    d();
    var L4 = Ue(),
      $i = Sg(),
      kg = Ig(),
      j4 = 'Expected a function',
      q4 = Math.max,
      M4 = Math.min;
    function $4(e, t, r) {
      var n,
        a,
        o,
        i,
        u,
        s,
        p = 0,
        y = !1,
        A = !1,
        h = !0;
      if (typeof e != 'function') throw new TypeError(j4);
      (t = kg(t) || 0),
        L4(r) &&
          ((y = !!r.leading),
          (A = 'maxWait' in r),
          (o = A ? q4(kg(r.maxWait) || 0, t) : o),
          (h = 'trailing' in r ? !!r.trailing : h));
      function m(k) {
        var N = n,
          H = a;
        return (n = a = void 0), (p = k), (i = e.apply(H, N)), i;
      }
      function E(k) {
        return (p = k), (u = setTimeout(F, t)), y ? m(k) : i;
      }
      function b(k) {
        var N = k - s,
          H = k - p,
          V = t - N;
        return A ? M4(V, o - H) : V;
      }
      function x(k) {
        var N = k - s,
          H = k - p;
        return s === void 0 || N >= t || N < 0 || (A && H >= o);
      }
      function F() {
        var k = $i();
        if (x(k)) return B(k);
        u = setTimeout(F, b(k));
      }
      function B(k) {
        return (u = void 0), h && n ? m(k) : ((n = a = void 0), i);
      }
      function I() {
        u !== void 0 && clearTimeout(u), (p = 0), (n = s = a = u = void 0);
      }
      function j() {
        return u === void 0 ? i : B($i());
      }
      function w() {
        var k = $i(),
          N = x(k);
        if (((n = arguments), (a = this), (s = k), N)) {
          if (u === void 0) return E(s);
          if (A) return clearTimeout(u), (u = setTimeout(F, t)), m(s);
        }
        return u === void 0 && (u = setTimeout(F, t)), i;
      }
      return (w.cancel = I), (w.flush = j), w;
    }
    Ng.exports = $4;
  });
  var qg = S((Ote, jg) => {
    l();
    c();
    d();
    var U4 = Lg(),
      H4 = Ue(),
      z4 = 'Expected a function';
    function G4(e, t, r) {
      var n = !0,
        a = !0;
      if (typeof e != 'function') throw new TypeError(z4);
      return (
        H4(r) &&
          ((n = 'leading' in r ? !!r.leading : n),
          (a = 'trailing' in r ? !!r.trailing : a)),
        U4(e, t, { leading: n, maxWait: t, trailing: a })
      );
    }
    jg.exports = G4;
  });
  var Gg = {};
  pu(Gg, { ColorControl: () => zg, default: () => l9 });
  var Ne,
    Ug,
    W4,
    V4,
    K4,
    Y4,
    X4,
    J4,
    Q4,
    Mg,
    Z4,
    e9,
    Hg,
    na,
    t9,
    r9,
    n9,
    Ui,
    a9,
    o9,
    aa,
    $g,
    or,
    i9,
    u9,
    oa,
    s9,
    zg,
    l9,
    Wg = Xe(() => {
      l();
      c();
      d();
      ka();
      wt();
      gg();
      (Ne = fe(xg(), 1)), (Ug = fe(qg(), 1));
      La();
      cr();
      (W4 = M.div({ position: 'relative', maxWidth: 250 })),
        (V4 = M(Xr)({ position: 'absolute', zIndex: 1, top: 4, left: 4 })),
        (K4 = M.div({
          width: 200,
          margin: 5,
          '.react-colorful__saturation': { borderRadius: '4px 4px 0 0' },
          '.react-colorful__hue': {
            boxShadow: 'inset 0 0 0 1px rgb(0 0 0 / 5%)',
          },
          '.react-colorful__last-control': { borderRadius: '0 0 4px 4px' },
        })),
        (Y4 = M(Ta)(({ theme: e }) => ({
          fontFamily: e.typography.fonts.base,
        }))),
        (X4 = M.div({
          display: 'grid',
          gridTemplateColumns: 'repeat(9, 16px)',
          gap: 6,
          padding: 3,
          marginTop: 5,
          width: 200,
        })),
        (J4 = M.div(({ theme: e, active: t }) => ({
          width: 16,
          height: 16,
          boxShadow: t
            ? `${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px`
            : `${e.appBorderColor} 0 0 0 1px inset`,
          borderRadius: e.appBorderRadius,
        }))),
        (Q4 = `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`),
        (Mg = ({ value: e, active: t, onClick: r, style: n, ...a }) => {
          let o = `linear-gradient(${e}, ${e}), ${Q4}, linear-gradient(#fff, #fff)`;
          return g.createElement(J4, {
            ...a,
            active: t,
            onClick: r,
            style: { ...n, backgroundImage: o },
          });
        }),
        (Z4 = M(Be.Input)(({ theme: e }) => ({
          width: '100%',
          paddingLeft: 30,
          paddingRight: 30,
          boxSizing: 'border-box',
          fontFamily: e.typography.fonts.base,
        }))),
        (e9 = M(Te)(({ theme: e }) => ({
          position: 'absolute',
          zIndex: 1,
          top: 6,
          right: 7,
          width: 20,
          height: 20,
          padding: 4,
          boxSizing: 'border-box',
          cursor: 'pointer',
          color: e.input.color,
        }))),
        (Hg = ((e) => ((e.RGB = 'rgb'), (e.HSL = 'hsl'), (e.HEX = 'hex'), e))(
          Hg || {},
        )),
        (na = Object.values(Hg)),
        (t9 = /\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/),
        (r9 =
          /^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i),
        (n9 =
          /^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i),
        (Ui = /^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i),
        (a9 = /^\s*#?([0-9a-f]{3})\s*$/i),
        (o9 = { hex: pg, rgb: mg, hsl: hg }),
        (aa = {
          hex: 'transparent',
          rgb: 'rgba(0, 0, 0, 0)',
          hsl: 'hsla(0, 0%, 0%, 0)',
        }),
        ($g = (e) => {
          let t = e?.match(t9);
          if (!t) return [0, 0, 0, 1];
          let [, r, n, a, o = 1] = t;
          return [r, n, a, o].map(Number);
        }),
        (or = (e) => {
          if (!e) return;
          let t = !0;
          if (r9.test(e)) {
            let [i, u, s, p] = $g(e),
              [y, A, h] = Ne.default.rgb.hsl([i, u, s]) || [0, 0, 0];
            return {
              valid: t,
              value: e,
              keyword: Ne.default.rgb.keyword([i, u, s]),
              colorSpace: 'rgb',
              rgb: e,
              hsl: `hsla(${y}, ${A}%, ${h}%, ${p})`,
              hex: `#${Ne.default.rgb.hex([i, u, s]).toLowerCase()}`,
            };
          }
          if (n9.test(e)) {
            let [i, u, s, p] = $g(e),
              [y, A, h] = Ne.default.hsl.rgb([i, u, s]) || [0, 0, 0];
            return {
              valid: t,
              value: e,
              keyword: Ne.default.hsl.keyword([i, u, s]),
              colorSpace: 'hsl',
              rgb: `rgba(${y}, ${A}, ${h}, ${p})`,
              hsl: e,
              hex: `#${Ne.default.hsl.hex([i, u, s]).toLowerCase()}`,
            };
          }
          let r = e.replace('#', ''),
            n = Ne.default.keyword.rgb(r) || Ne.default.hex.rgb(r),
            a = Ne.default.rgb.hsl(n),
            o = e;
          if (
            (/[^#a-f0-9]/i.test(e) ? (o = r) : Ui.test(e) && (o = `#${r}`),
            o.startsWith('#'))
          )
            t = Ui.test(o);
          else
            try {
              Ne.default.keyword.hex(o);
            } catch {
              t = !1;
            }
          return {
            valid: t,
            value: o,
            keyword: Ne.default.rgb.keyword(n),
            colorSpace: 'hex',
            rgb: `rgba(${n[0]}, ${n[1]}, ${n[2]}, 1)`,
            hsl: `hsla(${a[0]}, ${a[1]}%, ${a[2]}%, 1)`,
            hex: o,
          };
        }),
        (i9 = (e, t, r) => {
          if (!e || !t?.valid) return aa[r];
          if (r !== 'hex') return t?.[r] || aa[r];
          if (!t.hex.startsWith('#'))
            try {
              return `#${Ne.default.keyword.hex(t.hex)}`;
            } catch {
              return aa.hex;
            }
          let n = t.hex.match(a9);
          if (!n) return Ui.test(t.hex) ? t.hex : aa.hex;
          let [a, o, i] = n[1].split('');
          return `#${a}${a}${o}${o}${i}${i}`;
        }),
        (u9 = (e, t) => {
          let [r, n] = ae(e || ''),
            [a, o] = ae(() => or(r)),
            [i, u] = ae(a?.colorSpace || 'hex');
          ge(() => {
            let A = e || '',
              h = or(A);
            n(A), o(h), u(h?.colorSpace || 'hex');
          }, [e]);
          let s = rt(() => i9(r, a, i).toLowerCase(), [r, a, i]),
            p = me(
              (A) => {
                let h = or(A),
                  m = h?.value || A || '';
                n(m),
                  m === '' && (o(void 0), t(void 0)),
                  h && (o(h), u(h.colorSpace), t(h.value));
              },
              [t],
            ),
            y = me(() => {
              let A = na.indexOf(i) + 1;
              A >= na.length && (A = 0), u(na[A]);
              let h = a?.[na[A]] || '';
              n(h), t(h);
            }, [a, i, t]);
          return {
            value: r,
            realValue: s,
            updateValue: p,
            color: a,
            colorSpace: i,
            cycleColorSpace: y,
          };
        }),
        (oa = (e) => e.replace(/\s*/, '').toLowerCase()),
        (s9 = (e, t, r) => {
          let [n, a] = ae(t?.valid ? [t] : []);
          ge(() => {
            t === void 0 && a([]);
          }, [t]);
          let o = rt(
              () =>
                (e || [])
                  .map((u) =>
                    typeof u == 'string'
                      ? or(u)
                      : u.title
                      ? { ...or(u.color), keyword: u.title }
                      : or(u.color),
                  )
                  .concat(n)
                  .filter(Boolean)
                  .slice(-27),
              [e, n],
            ),
            i = me(
              (u) => {
                u?.valid &&
                  (o.some((s) => oa(s[r]) === oa(u[r])) ||
                    a((s) => s.concat(u)));
              },
              [r, o],
            );
          return { presets: o, addPreset: i };
        }),
        (zg = ({
          name: e,
          value: t,
          onChange: r,
          onFocus: n,
          onBlur: a,
          presetColors: o,
          startOpen: i = !1,
        }) => {
          let u = me((0, Ug.default)(r, 200), [r]),
            {
              value: s,
              realValue: p,
              updateValue: y,
              color: A,
              colorSpace: h,
              cycleColorSpace: m,
            } = u9(t, u),
            { presets: E, addPreset: b } = s9(o, A, h),
            x = o9[h];
          return g.createElement(
            W4,
            null,
            g.createElement(
              V4,
              {
                startOpen: i,
                closeOnOutsideClick: !0,
                onVisibleChange: () => b(A),
                tooltip: g.createElement(
                  K4,
                  null,
                  g.createElement(x, {
                    color: p === 'transparent' ? '#000000' : p,
                    onChange: y,
                    onFocus: n,
                    onBlur: a,
                  }),
                  E.length > 0 &&
                    g.createElement(
                      X4,
                      null,
                      E.map((F, B) =>
                        g.createElement(
                          Xr,
                          {
                            key: `${F.value}-${B}`,
                            hasChrome: !1,
                            tooltip: g.createElement(Y4, {
                              note: F.keyword || F.value,
                            }),
                          },
                          g.createElement(Mg, {
                            value: F[h],
                            active: A && oa(F[h]) === oa(A[h]),
                            onClick: () => y(F.value),
                          }),
                        ),
                      ),
                    ),
                ),
              },
              g.createElement(Mg, { value: p, style: { margin: 4 } }),
            ),
            g.createElement(Z4, {
              id: _e(e),
              value: s,
              onChange: (F) => y(F.target.value),
              onFocus: (F) => F.target.select(),
              placeholder: 'Choose color...',
            }),
            s ? g.createElement(e9, { icon: 'markup', onClick: m }) : null,
          );
        }),
        (l9 = zg);
    });
  l();
  c();
  d();
  l();
  c();
  d();
  l();
  c();
  d();
  l();
  c();
  d();
  var pa = 'addon-controls',
    fa = 'controls';
  wt();
  l();
  c();
  d();
  var RI = __STORYBOOKAPI__,
    {
      ActiveTabs: PI,
      Consumer: II,
      ManagerContext: kI,
      Provider: NI,
      addons: ma,
      combineParameters: LI,
      controlOrMetaKey: jI,
      controlOrMetaSymbol: qI,
      eventMatchesShortcut: MI,
      eventToShortcut: $I,
      isMacLike: UI,
      isShortcutTaken: HI,
      keyToSymbol: zI,
      merge: GI,
      mockChannel: WI,
      optionOrAltSymbol: VI,
      shortcutMatchesShortcut: KI,
      shortcutToHumanString: YI,
      types: yu,
      useAddonState: XI,
      useArgTypes: ga,
      useArgs: bu,
      useChannel: JI,
      useGlobalTypes: QI,
      useGlobals: Au,
      useParameter: ya,
      useSharedState: ZI,
      useStoryPrepared: ek,
      useStorybookApi: tk,
      useStorybookState: Eu,
    } = __STORYBOOKAPI__;
  cr();
  l();
  c();
  d();
  ka();
  La();
  wt();
  cr();
  l();
  c();
  d();
  l();
  c();
  d();
  function Se() {
    return (
      (Se = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }),
      Se.apply(this, arguments)
    );
  }
  l();
  c();
  d();
  function ja(e) {
    if (e === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    return e;
  }
  l();
  c();
  d();
  l();
  c();
  d();
  function Qe(e, t) {
    return (
      (Qe = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (n, a) {
            return (n.__proto__ = a), n;
          }),
      Qe(e, t)
    );
  }
  function qa(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      Qe(e, t);
  }
  l();
  c();
  d();
  l();
  c();
  d();
  function pr(e) {
    return (
      (pr = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (r) {
            return r.__proto__ || Object.getPrototypeOf(r);
          }),
      pr(e)
    );
  }
  l();
  c();
  d();
  function Ma(e) {
    return Function.toString.call(e).indexOf('[native code]') !== -1;
  }
  l();
  c();
  d();
  l();
  c();
  d();
  function $a() {
    if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == 'function') return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        ),
        !0
      );
    } catch {
      return !1;
    }
  }
  function _t(e, t, r) {
    return (
      $a()
        ? (_t = Reflect.construct.bind())
        : (_t = function (a, o, i) {
            var u = [null];
            u.push.apply(u, o);
            var s = Function.bind.apply(a, u),
              p = new s();
            return i && Qe(p, i.prototype), p;
          }),
      _t.apply(null, arguments)
    );
  }
  function fr(e) {
    var t = typeof Map == 'function' ? new Map() : void 0;
    return (
      (fr = function (n) {
        if (n === null || !Ma(n)) return n;
        if (typeof n != 'function')
          throw new TypeError(
            'Super expression must either be null or a function',
          );
        if (typeof t < 'u') {
          if (t.has(n)) return t.get(n);
          t.set(n, a);
        }
        function a() {
          return _t(n, arguments, pr(this).constructor);
        }
        return (
          (a.prototype = Object.create(n.prototype, {
            constructor: {
              value: a,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          Qe(a, n)
        );
      }),
      fr(e)
    );
  }
  l();
  c();
  d();
  var Oe = (function (e) {
    qa(t, e);
    function t(r) {
      var n;
      if (!0)
        n =
          e.call(
            this,
            'An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#' +
              r +
              ' for more information.',
          ) || this;
      else for (var a, o, i; i < a; i++);
      return ja(n);
    }
    return t;
  })(fr(Error));
  function Su(e, t) {
    return e.substr(-t.length) === t;
  }
  var P2 = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
  function wu(e) {
    if (typeof e != 'string') return e;
    var t = e.match(P2);
    return t ? parseFloat(e) : e;
  }
  var I2 = function (t) {
      return function (r, n) {
        n === void 0 && (n = '16px');
        var a = r,
          o = n;
        if (typeof r == 'string') {
          if (!Su(r, 'px')) throw new Oe(69, t, r);
          a = wu(r);
        }
        if (typeof n == 'string') {
          if (!Su(n, 'px')) throw new Oe(70, t, n);
          o = wu(n);
        }
        if (typeof a == 'string') throw new Oe(71, r, t);
        if (typeof o == 'string') throw new Oe(72, n, t);
        return '' + a / o + t;
      };
    },
    Tu = I2,
    I7 = Tu('em');
  var k7 = Tu('rem');
  function Ua(e) {
    return Math.round(e * 255);
  }
  function k2(e, t, r) {
    return Ua(e) + ',' + Ua(t) + ',' + Ua(r);
  }
  function hr(e, t, r, n) {
    if ((n === void 0 && (n = k2), t === 0)) return n(r, r, r);
    var a = (((e % 360) + 360) % 360) / 60,
      o = (1 - Math.abs(2 * r - 1)) * t,
      i = o * (1 - Math.abs((a % 2) - 1)),
      u = 0,
      s = 0,
      p = 0;
    a >= 0 && a < 1
      ? ((u = o), (s = i))
      : a >= 1 && a < 2
      ? ((u = i), (s = o))
      : a >= 2 && a < 3
      ? ((s = o), (p = i))
      : a >= 3 && a < 4
      ? ((s = i), (p = o))
      : a >= 4 && a < 5
      ? ((u = i), (p = o))
      : a >= 5 && a < 6 && ((u = o), (p = i));
    var y = r - o / 2,
      A = u + y,
      h = s + y,
      m = p + y;
    return n(A, h, m);
  }
  var Bu = {
    aliceblue: 'f0f8ff',
    antiquewhite: 'faebd7',
    aqua: '00ffff',
    aquamarine: '7fffd4',
    azure: 'f0ffff',
    beige: 'f5f5dc',
    bisque: 'ffe4c4',
    black: '000',
    blanchedalmond: 'ffebcd',
    blue: '0000ff',
    blueviolet: '8a2be2',
    brown: 'a52a2a',
    burlywood: 'deb887',
    cadetblue: '5f9ea0',
    chartreuse: '7fff00',
    chocolate: 'd2691e',
    coral: 'ff7f50',
    cornflowerblue: '6495ed',
    cornsilk: 'fff8dc',
    crimson: 'dc143c',
    cyan: '00ffff',
    darkblue: '00008b',
    darkcyan: '008b8b',
    darkgoldenrod: 'b8860b',
    darkgray: 'a9a9a9',
    darkgreen: '006400',
    darkgrey: 'a9a9a9',
    darkkhaki: 'bdb76b',
    darkmagenta: '8b008b',
    darkolivegreen: '556b2f',
    darkorange: 'ff8c00',
    darkorchid: '9932cc',
    darkred: '8b0000',
    darksalmon: 'e9967a',
    darkseagreen: '8fbc8f',
    darkslateblue: '483d8b',
    darkslategray: '2f4f4f',
    darkslategrey: '2f4f4f',
    darkturquoise: '00ced1',
    darkviolet: '9400d3',
    deeppink: 'ff1493',
    deepskyblue: '00bfff',
    dimgray: '696969',
    dimgrey: '696969',
    dodgerblue: '1e90ff',
    firebrick: 'b22222',
    floralwhite: 'fffaf0',
    forestgreen: '228b22',
    fuchsia: 'ff00ff',
    gainsboro: 'dcdcdc',
    ghostwhite: 'f8f8ff',
    gold: 'ffd700',
    goldenrod: 'daa520',
    gray: '808080',
    green: '008000',
    greenyellow: 'adff2f',
    grey: '808080',
    honeydew: 'f0fff0',
    hotpink: 'ff69b4',
    indianred: 'cd5c5c',
    indigo: '4b0082',
    ivory: 'fffff0',
    khaki: 'f0e68c',
    lavender: 'e6e6fa',
    lavenderblush: 'fff0f5',
    lawngreen: '7cfc00',
    lemonchiffon: 'fffacd',
    lightblue: 'add8e6',
    lightcoral: 'f08080',
    lightcyan: 'e0ffff',
    lightgoldenrodyellow: 'fafad2',
    lightgray: 'd3d3d3',
    lightgreen: '90ee90',
    lightgrey: 'd3d3d3',
    lightpink: 'ffb6c1',
    lightsalmon: 'ffa07a',
    lightseagreen: '20b2aa',
    lightskyblue: '87cefa',
    lightslategray: '789',
    lightslategrey: '789',
    lightsteelblue: 'b0c4de',
    lightyellow: 'ffffe0',
    lime: '0f0',
    limegreen: '32cd32',
    linen: 'faf0e6',
    magenta: 'f0f',
    maroon: '800000',
    mediumaquamarine: '66cdaa',
    mediumblue: '0000cd',
    mediumorchid: 'ba55d3',
    mediumpurple: '9370db',
    mediumseagreen: '3cb371',
    mediumslateblue: '7b68ee',
    mediumspringgreen: '00fa9a',
    mediumturquoise: '48d1cc',
    mediumvioletred: 'c71585',
    midnightblue: '191970',
    mintcream: 'f5fffa',
    mistyrose: 'ffe4e1',
    moccasin: 'ffe4b5',
    navajowhite: 'ffdead',
    navy: '000080',
    oldlace: 'fdf5e6',
    olive: '808000',
    olivedrab: '6b8e23',
    orange: 'ffa500',
    orangered: 'ff4500',
    orchid: 'da70d6',
    palegoldenrod: 'eee8aa',
    palegreen: '98fb98',
    paleturquoise: 'afeeee',
    palevioletred: 'db7093',
    papayawhip: 'ffefd5',
    peachpuff: 'ffdab9',
    peru: 'cd853f',
    pink: 'ffc0cb',
    plum: 'dda0dd',
    powderblue: 'b0e0e6',
    purple: '800080',
    rebeccapurple: '639',
    red: 'f00',
    rosybrown: 'bc8f8f',
    royalblue: '4169e1',
    saddlebrown: '8b4513',
    salmon: 'fa8072',
    sandybrown: 'f4a460',
    seagreen: '2e8b57',
    seashell: 'fff5ee',
    sienna: 'a0522d',
    silver: 'c0c0c0',
    skyblue: '87ceeb',
    slateblue: '6a5acd',
    slategray: '708090',
    slategrey: '708090',
    snow: 'fffafa',
    springgreen: '00ff7f',
    steelblue: '4682b4',
    tan: 'd2b48c',
    teal: '008080',
    thistle: 'd8bfd8',
    tomato: 'ff6347',
    turquoise: '40e0d0',
    violet: 'ee82ee',
    wheat: 'f5deb3',
    white: 'fff',
    whitesmoke: 'f5f5f5',
    yellow: 'ff0',
    yellowgreen: '9acd32',
  };
  function N2(e) {
    if (typeof e != 'string') return e;
    var t = e.toLowerCase();
    return Bu[t] ? '#' + Bu[t] : e;
  }
  var L2 = /^#[a-fA-F0-9]{6}$/,
    j2 = /^#[a-fA-F0-9]{8}$/,
    q2 = /^#[a-fA-F0-9]{3}$/,
    M2 = /^#[a-fA-F0-9]{4}$/,
    Ha = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
    $2 =
      /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
    U2 =
      /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
    H2 =
      /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
  function Ot(e) {
    if (typeof e != 'string') throw new Oe(3);
    var t = N2(e);
    if (t.match(L2))
      return {
        red: parseInt('' + t[1] + t[2], 16),
        green: parseInt('' + t[3] + t[4], 16),
        blue: parseInt('' + t[5] + t[6], 16),
      };
    if (t.match(j2)) {
      var r = parseFloat((parseInt('' + t[7] + t[8], 16) / 255).toFixed(2));
      return {
        red: parseInt('' + t[1] + t[2], 16),
        green: parseInt('' + t[3] + t[4], 16),
        blue: parseInt('' + t[5] + t[6], 16),
        alpha: r,
      };
    }
    if (t.match(q2))
      return {
        red: parseInt('' + t[1] + t[1], 16),
        green: parseInt('' + t[2] + t[2], 16),
        blue: parseInt('' + t[3] + t[3], 16),
      };
    if (t.match(M2)) {
      var n = parseFloat((parseInt('' + t[4] + t[4], 16) / 255).toFixed(2));
      return {
        red: parseInt('' + t[1] + t[1], 16),
        green: parseInt('' + t[2] + t[2], 16),
        blue: parseInt('' + t[3] + t[3], 16),
        alpha: n,
      };
    }
    var a = Ha.exec(t);
    if (a)
      return {
        red: parseInt('' + a[1], 10),
        green: parseInt('' + a[2], 10),
        blue: parseInt('' + a[3], 10),
      };
    var o = $2.exec(t.substring(0, 50));
    if (o)
      return {
        red: parseInt('' + o[1], 10),
        green: parseInt('' + o[2], 10),
        blue: parseInt('' + o[3], 10),
        alpha:
          parseFloat('' + o[4]) > 1
            ? parseFloat('' + o[4]) / 100
            : parseFloat('' + o[4]),
      };
    var i = U2.exec(t);
    if (i) {
      var u = parseInt('' + i[1], 10),
        s = parseInt('' + i[2], 10) / 100,
        p = parseInt('' + i[3], 10) / 100,
        y = 'rgb(' + hr(u, s, p) + ')',
        A = Ha.exec(y);
      if (!A) throw new Oe(4, t, y);
      return {
        red: parseInt('' + A[1], 10),
        green: parseInt('' + A[2], 10),
        blue: parseInt('' + A[3], 10),
      };
    }
    var h = H2.exec(t.substring(0, 50));
    if (h) {
      var m = parseInt('' + h[1], 10),
        E = parseInt('' + h[2], 10) / 100,
        b = parseInt('' + h[3], 10) / 100,
        x = 'rgb(' + hr(m, E, b) + ')',
        F = Ha.exec(x);
      if (!F) throw new Oe(4, t, x);
      return {
        red: parseInt('' + F[1], 10),
        green: parseInt('' + F[2], 10),
        blue: parseInt('' + F[3], 10),
        alpha:
          parseFloat('' + h[4]) > 1
            ? parseFloat('' + h[4]) / 100
            : parseFloat('' + h[4]),
      };
    }
    throw new Oe(5);
  }
  function z2(e) {
    var t = e.red / 255,
      r = e.green / 255,
      n = e.blue / 255,
      a = Math.max(t, r, n),
      o = Math.min(t, r, n),
      i = (a + o) / 2;
    if (a === o)
      return e.alpha !== void 0
        ? { hue: 0, saturation: 0, lightness: i, alpha: e.alpha }
        : { hue: 0, saturation: 0, lightness: i };
    var u,
      s = a - o,
      p = i > 0.5 ? s / (2 - a - o) : s / (a + o);
    switch (a) {
      case t:
        u = (r - n) / s + (r < n ? 6 : 0);
        break;
      case r:
        u = (n - t) / s + 2;
        break;
      default:
        u = (t - r) / s + 4;
        break;
    }
    return (
      (u *= 60),
      e.alpha !== void 0
        ? { hue: u, saturation: p, lightness: i, alpha: e.alpha }
        : { hue: u, saturation: p, lightness: i }
    );
  }
  function nt(e) {
    return z2(Ot(e));
  }
  var G2 = function (t) {
      return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6]
        ? '#' + t[1] + t[3] + t[5]
        : t;
    },
    Ga = G2;
  function mt(e) {
    var t = e.toString(16);
    return t.length === 1 ? '0' + t : t;
  }
  function za(e) {
    return mt(Math.round(e * 255));
  }
  function W2(e, t, r) {
    return Ga('#' + za(e) + za(t) + za(r));
  }
  function Jr(e, t, r) {
    return hr(e, t, r, W2);
  }
  function V2(e, t, r) {
    if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number')
      return Jr(e, t, r);
    if (typeof e == 'object' && t === void 0 && r === void 0)
      return Jr(e.hue, e.saturation, e.lightness);
    throw new Oe(1);
  }
  function K2(e, t, r, n) {
    if (
      typeof e == 'number' &&
      typeof t == 'number' &&
      typeof r == 'number' &&
      typeof n == 'number'
    )
      return n >= 1 ? Jr(e, t, r) : 'rgba(' + hr(e, t, r) + ',' + n + ')';
    if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1
        ? Jr(e.hue, e.saturation, e.lightness)
        : 'rgba(' + hr(e.hue, e.saturation, e.lightness) + ',' + e.alpha + ')';
    throw new Oe(2);
  }
  function Wa(e, t, r) {
    if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number')
      return Ga('#' + mt(e) + mt(t) + mt(r));
    if (typeof e == 'object' && t === void 0 && r === void 0)
      return Ga('#' + mt(e.red) + mt(e.green) + mt(e.blue));
    throw new Oe(6);
  }
  function Me(e, t, r, n) {
    if (typeof e == 'string' && typeof t == 'number') {
      var a = Ot(e);
      return 'rgba(' + a.red + ',' + a.green + ',' + a.blue + ',' + t + ')';
    } else {
      if (
        typeof e == 'number' &&
        typeof t == 'number' &&
        typeof r == 'number' &&
        typeof n == 'number'
      )
        return n >= 1
          ? Wa(e, t, r)
          : 'rgba(' + e + ',' + t + ',' + r + ',' + n + ')';
      if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
        return e.alpha >= 1
          ? Wa(e.red, e.green, e.blue)
          : 'rgba(' +
              e.red +
              ',' +
              e.green +
              ',' +
              e.blue +
              ',' +
              e.alpha +
              ')';
    }
    throw new Oe(7);
  }
  var Y2 = function (t) {
      return (
        typeof t.red == 'number' &&
        typeof t.green == 'number' &&
        typeof t.blue == 'number' &&
        (typeof t.alpha != 'number' || typeof t.alpha > 'u')
      );
    },
    X2 = function (t) {
      return (
        typeof t.red == 'number' &&
        typeof t.green == 'number' &&
        typeof t.blue == 'number' &&
        typeof t.alpha == 'number'
      );
    },
    J2 = function (t) {
      return (
        typeof t.hue == 'number' &&
        typeof t.saturation == 'number' &&
        typeof t.lightness == 'number' &&
        (typeof t.alpha != 'number' || typeof t.alpha > 'u')
      );
    },
    Q2 = function (t) {
      return (
        typeof t.hue == 'number' &&
        typeof t.saturation == 'number' &&
        typeof t.lightness == 'number' &&
        typeof t.alpha == 'number'
      );
    };
  function at(e) {
    if (typeof e != 'object') throw new Oe(8);
    if (X2(e)) return Me(e);
    if (Y2(e)) return Wa(e);
    if (Q2(e)) return K2(e);
    if (J2(e)) return V2(e);
    throw new Oe(8);
  }
  function _u(e, t, r) {
    return function () {
      var a = r.concat(Array.prototype.slice.call(arguments));
      return a.length >= t ? e.apply(this, a) : _u(e, t, a);
    };
  }
  function Ie(e) {
    return _u(e, e.length, []);
  }
  function Z2(e, t) {
    if (t === 'transparent') return t;
    var r = nt(t);
    return at(Se({}, r, { hue: r.hue + parseFloat(e) }));
  }
  var N7 = Ie(Z2);
  function Rt(e, t, r) {
    return Math.max(e, Math.min(t, r));
  }
  function e1(e, t) {
    if (t === 'transparent') return t;
    var r = nt(t);
    return at(Se({}, r, { lightness: Rt(0, 1, r.lightness - parseFloat(e)) }));
  }
  var t1 = Ie(e1),
    $e = t1;
  function r1(e, t) {
    if (t === 'transparent') return t;
    var r = nt(t);
    return at(
      Se({}, r, { saturation: Rt(0, 1, r.saturation - parseFloat(e)) }),
    );
  }
  var L7 = Ie(r1);
  function n1(e, t) {
    if (t === 'transparent') return t;
    var r = nt(t);
    return at(Se({}, r, { lightness: Rt(0, 1, r.lightness + parseFloat(e)) }));
  }
  var a1 = Ie(n1),
    ot = a1;
  function o1(e, t, r) {
    if (t === 'transparent') return r;
    if (r === 'transparent') return t;
    if (e === 0) return r;
    var n = Ot(t),
      a = Se({}, n, { alpha: typeof n.alpha == 'number' ? n.alpha : 1 }),
      o = Ot(r),
      i = Se({}, o, { alpha: typeof o.alpha == 'number' ? o.alpha : 1 }),
      u = a.alpha - i.alpha,
      s = parseFloat(e) * 2 - 1,
      p = s * u === -1 ? s : s + u,
      y = 1 + s * u,
      A = (p / y + 1) / 2,
      h = 1 - A,
      m = {
        red: Math.floor(a.red * A + i.red * h),
        green: Math.floor(a.green * A + i.green * h),
        blue: Math.floor(a.blue * A + i.blue * h),
        alpha: a.alpha * parseFloat(e) + i.alpha * (1 - parseFloat(e)),
      };
    return Me(m);
  }
  var i1 = Ie(o1),
    Ou = i1;
  function u1(e, t) {
    if (t === 'transparent') return t;
    var r = Ot(t),
      n = typeof r.alpha == 'number' ? r.alpha : 1,
      a = Se({}, r, { alpha: Rt(0, 1, (n * 100 + parseFloat(e) * 100) / 100) });
    return Me(a);
  }
  var s1 = Ie(u1),
    mr = s1;
  function l1(e, t) {
    if (t === 'transparent') return t;
    var r = nt(t);
    return at(
      Se({}, r, { saturation: Rt(0, 1, r.saturation + parseFloat(e)) }),
    );
  }
  var j7 = Ie(l1);
  function c1(e, t) {
    return t === 'transparent' ? t : at(Se({}, nt(t), { hue: parseFloat(e) }));
  }
  var q7 = Ie(c1);
  function d1(e, t) {
    return t === 'transparent'
      ? t
      : at(Se({}, nt(t), { lightness: parseFloat(e) }));
  }
  var M7 = Ie(d1);
  function p1(e, t) {
    return t === 'transparent'
      ? t
      : at(Se({}, nt(t), { saturation: parseFloat(e) }));
  }
  var $7 = Ie(p1);
  function f1(e, t) {
    return t === 'transparent' ? t : Ou(parseFloat(e), 'rgb(0, 0, 0)', t);
  }
  var U7 = Ie(f1);
  function h1(e, t) {
    return t === 'transparent' ? t : Ou(parseFloat(e), 'rgb(255, 255, 255)', t);
  }
  var H7 = Ie(h1);
  function m1(e, t) {
    if (t === 'transparent') return t;
    var r = Ot(t),
      n = typeof r.alpha == 'number' ? r.alpha : 1,
      a = Se({}, r, {
        alpha: Rt(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100),
      });
    return Me(a);
  }
  var g1 = Ie(m1),
    de = g1;
  l();
  c();
  d();
  var ue = (() => {
    let e;
    return (
      typeof window < 'u'
        ? (e = window)
        : typeof globalThis < 'u'
        ? (e = globalThis)
        : typeof window < 'u'
        ? (e = window)
        : typeof self < 'u'
        ? (e = self)
        : (e = {}),
      e
    );
  })();
  var uy = fe(_o(), 1);
  l();
  c();
  d();
  var uF = Object.create,
    Gd = Object.defineProperty,
    sF = Object.getOwnPropertyDescriptor,
    lF = Object.getOwnPropertyNames,
    cF = Object.getPrototypeOf,
    dF = Object.prototype.hasOwnProperty,
    pF = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    fF = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let a of lF(t))
          !dF.call(e, a) &&
            a !== r &&
            Gd(e, a, {
              get: () => t[a],
              enumerable: !(n = sF(t, a)) || n.enumerable,
            });
      return e;
    },
    hF = (e, t, r) => (
      (r = e != null ? uF(cF(e)) : {}),
      fF(
        t || !e || !e.__esModule
          ? Gd(r, 'default', { value: e, enumerable: !0 })
          : r,
        e,
      )
    ),
    mF = pF((e) => {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.isEqual = (function () {
          var t = Object.prototype.toString,
            r = Object.getPrototypeOf,
            n = Object.getOwnPropertySymbols
              ? function (a) {
                  return Object.keys(a).concat(Object.getOwnPropertySymbols(a));
                }
              : Object.keys;
          return function (a, o) {
            return (function i(u, s, p) {
              var y,
                A,
                h,
                m = t.call(u),
                E = t.call(s);
              if (u === s) return !0;
              if (u == null || s == null) return !1;
              if (p.indexOf(u) > -1 && p.indexOf(s) > -1) return !0;
              if (
                (p.push(u, s),
                m != E ||
                  ((y = n(u)),
                  (A = n(s)),
                  y.length != A.length ||
                    y.some(function (b) {
                      return !i(u[b], s[b], p);
                    })))
              )
                return !1;
              switch (m.slice(8, -1)) {
                case 'Symbol':
                  return u.valueOf() == s.valueOf();
                case 'Date':
                case 'Number':
                  return +u == +s || (+u != +u && +s != +s);
                case 'RegExp':
                case 'Function':
                case 'String':
                case 'Boolean':
                  return '' + u == '' + s;
                case 'Set':
                case 'Map':
                  (y = u.entries()), (A = s.entries());
                  do if (!i((h = y.next()).value, A.next().value, p)) return !1;
                  while (!h.done);
                  return !0;
                case 'ArrayBuffer':
                  (u = new Uint8Array(u)), (s = new Uint8Array(s));
                case 'DataView':
                  (u = new Uint8Array(u.buffer)),
                    (s = new Uint8Array(s.buffer));
                case 'Float32Array':
                case 'Float64Array':
                case 'Int8Array':
                case 'Int16Array':
                case 'Int32Array':
                case 'Uint8Array':
                case 'Uint16Array':
                case 'Uint32Array':
                case 'Uint8ClampedArray':
                case 'Arguments':
                case 'Array':
                  if (u.length != s.length) return !1;
                  for (h = 0; h < u.length; h++)
                    if (
                      (h in u || h in s) &&
                      (h in u != h in s || !i(u[h], s[h], p))
                    )
                      return !1;
                  return !0;
                case 'Object':
                  return i(r(u), r(s), p);
                default:
                  return !1;
              }
            })(a, o, []);
          };
        })());
    });
  var zd = hF(mF()),
    Wd = (e) => e.map((t) => typeof t < 'u').filter(Boolean).length,
    gF = (e, t) => {
      let { exists: r, eq: n, neq: a, truthy: o } = e;
      if (Wd([r, n, a, o]) > 1)
        throw new Error(
          `Invalid conditional test ${JSON.stringify({
            exists: r,
            eq: n,
            neq: a,
          })}`,
        );
      if (typeof n < 'u') return (0, zd.isEqual)(t, n);
      if (typeof a < 'u') return !(0, zd.isEqual)(t, a);
      if (typeof r < 'u') {
        let i = typeof t < 'u';
        return r ? i : !i;
      }
      return typeof o > 'u' || o ? !!t : !t;
    },
    Oo = (e, t, r) => {
      if (!e.if) return !0;
      let { arg: n, global: a } = e.if;
      if (Wd([n, a]) !== 1)
        throw new Error(
          `Invalid conditional value ${JSON.stringify({ arg: n, global: a })}`,
        );
      let o = n ? t[n] : r[a];
      return gF(e.if, o);
    };
  l();
  c();
  d();
  var bG = __STORYBOOKCLIENTLOGGER__,
    {
      deprecate: ye,
      logger: ze,
      once: vn,
      pretty: AG,
    } = __STORYBOOKCLIENTLOGGER__;
  l();
  c();
  d();
  wt();
  function At() {
    return (
      (At =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
      At.apply(this, arguments)
    );
  }
  var yF = ['children', 'options'],
    Vd = [
      'allowFullScreen',
      'allowTransparency',
      'autoComplete',
      'autoFocus',
      'autoPlay',
      'cellPadding',
      'cellSpacing',
      'charSet',
      'className',
      'classId',
      'colSpan',
      'contentEditable',
      'contextMenu',
      'crossOrigin',
      'encType',
      'formAction',
      'formEncType',
      'formMethod',
      'formNoValidate',
      'formTarget',
      'frameBorder',
      'hrefLang',
      'inputMode',
      'keyParams',
      'keyType',
      'marginHeight',
      'marginWidth',
      'maxLength',
      'mediaGroup',
      'minLength',
      'noValidate',
      'radioGroup',
      'readOnly',
      'rowSpan',
      'spellCheck',
      'srcDoc',
      'srcLang',
      'srcSet',
      'tabIndex',
      'useMap',
    ].reduce((e, t) => ((e[t.toLowerCase()] = t), e), { for: 'htmlFor' }),
    Kd = {
      amp: '&',
      apos: "'",
      gt: '>',
      lt: '<',
      nbsp: '\xA0',
      quot: '\u201C',
    },
    bF = ['style', 'script'],
    AF =
      /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
    EF = /mailto:/i,
    vF = /\n{2,}$/,
    ep = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,
    DF = /^ *> ?/gm,
    CF = /^ {2,}\n/,
    xF = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
    tp = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
    rp = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
    FF = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
    SF = /^(?:\n *)*\n/,
    wF = /\r\n?/g,
    BF = /^\[\^([^\]]+)](:.*)\n/,
    TF = /^\[\^([^\]]+)]/,
    _F = /\f/g,
    OF = /^\s*?\[(x|\s)\]/,
    np = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
    ap = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
    No =
      /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,
    RF = /&([a-zA-Z]+);/g,
    op = /^<!--[\s\S]*?(?:-->)/,
    PF = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
    Lo =
      /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
    IF = /^\{.*\}$/,
    kF = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
    NF = /^<([^ >]+@[^ >]+)>/,
    LF = /^<([^ >]+:\/[^ >]+)>/,
    jF = /-([a-z])?/gi,
    ip = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
    qF = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
    MF = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
    $F = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
    UF = /(\[|\])/g,
    HF = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
    zF = /\t/g,
    GF = /^ *\| */,
    WF = /(^ *\||\| *$)/g,
    VF = / *$/,
    KF = /^ *:-+: *$/,
    YF = /^ *:-+ *$/,
    XF = /^ *-+: *$/,
    JF =
      /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,
    QF =
      /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,
    ZF = /^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,
    eS = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,
    tS = /^\\([^0-9A-Za-z\s])/,
    rS =
      /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
    nS = /^\n+/,
    aS = /^([ \t]*)/,
    oS = /\\([^\\])/g,
    Yd = / *\n+$/,
    iS = /(?:^|\n)( *)$/,
    jo = '(?:\\d+\\.)',
    qo = '(?:[*+-])';
  function up(e) {
    return '( *)(' + (e === 1 ? jo : qo) + ') +';
  }
  var sp = up(1),
    lp = up(2);
  function cp(e) {
    return new RegExp('^' + (e === 1 ? sp : lp));
  }
  var uS = cp(1),
    sS = cp(2);
  function dp(e) {
    return new RegExp(
      '^' +
        (e === 1 ? sp : lp) +
        '[^\\n]*(?:\\n(?!\\1' +
        (e === 1 ? jo : qo) +
        ' )[^\\n]*)*(\\n|$)',
      'gm',
    );
  }
  var pp = dp(1),
    fp = dp(2);
  function hp(e) {
    let t = e === 1 ? jo : qo;
    return new RegExp(
      '^( *)(' +
        t +
        ') [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1' +
        t +
        ' (?!' +
        t +
        ' ))\\n*|\\s*\\n*$)',
    );
  }
  var mp = hp(1),
    gp = hp(2);
  function Xd(e, t) {
    let r = t === 1,
      n = r ? mp : gp,
      a = r ? pp : fp,
      o = r ? uS : sS;
    return {
      t(i, u, s) {
        let p = iS.exec(s);
        return p && (u.o || (!u._ && !u.u)) ? n.exec((i = p[1] + i)) : null;
      },
      i: re.HIGH,
      l(i, u, s) {
        let p = r ? +i[2] : void 0,
          y = i[0]
            .replace(
              vF,
              `
`,
            )
            .match(a),
          A = !1;
        return {
          p: y.map(function (h, m) {
            let E = o.exec(h)[0].length,
              b = new RegExp('^ {1,' + E + '}', 'gm'),
              x = h.replace(b, '').replace(o, ''),
              F = m === y.length - 1,
              B =
                x.indexOf(`

`) !== -1 ||
                (F && A);
            A = B;
            let I = s._,
              j = s.o,
              w;
            (s.o = !0),
              B
                ? ((s._ = !1),
                  (w = x.replace(
                    Yd,
                    `

`,
                  )))
                : ((s._ = !0), (w = x.replace(Yd, '')));
            let k = u(w, s);
            return (s._ = I), (s.o = j), k;
          }),
          m: r,
          g: p,
        };
      },
      h: (i, u, s) =>
        e(
          i.m ? 'ol' : 'ul',
          { key: s.k, start: i.g },
          i.p.map(function (p, y) {
            return e('li', { key: y }, u(p, s));
          }),
        ),
    };
  }
  var lS = /^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
    cS = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
    yp = [ep, tp, rp, np, ap, op, ip, pp, mp, fp, gp],
    dS = [...yp, /^[^\n]+(?:  \n|\n{2,})/, No, Lo];
  function pS(e) {
    return e
      .replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, 'a')
      .replace(/[çÇ]/g, 'c')
      .replace(/[ðÐ]/g, 'd')
      .replace(/[ÈÉÊËéèêë]/g, 'e')
      .replace(/[ÏïÎîÍíÌì]/g, 'i')
      .replace(/[Ññ]/g, 'n')
      .replace(/[øØœŒÕõÔôÓóÒò]/g, 'o')
      .replace(/[ÜüÛûÚúÙù]/g, 'u')
      .replace(/[ŸÿÝý]/g, 'y')
      .replace(/[^a-z0-9- ]/gi, '')
      .replace(/ /gi, '-')
      .toLowerCase();
  }
  function fS(e) {
    return XF.test(e)
      ? 'right'
      : KF.test(e)
      ? 'center'
      : YF.test(e)
      ? 'left'
      : null;
  }
  function Jd(e, t, r) {
    let n = r.v;
    r.v = !0;
    let a = t(e.trim(), r);
    r.v = n;
    let o = [[]];
    return (
      a.forEach(function (i, u) {
        i.type === 'tableSeparator'
          ? u !== 0 && u !== a.length - 1 && o.push([])
          : (i.type !== 'text' ||
              (a[u + 1] != null && a[u + 1].type !== 'tableSeparator') ||
              (i.$ = i.$.replace(VF, '')),
            o[o.length - 1].push(i));
      }),
      o
    );
  }
  function hS(e, t, r) {
    r._ = !0;
    let n = Jd(e[1], t, r),
      a = e[2].replace(WF, '').split('|').map(fS),
      o = (function (i, u, s) {
        return i
          .trim()
          .split(
            `
`,
          )
          .map(function (p) {
            return Jd(p, u, s);
          });
      })(e[3], t, r);
    return (r._ = !1), { S: a, A: o, L: n, type: 'table' };
  }
  function Qd(e, t) {
    return e.S[t] == null ? {} : { textAlign: e.S[t] };
  }
  function ut(e) {
    return function (t, r) {
      return r._ ? e.exec(t) : null;
    };
  }
  function st(e) {
    return function (t, r) {
      return r._ || r.u ? e.exec(t) : null;
    };
  }
  function et(e) {
    return function (t, r) {
      return r._ || r.u ? null : e.exec(t);
    };
  }
  function wr(e) {
    return function (t) {
      return e.exec(t);
    };
  }
  function mS(e, t, r) {
    if (
      t._ ||
      t.u ||
      (r &&
        !r.endsWith(`
`))
    )
      return null;
    let n = '';
    e.split(
      `
`,
    ).every(
      (o) =>
        !yp.some((i) => i.test(o)) &&
        ((n +=
          o +
          `
`),
        o.trim()),
    );
    let a = n.trimEnd();
    return a == '' ? null : [n, a];
  }
  function Ut(e) {
    try {
      if (
        decodeURIComponent(e)
          .replace(/[^A-Za-z0-9/:]/g, '')
          .match(/^\s*(javascript|vbscript|data(?!:image)):/i)
      )
        return null;
    } catch {
      return null;
    }
    return e;
  }
  function Zd(e) {
    return e.replace(oS, '$1');
  }
  function Dn(e, t, r) {
    let n = r._ || !1,
      a = r.u || !1;
    (r._ = !0), (r.u = !0);
    let o = e(t, r);
    return (r._ = n), (r.u = a), o;
  }
  function gS(e, t, r) {
    let n = r._ || !1,
      a = r.u || !1;
    (r._ = !1), (r.u = !0);
    let o = e(t, r);
    return (r._ = n), (r.u = a), o;
  }
  function yS(e, t, r) {
    return (
      (r._ = !1),
      e(
        t +
          `

`,
        r,
      )
    );
  }
  var Ro = (e, t, r) => ({ $: Dn(t, e[1], r) });
  function Po() {
    return {};
  }
  function Io() {
    return null;
  }
  function bS(...e) {
    return e.filter(Boolean).join(' ');
  }
  function ko(e, t, r) {
    let n = e,
      a = t.split('.');
    for (; a.length && ((n = n[a[0]]), n !== void 0); ) a.shift();
    return n || r;
  }
  var re;
  function AS(e, t = {}) {
    (t.overrides = t.overrides || {}),
      (t.slugify = t.slugify || pS),
      (t.namedCodesToUnicode = t.namedCodesToUnicode
        ? At({}, Kd, t.namedCodesToUnicode)
        : Kd);
    let r = t.createElement || ha;
    function n(m, E, ...b) {
      let x = ko(t.overrides, `${m}.props`, {});
      return r(
        (function (F, B) {
          let I = ko(B, F);
          return I
            ? typeof I == 'function' || (typeof I == 'object' && 'render' in I)
              ? I
              : ko(B, `${F}.component`, F)
            : F;
        })(m, t.overrides),
        At({}, E, x, { className: bS(E?.className, x.className) || void 0 }),
        ...b,
      );
    }
    function a(m) {
      let E = !1;
      t.forceInline ? (E = !0) : t.forceBlock || (E = HF.test(m) === !1);
      let b = y(
        p(
          E
            ? m
            : `${m.trimEnd().replace(nS, '')}

`,
          { _: E },
        ),
      );
      for (; typeof b[b.length - 1] == 'string' && !b[b.length - 1].trim(); )
        b.pop();
      if (t.wrapper === null) return b;
      let x = t.wrapper || (E ? 'span' : 'div'),
        F;
      if (b.length > 1 || t.forceWrapper) F = b;
      else {
        if (b.length === 1)
          return (
            (F = b[0]),
            typeof F == 'string' ? n('span', { key: 'outer' }, F) : F
          );
        F = null;
      }
      return ha(x, { key: 'outer' }, F);
    }
    function o(m) {
      let E = m.match(AF);
      return E
        ? E.reduce(function (b, x, F) {
            let B = x.indexOf('=');
            if (B !== -1) {
              let I = (function (N) {
                  return (
                    N.indexOf('-') !== -1 &&
                      N.match(PF) === null &&
                      (N = N.replace(jF, function (H, V) {
                        return V.toUpperCase();
                      })),
                    N
                  );
                })(x.slice(0, B)).trim(),
                j = (function (N) {
                  let H = N[0];
                  return (H === '"' || H === "'") &&
                    N.length >= 2 &&
                    N[N.length - 1] === H
                    ? N.slice(1, -1)
                    : N;
                })(x.slice(B + 1).trim()),
                w = Vd[I] || I,
                k = (b[w] = (function (N, H) {
                  return N === 'style'
                    ? H.split(/;\s?/).reduce(function (V, U) {
                        let Q = U.slice(0, U.indexOf(':'));
                        return (
                          (V[
                            Q.replace(/(-[a-z])/g, (ee) => ee[1].toUpperCase())
                          ] = U.slice(Q.length + 1).trim()),
                          V
                        );
                      }, {})
                    : N === 'href'
                    ? Ut(H)
                    : (H.match(IF) && (H = H.slice(1, H.length - 1)),
                      H === 'true' || (H !== 'false' && H));
                })(I, j));
              typeof k == 'string' &&
                (No.test(k) || Lo.test(k)) &&
                (b[w] = he(a(k.trim()), { key: F }));
            } else x !== 'style' && (b[Vd[x] || x] = !0);
            return b;
          }, {})
        : null;
    }
    let i = [],
      u = {},
      s = {
        blockQuote: {
          t: et(ep),
          i: re.HIGH,
          l: (m, E, b) => ({ $: E(m[0].replace(DF, ''), b) }),
          h: (m, E, b) => n('blockquote', { key: b.k }, E(m.$, b)),
        },
        breakLine: {
          t: wr(CF),
          i: re.HIGH,
          l: Po,
          h: (m, E, b) => n('br', { key: b.k }),
        },
        breakThematic: {
          t: et(xF),
          i: re.HIGH,
          l: Po,
          h: (m, E, b) => n('hr', { key: b.k }),
        },
        codeBlock: {
          t: et(rp),
          i: re.MAX,
          l: (m) => ({
            $: m[0].replace(/^ {4}/gm, '').replace(/\n+$/, ''),
            M: void 0,
          }),
          h: (m, E, b) =>
            n(
              'pre',
              { key: b.k },
              n(
                'code',
                At({}, m.I, { className: m.M ? `lang-${m.M}` : '' }),
                m.$,
              ),
            ),
        },
        codeFenced: {
          t: et(tp),
          i: re.MAX,
          l: (m) => ({
            I: o(m[3] || ''),
            $: m[4],
            M: m[2] || void 0,
            type: 'codeBlock',
          }),
        },
        codeInline: {
          t: st(FF),
          i: re.LOW,
          l: (m) => ({ $: m[2] }),
          h: (m, E, b) => n('code', { key: b.k }, m.$),
        },
        footnote: {
          t: et(BF),
          i: re.MAX,
          l: (m) => (i.push({ O: m[2], B: m[1] }), {}),
          h: Io,
        },
        footnoteReference: {
          t: ut(TF),
          i: re.HIGH,
          l: (m) => ({ $: m[1], R: `#${t.slugify(m[1])}` }),
          h: (m, E, b) =>
            n('a', { key: b.k, href: Ut(m.R) }, n('sup', { key: b.k }, m.$)),
        },
        gfmTask: {
          t: ut(OF),
          i: re.HIGH,
          l: (m) => ({ T: m[1].toLowerCase() === 'x' }),
          h: (m, E, b) =>
            n('input', {
              checked: m.T,
              key: b.k,
              readOnly: !0,
              type: 'checkbox',
            }),
        },
        heading: {
          t: et(np),
          i: re.HIGH,
          l: (m, E, b) => ({
            $: Dn(E, m[2], b),
            j: t.slugify(m[2]),
            C: m[1].length,
          }),
          h: (m, E, b) => n(`h${m.C}`, { id: m.j, key: b.k }, E(m.$, b)),
        },
        headingSetext: {
          t: et(ap),
          i: re.MAX,
          l: (m, E, b) => ({
            $: Dn(E, m[1], b),
            C: m[2] === '=' ? 1 : 2,
            type: 'heading',
          }),
        },
        htmlComment: { t: wr(op), i: re.HIGH, l: () => ({}), h: Io },
        image: {
          t: st(cS),
          i: re.HIGH,
          l: (m) => ({ D: m[1], R: Zd(m[2]), N: m[3] }),
          h: (m, E, b) =>
            n('img', {
              key: b.k,
              alt: m.D || void 0,
              title: m.N || void 0,
              src: Ut(m.R),
            }),
        },
        link: {
          t: ut(lS),
          i: re.LOW,
          l: (m, E, b) => ({ $: gS(E, m[1], b), R: Zd(m[2]), N: m[3] }),
          h: (m, E, b) =>
            n('a', { key: b.k, href: Ut(m.R), title: m.N }, E(m.$, b)),
        },
        linkAngleBraceStyleDetector: {
          t: ut(LF),
          i: re.MAX,
          l: (m) => ({ $: [{ $: m[1], type: 'text' }], R: m[1], type: 'link' }),
        },
        linkBareUrlDetector: {
          t: (m, E) => (E.Z ? null : ut(kF)(m, E)),
          i: re.MAX,
          l: (m) => ({
            $: [{ $: m[1], type: 'text' }],
            R: m[1],
            N: void 0,
            type: 'link',
          }),
        },
        linkMailtoDetector: {
          t: ut(NF),
          i: re.MAX,
          l(m) {
            let E = m[1],
              b = m[1];
            return (
              EF.test(b) || (b = 'mailto:' + b),
              {
                $: [{ $: E.replace('mailto:', ''), type: 'text' }],
                R: b,
                type: 'link',
              }
            );
          },
        },
        orderedList: Xd(n, 1),
        unorderedList: Xd(n, 2),
        newlineCoalescer: {
          t: et(SF),
          i: re.LOW,
          l: Po,
          h: () => `
`,
        },
        paragraph: {
          t: mS,
          i: re.LOW,
          l: Ro,
          h: (m, E, b) => n('p', { key: b.k }, E(m.$, b)),
        },
        ref: {
          t: ut(qF),
          i: re.MAX,
          l: (m) => ((u[m[1]] = { R: m[2], N: m[4] }), {}),
          h: Io,
        },
        refImage: {
          t: st(MF),
          i: re.MAX,
          l: (m) => ({ D: m[1] || void 0, F: m[2] }),
          h: (m, E, b) =>
            n('img', {
              key: b.k,
              alt: m.D,
              src: Ut(u[m.F].R),
              title: u[m.F].N,
            }),
        },
        refLink: {
          t: ut($F),
          i: re.MAX,
          l: (m, E, b) => ({
            $: E(m[1], b),
            P: E(m[0].replace(UF, '\\$1'), b),
            F: m[2],
          }),
          h: (m, E, b) =>
            u[m.F]
              ? n(
                  'a',
                  { key: b.k, href: Ut(u[m.F].R), title: u[m.F].N },
                  E(m.$, b),
                )
              : n('span', { key: b.k }, E(m.P, b)),
        },
        table: {
          t: et(ip),
          i: re.HIGH,
          l: hS,
          h: (m, E, b) =>
            n(
              'table',
              { key: b.k },
              n(
                'thead',
                null,
                n(
                  'tr',
                  null,
                  m.L.map(function (x, F) {
                    return n('th', { key: F, style: Qd(m, F) }, E(x, b));
                  }),
                ),
              ),
              n(
                'tbody',
                null,
                m.A.map(function (x, F) {
                  return n(
                    'tr',
                    { key: F },
                    x.map(function (B, I) {
                      return n('td', { key: I, style: Qd(m, I) }, E(B, b));
                    }),
                  );
                }),
              ),
            ),
        },
        tableSeparator: {
          t: function (m, E) {
            return E.v ? GF.exec(m) : null;
          },
          i: re.HIGH,
          l: function () {
            return { type: 'tableSeparator' };
          },
          h: () => ' | ',
        },
        text: {
          t: wr(rS),
          i: re.MIN,
          l: (m) => ({
            $: m[0].replace(RF, (E, b) =>
              t.namedCodesToUnicode[b] ? t.namedCodesToUnicode[b] : E,
            ),
          }),
          h: (m) => m.$,
        },
        textBolded: {
          t: st(JF),
          i: re.MED,
          l: (m, E, b) => ({ $: E(m[2], b) }),
          h: (m, E, b) => n('strong', { key: b.k }, E(m.$, b)),
        },
        textEmphasized: {
          t: st(QF),
          i: re.LOW,
          l: (m, E, b) => ({ $: E(m[2], b) }),
          h: (m, E, b) => n('em', { key: b.k }, E(m.$, b)),
        },
        textEscaped: {
          t: st(tS),
          i: re.HIGH,
          l: (m) => ({ $: m[1], type: 'text' }),
        },
        textMarked: {
          t: st(ZF),
          i: re.LOW,
          l: Ro,
          h: (m, E, b) => n('mark', { key: b.k }, E(m.$, b)),
        },
        textStrikethroughed: {
          t: st(eS),
          i: re.LOW,
          l: Ro,
          h: (m, E, b) => n('del', { key: b.k }, E(m.$, b)),
        },
      };
    t.disableParsingRawHTML !== !0 &&
      ((s.htmlBlock = {
        t: wr(No),
        i: re.HIGH,
        l(m, E, b) {
          let [, x] = m[3].match(aS),
            F = new RegExp(`^${x}`, 'gm'),
            B = m[3].replace(F, ''),
            I = ((j = B), dS.some((H) => H.test(j)) ? yS : Dn);
          var j;
          let w = m[1].toLowerCase(),
            k = bF.indexOf(w) !== -1;
          b.Z = b.Z || w === 'a';
          let N = k ? m[3] : I(E, B, b);
          return (b.Z = !1), { I: o(m[2]), $: N, G: k, H: k ? w : m[1] };
        },
        h: (m, E, b) => n(m.H, At({ key: b.k }, m.I), m.G ? m.$ : E(m.$, b)),
      }),
      (s.htmlSelfClosing = {
        t: wr(Lo),
        i: re.HIGH,
        l: (m) => ({ I: o(m[2] || ''), H: m[1] }),
        h: (m, E, b) => n(m.H, At({}, m.I, { key: b.k })),
      }));
    let p = (function (m) {
        let E = Object.keys(m);
        function b(x, F) {
          let B = [],
            I = '';
          for (; x; ) {
            let j = 0;
            for (; j < E.length; ) {
              let w = E[j],
                k = m[w],
                N = k.t(x, F, I);
              if (N) {
                let H = N[0];
                x = x.substring(H.length);
                let V = k.l(N, b, F);
                V.type == null && (V.type = w), B.push(V), (I = H);
                break;
              }
              j++;
            }
          }
          return B;
        }
        return (
          E.sort(function (x, F) {
            let B = m[x].i,
              I = m[F].i;
            return B !== I ? B - I : x < F ? -1 : 1;
          }),
          function (x, F) {
            return b(
              (function (B) {
                return B.replace(
                  wF,
                  `
`,
                )
                  .replace(_F, '')
                  .replace(zF, '    ');
              })(x),
              F,
            );
          }
        );
      })(s),
      y =
        ((A = (function (m) {
          return function (E, b, x) {
            return m[E.type].h(E, b, x);
          };
        })(s)),
        function m(E, b = {}) {
          if (Array.isArray(E)) {
            let x = b.k,
              F = [],
              B = !1;
            for (let I = 0; I < E.length; I++) {
              b.k = I;
              let j = m(E[I], b),
                w = typeof j == 'string';
              w && B ? (F[F.length - 1] += j) : j !== null && F.push(j),
                (B = w);
            }
            return (b.k = x), F;
          }
          return A(E, m, b);
        });
    var A;
    let h = a(e);
    return i.length
      ? n(
          'div',
          null,
          h,
          n(
            'footer',
            { key: 'footer' },
            i.map(function (m) {
              return n(
                'div',
                { id: t.slugify(m.B), key: m.B },
                m.B,
                y(p(m.O, { _: !0 })),
              );
            }),
          ),
        )
      : h;
  }
  (function (e) {
    (e[(e.MAX = 0)] = 'MAX'),
      (e[(e.HIGH = 1)] = 'HIGH'),
      (e[(e.MED = 2)] = 'MED'),
      (e[(e.LOW = 3)] = 'LOW'),
      (e[(e.MIN = 4)] = 'MIN');
  })(re || (re = {}));
  var Mo = (e) => {
    let { children: t, options: r } = e,
      n = (function (a, o) {
        if (a == null) return {};
        var i,
          u,
          s = {},
          p = Object.keys(a);
        for (u = 0; u < p.length; u++)
          o.indexOf((i = p[u])) >= 0 || (s[i] = a[i]);
        return s;
      })(e, yF);
    return he(AS(t, r), n);
  };
  var sy = fe(Cn(), 1),
    ly = fe(jp(), 1),
    cy = fe(zf(), 1);
  l();
  c();
  d();
  l();
  c();
  d();
  l();
  c();
  d();
  l();
  c();
  d();
  l();
  c();
  d();
  l();
  c();
  d();
  var tK = __STORYBOOKCHANNELS__,
    {
      Channel: Ho,
      PostMessageTransport: rK,
      WebsocketTransport: nK,
      createBrowserChannel: d3,
      createPostMessageChannel: aK,
      createWebSocketChannel: oK,
    } = __STORYBOOKCHANNELS__;
  l();
  c();
  d();
  var cK = __STORYBOOKCOREEVENTS__,
    {
      CHANNEL_CREATED: dK,
      CONFIG_ERROR: p3,
      CURRENT_STORY_WAS_SET: f3,
      DOCS_PREPARED: h3,
      DOCS_RENDERED: m3,
      FORCE_REMOUNT: g3,
      FORCE_RE_RENDER: zo,
      GLOBALS_UPDATED: Sn,
      IGNORED_EXCEPTION: pK,
      NAVIGATE_URL: Gf,
      PLAY_FUNCTION_THREW_EXCEPTION: y3,
      PRELOAD_ENTRIES: b3,
      PREVIEW_BUILDER_PROGRESS: fK,
      PREVIEW_KEYDOWN: A3,
      REGISTER_SUBSCRIPTION: hK,
      REQUEST_WHATS_NEW_DATA: mK,
      RESET_STORY_ARGS: wn,
      RESULT_WHATS_NEW_DATA: gK,
      SELECT_STORY: yK,
      SET_CONFIG: bK,
      SET_CURRENT_STORY: E3,
      SET_GLOBALS: v3,
      SET_INDEX: D3,
      SET_STORIES: AK,
      SET_WHATS_NEW_CACHE: EK,
      SHARED_STATE_CHANGED: C3,
      SHARED_STATE_SET: x3,
      STORIES_COLLAPSE_ALL: vK,
      STORIES_EXPAND_ALL: DK,
      STORY_ARGS_UPDATED: Bn,
      STORY_CHANGED: F3,
      STORY_ERRORED: S3,
      STORY_INDEX_INVALIDATED: w3,
      STORY_MISSING: B3,
      STORY_PREPARED: T3,
      STORY_RENDERED: Wf,
      STORY_RENDER_PHASE_CHANGED: _3,
      STORY_SPECIFIED: O3,
      STORY_THREW_EXCEPTION: R3,
      STORY_UNCHANGED: P3,
      TOGGLE_WHATS_NEW_NOTIFICATIONS: CK,
      UPDATE_GLOBALS: Vf,
      UPDATE_QUERY_PARAMS: I3,
      UPDATE_STORY_ARGS: Tn,
    } = __STORYBOOKCOREEVENTS__;
  var k3 = Object.create,
    Kf = Object.defineProperty,
    N3 = Object.getOwnPropertyDescriptor,
    Yf = Object.getOwnPropertyNames,
    L3 = Object.getPrototypeOf,
    j3 = Object.prototype.hasOwnProperty,
    Ge = (e, t) =>
      function () {
        return (
          t || (0, e[Yf(e)[0]])((t = { exports: {} }).exports, t), t.exports
        );
      },
    q3 = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let a of Yf(t))
          !j3.call(e, a) &&
            a !== r &&
            Kf(e, a, {
              get: () => t[a],
              enumerable: !(n = N3(t, a)) || n.enumerable,
            });
      return e;
    },
    Xf = (e, t, r) => (
      (r = e != null ? k3(L3(e)) : {}),
      q3(
        t || !e || !e.__esModule
          ? Kf(r, 'default', { value: e, enumerable: !0 })
          : r,
        e,
      )
    );
  function Jf() {
    let e = { setHandler: () => {}, send: () => {} };
    return new Ho({ transport: e });
  }
  var M3 = class {
      constructor() {
        (this.getChannel = () => {
          if (!this.channel) {
            let e = Jf();
            return this.setChannel(e), e;
          }
          return this.channel;
        }),
          (this.getServerChannel = () => {
            if (!this.serverChannel)
              throw new Error('Accessing non-existent serverChannel');
            return this.serverChannel;
          }),
          (this.ready = () => this.promise),
          (this.hasChannel = () => !!this.channel),
          (this.hasServerChannel = () => !!this.serverChannel),
          (this.setChannel = (e) => {
            (this.channel = e), this.resolve();
          }),
          (this.setServerChannel = (e) => {
            this.serverChannel = e;
          }),
          (this.promise = new Promise((e) => {
            this.resolve = () => e(this.getChannel());
          }));
      }
    },
    Go = '__STORYBOOK_ADDONS_PREVIEW';
  function $3() {
    return ue[Go] || (ue[Go] = new M3()), ue[Go];
  }
  var _n = $3();
  var G0 = fe(Cn(), 1),
    Or = fe(On(), 1),
    JB = fe(P0(), 1),
    QB = fe(Pn(), 1);
  l();
  c();
  d();
  function zt(e) {
    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
    var n = Array.from(typeof e == 'string' ? [e] : e);
    n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, '');
    var a = n.reduce(function (u, s) {
      var p = s.match(/\n([\t ]+|(?!\s).)/g);
      return p
        ? u.concat(
            p.map(function (y) {
              var A, h;
              return (h =
                (A = y.match(/[\t ]/g)) === null || A === void 0
                  ? void 0
                  : A.length) !== null && h !== void 0
                ? h
                : 0;
            }),
          )
        : u;
    }, []);
    if (a.length) {
      var o = new RegExp(
        `
[	 ]{` +
          Math.min.apply(Math, a) +
          '}',
        'g',
      );
      n = n.map(function (u) {
        return u.replace(
          o,
          `
`,
        );
      });
    }
    n[0] = n[0].replace(/^\r?\n/, '');
    var i = n[0];
    return (
      t.forEach(function (u, s) {
        var p = i.match(/(?:^|\n)( *)$/),
          y = p ? p[1] : '',
          A = u;
        typeof u == 'string' &&
          u.includes(`
`) &&
          (A = String(u)
            .split(
              `
`,
            )
            .map(function (h, m) {
              return m === 0 ? h : '' + y + h;
            }).join(`
`)),
          (i += A + n[s + 1]);
      }),
      i
    );
  }
  var Ce = zt;
  l();
  c();
  d();
  var Ln = fe(Wo(), 1);
  var W0 = fe(H0(), 1);
  var V0 = fe(_o(), 1);
  var vX = (0, G0.default)(1)((e) =>
    Object.values(e).reduce(
      (t, r) => ((t[r.importPath] = t[r.importPath] || r), t),
      {},
    ),
  );
  var DX = Symbol('incompatible');
  var CX = Symbol('Deeply equal');
  var ZB = zt`
CSF .story annotations deprecated; annotate story functions directly:
- StoryFn.story.name => StoryFn.storyName
- StoryFn.story.(parameters|decorators) => StoryFn.(parameters|decorators)
See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#hoisted-csf-annotations for details and codemod.
`,
    xX = (0, W0.default)(() => {}, ZB);
  var Et = (...e) => {
    let t = {},
      r = e.filter(Boolean),
      n = r.reduce(
        (a, o) => (
          Object.entries(o).forEach(([i, u]) => {
            let s = a[i];
            Array.isArray(u) || typeof s > 'u'
              ? (a[i] = u)
              : (0, Ln.default)(u) && (0, Ln.default)(s)
              ? (t[i] = !0)
              : typeof u < 'u' && (a[i] = u);
          }),
          a
        ),
        {},
      );
    return (
      Object.keys(t).forEach((a) => {
        let o = r
          .filter(Boolean)
          .map((i) => i[a])
          .filter((i) => typeof i < 'u');
        o.every((i) => (0, Ln.default)(i))
          ? (n[a] = Et(...o))
          : (n[a] = o[o.length - 1]);
      }),
      n
    );
  };
  var Ko = (e, t, r) => {
      let n = typeof e;
      switch (n) {
        case 'boolean':
        case 'string':
        case 'number':
        case 'function':
        case 'symbol':
          return { name: n };
      }
      return e
        ? r.has(e)
          ? (ze.warn(zt`
        We've detected a cycle in arg '${t}'. Args should be JSON-serializable.

        Consider using the mapping feature or fully custom args:
        - Mapping: https://storybook.js.org/docs/react/writing-stories/args#mapping-to-complex-arg-values
        - Custom args: https://storybook.js.org/docs/react/essentials/controls#fully-custom-args
      `),
            { name: 'other', value: 'cyclic object' })
          : (r.add(e),
            Array.isArray(e)
              ? {
                  name: 'array',
                  value:
                    e.length > 0
                      ? Ko(e[0], t, new Set(r))
                      : { name: 'other', value: 'unknown' },
                }
              : {
                  name: 'object',
                  value: (0, Or.default)(e, (a) => Ko(a, t, new Set(r))),
                })
        : { name: 'object', value: {} };
    },
    eT = (e) => {
      let { id: t, argTypes: r = {}, initialArgs: n = {} } = e,
        a = (0, Or.default)(n, (i, u) => ({
          name: u,
          type: Ko(i, `${t}.${u}`, new Set()),
        })),
        o = (0, Or.default)(r, (i, u) => ({ name: u }));
      return Et(a, o, r);
    };
  eT.secondPass = !0;
  var z0 = (e, t) => (Array.isArray(t) ? t.includes(e) : e.match(t)),
    Pr = (e, t, r) =>
      !t && !r
        ? e
        : e &&
          (0, V0.default)(e, (n, a) => {
            let o = n.name || a;
            return (!t || z0(o, t)) && (!r || !z0(o, r));
          }),
    tT = (e, t, r) => {
      let { type: n, options: a } = e;
      if (n) {
        if (r.color && r.color.test(t)) {
          let o = n.name;
          if (o === 'string') return { control: { type: 'color' } };
          o !== 'enum' &&
            ze.warn(
              `Addon controls: Control of type color only supports string, received "${o}" instead`,
            );
        }
        if (r.date && r.date.test(t)) return { control: { type: 'date' } };
        switch (n.name) {
          case 'array':
            return { control: { type: 'object' } };
          case 'boolean':
            return { control: { type: 'boolean' } };
          case 'string':
            return { control: { type: 'text' } };
          case 'number':
            return { control: { type: 'number' } };
          case 'enum': {
            let { value: o } = n;
            return {
              control: { type: o?.length <= 5 ? 'radio' : 'select' },
              options: o,
            };
          }
          case 'function':
          case 'symbol':
            return null;
          default:
            return { control: { type: a ? 'select' : 'object' } };
        }
      }
    },
    K0 = (e) => {
      let {
        argTypes: t,
        parameters: {
          __isArgsStory: r,
          controls: {
            include: n = null,
            exclude: a = null,
            matchers: o = {},
          } = {},
        },
      } = e;
      if (!r) return t;
      let i = Pr(t, n, a),
        u = (0, Or.default)(i, (s, p) => s?.type && tT(s, p, o));
      return Et(u, i);
    };
  K0.secondPass = !0;
  function Yo(e) {
    return async (t, r, n) => {
      await e.reduceRight(
        (a, o) => async () => o(t, a, n),
        async () => r(n),
      )();
    };
  }
  function Rr(e, t) {
    return e.map((r) => r.default?.[t] ?? r[t]).filter(Boolean);
  }
  function In(e, t, r = {}) {
    return Rr(e, t).reduce(
      (n, a) => (r.reverseFileOrder ? [...a, ...n] : [...n, ...a]),
      [],
    );
  }
  function kn(e, t) {
    return Object.assign({}, ...Rr(e, t));
  }
  function Nn(e, t) {
    return Rr(e, t).pop();
  }
  function Xo(e) {
    let t = In(e, 'argTypesEnhancers'),
      r = Rr(e, 'runStep');
    return {
      parameters: Et(...Rr(e, 'parameters')),
      decorators: In(e, 'decorators', {
        reverseFileOrder: !(ue.FEATURES?.legacyDecoratorFileOrder ?? !1),
      }),
      args: kn(e, 'args'),
      argsEnhancers: In(e, 'argsEnhancers'),
      argTypes: kn(e, 'argTypes'),
      argTypesEnhancers: [
        ...t.filter((n) => !n.secondPass),
        ...t.filter((n) => n.secondPass),
      ],
      globals: kn(e, 'globals'),
      globalTypes: kn(e, 'globalTypes'),
      loaders: In(e, 'loaders'),
      render: Nn(e, 'render'),
      renderToCanvas: Nn(e, 'renderToCanvas'),
      renderToDOM: Nn(e, 'renderToDOM'),
      applyDecorators: Nn(e, 'applyDecorators'),
      runStep: Yo(r),
    };
  }
  var FX = Xo([]);
  var j8 = fe(Pn(), 1),
    q8 = fe(vi(), 1);
  l();
  c();
  d();
  var $8 = fe(Pn(), 1);
  var U8 = fe(vi(), 1),
    H8 = fe(Wo(), 1),
    um = Ge({
      '../../node_modules/entities/lib/maps/entities.json'(e, t) {
        t.exports = {
          Aacute: '\xC1',
          aacute: '\xE1',
          Abreve: '\u0102',
          abreve: '\u0103',
          ac: '\u223E',
          acd: '\u223F',
          acE: '\u223E\u0333',
          Acirc: '\xC2',
          acirc: '\xE2',
          acute: '\xB4',
          Acy: '\u0410',
          acy: '\u0430',
          AElig: '\xC6',
          aelig: '\xE6',
          af: '\u2061',
          Afr: '\u{1D504}',
          afr: '\u{1D51E}',
          Agrave: '\xC0',
          agrave: '\xE0',
          alefsym: '\u2135',
          aleph: '\u2135',
          Alpha: '\u0391',
          alpha: '\u03B1',
          Amacr: '\u0100',
          amacr: '\u0101',
          amalg: '\u2A3F',
          amp: '&',
          AMP: '&',
          andand: '\u2A55',
          And: '\u2A53',
          and: '\u2227',
          andd: '\u2A5C',
          andslope: '\u2A58',
          andv: '\u2A5A',
          ang: '\u2220',
          ange: '\u29A4',
          angle: '\u2220',
          angmsdaa: '\u29A8',
          angmsdab: '\u29A9',
          angmsdac: '\u29AA',
          angmsdad: '\u29AB',
          angmsdae: '\u29AC',
          angmsdaf: '\u29AD',
          angmsdag: '\u29AE',
          angmsdah: '\u29AF',
          angmsd: '\u2221',
          angrt: '\u221F',
          angrtvb: '\u22BE',
          angrtvbd: '\u299D',
          angsph: '\u2222',
          angst: '\xC5',
          angzarr: '\u237C',
          Aogon: '\u0104',
          aogon: '\u0105',
          Aopf: '\u{1D538}',
          aopf: '\u{1D552}',
          apacir: '\u2A6F',
          ap: '\u2248',
          apE: '\u2A70',
          ape: '\u224A',
          apid: '\u224B',
          apos: "'",
          ApplyFunction: '\u2061',
          approx: '\u2248',
          approxeq: '\u224A',
          Aring: '\xC5',
          aring: '\xE5',
          Ascr: '\u{1D49C}',
          ascr: '\u{1D4B6}',
          Assign: '\u2254',
          ast: '*',
          asymp: '\u2248',
          asympeq: '\u224D',
          Atilde: '\xC3',
          atilde: '\xE3',
          Auml: '\xC4',
          auml: '\xE4',
          awconint: '\u2233',
          awint: '\u2A11',
          backcong: '\u224C',
          backepsilon: '\u03F6',
          backprime: '\u2035',
          backsim: '\u223D',
          backsimeq: '\u22CD',
          Backslash: '\u2216',
          Barv: '\u2AE7',
          barvee: '\u22BD',
          barwed: '\u2305',
          Barwed: '\u2306',
          barwedge: '\u2305',
          bbrk: '\u23B5',
          bbrktbrk: '\u23B6',
          bcong: '\u224C',
          Bcy: '\u0411',
          bcy: '\u0431',
          bdquo: '\u201E',
          becaus: '\u2235',
          because: '\u2235',
          Because: '\u2235',
          bemptyv: '\u29B0',
          bepsi: '\u03F6',
          bernou: '\u212C',
          Bernoullis: '\u212C',
          Beta: '\u0392',
          beta: '\u03B2',
          beth: '\u2136',
          between: '\u226C',
          Bfr: '\u{1D505}',
          bfr: '\u{1D51F}',
          bigcap: '\u22C2',
          bigcirc: '\u25EF',
          bigcup: '\u22C3',
          bigodot: '\u2A00',
          bigoplus: '\u2A01',
          bigotimes: '\u2A02',
          bigsqcup: '\u2A06',
          bigstar: '\u2605',
          bigtriangledown: '\u25BD',
          bigtriangleup: '\u25B3',
          biguplus: '\u2A04',
          bigvee: '\u22C1',
          bigwedge: '\u22C0',
          bkarow: '\u290D',
          blacklozenge: '\u29EB',
          blacksquare: '\u25AA',
          blacktriangle: '\u25B4',
          blacktriangledown: '\u25BE',
          blacktriangleleft: '\u25C2',
          blacktriangleright: '\u25B8',
          blank: '\u2423',
          blk12: '\u2592',
          blk14: '\u2591',
          blk34: '\u2593',
          block: '\u2588',
          bne: '=\u20E5',
          bnequiv: '\u2261\u20E5',
          bNot: '\u2AED',
          bnot: '\u2310',
          Bopf: '\u{1D539}',
          bopf: '\u{1D553}',
          bot: '\u22A5',
          bottom: '\u22A5',
          bowtie: '\u22C8',
          boxbox: '\u29C9',
          boxdl: '\u2510',
          boxdL: '\u2555',
          boxDl: '\u2556',
          boxDL: '\u2557',
          boxdr: '\u250C',
          boxdR: '\u2552',
          boxDr: '\u2553',
          boxDR: '\u2554',
          boxh: '\u2500',
          boxH: '\u2550',
          boxhd: '\u252C',
          boxHd: '\u2564',
          boxhD: '\u2565',
          boxHD: '\u2566',
          boxhu: '\u2534',
          boxHu: '\u2567',
          boxhU: '\u2568',
          boxHU: '\u2569',
          boxminus: '\u229F',
          boxplus: '\u229E',
          boxtimes: '\u22A0',
          boxul: '\u2518',
          boxuL: '\u255B',
          boxUl: '\u255C',
          boxUL: '\u255D',
          boxur: '\u2514',
          boxuR: '\u2558',
          boxUr: '\u2559',
          boxUR: '\u255A',
          boxv: '\u2502',
          boxV: '\u2551',
          boxvh: '\u253C',
          boxvH: '\u256A',
          boxVh: '\u256B',
          boxVH: '\u256C',
          boxvl: '\u2524',
          boxvL: '\u2561',
          boxVl: '\u2562',
          boxVL: '\u2563',
          boxvr: '\u251C',
          boxvR: '\u255E',
          boxVr: '\u255F',
          boxVR: '\u2560',
          bprime: '\u2035',
          breve: '\u02D8',
          Breve: '\u02D8',
          brvbar: '\xA6',
          bscr: '\u{1D4B7}',
          Bscr: '\u212C',
          bsemi: '\u204F',
          bsim: '\u223D',
          bsime: '\u22CD',
          bsolb: '\u29C5',
          bsol: '\\',
          bsolhsub: '\u27C8',
          bull: '\u2022',
          bullet: '\u2022',
          bump: '\u224E',
          bumpE: '\u2AAE',
          bumpe: '\u224F',
          Bumpeq: '\u224E',
          bumpeq: '\u224F',
          Cacute: '\u0106',
          cacute: '\u0107',
          capand: '\u2A44',
          capbrcup: '\u2A49',
          capcap: '\u2A4B',
          cap: '\u2229',
          Cap: '\u22D2',
          capcup: '\u2A47',
          capdot: '\u2A40',
          CapitalDifferentialD: '\u2145',
          caps: '\u2229\uFE00',
          caret: '\u2041',
          caron: '\u02C7',
          Cayleys: '\u212D',
          ccaps: '\u2A4D',
          Ccaron: '\u010C',
          ccaron: '\u010D',
          Ccedil: '\xC7',
          ccedil: '\xE7',
          Ccirc: '\u0108',
          ccirc: '\u0109',
          Cconint: '\u2230',
          ccups: '\u2A4C',
          ccupssm: '\u2A50',
          Cdot: '\u010A',
          cdot: '\u010B',
          cedil: '\xB8',
          Cedilla: '\xB8',
          cemptyv: '\u29B2',
          cent: '\xA2',
          centerdot: '\xB7',
          CenterDot: '\xB7',
          cfr: '\u{1D520}',
          Cfr: '\u212D',
          CHcy: '\u0427',
          chcy: '\u0447',
          check: '\u2713',
          checkmark: '\u2713',
          Chi: '\u03A7',
          chi: '\u03C7',
          circ: '\u02C6',
          circeq: '\u2257',
          circlearrowleft: '\u21BA',
          circlearrowright: '\u21BB',
          circledast: '\u229B',
          circledcirc: '\u229A',
          circleddash: '\u229D',
          CircleDot: '\u2299',
          circledR: '\xAE',
          circledS: '\u24C8',
          CircleMinus: '\u2296',
          CirclePlus: '\u2295',
          CircleTimes: '\u2297',
          cir: '\u25CB',
          cirE: '\u29C3',
          cire: '\u2257',
          cirfnint: '\u2A10',
          cirmid: '\u2AEF',
          cirscir: '\u29C2',
          ClockwiseContourIntegral: '\u2232',
          CloseCurlyDoubleQuote: '\u201D',
          CloseCurlyQuote: '\u2019',
          clubs: '\u2663',
          clubsuit: '\u2663',
          colon: ':',
          Colon: '\u2237',
          Colone: '\u2A74',
          colone: '\u2254',
          coloneq: '\u2254',
          comma: ',',
          commat: '@',
          comp: '\u2201',
          compfn: '\u2218',
          complement: '\u2201',
          complexes: '\u2102',
          cong: '\u2245',
          congdot: '\u2A6D',
          Congruent: '\u2261',
          conint: '\u222E',
          Conint: '\u222F',
          ContourIntegral: '\u222E',
          copf: '\u{1D554}',
          Copf: '\u2102',
          coprod: '\u2210',
          Coproduct: '\u2210',
          copy: '\xA9',
          COPY: '\xA9',
          copysr: '\u2117',
          CounterClockwiseContourIntegral: '\u2233',
          crarr: '\u21B5',
          cross: '\u2717',
          Cross: '\u2A2F',
          Cscr: '\u{1D49E}',
          cscr: '\u{1D4B8}',
          csub: '\u2ACF',
          csube: '\u2AD1',
          csup: '\u2AD0',
          csupe: '\u2AD2',
          ctdot: '\u22EF',
          cudarrl: '\u2938',
          cudarrr: '\u2935',
          cuepr: '\u22DE',
          cuesc: '\u22DF',
          cularr: '\u21B6',
          cularrp: '\u293D',
          cupbrcap: '\u2A48',
          cupcap: '\u2A46',
          CupCap: '\u224D',
          cup: '\u222A',
          Cup: '\u22D3',
          cupcup: '\u2A4A',
          cupdot: '\u228D',
          cupor: '\u2A45',
          cups: '\u222A\uFE00',
          curarr: '\u21B7',
          curarrm: '\u293C',
          curlyeqprec: '\u22DE',
          curlyeqsucc: '\u22DF',
          curlyvee: '\u22CE',
          curlywedge: '\u22CF',
          curren: '\xA4',
          curvearrowleft: '\u21B6',
          curvearrowright: '\u21B7',
          cuvee: '\u22CE',
          cuwed: '\u22CF',
          cwconint: '\u2232',
          cwint: '\u2231',
          cylcty: '\u232D',
          dagger: '\u2020',
          Dagger: '\u2021',
          daleth: '\u2138',
          darr: '\u2193',
          Darr: '\u21A1',
          dArr: '\u21D3',
          dash: '\u2010',
          Dashv: '\u2AE4',
          dashv: '\u22A3',
          dbkarow: '\u290F',
          dblac: '\u02DD',
          Dcaron: '\u010E',
          dcaron: '\u010F',
          Dcy: '\u0414',
          dcy: '\u0434',
          ddagger: '\u2021',
          ddarr: '\u21CA',
          DD: '\u2145',
          dd: '\u2146',
          DDotrahd: '\u2911',
          ddotseq: '\u2A77',
          deg: '\xB0',
          Del: '\u2207',
          Delta: '\u0394',
          delta: '\u03B4',
          demptyv: '\u29B1',
          dfisht: '\u297F',
          Dfr: '\u{1D507}',
          dfr: '\u{1D521}',
          dHar: '\u2965',
          dharl: '\u21C3',
          dharr: '\u21C2',
          DiacriticalAcute: '\xB4',
          DiacriticalDot: '\u02D9',
          DiacriticalDoubleAcute: '\u02DD',
          DiacriticalGrave: '`',
          DiacriticalTilde: '\u02DC',
          diam: '\u22C4',
          diamond: '\u22C4',
          Diamond: '\u22C4',
          diamondsuit: '\u2666',
          diams: '\u2666',
          die: '\xA8',
          DifferentialD: '\u2146',
          digamma: '\u03DD',
          disin: '\u22F2',
          div: '\xF7',
          divide: '\xF7',
          divideontimes: '\u22C7',
          divonx: '\u22C7',
          DJcy: '\u0402',
          djcy: '\u0452',
          dlcorn: '\u231E',
          dlcrop: '\u230D',
          dollar: '$',
          Dopf: '\u{1D53B}',
          dopf: '\u{1D555}',
          Dot: '\xA8',
          dot: '\u02D9',
          DotDot: '\u20DC',
          doteq: '\u2250',
          doteqdot: '\u2251',
          DotEqual: '\u2250',
          dotminus: '\u2238',
          dotplus: '\u2214',
          dotsquare: '\u22A1',
          doublebarwedge: '\u2306',
          DoubleContourIntegral: '\u222F',
          DoubleDot: '\xA8',
          DoubleDownArrow: '\u21D3',
          DoubleLeftArrow: '\u21D0',
          DoubleLeftRightArrow: '\u21D4',
          DoubleLeftTee: '\u2AE4',
          DoubleLongLeftArrow: '\u27F8',
          DoubleLongLeftRightArrow: '\u27FA',
          DoubleLongRightArrow: '\u27F9',
          DoubleRightArrow: '\u21D2',
          DoubleRightTee: '\u22A8',
          DoubleUpArrow: '\u21D1',
          DoubleUpDownArrow: '\u21D5',
          DoubleVerticalBar: '\u2225',
          DownArrowBar: '\u2913',
          downarrow: '\u2193',
          DownArrow: '\u2193',
          Downarrow: '\u21D3',
          DownArrowUpArrow: '\u21F5',
          DownBreve: '\u0311',
          downdownarrows: '\u21CA',
          downharpoonleft: '\u21C3',
          downharpoonright: '\u21C2',
          DownLeftRightVector: '\u2950',
          DownLeftTeeVector: '\u295E',
          DownLeftVectorBar: '\u2956',
          DownLeftVector: '\u21BD',
          DownRightTeeVector: '\u295F',
          DownRightVectorBar: '\u2957',
          DownRightVector: '\u21C1',
          DownTeeArrow: '\u21A7',
          DownTee: '\u22A4',
          drbkarow: '\u2910',
          drcorn: '\u231F',
          drcrop: '\u230C',
          Dscr: '\u{1D49F}',
          dscr: '\u{1D4B9}',
          DScy: '\u0405',
          dscy: '\u0455',
          dsol: '\u29F6',
          Dstrok: '\u0110',
          dstrok: '\u0111',
          dtdot: '\u22F1',
          dtri: '\u25BF',
          dtrif: '\u25BE',
          duarr: '\u21F5',
          duhar: '\u296F',
          dwangle: '\u29A6',
          DZcy: '\u040F',
          dzcy: '\u045F',
          dzigrarr: '\u27FF',
          Eacute: '\xC9',
          eacute: '\xE9',
          easter: '\u2A6E',
          Ecaron: '\u011A',
          ecaron: '\u011B',
          Ecirc: '\xCA',
          ecirc: '\xEA',
          ecir: '\u2256',
          ecolon: '\u2255',
          Ecy: '\u042D',
          ecy: '\u044D',
          eDDot: '\u2A77',
          Edot: '\u0116',
          edot: '\u0117',
          eDot: '\u2251',
          ee: '\u2147',
          efDot: '\u2252',
          Efr: '\u{1D508}',
          efr: '\u{1D522}',
          eg: '\u2A9A',
          Egrave: '\xC8',
          egrave: '\xE8',
          egs: '\u2A96',
          egsdot: '\u2A98',
          el: '\u2A99',
          Element: '\u2208',
          elinters: '\u23E7',
          ell: '\u2113',
          els: '\u2A95',
          elsdot: '\u2A97',
          Emacr: '\u0112',
          emacr: '\u0113',
          empty: '\u2205',
          emptyset: '\u2205',
          EmptySmallSquare: '\u25FB',
          emptyv: '\u2205',
          EmptyVerySmallSquare: '\u25AB',
          emsp13: '\u2004',
          emsp14: '\u2005',
          emsp: '\u2003',
          ENG: '\u014A',
          eng: '\u014B',
          ensp: '\u2002',
          Eogon: '\u0118',
          eogon: '\u0119',
          Eopf: '\u{1D53C}',
          eopf: '\u{1D556}',
          epar: '\u22D5',
          eparsl: '\u29E3',
          eplus: '\u2A71',
          epsi: '\u03B5',
          Epsilon: '\u0395',
          epsilon: '\u03B5',
          epsiv: '\u03F5',
          eqcirc: '\u2256',
          eqcolon: '\u2255',
          eqsim: '\u2242',
          eqslantgtr: '\u2A96',
          eqslantless: '\u2A95',
          Equal: '\u2A75',
          equals: '=',
          EqualTilde: '\u2242',
          equest: '\u225F',
          Equilibrium: '\u21CC',
          equiv: '\u2261',
          equivDD: '\u2A78',
          eqvparsl: '\u29E5',
          erarr: '\u2971',
          erDot: '\u2253',
          escr: '\u212F',
          Escr: '\u2130',
          esdot: '\u2250',
          Esim: '\u2A73',
          esim: '\u2242',
          Eta: '\u0397',
          eta: '\u03B7',
          ETH: '\xD0',
          eth: '\xF0',
          Euml: '\xCB',
          euml: '\xEB',
          euro: '\u20AC',
          excl: '!',
          exist: '\u2203',
          Exists: '\u2203',
          expectation: '\u2130',
          exponentiale: '\u2147',
          ExponentialE: '\u2147',
          fallingdotseq: '\u2252',
          Fcy: '\u0424',
          fcy: '\u0444',
          female: '\u2640',
          ffilig: '\uFB03',
          fflig: '\uFB00',
          ffllig: '\uFB04',
          Ffr: '\u{1D509}',
          ffr: '\u{1D523}',
          filig: '\uFB01',
          FilledSmallSquare: '\u25FC',
          FilledVerySmallSquare: '\u25AA',
          fjlig: 'fj',
          flat: '\u266D',
          fllig: '\uFB02',
          fltns: '\u25B1',
          fnof: '\u0192',
          Fopf: '\u{1D53D}',
          fopf: '\u{1D557}',
          forall: '\u2200',
          ForAll: '\u2200',
          fork: '\u22D4',
          forkv: '\u2AD9',
          Fouriertrf: '\u2131',
          fpartint: '\u2A0D',
          frac12: '\xBD',
          frac13: '\u2153',
          frac14: '\xBC',
          frac15: '\u2155',
          frac16: '\u2159',
          frac18: '\u215B',
          frac23: '\u2154',
          frac25: '\u2156',
          frac34: '\xBE',
          frac35: '\u2157',
          frac38: '\u215C',
          frac45: '\u2158',
          frac56: '\u215A',
          frac58: '\u215D',
          frac78: '\u215E',
          frasl: '\u2044',
          frown: '\u2322',
          fscr: '\u{1D4BB}',
          Fscr: '\u2131',
          gacute: '\u01F5',
          Gamma: '\u0393',
          gamma: '\u03B3',
          Gammad: '\u03DC',
          gammad: '\u03DD',
          gap: '\u2A86',
          Gbreve: '\u011E',
          gbreve: '\u011F',
          Gcedil: '\u0122',
          Gcirc: '\u011C',
          gcirc: '\u011D',
          Gcy: '\u0413',
          gcy: '\u0433',
          Gdot: '\u0120',
          gdot: '\u0121',
          ge: '\u2265',
          gE: '\u2267',
          gEl: '\u2A8C',
          gel: '\u22DB',
          geq: '\u2265',
          geqq: '\u2267',
          geqslant: '\u2A7E',
          gescc: '\u2AA9',
          ges: '\u2A7E',
          gesdot: '\u2A80',
          gesdoto: '\u2A82',
          gesdotol: '\u2A84',
          gesl: '\u22DB\uFE00',
          gesles: '\u2A94',
          Gfr: '\u{1D50A}',
          gfr: '\u{1D524}',
          gg: '\u226B',
          Gg: '\u22D9',
          ggg: '\u22D9',
          gimel: '\u2137',
          GJcy: '\u0403',
          gjcy: '\u0453',
          gla: '\u2AA5',
          gl: '\u2277',
          glE: '\u2A92',
          glj: '\u2AA4',
          gnap: '\u2A8A',
          gnapprox: '\u2A8A',
          gne: '\u2A88',
          gnE: '\u2269',
          gneq: '\u2A88',
          gneqq: '\u2269',
          gnsim: '\u22E7',
          Gopf: '\u{1D53E}',
          gopf: '\u{1D558}',
          grave: '`',
          GreaterEqual: '\u2265',
          GreaterEqualLess: '\u22DB',
          GreaterFullEqual: '\u2267',
          GreaterGreater: '\u2AA2',
          GreaterLess: '\u2277',
          GreaterSlantEqual: '\u2A7E',
          GreaterTilde: '\u2273',
          Gscr: '\u{1D4A2}',
          gscr: '\u210A',
          gsim: '\u2273',
          gsime: '\u2A8E',
          gsiml: '\u2A90',
          gtcc: '\u2AA7',
          gtcir: '\u2A7A',
          gt: '>',
          GT: '>',
          Gt: '\u226B',
          gtdot: '\u22D7',
          gtlPar: '\u2995',
          gtquest: '\u2A7C',
          gtrapprox: '\u2A86',
          gtrarr: '\u2978',
          gtrdot: '\u22D7',
          gtreqless: '\u22DB',
          gtreqqless: '\u2A8C',
          gtrless: '\u2277',
          gtrsim: '\u2273',
          gvertneqq: '\u2269\uFE00',
          gvnE: '\u2269\uFE00',
          Hacek: '\u02C7',
          hairsp: '\u200A',
          half: '\xBD',
          hamilt: '\u210B',
          HARDcy: '\u042A',
          hardcy: '\u044A',
          harrcir: '\u2948',
          harr: '\u2194',
          hArr: '\u21D4',
          harrw: '\u21AD',
          Hat: '^',
          hbar: '\u210F',
          Hcirc: '\u0124',
          hcirc: '\u0125',
          hearts: '\u2665',
          heartsuit: '\u2665',
          hellip: '\u2026',
          hercon: '\u22B9',
          hfr: '\u{1D525}',
          Hfr: '\u210C',
          HilbertSpace: '\u210B',
          hksearow: '\u2925',
          hkswarow: '\u2926',
          hoarr: '\u21FF',
          homtht: '\u223B',
          hookleftarrow: '\u21A9',
          hookrightarrow: '\u21AA',
          hopf: '\u{1D559}',
          Hopf: '\u210D',
          horbar: '\u2015',
          HorizontalLine: '\u2500',
          hscr: '\u{1D4BD}',
          Hscr: '\u210B',
          hslash: '\u210F',
          Hstrok: '\u0126',
          hstrok: '\u0127',
          HumpDownHump: '\u224E',
          HumpEqual: '\u224F',
          hybull: '\u2043',
          hyphen: '\u2010',
          Iacute: '\xCD',
          iacute: '\xED',
          ic: '\u2063',
          Icirc: '\xCE',
          icirc: '\xEE',
          Icy: '\u0418',
          icy: '\u0438',
          Idot: '\u0130',
          IEcy: '\u0415',
          iecy: '\u0435',
          iexcl: '\xA1',
          iff: '\u21D4',
          ifr: '\u{1D526}',
          Ifr: '\u2111',
          Igrave: '\xCC',
          igrave: '\xEC',
          ii: '\u2148',
          iiiint: '\u2A0C',
          iiint: '\u222D',
          iinfin: '\u29DC',
          iiota: '\u2129',
          IJlig: '\u0132',
          ijlig: '\u0133',
          Imacr: '\u012A',
          imacr: '\u012B',
          image: '\u2111',
          ImaginaryI: '\u2148',
          imagline: '\u2110',
          imagpart: '\u2111',
          imath: '\u0131',
          Im: '\u2111',
          imof: '\u22B7',
          imped: '\u01B5',
          Implies: '\u21D2',
          incare: '\u2105',
          in: '\u2208',
          infin: '\u221E',
          infintie: '\u29DD',
          inodot: '\u0131',
          intcal: '\u22BA',
          int: '\u222B',
          Int: '\u222C',
          integers: '\u2124',
          Integral: '\u222B',
          intercal: '\u22BA',
          Intersection: '\u22C2',
          intlarhk: '\u2A17',
          intprod: '\u2A3C',
          InvisibleComma: '\u2063',
          InvisibleTimes: '\u2062',
          IOcy: '\u0401',
          iocy: '\u0451',
          Iogon: '\u012E',
          iogon: '\u012F',
          Iopf: '\u{1D540}',
          iopf: '\u{1D55A}',
          Iota: '\u0399',
          iota: '\u03B9',
          iprod: '\u2A3C',
          iquest: '\xBF',
          iscr: '\u{1D4BE}',
          Iscr: '\u2110',
          isin: '\u2208',
          isindot: '\u22F5',
          isinE: '\u22F9',
          isins: '\u22F4',
          isinsv: '\u22F3',
          isinv: '\u2208',
          it: '\u2062',
          Itilde: '\u0128',
          itilde: '\u0129',
          Iukcy: '\u0406',
          iukcy: '\u0456',
          Iuml: '\xCF',
          iuml: '\xEF',
          Jcirc: '\u0134',
          jcirc: '\u0135',
          Jcy: '\u0419',
          jcy: '\u0439',
          Jfr: '\u{1D50D}',
          jfr: '\u{1D527}',
          jmath: '\u0237',
          Jopf: '\u{1D541}',
          jopf: '\u{1D55B}',
          Jscr: '\u{1D4A5}',
          jscr: '\u{1D4BF}',
          Jsercy: '\u0408',
          jsercy: '\u0458',
          Jukcy: '\u0404',
          jukcy: '\u0454',
          Kappa: '\u039A',
          kappa: '\u03BA',
          kappav: '\u03F0',
          Kcedil: '\u0136',
          kcedil: '\u0137',
          Kcy: '\u041A',
          kcy: '\u043A',
          Kfr: '\u{1D50E}',
          kfr: '\u{1D528}',
          kgreen: '\u0138',
          KHcy: '\u0425',
          khcy: '\u0445',
          KJcy: '\u040C',
          kjcy: '\u045C',
          Kopf: '\u{1D542}',
          kopf: '\u{1D55C}',
          Kscr: '\u{1D4A6}',
          kscr: '\u{1D4C0}',
          lAarr: '\u21DA',
          Lacute: '\u0139',
          lacute: '\u013A',
          laemptyv: '\u29B4',
          lagran: '\u2112',
          Lambda: '\u039B',
          lambda: '\u03BB',
          lang: '\u27E8',
          Lang: '\u27EA',
          langd: '\u2991',
          langle: '\u27E8',
          lap: '\u2A85',
          Laplacetrf: '\u2112',
          laquo: '\xAB',
          larrb: '\u21E4',
          larrbfs: '\u291F',
          larr: '\u2190',
          Larr: '\u219E',
          lArr: '\u21D0',
          larrfs: '\u291D',
          larrhk: '\u21A9',
          larrlp: '\u21AB',
          larrpl: '\u2939',
          larrsim: '\u2973',
          larrtl: '\u21A2',
          latail: '\u2919',
          lAtail: '\u291B',
          lat: '\u2AAB',
          late: '\u2AAD',
          lates: '\u2AAD\uFE00',
          lbarr: '\u290C',
          lBarr: '\u290E',
          lbbrk: '\u2772',
          lbrace: '{',
          lbrack: '[',
          lbrke: '\u298B',
          lbrksld: '\u298F',
          lbrkslu: '\u298D',
          Lcaron: '\u013D',
          lcaron: '\u013E',
          Lcedil: '\u013B',
          lcedil: '\u013C',
          lceil: '\u2308',
          lcub: '{',
          Lcy: '\u041B',
          lcy: '\u043B',
          ldca: '\u2936',
          ldquo: '\u201C',
          ldquor: '\u201E',
          ldrdhar: '\u2967',
          ldrushar: '\u294B',
          ldsh: '\u21B2',
          le: '\u2264',
          lE: '\u2266',
          LeftAngleBracket: '\u27E8',
          LeftArrowBar: '\u21E4',
          leftarrow: '\u2190',
          LeftArrow: '\u2190',
          Leftarrow: '\u21D0',
          LeftArrowRightArrow: '\u21C6',
          leftarrowtail: '\u21A2',
          LeftCeiling: '\u2308',
          LeftDoubleBracket: '\u27E6',
          LeftDownTeeVector: '\u2961',
          LeftDownVectorBar: '\u2959',
          LeftDownVector: '\u21C3',
          LeftFloor: '\u230A',
          leftharpoondown: '\u21BD',
          leftharpoonup: '\u21BC',
          leftleftarrows: '\u21C7',
          leftrightarrow: '\u2194',
          LeftRightArrow: '\u2194',
          Leftrightarrow: '\u21D4',
          leftrightarrows: '\u21C6',
          leftrightharpoons: '\u21CB',
          leftrightsquigarrow: '\u21AD',
          LeftRightVector: '\u294E',
          LeftTeeArrow: '\u21A4',
          LeftTee: '\u22A3',
          LeftTeeVector: '\u295A',
          leftthreetimes: '\u22CB',
          LeftTriangleBar: '\u29CF',
          LeftTriangle: '\u22B2',
          LeftTriangleEqual: '\u22B4',
          LeftUpDownVector: '\u2951',
          LeftUpTeeVector: '\u2960',
          LeftUpVectorBar: '\u2958',
          LeftUpVector: '\u21BF',
          LeftVectorBar: '\u2952',
          LeftVector: '\u21BC',
          lEg: '\u2A8B',
          leg: '\u22DA',
          leq: '\u2264',
          leqq: '\u2266',
          leqslant: '\u2A7D',
          lescc: '\u2AA8',
          les: '\u2A7D',
          lesdot: '\u2A7F',
          lesdoto: '\u2A81',
          lesdotor: '\u2A83',
          lesg: '\u22DA\uFE00',
          lesges: '\u2A93',
          lessapprox: '\u2A85',
          lessdot: '\u22D6',
          lesseqgtr: '\u22DA',
          lesseqqgtr: '\u2A8B',
          LessEqualGreater: '\u22DA',
          LessFullEqual: '\u2266',
          LessGreater: '\u2276',
          lessgtr: '\u2276',
          LessLess: '\u2AA1',
          lesssim: '\u2272',
          LessSlantEqual: '\u2A7D',
          LessTilde: '\u2272',
          lfisht: '\u297C',
          lfloor: '\u230A',
          Lfr: '\u{1D50F}',
          lfr: '\u{1D529}',
          lg: '\u2276',
          lgE: '\u2A91',
          lHar: '\u2962',
          lhard: '\u21BD',
          lharu: '\u21BC',
          lharul: '\u296A',
          lhblk: '\u2584',
          LJcy: '\u0409',
          ljcy: '\u0459',
          llarr: '\u21C7',
          ll: '\u226A',
          Ll: '\u22D8',
          llcorner: '\u231E',
          Lleftarrow: '\u21DA',
          llhard: '\u296B',
          lltri: '\u25FA',
          Lmidot: '\u013F',
          lmidot: '\u0140',
          lmoustache: '\u23B0',
          lmoust: '\u23B0',
          lnap: '\u2A89',
          lnapprox: '\u2A89',
          lne: '\u2A87',
          lnE: '\u2268',
          lneq: '\u2A87',
          lneqq: '\u2268',
          lnsim: '\u22E6',
          loang: '\u27EC',
          loarr: '\u21FD',
          lobrk: '\u27E6',
          longleftarrow: '\u27F5',
          LongLeftArrow: '\u27F5',
          Longleftarrow: '\u27F8',
          longleftrightarrow: '\u27F7',
          LongLeftRightArrow: '\u27F7',
          Longleftrightarrow: '\u27FA',
          longmapsto: '\u27FC',
          longrightarrow: '\u27F6',
          LongRightArrow: '\u27F6',
          Longrightarrow: '\u27F9',
          looparrowleft: '\u21AB',
          looparrowright: '\u21AC',
          lopar: '\u2985',
          Lopf: '\u{1D543}',
          lopf: '\u{1D55D}',
          loplus: '\u2A2D',
          lotimes: '\u2A34',
          lowast: '\u2217',
          lowbar: '_',
          LowerLeftArrow: '\u2199',
          LowerRightArrow: '\u2198',
          loz: '\u25CA',
          lozenge: '\u25CA',
          lozf: '\u29EB',
          lpar: '(',
          lparlt: '\u2993',
          lrarr: '\u21C6',
          lrcorner: '\u231F',
          lrhar: '\u21CB',
          lrhard: '\u296D',
          lrm: '\u200E',
          lrtri: '\u22BF',
          lsaquo: '\u2039',
          lscr: '\u{1D4C1}',
          Lscr: '\u2112',
          lsh: '\u21B0',
          Lsh: '\u21B0',
          lsim: '\u2272',
          lsime: '\u2A8D',
          lsimg: '\u2A8F',
          lsqb: '[',
          lsquo: '\u2018',
          lsquor: '\u201A',
          Lstrok: '\u0141',
          lstrok: '\u0142',
          ltcc: '\u2AA6',
          ltcir: '\u2A79',
          lt: '<',
          LT: '<',
          Lt: '\u226A',
          ltdot: '\u22D6',
          lthree: '\u22CB',
          ltimes: '\u22C9',
          ltlarr: '\u2976',
          ltquest: '\u2A7B',
          ltri: '\u25C3',
          ltrie: '\u22B4',
          ltrif: '\u25C2',
          ltrPar: '\u2996',
          lurdshar: '\u294A',
          luruhar: '\u2966',
          lvertneqq: '\u2268\uFE00',
          lvnE: '\u2268\uFE00',
          macr: '\xAF',
          male: '\u2642',
          malt: '\u2720',
          maltese: '\u2720',
          Map: '\u2905',
          map: '\u21A6',
          mapsto: '\u21A6',
          mapstodown: '\u21A7',
          mapstoleft: '\u21A4',
          mapstoup: '\u21A5',
          marker: '\u25AE',
          mcomma: '\u2A29',
          Mcy: '\u041C',
          mcy: '\u043C',
          mdash: '\u2014',
          mDDot: '\u223A',
          measuredangle: '\u2221',
          MediumSpace: '\u205F',
          Mellintrf: '\u2133',
          Mfr: '\u{1D510}',
          mfr: '\u{1D52A}',
          mho: '\u2127',
          micro: '\xB5',
          midast: '*',
          midcir: '\u2AF0',
          mid: '\u2223',
          middot: '\xB7',
          minusb: '\u229F',
          minus: '\u2212',
          minusd: '\u2238',
          minusdu: '\u2A2A',
          MinusPlus: '\u2213',
          mlcp: '\u2ADB',
          mldr: '\u2026',
          mnplus: '\u2213',
          models: '\u22A7',
          Mopf: '\u{1D544}',
          mopf: '\u{1D55E}',
          mp: '\u2213',
          mscr: '\u{1D4C2}',
          Mscr: '\u2133',
          mstpos: '\u223E',
          Mu: '\u039C',
          mu: '\u03BC',
          multimap: '\u22B8',
          mumap: '\u22B8',
          nabla: '\u2207',
          Nacute: '\u0143',
          nacute: '\u0144',
          nang: '\u2220\u20D2',
          nap: '\u2249',
          napE: '\u2A70\u0338',
          napid: '\u224B\u0338',
          napos: '\u0149',
          napprox: '\u2249',
          natural: '\u266E',
          naturals: '\u2115',
          natur: '\u266E',
          nbsp: '\xA0',
          nbump: '\u224E\u0338',
          nbumpe: '\u224F\u0338',
          ncap: '\u2A43',
          Ncaron: '\u0147',
          ncaron: '\u0148',
          Ncedil: '\u0145',
          ncedil: '\u0146',
          ncong: '\u2247',
          ncongdot: '\u2A6D\u0338',
          ncup: '\u2A42',
          Ncy: '\u041D',
          ncy: '\u043D',
          ndash: '\u2013',
          nearhk: '\u2924',
          nearr: '\u2197',
          neArr: '\u21D7',
          nearrow: '\u2197',
          ne: '\u2260',
          nedot: '\u2250\u0338',
          NegativeMediumSpace: '\u200B',
          NegativeThickSpace: '\u200B',
          NegativeThinSpace: '\u200B',
          NegativeVeryThinSpace: '\u200B',
          nequiv: '\u2262',
          nesear: '\u2928',
          nesim: '\u2242\u0338',
          NestedGreaterGreater: '\u226B',
          NestedLessLess: '\u226A',
          NewLine: `
`,
          nexist: '\u2204',
          nexists: '\u2204',
          Nfr: '\u{1D511}',
          nfr: '\u{1D52B}',
          ngE: '\u2267\u0338',
          nge: '\u2271',
          ngeq: '\u2271',
          ngeqq: '\u2267\u0338',
          ngeqslant: '\u2A7E\u0338',
          nges: '\u2A7E\u0338',
          nGg: '\u22D9\u0338',
          ngsim: '\u2275',
          nGt: '\u226B\u20D2',
          ngt: '\u226F',
          ngtr: '\u226F',
          nGtv: '\u226B\u0338',
          nharr: '\u21AE',
          nhArr: '\u21CE',
          nhpar: '\u2AF2',
          ni: '\u220B',
          nis: '\u22FC',
          nisd: '\u22FA',
          niv: '\u220B',
          NJcy: '\u040A',
          njcy: '\u045A',
          nlarr: '\u219A',
          nlArr: '\u21CD',
          nldr: '\u2025',
          nlE: '\u2266\u0338',
          nle: '\u2270',
          nleftarrow: '\u219A',
          nLeftarrow: '\u21CD',
          nleftrightarrow: '\u21AE',
          nLeftrightarrow: '\u21CE',
          nleq: '\u2270',
          nleqq: '\u2266\u0338',
          nleqslant: '\u2A7D\u0338',
          nles: '\u2A7D\u0338',
          nless: '\u226E',
          nLl: '\u22D8\u0338',
          nlsim: '\u2274',
          nLt: '\u226A\u20D2',
          nlt: '\u226E',
          nltri: '\u22EA',
          nltrie: '\u22EC',
          nLtv: '\u226A\u0338',
          nmid: '\u2224',
          NoBreak: '\u2060',
          NonBreakingSpace: '\xA0',
          nopf: '\u{1D55F}',
          Nopf: '\u2115',
          Not: '\u2AEC',
          not: '\xAC',
          NotCongruent: '\u2262',
          NotCupCap: '\u226D',
          NotDoubleVerticalBar: '\u2226',
          NotElement: '\u2209',
          NotEqual: '\u2260',
          NotEqualTilde: '\u2242\u0338',
          NotExists: '\u2204',
          NotGreater: '\u226F',
          NotGreaterEqual: '\u2271',
          NotGreaterFullEqual: '\u2267\u0338',
          NotGreaterGreater: '\u226B\u0338',
          NotGreaterLess: '\u2279',
          NotGreaterSlantEqual: '\u2A7E\u0338',
          NotGreaterTilde: '\u2275',
          NotHumpDownHump: '\u224E\u0338',
          NotHumpEqual: '\u224F\u0338',
          notin: '\u2209',
          notindot: '\u22F5\u0338',
          notinE: '\u22F9\u0338',
          notinva: '\u2209',
          notinvb: '\u22F7',
          notinvc: '\u22F6',
          NotLeftTriangleBar: '\u29CF\u0338',
          NotLeftTriangle: '\u22EA',
          NotLeftTriangleEqual: '\u22EC',
          NotLess: '\u226E',
          NotLessEqual: '\u2270',
          NotLessGreater: '\u2278',
          NotLessLess: '\u226A\u0338',
          NotLessSlantEqual: '\u2A7D\u0338',
          NotLessTilde: '\u2274',
          NotNestedGreaterGreater: '\u2AA2\u0338',
          NotNestedLessLess: '\u2AA1\u0338',
          notni: '\u220C',
          notniva: '\u220C',
          notnivb: '\u22FE',
          notnivc: '\u22FD',
          NotPrecedes: '\u2280',
          NotPrecedesEqual: '\u2AAF\u0338',
          NotPrecedesSlantEqual: '\u22E0',
          NotReverseElement: '\u220C',
          NotRightTriangleBar: '\u29D0\u0338',
          NotRightTriangle: '\u22EB',
          NotRightTriangleEqual: '\u22ED',
          NotSquareSubset: '\u228F\u0338',
          NotSquareSubsetEqual: '\u22E2',
          NotSquareSuperset: '\u2290\u0338',
          NotSquareSupersetEqual: '\u22E3',
          NotSubset: '\u2282\u20D2',
          NotSubsetEqual: '\u2288',
          NotSucceeds: '\u2281',
          NotSucceedsEqual: '\u2AB0\u0338',
          NotSucceedsSlantEqual: '\u22E1',
          NotSucceedsTilde: '\u227F\u0338',
          NotSuperset: '\u2283\u20D2',
          NotSupersetEqual: '\u2289',
          NotTilde: '\u2241',
          NotTildeEqual: '\u2244',
          NotTildeFullEqual: '\u2247',
          NotTildeTilde: '\u2249',
          NotVerticalBar: '\u2224',
          nparallel: '\u2226',
          npar: '\u2226',
          nparsl: '\u2AFD\u20E5',
          npart: '\u2202\u0338',
          npolint: '\u2A14',
          npr: '\u2280',
          nprcue: '\u22E0',
          nprec: '\u2280',
          npreceq: '\u2AAF\u0338',
          npre: '\u2AAF\u0338',
          nrarrc: '\u2933\u0338',
          nrarr: '\u219B',
          nrArr: '\u21CF',
          nrarrw: '\u219D\u0338',
          nrightarrow: '\u219B',
          nRightarrow: '\u21CF',
          nrtri: '\u22EB',
          nrtrie: '\u22ED',
          nsc: '\u2281',
          nsccue: '\u22E1',
          nsce: '\u2AB0\u0338',
          Nscr: '\u{1D4A9}',
          nscr: '\u{1D4C3}',
          nshortmid: '\u2224',
          nshortparallel: '\u2226',
          nsim: '\u2241',
          nsime: '\u2244',
          nsimeq: '\u2244',
          nsmid: '\u2224',
          nspar: '\u2226',
          nsqsube: '\u22E2',
          nsqsupe: '\u22E3',
          nsub: '\u2284',
          nsubE: '\u2AC5\u0338',
          nsube: '\u2288',
          nsubset: '\u2282\u20D2',
          nsubseteq: '\u2288',
          nsubseteqq: '\u2AC5\u0338',
          nsucc: '\u2281',
          nsucceq: '\u2AB0\u0338',
          nsup: '\u2285',
          nsupE: '\u2AC6\u0338',
          nsupe: '\u2289',
          nsupset: '\u2283\u20D2',
          nsupseteq: '\u2289',
          nsupseteqq: '\u2AC6\u0338',
          ntgl: '\u2279',
          Ntilde: '\xD1',
          ntilde: '\xF1',
          ntlg: '\u2278',
          ntriangleleft: '\u22EA',
          ntrianglelefteq: '\u22EC',
          ntriangleright: '\u22EB',
          ntrianglerighteq: '\u22ED',
          Nu: '\u039D',
          nu: '\u03BD',
          num: '#',
          numero: '\u2116',
          numsp: '\u2007',
          nvap: '\u224D\u20D2',
          nvdash: '\u22AC',
          nvDash: '\u22AD',
          nVdash: '\u22AE',
          nVDash: '\u22AF',
          nvge: '\u2265\u20D2',
          nvgt: '>\u20D2',
          nvHarr: '\u2904',
          nvinfin: '\u29DE',
          nvlArr: '\u2902',
          nvle: '\u2264\u20D2',
          nvlt: '<\u20D2',
          nvltrie: '\u22B4\u20D2',
          nvrArr: '\u2903',
          nvrtrie: '\u22B5\u20D2',
          nvsim: '\u223C\u20D2',
          nwarhk: '\u2923',
          nwarr: '\u2196',
          nwArr: '\u21D6',
          nwarrow: '\u2196',
          nwnear: '\u2927',
          Oacute: '\xD3',
          oacute: '\xF3',
          oast: '\u229B',
          Ocirc: '\xD4',
          ocirc: '\xF4',
          ocir: '\u229A',
          Ocy: '\u041E',
          ocy: '\u043E',
          odash: '\u229D',
          Odblac: '\u0150',
          odblac: '\u0151',
          odiv: '\u2A38',
          odot: '\u2299',
          odsold: '\u29BC',
          OElig: '\u0152',
          oelig: '\u0153',
          ofcir: '\u29BF',
          Ofr: '\u{1D512}',
          ofr: '\u{1D52C}',
          ogon: '\u02DB',
          Ograve: '\xD2',
          ograve: '\xF2',
          ogt: '\u29C1',
          ohbar: '\u29B5',
          ohm: '\u03A9',
          oint: '\u222E',
          olarr: '\u21BA',
          olcir: '\u29BE',
          olcross: '\u29BB',
          oline: '\u203E',
          olt: '\u29C0',
          Omacr: '\u014C',
          omacr: '\u014D',
          Omega: '\u03A9',
          omega: '\u03C9',
          Omicron: '\u039F',
          omicron: '\u03BF',
          omid: '\u29B6',
          ominus: '\u2296',
          Oopf: '\u{1D546}',
          oopf: '\u{1D560}',
          opar: '\u29B7',
          OpenCurlyDoubleQuote: '\u201C',
          OpenCurlyQuote: '\u2018',
          operp: '\u29B9',
          oplus: '\u2295',
          orarr: '\u21BB',
          Or: '\u2A54',
          or: '\u2228',
          ord: '\u2A5D',
          order: '\u2134',
          orderof: '\u2134',
          ordf: '\xAA',
          ordm: '\xBA',
          origof: '\u22B6',
          oror: '\u2A56',
          orslope: '\u2A57',
          orv: '\u2A5B',
          oS: '\u24C8',
          Oscr: '\u{1D4AA}',
          oscr: '\u2134',
          Oslash: '\xD8',
          oslash: '\xF8',
          osol: '\u2298',
          Otilde: '\xD5',
          otilde: '\xF5',
          otimesas: '\u2A36',
          Otimes: '\u2A37',
          otimes: '\u2297',
          Ouml: '\xD6',
          ouml: '\xF6',
          ovbar: '\u233D',
          OverBar: '\u203E',
          OverBrace: '\u23DE',
          OverBracket: '\u23B4',
          OverParenthesis: '\u23DC',
          para: '\xB6',
          parallel: '\u2225',
          par: '\u2225',
          parsim: '\u2AF3',
          parsl: '\u2AFD',
          part: '\u2202',
          PartialD: '\u2202',
          Pcy: '\u041F',
          pcy: '\u043F',
          percnt: '%',
          period: '.',
          permil: '\u2030',
          perp: '\u22A5',
          pertenk: '\u2031',
          Pfr: '\u{1D513}',
          pfr: '\u{1D52D}',
          Phi: '\u03A6',
          phi: '\u03C6',
          phiv: '\u03D5',
          phmmat: '\u2133',
          phone: '\u260E',
          Pi: '\u03A0',
          pi: '\u03C0',
          pitchfork: '\u22D4',
          piv: '\u03D6',
          planck: '\u210F',
          planckh: '\u210E',
          plankv: '\u210F',
          plusacir: '\u2A23',
          plusb: '\u229E',
          pluscir: '\u2A22',
          plus: '+',
          plusdo: '\u2214',
          plusdu: '\u2A25',
          pluse: '\u2A72',
          PlusMinus: '\xB1',
          plusmn: '\xB1',
          plussim: '\u2A26',
          plustwo: '\u2A27',
          pm: '\xB1',
          Poincareplane: '\u210C',
          pointint: '\u2A15',
          popf: '\u{1D561}',
          Popf: '\u2119',
          pound: '\xA3',
          prap: '\u2AB7',
          Pr: '\u2ABB',
          pr: '\u227A',
          prcue: '\u227C',
          precapprox: '\u2AB7',
          prec: '\u227A',
          preccurlyeq: '\u227C',
          Precedes: '\u227A',
          PrecedesEqual: '\u2AAF',
          PrecedesSlantEqual: '\u227C',
          PrecedesTilde: '\u227E',
          preceq: '\u2AAF',
          precnapprox: '\u2AB9',
          precneqq: '\u2AB5',
          precnsim: '\u22E8',
          pre: '\u2AAF',
          prE: '\u2AB3',
          precsim: '\u227E',
          prime: '\u2032',
          Prime: '\u2033',
          primes: '\u2119',
          prnap: '\u2AB9',
          prnE: '\u2AB5',
          prnsim: '\u22E8',
          prod: '\u220F',
          Product: '\u220F',
          profalar: '\u232E',
          profline: '\u2312',
          profsurf: '\u2313',
          prop: '\u221D',
          Proportional: '\u221D',
          Proportion: '\u2237',
          propto: '\u221D',
          prsim: '\u227E',
          prurel: '\u22B0',
          Pscr: '\u{1D4AB}',
          pscr: '\u{1D4C5}',
          Psi: '\u03A8',
          psi: '\u03C8',
          puncsp: '\u2008',
          Qfr: '\u{1D514}',
          qfr: '\u{1D52E}',
          qint: '\u2A0C',
          qopf: '\u{1D562}',
          Qopf: '\u211A',
          qprime: '\u2057',
          Qscr: '\u{1D4AC}',
          qscr: '\u{1D4C6}',
          quaternions: '\u210D',
          quatint: '\u2A16',
          quest: '?',
          questeq: '\u225F',
          quot: '"',
          QUOT: '"',
          rAarr: '\u21DB',
          race: '\u223D\u0331',
          Racute: '\u0154',
          racute: '\u0155',
          radic: '\u221A',
          raemptyv: '\u29B3',
          rang: '\u27E9',
          Rang: '\u27EB',
          rangd: '\u2992',
          range: '\u29A5',
          rangle: '\u27E9',
          raquo: '\xBB',
          rarrap: '\u2975',
          rarrb: '\u21E5',
          rarrbfs: '\u2920',
          rarrc: '\u2933',
          rarr: '\u2192',
          Rarr: '\u21A0',
          rArr: '\u21D2',
          rarrfs: '\u291E',
          rarrhk: '\u21AA',
          rarrlp: '\u21AC',
          rarrpl: '\u2945',
          rarrsim: '\u2974',
          Rarrtl: '\u2916',
          rarrtl: '\u21A3',
          rarrw: '\u219D',
          ratail: '\u291A',
          rAtail: '\u291C',
          ratio: '\u2236',
          rationals: '\u211A',
          rbarr: '\u290D',
          rBarr: '\u290F',
          RBarr: '\u2910',
          rbbrk: '\u2773',
          rbrace: '}',
          rbrack: ']',
          rbrke: '\u298C',
          rbrksld: '\u298E',
          rbrkslu: '\u2990',
          Rcaron: '\u0158',
          rcaron: '\u0159',
          Rcedil: '\u0156',
          rcedil: '\u0157',
          rceil: '\u2309',
          rcub: '}',
          Rcy: '\u0420',
          rcy: '\u0440',
          rdca: '\u2937',
          rdldhar: '\u2969',
          rdquo: '\u201D',
          rdquor: '\u201D',
          rdsh: '\u21B3',
          real: '\u211C',
          realine: '\u211B',
          realpart: '\u211C',
          reals: '\u211D',
          Re: '\u211C',
          rect: '\u25AD',
          reg: '\xAE',
          REG: '\xAE',
          ReverseElement: '\u220B',
          ReverseEquilibrium: '\u21CB',
          ReverseUpEquilibrium: '\u296F',
          rfisht: '\u297D',
          rfloor: '\u230B',
          rfr: '\u{1D52F}',
          Rfr: '\u211C',
          rHar: '\u2964',
          rhard: '\u21C1',
          rharu: '\u21C0',
          rharul: '\u296C',
          Rho: '\u03A1',
          rho: '\u03C1',
          rhov: '\u03F1',
          RightAngleBracket: '\u27E9',
          RightArrowBar: '\u21E5',
          rightarrow: '\u2192',
          RightArrow: '\u2192',
          Rightarrow: '\u21D2',
          RightArrowLeftArrow: '\u21C4',
          rightarrowtail: '\u21A3',
          RightCeiling: '\u2309',
          RightDoubleBracket: '\u27E7',
          RightDownTeeVector: '\u295D',
          RightDownVectorBar: '\u2955',
          RightDownVector: '\u21C2',
          RightFloor: '\u230B',
          rightharpoondown: '\u21C1',
          rightharpoonup: '\u21C0',
          rightleftarrows: '\u21C4',
          rightleftharpoons: '\u21CC',
          rightrightarrows: '\u21C9',
          rightsquigarrow: '\u219D',
          RightTeeArrow: '\u21A6',
          RightTee: '\u22A2',
          RightTeeVector: '\u295B',
          rightthreetimes: '\u22CC',
          RightTriangleBar: '\u29D0',
          RightTriangle: '\u22B3',
          RightTriangleEqual: '\u22B5',
          RightUpDownVector: '\u294F',
          RightUpTeeVector: '\u295C',
          RightUpVectorBar: '\u2954',
          RightUpVector: '\u21BE',
          RightVectorBar: '\u2953',
          RightVector: '\u21C0',
          ring: '\u02DA',
          risingdotseq: '\u2253',
          rlarr: '\u21C4',
          rlhar: '\u21CC',
          rlm: '\u200F',
          rmoustache: '\u23B1',
          rmoust: '\u23B1',
          rnmid: '\u2AEE',
          roang: '\u27ED',
          roarr: '\u21FE',
          robrk: '\u27E7',
          ropar: '\u2986',
          ropf: '\u{1D563}',
          Ropf: '\u211D',
          roplus: '\u2A2E',
          rotimes: '\u2A35',
          RoundImplies: '\u2970',
          rpar: ')',
          rpargt: '\u2994',
          rppolint: '\u2A12',
          rrarr: '\u21C9',
          Rrightarrow: '\u21DB',
          rsaquo: '\u203A',
          rscr: '\u{1D4C7}',
          Rscr: '\u211B',
          rsh: '\u21B1',
          Rsh: '\u21B1',
          rsqb: ']',
          rsquo: '\u2019',
          rsquor: '\u2019',
          rthree: '\u22CC',
          rtimes: '\u22CA',
          rtri: '\u25B9',
          rtrie: '\u22B5',
          rtrif: '\u25B8',
          rtriltri: '\u29CE',
          RuleDelayed: '\u29F4',
          ruluhar: '\u2968',
          rx: '\u211E',
          Sacute: '\u015A',
          sacute: '\u015B',
          sbquo: '\u201A',
          scap: '\u2AB8',
          Scaron: '\u0160',
          scaron: '\u0161',
          Sc: '\u2ABC',
          sc: '\u227B',
          sccue: '\u227D',
          sce: '\u2AB0',
          scE: '\u2AB4',
          Scedil: '\u015E',
          scedil: '\u015F',
          Scirc: '\u015C',
          scirc: '\u015D',
          scnap: '\u2ABA',
          scnE: '\u2AB6',
          scnsim: '\u22E9',
          scpolint: '\u2A13',
          scsim: '\u227F',
          Scy: '\u0421',
          scy: '\u0441',
          sdotb: '\u22A1',
          sdot: '\u22C5',
          sdote: '\u2A66',
          searhk: '\u2925',
          searr: '\u2198',
          seArr: '\u21D8',
          searrow: '\u2198',
          sect: '\xA7',
          semi: ';',
          seswar: '\u2929',
          setminus: '\u2216',
          setmn: '\u2216',
          sext: '\u2736',
          Sfr: '\u{1D516}',
          sfr: '\u{1D530}',
          sfrown: '\u2322',
          sharp: '\u266F',
          SHCHcy: '\u0429',
          shchcy: '\u0449',
          SHcy: '\u0428',
          shcy: '\u0448',
          ShortDownArrow: '\u2193',
          ShortLeftArrow: '\u2190',
          shortmid: '\u2223',
          shortparallel: '\u2225',
          ShortRightArrow: '\u2192',
          ShortUpArrow: '\u2191',
          shy: '\xAD',
          Sigma: '\u03A3',
          sigma: '\u03C3',
          sigmaf: '\u03C2',
          sigmav: '\u03C2',
          sim: '\u223C',
          simdot: '\u2A6A',
          sime: '\u2243',
          simeq: '\u2243',
          simg: '\u2A9E',
          simgE: '\u2AA0',
          siml: '\u2A9D',
          simlE: '\u2A9F',
          simne: '\u2246',
          simplus: '\u2A24',
          simrarr: '\u2972',
          slarr: '\u2190',
          SmallCircle: '\u2218',
          smallsetminus: '\u2216',
          smashp: '\u2A33',
          smeparsl: '\u29E4',
          smid: '\u2223',
          smile: '\u2323',
          smt: '\u2AAA',
          smte: '\u2AAC',
          smtes: '\u2AAC\uFE00',
          SOFTcy: '\u042C',
          softcy: '\u044C',
          solbar: '\u233F',
          solb: '\u29C4',
          sol: '/',
          Sopf: '\u{1D54A}',
          sopf: '\u{1D564}',
          spades: '\u2660',
          spadesuit: '\u2660',
          spar: '\u2225',
          sqcap: '\u2293',
          sqcaps: '\u2293\uFE00',
          sqcup: '\u2294',
          sqcups: '\u2294\uFE00',
          Sqrt: '\u221A',
          sqsub: '\u228F',
          sqsube: '\u2291',
          sqsubset: '\u228F',
          sqsubseteq: '\u2291',
          sqsup: '\u2290',
          sqsupe: '\u2292',
          sqsupset: '\u2290',
          sqsupseteq: '\u2292',
          square: '\u25A1',
          Square: '\u25A1',
          SquareIntersection: '\u2293',
          SquareSubset: '\u228F',
          SquareSubsetEqual: '\u2291',
          SquareSuperset: '\u2290',
          SquareSupersetEqual: '\u2292',
          SquareUnion: '\u2294',
          squarf: '\u25AA',
          squ: '\u25A1',
          squf: '\u25AA',
          srarr: '\u2192',
          Sscr: '\u{1D4AE}',
          sscr: '\u{1D4C8}',
          ssetmn: '\u2216',
          ssmile: '\u2323',
          sstarf: '\u22C6',
          Star: '\u22C6',
          star: '\u2606',
          starf: '\u2605',
          straightepsilon: '\u03F5',
          straightphi: '\u03D5',
          strns: '\xAF',
          sub: '\u2282',
          Sub: '\u22D0',
          subdot: '\u2ABD',
          subE: '\u2AC5',
          sube: '\u2286',
          subedot: '\u2AC3',
          submult: '\u2AC1',
          subnE: '\u2ACB',
          subne: '\u228A',
          subplus: '\u2ABF',
          subrarr: '\u2979',
          subset: '\u2282',
          Subset: '\u22D0',
          subseteq: '\u2286',
          subseteqq: '\u2AC5',
          SubsetEqual: '\u2286',
          subsetneq: '\u228A',
          subsetneqq: '\u2ACB',
          subsim: '\u2AC7',
          subsub: '\u2AD5',
          subsup: '\u2AD3',
          succapprox: '\u2AB8',
          succ: '\u227B',
          succcurlyeq: '\u227D',
          Succeeds: '\u227B',
          SucceedsEqual: '\u2AB0',
          SucceedsSlantEqual: '\u227D',
          SucceedsTilde: '\u227F',
          succeq: '\u2AB0',
          succnapprox: '\u2ABA',
          succneqq: '\u2AB6',
          succnsim: '\u22E9',
          succsim: '\u227F',
          SuchThat: '\u220B',
          sum: '\u2211',
          Sum: '\u2211',
          sung: '\u266A',
          sup1: '\xB9',
          sup2: '\xB2',
          sup3: '\xB3',
          sup: '\u2283',
          Sup: '\u22D1',
          supdot: '\u2ABE',
          supdsub: '\u2AD8',
          supE: '\u2AC6',
          supe: '\u2287',
          supedot: '\u2AC4',
          Superset: '\u2283',
          SupersetEqual: '\u2287',
          suphsol: '\u27C9',
          suphsub: '\u2AD7',
          suplarr: '\u297B',
          supmult: '\u2AC2',
          supnE: '\u2ACC',
          supne: '\u228B',
          supplus: '\u2AC0',
          supset: '\u2283',
          Supset: '\u22D1',
          supseteq: '\u2287',
          supseteqq: '\u2AC6',
          supsetneq: '\u228B',
          supsetneqq: '\u2ACC',
          supsim: '\u2AC8',
          supsub: '\u2AD4',
          supsup: '\u2AD6',
          swarhk: '\u2926',
          swarr: '\u2199',
          swArr: '\u21D9',
          swarrow: '\u2199',
          swnwar: '\u292A',
          szlig: '\xDF',
          Tab: '	',
          target: '\u2316',
          Tau: '\u03A4',
          tau: '\u03C4',
          tbrk: '\u23B4',
          Tcaron: '\u0164',
          tcaron: '\u0165',
          Tcedil: '\u0162',
          tcedil: '\u0163',
          Tcy: '\u0422',
          tcy: '\u0442',
          tdot: '\u20DB',
          telrec: '\u2315',
          Tfr: '\u{1D517}',
          tfr: '\u{1D531}',
          there4: '\u2234',
          therefore: '\u2234',
          Therefore: '\u2234',
          Theta: '\u0398',
          theta: '\u03B8',
          thetasym: '\u03D1',
          thetav: '\u03D1',
          thickapprox: '\u2248',
          thicksim: '\u223C',
          ThickSpace: '\u205F\u200A',
          ThinSpace: '\u2009',
          thinsp: '\u2009',
          thkap: '\u2248',
          thksim: '\u223C',
          THORN: '\xDE',
          thorn: '\xFE',
          tilde: '\u02DC',
          Tilde: '\u223C',
          TildeEqual: '\u2243',
          TildeFullEqual: '\u2245',
          TildeTilde: '\u2248',
          timesbar: '\u2A31',
          timesb: '\u22A0',
          times: '\xD7',
          timesd: '\u2A30',
          tint: '\u222D',
          toea: '\u2928',
          topbot: '\u2336',
          topcir: '\u2AF1',
          top: '\u22A4',
          Topf: '\u{1D54B}',
          topf: '\u{1D565}',
          topfork: '\u2ADA',
          tosa: '\u2929',
          tprime: '\u2034',
          trade: '\u2122',
          TRADE: '\u2122',
          triangle: '\u25B5',
          triangledown: '\u25BF',
          triangleleft: '\u25C3',
          trianglelefteq: '\u22B4',
          triangleq: '\u225C',
          triangleright: '\u25B9',
          trianglerighteq: '\u22B5',
          tridot: '\u25EC',
          trie: '\u225C',
          triminus: '\u2A3A',
          TripleDot: '\u20DB',
          triplus: '\u2A39',
          trisb: '\u29CD',
          tritime: '\u2A3B',
          trpezium: '\u23E2',
          Tscr: '\u{1D4AF}',
          tscr: '\u{1D4C9}',
          TScy: '\u0426',
          tscy: '\u0446',
          TSHcy: '\u040B',
          tshcy: '\u045B',
          Tstrok: '\u0166',
          tstrok: '\u0167',
          twixt: '\u226C',
          twoheadleftarrow: '\u219E',
          twoheadrightarrow: '\u21A0',
          Uacute: '\xDA',
          uacute: '\xFA',
          uarr: '\u2191',
          Uarr: '\u219F',
          uArr: '\u21D1',
          Uarrocir: '\u2949',
          Ubrcy: '\u040E',
          ubrcy: '\u045E',
          Ubreve: '\u016C',
          ubreve: '\u016D',
          Ucirc: '\xDB',
          ucirc: '\xFB',
          Ucy: '\u0423',
          ucy: '\u0443',
          udarr: '\u21C5',
          Udblac: '\u0170',
          udblac: '\u0171',
          udhar: '\u296E',
          ufisht: '\u297E',
          Ufr: '\u{1D518}',
          ufr: '\u{1D532}',
          Ugrave: '\xD9',
          ugrave: '\xF9',
          uHar: '\u2963',
          uharl: '\u21BF',
          uharr: '\u21BE',
          uhblk: '\u2580',
          ulcorn: '\u231C',
          ulcorner: '\u231C',
          ulcrop: '\u230F',
          ultri: '\u25F8',
          Umacr: '\u016A',
          umacr: '\u016B',
          uml: '\xA8',
          UnderBar: '_',
          UnderBrace: '\u23DF',
          UnderBracket: '\u23B5',
          UnderParenthesis: '\u23DD',
          Union: '\u22C3',
          UnionPlus: '\u228E',
          Uogon: '\u0172',
          uogon: '\u0173',
          Uopf: '\u{1D54C}',
          uopf: '\u{1D566}',
          UpArrowBar: '\u2912',
          uparrow: '\u2191',
          UpArrow: '\u2191',
          Uparrow: '\u21D1',
          UpArrowDownArrow: '\u21C5',
          updownarrow: '\u2195',
          UpDownArrow: '\u2195',
          Updownarrow: '\u21D5',
          UpEquilibrium: '\u296E',
          upharpoonleft: '\u21BF',
          upharpoonright: '\u21BE',
          uplus: '\u228E',
          UpperLeftArrow: '\u2196',
          UpperRightArrow: '\u2197',
          upsi: '\u03C5',
          Upsi: '\u03D2',
          upsih: '\u03D2',
          Upsilon: '\u03A5',
          upsilon: '\u03C5',
          UpTeeArrow: '\u21A5',
          UpTee: '\u22A5',
          upuparrows: '\u21C8',
          urcorn: '\u231D',
          urcorner: '\u231D',
          urcrop: '\u230E',
          Uring: '\u016E',
          uring: '\u016F',
          urtri: '\u25F9',
          Uscr: '\u{1D4B0}',
          uscr: '\u{1D4CA}',
          utdot: '\u22F0',
          Utilde: '\u0168',
          utilde: '\u0169',
          utri: '\u25B5',
          utrif: '\u25B4',
          uuarr: '\u21C8',
          Uuml: '\xDC',
          uuml: '\xFC',
          uwangle: '\u29A7',
          vangrt: '\u299C',
          varepsilon: '\u03F5',
          varkappa: '\u03F0',
          varnothing: '\u2205',
          varphi: '\u03D5',
          varpi: '\u03D6',
          varpropto: '\u221D',
          varr: '\u2195',
          vArr: '\u21D5',
          varrho: '\u03F1',
          varsigma: '\u03C2',
          varsubsetneq: '\u228A\uFE00',
          varsubsetneqq: '\u2ACB\uFE00',
          varsupsetneq: '\u228B\uFE00',
          varsupsetneqq: '\u2ACC\uFE00',
          vartheta: '\u03D1',
          vartriangleleft: '\u22B2',
          vartriangleright: '\u22B3',
          vBar: '\u2AE8',
          Vbar: '\u2AEB',
          vBarv: '\u2AE9',
          Vcy: '\u0412',
          vcy: '\u0432',
          vdash: '\u22A2',
          vDash: '\u22A8',
          Vdash: '\u22A9',
          VDash: '\u22AB',
          Vdashl: '\u2AE6',
          veebar: '\u22BB',
          vee: '\u2228',
          Vee: '\u22C1',
          veeeq: '\u225A',
          vellip: '\u22EE',
          verbar: '|',
          Verbar: '\u2016',
          vert: '|',
          Vert: '\u2016',
          VerticalBar: '\u2223',
          VerticalLine: '|',
          VerticalSeparator: '\u2758',
          VerticalTilde: '\u2240',
          VeryThinSpace: '\u200A',
          Vfr: '\u{1D519}',
          vfr: '\u{1D533}',
          vltri: '\u22B2',
          vnsub: '\u2282\u20D2',
          vnsup: '\u2283\u20D2',
          Vopf: '\u{1D54D}',
          vopf: '\u{1D567}',
          vprop: '\u221D',
          vrtri: '\u22B3',
          Vscr: '\u{1D4B1}',
          vscr: '\u{1D4CB}',
          vsubnE: '\u2ACB\uFE00',
          vsubne: '\u228A\uFE00',
          vsupnE: '\u2ACC\uFE00',
          vsupne: '\u228B\uFE00',
          Vvdash: '\u22AA',
          vzigzag: '\u299A',
          Wcirc: '\u0174',
          wcirc: '\u0175',
          wedbar: '\u2A5F',
          wedge: '\u2227',
          Wedge: '\u22C0',
          wedgeq: '\u2259',
          weierp: '\u2118',
          Wfr: '\u{1D51A}',
          wfr: '\u{1D534}',
          Wopf: '\u{1D54E}',
          wopf: '\u{1D568}',
          wp: '\u2118',
          wr: '\u2240',
          wreath: '\u2240',
          Wscr: '\u{1D4B2}',
          wscr: '\u{1D4CC}',
          xcap: '\u22C2',
          xcirc: '\u25EF',
          xcup: '\u22C3',
          xdtri: '\u25BD',
          Xfr: '\u{1D51B}',
          xfr: '\u{1D535}',
          xharr: '\u27F7',
          xhArr: '\u27FA',
          Xi: '\u039E',
          xi: '\u03BE',
          xlarr: '\u27F5',
          xlArr: '\u27F8',
          xmap: '\u27FC',
          xnis: '\u22FB',
          xodot: '\u2A00',
          Xopf: '\u{1D54F}',
          xopf: '\u{1D569}',
          xoplus: '\u2A01',
          xotime: '\u2A02',
          xrarr: '\u27F6',
          xrArr: '\u27F9',
          Xscr: '\u{1D4B3}',
          xscr: '\u{1D4CD}',
          xsqcup: '\u2A06',
          xuplus: '\u2A04',
          xutri: '\u25B3',
          xvee: '\u22C1',
          xwedge: '\u22C0',
          Yacute: '\xDD',
          yacute: '\xFD',
          YAcy: '\u042F',
          yacy: '\u044F',
          Ycirc: '\u0176',
          ycirc: '\u0177',
          Ycy: '\u042B',
          ycy: '\u044B',
          yen: '\xA5',
          Yfr: '\u{1D51C}',
          yfr: '\u{1D536}',
          YIcy: '\u0407',
          yicy: '\u0457',
          Yopf: '\u{1D550}',
          yopf: '\u{1D56A}',
          Yscr: '\u{1D4B4}',
          yscr: '\u{1D4CE}',
          YUcy: '\u042E',
          yucy: '\u044E',
          yuml: '\xFF',
          Yuml: '\u0178',
          Zacute: '\u0179',
          zacute: '\u017A',
          Zcaron: '\u017D',
          zcaron: '\u017E',
          Zcy: '\u0417',
          zcy: '\u0437',
          Zdot: '\u017B',
          zdot: '\u017C',
          zeetrf: '\u2128',
          ZeroWidthSpace: '\u200B',
          Zeta: '\u0396',
          zeta: '\u03B6',
          zfr: '\u{1D537}',
          Zfr: '\u2128',
          ZHcy: '\u0416',
          zhcy: '\u0436',
          zigrarr: '\u21DD',
          zopf: '\u{1D56B}',
          Zopf: '\u2124',
          Zscr: '\u{1D4B5}',
          zscr: '\u{1D4CF}',
          zwj: '\u200D',
          zwnj: '\u200C',
        };
      },
    }),
    z8 = Ge({
      '../../node_modules/entities/lib/maps/legacy.json'(e, t) {
        t.exports = {
          Aacute: '\xC1',
          aacute: '\xE1',
          Acirc: '\xC2',
          acirc: '\xE2',
          acute: '\xB4',
          AElig: '\xC6',
          aelig: '\xE6',
          Agrave: '\xC0',
          agrave: '\xE0',
          amp: '&',
          AMP: '&',
          Aring: '\xC5',
          aring: '\xE5',
          Atilde: '\xC3',
          atilde: '\xE3',
          Auml: '\xC4',
          auml: '\xE4',
          brvbar: '\xA6',
          Ccedil: '\xC7',
          ccedil: '\xE7',
          cedil: '\xB8',
          cent: '\xA2',
          copy: '\xA9',
          COPY: '\xA9',
          curren: '\xA4',
          deg: '\xB0',
          divide: '\xF7',
          Eacute: '\xC9',
          eacute: '\xE9',
          Ecirc: '\xCA',
          ecirc: '\xEA',
          Egrave: '\xC8',
          egrave: '\xE8',
          ETH: '\xD0',
          eth: '\xF0',
          Euml: '\xCB',
          euml: '\xEB',
          frac12: '\xBD',
          frac14: '\xBC',
          frac34: '\xBE',
          gt: '>',
          GT: '>',
          Iacute: '\xCD',
          iacute: '\xED',
          Icirc: '\xCE',
          icirc: '\xEE',
          iexcl: '\xA1',
          Igrave: '\xCC',
          igrave: '\xEC',
          iquest: '\xBF',
          Iuml: '\xCF',
          iuml: '\xEF',
          laquo: '\xAB',
          lt: '<',
          LT: '<',
          macr: '\xAF',
          micro: '\xB5',
          middot: '\xB7',
          nbsp: '\xA0',
          not: '\xAC',
          Ntilde: '\xD1',
          ntilde: '\xF1',
          Oacute: '\xD3',
          oacute: '\xF3',
          Ocirc: '\xD4',
          ocirc: '\xF4',
          Ograve: '\xD2',
          ograve: '\xF2',
          ordf: '\xAA',
          ordm: '\xBA',
          Oslash: '\xD8',
          oslash: '\xF8',
          Otilde: '\xD5',
          otilde: '\xF5',
          Ouml: '\xD6',
          ouml: '\xF6',
          para: '\xB6',
          plusmn: '\xB1',
          pound: '\xA3',
          quot: '"',
          QUOT: '"',
          raquo: '\xBB',
          reg: '\xAE',
          REG: '\xAE',
          sect: '\xA7',
          shy: '\xAD',
          sup1: '\xB9',
          sup2: '\xB2',
          sup3: '\xB3',
          szlig: '\xDF',
          THORN: '\xDE',
          thorn: '\xFE',
          times: '\xD7',
          Uacute: '\xDA',
          uacute: '\xFA',
          Ucirc: '\xDB',
          ucirc: '\xFB',
          Ugrave: '\xD9',
          ugrave: '\xF9',
          uml: '\xA8',
          Uuml: '\xDC',
          uuml: '\xFC',
          Yacute: '\xDD',
          yacute: '\xFD',
          yen: '\xA5',
          yuml: '\xFF',
        };
      },
    }),
    sm = Ge({
      '../../node_modules/entities/lib/maps/xml.json'(e, t) {
        t.exports = { amp: '&', apos: "'", gt: '>', lt: '<', quot: '"' };
      },
    }),
    G8 = Ge({
      '../../node_modules/entities/lib/maps/decode.json'(e, t) {
        t.exports = {
          0: 65533,
          128: 8364,
          130: 8218,
          131: 402,
          132: 8222,
          133: 8230,
          134: 8224,
          135: 8225,
          136: 710,
          137: 8240,
          138: 352,
          139: 8249,
          140: 338,
          142: 381,
          145: 8216,
          146: 8217,
          147: 8220,
          148: 8221,
          149: 8226,
          150: 8211,
          151: 8212,
          152: 732,
          153: 8482,
          154: 353,
          155: 8250,
          156: 339,
          158: 382,
          159: 376,
        };
      },
    }),
    W8 = Ge({
      '../../node_modules/entities/lib/decode_codepoint.js'(e) {
        var t =
          (e && e.__importDefault) ||
          function (o) {
            return o && o.__esModule ? o : { default: o };
          };
        Object.defineProperty(e, '__esModule', { value: !0 });
        var r = t(G8()),
          n =
            String.fromCodePoint ||
            function (o) {
              var i = '';
              return (
                o > 65535 &&
                  ((o -= 65536),
                  (i += String.fromCharCode(((o >>> 10) & 1023) | 55296)),
                  (o = 56320 | (o & 1023))),
                (i += String.fromCharCode(o)),
                i
              );
            };
        function a(o) {
          return (o >= 55296 && o <= 57343) || o > 1114111
            ? '\uFFFD'
            : (o in r.default && (o = r.default[o]), n(o));
        }
        e.default = a;
      },
    }),
    om = Ge({
      '../../node_modules/entities/lib/decode.js'(e) {
        var t =
          (e && e.__importDefault) ||
          function (y) {
            return y && y.__esModule ? y : { default: y };
          };
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.decodeHTML = e.decodeHTMLStrict = e.decodeXML = void 0);
        var r = t(um()),
          n = t(z8()),
          a = t(sm()),
          o = t(W8()),
          i = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
        (e.decodeXML = u(a.default)), (e.decodeHTMLStrict = u(r.default));
        function u(y) {
          var A = p(y);
          return function (h) {
            return String(h).replace(i, A);
          };
        }
        var s = function (y, A) {
          return y < A ? 1 : -1;
        };
        e.decodeHTML = (function () {
          for (
            var y = Object.keys(n.default).sort(s),
              A = Object.keys(r.default).sort(s),
              h = 0,
              m = 0;
            h < A.length;
            h++
          )
            y[m] === A[h] ? ((A[h] += ';?'), m++) : (A[h] += ';');
          var E = new RegExp(
              '&(?:' + A.join('|') + '|#[xX][\\da-fA-F]+;?|#\\d+;?)',
              'g',
            ),
            b = p(r.default);
          function x(F) {
            return F.substr(-1) !== ';' && (F += ';'), b(F);
          }
          return function (F) {
            return String(F).replace(E, x);
          };
        })();
        function p(y) {
          return function (A) {
            if (A.charAt(1) === '#') {
              var h = A.charAt(2);
              return h === 'X' || h === 'x'
                ? o.default(parseInt(A.substr(3), 16))
                : o.default(parseInt(A.substr(2), 10));
            }
            return y[A.slice(1, -1)] || A;
          };
        }
      },
    }),
    im = Ge({
      '../../node_modules/entities/lib/encode.js'(e) {
        var t =
          (e && e.__importDefault) ||
          function (B) {
            return B && B.__esModule ? B : { default: B };
          };
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.escapeUTF8 =
            e.escape =
            e.encodeNonAsciiHTML =
            e.encodeHTML =
            e.encodeXML =
              void 0);
        var r = t(sm()),
          n = s(r.default),
          a = p(n);
        e.encodeXML = F(n);
        var o = t(um()),
          i = s(o.default),
          u = p(i);
        (e.encodeHTML = m(i, u)), (e.encodeNonAsciiHTML = F(i));
        function s(B) {
          return Object.keys(B)
            .sort()
            .reduce(function (I, j) {
              return (I[B[j]] = '&' + j + ';'), I;
            }, {});
        }
        function p(B) {
          for (
            var I = [], j = [], w = 0, k = Object.keys(B);
            w < k.length;
            w++
          ) {
            var N = k[w];
            N.length === 1 ? I.push('\\' + N) : j.push(N);
          }
          I.sort();
          for (var H = 0; H < I.length - 1; H++) {
            for (
              var V = H;
              V < I.length - 1 &&
              I[V].charCodeAt(1) + 1 === I[V + 1].charCodeAt(1);

            )
              V += 1;
            var U = 1 + V - H;
            U < 3 || I.splice(H, U, I[H] + '-' + I[V]);
          }
          return (
            j.unshift('[' + I.join('') + ']'), new RegExp(j.join('|'), 'g')
          );
        }
        var y =
            /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
          A =
            String.prototype.codePointAt != null
              ? function (B) {
                  return B.codePointAt(0);
                }
              : function (B) {
                  return (
                    (B.charCodeAt(0) - 55296) * 1024 +
                    B.charCodeAt(1) -
                    56320 +
                    65536
                  );
                };
        function h(B) {
          return (
            '&#x' +
            (B.length > 1 ? A(B) : B.charCodeAt(0)).toString(16).toUpperCase() +
            ';'
          );
        }
        function m(B, I) {
          return function (j) {
            return j
              .replace(I, function (w) {
                return B[w];
              })
              .replace(y, h);
          };
        }
        var E = new RegExp(a.source + '|' + y.source, 'g');
        function b(B) {
          return B.replace(E, h);
        }
        e.escape = b;
        function x(B) {
          return B.replace(a, h);
        }
        e.escapeUTF8 = x;
        function F(B) {
          return function (I) {
            return I.replace(E, function (j) {
              return B[j] || h(j);
            });
          };
        }
      },
    }),
    V8 = Ge({
      '../../node_modules/entities/lib/index.js'(e) {
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.decodeXMLStrict =
            e.decodeHTML5Strict =
            e.decodeHTML4Strict =
            e.decodeHTML5 =
            e.decodeHTML4 =
            e.decodeHTMLStrict =
            e.decodeHTML =
            e.decodeXML =
            e.encodeHTML5 =
            e.encodeHTML4 =
            e.escapeUTF8 =
            e.escape =
            e.encodeNonAsciiHTML =
            e.encodeHTML =
            e.encodeXML =
            e.encode =
            e.decodeStrict =
            e.decode =
              void 0);
        var t = om(),
          r = im();
        function n(s, p) {
          return (!p || p <= 0 ? t.decodeXML : t.decodeHTML)(s);
        }
        e.decode = n;
        function a(s, p) {
          return (!p || p <= 0 ? t.decodeXML : t.decodeHTMLStrict)(s);
        }
        e.decodeStrict = a;
        function o(s, p) {
          return (!p || p <= 0 ? r.encodeXML : r.encodeHTML)(s);
        }
        e.encode = o;
        var i = im();
        Object.defineProperty(e, 'encodeXML', {
          enumerable: !0,
          get: function () {
            return i.encodeXML;
          },
        }),
          Object.defineProperty(e, 'encodeHTML', {
            enumerable: !0,
            get: function () {
              return i.encodeHTML;
            },
          }),
          Object.defineProperty(e, 'encodeNonAsciiHTML', {
            enumerable: !0,
            get: function () {
              return i.encodeNonAsciiHTML;
            },
          }),
          Object.defineProperty(e, 'escape', {
            enumerable: !0,
            get: function () {
              return i.escape;
            },
          }),
          Object.defineProperty(e, 'escapeUTF8', {
            enumerable: !0,
            get: function () {
              return i.escapeUTF8;
            },
          }),
          Object.defineProperty(e, 'encodeHTML4', {
            enumerable: !0,
            get: function () {
              return i.encodeHTML;
            },
          }),
          Object.defineProperty(e, 'encodeHTML5', {
            enumerable: !0,
            get: function () {
              return i.encodeHTML;
            },
          });
        var u = om();
        Object.defineProperty(e, 'decodeXML', {
          enumerable: !0,
          get: function () {
            return u.decodeXML;
          },
        }),
          Object.defineProperty(e, 'decodeHTML', {
            enumerable: !0,
            get: function () {
              return u.decodeHTML;
            },
          }),
          Object.defineProperty(e, 'decodeHTMLStrict', {
            enumerable: !0,
            get: function () {
              return u.decodeHTMLStrict;
            },
          }),
          Object.defineProperty(e, 'decodeHTML4', {
            enumerable: !0,
            get: function () {
              return u.decodeHTML;
            },
          }),
          Object.defineProperty(e, 'decodeHTML5', {
            enumerable: !0,
            get: function () {
              return u.decodeHTML;
            },
          }),
          Object.defineProperty(e, 'decodeHTML4Strict', {
            enumerable: !0,
            get: function () {
              return u.decodeHTMLStrict;
            },
          }),
          Object.defineProperty(e, 'decodeHTML5Strict', {
            enumerable: !0,
            get: function () {
              return u.decodeHTMLStrict;
            },
          }),
          Object.defineProperty(e, 'decodeXMLStrict', {
            enumerable: !0,
            get: function () {
              return u.decodeXML;
            },
          });
      },
    }),
    K8 = Ge({
      '../../node_modules/ansi-to-html/lib/ansi_to_html.js'(e, t) {
        function r(R, _) {
          if (!(R instanceof _))
            throw new TypeError('Cannot call a class as a function');
        }
        function n(R, _) {
          for (var q = 0; q < _.length; q++) {
            var G = _[q];
            (G.enumerable = G.enumerable || !1),
              (G.configurable = !0),
              'value' in G && (G.writable = !0),
              Object.defineProperty(R, G.key, G);
          }
        }
        function a(R, _, q) {
          return _ && n(R.prototype, _), q && n(R, q), R;
        }
        function o(R) {
          if (typeof Symbol > 'u' || R[Symbol.iterator] == null) {
            if (Array.isArray(R) || (R = i(R))) {
              var _ = 0,
                q = function () {};
              return {
                s: q,
                n: function () {
                  return _ >= R.length
                    ? { done: !0 }
                    : { done: !1, value: R[_++] };
                },
                e: function (se) {
                  throw se;
                },
                f: q,
              };
            }
            throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }
          var G,
            Y = !0,
            K = !1,
            Z;
          return {
            s: function () {
              G = R[Symbol.iterator]();
            },
            n: function () {
              var se = G.next();
              return (Y = se.done), se;
            },
            e: function (se) {
              (K = !0), (Z = se);
            },
            f: function () {
              try {
                !Y && G.return != null && G.return();
              } finally {
                if (K) throw Z;
              }
            },
          };
        }
        function i(R, _) {
          if (R) {
            if (typeof R == 'string') return u(R, _);
            var q = Object.prototype.toString.call(R).slice(8, -1);
            if (
              (q === 'Object' && R.constructor && (q = R.constructor.name),
              q === 'Map' || q === 'Set')
            )
              return Array.from(q);
            if (
              q === 'Arguments' ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(q)
            )
              return u(R, _);
          }
        }
        function u(R, _) {
          (_ == null || _ > R.length) && (_ = R.length);
          for (var q = 0, G = new Array(_); q < _; q++) G[q] = R[q];
          return G;
        }
        var s = V8(),
          p = {
            fg: '#FFF',
            bg: '#000',
            newline: !1,
            escapeXML: !1,
            stream: !1,
            colors: y(),
          };
        function y() {
          var R = {
            0: '#000',
            1: '#A00',
            2: '#0A0',
            3: '#A50',
            4: '#00A',
            5: '#A0A',
            6: '#0AA',
            7: '#AAA',
            8: '#555',
            9: '#F55',
            10: '#5F5',
            11: '#FF5',
            12: '#55F',
            13: '#F5F',
            14: '#5FF',
            15: '#FFF',
          };
          return (
            B(0, 5).forEach(function (_) {
              B(0, 5).forEach(function (q) {
                B(0, 5).forEach(function (G) {
                  return A(_, q, G, R);
                });
              });
            }),
            B(0, 23).forEach(function (_) {
              var q = _ + 232,
                G = h(_ * 10 + 8);
              R[q] = '#' + G + G + G;
            }),
            R
          );
        }
        function A(R, _, q, G) {
          var Y = 16 + R * 36 + _ * 6 + q,
            K = R > 0 ? R * 40 + 55 : 0,
            Z = _ > 0 ? _ * 40 + 55 : 0,
            se = q > 0 ? q * 40 + 55 : 0;
          G[Y] = m([K, Z, se]);
        }
        function h(R) {
          for (var _ = R.toString(16); _.length < 2; ) _ = '0' + _;
          return _;
        }
        function m(R) {
          var _ = [],
            q = o(R),
            G;
          try {
            for (q.s(); !(G = q.n()).done; ) {
              var Y = G.value;
              _.push(h(Y));
            }
          } catch (K) {
            q.e(K);
          } finally {
            q.f();
          }
          return '#' + _.join('');
        }
        function E(R, _, q, G) {
          var Y;
          return (
            _ === 'text'
              ? (Y = w(q, G))
              : _ === 'display'
              ? (Y = x(R, q, G))
              : _ === 'xterm256'
              ? (Y = H(R, G.colors[q]))
              : _ === 'rgb' && (Y = b(R, q)),
            Y
          );
        }
        function b(R, _) {
          _ = _.substring(2).slice(0, -1);
          var q = +_.substr(0, 2),
            G = _.substring(5).split(';'),
            Y = G.map(function (K) {
              return ('0' + Number(K).toString(16)).substr(-2);
            }).join('');
          return N(R, (q === 38 ? 'color:#' : 'background-color:#') + Y);
        }
        function x(R, _, q) {
          _ = parseInt(_, 10);
          var G = {
              '-1': function () {
                return '<br/>';
              },
              0: function () {
                return R.length && F(R);
              },
              1: function () {
                return k(R, 'b');
              },
              3: function () {
                return k(R, 'i');
              },
              4: function () {
                return k(R, 'u');
              },
              8: function () {
                return N(R, 'display:none');
              },
              9: function () {
                return k(R, 'strike');
              },
              22: function () {
                return N(
                  R,
                  'font-weight:normal;text-decoration:none;font-style:normal',
                );
              },
              23: function () {
                return U(R, 'i');
              },
              24: function () {
                return U(R, 'u');
              },
              39: function () {
                return H(R, q.fg);
              },
              49: function () {
                return V(R, q.bg);
              },
              53: function () {
                return N(R, 'text-decoration:overline');
              },
            },
            Y;
          return (
            G[_]
              ? (Y = G[_]())
              : 4 < _ && _ < 7
              ? (Y = k(R, 'blink'))
              : 29 < _ && _ < 38
              ? (Y = H(R, q.colors[_ - 30]))
              : 39 < _ && _ < 48
              ? (Y = V(R, q.colors[_ - 40]))
              : 89 < _ && _ < 98
              ? (Y = H(R, q.colors[8 + (_ - 90)]))
              : 99 < _ && _ < 108 && (Y = V(R, q.colors[8 + (_ - 100)])),
            Y
          );
        }
        function F(R) {
          var _ = R.slice(0);
          return (
            (R.length = 0),
            _.reverse()
              .map(function (q) {
                return '</' + q + '>';
              })
              .join('')
          );
        }
        function B(R, _) {
          for (var q = [], G = R; G <= _; G++) q.push(G);
          return q;
        }
        function I(R) {
          return function (_) {
            return (R === null || _.category !== R) && R !== 'all';
          };
        }
        function j(R) {
          R = parseInt(R, 10);
          var _ = null;
          return (
            R === 0
              ? (_ = 'all')
              : R === 1
              ? (_ = 'bold')
              : 2 < R && R < 5
              ? (_ = 'underline')
              : 4 < R && R < 7
              ? (_ = 'blink')
              : R === 8
              ? (_ = 'hide')
              : R === 9
              ? (_ = 'strike')
              : (29 < R && R < 38) || R === 39 || (89 < R && R < 98)
              ? (_ = 'foreground-color')
              : ((39 < R && R < 48) || R === 49 || (99 < R && R < 108)) &&
                (_ = 'background-color'),
            _
          );
        }
        function w(R, _) {
          return _.escapeXML ? s.encodeXML(R) : R;
        }
        function k(R, _, q) {
          return (
            q || (q = ''),
            R.push(_),
            '<'.concat(_).concat(q ? ' style="'.concat(q, '"') : '', '>')
          );
        }
        function N(R, _) {
          return k(R, 'span', _);
        }
        function H(R, _) {
          return k(R, 'span', 'color:' + _);
        }
        function V(R, _) {
          return k(R, 'span', 'background-color:' + _);
        }
        function U(R, _) {
          var q;
          if ((R.slice(-1)[0] === _ && (q = R.pop()), q)) return '</' + _ + '>';
        }
        function Q(R, _, q) {
          var G = !1,
            Y = 3;
          function K() {
            return '';
          }
          function Z(ie, Ae) {
            return q('xterm256', Ae), '';
          }
          function se(ie) {
            return _.newline ? q('display', -1) : q('text', ie), '';
          }
          function Re(ie, Ae) {
            (G = !0),
              Ae.trim().length === 0 && (Ae = '0'),
              (Ae = Ae.trimRight(';').split(';'));
            var Vr = o(Ae),
              du;
            try {
              for (Vr.s(); !(du = Vr.n()).done; ) {
                var ky = du.value;
                q('display', ky);
              }
            } catch (Ny) {
              Vr.e(Ny);
            } finally {
              Vr.f();
            }
            return '';
          }
          function Pe(ie) {
            return q('text', ie), '';
          }
          function J(ie) {
            return q('rgb', ie), '';
          }
          var qe = [
            { pattern: /^\x08+/, sub: K },
            { pattern: /^\x1b\[[012]?K/, sub: K },
            { pattern: /^\x1b\[\(B/, sub: K },
            { pattern: /^\x1b\[[34]8;2;\d+;\d+;\d+m/, sub: J },
            { pattern: /^\x1b\[38;5;(\d+)m/, sub: Z },
            { pattern: /^\n/, sub: se },
            { pattern: /^\r+\n/, sub: se },
            { pattern: /^\x1b\[((?:\d{1,3};?)+|)m/, sub: Re },
            { pattern: /^\x1b\[\d?J/, sub: K },
            { pattern: /^\x1b\[\d{0,3};\d{0,3}f/, sub: K },
            { pattern: /^\x1b\[?[\d;]{0,3}/, sub: K },
            { pattern: /^(([^\x1b\x08\r\n])+)/, sub: Pe },
          ];
          function T(ie, Ae) {
            (Ae > Y && G) || ((G = !1), (R = R.replace(ie.pattern, ie.sub)));
          }
          var P = [],
            L = R,
            O = L.length;
          e: for (; O > 0; ) {
            for (var $ = 0, z = 0, pe = qe.length; z < pe; $ = ++z) {
              var oe = qe[$];
              if ((T(oe, $), R.length !== O)) {
                O = R.length;
                continue e;
              }
            }
            if (R.length === O) break;
            P.push(0), (O = R.length);
          }
          return P;
        }
        function ee(R, _, q) {
          return (
            _ !== 'text' &&
              ((R = R.filter(I(j(q)))),
              R.push({ token: _, data: q, category: j(q) })),
            R
          );
        }
        var X = (function () {
          function R(_) {
            r(this, R),
              (_ = _ || {}),
              _.colors && (_.colors = Object.assign({}, p.colors, _.colors)),
              (this.options = Object.assign({}, p, _)),
              (this.stack = []),
              (this.stickyStack = []);
          }
          return (
            a(R, [
              {
                key: 'toHtml',
                value: function (_) {
                  var q = this;
                  _ = typeof _ == 'string' ? [_] : _;
                  var G = this.stack,
                    Y = this.options,
                    K = [];
                  return (
                    this.stickyStack.forEach(function (Z) {
                      var se = E(G, Z.token, Z.data, Y);
                      se && K.push(se);
                    }),
                    Q(_.join(''), Y, function (Z, se) {
                      var Re = E(G, Z, se, Y);
                      Re && K.push(Re),
                        Y.stream && (q.stickyStack = ee(q.stickyStack, Z, se));
                    }),
                    G.length && K.push(F(G)),
                    K.join('')
                  );
                },
              },
            ]),
            R
          );
        })();
        t.exports = X;
      },
    }),
    sQ = new Error('prepareAborted'),
    { AbortController: lQ } = globalThis;
  var { fetch: cQ } = ue;
  var { history: dQ, document: pQ } = ue;
  var Y8 = Xf(K8()),
    { document: fQ } = ue;
  var X8 = ((e) => (
    (e.MAIN = 'MAIN'),
    (e.NOPREVIEW = 'NOPREVIEW'),
    (e.PREPARING_STORY = 'PREPARING_STORY'),
    (e.PREPARING_DOCS = 'PREPARING_DOCS'),
    (e.ERROR = 'ERROR'),
    e
  ))(X8 || {});
  var hQ = new Y8.default({ escapeXML: !0 });
  var { document: mQ } = ue;
  var { FEATURES: wQ } = ue;
  l();
  c();
  d();
  var dy = fe(On(), 1);
  l();
  c();
  d();
  var n_ = fe(On(), 1),
    a_ = fe(bm(), 1);
  var o_ = ((e) => (
    (e.JAVASCRIPT = 'JavaScript'),
    (e.FLOW = 'Flow'),
    (e.TYPESCRIPT = 'TypeScript'),
    (e.UNKNOWN = 'Unknown'),
    e
  ))(o_ || {});
  var Xn = (e) => {
    if (!e) return '';
    if (typeof e == 'string') return e;
    throw new Error(`Description: expected string, got: ${JSON.stringify(e)}`);
  };
  var Am = 'storybook/docs',
    iee = `${Am}/panel`;
  var i_ = `${Am}/snippet-rendered`,
    $r = ((e) => (
      (e.AUTO = 'auto'), (e.CODE = 'code'), (e.DYNAMIC = 'dynamic'), e
    ))($r || {});
  l();
  c();
  d();
  l();
  c();
  d();
  var u_ = Object.create,
    Em = Object.defineProperty,
    s_ = Object.getOwnPropertyDescriptor,
    vm = Object.getOwnPropertyNames,
    l_ = Object.getPrototypeOf,
    c_ = Object.prototype.hasOwnProperty,
    ke = (e, t) =>
      function () {
        return (
          t || (0, e[vm(e)[0]])((t = { exports: {} }).exports, t), t.exports
        );
      },
    d_ = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let a of vm(t))
          !c_.call(e, a) &&
            a !== r &&
            Em(e, a, {
              get: () => t[a],
              enumerable: !(n = s_(t, a)) || n.enumerable,
            });
      return e;
    },
    Jn = (e, t, r) => (
      (r = e != null ? u_(l_(e)) : {}),
      d_(
        t || !e || !e.__esModule
          ? Em(r, 'default', { value: e, enumerable: !0 })
          : r,
        e,
      )
    ),
    p_ = [
      'bubbles',
      'cancelBubble',
      'cancelable',
      'composed',
      'currentTarget',
      'defaultPrevented',
      'eventPhase',
      'isTrusted',
      'returnValue',
      'srcElement',
      'target',
      'timeStamp',
      'type',
    ],
    f_ = ['detail'];
  function Dm(e) {
    let t = p_
      .filter((r) => e[r] !== void 0)
      .reduce((r, n) => ({ ...r, [n]: e[n] }), {});
    return (
      e instanceof CustomEvent &&
        f_
          .filter((r) => e[r] !== void 0)
          .forEach((r) => {
            t[r] = e[r];
          }),
      t
    );
  }
  var Lm = fe(Cn(), 1),
    Bm = ke({
      'node_modules/has-symbols/shams.js'(e, t) {
        'use strict';
        t.exports = function () {
          if (
            typeof Symbol != 'function' ||
            typeof Object.getOwnPropertySymbols != 'function'
          )
            return !1;
          if (typeof Symbol.iterator == 'symbol') return !0;
          var n = {},
            a = Symbol('test'),
            o = Object(a);
          if (
            typeof a == 'string' ||
            Object.prototype.toString.call(a) !== '[object Symbol]' ||
            Object.prototype.toString.call(o) !== '[object Symbol]'
          )
            return !1;
          var i = 42;
          n[a] = i;
          for (a in n) return !1;
          if (
            (typeof Object.keys == 'function' && Object.keys(n).length !== 0) ||
            (typeof Object.getOwnPropertyNames == 'function' &&
              Object.getOwnPropertyNames(n).length !== 0)
          )
            return !1;
          var u = Object.getOwnPropertySymbols(n);
          if (
            u.length !== 1 ||
            u[0] !== a ||
            !Object.prototype.propertyIsEnumerable.call(n, a)
          )
            return !1;
          if (typeof Object.getOwnPropertyDescriptor == 'function') {
            var s = Object.getOwnPropertyDescriptor(n, a);
            if (s.value !== i || s.enumerable !== !0) return !1;
          }
          return !0;
        };
      },
    }),
    Tm = ke({
      'node_modules/has-symbols/index.js'(e, t) {
        'use strict';
        var r = typeof Symbol < 'u' && Symbol,
          n = Bm();
        t.exports = function () {
          return typeof r != 'function' ||
            typeof Symbol != 'function' ||
            typeof r('foo') != 'symbol' ||
            typeof Symbol('bar') != 'symbol'
            ? !1
            : n();
        };
      },
    }),
    h_ = ke({
      'node_modules/function-bind/implementation.js'(e, t) {
        'use strict';
        var r = 'Function.prototype.bind called on incompatible ',
          n = Array.prototype.slice,
          a = Object.prototype.toString,
          o = '[object Function]';
        t.exports = function (u) {
          var s = this;
          if (typeof s != 'function' || a.call(s) !== o)
            throw new TypeError(r + s);
          for (
            var p = n.call(arguments, 1),
              y,
              A = function () {
                if (this instanceof y) {
                  var x = s.apply(this, p.concat(n.call(arguments)));
                  return Object(x) === x ? x : this;
                } else return s.apply(u, p.concat(n.call(arguments)));
              },
              h = Math.max(0, s.length - p.length),
              m = [],
              E = 0;
            E < h;
            E++
          )
            m.push('$' + E);
          if (
            ((y = Function(
              'binder',
              'return function (' +
                m.join(',') +
                '){ return binder.apply(this,arguments); }',
            )(A)),
            s.prototype)
          ) {
            var b = function () {};
            (b.prototype = s.prototype),
              (y.prototype = new b()),
              (b.prototype = null);
          }
          return y;
        };
      },
    }),
    Si = ke({
      'node_modules/function-bind/index.js'(e, t) {
        'use strict';
        var r = h_();
        t.exports = Function.prototype.bind || r;
      },
    }),
    m_ = ke({
      'node_modules/has/src/index.js'(e, t) {
        'use strict';
        var r = Si();
        t.exports = r.call(Function.call, Object.prototype.hasOwnProperty);
      },
    }),
    _m = ke({
      'node_modules/get-intrinsic/index.js'(e, t) {
        'use strict';
        var r,
          n = SyntaxError,
          a = Function,
          o = TypeError,
          i = function (ee) {
            try {
              return a('"use strict"; return (' + ee + ').constructor;')();
            } catch {}
          },
          u = Object.getOwnPropertyDescriptor;
        if (u)
          try {
            u({}, '');
          } catch {
            u = null;
          }
        var s = function () {
            throw new o();
          },
          p = u
            ? (function () {
                try {
                  return arguments.callee, s;
                } catch {
                  try {
                    return u(arguments, 'callee').get;
                  } catch {
                    return s;
                  }
                }
              })()
            : s,
          y = Tm()(),
          A =
            Object.getPrototypeOf ||
            function (ee) {
              return ee.__proto__;
            },
          h = {},
          m = typeof Uint8Array > 'u' ? r : A(Uint8Array),
          E = {
            '%AggregateError%':
              typeof AggregateError > 'u' ? r : AggregateError,
            '%Array%': Array,
            '%ArrayBuffer%': typeof ArrayBuffer > 'u' ? r : ArrayBuffer,
            '%ArrayIteratorPrototype%': y ? A([][Symbol.iterator]()) : r,
            '%AsyncFromSyncIteratorPrototype%': r,
            '%AsyncFunction%': h,
            '%AsyncGenerator%': h,
            '%AsyncGeneratorFunction%': h,
            '%AsyncIteratorPrototype%': h,
            '%Atomics%': typeof Atomics > 'u' ? r : Atomics,
            '%BigInt%': typeof BigInt > 'u' ? r : BigInt,
            '%Boolean%': Boolean,
            '%DataView%': typeof DataView > 'u' ? r : DataView,
            '%Date%': Date,
            '%decodeURI%': decodeURI,
            '%decodeURIComponent%': decodeURIComponent,
            '%encodeURI%': encodeURI,
            '%encodeURIComponent%': encodeURIComponent,
            '%Error%': Error,
            '%eval%': eval,
            '%EvalError%': EvalError,
            '%Float32Array%': typeof Float32Array > 'u' ? r : Float32Array,
            '%Float64Array%': typeof Float64Array > 'u' ? r : Float64Array,
            '%FinalizationRegistry%':
              typeof FinalizationRegistry > 'u' ? r : FinalizationRegistry,
            '%Function%': a,
            '%GeneratorFunction%': h,
            '%Int8Array%': typeof Int8Array > 'u' ? r : Int8Array,
            '%Int16Array%': typeof Int16Array > 'u' ? r : Int16Array,
            '%Int32Array%': typeof Int32Array > 'u' ? r : Int32Array,
            '%isFinite%': isFinite,
            '%isNaN%': isNaN,
            '%IteratorPrototype%': y ? A(A([][Symbol.iterator]())) : r,
            '%JSON%': typeof JSON == 'object' ? JSON : r,
            '%Map%': typeof Map > 'u' ? r : Map,
            '%MapIteratorPrototype%':
              typeof Map > 'u' || !y ? r : A(new Map()[Symbol.iterator]()),
            '%Math%': Math,
            '%Number%': Number,
            '%Object%': Object,
            '%parseFloat%': parseFloat,
            '%parseInt%': parseInt,
            '%Promise%': typeof Promise > 'u' ? r : Promise,
            '%Proxy%': typeof Proxy > 'u' ? r : Proxy,
            '%RangeError%': RangeError,
            '%ReferenceError%': ReferenceError,
            '%Reflect%': typeof Reflect > 'u' ? r : Reflect,
            '%RegExp%': RegExp,
            '%Set%': typeof Set > 'u' ? r : Set,
            '%SetIteratorPrototype%':
              typeof Set > 'u' || !y ? r : A(new Set()[Symbol.iterator]()),
            '%SharedArrayBuffer%':
              typeof SharedArrayBuffer > 'u' ? r : SharedArrayBuffer,
            '%String%': String,
            '%StringIteratorPrototype%': y ? A(''[Symbol.iterator]()) : r,
            '%Symbol%': y ? Symbol : r,
            '%SyntaxError%': n,
            '%ThrowTypeError%': p,
            '%TypedArray%': m,
            '%TypeError%': o,
            '%Uint8Array%': typeof Uint8Array > 'u' ? r : Uint8Array,
            '%Uint8ClampedArray%':
              typeof Uint8ClampedArray > 'u' ? r : Uint8ClampedArray,
            '%Uint16Array%': typeof Uint16Array > 'u' ? r : Uint16Array,
            '%Uint32Array%': typeof Uint32Array > 'u' ? r : Uint32Array,
            '%URIError%': URIError,
            '%WeakMap%': typeof WeakMap > 'u' ? r : WeakMap,
            '%WeakRef%': typeof WeakRef > 'u' ? r : WeakRef,
            '%WeakSet%': typeof WeakSet > 'u' ? r : WeakSet,
          },
          b = function ee(X) {
            var R;
            if (X === '%AsyncFunction%') R = i('async function () {}');
            else if (X === '%GeneratorFunction%') R = i('function* () {}');
            else if (X === '%AsyncGeneratorFunction%')
              R = i('async function* () {}');
            else if (X === '%AsyncGenerator%') {
              var _ = ee('%AsyncGeneratorFunction%');
              _ && (R = _.prototype);
            } else if (X === '%AsyncIteratorPrototype%') {
              var q = ee('%AsyncGenerator%');
              q && (R = A(q.prototype));
            }
            return (E[X] = R), R;
          },
          x = {
            '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
            '%ArrayPrototype%': ['Array', 'prototype'],
            '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
            '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
            '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
            '%ArrayProto_values%': ['Array', 'prototype', 'values'],
            '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
            '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
            '%AsyncGeneratorPrototype%': [
              'AsyncGeneratorFunction',
              'prototype',
              'prototype',
            ],
            '%BooleanPrototype%': ['Boolean', 'prototype'],
            '%DataViewPrototype%': ['DataView', 'prototype'],
            '%DatePrototype%': ['Date', 'prototype'],
            '%ErrorPrototype%': ['Error', 'prototype'],
            '%EvalErrorPrototype%': ['EvalError', 'prototype'],
            '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
            '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
            '%FunctionPrototype%': ['Function', 'prototype'],
            '%Generator%': ['GeneratorFunction', 'prototype'],
            '%GeneratorPrototype%': [
              'GeneratorFunction',
              'prototype',
              'prototype',
            ],
            '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
            '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
            '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
            '%JSONParse%': ['JSON', 'parse'],
            '%JSONStringify%': ['JSON', 'stringify'],
            '%MapPrototype%': ['Map', 'prototype'],
            '%NumberPrototype%': ['Number', 'prototype'],
            '%ObjectPrototype%': ['Object', 'prototype'],
            '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
            '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
            '%PromisePrototype%': ['Promise', 'prototype'],
            '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
            '%Promise_all%': ['Promise', 'all'],
            '%Promise_reject%': ['Promise', 'reject'],
            '%Promise_resolve%': ['Promise', 'resolve'],
            '%RangeErrorPrototype%': ['RangeError', 'prototype'],
            '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
            '%RegExpPrototype%': ['RegExp', 'prototype'],
            '%SetPrototype%': ['Set', 'prototype'],
            '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
            '%StringPrototype%': ['String', 'prototype'],
            '%SymbolPrototype%': ['Symbol', 'prototype'],
            '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
            '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
            '%TypeErrorPrototype%': ['TypeError', 'prototype'],
            '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
            '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
            '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
            '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
            '%URIErrorPrototype%': ['URIError', 'prototype'],
            '%WeakMapPrototype%': ['WeakMap', 'prototype'],
            '%WeakSetPrototype%': ['WeakSet', 'prototype'],
          },
          F = Si(),
          B = m_(),
          I = F.call(Function.call, Array.prototype.concat),
          j = F.call(Function.apply, Array.prototype.splice),
          w = F.call(Function.call, String.prototype.replace),
          k = F.call(Function.call, String.prototype.slice),
          N = F.call(Function.call, RegExp.prototype.exec),
          H =
            /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
          V = /\\(\\)?/g,
          U = function (X) {
            var R = k(X, 0, 1),
              _ = k(X, -1);
            if (R === '%' && _ !== '%')
              throw new n('invalid intrinsic syntax, expected closing `%`');
            if (_ === '%' && R !== '%')
              throw new n('invalid intrinsic syntax, expected opening `%`');
            var q = [];
            return (
              w(X, H, function (G, Y, K, Z) {
                q[q.length] = K ? w(Z, V, '$1') : Y || G;
              }),
              q
            );
          },
          Q = function (X, R) {
            var _ = X,
              q;
            if ((B(x, _) && ((q = x[_]), (_ = '%' + q[0] + '%')), B(E, _))) {
              var G = E[_];
              if ((G === h && (G = b(_)), typeof G > 'u' && !R))
                throw new o(
                  'intrinsic ' +
                    X +
                    ' exists, but is not available. Please file an issue!',
                );
              return { alias: q, name: _, value: G };
            }
            throw new n('intrinsic ' + X + ' does not exist!');
          };
        t.exports = function (X, R) {
          if (typeof X != 'string' || X.length === 0)
            throw new o('intrinsic name must be a non-empty string');
          if (arguments.length > 1 && typeof R != 'boolean')
            throw new o('"allowMissing" argument must be a boolean');
          if (N(/^%?[^%]*%?$/, X) === null)
            throw new n(
              '`%` may not be present anywhere but at the beginning and end of the intrinsic name',
            );
          var _ = U(X),
            q = _.length > 0 ? _[0] : '',
            G = Q('%' + q + '%', R),
            Y = G.name,
            K = G.value,
            Z = !1,
            se = G.alias;
          se && ((q = se[0]), j(_, I([0, 1], se)));
          for (var Re = 1, Pe = !0; Re < _.length; Re += 1) {
            var J = _[Re],
              qe = k(J, 0, 1),
              T = k(J, -1);
            if (
              (qe === '"' ||
                qe === "'" ||
                qe === '`' ||
                T === '"' ||
                T === "'" ||
                T === '`') &&
              qe !== T
            )
              throw new n(
                'property names with quotes must have matching quotes',
              );
            if (
              ((J === 'constructor' || !Pe) && (Z = !0),
              (q += '.' + J),
              (Y = '%' + q + '%'),
              B(E, Y))
            )
              K = E[Y];
            else if (K != null) {
              if (!(J in K)) {
                if (!R)
                  throw new o(
                    'base intrinsic for ' +
                      X +
                      ' exists, but the property is not available.',
                  );
                return;
              }
              if (u && Re + 1 >= _.length) {
                var P = u(K, J);
                (Pe = !!P),
                  Pe && 'get' in P && !('originalValue' in P.get)
                    ? (K = P.get)
                    : (K = K[J]);
              } else (Pe = B(K, J)), (K = K[J]);
              Pe && !Z && (E[Y] = K);
            }
          }
          return K;
        };
      },
    }),
    g_ = ke({
      'node_modules/call-bind/index.js'(e, t) {
        'use strict';
        var r = Si(),
          n = _m(),
          a = n('%Function.prototype.apply%'),
          o = n('%Function.prototype.call%'),
          i = n('%Reflect.apply%', !0) || r.call(o, a),
          u = n('%Object.getOwnPropertyDescriptor%', !0),
          s = n('%Object.defineProperty%', !0),
          p = n('%Math.max%');
        if (s)
          try {
            s({}, 'a', { value: 1 });
          } catch {
            s = null;
          }
        t.exports = function (h) {
          var m = i(r, o, arguments);
          if (u && s) {
            var E = u(m, 'length');
            E.configurable &&
              s(m, 'length', {
                value: 1 + p(0, h.length - (arguments.length - 1)),
              });
          }
          return m;
        };
        var y = function () {
          return i(r, a, arguments);
        };
        s ? s(t.exports, 'apply', { value: y }) : (t.exports.apply = y);
      },
    }),
    y_ = ke({
      'node_modules/call-bind/callBound.js'(e, t) {
        'use strict';
        var r = _m(),
          n = g_(),
          a = n(r('String.prototype.indexOf'));
        t.exports = function (i, u) {
          var s = r(i, !!u);
          return typeof s == 'function' && a(i, '.prototype.') > -1 ? n(s) : s;
        };
      },
    }),
    b_ = ke({
      'node_modules/has-tostringtag/shams.js'(e, t) {
        'use strict';
        var r = Bm();
        t.exports = function () {
          return r() && !!Symbol.toStringTag;
        };
      },
    }),
    A_ = ke({
      'node_modules/is-regex/index.js'(e, t) {
        'use strict';
        var r = y_(),
          n = b_()(),
          a,
          o,
          i,
          u;
        n &&
          ((a = r('Object.prototype.hasOwnProperty')),
          (o = r('RegExp.prototype.exec')),
          (i = {}),
          (s = function () {
            throw i;
          }),
          (u = { toString: s, valueOf: s }),
          typeof Symbol.toPrimitive == 'symbol' && (u[Symbol.toPrimitive] = s));
        var s,
          p = r('Object.prototype.toString'),
          y = Object.getOwnPropertyDescriptor,
          A = '[object RegExp]';
        t.exports = n
          ? function (m) {
              if (!m || typeof m != 'object') return !1;
              var E = y(m, 'lastIndex'),
                b = E && a(E, 'value');
              if (!b) return !1;
              try {
                o(m, u);
              } catch (x) {
                return x === i;
              }
            }
          : function (m) {
              return !m || (typeof m != 'object' && typeof m != 'function')
                ? !1
                : p(m) === A;
            };
      },
    }),
    E_ = ke({
      'node_modules/is-function/index.js'(e, t) {
        t.exports = n;
        var r = Object.prototype.toString;
        function n(a) {
          if (!a) return !1;
          var o = r.call(a);
          return (
            o === '[object Function]' ||
            (typeof a == 'function' && o !== '[object RegExp]') ||
            (typeof window < 'u' &&
              (a === window.setTimeout ||
                a === window.alert ||
                a === window.confirm ||
                a === window.prompt))
          );
        }
      },
    }),
    v_ = ke({
      'node_modules/is-symbol/index.js'(e, t) {
        'use strict';
        var r = Object.prototype.toString,
          n = Tm()();
        n
          ? ((a = Symbol.prototype.toString),
            (o = /^Symbol\(.*\)$/),
            (i = function (s) {
              return typeof s.valueOf() != 'symbol' ? !1 : o.test(a.call(s));
            }),
            (t.exports = function (s) {
              if (typeof s == 'symbol') return !0;
              if (r.call(s) !== '[object Symbol]') return !1;
              try {
                return i(s);
              } catch {
                return !1;
              }
            }))
          : (t.exports = function (s) {
              return !1;
            });
        var a, o, i;
      },
    }),
    D_ = Jn(A_()),
    C_ = Jn(E_()),
    x_ = Jn(v_());
  function F_(e) {
    return e != null && typeof e == 'object' && Array.isArray(e) === !1;
  }
  var S_ =
      typeof window == 'object' && window && window.Object === Object && window,
    w_ = S_,
    B_ = typeof self == 'object' && self && self.Object === Object && self,
    T_ = w_ || B_ || Function('return this')(),
    wi = T_,
    __ = wi.Symbol,
    Zt = __,
    Om = Object.prototype,
    O_ = Om.hasOwnProperty,
    R_ = Om.toString,
    Ur = Zt ? Zt.toStringTag : void 0;
  function P_(e) {
    var t = O_.call(e, Ur),
      r = e[Ur];
    try {
      e[Ur] = void 0;
      var n = !0;
    } catch {}
    var a = R_.call(e);
    return n && (t ? (e[Ur] = r) : delete e[Ur]), a;
  }
  var I_ = P_,
    k_ = Object.prototype,
    N_ = k_.toString;
  function L_(e) {
    return N_.call(e);
  }
  var j_ = L_,
    q_ = '[object Null]',
    M_ = '[object Undefined]',
    Cm = Zt ? Zt.toStringTag : void 0;
  function $_(e) {
    return e == null
      ? e === void 0
        ? M_
        : q_
      : Cm && Cm in Object(e)
      ? I_(e)
      : j_(e);
  }
  var Rm = $_;
  function U_(e) {
    return e != null && typeof e == 'object';
  }
  var H_ = U_,
    z_ = '[object Symbol]';
  function G_(e) {
    return typeof e == 'symbol' || (H_(e) && Rm(e) == z_);
  }
  var Bi = G_;
  function W_(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
      a[r] = t(e[r], r, e);
    return a;
  }
  var V_ = W_,
    K_ = Array.isArray,
    Ti = K_,
    Y_ = 1 / 0,
    xm = Zt ? Zt.prototype : void 0,
    Fm = xm ? xm.toString : void 0;
  function Pm(e) {
    if (typeof e == 'string') return e;
    if (Ti(e)) return V_(e, Pm) + '';
    if (Bi(e)) return Fm ? Fm.call(e) : '';
    var t = e + '';
    return t == '0' && 1 / e == -Y_ ? '-0' : t;
  }
  var X_ = Pm;
  function J_(e) {
    var t = typeof e;
    return e != null && (t == 'object' || t == 'function');
  }
  var Im = J_,
    Q_ = '[object AsyncFunction]',
    Z_ = '[object Function]',
    eO = '[object GeneratorFunction]',
    tO = '[object Proxy]';
  function rO(e) {
    if (!Im(e)) return !1;
    var t = Rm(e);
    return t == Z_ || t == eO || t == Q_ || t == tO;
  }
  var nO = rO,
    aO = wi['__core-js_shared__'],
    Fi = aO,
    Sm = (function () {
      var e = /[^.]+$/.exec((Fi && Fi.keys && Fi.keys.IE_PROTO) || '');
      return e ? 'Symbol(src)_1.' + e : '';
    })();
  function oO(e) {
    return !!Sm && Sm in e;
  }
  var iO = oO,
    uO = Function.prototype,
    sO = uO.toString;
  function lO(e) {
    if (e != null) {
      try {
        return sO.call(e);
      } catch {}
      try {
        return e + '';
      } catch {}
    }
    return '';
  }
  var cO = lO,
    dO = /[\\^$.*+?()[\]{}|]/g,
    pO = /^\[object .+?Constructor\]$/,
    fO = Function.prototype,
    hO = Object.prototype,
    mO = fO.toString,
    gO = hO.hasOwnProperty,
    yO = RegExp(
      '^' +
        mO
          .call(gO)
          .replace(dO, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?',
          ) +
        '$',
    );
  function bO(e) {
    if (!Im(e) || iO(e)) return !1;
    var t = nO(e) ? yO : pO;
    return t.test(cO(e));
  }
  var AO = bO;
  function EO(e, t) {
    return e?.[t];
  }
  var vO = EO;
  function DO(e, t) {
    var r = vO(e, t);
    return AO(r) ? r : void 0;
  }
  var km = DO;
  function CO(e, t) {
    return e === t || (e !== e && t !== t);
  }
  var xO = CO,
    FO = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    SO = /^\w*$/;
  function wO(e, t) {
    if (Ti(e)) return !1;
    var r = typeof e;
    return r == 'number' ||
      r == 'symbol' ||
      r == 'boolean' ||
      e == null ||
      Bi(e)
      ? !0
      : SO.test(e) || !FO.test(e) || (t != null && e in Object(t));
  }
  var BO = wO,
    TO = km(Object, 'create'),
    Hr = TO;
  function _O() {
    (this.__data__ = Hr ? Hr(null) : {}), (this.size = 0);
  }
  var OO = _O;
  function RO(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  }
  var PO = RO,
    IO = '__lodash_hash_undefined__',
    kO = Object.prototype,
    NO = kO.hasOwnProperty;
  function LO(e) {
    var t = this.__data__;
    if (Hr) {
      var r = t[e];
      return r === IO ? void 0 : r;
    }
    return NO.call(t, e) ? t[e] : void 0;
  }
  var jO = LO,
    qO = Object.prototype,
    MO = qO.hasOwnProperty;
  function $O(e) {
    var t = this.__data__;
    return Hr ? t[e] !== void 0 : MO.call(t, e);
  }
  var UO = $O,
    HO = '__lodash_hash_undefined__';
  function zO(e, t) {
    var r = this.__data__;
    return (
      (this.size += this.has(e) ? 0 : 1),
      (r[e] = Hr && t === void 0 ? HO : t),
      this
    );
  }
  var GO = zO;
  function er(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  er.prototype.clear = OO;
  er.prototype.delete = PO;
  er.prototype.get = jO;
  er.prototype.has = UO;
  er.prototype.set = GO;
  var wm = er;
  function WO() {
    (this.__data__ = []), (this.size = 0);
  }
  var VO = WO;
  function KO(e, t) {
    for (var r = e.length; r--; ) if (xO(e[r][0], t)) return r;
    return -1;
  }
  var Qn = KO,
    YO = Array.prototype,
    XO = YO.splice;
  function JO(e) {
    var t = this.__data__,
      r = Qn(t, e);
    if (r < 0) return !1;
    var n = t.length - 1;
    return r == n ? t.pop() : XO.call(t, r, 1), --this.size, !0;
  }
  var QO = JO;
  function ZO(e) {
    var t = this.__data__,
      r = Qn(t, e);
    return r < 0 ? void 0 : t[r][1];
  }
  var e6 = ZO;
  function t6(e) {
    return Qn(this.__data__, e) > -1;
  }
  var r6 = t6;
  function n6(e, t) {
    var r = this.__data__,
      n = Qn(r, e);
    return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
  }
  var a6 = n6;
  function tr(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  tr.prototype.clear = VO;
  tr.prototype.delete = QO;
  tr.prototype.get = e6;
  tr.prototype.has = r6;
  tr.prototype.set = a6;
  var o6 = tr,
    i6 = km(wi, 'Map'),
    u6 = i6;
  function s6() {
    (this.size = 0),
      (this.__data__ = {
        hash: new wm(),
        map: new (u6 || o6)(),
        string: new wm(),
      });
  }
  var l6 = s6;
  function c6(e) {
    var t = typeof e;
    return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
      ? e !== '__proto__'
      : e === null;
  }
  var d6 = c6;
  function p6(e, t) {
    var r = e.__data__;
    return d6(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map;
  }
  var Zn = p6;
  function f6(e) {
    var t = Zn(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  }
  var h6 = f6;
  function m6(e) {
    return Zn(this, e).get(e);
  }
  var g6 = m6;
  function y6(e) {
    return Zn(this, e).has(e);
  }
  var b6 = y6;
  function A6(e, t) {
    var r = Zn(this, e),
      n = r.size;
    return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
  }
  var E6 = A6;
  function rr(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  rr.prototype.clear = l6;
  rr.prototype.delete = h6;
  rr.prototype.get = g6;
  rr.prototype.has = b6;
  rr.prototype.set = E6;
  var Nm = rr,
    v6 = 'Expected a function';
  function _i(e, t) {
    if (typeof e != 'function' || (t != null && typeof t != 'function'))
      throw new TypeError(v6);
    var r = function () {
      var n = arguments,
        a = t ? t.apply(this, n) : n[0],
        o = r.cache;
      if (o.has(a)) return o.get(a);
      var i = e.apply(this, n);
      return (r.cache = o.set(a, i) || o), i;
    };
    return (r.cache = new (_i.Cache || Nm)()), r;
  }
  _i.Cache = Nm;
  var D6 = _i,
    C6 = 500;
  function x6(e) {
    var t = D6(e, function (n) {
        return r.size === C6 && r.clear(), n;
      }),
      r = t.cache;
    return t;
  }
  var F6 = x6,
    S6 =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    w6 = /\\(\\)?/g,
    B6 = F6(function (e) {
      var t = [];
      return (
        e.charCodeAt(0) === 46 && t.push(''),
        e.replace(S6, function (r, n, a, o) {
          t.push(a ? o.replace(w6, '$1') : n || r);
        }),
        t
      );
    }),
    T6 = B6;
  function _6(e) {
    return e == null ? '' : X_(e);
  }
  var O6 = _6;
  function R6(e, t) {
    return Ti(e) ? e : BO(e, t) ? [e] : T6(O6(e));
  }
  var P6 = R6,
    I6 = 1 / 0;
  function k6(e) {
    if (typeof e == 'string' || Bi(e)) return e;
    var t = e + '';
    return t == '0' && 1 / e == -I6 ? '-0' : t;
  }
  var N6 = k6;
  function L6(e, t) {
    t = P6(t, e);
    for (var r = 0, n = t.length; e != null && r < n; ) e = e[N6(t[r++])];
    return r && r == n ? e : void 0;
  }
  var j6 = L6;
  function q6(e, t, r) {
    var n = e == null ? void 0 : j6(e, t);
    return n === void 0 ? r : n;
  }
  var M6 = q6,
    Oi = F_,
    $6 = (e) => {
      let t = null,
        r = !1,
        n = !1,
        a = !1,
        o = '';
      if (e.indexOf('//') >= 0 || e.indexOf('/*') >= 0)
        for (let i = 0; i < e.length; i += 1)
          !t && !r && !n && !a
            ? e[i] === '"' || e[i] === "'" || e[i] === '`'
              ? (t = e[i])
              : e[i] === '/' && e[i + 1] === '*'
              ? (r = !0)
              : e[i] === '/' && e[i + 1] === '/'
              ? (n = !0)
              : e[i] === '/' && e[i + 1] !== '/' && (a = !0)
            : (t &&
                ((e[i] === t && e[i - 1] !== '\\') ||
                  (e[i] ===
                    `
` &&
                    t !== '`')) &&
                (t = null),
              a &&
                ((e[i] === '/' && e[i - 1] !== '\\') ||
                  e[i] ===
                    `
`) &&
                (a = !1),
              r && e[i - 1] === '/' && e[i - 2] === '*' && (r = !1),
              n &&
                e[i] ===
                  `
` &&
                (n = !1)),
            !r && !n && (o += e[i]);
      else o = e;
      return o;
    },
    U6 = (0, Lm.default)(1e4)((e) => $6(e).replace(/\n\s*/g, '').trim()),
    H6 = function (t, r) {
      let n = r.slice(0, r.indexOf('{')),
        a = r.slice(r.indexOf('{'));
      if (n.includes('=>') || n.includes('function')) return r;
      let o = n;
      return (o = o.replace(t, 'function')), o + a;
    },
    z6 = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/,
    G6 = (e) => e.match(/^[\[\{\"\}].*[\]\}\"]$/);
  function jm(e) {
    if (!Oi(e)) return e;
    let t = e,
      r = !1;
    return (
      typeof Event < 'u' && e instanceof Event && ((t = Dm(t)), (r = !0)),
      (t = Object.keys(t).reduce((n, a) => {
        try {
          t[a] && t[a].toJSON, (n[a] = t[a]);
        } catch {
          r = !0;
        }
        return n;
      }, {})),
      r ? t : e
    );
  }
  var W6 = function (t) {
      let r, n, a, o;
      return function (u, s) {
        try {
          if (u === '')
            return (
              (o = []), (r = new Map([[s, '[]']])), (n = new Map()), (a = []), s
            );
          let p = n.get(this) || this;
          for (; a.length && p !== a[0]; ) a.shift(), o.pop();
          if (typeof s == 'boolean') return s;
          if (s === void 0) return t.allowUndefined ? '_undefined_' : void 0;
          if (s === null) return null;
          if (typeof s == 'number')
            return s === -1 / 0
              ? '_-Infinity_'
              : s === 1 / 0
              ? '_Infinity_'
              : Number.isNaN(s)
              ? '_NaN_'
              : s;
          if (typeof s == 'bigint') return `_bigint_${s.toString()}`;
          if (typeof s == 'string')
            return z6.test(s) ? (t.allowDate ? `_date_${s}` : void 0) : s;
          if ((0, D_.default)(s))
            return t.allowRegExp ? `_regexp_${s.flags}|${s.source}` : void 0;
          if ((0, C_.default)(s)) {
            if (!t.allowFunction) return;
            let { name: A } = s,
              h = s.toString();
            return h.match(
              /(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/,
            )
              ? `_function_${A}|${(() => {}).toString()}`
              : `_function_${A}|${U6(H6(u, h))}`;
          }
          if ((0, x_.default)(s)) {
            if (!t.allowSymbol) return;
            let A = Symbol.keyFor(s);
            return A !== void 0
              ? `_gsymbol_${A}`
              : `_symbol_${s.toString().slice(7, -1)}`;
          }
          if (a.length >= t.maxDepth)
            return Array.isArray(s) ? `[Array(${s.length})]` : '[Object]';
          if (s === this) return `_duplicate_${JSON.stringify(o)}`;
          if (
            s.constructor &&
            s.constructor.name &&
            s.constructor.name !== 'Object' &&
            !Array.isArray(s) &&
            !t.allowClass
          )
            return;
          let y = r.get(s);
          if (!y) {
            let A = Array.isArray(s) ? s : jm(s);
            if (
              s.constructor &&
              s.constructor.name &&
              s.constructor.name !== 'Object' &&
              !Array.isArray(s) &&
              t.allowClass
            )
              try {
                Object.assign(A, { '_constructor-name_': s.constructor.name });
              } catch {}
            return (
              o.push(u),
              a.unshift(A),
              r.set(s, JSON.stringify(o)),
              s !== A && n.set(s, A),
              A
            );
          }
          return `_duplicate_${y}`;
        } catch {
          return;
        }
      };
    },
    V6 = function reviver(options) {
      let refs = [],
        root;
      return function revive(key, value) {
        if (
          (key === '' &&
            ((root = value),
            refs.forEach(({ target: e, container: t, replacement: r }) => {
              let n = G6(r) ? JSON.parse(r) : r.split('.');
              n.length === 0 ? (t[e] = root) : (t[e] = M6(root, n));
            })),
          key === '_constructor-name_')
        )
          return value;
        if (Oi(value) && value['_constructor-name_'] && options.allowFunction) {
          let e = value['_constructor-name_'];
          if (e !== 'Object') {
            let t = new Function(
              `return function ${e.replace(/[^a-zA-Z0-9$_]+/g, '')}(){}`,
            )();
            Object.setPrototypeOf(value, new t());
          }
          return delete value['_constructor-name_'], value;
        }
        if (
          typeof value == 'string' &&
          value.startsWith('_function_') &&
          options.allowFunction
        ) {
          let [, name, source] = value.match(/_function_([^|]*)\|(.*)/) || [],
            sourceSanitized = source.replace(/[(\(\))|\\| |\]|`]*$/, '');
          if (!options.lazyEval) return eval(`(${sourceSanitized})`);
          let result = (...args) => {
            let f = eval(`(${sourceSanitized})`);
            return f(...args);
          };
          return (
            Object.defineProperty(result, 'toString', {
              value: () => sourceSanitized,
            }),
            Object.defineProperty(result, 'name', { value: name }),
            result
          );
        }
        if (
          typeof value == 'string' &&
          value.startsWith('_regexp_') &&
          options.allowRegExp
        ) {
          let [, e, t] = value.match(/_regexp_([^|]*)\|(.*)/) || [];
          return new RegExp(t, e);
        }
        return typeof value == 'string' &&
          value.startsWith('_date_') &&
          options.allowDate
          ? new Date(value.replace('_date_', ''))
          : typeof value == 'string' && value.startsWith('_duplicate_')
          ? (refs.push({
              target: key,
              container: this,
              replacement: value.replace(/^_duplicate_/, ''),
            }),
            null)
          : typeof value == 'string' &&
            value.startsWith('_symbol_') &&
            options.allowSymbol
          ? Symbol(value.replace('_symbol_', ''))
          : typeof value == 'string' &&
            value.startsWith('_gsymbol_') &&
            options.allowSymbol
          ? Symbol.for(value.replace('_gsymbol_', ''))
          : typeof value == 'string' && value === '_-Infinity_'
          ? -1 / 0
          : typeof value == 'string' && value === '_Infinity_'
          ? 1 / 0
          : typeof value == 'string' && value === '_NaN_'
          ? NaN
          : typeof value == 'string' &&
            value.startsWith('_bigint_') &&
            typeof BigInt == 'function'
          ? BigInt(value.replace('_bigint_', ''))
          : value;
      };
    },
    qm = {
      maxDepth: 10,
      space: void 0,
      allowFunction: !0,
      allowRegExp: !0,
      allowDate: !0,
      allowClass: !0,
      allowUndefined: !0,
      allowSymbol: !0,
      lazyEval: !0,
    },
    Mm = (e, t = {}) => {
      let r = { ...qm, ...t };
      return JSON.stringify(jm(e), W6(r), t.space);
    },
    K6 = () => {
      let e = new Map();
      return function t(r) {
        Oi(r) &&
          Object.entries(r).forEach(([n, a]) => {
            a === '_undefined_'
              ? (r[n] = void 0)
              : e.get(a) || (e.set(a, !0), t(a));
          }),
          Array.isArray(r) &&
            r.forEach((n, a) => {
              n === '_undefined_'
                ? (e.set(n, !0), (r[a] = void 0))
                : e.get(n) || (e.set(n, !0), t(n));
            });
      };
    },
    gee = (e, t = {}) => {
      let r = { ...qm, ...t },
        n = JSON.parse(e, V6(r));
      return K6()(n), n;
    };
  var c9 = fe(Zm(), 1);
  var d9 = M.div(Tt, ({ theme: e }) => ({
      backgroundColor:
        e.base === 'light' ? 'rgba(0,0,0,.01)' : 'rgba(255,255,255,.01)',
      borderRadius: e.appBorderRadius,
      border: `1px dashed ${e.appBorderColor}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      margin: '25px 0 40px',
      color: de(0.3, e.color.defaultText),
      fontSize: e.typography.size.s2,
    })),
    Vi = (e) =>
      g.createElement(d9, {
        ...e,
        className: 'docblock-emptyblock sb-unstyled',
      }),
    p9 = M(Yr)(({ theme: e }) => ({
      fontSize: `${e.typography.size.s2 - 1}px`,
      lineHeight: '19px',
      margin: '25px 0 40px',
      borderRadius: e.appBorderRadius,
      boxShadow:
        e.base === 'light'
          ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
          : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
      'pre.prismjs': { padding: 20, background: 'inherit' },
    })),
    f9 = M.div(({ theme: e }) => ({
      background: e.background.content,
      borderRadius: e.appBorderRadius,
      border: `1px solid ${e.appBorderColor}`,
      boxShadow:
        e.base === 'light'
          ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
          : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
      margin: '25px 0 40px',
      padding: '20px 20px 20px 22px',
    })),
    ia = M.div(({ theme: e }) => ({
      animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
      background: e.appBorderColor,
      height: 17,
      marginTop: 1,
      width: '60%',
      [`&:first-child${xu}`]: { margin: 0 },
    })),
    h9 = () =>
      g.createElement(
        f9,
        null,
        g.createElement(ia, null),
        g.createElement(ia, { style: { width: '80%' } }),
        g.createElement(ia, { style: { width: '30%' } }),
        g.createElement(ia, { style: { width: '80%' } }),
      ),
    tu = ({
      isLoading: e,
      error: t,
      language: r,
      code: n,
      dark: a,
      format: o,
      ...i
    }) => {
      if (e) return g.createElement(h9, null);
      if (t) return g.createElement(Vi, null, t);
      let u = g.createElement(
        p9,
        {
          bordered: !0,
          copyable: !0,
          format: o,
          language: r,
          className: 'docblock-source sb-unstyled',
          ...i,
        },
        n,
      );
      if (typeof a > 'u') return u;
      let s = a ? Na.dark : Na.light;
      return g.createElement(Du, { theme: Cu(s) }, u);
    };
  tu.defaultProps = { format: !1 };
  var be = (e) =>
      `& :where(${e}:not(.sb-anchor, .sb-unstyled, .sb-unstyled ${e}))`,
    ru = 600,
    are = M.h1(Tt, ({ theme: e }) => ({
      color: e.color.defaultText,
      fontSize: e.typography.size.m3,
      fontWeight: e.typography.weight.bold,
      lineHeight: '32px',
      [`@media (min-width: ${ru}px)`]: {
        fontSize: e.typography.size.l1,
        lineHeight: '36px',
        marginBottom: '16px',
      },
    })),
    ore = M.h2(Tt, ({ theme: e }) => ({
      fontWeight: e.typography.weight.regular,
      fontSize: e.typography.size.s3,
      lineHeight: '20px',
      borderBottom: 'none',
      marginBottom: 15,
      [`@media (min-width: ${ru}px)`]: {
        fontSize: e.typography.size.m1,
        lineHeight: '28px',
        marginBottom: 24,
      },
      color: de(0.25, e.color.defaultText),
    })),
    ire = M.div(({ theme: e }) => {
      let t = {
          fontFamily: e.typography.fonts.base,
          fontSize: e.typography.size.s3,
          margin: 0,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
          WebkitOverflowScrolling: 'touch',
        },
        r = {
          margin: '20px 0 8px',
          padding: 0,
          cursor: 'text',
          position: 'relative',
          color: e.color.defaultText,
          '&:first-of-type': { marginTop: 0, paddingTop: 0 },
          '&:hover a.anchor': { textDecoration: 'none' },
          '& code': { fontSize: 'inherit' },
        },
        n = {
          lineHeight: 1,
          margin: '0 2px',
          padding: '3px 5px',
          whiteSpace: 'nowrap',
          borderRadius: 3,
          fontSize: e.typography.size.s2 - 1,
          border:
            e.base === 'light'
              ? `1px solid ${e.color.mediumlight}`
              : `1px solid ${e.color.darker}`,
          color:
            e.base === 'light'
              ? de(0.1, e.color.defaultText)
              : de(0.3, e.color.defaultText),
          backgroundColor:
            e.base === 'light' ? e.color.lighter : e.color.border,
        };
      return {
        maxWidth: 1e3,
        width: '100%',
        [be('a')]: {
          ...t,
          fontSize: 'inherit',
          lineHeight: '24px',
          color: e.color.secondary,
          textDecoration: 'none',
          '&.absent': { color: '#cc0000' },
          '&.anchor': {
            display: 'block',
            paddingLeft: 30,
            marginLeft: -30,
            cursor: 'pointer',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
          },
        },
        [be('blockquote')]: {
          ...t,
          margin: '16px 0',
          borderLeft: `4px solid ${e.color.medium}`,
          padding: '0 15px',
          color: e.color.dark,
          '& > :first-of-type': { marginTop: 0 },
          '& > :last-child': { marginBottom: 0 },
        },
        [be('div')]: t,
        [be('dl')]: {
          ...t,
          margin: '16px 0',
          padding: 0,
          '& dt': {
            fontSize: '14px',
            fontWeight: 'bold',
            fontStyle: 'italic',
            padding: 0,
            margin: '16px 0 4px',
          },
          '& dt:first-of-type': { padding: 0 },
          '& dt > :first-of-type': { marginTop: 0 },
          '& dt > :last-child': { marginBottom: 0 },
          '& dd': { margin: '0 0 16px', padding: '0 15px' },
          '& dd > :first-of-type': { marginTop: 0 },
          '& dd > :last-child': { marginBottom: 0 },
        },
        [be('h1')]: {
          ...t,
          ...r,
          fontSize: `${e.typography.size.l1}px`,
          fontWeight: e.typography.weight.bold,
        },
        [be('h2')]: {
          ...t,
          ...r,
          fontSize: `${e.typography.size.m2}px`,
          paddingBottom: 4,
          borderBottom: `1px solid ${e.appBorderColor}`,
        },
        [be('h3')]: {
          ...t,
          ...r,
          fontSize: `${e.typography.size.m1}px`,
          fontWeight: e.typography.weight.bold,
        },
        [be('h4')]: { ...t, ...r, fontSize: `${e.typography.size.s3}px` },
        [be('h5')]: { ...t, ...r, fontSize: `${e.typography.size.s2}px` },
        [be('h6')]: {
          ...t,
          ...r,
          fontSize: `${e.typography.size.s2}px`,
          color: e.color.dark,
        },
        [be('hr')]: {
          border: '0 none',
          borderTop: `1px solid ${e.appBorderColor}`,
          height: 4,
          padding: 0,
        },
        [be('img')]: { maxWidth: '100%' },
        [be('li')]: {
          ...t,
          fontSize: e.typography.size.s2,
          color: e.color.defaultText,
          lineHeight: '24px',
          '& + li': { marginTop: '.25em' },
          '& ul, & ol': { marginTop: '.25em', marginBottom: 0 },
          '& code': n,
        },
        [be('ol')]: {
          ...t,
          margin: '16px 0',
          paddingLeft: 30,
          '& :first-of-type': { marginTop: 0 },
          '& :last-child': { marginBottom: 0 },
        },
        [be('p')]: {
          ...t,
          margin: '16px 0',
          fontSize: e.typography.size.s2,
          lineHeight: '24px',
          color: e.color.defaultText,
          '& code': n,
        },
        [be('pre')]: {
          ...t,
          fontFamily: e.typography.fonts.mono,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          lineHeight: '18px',
          padding: '11px 1rem',
          whiteSpace: 'pre-wrap',
          color: 'inherit',
          borderRadius: 3,
          margin: '1rem 0',
          '&:not(.prismjs)': {
            background: 'transparent',
            border: 'none',
            borderRadius: 0,
            padding: 0,
            margin: 0,
          },
          '& pre, &.prismjs': {
            padding: 15,
            margin: 0,
            whiteSpace: 'pre-wrap',
            color: 'inherit',
            fontSize: '13px',
            lineHeight: '19px',
            code: { color: 'inherit', fontSize: 'inherit' },
          },
          '& code': { whiteSpace: 'pre' },
          '& code, & tt': { border: 'none' },
        },
        [be('span')]: {
          ...t,
          '&.frame': {
            display: 'block',
            overflow: 'hidden',
            '& > span': {
              border: `1px solid ${e.color.medium}`,
              display: 'block',
              float: 'left',
              overflow: 'hidden',
              margin: '13px 0 0',
              padding: 7,
              width: 'auto',
            },
            '& span img': { display: 'block', float: 'left' },
            '& span span': {
              clear: 'both',
              color: e.color.darkest,
              display: 'block',
              padding: '5px 0 0',
            },
          },
          '&.align-center': {
            display: 'block',
            overflow: 'hidden',
            clear: 'both',
            '& > span': {
              display: 'block',
              overflow: 'hidden',
              margin: '13px auto 0',
              textAlign: 'center',
            },
            '& span img': { margin: '0 auto', textAlign: 'center' },
          },
          '&.align-right': {
            display: 'block',
            overflow: 'hidden',
            clear: 'both',
            '& > span': {
              display: 'block',
              overflow: 'hidden',
              margin: '13px 0 0',
              textAlign: 'right',
            },
            '& span img': { margin: 0, textAlign: 'right' },
          },
          '&.float-left': {
            display: 'block',
            marginRight: 13,
            overflow: 'hidden',
            float: 'left',
            '& span': { margin: '13px 0 0' },
          },
          '&.float-right': {
            display: 'block',
            marginLeft: 13,
            overflow: 'hidden',
            float: 'right',
            '& > span': {
              display: 'block',
              overflow: 'hidden',
              margin: '13px auto 0',
              textAlign: 'right',
            },
          },
        },
        [be('table')]: {
          ...t,
          margin: '16px 0',
          fontSize: e.typography.size.s2,
          lineHeight: '24px',
          padding: 0,
          borderCollapse: 'collapse',
          '& tr': {
            borderTop: `1px solid ${e.appBorderColor}`,
            backgroundColor: e.appContentBg,
            margin: 0,
            padding: 0,
          },
          '& tr:nth-of-type(2n)': {
            backgroundColor:
              e.base === 'dark' ? e.color.darker : e.color.lighter,
          },
          '& tr th': {
            fontWeight: 'bold',
            color: e.color.defaultText,
            border: `1px solid ${e.appBorderColor}`,
            margin: 0,
            padding: '6px 13px',
          },
          '& tr td': {
            border: `1px solid ${e.appBorderColor}`,
            color: e.color.defaultText,
            margin: 0,
            padding: '6px 13px',
          },
          '& tr th :first-of-type, & tr td :first-of-type': { marginTop: 0 },
          '& tr th :last-child, & tr td :last-child': { marginBottom: 0 },
        },
        [be('ul')]: {
          ...t,
          margin: '16px 0',
          paddingLeft: 30,
          '& :first-of-type': { marginTop: 0 },
          '& :last-child': { marginBottom: 0 },
          listStyle: 'disc',
        },
      };
    }),
    ure = M.div(({ theme: e }) => ({
      background: e.background.content,
      display: 'flex',
      justifyContent: 'center',
      padding: '4rem 20px',
      minHeight: '100vh',
      boxSizing: 'border-box',
      gap: '3rem',
      [`@media (min-width: ${ru}px)`]: {},
    }));
  var la = (e) => ({
      borderRadius: e.appBorderRadius,
      background: e.background.content,
      boxShadow:
        e.base === 'light'
          ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
          : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
      border: `1px solid ${e.appBorderColor}`,
    }),
    m9 = ({ zoom: e, resetZoom: t }) =>
      g.createElement(
        g.Fragment,
        null,
        g.createElement(
          ht,
          {
            key: 'zoomin',
            onClick: (r) => {
              r.preventDefault(), e(0.8);
            },
            title: 'Zoom in',
          },
          g.createElement(Te, { icon: 'zoom' }),
        ),
        g.createElement(
          ht,
          {
            key: 'zoomout',
            onClick: (r) => {
              r.preventDefault(), e(1.25);
            },
            title: 'Zoom out',
          },
          g.createElement(Te, { icon: 'zoomout' }),
        ),
        g.createElement(
          ht,
          {
            key: 'zoomreset',
            onClick: (r) => {
              r.preventDefault(), t();
            },
            title: 'Reset zoom',
          },
          g.createElement(Te, { icon: 'zoomreset' }),
        ),
      ),
    g9 = M(Da)({
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      transition: 'transform .2s linear',
    }),
    y9 = ({
      isLoading: e,
      storyId: t,
      baseUrl: r,
      zoom: n,
      resetZoom: a,
      ...o
    }) =>
      g.createElement(
        g9,
        { ...o },
        g.createElement(
          fu,
          { key: 'left' },
          e
            ? [1, 2, 3].map((i) => g.createElement(Fa, { key: i }))
            : g.createElement(m9, { zoom: n, resetZoom: a }),
        ),
      ),
    py = sr({ scale: 1 }),
    { window: b9 } = ue,
    A9 = class extends Je {
      constructor() {
        super(...arguments), (this.iframe = null);
      }
      componentDidMount() {
        let { id: e } = this.props;
        this.iframe = b9.document.getElementById(e);
      }
      shouldComponentUpdate(e) {
        let { scale: t } = e;
        return (
          t !== this.props.scale &&
            this.setIframeBodyStyle({
              width: `${t * 100}%`,
              height: `${t * 100}%`,
              transform: `scale(${1 / t})`,
              transformOrigin: 'top left',
            }),
          !1
        );
      }
      setIframeBodyStyle(e) {
        return Object.assign(this.iframe.contentDocument.body.style, e);
      }
      render() {
        let {
          id: e,
          title: t,
          src: r,
          allowFullScreen: n,
          scale: a,
          ...o
        } = this.props;
        return g.createElement('iframe', {
          id: e,
          title: t,
          src: r,
          ...(n ? { allow: 'fullscreen' } : {}),
          loading: 'lazy',
          ...o,
        });
      }
    },
    { PREVIEW_URL: E9 } = ue,
    v9 = E9 || 'iframe.html',
    Ki = ({ story: e, primary: t }) => `story--${e.id}${t ? '--primary' : ''}`,
    D9 = (e) => {
      let t = Fe(),
        [r, n] = ae(!0),
        [a, o] = ae(),
        {
          story: i,
          height: u,
          autoplay: s,
          forceInitialArgs: p,
          renderStoryToElement: y,
        } = e;
      ge(() => {
        if (!(i && t.current)) return () => {};
        let h = t.current,
          m = y(
            i,
            h,
            {
              showMain: () => {},
              showError: ({ title: E, description: b }) =>
                o(new Error(`${E} - ${b}`)),
              showException: (E) => o(E),
            },
            { autoplay: s, forceInitialArgs: p },
          );
        return (
          n(!1),
          () => {
            Promise.resolve().then(() => m());
          }
        );
      }, [s, y, i]);
      let A = '<span></span>';
      return a
        ? g.createElement('pre', null, g.createElement(va, { error: a }))
        : g.createElement(
            g.Fragment,
            null,
            u
              ? g.createElement(
                  'style',
                  null,
                  `#${Ki(
                    e,
                  )} { min-height: ${u}; transform: translateZ(0); overflow: auto }`,
                )
              : null,
            r && g.createElement(nu, null),
            g.createElement('div', {
              ref: t,
              id: `${Ki(e)}-inner`,
              'data-name': i.name,
              dangerouslySetInnerHTML: { __html: A },
            }),
          );
    },
    C9 = ({ story: e, height: t = '500px' }) =>
      g.createElement(
        'div',
        { style: { width: '100%', height: t } },
        g.createElement(py.Consumer, null, ({ scale: r }) =>
          g.createElement(A9, {
            key: 'iframe',
            id: `iframe--${e.id}`,
            title: e.name,
            src: Pa(v9, e.id, { viewMode: 'story' }),
            allowFullScreen: !0,
            scale: r,
            style: { width: '100%', height: '100%', border: '0 none' },
          }),
        ),
      ),
    x9 = (e) => {
      let { inline: t } = e;
      return g.createElement(
        'div',
        {
          id: Ki(e),
          className: 'sb-story sb-unstyled',
          'data-story-block': 'true',
        },
        t ? g.createElement(D9, { ...e }) : g.createElement(C9, { ...e }),
      );
    },
    nu = () => g.createElement(Sa, null),
    F9 = M.div(
      ({ isColumn: e, columns: t, layout: r }) => ({
        display: e || !t ? 'block' : 'flex',
        position: 'relative',
        flexWrap: 'wrap',
        overflow: 'auto',
        flexDirection: e ? 'column' : 'row',
        '& .innerZoomElementWrapper > *': e
          ? {
              width: r !== 'fullscreen' ? 'calc(100% - 20px)' : '100%',
              display: 'block',
            }
          : {
              maxWidth: r !== 'fullscreen' ? 'calc(100% - 20px)' : '100%',
              display: 'inline-block',
            },
      }),
      ({ layout: e = 'padded' }) =>
        e === 'centered' || e === 'padded'
          ? {
              padding: '30px 20px',
              margin: -10,
              '& .innerZoomElementWrapper > *': {
                width: 'auto',
                border: '10px solid transparent!important',
              },
            }
          : {},
      ({ layout: e = 'padded' }) =>
        e === 'centered'
          ? {
              display: 'flex',
              justifyContent: 'center',
              justifyItems: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }
          : {},
      ({ columns: e }) =>
        e && e > 1
          ? {
              '.innerZoomElementWrapper > *': {
                minWidth: `calc(100% / ${e} - 20px)`,
              },
            }
          : {},
    ),
    Vg = M(tu)(({ theme: e }) => ({
      margin: 0,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomLeftRadius: e.appBorderRadius,
      borderBottomRightRadius: e.appBorderRadius,
      border: 'none',
      background:
        e.base === 'light'
          ? 'rgba(0, 0, 0, 0.85)'
          : $e(0.05, e.background.content),
      color: e.color.lightest,
      button: {
        background:
          e.base === 'light'
            ? 'rgba(0, 0, 0, 0.85)'
            : $e(0.05, e.background.content),
      },
    })),
    S9 = M.div(
      ({ theme: e, withSource: t, isExpanded: r }) => ({
        position: 'relative',
        overflow: 'hidden',
        margin: '25px 0 40px',
        ...la(e),
        borderBottomLeftRadius: t && r && 0,
        borderBottomRightRadius: t && r && 0,
        borderBottomWidth: r && 0,
        'h3 + &': { marginTop: '16px' },
      }),
      ({ withToolbar: e }) => e && { paddingTop: 40 },
    ),
    w9 = (e, t, r) => {
      switch (!0) {
        case !!(e && e.error):
          return {
            source: null,
            actionItem: {
              title: 'No code available',
              className: 'docblock-code-toggle docblock-code-toggle--disabled',
              disabled: !0,
              onClick: () => r(!1),
            },
          };
        case t:
          return {
            source: g.createElement(Vg, { ...e, dark: !0 }),
            actionItem: {
              title: 'Hide code',
              className: 'docblock-code-toggle docblock-code-toggle--expanded',
              onClick: () => r(!1),
            },
          };
        default:
          return {
            source: g.createElement(Vg, { ...e, dark: !0 }),
            actionItem: {
              title: 'Show code',
              className: 'docblock-code-toggle',
              onClick: () => r(!0),
            },
          };
      }
    };
  function B9(e) {
    if (Kr.count(e) === 1) {
      let t = e;
      if (t.props) return t.props.id;
    }
    return null;
  }
  var T9 = M(y9)({
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 40,
    }),
    _9 = M.div({ overflow: 'hidden', position: 'relative' }),
    Yi = ({
      isLoading: e,
      isColumn: t,
      columns: r,
      children: n,
      withSource: a,
      withToolbar: o = !1,
      isExpanded: i = !1,
      additionalActions: u,
      className: s,
      layout: p = 'padded',
      ...y
    }) => {
      let [A, h] = ae(i),
        { source: m, actionItem: E } = w9(a, A, h),
        [b, x] = ae(1),
        F = [s].concat(['sbdocs', 'sbdocs-preview', 'sb-unstyled']),
        B = a ? [E] : [],
        [I, j] = ae(u ? [...u] : []),
        w = [...B, ...I],
        { window: k } = ue,
        N = me(async (V) => {
          let { createCopyToClipboardFunction: U } =
            await Promise.resolve().then(() => (cr(), vu));
          U();
        }, []),
        H = (V) => {
          let U = k.getSelection();
          (U && U.type === 'Range') ||
            (V.preventDefault(),
            I.filter((Q) => Q.title === 'Copied').length === 0 &&
              N(m.props.code).then(() => {
                j([...I, { title: 'Copied', onClick: () => {} }]),
                  k.setTimeout(
                    () => j(I.filter((Q) => Q.title !== 'Copied')),
                    1500,
                  );
              }));
        };
      return g.createElement(
        S9,
        { withSource: a, withToolbar: o, ...y, className: F.join(' ') },
        o &&
          g.createElement(T9, {
            isLoading: e,
            border: !0,
            zoom: (V) => x(b * V),
            resetZoom: () => x(1),
            storyId: B9(n),
            baseUrl: './iframe.html',
          }),
        g.createElement(
          py.Provider,
          { value: { scale: b } },
          g.createElement(
            _9,
            { className: 'docs-story', onCopyCapture: a && H },
            g.createElement(
              F9,
              { isColumn: t || !Array.isArray(n), columns: r, layout: p },
              g.createElement(
                Oa.Element,
                { scale: b },
                Array.isArray(n)
                  ? n.map((V, U) => g.createElement('div', { key: U }, V))
                  : g.createElement('div', null, n),
              ),
            ),
            g.createElement(ba, { actionItems: w }),
          ),
        ),
        a && A && m,
      );
    },
    O9 = M(Yi)(() => ({
      '.docs-story': { paddingTop: 32, paddingBottom: 40 },
    })),
    R9 = () =>
      g.createElement(
        O9,
        { isLoading: !0, withToolbar: !0 },
        g.createElement(nu, null),
      ),
    P9 = M.table(({ theme: e }) => ({
      '&&': {
        borderCollapse: 'collapse',
        borderSpacing: 0,
        border: 'none',
        tr: { border: 'none !important', background: 'none' },
        'td, th': { padding: 0, border: 'none', width: 'auto!important' },
        marginTop: 0,
        marginBottom: 0,
        'th:first-of-type, td:first-of-type': { paddingLeft: 0 },
        'th:last-of-type, td:last-of-type': { paddingRight: 0 },
        td: {
          paddingTop: 0,
          paddingBottom: 4,
          '&:not(:first-of-type)': { paddingLeft: 10, paddingRight: 0 },
        },
        tbody: { boxShadow: 'none', border: 'none' },
        code: Bt({ theme: e }),
        div: { span: { fontWeight: 'bold' } },
        '& code': {
          margin: 0,
          display: 'inline-block',
          fontSize: e.typography.size.s1,
        },
      },
    })),
    I9 = ({ tags: e }) => {
      let t = (e.params || []).filter((o) => o.description),
        r = t.length !== 0,
        n = e.deprecated != null,
        a = e.returns != null && e.returns.description != null;
      return !r && !a && !n
        ? null
        : g.createElement(
            g.Fragment,
            null,
            g.createElement(
              P9,
              null,
              g.createElement(
                'tbody',
                null,
                n &&
                  g.createElement(
                    'tr',
                    { key: 'deprecated' },
                    g.createElement(
                      'td',
                      { colSpan: 2 },
                      g.createElement('strong', null, 'Deprecated'),
                      ': ',
                      e.deprecated,
                    ),
                  ),
                r &&
                  t.map((o) =>
                    g.createElement(
                      'tr',
                      { key: o.name },
                      g.createElement(
                        'td',
                        null,
                        g.createElement('code', null, o.name),
                      ),
                      g.createElement('td', null, o.description),
                    ),
                  ),
                a &&
                  g.createElement(
                    'tr',
                    { key: 'returns' },
                    g.createElement(
                      'td',
                      null,
                      g.createElement('code', null, 'Returns'),
                    ),
                    g.createElement('td', null, e.returns.description),
                  ),
              ),
            ),
          );
    },
    Xi = 8,
    Kg = M.div(({ isExpanded: e }) => ({
      display: 'flex',
      flexDirection: e ? 'column' : 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      marginBottom: '-4px',
      minWidth: 100,
    })),
    k9 = M.span(Bt, ({ theme: e, simple: t = !1 }) => ({
      flex: '0 0 auto',
      fontFamily: e.typography.fonts.mono,
      fontSize: e.typography.size.s1,
      wordBreak: 'break-word',
      whiteSpace: 'normal',
      maxWidth: '100%',
      margin: 0,
      marginRight: '4px',
      marginBottom: '4px',
      paddingTop: '2px',
      paddingBottom: '2px',
      lineHeight: '13px',
      ...(t && { background: 'transparent', border: '0 none', paddingLeft: 0 }),
    })),
    N9 = M.button(({ theme: e }) => ({
      fontFamily: e.typography.fonts.mono,
      color: e.color.secondary,
      marginBottom: '4px',
      background: 'none',
      border: 'none',
    })),
    L9 = M.div(Bt, ({ theme: e }) => ({
      fontFamily: e.typography.fonts.mono,
      color: e.color.secondary,
      fontSize: e.typography.size.s1,
      margin: 0,
      whiteSpace: 'nowrap',
      display: 'flex',
      alignItems: 'center',
    })),
    j9 = M.div(({ theme: e, width: t }) => ({
      width: t,
      minWidth: 200,
      maxWidth: 800,
      padding: 15,
      fontFamily: e.typography.fonts.mono,
      fontSize: e.typography.size.s1,
      boxSizing: 'content-box',
      '& code': { padding: '0 !important' },
    })),
    q9 = M(Te)({ height: 10, width: 10, minWidth: 10, marginLeft: 4 }),
    M9 = () => g.createElement('span', null, '-'),
    fy = ({ text: e, simple: t }) => g.createElement(k9, { simple: t }, e),
    $9 = (0, sy.default)(1e3)((e) => {
      let t = e.split(/\r?\n/);
      return `${Math.max(...t.map((r) => r.length))}ch`;
    }),
    U9 = (e) => {
      if (!e) return [e];
      let t = e.split('|').map((r) => r.trim());
      return (0, ly.default)(t);
    },
    Yg = (e, t = !0) => {
      let r = e;
      return (
        t || (r = e.slice(0, Xi)),
        r.map((n) => g.createElement(fy, { key: n, text: n === '' ? '""' : n }))
      );
    },
    H9 = ({ value: e, initialExpandedArgs: t }) => {
      let { summary: r, detail: n } = e,
        [a, o] = ae(!1),
        [i, u] = ae(t || !1);
      if (r == null) return null;
      let s = typeof r.toString == 'function' ? r.toString() : r;
      if (n == null) {
        if (/[(){}[\]<>]/.test(s)) return g.createElement(fy, { text: s });
        let p = U9(s),
          y = p.length;
        return y > Xi
          ? g.createElement(
              Kg,
              { isExpanded: i },
              Yg(p, i),
              g.createElement(
                N9,
                { onClick: () => u(!i) },
                i ? 'Show less...' : `Show ${y - Xi} more...`,
              ),
            )
          : g.createElement(Kg, null, Yg(p));
      }
      return g.createElement(
        _a,
        {
          closeOnOutsideClick: !0,
          placement: 'bottom',
          visible: a,
          onVisibleChange: (p) => {
            o(p);
          },
          tooltip: g.createElement(
            j9,
            { width: $9(n) },
            g.createElement(Yr, { language: 'jsx', format: !1 }, n),
          ),
        },
        g.createElement(
          L9,
          { className: 'sbdocs-expandable' },
          g.createElement('span', null, s),
          g.createElement(q9, { icon: a ? 'arrowup' : 'arrowdown' }),
        ),
      );
    },
    Hi = ({ value: e, initialExpandedArgs: t }) =>
      e == null
        ? g.createElement(M9, null)
        : g.createElement(H9, { value: e, initialExpandedArgs: t }),
    z9 = M.label(({ theme: e }) => ({
      lineHeight: '18px',
      alignItems: 'center',
      marginBottom: 8,
      display: 'inline-block',
      position: 'relative',
      whiteSpace: 'nowrap',
      background: e.boolean.background,
      borderRadius: '3em',
      padding: 1,
      input: {
        appearance: 'none',
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        margin: 0,
        padding: 0,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        borderRadius: '3em',
        '&:focus': {
          outline: 'none',
          boxShadow: `${e.color.secondary} 0 0 0 1px inset !important`,
        },
      },
      span: {
        textAlign: 'center',
        fontSize: e.typography.size.s1,
        fontWeight: e.typography.weight.bold,
        lineHeight: '1',
        cursor: 'pointer',
        display: 'inline-block',
        padding: '7px 15px',
        transition: 'all 100ms ease-out',
        userSelect: 'none',
        borderRadius: '3em',
        color: de(0.5, e.color.defaultText),
        background: 'transparent',
        '&:hover': {
          boxShadow: `${mr(0.3, e.appBorderColor)} 0 0 0 1px inset`,
        },
        '&:active': {
          boxShadow: `${mr(0.05, e.appBorderColor)} 0 0 0 2px inset`,
          color: mr(1, e.appBorderColor),
        },
        '&:first-of-type': { paddingRight: 8 },
        '&:last-of-type': { paddingLeft: 8 },
      },
      'input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type':
        {
          background: e.boolean.selectedBackground,
          boxShadow:
            e.base === 'light'
              ? `${mr(0.1, e.appBorderColor)} 0 0 2px`
              : `${e.appBorderColor} 0 0 0 1px`,
          color: e.color.defaultText,
          padding: '7px 15px',
        },
    })),
    G9 = (e) => e === 'true',
    W9 = ({ name: e, value: t, onChange: r, onBlur: n, onFocus: a }) => {
      let o = me(() => r(!1), [r]);
      if (t === void 0)
        return g.createElement(
          Be.Button,
          { id: dr(e), onClick: o },
          'Set boolean',
        );
      let i = _e(e),
        u = typeof t == 'string' ? G9(t) : t;
      return g.createElement(
        z9,
        { htmlFor: i, title: u ? 'Change to false' : 'Change to true' },
        g.createElement('input', {
          id: i,
          type: 'checkbox',
          onChange: (s) => r(s.target.checked),
          checked: u,
          name: e,
          onBlur: n,
          onFocus: a,
        }),
        g.createElement('span', null, 'False'),
        g.createElement('span', null, 'True'),
      );
    },
    V9 = (e) => {
      let [t, r, n] = e.split('-'),
        a = new Date();
      return (
        a.setFullYear(parseInt(t, 10), parseInt(r, 10) - 1, parseInt(n, 10)), a
      );
    },
    K9 = (e) => {
      let [t, r] = e.split(':'),
        n = new Date();
      return n.setHours(parseInt(t, 10)), n.setMinutes(parseInt(r, 10)), n;
    },
    Y9 = (e) => {
      let t = new Date(e),
        r = `000${t.getFullYear()}`.slice(-4),
        n = `0${t.getMonth() + 1}`.slice(-2),
        a = `0${t.getDate()}`.slice(-2);
      return `${r}-${n}-${a}`;
    },
    X9 = (e) => {
      let t = new Date(e),
        r = `0${t.getHours()}`.slice(-2),
        n = `0${t.getMinutes()}`.slice(-2);
      return `${r}:${n}`;
    },
    J9 = M.div(({ theme: e }) => ({
      flex: 1,
      display: 'flex',
      input: {
        marginLeft: 10,
        flex: 1,
        height: 32,
        '&::-webkit-calendar-picker-indicator': {
          opacity: 0.5,
          height: 12,
          filter: e.base === 'light' ? void 0 : 'invert(1)',
        },
      },
      'input:first-of-type': { marginLeft: 0, flexGrow: 4 },
      'input:last-of-type': { flexGrow: 3 },
    })),
    Q9 = ({ name: e, value: t, onChange: r, onFocus: n, onBlur: a }) => {
      let [o, i] = ae(!0),
        u = Fe(),
        s = Fe();
      ge(() => {
        o !== !1 &&
          (u && u.current && (u.current.value = Y9(t)),
          s && s.current && (s.current.value = X9(t)));
      }, [t]);
      let p = (h) => {
          let m = V9(h.target.value),
            E = new Date(t);
          E.setFullYear(m.getFullYear(), m.getMonth(), m.getDate());
          let b = E.getTime();
          b && r(b), i(!!b);
        },
        y = (h) => {
          let m = K9(h.target.value),
            E = new Date(t);
          E.setHours(m.getHours()), E.setMinutes(m.getMinutes());
          let b = E.getTime();
          b && r(b), i(!!b);
        },
        A = _e(e);
      return g.createElement(
        J9,
        null,
        g.createElement(Be.Input, {
          type: 'date',
          max: '9999-12-31',
          ref: u,
          id: `${A}-date`,
          name: `${A}-date`,
          onChange: p,
          onFocus: n,
          onBlur: a,
        }),
        g.createElement(Be.Input, {
          type: 'time',
          id: `${A}-time`,
          name: `${A}-time`,
          ref: s,
          onChange: y,
          onFocus: n,
          onBlur: a,
        }),
        o ? null : g.createElement('div', null, 'invalid'),
      );
    },
    Z9 = M.label({ display: 'flex' }),
    eR = (e) => {
      let t = parseFloat(e);
      return Number.isNaN(t) ? void 0 : t;
    };
  var tR = ({
      name: e,
      value: t,
      onChange: r,
      min: n,
      max: a,
      step: o,
      onBlur: i,
      onFocus: u,
    }) => {
      let [s, p] = ae(typeof t == 'number' ? t : ''),
        [y, A] = ae(!1),
        [h, m] = ae(null),
        E = me(
          (F) => {
            p(F.target.value);
            let B = parseFloat(F.target.value);
            Number.isNaN(B)
              ? m(new Error(`'${F.target.value}' is not a number`))
              : (r(B), m(null));
          },
          [r, m],
        ),
        b = me(() => {
          p('0'), r(0), A(!0);
        }, [A]),
        x = Fe(null);
      return (
        ge(() => {
          y && x.current && x.current.select();
        }, [y]),
        ge(() => {
          s !== (typeof t == 'number' ? t : '') && p(t);
        }, [t]),
        !y && t === void 0
          ? g.createElement(Be.Button, { id: dr(e), onClick: b }, 'Set number')
          : g.createElement(
              Z9,
              null,
              g.createElement(Be.Input, {
                ref: x,
                id: _e(e),
                type: 'number',
                onChange: E,
                size: 'flex',
                placeholder: 'Edit number...',
                value: s,
                valid: h ? 'error' : null,
                autoFocus: y,
                name: e,
                min: n,
                max: a,
                step: o,
                onFocus: u,
                onBlur: i,
              }),
            )
      );
    },
    hy = (e, t) => {
      let r = t && Object.entries(t).find(([n, a]) => a === e);
      return r ? r[0] : void 0;
    },
    Ji = (e, t) =>
      e && t
        ? Object.entries(t)
            .filter((r) => e.includes(r[1]))
            .map((r) => r[0])
        : [],
    my = (e, t) => e && t && e.map((r) => t[r]),
    rR = M.div(({ isInline: e }) =>
      e
        ? {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            label: { display: 'inline-flex', marginRight: 15 },
          }
        : { label: { display: 'flex' } },
    ),
    nR = M.span({}),
    aR = M.label({
      lineHeight: '20px',
      alignItems: 'center',
      marginBottom: 8,
      '&:last-child': { marginBottom: 0 },
      input: { margin: 0, marginRight: 6 },
    }),
    Xg = ({ name: e, options: t, value: r, onChange: n, isInline: a }) => {
      if (!t)
        return (
          ze.warn(`Checkbox with no options: ${e}`),
          g.createElement(g.Fragment, null, '-')
        );
      let o = Ji(r, t),
        [i, u] = ae(o),
        s = (y) => {
          let A = y.target.value,
            h = [...i];
          h.includes(A) ? h.splice(h.indexOf(A), 1) : h.push(A),
            n(my(h, t)),
            u(h);
        };
      ge(() => {
        u(Ji(r, t));
      }, [r]);
      let p = _e(e);
      return g.createElement(
        rR,
        { isInline: a },
        Object.keys(t).map((y, A) => {
          let h = `${p}-${A}`;
          return g.createElement(
            aR,
            { key: h, htmlFor: h },
            g.createElement('input', {
              type: 'checkbox',
              id: h,
              name: h,
              value: y,
              onChange: s,
              checked: i?.includes(y),
            }),
            g.createElement(nR, null, y),
          );
        }),
      );
    },
    oR = M.div(({ isInline: e }) =>
      e
        ? {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            label: { display: 'inline-flex', marginRight: 15 },
          }
        : { label: { display: 'flex' } },
    ),
    iR = M.span({}),
    uR = M.label({
      lineHeight: '20px',
      alignItems: 'center',
      marginBottom: 8,
      '&:last-child': { marginBottom: 0 },
      input: { margin: 0, marginRight: 6 },
    }),
    Jg = ({ name: e, options: t, value: r, onChange: n, isInline: a }) => {
      if (!t)
        return (
          ze.warn(`Radio with no options: ${e}`),
          g.createElement(g.Fragment, null, '-')
        );
      let o = hy(r, t),
        i = _e(e);
      return g.createElement(
        oR,
        { isInline: a },
        Object.keys(t).map((u, s) => {
          let p = `${i}-${s}`;
          return g.createElement(
            uR,
            { key: p, htmlFor: p },
            g.createElement('input', {
              type: 'radio',
              id: p,
              name: p,
              value: u,
              onChange: (y) => n(t[y.currentTarget.value]),
              checked: u === o,
            }),
            g.createElement(iR, null, u),
          );
        }),
      );
    },
    sR = {
      appearance: 'none',
      border: '0 none',
      boxSizing: 'inherit',
      display: ' block',
      margin: ' 0',
      background: 'transparent',
      padding: 0,
      fontSize: 'inherit',
      position: 'relative',
    },
    gy = M.select(({ theme: e }) => ({
      ...sR,
      boxSizing: 'border-box',
      position: 'relative',
      padding: '6px 10px',
      width: '100%',
      color: e.input.color || 'inherit',
      background: e.input.background,
      borderRadius: e.input.borderRadius,
      boxShadow: `${e.input.border} 0 0 0 1px inset`,
      fontSize: e.typography.size.s2 - 1,
      lineHeight: '20px',
      '&:focus': {
        boxShadow: `${e.color.secondary} 0 0 0 1px inset`,
        outline: 'none',
      },
      '&[disabled]': { cursor: 'not-allowed', opacity: 0.5 },
      '::placeholder': { color: e.textMutedColor },
      '&[multiple]': {
        overflow: 'auto',
        padding: 0,
        option: {
          display: 'block',
          padding: '6px 10px',
          marginLeft: 1,
          marginRight: 1,
        },
      },
    })),
    yy = M.span(({ theme: e }) => ({
      display: 'inline-block',
      lineHeight: 'normal',
      overflow: 'hidden',
      position: 'relative',
      verticalAlign: 'top',
      width: '100%',
      svg: {
        position: 'absolute',
        zIndex: 1,
        pointerEvents: 'none',
        height: '12px',
        marginTop: '-6px',
        right: '12px',
        top: '50%',
        fill: e.textMutedColor,
        path: { fill: e.textMutedColor },
      },
    })),
    Qg = 'Choose option...',
    lR = ({ name: e, value: t, options: r, onChange: n }) => {
      let a = (u) => {
          n(r[u.currentTarget.value]);
        },
        o = hy(t, r) || Qg,
        i = _e(e);
      return g.createElement(
        yy,
        null,
        g.createElement(Te, { icon: 'arrowdown' }),
        g.createElement(
          gy,
          { id: i, value: o, onChange: a },
          g.createElement('option', { key: 'no-selection', disabled: !0 }, Qg),
          Object.keys(r).map((u) => g.createElement('option', { key: u }, u)),
        ),
      );
    },
    cR = ({ name: e, value: t, options: r, onChange: n }) => {
      let a = (u) => {
          let s = Array.from(u.currentTarget.options)
            .filter((p) => p.selected)
            .map((p) => p.value);
          n(my(s, r));
        },
        o = Ji(t, r),
        i = _e(e);
      return g.createElement(
        yy,
        null,
        g.createElement(
          gy,
          { id: i, multiple: !0, value: o, onChange: a },
          Object.keys(r).map((u) => g.createElement('option', { key: u }, u)),
        ),
      );
    },
    Zg = (e) => {
      let { name: t, options: r } = e;
      return r
        ? e.isMulti
          ? g.createElement(cR, { ...e })
          : g.createElement(lR, { ...e })
        : (ze.warn(`Select with no options: ${t}`),
          g.createElement(g.Fragment, null, '-'));
    },
    dR = (e, t) =>
      Array.isArray(e)
        ? e.reduce((r, n) => ((r[t?.[n] || String(n)] = n), r), {})
        : e,
    pR = {
      check: Xg,
      'inline-check': Xg,
      radio: Jg,
      'inline-radio': Jg,
      select: Zg,
      'multi-select': Zg,
    },
    ir = (e) => {
      let { type: t = 'select', labels: r, argType: n } = e,
        a = {
          ...e,
          options: n ? dR(n.options, r) : {},
          isInline: t.includes('inline'),
          isMulti: t.includes('multi'),
        },
        o = pR[t];
      if (o) return g.createElement(o, { ...a });
      throw new Error(`Unknown options type: ${t}`);
    },
    au = 'value',
    fR = 'key',
    hR = 'Error',
    mR = 'Object',
    gR = 'Array',
    yR = 'String',
    bR = 'Number',
    AR = 'Boolean',
    ER = 'Date',
    vR = 'Null',
    DR = 'Undefined',
    CR = 'Function',
    xR = 'Symbol',
    by = 'ADD_DELTA_TYPE',
    Ay = 'REMOVE_DELTA_TYPE',
    Ey = 'UPDATE_DELTA_TYPE';
  function ft(e) {
    return e !== null &&
      typeof e == 'object' &&
      !Array.isArray(e) &&
      typeof e[Symbol.iterator] == 'function'
      ? 'Iterable'
      : Object.prototype.toString.call(e).slice(8, -1);
  }
  function vy(e, t) {
    let r = ft(e),
      n = ft(t);
    return (r === 'Function' || n === 'Function') && n !== r;
  }
  var ou = class extends Je {
    constructor(e) {
      super(e),
        (this.state = { inputRefKey: null, inputRefValue: null }),
        (this.refInputValue = this.refInputValue.bind(this)),
        (this.refInputKey = this.refInputKey.bind(this)),
        (this.onKeydown = this.onKeydown.bind(this)),
        (this.onSubmit = this.onSubmit.bind(this));
    }
    componentDidMount() {
      let { inputRefKey: e, inputRefValue: t } = this.state,
        { onlyValue: r } = this.props;
      e && typeof e.focus == 'function' && e.focus(),
        r && t && typeof t.focus == 'function' && t.focus(),
        document.addEventListener('keydown', this.onKeydown);
    }
    componentWillUnmount() {
      document.removeEventListener('keydown', this.onKeydown);
    }
    onKeydown(e) {
      e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.repeat ||
        ((e.code === 'Enter' || e.key === 'Enter') &&
          (e.preventDefault(), this.onSubmit()),
        (e.code === 'Escape' || e.key === 'Escape') &&
          (e.preventDefault(), this.props.handleCancel()));
    }
    onSubmit() {
      let {
          handleAdd: e,
          onlyValue: t,
          onSubmitValueParser: r,
          keyPath: n,
          deep: a,
        } = this.props,
        { inputRefKey: o, inputRefValue: i } = this.state,
        u = {};
      if (!t) {
        if (!o.value) return;
        u.key = o.value;
      }
      (u.newValue = r(!1, n, a, u.key, i.value)), e(u);
    }
    refInputKey(e) {
      this.state.inputRefKey = e;
    }
    refInputValue(e) {
      this.state.inputRefValue = e;
    }
    render() {
      let {
          handleCancel: e,
          onlyValue: t,
          addButtonElement: r,
          cancelButtonElement: n,
          inputElementGenerator: a,
          keyPath: o,
          deep: i,
        } = this.props,
        u = he(r, { onClick: this.onSubmit }),
        s = he(n, { onClick: e }),
        p = a(au, o, i),
        y = he(p, { placeholder: 'Value', ref: this.refInputValue }),
        A = null;
      if (!t) {
        let h = a(fR, o, i);
        A = he(h, { placeholder: 'Key', ref: this.refInputKey });
      }
      return g.createElement(
        'span',
        { className: 'rejt-add-value-node' },
        A,
        y,
        s,
        u,
      );
    }
  };
  ou.defaultProps = {
    onlyValue: !1,
    addButtonElement: g.createElement('button', null, '+'),
    cancelButtonElement: g.createElement('button', null, 'c'),
  };
  var Dy = class extends Je {
    constructor(e) {
      super(e);
      let t = [...e.keyPath, e.name];
      (this.state = {
        data: e.data,
        name: e.name,
        keyPath: t,
        deep: e.deep,
        nextDeep: e.deep + 1,
        collapsed: e.isCollapsed(t, e.deep, e.data),
        addFormVisible: !1,
      }),
        (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
        (this.handleRemoveItem = this.handleRemoveItem.bind(this)),
        (this.handleAddMode = this.handleAddMode.bind(this)),
        (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
        (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
        (this.handleEditValue = this.handleEditValue.bind(this)),
        (this.onChildUpdate = this.onChildUpdate.bind(this)),
        (this.renderCollapsed = this.renderCollapsed.bind(this)),
        (this.renderNotCollapsed = this.renderNotCollapsed.bind(this));
    }
    static getDerivedStateFromProps(e, t) {
      return e.data !== t.data ? { data: e.data } : null;
    }
    onChildUpdate(e, t) {
      let { data: r, keyPath: n } = this.state;
      (r[e] = t), this.setState({ data: r });
      let { onUpdate: a } = this.props,
        o = n.length;
      a(n[o - 1], r);
    }
    handleAddMode() {
      this.setState({ addFormVisible: !0 });
    }
    handleCollapseMode() {
      this.setState((e) => ({ collapsed: !e.collapsed }));
    }
    handleRemoveItem(e) {
      return () => {
        let { beforeRemoveAction: t, logger: r } = this.props,
          { data: n, keyPath: a, nextDeep: o } = this.state,
          i = n[e];
        t(e, a, o, i)
          .then(() => {
            let u = { keyPath: a, deep: o, key: e, oldValue: i, type: Ay };
            n.splice(e, 1), this.setState({ data: n });
            let { onUpdate: s, onDeltaUpdate: p } = this.props;
            s(a[a.length - 1], n), p(u);
          })
          .catch(r.error);
      };
    }
    handleAddValueAdd({ newValue: e }) {
      let { data: t, keyPath: r, nextDeep: n } = this.state,
        { beforeAddAction: a, logger: o } = this.props;
      a(t.length, r, n, e)
        .then(() => {
          let i = [...t, e];
          this.setState({ data: i }), this.handleAddValueCancel();
          let { onUpdate: u, onDeltaUpdate: s } = this.props;
          u(r[r.length - 1], i),
            s({
              type: by,
              keyPath: r,
              deep: n,
              key: i.length - 1,
              newValue: e,
            });
        })
        .catch(o.error);
    }
    handleAddValueCancel() {
      this.setState({ addFormVisible: !1 });
    }
    handleEditValue({ key: e, value: t }) {
      return new Promise((r, n) => {
        let { beforeUpdateAction: a } = this.props,
          { data: o, keyPath: i, nextDeep: u } = this.state,
          s = o[e];
        a(e, i, u, s, t)
          .then(() => {
            (o[e] = t), this.setState({ data: o });
            let { onUpdate: p, onDeltaUpdate: y } = this.props;
            p(i[i.length - 1], o),
              y({
                type: Ey,
                keyPath: i,
                deep: u,
                key: e,
                newValue: t,
                oldValue: s,
              }),
              r(void 0);
          })
          .catch(n);
      });
    }
    renderCollapsed() {
      let { name: e, data: t, keyPath: r, deep: n } = this.state,
        {
          handleRemove: a,
          readOnly: o,
          getStyle: i,
          dataType: u,
          minusMenuElement: s,
        } = this.props,
        { minus: p, collapsed: y } = i(e, t, r, n, u),
        A = o(e, t, r, n, u),
        h = he(s, { onClick: a, className: 'rejt-minus-menu', style: p });
      return g.createElement(
        'span',
        { className: 'rejt-collapsed' },
        g.createElement(
          'span',
          {
            className: 'rejt-collapsed-text',
            style: y,
            onClick: this.handleCollapseMode,
          },
          '[...] ',
          t.length,
          ' ',
          t.length === 1 ? 'item' : 'items',
        ),
        !A && h,
      );
    }
    renderNotCollapsed() {
      let {
          name: e,
          data: t,
          keyPath: r,
          deep: n,
          addFormVisible: a,
          nextDeep: o,
        } = this.state,
        {
          isCollapsed: i,
          handleRemove: u,
          onDeltaUpdate: s,
          readOnly: p,
          getStyle: y,
          dataType: A,
          addButtonElement: h,
          cancelButtonElement: m,
          editButtonElement: E,
          inputElementGenerator: b,
          textareaElementGenerator: x,
          minusMenuElement: F,
          plusMenuElement: B,
          beforeRemoveAction: I,
          beforeAddAction: j,
          beforeUpdateAction: w,
          logger: k,
          onSubmitValueParser: N,
        } = this.props,
        {
          minus: H,
          plus: V,
          delimiter: U,
          ul: Q,
          addForm: ee,
        } = y(e, t, r, n, A),
        X = p(e, t, r, n, A),
        R = he(B, {
          onClick: this.handleAddMode,
          className: 'rejt-plus-menu',
          style: V,
        }),
        _ = he(F, { onClick: u, className: 'rejt-minus-menu', style: H }),
        q = !0,
        G = '[',
        Y = ']';
      return g.createElement(
        'span',
        { className: 'rejt-not-collapsed' },
        g.createElement(
          'span',
          { className: 'rejt-not-collapsed-delimiter', style: U },
          G,
        ),
        !a && R,
        g.createElement(
          'ul',
          { className: 'rejt-not-collapsed-list', style: Q },
          t.map((K, Z) =>
            g.createElement(ca, {
              key: Z,
              name: `${Z}`,
              data: K,
              keyPath: r,
              deep: o,
              isCollapsed: i,
              handleRemove: this.handleRemoveItem(Z),
              handleUpdateValue: this.handleEditValue,
              onUpdate: this.onChildUpdate,
              onDeltaUpdate: s,
              readOnly: p,
              getStyle: y,
              addButtonElement: h,
              cancelButtonElement: m,
              editButtonElement: E,
              inputElementGenerator: b,
              textareaElementGenerator: x,
              minusMenuElement: F,
              plusMenuElement: B,
              beforeRemoveAction: I,
              beforeAddAction: j,
              beforeUpdateAction: w,
              logger: k,
              onSubmitValueParser: N,
            }),
          ),
        ),
        !X &&
          a &&
          g.createElement(
            'div',
            { className: 'rejt-add-form', style: ee },
            g.createElement(ou, {
              handleAdd: this.handleAddValueAdd,
              handleCancel: this.handleAddValueCancel,
              onlyValue: q,
              addButtonElement: h,
              cancelButtonElement: m,
              inputElementGenerator: b,
              keyPath: r,
              deep: n,
              onSubmitValueParser: N,
            }),
          ),
        g.createElement(
          'span',
          { className: 'rejt-not-collapsed-delimiter', style: U },
          Y,
        ),
        !X && _,
      );
    }
    render() {
      let { name: e, collapsed: t, data: r, keyPath: n, deep: a } = this.state,
        { dataType: o, getStyle: i } = this.props,
        u = t ? this.renderCollapsed() : this.renderNotCollapsed(),
        s = i(e, r, n, a, o);
      return g.createElement(
        'div',
        { className: 'rejt-array-node' },
        g.createElement(
          'span',
          { onClick: this.handleCollapseMode },
          g.createElement(
            'span',
            { className: 'rejt-name', style: s.name },
            e,
            ' :',
            ' ',
          ),
        ),
        u,
      );
    }
  };
  Dy.defaultProps = {
    keyPath: [],
    deep: 0,
    minusMenuElement: g.createElement('span', null, ' - '),
    plusMenuElement: g.createElement('span', null, ' + '),
  };
  var Cy = class extends Je {
    constructor(e) {
      super(e);
      let t = [...e.keyPath, e.name];
      (this.state = {
        value: e.value,
        name: e.name,
        keyPath: t,
        deep: e.deep,
        editEnabled: !1,
        inputRef: null,
      }),
        (this.handleEditMode = this.handleEditMode.bind(this)),
        (this.refInput = this.refInput.bind(this)),
        (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
        (this.handleEdit = this.handleEdit.bind(this)),
        (this.onKeydown = this.onKeydown.bind(this));
    }
    static getDerivedStateFromProps(e, t) {
      return e.value !== t.value ? { value: e.value } : null;
    }
    componentDidUpdate() {
      let {
          editEnabled: e,
          inputRef: t,
          name: r,
          value: n,
          keyPath: a,
          deep: o,
        } = this.state,
        { readOnly: i, dataType: u } = this.props,
        s = i(r, n, a, o, u);
      e && !s && typeof t.focus == 'function' && t.focus();
    }
    componentDidMount() {
      document.addEventListener('keydown', this.onKeydown);
    }
    componentWillUnmount() {
      document.removeEventListener('keydown', this.onKeydown);
    }
    onKeydown(e) {
      e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.repeat ||
        ((e.code === 'Enter' || e.key === 'Enter') &&
          (e.preventDefault(), this.handleEdit()),
        (e.code === 'Escape' || e.key === 'Escape') &&
          (e.preventDefault(), this.handleCancelEdit()));
    }
    handleEdit() {
      let {
          handleUpdateValue: e,
          originalValue: t,
          logger: r,
          onSubmitValueParser: n,
          keyPath: a,
        } = this.props,
        { inputRef: o, name: i, deep: u } = this.state;
      if (!o) return;
      let s = n(!0, a, u, i, o.value);
      e({ value: s, key: i })
        .then(() => {
          vy(t, s) || this.handleCancelEdit();
        })
        .catch(r.error);
    }
    handleEditMode() {
      this.setState({ editEnabled: !0 });
    }
    refInput(e) {
      this.state.inputRef = e;
    }
    handleCancelEdit() {
      this.setState({ editEnabled: !1 });
    }
    render() {
      let {
          name: e,
          value: t,
          editEnabled: r,
          keyPath: n,
          deep: a,
        } = this.state,
        {
          handleRemove: o,
          originalValue: i,
          readOnly: u,
          dataType: s,
          getStyle: p,
          editButtonElement: y,
          cancelButtonElement: A,
          textareaElementGenerator: h,
          minusMenuElement: m,
          keyPath: E,
        } = this.props,
        b = p(e, i, n, a, s),
        x = null,
        F = null,
        B = u(e, i, n, a, s);
      if (r && !B) {
        let I = h(au, E, a, e, i, s),
          j = he(y, { onClick: this.handleEdit }),
          w = he(A, { onClick: this.handleCancelEdit }),
          k = he(I, { ref: this.refInput, defaultValue: i });
        (x = g.createElement(
          'span',
          { className: 'rejt-edit-form', style: b.editForm },
          k,
          ' ',
          w,
          j,
        )),
          (F = null);
      } else {
        x = g.createElement(
          'span',
          {
            className: 'rejt-value',
            style: b.value,
            onClick: B ? null : this.handleEditMode,
          },
          t,
        );
        let I = he(m, {
          onClick: o,
          className: 'rejt-minus-menu',
          style: b.minus,
        });
        F = B ? null : I;
      }
      return g.createElement(
        'li',
        { className: 'rejt-function-value-node', style: b.li },
        g.createElement(
          'span',
          { className: 'rejt-name', style: b.name },
          e,
          ' :',
          ' ',
        ),
        x,
        F,
      );
    }
  };
  Cy.defaultProps = {
    keyPath: [],
    deep: 0,
    handleUpdateValue: () => {},
    editButtonElement: g.createElement('button', null, 'e'),
    cancelButtonElement: g.createElement('button', null, 'c'),
    minusMenuElement: g.createElement('span', null, ' - '),
  };
  var ca = class extends Je {
    constructor(e) {
      super(e),
        (this.state = {
          data: e.data,
          name: e.name,
          keyPath: e.keyPath,
          deep: e.deep,
        });
    }
    static getDerivedStateFromProps(e, t) {
      return e.data !== t.data ? { data: e.data } : null;
    }
    render() {
      let { data: e, name: t, keyPath: r, deep: n } = this.state,
        {
          isCollapsed: a,
          handleRemove: o,
          handleUpdateValue: i,
          onUpdate: u,
          onDeltaUpdate: s,
          readOnly: p,
          getStyle: y,
          addButtonElement: A,
          cancelButtonElement: h,
          editButtonElement: m,
          inputElementGenerator: E,
          textareaElementGenerator: b,
          minusMenuElement: x,
          plusMenuElement: F,
          beforeRemoveAction: B,
          beforeAddAction: I,
          beforeUpdateAction: j,
          logger: w,
          onSubmitValueParser: k,
        } = this.props,
        N = () => !0,
        H = ft(e);
      switch (H) {
        case hR:
          return g.createElement(Qi, {
            data: e,
            name: t,
            isCollapsed: a,
            keyPath: r,
            deep: n,
            handleRemove: o,
            onUpdate: u,
            onDeltaUpdate: s,
            readOnly: N,
            dataType: H,
            getStyle: y,
            addButtonElement: A,
            cancelButtonElement: h,
            editButtonElement: m,
            inputElementGenerator: E,
            textareaElementGenerator: b,
            minusMenuElement: x,
            plusMenuElement: F,
            beforeRemoveAction: B,
            beforeAddAction: I,
            beforeUpdateAction: j,
            logger: w,
            onSubmitValueParser: k,
          });
        case mR:
          return g.createElement(Qi, {
            data: e,
            name: t,
            isCollapsed: a,
            keyPath: r,
            deep: n,
            handleRemove: o,
            onUpdate: u,
            onDeltaUpdate: s,
            readOnly: p,
            dataType: H,
            getStyle: y,
            addButtonElement: A,
            cancelButtonElement: h,
            editButtonElement: m,
            inputElementGenerator: E,
            textareaElementGenerator: b,
            minusMenuElement: x,
            plusMenuElement: F,
            beforeRemoveAction: B,
            beforeAddAction: I,
            beforeUpdateAction: j,
            logger: w,
            onSubmitValueParser: k,
          });
        case gR:
          return g.createElement(Dy, {
            data: e,
            name: t,
            isCollapsed: a,
            keyPath: r,
            deep: n,
            handleRemove: o,
            onUpdate: u,
            onDeltaUpdate: s,
            readOnly: p,
            dataType: H,
            getStyle: y,
            addButtonElement: A,
            cancelButtonElement: h,
            editButtonElement: m,
            inputElementGenerator: E,
            textareaElementGenerator: b,
            minusMenuElement: x,
            plusMenuElement: F,
            beforeRemoveAction: B,
            beforeAddAction: I,
            beforeUpdateAction: j,
            logger: w,
            onSubmitValueParser: k,
          });
        case yR:
          return g.createElement(pt, {
            name: t,
            value: `"${e}"`,
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: p,
            dataType: H,
            getStyle: y,
            cancelButtonElement: h,
            editButtonElement: m,
            inputElementGenerator: E,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: k,
          });
        case bR:
          return g.createElement(pt, {
            name: t,
            value: e,
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: p,
            dataType: H,
            getStyle: y,
            cancelButtonElement: h,
            editButtonElement: m,
            inputElementGenerator: E,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: k,
          });
        case AR:
          return g.createElement(pt, {
            name: t,
            value: e ? 'true' : 'false',
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: p,
            dataType: H,
            getStyle: y,
            cancelButtonElement: h,
            editButtonElement: m,
            inputElementGenerator: E,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: k,
          });
        case ER:
          return g.createElement(pt, {
            name: t,
            value: e.toISOString(),
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: N,
            dataType: H,
            getStyle: y,
            cancelButtonElement: h,
            editButtonElement: m,
            inputElementGenerator: E,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: k,
          });
        case vR:
          return g.createElement(pt, {
            name: t,
            value: 'null',
            originalValue: 'null',
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: p,
            dataType: H,
            getStyle: y,
            cancelButtonElement: h,
            editButtonElement: m,
            inputElementGenerator: E,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: k,
          });
        case DR:
          return g.createElement(pt, {
            name: t,
            value: 'undefined',
            originalValue: 'undefined',
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: p,
            dataType: H,
            getStyle: y,
            cancelButtonElement: h,
            editButtonElement: m,
            inputElementGenerator: E,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: k,
          });
        case CR:
          return g.createElement(Cy, {
            name: t,
            value: e.toString(),
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: p,
            dataType: H,
            getStyle: y,
            cancelButtonElement: h,
            editButtonElement: m,
            textareaElementGenerator: b,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: k,
          });
        case xR:
          return g.createElement(pt, {
            name: t,
            value: e.toString(),
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: N,
            dataType: H,
            getStyle: y,
            cancelButtonElement: h,
            editButtonElement: m,
            inputElementGenerator: E,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: k,
          });
        default:
          return null;
      }
    }
  };
  ca.defaultProps = { keyPath: [], deep: 0 };
  var Qi = class extends Je {
    constructor(e) {
      super(e);
      let t = e.deep === -1 ? [] : [...e.keyPath, e.name];
      (this.state = {
        name: e.name,
        data: e.data,
        keyPath: t,
        deep: e.deep,
        nextDeep: e.deep + 1,
        collapsed: e.isCollapsed(t, e.deep, e.data),
        addFormVisible: !1,
      }),
        (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
        (this.handleRemoveValue = this.handleRemoveValue.bind(this)),
        (this.handleAddMode = this.handleAddMode.bind(this)),
        (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
        (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
        (this.handleEditValue = this.handleEditValue.bind(this)),
        (this.onChildUpdate = this.onChildUpdate.bind(this)),
        (this.renderCollapsed = this.renderCollapsed.bind(this)),
        (this.renderNotCollapsed = this.renderNotCollapsed.bind(this));
    }
    static getDerivedStateFromProps(e, t) {
      return e.data !== t.data ? { data: e.data } : null;
    }
    onChildUpdate(e, t) {
      let { data: r, keyPath: n } = this.state;
      (r[e] = t), this.setState({ data: r });
      let { onUpdate: a } = this.props,
        o = n.length;
      a(n[o - 1], r);
    }
    handleAddMode() {
      this.setState({ addFormVisible: !0 });
    }
    handleAddValueCancel() {
      this.setState({ addFormVisible: !1 });
    }
    handleAddValueAdd({ key: e, newValue: t }) {
      let { data: r, keyPath: n, nextDeep: a } = this.state,
        { beforeAddAction: o, logger: i } = this.props;
      o(e, n, a, t)
        .then(() => {
          (r[e] = t), this.setState({ data: r }), this.handleAddValueCancel();
          let { onUpdate: u, onDeltaUpdate: s } = this.props;
          u(n[n.length - 1], r),
            s({ type: by, keyPath: n, deep: a, key: e, newValue: t });
        })
        .catch(i.error);
    }
    handleRemoveValue(e) {
      return () => {
        let { beforeRemoveAction: t, logger: r } = this.props,
          { data: n, keyPath: a, nextDeep: o } = this.state,
          i = n[e];
        t(e, a, o, i)
          .then(() => {
            let u = { keyPath: a, deep: o, key: e, oldValue: i, type: Ay };
            delete n[e], this.setState({ data: n });
            let { onUpdate: s, onDeltaUpdate: p } = this.props;
            s(a[a.length - 1], n), p(u);
          })
          .catch(r.error);
      };
    }
    handleCollapseMode() {
      this.setState((e) => ({ collapsed: !e.collapsed }));
    }
    handleEditValue({ key: e, value: t }) {
      return new Promise((r, n) => {
        let { beforeUpdateAction: a } = this.props,
          { data: o, keyPath: i, nextDeep: u } = this.state,
          s = o[e];
        a(e, i, u, s, t)
          .then(() => {
            (o[e] = t), this.setState({ data: o });
            let { onUpdate: p, onDeltaUpdate: y } = this.props;
            p(i[i.length - 1], o),
              y({
                type: Ey,
                keyPath: i,
                deep: u,
                key: e,
                newValue: t,
                oldValue: s,
              }),
              r();
          })
          .catch(n);
      });
    }
    renderCollapsed() {
      let { name: e, keyPath: t, deep: r, data: n } = this.state,
        {
          handleRemove: a,
          readOnly: o,
          dataType: i,
          getStyle: u,
          minusMenuElement: s,
        } = this.props,
        { minus: p, collapsed: y } = u(e, n, t, r, i),
        A = Object.getOwnPropertyNames(n),
        h = o(e, n, t, r, i),
        m = he(s, { onClick: a, className: 'rejt-minus-menu', style: p });
      return g.createElement(
        'span',
        { className: 'rejt-collapsed' },
        g.createElement(
          'span',
          {
            className: 'rejt-collapsed-text',
            style: y,
            onClick: this.handleCollapseMode,
          },
          '{...}',
          ' ',
          A.length,
          ' ',
          A.length === 1 ? 'key' : 'keys',
        ),
        !h && m,
      );
    }
    renderNotCollapsed() {
      let {
          name: e,
          data: t,
          keyPath: r,
          deep: n,
          nextDeep: a,
          addFormVisible: o,
        } = this.state,
        {
          isCollapsed: i,
          handleRemove: u,
          onDeltaUpdate: s,
          readOnly: p,
          getStyle: y,
          dataType: A,
          addButtonElement: h,
          cancelButtonElement: m,
          editButtonElement: E,
          inputElementGenerator: b,
          textareaElementGenerator: x,
          minusMenuElement: F,
          plusMenuElement: B,
          beforeRemoveAction: I,
          beforeAddAction: j,
          beforeUpdateAction: w,
          logger: k,
          onSubmitValueParser: N,
        } = this.props,
        {
          minus: H,
          plus: V,
          addForm: U,
          ul: Q,
          delimiter: ee,
        } = y(e, t, r, n, A),
        X = Object.getOwnPropertyNames(t),
        R = p(e, t, r, n, A),
        _ = he(B, {
          onClick: this.handleAddMode,
          className: 'rejt-plus-menu',
          style: V,
        }),
        q = he(F, { onClick: u, className: 'rejt-minus-menu', style: H }),
        G = X.map((Z) =>
          g.createElement(ca, {
            key: Z,
            name: Z,
            data: t[Z],
            keyPath: r,
            deep: a,
            isCollapsed: i,
            handleRemove: this.handleRemoveValue(Z),
            handleUpdateValue: this.handleEditValue,
            onUpdate: this.onChildUpdate,
            onDeltaUpdate: s,
            readOnly: p,
            getStyle: y,
            addButtonElement: h,
            cancelButtonElement: m,
            editButtonElement: E,
            inputElementGenerator: b,
            textareaElementGenerator: x,
            minusMenuElement: F,
            plusMenuElement: B,
            beforeRemoveAction: I,
            beforeAddAction: j,
            beforeUpdateAction: w,
            logger: k,
            onSubmitValueParser: N,
          }),
        ),
        Y = '{',
        K = '}';
      return g.createElement(
        'span',
        { className: 'rejt-not-collapsed' },
        g.createElement(
          'span',
          { className: 'rejt-not-collapsed-delimiter', style: ee },
          Y,
        ),
        !R && _,
        g.createElement(
          'ul',
          { className: 'rejt-not-collapsed-list', style: Q },
          G,
        ),
        !R &&
          o &&
          g.createElement(
            'div',
            { className: 'rejt-add-form', style: U },
            g.createElement(ou, {
              handleAdd: this.handleAddValueAdd,
              handleCancel: this.handleAddValueCancel,
              addButtonElement: h,
              cancelButtonElement: m,
              inputElementGenerator: b,
              keyPath: r,
              deep: n,
              onSubmitValueParser: N,
            }),
          ),
        g.createElement(
          'span',
          { className: 'rejt-not-collapsed-delimiter', style: ee },
          K,
        ),
        !R && q,
      );
    }
    render() {
      let { name: e, collapsed: t, data: r, keyPath: n, deep: a } = this.state,
        { getStyle: o, dataType: i } = this.props,
        u = t ? this.renderCollapsed() : this.renderNotCollapsed(),
        s = o(e, r, n, a, i);
      return g.createElement(
        'div',
        { className: 'rejt-object-node' },
        g.createElement(
          'span',
          { onClick: this.handleCollapseMode },
          g.createElement(
            'span',
            { className: 'rejt-name', style: s.name },
            e,
            ' :',
            ' ',
          ),
        ),
        u,
      );
    }
  };
  Qi.defaultProps = {
    keyPath: [],
    deep: 0,
    minusMenuElement: g.createElement('span', null, ' - '),
    plusMenuElement: g.createElement('span', null, ' + '),
  };
  var pt = class extends Je {
    constructor(e) {
      super(e);
      let t = [...e.keyPath, e.name];
      (this.state = {
        value: e.value,
        name: e.name,
        keyPath: t,
        deep: e.deep,
        editEnabled: !1,
        inputRef: null,
      }),
        (this.handleEditMode = this.handleEditMode.bind(this)),
        (this.refInput = this.refInput.bind(this)),
        (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
        (this.handleEdit = this.handleEdit.bind(this)),
        (this.onKeydown = this.onKeydown.bind(this));
    }
    static getDerivedStateFromProps(e, t) {
      return e.value !== t.value ? { value: e.value } : null;
    }
    componentDidUpdate() {
      let {
          editEnabled: e,
          inputRef: t,
          name: r,
          value: n,
          keyPath: a,
          deep: o,
        } = this.state,
        { readOnly: i, dataType: u } = this.props,
        s = i(r, n, a, o, u);
      e && !s && typeof t.focus == 'function' && t.focus();
    }
    componentDidMount() {
      document.addEventListener('keydown', this.onKeydown);
    }
    componentWillUnmount() {
      document.removeEventListener('keydown', this.onKeydown);
    }
    onKeydown(e) {
      e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.repeat ||
        ((e.code === 'Enter' || e.key === 'Enter') &&
          (e.preventDefault(), this.handleEdit()),
        (e.code === 'Escape' || e.key === 'Escape') &&
          (e.preventDefault(), this.handleCancelEdit()));
    }
    handleEdit() {
      let {
          handleUpdateValue: e,
          originalValue: t,
          logger: r,
          onSubmitValueParser: n,
          keyPath: a,
        } = this.props,
        { inputRef: o, name: i, deep: u } = this.state;
      if (!o) return;
      let s = n(!0, a, u, i, o.value);
      e({ value: s, key: i })
        .then(() => {
          vy(t, s) || this.handleCancelEdit();
        })
        .catch(r.error);
    }
    handleEditMode() {
      this.setState({ editEnabled: !0 });
    }
    refInput(e) {
      this.state.inputRef = e;
    }
    handleCancelEdit() {
      this.setState({ editEnabled: !1 });
    }
    render() {
      let {
          name: e,
          value: t,
          editEnabled: r,
          keyPath: n,
          deep: a,
        } = this.state,
        {
          handleRemove: o,
          originalValue: i,
          readOnly: u,
          dataType: s,
          getStyle: p,
          editButtonElement: y,
          cancelButtonElement: A,
          inputElementGenerator: h,
          minusMenuElement: m,
          keyPath: E,
        } = this.props,
        b = p(e, i, n, a, s),
        x = u(e, i, n, a, s),
        F = r && !x,
        B = h(au, E, a, e, i, s),
        I = he(y, { onClick: this.handleEdit }),
        j = he(A, { onClick: this.handleCancelEdit }),
        w = he(B, { ref: this.refInput, defaultValue: JSON.stringify(i) }),
        k = he(m, { onClick: o, className: 'rejt-minus-menu', style: b.minus });
      return g.createElement(
        'li',
        { className: 'rejt-value-node', style: b.li },
        g.createElement(
          'span',
          { className: 'rejt-name', style: b.name },
          e,
          ' : ',
        ),
        F
          ? g.createElement(
              'span',
              { className: 'rejt-edit-form', style: b.editForm },
              w,
              ' ',
              j,
              I,
            )
          : g.createElement(
              'span',
              {
                className: 'rejt-value',
                style: b.value,
                onClick: x ? null : this.handleEditMode,
              },
              String(t),
            ),
        !x && !F && k,
      );
    }
  };
  pt.defaultProps = {
    keyPath: [],
    deep: 0,
    handleUpdateValue: () => Promise.resolve(),
    editButtonElement: g.createElement('button', null, 'e'),
    cancelButtonElement: g.createElement('button', null, 'c'),
    minusMenuElement: g.createElement('span', null, ' - '),
  };
  var FR = {
      minus: { color: 'red' },
      plus: { color: 'green' },
      collapsed: { color: 'grey' },
      delimiter: {},
      ul: { padding: '0px', margin: '0 0 0 25px', listStyle: 'none' },
      name: { color: '#2287CD' },
      addForm: {},
    },
    SR = {
      minus: { color: 'red' },
      plus: { color: 'green' },
      collapsed: { color: 'grey' },
      delimiter: {},
      ul: { padding: '0px', margin: '0 0 0 25px', listStyle: 'none' },
      name: { color: '#2287CD' },
      addForm: {},
    },
    wR = {
      minus: { color: 'red' },
      editForm: {},
      value: { color: '#7bba3d' },
      li: { minHeight: '22px', lineHeight: '22px', outline: '0px' },
      name: { color: '#2287CD' },
    };
  function BR(e) {
    let t = e;
    if (t.indexOf('function') === 0) return (0, eval)(`(${t})`);
    try {
      t = JSON.parse(e);
    } catch {}
    return t;
  }
  var xy = class extends Je {
    constructor(e) {
      super(e),
        (this.state = { data: e.data, rootName: e.rootName }),
        (this.onUpdate = this.onUpdate.bind(this)),
        (this.removeRoot = this.removeRoot.bind(this));
    }
    static getDerivedStateFromProps(e, t) {
      return e.data !== t.data || e.rootName !== t.rootName
        ? { data: e.data, rootName: e.rootName }
        : null;
    }
    onUpdate(e, t) {
      this.setState({ data: t }), this.props.onFullyUpdate(t);
    }
    removeRoot() {
      this.onUpdate(null, null);
    }
    render() {
      let { data: e, rootName: t } = this.state,
        {
          isCollapsed: r,
          onDeltaUpdate: n,
          readOnly: a,
          getStyle: o,
          addButtonElement: i,
          cancelButtonElement: u,
          editButtonElement: s,
          inputElement: p,
          textareaElement: y,
          minusMenuElement: A,
          plusMenuElement: h,
          beforeRemoveAction: m,
          beforeAddAction: E,
          beforeUpdateAction: b,
          logger: x,
          onSubmitValueParser: F,
          fallback: B = null,
        } = this.props,
        I = ft(e),
        j = a;
      ft(a) === 'Boolean' && (j = () => a);
      let w = p;
      p && ft(p) !== 'Function' && (w = () => p);
      let k = y;
      return (
        y && ft(y) !== 'Function' && (k = () => y),
        I === 'Object' || I === 'Array'
          ? g.createElement(
              'div',
              { className: 'rejt-tree' },
              g.createElement(ca, {
                data: e,
                name: t,
                deep: -1,
                isCollapsed: r,
                onUpdate: this.onUpdate,
                onDeltaUpdate: n,
                readOnly: j,
                getStyle: o,
                addButtonElement: i,
                cancelButtonElement: u,
                editButtonElement: s,
                inputElementGenerator: w,
                textareaElementGenerator: k,
                minusMenuElement: A,
                plusMenuElement: h,
                handleRemove: this.removeRoot,
                beforeRemoveAction: m,
                beforeAddAction: E,
                beforeUpdateAction: b,
                logger: x,
                onSubmitValueParser: F,
              }),
            )
          : B
      );
    }
  };
  xy.defaultProps = {
    rootName: 'root',
    isCollapsed: (e, t) => t !== -1,
    getStyle: (e, t, r, n, a) => {
      switch (a) {
        case 'Object':
        case 'Error':
          return FR;
        case 'Array':
          return SR;
        default:
          return wR;
      }
    },
    readOnly: () => !1,
    onFullyUpdate: () => {},
    onDeltaUpdate: () => {},
    beforeRemoveAction: () => Promise.resolve(),
    beforeAddAction: () => Promise.resolve(),
    beforeUpdateAction: () => Promise.resolve(),
    logger: { error: () => {} },
    onSubmitValueParser: (e, t, r, n, a) => BR(a),
    inputElement: () => g.createElement('input', null),
    textareaElement: () => g.createElement('textarea', null),
    fallback: null,
  };
  var { window: TR } = ue,
    _R = M.div(({ theme: e }) => ({
      position: 'relative',
      display: 'flex',
      '.rejt-tree': { marginLeft: '1rem', fontSize: '13px' },
      '.rejt-value-node, .rejt-object-node > .rejt-collapsed, .rejt-array-node > .rejt-collapsed, .rejt-object-node > .rejt-not-collapsed, .rejt-array-node > .rejt-not-collapsed':
        { '& > svg': { opacity: 0, transition: 'opacity 0.2s' } },
      '.rejt-value-node:hover, .rejt-object-node:hover > .rejt-collapsed, .rejt-array-node:hover > .rejt-collapsed, .rejt-object-node:hover > .rejt-not-collapsed, .rejt-array-node:hover > .rejt-not-collapsed':
        { '& > svg': { opacity: 1 } },
      '.rejt-edit-form button': { display: 'none' },
      '.rejt-add-form': { marginLeft: 10 },
      '.rejt-add-value-node': { display: 'inline-flex', alignItems: 'center' },
      '.rejt-name': { lineHeight: '22px' },
      '.rejt-not-collapsed-delimiter': { lineHeight: '22px' },
      '.rejt-plus-menu': { marginLeft: 5 },
      '.rejt-object-node > span > *, .rejt-array-node > span > *': {
        position: 'relative',
        zIndex: 2,
      },
      '.rejt-object-node, .rejt-array-node': { position: 'relative' },
      '.rejt-object-node > span:first-of-type::after, .rejt-array-node > span:first-of-type::after, .rejt-collapsed::before, .rejt-not-collapsed::before':
        {
          content: '""',
          position: 'absolute',
          top: 0,
          display: 'block',
          width: '100%',
          marginLeft: '-1rem',
          padding: '0 4px 0 1rem',
          height: 22,
        },
      '.rejt-collapsed::before, .rejt-not-collapsed::before': {
        zIndex: 1,
        background: 'transparent',
        borderRadius: 4,
        transition: 'background 0.2s',
        pointerEvents: 'none',
        opacity: 0.1,
      },
      '.rejt-object-node:hover, .rejt-array-node:hover': {
        '& > .rejt-collapsed::before, & > .rejt-not-collapsed::before': {
          background: e.color.secondary,
        },
      },
      '.rejt-collapsed::after, .rejt-not-collapsed::after': {
        content: '""',
        position: 'absolute',
        display: 'inline-block',
        pointerEvents: 'none',
        width: 0,
        height: 0,
      },
      '.rejt-collapsed::after': {
        left: -8,
        top: 8,
        borderTop: '3px solid transparent',
        borderBottom: '3px solid transparent',
        borderLeft: '3px solid rgba(153,153,153,0.6)',
      },
      '.rejt-not-collapsed::after': {
        left: -10,
        top: 10,
        borderTop: '3px solid rgba(153,153,153,0.6)',
        borderLeft: '3px solid transparent',
        borderRight: '3px solid transparent',
      },
      '.rejt-value': {
        display: 'inline-block',
        border: '1px solid transparent',
        borderRadius: 4,
        margin: '1px 0',
        padding: '0 4px',
        cursor: 'text',
        color: e.color.defaultText,
      },
      '.rejt-value-node:hover > .rejt-value': {
        background: e.color.lighter,
        borderColor: e.appBorderColor,
      },
    })),
    zi = M.button(({ theme: e, primary: t }) => ({
      border: 0,
      height: 20,
      margin: 1,
      borderRadius: 4,
      background: t ? e.color.secondary : 'transparent',
      color: t ? e.color.lightest : e.color.dark,
      fontWeight: t ? 'bold' : 'normal',
      cursor: 'pointer',
      order: t ? 'initial' : 9,
    })),
    ey = M(Te)(({ theme: e, icon: t, disabled: r }) => ({
      display: 'inline-block',
      verticalAlign: 'middle',
      width: 15,
      height: 15,
      padding: 3,
      marginLeft: 5,
      cursor: r ? 'not-allowed' : 'pointer',
      color: e.textMutedColor,
      '&:hover': r
        ? {}
        : { color: t === 'subtract' ? e.color.negative : e.color.ancillary },
      'svg + &': { marginLeft: 0 },
    })),
    ty = M.input(({ theme: e, placeholder: t }) => ({
      outline: 0,
      margin: t ? 1 : '1px 0',
      padding: '3px 4px',
      color: e.color.defaultText,
      background: e.background.app,
      border: `1px solid ${e.appBorderColor}`,
      borderRadius: 4,
      lineHeight: '14px',
      width: t === 'Key' ? 80 : 120,
      '&:focus': { border: `1px solid ${e.color.secondary}` },
    })),
    OR = M(ht)(({ theme: e }) => ({
      position: 'absolute',
      zIndex: 2,
      top: 2,
      right: 2,
      height: 21,
      padding: '0 3px',
      background: e.background.bar,
      border: `1px solid ${e.appBorderColor}`,
      borderRadius: 3,
      color: e.textMutedColor,
      fontSize: '9px',
      fontWeight: 'bold',
      textDecoration: 'none',
      span: { marginLeft: 3, marginTop: 1 },
    })),
    RR = M(Be.Textarea)(({ theme: e }) => ({
      flex: 1,
      padding: '7px 6px',
      fontFamily: e.typography.fonts.mono,
      fontSize: '12px',
      lineHeight: '18px',
      '&::placeholder': {
        fontFamily: e.typography.fonts.base,
        fontSize: '13px',
      },
      '&:placeholder-shown': { padding: '7px 10px' },
    })),
    PR = {
      bubbles: !0,
      cancelable: !0,
      key: 'Enter',
      code: 'Enter',
      keyCode: 13,
    },
    IR = (e) => {
      e.currentTarget.dispatchEvent(new TR.KeyboardEvent('keydown', PR));
    },
    kR = (e) => {
      e.currentTarget.select();
    },
    NR = (e) => () => ({
      name: { color: e.color.secondary },
      collapsed: { color: e.color.dark },
      ul: { listStyle: 'none', margin: '0 0 0 1rem', padding: 0 },
      li: { outline: 0 },
    }),
    ry = ({ name: e, value: t, onChange: r }) => {
      let n = Fu(),
        a = rt(() => t && (0, cy.default)(t), [t]),
        o = a != null,
        [i, u] = ae(!o),
        [s, p] = ae(null),
        y = me(
          (x) => {
            try {
              x && r(JSON.parse(x)), p(void 0);
            } catch (F) {
              p(F);
            }
          },
          [r],
        ),
        [A, h] = ae(!1),
        m = me(() => {
          r({}), h(!0);
        }, [h]),
        E = Fe(null);
      if (
        (ge(() => {
          A && E.current && E.current.select();
        }, [A]),
        !o)
      )
        return g.createElement(
          Be.Button,
          { id: dr(e), onClick: m },
          'Set object',
        );
      let b = g.createElement(RR, {
        ref: E,
        id: _e(e),
        name: e,
        defaultValue: t === null ? '' : JSON.stringify(t, null, 2),
        onBlur: (x) => y(x.target.value),
        placeholder: 'Edit JSON string...',
        autoFocus: A,
        valid: s ? 'error' : null,
      });
      return g.createElement(
        _R,
        null,
        ['Object', 'Array'].includes(ft(a)) &&
          g.createElement(
            OR,
            {
              href: '#',
              onClick: (x) => {
                x.preventDefault(), u((F) => !F);
              },
            },
            g.createElement(Te, { icon: i ? 'eyeclose' : 'eye' }),
            g.createElement('span', null, 'RAW'),
          ),
        i
          ? b
          : g.createElement(xy, {
              data: a,
              rootName: e,
              onFullyUpdate: r,
              getStyle: NR(n),
              cancelButtonElement: g.createElement(
                zi,
                { type: 'button' },
                'Cancel',
              ),
              editButtonElement: g.createElement(
                zi,
                { type: 'submit' },
                'Save',
              ),
              addButtonElement: g.createElement(
                zi,
                { type: 'submit', primary: !0 },
                'Save',
              ),
              plusMenuElement: g.createElement(ey, { icon: 'add' }),
              minusMenuElement: g.createElement(ey, { icon: 'subtract' }),
              inputElement: (x, F, B, I) =>
                I
                  ? g.createElement(ty, { onFocus: kR, onBlur: IR })
                  : g.createElement(ty, null),
              fallback: b,
            }),
      );
    },
    LR = M.input(({ theme: e, min: t, max: r, value: n }) => ({
      '&': {
        width: '100%',
        backgroundColor: 'transparent',
        appearance: 'none',
      },
      '&::-webkit-slider-runnable-track': {
        background:
          e.base === 'light'
            ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
              ((n - t) / (r - t)) * 100
            }%, 
            ${$e(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${$e(0.02, e.input.background)} 100%)`
            : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
              ((n - t) / (r - t)) * 100
            }%, 
            ${ot(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${ot(0.02, e.input.background)} 100%)`,
        boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
        borderRadius: 6,
        width: '100%',
        height: 6,
        cursor: 'pointer',
      },
      '&::-webkit-slider-thumb': {
        marginTop: '-6px',
        width: 16,
        height: 16,
        border: `1px solid ${Me(e.appBorderColor, 0.2)}`,
        borderRadius: '50px',
        boxShadow: `0 1px 3px 0px ${Me(e.appBorderColor, 0.2)}`,
        cursor: 'grab',
        appearance: 'none',
        background: `${e.input.background}`,
        transition: 'all 150ms ease-out',
        '&:hover': {
          background: `${$e(0.05, e.input.background)}`,
          transform: 'scale3d(1.1, 1.1, 1.1) translateY(-1px)',
          transition: 'all 50ms ease-out',
        },
        '&:active': {
          background: `${e.input.background}`,
          transform: 'scale3d(1, 1, 1) translateY(0px)',
          cursor: 'grabbing',
        },
      },
      '&:focus': {
        outline: 'none',
        '&::-webkit-slider-runnable-track': {
          borderColor: Me(e.color.secondary, 0.4),
        },
        '&::-webkit-slider-thumb': {
          borderColor: e.color.secondary,
          boxShadow: `0 0px 5px 0px ${e.color.secondary}`,
        },
      },
      '&::-moz-range-track': {
        background:
          e.base === 'light'
            ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
              ((n - t) / (r - t)) * 100
            }%, 
            ${$e(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${$e(0.02, e.input.background)} 100%)`
            : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
              ((n - t) / (r - t)) * 100
            }%, 
            ${ot(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${ot(0.02, e.input.background)} 100%)`,
        boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
        borderRadius: 6,
        width: '100%',
        height: 6,
        cursor: 'pointer',
        outline: 'none',
      },
      '&::-moz-range-thumb': {
        width: 16,
        height: 16,
        border: `1px solid ${Me(e.appBorderColor, 0.2)}`,
        borderRadius: '50px',
        boxShadow: `0 1px 3px 0px ${Me(e.appBorderColor, 0.2)}`,
        cursor: 'grab',
        background: `${e.input.background}`,
        transition: 'all 150ms ease-out',
        '&:hover': {
          background: `${$e(0.05, e.input.background)}`,
          transform: 'scale3d(1.1, 1.1, 1.1) translateY(-1px)',
          transition: 'all 50ms ease-out',
        },
        '&:active': {
          background: `${e.input.background}`,
          transform: 'scale3d(1, 1, 1) translateY(0px)',
          cursor: 'grabbing',
        },
      },
      '&::-ms-track': {
        background:
          e.base === 'light'
            ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
              ((n - t) / (r - t)) * 100
            }%, 
            ${$e(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${$e(0.02, e.input.background)} 100%)`
            : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
              ((n - t) / (r - t)) * 100
            }%, 
            ${ot(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${ot(0.02, e.input.background)} 100%)`,
        boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
        color: 'transparent',
        width: '100%',
        height: '6px',
        cursor: 'pointer',
      },
      '&::-ms-fill-lower': { borderRadius: 6 },
      '&::-ms-fill-upper': { borderRadius: 6 },
      '&::-ms-thumb': {
        width: 16,
        height: 16,
        background: `${e.input.background}`,
        border: `1px solid ${Me(e.appBorderColor, 0.2)}`,
        borderRadius: 50,
        cursor: 'grab',
        marginTop: 0,
      },
      '@supports (-ms-ime-align:auto)': {
        'input[type=range]': { margin: '0' },
      },
    })),
    Fy = M.span({
      paddingLeft: 5,
      paddingRight: 5,
      fontSize: 12,
      whiteSpace: 'nowrap',
      fontFeatureSettings: 'tnum',
      fontVariantNumeric: 'tabular-nums',
    }),
    jR = M(Fy)(({ numberOFDecimalsPlaces: e, max: t }) => ({
      width: `${e + t.toString().length * 2 + 3}ch`,
      textAlign: 'right',
      flexShrink: 0,
    })),
    qR = M.div({ display: 'flex', alignItems: 'center', width: '100%' });
  function MR(e) {
    let t = e.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
  }
  var $R = ({
      name: e,
      value: t,
      onChange: r,
      min: n = 0,
      max: a = 100,
      step: o = 1,
      onBlur: i,
      onFocus: u,
    }) => {
      let s = (A) => {
          r(eR(A.target.value));
        },
        p = t !== void 0,
        y = rt(() => MR(o), [o]);
      return g.createElement(
        qR,
        null,
        g.createElement(Fy, null, n),
        g.createElement(LR, {
          id: _e(e),
          type: 'range',
          onChange: s,
          name: e,
          value: t,
          min: n,
          max: a,
          step: o,
          onFocus: u,
          onBlur: i,
        }),
        g.createElement(
          jR,
          { numberOFDecimalsPlaces: y, max: a },
          `${p ? t.toFixed(y) : '--'}`,
          ' / ',
          a,
        ),
      );
    },
    UR = M.label({ display: 'flex' }),
    HR = M.div(({ isMaxed: e }) => ({
      marginLeft: '0.75rem',
      paddingTop: '0.35rem',
      color: e ? 'red' : void 0,
    })),
    zR = ({
      name: e,
      value: t,
      onChange: r,
      onFocus: n,
      onBlur: a,
      maxLength: o,
    }) => {
      let i = (A) => {
          r(A.target.value);
        },
        [u, s] = ae(!1),
        p = me(() => {
          r(''), s(!0);
        }, [s]);
      if (t === void 0)
        return g.createElement(
          Be.Button,
          { id: dr(e), onClick: p },
          'Set string',
        );
      let y = typeof t == 'string';
      return g.createElement(
        UR,
        null,
        g.createElement(Be.Textarea, {
          id: _e(e),
          maxLength: o,
          onChange: i,
          size: 'flex',
          placeholder: 'Edit string...',
          autoFocus: u,
          valid: y ? null : 'error',
          name: e,
          value: y ? t : '',
          onFocus: n,
          onBlur: a,
        }),
        o &&
          g.createElement(
            HR,
            { isMaxed: t?.length === o },
            t?.length ?? 0,
            ' / ',
            o,
          ),
      );
    },
    GR = M(Be.Input)({ padding: 10 });
  function WR(e) {
    e.forEach((t) => {
      t.startsWith('blob:') && URL.revokeObjectURL(t);
    });
  }
  var VR = ({ onChange: e, name: t, accept: r = 'image/*', value: n }) => {
      let a = Fe(null);
      function o(i) {
        if (!i.target.files) return;
        let u = Array.from(i.target.files).map((s) => URL.createObjectURL(s));
        e(u), WR(n);
      }
      return (
        ge(() => {
          n == null && a.current && (a.current.value = null);
        }, [n, t]),
        g.createElement(GR, {
          ref: a,
          id: _e(t),
          type: 'file',
          name: t,
          multiple: !0,
          onChange: o,
          accept: r,
          size: 'flex',
        })
      );
    },
    KR = mu(() => Promise.resolve().then(() => (Wg(), Gg))),
    YR = (e) =>
      g.createElement(
        hu,
        { fallback: g.createElement('div', null) },
        g.createElement(KR, { ...e }),
      ),
    XR = {
      array: ry,
      object: ry,
      boolean: W9,
      color: YR,
      date: Q9,
      number: tR,
      check: ir,
      'inline-check': ir,
      radio: ir,
      'inline-radio': ir,
      select: ir,
      'multi-select': ir,
      range: $R,
      text: zR,
      file: VR,
    },
    ny = () => g.createElement(g.Fragment, null, '-'),
    JR = ({ row: e, arg: t, updateArgs: r }) => {
      let { key: n, control: a } = e,
        [o, i] = ae(!1),
        [u, s] = ae({ value: t });
      ge(() => {
        o || s({ value: t });
      }, [o, t]);
      let p = me((E) => (s({ value: E }), r({ [n]: E }), E), [r, n]),
        y = me(() => i(!1), []),
        A = me(() => i(!0), []);
      if (!a || a.disable) return g.createElement(ny, null);
      let h = {
          name: n,
          argType: e,
          value: u.value,
          onChange: p,
          onBlur: y,
          onFocus: A,
        },
        m = XR[a.type] || ny;
      return g.createElement(m, { ...h, ...a, controlType: a.type });
    },
    QR = M.span({ fontWeight: 'bold' }),
    ZR = M.span(({ theme: e }) => ({
      color: e.color.negative,
      fontFamily: e.typography.fonts.mono,
      cursor: 'help',
    })),
    eP = M.div(({ theme: e }) => ({
      '&&': { p: { margin: '0 0 10px 0' }, a: { color: e.color.secondary } },
      code: {
        ...Bt({ theme: e }),
        fontSize: 12,
        fontFamily: e.typography.fonts.mono,
      },
      '& code': { margin: 0, display: 'inline-block' },
      '& pre > code': { whiteSpace: 'pre-wrap' },
    })),
    tP = M.div(({ theme: e, hasDescription: t }) => ({
      color:
        e.base === 'light'
          ? de(0.1, e.color.defaultText)
          : de(0.2, e.color.defaultText),
      marginTop: t ? 4 : 0,
    })),
    rP = M.div(({ theme: e, hasDescription: t }) => ({
      color:
        e.base === 'light'
          ? de(0.1, e.color.defaultText)
          : de(0.2, e.color.defaultText),
      marginTop: t ? 12 : 0,
      marginBottom: 12,
    })),
    nP = M.td(({ theme: e, expandable: t }) => ({
      paddingLeft: t ? '40px !important' : '20px !important',
    })),
    ua = (e) => {
      let {
          row: t,
          updateArgs: r,
          compact: n,
          expandable: a,
          initialExpandedArgs: o,
        } = e,
        { name: i, description: u } = t,
        s = t.table || {},
        p = s.type || t.type,
        y = s.defaultValue || t.defaultValue,
        A = t.type?.required,
        h = u != null && u !== '';
      return g.createElement(
        'tr',
        null,
        g.createElement(
          nP,
          { expandable: a },
          g.createElement(QR, null, i),
          A ? g.createElement(ZR, { title: 'Required' }, '*') : null,
        ),
        n
          ? null
          : g.createElement(
              'td',
              null,
              h && g.createElement(eP, null, g.createElement(Mo, null, u)),
              s.jsDocTags != null
                ? g.createElement(
                    g.Fragment,
                    null,
                    g.createElement(
                      rP,
                      { hasDescription: h },
                      g.createElement(Hi, { value: p, initialExpandedArgs: o }),
                    ),
                    g.createElement(I9, { tags: s.jsDocTags }),
                  )
                : g.createElement(
                    tP,
                    { hasDescription: h },
                    g.createElement(Hi, { value: p, initialExpandedArgs: o }),
                  ),
            ),
        n
          ? null
          : g.createElement(
              'td',
              null,
              g.createElement(Hi, { value: y, initialExpandedArgs: o }),
            ),
        r ? g.createElement('td', null, g.createElement(JR, { ...e })) : null,
      );
    },
    aP = M(Te)(({ theme: e }) => ({
      marginRight: 8,
      marginLeft: -10,
      marginTop: -2,
      height: 12,
      width: 12,
      color:
        e.base === 'light'
          ? de(0.25, e.color.defaultText)
          : de(0.3, e.color.defaultText),
      border: 'none',
      display: 'inline-block',
    })),
    oP = M.span(({ theme: e }) => ({
      display: 'flex',
      lineHeight: '20px',
      alignItems: 'center',
    })),
    iP = M.td(({ theme: e }) => ({
      position: 'relative',
      letterSpacing: '0.35em',
      textTransform: 'uppercase',
      fontWeight: e.typography.weight.bold,
      fontSize: e.typography.size.s1 - 1,
      color:
        e.base === 'light'
          ? de(0.4, e.color.defaultText)
          : de(0.6, e.color.defaultText),
      background: `${e.background.app} !important`,
      '& ~ td': { background: `${e.background.app} !important` },
    })),
    uP = M.td(({ theme: e }) => ({
      position: 'relative',
      fontWeight: e.typography.weight.bold,
      fontSize: e.typography.size.s2 - 1,
      background: e.background.app,
    })),
    sP = M.td(() => ({ position: 'relative' })),
    lP = M.tr(({ theme: e }) => ({
      '&:hover > td': {
        backgroundColor: `${ot(0.005, e.background.app)} !important`,
        boxShadow: `${e.color.mediumlight} 0 - 1px 0 0 inset`,
        cursor: 'row-resize',
      },
    })),
    ay = M.button(() => ({
      background: 'none',
      border: 'none',
      padding: '0',
      font: 'inherit',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      height: '100%',
      width: '100%',
      color: 'transparent',
      cursor: 'row-resize !important',
    })),
    Gi = ({
      level: e = 'section',
      label: t,
      children: r,
      initialExpanded: n = !0,
      colSpan: a = 3,
    }) => {
      let [o, i] = ae(n),
        u = e === 'subsection' ? uP : iP,
        s = r?.length || 0,
        p = e === 'subsection' ? `${s} item${s !== 1 ? 's' : ''}` : '',
        y = o ? 'arrowdown' : 'arrowright',
        A = `${o ? 'Hide' : 'Show'} ${e === 'subsection' ? s : t} item${
          s !== 1 ? 's' : ''
        }`;
      return g.createElement(
        g.Fragment,
        null,
        g.createElement(
          lP,
          { title: A },
          g.createElement(
            u,
            { colSpan: 1 },
            g.createElement(ay, { onClick: (h) => i(!o), tabIndex: 0 }, A),
            g.createElement(oP, null, g.createElement(aP, { icon: y }), t),
          ),
          g.createElement(
            sP,
            { colSpan: a - 1 },
            g.createElement(
              ay,
              {
                onClick: (h) => i(!o),
                tabIndex: -1,
                style: { outline: 'none' },
              },
              A,
            ),
            o ? null : p,
          ),
        ),
        o ? r : null,
      );
    },
    cP = M.table(
      ({ theme: e, compact: t, inAddonPanel: r }) => ({
        '&&': {
          borderSpacing: 0,
          color: e.color.defaultText,
          'td, th': {
            padding: 0,
            border: 'none',
            verticalAlign: 'top',
            textOverflow: 'ellipsis',
          },
          fontSize: e.typography.size.s2 - 1,
          lineHeight: '20px',
          textAlign: 'left',
          width: '100%',
          marginTop: r ? 0 : 25,
          marginBottom: r ? 0 : 40,
          'thead th:first-of-type, td:first-of-type': { width: '25%' },
          'th:first-of-type, td:first-of-type': { paddingLeft: 20 },
          'th:nth-of-type(2), td:nth-of-type(2)': {
            ...(t ? null : { width: '35%' }),
          },
          'td:nth-of-type(3)': { ...(t ? null : { width: '15%' }) },
          'th:last-of-type, td:last-of-type': {
            paddingRight: 20,
            ...(t ? null : { width: '25%' }),
          },
          th: {
            color:
              e.base === 'light'
                ? de(0.25, e.color.defaultText)
                : de(0.45, e.color.defaultText),
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 15,
            paddingRight: 15,
          },
          td: {
            paddingTop: '10px',
            paddingBottom: '10px',
            '&:not(:first-of-type)': { paddingLeft: 15, paddingRight: 15 },
            '&:last-of-type': { paddingRight: 20 },
          },
          marginLeft: r ? 0 : 1,
          marginRight: r ? 0 : 1,
          tbody: {
            ...(r
              ? null
              : {
                  filter:
                    e.base === 'light'
                      ? 'drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.10))'
                      : 'drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.20))',
                }),
            '> tr > *': {
              background: e.background.content,
              borderTop: `1px solid ${e.appBorderColor}`,
            },
            ...(r
              ? null
              : {
                  '> tr:first-of-type > *': {
                    borderBlockStart: `1px solid ${e.appBorderColor}`,
                  },
                  '> tr:last-of-type > *': {
                    borderBlockEnd: `1px solid ${e.appBorderColor}`,
                  },
                  '> tr > *:first-of-type': {
                    borderInlineStart: `1px solid ${e.appBorderColor}`,
                  },
                  '> tr > *:last-of-type': {
                    borderInlineEnd: `1px solid ${e.appBorderColor}`,
                  },
                  '> tr:first-of-type > td:first-of-type': {
                    borderTopLeftRadius: e.appBorderRadius,
                  },
                  '> tr:first-of-type > td:last-of-type': {
                    borderTopRightRadius: e.appBorderRadius,
                  },
                  '> tr:last-of-type > td:first-of-type': {
                    borderBottomLeftRadius: e.appBorderRadius,
                  },
                  '> tr:last-of-type > td:last-of-type': {
                    borderBottomRightRadius: e.appBorderRadius,
                  },
                }),
          },
        },
      }),
      ({ isLoading: e, theme: t }) =>
        e
          ? {
              'th span, td span, td button': {
                display: 'inline',
                backgroundColor: t.appBorderColor,
                animation: `${t.animation.glow} 1.5s ease-in-out infinite`,
                color: 'transparent',
                boxShadow: 'none',
                borderRadius: 0,
              },
            }
          : {},
    ),
    dP = M(ht)(({ theme: e }) => ({
      color: e.barTextColor,
      margin: '-4px -12px -4px 0',
    })),
    pP = M.span({ display: 'flex', justifyContent: 'space-between' }),
    fP = {
      alpha: (e, t) => e.name.localeCompare(t.name),
      requiredFirst: (e, t) =>
        +!!t.type?.required - +!!e.type?.required ||
        e.name.localeCompare(t.name),
      none: void 0,
    },
    Wi = (e) => ({
      key: e,
      name: 'propertyName',
      description: 'This is a short description',
      control: { type: 'text' },
      table: {
        type: { summary: 'summary' },
        defaultValue: { summary: 'defaultValue' },
      },
    }),
    hP = { rows: { row1: Wi('row1'), row2: Wi('row2'), row3: Wi('row3') } },
    mP = (e, t) => {
      let r = { ungrouped: [], ungroupedSubsections: {}, sections: {} };
      if (!e) return r;
      Object.entries(e).forEach(([o, i]) => {
        let { category: u, subcategory: s } = i?.table || {};
        if (u) {
          let p = r.sections[u] || { ungrouped: [], subsections: {} };
          if (!s) p.ungrouped.push({ key: o, ...i });
          else {
            let y = p.subsections[s] || [];
            y.push({ key: o, ...i }), (p.subsections[s] = y);
          }
          r.sections[u] = p;
        } else if (s) {
          let p = r.ungroupedSubsections[s] || [];
          p.push({ key: o, ...i }), (r.ungroupedSubsections[s] = p);
        } else r.ungrouped.push({ key: o, ...i });
      });
      let n = fP[t],
        a = (o) =>
          n
            ? Object.keys(o).reduce((i, u) => ({ ...i, [u]: o[u].sort(n) }), {})
            : o;
      return {
        ungrouped: r.ungrouped.sort(n),
        ungroupedSubsections: a(r.ungroupedSubsections),
        sections: Object.keys(r.sections).reduce(
          (o, i) => ({
            ...o,
            [i]: {
              ungrouped: r.sections[i].ungrouped.sort(n),
              subsections: a(r.sections[i].subsections),
            },
          }),
          {},
        ),
      };
    },
    gP = (e, t, r) => {
      try {
        return Oo(e, t, r);
      } catch (n) {
        return vn.warn(n.message), !1;
      }
    },
    St = (e) => {
      if ('error' in e)
        return g.createElement(
          Vi,
          null,
          e.error,
          '\xA0',
          g.createElement(
            lr,
            {
              href: 'http://storybook.js.org/docs/',
              target: '_blank',
              withArrow: !0,
            },
            'Read the docs',
          ),
        );
      let {
          updateArgs: t,
          resetArgs: r,
          compact: n,
          inAddonPanel: a,
          initialExpandedArgs: o,
          sort: i = 'none',
        } = e,
        u = 'isLoading' in e,
        { rows: s, args: p, globals: y } = 'rows' in e ? e : hP,
        A = mP(
          (0, uy.default)(
            s,
            (b) => !b?.table?.disable && gP(b, p || {}, y || {}),
          ),
          i,
        );
      if (
        A.ungrouped.length === 0 &&
        Object.entries(A.sections).length === 0 &&
        Object.entries(A.ungroupedSubsections).length === 0
      )
        return g.createElement(
          Vi,
          null,
          'No inputs found for this component.\xA0',
          g.createElement(
            lr,
            {
              href: 'http://storybook.js.org/docs/',
              target: '_blank',
              withArrow: !0,
            },
            'Read the docs',
          ),
        );
      let h = 1;
      t && (h += 1), n || (h += 2);
      let m = Object.keys(A.sections).length > 0,
        E = {
          updateArgs: t,
          compact: n,
          inAddonPanel: a,
          initialExpandedArgs: o,
        };
      return g.createElement(
        wa,
        null,
        g.createElement(
          cP,
          {
            'aria-hidden': u,
            compact: n,
            inAddonPanel: a,
            isLoading: u,
            className: 'docblock-argstable sb-unstyled',
          },
          g.createElement(
            'thead',
            { className: 'docblock-argstable-head' },
            g.createElement(
              'tr',
              null,
              g.createElement(
                'th',
                null,
                g.createElement('span', null, 'Name'),
              ),
              n
                ? null
                : g.createElement(
                    'th',
                    null,
                    g.createElement('span', null, 'Description'),
                  ),
              n
                ? null
                : g.createElement(
                    'th',
                    null,
                    g.createElement('span', null, 'Default'),
                  ),
              t
                ? g.createElement(
                    'th',
                    null,
                    g.createElement(
                      pP,
                      null,
                      'Control',
                      ' ',
                      !u &&
                        r &&
                        g.createElement(
                          dP,
                          { onClick: () => r(), title: 'Reset controls' },
                          g.createElement(Te, {
                            icon: 'undo',
                            'aria-hidden': !0,
                          }),
                        ),
                    ),
                  )
                : null,
            ),
          ),
          g.createElement(
            'tbody',
            { className: 'docblock-argstable-body' },
            A.ungrouped.map((b) =>
              g.createElement(ua, {
                key: b.key,
                row: b,
                arg: p && p[b.key],
                ...E,
              }),
            ),
            Object.entries(A.ungroupedSubsections).map(([b, x]) =>
              g.createElement(
                Gi,
                { key: b, label: b, level: 'subsection', colSpan: h },
                x.map((F) =>
                  g.createElement(ua, {
                    key: F.key,
                    row: F,
                    arg: p && p[F.key],
                    expandable: m,
                    ...E,
                  }),
                ),
              ),
            ),
            Object.entries(A.sections).map(([b, x]) =>
              g.createElement(
                Gi,
                { key: b, label: b, level: 'section', colSpan: h },
                x.ungrouped.map((F) =>
                  g.createElement(ua, {
                    key: F.key,
                    row: F,
                    arg: p && p[F.key],
                    ...E,
                  }),
                ),
                Object.entries(x.subsections).map(([F, B]) =>
                  g.createElement(
                    Gi,
                    { key: F, label: F, level: 'subsection', colSpan: h },
                    B.map((I) =>
                      g.createElement(ua, {
                        key: I.key,
                        row: I,
                        arg: p && p[I.key],
                        expandable: m,
                        ...E,
                      }),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      );
    },
    Sy = ({ tabs: e, ...t }) => {
      let r = Object.entries(e);
      return r.length === 1
        ? g.createElement(St, { ...r[0][1], ...t })
        : g.createElement(
            Ba,
            null,
            r.map((n) => {
              let [a, o] = n,
                i = `prop_table_div_${a}`;
              return g.createElement(
                'div',
                { key: i, id: i, title: a },
                ({ active: u }) =>
                  u
                    ? g.createElement(St, {
                        key: `prop_table_${a}`,
                        ...o,
                        ...t,
                      })
                    : null,
              );
            }),
          );
    },
    yP = M.div(({ theme: e }) => ({
      background: e.background.warning,
      color: e.color.darkest,
      padding: '10px 15px',
      lineHeight: '20px',
      boxShadow: `${e.appBorderColor} 0 -1px 0 0 inset`,
    })),
    wy = () =>
      g.createElement(
        yP,
        null,
        'This story is not configured to handle controls.',
        ' ',
        g.createElement(
          lr,
          {
            href: 'https://storybook.js.org/docs/react/essentials/controls',
            target: '_blank',
            cancel: !1,
            withArrow: !0,
          },
          'Learn how to add controls',
        ),
      ),
    sre = M.div(({ theme: e }) => ({
      marginRight: 30,
      fontSize: `${e.typography.size.s1}px`,
      color:
        e.base === 'light'
          ? de(0.4, e.color.defaultText)
          : de(0.6, e.color.defaultText),
    })),
    lre = M.div({
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    }),
    cre = M.div({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'baseline',
      '&:not(:last-child)': { marginBottom: '1rem' },
    }),
    dre = M.div(Tt, ({ theme: e }) => ({
      ...la(e),
      margin: '25px 0 40px',
      padding: '30px 20px',
    }));
  var pre = M.div(({ theme: e }) => ({
      fontWeight: e.typography.weight.bold,
      color: e.color.defaultText,
    })),
    fre = M.div(({ theme: e }) => ({
      color:
        e.base === 'light'
          ? de(0.2, e.color.defaultText)
          : de(0.6, e.color.defaultText),
    })),
    hre = M.div({ flex: '0 0 30%', lineHeight: '20px', marginTop: 5 }),
    mre = M.div(({ theme: e }) => ({
      flex: 1,
      textAlign: 'center',
      fontFamily: e.typography.fonts.mono,
      fontSize: e.typography.size.s1,
      lineHeight: 1,
      overflow: 'hidden',
      color:
        e.base === 'light'
          ? de(0.4, e.color.defaultText)
          : de(0.6, e.color.defaultText),
      '> div': {
        display: 'inline-block',
        overflow: 'hidden',
        maxWidth: '100%',
        textOverflow: 'ellipsis',
      },
      span: { display: 'block', marginTop: 2 },
    })),
    gre = M.div({ display: 'flex', flexDirection: 'row' }),
    yre = M.div(({ background: e }) => ({
      position: 'relative',
      flex: 1,
      '&::before': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: e,
        content: '""',
      },
    })),
    bre = M.div(({ theme: e }) => ({
      ...la(e),
      display: 'flex',
      flexDirection: 'row',
      height: 50,
      marginBottom: 5,
      overflow: 'hidden',
      backgroundColor: 'white',
      backgroundImage:
        'repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)',
      backgroundClip: 'padding-box',
    })),
    Are = M.div({
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      position: 'relative',
      marginBottom: 30,
    }),
    Ere = M.div({ flex: 1, display: 'flex', flexDirection: 'row' }),
    vre = M.div({ display: 'flex', alignItems: 'flex-start' }),
    Dre = M.div({ flex: '0 0 30%' }),
    Cre = M.div({ flex: 1 }),
    xre = M.div(({ theme: e }) => ({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 20,
      fontWeight: e.typography.weight.bold,
      color:
        e.base === 'light'
          ? de(0.4, e.color.defaultText)
          : de(0.6, e.color.defaultText),
    })),
    Fre = M.div(({ theme: e }) => ({
      fontSize: e.typography.size.s2,
      lineHeight: '20px',
      display: 'flex',
      flexDirection: 'column',
    }));
  var Sre = M.div(({ theme: e }) => ({
      fontFamily: e.typography.fonts.base,
      fontSize: e.typography.size.s2,
      color: e.color.defaultText,
      marginLeft: 10,
      lineHeight: 1.2,
    })),
    wre = M.div(({ theme: e }) => ({
      ...la(e),
      overflow: 'hidden',
      height: 40,
      width: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none',
      '> img, > svg': { width: 20, height: 20 },
    })),
    Bre = M.div({
      display: 'inline-flex',
      flexDirection: 'row',
      alignItems: 'center',
      flex: '0 1 calc(20% - 10px)',
      minWidth: 120,
      margin: '0px 10px 30px 0',
    }),
    Tre = M.div({ display: 'flex', flexFlow: 'row wrap' });
  var bP = (e) => `anchor--${e}`,
    AP = ({ storyId: e, children: t }) =>
      g.createElement('div', { id: bP(e), className: 'sb-anchor' }, t);
  ue &&
    ue.__DOCS_CONTEXT__ === void 0 &&
    ((ue.__DOCS_CONTEXT__ = sr(null)),
    (ue.__DOCS_CONTEXT__.displayName = 'DocsContext'));
  var Ye = ue ? ue.__DOCS_CONTEXT__ : sr(null),
    iu = (e, t) => Le(Ye).resolveOf(e, t);
  var uu = '^',
    EP = (e) =>
      e
        .split('-')
        .map((t) => t.charAt(0).toUpperCase() + t.slice(1))
        .join(''),
    By = (e) => {
      if (e)
        return typeof e == 'string'
          ? e.includes('-')
            ? EP(e)
            : e
          : e.__docgenInfo && e.__docgenInfo.displayName
          ? e.__docgenInfo.displayName
          : e.name;
    };
  function Ty(e, t) {
    let r = su([e], t);
    return r && r[0];
  }
  function su(e, t) {
    let [r, n] = ae({});
    return (
      ge(() => {
        Promise.all(
          e.map(async (a) => {
            let o = await t.loadStory(a);
            n((i) => (i[a] === o ? i : { ...i, [a]: o }));
          }),
        );
      }),
      e.map((a) => {
        if (r[a]) return r[a];
        try {
          return t.storyById(a);
        } catch {
          return null;
        }
      })
    );
  }
  var vP = (e, t) => {
      let r = t.getStoryContext(t.storyById()),
        [n, a] = ae(r.args);
      ge(() => {
        let u = (s) => {
          s.storyId === e && a(s.args);
        };
        return t.channel.on(Bn, u), () => t.channel.off(Bn, u);
      }, [e]);
      let o = me(
          (u) => t.channel.emit(Tn, { storyId: e, updatedArgs: u }),
          [e],
        ),
        i = me((u) => t.channel.emit(wn, { storyId: e, argNames: u }), [e]);
      return [n, o, i];
    },
    DP = (e) => {
      let t = e.getStoryContext(e.storyById()),
        [r, n] = ae(t.globals);
      return (
        ge(() => {
          let a = (o) => {
            n(o.globals);
          };
          return e.channel.on(Sn, a), () => e.channel.off(Sn, a);
        }, []),
        [r]
      );
    },
    _y = (e, t, r, n) => {
      let { extractArgTypes: a } = t.docs || {};
      if (!a)
        throw new Error(
          'Args unsupported. See Args documentation for your framework.',
        );
      let o = a(e);
      return (o = Pr(o, r, n)), o;
    },
    oy = (e) => e && [uu].includes(e),
    CP = (e = {}, t) => {
      let { of: r } = e,
        { story: n } = e;
      if (oy(r) || oy(n)) return t || null;
      if (!r) throw new Error('No component found.');
      return r;
    },
    Zi = (e, t, r, n, a, o) => ({
      ...e,
      ...(0, dy.default)(t, (i) => ({ rows: _y(i, r, n, a), sort: o })),
    }),
    xP = (e) => {
      let t = Le(Ye),
        {
          story: r,
          component: n,
          subcomponents: a,
          showComponent: o,
          include: i,
          exclude: u,
          sort: s,
        } = e;
      try {
        let p;
        switch (r) {
          case uu: {
            p = t.storyById().id;
            break;
          }
          default:
            p = t.storyIdByName(r);
        }
        let y = Ty(p, t),
          [A, h, m] = vP(p, t),
          [E] = DP(t);
        if (!y)
          return g.createElement(St, {
            isLoading: !0,
            updateArgs: h,
            resetArgs: m,
          });
        let b = Pr(y.argTypes, i, u),
          x = By(n) || 'Story',
          F = {
            [x]: { rows: b, args: A, globals: E, updateArgs: h, resetArgs: m },
          },
          B = b && Object.values(b).find((I) => !!I?.control);
        if (
          (B || ((h = null), (m = null), (F = {})),
          n && (!B || o) && (F = Zi(F, { [x]: n }, y.parameters, i, u)),
          a)
        ) {
          if (Array.isArray(a))
            throw new Error(
              'Unexpected subcomponents array. Expected an object whose keys are tab labels and whose values are components.',
            );
          F = Zi(F, a, y.parameters, i, u);
        }
        return g.createElement(Sy, { tabs: F, sort: s });
      } catch (p) {
        return g.createElement(St, { error: p.message });
      }
    },
    iy = (e) => {
      let { components: t, include: r, exclude: n, sort: a, parameters: o } = e,
        i = Zi({}, t, o, r, n);
      return g.createElement(Sy, { tabs: i, sort: a });
    },
    FP = (e) => {
      ye(Ce`The ArgsTable doc block is deprecated. Instead use the ArgTypes doc block for static tables or the Controls doc block for tables with controls.
    
  Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#argstable-block
  `);
      let t = Le(Ye),
        r,
        n,
        a;
      try {
        ({ parameters: r, component: n, subcomponents: a } = t.storyById());
      } catch {
        let { of: m } = e;
        if ('of' in e && m === void 0)
          throw new Error(
            'Unexpected `of={undefined}`, did you mistype a CSF file reference?',
          );
        ({
          projectAnnotations: { parameters: r },
        } = t.resolveOf(m, ['component']));
      }
      let { include: o, exclude: i, components: u, sort: s } = e,
        { story: p } = e,
        y = s || r.controls?.sort,
        A = CP(e, n);
      if (p)
        return g.createElement(xP, {
          ...e,
          component: A,
          subcomponents: a,
          sort: y,
        });
      if (!u && !a) {
        let m;
        try {
          m = { rows: _y(A, r, o, i) };
        } catch (E) {
          m = { error: E.message };
        }
        return g.createElement(St, { ...m, sort: y });
      }
      if (u)
        return g.createElement(iy, {
          ...e,
          components: u,
          sort: y,
          parameters: r,
        });
      let h = By(A);
      return g.createElement(iy, {
        ...e,
        components: { [h]: A, ...a },
        sort: y,
        parameters: r,
      });
    };
  FP.defaultProps = { of: uu };
  function SP(e) {
    return Mm(e);
  }
  var wP = sr({ sources: {} }),
    BP = '--unknown--';
  var TP = ((e) => (
      (e.OPEN = 'open'), (e.CLOSED = 'closed'), (e.NONE = 'none'), e
    ))(TP || {}),
    _P = (e) => {
      let t = e.map((r) => r.parameters.docs?.source?.state).filter(Boolean);
      return t.length === 0 ? 'closed' : t[0];
    },
    OP = (e, t, r) => {
      let { sources: n } = r,
        a = n?.[e];
      return a?.[SP(t)] || a?.[BP] || { code: '' };
    },
    RP = ({
      snippet: e,
      storyContext: t,
      typeFromProps: r,
      transformFromProps: n,
    }) => {
      let { __isArgsStory: a } = t.parameters,
        o = t.parameters.docs?.source || {},
        i = r || o.type || $r.AUTO;
      if (o.code !== void 0) return o.code;
      let u =
        i === $r.DYNAMIC || (i === $r.AUTO && e && a)
          ? e
          : o.originalSource || '';
      return (
        o.transformSource &&
          ye(Ce`The \`transformSource\` parameter at \`parameters.docs.source.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
        t.parameters.docs?.transformSource &&
          ye(Ce`The \`transformSource\` parameter at \`parameters.docs.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
        t.parameters.jsx?.transformSource &&
          ye(Ce`The \`transformSource\` parameter at \`parameters.jsx.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
        (
          n ??
          o.transform ??
          o.transformSource ??
          t.parameters.docs?.transformSource ??
          t.parameters.jsx?.transformSource
        )?.(u, t) || u
      );
    },
    Oy = (e, t, r) => {
      let n = e.ids || (e.id ? [e.id] : []),
        a = su(n, t),
        o = a,
        { of: i } = e;
      if ('of' in e && i === void 0)
        throw new Error(
          'Unexpected `of={undefined}`, did you mistype a CSF file reference?',
        );
      if (i) o = [t.resolveOf(i, ['story']).story];
      else if (o.length === 0)
        try {
          o = [t.storyById()];
        } catch {}
      if (!a.every(Boolean))
        return { error: 'Oh no! The source is not available.', state: 'none' };
      let u = o[0]?.parameters?.docs?.source || {},
        { code: s } = e,
        p = e.format ?? u.format,
        y = e.language ?? u.language ?? 'jsx',
        A = e.dark ?? u.dark ?? !1;
      s ||
        (s = o.map((m, E) => {
          if (!m) return '';
          let b = t.getStoryContext(m),
            x = e.__forceInitialArgs ? b.initialArgs : b.unmappedArgs,
            F = OP(m.id, x, r);
          return (
            E === 0 &&
              (p = F.format ?? m.parameters.docs?.source?.format ?? !1),
            RP({
              snippet: F.code,
              storyContext: { ...b, args: x },
              typeFromProps: e.type,
              transformFromProps: e.transform,
            })
          );
        }).join(`

`));
      let h = _P(o);
      return s
        ? { code: s, format: p, language: y, dark: A, state: h }
        : { error: 'Oh no! The source is not available.', state: h };
    };
  var Ry = (e, t) => {
      let { id: r, of: n, meta: a, story: o } = e;
      if ('of' in e && n === void 0)
        throw new Error(
          'Unexpected `of={undefined}`, did you mistype a CSF file reference?',
        );
      if (r)
        return (
          ye(Ce`Referencing stories by \`id\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
          r
        );
      let { name: i } = e;
      return i
        ? (ye(Ce`Referencing stories by \`name\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
          t.storyIdByName(i))
        : (o &&
            ye(Ce`The \`story\` prop is deprecated, please export your stories from CSF files and reference them with \`of={}\`.

      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
          a && t.referenceMeta(a, !1),
          t.resolveOf(n || o || 'story', ['story']).story.id);
    },
    PP = (e, t, r) => {
      let { parameters: n = {} } = t || {},
        { docs: a = {} } = n,
        o = a.story || {};
      if (a.disable) return null;
      let { inlineStories: i, iframeHeight: u } = a;
      typeof i < 'u' &&
        ye(Ce`The \`docs.inlineStories\` parameter is deprecated, use \`docs.story.inline\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `);
      let s = e.inline ?? o.inline ?? i ?? !1;
      if (
        (typeof u < 'u' &&
          ye(Ce`The \`docs.iframeHeight\` parameter is deprecated, use \`docs.story.iframeHeight\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `),
        s)
      ) {
        let y = e.height ?? o.height,
          A = e.autoplay ?? o.autoplay ?? !1;
        return {
          story: t,
          inline: !0,
          height: y,
          autoplay: A,
          forceInitialArgs: !!e.__forceInitialArgs,
          primary: !!e.__primary,
          renderStoryToElement: r.renderStoryToElement,
        };
      }
      let p = e.height ?? o.height ?? o.iframeHeight ?? u ?? '100px';
      return { story: t, inline: !1, height: p, primary: !!e.__primary };
    },
    IP = (e = { __forceInitialArgs: !1, __primary: !1 }) => {
      let t = Le(Ye),
        r = Ry(e, t),
        n = Ty(r, t);
      if (!n) return g.createElement(nu, null);
      let a = PP(e, n, t);
      return a ? g.createElement(x9, { ...a }) : null;
    },
    kP = (
      { withSource: e, mdxSource: t, children: r, layout: n, ...a },
      o,
      i,
    ) => {
      let u = Kr.toArray(r)
          .filter((h) => h.props && (h.props.id || h.props.name || h.props.of))
          .map((h) => Ry(h.props, o)),
        s = su(u, o),
        p = s.some((h) => !h),
        y = Oy(
          {
            ...(t ? { code: decodeURI(t) } : { ids: u }),
            ...(a.of && { of: a.of }),
          },
          o,
          i,
        );
      if (e === 'none') return { isLoading: p, previewProps: a };
      let A = n;
      return (
        Kr.forEach(r, (h) => {
          A || (A = h?.props?.parameters?.layout);
        }),
        s.forEach((h) => {
          A ||
            !h ||
            (A = h?.parameters.layout ?? h.parameters.docs?.canvas?.layout);
        }),
        {
          isLoading: p,
          previewProps: {
            ...a,
            layout: A ?? 'padded',
            withSource: y,
            isExpanded: (e || y.state) === 'open',
          },
        }
      );
    },
    NP = (e) => {
      let t = Le(Ye),
        r = Le(wP),
        { children: n, of: a, source: o } = e;
      if ('of' in e && a === void 0)
        throw new Error(
          'Unexpected `of={undefined}`, did you mistype a CSF file reference?',
        );
      let { isLoading: i, previewProps: u } = kP(e, t, r),
        s,
        p,
        y;
      try {
        ({ story: s } = iu(a || 'story', ['story']));
      } catch (x) {
        n || (y = x);
      }
      try {
        p = Oy({ ...o, ...(a && { of: a }) }, t, r);
      } catch (x) {
        n || (y = x);
      }
      if (y) throw y;
      if (
        (e.withSource &&
          ye(Ce`Setting source state with \`withSource\` is deprecated, please use \`sourceState\` with 'hidden', 'shown' or 'none' instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
        e.mdxSource &&
          ye(Ce`Setting source code with \`mdxSource\` is deprecated, please use source={{code: '...'}} instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
        (e.isColumn !== void 0 || e.columns !== void 0) &&
          ye(Ce`\`isColumn\` and \`columns\` props are deprecated as the Canvas block now only supports showing a single story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
        n)
      )
        return (
          ye(Ce`Passing children to Canvas is deprecated, please use the \`of\` prop instead to reference a story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
  `),
          i ? g.createElement(R9, null) : g.createElement(Yi, { ...u }, n)
        );
      let A =
          e.layout ??
          s.parameters.layout ??
          s.parameters.docs?.canvas?.layout ??
          'padded',
        h = e.withToolbar ?? s.parameters.docs?.canvas?.withToolbar ?? !1,
        m = e.additionalActions ?? s.parameters.docs?.canvas?.additionalActions,
        E = e.sourceState ?? s.parameters.docs?.canvas?.sourceState ?? 'hidden',
        b = e.className ?? s.parameters.docs?.canvas?.className;
      return g.createElement(
        Yi,
        {
          withSource: E === 'none' ? void 0 : p,
          isExpanded: E === 'shown',
          withToolbar: h,
          additionalActions: m,
          className: b,
          layout: A,
        },
        g.createElement(IP, {
          of: a || s.moduleExport,
          meta: e.meta,
          ...e.story,
        }),
      );
    };
  var { document: Py } = ue;
  var LP = ({ className: e, children: t, ...r }) => {
    if (typeof e != 'string' && (typeof t != 'string' || !t.match(/[\n\r]/g)))
      return g.createElement(Ea, null, t);
    let n = e && e.split('-');
    return g.createElement(tu, {
      language: (n && n[1]) || 'plaintext',
      format: !1,
      code: t,
      ...r,
    });
  };
  function lu(e, t) {
    e.channel.emit(Gf, t);
  }
  var eu = Ra.a,
    jP = ({ hash: e, children: t }) => {
      let r = Le(Ye);
      return g.createElement(
        eu,
        {
          href: e,
          target: '_self',
          onClick: (n) => {
            let a = e.substring(1);
            Py.getElementById(a) && lu(r, e);
          },
        },
        t,
      );
    },
    qP = (e) => {
      let { href: t, target: r, children: n, ...a } = e,
        o = Le(Ye);
      if (t) {
        if (t.startsWith('#')) return g.createElement(jP, { hash: t }, n);
        if (r !== '_blank' && !t.startsWith('https://'))
          return g.createElement(
            eu,
            {
              href: t,
              onClick: (i) => {
                i.button === 0 &&
                  !i.altKey &&
                  !i.ctrlKey &&
                  !i.metaKey &&
                  !i.shiftKey &&
                  (i.preventDefault(),
                  lu(o, i.currentTarget.getAttribute('href')));
              },
              target: r,
              ...a,
            },
            n,
          );
      }
      return g.createElement(eu, { ...e });
    },
    Iy = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    MP = Iy.reduce(
      (e, t) => ({
        ...e,
        [t]: M(t)({
          '& svg': {
            position: 'relative',
            top: '-0.1em',
            visibility: 'hidden',
          },
          '&:hover svg': { visibility: 'visible' },
        }),
      }),
      {},
    ),
    $P = M.a(() => ({
      float: 'left',
      lineHeight: 'inherit',
      paddingRight: '10px',
      marginLeft: '-24px',
      color: 'inherit',
    })),
    UP = ({ as: e, id: t, children: r, ...n }) => {
      let a = Le(Ye),
        o = MP[e],
        i = `#${t}`;
      return g.createElement(
        o,
        { id: t, ...n },
        g.createElement(
          $P,
          {
            'aria-hidden': 'true',
            href: i,
            tabIndex: -1,
            target: '_self',
            onClick: (u) => {
              Py.getElementById(t) && lu(a, i);
            },
          },
          g.createElement(Te, { icon: 'link' }),
        ),
        r,
      );
    },
    cu = (e) => {
      let { as: t, id: r, children: n, ...a } = e;
      if (r) return g.createElement(UP, { as: t, id: r, ...a }, n);
      let o = t,
        { as: i, ...u } = e;
      return g.createElement(o, { ...Ia(u, t) });
    },
    HP = Iy.reduce(
      (e, t) => ({ ...e, [t]: (r) => g.createElement(cu, { as: t, ...r }) }),
      {},
    ),
    zP = (e) => {
      if (!e.children) return null;
      if (typeof e.children != 'string')
        throw new Error(Ce`The Markdown block only accepts children as a single string, but children were of type: '${typeof e.children}'
        This is often caused by not wrapping the child in a template string.
        
        This is invalid:
        <Markdown>
          # Some heading
          A paragraph
        </Markdown>

        Instead do:
        <Markdown>
        {\`
          # Some heading
          A paragraph
        \`}
        </Markdown>
      `);
      return g.createElement(Mo, {
        ...e,
        options: {
          forceBlock: !0,
          overrides: { code: LP, a: qP, ...HP, ...e?.options?.overrides },
          ...e?.options,
        },
      });
    },
    GP = ((e) => (
      (e.INFO = 'info'),
      (e.NOTES = 'notes'),
      (e.DOCGEN = 'docgen'),
      (e.AUTO = 'auto'),
      e
    ))(GP || {}),
    sa =
      'https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#description-block-parametersnotes-and-parametersinfo',
    WP = (e) => e && (typeof e == 'string' ? e : Xn(e.markdown) || Xn(e.text)),
    VP = (e) => e && (typeof e == 'string' ? e : Xn(e.text)),
    KP = (e) => null,
    YP = (e) => {
      switch (e.type) {
        case 'story':
          return e.story.parameters.docs?.description?.story || null;
        case 'meta': {
          let { parameters: t, component: r } = e.preparedMeta;
          return (
            t.docs?.description?.component ||
            t.docs?.extractComponentDescription?.(r, {
              component: r,
              parameters: t,
            }) ||
            null
          );
        }
        case 'component': {
          let {
            component: t,
            projectAnnotations: { parameters: r },
          } = e;
          return (
            r.docs?.extractComponentDescription?.(t, {
              component: t,
              parameters: r,
            }) || null
          );
        }
        default:
          throw new Error(
            `Unrecognized module type resolved from 'useOf', got: ${e.type}`,
          );
      }
    },
    XP = ({ type: e, markdown: t, children: r }, { storyById: n }) => {
      let { component: a, parameters: o } = n();
      if (r || t) return r || t;
      let { notes: i, info: u, docs: s } = o;
      (i || u) &&
        ye(
          `Using 'parameters.notes' or 'parameters.info' properties to describe stories is deprecated. See ${sa}`,
        );
      let { extractComponentDescription: p = KP, description: y } = s || {},
        A = y?.component;
      if (A) return A;
      switch (e) {
        case 'info':
          return VP(u);
        case 'notes':
          return WP(i);
        case 'docgen':
        case 'auto':
        default:
          return p(a, { component: a, ...o });
      }
    },
    JP = (e) => {
      let { of: t, type: r, markdown: n, children: a } = e;
      if ('of' in e && t === void 0)
        throw new Error(
          'Unexpected `of={undefined}`, did you mistype a CSF file reference?',
        );
      let o = Le(Ye),
        i = iu(t || 'meta'),
        u;
      return (
        r || n || a ? (u = XP(e, o)) : (u = YP(i)),
        r &&
          ye(`Manually specifying description type is deprecated. See ${sa}`),
        n &&
          ye(
            `The 'markdown' prop on the Description block is deprecated. See ${sa}`,
          ),
        a &&
          ye(
            `The 'children' prop on the Description block is deprecated. See ${sa}`,
          ),
        u ? g.createElement(zP, null, u) : null
      );
    },
    _re = M.div(({ theme: e }) => ({
      width: '10rem',
      '@media (max-width: 768px)': { display: 'none' },
    })),
    Ore = M.div(({ theme: e }) => ({
      position: 'fixed',
      top: 0,
      width: '10rem',
      paddingTop: '4rem',
      fontFamily: e.typography.fonts.base,
      fontSize: e.typography.size.s2,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      WebkitOverflowScrolling: 'touch',
      '& *': { boxSizing: 'border-box' },
      '& > .toc-wrapper > .toc-list': {
        paddingLeft: 0,
        borderLeft: `solid 2px ${e.color.mediumlight}`,
        '.toc-list': {
          paddingLeft: 0,
          borderLeft: `solid 2px ${e.color.mediumlight}`,
          '.toc-list': {
            paddingLeft: 0,
            borderLeft: `solid 2px ${e.color.mediumlight}`,
          },
        },
      },
      '& .toc-list-item': {
        position: 'relative',
        listStyleType: 'none',
        marginLeft: 20,
        paddingTop: 3,
        paddingBottom: 3,
      },
      '& .toc-list-item::before': {
        content: '""',
        position: 'absolute',
        height: '100%',
        top: 0,
        left: 0,
        transform: 'translateX(calc(-2px - 20px))',
        borderLeft: `solid 2px ${e.color.mediumdark}`,
        opacity: 0,
        transition: 'opacity 0.2s',
      },
      '& .toc-list-item.is-active-li::before': { opacity: 1 },
      '& .toc-list-item > a': {
        color: e.color.defaultText,
        textDecoration: 'none',
      },
      '& .toc-list-item.is-active-li > a': {
        fontWeight: 600,
        color: e.color.secondary,
        textDecoration: 'none',
      },
    })),
    Rre = M.p(({ theme: e }) => ({
      fontWeight: 600,
      fontSize: '0.875em',
      color: e.textColor,
      textTransform: 'uppercase',
      marginBottom: 10,
    }));
  var { document: Pre, window: Ire } = ue;
  var QP = ({ children: e, disableAnchor: t }) => {
      if (t || typeof e != 'string') return g.createElement(xa, null, e);
      let r = e.toLowerCase().replace(/[^a-z0-9]/gi, '-');
      return g.createElement(cu, { as: 'h3', id: r }, e);
    },
    ZP = ({
      of: e,
      expanded: t = !0,
      withToolbar: r = !1,
      __forceInitialArgs: n = !1,
      __primary: a = !1,
    }) => {
      let { story: o } = iu(e || 'story', ['story']),
        i = o.parameters.docs?.canvas?.withToolbar ?? r;
      return g.createElement(
        AP,
        { storyId: o.id },
        t &&
          g.createElement(
            g.Fragment,
            null,
            g.createElement(QP, null, o.name),
            g.createElement(JP, { of: e }),
          ),
        g.createElement(NP, {
          of: e,
          withToolbar: i,
          story: { __forceInitialArgs: n, __primary: a },
          source: { __forceInitialArgs: n },
        }),
      );
    };
  var eI = ({ children: e, disableAnchor: t, ...r }) => {
      if (t || typeof e != 'string') return g.createElement(Ca, null, e);
      let n = e.toLowerCase().replace(/[^a-z0-9]/gi, '-');
      return g.createElement(cu, { as: 'h2', id: n, ...r }, e);
    },
    tI = M(eI)(({ theme: e }) => ({
      fontSize: `${e.typography.size.s2 - 1}px`,
      fontWeight: e.typography.weight.bold,
      lineHeight: '16px',
      letterSpacing: '0.35em',
      textTransform: 'uppercase',
      color: e.textMutedColor,
      border: 0,
      marginBottom: '12px',
      '&:first-of-type': { marginTop: '56px' },
    })),
    rI = ({ title: e, includePrimary: t = !0 }) => {
      let { componentStories: r } = Le(Ye),
        n = r().filter((a) => !a.parameters?.docs?.disable);
      return (
        t || (n = n.slice(1)),
        !n || n.length === 0
          ? null
          : g.createElement(
              g.Fragment,
              null,
              g.createElement(tI, null, e),
              n.map(
                (a) =>
                  a &&
                  g.createElement(ZP, {
                    key: a.id,
                    of: a.moduleExport,
                    expanded: !0,
                    __forceInitialArgs: !0,
                  }),
              ),
            )
      );
    };
  rI.defaultProps = { title: 'Stories' };
  var nI = () => {
    let [e, t, r] = bu(),
      [n] = Au(),
      a = ga(),
      o = ya('__isArgsStory', !1),
      {
        expanded: i,
        sort: u,
        presetColors: s,
        hideNoControlsWarning: p = !1,
      } = ya(fa, {}),
      { path: y } = Eu(),
      A = Object.values(a).some((E) => E?.control),
      h = !(A && o) && !p,
      m = Object.entries(a).reduce(
        (E, [b, x]) => (
          x?.control?.type !== 'color' || x?.control?.presetColors
            ? (E[b] = x)
            : (E[b] = { ...x, control: { ...x.control, presetColors: s } }),
          E
        ),
        {},
      );
    return g.createElement(
      g.Fragment,
      null,
      h && g.createElement(wy, null),
      g.createElement(St, {
        key: y,
        compact: !i && A,
        rows: m,
        args: e,
        globals: n,
        updateArgs: t,
        resetArgs: r,
        inAddonPanel: !0,
        sort: u,
      }),
    );
  };
  function aI() {
    let e = ga(),
      t = Object.values(e).filter(
        (n) => n?.control && !n?.table?.disable,
      ).length,
      r = t === 0 ? '' : ` (${t})`;
    return g.createElement(g.Fragment, null, 'Controls', r);
  }
  ma.register(pa, (e) => {
    ma.add(pa, {
      title: g.createElement(aI, null),
      id: 'controls',
      type: yu.PANEL,
      paramKey: fa,
      render: ({ key: t, active: r }) =>
        !r || !e.getCurrentStoryData()
          ? null
          : g.createElement(
              Aa,
              { key: t, active: r },
              g.createElement(nI, null),
            ),
    });
  });
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e,
  );
}
//# sourceMappingURL=manager-bundle.js.map
