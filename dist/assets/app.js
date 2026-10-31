(function () {
	'use strict';

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var react = {exports: {}};

	var react_production_min = {};

	/**
	 * @license React
	 * react.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var hasRequiredReact_production_min;
	function requireReact_production_min() {
	  if (hasRequiredReact_production_min) return react_production_min;
	  hasRequiredReact_production_min = 1;
	  var l = Symbol.for("react.element"),
	    n = Symbol.for("react.portal"),
	    p = Symbol.for("react.fragment"),
	    q = Symbol.for("react.strict_mode"),
	    r = Symbol.for("react.profiler"),
	    t = Symbol.for("react.provider"),
	    u = Symbol.for("react.context"),
	    v = Symbol.for("react.forward_ref"),
	    w = Symbol.for("react.suspense"),
	    x = Symbol.for("react.memo"),
	    y = Symbol.for("react.lazy"),
	    z = Symbol.iterator;
	  function A(a) {
	    if (null === a || "object" !== typeof a) return null;
	    a = z && a[z] || a["@@iterator"];
	    return "function" === typeof a ? a : null;
	  }
	  var B = {
	      isMounted: function () {
	        return false;
	      },
	      enqueueForceUpdate: function () {},
	      enqueueReplaceState: function () {},
	      enqueueSetState: function () {}
	    },
	    C = Object.assign,
	    D = {};
	  function E(a, b, e) {
	    this.props = a;
	    this.context = b;
	    this.refs = D;
	    this.updater = e || B;
	  }
	  E.prototype.isReactComponent = {};
	  E.prototype.setState = function (a, b) {
	    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
	    this.updater.enqueueSetState(this, a, b, "setState");
	  };
	  E.prototype.forceUpdate = function (a) {
	    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
	  };
	  function F() {}
	  F.prototype = E.prototype;
	  function G(a, b, e) {
	    this.props = a;
	    this.context = b;
	    this.refs = D;
	    this.updater = e || B;
	  }
	  var H = G.prototype = new F();
	  H.constructor = G;
	  C(H, E.prototype);
	  H.isPureReactComponent = true;
	  var I = Array.isArray,
	    J = Object.prototype.hasOwnProperty,
	    K = {
	      current: null
	    },
	    L = {
	      key: true,
	      ref: true,
	      __self: true,
	      __source: true
	    };
	  function M(a, b, e) {
	    var d,
	      c = {},
	      k = null,
	      h = null;
	    if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
	    var g = arguments.length - 2;
	    if (1 === g) c.children = e;else if (1 < g) {
	      for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
	      c.children = f;
	    }
	    if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
	    return {
	      $$typeof: l,
	      type: a,
	      key: k,
	      ref: h,
	      props: c,
	      _owner: K.current
	    };
	  }
	  function N(a, b) {
	    return {
	      $$typeof: l,
	      type: a.type,
	      key: b,
	      ref: a.ref,
	      props: a.props,
	      _owner: a._owner
	    };
	  }
	  function O(a) {
	    return "object" === typeof a && null !== a && a.$$typeof === l;
	  }
	  function escape(a) {
	    var b = {
	      "=": "=0",
	      ":": "=2"
	    };
	    return "$" + a.replace(/[=:]/g, function (a) {
	      return b[a];
	    });
	  }
	  var P = /\/+/g;
	  function Q(a, b) {
	    return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
	  }
	  function R(a, b, e, d, c) {
	    var k = typeof a;
	    if ("undefined" === k || "boolean" === k) a = null;
	    var h = false;
	    if (null === a) h = true;else switch (k) {
	      case "string":
	      case "number":
	        h = true;
	        break;
	      case "object":
	        switch (a.$$typeof) {
	          case l:
	          case n:
	            h = true;
	        }
	    }
	    if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function (a) {
	      return a;
	    })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
	    h = 0;
	    d = "" === d ? "." : d + ":";
	    if (I(a)) for (var g = 0; g < a.length; g++) {
	      k = a[g];
	      var f = d + Q(k, g);
	      h += R(k, b, e, f, c);
	    } else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
	    return h;
	  }
	  function S(a, b, e) {
	    if (null == a) return a;
	    var d = [],
	      c = 0;
	    R(a, d, "", "", function (a) {
	      return b.call(e, a, c++);
	    });
	    return d;
	  }
	  function T(a) {
	    if (-1 === a._status) {
	      var b = a._result;
	      b = b();
	      b.then(function (b) {
	        if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
	      }, function (b) {
	        if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
	      });
	      -1 === a._status && (a._status = 0, a._result = b);
	    }
	    if (1 === a._status) return a._result.default;
	    throw a._result;
	  }
	  var U = {
	      current: null
	    },
	    V = {
	      transition: null
	    },
	    W = {
	      ReactCurrentDispatcher: U,
	      ReactCurrentBatchConfig: V,
	      ReactCurrentOwner: K
	    };
	  function X() {
	    throw Error("act(...) is not supported in production builds of React.");
	  }
	  react_production_min.Children = {
	    map: S,
	    forEach: function (a, b, e) {
	      S(a, function () {
	        b.apply(this, arguments);
	      }, e);
	    },
	    count: function (a) {
	      var b = 0;
	      S(a, function () {
	        b++;
	      });
	      return b;
	    },
	    toArray: function (a) {
	      return S(a, function (a) {
	        return a;
	      }) || [];
	    },
	    only: function (a) {
	      if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
	      return a;
	    }
	  };
	  react_production_min.Component = E;
	  react_production_min.Fragment = p;
	  react_production_min.Profiler = r;
	  react_production_min.PureComponent = G;
	  react_production_min.StrictMode = q;
	  react_production_min.Suspense = w;
	  react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
	  react_production_min.act = X;
	  react_production_min.cloneElement = function (a, b, e) {
	    if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
	    var d = C({}, a.props),
	      c = a.key,
	      k = a.ref,
	      h = a._owner;
	    if (null != b) {
	      void 0 !== b.ref && (k = b.ref, h = K.current);
	      void 0 !== b.key && (c = "" + b.key);
	      if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
	      for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
	    }
	    var f = arguments.length - 2;
	    if (1 === f) d.children = e;else if (1 < f) {
	      g = Array(f);
	      for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
	      d.children = g;
	    }
	    return {
	      $$typeof: l,
	      type: a.type,
	      key: c,
	      ref: k,
	      props: d,
	      _owner: h
	    };
	  };
	  react_production_min.createContext = function (a) {
	    a = {
	      $$typeof: u,
	      _currentValue: a,
	      _currentValue2: a,
	      _threadCount: 0,
	      Provider: null,
	      Consumer: null,
	      _defaultValue: null,
	      _globalName: null
	    };
	    a.Provider = {
	      $$typeof: t,
	      _context: a
	    };
	    return a.Consumer = a;
	  };
	  react_production_min.createElement = M;
	  react_production_min.createFactory = function (a) {
	    var b = M.bind(null, a);
	    b.type = a;
	    return b;
	  };
	  react_production_min.createRef = function () {
	    return {
	      current: null
	    };
	  };
	  react_production_min.forwardRef = function (a) {
	    return {
	      $$typeof: v,
	      render: a
	    };
	  };
	  react_production_min.isValidElement = O;
	  react_production_min.lazy = function (a) {
	    return {
	      $$typeof: y,
	      _payload: {
	        _status: -1,
	        _result: a
	      },
	      _init: T
	    };
	  };
	  react_production_min.memo = function (a, b) {
	    return {
	      $$typeof: x,
	      type: a,
	      compare: void 0 === b ? null : b
	    };
	  };
	  react_production_min.startTransition = function (a) {
	    var b = V.transition;
	    V.transition = {};
	    try {
	      a();
	    } finally {
	      V.transition = b;
	    }
	  };
	  react_production_min.unstable_act = X;
	  react_production_min.useCallback = function (a, b) {
	    return U.current.useCallback(a, b);
	  };
	  react_production_min.useContext = function (a) {
	    return U.current.useContext(a);
	  };
	  react_production_min.useDebugValue = function () {};
	  react_production_min.useDeferredValue = function (a) {
	    return U.current.useDeferredValue(a);
	  };
	  react_production_min.useEffect = function (a, b) {
	    return U.current.useEffect(a, b);
	  };
	  react_production_min.useId = function () {
	    return U.current.useId();
	  };
	  react_production_min.useImperativeHandle = function (a, b, e) {
	    return U.current.useImperativeHandle(a, b, e);
	  };
	  react_production_min.useInsertionEffect = function (a, b) {
	    return U.current.useInsertionEffect(a, b);
	  };
	  react_production_min.useLayoutEffect = function (a, b) {
	    return U.current.useLayoutEffect(a, b);
	  };
	  react_production_min.useMemo = function (a, b) {
	    return U.current.useMemo(a, b);
	  };
	  react_production_min.useReducer = function (a, b, e) {
	    return U.current.useReducer(a, b, e);
	  };
	  react_production_min.useRef = function (a) {
	    return U.current.useRef(a);
	  };
	  react_production_min.useState = function (a) {
	    return U.current.useState(a);
	  };
	  react_production_min.useSyncExternalStore = function (a, b, e) {
	    return U.current.useSyncExternalStore(a, b, e);
	  };
	  react_production_min.useTransition = function () {
	    return U.current.useTransition();
	  };
	  react_production_min.version = "18.3.1";
	  return react_production_min;
	}

	var hasRequiredReact;
	function requireReact() {
	  if (hasRequiredReact) return react.exports;
	  hasRequiredReact = 1;
	  {
	    react.exports = requireReact_production_min();
	  }
	  return react.exports;
	}

	var reactExports = requireReact();
	var React = /*@__PURE__*/getDefaultExportFromCjs(reactExports);

	var client = {};

	var reactDom = {exports: {}};

	var reactDom_production_min = {};

	var scheduler = {exports: {}};

	var scheduler_production_min = {};

	/**
	 * @license React
	 * scheduler.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var hasRequiredScheduler_production_min;
	function requireScheduler_production_min() {
	  if (hasRequiredScheduler_production_min) return scheduler_production_min;
	  hasRequiredScheduler_production_min = 1;
	  (function (exports) {

	    function f(a, b) {
	      var c = a.length;
	      a.push(b);
	      a: for (; 0 < c;) {
	        var d = c - 1 >>> 1,
	          e = a[d];
	        if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;else break a;
	      }
	    }
	    function h(a) {
	      return 0 === a.length ? null : a[0];
	    }
	    function k(a) {
	      if (0 === a.length) return null;
	      var b = a[0],
	        c = a.pop();
	      if (c !== b) {
	        a[0] = c;
	        a: for (var d = 0, e = a.length, w = e >>> 1; d < w;) {
	          var m = 2 * (d + 1) - 1,
	            C = a[m],
	            n = m + 1,
	            x = a[n];
	          if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;else break a;
	        }
	      }
	      return b;
	    }
	    function g(a, b) {
	      var c = a.sortIndex - b.sortIndex;
	      return 0 !== c ? c : a.id - b.id;
	    }
	    if ("object" === typeof performance && "function" === typeof performance.now) {
	      var l = performance;
	      exports.unstable_now = function () {
	        return l.now();
	      };
	    } else {
	      var p = Date,
	        q = p.now();
	      exports.unstable_now = function () {
	        return p.now() - q;
	      };
	    }
	    var r = [],
	      t = [],
	      u = 1,
	      v = null,
	      y = 3,
	      z = false,
	      A = false,
	      B = false,
	      D = "function" === typeof setTimeout ? setTimeout : null,
	      E = "function" === typeof clearTimeout ? clearTimeout : null,
	      F = "undefined" !== typeof setImmediate ? setImmediate : null;
	    "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
	    function G(a) {
	      for (var b = h(t); null !== b;) {
	        if (null === b.callback) k(t);else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r, b);else break;
	        b = h(t);
	      }
	    }
	    function H(a) {
	      B = false;
	      G(a);
	      if (!A) if (null !== h(r)) A = true, I(J);else {
	        var b = h(t);
	        null !== b && K(H, b.startTime - a);
	      }
	    }
	    function J(a, b) {
	      A = false;
	      B && (B = false, E(L), L = -1);
	      z = true;
	      var c = y;
	      try {
	        G(b);
	        for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M());) {
	          var d = v.callback;
	          if ("function" === typeof d) {
	            v.callback = null;
	            y = v.priorityLevel;
	            var e = d(v.expirationTime <= b);
	            b = exports.unstable_now();
	            "function" === typeof e ? v.callback = e : v === h(r) && k(r);
	            G(b);
	          } else k(r);
	          v = h(r);
	        }
	        if (null !== v) var w = !0;else {
	          var m = h(t);
	          null !== m && K(H, m.startTime - b);
	          w = !1;
	        }
	        return w;
	      } finally {
	        v = null, y = c, z = false;
	      }
	    }
	    var N = false,
	      O = null,
	      L = -1,
	      P = 5,
	      Q = -1;
	    function M() {
	      return exports.unstable_now() - Q < P ? false : true;
	    }
	    function R() {
	      if (null !== O) {
	        var a = exports.unstable_now();
	        Q = a;
	        var b = true;
	        try {
	          b = O(!0, a);
	        } finally {
	          b ? S() : (N = false, O = null);
	        }
	      } else N = false;
	    }
	    var S;
	    if ("function" === typeof F) S = function () {
	      F(R);
	    };else if ("undefined" !== typeof MessageChannel) {
	      var T = new MessageChannel(),
	        U = T.port2;
	      T.port1.onmessage = R;
	      S = function () {
	        U.postMessage(null);
	      };
	    } else S = function () {
	      D(R, 0);
	    };
	    function I(a) {
	      O = a;
	      N || (N = true, S());
	    }
	    function K(a, b) {
	      L = D(function () {
	        a(exports.unstable_now());
	      }, b);
	    }
	    exports.unstable_IdlePriority = 5;
	    exports.unstable_ImmediatePriority = 1;
	    exports.unstable_LowPriority = 4;
	    exports.unstable_NormalPriority = 3;
	    exports.unstable_Profiling = null;
	    exports.unstable_UserBlockingPriority = 2;
	    exports.unstable_cancelCallback = function (a) {
	      a.callback = null;
	    };
	    exports.unstable_continueExecution = function () {
	      A || z || (A = true, I(J));
	    };
	    exports.unstable_forceFrameRate = function (a) {
	      0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1E3 / a) : 5;
	    };
	    exports.unstable_getCurrentPriorityLevel = function () {
	      return y;
	    };
	    exports.unstable_getFirstCallbackNode = function () {
	      return h(r);
	    };
	    exports.unstable_next = function (a) {
	      switch (y) {
	        case 1:
	        case 2:
	        case 3:
	          var b = 3;
	          break;
	        default:
	          b = y;
	      }
	      var c = y;
	      y = b;
	      try {
	        return a();
	      } finally {
	        y = c;
	      }
	    };
	    exports.unstable_pauseExecution = function () {};
	    exports.unstable_requestPaint = function () {};
	    exports.unstable_runWithPriority = function (a, b) {
	      switch (a) {
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	          break;
	        default:
	          a = 3;
	      }
	      var c = y;
	      y = a;
	      try {
	        return b();
	      } finally {
	        y = c;
	      }
	    };
	    exports.unstable_scheduleCallback = function (a, b, c) {
	      var d = exports.unstable_now();
	      "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
	      switch (a) {
	        case 1:
	          var e = -1;
	          break;
	        case 2:
	          e = 250;
	          break;
	        case 5:
	          e = 1073741823;
	          break;
	        case 4:
	          e = 1E4;
	          break;
	        default:
	          e = 5E3;
	      }
	      e = c + e;
	      a = {
	        id: u++,
	        callback: b,
	        priorityLevel: a,
	        startTime: c,
	        expirationTime: e,
	        sortIndex: -1
	      };
	      c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = true, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = true, I(J)));
	      return a;
	    };
	    exports.unstable_shouldYield = M;
	    exports.unstable_wrapCallback = function (a) {
	      var b = y;
	      return function () {
	        var c = y;
	        y = b;
	        try {
	          return a.apply(this, arguments);
	        } finally {
	          y = c;
	        }
	      };
	    };
	  })(scheduler_production_min);
	  return scheduler_production_min;
	}

	var hasRequiredScheduler;
	function requireScheduler() {
	  if (hasRequiredScheduler) return scheduler.exports;
	  hasRequiredScheduler = 1;
	  {
	    scheduler.exports = requireScheduler_production_min();
	  }
	  return scheduler.exports;
	}

	/**
	 * @license React
	 * react-dom.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var hasRequiredReactDom_production_min;
	function requireReactDom_production_min() {
	  if (hasRequiredReactDom_production_min) return reactDom_production_min;
	  hasRequiredReactDom_production_min = 1;
	  var aa = requireReact(),
	    ca = requireScheduler();
	  function p(a) {
	    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
	    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	  }
	  var da = new Set(),
	    ea = {};
	  function fa(a, b) {
	    ha(a, b);
	    ha(a + "Capture", b);
	  }
	  function ha(a, b) {
	    ea[a] = b;
	    for (a = 0; a < b.length; a++) da.add(b[a]);
	  }
	  var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
	    ja = Object.prototype.hasOwnProperty,
	    ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	    la = {},
	    ma = {};
	  function oa(a) {
	    if (ja.call(ma, a)) return true;
	    if (ja.call(la, a)) return false;
	    if (ka.test(a)) return ma[a] = true;
	    la[a] = true;
	    return false;
	  }
	  function pa(a, b, c, d) {
	    if (null !== c && 0 === c.type) return false;
	    switch (typeof b) {
	      case "function":
	      case "symbol":
	        return true;
	      case "boolean":
	        if (d) return false;
	        if (null !== c) return !c.acceptsBooleans;
	        a = a.toLowerCase().slice(0, 5);
	        return "data-" !== a && "aria-" !== a;
	      default:
	        return false;
	    }
	  }
	  function qa(a, b, c, d) {
	    if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return true;
	    if (d) return false;
	    if (null !== c) switch (c.type) {
	      case 3:
	        return !b;
	      case 4:
	        return false === b;
	      case 5:
	        return isNaN(b);
	      case 6:
	        return isNaN(b) || 1 > b;
	    }
	    return false;
	  }
	  function v(a, b, c, d, e, f, g) {
	    this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
	    this.attributeName = d;
	    this.attributeNamespace = e;
	    this.mustUseProperty = c;
	    this.propertyName = a;
	    this.type = b;
	    this.sanitizeURL = f;
	    this.removeEmptyString = g;
	  }
	  var z = {};
	  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (a) {
	    z[a] = new v(a, 0, false, a, null, false, false);
	  });
	  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (a) {
	    var b = a[0];
	    z[b] = new v(b, 1, false, a[1], null, false, false);
	  });
	  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
	    z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
	  });
	  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (a) {
	    z[a] = new v(a, 2, false, a, null, false, false);
	  });
	  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (a) {
	    z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
	  });
	  ["checked", "multiple", "muted", "selected"].forEach(function (a) {
	    z[a] = new v(a, 3, true, a, null, false, false);
	  });
	  ["capture", "download"].forEach(function (a) {
	    z[a] = new v(a, 4, false, a, null, false, false);
	  });
	  ["cols", "rows", "size", "span"].forEach(function (a) {
	    z[a] = new v(a, 6, false, a, null, false, false);
	  });
	  ["rowSpan", "start"].forEach(function (a) {
	    z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
	  });
	  var ra = /[\-:]([a-z])/g;
	  function sa(a) {
	    return a[1].toUpperCase();
	  }
	  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (a) {
	    var b = a.replace(ra, sa);
	    z[b] = new v(b, 1, false, a, null, false, false);
	  });
	  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (a) {
	    var b = a.replace(ra, sa);
	    z[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
	  });
	  ["xml:base", "xml:lang", "xml:space"].forEach(function (a) {
	    var b = a.replace(ra, sa);
	    z[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
	  });
	  ["tabIndex", "crossOrigin"].forEach(function (a) {
	    z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
	  });
	  z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
	  ["src", "href", "action", "formAction"].forEach(function (a) {
	    z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
	  });
	  function ta(a, b, c, d) {
	    var e = z.hasOwnProperty(b) ? z[b] : null;
	    if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
	  }
	  var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	    va = Symbol.for("react.element"),
	    wa = Symbol.for("react.portal"),
	    ya = Symbol.for("react.fragment"),
	    za = Symbol.for("react.strict_mode"),
	    Aa = Symbol.for("react.profiler"),
	    Ba = Symbol.for("react.provider"),
	    Ca = Symbol.for("react.context"),
	    Da = Symbol.for("react.forward_ref"),
	    Ea = Symbol.for("react.suspense"),
	    Fa = Symbol.for("react.suspense_list"),
	    Ga = Symbol.for("react.memo"),
	    Ha = Symbol.for("react.lazy");
	  var Ia = Symbol.for("react.offscreen");
	  var Ja = Symbol.iterator;
	  function Ka(a) {
	    if (null === a || "object" !== typeof a) return null;
	    a = Ja && a[Ja] || a["@@iterator"];
	    return "function" === typeof a ? a : null;
	  }
	  var A = Object.assign,
	    La;
	  function Ma(a) {
	    if (void 0 === La) try {
	      throw Error();
	    } catch (c) {
	      var b = c.stack.trim().match(/\n( *(at )?)/);
	      La = b && b[1] || "";
	    }
	    return "\n" + La + a;
	  }
	  var Na = false;
	  function Oa(a, b) {
	    if (!a || Na) return "";
	    Na = true;
	    var c = Error.prepareStackTrace;
	    Error.prepareStackTrace = void 0;
	    try {
	      if (b) {
	        if (b = function () {
	          throw Error();
	        }, Object.defineProperty(b.prototype, "props", {
	          set: function () {
	            throw Error();
	          }
	        }), "object" === typeof Reflect && Reflect.construct) {
	          try {
	            Reflect.construct(b, []);
	          } catch (l) {
	            var d = l;
	          }
	          Reflect.construct(a, [], b);
	        } else {
	          try {
	            b.call();
	          } catch (l) {
	            d = l;
	          }
	          a.call(b.prototype);
	        }
	      } else {
	        try {
	          throw Error();
	        } catch (l) {
	          d = l;
	        }
	        a();
	      }
	    } catch (l) {
	      if (l && d && "string" === typeof l.stack) {
	        for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h];) h--;
	        for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
	          if (1 !== g || 1 !== h) {
	            do if (g--, h--, 0 > h || e[g] !== f[h]) {
	              var k = "\n" + e[g].replace(" at new ", " at ");
	              a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
	              return k;
	            } while (1 <= g && 0 <= h);
	          }
	          break;
	        }
	      }
	    } finally {
	      Na = false, Error.prepareStackTrace = c;
	    }
	    return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
	  }
	  function Pa(a) {
	    switch (a.tag) {
	      case 5:
	        return Ma(a.type);
	      case 16:
	        return Ma("Lazy");
	      case 13:
	        return Ma("Suspense");
	      case 19:
	        return Ma("SuspenseList");
	      case 0:
	      case 2:
	      case 15:
	        return a = Oa(a.type, false), a;
	      case 11:
	        return a = Oa(a.type.render, false), a;
	      case 1:
	        return a = Oa(a.type, true), a;
	      default:
	        return "";
	    }
	  }
	  function Qa(a) {
	    if (null == a) return null;
	    if ("function" === typeof a) return a.displayName || a.name || null;
	    if ("string" === typeof a) return a;
	    switch (a) {
	      case ya:
	        return "Fragment";
	      case wa:
	        return "Portal";
	      case Aa:
	        return "Profiler";
	      case za:
	        return "StrictMode";
	      case Ea:
	        return "Suspense";
	      case Fa:
	        return "SuspenseList";
	    }
	    if ("object" === typeof a) switch (a.$$typeof) {
	      case Ca:
	        return (a.displayName || "Context") + ".Consumer";
	      case Ba:
	        return (a._context.displayName || "Context") + ".Provider";
	      case Da:
	        var b = a.render;
	        a = a.displayName;
	        a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
	        return a;
	      case Ga:
	        return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
	      case Ha:
	        b = a._payload;
	        a = a._init;
	        try {
	          return Qa(a(b));
	        } catch (c) {}
	    }
	    return null;
	  }
	  function Ra(a) {
	    var b = a.type;
	    switch (a.tag) {
	      case 24:
	        return "Cache";
	      case 9:
	        return (b.displayName || "Context") + ".Consumer";
	      case 10:
	        return (b._context.displayName || "Context") + ".Provider";
	      case 18:
	        return "DehydratedFragment";
	      case 11:
	        return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
	      case 7:
	        return "Fragment";
	      case 5:
	        return b;
	      case 4:
	        return "Portal";
	      case 3:
	        return "Root";
	      case 6:
	        return "Text";
	      case 16:
	        return Qa(b);
	      case 8:
	        return b === za ? "StrictMode" : "Mode";
	      case 22:
	        return "Offscreen";
	      case 12:
	        return "Profiler";
	      case 21:
	        return "Scope";
	      case 13:
	        return "Suspense";
	      case 19:
	        return "SuspenseList";
	      case 25:
	        return "TracingMarker";
	      case 1:
	      case 0:
	      case 17:
	      case 2:
	      case 14:
	      case 15:
	        if ("function" === typeof b) return b.displayName || b.name || null;
	        if ("string" === typeof b) return b;
	    }
	    return null;
	  }
	  function Sa(a) {
	    switch (typeof a) {
	      case "boolean":
	      case "number":
	      case "string":
	      case "undefined":
	        return a;
	      case "object":
	        return a;
	      default:
	        return "";
	    }
	  }
	  function Ta(a) {
	    var b = a.type;
	    return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
	  }
	  function Ua(a) {
	    var b = Ta(a) ? "checked" : "value",
	      c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b),
	      d = "" + a[b];
	    if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
	      var e = c.get,
	        f = c.set;
	      Object.defineProperty(a, b, {
	        configurable: true,
	        get: function () {
	          return e.call(this);
	        },
	        set: function (a) {
	          d = "" + a;
	          f.call(this, a);
	        }
	      });
	      Object.defineProperty(a, b, {
	        enumerable: c.enumerable
	      });
	      return {
	        getValue: function () {
	          return d;
	        },
	        setValue: function (a) {
	          d = "" + a;
	        },
	        stopTracking: function () {
	          a._valueTracker = null;
	          delete a[b];
	        }
	      };
	    }
	  }
	  function Va(a) {
	    a._valueTracker || (a._valueTracker = Ua(a));
	  }
	  function Wa(a) {
	    if (!a) return false;
	    var b = a._valueTracker;
	    if (!b) return true;
	    var c = b.getValue();
	    var d = "";
	    a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
	    a = d;
	    return a !== c ? (b.setValue(a), true) : false;
	  }
	  function Xa(a) {
	    a = a || ("undefined" !== typeof document ? document : void 0);
	    if ("undefined" === typeof a) return null;
	    try {
	      return a.activeElement || a.body;
	    } catch (b) {
	      return a.body;
	    }
	  }
	  function Ya(a, b) {
	    var c = b.checked;
	    return A({}, b, {
	      defaultChecked: void 0,
	      defaultValue: void 0,
	      value: void 0,
	      checked: null != c ? c : a._wrapperState.initialChecked
	    });
	  }
	  function Za(a, b) {
	    var c = null == b.defaultValue ? "" : b.defaultValue,
	      d = null != b.checked ? b.checked : b.defaultChecked;
	    c = Sa(null != b.value ? b.value : c);
	    a._wrapperState = {
	      initialChecked: d,
	      initialValue: c,
	      controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
	    };
	  }
	  function ab(a, b) {
	    b = b.checked;
	    null != b && ta(a, "checked", b, false);
	  }
	  function bb(a, b) {
	    ab(a, b);
	    var c = Sa(b.value),
	      d = b.type;
	    if (null != c) {
	      if ("number" === d) {
	        if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
	      } else a.value !== "" + c && (a.value = "" + c);
	    } else if ("submit" === d || "reset" === d) {
	      a.removeAttribute("value");
	      return;
	    }
	    b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
	    null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
	  }
	  function db(a, b, c) {
	    if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
	      var d = b.type;
	      if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
	      b = "" + a._wrapperState.initialValue;
	      c || b === a.value || (a.value = b);
	      a.defaultValue = b;
	    }
	    c = a.name;
	    "" !== c && (a.name = "");
	    a.defaultChecked = !!a._wrapperState.initialChecked;
	    "" !== c && (a.name = c);
	  }
	  function cb(a, b, c) {
	    if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
	  }
	  var eb = Array.isArray;
	  function fb(a, b, c, d) {
	    a = a.options;
	    if (b) {
	      b = {};
	      for (var e = 0; e < c.length; e++) b["$" + c[e]] = true;
	      for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
	    } else {
	      c = "" + Sa(c);
	      b = null;
	      for (e = 0; e < a.length; e++) {
	        if (a[e].value === c) {
	          a[e].selected = true;
	          d && (a[e].defaultSelected = true);
	          return;
	        }
	        null !== b || a[e].disabled || (b = a[e]);
	      }
	      null !== b && (b.selected = true);
	    }
	  }
	  function gb(a, b) {
	    if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
	    return A({}, b, {
	      value: void 0,
	      defaultValue: void 0,
	      children: "" + a._wrapperState.initialValue
	    });
	  }
	  function hb(a, b) {
	    var c = b.value;
	    if (null == c) {
	      c = b.children;
	      b = b.defaultValue;
	      if (null != c) {
	        if (null != b) throw Error(p(92));
	        if (eb(c)) {
	          if (1 < c.length) throw Error(p(93));
	          c = c[0];
	        }
	        b = c;
	      }
	      null == b && (b = "");
	      c = b;
	    }
	    a._wrapperState = {
	      initialValue: Sa(c)
	    };
	  }
	  function ib(a, b) {
	    var c = Sa(b.value),
	      d = Sa(b.defaultValue);
	    null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
	    null != d && (a.defaultValue = "" + d);
	  }
	  function jb(a) {
	    var b = a.textContent;
	    b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
	  }
	  function kb(a) {
	    switch (a) {
	      case "svg":
	        return "http://www.w3.org/2000/svg";
	      case "math":
	        return "http://www.w3.org/1998/Math/MathML";
	      default:
	        return "http://www.w3.org/1999/xhtml";
	    }
	  }
	  function lb(a, b) {
	    return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
	  }
	  var mb,
	    nb = function (a) {
	      return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (b, c, d, e) {
	        MSApp.execUnsafeLocalFunction(function () {
	          return a(b, c, d, e);
	        });
	      } : a;
	    }(function (a, b) {
	      if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;else {
	        mb = mb || document.createElement("div");
	        mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
	        for (b = mb.firstChild; a.firstChild;) a.removeChild(a.firstChild);
	        for (; b.firstChild;) a.appendChild(b.firstChild);
	      }
	    });
	  function ob(a, b) {
	    if (b) {
	      var c = a.firstChild;
	      if (c && c === a.lastChild && 3 === c.nodeType) {
	        c.nodeValue = b;
	        return;
	      }
	    }
	    a.textContent = b;
	  }
	  var pb = {
	      animationIterationCount: true,
	      aspectRatio: true,
	      borderImageOutset: true,
	      borderImageSlice: true,
	      borderImageWidth: true,
	      boxFlex: true,
	      boxFlexGroup: true,
	      boxOrdinalGroup: true,
	      columnCount: true,
	      columns: true,
	      flex: true,
	      flexGrow: true,
	      flexPositive: true,
	      flexShrink: true,
	      flexNegative: true,
	      flexOrder: true,
	      gridArea: true,
	      gridRow: true,
	      gridRowEnd: true,
	      gridRowSpan: true,
	      gridRowStart: true,
	      gridColumn: true,
	      gridColumnEnd: true,
	      gridColumnSpan: true,
	      gridColumnStart: true,
	      fontWeight: true,
	      lineClamp: true,
	      lineHeight: true,
	      opacity: true,
	      order: true,
	      orphans: true,
	      tabSize: true,
	      widows: true,
	      zIndex: true,
	      zoom: true,
	      fillOpacity: true,
	      floodOpacity: true,
	      stopOpacity: true,
	      strokeDasharray: true,
	      strokeDashoffset: true,
	      strokeMiterlimit: true,
	      strokeOpacity: true,
	      strokeWidth: true
	    },
	    qb = ["Webkit", "ms", "Moz", "O"];
	  Object.keys(pb).forEach(function (a) {
	    qb.forEach(function (b) {
	      b = b + a.charAt(0).toUpperCase() + a.substring(1);
	      pb[b] = pb[a];
	    });
	  });
	  function rb(a, b, c) {
	    return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
	  }
	  function sb(a, b) {
	    a = a.style;
	    for (var c in b) if (b.hasOwnProperty(c)) {
	      var d = 0 === c.indexOf("--"),
	        e = rb(c, b[c], d);
	      "float" === c && (c = "cssFloat");
	      d ? a.setProperty(c, e) : a[c] = e;
	    }
	  }
	  var tb = A({
	    menuitem: true
	  }, {
	    area: true,
	    base: true,
	    br: true,
	    col: true,
	    embed: true,
	    hr: true,
	    img: true,
	    input: true,
	    keygen: true,
	    link: true,
	    meta: true,
	    param: true,
	    source: true,
	    track: true,
	    wbr: true
	  });
	  function ub(a, b) {
	    if (b) {
	      if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
	      if (null != b.dangerouslySetInnerHTML) {
	        if (null != b.children) throw Error(p(60));
	        if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
	      }
	      if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
	    }
	  }
	  function vb(a, b) {
	    if (-1 === a.indexOf("-")) return "string" === typeof b.is;
	    switch (a) {
	      case "annotation-xml":
	      case "color-profile":
	      case "font-face":
	      case "font-face-src":
	      case "font-face-uri":
	      case "font-face-format":
	      case "font-face-name":
	      case "missing-glyph":
	        return false;
	      default:
	        return true;
	    }
	  }
	  var wb = null;
	  function xb(a) {
	    a = a.target || a.srcElement || window;
	    a.correspondingUseElement && (a = a.correspondingUseElement);
	    return 3 === a.nodeType ? a.parentNode : a;
	  }
	  var yb = null,
	    zb = null,
	    Ab = null;
	  function Bb(a) {
	    if (a = Cb(a)) {
	      if ("function" !== typeof yb) throw Error(p(280));
	      var b = a.stateNode;
	      b && (b = Db(b), yb(a.stateNode, a.type, b));
	    }
	  }
	  function Eb(a) {
	    zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
	  }
	  function Fb() {
	    if (zb) {
	      var a = zb,
	        b = Ab;
	      Ab = zb = null;
	      Bb(a);
	      if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
	    }
	  }
	  function Gb(a, b) {
	    return a(b);
	  }
	  function Hb() {}
	  var Ib = false;
	  function Jb(a, b, c) {
	    if (Ib) return a(b, c);
	    Ib = true;
	    try {
	      return Gb(a, b, c);
	    } finally {
	      if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
	    }
	  }
	  function Kb(a, b) {
	    var c = a.stateNode;
	    if (null === c) return null;
	    var d = Db(c);
	    if (null === d) return null;
	    c = d[b];
	    a: switch (b) {
	      case "onClick":
	      case "onClickCapture":
	      case "onDoubleClick":
	      case "onDoubleClickCapture":
	      case "onMouseDown":
	      case "onMouseDownCapture":
	      case "onMouseMove":
	      case "onMouseMoveCapture":
	      case "onMouseUp":
	      case "onMouseUpCapture":
	      case "onMouseEnter":
	        (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
	        a = !d;
	        break a;
	      default:
	        a = false;
	    }
	    if (a) return null;
	    if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
	    return c;
	  }
	  var Lb = false;
	  if (ia) try {
	    var Mb = {};
	    Object.defineProperty(Mb, "passive", {
	      get: function () {
	        Lb = !0;
	      }
	    });
	    window.addEventListener("test", Mb, Mb);
	    window.removeEventListener("test", Mb, Mb);
	  } catch (a) {
	    Lb = false;
	  }
	  function Nb(a, b, c, d, e, f, g, h, k) {
	    var l = Array.prototype.slice.call(arguments, 3);
	    try {
	      b.apply(c, l);
	    } catch (m) {
	      this.onError(m);
	    }
	  }
	  var Ob = false,
	    Pb = null,
	    Qb = false,
	    Rb = null,
	    Sb = {
	      onError: function (a) {
	        Ob = true;
	        Pb = a;
	      }
	    };
	  function Tb(a, b, c, d, e, f, g, h, k) {
	    Ob = false;
	    Pb = null;
	    Nb.apply(Sb, arguments);
	  }
	  function Ub(a, b, c, d, e, f, g, h, k) {
	    Tb.apply(this, arguments);
	    if (Ob) {
	      if (Ob) {
	        var l = Pb;
	        Ob = false;
	        Pb = null;
	      } else throw Error(p(198));
	      Qb || (Qb = true, Rb = l);
	    }
	  }
	  function Vb(a) {
	    var b = a,
	      c = a;
	    if (a.alternate) for (; b.return;) b = b.return;else {
	      a = b;
	      do b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return; while (a);
	    }
	    return 3 === b.tag ? c : null;
	  }
	  function Wb(a) {
	    if (13 === a.tag) {
	      var b = a.memoizedState;
	      null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
	      if (null !== b) return b.dehydrated;
	    }
	    return null;
	  }
	  function Xb(a) {
	    if (Vb(a) !== a) throw Error(p(188));
	  }
	  function Yb(a) {
	    var b = a.alternate;
	    if (!b) {
	      b = Vb(a);
	      if (null === b) throw Error(p(188));
	      return b !== a ? null : a;
	    }
	    for (var c = a, d = b;;) {
	      var e = c.return;
	      if (null === e) break;
	      var f = e.alternate;
	      if (null === f) {
	        d = e.return;
	        if (null !== d) {
	          c = d;
	          continue;
	        }
	        break;
	      }
	      if (e.child === f.child) {
	        for (f = e.child; f;) {
	          if (f === c) return Xb(e), a;
	          if (f === d) return Xb(e), b;
	          f = f.sibling;
	        }
	        throw Error(p(188));
	      }
	      if (c.return !== d.return) c = e, d = f;else {
	        for (var g = false, h = e.child; h;) {
	          if (h === c) {
	            g = true;
	            c = e;
	            d = f;
	            break;
	          }
	          if (h === d) {
	            g = true;
	            d = e;
	            c = f;
	            break;
	          }
	          h = h.sibling;
	        }
	        if (!g) {
	          for (h = f.child; h;) {
	            if (h === c) {
	              g = true;
	              c = f;
	              d = e;
	              break;
	            }
	            if (h === d) {
	              g = true;
	              d = f;
	              c = e;
	              break;
	            }
	            h = h.sibling;
	          }
	          if (!g) throw Error(p(189));
	        }
	      }
	      if (c.alternate !== d) throw Error(p(190));
	    }
	    if (3 !== c.tag) throw Error(p(188));
	    return c.stateNode.current === c ? a : b;
	  }
	  function Zb(a) {
	    a = Yb(a);
	    return null !== a ? $b(a) : null;
	  }
	  function $b(a) {
	    if (5 === a.tag || 6 === a.tag) return a;
	    for (a = a.child; null !== a;) {
	      var b = $b(a);
	      if (null !== b) return b;
	      a = a.sibling;
	    }
	    return null;
	  }
	  var ac = ca.unstable_scheduleCallback,
	    bc = ca.unstable_cancelCallback,
	    cc = ca.unstable_shouldYield,
	    dc = ca.unstable_requestPaint,
	    B = ca.unstable_now,
	    ec = ca.unstable_getCurrentPriorityLevel,
	    fc = ca.unstable_ImmediatePriority,
	    gc = ca.unstable_UserBlockingPriority,
	    hc = ca.unstable_NormalPriority,
	    ic = ca.unstable_LowPriority,
	    jc = ca.unstable_IdlePriority,
	    kc = null,
	    lc = null;
	  function mc(a) {
	    if (lc && "function" === typeof lc.onCommitFiberRoot) try {
	      lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
	    } catch (b) {}
	  }
	  var oc = Math.clz32 ? Math.clz32 : nc,
	    pc = Math.log,
	    qc = Math.LN2;
	  function nc(a) {
	    a >>>= 0;
	    return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
	  }
	  var rc = 64,
	    sc = 4194304;
	  function tc(a) {
	    switch (a & -a) {
	      case 1:
	        return 1;
	      case 2:
	        return 2;
	      case 4:
	        return 4;
	      case 8:
	        return 8;
	      case 16:
	        return 16;
	      case 32:
	        return 32;
	      case 64:
	      case 128:
	      case 256:
	      case 512:
	      case 1024:
	      case 2048:
	      case 4096:
	      case 8192:
	      case 16384:
	      case 32768:
	      case 65536:
	      case 131072:
	      case 262144:
	      case 524288:
	      case 1048576:
	      case 2097152:
	        return a & 4194240;
	      case 4194304:
	      case 8388608:
	      case 16777216:
	      case 33554432:
	      case 67108864:
	        return a & 130023424;
	      case 134217728:
	        return 134217728;
	      case 268435456:
	        return 268435456;
	      case 536870912:
	        return 536870912;
	      case 1073741824:
	        return 1073741824;
	      default:
	        return a;
	    }
	  }
	  function uc(a, b) {
	    var c = a.pendingLanes;
	    if (0 === c) return 0;
	    var d = 0,
	      e = a.suspendedLanes,
	      f = a.pingedLanes,
	      g = c & 268435455;
	    if (0 !== g) {
	      var h = g & ~e;
	      0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
	    } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
	    if (0 === d) return 0;
	    if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
	    0 !== (d & 4) && (d |= c & 16);
	    b = a.entangledLanes;
	    if (0 !== b) for (a = a.entanglements, b &= d; 0 < b;) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
	    return d;
	  }
	  function vc(a, b) {
	    switch (a) {
	      case 1:
	      case 2:
	      case 4:
	        return b + 250;
	      case 8:
	      case 16:
	      case 32:
	      case 64:
	      case 128:
	      case 256:
	      case 512:
	      case 1024:
	      case 2048:
	      case 4096:
	      case 8192:
	      case 16384:
	      case 32768:
	      case 65536:
	      case 131072:
	      case 262144:
	      case 524288:
	      case 1048576:
	      case 2097152:
	        return b + 5E3;
	      case 4194304:
	      case 8388608:
	      case 16777216:
	      case 33554432:
	      case 67108864:
	        return -1;
	      case 134217728:
	      case 268435456:
	      case 536870912:
	      case 1073741824:
	        return -1;
	      default:
	        return -1;
	    }
	  }
	  function wc(a, b) {
	    for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f;) {
	      var g = 31 - oc(f),
	        h = 1 << g,
	        k = e[g];
	      if (-1 === k) {
	        if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
	      } else k <= b && (a.expiredLanes |= h);
	      f &= ~h;
	    }
	  }
	  function xc(a) {
	    a = a.pendingLanes & -1073741825;
	    return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
	  }
	  function yc() {
	    var a = rc;
	    rc <<= 1;
	    0 === (rc & 4194240) && (rc = 64);
	    return a;
	  }
	  function zc(a) {
	    for (var b = [], c = 0; 31 > c; c++) b.push(a);
	    return b;
	  }
	  function Ac(a, b, c) {
	    a.pendingLanes |= b;
	    536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
	    a = a.eventTimes;
	    b = 31 - oc(b);
	    a[b] = c;
	  }
	  function Bc(a, b) {
	    var c = a.pendingLanes & ~b;
	    a.pendingLanes = b;
	    a.suspendedLanes = 0;
	    a.pingedLanes = 0;
	    a.expiredLanes &= b;
	    a.mutableReadLanes &= b;
	    a.entangledLanes &= b;
	    b = a.entanglements;
	    var d = a.eventTimes;
	    for (a = a.expirationTimes; 0 < c;) {
	      var e = 31 - oc(c),
	        f = 1 << e;
	      b[e] = 0;
	      d[e] = -1;
	      a[e] = -1;
	      c &= ~f;
	    }
	  }
	  function Cc(a, b) {
	    var c = a.entangledLanes |= b;
	    for (a = a.entanglements; c;) {
	      var d = 31 - oc(c),
	        e = 1 << d;
	      e & b | a[d] & b && (a[d] |= b);
	      c &= ~e;
	    }
	  }
	  var C = 0;
	  function Dc(a) {
	    a &= -a;
	    return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
	  }
	  var Ec,
	    Fc,
	    Gc,
	    Hc,
	    Ic,
	    Jc = false,
	    Kc = [],
	    Lc = null,
	    Mc = null,
	    Nc = null,
	    Oc = new Map(),
	    Pc = new Map(),
	    Qc = [],
	    Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
	  function Sc(a, b) {
	    switch (a) {
	      case "focusin":
	      case "focusout":
	        Lc = null;
	        break;
	      case "dragenter":
	      case "dragleave":
	        Mc = null;
	        break;
	      case "mouseover":
	      case "mouseout":
	        Nc = null;
	        break;
	      case "pointerover":
	      case "pointerout":
	        Oc.delete(b.pointerId);
	        break;
	      case "gotpointercapture":
	      case "lostpointercapture":
	        Pc.delete(b.pointerId);
	    }
	  }
	  function Tc(a, b, c, d, e, f) {
	    if (null === a || a.nativeEvent !== f) return a = {
	      blockedOn: b,
	      domEventName: c,
	      eventSystemFlags: d,
	      nativeEvent: f,
	      targetContainers: [e]
	    }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
	    a.eventSystemFlags |= d;
	    b = a.targetContainers;
	    null !== e && -1 === b.indexOf(e) && b.push(e);
	    return a;
	  }
	  function Uc(a, b, c, d, e) {
	    switch (b) {
	      case "focusin":
	        return Lc = Tc(Lc, a, b, c, d, e), true;
	      case "dragenter":
	        return Mc = Tc(Mc, a, b, c, d, e), true;
	      case "mouseover":
	        return Nc = Tc(Nc, a, b, c, d, e), true;
	      case "pointerover":
	        var f = e.pointerId;
	        Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
	        return true;
	      case "gotpointercapture":
	        return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), true;
	    }
	    return false;
	  }
	  function Vc(a) {
	    var b = Wc(a.target);
	    if (null !== b) {
	      var c = Vb(b);
	      if (null !== c) if (b = c.tag, 13 === b) {
	        if (b = Wb(c), null !== b) {
	          a.blockedOn = b;
	          Ic(a.priority, function () {
	            Gc(c);
	          });
	          return;
	        }
	      } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
	        a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
	        return;
	      }
	    }
	    a.blockedOn = null;
	  }
	  function Xc(a) {
	    if (null !== a.blockedOn) return false;
	    for (var b = a.targetContainers; 0 < b.length;) {
	      var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
	      if (null === c) {
	        c = a.nativeEvent;
	        var d = new c.constructor(c.type, c);
	        wb = d;
	        c.target.dispatchEvent(d);
	        wb = null;
	      } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
	      b.shift();
	    }
	    return true;
	  }
	  function Zc(a, b, c) {
	    Xc(a) && c.delete(b);
	  }
	  function $c() {
	    Jc = false;
	    null !== Lc && Xc(Lc) && (Lc = null);
	    null !== Mc && Xc(Mc) && (Mc = null);
	    null !== Nc && Xc(Nc) && (Nc = null);
	    Oc.forEach(Zc);
	    Pc.forEach(Zc);
	  }
	  function ad(a, b) {
	    a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
	  }
	  function bd(a) {
	    function b(b) {
	      return ad(b, a);
	    }
	    if (0 < Kc.length) {
	      ad(Kc[0], a);
	      for (var c = 1; c < Kc.length; c++) {
	        var d = Kc[c];
	        d.blockedOn === a && (d.blockedOn = null);
	      }
	    }
	    null !== Lc && ad(Lc, a);
	    null !== Mc && ad(Mc, a);
	    null !== Nc && ad(Nc, a);
	    Oc.forEach(b);
	    Pc.forEach(b);
	    for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
	    for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn);) Vc(c), null === c.blockedOn && Qc.shift();
	  }
	  var cd = ua.ReactCurrentBatchConfig,
	    dd = true;
	  function ed(a, b, c, d) {
	    var e = C,
	      f = cd.transition;
	    cd.transition = null;
	    try {
	      C = 1, fd(a, b, c, d);
	    } finally {
	      C = e, cd.transition = f;
	    }
	  }
	  function gd(a, b, c, d) {
	    var e = C,
	      f = cd.transition;
	    cd.transition = null;
	    try {
	      C = 4, fd(a, b, c, d);
	    } finally {
	      C = e, cd.transition = f;
	    }
	  }
	  function fd(a, b, c, d) {
	    if (dd) {
	      var e = Yc(a, b, c, d);
	      if (null === e) hd(a, b, d, id, c), Sc(a, d);else if (Uc(e, a, b, c, d)) d.stopPropagation();else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
	        for (; null !== e;) {
	          var f = Cb(e);
	          null !== f && Ec(f);
	          f = Yc(a, b, c, d);
	          null === f && hd(a, b, d, id, c);
	          if (f === e) break;
	          e = f;
	        }
	        null !== e && d.stopPropagation();
	      } else hd(a, b, d, null, c);
	    }
	  }
	  var id = null;
	  function Yc(a, b, c, d) {
	    id = null;
	    a = xb(d);
	    a = Wc(a);
	    if (null !== a) if (b = Vb(a), null === b) a = null;else if (c = b.tag, 13 === c) {
	      a = Wb(b);
	      if (null !== a) return a;
	      a = null;
	    } else if (3 === c) {
	      if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
	      a = null;
	    } else b !== a && (a = null);
	    id = a;
	    return null;
	  }
	  function jd(a) {
	    switch (a) {
	      case "cancel":
	      case "click":
	      case "close":
	      case "contextmenu":
	      case "copy":
	      case "cut":
	      case "auxclick":
	      case "dblclick":
	      case "dragend":
	      case "dragstart":
	      case "drop":
	      case "focusin":
	      case "focusout":
	      case "input":
	      case "invalid":
	      case "keydown":
	      case "keypress":
	      case "keyup":
	      case "mousedown":
	      case "mouseup":
	      case "paste":
	      case "pause":
	      case "play":
	      case "pointercancel":
	      case "pointerdown":
	      case "pointerup":
	      case "ratechange":
	      case "reset":
	      case "resize":
	      case "seeked":
	      case "submit":
	      case "touchcancel":
	      case "touchend":
	      case "touchstart":
	      case "volumechange":
	      case "change":
	      case "selectionchange":
	      case "textInput":
	      case "compositionstart":
	      case "compositionend":
	      case "compositionupdate":
	      case "beforeblur":
	      case "afterblur":
	      case "beforeinput":
	      case "blur":
	      case "fullscreenchange":
	      case "focus":
	      case "hashchange":
	      case "popstate":
	      case "select":
	      case "selectstart":
	        return 1;
	      case "drag":
	      case "dragenter":
	      case "dragexit":
	      case "dragleave":
	      case "dragover":
	      case "mousemove":
	      case "mouseout":
	      case "mouseover":
	      case "pointermove":
	      case "pointerout":
	      case "pointerover":
	      case "scroll":
	      case "toggle":
	      case "touchmove":
	      case "wheel":
	      case "mouseenter":
	      case "mouseleave":
	      case "pointerenter":
	      case "pointerleave":
	        return 4;
	      case "message":
	        switch (ec()) {
	          case fc:
	            return 1;
	          case gc:
	            return 4;
	          case hc:
	          case ic:
	            return 16;
	          case jc:
	            return 536870912;
	          default:
	            return 16;
	        }
	      default:
	        return 16;
	    }
	  }
	  var kd = null,
	    ld = null,
	    md = null;
	  function nd() {
	    if (md) return md;
	    var a,
	      b = ld,
	      c = b.length,
	      d,
	      e = "value" in kd ? kd.value : kd.textContent,
	      f = e.length;
	    for (a = 0; a < c && b[a] === e[a]; a++);
	    var g = c - a;
	    for (d = 1; d <= g && b[c - d] === e[f - d]; d++);
	    return md = e.slice(a, 1 < d ? 1 - d : void 0);
	  }
	  function od(a) {
	    var b = a.keyCode;
	    "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
	    10 === a && (a = 13);
	    return 32 <= a || 13 === a ? a : 0;
	  }
	  function pd() {
	    return true;
	  }
	  function qd() {
	    return false;
	  }
	  function rd(a) {
	    function b(b, d, e, f, g) {
	      this._reactName = b;
	      this._targetInst = e;
	      this.type = d;
	      this.nativeEvent = f;
	      this.target = g;
	      this.currentTarget = null;
	      for (var c in a) a.hasOwnProperty(c) && (b = a[c], this[c] = b ? b(f) : f[c]);
	      this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : false === f.returnValue) ? pd : qd;
	      this.isPropagationStopped = qd;
	      return this;
	    }
	    A(b.prototype, {
	      preventDefault: function () {
	        this.defaultPrevented = true;
	        var a = this.nativeEvent;
	        a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = false), this.isDefaultPrevented = pd);
	      },
	      stopPropagation: function () {
	        var a = this.nativeEvent;
	        a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = true), this.isPropagationStopped = pd);
	      },
	      persist: function () {},
	      isPersistent: pd
	    });
	    return b;
	  }
	  var sd = {
	      eventPhase: 0,
	      bubbles: 0,
	      cancelable: 0,
	      timeStamp: function (a) {
	        return a.timeStamp || Date.now();
	      },
	      defaultPrevented: 0,
	      isTrusted: 0
	    },
	    td = rd(sd),
	    ud = A({}, sd, {
	      view: 0,
	      detail: 0
	    }),
	    vd = rd(ud),
	    wd,
	    xd,
	    yd,
	    Ad = A({}, ud, {
	      screenX: 0,
	      screenY: 0,
	      clientX: 0,
	      clientY: 0,
	      pageX: 0,
	      pageY: 0,
	      ctrlKey: 0,
	      shiftKey: 0,
	      altKey: 0,
	      metaKey: 0,
	      getModifierState: zd,
	      button: 0,
	      buttons: 0,
	      relatedTarget: function (a) {
	        return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
	      },
	      movementX: function (a) {
	        if ("movementX" in a) return a.movementX;
	        a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
	        return wd;
	      },
	      movementY: function (a) {
	        return "movementY" in a ? a.movementY : xd;
	      }
	    }),
	    Bd = rd(Ad),
	    Cd = A({}, Ad, {
	      dataTransfer: 0
	    }),
	    Dd = rd(Cd),
	    Ed = A({}, ud, {
	      relatedTarget: 0
	    }),
	    Fd = rd(Ed),
	    Gd = A({}, sd, {
	      animationName: 0,
	      elapsedTime: 0,
	      pseudoElement: 0
	    }),
	    Hd = rd(Gd),
	    Id = A({}, sd, {
	      clipboardData: function (a) {
	        return "clipboardData" in a ? a.clipboardData : window.clipboardData;
	      }
	    }),
	    Jd = rd(Id),
	    Kd = A({}, sd, {
	      data: 0
	    }),
	    Ld = rd(Kd),
	    Md = {
	      Esc: "Escape",
	      Spacebar: " ",
	      Left: "ArrowLeft",
	      Up: "ArrowUp",
	      Right: "ArrowRight",
	      Down: "ArrowDown",
	      Del: "Delete",
	      Win: "OS",
	      Menu: "ContextMenu",
	      Apps: "ContextMenu",
	      Scroll: "ScrollLock",
	      MozPrintableKey: "Unidentified"
	    },
	    Nd = {
	      8: "Backspace",
	      9: "Tab",
	      12: "Clear",
	      13: "Enter",
	      16: "Shift",
	      17: "Control",
	      18: "Alt",
	      19: "Pause",
	      20: "CapsLock",
	      27: "Escape",
	      32: " ",
	      33: "PageUp",
	      34: "PageDown",
	      35: "End",
	      36: "Home",
	      37: "ArrowLeft",
	      38: "ArrowUp",
	      39: "ArrowRight",
	      40: "ArrowDown",
	      45: "Insert",
	      46: "Delete",
	      112: "F1",
	      113: "F2",
	      114: "F3",
	      115: "F4",
	      116: "F5",
	      117: "F6",
	      118: "F7",
	      119: "F8",
	      120: "F9",
	      121: "F10",
	      122: "F11",
	      123: "F12",
	      144: "NumLock",
	      145: "ScrollLock",
	      224: "Meta"
	    },
	    Od = {
	      Alt: "altKey",
	      Control: "ctrlKey",
	      Meta: "metaKey",
	      Shift: "shiftKey"
	    };
	  function Pd(a) {
	    var b = this.nativeEvent;
	    return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
	  }
	  function zd() {
	    return Pd;
	  }
	  var Qd = A({}, ud, {
	      key: function (a) {
	        if (a.key) {
	          var b = Md[a.key] || a.key;
	          if ("Unidentified" !== b) return b;
	        }
	        return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
	      },
	      code: 0,
	      location: 0,
	      ctrlKey: 0,
	      shiftKey: 0,
	      altKey: 0,
	      metaKey: 0,
	      repeat: 0,
	      locale: 0,
	      getModifierState: zd,
	      charCode: function (a) {
	        return "keypress" === a.type ? od(a) : 0;
	      },
	      keyCode: function (a) {
	        return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
	      },
	      which: function (a) {
	        return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
	      }
	    }),
	    Rd = rd(Qd),
	    Sd = A({}, Ad, {
	      pointerId: 0,
	      width: 0,
	      height: 0,
	      pressure: 0,
	      tangentialPressure: 0,
	      tiltX: 0,
	      tiltY: 0,
	      twist: 0,
	      pointerType: 0,
	      isPrimary: 0
	    }),
	    Td = rd(Sd),
	    Ud = A({}, ud, {
	      touches: 0,
	      targetTouches: 0,
	      changedTouches: 0,
	      altKey: 0,
	      metaKey: 0,
	      ctrlKey: 0,
	      shiftKey: 0,
	      getModifierState: zd
	    }),
	    Vd = rd(Ud),
	    Wd = A({}, sd, {
	      propertyName: 0,
	      elapsedTime: 0,
	      pseudoElement: 0
	    }),
	    Xd = rd(Wd),
	    Yd = A({}, Ad, {
	      deltaX: function (a) {
	        return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
	      },
	      deltaY: function (a) {
	        return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
	      },
	      deltaZ: 0,
	      deltaMode: 0
	    }),
	    Zd = rd(Yd),
	    $d = [9, 13, 27, 32],
	    ae = ia && "CompositionEvent" in window,
	    be = null;
	  ia && "documentMode" in document && (be = document.documentMode);
	  var ce = ia && "TextEvent" in window && !be,
	    de = ia && (!ae || be && 8 < be && 11 >= be),
	    ee = String.fromCharCode(32),
	    fe = false;
	  function ge(a, b) {
	    switch (a) {
	      case "keyup":
	        return -1 !== $d.indexOf(b.keyCode);
	      case "keydown":
	        return 229 !== b.keyCode;
	      case "keypress":
	      case "mousedown":
	      case "focusout":
	        return true;
	      default:
	        return false;
	    }
	  }
	  function he(a) {
	    a = a.detail;
	    return "object" === typeof a && "data" in a ? a.data : null;
	  }
	  var ie = false;
	  function je(a, b) {
	    switch (a) {
	      case "compositionend":
	        return he(b);
	      case "keypress":
	        if (32 !== b.which) return null;
	        fe = true;
	        return ee;
	      case "textInput":
	        return a = b.data, a === ee && fe ? null : a;
	      default:
	        return null;
	    }
	  }
	  function ke(a, b) {
	    if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
	    switch (a) {
	      case "paste":
	        return null;
	      case "keypress":
	        if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
	          if (b.char && 1 < b.char.length) return b.char;
	          if (b.which) return String.fromCharCode(b.which);
	        }
	        return null;
	      case "compositionend":
	        return de && "ko" !== b.locale ? null : b.data;
	      default:
	        return null;
	    }
	  }
	  var le = {
	    color: true,
	    date: true,
	    datetime: true,
	    "datetime-local": true,
	    email: true,
	    month: true,
	    number: true,
	    password: true,
	    range: true,
	    search: true,
	    tel: true,
	    text: true,
	    time: true,
	    url: true,
	    week: true
	  };
	  function me(a) {
	    var b = a && a.nodeName && a.nodeName.toLowerCase();
	    return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
	  }
	  function ne(a, b, c, d) {
	    Eb(d);
	    b = oe(b, "onChange");
	    0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({
	      event: c,
	      listeners: b
	    }));
	  }
	  var pe = null,
	    qe = null;
	  function re(a) {
	    se(a, 0);
	  }
	  function te(a) {
	    var b = ue(a);
	    if (Wa(b)) return a;
	  }
	  function ve(a, b) {
	    if ("change" === a) return b;
	  }
	  var we = false;
	  if (ia) {
	    var xe;
	    if (ia) {
	      var ye = "oninput" in document;
	      if (!ye) {
	        var ze = document.createElement("div");
	        ze.setAttribute("oninput", "return;");
	        ye = "function" === typeof ze.oninput;
	      }
	      xe = ye;
	    } else xe = false;
	    we = xe && (!document.documentMode || 9 < document.documentMode);
	  }
	  function Ae() {
	    pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
	  }
	  function Be(a) {
	    if ("value" === a.propertyName && te(qe)) {
	      var b = [];
	      ne(b, qe, a, xb(a));
	      Jb(re, b);
	    }
	  }
	  function Ce(a, b, c) {
	    "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
	  }
	  function De(a) {
	    if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
	  }
	  function Ee(a, b) {
	    if ("click" === a) return te(b);
	  }
	  function Fe(a, b) {
	    if ("input" === a || "change" === a) return te(b);
	  }
	  function Ge(a, b) {
	    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
	  }
	  var He = "function" === typeof Object.is ? Object.is : Ge;
	  function Ie(a, b) {
	    if (He(a, b)) return true;
	    if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return false;
	    var c = Object.keys(a),
	      d = Object.keys(b);
	    if (c.length !== d.length) return false;
	    for (d = 0; d < c.length; d++) {
	      var e = c[d];
	      if (!ja.call(b, e) || !He(a[e], b[e])) return false;
	    }
	    return true;
	  }
	  function Je(a) {
	    for (; a && a.firstChild;) a = a.firstChild;
	    return a;
	  }
	  function Ke(a, b) {
	    var c = Je(a);
	    a = 0;
	    for (var d; c;) {
	      if (3 === c.nodeType) {
	        d = a + c.textContent.length;
	        if (a <= b && d >= b) return {
	          node: c,
	          offset: b - a
	        };
	        a = d;
	      }
	      a: {
	        for (; c;) {
	          if (c.nextSibling) {
	            c = c.nextSibling;
	            break a;
	          }
	          c = c.parentNode;
	        }
	        c = void 0;
	      }
	      c = Je(c);
	    }
	  }
	  function Le(a, b) {
	    return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
	  }
	  function Me() {
	    for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement;) {
	      try {
	        var c = "string" === typeof b.contentWindow.location.href;
	      } catch (d) {
	        c = false;
	      }
	      if (c) a = b.contentWindow;else break;
	      b = Xa(a.document);
	    }
	    return b;
	  }
	  function Ne(a) {
	    var b = a && a.nodeName && a.nodeName.toLowerCase();
	    return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
	  }
	  function Oe(a) {
	    var b = Me(),
	      c = a.focusedElem,
	      d = a.selectionRange;
	    if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
	      if (null !== d && Ne(c)) if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
	        a = a.getSelection();
	        var e = c.textContent.length,
	          f = Math.min(d.start, e);
	        d = void 0 === d.end ? f : Math.min(d.end, e);
	        !a.extend && f > d && (e = d, d = f, f = e);
	        e = Ke(c, f);
	        var g = Ke(c, d);
	        e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
	      }
	      b = [];
	      for (a = c; a = a.parentNode;) 1 === a.nodeType && b.push({
	        element: a,
	        left: a.scrollLeft,
	        top: a.scrollTop
	      });
	      "function" === typeof c.focus && c.focus();
	      for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
	    }
	  }
	  var Pe = ia && "documentMode" in document && 11 >= document.documentMode,
	    Qe = null,
	    Re = null,
	    Se = null,
	    Te = false;
	  function Ue(a, b, c) {
	    var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
	    Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = {
	      start: d.selectionStart,
	      end: d.selectionEnd
	    } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {
	      anchorNode: d.anchorNode,
	      anchorOffset: d.anchorOffset,
	      focusNode: d.focusNode,
	      focusOffset: d.focusOffset
	    }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({
	      event: b,
	      listeners: d
	    }), b.target = Qe)));
	  }
	  function Ve(a, b) {
	    var c = {};
	    c[a.toLowerCase()] = b.toLowerCase();
	    c["Webkit" + a] = "webkit" + b;
	    c["Moz" + a] = "moz" + b;
	    return c;
	  }
	  var We = {
	      animationend: Ve("Animation", "AnimationEnd"),
	      animationiteration: Ve("Animation", "AnimationIteration"),
	      animationstart: Ve("Animation", "AnimationStart"),
	      transitionend: Ve("Transition", "TransitionEnd")
	    },
	    Xe = {},
	    Ye = {};
	  ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
	  function Ze(a) {
	    if (Xe[a]) return Xe[a];
	    if (!We[a]) return a;
	    var b = We[a],
	      c;
	    for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
	    return a;
	  }
	  var $e = Ze("animationend"),
	    af = Ze("animationiteration"),
	    bf = Ze("animationstart"),
	    cf = Ze("transitionend"),
	    df = new Map(),
	    ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	  function ff(a, b) {
	    df.set(a, b);
	    fa(b, [a]);
	  }
	  for (var gf = 0; gf < ef.length; gf++) {
	    var hf = ef[gf],
	      jf = hf.toLowerCase(),
	      kf = hf[0].toUpperCase() + hf.slice(1);
	    ff(jf, "on" + kf);
	  }
	  ff($e, "onAnimationEnd");
	  ff(af, "onAnimationIteration");
	  ff(bf, "onAnimationStart");
	  ff("dblclick", "onDoubleClick");
	  ff("focusin", "onFocus");
	  ff("focusout", "onBlur");
	  ff(cf, "onTransitionEnd");
	  ha("onMouseEnter", ["mouseout", "mouseover"]);
	  ha("onMouseLeave", ["mouseout", "mouseover"]);
	  ha("onPointerEnter", ["pointerout", "pointerover"]);
	  ha("onPointerLeave", ["pointerout", "pointerover"]);
	  fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
	  fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
	  fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
	  fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
	  fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
	  fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	  var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
	    mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
	  function nf(a, b, c) {
	    var d = a.type || "unknown-event";
	    a.currentTarget = c;
	    Ub(d, b, void 0, a);
	    a.currentTarget = null;
	  }
	  function se(a, b) {
	    b = 0 !== (b & 4);
	    for (var c = 0; c < a.length; c++) {
	      var d = a[c],
	        e = d.event;
	      d = d.listeners;
	      a: {
	        var f = void 0;
	        if (b) for (var g = d.length - 1; 0 <= g; g--) {
	          var h = d[g],
	            k = h.instance,
	            l = h.currentTarget;
	          h = h.listener;
	          if (k !== f && e.isPropagationStopped()) break a;
	          nf(e, h, l);
	          f = k;
	        } else for (g = 0; g < d.length; g++) {
	          h = d[g];
	          k = h.instance;
	          l = h.currentTarget;
	          h = h.listener;
	          if (k !== f && e.isPropagationStopped()) break a;
	          nf(e, h, l);
	          f = k;
	        }
	      }
	    }
	    if (Qb) throw a = Rb, Qb = false, Rb = null, a;
	  }
	  function D(a, b) {
	    var c = b[of];
	    void 0 === c && (c = b[of] = new Set());
	    var d = a + "__bubble";
	    c.has(d) || (pf(b, a, 2, false), c.add(d));
	  }
	  function qf(a, b, c) {
	    var d = 0;
	    b && (d |= 4);
	    pf(c, a, d, b);
	  }
	  var rf = "_reactListening" + Math.random().toString(36).slice(2);
	  function sf(a) {
	    if (!a[rf]) {
	      a[rf] = true;
	      da.forEach(function (b) {
	        "selectionchange" !== b && (mf.has(b) || qf(b, false, a), qf(b, true, a));
	      });
	      var b = 9 === a.nodeType ? a : a.ownerDocument;
	      null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
	    }
	  }
	  function pf(a, b, c, d) {
	    switch (jd(b)) {
	      case 1:
	        var e = ed;
	        break;
	      case 4:
	        e = gd;
	        break;
	      default:
	        e = fd;
	    }
	    c = e.bind(null, b, c, a);
	    e = void 0;
	    !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
	    d ? void 0 !== e ? a.addEventListener(b, c, {
	      capture: true,
	      passive: e
	    }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, {
	      passive: e
	    }) : a.addEventListener(b, c, false);
	  }
	  function hd(a, b, c, d, e) {
	    var f = d;
	    if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (;;) {
	      if (null === d) return;
	      var g = d.tag;
	      if (3 === g || 4 === g) {
	        var h = d.stateNode.containerInfo;
	        if (h === e || 8 === h.nodeType && h.parentNode === e) break;
	        if (4 === g) for (g = d.return; null !== g;) {
	          var k = g.tag;
	          if (3 === k || 4 === k) if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
	          g = g.return;
	        }
	        for (; null !== h;) {
	          g = Wc(h);
	          if (null === g) return;
	          k = g.tag;
	          if (5 === k || 6 === k) {
	            d = f = g;
	            continue a;
	          }
	          h = h.parentNode;
	        }
	      }
	      d = d.return;
	    }
	    Jb(function () {
	      var d = f,
	        e = xb(c),
	        g = [];
	      a: {
	        var h = df.get(a);
	        if (void 0 !== h) {
	          var k = td,
	            n = a;
	          switch (a) {
	            case "keypress":
	              if (0 === od(c)) break a;
	            case "keydown":
	            case "keyup":
	              k = Rd;
	              break;
	            case "focusin":
	              n = "focus";
	              k = Fd;
	              break;
	            case "focusout":
	              n = "blur";
	              k = Fd;
	              break;
	            case "beforeblur":
	            case "afterblur":
	              k = Fd;
	              break;
	            case "click":
	              if (2 === c.button) break a;
	            case "auxclick":
	            case "dblclick":
	            case "mousedown":
	            case "mousemove":
	            case "mouseup":
	            case "mouseout":
	            case "mouseover":
	            case "contextmenu":
	              k = Bd;
	              break;
	            case "drag":
	            case "dragend":
	            case "dragenter":
	            case "dragexit":
	            case "dragleave":
	            case "dragover":
	            case "dragstart":
	            case "drop":
	              k = Dd;
	              break;
	            case "touchcancel":
	            case "touchend":
	            case "touchmove":
	            case "touchstart":
	              k = Vd;
	              break;
	            case $e:
	            case af:
	            case bf:
	              k = Hd;
	              break;
	            case cf:
	              k = Xd;
	              break;
	            case "scroll":
	              k = vd;
	              break;
	            case "wheel":
	              k = Zd;
	              break;
	            case "copy":
	            case "cut":
	            case "paste":
	              k = Jd;
	              break;
	            case "gotpointercapture":
	            case "lostpointercapture":
	            case "pointercancel":
	            case "pointerdown":
	            case "pointermove":
	            case "pointerout":
	            case "pointerover":
	            case "pointerup":
	              k = Td;
	          }
	          var t = 0 !== (b & 4),
	            J = !t && "scroll" === a,
	            x = t ? null !== h ? h + "Capture" : null : h;
	          t = [];
	          for (var w = d, u; null !== w;) {
	            u = w;
	            var F = u.stateNode;
	            5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w, x), null != F && t.push(tf(w, F, u))));
	            if (J) break;
	            w = w.return;
	          }
	          0 < t.length && (h = new k(h, n, null, c, e), g.push({
	            event: h,
	            listeners: t
	          }));
	        }
	      }
	      if (0 === (b & 7)) {
	        a: {
	          h = "mouseover" === a || "pointerover" === a;
	          k = "mouseout" === a || "pointerout" === a;
	          if (h && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
	          if (k || h) {
	            h = e.window === e ? e : (h = e.ownerDocument) ? h.defaultView || h.parentWindow : window;
	            if (k) {
	              if (n = c.relatedTarget || c.toElement, k = d, n = n ? Wc(n) : null, null !== n && (J = Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
	            } else k = null, n = d;
	            if (k !== n) {
	              t = Bd;
	              F = "onMouseLeave";
	              x = "onMouseEnter";
	              w = "mouse";
	              if ("pointerout" === a || "pointerover" === a) t = Td, F = "onPointerLeave", x = "onPointerEnter", w = "pointer";
	              J = null == k ? h : ue(k);
	              u = null == n ? h : ue(n);
	              h = new t(F, w + "leave", k, c, e);
	              h.target = J;
	              h.relatedTarget = u;
	              F = null;
	              Wc(e) === d && (t = new t(x, w + "enter", n, c, e), t.target = u, t.relatedTarget = J, F = t);
	              J = F;
	              if (k && n) b: {
	                t = k;
	                x = n;
	                w = 0;
	                for (u = t; u; u = vf(u)) w++;
	                u = 0;
	                for (F = x; F; F = vf(F)) u++;
	                for (; 0 < w - u;) t = vf(t), w--;
	                for (; 0 < u - w;) x = vf(x), u--;
	                for (; w--;) {
	                  if (t === x || null !== x && t === x.alternate) break b;
	                  t = vf(t);
	                  x = vf(x);
	                }
	                t = null;
	              } else t = null;
	              null !== k && wf(g, h, k, t, false);
	              null !== n && null !== J && wf(g, J, n, t, true);
	            }
	          }
	        }
	        a: {
	          h = d ? ue(d) : window;
	          k = h.nodeName && h.nodeName.toLowerCase();
	          if ("select" === k || "input" === k && "file" === h.type) var na = ve;else if (me(h)) {
	            if (we) na = Fe;else {
	              na = De;
	              var xa = Ce;
	            }
	          } else (k = h.nodeName) && "input" === k.toLowerCase() && ("checkbox" === h.type || "radio" === h.type) && (na = Ee);
	          if (na && (na = na(a, d))) {
	            ne(g, na, c, e);
	            break a;
	          }
	          xa && xa(a, h, d);
	          "focusout" === a && (xa = h._wrapperState) && xa.controlled && "number" === h.type && cb(h, "number", h.value);
	        }
	        xa = d ? ue(d) : window;
	        switch (a) {
	          case "focusin":
	            if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d, Se = null;
	            break;
	          case "focusout":
	            Se = Re = Qe = null;
	            break;
	          case "mousedown":
	            Te = true;
	            break;
	          case "contextmenu":
	          case "mouseup":
	          case "dragend":
	            Te = false;
	            Ue(g, c, e);
	            break;
	          case "selectionchange":
	            if (Pe) break;
	          case "keydown":
	          case "keyup":
	            Ue(g, c, e);
	        }
	        var $a;
	        if (ae) b: {
	          switch (a) {
	            case "compositionstart":
	              var ba = "onCompositionStart";
	              break b;
	            case "compositionend":
	              ba = "onCompositionEnd";
	              break b;
	            case "compositionupdate":
	              ba = "onCompositionUpdate";
	              break b;
	          }
	          ba = void 0;
	        } else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
	        ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e), g.push({
	          event: ba,
	          listeners: xa
	        }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
	        if ($a = ce ? je(a, c) : ke(a, c)) d = oe(d, "onBeforeInput"), 0 < d.length && (e = new Ld("onBeforeInput", "beforeinput", null, c, e), g.push({
	          event: e,
	          listeners: d
	        }), e.data = $a);
	      }
	      se(g, b);
	    });
	  }
	  function tf(a, b, c) {
	    return {
	      instance: a,
	      listener: b,
	      currentTarget: c
	    };
	  }
	  function oe(a, b) {
	    for (var c = b + "Capture", d = []; null !== a;) {
	      var e = a,
	        f = e.stateNode;
	      5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(tf(a, f, e)), f = Kb(a, b), null != f && d.push(tf(a, f, e)));
	      a = a.return;
	    }
	    return d;
	  }
	  function vf(a) {
	    if (null === a) return null;
	    do a = a.return; while (a && 5 !== a.tag);
	    return a ? a : null;
	  }
	  function wf(a, b, c, d, e) {
	    for (var f = b._reactName, g = []; null !== c && c !== d;) {
	      var h = c,
	        k = h.alternate,
	        l = h.stateNode;
	      if (null !== k && k === d) break;
	      5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), null != k && g.push(tf(c, k, h))));
	      c = c.return;
	    }
	    0 !== g.length && a.push({
	      event: b,
	      listeners: g
	    });
	  }
	  var xf = /\r\n?/g,
	    yf = /\u0000|\uFFFD/g;
	  function zf(a) {
	    return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
	  }
	  function Af(a, b, c) {
	    b = zf(b);
	    if (zf(a) !== b && c) throw Error(p(425));
	  }
	  function Bf() {}
	  var Cf = null,
	    Df = null;
	  function Ef(a, b) {
	    return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
	  }
	  var Ff = "function" === typeof setTimeout ? setTimeout : void 0,
	    Gf = "function" === typeof clearTimeout ? clearTimeout : void 0,
	    Hf = "function" === typeof Promise ? Promise : void 0,
	    Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function (a) {
	      return Hf.resolve(null).then(a).catch(If);
	    } : Ff;
	  function If(a) {
	    setTimeout(function () {
	      throw a;
	    });
	  }
	  function Kf(a, b) {
	    var c = b,
	      d = 0;
	    do {
	      var e = c.nextSibling;
	      a.removeChild(c);
	      if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
	        if (0 === d) {
	          a.removeChild(e);
	          bd(b);
	          return;
	        }
	        d--;
	      } else "$" !== c && "$?" !== c && "$!" !== c || d++;
	      c = e;
	    } while (c);
	    bd(b);
	  }
	  function Lf(a) {
	    for (; null != a; a = a.nextSibling) {
	      var b = a.nodeType;
	      if (1 === b || 3 === b) break;
	      if (8 === b) {
	        b = a.data;
	        if ("$" === b || "$!" === b || "$?" === b) break;
	        if ("/$" === b) return null;
	      }
	    }
	    return a;
	  }
	  function Mf(a) {
	    a = a.previousSibling;
	    for (var b = 0; a;) {
	      if (8 === a.nodeType) {
	        var c = a.data;
	        if ("$" === c || "$!" === c || "$?" === c) {
	          if (0 === b) return a;
	          b--;
	        } else "/$" === c && b++;
	      }
	      a = a.previousSibling;
	    }
	    return null;
	  }
	  var Nf = Math.random().toString(36).slice(2),
	    Of = "__reactFiber$" + Nf,
	    Pf = "__reactProps$" + Nf,
	    uf = "__reactContainer$" + Nf,
	    of = "__reactEvents$" + Nf,
	    Qf = "__reactListeners$" + Nf,
	    Rf = "__reactHandles$" + Nf;
	  function Wc(a) {
	    var b = a[Of];
	    if (b) return b;
	    for (var c = a.parentNode; c;) {
	      if (b = c[uf] || c[Of]) {
	        c = b.alternate;
	        if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a;) {
	          if (c = a[Of]) return c;
	          a = Mf(a);
	        }
	        return b;
	      }
	      a = c;
	      c = a.parentNode;
	    }
	    return null;
	  }
	  function Cb(a) {
	    a = a[Of] || a[uf];
	    return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
	  }
	  function ue(a) {
	    if (5 === a.tag || 6 === a.tag) return a.stateNode;
	    throw Error(p(33));
	  }
	  function Db(a) {
	    return a[Pf] || null;
	  }
	  var Sf = [],
	    Tf = -1;
	  function Uf(a) {
	    return {
	      current: a
	    };
	  }
	  function E(a) {
	    0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
	  }
	  function G(a, b) {
	    Tf++;
	    Sf[Tf] = a.current;
	    a.current = b;
	  }
	  var Vf = {},
	    H = Uf(Vf),
	    Wf = Uf(false),
	    Xf = Vf;
	  function Yf(a, b) {
	    var c = a.type.contextTypes;
	    if (!c) return Vf;
	    var d = a.stateNode;
	    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
	    var e = {},
	      f;
	    for (f in c) e[f] = b[f];
	    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
	    return e;
	  }
	  function Zf(a) {
	    a = a.childContextTypes;
	    return null !== a && void 0 !== a;
	  }
	  function $f() {
	    E(Wf);
	    E(H);
	  }
	  function ag(a, b, c) {
	    if (H.current !== Vf) throw Error(p(168));
	    G(H, b);
	    G(Wf, c);
	  }
	  function bg(a, b, c) {
	    var d = a.stateNode;
	    b = b.childContextTypes;
	    if ("function" !== typeof d.getChildContext) return c;
	    d = d.getChildContext();
	    for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
	    return A({}, c, d);
	  }
	  function cg(a) {
	    a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
	    Xf = H.current;
	    G(H, a);
	    G(Wf, Wf.current);
	    return true;
	  }
	  function dg(a, b, c) {
	    var d = a.stateNode;
	    if (!d) throw Error(p(169));
	    c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
	    G(Wf, c);
	  }
	  var eg = null,
	    fg = false,
	    gg = false;
	  function hg(a) {
	    null === eg ? eg = [a] : eg.push(a);
	  }
	  function ig(a) {
	    fg = true;
	    hg(a);
	  }
	  function jg() {
	    if (!gg && null !== eg) {
	      gg = true;
	      var a = 0,
	        b = C;
	      try {
	        var c = eg;
	        for (C = 1; a < c.length; a++) {
	          var d = c[a];
	          do d = d(!0); while (null !== d);
	        }
	        eg = null;
	        fg = !1;
	      } catch (e) {
	        throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
	      } finally {
	        C = b, gg = false;
	      }
	    }
	    return null;
	  }
	  var kg = [],
	    lg = 0,
	    mg = null,
	    ng = 0,
	    og = [],
	    pg = 0,
	    qg = null,
	    rg = 1,
	    sg = "";
	  function tg(a, b) {
	    kg[lg++] = ng;
	    kg[lg++] = mg;
	    mg = a;
	    ng = b;
	  }
	  function ug(a, b, c) {
	    og[pg++] = rg;
	    og[pg++] = sg;
	    og[pg++] = qg;
	    qg = a;
	    var d = rg;
	    a = sg;
	    var e = 32 - oc(d) - 1;
	    d &= ~(1 << e);
	    c += 1;
	    var f = 32 - oc(b) + e;
	    if (30 < f) {
	      var g = e - e % 5;
	      f = (d & (1 << g) - 1).toString(32);
	      d >>= g;
	      e -= g;
	      rg = 1 << 32 - oc(b) + e | c << e | d;
	      sg = f + a;
	    } else rg = 1 << f | c << e | d, sg = a;
	  }
	  function vg(a) {
	    null !== a.return && (tg(a, 1), ug(a, 1, 0));
	  }
	  function wg(a) {
	    for (; a === mg;) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
	    for (; a === qg;) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
	  }
	  var xg = null,
	    yg = null,
	    I = false,
	    zg = null;
	  function Ag(a, b) {
	    var c = Bg(5, null, null, 0);
	    c.elementType = "DELETED";
	    c.stateNode = b;
	    c.return = a;
	    b = a.deletions;
	    null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
	  }
	  function Cg(a, b) {
	    switch (a.tag) {
	      case 5:
	        var c = a.type;
	        b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
	        return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
	      case 6:
	        return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
	      case 13:
	        return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? {
	          id: rg,
	          overflow: sg
	        } : null, a.memoizedState = {
	          dehydrated: b,
	          treeContext: c,
	          retryLane: 1073741824
	        }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
	      default:
	        return false;
	    }
	  }
	  function Dg(a) {
	    return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
	  }
	  function Eg(a) {
	    if (I) {
	      var b = yg;
	      if (b) {
	        var c = b;
	        if (!Cg(a, b)) {
	          if (Dg(a)) throw Error(p(418));
	          b = Lf(c.nextSibling);
	          var d = xg;
	          b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
	        }
	      } else {
	        if (Dg(a)) throw Error(p(418));
	        a.flags = a.flags & -4097 | 2;
	        I = false;
	        xg = a;
	      }
	    }
	  }
	  function Fg(a) {
	    for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) a = a.return;
	    xg = a;
	  }
	  function Gg(a) {
	    if (a !== xg) return false;
	    if (!I) return Fg(a), I = true, false;
	    var b;
	    (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
	    if (b && (b = yg)) {
	      if (Dg(a)) throw Hg(), Error(p(418));
	      for (; b;) Ag(a, b), b = Lf(b.nextSibling);
	    }
	    Fg(a);
	    if (13 === a.tag) {
	      a = a.memoizedState;
	      a = null !== a ? a.dehydrated : null;
	      if (!a) throw Error(p(317));
	      a: {
	        a = a.nextSibling;
	        for (b = 0; a;) {
	          if (8 === a.nodeType) {
	            var c = a.data;
	            if ("/$" === c) {
	              if (0 === b) {
	                yg = Lf(a.nextSibling);
	                break a;
	              }
	              b--;
	            } else "$" !== c && "$!" !== c && "$?" !== c || b++;
	          }
	          a = a.nextSibling;
	        }
	        yg = null;
	      }
	    } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
	    return true;
	  }
	  function Hg() {
	    for (var a = yg; a;) a = Lf(a.nextSibling);
	  }
	  function Ig() {
	    yg = xg = null;
	    I = false;
	  }
	  function Jg(a) {
	    null === zg ? zg = [a] : zg.push(a);
	  }
	  var Kg = ua.ReactCurrentBatchConfig;
	  function Lg(a, b, c) {
	    a = c.ref;
	    if (null !== a && "function" !== typeof a && "object" !== typeof a) {
	      if (c._owner) {
	        c = c._owner;
	        if (c) {
	          if (1 !== c.tag) throw Error(p(309));
	          var d = c.stateNode;
	        }
	        if (!d) throw Error(p(147, a));
	        var e = d,
	          f = "" + a;
	        if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
	        b = function (a) {
	          var b = e.refs;
	          null === a ? delete b[f] : b[f] = a;
	        };
	        b._stringRef = f;
	        return b;
	      }
	      if ("string" !== typeof a) throw Error(p(284));
	      if (!c._owner) throw Error(p(290, a));
	    }
	    return a;
	  }
	  function Mg(a, b) {
	    a = Object.prototype.toString.call(b);
	    throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
	  }
	  function Ng(a) {
	    var b = a._init;
	    return b(a._payload);
	  }
	  function Og(a) {
	    function b(b, c) {
	      if (a) {
	        var d = b.deletions;
	        null === d ? (b.deletions = [c], b.flags |= 16) : d.push(c);
	      }
	    }
	    function c(c, d) {
	      if (!a) return null;
	      for (; null !== d;) b(c, d), d = d.sibling;
	      return null;
	    }
	    function d(a, b) {
	      for (a = new Map(); null !== b;) null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
	      return a;
	    }
	    function e(a, b) {
	      a = Pg(a, b);
	      a.index = 0;
	      a.sibling = null;
	      return a;
	    }
	    function f(b, c, d) {
	      b.index = d;
	      if (!a) return b.flags |= 1048576, c;
	      d = b.alternate;
	      if (null !== d) return d = d.index, d < c ? (b.flags |= 2, c) : d;
	      b.flags |= 2;
	      return c;
	    }
	    function g(b) {
	      a && null === b.alternate && (b.flags |= 2);
	      return b;
	    }
	    function h(a, b, c, d) {
	      if (null === b || 6 !== b.tag) return b = Qg(c, a.mode, d), b.return = a, b;
	      b = e(b, c);
	      b.return = a;
	      return b;
	    }
	    function k(a, b, c, d) {
	      var f = c.type;
	      if (f === ya) return m(a, b, c.props.children, d, c.key);
	      if (null !== b && (b.elementType === f || "object" === typeof f && null !== f && f.$$typeof === Ha && Ng(f) === b.type)) return d = e(b, c.props), d.ref = Lg(a, b, c), d.return = a, d;
	      d = Rg(c.type, c.key, c.props, null, a.mode, d);
	      d.ref = Lg(a, b, c);
	      d.return = a;
	      return d;
	    }
	    function l(a, b, c, d) {
	      if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = Sg(c, a.mode, d), b.return = a, b;
	      b = e(b, c.children || []);
	      b.return = a;
	      return b;
	    }
	    function m(a, b, c, d, f) {
	      if (null === b || 7 !== b.tag) return b = Tg(c, a.mode, d, f), b.return = a, b;
	      b = e(b, c);
	      b.return = a;
	      return b;
	    }
	    function q(a, b, c) {
	      if ("string" === typeof b && "" !== b || "number" === typeof b) return b = Qg("" + b, a.mode, c), b.return = a, b;
	      if ("object" === typeof b && null !== b) {
	        switch (b.$$typeof) {
	          case va:
	            return c = Rg(b.type, b.key, b.props, null, a.mode, c), c.ref = Lg(a, null, b), c.return = a, c;
	          case wa:
	            return b = Sg(b, a.mode, c), b.return = a, b;
	          case Ha:
	            var d = b._init;
	            return q(a, d(b._payload), c);
	        }
	        if (eb(b) || Ka(b)) return b = Tg(b, a.mode, c, null), b.return = a, b;
	        Mg(a, b);
	      }
	      return null;
	    }
	    function r(a, b, c, d) {
	      var e = null !== b ? b.key : null;
	      if ("string" === typeof c && "" !== c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);
	      if ("object" === typeof c && null !== c) {
	        switch (c.$$typeof) {
	          case va:
	            return c.key === e ? k(a, b, c, d) : null;
	          case wa:
	            return c.key === e ? l(a, b, c, d) : null;
	          case Ha:
	            return e = c._init, r(a, b, e(c._payload), d);
	        }
	        if (eb(c) || Ka(c)) return null !== e ? null : m(a, b, c, d, null);
	        Mg(a, c);
	      }
	      return null;
	    }
	    function y(a, b, c, d, e) {
	      if ("string" === typeof d && "" !== d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);
	      if ("object" === typeof d && null !== d) {
	        switch (d.$$typeof) {
	          case va:
	            return a = a.get(null === d.key ? c : d.key) || null, k(b, a, d, e);
	          case wa:
	            return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
	          case Ha:
	            var f = d._init;
	            return y(a, b, c, f(d._payload), e);
	        }
	        if (eb(d) || Ka(d)) return a = a.get(c) || null, m(b, a, d, e, null);
	        Mg(b, d);
	      }
	      return null;
	    }
	    function n(e, g, h, k) {
	      for (var l = null, m = null, u = g, w = g = 0, x = null; null !== u && w < h.length; w++) {
	        u.index > w ? (x = u, u = null) : x = u.sibling;
	        var n = r(e, u, h[w], k);
	        if (null === n) {
	          null === u && (u = x);
	          break;
	        }
	        a && u && null === n.alternate && b(e, u);
	        g = f(n, g, w);
	        null === m ? l = n : m.sibling = n;
	        m = n;
	        u = x;
	      }
	      if (w === h.length) return c(e, u), I && tg(e, w), l;
	      if (null === u) {
	        for (; w < h.length; w++) u = q(e, h[w], k), null !== u && (g = f(u, g, w), null === m ? l = u : m.sibling = u, m = u);
	        I && tg(e, w);
	        return l;
	      }
	      for (u = d(e, u); w < h.length; w++) x = y(u, e, w, h[w], k), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), g = f(x, g, w), null === m ? l = x : m.sibling = x, m = x);
	      a && u.forEach(function (a) {
	        return b(e, a);
	      });
	      I && tg(e, w);
	      return l;
	    }
	    function t(e, g, h, k) {
	      var l = Ka(h);
	      if ("function" !== typeof l) throw Error(p(150));
	      h = l.call(h);
	      if (null == h) throw Error(p(151));
	      for (var u = l = null, m = g, w = g = 0, x = null, n = h.next(); null !== m && !n.done; w++, n = h.next()) {
	        m.index > w ? (x = m, m = null) : x = m.sibling;
	        var t = r(e, m, n.value, k);
	        if (null === t) {
	          null === m && (m = x);
	          break;
	        }
	        a && m && null === t.alternate && b(e, m);
	        g = f(t, g, w);
	        null === u ? l = t : u.sibling = t;
	        u = t;
	        m = x;
	      }
	      if (n.done) return c(e, m), I && tg(e, w), l;
	      if (null === m) {
	        for (; !n.done; w++, n = h.next()) n = q(e, n.value, k), null !== n && (g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
	        I && tg(e, w);
	        return l;
	      }
	      for (m = d(e, m); !n.done; w++, n = h.next()) n = y(m, e, w, n.value, k), null !== n && (a && null !== n.alternate && m.delete(null === n.key ? w : n.key), g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
	      a && m.forEach(function (a) {
	        return b(e, a);
	      });
	      I && tg(e, w);
	      return l;
	    }
	    function J(a, d, f, h) {
	      "object" === typeof f && null !== f && f.type === ya && null === f.key && (f = f.props.children);
	      if ("object" === typeof f && null !== f) {
	        switch (f.$$typeof) {
	          case va:
	            a: {
	              for (var k = f.key, l = d; null !== l;) {
	                if (l.key === k) {
	                  k = f.type;
	                  if (k === ya) {
	                    if (7 === l.tag) {
	                      c(a, l.sibling);
	                      d = e(l, f.props.children);
	                      d.return = a;
	                      a = d;
	                      break a;
	                    }
	                  } else if (l.elementType === k || "object" === typeof k && null !== k && k.$$typeof === Ha && Ng(k) === l.type) {
	                    c(a, l.sibling);
	                    d = e(l, f.props);
	                    d.ref = Lg(a, l, f);
	                    d.return = a;
	                    a = d;
	                    break a;
	                  }
	                  c(a, l);
	                  break;
	                } else b(a, l);
	                l = l.sibling;
	              }
	              f.type === ya ? (d = Tg(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = Rg(f.type, f.key, f.props, null, a.mode, h), h.ref = Lg(a, d, f), h.return = a, a = h);
	            }
	            return g(a);
	          case wa:
	            a: {
	              for (l = f.key; null !== d;) {
	                if (d.key === l) {
	                  if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
	                    c(a, d.sibling);
	                    d = e(d, f.children || []);
	                    d.return = a;
	                    a = d;
	                    break a;
	                  } else {
	                    c(a, d);
	                    break;
	                  }
	                } else b(a, d);
	                d = d.sibling;
	              }
	              d = Sg(f, a.mode, h);
	              d.return = a;
	              a = d;
	            }
	            return g(a);
	          case Ha:
	            return l = f._init, J(a, d, l(f._payload), h);
	        }
	        if (eb(f)) return n(a, d, f, h);
	        if (Ka(f)) return t(a, d, f, h);
	        Mg(a, f);
	      }
	      return "string" === typeof f && "" !== f || "number" === typeof f ? (f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = Qg(f, a.mode, h), d.return = a, a = d), g(a)) : c(a, d);
	    }
	    return J;
	  }
	  var Ug = Og(true),
	    Vg = Og(false),
	    Wg = Uf(null),
	    Xg = null,
	    Yg = null,
	    Zg = null;
	  function $g() {
	    Zg = Yg = Xg = null;
	  }
	  function ah(a) {
	    var b = Wg.current;
	    E(Wg);
	    a._currentValue = b;
	  }
	  function bh(a, b, c) {
	    for (; null !== a;) {
	      var d = a.alternate;
	      (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
	      if (a === c) break;
	      a = a.return;
	    }
	  }
	  function ch(a, b) {
	    Xg = a;
	    Zg = Yg = null;
	    a = a.dependencies;
	    null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = true), a.firstContext = null);
	  }
	  function eh(a) {
	    var b = a._currentValue;
	    if (Zg !== a) if (a = {
	      context: a,
	      memoizedValue: b,
	      next: null
	    }, null === Yg) {
	      if (null === Xg) throw Error(p(308));
	      Yg = a;
	      Xg.dependencies = {
	        lanes: 0,
	        firstContext: a
	      };
	    } else Yg = Yg.next = a;
	    return b;
	  }
	  var fh = null;
	  function gh(a) {
	    null === fh ? fh = [a] : fh.push(a);
	  }
	  function hh(a, b, c, d) {
	    var e = b.interleaved;
	    null === e ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
	    b.interleaved = c;
	    return ih(a, d);
	  }
	  function ih(a, b) {
	    a.lanes |= b;
	    var c = a.alternate;
	    null !== c && (c.lanes |= b);
	    c = a;
	    for (a = a.return; null !== a;) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
	    return 3 === c.tag ? c.stateNode : null;
	  }
	  var jh = false;
	  function kh(a) {
	    a.updateQueue = {
	      baseState: a.memoizedState,
	      firstBaseUpdate: null,
	      lastBaseUpdate: null,
	      shared: {
	        pending: null,
	        interleaved: null,
	        lanes: 0
	      },
	      effects: null
	    };
	  }
	  function lh(a, b) {
	    a = a.updateQueue;
	    b.updateQueue === a && (b.updateQueue = {
	      baseState: a.baseState,
	      firstBaseUpdate: a.firstBaseUpdate,
	      lastBaseUpdate: a.lastBaseUpdate,
	      shared: a.shared,
	      effects: a.effects
	    });
	  }
	  function mh(a, b) {
	    return {
	      eventTime: a,
	      lane: b,
	      tag: 0,
	      payload: null,
	      callback: null,
	      next: null
	    };
	  }
	  function nh(a, b, c) {
	    var d = a.updateQueue;
	    if (null === d) return null;
	    d = d.shared;
	    if (0 !== (K & 2)) {
	      var e = d.pending;
	      null === e ? b.next = b : (b.next = e.next, e.next = b);
	      d.pending = b;
	      return ih(a, c);
	    }
	    e = d.interleaved;
	    null === e ? (b.next = b, gh(d)) : (b.next = e.next, e.next = b);
	    d.interleaved = b;
	    return ih(a, c);
	  }
	  function oh(a, b, c) {
	    b = b.updateQueue;
	    if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
	      var d = b.lanes;
	      d &= a.pendingLanes;
	      c |= d;
	      b.lanes = c;
	      Cc(a, c);
	    }
	  }
	  function ph(a, b) {
	    var c = a.updateQueue,
	      d = a.alternate;
	    if (null !== d && (d = d.updateQueue, c === d)) {
	      var e = null,
	        f = null;
	      c = c.firstBaseUpdate;
	      if (null !== c) {
	        do {
	          var g = {
	            eventTime: c.eventTime,
	            lane: c.lane,
	            tag: c.tag,
	            payload: c.payload,
	            callback: c.callback,
	            next: null
	          };
	          null === f ? e = f = g : f = f.next = g;
	          c = c.next;
	        } while (null !== c);
	        null === f ? e = f = b : f = f.next = b;
	      } else e = f = b;
	      c = {
	        baseState: d.baseState,
	        firstBaseUpdate: e,
	        lastBaseUpdate: f,
	        shared: d.shared,
	        effects: d.effects
	      };
	      a.updateQueue = c;
	      return;
	    }
	    a = c.lastBaseUpdate;
	    null === a ? c.firstBaseUpdate = b : a.next = b;
	    c.lastBaseUpdate = b;
	  }
	  function qh(a, b, c, d) {
	    var e = a.updateQueue;
	    jh = false;
	    var f = e.firstBaseUpdate,
	      g = e.lastBaseUpdate,
	      h = e.shared.pending;
	    if (null !== h) {
	      e.shared.pending = null;
	      var k = h,
	        l = k.next;
	      k.next = null;
	      null === g ? f = l : g.next = l;
	      g = k;
	      var m = a.alternate;
	      null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
	    }
	    if (null !== f) {
	      var q = e.baseState;
	      g = 0;
	      m = l = k = null;
	      h = f;
	      do {
	        var r = h.lane,
	          y = h.eventTime;
	        if ((d & r) === r) {
	          null !== m && (m = m.next = {
	            eventTime: y,
	            lane: 0,
	            tag: h.tag,
	            payload: h.payload,
	            callback: h.callback,
	            next: null
	          });
	          a: {
	            var n = a,
	              t = h;
	            r = b;
	            y = c;
	            switch (t.tag) {
	              case 1:
	                n = t.payload;
	                if ("function" === typeof n) {
	                  q = n.call(y, q, r);
	                  break a;
	                }
	                q = n;
	                break a;
	              case 3:
	                n.flags = n.flags & -65537 | 128;
	              case 0:
	                n = t.payload;
	                r = "function" === typeof n ? n.call(y, q, r) : n;
	                if (null === r || void 0 === r) break a;
	                q = A({}, q, r);
	                break a;
	              case 2:
	                jh = true;
	            }
	          }
	          null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [h] : r.push(h));
	        } else y = {
	          eventTime: y,
	          lane: r,
	          tag: h.tag,
	          payload: h.payload,
	          callback: h.callback,
	          next: null
	        }, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
	        h = h.next;
	        if (null === h) if (h = e.shared.pending, null === h) break;else r = h, h = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
	      } while (1);
	      null === m && (k = q);
	      e.baseState = k;
	      e.firstBaseUpdate = l;
	      e.lastBaseUpdate = m;
	      b = e.shared.interleaved;
	      if (null !== b) {
	        e = b;
	        do g |= e.lane, e = e.next; while (e !== b);
	      } else null === f && (e.shared.lanes = 0);
	      rh |= g;
	      a.lanes = g;
	      a.memoizedState = q;
	    }
	  }
	  function sh(a, b, c) {
	    a = b.effects;
	    b.effects = null;
	    if (null !== a) for (b = 0; b < a.length; b++) {
	      var d = a[b],
	        e = d.callback;
	      if (null !== e) {
	        d.callback = null;
	        d = c;
	        if ("function" !== typeof e) throw Error(p(191, e));
	        e.call(d);
	      }
	    }
	  }
	  var th = {},
	    uh = Uf(th),
	    vh = Uf(th),
	    wh = Uf(th);
	  function xh(a) {
	    if (a === th) throw Error(p(174));
	    return a;
	  }
	  function yh(a, b) {
	    G(wh, b);
	    G(vh, a);
	    G(uh, th);
	    a = b.nodeType;
	    switch (a) {
	      case 9:
	      case 11:
	        b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
	        break;
	      default:
	        a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
	    }
	    E(uh);
	    G(uh, b);
	  }
	  function zh() {
	    E(uh);
	    E(vh);
	    E(wh);
	  }
	  function Ah(a) {
	    xh(wh.current);
	    var b = xh(uh.current);
	    var c = lb(b, a.type);
	    b !== c && (G(vh, a), G(uh, c));
	  }
	  function Bh(a) {
	    vh.current === a && (E(uh), E(vh));
	  }
	  var L = Uf(0);
	  function Ch(a) {
	    for (var b = a; null !== b;) {
	      if (13 === b.tag) {
	        var c = b.memoizedState;
	        if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
	      } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
	        if (0 !== (b.flags & 128)) return b;
	      } else if (null !== b.child) {
	        b.child.return = b;
	        b = b.child;
	        continue;
	      }
	      if (b === a) break;
	      for (; null === b.sibling;) {
	        if (null === b.return || b.return === a) return null;
	        b = b.return;
	      }
	      b.sibling.return = b.return;
	      b = b.sibling;
	    }
	    return null;
	  }
	  var Dh = [];
	  function Eh() {
	    for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
	    Dh.length = 0;
	  }
	  var Fh = ua.ReactCurrentDispatcher,
	    Gh = ua.ReactCurrentBatchConfig,
	    Hh = 0,
	    M = null,
	    N = null,
	    O = null,
	    Ih = false,
	    Jh = false,
	    Kh = 0,
	    Lh = 0;
	  function P() {
	    throw Error(p(321));
	  }
	  function Mh(a, b) {
	    if (null === b) return false;
	    for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return false;
	    return true;
	  }
	  function Nh(a, b, c, d, e, f) {
	    Hh = f;
	    M = b;
	    b.memoizedState = null;
	    b.updateQueue = null;
	    b.lanes = 0;
	    Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
	    a = c(d, e);
	    if (Jh) {
	      f = 0;
	      do {
	        Jh = false;
	        Kh = 0;
	        if (25 <= f) throw Error(p(301));
	        f += 1;
	        O = N = null;
	        b.updateQueue = null;
	        Fh.current = Qh;
	        a = c(d, e);
	      } while (Jh);
	    }
	    Fh.current = Rh;
	    b = null !== N && null !== N.next;
	    Hh = 0;
	    O = N = M = null;
	    Ih = false;
	    if (b) throw Error(p(300));
	    return a;
	  }
	  function Sh() {
	    var a = 0 !== Kh;
	    Kh = 0;
	    return a;
	  }
	  function Th() {
	    var a = {
	      memoizedState: null,
	      baseState: null,
	      baseQueue: null,
	      queue: null,
	      next: null
	    };
	    null === O ? M.memoizedState = O = a : O = O.next = a;
	    return O;
	  }
	  function Uh() {
	    if (null === N) {
	      var a = M.alternate;
	      a = null !== a ? a.memoizedState : null;
	    } else a = N.next;
	    var b = null === O ? M.memoizedState : O.next;
	    if (null !== b) O = b, N = a;else {
	      if (null === a) throw Error(p(310));
	      N = a;
	      a = {
	        memoizedState: N.memoizedState,
	        baseState: N.baseState,
	        baseQueue: N.baseQueue,
	        queue: N.queue,
	        next: null
	      };
	      null === O ? M.memoizedState = O = a : O = O.next = a;
	    }
	    return O;
	  }
	  function Vh(a, b) {
	    return "function" === typeof b ? b(a) : b;
	  }
	  function Wh(a) {
	    var b = Uh(),
	      c = b.queue;
	    if (null === c) throw Error(p(311));
	    c.lastRenderedReducer = a;
	    var d = N,
	      e = d.baseQueue,
	      f = c.pending;
	    if (null !== f) {
	      if (null !== e) {
	        var g = e.next;
	        e.next = f.next;
	        f.next = g;
	      }
	      d.baseQueue = e = f;
	      c.pending = null;
	    }
	    if (null !== e) {
	      f = e.next;
	      d = d.baseState;
	      var h = g = null,
	        k = null,
	        l = f;
	      do {
	        var m = l.lane;
	        if ((Hh & m) === m) null !== k && (k = k.next = {
	          lane: 0,
	          action: l.action,
	          hasEagerState: l.hasEagerState,
	          eagerState: l.eagerState,
	          next: null
	        }), d = l.hasEagerState ? l.eagerState : a(d, l.action);else {
	          var q = {
	            lane: m,
	            action: l.action,
	            hasEagerState: l.hasEagerState,
	            eagerState: l.eagerState,
	            next: null
	          };
	          null === k ? (h = k = q, g = d) : k = k.next = q;
	          M.lanes |= m;
	          rh |= m;
	        }
	        l = l.next;
	      } while (null !== l && l !== f);
	      null === k ? g = d : k.next = h;
	      He(d, b.memoizedState) || (dh = true);
	      b.memoizedState = d;
	      b.baseState = g;
	      b.baseQueue = k;
	      c.lastRenderedState = d;
	    }
	    a = c.interleaved;
	    if (null !== a) {
	      e = a;
	      do f = e.lane, M.lanes |= f, rh |= f, e = e.next; while (e !== a);
	    } else null === e && (c.lanes = 0);
	    return [b.memoizedState, c.dispatch];
	  }
	  function Xh(a) {
	    var b = Uh(),
	      c = b.queue;
	    if (null === c) throw Error(p(311));
	    c.lastRenderedReducer = a;
	    var d = c.dispatch,
	      e = c.pending,
	      f = b.memoizedState;
	    if (null !== e) {
	      c.pending = null;
	      var g = e = e.next;
	      do f = a(f, g.action), g = g.next; while (g !== e);
	      He(f, b.memoizedState) || (dh = true);
	      b.memoizedState = f;
	      null === b.baseQueue && (b.baseState = f);
	      c.lastRenderedState = f;
	    }
	    return [f, d];
	  }
	  function Yh() {}
	  function Zh(a, b) {
	    var c = M,
	      d = Uh(),
	      e = b(),
	      f = !He(d.memoizedState, e);
	    f && (d.memoizedState = e, dh = true);
	    d = d.queue;
	    $h(ai.bind(null, c, d, a), [a]);
	    if (d.getSnapshot !== b || f || null !== O && O.memoizedState.tag & 1) {
	      c.flags |= 2048;
	      bi(9, ci.bind(null, c, d, e, b), void 0, null);
	      if (null === Q) throw Error(p(349));
	      0 !== (Hh & 30) || di(c, b, e);
	    }
	    return e;
	  }
	  function di(a, b, c) {
	    a.flags |= 16384;
	    a = {
	      getSnapshot: b,
	      value: c
	    };
	    b = M.updateQueue;
	    null === b ? (b = {
	      lastEffect: null,
	      stores: null
	    }, M.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
	  }
	  function ci(a, b, c, d) {
	    b.value = c;
	    b.getSnapshot = d;
	    ei(b) && fi(a);
	  }
	  function ai(a, b, c) {
	    return c(function () {
	      ei(b) && fi(a);
	    });
	  }
	  function ei(a) {
	    var b = a.getSnapshot;
	    a = a.value;
	    try {
	      var c = b();
	      return !He(a, c);
	    } catch (d) {
	      return true;
	    }
	  }
	  function fi(a) {
	    var b = ih(a, 1);
	    null !== b && gi(b, a, 1, -1);
	  }
	  function hi(a) {
	    var b = Th();
	    "function" === typeof a && (a = a());
	    b.memoizedState = b.baseState = a;
	    a = {
	      pending: null,
	      interleaved: null,
	      lanes: 0,
	      dispatch: null,
	      lastRenderedReducer: Vh,
	      lastRenderedState: a
	    };
	    b.queue = a;
	    a = a.dispatch = ii.bind(null, M, a);
	    return [b.memoizedState, a];
	  }
	  function bi(a, b, c, d) {
	    a = {
	      tag: a,
	      create: b,
	      destroy: c,
	      deps: d,
	      next: null
	    };
	    b = M.updateQueue;
	    null === b ? (b = {
	      lastEffect: null,
	      stores: null
	    }, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
	    return a;
	  }
	  function ji() {
	    return Uh().memoizedState;
	  }
	  function ki(a, b, c, d) {
	    var e = Th();
	    M.flags |= a;
	    e.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
	  }
	  function li(a, b, c, d) {
	    var e = Uh();
	    d = void 0 === d ? null : d;
	    var f = void 0;
	    if (null !== N) {
	      var g = N.memoizedState;
	      f = g.destroy;
	      if (null !== d && Mh(d, g.deps)) {
	        e.memoizedState = bi(b, c, f, d);
	        return;
	      }
	    }
	    M.flags |= a;
	    e.memoizedState = bi(1 | b, c, f, d);
	  }
	  function mi(a, b) {
	    return ki(8390656, 8, a, b);
	  }
	  function $h(a, b) {
	    return li(2048, 8, a, b);
	  }
	  function ni(a, b) {
	    return li(4, 2, a, b);
	  }
	  function oi(a, b) {
	    return li(4, 4, a, b);
	  }
	  function pi(a, b) {
	    if ("function" === typeof b) return a = a(), b(a), function () {
	      b(null);
	    };
	    if (null !== b && void 0 !== b) return a = a(), b.current = a, function () {
	      b.current = null;
	    };
	  }
	  function qi(a, b, c) {
	    c = null !== c && void 0 !== c ? c.concat([a]) : null;
	    return li(4, 4, pi.bind(null, b, a), c);
	  }
	  function ri() {}
	  function si(a, b) {
	    var c = Uh();
	    b = void 0 === b ? null : b;
	    var d = c.memoizedState;
	    if (null !== d && null !== b && Mh(b, d[1])) return d[0];
	    c.memoizedState = [a, b];
	    return a;
	  }
	  function ti(a, b) {
	    var c = Uh();
	    b = void 0 === b ? null : b;
	    var d = c.memoizedState;
	    if (null !== d && null !== b && Mh(b, d[1])) return d[0];
	    a = a();
	    c.memoizedState = [a, b];
	    return a;
	  }
	  function ui(a, b, c) {
	    if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
	    He(c, b) || (c = yc(), M.lanes |= c, rh |= c, a.baseState = true);
	    return b;
	  }
	  function vi(a, b) {
	    var c = C;
	    C = 0 !== c && 4 > c ? c : 4;
	    a(true);
	    var d = Gh.transition;
	    Gh.transition = {};
	    try {
	      a(!1), b();
	    } finally {
	      C = c, Gh.transition = d;
	    }
	  }
	  function wi() {
	    return Uh().memoizedState;
	  }
	  function xi(a, b, c) {
	    var d = yi(a);
	    c = {
	      lane: d,
	      action: c,
	      hasEagerState: false,
	      eagerState: null,
	      next: null
	    };
	    if (zi(a)) Ai(b, c);else if (c = hh(a, b, c, d), null !== c) {
	      var e = R();
	      gi(c, a, d, e);
	      Bi(c, b, d);
	    }
	  }
	  function ii(a, b, c) {
	    var d = yi(a),
	      e = {
	        lane: d,
	        action: c,
	        hasEagerState: false,
	        eagerState: null,
	        next: null
	      };
	    if (zi(a)) Ai(b, e);else {
	      var f = a.alternate;
	      if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
	        var g = b.lastRenderedState,
	          h = f(g, c);
	        e.hasEagerState = !0;
	        e.eagerState = h;
	        if (He(h, g)) {
	          var k = b.interleaved;
	          null === k ? (e.next = e, gh(b)) : (e.next = k.next, k.next = e);
	          b.interleaved = e;
	          return;
	        }
	      } catch (l) {} finally {}
	      c = hh(a, b, e, d);
	      null !== c && (e = R(), gi(c, a, d, e), Bi(c, b, d));
	    }
	  }
	  function zi(a) {
	    var b = a.alternate;
	    return a === M || null !== b && b === M;
	  }
	  function Ai(a, b) {
	    Jh = Ih = true;
	    var c = a.pending;
	    null === c ? b.next = b : (b.next = c.next, c.next = b);
	    a.pending = b;
	  }
	  function Bi(a, b, c) {
	    if (0 !== (c & 4194240)) {
	      var d = b.lanes;
	      d &= a.pendingLanes;
	      c |= d;
	      b.lanes = c;
	      Cc(a, c);
	    }
	  }
	  var Rh = {
	      readContext: eh,
	      useCallback: P,
	      useContext: P,
	      useEffect: P,
	      useImperativeHandle: P,
	      useInsertionEffect: P,
	      useLayoutEffect: P,
	      useMemo: P,
	      useReducer: P,
	      useRef: P,
	      useState: P,
	      useDebugValue: P,
	      useDeferredValue: P,
	      useTransition: P,
	      useMutableSource: P,
	      useSyncExternalStore: P,
	      useId: P,
	      unstable_isNewReconciler: false
	    },
	    Oh = {
	      readContext: eh,
	      useCallback: function (a, b) {
	        Th().memoizedState = [a, void 0 === b ? null : b];
	        return a;
	      },
	      useContext: eh,
	      useEffect: mi,
	      useImperativeHandle: function (a, b, c) {
	        c = null !== c && void 0 !== c ? c.concat([a]) : null;
	        return ki(4194308, 4, pi.bind(null, b, a), c);
	      },
	      useLayoutEffect: function (a, b) {
	        return ki(4194308, 4, a, b);
	      },
	      useInsertionEffect: function (a, b) {
	        return ki(4, 2, a, b);
	      },
	      useMemo: function (a, b) {
	        var c = Th();
	        b = void 0 === b ? null : b;
	        a = a();
	        c.memoizedState = [a, b];
	        return a;
	      },
	      useReducer: function (a, b, c) {
	        var d = Th();
	        b = void 0 !== c ? c(b) : b;
	        d.memoizedState = d.baseState = b;
	        a = {
	          pending: null,
	          interleaved: null,
	          lanes: 0,
	          dispatch: null,
	          lastRenderedReducer: a,
	          lastRenderedState: b
	        };
	        d.queue = a;
	        a = a.dispatch = xi.bind(null, M, a);
	        return [d.memoizedState, a];
	      },
	      useRef: function (a) {
	        var b = Th();
	        a = {
	          current: a
	        };
	        return b.memoizedState = a;
	      },
	      useState: hi,
	      useDebugValue: ri,
	      useDeferredValue: function (a) {
	        return Th().memoizedState = a;
	      },
	      useTransition: function () {
	        var a = hi(false),
	          b = a[0];
	        a = vi.bind(null, a[1]);
	        Th().memoizedState = a;
	        return [b, a];
	      },
	      useMutableSource: function () {},
	      useSyncExternalStore: function (a, b, c) {
	        var d = M,
	          e = Th();
	        if (I) {
	          if (void 0 === c) throw Error(p(407));
	          c = c();
	        } else {
	          c = b();
	          if (null === Q) throw Error(p(349));
	          0 !== (Hh & 30) || di(d, b, c);
	        }
	        e.memoizedState = c;
	        var f = {
	          value: c,
	          getSnapshot: b
	        };
	        e.queue = f;
	        mi(ai.bind(null, d, f, a), [a]);
	        d.flags |= 2048;
	        bi(9, ci.bind(null, d, f, c, b), void 0, null);
	        return c;
	      },
	      useId: function () {
	        var a = Th(),
	          b = Q.identifierPrefix;
	        if (I) {
	          var c = sg;
	          var d = rg;
	          c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
	          b = ":" + b + "R" + c;
	          c = Kh++;
	          0 < c && (b += "H" + c.toString(32));
	          b += ":";
	        } else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
	        return a.memoizedState = b;
	      },
	      unstable_isNewReconciler: false
	    },
	    Ph = {
	      readContext: eh,
	      useCallback: si,
	      useContext: eh,
	      useEffect: $h,
	      useImperativeHandle: qi,
	      useInsertionEffect: ni,
	      useLayoutEffect: oi,
	      useMemo: ti,
	      useReducer: Wh,
	      useRef: ji,
	      useState: function () {
	        return Wh(Vh);
	      },
	      useDebugValue: ri,
	      useDeferredValue: function (a) {
	        var b = Uh();
	        return ui(b, N.memoizedState, a);
	      },
	      useTransition: function () {
	        var a = Wh(Vh)[0],
	          b = Uh().memoizedState;
	        return [a, b];
	      },
	      useMutableSource: Yh,
	      useSyncExternalStore: Zh,
	      useId: wi,
	      unstable_isNewReconciler: false
	    },
	    Qh = {
	      readContext: eh,
	      useCallback: si,
	      useContext: eh,
	      useEffect: $h,
	      useImperativeHandle: qi,
	      useInsertionEffect: ni,
	      useLayoutEffect: oi,
	      useMemo: ti,
	      useReducer: Xh,
	      useRef: ji,
	      useState: function () {
	        return Xh(Vh);
	      },
	      useDebugValue: ri,
	      useDeferredValue: function (a) {
	        var b = Uh();
	        return null === N ? b.memoizedState = a : ui(b, N.memoizedState, a);
	      },
	      useTransition: function () {
	        var a = Xh(Vh)[0],
	          b = Uh().memoizedState;
	        return [a, b];
	      },
	      useMutableSource: Yh,
	      useSyncExternalStore: Zh,
	      useId: wi,
	      unstable_isNewReconciler: false
	    };
	  function Ci(a, b) {
	    if (a && a.defaultProps) {
	      b = A({}, b);
	      a = a.defaultProps;
	      for (var c in a) void 0 === b[c] && (b[c] = a[c]);
	      return b;
	    }
	    return b;
	  }
	  function Di(a, b, c, d) {
	    b = a.memoizedState;
	    c = c(d, b);
	    c = null === c || void 0 === c ? b : A({}, b, c);
	    a.memoizedState = c;
	    0 === a.lanes && (a.updateQueue.baseState = c);
	  }
	  var Ei = {
	    isMounted: function (a) {
	      return (a = a._reactInternals) ? Vb(a) === a : false;
	    },
	    enqueueSetState: function (a, b, c) {
	      a = a._reactInternals;
	      var d = R(),
	        e = yi(a),
	        f = mh(d, e);
	      f.payload = b;
	      void 0 !== c && null !== c && (f.callback = c);
	      b = nh(a, f, e);
	      null !== b && (gi(b, a, e, d), oh(b, a, e));
	    },
	    enqueueReplaceState: function (a, b, c) {
	      a = a._reactInternals;
	      var d = R(),
	        e = yi(a),
	        f = mh(d, e);
	      f.tag = 1;
	      f.payload = b;
	      void 0 !== c && null !== c && (f.callback = c);
	      b = nh(a, f, e);
	      null !== b && (gi(b, a, e, d), oh(b, a, e));
	    },
	    enqueueForceUpdate: function (a, b) {
	      a = a._reactInternals;
	      var c = R(),
	        d = yi(a),
	        e = mh(c, d);
	      e.tag = 2;
	      void 0 !== b && null !== b && (e.callback = b);
	      b = nh(a, e, d);
	      null !== b && (gi(b, a, d, c), oh(b, a, d));
	    }
	  };
	  function Fi(a, b, c, d, e, f, g) {
	    a = a.stateNode;
	    return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : true;
	  }
	  function Gi(a, b, c) {
	    var d = false,
	      e = Vf;
	    var f = b.contextType;
	    "object" === typeof f && null !== f ? f = eh(f) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
	    b = new b(c, f);
	    a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
	    b.updater = Ei;
	    a.stateNode = b;
	    b._reactInternals = a;
	    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
	    return b;
	  }
	  function Hi(a, b, c, d) {
	    a = b.state;
	    "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
	    "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
	    b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
	  }
	  function Ii(a, b, c, d) {
	    var e = a.stateNode;
	    e.props = c;
	    e.state = a.memoizedState;
	    e.refs = {};
	    kh(a);
	    var f = b.contextType;
	    "object" === typeof f && null !== f ? e.context = eh(f) : (f = Zf(b) ? Xf : H.current, e.context = Yf(a, f));
	    e.state = a.memoizedState;
	    f = b.getDerivedStateFromProps;
	    "function" === typeof f && (Di(a, b, f, c), e.state = a.memoizedState);
	    "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
	    "function" === typeof e.componentDidMount && (a.flags |= 4194308);
	  }
	  function Ji(a, b) {
	    try {
	      var c = "",
	        d = b;
	      do c += Pa(d), d = d.return; while (d);
	      var e = c;
	    } catch (f) {
	      e = "\nError generating stack: " + f.message + "\n" + f.stack;
	    }
	    return {
	      value: a,
	      source: b,
	      stack: e,
	      digest: null
	    };
	  }
	  function Ki(a, b, c) {
	    return {
	      value: a,
	      source: null,
	      stack: null != c ? c : null,
	      digest: null != b ? b : null
	    };
	  }
	  function Li(a, b) {
	    try {
	      console.error(b.value);
	    } catch (c) {
	      setTimeout(function () {
	        throw c;
	      });
	    }
	  }
	  var Mi = "function" === typeof WeakMap ? WeakMap : Map;
	  function Ni(a, b, c) {
	    c = mh(-1, c);
	    c.tag = 3;
	    c.payload = {
	      element: null
	    };
	    var d = b.value;
	    c.callback = function () {
	      Oi || (Oi = true, Pi = d);
	      Li(a, b);
	    };
	    return c;
	  }
	  function Qi(a, b, c) {
	    c = mh(-1, c);
	    c.tag = 3;
	    var d = a.type.getDerivedStateFromError;
	    if ("function" === typeof d) {
	      var e = b.value;
	      c.payload = function () {
	        return d(e);
	      };
	      c.callback = function () {
	        Li(a, b);
	      };
	    }
	    var f = a.stateNode;
	    null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
	      Li(a, b);
	      "function" !== typeof d && (null === Ri ? Ri = new Set([this]) : Ri.add(this));
	      var c = b.stack;
	      this.componentDidCatch(b.value, {
	        componentStack: null !== c ? c : ""
	      });
	    });
	    return c;
	  }
	  function Si(a, b, c) {
	    var d = a.pingCache;
	    if (null === d) {
	      d = a.pingCache = new Mi();
	      var e = new Set();
	      d.set(b, e);
	    } else e = d.get(b), void 0 === e && (e = new Set(), d.set(b, e));
	    e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
	  }
	  function Ui(a) {
	    do {
	      var b;
	      if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
	      if (b) return a;
	      a = a.return;
	    } while (null !== a);
	    return null;
	  }
	  function Vi(a, b, c, d, e) {
	    if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
	    a.flags |= 65536;
	    a.lanes = e;
	    return a;
	  }
	  var Wi = ua.ReactCurrentOwner,
	    dh = false;
	  function Xi(a, b, c, d) {
	    b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
	  }
	  function Yi(a, b, c, d, e) {
	    c = c.render;
	    var f = b.ref;
	    ch(b, e);
	    d = Nh(a, b, c, d, f, e);
	    c = Sh();
	    if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
	    I && c && vg(b);
	    b.flags |= 1;
	    Xi(a, b, d, e);
	    return b.child;
	  }
	  function $i(a, b, c, d, e) {
	    if (null === a) {
	      var f = c.type;
	      if ("function" === typeof f && !aj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, bj(a, b, f, d, e);
	      a = Rg(c.type, null, d, b, b.mode, e);
	      a.ref = b.ref;
	      a.return = b;
	      return b.child = a;
	    }
	    f = a.child;
	    if (0 === (a.lanes & e)) {
	      var g = f.memoizedProps;
	      c = c.compare;
	      c = null !== c ? c : Ie;
	      if (c(g, d) && a.ref === b.ref) return Zi(a, b, e);
	    }
	    b.flags |= 1;
	    a = Pg(f, d);
	    a.ref = b.ref;
	    a.return = b;
	    return b.child = a;
	  }
	  function bj(a, b, c, d, e) {
	    if (null !== a) {
	      var f = a.memoizedProps;
	      if (Ie(f, d) && a.ref === b.ref) if (dh = false, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = true);else return b.lanes = a.lanes, Zi(a, b, e);
	    }
	    return cj(a, b, c, d, e);
	  }
	  function dj(a, b, c) {
	    var d = b.pendingProps,
	      e = d.children,
	      f = null !== a ? a.memoizedState : null;
	    if ("hidden" === d.mode) {
	      if (0 === (b.mode & 1)) b.memoizedState = {
	        baseLanes: 0,
	        cachePool: null,
	        transitions: null
	      }, G(ej, fj), fj |= c;else {
	        if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
	          baseLanes: a,
	          cachePool: null,
	          transitions: null
	        }, b.updateQueue = null, G(ej, fj), fj |= a, null;
	        b.memoizedState = {
	          baseLanes: 0,
	          cachePool: null,
	          transitions: null
	        };
	        d = null !== f ? f.baseLanes : c;
	        G(ej, fj);
	        fj |= d;
	      }
	    } else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(ej, fj), fj |= d;
	    Xi(a, b, e, c);
	    return b.child;
	  }
	  function gj(a, b) {
	    var c = b.ref;
	    if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
	  }
	  function cj(a, b, c, d, e) {
	    var f = Zf(c) ? Xf : H.current;
	    f = Yf(b, f);
	    ch(b, e);
	    c = Nh(a, b, c, d, f, e);
	    d = Sh();
	    if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
	    I && d && vg(b);
	    b.flags |= 1;
	    Xi(a, b, c, e);
	    return b.child;
	  }
	  function hj(a, b, c, d, e) {
	    if (Zf(c)) {
	      var f = true;
	      cg(b);
	    } else f = false;
	    ch(b, e);
	    if (null === b.stateNode) ij(a, b), Gi(b, c, d), Ii(b, c, d, e), d = true;else if (null === a) {
	      var g = b.stateNode,
	        h = b.memoizedProps;
	      g.props = h;
	      var k = g.context,
	        l = c.contextType;
	      "object" === typeof l && null !== l ? l = eh(l) : (l = Zf(c) ? Xf : H.current, l = Yf(b, l));
	      var m = c.getDerivedStateFromProps,
	        q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
	      q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Hi(b, g, d, l);
	      jh = false;
	      var r = b.memoizedState;
	      g.state = r;
	      qh(b, d, g, e);
	      k = b.memoizedState;
	      h !== d || r !== k || Wf.current || jh ? ("function" === typeof m && (Di(b, c, m, d), k = b.memoizedState), (h = jh || Fi(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
	    } else {
	      g = b.stateNode;
	      lh(a, b);
	      h = b.memoizedProps;
	      l = b.type === b.elementType ? h : Ci(b.type, h);
	      g.props = l;
	      q = b.pendingProps;
	      r = g.context;
	      k = c.contextType;
	      "object" === typeof k && null !== k ? k = eh(k) : (k = Zf(c) ? Xf : H.current, k = Yf(b, k));
	      var y = c.getDerivedStateFromProps;
	      (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && Hi(b, g, d, k);
	      jh = false;
	      r = b.memoizedState;
	      g.state = r;
	      qh(b, d, g, e);
	      var n = b.memoizedState;
	      h !== q || r !== n || Wf.current || jh ? ("function" === typeof y && (Di(b, c, y, d), n = b.memoizedState), (l = jh || Fi(b, c, l, d, r, n, k) || false) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = false);
	    }
	    return jj(a, b, c, d, f, e);
	  }
	  function jj(a, b, c, d, e, f) {
	    gj(a, b);
	    var g = 0 !== (b.flags & 128);
	    if (!d && !g) return e && dg(b, c, false), Zi(a, b, f);
	    d = b.stateNode;
	    Wi.current = b;
	    var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
	    b.flags |= 1;
	    null !== a && g ? (b.child = Ug(b, a.child, null, f), b.child = Ug(b, null, h, f)) : Xi(a, b, h, f);
	    b.memoizedState = d.state;
	    e && dg(b, c, true);
	    return b.child;
	  }
	  function kj(a) {
	    var b = a.stateNode;
	    b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
	    yh(a, b.containerInfo);
	  }
	  function lj(a, b, c, d, e) {
	    Ig();
	    Jg(e);
	    b.flags |= 256;
	    Xi(a, b, c, d);
	    return b.child;
	  }
	  var mj = {
	    dehydrated: null,
	    treeContext: null,
	    retryLane: 0
	  };
	  function nj(a) {
	    return {
	      baseLanes: a,
	      cachePool: null,
	      transitions: null
	    };
	  }
	  function oj(a, b, c) {
	    var d = b.pendingProps,
	      e = L.current,
	      f = false,
	      g = 0 !== (b.flags & 128),
	      h;
	    (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
	    if (h) f = true, b.flags &= -129;else if (null === a || null !== a.memoizedState) e |= 1;
	    G(L, e & 1);
	    if (null === a) {
	      Eg(b);
	      a = b.memoizedState;
	      if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
	      g = d.children;
	      a = d.fallback;
	      return f ? (d = b.mode, f = b.child, g = {
	        mode: "hidden",
	        children: g
	      }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = pj(g, d, 0, null), a = Tg(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g);
	    }
	    e = a.memoizedState;
	    if (null !== e && (h = e.dehydrated, null !== h)) return rj(a, b, g, d, h, e, c);
	    if (f) {
	      f = d.fallback;
	      g = b.mode;
	      e = a.child;
	      h = e.sibling;
	      var k = {
	        mode: "hidden",
	        children: d.children
	      };
	      0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = Pg(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
	      null !== h ? f = Pg(h, f) : (f = Tg(f, g, c, null), f.flags |= 2);
	      f.return = b;
	      d.return = b;
	      d.sibling = f;
	      b.child = d;
	      d = f;
	      f = b.child;
	      g = a.child.memoizedState;
	      g = null === g ? nj(c) : {
	        baseLanes: g.baseLanes | c,
	        cachePool: null,
	        transitions: g.transitions
	      };
	      f.memoizedState = g;
	      f.childLanes = a.childLanes & ~c;
	      b.memoizedState = mj;
	      return d;
	    }
	    f = a.child;
	    a = f.sibling;
	    d = Pg(f, {
	      mode: "visible",
	      children: d.children
	    });
	    0 === (b.mode & 1) && (d.lanes = c);
	    d.return = b;
	    d.sibling = null;
	    null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
	    b.child = d;
	    b.memoizedState = null;
	    return d;
	  }
	  function qj(a, b) {
	    b = pj({
	      mode: "visible",
	      children: b
	    }, a.mode, 0, null);
	    b.return = a;
	    return a.child = b;
	  }
	  function sj(a, b, c, d) {
	    null !== d && Jg(d);
	    Ug(b, a.child, null, c);
	    a = qj(b, b.pendingProps.children);
	    a.flags |= 2;
	    b.memoizedState = null;
	    return a;
	  }
	  function rj(a, b, c, d, e, f, g) {
	    if (c) {
	      if (b.flags & 256) return b.flags &= -257, d = Ki(Error(p(422))), sj(a, b, g, d);
	      if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
	      f = d.fallback;
	      e = b.mode;
	      d = pj({
	        mode: "visible",
	        children: d.children
	      }, e, 0, null);
	      f = Tg(f, e, g, null);
	      f.flags |= 2;
	      d.return = b;
	      f.return = b;
	      d.sibling = f;
	      b.child = d;
	      0 !== (b.mode & 1) && Ug(b, a.child, null, g);
	      b.child.memoizedState = nj(g);
	      b.memoizedState = mj;
	      return f;
	    }
	    if (0 === (b.mode & 1)) return sj(a, b, g, null);
	    if ("$!" === e.data) {
	      d = e.nextSibling && e.nextSibling.dataset;
	      if (d) var h = d.dgst;
	      d = h;
	      f = Error(p(419));
	      d = Ki(f, d, void 0);
	      return sj(a, b, g, d);
	    }
	    h = 0 !== (g & a.childLanes);
	    if (dh || h) {
	      d = Q;
	      if (null !== d) {
	        switch (g & -g) {
	          case 4:
	            e = 2;
	            break;
	          case 16:
	            e = 8;
	            break;
	          case 64:
	          case 128:
	          case 256:
	          case 512:
	          case 1024:
	          case 2048:
	          case 4096:
	          case 8192:
	          case 16384:
	          case 32768:
	          case 65536:
	          case 131072:
	          case 262144:
	          case 524288:
	          case 1048576:
	          case 2097152:
	          case 4194304:
	          case 8388608:
	          case 16777216:
	          case 33554432:
	          case 67108864:
	            e = 32;
	            break;
	          case 536870912:
	            e = 268435456;
	            break;
	          default:
	            e = 0;
	        }
	        e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
	        0 !== e && e !== f.retryLane && (f.retryLane = e, ih(a, e), gi(d, a, e, -1));
	      }
	      tj();
	      d = Ki(Error(p(421)));
	      return sj(a, b, g, d);
	    }
	    if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e._reactRetry = b, null;
	    a = f.treeContext;
	    yg = Lf(e.nextSibling);
	    xg = b;
	    I = true;
	    zg = null;
	    null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
	    b = qj(b, d.children);
	    b.flags |= 4096;
	    return b;
	  }
	  function vj(a, b, c) {
	    a.lanes |= b;
	    var d = a.alternate;
	    null !== d && (d.lanes |= b);
	    bh(a.return, b, c);
	  }
	  function wj(a, b, c, d, e) {
	    var f = a.memoizedState;
	    null === f ? a.memoizedState = {
	      isBackwards: b,
	      rendering: null,
	      renderingStartTime: 0,
	      last: d,
	      tail: c,
	      tailMode: e
	    } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
	  }
	  function xj(a, b, c) {
	    var d = b.pendingProps,
	      e = d.revealOrder,
	      f = d.tail;
	    Xi(a, b, d.children, c);
	    d = L.current;
	    if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;else {
	      if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a;) {
	        if (13 === a.tag) null !== a.memoizedState && vj(a, c, b);else if (19 === a.tag) vj(a, c, b);else if (null !== a.child) {
	          a.child.return = a;
	          a = a.child;
	          continue;
	        }
	        if (a === b) break a;
	        for (; null === a.sibling;) {
	          if (null === a.return || a.return === b) break a;
	          a = a.return;
	        }
	        a.sibling.return = a.return;
	        a = a.sibling;
	      }
	      d &= 1;
	    }
	    G(L, d);
	    if (0 === (b.mode & 1)) b.memoizedState = null;else switch (e) {
	      case "forwards":
	        c = b.child;
	        for (e = null; null !== c;) a = c.alternate, null !== a && null === Ch(a) && (e = c), c = c.sibling;
	        c = e;
	        null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
	        wj(b, false, e, c, f);
	        break;
	      case "backwards":
	        c = null;
	        e = b.child;
	        for (b.child = null; null !== e;) {
	          a = e.alternate;
	          if (null !== a && null === Ch(a)) {
	            b.child = e;
	            break;
	          }
	          a = e.sibling;
	          e.sibling = c;
	          c = e;
	          e = a;
	        }
	        wj(b, true, c, null, f);
	        break;
	      case "together":
	        wj(b, false, null, null, void 0);
	        break;
	      default:
	        b.memoizedState = null;
	    }
	    return b.child;
	  }
	  function ij(a, b) {
	    0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
	  }
	  function Zi(a, b, c) {
	    null !== a && (b.dependencies = a.dependencies);
	    rh |= b.lanes;
	    if (0 === (c & b.childLanes)) return null;
	    if (null !== a && b.child !== a.child) throw Error(p(153));
	    if (null !== b.child) {
	      a = b.child;
	      c = Pg(a, a.pendingProps);
	      b.child = c;
	      for (c.return = b; null !== a.sibling;) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
	      c.sibling = null;
	    }
	    return b.child;
	  }
	  function yj(a, b, c) {
	    switch (b.tag) {
	      case 3:
	        kj(b);
	        Ig();
	        break;
	      case 5:
	        Ah(b);
	        break;
	      case 1:
	        Zf(b.type) && cg(b);
	        break;
	      case 4:
	        yh(b, b.stateNode.containerInfo);
	        break;
	      case 10:
	        var d = b.type._context,
	          e = b.memoizedProps.value;
	        G(Wg, d._currentValue);
	        d._currentValue = e;
	        break;
	      case 13:
	        d = b.memoizedState;
	        if (null !== d) {
	          if (null !== d.dehydrated) return G(L, L.current & 1), b.flags |= 128, null;
	          if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
	          G(L, L.current & 1);
	          a = Zi(a, b, c);
	          return null !== a ? a.sibling : null;
	        }
	        G(L, L.current & 1);
	        break;
	      case 19:
	        d = 0 !== (c & b.childLanes);
	        if (0 !== (a.flags & 128)) {
	          if (d) return xj(a, b, c);
	          b.flags |= 128;
	        }
	        e = b.memoizedState;
	        null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
	        G(L, L.current);
	        if (d) break;else return null;
	      case 22:
	      case 23:
	        return b.lanes = 0, dj(a, b, c);
	    }
	    return Zi(a, b, c);
	  }
	  var zj, Aj, Bj, Cj;
	  zj = function (a, b) {
	    for (var c = b.child; null !== c;) {
	      if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);else if (4 !== c.tag && null !== c.child) {
	        c.child.return = c;
	        c = c.child;
	        continue;
	      }
	      if (c === b) break;
	      for (; null === c.sibling;) {
	        if (null === c.return || c.return === b) return;
	        c = c.return;
	      }
	      c.sibling.return = c.return;
	      c = c.sibling;
	    }
	  };
	  Aj = function () {};
	  Bj = function (a, b, c, d) {
	    var e = a.memoizedProps;
	    if (e !== d) {
	      a = b.stateNode;
	      xh(uh.current);
	      var f = null;
	      switch (c) {
	        case "input":
	          e = Ya(a, e);
	          d = Ya(a, d);
	          f = [];
	          break;
	        case "select":
	          e = A({}, e, {
	            value: void 0
	          });
	          d = A({}, d, {
	            value: void 0
	          });
	          f = [];
	          break;
	        case "textarea":
	          e = gb(a, e);
	          d = gb(a, d);
	          f = [];
	          break;
	        default:
	          "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
	      }
	      ub(c, d);
	      var g;
	      c = null;
	      for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
	        var h = e[l];
	        for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
	      } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
	      for (l in d) {
	        var k = d[l];
	        h = null != e ? e[l] : void 0;
	        if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) {
	          if (h) {
	            for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
	            for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
	          } else c || (f || (f = []), f.push(l, c)), c = k;
	        } else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
	      }
	      c && (f = f || []).push("style", c);
	      var l = f;
	      if (b.updateQueue = l) b.flags |= 4;
	    }
	  };
	  Cj = function (a, b, c, d) {
	    c !== d && (b.flags |= 4);
	  };
	  function Dj(a, b) {
	    if (!I) switch (a.tailMode) {
	      case "hidden":
	        b = a.tail;
	        for (var c = null; null !== b;) null !== b.alternate && (c = b), b = b.sibling;
	        null === c ? a.tail = null : c.sibling = null;
	        break;
	      case "collapsed":
	        c = a.tail;
	        for (var d = null; null !== c;) null !== c.alternate && (d = c), c = c.sibling;
	        null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
	    }
	  }
	  function S(a) {
	    var b = null !== a.alternate && a.alternate.child === a.child,
	      c = 0,
	      d = 0;
	    if (b) for (var e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;else for (e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
	    a.subtreeFlags |= d;
	    a.childLanes = c;
	    return b;
	  }
	  function Ej(a, b, c) {
	    var d = b.pendingProps;
	    wg(b);
	    switch (b.tag) {
	      case 2:
	      case 16:
	      case 15:
	      case 0:
	      case 11:
	      case 7:
	      case 8:
	      case 12:
	      case 9:
	      case 14:
	        return S(b), null;
	      case 1:
	        return Zf(b.type) && $f(), S(b), null;
	      case 3:
	        d = b.stateNode;
	        zh();
	        E(Wf);
	        E(H);
	        Eh();
	        d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
	        if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
	        Aj(a, b);
	        S(b);
	        return null;
	      case 5:
	        Bh(b);
	        var e = xh(wh.current);
	        c = b.type;
	        if (null !== a && null != b.stateNode) Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);else {
	          if (!d) {
	            if (null === b.stateNode) throw Error(p(166));
	            S(b);
	            return null;
	          }
	          a = xh(uh.current);
	          if (Gg(b)) {
	            d = b.stateNode;
	            c = b.type;
	            var f = b.memoizedProps;
	            d[Of] = b;
	            d[Pf] = f;
	            a = 0 !== (b.mode & 1);
	            switch (c) {
	              case "dialog":
	                D("cancel", d);
	                D("close", d);
	                break;
	              case "iframe":
	              case "object":
	              case "embed":
	                D("load", d);
	                break;
	              case "video":
	              case "audio":
	                for (e = 0; e < lf.length; e++) D(lf[e], d);
	                break;
	              case "source":
	                D("error", d);
	                break;
	              case "img":
	              case "image":
	              case "link":
	                D("error", d);
	                D("load", d);
	                break;
	              case "details":
	                D("toggle", d);
	                break;
	              case "input":
	                Za(d, f);
	                D("invalid", d);
	                break;
	              case "select":
	                d._wrapperState = {
	                  wasMultiple: !!f.multiple
	                };
	                D("invalid", d);
	                break;
	              case "textarea":
	                hb(d, f), D("invalid", d);
	            }
	            ub(c, f);
	            e = null;
	            for (var g in f) if (f.hasOwnProperty(g)) {
	              var h = f[g];
	              "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
	            }
	            switch (c) {
	              case "input":
	                Va(d);
	                db(d, f, true);
	                break;
	              case "textarea":
	                Va(d);
	                jb(d);
	                break;
	              case "select":
	              case "option":
	                break;
	              default:
	                "function" === typeof f.onClick && (d.onclick = Bf);
	            }
	            d = e;
	            b.updateQueue = d;
	            null !== d && (b.flags |= 4);
	          } else {
	            g = 9 === e.nodeType ? e : e.ownerDocument;
	            "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
	            "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script>\x3c/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, {
	              is: d.is
	            }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
	            a[Of] = b;
	            a[Pf] = d;
	            zj(a, b, false, false);
	            b.stateNode = a;
	            a: {
	              g = vb(c, d);
	              switch (c) {
	                case "dialog":
	                  D("cancel", a);
	                  D("close", a);
	                  e = d;
	                  break;
	                case "iframe":
	                case "object":
	                case "embed":
	                  D("load", a);
	                  e = d;
	                  break;
	                case "video":
	                case "audio":
	                  for (e = 0; e < lf.length; e++) D(lf[e], a);
	                  e = d;
	                  break;
	                case "source":
	                  D("error", a);
	                  e = d;
	                  break;
	                case "img":
	                case "image":
	                case "link":
	                  D("error", a);
	                  D("load", a);
	                  e = d;
	                  break;
	                case "details":
	                  D("toggle", a);
	                  e = d;
	                  break;
	                case "input":
	                  Za(a, d);
	                  e = Ya(a, d);
	                  D("invalid", a);
	                  break;
	                case "option":
	                  e = d;
	                  break;
	                case "select":
	                  a._wrapperState = {
	                    wasMultiple: !!d.multiple
	                  };
	                  e = A({}, d, {
	                    value: void 0
	                  });
	                  D("invalid", a);
	                  break;
	                case "textarea":
	                  hb(a, d);
	                  e = gb(a, d);
	                  D("invalid", a);
	                  break;
	                default:
	                  e = d;
	              }
	              ub(c, e);
	              h = e;
	              for (f in h) if (h.hasOwnProperty(f)) {
	                var k = h[f];
	                "style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && ta(a, f, k, g));
	              }
	              switch (c) {
	                case "input":
	                  Va(a);
	                  db(a, d, false);
	                  break;
	                case "textarea":
	                  Va(a);
	                  jb(a);
	                  break;
	                case "option":
	                  null != d.value && a.setAttribute("value", "" + Sa(d.value));
	                  break;
	                case "select":
	                  a.multiple = !!d.multiple;
	                  f = d.value;
	                  null != f ? fb(a, !!d.multiple, f, false) : null != d.defaultValue && fb(a, !!d.multiple, d.defaultValue, true);
	                  break;
	                default:
	                  "function" === typeof e.onClick && (a.onclick = Bf);
	              }
	              switch (c) {
	                case "button":
	                case "input":
	                case "select":
	                case "textarea":
	                  d = !!d.autoFocus;
	                  break a;
	                case "img":
	                  d = true;
	                  break a;
	                default:
	                  d = false;
	              }
	            }
	            d && (b.flags |= 4);
	          }
	          null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
	        }
	        S(b);
	        return null;
	      case 6:
	        if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d);else {
	          if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
	          c = xh(wh.current);
	          xh(uh.current);
	          if (Gg(b)) {
	            d = b.stateNode;
	            c = b.memoizedProps;
	            d[Of] = b;
	            if (f = d.nodeValue !== c) if (a = xg, null !== a) switch (a.tag) {
	              case 3:
	                Af(d.nodeValue, c, 0 !== (a.mode & 1));
	                break;
	              case 5:
	                true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
	            }
	            f && (b.flags |= 4);
	          } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
	        }
	        S(b);
	        return null;
	      case 13:
	        E(L);
	        d = b.memoizedState;
	        if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
	          if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f = false;else if (f = Gg(b), null !== d && null !== d.dehydrated) {
	            if (null === a) {
	              if (!f) throw Error(p(318));
	              f = b.memoizedState;
	              f = null !== f ? f.dehydrated : null;
	              if (!f) throw Error(p(317));
	              f[Of] = b;
	            } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
	            S(b);
	            f = false;
	          } else null !== zg && (Fj(zg), zg = null), f = true;
	          if (!f) return b.flags & 65536 ? b : null;
	        }
	        if (0 !== (b.flags & 128)) return b.lanes = c, b;
	        d = null !== d;
	        d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
	        null !== b.updateQueue && (b.flags |= 4);
	        S(b);
	        return null;
	      case 4:
	        return zh(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
	      case 10:
	        return ah(b.type._context), S(b), null;
	      case 17:
	        return Zf(b.type) && $f(), S(b), null;
	      case 19:
	        E(L);
	        f = b.memoizedState;
	        if (null === f) return S(b), null;
	        d = 0 !== (b.flags & 128);
	        g = f.rendering;
	        if (null === g) {
	          if (d) Dj(f, false);else {
	            if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a;) {
	              g = Ch(a);
	              if (null !== g) {
	                b.flags |= 128;
	                Dj(f, false);
	                d = g.updateQueue;
	                null !== d && (b.updateQueue = d, b.flags |= 4);
	                b.subtreeFlags = 0;
	                d = c;
	                for (c = b.child; null !== c;) f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : {
	                  lanes: a.lanes,
	                  firstContext: a.firstContext
	                }), c = c.sibling;
	                G(L, L.current & 1 | 2);
	                return b.child;
	              }
	              a = a.sibling;
	            }
	            null !== f.tail && B() > Gj && (b.flags |= 128, d = true, Dj(f, false), b.lanes = 4194304);
	          }
	        } else {
	          if (!d) if (a = Ch(g), null !== a) {
	            if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f, true), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I) return S(b), null;
	          } else 2 * B() - f.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d = true, Dj(f, false), b.lanes = 4194304);
	          f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
	        }
	        if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), b.sibling = null, c = L.current, G(L, d ? c & 1 | 2 : c & 1), b;
	        S(b);
	        return null;
	      case 22:
	      case 23:
	        return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
	      case 24:
	        return null;
	      case 25:
	        return null;
	    }
	    throw Error(p(156, b.tag));
	  }
	  function Ij(a, b) {
	    wg(b);
	    switch (b.tag) {
	      case 1:
	        return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
	      case 3:
	        return zh(), E(Wf), E(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
	      case 5:
	        return Bh(b), null;
	      case 13:
	        E(L);
	        a = b.memoizedState;
	        if (null !== a && null !== a.dehydrated) {
	          if (null === b.alternate) throw Error(p(340));
	          Ig();
	        }
	        a = b.flags;
	        return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
	      case 19:
	        return E(L), null;
	      case 4:
	        return zh(), null;
	      case 10:
	        return ah(b.type._context), null;
	      case 22:
	      case 23:
	        return Hj(), null;
	      case 24:
	        return null;
	      default:
	        return null;
	    }
	  }
	  var Jj = false,
	    U = false,
	    Kj = "function" === typeof WeakSet ? WeakSet : Set,
	    V = null;
	  function Lj(a, b) {
	    var c = a.ref;
	    if (null !== c) if ("function" === typeof c) try {
	      c(null);
	    } catch (d) {
	      W(a, b, d);
	    } else c.current = null;
	  }
	  function Mj(a, b, c) {
	    try {
	      c();
	    } catch (d) {
	      W(a, b, d);
	    }
	  }
	  var Nj = false;
	  function Oj(a, b) {
	    Cf = dd;
	    a = Me();
	    if (Ne(a)) {
	      if ("selectionStart" in a) var c = {
	        start: a.selectionStart,
	        end: a.selectionEnd
	      };else a: {
	        c = (c = a.ownerDocument) && c.defaultView || window;
	        var d = c.getSelection && c.getSelection();
	        if (d && 0 !== d.rangeCount) {
	          c = d.anchorNode;
	          var e = d.anchorOffset,
	            f = d.focusNode;
	          d = d.focusOffset;
	          try {
	            c.nodeType, f.nodeType;
	          } catch (F) {
	            c = null;
	            break a;
	          }
	          var g = 0,
	            h = -1,
	            k = -1,
	            l = 0,
	            m = 0,
	            q = a,
	            r = null;
	          b: for (;;) {
	            for (var y;;) {
	              q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
	              q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
	              3 === q.nodeType && (g += q.nodeValue.length);
	              if (null === (y = q.firstChild)) break;
	              r = q;
	              q = y;
	            }
	            for (;;) {
	              if (q === a) break b;
	              r === c && ++l === e && (h = g);
	              r === f && ++m === d && (k = g);
	              if (null !== (y = q.nextSibling)) break;
	              q = r;
	              r = q.parentNode;
	            }
	            q = y;
	          }
	          c = -1 === h || -1 === k ? null : {
	            start: h,
	            end: k
	          };
	        } else c = null;
	      }
	      c = c || {
	        start: 0,
	        end: 0
	      };
	    } else c = null;
	    Df = {
	      focusedElem: a,
	      selectionRange: c
	    };
	    dd = false;
	    for (V = b; null !== V;) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;else for (; null !== V;) {
	      b = V;
	      try {
	        var n = b.alternate;
	        if (0 !== (b.flags & 1024)) switch (b.tag) {
	          case 0:
	          case 11:
	          case 15:
	            break;
	          case 1:
	            if (null !== n) {
	              var t = n.memoizedProps,
	                J = n.memoizedState,
	                x = b.stateNode,
	                w = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Ci(b.type, t), J);
	              x.__reactInternalSnapshotBeforeUpdate = w;
	            }
	            break;
	          case 3:
	            var u = b.stateNode.containerInfo;
	            1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
	            break;
	          case 5:
	          case 6:
	          case 4:
	          case 17:
	            break;
	          default:
	            throw Error(p(163));
	        }
	      } catch (F) {
	        W(b, b.return, F);
	      }
	      a = b.sibling;
	      if (null !== a) {
	        a.return = b.return;
	        V = a;
	        break;
	      }
	      V = b.return;
	    }
	    n = Nj;
	    Nj = false;
	    return n;
	  }
	  function Pj(a, b, c) {
	    var d = b.updateQueue;
	    d = null !== d ? d.lastEffect : null;
	    if (null !== d) {
	      var e = d = d.next;
	      do {
	        if ((e.tag & a) === a) {
	          var f = e.destroy;
	          e.destroy = void 0;
	          void 0 !== f && Mj(b, c, f);
	        }
	        e = e.next;
	      } while (e !== d);
	    }
	  }
	  function Qj(a, b) {
	    b = b.updateQueue;
	    b = null !== b ? b.lastEffect : null;
	    if (null !== b) {
	      var c = b = b.next;
	      do {
	        if ((c.tag & a) === a) {
	          var d = c.create;
	          c.destroy = d();
	        }
	        c = c.next;
	      } while (c !== b);
	    }
	  }
	  function Rj(a) {
	    var b = a.ref;
	    if (null !== b) {
	      var c = a.stateNode;
	      switch (a.tag) {
	        case 5:
	          a = c;
	          break;
	        default:
	          a = c;
	      }
	      "function" === typeof b ? b(a) : b.current = a;
	    }
	  }
	  function Sj(a) {
	    var b = a.alternate;
	    null !== b && (a.alternate = null, Sj(b));
	    a.child = null;
	    a.deletions = null;
	    a.sibling = null;
	    5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
	    a.stateNode = null;
	    a.return = null;
	    a.dependencies = null;
	    a.memoizedProps = null;
	    a.memoizedState = null;
	    a.pendingProps = null;
	    a.stateNode = null;
	    a.updateQueue = null;
	  }
	  function Tj(a) {
	    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
	  }
	  function Uj(a) {
	    a: for (;;) {
	      for (; null === a.sibling;) {
	        if (null === a.return || Tj(a.return)) return null;
	        a = a.return;
	      }
	      a.sibling.return = a.return;
	      for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag;) {
	        if (a.flags & 2) continue a;
	        if (null === a.child || 4 === a.tag) continue a;else a.child.return = a, a = a.child;
	      }
	      if (!(a.flags & 2)) return a.stateNode;
	    }
	  }
	  function Vj(a, b, c) {
	    var d = a.tag;
	    if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a;) Vj(a, b, c), a = a.sibling;
	  }
	  function Wj(a, b, c) {
	    var d = a.tag;
	    if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a;) Wj(a, b, c), a = a.sibling;
	  }
	  var X = null,
	    Xj = false;
	  function Yj(a, b, c) {
	    for (c = c.child; null !== c;) Zj(a, b, c), c = c.sibling;
	  }
	  function Zj(a, b, c) {
	    if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
	      lc.onCommitFiberUnmount(kc, c);
	    } catch (h) {}
	    switch (c.tag) {
	      case 5:
	        U || Lj(c, b);
	      case 6:
	        var d = X,
	          e = Xj;
	        X = null;
	        Yj(a, b, c);
	        X = d;
	        Xj = e;
	        null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
	        break;
	      case 18:
	        null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
	        break;
	      case 4:
	        d = X;
	        e = Xj;
	        X = c.stateNode.containerInfo;
	        Xj = true;
	        Yj(a, b, c);
	        X = d;
	        Xj = e;
	        break;
	      case 0:
	      case 11:
	      case 14:
	      case 15:
	        if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
	          e = d = d.next;
	          do {
	            var f = e,
	              g = f.destroy;
	            f = f.tag;
	            void 0 !== g && (0 !== (f & 2) ? Mj(c, b, g) : 0 !== (f & 4) && Mj(c, b, g));
	            e = e.next;
	          } while (e !== d);
	        }
	        Yj(a, b, c);
	        break;
	      case 1:
	        if (!U && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
	          d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
	        } catch (h) {
	          W(c, b, h);
	        }
	        Yj(a, b, c);
	        break;
	      case 21:
	        Yj(a, b, c);
	        break;
	      case 22:
	        c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Yj(a, b, c), U = d) : Yj(a, b, c);
	        break;
	      default:
	        Yj(a, b, c);
	    }
	  }
	  function ak(a) {
	    var b = a.updateQueue;
	    if (null !== b) {
	      a.updateQueue = null;
	      var c = a.stateNode;
	      null === c && (c = a.stateNode = new Kj());
	      b.forEach(function (b) {
	        var d = bk.bind(null, a, b);
	        c.has(b) || (c.add(b), b.then(d, d));
	      });
	    }
	  }
	  function ck(a, b) {
	    var c = b.deletions;
	    if (null !== c) for (var d = 0; d < c.length; d++) {
	      var e = c[d];
	      try {
	        var f = a,
	          g = b,
	          h = g;
	        a: for (; null !== h;) {
	          switch (h.tag) {
	            case 5:
	              X = h.stateNode;
	              Xj = !1;
	              break a;
	            case 3:
	              X = h.stateNode.containerInfo;
	              Xj = !0;
	              break a;
	            case 4:
	              X = h.stateNode.containerInfo;
	              Xj = !0;
	              break a;
	          }
	          h = h.return;
	        }
	        if (null === X) throw Error(p(160));
	        Zj(f, g, e);
	        X = null;
	        Xj = !1;
	        var k = e.alternate;
	        null !== k && (k.return = null);
	        e.return = null;
	      } catch (l) {
	        W(e, b, l);
	      }
	    }
	    if (b.subtreeFlags & 12854) for (b = b.child; null !== b;) dk(b, a), b = b.sibling;
	  }
	  function dk(a, b) {
	    var c = a.alternate,
	      d = a.flags;
	    switch (a.tag) {
	      case 0:
	      case 11:
	      case 14:
	      case 15:
	        ck(b, a);
	        ek(a);
	        if (d & 4) {
	          try {
	            Pj(3, a, a.return), Qj(3, a);
	          } catch (t) {
	            W(a, a.return, t);
	          }
	          try {
	            Pj(5, a, a.return);
	          } catch (t) {
	            W(a, a.return, t);
	          }
	        }
	        break;
	      case 1:
	        ck(b, a);
	        ek(a);
	        d & 512 && null !== c && Lj(c, c.return);
	        break;
	      case 5:
	        ck(b, a);
	        ek(a);
	        d & 512 && null !== c && Lj(c, c.return);
	        if (a.flags & 32) {
	          var e = a.stateNode;
	          try {
	            ob(e, "");
	          } catch (t) {
	            W(a, a.return, t);
	          }
	        }
	        if (d & 4 && (e = a.stateNode, null != e)) {
	          var f = a.memoizedProps,
	            g = null !== c ? c.memoizedProps : f,
	            h = a.type,
	            k = a.updateQueue;
	          a.updateQueue = null;
	          if (null !== k) try {
	            "input" === h && "radio" === f.type && null != f.name && ab(e, f);
	            vb(h, g);
	            var l = vb(h, f);
	            for (g = 0; g < k.length; g += 2) {
	              var m = k[g],
	                q = k[g + 1];
	              "style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l);
	            }
	            switch (h) {
	              case "input":
	                bb(e, f);
	                break;
	              case "textarea":
	                ib(e, f);
	                break;
	              case "select":
	                var r = e._wrapperState.wasMultiple;
	                e._wrapperState.wasMultiple = !!f.multiple;
	                var y = f.value;
	                null != y ? fb(e, !!f.multiple, y, !1) : r !== !!f.multiple && (null != f.defaultValue ? fb(e, !!f.multiple, f.defaultValue, !0) : fb(e, !!f.multiple, f.multiple ? [] : "", !1));
	            }
	            e[Pf] = f;
	          } catch (t) {
	            W(a, a.return, t);
	          }
	        }
	        break;
	      case 6:
	        ck(b, a);
	        ek(a);
	        if (d & 4) {
	          if (null === a.stateNode) throw Error(p(162));
	          e = a.stateNode;
	          f = a.memoizedProps;
	          try {
	            e.nodeValue = f;
	          } catch (t) {
	            W(a, a.return, t);
	          }
	        }
	        break;
	      case 3:
	        ck(b, a);
	        ek(a);
	        if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
	          bd(b.containerInfo);
	        } catch (t) {
	          W(a, a.return, t);
	        }
	        break;
	      case 4:
	        ck(b, a);
	        ek(a);
	        break;
	      case 13:
	        ck(b, a);
	        ek(a);
	        e = a.child;
	        e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
	        d & 4 && ak(a);
	        break;
	      case 22:
	        m = null !== c && null !== c.memoizedState;
	        a.mode & 1 ? (U = (l = U) || m, ck(b, a), U = l) : ck(b, a);
	        ek(a);
	        if (d & 8192) {
	          l = null !== a.memoizedState;
	          if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for (V = a, m = a.child; null !== m;) {
	            for (q = V = m; null !== V;) {
	              r = V;
	              y = r.child;
	              switch (r.tag) {
	                case 0:
	                case 11:
	                case 14:
	                case 15:
	                  Pj(4, r, r.return);
	                  break;
	                case 1:
	                  Lj(r, r.return);
	                  var n = r.stateNode;
	                  if ("function" === typeof n.componentWillUnmount) {
	                    d = r;
	                    c = r.return;
	                    try {
	                      b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
	                    } catch (t) {
	                      W(d, c, t);
	                    }
	                  }
	                  break;
	                case 5:
	                  Lj(r, r.return);
	                  break;
	                case 22:
	                  if (null !== r.memoizedState) {
	                    gk(q);
	                    continue;
	                  }
	              }
	              null !== y ? (y.return = r, V = y) : gk(q);
	            }
	            m = m.sibling;
	          }
	          a: for (m = null, q = a;;) {
	            if (5 === q.tag) {
	              if (null === m) {
	                m = q;
	                try {
	                  e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
	                } catch (t) {
	                  W(a, a.return, t);
	                }
	              }
	            } else if (6 === q.tag) {
	              if (null === m) try {
	                q.stateNode.nodeValue = l ? "" : q.memoizedProps;
	              } catch (t) {
	                W(a, a.return, t);
	              }
	            } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
	              q.child.return = q;
	              q = q.child;
	              continue;
	            }
	            if (q === a) break a;
	            for (; null === q.sibling;) {
	              if (null === q.return || q.return === a) break a;
	              m === q && (m = null);
	              q = q.return;
	            }
	            m === q && (m = null);
	            q.sibling.return = q.return;
	            q = q.sibling;
	          }
	        }
	        break;
	      case 19:
	        ck(b, a);
	        ek(a);
	        d & 4 && ak(a);
	        break;
	      case 21:
	        break;
	      default:
	        ck(b, a), ek(a);
	    }
	  }
	  function ek(a) {
	    var b = a.flags;
	    if (b & 2) {
	      try {
	        a: {
	          for (var c = a.return; null !== c;) {
	            if (Tj(c)) {
	              var d = c;
	              break a;
	            }
	            c = c.return;
	          }
	          throw Error(p(160));
	        }
	        switch (d.tag) {
	          case 5:
	            var e = d.stateNode;
	            d.flags & 32 && (ob(e, ""), d.flags &= -33);
	            var f = Uj(a);
	            Wj(a, f, e);
	            break;
	          case 3:
	          case 4:
	            var g = d.stateNode.containerInfo,
	              h = Uj(a);
	            Vj(a, h, g);
	            break;
	          default:
	            throw Error(p(161));
	        }
	      } catch (k) {
	        W(a, a.return, k);
	      }
	      a.flags &= -3;
	    }
	    b & 4096 && (a.flags &= -4097);
	  }
	  function hk(a, b, c) {
	    V = a;
	    ik(a);
	  }
	  function ik(a, b, c) {
	    for (var d = 0 !== (a.mode & 1); null !== V;) {
	      var e = V,
	        f = e.child;
	      if (22 === e.tag && d) {
	        var g = null !== e.memoizedState || Jj;
	        if (!g) {
	          var h = e.alternate,
	            k = null !== h && null !== h.memoizedState || U;
	          h = Jj;
	          var l = U;
	          Jj = g;
	          if ((U = k) && !l) for (V = e; null !== V;) g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k ? (k.return = g, V = k) : jk(e);
	          for (; null !== f;) V = f, ik(f), f = f.sibling;
	          V = e;
	          Jj = h;
	          U = l;
	        }
	        kk(a);
	      } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V = f) : kk(a);
	    }
	  }
	  function kk(a) {
	    for (; null !== V;) {
	      var b = V;
	      if (0 !== (b.flags & 8772)) {
	        var c = b.alternate;
	        try {
	          if (0 !== (b.flags & 8772)) switch (b.tag) {
	            case 0:
	            case 11:
	            case 15:
	              U || Qj(5, b);
	              break;
	            case 1:
	              var d = b.stateNode;
	              if (b.flags & 4 && !U) if (null === c) d.componentDidMount();else {
	                var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
	                d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
	              }
	              var f = b.updateQueue;
	              null !== f && sh(b, f, d);
	              break;
	            case 3:
	              var g = b.updateQueue;
	              if (null !== g) {
	                c = null;
	                if (null !== b.child) switch (b.child.tag) {
	                  case 5:
	                    c = b.child.stateNode;
	                    break;
	                  case 1:
	                    c = b.child.stateNode;
	                }
	                sh(b, g, c);
	              }
	              break;
	            case 5:
	              var h = b.stateNode;
	              if (null === c && b.flags & 4) {
	                c = h;
	                var k = b.memoizedProps;
	                switch (b.type) {
	                  case "button":
	                  case "input":
	                  case "select":
	                  case "textarea":
	                    k.autoFocus && c.focus();
	                    break;
	                  case "img":
	                    k.src && (c.src = k.src);
	                }
	              }
	              break;
	            case 6:
	              break;
	            case 4:
	              break;
	            case 12:
	              break;
	            case 13:
	              if (null === b.memoizedState) {
	                var l = b.alternate;
	                if (null !== l) {
	                  var m = l.memoizedState;
	                  if (null !== m) {
	                    var q = m.dehydrated;
	                    null !== q && bd(q);
	                  }
	                }
	              }
	              break;
	            case 19:
	            case 17:
	            case 21:
	            case 22:
	            case 23:
	            case 25:
	              break;
	            default:
	              throw Error(p(163));
	          }
	          U || b.flags & 512 && Rj(b);
	        } catch (r) {
	          W(b, b.return, r);
	        }
	      }
	      if (b === a) {
	        V = null;
	        break;
	      }
	      c = b.sibling;
	      if (null !== c) {
	        c.return = b.return;
	        V = c;
	        break;
	      }
	      V = b.return;
	    }
	  }
	  function gk(a) {
	    for (; null !== V;) {
	      var b = V;
	      if (b === a) {
	        V = null;
	        break;
	      }
	      var c = b.sibling;
	      if (null !== c) {
	        c.return = b.return;
	        V = c;
	        break;
	      }
	      V = b.return;
	    }
	  }
	  function jk(a) {
	    for (; null !== V;) {
	      var b = V;
	      try {
	        switch (b.tag) {
	          case 0:
	          case 11:
	          case 15:
	            var c = b.return;
	            try {
	              Qj(4, b);
	            } catch (k) {
	              W(b, c, k);
	            }
	            break;
	          case 1:
	            var d = b.stateNode;
	            if ("function" === typeof d.componentDidMount) {
	              var e = b.return;
	              try {
	                d.componentDidMount();
	              } catch (k) {
	                W(b, e, k);
	              }
	            }
	            var f = b.return;
	            try {
	              Rj(b);
	            } catch (k) {
	              W(b, f, k);
	            }
	            break;
	          case 5:
	            var g = b.return;
	            try {
	              Rj(b);
	            } catch (k) {
	              W(b, g, k);
	            }
	        }
	      } catch (k) {
	        W(b, b.return, k);
	      }
	      if (b === a) {
	        V = null;
	        break;
	      }
	      var h = b.sibling;
	      if (null !== h) {
	        h.return = b.return;
	        V = h;
	        break;
	      }
	      V = b.return;
	    }
	  }
	  var lk = Math.ceil,
	    mk = ua.ReactCurrentDispatcher,
	    nk = ua.ReactCurrentOwner,
	    ok = ua.ReactCurrentBatchConfig,
	    K = 0,
	    Q = null,
	    Y = null,
	    Z = 0,
	    fj = 0,
	    ej = Uf(0),
	    T = 0,
	    pk = null,
	    rh = 0,
	    qk = 0,
	    rk = 0,
	    sk = null,
	    tk = null,
	    fk = 0,
	    Gj = Infinity,
	    uk = null,
	    Oi = false,
	    Pi = null,
	    Ri = null,
	    vk = false,
	    wk = null,
	    xk = 0,
	    yk = 0,
	    zk = null,
	    Ak = -1,
	    Bk = 0;
	  function R() {
	    return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
	  }
	  function yi(a) {
	    if (0 === (a.mode & 1)) return 1;
	    if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
	    if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
	    a = C;
	    if (0 !== a) return a;
	    a = window.event;
	    a = void 0 === a ? 16 : jd(a.type);
	    return a;
	  }
	  function gi(a, b, c, d) {
	    if (50 < yk) throw yk = 0, zk = null, Error(p(185));
	    Ac(a, c, d);
	    if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)), Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
	  }
	  function Dk(a, b) {
	    var c = a.callbackNode;
	    wc(a, b);
	    var d = uc(a, a === Q ? Z : 0);
	    if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;else if (b = d & -d, a.callbackPriority !== b) {
	      null != c && bc(c);
	      if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function () {
	        0 === (K & 6) && jg();
	      }), c = null;else {
	        switch (Dc(d)) {
	          case 1:
	            c = fc;
	            break;
	          case 4:
	            c = gc;
	            break;
	          case 16:
	            c = hc;
	            break;
	          case 536870912:
	            c = jc;
	            break;
	          default:
	            c = hc;
	        }
	        c = Fk(c, Gk.bind(null, a));
	      }
	      a.callbackPriority = b;
	      a.callbackNode = c;
	    }
	  }
	  function Gk(a, b) {
	    Ak = -1;
	    Bk = 0;
	    if (0 !== (K & 6)) throw Error(p(327));
	    var c = a.callbackNode;
	    if (Hk() && a.callbackNode !== c) return null;
	    var d = uc(a, a === Q ? Z : 0);
	    if (0 === d) return null;
	    if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d);else {
	      b = d;
	      var e = K;
	      K |= 2;
	      var f = Jk();
	      if (Q !== a || Z !== b) uk = null, Gj = B() + 500, Kk(a, b);
	      do try {
	        Lk();
	        break;
	      } catch (h) {
	        Mk(a, h);
	      } while (1);
	      $g();
	      mk.current = f;
	      K = e;
	      null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
	    }
	    if (0 !== b) {
	      2 === b && (e = xc(a), 0 !== e && (d = e, b = Nk(a, e)));
	      if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
	      if (6 === b) Ck(a, d);else {
	        e = a.current.alternate;
	        if (0 === (d & 30) && !Ok(e) && (b = Ik(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, b = Nk(a, f))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
	        a.finishedWork = e;
	        a.finishedLanes = d;
	        switch (b) {
	          case 0:
	          case 1:
	            throw Error(p(345));
	          case 2:
	            Pk(a, tk, uk);
	            break;
	          case 3:
	            Ck(a, d);
	            if ((d & 130023424) === d && (b = fk + 500 - B(), 10 < b)) {
	              if (0 !== uc(a, 0)) break;
	              e = a.suspendedLanes;
	              if ((e & d) !== d) {
	                R();
	                a.pingedLanes |= a.suspendedLanes & e;
	                break;
	              }
	              a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
	              break;
	            }
	            Pk(a, tk, uk);
	            break;
	          case 4:
	            Ck(a, d);
	            if ((d & 4194240) === d) break;
	            b = a.eventTimes;
	            for (e = -1; 0 < d;) {
	              var g = 31 - oc(d);
	              f = 1 << g;
	              g = b[g];
	              g > e && (e = g);
	              d &= ~f;
	            }
	            d = e;
	            d = B() - d;
	            d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3E3 > d ? 3E3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
	            if (10 < d) {
	              a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
	              break;
	            }
	            Pk(a, tk, uk);
	            break;
	          case 5:
	            Pk(a, tk, uk);
	            break;
	          default:
	            throw Error(p(329));
	        }
	      }
	    }
	    Dk(a, B());
	    return a.callbackNode === c ? Gk.bind(null, a) : null;
	  }
	  function Nk(a, b) {
	    var c = sk;
	    a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
	    a = Ik(a, b);
	    2 !== a && (b = tk, tk = c, null !== b && Fj(b));
	    return a;
	  }
	  function Fj(a) {
	    null === tk ? tk = a : tk.push.apply(tk, a);
	  }
	  function Ok(a) {
	    for (var b = a;;) {
	      if (b.flags & 16384) {
	        var c = b.updateQueue;
	        if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
	          var e = c[d],
	            f = e.getSnapshot;
	          e = e.value;
	          try {
	            if (!He(f(), e)) return !1;
	          } catch (g) {
	            return false;
	          }
	        }
	      }
	      c = b.child;
	      if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;else {
	        if (b === a) break;
	        for (; null === b.sibling;) {
	          if (null === b.return || b.return === a) return true;
	          b = b.return;
	        }
	        b.sibling.return = b.return;
	        b = b.sibling;
	      }
	    }
	    return true;
	  }
	  function Ck(a, b) {
	    b &= ~rk;
	    b &= ~qk;
	    a.suspendedLanes |= b;
	    a.pingedLanes &= ~b;
	    for (a = a.expirationTimes; 0 < b;) {
	      var c = 31 - oc(b),
	        d = 1 << c;
	      a[c] = -1;
	      b &= ~d;
	    }
	  }
	  function Ek(a) {
	    if (0 !== (K & 6)) throw Error(p(327));
	    Hk();
	    var b = uc(a, 0);
	    if (0 === (b & 1)) return Dk(a, B()), null;
	    var c = Ik(a, b);
	    if (0 !== a.tag && 2 === c) {
	      var d = xc(a);
	      0 !== d && (b = d, c = Nk(a, d));
	    }
	    if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
	    if (6 === c) throw Error(p(345));
	    a.finishedWork = a.current.alternate;
	    a.finishedLanes = b;
	    Pk(a, tk, uk);
	    Dk(a, B());
	    return null;
	  }
	  function Qk(a, b) {
	    var c = K;
	    K |= 1;
	    try {
	      return a(b);
	    } finally {
	      K = c, 0 === K && (Gj = B() + 500, fg && jg());
	    }
	  }
	  function Rk(a) {
	    null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
	    var b = K;
	    K |= 1;
	    var c = ok.transition,
	      d = C;
	    try {
	      if (ok.transition = null, C = 1, a) return a();
	    } finally {
	      C = d, ok.transition = c, K = b, 0 === (K & 6) && jg();
	    }
	  }
	  function Hj() {
	    fj = ej.current;
	    E(ej);
	  }
	  function Kk(a, b) {
	    a.finishedWork = null;
	    a.finishedLanes = 0;
	    var c = a.timeoutHandle;
	    -1 !== c && (a.timeoutHandle = -1, Gf(c));
	    if (null !== Y) for (c = Y.return; null !== c;) {
	      var d = c;
	      wg(d);
	      switch (d.tag) {
	        case 1:
	          d = d.type.childContextTypes;
	          null !== d && void 0 !== d && $f();
	          break;
	        case 3:
	          zh();
	          E(Wf);
	          E(H);
	          Eh();
	          break;
	        case 5:
	          Bh(d);
	          break;
	        case 4:
	          zh();
	          break;
	        case 13:
	          E(L);
	          break;
	        case 19:
	          E(L);
	          break;
	        case 10:
	          ah(d.type._context);
	          break;
	        case 22:
	        case 23:
	          Hj();
	      }
	      c = c.return;
	    }
	    Q = a;
	    Y = a = Pg(a.current, null);
	    Z = fj = b;
	    T = 0;
	    pk = null;
	    rk = qk = rh = 0;
	    tk = sk = null;
	    if (null !== fh) {
	      for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
	        c.interleaved = null;
	        var e = d.next,
	          f = c.pending;
	        if (null !== f) {
	          var g = f.next;
	          f.next = e;
	          d.next = g;
	        }
	        c.pending = d;
	      }
	      fh = null;
	    }
	    return a;
	  }
	  function Mk(a, b) {
	    do {
	      var c = Y;
	      try {
	        $g();
	        Fh.current = Rh;
	        if (Ih) {
	          for (var d = M.memoizedState; null !== d;) {
	            var e = d.queue;
	            null !== e && (e.pending = null);
	            d = d.next;
	          }
	          Ih = !1;
	        }
	        Hh = 0;
	        O = N = M = null;
	        Jh = !1;
	        Kh = 0;
	        nk.current = null;
	        if (null === c || null === c.return) {
	          T = 1;
	          pk = b;
	          Y = null;
	          break;
	        }
	        a: {
	          var f = a,
	            g = c.return,
	            h = c,
	            k = b;
	          b = Z;
	          h.flags |= 32768;
	          if (null !== k && "object" === typeof k && "function" === typeof k.then) {
	            var l = k,
	              m = h,
	              q = m.tag;
	            if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
	              var r = m.alternate;
	              r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
	            }
	            var y = Ui(g);
	            if (null !== y) {
	              y.flags &= -257;
	              Vi(y, g, h, f, b);
	              y.mode & 1 && Si(f, l, b);
	              b = y;
	              k = l;
	              var n = b.updateQueue;
	              if (null === n) {
	                var t = new Set();
	                t.add(k);
	                b.updateQueue = t;
	              } else n.add(k);
	              break a;
	            } else {
	              if (0 === (b & 1)) {
	                Si(f, l, b);
	                tj();
	                break a;
	              }
	              k = Error(p(426));
	            }
	          } else if (I && h.mode & 1) {
	            var J = Ui(g);
	            if (null !== J) {
	              0 === (J.flags & 65536) && (J.flags |= 256);
	              Vi(J, g, h, f, b);
	              Jg(Ji(k, h));
	              break a;
	            }
	          }
	          f = k = Ji(k, h);
	          4 !== T && (T = 2);
	          null === sk ? sk = [f] : sk.push(f);
	          f = g;
	          do {
	            switch (f.tag) {
	              case 3:
	                f.flags |= 65536;
	                b &= -b;
	                f.lanes |= b;
	                var x = Ni(f, k, b);
	                ph(f, x);
	                break a;
	              case 1:
	                h = k;
	                var w = f.type,
	                  u = f.stateNode;
	                if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri || !Ri.has(u)))) {
	                  f.flags |= 65536;
	                  b &= -b;
	                  f.lanes |= b;
	                  var F = Qi(f, h, b);
	                  ph(f, F);
	                  break a;
	                }
	            }
	            f = f.return;
	          } while (null !== f);
	        }
	        Sk(c);
	      } catch (na) {
	        b = na;
	        Y === c && null !== c && (Y = c = c.return);
	        continue;
	      }
	      break;
	    } while (1);
	  }
	  function Jk() {
	    var a = mk.current;
	    mk.current = Rh;
	    return null === a ? Rh : a;
	  }
	  function tj() {
	    if (0 === T || 3 === T || 2 === T) T = 4;
	    null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
	  }
	  function Ik(a, b) {
	    var c = K;
	    K |= 2;
	    var d = Jk();
	    if (Q !== a || Z !== b) uk = null, Kk(a, b);
	    do try {
	      Tk();
	      break;
	    } catch (e) {
	      Mk(a, e);
	    } while (1);
	    $g();
	    K = c;
	    mk.current = d;
	    if (null !== Y) throw Error(p(261));
	    Q = null;
	    Z = 0;
	    return T;
	  }
	  function Tk() {
	    for (; null !== Y;) Uk(Y);
	  }
	  function Lk() {
	    for (; null !== Y && !cc();) Uk(Y);
	  }
	  function Uk(a) {
	    var b = Vk(a.alternate, a, fj);
	    a.memoizedProps = a.pendingProps;
	    null === b ? Sk(a) : Y = b;
	    nk.current = null;
	  }
	  function Sk(a) {
	    var b = a;
	    do {
	      var c = b.alternate;
	      a = b.return;
	      if (0 === (b.flags & 32768)) {
	        if (c = Ej(c, b, fj), null !== c) {
	          Y = c;
	          return;
	        }
	      } else {
	        c = Ij(c, b);
	        if (null !== c) {
	          c.flags &= 32767;
	          Y = c;
	          return;
	        }
	        if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;else {
	          T = 6;
	          Y = null;
	          return;
	        }
	      }
	      b = b.sibling;
	      if (null !== b) {
	        Y = b;
	        return;
	      }
	      Y = b = a;
	    } while (null !== b);
	    0 === T && (T = 5);
	  }
	  function Pk(a, b, c) {
	    var d = C,
	      e = ok.transition;
	    try {
	      ok.transition = null, C = 1, Wk(a, b, c, d);
	    } finally {
	      ok.transition = e, C = d;
	    }
	    return null;
	  }
	  function Wk(a, b, c, d) {
	    do Hk(); while (null !== wk);
	    if (0 !== (K & 6)) throw Error(p(327));
	    c = a.finishedWork;
	    var e = a.finishedLanes;
	    if (null === c) return null;
	    a.finishedWork = null;
	    a.finishedLanes = 0;
	    if (c === a.current) throw Error(p(177));
	    a.callbackNode = null;
	    a.callbackPriority = 0;
	    var f = c.lanes | c.childLanes;
	    Bc(a, f);
	    a === Q && (Y = Q = null, Z = 0);
	    0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc, function () {
	      Hk();
	      return null;
	    }));
	    f = 0 !== (c.flags & 15990);
	    if (0 !== (c.subtreeFlags & 15990) || f) {
	      f = ok.transition;
	      ok.transition = null;
	      var g = C;
	      C = 1;
	      var h = K;
	      K |= 4;
	      nk.current = null;
	      Oj(a, c);
	      dk(c, a);
	      Oe(Df);
	      dd = !!Cf;
	      Df = Cf = null;
	      a.current = c;
	      hk(c);
	      dc();
	      K = h;
	      C = g;
	      ok.transition = f;
	    } else a.current = c;
	    vk && (vk = false, wk = a, xk = e);
	    f = a.pendingLanes;
	    0 === f && (Ri = null);
	    mc(c.stateNode);
	    Dk(a, B());
	    if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, {
	      componentStack: e.stack,
	      digest: e.digest
	    });
	    if (Oi) throw Oi = false, a = Pi, Pi = null, a;
	    0 !== (xk & 1) && 0 !== a.tag && Hk();
	    f = a.pendingLanes;
	    0 !== (f & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
	    jg();
	    return null;
	  }
	  function Hk() {
	    if (null !== wk) {
	      var a = Dc(xk),
	        b = ok.transition,
	        c = C;
	      try {
	        ok.transition = null;
	        C = 16 > a ? 16 : a;
	        if (null === wk) var d = !1;else {
	          a = wk;
	          wk = null;
	          xk = 0;
	          if (0 !== (K & 6)) throw Error(p(331));
	          var e = K;
	          K |= 4;
	          for (V = a.current; null !== V;) {
	            var f = V,
	              g = f.child;
	            if (0 !== (V.flags & 16)) {
	              var h = f.deletions;
	              if (null !== h) {
	                for (var k = 0; k < h.length; k++) {
	                  var l = h[k];
	                  for (V = l; null !== V;) {
	                    var m = V;
	                    switch (m.tag) {
	                      case 0:
	                      case 11:
	                      case 15:
	                        Pj(8, m, f);
	                    }
	                    var q = m.child;
	                    if (null !== q) q.return = m, V = q;else for (; null !== V;) {
	                      m = V;
	                      var r = m.sibling,
	                        y = m.return;
	                      Sj(m);
	                      if (m === l) {
	                        V = null;
	                        break;
	                      }
	                      if (null !== r) {
	                        r.return = y;
	                        V = r;
	                        break;
	                      }
	                      V = y;
	                    }
	                  }
	                }
	                var n = f.alternate;
	                if (null !== n) {
	                  var t = n.child;
	                  if (null !== t) {
	                    n.child = null;
	                    do {
	                      var J = t.sibling;
	                      t.sibling = null;
	                      t = J;
	                    } while (null !== t);
	                  }
	                }
	                V = f;
	              }
	            }
	            if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, V = g;else b: for (; null !== V;) {
	              f = V;
	              if (0 !== (f.flags & 2048)) switch (f.tag) {
	                case 0:
	                case 11:
	                case 15:
	                  Pj(9, f, f.return);
	              }
	              var x = f.sibling;
	              if (null !== x) {
	                x.return = f.return;
	                V = x;
	                break b;
	              }
	              V = f.return;
	            }
	          }
	          var w = a.current;
	          for (V = w; null !== V;) {
	            g = V;
	            var u = g.child;
	            if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u;else b: for (g = w; null !== V;) {
	              h = V;
	              if (0 !== (h.flags & 2048)) try {
	                switch (h.tag) {
	                  case 0:
	                  case 11:
	                  case 15:
	                    Qj(9, h);
	                }
	              } catch (na) {
	                W(h, h.return, na);
	              }
	              if (h === g) {
	                V = null;
	                break b;
	              }
	              var F = h.sibling;
	              if (null !== F) {
	                F.return = h.return;
	                V = F;
	                break b;
	              }
	              V = h.return;
	            }
	          }
	          K = e;
	          jg();
	          if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
	            lc.onPostCommitFiberRoot(kc, a);
	          } catch (na) {}
	          d = !0;
	        }
	        return d;
	      } finally {
	        C = c, ok.transition = b;
	      }
	    }
	    return false;
	  }
	  function Xk(a, b, c) {
	    b = Ji(c, b);
	    b = Ni(a, b, 1);
	    a = nh(a, b, 1);
	    b = R();
	    null !== a && (Ac(a, 1, b), Dk(a, b));
	  }
	  function W(a, b, c) {
	    if (3 === a.tag) Xk(a, a, c);else for (; null !== b;) {
	      if (3 === b.tag) {
	        Xk(b, a, c);
	        break;
	      } else if (1 === b.tag) {
	        var d = b.stateNode;
	        if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
	          a = Ji(c, a);
	          a = Qi(b, a, 1);
	          b = nh(b, a, 1);
	          a = R();
	          null !== b && (Ac(b, 1, a), Dk(b, a));
	          break;
	        }
	      }
	      b = b.return;
	    }
	  }
	  function Ti(a, b, c) {
	    var d = a.pingCache;
	    null !== d && d.delete(b);
	    b = R();
	    a.pingedLanes |= a.suspendedLanes & c;
	    Q === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c);
	    Dk(a, b);
	  }
	  function Yk(a, b) {
	    0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
	    var c = R();
	    a = ih(a, b);
	    null !== a && (Ac(a, b, c), Dk(a, c));
	  }
	  function uj(a) {
	    var b = a.memoizedState,
	      c = 0;
	    null !== b && (c = b.retryLane);
	    Yk(a, c);
	  }
	  function bk(a, b) {
	    var c = 0;
	    switch (a.tag) {
	      case 13:
	        var d = a.stateNode;
	        var e = a.memoizedState;
	        null !== e && (c = e.retryLane);
	        break;
	      case 19:
	        d = a.stateNode;
	        break;
	      default:
	        throw Error(p(314));
	    }
	    null !== d && d.delete(b);
	    Yk(a, c);
	  }
	  var Vk;
	  Vk = function (a, b, c) {
	    if (null !== a) {
	      if (a.memoizedProps !== b.pendingProps || Wf.current) dh = true;else {
	        if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = false, yj(a, b, c);
	        dh = 0 !== (a.flags & 131072) ? true : false;
	      }
	    } else dh = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
	    b.lanes = 0;
	    switch (b.tag) {
	      case 2:
	        var d = b.type;
	        ij(a, b);
	        a = b.pendingProps;
	        var e = Yf(b, H.current);
	        ch(b, c);
	        e = Nh(null, b, d, a, e, c);
	        var f = Sh();
	        b.flags |= 1;
	        "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = true, cg(b)) : f = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, true, f, c)) : (b.tag = 0, I && f && vg(b), Xi(null, b, e, c), b = b.child);
	        return b;
	      case 16:
	        d = b.elementType;
	        a: {
	          ij(a, b);
	          a = b.pendingProps;
	          e = d._init;
	          d = e(d._payload);
	          b.type = d;
	          e = b.tag = Zk(d);
	          a = Ci(d, a);
	          switch (e) {
	            case 0:
	              b = cj(null, b, d, a, c);
	              break a;
	            case 1:
	              b = hj(null, b, d, a, c);
	              break a;
	            case 11:
	              b = Yi(null, b, d, a, c);
	              break a;
	            case 14:
	              b = $i(null, b, d, Ci(d.type, a), c);
	              break a;
	          }
	          throw Error(p(306, d, ""));
	        }
	        return b;
	      case 0:
	        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), cj(a, b, d, e, c);
	      case 1:
	        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), hj(a, b, d, e, c);
	      case 3:
	        a: {
	          kj(b);
	          if (null === a) throw Error(p(387));
	          d = b.pendingProps;
	          f = b.memoizedState;
	          e = f.element;
	          lh(a, b);
	          qh(b, d, null, c);
	          var g = b.memoizedState;
	          d = g.element;
	          if (f.isDehydrated) {
	            if (f = {
	              element: d,
	              isDehydrated: false,
	              cache: g.cache,
	              pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
	              transitions: g.transitions
	            }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
	              e = Ji(Error(p(423)), b);
	              b = lj(a, b, d, c, e);
	              break a;
	            } else if (d !== e) {
	              e = Ji(Error(p(424)), b);
	              b = lj(a, b, d, c, e);
	              break a;
	            } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Vg(b, null, d, c), b.child = c; c;) c.flags = c.flags & -3 | 4096, c = c.sibling;
	          } else {
	            Ig();
	            if (d === e) {
	              b = Zi(a, b, c);
	              break a;
	            }
	            Xi(a, b, d, c);
	          }
	          b = b.child;
	        }
	        return b;
	      case 5:
	        return Ah(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), gj(a, b), Xi(a, b, g, c), b.child;
	      case 6:
	        return null === a && Eg(b), null;
	      case 13:
	        return oj(a, b, c);
	      case 4:
	        return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi(a, b, d, c), b.child;
	      case 11:
	        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), Yi(a, b, d, e, c);
	      case 7:
	        return Xi(a, b, b.pendingProps, c), b.child;
	      case 8:
	        return Xi(a, b, b.pendingProps.children, c), b.child;
	      case 12:
	        return Xi(a, b, b.pendingProps.children, c), b.child;
	      case 10:
	        a: {
	          d = b.type._context;
	          e = b.pendingProps;
	          f = b.memoizedProps;
	          g = e.value;
	          G(Wg, d._currentValue);
	          d._currentValue = g;
	          if (null !== f) if (He(f.value, g)) {
	            if (f.children === e.children && !Wf.current) {
	              b = Zi(a, b, c);
	              break a;
	            }
	          } else for (f = b.child, null !== f && (f.return = b); null !== f;) {
	            var h = f.dependencies;
	            if (null !== h) {
	              g = f.child;
	              for (var k = h.firstContext; null !== k;) {
	                if (k.context === d) {
	                  if (1 === f.tag) {
	                    k = mh(-1, c & -c);
	                    k.tag = 2;
	                    var l = f.updateQueue;
	                    if (null !== l) {
	                      l = l.shared;
	                      var m = l.pending;
	                      null === m ? k.next = k : (k.next = m.next, m.next = k);
	                      l.pending = k;
	                    }
	                  }
	                  f.lanes |= c;
	                  k = f.alternate;
	                  null !== k && (k.lanes |= c);
	                  bh(f.return, c, b);
	                  h.lanes |= c;
	                  break;
	                }
	                k = k.next;
	              }
	            } else if (10 === f.tag) g = f.type === b.type ? null : f.child;else if (18 === f.tag) {
	              g = f.return;
	              if (null === g) throw Error(p(341));
	              g.lanes |= c;
	              h = g.alternate;
	              null !== h && (h.lanes |= c);
	              bh(g, c, b);
	              g = f.sibling;
	            } else g = f.child;
	            if (null !== g) g.return = f;else for (g = f; null !== g;) {
	              if (g === b) {
	                g = null;
	                break;
	              }
	              f = g.sibling;
	              if (null !== f) {
	                f.return = g.return;
	                g = f;
	                break;
	              }
	              g = g.return;
	            }
	            f = g;
	          }
	          Xi(a, b, e.children, c);
	          b = b.child;
	        }
	        return b;
	      case 9:
	        return e = b.type, d = b.pendingProps.children, ch(b, c), e = eh(e), d = d(e), b.flags |= 1, Xi(a, b, d, c), b.child;
	      case 14:
	        return d = b.type, e = Ci(d, b.pendingProps), e = Ci(d.type, e), $i(a, b, d, e, c);
	      case 15:
	        return bj(a, b, b.type, b.pendingProps, c);
	      case 17:
	        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), ij(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, ch(b, c), Gi(b, d, e), Ii(b, d, e, c), jj(null, b, d, true, a, c);
	      case 19:
	        return xj(a, b, c);
	      case 22:
	        return dj(a, b, c);
	    }
	    throw Error(p(156, b.tag));
	  };
	  function Fk(a, b) {
	    return ac(a, b);
	  }
	  function $k(a, b, c, d) {
	    this.tag = a;
	    this.key = c;
	    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
	    this.index = 0;
	    this.ref = null;
	    this.pendingProps = b;
	    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
	    this.mode = d;
	    this.subtreeFlags = this.flags = 0;
	    this.deletions = null;
	    this.childLanes = this.lanes = 0;
	    this.alternate = null;
	  }
	  function Bg(a, b, c, d) {
	    return new $k(a, b, c, d);
	  }
	  function aj(a) {
	    a = a.prototype;
	    return !(!a || !a.isReactComponent);
	  }
	  function Zk(a) {
	    if ("function" === typeof a) return aj(a) ? 1 : 0;
	    if (void 0 !== a && null !== a) {
	      a = a.$$typeof;
	      if (a === Da) return 11;
	      if (a === Ga) return 14;
	    }
	    return 2;
	  }
	  function Pg(a, b) {
	    var c = a.alternate;
	    null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
	    c.flags = a.flags & 14680064;
	    c.childLanes = a.childLanes;
	    c.lanes = a.lanes;
	    c.child = a.child;
	    c.memoizedProps = a.memoizedProps;
	    c.memoizedState = a.memoizedState;
	    c.updateQueue = a.updateQueue;
	    b = a.dependencies;
	    c.dependencies = null === b ? null : {
	      lanes: b.lanes,
	      firstContext: b.firstContext
	    };
	    c.sibling = a.sibling;
	    c.index = a.index;
	    c.ref = a.ref;
	    return c;
	  }
	  function Rg(a, b, c, d, e, f) {
	    var g = 2;
	    d = a;
	    if ("function" === typeof a) aj(a) && (g = 1);else if ("string" === typeof a) g = 5;else a: switch (a) {
	      case ya:
	        return Tg(c.children, e, f, b);
	      case za:
	        g = 8;
	        e |= 8;
	        break;
	      case Aa:
	        return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;
	      case Ea:
	        return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;
	      case Fa:
	        return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;
	      case Ia:
	        return pj(c, e, f, b);
	      default:
	        if ("object" === typeof a && null !== a) switch (a.$$typeof) {
	          case Ba:
	            g = 10;
	            break a;
	          case Ca:
	            g = 9;
	            break a;
	          case Da:
	            g = 11;
	            break a;
	          case Ga:
	            g = 14;
	            break a;
	          case Ha:
	            g = 16;
	            d = null;
	            break a;
	        }
	        throw Error(p(130, null == a ? a : typeof a, ""));
	    }
	    b = Bg(g, c, b, e);
	    b.elementType = a;
	    b.type = d;
	    b.lanes = f;
	    return b;
	  }
	  function Tg(a, b, c, d) {
	    a = Bg(7, a, d, b);
	    a.lanes = c;
	    return a;
	  }
	  function pj(a, b, c, d) {
	    a = Bg(22, a, d, b);
	    a.elementType = Ia;
	    a.lanes = c;
	    a.stateNode = {
	      isHidden: false
	    };
	    return a;
	  }
	  function Qg(a, b, c) {
	    a = Bg(6, a, null, b);
	    a.lanes = c;
	    return a;
	  }
	  function Sg(a, b, c) {
	    b = Bg(4, null !== a.children ? a.children : [], a.key, b);
	    b.lanes = c;
	    b.stateNode = {
	      containerInfo: a.containerInfo,
	      pendingChildren: null,
	      implementation: a.implementation
	    };
	    return b;
	  }
	  function al(a, b, c, d, e) {
	    this.tag = b;
	    this.containerInfo = a;
	    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
	    this.timeoutHandle = -1;
	    this.callbackNode = this.pendingContext = this.context = null;
	    this.callbackPriority = 0;
	    this.eventTimes = zc(0);
	    this.expirationTimes = zc(-1);
	    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
	    this.entanglements = zc(0);
	    this.identifierPrefix = d;
	    this.onRecoverableError = e;
	    this.mutableSourceEagerHydrationData = null;
	  }
	  function bl(a, b, c, d, e, f, g, h, k) {
	    a = new al(a, b, c, h, k);
	    1 === b ? (b = 1, true === f && (b |= 8)) : b = 0;
	    f = Bg(3, null, null, b);
	    a.current = f;
	    f.stateNode = a;
	    f.memoizedState = {
	      element: d,
	      isDehydrated: c,
	      cache: null,
	      transitions: null,
	      pendingSuspenseBoundaries: null
	    };
	    kh(f);
	    return a;
	  }
	  function cl(a, b, c) {
	    var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
	    return {
	      $$typeof: wa,
	      key: null == d ? null : "" + d,
	      children: a,
	      containerInfo: b,
	      implementation: c
	    };
	  }
	  function dl(a) {
	    if (!a) return Vf;
	    a = a._reactInternals;
	    a: {
	      if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
	      var b = a;
	      do {
	        switch (b.tag) {
	          case 3:
	            b = b.stateNode.context;
	            break a;
	          case 1:
	            if (Zf(b.type)) {
	              b = b.stateNode.__reactInternalMemoizedMergedChildContext;
	              break a;
	            }
	        }
	        b = b.return;
	      } while (null !== b);
	      throw Error(p(171));
	    }
	    if (1 === a.tag) {
	      var c = a.type;
	      if (Zf(c)) return bg(a, c, b);
	    }
	    return b;
	  }
	  function el(a, b, c, d, e, f, g, h, k) {
	    a = bl(c, d, true, a, e, f, g, h, k);
	    a.context = dl(null);
	    c = a.current;
	    d = R();
	    e = yi(c);
	    f = mh(d, e);
	    f.callback = void 0 !== b && null !== b ? b : null;
	    nh(c, f, e);
	    a.current.lanes = e;
	    Ac(a, e, d);
	    Dk(a, d);
	    return a;
	  }
	  function fl(a, b, c, d) {
	    var e = b.current,
	      f = R(),
	      g = yi(e);
	    c = dl(c);
	    null === b.context ? b.context = c : b.pendingContext = c;
	    b = mh(f, g);
	    b.payload = {
	      element: a
	    };
	    d = void 0 === d ? null : d;
	    null !== d && (b.callback = d);
	    a = nh(e, b, g);
	    null !== a && (gi(a, e, g, f), oh(a, e, g));
	    return g;
	  }
	  function gl(a) {
	    a = a.current;
	    if (!a.child) return null;
	    switch (a.child.tag) {
	      case 5:
	        return a.child.stateNode;
	      default:
	        return a.child.stateNode;
	    }
	  }
	  function hl(a, b) {
	    a = a.memoizedState;
	    if (null !== a && null !== a.dehydrated) {
	      var c = a.retryLane;
	      a.retryLane = 0 !== c && c < b ? c : b;
	    }
	  }
	  function il(a, b) {
	    hl(a, b);
	    (a = a.alternate) && hl(a, b);
	  }
	  function jl() {
	    return null;
	  }
	  var kl = "function" === typeof reportError ? reportError : function (a) {
	    console.error(a);
	  };
	  function ll(a) {
	    this._internalRoot = a;
	  }
	  ml.prototype.render = ll.prototype.render = function (a) {
	    var b = this._internalRoot;
	    if (null === b) throw Error(p(409));
	    fl(a, b, null, null);
	  };
	  ml.prototype.unmount = ll.prototype.unmount = function () {
	    var a = this._internalRoot;
	    if (null !== a) {
	      this._internalRoot = null;
	      var b = a.containerInfo;
	      Rk(function () {
	        fl(null, a, null, null);
	      });
	      b[uf] = null;
	    }
	  };
	  function ml(a) {
	    this._internalRoot = a;
	  }
	  ml.prototype.unstable_scheduleHydration = function (a) {
	    if (a) {
	      var b = Hc();
	      a = {
	        blockedOn: null,
	        target: a,
	        priority: b
	      };
	      for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++);
	      Qc.splice(c, 0, a);
	      0 === c && Vc(a);
	    }
	  };
	  function nl(a) {
	    return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
	  }
	  function ol(a) {
	    return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
	  }
	  function pl() {}
	  function ql(a, b, c, d, e) {
	    if (e) {
	      if ("function" === typeof d) {
	        var f = d;
	        d = function () {
	          var a = gl(g);
	          f.call(a);
	        };
	      }
	      var g = el(b, d, a, 0, null, false, false, "", pl);
	      a._reactRootContainer = g;
	      a[uf] = g.current;
	      sf(8 === a.nodeType ? a.parentNode : a);
	      Rk();
	      return g;
	    }
	    for (; e = a.lastChild;) a.removeChild(e);
	    if ("function" === typeof d) {
	      var h = d;
	      d = function () {
	        var a = gl(k);
	        h.call(a);
	      };
	    }
	    var k = bl(a, 0, false, null, null, false, false, "", pl);
	    a._reactRootContainer = k;
	    a[uf] = k.current;
	    sf(8 === a.nodeType ? a.parentNode : a);
	    Rk(function () {
	      fl(b, k, c, d);
	    });
	    return k;
	  }
	  function rl(a, b, c, d, e) {
	    var f = c._reactRootContainer;
	    if (f) {
	      var g = f;
	      if ("function" === typeof e) {
	        var h = e;
	        e = function () {
	          var a = gl(g);
	          h.call(a);
	        };
	      }
	      fl(b, g, a, e);
	    } else g = ql(c, b, a, e, d);
	    return gl(g);
	  }
	  Ec = function (a) {
	    switch (a.tag) {
	      case 3:
	        var b = a.stateNode;
	        if (b.current.memoizedState.isDehydrated) {
	          var c = tc(b.pendingLanes);
	          0 !== c && (Cc(b, c | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
	        }
	        break;
	      case 13:
	        Rk(function () {
	          var b = ih(a, 1);
	          if (null !== b) {
	            var c = R();
	            gi(b, a, 1, c);
	          }
	        }), il(a, 1);
	    }
	  };
	  Fc = function (a) {
	    if (13 === a.tag) {
	      var b = ih(a, 134217728);
	      if (null !== b) {
	        var c = R();
	        gi(b, a, 134217728, c);
	      }
	      il(a, 134217728);
	    }
	  };
	  Gc = function (a) {
	    if (13 === a.tag) {
	      var b = yi(a),
	        c = ih(a, b);
	      if (null !== c) {
	        var d = R();
	        gi(c, a, b, d);
	      }
	      il(a, b);
	    }
	  };
	  Hc = function () {
	    return C;
	  };
	  Ic = function (a, b) {
	    var c = C;
	    try {
	      return C = a, b();
	    } finally {
	      C = c;
	    }
	  };
	  yb = function (a, b, c) {
	    switch (b) {
	      case "input":
	        bb(a, c);
	        b = c.name;
	        if ("radio" === c.type && null != b) {
	          for (c = a; c.parentNode;) c = c.parentNode;
	          c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
	          for (b = 0; b < c.length; b++) {
	            var d = c[b];
	            if (d !== a && d.form === a.form) {
	              var e = Db(d);
	              if (!e) throw Error(p(90));
	              Wa(d);
	              bb(d, e);
	            }
	          }
	        }
	        break;
	      case "textarea":
	        ib(a, c);
	        break;
	      case "select":
	        b = c.value, null != b && fb(a, !!c.multiple, b, false);
	    }
	  };
	  Gb = Qk;
	  Hb = Rk;
	  var sl = {
	      usingClientEntryPoint: false,
	      Events: [Cb, ue, Db, Eb, Fb, Qk]
	    },
	    tl = {
	      findFiberByHostInstance: Wc,
	      bundleType: 0,
	      version: "18.3.1",
	      rendererPackageName: "react-dom"
	    };
	  var ul = {
	    bundleType: tl.bundleType,
	    version: tl.version,
	    rendererPackageName: tl.rendererPackageName,
	    rendererConfig: tl.rendererConfig,
	    overrideHookState: null,
	    overrideHookStateDeletePath: null,
	    overrideHookStateRenamePath: null,
	    overrideProps: null,
	    overridePropsDeletePath: null,
	    overridePropsRenamePath: null,
	    setErrorHandler: null,
	    setSuspenseHandler: null,
	    scheduleUpdate: null,
	    currentDispatcherRef: ua.ReactCurrentDispatcher,
	    findHostInstanceByFiber: function (a) {
	      a = Zb(a);
	      return null === a ? null : a.stateNode;
	    },
	    findFiberByHostInstance: tl.findFiberByHostInstance || jl,
	    findHostInstancesForRefresh: null,
	    scheduleRefresh: null,
	    scheduleRoot: null,
	    setRefreshHandler: null,
	    getCurrentFiber: null,
	    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
	  };
	  if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
	    var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	    if (!vl.isDisabled && vl.supportsFiber) try {
	      kc = vl.inject(ul), lc = vl;
	    } catch (a) {}
	  }
	  reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
	  reactDom_production_min.createPortal = function (a, b) {
	    var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
	    if (!nl(b)) throw Error(p(200));
	    return cl(a, b, null, c);
	  };
	  reactDom_production_min.createRoot = function (a, b) {
	    if (!nl(a)) throw Error(p(299));
	    var c = false,
	      d = "",
	      e = kl;
	    null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
	    b = bl(a, 1, false, null, null, c, false, d, e);
	    a[uf] = b.current;
	    sf(8 === a.nodeType ? a.parentNode : a);
	    return new ll(b);
	  };
	  reactDom_production_min.findDOMNode = function (a) {
	    if (null == a) return null;
	    if (1 === a.nodeType) return a;
	    var b = a._reactInternals;
	    if (void 0 === b) {
	      if ("function" === typeof a.render) throw Error(p(188));
	      a = Object.keys(a).join(",");
	      throw Error(p(268, a));
	    }
	    a = Zb(b);
	    a = null === a ? null : a.stateNode;
	    return a;
	  };
	  reactDom_production_min.flushSync = function (a) {
	    return Rk(a);
	  };
	  reactDom_production_min.hydrate = function (a, b, c) {
	    if (!ol(b)) throw Error(p(200));
	    return rl(null, a, b, true, c);
	  };
	  reactDom_production_min.hydrateRoot = function (a, b, c) {
	    if (!nl(a)) throw Error(p(405));
	    var d = null != c && c.hydratedSources || null,
	      e = false,
	      f = "",
	      g = kl;
	    null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
	    b = el(b, null, a, 1, null != c ? c : null, e, false, f, g);
	    a[uf] = b.current;
	    sf(a);
	    if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(c, e);
	    return new ml(b);
	  };
	  reactDom_production_min.render = function (a, b, c) {
	    if (!ol(b)) throw Error(p(200));
	    return rl(null, a, b, false, c);
	  };
	  reactDom_production_min.unmountComponentAtNode = function (a) {
	    if (!ol(a)) throw Error(p(40));
	    return a._reactRootContainer ? (Rk(function () {
	      rl(null, null, a, !1, function () {
	        a._reactRootContainer = null;
	        a[uf] = null;
	      });
	    }), true) : false;
	  };
	  reactDom_production_min.unstable_batchedUpdates = Qk;
	  reactDom_production_min.unstable_renderSubtreeIntoContainer = function (a, b, c, d) {
	    if (!ol(c)) throw Error(p(200));
	    if (null == a || void 0 === a._reactInternals) throw Error(p(38));
	    return rl(a, b, c, false, d);
	  };
	  reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
	  return reactDom_production_min;
	}

	var hasRequiredReactDom;
	function requireReactDom() {
	  if (hasRequiredReactDom) return reactDom.exports;
	  hasRequiredReactDom = 1;
	  function checkDCE() {
	    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
	      return;
	    }
	    try {
	      // Verify that the code above has been dead code eliminated (DCE'd).
	      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
	    } catch (err) {
	      // DevTools shouldn't crash React, no matter what.
	      // We should still report in case we break this code.
	      console.error(err);
	    }
	  }
	  {
	    // DCE check should happen before ReactDOM bundle executes so that
	    // DevTools can report bad minification during injection.
	    checkDCE();
	    reactDom.exports = requireReactDom_production_min();
	  }
	  return reactDom.exports;
	}

	var hasRequiredClient;
	function requireClient() {
	  if (hasRequiredClient) return client;
	  hasRequiredClient = 1;
	  var m = requireReactDom();
	  {
	    client.createRoot = m.createRoot;
	    client.hydrateRoot = m.hydrateRoot;
	  }
	  return client;
	}

	var clientExports = requireClient();
	var ReactDOM = /*@__PURE__*/getDefaultExportFromCjs(clientExports);

	const toneLabel = {
	  good: '状态良好',
	  watch: '需要关注',
	  check: '建议进一步评估'
	};
	const toneShortLabel = {
	  good: '良好',
	  watch: '需关注',
	  check: '建议评估'
	};
	function footTone(p) {
	  const {
	    ttr,
	    peak
	  } = p.raw.foot;
	  if (ttr <= 90 && peak >= 1.8) return 'good';
	  if (ttr > 150 || peak < 1.3) return 'check';
	  return 'watch';
	}
	function brainTone(p) {
	  const {
	    left,
	    right,
	    min,
	    asym
	  } = p.raw.brain;
	  if (min >= 60 && asym <= 4) return 'good';
	  if (min >= 55 && asym <= 7) return 'watch';
	  return 'check';
	}
	function bloodAbnormalCount(p) {
	  const b = p.raw.blood;
	  return [b.tc > 5.2, b.tg > 1.7, b.ldl > 3.4, b.hdl < 1.0, b.glu > 6.1, b.hba1c > 6.0, b.viscosity > 4.8].filter(Boolean).length;
	}
	function bloodTone(p) {
	  const b = p.raw.blood;
	  if (b.ldl >= 4.5 || b.glu >= 7.0 || b.viscosity >= 6.4) return 'check';
	  if (bloodAbnormalCount(p) > 0) return 'watch';
	  return 'good';
	}
	function heartTone(p) {
	  const h = p.raw.heart;
	  if (h.sbp >= 140 || h.dbp >= 90 || h.pwv >= 12) return 'check';
	  if (h.sbp >= 130 || h.dbp >= 85 || h.pwv >= 9.5) return 'watch';
	  return 'good';
	}
	function valueRow(label, value, unit, range, status, note) {
	  return {
	    label,
	    value: String(value),
	    unit,
	    range,
	    status,
	    note
	  };
	}
	function footArea(p) {
	  const r = p.raw.foot;
	  const tone = footTone(p);
	  const good = tone === 'good';
	  const why = [];
	  if (good) {
	    why.push(`松开袖带后，末梢血流约 ${r.ttr} 秒回到接近基线，速度快于 90 秒的理想参考值。`);
	    why.push(`峰值充血达到基础血流的 ${r.peak.toFixed(2)} 倍，说明小血管的扩张反应较好。`);
	    why.push(`左右足差异为 ${Math.abs(r.leftTtr - r.rightTtr)} 秒，两侧反应比较一致。`);
	  } else {
	    why.push(`松开袖带后，血流用了约 ${r.ttr} 秒才回到接近基线，比 90 秒的理想速度慢。`);
	    if (p.raw.heart.sbp >= 140) why.push(`本次血压为 ${p.raw.heart.sbp}/${p.raw.heart.dbp} mmHg，偏高时小血管需要承受更大的压力。`);
	    if (r.ttr > 90) why.push('久坐、运动不足、吸烟或睡眠不好，也会让末梢血流恢复变慢。');else why.push('末梢循环的调节能力会随年龄、活动量和血管状态变化。');
	  }
	  return {
	    id: 'foot',
	    order: 2,
	    title: '足部末梢循环',
	    shortTitle: '足部',
	    method: '足趾袖带阻断 + 组织灌注传感',
	    icon: 'foot',
	    tone,
	    headline: good ? '脚趾血流恢复速度良好' : tone === 'check' ? '末梢血流恢复明显偏慢' : '脚趾血流恢复偏慢',
	    summary: good ? '松开袖带后，末梢血流能较快恢复到静息水平。' : '松开袖带后，脚趾的小血管恢复供血比理想速度慢，提示末梢微循环储备需要关注。',
	    hotspotNote: good ? '恢复速度良好' : '恢复速度偏慢',
	    whyTitle: good ? '为什么判断为良好' : '为什么会这样',
	    why: why.slice(0, 3),
	    meaning: good ? '目前末梢小血管的扩张和恢复反应较好，脚趾的血液供应能够及时回到静息水平。' : '末梢小血管的调节速度偏慢。它常和血压、血糖、血脂、久坐等因素一起出现，是身体微循环状态的一个提示。',
	    notMeaning: good ? '单次结果良好，不代表以后不会变化。建议保持活动，并按年度体检计划复查。' : '这不等于已经患上血管疾病，也不能单独用来诊断下肢动脉狭窄，需要结合其他检查和医生判断。',
	    action: good ? '保持规律活动、避免久坐，每年体检时复查即可。' : tone === 'check' ? '建议尽快咨询医生，评估是否需要做下肢血管超声等进一步检查。' : '建议 3 个月内复查足部微循环，并同时关注血压、血脂和血糖。',
	    details: [valueRow('左足恢复时间', r.leftTtr, '秒', '≤ 90 秒', footTone(p), '松开袖带后恢复到接近基线的时间'), valueRow('右足恢复时间', r.rightTtr, '秒', '≤ 90 秒', r.rightTtr <= 90 ? 'good' : r.rightTtr > 150 ? 'check' : 'watch'), valueRow('峰值充血倍数', r.peak.toFixed(2), '倍', '≥ 1.80 倍', r.peak >= 1.8 ? 'good' : r.peak < 1.3 ? 'check' : 'watch'), valueRow('阻断后最低血流', r.nadir, '%', '—', 'none', '相对于静息状态的血流比例'), valueRow('足趾皮肤温度', r.temperature, '℃', '≥ 30℃', r.temperature >= 30 ? 'good' : 'watch'), valueRow('数据质量', r.quality, '%', '≥ 95%', r.quality >= 95 ? 'good' : 'watch')]
	  };
	}
	function brainArea(p) {
	  const r = p.raw.brain;
	  const tone = brainTone(p);
	  const good = tone === 'good';
	  const diff = Math.abs(r.left - r.right);
	  const why = good ? [`左脑 ${r.left}%，右脑 ${r.right}%，左右只相差 ${diff} 个百分点。`, '两侧供氧都处于常见的静息范围，没有明显偏低。', `本次脑氧信号质量 ${r.quality}%，数据完整，结果较可靠。`] : [`左脑 ${r.left}%，右脑 ${r.right}%，左右相差 ${diff} 个百分点。`, r.min < 60 ? `较低一侧为 ${r.min}%，略低于常见的 60%–80% 参考范围。` : '双侧供氧仍在常见范围内，但均衡性需要关注。', '脑部供氧会受到血压、睡眠、呼吸状态和情绪紧张程度影响。'];
	  return {
	    id: 'brain',
	    order: 1,
	    title: '大脑供氧',
	    shortTitle: '脑部',
	    method: '近红外脑氧监测 · 左右额叶',
	    icon: 'brain',
	    tone,
	    headline: good ? '左右脑供氧均衡' : tone === 'check' ? '大脑供氧差异较明显' : '大脑供氧需要关注',
	    summary: good ? '静息状态下，左右两侧的供氧水平接近，暂未见明显不对称。' : '左右两侧的供氧水平存在差异，建议结合血压、睡眠和呼吸状态一起观察。',
	    hotspotNote: good ? '左右供氧均衡' : '左右略不对称',
	    whyTitle: good ? '为什么判断为良好' : '为什么需要关注',
	    why,
	    meaning: good ? '说明在安静状态下，大脑左右两侧都能获得比较稳定的氧气供应。' : '大脑供氧的均衡性可能受到血压、睡眠质量、呼吸状态或紧张情绪的影响，需要结合整体情况判断。',
	    notMeaning: good ? '这不代表脑血管完全没有问题。如出现持续头晕、言语不清或肢体无力，仍需及时就医。' : '单次脑氧结果不等于脑血管疾病诊断，也不能替代头颅影像或专科检查。',
	    action: good ? '目前无需特别处理。保持规律睡眠和活动，年度体检时复查即可。' : '建议把结果交给医生结合血压和神经系统症状判断；如出现持续头晕、言语不清或单侧肢体无力，请及时就医。',
	    details: [valueRow('左脑氧饱和度', r.left, '%', '60%–80%', r.left < 55 ? 'check' : r.left < 60 ? 'watch' : 'good', '静息状态'), valueRow('右脑氧饱和度', r.right, '%', '60%–80%', r.right < 55 ? 'check' : r.right < 60 ? 'watch' : 'good', '静息状态'), valueRow('左右差异', diff, '个百分点', '≤ 5', diff <= 4 ? 'good' : diff <= 7 ? 'watch' : 'check'), valueRow('脑氧储备', r.reserve, '%', '≥ 15%', r.reserve >= 15 ? 'good' : 'watch', '呼吸挑战后的变化能力'), valueRow('数据质量', r.quality, '%', '≥ 95%', r.quality >= 95 ? 'good' : 'watch')]
	  };
	}
	function bloodArea(p) {
	  const b = p.raw.blood;
	  const tone = bloodTone(p);
	  const good = tone === 'good';
	  const highItems = [];
	  if (b.ldl > 3.4) highItems.push('坏胆固醇');
	  if (b.tg > 1.7) highItems.push('甘油三酯');
	  if (b.glu > 6.1) highItems.push('空腹血糖');
	  if (b.viscosity > 4.8) highItems.push('血液黏稠度');
	  if (b.tc > 5.2 && !highItems.includes('坏胆固醇')) highItems.push('总胆固醇');
	  if (b.hdl < 1.0) highItems.push('好胆固醇偏低');
	  const why = good ? [`血液黏稠度 ${b.viscosity.toFixed(1)}，在常见参考范围内，血液流动阻力较小。`, `坏胆固醇 ${b.ldl.toFixed(2)} mmol/L，空腹血糖 ${b.glu.toFixed(1)} mmol/L，均处于理想范围。`, '血脂、血糖和血液流变学指标之间比较协调。'] : [highItems.length ? `本次有多项血液指标偏离理想范围：${highItems.slice(0, 3).join('、')}。` : '部分血液指标接近参考上限。', b.viscosity > 4.8 ? `血液黏稠度为 ${b.viscosity.toFixed(1)}，偏高时血液流动会更费力。` : '血液黏稠度目前处于可接受范围。', '饮食结构、运动量、体重和睡眠都会影响血脂、血糖和血液流变状态。'];
	  return {
	    id: 'blood',
	    order: 3,
	    title: '血液状态',
	    shortTitle: '血液',
	    method: '微流控芯片 · 一次检测多项血液指标',
	    icon: 'drop',
	    tone,
	    headline: good ? '血液状态较平稳' : tone === 'check' ? '多项血液指标需要进一步评估' : '血液偏稠，血脂和血糖需关注',
	    summary: good ? '血脂、血糖和血液黏稠度都在较理想的范围内。' : '血液黏稠度和血脂偏高，空腹血糖也接近上限，会增加血管的负担。',
	    hotspotNote: good ? '血脂血糖平稳' : '血液偏稠',
	    whyTitle: good ? '为什么判断为良好' : '为什么会这样',
	    why: why.slice(0, 3),
	    meaning: good ? '目前血液的流动状态和代谢指标比较平稳，有利于氧气和营养输送到身体各处。' : '血液偏稠、坏胆固醇偏高，会让血液流动更费力，也更容易在血管壁上留下沉积。',
	    notMeaning: good ? '这不代表以后不会出现变化。保持当前的生活方式，并按年度体检复查即可。' : '这不等于一定发生血栓或心脏病。需要结合血压、血糖、体重和医生评估，不能只看单项数值。',
	    action: good ? '保持均衡饮食和规律运动，按年度体检复查血脂、血糖即可。' : tone === 'check' ? '建议尽快与医生讨论血脂、血糖和血液黏稠度的综合管理方案。' : '建议 3 个月内复查血脂、空腹血糖和糖化血红蛋白，并由医生评估是否需要进一步干预。',
	    details: [valueRow('总胆固醇', b.tc.toFixed(2), 'mmol/L', '< 5.20', b.tc > 5.2 ? 'watch' : 'good'), valueRow('甘油三酯', b.tg.toFixed(2), 'mmol/L', '< 1.70', b.tg > 1.7 ? 'watch' : 'good'), valueRow('坏胆固醇（LDL-C）', b.ldl.toFixed(2), 'mmol/L', '< 3.40', b.ldl > 3.4 ? b.ldl >= 4.5 ? 'check' : 'watch' : 'good'), valueRow('好胆固醇（HDL-C）', b.hdl.toFixed(2), 'mmol/L', '≥ 1.00', b.hdl < 1.0 ? 'watch' : 'good'), valueRow('空腹血糖', b.glu.toFixed(1), 'mmol/L', '3.9–6.1', b.glu > 6.1 ? b.glu >= 7 ? 'check' : 'watch' : 'good'), valueRow('糖化血红蛋白', b.hba1c.toFixed(1), '%', '< 6.0', b.hba1c > 6.0 ? 'watch' : 'good'), valueRow('血液黏稠度', b.viscosity.toFixed(1), 'mPa·s', '3.5–4.8', b.viscosity > 4.8 ? b.viscosity >= 6.4 ? 'check' : 'watch' : 'good'), valueRow('红细胞压积', b.hct.toFixed(1), '%', '40–50', b.hct > 50 ? 'watch' : 'good'), valueRow('高敏 C 反应蛋白', b.hscrp.toFixed(1), 'mg/L', '< 3.0', b.hscrp >= 3 ? 'watch' : 'good')]
	  };
	}
	function heartArea(p) {
	  const h = p.raw.heart;
	  const tone = heartTone(p);
	  const good = tone === 'good';
	  const why = good ? [`本次血压 ${h.sbp}/${h.dbp} mmHg，处于理想范围。`, `血管弹性指标 cf-PWV 为 ${h.pwv.toFixed(1)} m/s，血管弹性较好。`, `心率 ${h.hr} 次/分，节律规则，心脏负担较小。`] : [`本次血压 ${h.sbp}/${h.dbp} mmHg，高于理想范围（< 120/80 mmHg）。`, `脉压 ${h.pp} mmHg，血管弹性指标 cf-PWV ${h.pwv.toFixed(1)} m/s，提示血管弹性有所下降。`, '血压偏高会让心脏泵血更费力，也会增加小血管的负担。'];
	  return {
	    id: 'heart',
	    order: 4,
	    title: '心脏与血管',
	    shortTitle: '心血管',
	    method: '连续血压 + 脉搏波 + 血管弹性',
	    icon: 'heart',
	    tone,
	    headline: good ? '血压与血管弹性良好' : tone === 'check' ? '血压偏高，建议进一步评估' : '血压偏高，血管弹性需关注',
	    summary: good ? '血压、心率和血管弹性都在较理想的范围。' : '血压高于理想范围，血管弹性也略有下降，心脏需要更用力地把血液泵到全身。',
	    hotspotNote: good ? '血压平稳' : '血压偏高',
	    whyTitle: good ? '为什么判断为良好' : '为什么会这样',
	    why,
	    meaning: good ? '心脏泵血时血管能够较好地扩张和回弹，整体血流阻力较小。' : '血压偏高、血管弹性下降，会让心脏和血管长期承受更大的压力，也是微循环风险的重要因素。',
	    notMeaning: good ? '单次血压正常不代表永远不会升高，仍建议在安静状态下定期测量。' : '一次测量不能确诊高血压。需要在安静状态下规范复测，并由医生结合多次结果判断。',
	    action: good ? '保持低盐饮食和规律运动，每年体检时测量血压即可。' : '建议静坐 5 分钟后复测血压；如仍高于 140/90 mmHg，请到心内科进一步评估。',
	    details: [valueRow('高压（收缩压）', h.sbp, 'mmHg', '< 130', h.sbp >= 140 ? 'check' : h.sbp >= 130 ? 'watch' : 'good'), valueRow('低压（舒张压）', h.dbp, 'mmHg', '< 85', h.dbp >= 90 ? 'check' : h.dbp >= 85 ? 'watch' : 'good'), valueRow('脉压', h.pp, 'mmHg', '30–50', h.pp > 50 ? 'watch' : 'good'), valueRow('平均动脉压', h.mean, 'mmHg', '70–105', h.mean > 105 ? 'watch' : 'good'), valueRow('心率', h.hr, '次/分', '60–100', h.hr >= 60 && h.hr <= 100 ? 'good' : 'watch'), valueRow('心率变异性（SDNN）', h.hrv, 'ms', '≥ 50', h.hrv >= 50 ? 'good' : h.hrv >= 35 ? 'watch' : 'check'), valueRow('血管弹性（cf-PWV）', h.pwv.toFixed(1), 'm/s', '< 9.0', h.pwv >= 12 ? 'check' : h.pwv >= 9.5 ? 'watch' : 'good'), valueRow('踝臂指数（ABI）', h.abi.toFixed(2), '', '1.00–1.40', h.abi < 0.9 ? 'check' : h.abi < 1.0 ? 'watch' : 'good'), valueRow('血氧饱和度', h.spo2, '%', '≥ 95%', h.spo2 >= 95 ? 'good' : 'watch')]
	  };
	}
	function getAreas(p) {
	  return [brainArea(p), footArea(p), bloodArea(p), heartArea(p)];
	}
	function getOverall(p) {
	  const areas = getAreas(p);
	  const goodCount = areas.filter(a => a.tone === 'good').length;
	  const concernCount = areas.length - goodCount;
	  const checkCount = areas.filter(a => a.tone === 'check').length;
	  let tone = 'good';
	  if (checkCount >= 2) tone = 'check';else if (concernCount > 0) tone = 'watch';
	  const title = tone === 'good' ? '状态良好' : tone === 'check' ? '建议进一步评估' : '需要关注';
	  const lead = concernCount === 0 ? '4 个评估部位均处于良好状态。' : goodCount === 0 ? '4 个评估部位中，4 个需要关注。' : `4 个评估部位中，${goodCount} 个状态良好，${concernCount} 个需要关注。`;
	  return {
	    tone,
	    title,
	    lead,
	    note: p.overallNote,
	    goodCount,
	    concernCount,
	    checkCount
	  };
	}
	const patients = [{
	  id: 'zhang',
	  name: '张先生',
	  fullName: '张建国',
	  age: 56,
	  sex: '男',
	  date: '2025年5月18日',
	  time: '09:42',
	  examNo: 'TJ20250518001',
	  reportNo: 'MX-20250518-001',
	  room: '滨江院区 · 微循环评估室 03',
	  doctor: '林知远',
	  overallNote: '这不等于已经患病。多数提示可以通过复查、生活方式调整和医生评估进一步明确。',
	  goodNews: '您的大脑左右供氧均衡，静息状态下供氧稳定。',
	  actionPlan: {
	    today: ['把这份报告给总检医生看，确认下一步安排', '静坐 5 分钟后，再测一次血压'],
	    months: ['3 个月内复查血压、血脂和空腹血糖', '和医生讨论是否需要做下肢血管或颈动脉超声'],
	    daily: ['每天快走 30 分钟，减少连续久坐', '少盐、少油炸，晚餐吃到七分饱', '保证 7 小时睡眠，戒烟并限制饮酒']
	  },
	  reportNote: '建议结合本次体检的血压、血脂、血糖结果，由总检医生综合判断。',
	  raw: {
	    foot: {
	      ttr: 132,
	      peak: 1.42,
	      baseline: 68,
	      nadir: 24,
	      leftTtr: 132,
	      rightTtr: 118,
	      leftPeak: 1.42,
	      rightPeak: 1.56,
	      quality: 98.6,
	      temperature: 30.8
	    },
	    brain: {
	      left: 66,
	      right: 68,
	      min: 64,
	      asym: 2,
	      reserve: 18.4,
	      quality: 97.9
	    },
	    blood: {
	      tc: 6.32,
	      tg: 2.85,
	      ldl: 4.12,
	      hdl: 0.92,
	      glu: 6.8,
	      hba1c: 6.1,
	      viscosity: 5.8,
	      hct: 47.2,
	      hscrp: 2.8
	    },
	    heart: {
	      sbp: 142,
	      dbp: 91,
	      mean: 108,
	      hr: 78,
	      hrv: 32,
	      pp: 51,
	      pwv: 10.8,
	      abi: 0.94,
	      spo2: 97,
	      pi: 2.8
	    }
	  }
	}, {
	  id: 'li',
	  name: '李女士',
	  fullName: '李清怡',
	  age: 46,
	  sex: '女',
	  date: '2025年5月18日',
	  time: '10:18',
	  examNo: 'TJ20250518002',
	  reportNo: 'MX-20250518-002',
	  room: '滨江院区 · 微循环评估室 03',
	  doctor: '林知远',
	  overallNote: '本次未发现需要特别关注的微循环风险。保持目前的生活方式，并按年度体检计划复查即可。',
	  goodNews: '四个评估部位均处于良好状态，说明目前的微循环整体运转较平稳。',
	  actionPlan: {
	    today: ['保存这份报告，作为下一次体检的对照'],
	    months: ['按年度体检计划复查微循环、血压、血脂和血糖'],
	    daily: ['保持每周 150 分钟中等强度运动', '饮食均衡，少盐少糖', '保持规律睡眠，继续不吸烟']
	  },
	  reportNote: '本次结果整体良好，建议继续保持当前的生活方式，并按计划进行年度复查。',
	  raw: {
	    foot: {
	      ttr: 74,
	      peak: 2.12,
	      baseline: 72,
	      nadir: 22,
	      leftTtr: 74,
	      rightTtr: 70,
	      leftPeak: 2.12,
	      rightPeak: 2.06,
	      quality: 99.1,
	      temperature: 32.1
	    },
	    brain: {
	      left: 71,
	      right: 72,
	      min: 69,
	      asym: 1,
	      reserve: 24.6,
	      quality: 98.4
	    },
	    blood: {
	      tc: 4.3,
	      tg: 1.02,
	      ldl: 2.42,
	      hdl: 1.58,
	      glu: 5.0,
	      hba1c: 5.3,
	      viscosity: 4.1,
	      hct: 40.8,
	      hscrp: 1.2
	    },
	    heart: {
	      sbp: 116,
	      dbp: 74,
	      mean: 88,
	      hr: 66,
	      hrv: 52,
	      pp: 42,
	      pwv: 7.8,
	      abi: 1.08,
	      spo2: 98,
	      pi: 3.6
	    }
	  }
	}, {
	  id: 'wang',
	  name: '王先生',
	  fullName: '王志强',
	  age: 64,
	  sex: '男',
	  date: '2025年5月18日',
	  time: '10:56',
	  examNo: 'TJ20250518003',
	  reportNo: 'MX-20250518-003',
	  room: '滨江院区 · 微循环评估室 03',
	  doctor: '林知远',
	  overallNote: '多个环节需要进一步评估。建议尽快与医生沟通，制定复查和干预计划。',
	  goodNews: '心跳节律规则，本次采集的数据完整，可为后续评估提供参考。',
	  actionPlan: {
	    today: ['尽快预约心内科或内分泌科医生解读报告', '如出现胸闷、胸痛、头晕或单侧肢体无力，请及时就医'],
	    months: ['按医生建议完善血管、血脂和血糖相关检查', '开始记录家庭血压，复诊时带给医生'],
	    daily: ['从每天 20 分钟缓步走开始，量力而行', '严格少盐，减少加工食品和含糖饮料', '保证睡眠，戒烟并避免二手烟']
	  },
	  reportNote: '多项指标提示心血管和微循环负担较重，建议尽快由专科医生进行综合评估。',
	  raw: {
	    foot: {
	      ttr: 168,
	      peak: 1.2,
	      baseline: 62,
	      nadir: 16,
	      leftTtr: 168,
	      rightTtr: 154,
	      leftPeak: 1.2,
	      rightPeak: 1.28,
	      quality: 96.8,
	      temperature: 29.4
	    },
	    brain: {
	      left: 59,
	      right: 64,
	      min: 57,
	      asym: 5,
	      reserve: 14.1,
	      quality: 96.5
	    },
	    blood: {
	      tc: 7.1,
	      tg: 3.6,
	      ldl: 4.9,
	      hdl: 0.82,
	      glu: 7.9,
	      hba1c: 7.1,
	      viscosity: 6.4,
	      hct: 49.1,
	      hscrp: 4.6
	    },
	    heart: {
	      sbp: 158,
	      dbp: 96,
	      mean: 117,
	      hr: 88,
	      hrv: 24,
	      pp: 62,
	      pwv: 13.2,
	      abi: 0.86,
	      spo2: 96,
	      pi: 2.1
	    }
	  }
	}];
	function getPatient(id) {
	  return patients.find(p => p.id === id) ?? patients[0];
	}

	var jsxRuntime = {exports: {}};

	var reactJsxRuntime_production_min = {};

	/**
	 * @license React
	 * react-jsx-runtime.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var hasRequiredReactJsxRuntime_production_min;
	function requireReactJsxRuntime_production_min() {
	  if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
	  hasRequiredReactJsxRuntime_production_min = 1;
	  var f = requireReact(),
	    k = Symbol.for("react.element"),
	    l = Symbol.for("react.fragment"),
	    m = Object.prototype.hasOwnProperty,
	    n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	    p = {
	      key: true,
	      ref: true,
	      __self: true,
	      __source: true
	    };
	  function q(c, a, g) {
	    var b,
	      d = {},
	      e = null,
	      h = null;
	    void 0 !== g && (e = "" + g);
	    void 0 !== a.key && (e = "" + a.key);
	    void 0 !== a.ref && (h = a.ref);
	    for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
	    if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
	    return {
	      $$typeof: k,
	      type: c,
	      key: e,
	      ref: h,
	      props: d,
	      _owner: n.current
	    };
	  }
	  reactJsxRuntime_production_min.Fragment = l;
	  reactJsxRuntime_production_min.jsx = q;
	  reactJsxRuntime_production_min.jsxs = q;
	  return reactJsxRuntime_production_min;
	}

	var hasRequiredJsxRuntime;
	function requireJsxRuntime() {
	  if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	  hasRequiredJsxRuntime = 1;
	  {
	    jsxRuntime.exports = requireReactJsxRuntime_production_min();
	  }
	  return jsxRuntime.exports;
	}

	var jsxRuntimeExports = requireJsxRuntime();

	const iconPaths = {
	  'arrow-right': /*#__PURE__*/jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
	    children: /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	      d: "M4.5 12h15m0 0-6-6m6 6-6 6"
	    })
	  }),
	  'arrow-left': /*#__PURE__*/jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
	    children: /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	      d: "M19.5 12h-15m0 0 6-6m-6 6 6 6"
	    })
	  }),
	  'chevron-down': /*#__PURE__*/jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
	    children: /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	      d: "m6 9 6 6 6-6"
	    })
	  }),
	  'chevron-right': /*#__PURE__*/jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
	    children: /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	      d: "m9 6 6 6-6 6"
	    })
	  }),
	  close: /*#__PURE__*/jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
	    children: /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	      d: "m5 5 14 14M19 5 5 19"
	    })
	  }),
	  check: /*#__PURE__*/jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
	    children: /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	      d: "m5 12.5 4.4 4.3L19 6.7"
	    })
	  }),
	  spark: /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
	    children: [/*#__PURE__*/jsxRuntimeExports.jsx("path", {
	      d: "m12 3 1.7 5.1L19 10l-5.3 1.9L12 17l-1.7-5.1L5 10l5.3-1.9L12 3Z"
	    }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	      d: "m18.7 15 .8 2.4 2.5.9-2.5.9-.8 2.4-.8-2.4-2.5-.9 2.5-.9.8-2.4Z"
	    })]
	  }),
	  shield: /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
	    children: [/*#__PURE__*/jsxRuntimeExports.jsx("path", {
	      d: "M12 3.2 20 6v5.7c0 4.6-3.2 7.7-8 9.1-4.8-1.4-8-4.5-8-9.1V6l8-2.8Z"
	    }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	      d: "m8.5 12 2.2 2.2 4.8-4.8"
	    })]
	  }),
	  clock: /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
	    children: [/*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	      cx: "12",
	      cy: "12",
	      r: "8.5"
	    }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	      d: "M12 7v5.3l3.2 2"
	    })]
	  }),
	  printer: /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
	    children: [/*#__PURE__*/jsxRuntimeExports.jsx("path", {
	      d: "M7 8V3.5h10V8M7 17H4.5A1.5 1.5 0 0 1 3 15.5v-6A1.5 1.5 0 0 1 4.5 8h15A1.5 1.5 0 0 1 21 9.5v6a1.5 1.5 0 0 1-1.5 1.5H17"
	    }), /*#__PURE__*/jsxRuntimeExports.jsx("rect", {
	      x: "7",
	      y: "14",
	      width: "10",
	      height: "6.5",
	      rx: "1"
	    })]
	  }),
	  rotate: /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
	    children: [/*#__PURE__*/jsxRuntimeExports.jsx("path", {
	      d: "M20 7v5h-5M4 17v-5h5"
	    }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	      d: "M18.3 12A6.5 6.5 0 0 0 6.2 7.5L4 12m16 0-2.2 4.5A6.5 6.5 0 0 1 5.7 12"
	    })]
	  }),
	  info: /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
	    children: [/*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	      cx: "12",
	      cy: "12",
	      r: "8.5"
	    }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	      d: "M12 11v5.5M12 7.5v.2"
	    })]
	  }),
	  alert: /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
	    children: [/*#__PURE__*/jsxRuntimeExports.jsx("path", {
	      d: "M12 3.8 21 20H3L12 3.8Z"
	    }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	      d: "M12 9v5M12 17.2v.2"
	    })]
	  }),
	  brain: /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
	    children: [/*#__PURE__*/jsxRuntimeExports.jsx("path", {
	      d: "M9.5 4.2a3 3 0 0 0-5 2.2c0 .5.1 1 .4 1.4A3.3 3.3 0 0 0 4 10.6c0 1 .4 1.8 1 2.4a3 3 0 0 0 1.8 5.3c.7 1.3 2.4 1.9 4.2.9V4.9c-.5-.4-1-.6-1.5-.7Z"
	    }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	      d: "M14.5 4.2a3 3 0 0 1 5 2.2c0 .5-.1 1-.4 1.4a3.3 3.3 0 0 1 .9 2.8c0 1-.4 1.8-1 2.4a3 3 0 0 1-1.8 5.3c-.7 1.3-2.4 1.9-4.2.9V4.9c.5-.4 1-.6 1.5-.7Z"
	    }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	      d: "M9.2 8.2c-1 .3-1.9 1-1.9 2.1M14.8 8.2c1 .3 1.9 1 1.9 2.1M9.2 15.8c-.9-.2-1.7-.9-1.7-1.9M14.8 15.8c.9-.2 1.7-.9 1.7-1.9"
	    })]
	  }),
	  heart: /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
	    children: [/*#__PURE__*/jsxRuntimeExports.jsx("path", {
	      d: "M20.4 5.7a5 5 0 0 0-7.1 0L12 7l-1.3-1.3a5 5 0 0 0-7.1 7.1L12 21l8.4-8.2a5 5 0 0 0 0-7.1Z"
	    }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	      d: "M7.2 12.5h2.3l1.2-2.2 1.7 4.3 1.3-2.1h2.6"
	    })]
	  }),
	  drop: /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
	    children: [/*#__PURE__*/jsxRuntimeExports.jsx("path", {
	      d: "M12 3.2c3.4 4.2 6.3 7.2 6.3 10.6a6.3 6.3 0 0 1-12.6 0C5.7 10.4 8.6 7.4 12 3.2Z"
	    }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	      d: "M9.3 14.2a3 3 0 0 0 3 2.3"
	    })]
	  }),
	  foot: /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
	    children: [/*#__PURE__*/jsxRuntimeExports.jsx("path", {
	      d: "M9.8 3.5c1.7 0 2.2 1.5 2.2 3.7 0 2 .3 3.1 1.2 4.7.9 1.5 1.8 2.4 1.8 4.2 0 2.5-1.8 4.4-4.5 4.4-2.3 0-3.6-1.1-4.2-2.6-.5-1.2-.1-2.6.3-4 .4-1.4.7-2.1.7-3.8C7.3 7 7.6 3.5 9.8 3.5Z"
	    }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	      d: "M16.8 7.2c1.2.6 1.4 2.5.7 3.4"
	    })]
	  }),
	  activity: /*#__PURE__*/jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
	    children: /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	      d: "M3 12h4l2.2-6.5 4.2 13 2.3-6.5H21"
	    })
	  }),
	  calendar: /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
	    children: [/*#__PURE__*/jsxRuntimeExports.jsx("rect", {
	      x: "3.5",
	      y: "5",
	      width: "17",
	      height: "16",
	      rx: "3"
	    }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	      d: "M7.5 3v4M16.5 3v4M3.5 10h17"
	    }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	      d: "M8 14h.2M12 14h.2M16 14h.2M8 17.5h.2M12 17.5h.2"
	    })]
	  }),
	  walk: /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
	    children: [/*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	      cx: "13.2",
	      cy: "4.2",
	      r: "2"
	    }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	      d: "m10.7 8.3 3.2-.9 2.4 3.3 2.3 1.7M13.4 8.3l-1.2 5.2-3.5 2.4M12.2 13.5l2.6 2.2 1.2 4.6M9.2 20.4l1.5-5"
	    })]
	  }),
	  lock: /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
	    children: [/*#__PURE__*/jsxRuntimeExports.jsx("rect", {
	      x: "4",
	      y: "10",
	      width: "16",
	      height: "11",
	      rx: "3"
	    }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	      d: "M8 10V7a4 4 0 0 1 8 0v3M12 14v3"
	    })]
	  }),
	  file: /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
	    children: [/*#__PURE__*/jsxRuntimeExports.jsx("path", {
	      d: "M14 3.5H6.5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V9Z"
	    }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	      d: "M14 3.5V9h5.5M8.5 13h7M8.5 16.5h5"
	    })]
	  }),
	  download: /*#__PURE__*/jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
	    children: /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	      d: "M12 3.5v11m0 0 4-4m-4 4-4-4M4 17.5v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2"
	    })
	  }),
	  doctor: /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
	    children: [/*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	      cx: "12",
	      cy: "8",
	      r: "4"
	    }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	      d: "M4.5 21c.4-4.1 3.2-6.4 7.5-6.4s7.1 2.3 7.5 6.4M17.5 3.5v4M15.5 5.5h4"
	    })]
	  }),
	  sun: /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
	    children: [/*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	      cx: "12",
	      cy: "12",
	      r: "4"
	    }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	      d: "M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4"
	    })]
	  }),
	  wave: /*#__PURE__*/jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
	    children: /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	      d: "M2.5 12h3l2.1-6 3.1 12 2.5-7 1.7 4h6.6"
	    })
	  })
	};
	function Icon({
	  name,
	  size = 24,
	  strokeWidth = 1.8,
	  ...rest
	}) {
	  return /*#__PURE__*/jsxRuntimeExports.jsx("svg", {
	    width: size,
	    height: size,
	    viewBox: "0 0 24 24",
	    fill: "none",
	    stroke: "currentColor",
	    strokeWidth: strokeWidth,
	    strokeLinecap: "round",
	    strokeLinejoin: "round",
	    "aria-hidden": "true",
	    ...rest,
	    children: iconPaths[name]
	  });
	}

	const pinPosition = {
	  brain: {
	    left: '50%',
	    top: '16%'
	  },
	  heart: {
	    left: '53%',
	    top: '32.5%'
	  },
	  blood: {
	    left: '50%',
	    top: '52.5%'
	  },
	  foot: {
	    left: '40%',
	    top: '89.5%'
	  }
	};
	const cardPosition = {
	  brain: {
	    left: '62%',
	    top: '8%'
	  },
	  heart: {
	    left: '1%',
	    top: '30%'
	  },
	  blood: {
	    left: '62%',
	    top: '49%'
	  },
	  foot: {
	    left: '1%',
	    top: '77%'
	  }
	};
	function BodyMap({
	  areas,
	  onSelect
	}) {
	  const rawId = reactExports.useId();
	  const uid = rawId.replace(/:/g, '');
	  const byId = Object.fromEntries(areas.map(area => [area.id, area]));
	  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	    className: "body-map body-map--anatomical",
	    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	      className: "map-topline",
	      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	        className: "map-title",
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx("i", {
	          className: "live-dot"
	        }), "\u5168\u8EAB\u98CE\u9669\u5730\u56FE"]
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	        className: "map-hint",
	        children: "\u70B9\u51FB\u8EAB\u4F53\u90E8\u4F4D\u67E5\u770B\u98CE\u9669\u8BE6\u60C5"
	      })]
	    }), /*#__PURE__*/jsxRuntimeExports.jsxs("svg", {
	      className: "body-svg body-svg--anatomical",
	      viewBox: "0 0 640 1000",
	      role: "img",
	      "aria-label": "\u4EBA\u4F53\u6B63\u9762\u89E3\u5256\u793A\u610F\u56FE\uFF0C\u5C55\u793A\u8111\u3001\u80BA\u3001\u5FC3\u810F\u3001\u8179\u90E8\u5668\u5B98\u53CA\u4E3B\u8981\u52A8\u9759\u8109",
	      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("defs", {
	        children: [/*#__PURE__*/jsxRuntimeExports.jsxs("linearGradient", {
	          id: `${uid}-skin`,
	          x1: "0",
	          y1: "0",
	          x2: "1",
	          y2: "1",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx("stop", {
	            offset: "0",
	            stopColor: "#ffffff"
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("stop", {
	            offset: "1",
	            stopColor: "#f7f8f7"
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("linearGradient", {
	          id: `${uid}-artery`,
	          x1: "0",
	          y1: "0",
	          x2: "0.8",
	          y2: "1",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx("stop", {
	            offset: "0",
	            stopColor: "#ed927f"
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("stop", {
	            offset: "1",
	            stopColor: "#d86653"
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("linearGradient", {
	          id: `${uid}-vein`,
	          x1: "0",
	          y1: "0",
	          x2: "0.8",
	          y2: "1",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx("stop", {
	            offset: "0",
	            stopColor: "#527985"
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("stop", {
	            offset: "1",
	            stopColor: "#385963"
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("linearGradient", {
	          id: `${uid}-heart`,
	          x1: "0",
	          y1: "0",
	          x2: "1",
	          y2: "1",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx("stop", {
	            offset: "0",
	            stopColor: "#f28d79"
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("stop", {
	            offset: "1",
	            stopColor: "#d95f50"
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("clipPath", {
	          id: `${uid}-body-clip`,
	          children: /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	            d: "M320 174 C283 174 245 183 220 205 C198 224 188 257 185 294 L178 390 C174 427 164 457 151 488 L128 555 C122 573 127 587 140 591 C151 594 161 583 168 565 L199 496 C214 464 225 432 231 399 L238 360 C244 393 249 424 250 458 C250 496 242 539 238 582 C232 641 237 704 245 761 C251 814 263 864 276 910 C280 925 269 942 251 956 L220 977 C205 989 214 1000 233 995 L283 979 C300 972 309 958 306 941 L294 870 C288 825 291 777 298 728 L309 572 L331 572 L342 728 C349 777 352 825 346 870 L334 941 C331 958 340 972 357 979 L407 995 C426 1000 435 989 420 977 L389 956 C371 942 360 925 364 910 C377 864 389 814 395 761 C403 704 408 641 402 582 C398 539 390 496 390 458 C391 424 396 393 402 360 L409 399 C415 432 426 464 441 496 L472 565 C479 583 489 594 500 591 C513 587 518 573 512 555 L489 488 C476 457 466 427 462 390 L455 294 C452 257 442 224 420 205 C395 183 357 174 320 174 Z"
	          })
	        })]
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("line", {
	        x1: "52",
	        y1: "950",
	        x2: "588",
	        y2: "950",
	        stroke: "#d9dfdc",
	        strokeWidth: "1"
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("g", {
	        fill: "#f4f5f4",
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	          cx: "100",
	          cy: "160",
	          r: "30"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	          cx: "535",
	          cy: "320",
	          r: "22"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	          cx: "105",
	          cy: "700",
	          r: "34"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	          cx: "535",
	          cy: "810",
	          r: "28"
	        })]
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("g", {
	        transform: "translate(320 500) scale(1.35 0.92) translate(-320 -500)",
	        children: [/*#__PURE__*/jsxRuntimeExports.jsxs("g", {
	          fill: `url(#${uid}-skin)`,
	          stroke: "#526168",
	          strokeWidth: "1.35",
	          strokeLinejoin: "round",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx("path", {
	            d: "M250 545 C244 604 239 674 245 741 C250 801 263 864 276 910 C280 925 269 942 251 956 L220 977 C205 989 214 1000 233 995 L283 979 C300 972 309 958 306 941 L294 870 C288 825 291 777 298 728 L309 572 Z"
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	            d: "M390 545 C396 604 401 674 395 741 C390 801 377 864 364 910 C360 925 371 942 389 956 L420 977 C435 989 426 1000 407 995 L357 979 C340 972 331 958 334 941 L346 870 C352 825 349 777 342 728 L331 572 Z"
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	            d: "M291 130 L291 188 C279 196 259 199 238 206 C211 216 196 237 189 270 C183 303 181 351 178 390 C176 422 166 458 151 488 L128 555 C122 573 127 587 140 591 C151 594 161 583 168 565 L199 496 C214 464 225 432 231 399 L238 360 C244 393 249 424 250 458 C251 492 247 523 245 545 L395 545 C393 523 389 492 390 458 C391 424 396 393 402 360 L409 399 C415 432 426 464 441 496 L472 565 C479 583 489 594 500 591 C513 587 518 573 512 555 L489 488 C474 458 464 422 462 390 C459 351 457 303 451 270 C444 237 429 216 402 206 C381 199 361 196 349 188 L349 130 Z"
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	            d: "M320 27 C288 27 269 49 269 84 C269 111 279 133 296 145 C303 150 312 153 320 153 C328 153 337 150 344 145 C361 133 371 111 371 84 C371 49 352 27 320 27 Z"
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	            d: "M270 78 C258 74 256 91 264 111 C268 120 275 122 280 115"
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	            d: "M370 78 C382 74 384 91 376 111 C372 120 365 122 360 115"
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	            d: "M128 555 C116 562 108 574 105 588 C103 598 111 603 119 597 L142 578 Z"
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	            d: "M472 555 C484 562 492 574 495 588 C497 598 489 603 481 597 L458 578 Z"
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	            d: "M109 589 C106 610 107 632 111 646 C114 655 122 653 123 644 L122 608 M121 596 C119 620 121 646 126 659 C130 667 137 663 137 654 L134 608 M136 594 C136 620 140 645 146 655 C151 663 157 658 154 648 L148 600 M151 587 C154 609 160 629 168 638 C174 645 180 639 176 630 L163 590"
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	            d: "M491 589 C494 610 493 632 489 646 C486 655 478 653 477 644 L478 608 M479 596 C481 620 479 646 474 659 C470 667 463 663 463 654 L466 608 M464 594 C464 620 460 645 454 655 C449 663 443 658 446 648 L452 600 M449 587 C446 609 440 629 432 638 C426 645 420 639 424 630 L437 590"
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("g", {
	          className: "organs",
	          stroke: "#b8c7c3",
	          strokeWidth: "1.15",
	          strokeLinejoin: "round",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsxs("g", {
	            className: "brain-organ",
	            fill: "#eef1ef",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M319 47 C304 38 286 48 283 66 C271 76 278 96 290 101 C292 118 309 126 320 116 Z"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M321 47 C336 38 354 48 357 66 C369 76 362 96 350 101 C348 118 331 126 320 116 Z"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("g", {
	              fill: "none",
	              stroke: "#91a6a2",
	              strokeWidth: "1",
	              children: /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	                d: "M291 63 C301 54 309 62 306 73 C299 78 298 88 306 94 M345 63 C335 54 327 62 330 73 C337 78 338 88 330 94 M320 53 L320 111 M287 82 C297 79 301 86 298 96 M353 82 C343 79 339 86 342 96"
	              })
	            })]
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("g", {
	            className: "lung-organ",
	            fill: "#e8ecea",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M305 218 C280 205 253 220 246 251 C237 289 246 333 269 354 C282 366 299 359 304 341 Z"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M335 218 C360 205 387 220 394 251 C403 289 394 333 371 354 C358 366 341 359 336 341 Z"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("g", {
	              fill: "none",
	              stroke: "#94aaa4",
	              strokeWidth: "1.4",
	              strokeLinecap: "round",
	              children: /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	                d: "M320 203 L320 258 M320 246 L293 264 L278 287 M320 246 L347 264 L362 287 M293 264 L278 250 M293 264 L269 276 M347 264 L362 250 M347 264 L371 276 M278 287 L265 311 M362 287 L375 311"
	              })
	            })]
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("g", {
	            className: "liver-organ",
	            fill: "#e7e9e6",
	            children: /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M260 374 C278 357 304 360 317 375 C311 399 290 418 263 414 C251 405 250 388 260 374 Z"
	            })
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("g", {
	            className: "kidney-organ",
	            fill: "#e9ece9",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M276 425 C259 414 249 431 253 451 C257 470 272 478 283 466 C289 454 286 436 276 425 Z"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M364 425 C381 414 391 431 387 451 C383 470 368 478 357 466 C351 454 354 436 364 425 Z"
	            })]
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("g", {
	            className: "intestine-organ",
	            fill: "none",
	            stroke: "#d7a69a",
	            strokeWidth: "2",
	            strokeLinecap: "round",
	            children: /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M287 477 C270 479 269 493 282 499 C296 506 342 506 356 499 C369 493 368 479 351 477 M283 511 C270 520 278 534 292 531 C306 528 307 514 320 514 C333 514 334 528 348 531 C362 534 370 520 357 511 M286 540 C299 548 306 539 320 539 C334 539 341 548 354 540"
	            })
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("g", {
	          clipPath: `url(#${uid}-body-clip)`,
	          fill: "none",
	          stroke: `url(#${uid}-vein)`,
	          strokeLinecap: "round",
	          strokeLinejoin: "round",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsxs("g", {
	            strokeWidth: "5.4",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M305 270 C304 237 302 208 300 178 C298 153 298 133 300 116"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M335 270 C336 235 338 205 340 177 C342 153 342 133 340 116"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M305 270 C309 301 312 333 313 366 C314 405 314 451 315 492 C316 520 315 543 313 568"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M335 270 C331 301 328 333 327 366 C326 405 326 451 325 492 C324 520 325 543 327 568"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M315 492 C295 516 278 545 270 579 C260 625 260 686 265 741 C269 797 276 860 282 922"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M325 492 C345 516 362 545 370 579 C380 625 380 686 375 741 C371 797 364 860 358 922"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M313 568 C286 579 267 596 250 624 C232 653 218 689 207 729"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M327 568 C354 579 373 596 390 624 C408 653 422 689 433 729"
	            })]
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("g", {
	            strokeWidth: "2.2",
	            opacity: ".9",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M300 116 C287 100 282 87 282 70 M300 116 C309 99 315 89 320 76 M340 116 C353 100 358 87 358 70 M340 116 C331 99 325 89 320 76"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M305 270 C283 260 265 261 249 275 C231 291 220 321 213 354 L193 451 L168 552"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M335 270 C357 260 375 261 391 275 C409 291 420 321 427 354 L447 451 L472 552"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M315 492 C298 480 284 463 278 445 M325 492 C342 480 356 463 362 445"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M270 579 C250 593 239 615 231 641 M370 579 C390 593 401 615 409 641"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M265 741 C250 768 246 798 250 829 M375 741 C390 768 394 798 390 829"
	            })]
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("g", {
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx("path", {
	            className: "heart-organ",
	            d: "M331 276C322 262 302 267 300 285C298 304 315 317 331 334C347 317 364 304 362 285C360 267 340 262 331 276Z",
	            fill: "#d86653",
	            stroke: "#b95f4c",
	            strokeWidth: "1.4"
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	            d: "M331 276C326 269 318 270 314 276M331 298C340 304 347 313 348 321",
	            fill: "none",
	            stroke: "#a94f40",
	            strokeWidth: "1.1",
	            strokeLinecap: "round",
	            opacity: "0.75"
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("g", {
	          clipPath: `url(#${uid}-body-clip)`,
	          fill: "none",
	          stroke: `url(#${uid}-artery)`,
	          strokeLinecap: "round",
	          strokeLinejoin: "round",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsxs("g", {
	            strokeWidth: "6.2",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M320 281 C314 268 312 252 320 239"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M320 281 C320 319 320 358 320 399 C320 445 320 494 320 542"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M320 399 C305 412 294 431 287 453 C280 475 275 505 271 535"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M320 399 C335 412 346 431 353 453 C360 475 365 505 369 535"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M320 542 C298 555 284 579 278 610 C270 653 271 701 275 744 C279 797 286 859 291 922"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M320 542 C342 555 356 579 362 610 C370 653 369 701 365 744 C361 797 354 859 349 922"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M320 239 C306 220 300 196 297 170 C294 147 294 127 296 107"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M333 239 C347 220 353 196 356 170 C359 147 359 127 357 107"
	            })]
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("g", {
	            strokeWidth: "2.3",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M296 107 C285 94 279 81 277 65 M296 107 C302 92 310 80 320 68 M357 107 C368 94 374 81 376 65 M357 107 C351 92 343 80 333 68"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M296 170 C277 160 256 163 240 177 C222 193 213 218 207 246"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M357 170 C376 160 397 163 413 177 C431 193 440 218 446 246"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M320 399 C300 390 282 388 264 395 M320 399 C340 390 358 388 376 395"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M287 453 C267 443 250 447 236 462 C220 479 212 507 204 535 L182 593"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M353 453 C373 443 390 447 404 462 C420 479 428 507 436 535 L458 593"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M271 535 C253 554 241 579 235 608 M369 535 C387 554 399 579 405 608"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M278 610 C258 637 250 672 252 706 M362 610 C382 637 390 672 388 706"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M275 744 C258 772 256 805 262 838 M365 744 C382 772 384 805 378 838"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M291 922 C279 940 267 950 248 963 M349 922 C361 940 373 950 392 963"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M320 542 C302 559 294 578 292 598 M320 542 C338 559 346 578 348 598"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M320 281 C302 291 286 306 276 325 M320 281 C338 291 354 306 364 325"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	              d: "M276 325 C261 318 250 308 242 294 M364 325 C379 318 390 308 398 294"
	            })]
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("g", {
	          fill: "none",
	          stroke: "#c5d0cc",
	          strokeWidth: "1",
	          strokeLinecap: "round",
	          opacity: ".85",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx("path", {
	            d: "M320 154 L320 190 M289 190 C300 197 309 200 320 200 C331 200 340 197 351 190"
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	            d: "M239 360 C258 370 278 374 296 370 M401 360 C382 370 362 374 344 370"
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	            d: "M250 545 C270 554 292 558 320 558 C348 558 370 554 390 545"
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	            d: "M279 910 C288 923 296 934 306 941 M361 910 C352 923 344 934 334 941"
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("g", {
	          className: "body-auras",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	            cx: "320",
	            cy: "91",
	            r: "55",
	            className: `body-aura ${byId.brain?.tone ?? ''}`
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	            cx: "335",
	            cy: "300",
	            r: "47",
	            className: `body-aura ${byId.heart?.tone ?? ''}`
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	            cx: "320",
	            cy: "520",
	            r: "54",
	            className: `body-aura ${byId.blood?.tone ?? ''}`
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	            cx: "282",
	            cy: "922",
	            r: "37",
	            className: `body-aura ${byId.foot?.tone ?? ''}`
	          })]
	        })]
	      })]
	    }), areas.map(area => /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
	      type: "button",
	      className: `map-pin ${area.tone}`,
	      style: pinPosition[area.id],
	      onClick: () => onSelect(area.id),
	      "aria-label": `查看${area.title}：${area.headline}`,
	      children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	        className: "pin-halo"
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	        className: "pin-core"
	      })]
	    }, area.id)), areas.map(area => /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
	      type: "button",
	      className: `hotspot-card ${area.tone}`,
	      style: cardPosition[area.id],
	      onClick: () => onSelect(area.id),
	      children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	        className: "hotspot-icon",
	        children: /*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	          name: area.icon,
	          size: 19
	        })
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	        className: "hotspot-copy",
	        children: [/*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	          className: "hotspot-label",
	          children: [area.shortTitle, /*#__PURE__*/jsxRuntimeExports.jsx("em", {
	            children: toneShortLabel[area.tone]
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("strong", {
	          children: area.hotspotNote
	        })]
	      }), /*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	        name: "chevron-right",
	        size: 15,
	        className: "hotspot-arrow"
	      })]
	    }, area.id)), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	      className: "map-legend",
	      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx("i", {
	          className: "legend-dot good"
	        }), "\u826F\u597D"]
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx("i", {
	          className: "legend-dot watch"
	        }), "\u9700\u5173\u6CE8"]
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx("i", {
	          className: "legend-dot check"
	        }), "\u5EFA\u8BAE\u8BC4\u4F30"]
	      })]
	    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
	      className: "map-mobile-areas",
	      children: areas.map(area => /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
	        type: "button",
	        className: `mobile-area ${area.tone}`,
	        onClick: () => onSelect(area.id),
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	          className: "mobile-area-icon",
	          children: /*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	            name: area.icon,
	            size: 18
	          })
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx("b", {
	            children: area.shortTitle
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("small", {
	            children: area.hotspotNote
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	          name: "chevron-right",
	          size: 15
	        })]
	      }, area.id))
	    })]
	  });
	}

	function StatusPill({
	  tone,
	  label,
	  compact = false,
	  icon = false
	}) {
	  return /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	    className: `status-pill ${tone} ${compact ? 'is-compact' : ''}`,
	    children: [icon ? /*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	      name: tone === 'good' ? 'check' : tone === 'watch' ? 'info' : 'alert',
	      size: 13
	    }) : /*#__PURE__*/jsxRuntimeExports.jsx("i", {}), label ?? toneLabel[tone]]
	  });
	}

	const easeOutCubic = x => 1 - Math.pow(1 - x, 3);
	const smoothStep = x => {
	  const t = Math.max(0, Math.min(1, x));
	  return t * t * (3 - 2 * t);
	};
	function buildFootCurve(ttr, peakMultiple, baseline = 100, nadir = 24) {
	  const release = 360;
	  const ttp = Math.max(30, Math.min(66, ttr * 0.36));
	  const peakValue = baseline * peakMultiple;
	  const tau = Math.max(12, (ttr - ttp) / Math.log(10));
	  const points = [];
	  for (let t = 0; t <= 600; t += 3) {
	    let v;
	    if (t < 60) {
	      v = baseline + Math.sin(t * 0.11) * 1.1 + Math.sin(t * 0.37) * 0.35;
	    } else if (t < 88) {
	      const p = smoothStep((t - 60) / 28);
	      v = baseline + (nadir - baseline) * p + Math.sin(t * 0.2) * 0.4 * (1 - p);
	    } else if (t < release) {
	      v = nadir + Math.sin(t * 0.18) * 0.65;
	    } else if (t <= release + ttp) {
	      const p = easeOutCubic((t - release) / ttp);
	      v = nadir + (peakValue - nadir) * p;
	    } else {
	      v = baseline + (peakValue - baseline) * Math.exp(-(t - release - ttp) / tau);
	    }
	    points.push({
	      t,
	      v: Math.max(2, v)
	    });
	  }
	  return {
	    points,
	    peak: {
	      t: release + ttp,
	      v: peakValue
	    },
	    recovery: {
	      t: release + ttr,
	      v: baseline + (peakValue - baseline) * 0.1
	    },
	    ttr,
	    peakMultiple
	  };
	}
	function buildBloodPressureWave(sbp, dbp, hr) {
	  const cycle = 60 / hr;
	  const duration = cycle * 3.2;
	  const keys = [[0, 0.08], [0.05, 0.12], [0.12, 1], [0.19, 0.82], [0.3, 0.58], [0.36, 0.66], [0.43, 0.47], [0.62, 0.2], [0.8, 0.11], [1, 0.08]];
	  const valueAt = phase => {
	    for (let i = 0; i < keys.length - 1; i += 1) {
	      const [p0, v0] = keys[i];
	      const [p1, v1] = keys[i + 1];
	      if (phase >= p0 && phase <= p1) {
	        const local = smoothStep((phase - p0) / Math.max(0.0001, p1 - p0));
	        return v0 + (v1 - v0) * local;
	      }
	    }
	    return keys[keys.length - 1][1];
	  };
	  const points = [];
	  const steps = 260;
	  const amplitude = sbp - dbp;
	  for (let i = 0; i <= steps; i += 1) {
	    const t = i / steps * duration;
	    const phase = t / cycle % 1;
	    const v = dbp + amplitude * valueAt(phase);
	    points.push({
	      t,
	      v
	    });
	  }
	  return points;
	}

	const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
	function linePath(points) {
	  return points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
	}
	function FootCurveChart({
	  patient,
	  compact = false
	}) {
	  const left = buildFootCurve(patient.raw.foot.leftTtr, patient.raw.foot.leftPeak);
	  const right = buildFootCurve(patient.raw.foot.rightTtr, patient.raw.foot.rightPeak);
	  const W = compact ? 520 : 620;
	  const H = compact ? 260 : 310;
	  const margin = {
	    top: 28,
	    right: 18,
	    bottom: 38,
	    left: 42
	  };
	  const innerW = W - margin.left - margin.right;
	  const innerH = H - margin.top - margin.bottom;
	  const maxT = 600;
	  const maxV = 170;
	  const x = t => margin.left + t / maxT * innerW;
	  const y = v => margin.top + innerH - v / maxV * innerH;
	  const leftPoints = left.points.map(p => ({
	    x: x(p.t),
	    y: y(p.v)
	  }));
	  const rightPoints = right.points.map(p => ({
	    x: x(p.t),
	    y: y(p.v)
	  }));
	  const yTicks = [0, 50, 100, 150];
	  const xTicks = [0, 120, 240, 360, 480, 600];
	  const labelLeft = left.recovery.t > 480;
	  const footTone = patient.raw.foot.ttr <= 90 ? 'good' : patient.raw.foot.ttr > 150 ? 'check' : 'watch';
	  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	    className: `foot-chart ${compact ? 'is-compact' : ''}`,
	    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	      className: "foot-chart-top",
	      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	        className: "chart-phase-labels",
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	          style: {
	            width: '10%'
	          },
	          children: "\u9759\u606F"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	          className: "phase-occlusion",
	          style: {
	            width: '50%'
	          },
	          children: "\u963B\u65AD 5 \u5206\u949F"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	          style: {
	            width: '40%'
	          },
	          children: "\u677E\u5F00\u540E"
	        })]
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	        className: "chart-unit",
	        children: "\u76F8\u5BF9\u8840\u6D41 %"
	      })]
	    }), /*#__PURE__*/jsxRuntimeExports.jsxs("svg", {
	      viewBox: `0 0 ${W} ${H}`,
	      className: "chart-svg",
	      role: "img",
	      "aria-label": "\u811A\u8DBE\u7F3A\u8840\u518D\u704C\u6CE8\u8840\u6D41\u66F2\u7EBF",
	      children: [/*#__PURE__*/jsxRuntimeExports.jsx("defs", {
	        children: /*#__PURE__*/jsxRuntimeExports.jsxs("linearGradient", {
	          id: "foot-fill",
	          x1: "0",
	          y1: "0",
	          x2: "0",
	          y2: "1",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx("stop", {
	            offset: "0",
	            stopColor: "#22a88f",
	            stopOpacity: "0.16"
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("stop", {
	            offset: "1",
	            stopColor: "#22a88f",
	            stopOpacity: "0"
	          })]
	        })
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("rect", {
	        x: x(60),
	        y: margin.top,
	        width: x(360) - x(60),
	        height: innerH,
	        fill: "#f3e6da",
	        opacity: "0.55",
	        rx: "4"
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("rect", {
	        x: x(360),
	        y: margin.top,
	        width: innerW - (x(360) - margin.left),
	        height: innerH,
	        fill: "#e4f4ef",
	        opacity: "0.55",
	        rx: "4"
	      }), yTicks.map(tick => /*#__PURE__*/jsxRuntimeExports.jsxs("g", {
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx("line", {
	          x1: margin.left,
	          x2: W - margin.right,
	          y1: y(tick),
	          y2: y(tick),
	          className: "chart-grid"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("text", {
	          x: margin.left - 9,
	          y: y(tick) + 4,
	          textAnchor: "end",
	          className: "chart-axis",
	          children: tick
	        })]
	      }, tick)), xTicks.map(tick => /*#__PURE__*/jsxRuntimeExports.jsx("text", {
	        x: x(tick),
	        y: H - 13,
	        textAnchor: "middle",
	        className: "chart-axis",
	        children: tick === 0 ? '0' : `${tick / 60} 分`
	      }, tick)), /*#__PURE__*/jsxRuntimeExports.jsx("line", {
	        x1: margin.left,
	        x2: W - margin.right,
	        y1: y(100),
	        y2: y(100),
	        className: "chart-baseline"
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("text", {
	        x: W - margin.right,
	        y: y(100) - 7,
	        textAnchor: "end",
	        className: "chart-note",
	        children: "\u9759\u606F\u6C34\u5E73 100%"
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	        d: linePath(leftPoints),
	        className: `foot-line left ${footTone}`
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	        d: linePath(rightPoints),
	        className: "foot-line right"
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("line", {
	        x1: x(360),
	        x2: x(360),
	        y1: margin.top,
	        y2: margin.top + innerH,
	        className: "release-line"
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("text", {
	        x: x(360) + 7,
	        y: margin.top + 12,
	        className: "release-label",
	        children: "\u677E\u5F00\u8896\u5E26"
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	        cx: x(left.peak.t),
	        cy: y(left.peak.v),
	        r: "4.5",
	        className: `chart-dot ${footTone}`
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	        cx: x(left.recovery.t),
	        cy: y(left.recovery.v),
	        r: "5.5",
	        className: `recovery-dot ${footTone}`
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	        cx: x(left.recovery.t),
	        cy: y(left.recovery.v),
	        r: "10",
	        className: `recovery-ring ${footTone}`
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("g", {
	        transform: `translate(${clamp(x(left.recovery.t) + (labelLeft ? -12 : 12), margin.left + 48, W - margin.right - 55)}, ${clamp(y(left.recovery.v) - 26, margin.top + 10, margin.top + innerH - 48)})`,
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx("rect", {
	          x: labelLeft ? -88 : 0,
	          y: "0",
	          width: "88",
	          height: "40",
	          rx: "9",
	          className: "chart-bubble"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("text", {
	          x: labelLeft ? -44 : 44,
	          y: "16",
	          textAnchor: "middle",
	          className: "bubble-title",
	          children: "\u6062\u590D\u65F6\u95F4"
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("text", {
	          x: labelLeft ? -44 : 44,
	          y: "32",
	          textAnchor: "middle",
	          className: "bubble-value",
	          children: [left.ttr, " \u79D2"]
	        })]
	      })]
	    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	      className: "chart-legend",
	      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx("i", {
	          className: `line-key left ${footTone}`
	        }), "\u5DE6\u8DB3 ", left.ttr, " \u79D2"]
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx("i", {
	          className: "line-key right"
	        }), "\u53F3\u8DB3 ", right.ttr, " \u79D2"]
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	        className: "chart-hint-line",
	        children: "\u6062\u590D\u5230\u63A5\u8FD1\u9759\u606F\u6C34\u5E73\u6240\u9700\u65F6\u95F4"
	      })]
	    })]
	  });
	}
	function BrainVisual({
	  patient
	}) {
	  const {
	    left,
	    right,
	    asym
	  } = patient.raw.brain;
	  const tone = Math.min(left, right) >= 60 && asym <= 4 ? 'good' : Math.min(left, right) >= 55 && asym <= 7 ? 'watch' : 'check';
	  const diff = Math.abs(left - right);
	  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	    className: `brain-visual ${tone}`,
	    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("svg", {
	      viewBox: "0 0 400 270",
	      className: "brain-svg",
	      role: "img",
	      "aria-label": `左脑供氧 ${left}%，右脑供氧 ${right}%`,
	      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("defs", {
	        children: [/*#__PURE__*/jsxRuntimeExports.jsxs("linearGradient", {
	          id: "brain-left",
	          x1: "0",
	          y1: "0",
	          x2: "1",
	          y2: "1",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx("stop", {
	            offset: "0",
	            stopColor: tone === 'good' ? '#6ed4c0' : tone === 'watch' ? '#ecc27c' : '#eaa38d'
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("stop", {
	            offset: "1",
	            stopColor: tone === 'good' ? '#1c9d86' : tone === 'watch' ? '#c7953f' : '#cc735c'
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("linearGradient", {
	          id: "brain-right",
	          x1: "1",
	          y1: "0",
	          x2: "0",
	          y2: "1",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx("stop", {
	            offset: "0",
	            stopColor: tone === 'good' ? '#8ae1cf' : tone === 'watch' ? '#f3d398' : '#f0b7a6'
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("stop", {
	            offset: "1",
	            stopColor: tone === 'good' ? '#29a891' : tone === 'watch' ? '#d5a451' : '#d47e67'
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("filter", {
	          id: "brain-glow",
	          children: /*#__PURE__*/jsxRuntimeExports.jsx("feGaussianBlur", {
	            stdDeviation: "7"
	          })
	        })]
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("ellipse", {
	        cx: "200",
	        cy: "135",
	        rx: "145",
	        ry: "115",
	        fill: "currentColor",
	        opacity: "0.07"
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	        d: "M192 55C157 35 105 51 92 94C80 136 105 190 146 202C168 209 188 194 192 170Z",
	        fill: "url(#brain-left)",
	        opacity: "0.95"
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	        d: "M208 55C243 35 295 51 308 94C320 136 295 190 254 202C232 209 212 194 208 170Z",
	        fill: "url(#brain-right)",
	        opacity: "0.95"
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	        d: "M192 60C188 100 188 145 192 190M208 60C212 100 212 145 208 190",
	        stroke: "#fdfcf7",
	        strokeWidth: "3",
	        opacity: "0.9"
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("g", {
	        opacity: "0.34",
	        fill: "none",
	        stroke: "#ffffff",
	        strokeWidth: "2",
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx("path", {
	          d: "M164 76C146 88 136 106 138 124M124 116C110 129 108 148 120 163M154 154C142 169 146 185 160 190"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	          d: "M236 76C254 88 264 106 262 124M276 116C290 129 292 148 280 163M246 154C258 169 254 185 240 190"
	        })]
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	        cx: "133",
	        cy: "118",
	        r: "28",
	        fill: "#fff",
	        opacity: "0.15",
	        filter: "url(#brain-glow)"
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	        cx: "267",
	        cy: "118",
	        r: "28",
	        fill: "#fff",
	        opacity: "0.15",
	        filter: "url(#brain-glow)"
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("text", {
	        x: "124",
	        y: "232",
	        textAnchor: "middle",
	        className: "brain-side-label",
	        children: "\u5DE6\u8111"
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("text", {
	        x: "276",
	        y: "232",
	        textAnchor: "middle",
	        className: "brain-side-label",
	        children: "\u53F3\u8111"
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("text", {
	        x: "124",
	        y: "256",
	        textAnchor: "middle",
	        className: "brain-value-label",
	        children: [left, "%"]
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("text", {
	        x: "276",
	        y: "256",
	        textAnchor: "middle",
	        className: "brain-value-label",
	        children: [right, "%"]
	      })]
	    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	      className: "brain-balance",
	      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx("i", {
	          className: "balance-mark left"
	        }), "\u5DE6\u8111\u4F9B\u6C27"]
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("strong", {
	        children: [left, "%"]
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	        className: "balance-divider",
	        children: ["\u76F8\u5DEE ", diff, " \u4E2A\u767E\u5206\u70B9"]
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("strong", {
	        children: [right, "%"]
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	        children: ["\u53F3\u8111\u4F9B\u6C27", /*#__PURE__*/jsxRuntimeExports.jsx("i", {
	          className: "balance-mark right"
	        })]
	      })]
	    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	      className: "brain-verdict",
	      children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	        className: "verdict-dot"
	      }), tone === 'good' ? '左右供氧均衡，暂未见明显不对称' : '左右供氧存在差异，建议结合医生意见观察']
	    })]
	  });
	}
	function BioBar({
	  label,
	  value,
	  unit,
	  low,
	  high,
	  max,
	  tone
	}) {
	  const pct = clamp(value / max * 100, 4, 96);
	  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	    className: `bio-bar ${tone}`,
	    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	      className: "bio-bar-head",
	      children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	        children: label
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	        className: "bio-value",
	        children: [value, /*#__PURE__*/jsxRuntimeExports.jsx("small", {
	          children: unit
	        })]
	      })]
	    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	      className: "bio-track",
	      children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	        className: "bio-range",
	        style: {
	          left: `${low / max * 100}%`,
	          width: `${(high - low) / max * 100}%`
	        }
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	        className: "bio-marker",
	        style: {
	          left: `${pct}%`
	        }
	      })]
	    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	      className: "bio-bar-foot",
	      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	        children: ["\u53C2\u8003 ", low, "\u2013", high, " ", unit]
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	        children: tone === 'good' ? '在范围内' : tone === 'watch' ? '偏离理想范围' : '建议进一步评估'
	      })]
	    })]
	  });
	}
	function BloodVisual({
	  patient
	}) {
	  const b = patient.raw.blood;
	  const vTone = b.viscosity > 4.8 ? b.viscosity >= 6.4 ? 'check' : 'watch' : 'good';
	  const lTone = b.ldl > 3.4 ? b.ldl >= 4.5 ? 'check' : 'watch' : 'good';
	  const gTone = b.glu > 6.1 ? b.glu >= 7 ? 'check' : 'watch' : 'good';
	  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	    className: "blood-visual",
	    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	      className: `capillary-scene ${vTone}`,
	      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	        className: "capillary-label",
	        children: [/*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	            name: "drop",
	            size: 16
	          }), "\u8840\u6DB2\u6D41\u52A8\u793A\u610F"]
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("em", {
	          children: "\u5FAE\u6D41\u63A7\u82AF\u7247 \xB7 9 \u9879\u6307\u6807"
	        })]
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("svg", {
	        viewBox: "0 0 420 160",
	        className: "capillary-svg",
	        role: "img",
	        "aria-label": "\u8840\u6DB2\u5728\u6BDB\u7EC6\u8840\u7BA1\u4E2D\u6D41\u52A8\u7684\u793A\u610F\u56FE",
	        children: [/*#__PURE__*/jsxRuntimeExports.jsxs("defs", {
	          children: [/*#__PURE__*/jsxRuntimeExports.jsxs("linearGradient", {
	            id: "cap-tube",
	            x1: "0",
	            y1: "0",
	            x2: "1",
	            y2: "0",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("stop", {
	              offset: "0",
	              stopColor: "#f4d7c7"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("stop", {
	              offset: "0.55",
	              stopColor: "#efc4ad"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("stop", {
	              offset: "1",
	              stopColor: "#f4d7c7"
	            })]
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("filter", {
	            id: "cell-glow",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("feGaussianBlur", {
	              stdDeviation: "2.4",
	              result: "b"
	            }), /*#__PURE__*/jsxRuntimeExports.jsxs("feMerge", {
	              children: [/*#__PURE__*/jsxRuntimeExports.jsx("feMergeNode", {
	                in: "b"
	              }), /*#__PURE__*/jsxRuntimeExports.jsx("feMergeNode", {
	                in: "SourceGraphic"
	              })]
	            })]
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	          d: "M32 80C85 44 156 44 210 80C264 116 335 116 388 80",
	          fill: "none",
	          stroke: "#f2e4d8",
	          strokeWidth: "34",
	          strokeLinecap: "round"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	          d: "M32 80C85 44 156 44 210 80C264 116 335 116 388 80",
	          fill: "none",
	          stroke: "url(#cap-tube)",
	          strokeWidth: "24",
	          strokeLinecap: "round",
	          opacity: "0.9"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	          d: "M32 80C85 44 156 44 210 80C264 116 335 116 388 80",
	          fill: "none",
	          stroke: "#fff8f0",
	          strokeWidth: "2",
	          strokeDasharray: "2 8",
	          opacity: "0.7"
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("g", {
	          filter: "url(#cell-glow)",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	            r: "7",
	            fill: "#d96654",
	            children: /*#__PURE__*/jsxRuntimeExports.jsx("animateMotion", {
	              dur: "7s",
	              repeatCount: "indefinite",
	              path: "M32 80C85 44 156 44 210 80C264 116 335 116 388 80"
	            })
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	            r: "5.5",
	            fill: "#e4816a",
	            children: /*#__PURE__*/jsxRuntimeExports.jsx("animateMotion", {
	              dur: "7s",
	              begin: "-2.3s",
	              repeatCount: "indefinite",
	              path: "M32 80C85 44 156 44 210 80C264 116 335 116 388 80"
	            })
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	            r: "6.2",
	            fill: "#cf5b4e",
	            children: /*#__PURE__*/jsxRuntimeExports.jsx("animateMotion", {
	              dur: "7s",
	              begin: "-4.6s",
	              repeatCount: "indefinite",
	              path: "M32 80C85 44 156 44 210 80C264 116 335 116 388 80"
	            })
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("text", {
	          x: "210",
	          y: "145",
	          textAnchor: "middle",
	          className: "capillary-note",
	          children: "\u8840\u6DB2\u8D8A\u9ECF\u7A20\uFF0C\u6D41\u52A8\u8D8A\u8D39\u529B"
	        })]
	      })]
	    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	      className: "bio-bars",
	      children: [/*#__PURE__*/jsxRuntimeExports.jsx(BioBar, {
	        label: "\u8840\u6DB2\u9ECF\u7A20\u5EA6",
	        value: b.viscosity,
	        unit: "mPa\xB7s",
	        low: 3.5,
	        high: 4.8,
	        max: 9,
	        tone: vTone
	      }), /*#__PURE__*/jsxRuntimeExports.jsx(BioBar, {
	        label: "\u574F\u80C6\u56FA\u9187\uFF08LDL-C\uFF09",
	        value: b.ldl,
	        unit: "mmol/L",
	        low: 0,
	        high: 3.4,
	        max: 6.5,
	        tone: lTone
	      }), /*#__PURE__*/jsxRuntimeExports.jsx(BioBar, {
	        label: "\u7A7A\u8179\u8840\u7CD6",
	        value: b.glu,
	        unit: "mmol/L",
	        low: 3.9,
	        high: 6.1,
	        max: 10,
	        tone: gTone
	      })]
	    })]
	  });
	}
	function BpWaveChart({
	  patient,
	  compact = false
	}) {
	  const {
	    sbp,
	    dbp,
	    hr
	  } = patient.raw.heart;
	  const points = buildBloodPressureWave(sbp, dbp, hr);
	  const W = compact ? 460 : 600;
	  const H = compact ? 150 : 210;
	  const margin = {
	    top: 24,
	    right: 22,
	    bottom: 26,
	    left: 42
	  };
	  const innerW = W - margin.left - margin.right;
	  const innerH = H - margin.top - margin.bottom;
	  const minV = dbp - 14;
	  const maxV = sbp + 14;
	  const x = t => margin.left + t / points[points.length - 1].t * innerW;
	  const y = v => margin.top + innerH - (v - minV) / (maxV - minV) * innerH;
	  const pathPoints = points.map(p => ({
	    x: x(p.t),
	    y: y(p.v)
	  }));
	  const line = linePath(pathPoints);
	  const area = `${line} L${x(points[points.length - 1].t)},${y(minV)} L${x(0)},${y(minV)} Z`;
	  const yTicks = [dbp, sbp];
	  return /*#__PURE__*/jsxRuntimeExports.jsx("div", {
	    className: `bp-chart ${compact ? 'is-compact' : ''}`,
	    children: /*#__PURE__*/jsxRuntimeExports.jsxs("svg", {
	      viewBox: `0 0 ${W} ${H}`,
	      className: "chart-svg",
	      role: "img",
	      "aria-label": `血压波形，高压 ${sbp}，低压 ${dbp}`,
	      children: [/*#__PURE__*/jsxRuntimeExports.jsx("defs", {
	        children: /*#__PURE__*/jsxRuntimeExports.jsxs("linearGradient", {
	          id: "bp-fill",
	          x1: "0",
	          y1: "0",
	          x2: "0",
	          y2: "1",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx("stop", {
	            offset: "0",
	            stopColor: "#d96f5b",
	            stopOpacity: "0.28"
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("stop", {
	            offset: "1",
	            stopColor: "#d96f5b",
	            stopOpacity: "0.01"
	          })]
	        })
	      }), yTicks.map(tick => /*#__PURE__*/jsxRuntimeExports.jsxs("g", {
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx("line", {
	          x1: margin.left,
	          x2: W - margin.right,
	          y1: y(tick),
	          y2: y(tick),
	          className: "chart-grid"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("text", {
	          x: margin.left - 9,
	          y: y(tick) + 4,
	          textAnchor: "end",
	          className: "chart-axis",
	          children: tick
	        })]
	      }, tick)), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	        d: area,
	        fill: "url(#bp-fill)"
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	        d: line,
	        className: "bp-line"
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	        cx: x(points.reduce((best, p) => p.v > best.v ? p : best, points[0]).t),
	        cy: y(sbp),
	        r: "4",
	        className: "bp-dot"
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("text", {
	        x: margin.left,
	        y: margin.top - 8,
	        className: "chart-unit",
	        children: "mmHg"
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("text", {
	        x: W - margin.right,
	        y: margin.top - 8,
	        textAnchor: "end",
	        className: "chart-note",
	        children: "\u8FDE\u7EED\u8840\u538B\u6CE2\u5F62"
	      })]
	    })
	  });
	}
	function HeartVisual({
	  patient
	}) {
	  const h = patient.raw.heart;
	  const tone = h.sbp >= 140 || h.dbp >= 90 ? 'check' : h.sbp >= 130 || h.dbp >= 85 ? 'watch' : 'good';
	  const rangePct = h.sbp >= 140 || h.dbp >= 90 ? 72 : h.sbp >= 130 || h.dbp >= 85 ? 50 : 26;
	  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	    className: `heart-visual ${tone}`,
	    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	      className: "bp-readout",
	      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	        children: [/*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	          children: ["\u9AD8\u538B ", /*#__PURE__*/jsxRuntimeExports.jsx("small", {
	            children: "\u6536\u7F29\u538B"
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("strong", {
	          children: [h.sbp, /*#__PURE__*/jsxRuntimeExports.jsx("em", {
	            children: "mmHg"
	          })]
	        })]
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
	        className: "bp-slash",
	        children: "/"
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	        children: [/*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	          children: ["\u4F4E\u538B ", /*#__PURE__*/jsxRuntimeExports.jsx("small", {
	            children: "\u8212\u5F20\u538B"
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("strong", {
	          children: [h.dbp, /*#__PURE__*/jsxRuntimeExports.jsx("em", {
	            children: "mmHg"
	          })]
	        })]
	      })]
	    }), /*#__PURE__*/jsxRuntimeExports.jsx(BpWaveChart, {
	      patient: patient,
	      compact: true
	    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	      className: "bp-scale",
	      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	        className: "bp-scale-labels",
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	          children: "\u7406\u60F3"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	          children: "\u6B63\u5E38\u9AD8\u503C"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	          children: "\u504F\u9AD8"
	        })]
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	        className: "bp-scale-track",
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	          className: "bp-zone ideal"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	          className: "bp-zone high"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	          className: "bp-zone elevated"
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	          className: "bp-marker",
	          style: {
	            left: `${rangePct}%`
	          },
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx("i", {}), "\u60A8\u7684\u4F4D\u7F6E"]
	        })]
	      })]
	    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	      className: "vital-chips",
	      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	          name: "heart",
	          size: 16
	        }), "\u5FC3\u7387 ", /*#__PURE__*/jsxRuntimeExports.jsx("b", {
	          children: h.hr
	        }), " \u6B21/\u5206"]
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	          name: "activity",
	          size: 16
	        }), "\u5FC3\u7387\u53D8\u5F02\u6027 ", /*#__PURE__*/jsxRuntimeExports.jsx("b", {
	          children: h.hrv
	        }), " ms"]
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	          name: "wave",
	          size: 16
	        }), "\u8840\u7BA1\u5F39\u6027 ", /*#__PURE__*/jsxRuntimeExports.jsx("b", {
	          children: h.pwv.toFixed(1)
	        }), " m/s"]
	      })]
	    })]
	  });
	}

	function AreaVisual({
	  patient,
	  area
	}) {
	  if (area.id === 'brain') return /*#__PURE__*/jsxRuntimeExports.jsx(BrainVisual, {
	    patient: patient
	  });
	  if (area.id === 'blood') return /*#__PURE__*/jsxRuntimeExports.jsx(BloodVisual, {
	    patient: patient
	  });
	  if (area.id === 'heart') return /*#__PURE__*/jsxRuntimeExports.jsx(HeartVisual, {
	    patient: patient
	  });
	  return /*#__PURE__*/jsxRuntimeExports.jsx(FootCurveChart, {
	    patient: patient,
	    compact: true
	  });
	}
	function rowStatusLabel(status) {
	  if (status === 'good') return '正常';
	  if (status === 'watch') return '偏离';
	  if (status === 'check') return '关注';
	  return '—';
	}
	function DetailSheet({
	  patient,
	  area,
	  index,
	  total,
	  prev,
	  next,
	  onClose,
	  onPrev,
	  onNext
	}) {
	  const sheetRef = reactExports.useRef(null);
	  const closeRef = reactExports.useRef(null);
	  reactExports.useEffect(() => {
	    const previous = document.activeElement;
	    const originalOverflow = document.body.style.overflow;
	    document.body.style.overflow = 'hidden';
	    closeRef.current?.focus();
	    const onKeyDown = event => {
	      if (event.key === 'Escape') {
	        onClose();
	        return;
	      }
	      if (event.key !== 'Tab' || !sheetRef.current) return;
	      const focusable = sheetRef.current.querySelectorAll('button:not([disabled]), [href], summary, input, [tabindex]:not([tabindex="-1"])');
	      if (focusable.length === 0) return;
	      const first = focusable[0];
	      const last = focusable[focusable.length - 1];
	      if (event.shiftKey && document.activeElement === first) {
	        event.preventDefault();
	        last.focus();
	      } else if (!event.shiftKey && document.activeElement === last) {
	        event.preventDefault();
	        first.focus();
	      }
	    };
	    document.addEventListener('keydown', onKeyDown);
	    return () => {
	      document.body.style.overflow = originalOverflow;
	      document.removeEventListener('keydown', onKeyDown);
	      previous?.focus();
	    };
	  }, [onClose]);
	  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	    className: "sheet-layer",
	    children: [/*#__PURE__*/jsxRuntimeExports.jsx("button", {
	      className: "sheet-scrim",
	      type: "button",
	      "aria-label": "\u5173\u95ED\u89E3\u8BFB",
	      onClick: onClose
	    }), /*#__PURE__*/jsxRuntimeExports.jsxs("section", {
	      className: "detail-sheet",
	      role: "dialog",
	      "aria-modal": "true",
	      "aria-labelledby": "sheet-title",
	      "aria-describedby": "sheet-summary",
	      ref: sheetRef,
	      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
	        className: `sheet-accent ${area.tone}`
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
	        className: "sheet-grab",
	        "aria-hidden": "true"
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("header", {
	        className: "sheet-header",
	        children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	          className: "sheet-topline",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "sheet-index",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	              children: ["0", index + 1]
	            }), /*#__PURE__*/jsxRuntimeExports.jsxs("em", {
	              children: ["/ 0", total]
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("i", {}), /*#__PURE__*/jsxRuntimeExports.jsx("b", {
	              children: area.title
	            })]
	          }), /*#__PURE__*/jsxRuntimeExports.jsx(StatusPill, {
	            tone: area.tone,
	            icon: true
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
	            ref: closeRef,
	            type: "button",
	            className: "sheet-close",
	            onClick: onClose,
	            "aria-label": "\u5173\u95ED",
	            children: /*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	              name: "close",
	              size: 22
	            })
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("h2", {
	          id: "sheet-title",
	          children: area.headline
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("p", {
	          id: "sheet-summary",
	          children: area.summary
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	          className: "sheet-method",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	            name: "activity",
	            size: 15
	          }), "\u68C0\u6D4B\u65B9\u5F0F \xB7 ", area.method]
	        })]
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	        className: "sheet-content",
	        children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	          className: "sheet-visual-col",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "visual-label",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	              children: "\u60A8\u7684\u60C5\u51B5"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("em", {
	              children: "\u672C\u6B21\u68C0\u6D4B\u7ED3\u679C"
	            })]
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
	            className: `visual-frame ${area.tone}`,
	            children: /*#__PURE__*/jsxRuntimeExports.jsx(AreaVisual, {
	              patient: patient,
	              area: area
	            })
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "visual-footnote",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	              name: "info",
	              size: 14
	            }), "\u56FE\u5F62\u7528\u4E8E\u5E2E\u52A9\u7406\u89E3\uFF0C\u5177\u4F53\u5224\u65AD\u4EE5\u533B\u751F\u89E3\u91CA\u4E3A\u51C6"]
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	          className: "sheet-copy",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsxs("section", {
	            className: "why-block",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("h3", {
	              children: area.whyTitle
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("ul", {
	              children: area.why.map(reason => /*#__PURE__*/jsxRuntimeExports.jsxs("li", {
	                children: [/*#__PURE__*/jsxRuntimeExports.jsx("i", {
	                  className: area.tone
	                }), reason]
	              }, reason))
	            })]
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "meaning-grid",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	              className: "meaning-card",
	              children: [/*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	                children: [/*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	                  name: "check",
	                  size: 15
	                }), "\u8FD9\u4EE3\u8868\u4EC0\u4E48"]
	              }), /*#__PURE__*/jsxRuntimeExports.jsx("p", {
	                children: area.meaning
	              })]
	            }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	              className: "meaning-card is-muted",
	              children: [/*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	                children: [/*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	                  name: "info",
	                  size: 15
	                }), "\u4E0D\u4EE3\u8868\u4EC0\u4E48"]
	              }), /*#__PURE__*/jsxRuntimeExports.jsx("p", {
	                children: area.notMeaning
	              })]
	            })]
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: `next-step ${area.tone}`,
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
	              className: "next-step-icon",
	              children: /*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	                name: "arrow-right",
	                size: 19
	              })
	            }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	              children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	                children: "\u4E0B\u4E00\u6B65\u5EFA\u8BAE"
	              }), /*#__PURE__*/jsxRuntimeExports.jsx("p", {
	                children: area.action
	              })]
	            })]
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("details", {
	            className: "data-details",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsxs("summary", {
	              children: [/*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	                children: [/*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	                  name: "file",
	                  size: 17
	                }), "\u67E5\u770B\u8BE6\u7EC6\u6570\u636E ", /*#__PURE__*/jsxRuntimeExports.jsxs("em", {
	                  children: [area.details.length, " \u9879"]
	                })]
	              }), /*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	                name: "chevron-down",
	                size: 18,
	                className: "detail-chevron"
	              })]
	            }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	              className: "detail-table-wrap",
	              children: [/*#__PURE__*/jsxRuntimeExports.jsxs("table", {
	                className: "detail-table",
	                children: [/*#__PURE__*/jsxRuntimeExports.jsx("thead", {
	                  children: /*#__PURE__*/jsxRuntimeExports.jsxs("tr", {
	                    children: [/*#__PURE__*/jsxRuntimeExports.jsx("th", {
	                      children: "\u6307\u6807"
	                    }), /*#__PURE__*/jsxRuntimeExports.jsx("th", {
	                      children: "\u7ED3\u679C"
	                    }), /*#__PURE__*/jsxRuntimeExports.jsx("th", {
	                      children: "\u53C2\u8003\u8303\u56F4"
	                    }), /*#__PURE__*/jsxRuntimeExports.jsx("th", {
	                      children: "\u63D0\u793A"
	                    })]
	                  })
	                }), /*#__PURE__*/jsxRuntimeExports.jsx("tbody", {
	                  children: area.details.map(row => /*#__PURE__*/jsxRuntimeExports.jsxs("tr", {
	                    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("td", {
	                      children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	                        children: row.label
	                      }), row.note ? /*#__PURE__*/jsxRuntimeExports.jsx("small", {
	                        children: row.note
	                      }) : null]
	                    }), /*#__PURE__*/jsxRuntimeExports.jsxs("td", {
	                      children: [/*#__PURE__*/jsxRuntimeExports.jsx("b", {
	                        children: row.value
	                      }), /*#__PURE__*/jsxRuntimeExports.jsx("small", {
	                        children: row.unit
	                      })]
	                    }), /*#__PURE__*/jsxRuntimeExports.jsx("td", {
	                      children: row.range
	                    }), /*#__PURE__*/jsxRuntimeExports.jsx("td", {
	                      children: /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	                        className: `row-status ${row.status}`,
	                        children: [/*#__PURE__*/jsxRuntimeExports.jsx("i", {}), rowStatusLabel(row.status)]
	                      })
	                    })]
	                  }, row.label))
	                })]
	              }), /*#__PURE__*/jsxRuntimeExports.jsx("p", {
	                className: "table-note",
	                children: "\u53C2\u8003\u8303\u56F4\u6765\u81EA\u672C\u6B21\u68C0\u6D4B\u673A\u6784\u4F7F\u7528\u7684\u6210\u4EBA\u53C2\u8003\u533A\u95F4\uFF0C\u5177\u4F53\u89E3\u8BFB\u9700\u7ED3\u5408\u4E2A\u4EBA\u60C5\u51B5\u3002"
	              })]
	            })]
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("p", {
	            className: "sheet-ai-note",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	              name: "shield",
	              size: 14
	            }), "\u672C\u9875\u4E3A\u667A\u80FD\u8F85\u52A9\u89E3\u91CA\uFF0C\u7531\u4F53\u68C0\u533B\u751F\u5BA1\u6838\uFF1B\u6700\u7EC8\u4EE5\u533B\u751F\u610F\u89C1\u4E3A\u51C6\u3002"]
	          })]
	        })]
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("footer", {
	        className: "sheet-footer",
	        children: [/*#__PURE__*/jsxRuntimeExports.jsxs("button", {
	          className: "sheet-nav-btn",
	          type: "button",
	          onClick: onPrev,
	          disabled: !prev,
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	            name: "arrow-left",
	            size: 18
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("small", {
	              children: "\u4E0A\u4E00\u5904"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("b", {
	              children: prev ? prev.shortTitle : '已是第一处'
	            })]
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
	          className: "sheet-progress",
	          "aria-hidden": "true",
	          children: Array.from({
	            length: total
	          }).map((_, i) => /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	            className: i === index ? `active ${area.tone}` : i < index ? 'done' : ''
	          }, i))
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
	          className: "sheet-nav-btn is-next",
	          type: "button",
	          onClick: onNext,
	          children: [/*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("small", {
	              children: next ? '下一处' : '完成'
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("b", {
	              children: next ? next.shortTitle : '回到身体地图'
	            })]
	          }), /*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	            name: next ? 'arrow-right' : 'check',
	            size: 18
	          })]
	        })]
	      })]
	    })]
	  });
	}

	function MiniBodyMap({
	  areas
	}) {
	  const byId = Object.fromEntries(areas.map(area => [area.id, area]));
	  const toneColor = tone => tone === 'good' ? '#2aa58e' : tone === 'watch' ? '#d3a04b' : '#d47861';
	  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	    className: "report-map",
	    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("svg", {
	      viewBox: "0 0 280 380",
	      role: "img",
	      "aria-label": "\u5168\u8EAB\u98CE\u9669\u90E8\u4F4D\u793A\u610F\u56FE",
	      children: [/*#__PURE__*/jsxRuntimeExports.jsx("defs", {
	        children: /*#__PURE__*/jsxRuntimeExports.jsxs("linearGradient", {
	          id: "report-heart",
	          x1: "0",
	          y1: "0",
	          x2: "1",
	          y2: "1",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx("stop", {
	            offset: "0",
	            stopColor: "#ef9a86"
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("stop", {
	            offset: "1",
	            stopColor: "#c85f4b"
	          })]
	        })
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("ellipse", {
	        cx: "140",
	        cy: "366",
	        rx: "63",
	        ry: "7",
	        fill: "#9ecfc3",
	        opacity: "0.22"
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("g", {
	        fill: "#fffefb",
	        stroke: "#9cbcb2",
	        strokeWidth: "1.1",
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx("path", {
	          d: "M116 238C112 265 110 295 109 320L108 338C107 345 104 350 100 353L122 356L126 338L130 300L136 250Z"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	          d: "M164 238C168 265 170 295 171 320L172 338C173 345 176 350 180 353L158 356L154 338L150 300L144 250Z"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	          d: "M100 353C91 355 83 360 82 366C81 371 88 374 97 372L123 366L122 353Z"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	          d: "M180 353C189 355 197 360 198 366C199 371 192 374 183 372L157 366L158 353Z"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	          d: "M102 96C92 108 86 125 82 145L74 185L68 215C66 224 70 230 76 228C82 226 84 218 86 210L94 180L102 150L108 120Z"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	          d: "M178 96C188 108 194 125 198 145L206 185L212 215C214 224 210 230 204 228C198 226 196 218 194 210L186 180L178 150L172 120Z"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	          d: "M140 82C120 82 106 88 100 98C94 110 92 128 91 145L90 190C89 202 94 212 104 215L116 218L116 240L164 240L164 218L176 215C186 212 191 202 190 190L189 145C188 128 186 110 180 98C174 88 160 82 140 82Z"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("rect", {
	          x: "128",
	          y: "63",
	          width: "24",
	          height: "24",
	          rx: "8"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("ellipse", {
	          cx: "140",
	          cy: "45",
	          rx: "25",
	          ry: "29"
	        })]
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("g", {
	        fill: "#eef4f0",
	        stroke: "#b8ccc3",
	        strokeWidth: "0.8",
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx("path", {
	          d: "M118 112C107 115 102 126 103 143C104 160 111 171 121 174C128 176 132 170 132 161L131 120C131 112 125 110 118 112Z"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	          d: "M162 112C173 115 178 126 177 143C176 160 169 171 159 174C152 176 148 170 148 161L149 120C149 112 155 110 162 112Z"
	        })]
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("ellipse", {
	        cx: "140",
	        cy: "42",
	        rx: "15",
	        ry: "10",
	        fill: "#f1e9e4",
	        stroke: "#c7a99f",
	        strokeWidth: "0.7"
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	        d: "M158 140C152 134 142 138 142 147C142 157 153 162 158 170C163 162 174 157 174 147C174 138 164 134 158 140Z",
	        fill: "url(#report-heart)",
	        stroke: "#b95f4c",
	        strokeWidth: "1"
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("g", {
	        fill: "none",
	        stroke: "#cf6d56",
	        strokeLinecap: "round",
	        strokeLinejoin: "round",
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx("path", {
	          d: "M158 170C158 160 154 154 150 150L149 120L147 100M158 170C158 185 158 200 154 220L148 260L142 300L138 332",
	          strokeWidth: "1.8"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	          d: "M151 150L124 148L106 151L92 178L80 211M165 150L186 148L204 151L218 178L230 211",
	          strokeWidth: "1.4"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	          d: "M149 120C147 108 145 96 146 86M161 120C163 108 165 96 164 86",
	          strokeWidth: "1"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	          d: "M142 300L132 324L126 342M154 300L160 324L166 342",
	          strokeWidth: "1"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	          d: "M154 220L127 232L120 245M162 220L183 232L190 245",
	          strokeWidth: "1"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	          d: "M138 332L128 340M148 330L150 342",
	          strokeWidth: "0.8"
	        })]
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("g", {
	        fill: "none",
	        stroke: "#6f98ad",
	        strokeLinecap: "round",
	        strokeLinejoin: "round",
	        opacity: "0.75",
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx("path", {
	          d: "M157 168C158 150 158 130 158 110L157 92M157 168C157 188 156 210 154 230L150 270L145 310L141 337",
	          strokeWidth: "1.2"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	          d: "M157 150L120 155L95 190L83 220M160 150L192 155L216 190L228 220",
	          strokeWidth: "0.9"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	          d: "M145 310L135 334L130 347M150 320L158 338L162 347",
	          strokeWidth: "0.8"
	        })]
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("g", {
	        fill: "none",
	        stroke: "#e9ded5",
	        strokeWidth: "2",
	        children: /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	          d: "M140 92C130 96 124 110 124 130M140 92C150 96 156 110 156 130",
	          opacity: "0.55"
	        })
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("g", {
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	          cx: "140",
	          cy: "47",
	          r: "8",
	          fill: toneColor(byId.brain.tone),
	          opacity: "0.95"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	          cx: "159",
	          cy: "151",
	          r: "7",
	          fill: toneColor(byId.heart.tone),
	          opacity: "0.95"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	          cx: "140",
	          cy: "198",
	          r: "7",
	          fill: toneColor(byId.blood.tone),
	          opacity: "0.95"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	          cx: "124",
	          cy: "342",
	          r: "6",
	          fill: toneColor(byId.foot.tone),
	          opacity: "0.95"
	        })]
	      })]
	    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	      className: "report-map-legend",
	      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx("i", {
	          className: "good"
	        }), "\u826F\u597D"]
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx("i", {
	          className: "watch"
	        }), "\u9700\u5173\u6CE8"]
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx("i", {
	          className: "check"
	        }), "\u5EFA\u8BAE\u8BC4\u4F30"]
	      })]
	    })]
	  });
	}
	function Report({
	  patient,
	  areas,
	  overall,
	  onBack,
	  onPrint
	}) {
	  const keyRows = [{
	    label: '脚趾血流恢复时间',
	    value: `${patient.raw.foot.ttr} 秒`,
	    ref: '≤ 90 秒',
	    tone: patient.raw.foot.ttr <= 90 ? 'good' : patient.raw.foot.ttr > 150 ? 'check' : 'watch'
	  }, {
	    label: '血压',
	    value: `${patient.raw.heart.sbp} / ${patient.raw.heart.dbp} mmHg`,
	    ref: '< 130 / 85',
	    tone: patient.raw.heart.sbp < 130 && patient.raw.heart.dbp < 85 ? 'good' : patient.raw.heart.sbp >= 140 || patient.raw.heart.dbp >= 90 ? 'check' : 'watch'
	  }, {
	    label: '坏胆固醇 LDL-C',
	    value: `${patient.raw.blood.ldl.toFixed(2)} mmol/L`,
	    ref: '< 3.40',
	    tone: patient.raw.blood.ldl <= 3.4 ? 'good' : patient.raw.blood.ldl >= 4.5 ? 'check' : 'watch'
	  }, {
	    label: '空腹血糖',
	    value: `${patient.raw.blood.glu.toFixed(1)} mmol/L`,
	    ref: '3.9–6.1',
	    tone: patient.raw.blood.glu <= 6.1 ? 'good' : patient.raw.blood.glu >= 7 ? 'check' : 'watch'
	  }, {
	    label: '血液黏稠度',
	    value: `${patient.raw.blood.viscosity.toFixed(1)} mPa·s`,
	    ref: '3.5–4.8',
	    tone: patient.raw.blood.viscosity <= 4.8 ? 'good' : patient.raw.blood.viscosity >= 6.4 ? 'check' : 'watch'
	  }, {
	    label: '左右脑氧差异',
	    value: `${Math.abs(patient.raw.brain.left - patient.raw.brain.right)} 个百分点`,
	    ref: '≤ 5',
	    tone: Math.abs(patient.raw.brain.left - patient.raw.brain.right) <= 4 ? 'good' : 'watch'
	  }, {
	    label: '血管弹性 cf-PWV',
	    value: `${patient.raw.heart.pwv.toFixed(1)} m/s`,
	    ref: '< 9.0',
	    tone: patient.raw.heart.pwv < 9 ? 'good' : patient.raw.heart.pwv >= 12 ? 'check' : 'watch'
	  }, {
	    label: '心率变异性 SDNN',
	    value: `${patient.raw.heart.hrv} ms`,
	    ref: '≥ 50',
	    tone: patient.raw.heart.hrv >= 50 ? 'good' : patient.raw.heart.hrv >= 35 ? 'watch' : 'check'
	  }];
	  const questions = [];
	  if (overall.concernCount === 0) {
	    questions.push('下一次复查建议安排在什么时候？', '目前的生活方式还需要注意什么？', '我的家族史需要额外关注吗？');
	  } else {
	    if (areas.find(area => area.id === 'heart')?.tone !== 'good') questions.push('我的血压需要复测或进一步检查吗？');
	    if (areas.find(area => area.id === 'foot')?.tone !== 'good') questions.push('足部血流恢复偏慢，需要做下肢血管检查吗？');
	    if (areas.find(area => area.id === 'blood')?.tone !== 'good') questions.push('血脂和血糖现在需要开始干预吗？');
	    if (questions.length < 3) questions.push('这些结果和我正在服用的药物有关系吗？');
	  }
	  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	    className: "report-view",
	    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	      className: "report-toolbar",
	      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("button", {
	        className: "back-button",
	        type: "button",
	        onClick: onBack,
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	          name: "arrow-left",
	          size: 18
	        }), "\u8FD4\u56DE\u7ED3\u679C"]
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	        className: "report-toolbar-title",
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	          children: "\u60A3\u8005\u7248\u5065\u5EB7\u62A5\u544A"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("small", {
	          children: "A4 \u9884\u89C8 \xB7 \u53EF\u6253\u5370\u6216\u4FDD\u5B58\u4E3A PDF"
	        })]
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
	        className: "primary-button is-small",
	        type: "button",
	        onClick: onPrint,
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	          name: "printer",
	          size: 17
	        }), "\u6253\u5370 / \u4FDD\u5B58 PDF"]
	      })]
	    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	      className: "report-canvas",
	      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("article", {
	        className: "report-page report-page-one",
	        children: [/*#__PURE__*/jsxRuntimeExports.jsxs("header", {
	          className: "report-brand-head",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "report-brand",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	              className: "report-brand-mark",
	              children: /*#__PURE__*/jsxRuntimeExports.jsxs("svg", {
	                viewBox: "0 0 32 32",
	                fill: "none",
	                children: [/*#__PURE__*/jsxRuntimeExports.jsx("path", {
	                  d: "M16 5v10m0 0-6 4m6-4 6 4M10 19v7m12-7v7",
	                  stroke: "currentColor",
	                  strokeWidth: "1.8",
	                  strokeLinecap: "round"
	                }), /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	                  cx: "16",
	                  cy: "5",
	                  r: "1.8",
	                  fill: "currentColor"
	                }), /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	                  cx: "10",
	                  cy: "26",
	                  r: "1.8",
	                  fill: "currentColor"
	                }), /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	                  cx: "22",
	                  cy: "26",
	                  r: "1.8",
	                  fill: "currentColor"
	                })]
	              })
	            }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	              children: [/*#__PURE__*/jsxRuntimeExports.jsx("b", {
	                children: "\u5FAE\u5FAA"
	              }), /*#__PURE__*/jsxRuntimeExports.jsx("small", {
	                children: "\u5168\u8EAB\u5FAE\u5FAA\u73AF\u8BC4\u4F30"
	              })]
	            })]
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "report-head-meta",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("b", {
	              children: "\u60A3\u8005\u7248\u5065\u5EB7\u62A5\u544A"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	              children: patient.date
	            })]
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	          className: "report-title-block",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	            className: "report-kicker",
	            children: "WHOLE-BODY MICROCIRCULATION \xB7 PATIENT REPORT"
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("h1", {
	            children: "\u5168\u8EAB\u5FAE\u5FAA\u73AF\u5065\u5EB7\u8BC4\u4F30\u62A5\u544A"
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("p", {
	            children: [patient.name, " \xB7 ", patient.sex, " \xB7 ", patient.age, " \u5C81"]
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "report-meta-grid",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	              children: ["\u4F53\u68C0\u53F7 ", /*#__PURE__*/jsxRuntimeExports.jsx("b", {
	                children: patient.examNo
	              })]
	            }), /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	              children: ["\u62A5\u544A\u7F16\u53F7 ", /*#__PURE__*/jsxRuntimeExports.jsx("b", {
	                children: patient.reportNo
	              })]
	            }), /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	              children: ["\u8BC4\u4F30\u65F6\u95F4 ", /*#__PURE__*/jsxRuntimeExports.jsxs("b", {
	                children: [patient.date, " ", patient.time]
	              })]
	            }), /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	              children: ["\u603B\u68C0\u533B\u751F ", /*#__PURE__*/jsxRuntimeExports.jsx("b", {
	                children: patient.doctor
	              })]
	            })]
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("section", {
	          className: `report-summary ${overall.tone}`,
	          children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "report-summary-status",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	              children: "\u6574\u4F53\u8BC4\u4F30"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("strong", {
	              children: overall.title
	            }), /*#__PURE__*/jsxRuntimeExports.jsx(StatusPill, {
	              tone: overall.tone,
	              icon: true
	            })]
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "report-summary-copy",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("p", {
	              children: overall.lead
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("small", {
	              children: overall.note
	            })]
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("section", {
	          className: "report-section",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "report-section-head",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("h2", {
	              children: "\u5168\u8EAB\u98CE\u9669\u5730\u56FE"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	              children: "4 \u4E2A\u8BC4\u4F30\u90E8\u4F4D"
	            })]
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "report-map-row",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx(MiniBodyMap, {
	              areas: areas
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
	              className: "report-area-list",
	              children: areas.map(area => /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	                className: `report-area-row ${area.tone}`,
	                children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	                  className: "report-area-icon",
	                  children: /*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	                    name: area.icon,
	                    size: 16
	                  })
	                }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	                  children: [/*#__PURE__*/jsxRuntimeExports.jsx("b", {
	                    children: area.title
	                  }), /*#__PURE__*/jsxRuntimeExports.jsx("small", {
	                    children: area.hotspotNote
	                  })]
	                }), /*#__PURE__*/jsxRuntimeExports.jsx("em", {
	                  children: toneShortLabel[area.tone]
	                })]
	              }, area.id))
	            })]
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	          className: "report-good-news",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	            name: "spark",
	            size: 18
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("b", {
	              children: "\u8FD9\u6B21\u7684\u597D\u6D88\u606F"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	              children: patient.goodNews
	            })]
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("section", {
	          className: "report-section report-section-areas",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "report-section-head",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("h2", {
	              children: "\u56DB\u4E2A\u90E8\u4F4D\uFF0C\u9010\u9879\u770B\u61C2"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	              children: "\u7528\u7B80\u5355\u7684\u8BDD\u89E3\u91CA\u8FD9\u6B21\u7ED3\u679C"
	            })]
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
	            className: "report-area-grid",
	            children: areas.map(area => /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	              className: `report-detail-card ${area.tone}`,
	              children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	                className: "report-detail-head",
	                children: [/*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	                  children: [/*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	                    name: area.icon,
	                    size: 16
	                  }), area.title]
	                }), /*#__PURE__*/jsxRuntimeExports.jsx("em", {
	                  children: toneLabel[area.tone]
	                })]
	              }), /*#__PURE__*/jsxRuntimeExports.jsx("b", {
	                children: area.headline
	              }), /*#__PURE__*/jsxRuntimeExports.jsx("p", {
	                children: area.summary
	              })]
	            }, area.id))
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	          className: "report-quick-wrap",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
	            className: "report-quick-label",
	            children: "\u5173\u952E\u6570\u503C\u901F\u89C8"
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
	            className: "report-quick-grid",
	            children: keyRows.slice(0, 4).map(row => /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	              className: "report-quick-cell",
	              children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	                children: row.label
	              }), /*#__PURE__*/jsxRuntimeExports.jsx("b", {
	                children: row.value
	              }), /*#__PURE__*/jsxRuntimeExports.jsx("i", {
	                className: row.tone
	              })]
	            }, row.label))
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("section", {
	          className: "report-dictionary report-dictionary-page-one",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "report-section-head",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("h2", {
	              children: "\u5065\u5EB7\u5C0F\u8BCD\u5178"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	              children: "\u4E09\u4E2A\u8BCD\uFF0C\u770B\u61C2\u8FD9\u6B21\u8BC4\u4F30"
	            })]
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "report-dictionary-grid",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	              children: [/*#__PURE__*/jsxRuntimeExports.jsx("b", {
	                children: "\u5FAE\u5FAA\u73AF"
	              }), /*#__PURE__*/jsxRuntimeExports.jsx("p", {
	                children: "\u8EAB\u4F53\u6700\u672B\u7AEF\u7684\u6BDB\u7EC6\u8840\u7BA1\u7F51\u7EDC\uFF0C\u628A\u6C27\u6C14\u548C\u8425\u517B\u9001\u5230\u6BCF\u4E2A\u7EC6\u80DE\u3002"
	              })]
	            }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	              children: [/*#__PURE__*/jsxRuntimeExports.jsx("b", {
	                children: "\u8840\u7BA1\u5F39\u6027"
	              }), /*#__PURE__*/jsxRuntimeExports.jsx("p", {
	                children: "\u8840\u7BA1\u968F\u5FC3\u8DF3\u81EA\u7136\u6269\u5F20\u3001\u56DE\u5F39\u7684\u80FD\u529B\u3002\u5F39\u6027\u4E0B\u964D\uFF0C\u5FC3\u810F\u4F1A\u66F4\u8D39\u529B\u3002"
	              })]
	            }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	              children: [/*#__PURE__*/jsxRuntimeExports.jsx("b", {
	                children: "\u8840\u6DB2\u9ECF\u7A20\u5EA6"
	              }), /*#__PURE__*/jsxRuntimeExports.jsx("p", {
	                children: "\u8840\u6DB2\u6D41\u52A8\u7684\u987A\u7545\u7A0B\u5EA6\u3002\u504F\u9AD8\u65F6\uFF0C\u8840\u6DB2\u6D41\u52A8\u7684\u963B\u529B\u4F1A\u589E\u52A0\u3002"
	              })]
	            })]
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("footer", {
	          className: "report-page-foot",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	            children: "\u672C\u62A5\u544A\u4E3A\u5065\u5EB7\u98CE\u9669\u63D0\u793A\uFF0C\u4E0D\u6784\u6210\u75BE\u75C5\u8BCA\u65AD\u3002"
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	            children: "\u7B2C 1 \u9875 / \u5171 2 \u9875"
	          })]
	        })]
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("article", {
	        className: "report-page report-page-two",
	        children: [/*#__PURE__*/jsxRuntimeExports.jsxs("header", {
	          className: "report-page-header",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	            children: "\u5FAE\u5FAA \xB7 \u5168\u8EAB\u5FAE\u5FAA\u73AF\u8BC4\u4F30"
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	            children: [patient.name, " \xB7 ", patient.reportNo]
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("section", {
	          className: "report-section",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "report-section-head",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("h2", {
	              children: "\u5173\u952E\u68C0\u6D4B\u6570\u636E"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	              children: "\u4F9B\u60A8\u548C\u533B\u751F\u6C9F\u901A\u65F6\u53C2\u8003"
	            })]
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
	            className: "report-data-grid",
	            children: keyRows.map(row => /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	              className: "report-data-cell",
	              children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	                children: row.label
	              }), /*#__PURE__*/jsxRuntimeExports.jsx("b", {
	                children: row.value
	              }), /*#__PURE__*/jsxRuntimeExports.jsxs("small", {
	                children: ["\u53C2\u8003 ", row.ref]
	              }), /*#__PURE__*/jsxRuntimeExports.jsx("i", {
	                className: row.tone
	              })]
	            }, row.label))
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("section", {
	          className: "report-action-section",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "report-section-head",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("h2", {
	              children: "\u6211\u7684\u884C\u52A8\u6E05\u5355"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	              children: "\u4ECE\u4ECA\u5929\u80FD\u505A\u7684\u4E00\u4EF6\u5C0F\u4E8B\u5F00\u59CB"
	            })]
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "report-actions",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	              children: [/*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	                className: "report-action-time",
	                children: [/*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	                  name: "sun",
	                  size: 14
	                }), "\u4ECA\u5929"]
	              }), patient.actionPlan.today.map(item => /*#__PURE__*/jsxRuntimeExports.jsx("p", {
	                children: item
	              }, item))]
	            }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	              children: [/*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	                className: "report-action-time",
	                children: [/*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	                  name: "calendar",
	                  size: 14
	                }), "3 \u4E2A\u6708\u5185"]
	              }), patient.actionPlan.months.map(item => /*#__PURE__*/jsxRuntimeExports.jsx("p", {
	                children: item
	              }, item))]
	            }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	              children: [/*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	                className: "report-action-time",
	                children: [/*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	                  name: "walk",
	                  size: 14
	                }), "\u6BCF\u5929"]
	              }), patient.actionPlan.daily.map(item => /*#__PURE__*/jsxRuntimeExports.jsx("p", {
	                children: item
	              }, item))]
	            })]
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("section", {
	          className: "report-question-section",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "report-section-head",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("h2", {
	              children: "\u53EF\u4EE5\u95EE\u533B\u751F\u7684\u95EE\u9898"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	              children: "\u5E26\u7740\u5177\u4F53\u95EE\u9898\u53BB\u6C9F\u901A"
	            })]
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
	            className: "report-questions",
	            children: questions.map(question => /*#__PURE__*/jsxRuntimeExports.jsxs("p", {
	              children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	                children: "?"
	              }), question]
	            }, question))
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	          className: `report-followup ${overall.tone}`,
	          children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "report-followup-time",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	              children: "\u5EFA\u8BAE\u590D\u67E5"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("b", {
	              children: overall.concernCount === 0 ? '12 个月后' : overall.tone === 'check' ? '尽快安排' : '3 个月内'
	            })]
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("p", {
	            children: overall.concernCount === 0 ? '按年度体检计划复查微循环、血压、血脂和空腹血糖即可。' : '复查血压、血脂和空腹血糖，并把这份报告带给医生，便于前后对照。'
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("section", {
	          className: "report-method-section",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "report-section-head",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("h2", {
	              children: "\u8FD9\u6B21\u662F\u600E\u4E48\u68C0\u6D4B\u7684"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	              children: "\u65E0\u521B\u68C0\u6D4B \xB7 \u7EA6 18 \u5206\u949F"
	            })]
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
	            className: "report-methods",
	            children: areas.map(area => /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	              className: "report-method",
	              children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	                className: `report-method-icon ${area.tone}`,
	                children: /*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	                  name: area.icon,
	                  size: 14
	                })
	              }), /*#__PURE__*/jsxRuntimeExports.jsx("b", {
	                children: area.title
	              }), /*#__PURE__*/jsxRuntimeExports.jsx("small", {
	                children: area.method
	              })]
	            }, area.id))
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("section", {
	          className: "report-habit-section",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "report-section-head",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("h2", {
	              children: "\u4E00\u5468\u884C\u52A8\u6253\u5361"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	              children: "\u5B8C\u6210\u4E00\u5929\uFF0C\u5C31\u6D82\u4E00\u4E2A\u5706"
	            })]
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "report-habit-table",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	              className: "report-habit-row is-head",
	              children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	                children: "\u6BCF\u5929\u7684\u5C0F\u4E60\u60EF"
	              }), ['一', '二', '三', '四', '五', '六', '日'].map(day => /*#__PURE__*/jsxRuntimeExports.jsx("i", {
	                children: day
	              }, day))]
	            }), ['规律活动 30 分钟', '少盐少油', '睡够 7 小时'].map(habit => /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	              className: "report-habit-row",
	              children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	                children: habit
	              }), Array.from({
	                length: 7
	              }).map((_, index) => /*#__PURE__*/jsxRuntimeExports.jsx("i", {}, index))]
	            }, habit))]
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	          className: "report-doctor-note",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	            children: "\u533B\u751F\u63D0\u793A"
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("p", {
	            children: patient.reportNote
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	          className: "report-sign",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	              children: "\u603B\u68C0\u533B\u751F"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("b", {
	              children: patient.doctor
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("small", {
	              children: "\u6EE8\u6C5F\u9662\u533A\u667A\u80FD\u4F53\u68C0\u4E2D\u5FC3 \xB7 \u5FC3\u8840\u7BA1\u5185\u79D1"
	            })]
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
	            className: "report-sign-mark",
	            children: "\u6797\u77E5\u8FDC"
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "report-date-stamp",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	              children: "\u62A5\u544A\u65E5\u671F"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("b", {
	              children: patient.date
	            })]
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("footer", {
	          className: "report-page-foot report-disclaimer",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx("p", {
	            children: "\u8BF4\u660E\uFF1A\u672C\u62A5\u544A\u57FA\u4E8E\u672C\u6B21\u68C0\u6D4B\u6570\u636E\u751F\u6210\uFF0C\u4EC5\u7528\u4E8E\u5065\u5EB7\u98CE\u9669\u8BC4\u4F30\u548C\u4F53\u68C0\u7ED3\u679C\u89E3\u91CA\uFF0C\u4E0D\u6784\u6210\u75BE\u75C5\u8BCA\u65AD\uFF0C\u4E5F\u4E0D\u80FD\u66FF\u4EE3\u533B\u751F\u7684\u9762\u8BCA\u3001\u5F71\u50CF\u6216\u5B9E\u9A8C\u5BA4\u68C0\u67E5\u3002\u5982\u6709\u80F8\u75DB\u3001\u80F8\u95F7\u3001\u5934\u6655\u3001\u5355\u4FA7\u80A2\u4F53\u65E0\u529B\u6216\u8A00\u8BED\u4E0D\u6E05\u7B49\u75C7\u72B6\uFF0C\u8BF7\u53CA\u65F6\u5C31\u533B\u3002"
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	            children: "\u7B2C 2 \u9875 / \u5171 2 \u9875"
	          })]
	        })]
	      })]
	    })]
	  });
	}

	const areaOrder = ['brain', 'foot', 'blood', 'heart'];
	function readInitialState() {
	  if (typeof window === 'undefined') {
	    return {
	      patientId: 'zhang',
	      view: 'home',
	      area: null
	    };
	  }
	  const params = new URLSearchParams(window.location.search);
	  const requestedPatient = params.get('p');
	  const patientId = patients.some(item => item.id === requestedPatient) ? requestedPatient : 'zhang';
	  const requestedArea = params.get('area');
	  const area = areaOrder.includes(requestedArea) ? requestedArea : null;
	  const view = params.get('view') === 'report' ? 'report' : 'home';
	  return {
	    patientId,
	    view,
	    area
	  };
	}
	const initialState = readInitialState();
	function BrandMark() {
	  return /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	    className: "brand-mark",
	    "aria-hidden": "true",
	    children: /*#__PURE__*/jsxRuntimeExports.jsxs("svg", {
	      viewBox: "0 0 42 42",
	      fill: "none",
	      children: [/*#__PURE__*/jsxRuntimeExports.jsx("path", {
	        d: "M21 7v11m0 0-7 5m7-5 7 5M14 23v10m14-10v10",
	        stroke: "currentColor",
	        strokeWidth: "2",
	        strokeLinecap: "round"
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	        cx: "21",
	        cy: "7",
	        r: "2.4",
	        fill: "currentColor"
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	        cx: "14",
	        cy: "34",
	        r: "2.4",
	        fill: "currentColor"
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	        cx: "28",
	        cy: "34",
	        r: "2.4",
	        fill: "currentColor"
	      })]
	    })
	  });
	}
	function CapillaryArt() {
	  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	    className: "capillary-art",
	    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	      className: "art-chip",
	      children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {}), "\u6C27\u6C14 + \u8425\u517B \u2192 \u6BCF\u4E2A\u7EC6\u80DE"]
	    }), /*#__PURE__*/jsxRuntimeExports.jsxs("svg", {
	      viewBox: "0 0 560 440",
	      className: "capillary-art-svg",
	      role: "img",
	      "aria-label": "\u6BDB\u7EC6\u8840\u7BA1\u628A\u6C27\u6C14\u548C\u8425\u517B\u9001\u5230\u8EAB\u4F53\u7EC6\u80DE\u7684\u793A\u610F\u56FE",
	      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("defs", {
	        children: [/*#__PURE__*/jsxRuntimeExports.jsxs("linearGradient", {
	          id: "art-vessel",
	          x1: "0",
	          y1: "1",
	          x2: "1",
	          y2: "0",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx("stop", {
	            offset: "0",
	            stopColor: "#e7b6a6"
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("stop", {
	            offset: "0.55",
	            stopColor: "#e59a83"
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("stop", {
	            offset: "1",
	            stopColor: "#d97762"
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("linearGradient", {
	          id: "art-soft",
	          x1: "0",
	          y1: "0",
	          x2: "1",
	          y2: "1",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx("stop", {
	            offset: "0",
	            stopColor: "#e6f5ef"
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("stop", {
	            offset: "1",
	            stopColor: "#d3ede4"
	          })]
	        })]
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	        cx: "137",
	        cy: "128",
	        r: "128",
	        fill: "#e8f5f0",
	        opacity: "0.8"
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	        cx: "424",
	        cy: "304",
	        r: "118",
	        fill: "#f8e9dc",
	        opacity: "0.6"
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	        d: "M38 360C130 328 177 284 238 224C302 162 366 116 512 74",
	        fill: "none",
	        stroke: "url(#art-vessel)",
	        strokeWidth: "35",
	        strokeLinecap: "round"
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	        d: "M38 360C130 328 177 284 238 224C302 162 366 116 512 74",
	        fill: "none",
	        stroke: "#fbded3",
	        strokeWidth: "19",
	        strokeLinecap: "round",
	        opacity: "0.7"
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	        d: "M38 360C130 328 177 284 238 224C302 162 366 116 512 74",
	        fill: "none",
	        stroke: "#fff7f1",
	        strokeWidth: "2.5",
	        strokeDasharray: "2 14",
	        opacity: "0.9"
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	        d: "M205 253C180 282 161 314 142 351M299 184C286 230 270 263 243 300M367 143C384 189 394 222 407 261",
	        fill: "none",
	        stroke: "#e7ab97",
	        strokeWidth: "11",
	        strokeLinecap: "round",
	        opacity: "0.7"
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("g", {
	        fill: "#c95d4d",
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx("ellipse", {
	          rx: "9",
	          ry: "7",
	          children: /*#__PURE__*/jsxRuntimeExports.jsx("animateMotion", {
	            dur: "9s",
	            repeatCount: "indefinite",
	            path: "M38 360C130 328 177 284 238 224C302 162 366 116 512 74"
	          })
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("ellipse", {
	          rx: "7",
	          ry: "5.5",
	          children: /*#__PURE__*/jsxRuntimeExports.jsx("animateMotion", {
	            dur: "9s",
	            begin: "-3s",
	            repeatCount: "indefinite",
	            path: "M38 360C130 328 177 284 238 224C302 162 366 116 512 74"
	          })
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("ellipse", {
	          rx: "8",
	          ry: "6.3",
	          children: /*#__PURE__*/jsxRuntimeExports.jsx("animateMotion", {
	            dur: "9s",
	            begin: "-6s",
	            repeatCount: "indefinite",
	            path: "M38 360C130 328 177 284 238 224C302 162 366 116 512 74"
	          })
	        })]
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("g", {
	        className: "art-cells",
	        children: [/*#__PURE__*/jsxRuntimeExports.jsxs("g", {
	          transform: "translate(430 300)",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	            r: "36",
	            fill: "url(#art-soft)",
	            stroke: "#a9d7ca"
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	            r: "12",
	            fill: "#9ccfc0",
	            opacity: "0.9"
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("g", {
	          transform: "translate(492 250)",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	            r: "25",
	            fill: "url(#art-soft)",
	            stroke: "#a9d7ca"
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	            r: "8",
	            fill: "#9ccfc0",
	            opacity: "0.9"
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("g", {
	          transform: "translate(470 368)",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	            r: "22",
	            fill: "url(#art-soft)",
	            stroke: "#a9d7ca"
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
	            r: "7",
	            fill: "#9ccfc0",
	            opacity: "0.9"
	          })]
	        })]
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("g", {
	        className: "art-labels",
	        children: [/*#__PURE__*/jsxRuntimeExports.jsxs("g", {
	          transform: "translate(78 285)",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx("rect", {
	            width: "102",
	            height: "33",
	            rx: "16.5",
	            fill: "#fffdf9",
	            stroke: "#e7dfd2"
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("text", {
	            x: "51",
	            y: "21",
	            textAnchor: "middle",
	            children: "\u6C27\u6C14"
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("g", {
	          transform: "translate(242 112)",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx("rect", {
	            width: "102",
	            height: "33",
	            rx: "16.5",
	            fill: "#fffdf9",
	            stroke: "#e7dfd2"
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("text", {
	            x: "51",
	            y: "21",
	            textAnchor: "middle",
	            children: "\u8425\u517B"
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("g", {
	          transform: "translate(374 343)",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx("rect", {
	            width: "122",
	            height: "33",
	            rx: "16.5",
	            fill: "#fffdf9",
	            stroke: "#e7dfd2"
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("text", {
	            x: "61",
	            y: "21",
	            textAnchor: "middle",
	            children: "\u7EC6\u80DE\u83B7\u5F97\u80FD\u91CF"
	          })]
	        })]
	      })]
	    }), /*#__PURE__*/jsxRuntimeExports.jsx("p", {
	      className: "art-caption",
	      children: "\u8FD9\u662F\u8EAB\u4F53\u6700\u672B\u7AEF\u7684\u201C\u914D\u9001\u7F51\u7EDC\u201D\uFF0C\u4E5F\u662F\u8FD9\u6B21\u8BC4\u4F30\u5173\u6CE8\u7684\u5FAE\u5FAA\u73AF\u3002"
	    })]
	  });
	}
	function areaMetric(patient, area) {
	  if (area.id === 'brain') {
	    return {
	      value: `${patient.raw.brain.left} / ${patient.raw.brain.right}`,
	      unit: '%',
	      label: '左右脑供氧'
	    };
	  }
	  if (area.id === 'foot') {
	    return {
	      value: String(patient.raw.foot.ttr),
	      unit: '秒',
	      label: '血流恢复时间'
	    };
	  }
	  if (area.id === 'blood') {
	    return {
	      value: patient.raw.blood.viscosity.toFixed(1),
	      unit: 'mPa·s',
	      label: '血液黏稠度'
	    };
	  }
	  return {
	    value: `${patient.raw.heart.sbp} / ${patient.raw.heart.dbp}`,
	    unit: 'mmHg',
	    label: '本次血压'
	  };
	}
	function AreaCard({
	  patient,
	  area,
	  onSelect
	}) {
	  const metric = areaMetric(patient, area);
	  return /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
	    type: "button",
	    className: `area-card ${area.tone}`,
	    onClick: () => onSelect(area.id),
	    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	      className: "area-card-top",
	      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	        className: "area-index",
	        children: ["0", area.order]
	      }), /*#__PURE__*/jsxRuntimeExports.jsx(StatusPill, {
	        tone: area.tone
	      })]
	    }), /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	      className: "area-card-title",
	      children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	        className: "area-icon",
	        children: /*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	          name: area.icon,
	          size: 23
	        })
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx("strong", {
	          children: area.title
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("small", {
	          children: area.method
	        })]
	      })]
	    }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	      className: "area-card-headline",
	      children: area.headline
	    }), /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	      className: "area-card-metric",
	      children: [/*#__PURE__*/jsxRuntimeExports.jsx("b", {
	        children: metric.value
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("em", {
	        children: metric.unit
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("small", {
	        children: metric.label
	      })]
	    }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	      className: "area-card-summary",
	      children: area.summary
	    }), /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	      className: "area-card-foot",
	      children: ["\u4E86\u89E3\u8FD9\u4E00\u5904", /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	        children: /*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	          name: "arrow-right",
	          size: 17
	        })
	      })]
	    })]
	  });
	}
	function ActionGroupBlock({
	  group,
	  title,
	  icon,
	  items,
	  patientId,
	  completed,
	  onToggle
	}) {
	  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	    className: "action-group",
	    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	      className: "action-group-head",
	      children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	        className: "action-group-icon",
	        children: /*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	          name: icon,
	          size: 19
	        })
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	        children: title
	      })]
	    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
	      className: "action-list",
	      children: items.map((item, index) => {
	        const key = `${patientId}:${group}:${index}`;
	        const done = completed.has(key);
	        return /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
	          type: "button",
	          className: `action-item ${done ? 'is-done' : ''}`,
	          onClick: () => onToggle(key),
	          "aria-pressed": done,
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	            className: "action-check",
	            children: done ? /*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	              name: "check",
	              size: 14
	            }) : null
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	            children: item
	          })]
	        }, item);
	      })
	    })]
	  });
	}
	function App() {
	  const [patientId, setPatientId] = reactExports.useState(initialState.patientId);
	  const [view, setView] = reactExports.useState(initialState.view);
	  const [activeArea, setActiveArea] = reactExports.useState(initialState.area);
	  const [demoOpen, setDemoOpen] = reactExports.useState(false);
	  const [toast, setToast] = reactExports.useState(null);
	  const [progress, setProgress] = reactExports.useState(0);
	  const [activeSection, setActiveSection] = reactExports.useState('overview');
	  const [completed, setCompleted] = reactExports.useState(new Set());
	  const demoRef = reactExports.useRef(null);
	  const scrollBeforeReport = reactExports.useRef(0);
	  const patient = reactExports.useMemo(() => getPatient(patientId), [patientId]);
	  const areas = reactExports.useMemo(() => getAreas(patient), [patient]);
	  const overall = reactExports.useMemo(() => getOverall(patient), [patient]);
	  const orderedAreas = reactExports.useMemo(() => areaOrder.map(id => areas.find(area => area.id === id)).filter(Boolean), [areas]);
	  const activeAreaIndex = activeArea ? orderedAreas.findIndex(area => area.id === activeArea) : -1;
	  const activeAreaInfo = activeAreaIndex >= 0 ? orderedAreas[activeAreaIndex] : null;
	  const totalActions = patient.actionPlan.today.length + patient.actionPlan.months.length + patient.actionPlan.daily.length;
	  const doneActions = Array.from(completed).filter(key => key.startsWith(`${patient.id}:`)).length;
	  reactExports.useEffect(() => {
	    document.title = view === 'report' ? '患者版报告 · 微循' : `${patient.name}的微循环评估 · 微循`;
	  }, [view, patient.name]);
	  reactExports.useEffect(() => {
	    if (!toast) return;
	    const timer = window.setTimeout(() => setToast(null), 2800);
	    return () => window.clearTimeout(timer);
	  }, [toast]);
	  reactExports.useEffect(() => {
	    const onPointerDown = event => {
	      if (demoRef.current && !demoRef.current.contains(event.target)) setDemoOpen(false);
	    };
	    document.addEventListener('mousedown', onPointerDown);
	    return () => document.removeEventListener('mousedown', onPointerDown);
	  }, []);
	  reactExports.useEffect(() => {
	    if (view !== 'home') return;
	    let frame = 0;
	    const update = () => {
	      frame = 0;
	      const scrollTop = window.scrollY;
	      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
	      setProgress(docHeight > 0 ? Math.min(100, scrollTop / docHeight * 100) : 0);
	      const areasEl = document.getElementById('areas');
	      const actionsEl = document.getElementById('actions');
	      if (actionsEl && actionsEl.getBoundingClientRect().top <= 230) setActiveSection('actions');else if (areasEl && areasEl.getBoundingClientRect().top <= 190) setActiveSection('areas');else setActiveSection('overview');
	    };
	    const onScroll = () => {
	      if (!frame) frame = window.requestAnimationFrame(update);
	    };
	    update();
	    window.addEventListener('scroll', onScroll, {
	      passive: true
	    });
	    window.addEventListener('resize', onScroll);
	    return () => {
	      window.removeEventListener('scroll', onScroll);
	      window.removeEventListener('resize', onScroll);
	      if (frame) window.cancelAnimationFrame(frame);
	    };
	  }, [view]);
	  const scrollToId = reactExports.useCallback(id => {
	    const element = document.getElementById(id);
	    if (!element) return;
	    const top = element.getBoundingClientRect().top + window.scrollY - (id === 'overview' ? 0 : 104);
	    window.scrollTo({
	      top,
	      behavior: 'smooth'
	    });
	    setActiveSection(id);
	  }, []);
	  const openArea = reactExports.useCallback(id => {
	    setActiveArea(id);
	  }, []);
	  const closeArea = reactExports.useCallback(() => {
	    setActiveArea(null);
	  }, []);
	  const navigateArea = reactExports.useCallback(direction => {
	    if (activeAreaIndex < 0) return;
	    const next = activeAreaIndex + direction;
	    if (next < 0 || next >= orderedAreas.length) {
	      setActiveArea(null);
	      return;
	    }
	    setActiveArea(orderedAreas[next].id);
	  }, [activeAreaIndex, orderedAreas]);
	  const toggleAction = key => {
	    setCompleted(current => {
	      const next = new Set(current);
	      if (next.has(key)) next.delete(key);else next.add(key);
	      return next;
	    });
	  };
	  const switchPatient = id => {
	    const nextPatient = getPatient(id);
	    setPatientId(id);
	    setDemoOpen(false);
	    setActiveArea(null);
	    setView('home');
	    setCompleted(new Set());
	    window.scrollTo({
	      top: 0,
	      behavior: 'smooth'
	    });
	    setToast(`已切换至${nextPatient.name}的演示结果`);
	  };
	  const openReport = () => {
	    scrollBeforeReport.current = window.scrollY;
	    setView('report');
	    setActiveArea(null);
	    window.scrollTo({
	      top: 0,
	      behavior: 'auto'
	    });
	  };
	  const closeReport = () => {
	    setView('home');
	    window.scrollTo({
	      top: scrollBeforeReport.current,
	      behavior: 'auto'
	    });
	  };
	  const restart = () => {
	    setActiveArea(null);
	    window.scrollTo({
	      top: 0,
	      behavior: 'smooth'
	    });
	    setToast('已回到本次结果首页');
	  };
	  const goodArea = orderedAreas.find(area => area.tone === 'good');
	  const goodCounts = {
	    good: orderedAreas.filter(area => area.tone === 'good').length,
	    watch: orderedAreas.filter(area => area.tone === 'watch').length,
	    check: orderedAreas.filter(area => area.tone === 'check').length
	  };
	  if (view === 'report') {
	    return /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
	      children: [/*#__PURE__*/jsxRuntimeExports.jsx(Report, {
	        patient: patient,
	        areas: orderedAreas,
	        overall: overall,
	        onBack: closeReport,
	        onPrint: () => window.print()
	      }), toast ? /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	        className: "toast",
	        role: "status",
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	          name: "check",
	          size: 17
	        }), toast]
	      }) : null]
	    });
	  }
	  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	    className: `app ${activeArea ? 'has-sheet' : ''}`,
	    children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
	      className: "reading-progress",
	      style: {
	        width: `${progress}%`
	      }
	    }), /*#__PURE__*/jsxRuntimeExports.jsxs("header", {
	      className: "site-header",
	      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("a", {
	        className: "brand",
	        href: "#overview",
	        onClick: event => {
	          event.preventDefault();
	          scrollToId('overview');
	        },
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx(BrandMark, {}), /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	          className: "brand-copy",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx("strong", {
	            children: "\u5FAE\u5FAA"
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("small", {
	            children: "\u5168\u8EAB\u5FAE\u5FAA\u73AF\u8BC4\u4F30"
	          })]
	        })]
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("nav", {
	        className: "chapter-nav",
	        "aria-label": "\u9875\u9762\u7AE0\u8282",
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx("button", {
	          type: "button",
	          className: activeSection === 'overview' ? 'is-active' : '',
	          onClick: () => scrollToId('overview'),
	          children: "\u6574\u4F53\u7ED3\u679C"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
	          type: "button",
	          className: activeSection === 'areas' ? 'is-active' : '',
	          onClick: () => scrollToId('areas'),
	          children: "\u9010\u9879\u4E86\u89E3"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
	          type: "button",
	          className: activeSection === 'actions' ? 'is-active' : '',
	          onClick: () => scrollToId('actions'),
	          children: "\u884C\u52A8\u5EFA\u8BAE"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
	          type: "button",
	          onClick: openReport,
	          children: "\u6211\u7684\u62A5\u544A"
	        })]
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	        className: "header-actions",
	        children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	          className: "demo-picker",
	          ref: demoRef,
	          children: [/*#__PURE__*/jsxRuntimeExports.jsxs("button", {
	            type: "button",
	            className: `demo-trigger ${demoOpen ? 'is-open' : ''}`,
	            onClick: () => setDemoOpen(open => !open),
	            "aria-expanded": demoOpen,
	            "aria-haspopup": "listbox",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	              className: "demo-badge",
	              children: "\u6F14\u793A"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	              children: patient.name
	            }), /*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	              name: "chevron-down",
	              size: 15
	            })]
	          }), demoOpen ? /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "demo-menu",
	            role: "listbox",
	            "aria-label": "\u9009\u62E9\u6F14\u793A\u75C5\u4F8B",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	              className: "demo-menu-head",
	              children: [/*#__PURE__*/jsxRuntimeExports.jsx("b", {
	                children: "\u5207\u6362\u6F14\u793A\u75C5\u4F8B"
	              }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	                children: "\u7528\u4E8E\u6BD4\u8F83\u4E0D\u540C\u98CE\u9669\u6C34\u5E73"
	              })]
	            }), patients.map(option => {
	              const optionOverall = getOverall(option);
	              return /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
	                type: "button",
	                className: `demo-option ${option.id === patientId ? 'is-active' : ''}`,
	                onClick: () => switchPatient(option.id),
	                role: "option",
	                "aria-selected": option.id === patientId,
	                children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	                  className: `demo-avatar ${optionOverall.tone}`,
	                  children: option.name.slice(0, 1)
	                }), /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	                  className: "demo-option-copy",
	                  children: [/*#__PURE__*/jsxRuntimeExports.jsxs("b", {
	                    children: [option.name, /*#__PURE__*/jsxRuntimeExports.jsxs("small", {
	                      children: [option.sex, " \xB7 ", option.age, " \u5C81"]
	                    })]
	                  }), /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	                    children: [/*#__PURE__*/jsxRuntimeExports.jsx("i", {
	                      className: optionOverall.tone
	                    }), optionOverall.title, " \xB7 ", optionOverall.goodCount, " \u4E2A\u90E8\u4F4D\u826F\u597D"]
	                  })]
	                }), option.id === patientId ? /*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	                  name: "check",
	                  size: 17
	                }) : null]
	              }, option.id);
	            }), /*#__PURE__*/jsxRuntimeExports.jsxs("p", {
	              className: "demo-menu-note",
	              children: [/*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	                name: "info",
	                size: 14
	              }), "\u6F14\u793A\u6570\u636E\uFF0C\u4E0D\u53EF\u7528\u4E8E\u771F\u5B9E\u8BCA\u7597"]
	            })]
	          }) : null]
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
	          className: "header-icon-btn",
	          type: "button",
	          onClick: restart,
	          "aria-label": "\u91CD\u65B0\u5F00\u59CB",
	          children: /*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	            name: "rotate",
	            size: 19
	          })
	        })]
	      })]
	    }), /*#__PURE__*/jsxRuntimeExports.jsxs("main", {
	      className: "page",
	      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("section", {
	        className: "hero",
	        id: "overview",
	        children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	          className: "hero-copy",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "hero-eyebrow",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	              className: "eyebrow-date",
	              children: [/*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	                name: "calendar",
	                size: 15
	              }), patient.date]
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("i", {}), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	              children: patient.room
	            })]
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: `overall-chip ${overall.tone}`,
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	              className: "overall-chip-dot"
	            }), "\u6574\u4F53\u8BC4\u4F30 \xB7 ", overall.title === '整体状态良好' ? '状态良好' : overall.title]
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("h1", {
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	              className: "hero-name",
	              children: patient.name
	            }), "\uFF0C", /*#__PURE__*/jsxRuntimeExports.jsx("br", {}), "\u60A8\u7684\u5FAE\u5FAA\u73AF\u8BC4\u4F30\u5DF2\u5B8C\u6210"]
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("p", {
	            className: "hero-lead",
	            children: overall.concernCount === 0 ? /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
	              children: ["\u8FD9\u6B21\u8BC4\u4F30\u7684 ", /*#__PURE__*/jsxRuntimeExports.jsx("strong", {
	                children: "4 \u4E2A\u90E8\u4F4D"
	              }), " \u90FD\u5904\u4E8E\u826F\u597D\u72B6\u6001\u3002"]
	            }) : overall.goodCount === 0 ? /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
	              children: ["\u8FD9\u6B21\u8BC4\u4F30\u7684 ", /*#__PURE__*/jsxRuntimeExports.jsx("strong", {
	                children: "4 \u4E2A\u90E8\u4F4D"
	              }), " \u90FD\u9700\u8981\u5173\u6CE8\u3002"]
	            }) : /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
	              children: ["\u8FD9\u6B21\u8BC4\u4F30\u7684 ", /*#__PURE__*/jsxRuntimeExports.jsx("strong", {
	                children: "4 \u4E2A\u90E8\u4F4D"
	              }), " \u4E2D\uFF0C", /*#__PURE__*/jsxRuntimeExports.jsx("br", {
	                className: "hero-lead-break"
	              }), /*#__PURE__*/jsxRuntimeExports.jsxs("strong", {
	                className: "good-text",
	                children: [overall.goodCount, " \u4E2A\u72B6\u6001\u826F\u597D"]
	              }), "\uFF0C", /*#__PURE__*/jsxRuntimeExports.jsxs("strong", {
	                className: overall.tone === 'check' ? 'check-text' : 'watch-text',
	                children: [overall.concernCount, " \u4E2A\u9700\u8981\u5173\u6CE8"]
	              }), "\u3002"]
	            })
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("p", {
	            className: "hero-note",
	            children: overall.note
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
	            className: "overall-meter",
	            "aria-label": `${goodCounts.good} 个良好，${goodCounts.watch} 个需关注，${goodCounts.check} 个建议评估`,
	            children: orderedAreas.map(area => /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	              className: area.tone
	            }, area.id))
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "overall-meter-labels",
	            children: [goodCounts.good > 0 ? /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	              children: [/*#__PURE__*/jsxRuntimeExports.jsx("i", {
	                className: "good"
	              }), goodCounts.good, " \u826F\u597D"]
	            }) : null, goodCounts.watch > 0 ? /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	              children: [/*#__PURE__*/jsxRuntimeExports.jsx("i", {
	                className: "watch"
	              }), goodCounts.watch, " \u9700\u5173\u6CE8"]
	            }) : null, goodCounts.check > 0 ? /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	              children: [/*#__PURE__*/jsxRuntimeExports.jsx("i", {
	                className: "check"
	              }), goodCounts.check, " \u5EFA\u8BAE\u8BC4\u4F30"]
	            }) : null]
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "hero-actions",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsxs("button", {
	              type: "button",
	              className: "primary-button",
	              onClick: () => {
	                scrollToId('areas');
	              },
	              children: ["\u5E26\u6211\u4E00\u5904\u4E00\u5904\u770B", /*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	                name: "arrow-right",
	                size: 18
	              })]
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
	              type: "button",
	              className: "secondary-button",
	              onClick: () => scrollToId('actions'),
	              children: "\u76F4\u63A5\u770B\u5EFA\u8BAE"
	            })]
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "hero-meta",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	              children: [/*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	                name: "clock",
	                size: 15
	              }), "\u7EA6 3 \u5206\u949F\u9605\u8BFB"]
	            }), /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	              children: [/*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	                name: "shield",
	                size: 15
	              }), "\u5DF2\u7531 ", patient.doctor, " \u533B\u751F\u5BA1\u6838"]
	            }), /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	              children: [/*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	                name: "file",
	                size: 15
	              }), "28 \u9879\u6307\u6807 \xB7 4 \u7C7B\u68C0\u6D4B"]
	            })]
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	          className: "hero-map-wrap",
	          id: "map",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx(BodyMap, {
	            areas: orderedAreas,
	            onSelect: openArea
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "map-caption",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	              children: [/*#__PURE__*/jsxRuntimeExports.jsx("i", {
	                className: "live-dot"
	              }), "\u6570\u636E\u91C7\u96C6\u5B8C\u6210 \xB7 ", patient.time]
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	              children: "\u70B9\u51FB\u8EAB\u4F53\u90E8\u4F4D\uFF0C\u67E5\u770B\u5177\u4F53\u542B\u4E49"
	            })]
	          })]
	        })]
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("section", {
	        className: "good-news-band",
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
	          className: "good-news-icon",
	          children: /*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	            name: "spark",
	            size: 22
	          })
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	          className: "good-news-copy",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	            children: "\u5148\u8BF4\u4E00\u4E2A\u597D\u6D88\u606F"
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("p", {
	            children: patient.goodNews
	          })]
	        }), goodArea ? /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
	          type: "button",
	          className: "text-button",
	          onClick: () => openArea(goodArea.id),
	          children: ["\u770B\u770B\u8FD9\u4E00\u5904", /*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	            name: "arrow-right",
	            size: 16
	          })]
	        }) : /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
	          type: "button",
	          className: "text-button",
	          onClick: () => scrollToId('actions'),
	          children: ["\u770B\u770B\u4E0B\u4E00\u6B65", /*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	            name: "arrow-right",
	            size: 16
	          })]
	        })]
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("section", {
	        className: "micro-explain",
	        children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	          className: "explain-copy",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "section-kicker",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("i", {}), "\u770B\u61C2\u8FD9\u6B21\u68C0\u6D4B"]
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("h2", {
	            children: ["\u5FAE\u5FAA\u73AF\uFF0C\u662F\u8EAB\u4F53\u6700\u672B\u7AEF\u7684", /*#__PURE__*/jsxRuntimeExports.jsx("br", {}), /*#__PURE__*/jsxRuntimeExports.jsx("em", {
	              children: "\u201C\u914D\u9001\u7F51\u7EDC\u201D"
	            })]
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("p", {
	            className: "explain-lead",
	            children: "\u52A8\u8109\u3001\u9759\u8109\u548C\u6BDB\u7EC6\u8840\u7BA1\u4E00\u8D77\uFF0C\u628A\u6C27\u6C14\u548C\u8425\u517B\u9001\u5230\u6BCF\u4E2A\u7EC6\u80DE\uFF0C\u518D\u628A\u4EE3\u8C22\u5E9F\u7269\u5E26\u8D70\u3002\u5B83\u7684\u72B6\u6001\uFF0C\u548C\u8840\u7BA1\u5F39\u6027\u3001\u8840\u6DB2\u6D41\u52A8\u3001\u672B\u68A2\u4F9B\u8840\u90FD\u6709\u5173\u7CFB\u3002"
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "explain-points",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	              children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	                children: "01"
	              }), /*#__PURE__*/jsxRuntimeExports.jsx("b", {
	                children: "\u8840\u7BA1\u5F39\u6027"
	              }), /*#__PURE__*/jsxRuntimeExports.jsx("small", {
	                children: "\u8840\u7BA1\u80FD\u5426\u968F\u5FC3\u8DF3\u81EA\u7136\u6269\u5F20\u3001\u56DE\u5F39"
	              })]
	            }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	              children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	                children: "02"
	              }), /*#__PURE__*/jsxRuntimeExports.jsx("b", {
	                children: "\u8840\u6DB2\u6D41\u52A8"
	              }), /*#__PURE__*/jsxRuntimeExports.jsx("small", {
	                children: "\u8840\u6DB2\u662F\u5426\u504F\u7A20\uFF0C\u6D41\u52A8\u662F\u5426\u987A\u7545"
	              })]
	            }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	              children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	                children: "03"
	              }), /*#__PURE__*/jsxRuntimeExports.jsx("b", {
	                children: "\u672B\u68A2\u4F9B\u8840"
	              }), /*#__PURE__*/jsxRuntimeExports.jsx("small", {
	                children: "\u624B\u811A\u7B49\u672B\u7AEF\u80FD\u5426\u53CA\u65F6\u83B7\u5F97\u8840\u6DB2"
	              })]
	            })]
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("p", {
	            className: "explain-note",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	              name: "info",
	              size: 15
	            }), "\u8FD9\u6B21\u8BC4\u4F30\u4ECE\u56DB\u4E2A\u89D2\u5EA6\u89C2\u5BDF\u8FD9\u5957\u7F51\u7EDC\uFF0C\u5E2E\u52A9\u60A8\u66F4\u65E9\u770B\u5230\u9700\u8981\u5173\u6CE8\u7684\u5730\u65B9\u3002"]
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsx(CapillaryArt, {})]
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("section", {
	        className: "areas-section",
	        id: "areas",
	        children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	          className: "section-heading",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	              className: "section-kicker",
	              children: [/*#__PURE__*/jsxRuntimeExports.jsx("i", {}), "\u9010\u9879\u4E86\u89E3"]
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("h2", {
	              children: "\u56DB\u4E2A\u90E8\u4F4D\uFF0C\u9010\u4E00\u8BF4\u660E"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("p", {
	              children: "\u4E0D\u9700\u8981\u8BB0\u4F4F\u6240\u6709\u6570\u5B57\uFF0C\u5148\u770B\u7ED3\u8BBA\u548C\u4E0B\u4E00\u6B65\u3002"
	            })]
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	            className: "section-count",
	            children: overall.concernCount === 0 ? '4 处状态良好' : `${overall.concernCount} 处需要关注`
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
	          className: "area-grid",
	          children: orderedAreas.map(area => /*#__PURE__*/jsxRuntimeExports.jsx(AreaCard, {
	            patient: patient,
	            area: area,
	            onSelect: openArea
	          }, area.id))
	        })]
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("section", {
	        className: "action-section",
	        id: "actions",
	        children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	          className: "action-intro",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "section-kicker is-light",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("i", {}), "\u63A5\u4E0B\u6765"]
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("h2", {
	            children: ["\u4E0D\u7528\u4E00\u6B21", /*#__PURE__*/jsxRuntimeExports.jsx("br", {}), "\u6539\u53D8\u6240\u6709\u4E8B"]
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("p", {
	            children: "\u4ECE\u4ECA\u5929\u80FD\u505A\u7684\u4E00\u4EF6\u5C0F\u4E8B\u5F00\u59CB\u3002\u5B8C\u6210\u4E00\u9879\uFF0C\u5C31\u70B9\u4E00\u4E0B\u524D\u9762\u7684\u5706\u5708\u3002"
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "action-progress",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	              children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	                children: "\u6211\u7684\u884C\u52A8\u8FDB\u5EA6"
	              }), /*#__PURE__*/jsxRuntimeExports.jsxs("b", {
	                children: [doneActions, " / ", totalActions]
	              })]
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
	              className: "action-progress-track",
	              children: /*#__PURE__*/jsxRuntimeExports.jsx("i", {
	                style: {
	                  width: `${totalActions ? doneActions / totalActions * 100 : 0}%`
	                }
	              })
	            })]
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
	            type: "button",
	            className: "light-button",
	            onClick: openReport,
	            children: ["\u67E5\u770B\u60A3\u8005\u7248\u62A5\u544A", /*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	              name: "arrow-right",
	              size: 17
	            })]
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	          className: "action-groups",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx(ActionGroupBlock, {
	            group: "today",
	            title: "\u4ECA\u5929",
	            icon: "sun",
	            items: patient.actionPlan.today,
	            patientId: patient.id,
	            completed: completed,
	            onToggle: toggleAction
	          }), /*#__PURE__*/jsxRuntimeExports.jsx(ActionGroupBlock, {
	            group: "months",
	            title: "3 \u4E2A\u6708\u5185",
	            icon: "calendar",
	            items: patient.actionPlan.months,
	            patientId: patient.id,
	            completed: completed,
	            onToggle: toggleAction
	          }), /*#__PURE__*/jsxRuntimeExports.jsx(ActionGroupBlock, {
	            group: "daily",
	            title: "\u6BCF\u5929",
	            icon: "walk",
	            items: patient.actionPlan.daily,
	            patientId: patient.id,
	            completed: completed,
	            onToggle: toggleAction
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	          className: "action-warning",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	            name: "alert",
	            size: 17
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	            children: "\u5982\u51FA\u73B0\u80F8\u75DB\u3001\u80F8\u95F7\u3001\u5355\u4FA7\u80A2\u4F53\u65E0\u529B\u6216\u8A00\u8BED\u4E0D\u6E05\uFF0C\u8BF7\u7ACB\u5373\u5C31\u533B\uFF0C\u4E0D\u8981\u7B49\u5F85\u4F53\u68C0\u62A5\u544A\u3002"
	          })]
	        })]
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("section", {
	        className: "report-teaser",
	        children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	          className: "report-mini",
	          "aria-hidden": "true",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "report-mini-head",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	              className: "mini-brand",
	              children: "\u5FAE\u5FAA"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("i", {})]
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "report-mini-title",
	            children: ["\u5168\u8EAB\u5FAE\u5FAA\u73AF", /*#__PURE__*/jsxRuntimeExports.jsx("br", {}), "\u5065\u5EB7\u8BC4\u4F30\u62A5\u544A"]
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "report-mini-meta",
	            children: [patient.name, " \xB7 ", patient.date]
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "report-mini-map",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	              className: "mini-body"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("i", {
	              className: "good"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("i", {
	              className: "watch"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("i", {
	              className: "check"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("i", {
	              className: "watch"
	            })]
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "report-mini-lines",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("i", {}), /*#__PURE__*/jsxRuntimeExports.jsx("i", {}), /*#__PURE__*/jsxRuntimeExports.jsx("i", {})]
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "report-mini-foot",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	              children: "\u60A3\u8005\u7248"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	              children: patient.reportNo
	            })]
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	          className: "report-teaser-copy",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "section-kicker",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("i", {}), "\u628A\u7ED3\u679C\u5E26\u56DE\u5BB6"]
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("h2", {
	            children: ["\u4E00\u4EFD\u770B\u5F97\u61C2\u7684\u62A5\u544A\uFF0C", /*#__PURE__*/jsxRuntimeExports.jsx("br", {}), "\u65B9\u4FBF\u60A8\u548C\u533B\u751F\u6C9F\u901A"]
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("p", {
	            children: "\u5305\u542B\u6574\u4F53\u7ED3\u8BBA\u3001\u8EAB\u4F53\u98CE\u9669\u5730\u56FE\u3001\u56DB\u4E2A\u90E8\u4F4D\u7684\u901A\u4FD7\u89E3\u91CA\u3001\u5173\u952E\u6570\u636E\u548C\u60A8\u7684\u884C\u52A8\u6E05\u5355\u3002"
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "report-features",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	              children: [/*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	                name: "check",
	                size: 15
	              }), "\u9002\u5408\u4FDD\u5B58\u548C\u6253\u5370"]
	            }), /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	              children: [/*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	                name: "check",
	                size: 15
	              }), "\u4E0D\u7528\u8BB0\u533B\u5B66\u672F\u8BED"]
	            }), /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	              children: [/*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	                name: "check",
	                size: 15
	              }), "\u53EF\u7ED9\u5BB6\u4EBA\u4E00\u8D77\u770B"]
	            })]
	          }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	            className: "report-teaser-actions",
	            children: [/*#__PURE__*/jsxRuntimeExports.jsxs("button", {
	              type: "button",
	              className: "primary-button",
	              onClick: openReport,
	              children: ["\u67E5\u770B\u60A3\u8005\u7248\u62A5\u544A", /*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	                name: "arrow-right",
	                size: 18
	              })]
	            }), /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
	              type: "button",
	              className: "secondary-button",
	              onClick: openReport,
	              children: [/*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	                name: "printer",
	                size: 17
	              }), "\u6253\u5370 / \u4FDD\u5B58 PDF"]
	            })]
	          })]
	        })]
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("footer", {
	        className: "page-footer",
	        children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	          className: "footer-brand",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx(BrandMark, {}), /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx("b", {
	              children: "\u5FAE\u5FAA"
	            }), /*#__PURE__*/jsxRuntimeExports.jsx("small", {
	              children: "\u770B\u89C1\u8EAB\u4F53\u7684\u5FAE\u5FAA\u73AF"
	            })]
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	          className: "footer-note",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsx("p", {
	            children: "\u672C\u9875\u9762\u4E3A\u5065\u5EB7\u98CE\u9669\u63D0\u793A\uFF0C\u4E0D\u6784\u6210\u75BE\u75C5\u8BCA\u65AD\u3002\u6700\u7EC8\u89E3\u91CA\u8BF7\u4EE5\u4F53\u68C0\u533B\u751F\u610F\u89C1\u4E3A\u51C6\u3002"
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("p", {
	            children: "\u6570\u636E\u4EC5\u7528\u4E8E\u672C\u6B21\u8BC4\u4F30 \xB7 \u79BB\u5F00\u9875\u9762\u540E\u4E0D\u4F1A\u4FDD\u5B58 \xB7 \u6F14\u793A\u7248\u672C"
	          })]
	        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	          className: "footer-actions",
	          children: [/*#__PURE__*/jsxRuntimeExports.jsxs("span", {
	            children: [/*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	              name: "shield",
	              size: 15
	            }), "\u9690\u79C1\u4FDD\u62A4"]
	          }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	            children: "\u6EE8\u6C5F\u9662\u533A\u667A\u80FD\u4F53\u68C0\u4E2D\u5FC3"
	          })]
	        })]
	      })]
	    }), activeAreaInfo ? /*#__PURE__*/jsxRuntimeExports.jsx(DetailSheet, {
	      patient: patient,
	      area: activeAreaInfo,
	      index: activeAreaIndex,
	      total: orderedAreas.length,
	      prev: activeAreaIndex > 0 ? orderedAreas[activeAreaIndex - 1] : undefined,
	      next: activeAreaIndex < orderedAreas.length - 1 ? orderedAreas[activeAreaIndex + 1] : undefined,
	      onClose: closeArea,
	      onPrev: () => navigateArea(-1),
	      onNext: () => navigateArea(1)
	    }, activeAreaInfo.id) : null, toast ? /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	      className: "toast",
	      role: "status",
	      children: [/*#__PURE__*/jsxRuntimeExports.jsx(Icon, {
	        name: "check",
	        size: 17
	      }), toast]
	    }) : null]
	  });
	}

	ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/jsxRuntimeExports.jsx(React.StrictMode, {
	  children: /*#__PURE__*/jsxRuntimeExports.jsx(App, {})
	}));

})();
