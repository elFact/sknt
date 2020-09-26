function normolize_phone(e) {
  return "+7" == e.substr(0, 2) && (e = "8" + e.substr(2)), e;
}
function phone_maks(e) {
  $(e).mask("8(999)999-9999"),
    $(document).on("focusin", e, function () {
      $(e).mask("8(999)999-9999");
    }),
    $(e).keydown(function (t) {
      var n = t.key,
        i = $(this).val();
      null != n.toString().match(/\d{1}/) &&
        -1 == i.indexOf("_") &&
        8 == i.charAt(2) &&
        812 != i.substr(2, 3) &&
        ((i =
          "8(" +
          (i = (i = (i = i.replace("(", "")).replace(")", "")).replace(
            "-",
            ""
          )).substr(2, 3) +
          ")" +
          i.substr(5, 3) +
          "-" +
          i.substr(8) +
          n),
        $(e).val(i));
    }),
    $(e).on("paste", function (t) {
      var n = normolize_phone(t.originalEvent.clipboardData.getData("text"));
      $(e).val(n);
    }),
    $(e).on("change", function () {
      var t = $(e).val();
      (t = normolize_phone(t)), $(e).val(t);
    });
}
!(function (e, t) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  var n = [],
    i = n.slice,
    o = n.concat,
    r = n.push,
    a = n.indexOf,
    s = {},
    l = s.toString,
    u = s.hasOwnProperty,
    c = {},
    d = e.document,
    f = "2.1.3",
    p = function (e, t) {
      return new p.fn.init(e, t);
    },
    h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    m = /^-ms-/,
    g = /-([\da-z])/gi,
    v = function (e, t) {
      return t.toUpperCase();
    };
  function y(e) {
    var t = e.length,
      n = p.type(e);
    return (
      "function" !== n &&
      !p.isWindow(e) &&
      (!(1 !== e.nodeType || !t) ||
        "array" === n ||
        0 === t ||
        ("number" == typeof t && t > 0 && t - 1 in e))
    );
  }
  (p.fn = p.prototype = {
    jquery: f,
    constructor: p,
    selector: "",
    length: 0,
    toArray: function () {
      return i.call(this);
    },
    get: function (e) {
      return null != e
        ? 0 > e
          ? this[e + this.length]
          : this[e]
        : i.call(this);
    },
    pushStack: function (e) {
      var t = p.merge(this.constructor(), e);
      return (t.prevObject = this), (t.context = this.context), t;
    },
    each: function (e, t) {
      return p.each(this, e, t);
    },
    map: function (e) {
      return this.pushStack(
        p.map(this, function (t, n) {
          return e.call(t, n, t);
        })
      );
    },
    slice: function () {
      return this.pushStack(i.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (e) {
      var t = this.length,
        n = +e + (0 > e ? t : 0);
      return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor(null);
    },
    push: r,
    sort: n.sort,
    splice: n.splice,
  }),
    (p.extend = p.fn.extend = function () {
      var e,
        t,
        n,
        i,
        o,
        r,
        a = arguments[0] || {},
        s = 1,
        l = arguments.length,
        u = !1;
      for (
        "boolean" == typeof a && ((u = a), (a = arguments[s] || {}), s++),
          "object" == typeof a || p.isFunction(a) || (a = {}),
          s === l && ((a = this), s--);
        l > s;
        s++
      )
        if (null != (e = arguments[s]))
          for (t in e)
            (n = a[t]),
              a !== (i = e[t]) &&
                (u && i && (p.isPlainObject(i) || (o = p.isArray(i)))
                  ? (o
                      ? ((o = !1), (r = n && p.isArray(n) ? n : []))
                      : (r = n && p.isPlainObject(n) ? n : {}),
                    (a[t] = p.extend(u, r, i)))
                  : void 0 !== i && (a[t] = i));
      return a;
    }),
    p.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isFunction: function (e) {
        return "function" === p.type(e);
      },
      isArray: Array.isArray,
      isWindow: function (e) {
        return null != e && e === e.window;
      },
      isNumeric: function (e) {
        return !p.isArray(e) && e - parseFloat(e) + 1 >= 0;
      },
      isPlainObject: function (e) {
        return (
          "object" === p.type(e) &&
          !e.nodeType &&
          !p.isWindow(e) &&
          !(e.constructor && !u.call(e.constructor.prototype, "isPrototypeOf"))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      type: function (e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? s[l.call(e)] || "object"
          : typeof e;
      },
      globalEval: function (e) {
        var t,
          n = eval;
        (e = p.trim(e)) &&
          (1 === e.indexOf("use strict")
            ? (((t = d.createElement("script")).text = e),
              d.head.appendChild(t).parentNode.removeChild(t))
            : n(e));
      },
      camelCase: function (e) {
        return e.replace(m, "ms-").replace(g, v);
      },
      nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      },
      each: function (e, t, n) {
        var i = 0,
          o = e.length,
          r = y(e);
        if (n) {
          if (r) for (; o > i && !1 !== t.apply(e[i], n); i++);
          else for (i in e) if (!1 === t.apply(e[i], n)) break;
        } else if (r) for (; o > i && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(h, "");
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (y(Object(e))
              ? p.merge(n, "string" == typeof e ? [e] : e)
              : r.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : a.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, i = 0, o = e.length; n > i; i++) e[o++] = t[i];
        return (e.length = o), e;
      },
      grep: function (e, t, n) {
        for (var i = [], o = 0, r = e.length, a = !n; r > o; o++)
          !t(e[o], o) !== a && i.push(e[o]);
        return i;
      },
      map: function (e, t, n) {
        var i,
          r = 0,
          a = e.length,
          s = [];
        if (y(e)) for (; a > r; r++) null != (i = t(e[r], r, n)) && s.push(i);
        else for (r in e) null != (i = t(e[r], r, n)) && s.push(i);
        return o.apply([], s);
      },
      guid: 1,
      proxy: function (e, t) {
        var n, o, r;
        return (
          "string" == typeof t && ((n = e[t]), (t = e), (e = n)),
          p.isFunction(e)
            ? ((o = i.call(arguments, 2)),
              ((r = function () {
                return e.apply(t || this, o.concat(i.call(arguments)));
              }).guid = e.guid = e.guid || p.guid++),
              r)
            : void 0
        );
      },
      now: Date.now,
      support: c,
    }),
    p.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function (e, t) {
        s["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var _ = (function (e) {
    var t,
      n,
      i,
      o,
      r,
      a,
      s,
      l,
      u,
      c,
      d,
      f,
      p,
      h,
      m,
      g,
      v,
      y,
      _,
      b = "sizzle" + 1 * new Date(),
      x = e.document,
      w = 0,
      $ = 0,
      T = ae(),
      k = ae(),
      C = ae(),
      S = function (e, t) {
        return e === t && (d = !0), 0;
      },
      E = 1 << 31,
      A = {}.hasOwnProperty,
      M = [],
      P = M.pop,
      O = M.push,
      N = M.push,
      j = M.slice,
      D = function (e, t) {
        for (var n = 0, i = e.length; i > n; n++) if (e[n] === t) return n;
        return -1;
      },
      R =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      B = "[\\x20\\t\\r\\n\\f]",
      L = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      F = L.replace("w", "w#"),
      I =
        "\\[" +
        B +
        "*(" +
        L +
        ")(?:" +
        B +
        "*([*^$|!~]?=)" +
        B +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        F +
        "))|)" +
        B +
        "*\\]",
      H =
        ":(" +
        L +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        I +
        ")*)|.*)\\)|)",
      X = new RegExp(B + "+", "g"),
      q = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$", "g"),
      G = new RegExp("^" + B + "*," + B + "*"),
      W = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"),
      U = new RegExp("=" + B + "*([^\\]'\"]*?)" + B + "*\\]", "g"),
      z = new RegExp(H),
      K = new RegExp("^" + F + "$"),
      V = {
        ID: new RegExp("^#(" + L + ")"),
        CLASS: new RegExp("^\\.(" + L + ")"),
        TAG: new RegExp("^(" + L.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + I),
        PSEUDO: new RegExp("^" + H),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            B +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            B +
            "*(?:([+-]|)" +
            B +
            "*(\\d+)|))" +
            B +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            B +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            B +
            "*((?:-\\d)?\\d*)" +
            B +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /^(?:input|select|textarea|button)$/i,
      Z = /^h\d$/i,
      J = /^[^{]+\{\s*\[native \w/,
      Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = /'|\\/g,
      ne = new RegExp("\\\\([\\da-f]{1,6}" + B + "?|(" + B + ")|.)", "ig"),
      ie = function (e, t, n) {
        var i = "0x" + t - 65536;
        return i != i || n
          ? t
          : 0 > i
          ? String.fromCharCode(i + 65536)
          : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
      },
      oe = function () {
        f();
      };
    try {
      N.apply((M = j.call(x.childNodes)), x.childNodes),
        M[x.childNodes.length].nodeType;
    } catch (e) {
      N = {
        apply: M.length
          ? function (e, t) {
              O.apply(e, j.call(t));
            }
          : function (e, t) {
              for (var n = e.length, i = 0; (e[n++] = t[i++]); );
              e.length = n - 1;
            },
      };
    }
    function re(e, t, i, o) {
      var r, s, u, c, d, h, v, y, w, $;
      if (
        ((t ? t.ownerDocument || t : x) !== p && f(t),
        (t = t || p),
        (i = i || []),
        (c = t.nodeType),
        "string" != typeof e || !e || (1 !== c && 9 !== c && 11 !== c))
      )
        return i;
      if (!o && m) {
        if (11 !== c && (r = Q.exec(e)))
          if ((u = r[1])) {
            if (9 === c) {
              if (!(s = t.getElementById(u)) || !s.parentNode) return i;
              if (s.id === u) return i.push(s), i;
            } else if (
              t.ownerDocument &&
              (s = t.ownerDocument.getElementById(u)) &&
              _(t, s) &&
              s.id === u
            )
              return i.push(s), i;
          } else {
            if (r[2]) return N.apply(i, t.getElementsByTagName(e)), i;
            if ((u = r[3]) && n.getElementsByClassName)
              return N.apply(i, t.getElementsByClassName(u)), i;
          }
        if (n.qsa && (!g || !g.test(e))) {
          if (
            ((y = v = b),
            (w = t),
            ($ = 1 !== c && e),
            1 === c && "object" !== t.nodeName.toLowerCase())
          ) {
            for (
              h = a(e),
                (v = t.getAttribute("id"))
                  ? (y = v.replace(te, "\\$&"))
                  : t.setAttribute("id", y),
                y = "[id='" + y + "'] ",
                d = h.length;
              d--;

            )
              h[d] = y + ge(h[d]);
            (w = (ee.test(e) && he(t.parentNode)) || t), ($ = h.join(","));
          }
          if ($)
            try {
              return N.apply(i, w.querySelectorAll($)), i;
            } catch (e) {
            } finally {
              v || t.removeAttribute("id");
            }
        }
      }
      return l(e.replace(q, "$1"), t, i, o);
    }
    function ae() {
      var e = [];
      return function t(n, o) {
        return (
          e.push(n + " ") > i.cacheLength && delete t[e.shift()],
          (t[n + " "] = o)
        );
      };
    }
    function se(e) {
      return (e[b] = !0), e;
    }
    function le(e) {
      var t = p.createElement("div");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function ue(e, t) {
      for (var n = e.split("|"), o = e.length; o--; ) i.attrHandle[n[o]] = t;
    }
    function ce(e, t) {
      var n = t && e,
        i =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          (~t.sourceIndex || E) - (~e.sourceIndex || E);
      if (i) return i;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function fe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function pe(e) {
      return se(function (t) {
        return (
          (t = +t),
          se(function (n, i) {
            for (var o, r = e([], n.length, t), a = r.length; a--; )
              n[(o = r[a])] && (n[o] = !(i[o] = n[o]));
          })
        );
      });
    }
    function he(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (t in ((n = re.support = {}),
    (r = re.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && "HTML" !== t.nodeName;
    }),
    (f = re.setDocument = function (e) {
      var t,
        o,
        a = e ? e.ownerDocument || e : x;
      return a !== p && 9 === a.nodeType && a.documentElement
        ? ((p = a),
          (h = a.documentElement),
          (o = a.defaultView) &&
            o !== o.top &&
            (o.addEventListener
              ? o.addEventListener("unload", oe, !1)
              : o.attachEvent && o.attachEvent("onunload", oe)),
          (m = !r(a)),
          (n.attributes = le(function (e) {
            return (e.className = "i"), !e.getAttribute("className");
          })),
          (n.getElementsByTagName = le(function (e) {
            return (
              e.appendChild(a.createComment("")),
              !e.getElementsByTagName("*").length
            );
          })),
          (n.getElementsByClassName = J.test(a.getElementsByClassName)),
          (n.getById = le(function (e) {
            return (
              (h.appendChild(e).id = b),
              !a.getElementsByName || !a.getElementsByName(b).length
            );
          })),
          n.getById
            ? ((i.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && m) {
                  var n = t.getElementById(e);
                  return n && n.parentNode ? [n] : [];
                }
              }),
              (i.filter.ID = function (e) {
                var t = e.replace(ne, ie);
                return function (e) {
                  return e.getAttribute("id") === t;
                };
              }))
            : (delete i.find.ID,
              (i.filter.ID = function (e) {
                var t = e.replace(ne, ie);
                return function (e) {
                  var n =
                    void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                  return n && n.value === t;
                };
              })),
          (i.find.TAG = n.getElementsByTagName
            ? function (e, t) {
                return void 0 !== t.getElementsByTagName
                  ? t.getElementsByTagName(e)
                  : n.qsa
                  ? t.querySelectorAll(e)
                  : void 0;
              }
            : function (e, t) {
                var n,
                  i = [],
                  o = 0,
                  r = t.getElementsByTagName(e);
                if ("*" === e) {
                  for (; (n = r[o++]); ) 1 === n.nodeType && i.push(n);
                  return i;
                }
                return r;
              }),
          (i.find.CLASS =
            n.getElementsByClassName &&
            function (e, t) {
              return m ? t.getElementsByClassName(e) : void 0;
            }),
          (v = []),
          (g = []),
          (n.qsa = J.test(a.querySelectorAll)) &&
            (le(function (e) {
              (h.appendChild(e).innerHTML =
                "<a id='" +
                b +
                "'></a><select id='" +
                b +
                "-\f]' msallowcapture=''><option selected=''></option></select>"),
                e.querySelectorAll("[msallowcapture^='']").length &&
                  g.push("[*^$]=" + B + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length ||
                  g.push("\\[" + B + "*(?:value|" + R + ")"),
                e.querySelectorAll("[id~=" + b + "-]").length || g.push("~="),
                e.querySelectorAll(":checked").length || g.push(":checked"),
                e.querySelectorAll("a#" + b + "+*").length ||
                  g.push(".#.+[+~]");
            }),
            le(function (e) {
              var t = a.createElement("input");
              t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length &&
                  g.push("name" + B + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length ||
                  g.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                g.push(",.*:");
            })),
          (n.matchesSelector = J.test(
            (y =
              h.matches ||
              h.webkitMatchesSelector ||
              h.mozMatchesSelector ||
              h.oMatchesSelector ||
              h.msMatchesSelector)
          )) &&
            le(function (e) {
              (n.disconnectedMatch = y.call(e, "div")),
                y.call(e, "[s!='']:x"),
                v.push("!=", H);
            }),
          (g = g.length && new RegExp(g.join("|"))),
          (v = v.length && new RegExp(v.join("|"))),
          (t = J.test(h.compareDocumentPosition)),
          (_ =
            t || J.test(h.contains)
              ? function (e, t) {
                  var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                  return (
                    e === i ||
                    !(
                      !i ||
                      1 !== i.nodeType ||
                      !(n.contains
                        ? n.contains(i)
                        : e.compareDocumentPosition &&
                          16 & e.compareDocumentPosition(i))
                    )
                  );
                }
              : function (e, t) {
                  if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                  return !1;
                }),
          (S = t
            ? function (e, t) {
                if (e === t) return (d = !0), 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return (
                  i ||
                  (1 &
                    (i =
                      (e.ownerDocument || e) === (t.ownerDocument || t)
                        ? e.compareDocumentPosition(t)
                        : 1) ||
                  (!n.sortDetached && t.compareDocumentPosition(e) === i)
                    ? e === a || (e.ownerDocument === x && _(x, e))
                      ? -1
                      : t === a || (t.ownerDocument === x && _(x, t))
                      ? 1
                      : c
                      ? D(c, e) - D(c, t)
                      : 0
                    : 4 & i
                    ? -1
                    : 1)
                );
              }
            : function (e, t) {
                if (e === t) return (d = !0), 0;
                var n,
                  i = 0,
                  o = e.parentNode,
                  r = t.parentNode,
                  s = [e],
                  l = [t];
                if (!o || !r)
                  return e === a
                    ? -1
                    : t === a
                    ? 1
                    : o
                    ? -1
                    : r
                    ? 1
                    : c
                    ? D(c, e) - D(c, t)
                    : 0;
                if (o === r) return ce(e, t);
                for (n = e; (n = n.parentNode); ) s.unshift(n);
                for (n = t; (n = n.parentNode); ) l.unshift(n);
                for (; s[i] === l[i]; ) i++;
                return i
                  ? ce(s[i], l[i])
                  : s[i] === x
                  ? -1
                  : l[i] === x
                  ? 1
                  : 0;
              }),
          a)
        : p;
    }),
    (re.matches = function (e, t) {
      return re(e, null, null, t);
    }),
    (re.matchesSelector = function (e, t) {
      if (
        ((e.ownerDocument || e) !== p && f(e),
        (t = t.replace(U, "='$1']")),
        !(!n.matchesSelector || !m || (v && v.test(t)) || (g && g.test(t))))
      )
        try {
          var i = y.call(e, t);
          if (
            i ||
            n.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return i;
        } catch (e) {}
      return re(t, p, null, [e]).length > 0;
    }),
    (re.contains = function (e, t) {
      return (e.ownerDocument || e) !== p && f(e), _(e, t);
    }),
    (re.attr = function (e, t) {
      (e.ownerDocument || e) !== p && f(e);
      var o = i.attrHandle[t.toLowerCase()],
        r = o && A.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !m) : void 0;
      return void 0 !== r
        ? r
        : n.attributes || !m
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (re.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (re.uniqueSort = function (e) {
      var t,
        i = [],
        o = 0,
        r = 0;
      if (
        ((d = !n.detectDuplicates),
        (c = !n.sortStable && e.slice(0)),
        e.sort(S),
        d)
      ) {
        for (; (t = e[r++]); ) t === e[r] && (o = i.push(r));
        for (; o--; ) e.splice(i[o], 1);
      }
      return (c = null), e;
    }),
    (o = re.getText = function (e) {
      var t,
        n = "",
        i = 0,
        r = e.nodeType;
      if (r) {
        if (1 === r || 9 === r || 11 === r) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
        } else if (3 === r || 4 === r) return e.nodeValue;
      } else for (; (t = e[i++]); ) n += o(t);
      return n;
    }),
    ((i = re.selectors = {
      cacheLength: 50,
      createPseudo: se,
      match: V,
      attrHandle: {},
      find: {},
      relative: {
        ">": { dir: "parentNode", first: !0 },
        " ": { dir: "parentNode" },
        "+": { dir: "previousSibling", first: !0 },
        "~": { dir: "previousSibling" },
      },
      preFilter: {
        ATTR: function (e) {
          return (
            (e[1] = e[1].replace(ne, ie)),
            (e[3] = (e[3] || e[4] || e[5] || "").replace(ne, ie)),
            "~=" === e[2] && (e[3] = " " + e[3] + " "),
            e.slice(0, 4)
          );
        },
        CHILD: function (e) {
          return (
            (e[1] = e[1].toLowerCase()),
            "nth" === e[1].slice(0, 3)
              ? (e[3] || re.error(e[0]),
                (e[4] = +(e[4]
                  ? e[5] + (e[6] || 1)
                  : 2 * ("even" === e[3] || "odd" === e[3]))),
                (e[5] = +(e[7] + e[8] || "odd" === e[3])))
              : e[3] && re.error(e[0]),
            e
          );
        },
        PSEUDO: function (e) {
          var t,
            n = !e[6] && e[2];
          return V.CHILD.test(e[0])
            ? null
            : (e[3]
                ? (e[2] = e[4] || e[5] || "")
                : n &&
                  z.test(n) &&
                  (t = a(n, !0)) &&
                  (t = n.indexOf(")", n.length - t) - n.length) &&
                  ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
              e.slice(0, 3));
        },
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(ne, ie).toLowerCase();
          return "*" === e
            ? function () {
                return !0;
              }
            : function (e) {
                return e.nodeName && e.nodeName.toLowerCase() === t;
              };
        },
        CLASS: function (e) {
          var t = T[e + " "];
          return (
            t ||
            ((t = new RegExp("(^|" + B + ")" + e + "(" + B + "|$)")) &&
              T(e, function (e) {
                return t.test(
                  ("string" == typeof e.className && e.className) ||
                    (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                    ""
                );
              }))
          );
        },
        ATTR: function (e, t, n) {
          return function (i) {
            var o = re.attr(i, e);
            return null == o
              ? "!=" === t
              : !t ||
                  ((o += ""),
                  "=" === t
                    ? o === n
                    : "!=" === t
                    ? o !== n
                    : "^=" === t
                    ? n && 0 === o.indexOf(n)
                    : "*=" === t
                    ? n && o.indexOf(n) > -1
                    : "$=" === t
                    ? n && o.slice(-n.length) === n
                    : "~=" === t
                    ? (" " + o.replace(X, " ") + " ").indexOf(n) > -1
                    : "|=" === t &&
                      (o === n || o.slice(0, n.length + 1) === n + "-"));
          };
        },
        CHILD: function (e, t, n, i, o) {
          var r = "nth" !== e.slice(0, 3),
            a = "last" !== e.slice(-4),
            s = "of-type" === t;
          return 1 === i && 0 === o
            ? function (e) {
                return !!e.parentNode;
              }
            : function (t, n, l) {
                var u,
                  c,
                  d,
                  f,
                  p,
                  h,
                  m = r !== a ? "nextSibling" : "previousSibling",
                  g = t.parentNode,
                  v = s && t.nodeName.toLowerCase(),
                  y = !l && !s;
                if (g) {
                  if (r) {
                    for (; m; ) {
                      for (d = t; (d = d[m]); )
                        if (
                          s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType
                        )
                          return !1;
                      h = m = "only" === e && !h && "nextSibling";
                    }
                    return !0;
                  }
                  if (((h = [a ? g.firstChild : g.lastChild]), a && y)) {
                    for (
                      p =
                        (u = (c = g[b] || (g[b] = {}))[e] || [])[0] === w &&
                        u[1],
                        f = u[0] === w && u[2],
                        d = p && g.childNodes[p];
                      (d = (++p && d && d[m]) || (f = p = 0) || h.pop());

                    )
                      if (1 === d.nodeType && ++f && d === t) {
                        c[e] = [w, p, f];
                        break;
                      }
                  } else if (y && (u = (t[b] || (t[b] = {}))[e]) && u[0] === w)
                    f = u[1];
                  else
                    for (
                      ;
                      (d = (++p && d && d[m]) || (f = p = 0) || h.pop()) &&
                      ((s
                        ? d.nodeName.toLowerCase() !== v
                        : 1 !== d.nodeType) ||
                        !++f ||
                        (y && ((d[b] || (d[b] = {}))[e] = [w, f]), d !== t));

                    );
                  return (f -= o) === i || (f % i == 0 && f / i >= 0);
                }
              };
        },
        PSEUDO: function (e, t) {
          var n,
            o =
              i.pseudos[e] ||
              i.setFilters[e.toLowerCase()] ||
              re.error("unsupported pseudo: " + e);
          return o[b]
            ? o(t)
            : o.length > 1
            ? ((n = [e, e, "", t]),
              i.setFilters.hasOwnProperty(e.toLowerCase())
                ? se(function (e, n) {
                    for (var i, r = o(e, t), a = r.length; a--; )
                      e[(i = D(e, r[a]))] = !(n[i] = r[a]);
                  })
                : function (e) {
                    return o(e, 0, n);
                  })
            : o;
        },
      },
      pseudos: {
        not: se(function (e) {
          var t = [],
            n = [],
            i = s(e.replace(q, "$1"));
          return i[b]
            ? se(function (e, t, n, o) {
                for (var r, a = i(e, null, o, []), s = e.length; s--; )
                  (r = a[s]) && (e[s] = !(t[s] = r));
              })
            : function (e, o, r) {
                return (t[0] = e), i(t, null, r, n), (t[0] = null), !n.pop();
              };
        }),
        has: se(function (e) {
          return function (t) {
            return re(e, t).length > 0;
          };
        }),
        contains: se(function (e) {
          return (
            (e = e.replace(ne, ie)),
            function (t) {
              return (t.textContent || t.innerText || o(t)).indexOf(e) > -1;
            }
          );
        }),
        lang: se(function (e) {
          return (
            K.test(e || "") || re.error("unsupported lang: " + e),
            (e = e.replace(ne, ie).toLowerCase()),
            function (t) {
              var n;
              do {
                if (
                  (n = m
                    ? t.lang
                    : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                )
                  return (
                    (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                  );
              } while ((t = t.parentNode) && 1 === t.nodeType);
              return !1;
            }
          );
        }),
        target: function (t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function (e) {
          return e === h;
        },
        focus: function (e) {
          return (
            e === p.activeElement &&
            (!p.hasFocus || p.hasFocus()) &&
            !!(e.type || e.href || ~e.tabIndex)
          );
        },
        enabled: function (e) {
          return !1 === e.disabled;
        },
        disabled: function (e) {
          return !0 === e.disabled;
        },
        checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return (
            ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
          );
        },
        selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling)
            if (e.nodeType < 6) return !1;
          return !0;
        },
        parent: function (e) {
          return !i.pseudos.empty(e);
        },
        header: function (e) {
          return Z.test(e.nodeName);
        },
        input: function (e) {
          return Y.test(e.nodeName);
        },
        button: function (e) {
          var t = e.nodeName.toLowerCase();
          return ("input" === t && "button" === e.type) || "button" === t;
        },
        text: function (e) {
          var t;
          return (
            "input" === e.nodeName.toLowerCase() &&
            "text" === e.type &&
            (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
          );
        },
        first: pe(function () {
          return [0];
        }),
        last: pe(function (e, t) {
          return [t - 1];
        }),
        eq: pe(function (e, t, n) {
          return [0 > n ? n + t : n];
        }),
        even: pe(function (e, t) {
          for (var n = 0; t > n; n += 2) e.push(n);
          return e;
        }),
        odd: pe(function (e, t) {
          for (var n = 1; t > n; n += 2) e.push(n);
          return e;
        }),
        lt: pe(function (e, t, n) {
          for (var i = 0 > n ? n + t : n; --i >= 0; ) e.push(i);
          return e;
        }),
        gt: pe(function (e, t, n) {
          for (var i = 0 > n ? n + t : n; ++i < t; ) e.push(i);
          return e;
        }),
      },
    }).pseudos.nth = i.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      i.pseudos[t] = de(t);
    for (t in { submit: !0, reset: !0 }) i.pseudos[t] = fe(t);
    function me() {}
    function ge(e) {
      for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
      return i;
    }
    function ve(e, t, n) {
      var i = t.dir,
        o = n && "parentNode" === i,
        r = $++;
      return t.first
        ? function (t, n, r) {
            for (; (t = t[i]); ) if (1 === t.nodeType || o) return e(t, n, r);
          }
        : function (t, n, a) {
            var s,
              l,
              u = [w, r];
            if (a) {
              for (; (t = t[i]); )
                if ((1 === t.nodeType || o) && e(t, n, a)) return !0;
            } else
              for (; (t = t[i]); )
                if (1 === t.nodeType || o) {
                  if (
                    (s = (l = t[b] || (t[b] = {}))[i]) &&
                    s[0] === w &&
                    s[1] === r
                  )
                    return (u[2] = s[2]);
                  if (((l[i] = u), (u[2] = e(t, n, a)))) return !0;
                }
          };
    }
    function ye(e) {
      return e.length > 1
        ? function (t, n, i) {
            for (var o = e.length; o--; ) if (!e[o](t, n, i)) return !1;
            return !0;
          }
        : e[0];
    }
    function _e(e, t, n, i, o) {
      for (var r, a = [], s = 0, l = e.length, u = null != t; l > s; s++)
        (r = e[s]) && (!n || n(r, i, o)) && (a.push(r), u && t.push(s));
      return a;
    }
    function be(e, t, n, i, o, r) {
      return (
        i && !i[b] && (i = be(i)),
        o && !o[b] && (o = be(o, r)),
        se(function (r, a, s, l) {
          var u,
            c,
            d,
            f = [],
            p = [],
            h = a.length,
            m =
              r ||
              (function (e, t, n) {
                for (var i = 0, o = t.length; o > i; i++) re(e, t[i], n);
                return n;
              })(t || "*", s.nodeType ? [s] : s, []),
            g = !e || (!r && t) ? m : _e(m, f, e, s, l),
            v = n ? (o || (r ? e : h || i) ? [] : a) : g;
          if ((n && n(g, v, s, l), i))
            for (u = _e(v, p), i(u, [], s, l), c = u.length; c--; )
              (d = u[c]) && (v[p[c]] = !(g[p[c]] = d));
          if (r) {
            if (o || e) {
              if (o) {
                for (u = [], c = v.length; c--; )
                  (d = v[c]) && u.push((g[c] = d));
                o(null, (v = []), u, l);
              }
              for (c = v.length; c--; )
                (d = v[c]) &&
                  (u = o ? D(r, d) : f[c]) > -1 &&
                  (r[u] = !(a[u] = d));
            }
          } else (v = _e(v === a ? v.splice(h, v.length) : v)), o ? o(null, a, v, l) : N.apply(a, v);
        })
      );
    }
    function xe(e) {
      for (
        var t,
          n,
          o,
          r = e.length,
          a = i.relative[e[0].type],
          s = a || i.relative[" "],
          l = a ? 1 : 0,
          c = ve(
            function (e) {
              return e === t;
            },
            s,
            !0
          ),
          d = ve(
            function (e) {
              return D(t, e) > -1;
            },
            s,
            !0
          ),
          f = [
            function (e, n, i) {
              var o =
                (!a && (i || n !== u)) ||
                ((t = n).nodeType ? c(e, n, i) : d(e, n, i));
              return (t = null), o;
            },
          ];
        r > l;
        l++
      )
        if ((n = i.relative[e[l].type])) f = [ve(ye(f), n)];
        else {
          if ((n = i.filter[e[l].type].apply(null, e[l].matches))[b]) {
            for (o = ++l; r > o && !i.relative[e[o].type]; o++);
            return be(
              l > 1 && ye(f),
              l > 1 &&
                ge(
                  e
                    .slice(0, l - 1)
                    .concat({ value: " " === e[l - 2].type ? "*" : "" })
                ).replace(q, "$1"),
              n,
              o > l && xe(e.slice(l, o)),
              r > o && xe((e = e.slice(o))),
              r > o && ge(e)
            );
          }
          f.push(n);
        }
      return ye(f);
    }
    function we(e, t) {
      var n = t.length > 0,
        o = e.length > 0,
        r = function (r, a, s, l, c) {
          var d,
            f,
            h,
            m = 0,
            g = "0",
            v = r && [],
            y = [],
            _ = u,
            b = r || (o && i.find.TAG("*", c)),
            x = (w += null == _ ? 1 : Math.random() || 0.1),
            $ = b.length;
          for (c && (u = a !== p && a); g !== $ && null != (d = b[g]); g++) {
            if (o && d) {
              for (f = 0; (h = e[f++]); )
                if (h(d, a, s)) {
                  l.push(d);
                  break;
                }
              c && (w = x);
            }
            n && ((d = !h && d) && m--, r && v.push(d));
          }
          if (((m += g), n && g !== m)) {
            for (f = 0; (h = t[f++]); ) h(v, y, a, s);
            if (r) {
              if (m > 0) for (; g--; ) v[g] || y[g] || (y[g] = P.call(l));
              y = _e(y);
            }
            N.apply(l, y),
              c && !r && y.length > 0 && m + t.length > 1 && re.uniqueSort(l);
          }
          return c && ((w = x), (u = _)), v;
        };
      return n ? se(r) : r;
    }
    return (
      (me.prototype = i.filters = i.pseudos),
      (i.setFilters = new me()),
      (a = re.tokenize = function (e, t) {
        var n,
          o,
          r,
          a,
          s,
          l,
          u,
          c = k[e + " "];
        if (c) return t ? 0 : c.slice(0);
        for (s = e, l = [], u = i.preFilter; s; ) {
          for (a in ((!n || (o = G.exec(s))) &&
            (o && (s = s.slice(o[0].length) || s), l.push((r = []))),
          (n = !1),
          (o = W.exec(s)) &&
            ((n = o.shift()),
            r.push({ value: n, type: o[0].replace(q, " ") }),
            (s = s.slice(n.length))),
          i.filter))
            !(o = V[a].exec(s)) ||
              (u[a] && !(o = u[a](o))) ||
              ((n = o.shift()),
              r.push({ value: n, type: a, matches: o }),
              (s = s.slice(n.length)));
          if (!n) break;
        }
        return t ? s.length : s ? re.error(e) : k(e, l).slice(0);
      }),
      (s = re.compile = function (e, t) {
        var n,
          i = [],
          o = [],
          r = C[e + " "];
        if (!r) {
          for (t || (t = a(e)), n = t.length; n--; )
            (r = xe(t[n]))[b] ? i.push(r) : o.push(r);
          (r = C(e, we(o, i))).selector = e;
        }
        return r;
      }),
      (l = re.select = function (e, t, o, r) {
        var l,
          u,
          c,
          d,
          f,
          p = "function" == typeof e && e,
          h = !r && a((e = p.selector || e));
        if (((o = o || []), 1 === h.length)) {
          if (
            (u = h[0] = h[0].slice(0)).length > 2 &&
            "ID" === (c = u[0]).type &&
            n.getById &&
            9 === t.nodeType &&
            m &&
            i.relative[u[1].type]
          ) {
            if (!(t = (i.find.ID(c.matches[0].replace(ne, ie), t) || [])[0]))
              return o;
            p && (t = t.parentNode), (e = e.slice(u.shift().value.length));
          }
          for (
            l = V.needsContext.test(e) ? 0 : u.length;
            l-- && ((c = u[l]), !i.relative[(d = c.type)]);

          )
            if (
              (f = i.find[d]) &&
              (r = f(
                c.matches[0].replace(ne, ie),
                (ee.test(u[0].type) && he(t.parentNode)) || t
              ))
            ) {
              if ((u.splice(l, 1), !(e = r.length && ge(u))))
                return N.apply(o, r), o;
              break;
            }
        }
        return (
          (p || s(e, h))(r, t, !m, o, (ee.test(e) && he(t.parentNode)) || t), o
        );
      }),
      (n.sortStable = b.split("").sort(S).join("") === b),
      (n.detectDuplicates = !!d),
      f(),
      (n.sortDetached = le(function (e) {
        return 1 & e.compareDocumentPosition(p.createElement("div"));
      })),
      le(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        ue("type|href|height|width", function (e, t, n) {
          return n
            ? void 0
            : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (n.attributes &&
        le(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        ue("value", function (e, t, n) {
          return n || "input" !== e.nodeName.toLowerCase()
            ? void 0
            : e.defaultValue;
        }),
      le(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        ue(R, function (e, t, n) {
          var i;
          return n
            ? void 0
            : !0 === e[t]
            ? t.toLowerCase()
            : (i = e.getAttributeNode(t)) && i.specified
            ? i.value
            : null;
        }),
      re
    );
  })(e);
  (p.find = _),
    (p.expr = _.selectors),
    (p.expr[":"] = p.expr.pseudos),
    (p.unique = _.uniqueSort),
    (p.text = _.getText),
    (p.isXMLDoc = _.isXML),
    (p.contains = _.contains);
  var b = p.expr.match.needsContext,
    x = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    w = /^.[^:#\[\.,]*$/;
  function $(e, t, n) {
    if (p.isFunction(t))
      return p.grep(e, function (e, i) {
        return !!t.call(e, i, e) !== n;
      });
    if (t.nodeType)
      return p.grep(e, function (e) {
        return (e === t) !== n;
      });
    if ("string" == typeof t) {
      if (w.test(t)) return p.filter(t, e, n);
      t = p.filter(t, e);
    }
    return p.grep(e, function (e) {
      return a.call(t, e) >= 0 !== n;
    });
  }
  (p.filter = function (e, t, n) {
    var i = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === i.nodeType
        ? p.find.matchesSelector(i, e)
          ? [i]
          : []
        : p.find.matches(
            e,
            p.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    p.fn.extend({
      find: function (e) {
        var t,
          n = this.length,
          i = [],
          o = this;
        if ("string" != typeof e)
          return this.pushStack(
            p(e).filter(function () {
              for (t = 0; n > t; t++) if (p.contains(o[t], this)) return !0;
            })
          );
        for (t = 0; n > t; t++) p.find(e, o[t], i);
        return (
          ((i = this.pushStack(n > 1 ? p.unique(i) : i)).selector = this
            .selector
            ? this.selector + " " + e
            : e),
          i
        );
      },
      filter: function (e) {
        return this.pushStack($(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack($(this, e || [], !0));
      },
      is: function (e) {
        return !!$(this, "string" == typeof e && b.test(e) ? p(e) : e || [], !1)
          .length;
      },
    });
  var T,
    k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  ((p.fn.init = function (e, t) {
    var n, i;
    if (!e) return this;
    if ("string" == typeof e) {
      if (
        !(n =
          "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
            ? [null, e, null]
            : k.exec(e)) ||
        (!n[1] && t)
      )
        return !t || t.jquery ? (t || T).find(e) : this.constructor(t).find(e);
      if (n[1]) {
        if (
          ((t = t instanceof p ? t[0] : t),
          p.merge(
            this,
            p.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : d, !0)
          ),
          x.test(n[1]) && p.isPlainObject(t))
        )
          for (n in t)
            p.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
        return this;
      }
      return (
        (i = d.getElementById(n[2])) &&
          i.parentNode &&
          ((this.length = 1), (this[0] = i)),
        (this.context = d),
        (this.selector = e),
        this
      );
    }
    return e.nodeType
      ? ((this.context = this[0] = e), (this.length = 1), this)
      : p.isFunction(e)
      ? void 0 !== T.ready
        ? T.ready(e)
        : e(p)
      : (void 0 !== e.selector &&
          ((this.selector = e.selector), (this.context = e.context)),
        p.makeArray(e, this));
  }).prototype = p.fn),
    (T = p(d));
  var C = /^(?:parents|prev(?:Until|All))/,
    S = { children: !0, contents: !0, next: !0, prev: !0 };
  function E(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  p.extend({
    dir: function (e, t, n) {
      for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (o && p(e).is(n)) break;
          i.push(e);
        }
      return i;
    },
    sibling: function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
  }),
    p.fn.extend({
      has: function (e) {
        var t = p(e, this),
          n = t.length;
        return this.filter(function () {
          for (var e = 0; n > e; e++) if (p.contains(this, t[e])) return !0;
        });
      },
      closest: function (e, t) {
        for (
          var n,
            i = 0,
            o = this.length,
            r = [],
            a = b.test(e) || "string" != typeof e ? p(e, t || this.context) : 0;
          o > i;
          i++
        )
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? a.index(n) > -1
                : 1 === n.nodeType && p.find.matchesSelector(n, e))
            ) {
              r.push(n);
              break;
            }
        return this.pushStack(r.length > 1 ? p.unique(r) : r);
      },
      index: function (e) {
        return e
          ? "string" == typeof e
            ? a.call(p(e), this[0])
            : a.call(this, e.jquery ? e[0] : e)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (e, t) {
        return this.pushStack(p.unique(p.merge(this.get(), p(e, t))));
      },
      addBack: function (e) {
        return this.add(
          null == e ? this.prevObject : this.prevObject.filter(e)
        );
      },
    }),
    p.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return p.dir(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return p.dir(e, "parentNode", n);
        },
        next: function (e) {
          return E(e, "nextSibling");
        },
        prev: function (e) {
          return E(e, "previousSibling");
        },
        nextAll: function (e) {
          return p.dir(e, "nextSibling");
        },
        prevAll: function (e) {
          return p.dir(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return p.dir(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return p.dir(e, "previousSibling", n);
        },
        siblings: function (e) {
          return p.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return p.sibling(e.firstChild);
        },
        contents: function (e) {
          return e.contentDocument || p.merge([], e.childNodes);
        },
      },
      function (e, t) {
        p.fn[e] = function (n, i) {
          var o = p.map(this, t, n);
          return (
            "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (o = p.filter(i, o)),
            this.length > 1 && (S[e] || p.unique(o), C.test(e) && o.reverse()),
            this.pushStack(o)
          );
        };
      }
    );
  var A,
    M = /\S+/g,
    P = {};
  function O() {
    d.removeEventListener("DOMContentLoaded", O, !1),
      e.removeEventListener("load", O, !1),
      p.ready();
  }
  (p.Callbacks = function (e) {
    var t,
      n,
      i,
      o,
      r,
      a,
      s = [],
      l =
        !(e =
          "string" == typeof e
            ? P[e] ||
              (function (e) {
                var t = (P[e] = {});
                return (
                  p.each(e.match(M) || [], function (e, n) {
                    t[n] = !0;
                  }),
                  t
                );
              })(e)
            : p.extend({}, e)).once && [],
      u = function (d) {
        for (
          t = e.memory && d, n = !0, a = o || 0, o = 0, r = s.length, i = !0;
          s && r > a;
          a++
        )
          if (!1 === s[a].apply(d[0], d[1]) && e.stopOnFalse) {
            t = !1;
            break;
          }
        (i = !1),
          s && (l ? l.length && u(l.shift()) : t ? (s = []) : c.disable());
      },
      c = {
        add: function () {
          if (s) {
            var n = s.length;
            !(function t(n) {
              p.each(n, function (n, i) {
                var o = p.type(i);
                "function" === o
                  ? (e.unique && c.has(i)) || s.push(i)
                  : i && i.length && "string" !== o && t(i);
              });
            })(arguments),
              i ? (r = s.length) : t && ((o = n), u(t));
          }
          return this;
        },
        remove: function () {
          return (
            s &&
              p.each(arguments, function (e, t) {
                for (var n; (n = p.inArray(t, s, n)) > -1; )
                  s.splice(n, 1), i && (r >= n && r--, a >= n && a--);
              }),
            this
          );
        },
        has: function (e) {
          return e ? p.inArray(e, s) > -1 : !(!s || !s.length);
        },
        empty: function () {
          return (s = []), (r = 0), this;
        },
        disable: function () {
          return (s = l = t = void 0), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (l = void 0), t || c.disable(), this;
        },
        locked: function () {
          return !l;
        },
        fireWith: function (e, t) {
          return (
            !s ||
              (n && !l) ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              i ? l.push(t) : u(t)),
            this
          );
        },
        fire: function () {
          return c.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!n;
        },
      };
    return c;
  }),
    p.extend({
      Deferred: function (e) {
        var t = [
            ["resolve", "done", p.Callbacks("once memory"), "resolved"],
            ["reject", "fail", p.Callbacks("once memory"), "rejected"],
            ["notify", "progress", p.Callbacks("memory")],
          ],
          n = "pending",
          i = {
            state: function () {
              return n;
            },
            always: function () {
              return o.done(arguments).fail(arguments), this;
            },
            then: function () {
              var e = arguments;
              return p
                .Deferred(function (n) {
                  p.each(t, function (t, r) {
                    var a = p.isFunction(e[t]) && e[t];
                    o[r[1]](function () {
                      var e = a && a.apply(this, arguments);
                      e && p.isFunction(e.promise)
                        ? e
                            .promise()
                            .done(n.resolve)
                            .fail(n.reject)
                            .progress(n.notify)
                        : n[r[0] + "With"](
                            this === i ? n.promise() : this,
                            a ? [e] : arguments
                          );
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? p.extend(e, i) : i;
            },
          },
          o = {};
        return (
          (i.pipe = i.then),
          p.each(t, function (e, r) {
            var a = r[2],
              s = r[3];
            (i[r[1]] = a.add),
              s &&
                a.add(
                  function () {
                    n = s;
                  },
                  t[1 ^ e][2].disable,
                  t[2][2].lock
                ),
              (o[r[0]] = function () {
                return o[r[0] + "With"](this === o ? i : this, arguments), this;
              }),
              (o[r[0] + "With"] = a.fireWith);
          }),
          i.promise(o),
          e && e.call(o, o),
          o
        );
      },
      when: function (e) {
        var t,
          n,
          o,
          r = 0,
          a = i.call(arguments),
          s = a.length,
          l = 1 !== s || (e && p.isFunction(e.promise)) ? s : 0,
          u = 1 === l ? e : p.Deferred(),
          c = function (e, n, o) {
            return function (r) {
              (n[e] = this),
                (o[e] = arguments.length > 1 ? i.call(arguments) : r),
                o === t ? u.notifyWith(n, o) : --l || u.resolveWith(n, o);
            };
          };
        if (s > 1)
          for (t = new Array(s), n = new Array(s), o = new Array(s); s > r; r++)
            a[r] && p.isFunction(a[r].promise)
              ? a[r]
                  .promise()
                  .done(c(r, o, a))
                  .fail(u.reject)
                  .progress(c(r, n, t))
              : --l;
        return l || u.resolveWith(o, a), u.promise();
      },
    }),
    (p.fn.ready = function (e) {
      return p.ready.promise().done(e), this;
    }),
    p.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (e) {
        e ? p.readyWait++ : p.ready(!0);
      },
      ready: function (e) {
        (!0 === e ? --p.readyWait : p.isReady) ||
          ((p.isReady = !0),
          (!0 !== e && --p.readyWait > 0) ||
            (A.resolveWith(d, [p]),
            p.fn.triggerHandler &&
              (p(d).triggerHandler("ready"), p(d).off("ready"))));
      },
    }),
    (p.ready.promise = function (t) {
      return (
        A ||
          ((A = p.Deferred()),
          "complete" === d.readyState
            ? setTimeout(p.ready)
            : (d.addEventListener("DOMContentLoaded", O, !1),
              e.addEventListener("load", O, !1))),
        A.promise(t)
      );
    }),
    p.ready.promise();
  var N = (p.access = function (e, t, n, i, o, r, a) {
    var s = 0,
      l = e.length,
      u = null == n;
    if ("object" === p.type(n))
      for (s in ((o = !0), n)) p.access(e, t, s, n[s], !0, r, a);
    else if (
      void 0 !== i &&
      ((o = !0),
      p.isFunction(i) || (a = !0),
      u &&
        (a
          ? (t.call(e, i), (t = null))
          : ((u = t),
            (t = function (e, t, n) {
              return u.call(p(e), n);
            }))),
      t)
    )
      for (; l > s; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
    return o ? e : u ? t.call(e) : l ? t(e[0], n) : r;
  });
  function j() {
    Object.defineProperty((this.cache = {}), 0, {
      get: function () {
        return {};
      },
    }),
      (this.expando = p.expando + j.uid++);
  }
  (p.acceptData = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  }),
    (j.uid = 1),
    (j.accepts = p.acceptData),
    (j.prototype = {
      key: function (e) {
        if (!j.accepts(e)) return 0;
        var t = {},
          n = e[this.expando];
        if (!n) {
          n = j.uid++;
          try {
            (t[this.expando] = { value: n }), Object.defineProperties(e, t);
          } catch (i) {
            (t[this.expando] = n), p.extend(e, t);
          }
        }
        return this.cache[n] || (this.cache[n] = {}), n;
      },
      set: function (e, t, n) {
        var i,
          o = this.key(e),
          r = this.cache[o];
        if ("string" == typeof t) r[t] = n;
        else if (p.isEmptyObject(r)) p.extend(this.cache[o], t);
        else for (i in t) r[i] = t[i];
        return r;
      },
      get: function (e, t) {
        var n = this.cache[this.key(e)];
        return void 0 === t ? n : n[t];
      },
      access: function (e, t, n) {
        var i;
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? void 0 !== (i = this.get(e, t))
            ? i
            : this.get(e, p.camelCase(t))
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          i,
          o,
          r = this.key(e),
          a = this.cache[r];
        if (void 0 === t) this.cache[r] = {};
        else {
          p.isArray(t)
            ? (i = t.concat(t.map(p.camelCase)))
            : ((o = p.camelCase(t)),
              t in a
                ? (i = [t, o])
                : (i = (i = o) in a ? [i] : i.match(M) || [])),
            (n = i.length);
          for (; n--; ) delete a[i[n]];
        }
      },
      hasData: function (e) {
        return !p.isEmptyObject(this.cache[e[this.expando]] || {});
      },
      discard: function (e) {
        e[this.expando] && delete this.cache[e[this.expando]];
      },
    });
  var D = new j(),
    R = new j(),
    B = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    L = /([A-Z])/g;
  function F(e, t, n) {
    var i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((i = "data-" + t.replace(L, "-$1").toLowerCase()),
        "string" == typeof (n = e.getAttribute(i)))
      ) {
        try {
          n =
            "true" === n ||
            ("false" !== n &&
              ("null" === n
                ? null
                : +n + "" === n
                ? +n
                : B.test(n)
                ? p.parseJSON(n)
                : n));
        } catch (e) {}
        R.set(e, t, n);
      } else n = void 0;
    return n;
  }
  p.extend({
    hasData: function (e) {
      return R.hasData(e) || D.hasData(e);
    },
    data: function (e, t, n) {
      return R.access(e, t, n);
    },
    removeData: function (e, t) {
      R.remove(e, t);
    },
    _data: function (e, t, n) {
      return D.access(e, t, n);
    },
    _removeData: function (e, t) {
      D.remove(e, t);
    },
  }),
    p.fn.extend({
      data: function (e, t) {
        var n,
          i,
          o,
          r = this[0],
          a = r && r.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((o = R.get(r)), 1 === r.nodeType && !D.get(r, "hasDataAttrs"))
          ) {
            for (n = a.length; n--; )
              a[n] &&
                0 === (i = a[n].name).indexOf("data-") &&
                ((i = p.camelCase(i.slice(5))), F(r, i, o[i]));
            D.set(r, "hasDataAttrs", !0);
          }
          return o;
        }
        return "object" == typeof e
          ? this.each(function () {
              R.set(this, e);
            })
          : N(
              this,
              function (t) {
                var n,
                  i = p.camelCase(e);
                if (r && void 0 === t) {
                  if (void 0 !== (n = R.get(r, e))) return n;
                  if (void 0 !== (n = R.get(r, i))) return n;
                  if (void 0 !== (n = F(r, i, void 0))) return n;
                } else
                  this.each(function () {
                    var n = R.get(this, i);
                    R.set(this, i, t),
                      -1 !== e.indexOf("-") &&
                        void 0 !== n &&
                        R.set(this, e, t);
                  });
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          R.remove(this, e);
        });
      },
    }),
    p.extend({
      queue: function (e, t, n) {
        var i;
        return e
          ? ((t = (t || "fx") + "queue"),
            (i = D.get(e, t)),
            n &&
              (!i || p.isArray(n)
                ? (i = D.access(e, t, p.makeArray(n)))
                : i.push(n)),
            i || [])
          : void 0;
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = p.queue(e, t),
          i = n.length,
          o = n.shift(),
          r = p._queueHooks(e, t);
        "inprogress" === o && ((o = n.shift()), i--),
          o &&
            ("fx" === t && n.unshift("inprogress"),
            delete r.stop,
            o.call(
              e,
              function () {
                p.dequeue(e, t);
              },
              r
            )),
          !i && r && r.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          D.get(e, n) ||
          D.access(e, n, {
            empty: p.Callbacks("once memory").add(function () {
              D.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    p.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? p.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = p.queue(this, e, t);
                p._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && p.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          p.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          i = 1,
          o = p.Deferred(),
          r = this,
          a = this.length,
          s = function () {
            --i || o.resolveWith(r, [r]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          a--;

        )
          (n = D.get(r[a], e + "queueHooks")) &&
            n.empty &&
            (i++, n.empty.add(s));
        return s(), o.promise(t);
      },
    });
  var I = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    H = ["Top", "Right", "Bottom", "Left"],
    X = function (e, t) {
      return (
        (e = t || e),
        "none" === p.css(e, "display") || !p.contains(e.ownerDocument, e)
      );
    },
    q = /^(?:checkbox|radio)$/i;
  !(function () {
    var e = d.createDocumentFragment().appendChild(d.createElement("div")),
      t = d.createElement("input");
    t.setAttribute("type", "radio"),
      t.setAttribute("checked", "checked"),
      t.setAttribute("name", "t"),
      e.appendChild(t),
      (c.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (e.innerHTML = "<textarea>x</textarea>"),
      (c.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
  })();
  var G = "undefined";
  c.focusinBubbles = "onfocusin" in e;
  var W = /^key/,
    U = /^(?:mouse|pointer|contextmenu)|click/,
    z = /^(?:focusinfocus|focusoutblur)$/,
    K = /^([^.]*)(?:\.(.+)|)$/;
  function V() {
    return !0;
  }
  function Y() {
    return !1;
  }
  function Z() {
    try {
      return d.activeElement;
    } catch (e) {}
  }
  (p.event = {
    global: {},
    add: function (e, t, n, i, o) {
      var r,
        a,
        s,
        l,
        u,
        c,
        d,
        f,
        h,
        m,
        g,
        v = D.get(e);
      if (v)
        for (
          n.handler && ((n = (r = n).handler), (o = r.selector)),
            n.guid || (n.guid = p.guid++),
            (l = v.events) || (l = v.events = {}),
            (a = v.handle) ||
              (a = v.handle = function (t) {
                return typeof p !== G && p.event.triggered !== t.type
                  ? p.event.dispatch.apply(e, arguments)
                  : void 0;
              }),
            u = (t = (t || "").match(M) || [""]).length;
          u--;

        )
          (h = g = (s = K.exec(t[u]) || [])[1]),
            (m = (s[2] || "").split(".").sort()),
            h &&
              ((d = p.event.special[h] || {}),
              (h = (o ? d.delegateType : d.bindType) || h),
              (d = p.event.special[h] || {}),
              (c = p.extend(
                {
                  type: h,
                  origType: g,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: o,
                  needsContext: o && p.expr.match.needsContext.test(o),
                  namespace: m.join("."),
                },
                r
              )),
              (f = l[h]) ||
                (((f = l[h] = []).delegateCount = 0),
                (d.setup && !1 !== d.setup.call(e, i, m, a)) ||
                  (e.addEventListener && e.addEventListener(h, a, !1))),
              d.add &&
                (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
              o ? f.splice(f.delegateCount++, 0, c) : f.push(c),
              (p.event.global[h] = !0));
    },
    remove: function (e, t, n, i, o) {
      var r,
        a,
        s,
        l,
        u,
        c,
        d,
        f,
        h,
        m,
        g,
        v = D.hasData(e) && D.get(e);
      if (v && (l = v.events)) {
        for (u = (t = (t || "").match(M) || [""]).length; u--; )
          if (
            ((h = g = (s = K.exec(t[u]) || [])[1]),
            (m = (s[2] || "").split(".").sort()),
            h)
          ) {
            for (
              d = p.event.special[h] || {},
                f = l[(h = (i ? d.delegateType : d.bindType) || h)] || [],
                s =
                  s[2] &&
                  new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                a = r = f.length;
              r--;

            )
              (c = f[r]),
                (!o && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (i && i !== c.selector && ("**" !== i || !c.selector)) ||
                  (f.splice(r, 1),
                  c.selector && f.delegateCount--,
                  d.remove && d.remove.call(e, c));
            a &&
              !f.length &&
              ((d.teardown && !1 !== d.teardown.call(e, m, v.handle)) ||
                p.removeEvent(e, h, v.handle),
              delete l[h]);
          } else for (h in l) p.event.remove(e, h + t[u], n, i, !0);
        p.isEmptyObject(l) && (delete v.handle, D.remove(e, "events"));
      }
    },
    trigger: function (t, n, i, o) {
      var r,
        a,
        s,
        l,
        c,
        f,
        h,
        m = [i || d],
        g = u.call(t, "type") ? t.type : t,
        v = u.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((a = s = i = i || d),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !z.test(g + p.event.triggered) &&
          (g.indexOf(".") >= 0 && ((g = (v = g.split(".")).shift()), v.sort()),
          (c = g.indexOf(":") < 0 && "on" + g),
          ((t = t[p.expando]
            ? t
            : new p.Event(g, "object" == typeof t && t)).isTrigger = o ? 2 : 3),
          (t.namespace = v.join(".")),
          (t.namespace_re = t.namespace
            ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = i),
          (n = null == n ? [t] : p.makeArray(n, [t])),
          (h = p.event.special[g] || {}),
          o || !h.trigger || !1 !== h.trigger.apply(i, n)))
      ) {
        if (!o && !h.noBubble && !p.isWindow(i)) {
          for (
            l = h.delegateType || g, z.test(l + g) || (a = a.parentNode);
            a;
            a = a.parentNode
          )
            m.push(a), (s = a);
          s === (i.ownerDocument || d) &&
            m.push(s.defaultView || s.parentWindow || e);
        }
        for (r = 0; (a = m[r++]) && !t.isPropagationStopped(); )
          (t.type = r > 1 ? l : h.bindType || g),
            (f = (D.get(a, "events") || {})[t.type] && D.get(a, "handle")) &&
              f.apply(a, n),
            (f = c && a[c]) &&
              f.apply &&
              p.acceptData(a) &&
              ((t.result = f.apply(a, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = g),
          o ||
            t.isDefaultPrevented() ||
            (h._default && !1 !== h._default.apply(m.pop(), n)) ||
            !p.acceptData(i) ||
            (c &&
              p.isFunction(i[g]) &&
              !p.isWindow(i) &&
              ((s = i[c]) && (i[c] = null),
              (p.event.triggered = g),
              i[g](),
              (p.event.triggered = void 0),
              s && (i[c] = s))),
          t.result
        );
      }
    },
    dispatch: function (e) {
      e = p.event.fix(e);
      var t,
        n,
        o,
        r,
        a,
        s = [],
        l = i.call(arguments),
        u = (D.get(this, "events") || {})[e.type] || [],
        c = p.event.special[e.type] || {};
      if (
        ((l[0] = e),
        (e.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, e))
      ) {
        for (
          s = p.event.handlers.call(this, e, u), t = 0;
          (r = s[t++]) && !e.isPropagationStopped();

        )
          for (
            e.currentTarget = r.elem, n = 0;
            (a = r.handlers[n++]) && !e.isImmediatePropagationStopped();

          )
            (!e.namespace_re || e.namespace_re.test(a.namespace)) &&
              ((e.handleObj = a),
              (e.data = a.data),
              void 0 !==
                (o = (
                  (p.event.special[a.origType] || {}).handle || a.handler
                ).apply(r.elem, l)) &&
                !1 === (e.result = o) &&
                (e.preventDefault(), e.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function (e, t) {
      var n,
        i,
        o,
        r,
        a = [],
        s = t.delegateCount,
        l = e.target;
      if (s && l.nodeType && (!e.button || "click" !== e.type))
        for (; l !== this; l = l.parentNode || this)
          if (!0 !== l.disabled || "click" !== e.type) {
            for (i = [], n = 0; s > n; n++)
              void 0 === i[(o = (r = t[n]).selector + " ")] &&
                (i[o] = r.needsContext
                  ? p(o, this).index(l) >= 0
                  : p.find(o, this, null, [l]).length),
                i[o] && i.push(r);
            i.length && a.push({ elem: l, handlers: i });
          }
      return s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a;
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
      " "
    ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (e, t) {
        return (
          null == e.which &&
            (e.which = null != t.charCode ? t.charCode : t.keyCode),
          e
        );
      },
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
        " "
      ),
      filter: function (e, t) {
        var n,
          i,
          o,
          r = t.button;
        return (
          null == e.pageX &&
            null != t.clientX &&
            ((i = (n = e.target.ownerDocument || d).documentElement),
            (o = n.body),
            (e.pageX =
              t.clientX +
              ((i && i.scrollLeft) || (o && o.scrollLeft) || 0) -
              ((i && i.clientLeft) || (o && o.clientLeft) || 0)),
            (e.pageY =
              t.clientY +
              ((i && i.scrollTop) || (o && o.scrollTop) || 0) -
              ((i && i.clientTop) || (o && o.clientTop) || 0))),
          e.which ||
            void 0 === r ||
            (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
          e
        );
      },
    },
    fix: function (e) {
      if (e[p.expando]) return e;
      var t,
        n,
        i,
        o = e.type,
        r = e,
        a = this.fixHooks[o];
      for (
        a ||
          (this.fixHooks[o] = a = U.test(o)
            ? this.mouseHooks
            : W.test(o)
            ? this.keyHooks
            : {}),
          i = a.props ? this.props.concat(a.props) : this.props,
          e = new p.Event(r),
          t = i.length;
        t--;

      )
        e[(n = i[t])] = r[n];
      return (
        e.target || (e.target = d),
        3 === e.target.nodeType && (e.target = e.target.parentNode),
        a.filter ? a.filter(e, r) : e
      );
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          return this !== Z() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === Z() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return "checkbox" === this.type &&
            this.click &&
            p.nodeName(this, "input")
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (e) {
          return p.nodeName(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
    simulate: function (e, t, n, i) {
      var o = p.extend(new p.Event(), n, {
        type: e,
        isSimulated: !0,
        originalEvent: {},
      });
      i ? p.event.trigger(o, null, t) : p.event.dispatch.call(t, o),
        o.isDefaultPrevented() && n.preventDefault();
    },
  }),
    (p.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n, !1);
    }),
    (p.Event = function (e, t) {
      return this instanceof p.Event
        ? (e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? V
                  : Y))
            : (this.type = e),
          t && p.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || p.now()),
          void (this[p.expando] = !0))
        : new p.Event(e, t);
    }),
    (p.Event.prototype = {
      isDefaultPrevented: Y,
      isPropagationStopped: Y,
      isImmediatePropagationStopped: Y,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = V),
          e && e.preventDefault && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = V),
          e && e.stopPropagation && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = V),
          e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    p.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        p.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              i = e.relatedTarget,
              o = e.handleObj;
            return (
              (!i || (i !== this && !p.contains(this, i))) &&
                ((e.type = o.origType),
                (n = o.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    c.focusinBubbles ||
      p.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          p.event.simulate(t, e.target, p.event.fix(e), !0);
        };
        p.event.special[t] = {
          setup: function () {
            var i = this.ownerDocument || this,
              o = D.access(i, t);
            o || i.addEventListener(e, n, !0), D.access(i, t, (o || 0) + 1);
          },
          teardown: function () {
            var i = this.ownerDocument || this,
              o = D.access(i, t) - 1;
            o
              ? D.access(i, t, o)
              : (i.removeEventListener(e, n, !0), D.remove(i, t));
          },
        };
      }),
    p.fn.extend({
      on: function (e, t, n, i, o) {
        var r, a;
        if ("object" == typeof e) {
          for (a in ("string" != typeof t && ((n = n || t), (t = void 0)), e))
            this.on(a, t, n, e[a], o);
          return this;
        }
        if (
          (null == n && null == i
            ? ((i = t), (n = t = void 0))
            : null == i &&
              ("string" == typeof t
                ? ((i = n), (n = void 0))
                : ((i = n), (n = t), (t = void 0))),
          !1 === i)
        )
          i = Y;
        else if (!i) return this;
        return (
          1 === o &&
            ((r = i),
            ((i = function (e) {
              return p().off(e), r.apply(this, arguments);
            }).guid = r.guid || (r.guid = p.guid++))),
          this.each(function () {
            p.event.add(this, e, i, n, t);
          })
        );
      },
      one: function (e, t, n, i) {
        return this.on(e, t, n, i, 1);
      },
      off: function (e, t, n) {
        var i, o;
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            p(e.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (o in e) this.off(o, t, e[o]);
          return this;
        }
        return (
          (!1 === t || "function" == typeof t) && ((n = t), (t = void 0)),
          !1 === n && (n = Y),
          this.each(function () {
            p.event.remove(this, e, n, t);
          })
        );
      },
      trigger: function (e, t) {
        return this.each(function () {
          p.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        return n ? p.event.trigger(e, t, n, !0) : void 0;
      },
    });
  var J = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Q = /<([\w:]+)/,
    ee = /<|&#?\w+;/,
    te = /<(?:script|style|link)/i,
    ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ie = /^$|\/(?:java|ecma)script/i,
    oe = /^true\/(.*)/,
    re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    ae = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  function se(e, t) {
    return p.nodeName(e, "table") &&
      p.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
      ? e.getElementsByTagName("tbody")[0] ||
          e.appendChild(e.ownerDocument.createElement("tbody"))
      : e;
  }
  function le(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function ue(e) {
    var t = oe.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
  }
  function ce(e, t) {
    for (var n = 0, i = e.length; i > n; n++)
      D.set(e[n], "globalEval", !t || D.get(t[n], "globalEval"));
  }
  function de(e, t) {
    var n, i, o, r, a, s, l, u;
    if (1 === t.nodeType) {
      if (
        D.hasData(e) &&
        ((r = D.access(e)), (a = D.set(t, r)), (u = r.events))
      )
        for (o in (delete a.handle, (a.events = {}), u))
          for (n = 0, i = u[o].length; i > n; n++) p.event.add(t, o, u[o][n]);
      R.hasData(e) && ((s = R.access(e)), (l = p.extend({}, s)), R.set(t, l));
    }
  }
  function fe(e, t) {
    var n = e.getElementsByTagName
      ? e.getElementsByTagName(t || "*")
      : e.querySelectorAll
      ? e.querySelectorAll(t || "*")
      : [];
    return void 0 === t || (t && p.nodeName(e, t)) ? p.merge([e], n) : n;
  }
  function pe(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && q.test(e.type)
      ? (t.checked = e.checked)
      : ("input" === n || "textarea" === n) &&
        (t.defaultValue = e.defaultValue);
  }
  (ae.optgroup = ae.option),
    (ae.tbody = ae.tfoot = ae.colgroup = ae.caption = ae.thead),
    (ae.th = ae.td),
    p.extend({
      clone: function (e, t, n) {
        var i,
          o,
          r,
          a,
          s = e.cloneNode(!0),
          l = p.contains(e.ownerDocument, e);
        if (
          !(
            c.noCloneChecked ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            p.isXMLDoc(e)
          )
        )
          for (a = fe(s), i = 0, o = (r = fe(e)).length; o > i; i++)
            pe(r[i], a[i]);
        if (t)
          if (n)
            for (
              r = r || fe(e), a = a || fe(s), i = 0, o = r.length;
              o > i;
              i++
            )
              de(r[i], a[i]);
          else de(e, s);
        return (
          (a = fe(s, "script")).length > 0 && ce(a, !l && fe(e, "script")), s
        );
      },
      buildFragment: function (e, t, n, i) {
        for (
          var o,
            r,
            a,
            s,
            l,
            u,
            c = t.createDocumentFragment(),
            d = [],
            f = 0,
            h = e.length;
          h > f;
          f++
        )
          if ((o = e[f]) || 0 === o)
            if ("object" === p.type(o)) p.merge(d, o.nodeType ? [o] : o);
            else if (ee.test(o)) {
              for (
                r = r || c.appendChild(t.createElement("div")),
                  a = (Q.exec(o) || ["", ""])[1].toLowerCase(),
                  s = ae[a] || ae._default,
                  r.innerHTML = s[1] + o.replace(J, "<$1></$2>") + s[2],
                  u = s[0];
                u--;

              )
                r = r.lastChild;
              p.merge(d, r.childNodes), ((r = c.firstChild).textContent = "");
            } else d.push(t.createTextNode(o));
        for (c.textContent = "", f = 0; (o = d[f++]); )
          if (
            (!i || -1 === p.inArray(o, i)) &&
            ((l = p.contains(o.ownerDocument, o)),
            (r = fe(c.appendChild(o), "script")),
            l && ce(r),
            n)
          )
            for (u = 0; (o = r[u++]); ) ie.test(o.type || "") && n.push(o);
        return c;
      },
      cleanData: function (e) {
        for (
          var t, n, i, o, r = p.event.special, a = 0;
          void 0 !== (n = e[a]);
          a++
        ) {
          if (p.acceptData(n) && (o = n[D.expando]) && (t = D.cache[o])) {
            if (t.events)
              for (i in t.events)
                r[i] ? p.event.remove(n, i) : p.removeEvent(n, i, t.handle);
            D.cache[o] && delete D.cache[o];
          }
          delete R.cache[n[R.expando]];
        }
      },
    }),
    p.fn.extend({
      text: function (e) {
        return N(
          this,
          function (e) {
            return void 0 === e
              ? p.text(this)
              : this.empty().each(function () {
                  (1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType) &&
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return this.domManip(arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            se(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return this.domManip(arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = se(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return this.domManip(arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return this.domManip(arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      remove: function (e, t) {
        for (
          var n, i = e ? p.filter(e, this) : this, o = 0;
          null != (n = i[o]);
          o++
        )
          t || 1 !== n.nodeType || p.cleanData(fe(n)),
            n.parentNode &&
              (t && p.contains(n.ownerDocument, n) && ce(fe(n, "script")),
              n.parentNode.removeChild(n));
        return this;
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (p.cleanData(fe(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return p.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return N(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !te.test(e) &&
              !ae[(Q.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = e.replace(J, "<$1></$2>");
              try {
                for (; i > n; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (p.cleanData(fe(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = arguments[0];
        return (
          this.domManip(arguments, function (t) {
            (e = this.parentNode),
              p.cleanData(fe(this)),
              e && e.replaceChild(t, this);
          }),
          e && (e.length || e.nodeType) ? this : this.remove()
        );
      },
      detach: function (e) {
        return this.remove(e, !0);
      },
      domManip: function (e, t) {
        e = o.apply([], e);
        var n,
          i,
          r,
          a,
          s,
          l,
          u = 0,
          d = this.length,
          f = this,
          h = d - 1,
          m = e[0],
          g = p.isFunction(m);
        if (g || (d > 1 && "string" == typeof m && !c.checkClone && ne.test(m)))
          return this.each(function (n) {
            var i = f.eq(n);
            g && (e[0] = m.call(this, n, i.html())), i.domManip(e, t);
          });
        if (
          d &&
          ((i = (n = p.buildFragment(e, this[0].ownerDocument, !1, this))
            .firstChild),
          1 === n.childNodes.length && (n = i),
          i)
        ) {
          for (a = (r = p.map(fe(n, "script"), le)).length; d > u; u++)
            (s = n),
              u !== h &&
                ((s = p.clone(s, !0, !0)), a && p.merge(r, fe(s, "script"))),
              t.call(this[u], s, u);
          if (a)
            for (
              l = r[r.length - 1].ownerDocument, p.map(r, ue), u = 0;
              a > u;
              u++
            )
              (s = r[u]),
                ie.test(s.type || "") &&
                  !D.access(s, "globalEval") &&
                  p.contains(l, s) &&
                  (s.src
                    ? p._evalUrl && p._evalUrl(s.src)
                    : p.globalEval(s.textContent.replace(re, "")));
        }
        return this;
      },
    }),
    p.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        p.fn[e] = function (e) {
          for (var n, i = [], o = p(e), a = o.length - 1, s = 0; a >= s; s++)
            (n = s === a ? this : this.clone(!0)),
              p(o[s])[t](n),
              r.apply(i, n.get());
          return this.pushStack(i);
        };
      }
    );
  var he,
    me = {};
  function ge(t, n) {
    var i,
      o = p(n.createElement(t)).appendTo(n.body),
      r =
        e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(o[0]))
          ? i.display
          : p.css(o[0], "display");
    return o.detach(), r;
  }
  function ve(e) {
    var t = d,
      n = me[e];
    return (
      n ||
        (("none" !== (n = ge(e, t)) && n) ||
          ((t = (he = (
            he || p("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(t.documentElement))[0].contentDocument).write(),
          t.close(),
          (n = ge(e, t)),
          he.detach()),
        (me[e] = n)),
      n
    );
  }
  var ye = /^margin/,
    _e = new RegExp("^(" + I + ")(?!px)[a-z%]+$", "i"),
    be = function (t) {
      return t.ownerDocument.defaultView.opener
        ? t.ownerDocument.defaultView.getComputedStyle(t, null)
        : e.getComputedStyle(t, null);
    };
  function xe(e, t, n) {
    var i,
      o,
      r,
      a,
      s = e.style;
    return (
      (n = n || be(e)) && (a = n.getPropertyValue(t) || n[t]),
      n &&
        ("" !== a || p.contains(e.ownerDocument, e) || (a = p.style(e, t)),
        _e.test(a) &&
          ye.test(t) &&
          ((i = s.width),
          (o = s.minWidth),
          (r = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = i),
          (s.minWidth = o),
          (s.maxWidth = r))),
      void 0 !== a ? a + "" : a
    );
  }
  function we(e, t) {
    return {
      get: function () {
        return e()
          ? void delete this.get
          : (this.get = t).apply(this, arguments);
      },
    };
  }
  !(function () {
    var t,
      n,
      i = d.documentElement,
      o = d.createElement("div"),
      r = d.createElement("div");
    if (r.style) {
      function a() {
        (r.style.cssText =
          "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
          (r.innerHTML = ""),
          i.appendChild(o);
        var a = e.getComputedStyle(r, null);
        (t = "1%" !== a.top), (n = "4px" === a.width), i.removeChild(o);
      }
      (r.style.backgroundClip = "content-box"),
        (r.cloneNode(!0).style.backgroundClip = ""),
        (c.clearCloneStyle = "content-box" === r.style.backgroundClip),
        (o.style.cssText =
          "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute"),
        o.appendChild(r),
        e.getComputedStyle &&
          p.extend(c, {
            pixelPosition: function () {
              return a(), t;
            },
            boxSizingReliable: function () {
              return null == n && a(), n;
            },
            reliableMarginRight: function () {
              var t,
                n = r.appendChild(d.createElement("div"));
              return (
                (n.style.cssText = r.style.cssText =
                  "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                (n.style.marginRight = n.style.width = "0"),
                (r.style.width = "1px"),
                i.appendChild(o),
                (t = !parseFloat(e.getComputedStyle(n, null).marginRight)),
                i.removeChild(o),
                r.removeChild(n),
                t
              );
            },
          });
    }
  })(),
    (p.swap = function (e, t, n, i) {
      var o,
        r,
        a = {};
      for (r in t) (a[r] = e.style[r]), (e.style[r] = t[r]);
      for (r in ((o = n.apply(e, i || [])), t)) e.style[r] = a[r];
      return o;
    });
  var $e = /^(none|table(?!-c[ea]).+)/,
    Te = new RegExp("^(" + I + ")(.*)$", "i"),
    ke = new RegExp("^([+-])=(" + I + ")", "i"),
    Ce = { position: "absolute", visibility: "hidden", display: "block" },
    Se = { letterSpacing: "0", fontWeight: "400" },
    Ee = ["Webkit", "O", "Moz", "ms"];
  function Ae(e, t) {
    if (t in e) return t;
    for (var n = t[0].toUpperCase() + t.slice(1), i = t, o = Ee.length; o--; )
      if ((t = Ee[o] + n) in e) return t;
    return i;
  }
  function Me(e, t, n) {
    var i = Te.exec(t);
    return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t;
  }
  function Pe(e, t, n, i, o) {
    for (
      var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
        a = 0;
      4 > r;
      r += 2
    )
      "margin" === n && (a += p.css(e, n + H[r], !0, o)),
        i
          ? ("content" === n && (a -= p.css(e, "padding" + H[r], !0, o)),
            "margin" !== n && (a -= p.css(e, "border" + H[r] + "Width", !0, o)))
          : ((a += p.css(e, "padding" + H[r], !0, o)),
            "padding" !== n &&
              (a += p.css(e, "border" + H[r] + "Width", !0, o)));
    return a;
  }
  function Oe(e, t, n) {
    var i = !0,
      o = "width" === t ? e.offsetWidth : e.offsetHeight,
      r = be(e),
      a = "border-box" === p.css(e, "boxSizing", !1, r);
    if (0 >= o || null == o) {
      if (
        ((0 > (o = xe(e, t, r)) || null == o) && (o = e.style[t]), _e.test(o))
      )
        return o;
      (i = a && (c.boxSizingReliable() || o === e.style[t])),
        (o = parseFloat(o) || 0);
    }
    return o + Pe(e, t, n || (a ? "border" : "content"), i, r) + "px";
  }
  function Ne(e, t) {
    for (var n, i, o, r = [], a = 0, s = e.length; s > a; a++)
      (i = e[a]).style &&
        ((r[a] = D.get(i, "olddisplay")),
        (n = i.style.display),
        t
          ? (r[a] || "none" !== n || (i.style.display = ""),
            "" === i.style.display &&
              X(i) &&
              (r[a] = D.access(i, "olddisplay", ve(i.nodeName))))
          : ((o = X(i)),
            ("none" === n && o) ||
              D.set(i, "olddisplay", o ? n : p.css(i, "display"))));
    for (a = 0; s > a; a++)
      (i = e[a]).style &&
        ((t && "none" !== i.style.display && "" !== i.style.display) ||
          (i.style.display = t ? r[a] || "" : "none"));
    return e;
  }
  function je(e, t, n, i, o) {
    return new je.prototype.init(e, t, n, i, o);
  }
  p.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = xe(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
          r,
          a,
          s = p.camelCase(t),
          l = e.style;
        return (
          (t = p.cssProps[s] || (p.cssProps[s] = Ae(l, s))),
          (a = p.cssHooks[t] || p.cssHooks[s]),
          void 0 === n
            ? a && "get" in a && void 0 !== (o = a.get(e, !1, i))
              ? o
              : l[t]
            : ("string" === (r = typeof n) &&
                (o = ke.exec(n)) &&
                ((n = (o[1] + 1) * o[2] + parseFloat(p.css(e, t))),
                (r = "number")),
              void (
                null != n &&
                n == n &&
                ("number" !== r || p.cssNumber[s] || (n += "px"),
                c.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (l[t] = "inherit"),
                (a && "set" in a && void 0 === (n = a.set(e, n, i))) ||
                  (l[t] = n))
              ))
        );
      }
    },
    css: function (e, t, n, i) {
      var o,
        r,
        a,
        s = p.camelCase(t);
      return (
        (t = p.cssProps[s] || (p.cssProps[s] = Ae(e.style, s))),
        (a = p.cssHooks[t] || p.cssHooks[s]) &&
          "get" in a &&
          (o = a.get(e, !0, n)),
        void 0 === o && (o = xe(e, t, i)),
        "normal" === o && t in Se && (o = Se[t]),
        "" === n || n
          ? ((r = parseFloat(o)), !0 === n || p.isNumeric(r) ? r || 0 : o)
          : o
      );
    },
  }),
    p.each(["height", "width"], function (e, t) {
      p.cssHooks[t] = {
        get: function (e, n, i) {
          return n
            ? $e.test(p.css(e, "display")) && 0 === e.offsetWidth
              ? p.swap(e, Ce, function () {
                  return Oe(e, t, i);
                })
              : Oe(e, t, i)
            : void 0;
        },
        set: function (e, n, i) {
          var o = i && be(e);
          return Me(
            0,
            n,
            i
              ? Pe(e, t, i, "border-box" === p.css(e, "boxSizing", !1, o), o)
              : 0
          );
        },
      };
    }),
    (p.cssHooks.marginRight = we(c.reliableMarginRight, function (e, t) {
      return t
        ? p.swap(e, { display: "inline-block" }, xe, [e, "marginRight"])
        : void 0;
    })),
    p.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (p.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n];
            4 > i;
            i++
          )
            o[e + H[i] + t] = r[i] || r[i - 2] || r[0];
          return o;
        },
      }),
        ye.test(e) || (p.cssHooks[e + t].set = Me);
    }),
    p.fn.extend({
      css: function (e, t) {
        return N(
          this,
          function (e, t, n) {
            var i,
              o,
              r = {},
              a = 0;
            if (p.isArray(t)) {
              for (i = be(e), o = t.length; o > a; a++)
                r[t[a]] = p.css(e, t[a], !1, i);
              return r;
            }
            return void 0 !== n ? p.style(e, t, n) : p.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
      show: function () {
        return Ne(this, !0);
      },
      hide: function () {
        return Ne(this);
      },
      toggle: function (e) {
        return "boolean" == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              X(this) ? p(this).show() : p(this).hide();
            });
      },
    }),
    (p.Tween = je),
    (je.prototype = {
      constructor: je,
      init: function (e, t, n, i, o, r) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = o || "swing"),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = r || (p.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = je.propHooks[this.prop];
        return e && e.get ? e.get(this) : je.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = je.propHooks[this.prop];
        return (
          (this.pos = t = this.options.duration
            ? p.easing[this.easing](
                e,
                this.options.duration * e,
                0,
                1,
                this.options.duration
              )
            : e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : je.propHooks._default.set(this),
          this
        );
      },
    }),
    (je.prototype.init.prototype = je.prototype),
    (je.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return null == e.elem[e.prop] ||
            (e.elem.style && null != e.elem.style[e.prop])
            ? (t = p.css(e.elem, e.prop, "")) && "auto" !== t
              ? t
              : 0
            : e.elem[e.prop];
        },
        set: function (e) {
          p.fx.step[e.prop]
            ? p.fx.step[e.prop](e)
            : e.elem.style &&
              (null != e.elem.style[p.cssProps[e.prop]] || p.cssHooks[e.prop])
            ? p.style(e.elem, e.prop, e.now + e.unit)
            : (e.elem[e.prop] = e.now);
        },
      },
    }),
    (je.propHooks.scrollTop = je.propHooks.scrollLeft = {
      set: function (e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      },
    }),
    (p.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
    }),
    (p.fx = je.prototype.init),
    (p.fx.step = {});
  var De,
    Re,
    Be = /^(?:toggle|show|hide)$/,
    Le = new RegExp("^(?:([+-])=|)(" + I + ")([a-z%]*)$", "i"),
    Fe = /queueHooks$/,
    Ie = [
      function (e, t, n) {
        var i,
          o,
          r,
          a,
          s,
          l,
          u,
          c = this,
          d = {},
          f = e.style,
          h = e.nodeType && X(e),
          m = D.get(e, "fxshow");
        for (i in (n.queue ||
          (null == (s = p._queueHooks(e, "fx")).unqueued &&
            ((s.unqueued = 0),
            (l = s.empty.fire),
            (s.empty.fire = function () {
              s.unqueued || l();
            })),
          s.unqueued++,
          c.always(function () {
            c.always(function () {
              s.unqueued--, p.queue(e, "fx").length || s.empty.fire();
            });
          })),
        1 === e.nodeType &&
          ("height" in t || "width" in t) &&
          ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
          (u = p.css(e, "display")),
          "inline" ===
            ("none" === u ? D.get(e, "olddisplay") || ve(e.nodeName) : u) &&
            "none" === p.css(e, "float") &&
            (f.display = "inline-block")),
        n.overflow &&
          ((f.overflow = "hidden"),
          c.always(function () {
            (f.overflow = n.overflow[0]),
              (f.overflowX = n.overflow[1]),
              (f.overflowY = n.overflow[2]);
          })),
        t))
          if (((o = t[i]), Be.exec(o))) {
            if (
              (delete t[i],
              (r = r || "toggle" === o),
              o === (h ? "hide" : "show"))
            ) {
              if ("show" !== o || !m || void 0 === m[i]) continue;
              h = !0;
            }
            d[i] = (m && m[i]) || p.style(e, i);
          } else u = void 0;
        if (p.isEmptyObject(d))
          "inline" === ("none" === u ? ve(e.nodeName) : u) && (f.display = u);
        else
          for (i in (m
            ? "hidden" in m && (h = m.hidden)
            : (m = D.access(e, "fxshow", {})),
          r && (m.hidden = !h),
          h
            ? p(e).show()
            : c.done(function () {
                p(e).hide();
              }),
          c.done(function () {
            var t;
            for (t in (D.remove(e, "fxshow"), d)) p.style(e, t, d[t]);
          }),
          d))
            (a = Ge(h ? m[i] : 0, i, c)),
              i in m ||
                ((m[i] = a.start),
                h &&
                  ((a.end = a.start),
                  (a.start = "width" === i || "height" === i ? 1 : 0)));
      },
    ],
    He = {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t),
            i = n.cur(),
            o = Le.exec(t),
            r = (o && o[3]) || (p.cssNumber[e] ? "" : "px"),
            a =
              (p.cssNumber[e] || ("px" !== r && +i)) &&
              Le.exec(p.css(n.elem, e)),
            s = 1,
            l = 20;
          if (a && a[3] !== r) {
            (r = r || a[3]), (o = o || []), (a = +i || 1);
            do {
              (a /= s = s || ".5"), p.style(n.elem, e, a + r);
            } while (s !== (s = n.cur() / i) && 1 !== s && --l);
          }
          return (
            o &&
              ((a = n.start = +a || +i || 0),
              (n.unit = r),
              (n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2])),
            n
          );
        },
      ],
    };
  function Xe() {
    return (
      setTimeout(function () {
        De = void 0;
      }),
      (De = p.now())
    );
  }
  function qe(e, t) {
    var n,
      i = 0,
      o = { height: e };
    for (t = t ? 1 : 0; 4 > i; i += 2 - t)
      o["margin" + (n = H[i])] = o["padding" + n] = e;
    return t && (o.opacity = o.width = e), o;
  }
  function Ge(e, t, n) {
    for (
      var i, o = (He[t] || []).concat(He["*"]), r = 0, a = o.length;
      a > r;
      r++
    )
      if ((i = o[r].call(n, t, e))) return i;
  }
  function We(e, t, n) {
    var i,
      o,
      r = 0,
      a = Ie.length,
      s = p.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (o) return !1;
        for (
          var t = De || Xe(),
            n = Math.max(0, u.startTime + u.duration - t),
            i = 1 - (n / u.duration || 0),
            r = 0,
            a = u.tweens.length;
          a > r;
          r++
        )
          u.tweens[r].run(i);
        return (
          s.notifyWith(e, [u, i, n]),
          1 > i && a ? n : (s.resolveWith(e, [u]), !1)
        );
      },
      u = s.promise({
        elem: e,
        props: p.extend({}, t),
        opts: p.extend(!0, { specialEasing: {} }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: De || Xe(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var i = p.Tween(
            e,
            u.opts,
            t,
            n,
            u.opts.specialEasing[t] || u.opts.easing
          );
          return u.tweens.push(i), i;
        },
        stop: function (t) {
          var n = 0,
            i = t ? u.tweens.length : 0;
          if (o) return this;
          for (o = !0; i > n; n++) u.tweens[n].run(1);
          return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this;
        },
      }),
      c = u.props;
    for (
      (function (e, t) {
        var n, i, o, r, a;
        for (n in e)
          if (
            ((o = t[(i = p.camelCase(n))]),
            (r = e[n]),
            p.isArray(r) && ((o = r[1]), (r = e[n] = r[0])),
            n !== i && ((e[i] = r), delete e[n]),
            (a = p.cssHooks[i]) && ("expand" in a))
          )
            for (n in ((r = a.expand(r)), delete e[i], r))
              (n in e) || ((e[n] = r[n]), (t[n] = o));
          else t[i] = o;
      })(c, u.opts.specialEasing);
      a > r;
      r++
    )
      if ((i = Ie[r].call(u, e, c, u.opts))) return i;
    return (
      p.map(c, Ge, u),
      p.isFunction(u.opts.start) && u.opts.start.call(e, u),
      p.fx.timer(p.extend(l, { elem: e, anim: u, queue: u.opts.queue })),
      u
        .progress(u.opts.progress)
        .done(u.opts.done, u.opts.complete)
        .fail(u.opts.fail)
        .always(u.opts.always)
    );
  }
  (p.Animation = p.extend(We, {
    tweener: function (e, t) {
      p.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.split(" "));
      for (var n, i = 0, o = e.length; o > i; i++)
        (n = e[i]), (He[n] = He[n] || []), He[n].unshift(t);
    },
    prefilter: function (e, t) {
      t ? Ie.unshift(e) : Ie.push(e);
    },
  })),
    (p.speed = function (e, t, n) {
      var i =
        e && "object" == typeof e
          ? p.extend({}, e)
          : {
              complete: n || (!n && t) || (p.isFunction(e) && e),
              duration: e,
              easing: (n && t) || (t && !p.isFunction(t) && t),
            };
      return (
        (i.duration = p.fx.off
          ? 0
          : "number" == typeof i.duration
          ? i.duration
          : i.duration in p.fx.speeds
          ? p.fx.speeds[i.duration]
          : p.fx.speeds._default),
        (null == i.queue || !0 === i.queue) && (i.queue = "fx"),
        (i.old = i.complete),
        (i.complete = function () {
          p.isFunction(i.old) && i.old.call(this),
            i.queue && p.dequeue(this, i.queue);
        }),
        i
      );
    }),
    p.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(X)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, i);
      },
      animate: function (e, t, n, i) {
        var o = p.isEmptyObject(e),
          r = p.speed(t, n, i),
          a = function () {
            var t = We(this, p.extend({}, e), r);
            (o || D.get(this, "finish")) && t.stop(!0);
          };
        return (
          (a.finish = a),
          o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
        );
      },
      stop: function (e, t, n) {
        var i = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && !1 !== e && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              o = null != e && e + "queueHooks",
              r = p.timers,
              a = D.get(this);
            if (o) a[o] && a[o].stop && i(a[o]);
            else for (o in a) a[o] && a[o].stop && Fe.test(o) && i(a[o]);
            for (o = r.length; o--; )
              r[o].elem !== this ||
                (null != e && r[o].queue !== e) ||
                (r[o].anim.stop(n), (t = !1), r.splice(o, 1));
            (t || !n) && p.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = D.get(this),
              i = n[e + "queue"],
              o = n[e + "queueHooks"],
              r = p.timers,
              a = i ? i.length : 0;
            for (
              n.finish = !0,
                p.queue(this, e, []),
                o && o.stop && o.stop.call(this, !0),
                t = r.length;
              t--;

            )
              r[t].elem === this &&
                r[t].queue === e &&
                (r[t].anim.stop(!0), r.splice(t, 1));
            for (t = 0; a > t; t++)
              i[t] && i[t].finish && i[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    p.each(["toggle", "show", "hide"], function (e, t) {
      var n = p.fn[t];
      p.fn[t] = function (e, i, o) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(qe(t, !0), e, i, o);
      };
    }),
    p.each(
      {
        slideDown: qe("show"),
        slideUp: qe("hide"),
        slideToggle: qe("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        p.fn[e] = function (e, n, i) {
          return this.animate(t, e, n, i);
        };
      }
    ),
    (p.timers = []),
    (p.fx.tick = function () {
      var e,
        t = 0,
        n = p.timers;
      for (De = p.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || p.fx.stop(), (De = void 0);
    }),
    (p.fx.timer = function (e) {
      p.timers.push(e), e() ? p.fx.start() : p.timers.pop();
    }),
    (p.fx.interval = 13),
    (p.fx.start = function () {
      Re || (Re = setInterval(p.fx.tick, p.fx.interval));
    }),
    (p.fx.stop = function () {
      clearInterval(Re), (Re = null);
    }),
    (p.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (p.fn.delay = function (e, t) {
      return (
        (e = (p.fx && p.fx.speeds[e]) || e),
        (t = t || "fx"),
        this.queue(t, function (t, n) {
          var i = setTimeout(t, e);
          n.stop = function () {
            clearTimeout(i);
          };
        })
      );
    }),
    (function () {
      var e = d.createElement("input"),
        t = d.createElement("select"),
        n = t.appendChild(d.createElement("option"));
      (e.type = "checkbox"),
        (c.checkOn = "" !== e.value),
        (c.optSelected = n.selected),
        (t.disabled = !0),
        (c.optDisabled = !n.disabled),
        ((e = d.createElement("input")).value = "t"),
        (e.type = "radio"),
        (c.radioValue = "t" === e.value);
    })();
  var Ue,
    ze = p.expr.attrHandle;
  p.fn.extend({
    attr: function (e, t) {
      return N(this, p.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        p.removeAttr(this, e);
      });
    },
  }),
    p.extend({
      attr: function (e, t, n) {
        var i,
          o,
          r = e.nodeType;
        if (e && 3 !== r && 8 !== r && 2 !== r)
          return typeof e.getAttribute === G
            ? p.prop(e, t, n)
            : ((1 === r && p.isXMLDoc(e)) ||
                ((t = t.toLowerCase()),
                (i =
                  p.attrHooks[t] || (p.expr.match.bool.test(t) ? Ue : void 0))),
              void 0 === n
                ? i && "get" in i && null !== (o = i.get(e, t))
                  ? o
                  : null == (o = p.find.attr(e, t))
                  ? void 0
                  : o
                : null !== n
                ? i && "set" in i && void 0 !== (o = i.set(e, n, t))
                  ? o
                  : (e.setAttribute(t, n + ""), n)
                : void p.removeAttr(e, t));
      },
      removeAttr: function (e, t) {
        var n,
          i,
          o = 0,
          r = t && t.match(M);
        if (r && 1 === e.nodeType)
          for (; (n = r[o++]); )
            (i = p.propFix[n] || n),
              p.expr.match.bool.test(n) && (e[i] = !1),
              e.removeAttribute(n);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!c.radioValue && "radio" === t && p.nodeName(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
    }),
    (Ue = {
      set: function (e, t, n) {
        return !1 === t ? p.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    p.each(p.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = ze[t] || p.find.attr;
      ze[t] = function (e, t, i) {
        var o, r;
        return (
          i ||
            ((r = ze[t]),
            (ze[t] = o),
            (o = null != n(e, t, i) ? t.toLowerCase() : null),
            (ze[t] = r)),
          o
        );
      };
    });
  var Ke = /^(?:input|select|textarea|button)$/i;
  p.fn.extend({
    prop: function (e, t) {
      return N(this, p.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[p.propFix[e] || e];
      });
    },
  }),
    p.extend({
      propFix: { for: "htmlFor", class: "className" },
      prop: function (e, t, n) {
        var i,
          o,
          r = e.nodeType;
        if (e && 3 !== r && 8 !== r && 2 !== r)
          return (
            (1 !== r || !p.isXMLDoc(e)) &&
              ((t = p.propFix[t] || t), (o = p.propHooks[t])),
            void 0 !== n
              ? o && "set" in o && void 0 !== (i = o.set(e, n, t))
                ? i
                : (e[t] = n)
              : o && "get" in o && null !== (i = o.get(e, t))
              ? i
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            return e.hasAttribute("tabindex") || Ke.test(e.nodeName) || e.href
              ? e.tabIndex
              : -1;
          },
        },
      },
    }),
    c.optSelected ||
      (p.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
      }),
    p.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        p.propFix[this.toLowerCase()] = this;
      }
    );
  var Ve = /[\t\r\n\f]/g;
  p.fn.extend({
    addClass: function (e) {
      var t,
        n,
        i,
        o,
        r,
        a,
        s = "string" == typeof e && e,
        l = 0,
        u = this.length;
      if (p.isFunction(e))
        return this.each(function (t) {
          p(this).addClass(e.call(this, t, this.className));
        });
      if (s)
        for (t = (e || "").match(M) || []; u > l; l++)
          if (
            (i =
              1 === (n = this[l]).nodeType &&
              (n.className ? (" " + n.className + " ").replace(Ve, " ") : " "))
          ) {
            for (r = 0; (o = t[r++]); )
              i.indexOf(" " + o + " ") < 0 && (i += o + " ");
            (a = p.trim(i)), n.className !== a && (n.className = a);
          }
      return this;
    },
    removeClass: function (e) {
      var t,
        n,
        i,
        o,
        r,
        a,
        s = 0 === arguments.length || ("string" == typeof e && e),
        l = 0,
        u = this.length;
      if (p.isFunction(e))
        return this.each(function (t) {
          p(this).removeClass(e.call(this, t, this.className));
        });
      if (s)
        for (t = (e || "").match(M) || []; u > l; l++)
          if (
            (i =
              1 === (n = this[l]).nodeType &&
              (n.className ? (" " + n.className + " ").replace(Ve, " ") : ""))
          ) {
            for (r = 0; (o = t[r++]); )
              for (; i.indexOf(" " + o + " ") >= 0; )
                i = i.replace(" " + o + " ", " ");
            (a = e ? p.trim(i) : ""), n.className !== a && (n.className = a);
          }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n
        ? t
          ? this.addClass(e)
          : this.removeClass(e)
        : this.each(
            p.isFunction(e)
              ? function (n) {
                  p(this).toggleClass(e.call(this, n, this.className, t), t);
                }
              : function () {
                  if ("string" === n)
                    for (
                      var t, i = 0, o = p(this), r = e.match(M) || [];
                      (t = r[i++]);

                    )
                      o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                  else
                    (n === G || "boolean" === n) &&
                      (this.className &&
                        D.set(this, "__className__", this.className),
                      (this.className =
                        this.className || !1 === e
                          ? ""
                          : D.get(this, "__className__") || ""));
                }
          );
    },
    hasClass: function (e) {
      for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
        if (
          1 === this[n].nodeType &&
          (" " + this[n].className + " ").replace(Ve, " ").indexOf(t) >= 0
        )
          return !0;
      return !1;
    },
  });
  var Ye = /\r/g;
  p.fn.extend({
    val: function (e) {
      var t,
        n,
        i,
        o = this[0];
      return arguments.length
        ? ((i = p.isFunction(e)),
          this.each(function (n) {
            var o;
            1 === this.nodeType &&
              (null == (o = i ? e.call(this, n, p(this).val()) : e)
                ? (o = "")
                : "number" == typeof o
                ? (o += "")
                : p.isArray(o) &&
                  (o = p.map(o, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((t =
                p.valHooks[this.type] ||
                p.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in t &&
                void 0 !== t.set(this, o, "value")) ||
                (this.value = o));
          }))
        : o
        ? (t = p.valHooks[o.type] || p.valHooks[o.nodeName.toLowerCase()]) &&
          "get" in t &&
          void 0 !== (n = t.get(o, "value"))
          ? n
          : "string" == typeof (n = o.value)
          ? n.replace(Ye, "")
          : null == n
          ? ""
          : n
        : void 0;
    },
  }),
    p.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = p.find.attr(e, "value");
            return null != t ? t : p.trim(p.text(e));
          },
        },
        select: {
          get: function (e) {
            for (
              var t,
                n,
                i = e.options,
                o = e.selectedIndex,
                r = "select-one" === e.type || 0 > o,
                a = r ? null : [],
                s = r ? o + 1 : i.length,
                l = 0 > o ? s : r ? o : 0;
              s > l;
              l++
            )
              if (
                !(
                  (!(n = i[l]).selected && l !== o) ||
                  (c.optDisabled
                    ? n.disabled
                    : null !== n.getAttribute("disabled")) ||
                  (n.parentNode.disabled &&
                    p.nodeName(n.parentNode, "optgroup"))
                )
              ) {
                if (((t = p(n).val()), r)) return t;
                a.push(t);
              }
            return a;
          },
          set: function (e, t) {
            for (
              var n, i, o = e.options, r = p.makeArray(t), a = o.length;
              a--;

            )
              ((i = o[a]).selected = p.inArray(i.value, r) >= 0) && (n = !0);
            return n || (e.selectedIndex = -1), r;
          },
        },
      },
    }),
    p.each(["radio", "checkbox"], function () {
      (p.valHooks[this] = {
        set: function (e, t) {
          return p.isArray(t)
            ? (e.checked = p.inArray(p(e).val(), t) >= 0)
            : void 0;
        },
      }),
        c.checkOn ||
          (p.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    p.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (e, t) {
        p.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    ),
    p.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    });
  var Ze = p.now(),
    Je = /\?/;
  (p.parseJSON = function (e) {
    return JSON.parse(e + "");
  }),
    (p.parseXML = function (e) {
      var t;
      if (!e || "string" != typeof e) return null;
      try {
        t = new DOMParser().parseFromString(e, "text/xml");
      } catch (e) {
        t = void 0;
      }
      return (
        (!t || t.getElementsByTagName("parsererror").length) &&
          p.error("Invalid XML: " + e),
        t
      );
    });
  var Qe = /#.*$/,
    et = /([?&])_=[^&]*/,
    tt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    nt = /^(?:GET|HEAD)$/,
    it = /^\/\//,
    ot = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    rt = {},
    at = {},
    st = "*/".concat("*"),
    lt = e.location.href,
    ut = ot.exec(lt.toLowerCase()) || [];
  function ct(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var i,
        o = 0,
        r = t.toLowerCase().match(M) || [];
      if (p.isFunction(n))
        for (; (i = r[o++]); )
          "+" === i[0]
            ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
            : (e[i] = e[i] || []).push(n);
    };
  }
  function dt(e, t, n, i) {
    var o = {},
      r = e === at;
    function a(s) {
      var l;
      return (
        (o[s] = !0),
        p.each(e[s] || [], function (e, s) {
          var u = s(t, n, i);
          return "string" != typeof u || r || o[u]
            ? r
              ? !(l = u)
              : void 0
            : (t.dataTypes.unshift(u), a(u), !1);
        }),
        l
      );
    }
    return a(t.dataTypes[0]) || (!o["*"] && a("*"));
  }
  function ft(e, t) {
    var n,
      i,
      o = p.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
    return i && p.extend(!0, e, i), e;
  }
  p.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: lt,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
        ut[1]
      ),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": st,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /xml/, html: /html/, json: /json/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": p.parseJSON,
        "text xml": p.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (e, t) {
      return t ? ft(ft(e, p.ajaxSettings), t) : ft(p.ajaxSettings, e);
    },
    ajaxPrefilter: ct(rt),
    ajaxTransport: ct(at),
    ajax: function (e, t) {
      "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
      var n,
        i,
        o,
        r,
        a,
        s,
        l,
        u,
        c = p.ajaxSetup({}, t),
        d = c.context || c,
        f = c.context && (d.nodeType || d.jquery) ? p(d) : p.event,
        h = p.Deferred(),
        m = p.Callbacks("once memory"),
        g = c.statusCode || {},
        v = {},
        y = {},
        _ = 0,
        b = "canceled",
        x = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (2 === _) {
              if (!r)
                for (r = {}; (t = tt.exec(o)); ) r[t[1].toLowerCase()] = t[2];
              t = r[e.toLowerCase()];
            }
            return null == t ? null : t;
          },
          getAllResponseHeaders: function () {
            return 2 === _ ? o : null;
          },
          setRequestHeader: function (e, t) {
            var n = e.toLowerCase();
            return _ || ((e = y[n] = y[n] || e), (v[e] = t)), this;
          },
          overrideMimeType: function (e) {
            return _ || (c.mimeType = e), this;
          },
          statusCode: function (e) {
            var t;
            if (e)
              if (2 > _) for (t in e) g[t] = [g[t], e[t]];
              else x.always(e[x.status]);
            return this;
          },
          abort: function (e) {
            var t = e || b;
            return n && n.abort(t), w(0, t), this;
          },
        };
      if (
        ((h.promise(x).complete = m.add),
        (x.success = x.done),
        (x.error = x.fail),
        (c.url = ((e || c.url || lt) + "")
          .replace(Qe, "")
          .replace(it, ut[1] + "//")),
        (c.type = t.method || t.type || c.method || c.type),
        (c.dataTypes = p
          .trim(c.dataType || "*")
          .toLowerCase()
          .match(M) || [""]),
        null == c.crossDomain &&
          ((s = ot.exec(c.url.toLowerCase())),
          (c.crossDomain = !(
            !s ||
            (s[1] === ut[1] &&
              s[2] === ut[2] &&
              (s[3] || ("http:" === s[1] ? "80" : "443")) ===
                (ut[3] || ("http:" === ut[1] ? "80" : "443")))
          ))),
        c.data &&
          c.processData &&
          "string" != typeof c.data &&
          (c.data = p.param(c.data, c.traditional)),
        dt(rt, c, t, x),
        2 === _)
      )
        return x;
      for (u in ((l = p.event && c.global) &&
        0 == p.active++ &&
        p.event.trigger("ajaxStart"),
      (c.type = c.type.toUpperCase()),
      (c.hasContent = !nt.test(c.type)),
      (i = c.url),
      c.hasContent ||
        (c.data &&
          ((i = c.url += (Je.test(i) ? "&" : "?") + c.data), delete c.data),
        !1 === c.cache &&
          (c.url = et.test(i)
            ? i.replace(et, "$1_=" + Ze++)
            : i + (Je.test(i) ? "&" : "?") + "_=" + Ze++)),
      c.ifModified &&
        (p.lastModified[i] &&
          x.setRequestHeader("If-Modified-Since", p.lastModified[i]),
        p.etag[i] && x.setRequestHeader("If-None-Match", p.etag[i])),
      ((c.data && c.hasContent && !1 !== c.contentType) || t.contentType) &&
        x.setRequestHeader("Content-Type", c.contentType),
      x.setRequestHeader(
        "Accept",
        c.dataTypes[0] && c.accepts[c.dataTypes[0]]
          ? c.accepts[c.dataTypes[0]] +
              ("*" !== c.dataTypes[0] ? ", " + st + "; q=0.01" : "")
          : c.accepts["*"]
      ),
      c.headers))
        x.setRequestHeader(u, c.headers[u]);
      if (c.beforeSend && (!1 === c.beforeSend.call(d, x, c) || 2 === _))
        return x.abort();
      for (u in ((b = "abort"), { success: 1, error: 1, complete: 1 }))
        x[u](c[u]);
      if ((n = dt(at, c, t, x))) {
        (x.readyState = 1),
          l && f.trigger("ajaxSend", [x, c]),
          c.async &&
            c.timeout > 0 &&
            (a = setTimeout(function () {
              x.abort("timeout");
            }, c.timeout));
        try {
          (_ = 1), n.send(v, w);
        } catch (e) {
          if (!(2 > _)) throw e;
          w(-1, e);
        }
      } else w(-1, "No Transport");
      function w(e, t, r, s) {
        var u,
          v,
          y,
          b,
          w,
          $ = t;
        2 !== _ &&
          ((_ = 2),
          a && clearTimeout(a),
          (n = void 0),
          (o = s || ""),
          (x.readyState = e > 0 ? 4 : 0),
          (u = (e >= 200 && 300 > e) || 304 === e),
          r &&
            (b = (function (e, t, n) {
              for (
                var i, o, r, a, s = e.contents, l = e.dataTypes;
                "*" === l[0];

              )
                l.shift(),
                  void 0 === i &&
                    (i = e.mimeType || t.getResponseHeader("Content-Type"));
              if (i)
                for (o in s)
                  if (s[o] && s[o].test(i)) {
                    l.unshift(o);
                    break;
                  }
              if (l[0] in n) r = l[0];
              else {
                for (o in n) {
                  if (!l[0] || e.converters[o + " " + l[0]]) {
                    r = o;
                    break;
                  }
                  a || (a = o);
                }
                r = r || a;
              }
              return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0;
            })(c, x, r)),
          (b = (function (e, t, n, i) {
            var o,
              r,
              a,
              s,
              l,
              u = {},
              c = e.dataTypes.slice();
            if (c[1])
              for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
            for (r = c.shift(); r; )
              if (
                (e.responseFields[r] && (n[e.responseFields[r]] = t),
                !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                (l = r),
                (r = c.shift()))
              )
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
                  if (!(a = u[l + " " + r] || u["* " + r]))
                    for (o in u)
                      if (
                        (s = o.split(" "))[1] === r &&
                        (a = u[l + " " + s[0]] || u["* " + s[0]])
                      ) {
                        !0 === a
                          ? (a = u[o])
                          : !0 !== u[o] && ((r = s[0]), c.unshift(s[1]));
                        break;
                      }
                  if (!0 !== a)
                    if (a && e.throws) t = a(t);
                    else
                      try {
                        t = a(t);
                      } catch (e) {
                        return {
                          state: "parsererror",
                          error: a ? e : "No conversion from " + l + " to " + r,
                        };
                      }
                }
            return { state: "success", data: t };
          })(c, b, x, u)),
          u
            ? (c.ifModified &&
                ((w = x.getResponseHeader("Last-Modified")) &&
                  (p.lastModified[i] = w),
                (w = x.getResponseHeader("etag")) && (p.etag[i] = w)),
              204 === e || "HEAD" === c.type
                ? ($ = "nocontent")
                : 304 === e
                ? ($ = "notmodified")
                : (($ = b.state), (v = b.data), (u = !(y = b.error))))
            : ((y = $), (e || !$) && (($ = "error"), 0 > e && (e = 0))),
          (x.status = e),
          (x.statusText = (t || $) + ""),
          u ? h.resolveWith(d, [v, $, x]) : h.rejectWith(d, [x, $, y]),
          x.statusCode(g),
          (g = void 0),
          l && f.trigger(u ? "ajaxSuccess" : "ajaxError", [x, c, u ? v : y]),
          m.fireWith(d, [x, $]),
          l &&
            (f.trigger("ajaxComplete", [x, c]),
            --p.active || p.event.trigger("ajaxStop")));
      }
      return x;
    },
    getJSON: function (e, t, n) {
      return p.get(e, t, n, "json");
    },
    getScript: function (e, t) {
      return p.get(e, void 0, t, "script");
    },
  }),
    p.each(["get", "post"], function (e, t) {
      p[t] = function (e, n, i, o) {
        return (
          p.isFunction(n) && ((o = o || i), (i = n), (n = void 0)),
          p.ajax({ url: e, type: t, dataType: o, data: n, success: i })
        );
      };
    }),
    (p._evalUrl = function (e) {
      return p.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    p.fn.extend({
      wrapAll: function (e) {
        var t;
        return p.isFunction(e)
          ? this.each(function (t) {
              p(this).wrapAll(e.call(this, t));
            })
          : (this[0] &&
              ((t = p(e, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && t.insertBefore(this[0]),
              t
                .map(function () {
                  for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                  return e;
                })
                .append(this)),
            this);
      },
      wrapInner: function (e) {
        return this.each(
          p.isFunction(e)
            ? function (t) {
                p(this).wrapInner(e.call(this, t));
              }
            : function () {
                var t = p(this),
                  n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
              }
        );
      },
      wrap: function (e) {
        var t = p.isFunction(e);
        return this.each(function (n) {
          p(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            p.nodeName(this, "body") || p(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (p.expr.filters.hidden = function (e) {
      return e.offsetWidth <= 0 && e.offsetHeight <= 0;
    }),
    (p.expr.filters.visible = function (e) {
      return !p.expr.filters.hidden(e);
    });
  var pt = /%20/g,
    ht = /\[\]$/,
    mt = /\r?\n/g,
    gt = /^(?:submit|button|image|reset|file)$/i,
    vt = /^(?:input|select|textarea|keygen)/i;
  function yt(e, t, n, i) {
    var o;
    if (p.isArray(t))
      p.each(t, function (t, o) {
        n || ht.test(e)
          ? i(e, o)
          : yt(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, i);
      });
    else if (n || "object" !== p.type(t)) i(e, t);
    else for (o in t) yt(e + "[" + o + "]", t[o], n, i);
  }
  (p.param = function (e, t) {
    var n,
      i = [],
      o = function (e, t) {
        (t = p.isFunction(t) ? t() : null == t ? "" : t),
          (i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
      };
    if (
      (void 0 === t && (t = p.ajaxSettings && p.ajaxSettings.traditional),
      p.isArray(e) || (e.jquery && !p.isPlainObject(e)))
    )
      p.each(e, function () {
        o(this.name, this.value);
      });
    else for (n in e) yt(n, e[n], t, o);
    return i.join("&").replace(pt, "+");
  }),
    p.fn.extend({
      serialize: function () {
        return p.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = p.prop(this, "elements");
          return e ? p.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !p(this).is(":disabled") &&
              vt.test(this.nodeName) &&
              !gt.test(e) &&
              (this.checked || !q.test(e))
            );
          })
          .map(function (e, t) {
            var n = p(this).val();
            return null == n
              ? null
              : p.isArray(n)
              ? p.map(n, function (e) {
                  return { name: t.name, value: e.replace(mt, "\r\n") };
                })
              : { name: t.name, value: n.replace(mt, "\r\n") };
          })
          .get();
      },
    }),
    (p.ajaxSettings.xhr = function () {
      try {
        return new XMLHttpRequest();
      } catch (e) {}
    });
  var _t = 0,
    bt = {},
    xt = { 0: 200, 1223: 204 },
    wt = p.ajaxSettings.xhr();
  e.attachEvent &&
    e.attachEvent("onunload", function () {
      for (var e in bt) bt[e]();
    }),
    (c.cors = !!wt && "withCredentials" in wt),
    (c.ajax = wt = !!wt),
    p.ajaxTransport(function (e) {
      var t;
      return c.cors || (wt && !e.crossDomain)
        ? {
            send: function (n, i) {
              var o,
                r = e.xhr(),
                a = ++_t;
              if (
                (r.open(e.type, e.url, e.async, e.username, e.password),
                e.xhrFields)
              )
                for (o in e.xhrFields) r[o] = e.xhrFields[o];
              for (o in (e.mimeType &&
                r.overrideMimeType &&
                r.overrideMimeType(e.mimeType),
              e.crossDomain ||
                n["X-Requested-With"] ||
                (n["X-Requested-With"] = "XMLHttpRequest"),
              n))
                r.setRequestHeader(o, n[o]);
              (t = function (e) {
                return function () {
                  t &&
                    (delete bt[a],
                    (t = r.onload = r.onerror = null),
                    "abort" === e
                      ? r.abort()
                      : "error" === e
                      ? i(r.status, r.statusText)
                      : i(
                          xt[r.status] || r.status,
                          r.statusText,
                          "string" == typeof r.responseText
                            ? { text: r.responseText }
                            : void 0,
                          r.getAllResponseHeaders()
                        ));
                };
              }),
                (r.onload = t()),
                (r.onerror = t("error")),
                (t = bt[a] = t("abort"));
              try {
                r.send((e.hasContent && e.data) || null);
              } catch (e) {
                if (t) throw e;
              }
            },
            abort: function () {
              t && t();
            },
          }
        : void 0;
    }),
    p.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /(?:java|ecma)script/ },
      converters: {
        "text script": function (e) {
          return p.globalEval(e), e;
        },
      },
    }),
    p.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    p.ajaxTransport("script", function (e) {
      var t, n;
      if (e.crossDomain)
        return {
          send: function (i, o) {
            (t = p("<script>")
              .prop({ async: !0, charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && o("error" === e.type ? 404 : 200, e.type);
                })
              )),
              d.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
    });
  var $t = [],
    Tt = /(=)\?(?=&|$)|\?\?/;
  p.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = $t.pop() || p.expando + "_" + Ze++;
      return (this[e] = !0), e;
    },
  }),
    p.ajaxPrefilter("json jsonp", function (t, n, i) {
      var o,
        r,
        a,
        s =
          !1 !== t.jsonp &&
          (Tt.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              !(t.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
              Tt.test(t.data) &&
              "data");
      return s || "jsonp" === t.dataTypes[0]
        ? ((o = t.jsonpCallback = p.isFunction(t.jsonpCallback)
            ? t.jsonpCallback()
            : t.jsonpCallback),
          s
            ? (t[s] = t[s].replace(Tt, "$1" + o))
            : !1 !== t.jsonp &&
              (t.url += (Je.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
          (t.converters["script json"] = function () {
            return a || p.error(o + " was not called"), a[0];
          }),
          (t.dataTypes[0] = "json"),
          (r = e[o]),
          (e[o] = function () {
            a = arguments;
          }),
          i.always(function () {
            (e[o] = r),
              t[o] && ((t.jsonpCallback = n.jsonpCallback), $t.push(o)),
              a && p.isFunction(r) && r(a[0]),
              (a = r = void 0);
          }),
          "script")
        : void 0;
    }),
    (p.parseHTML = function (e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && ((n = t), (t = !1)), (t = t || d);
      var i = x.exec(e),
        o = !n && [];
      return i
        ? [t.createElement(i[1])]
        : ((i = p.buildFragment([e], t, o)),
          o && o.length && p(o).remove(),
          p.merge([], i.childNodes));
    });
  var kt = p.fn.load;
  (p.fn.load = function (e, t, n) {
    if ("string" != typeof e && kt) return kt.apply(this, arguments);
    var i,
      o,
      r,
      a = this,
      s = e.indexOf(" ");
    return (
      s >= 0 && ((i = p.trim(e.slice(s))), (e = e.slice(0, s))),
      p.isFunction(t)
        ? ((n = t), (t = void 0))
        : t && "object" == typeof t && (o = "POST"),
      a.length > 0 &&
        p
          .ajax({ url: e, type: o, dataType: "html", data: t })
          .done(function (e) {
            (r = arguments),
              a.html(i ? p("<div>").append(p.parseHTML(e)).find(i) : e);
          })
          .complete(
            n &&
              function (e, t) {
                a.each(n, r || [e.responseText, t, e]);
              }
          ),
      this
    );
  }),
    p.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        p.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (p.expr.filters.animated = function (e) {
      return p.grep(p.timers, function (t) {
        return e === t.elem;
      }).length;
    });
  var Ct = e.document.documentElement;
  function St(e) {
    return p.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
  }
  (p.offset = {
    setOffset: function (e, t, n) {
      var i,
        o,
        r,
        a,
        s,
        l,
        u = p.css(e, "position"),
        c = p(e),
        d = {};
      "static" === u && (e.style.position = "relative"),
        (s = c.offset()),
        (r = p.css(e, "top")),
        (l = p.css(e, "left")),
        ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1
          ? ((a = (i = c.position()).top), (o = i.left))
          : ((a = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
        p.isFunction(t) && (t = t.call(e, n, s)),
        null != t.top && (d.top = t.top - s.top + a),
        null != t.left && (d.left = t.left - s.left + o),
        "using" in t ? t.using.call(e, d) : c.css(d);
    },
  }),
    p.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                p.offset.setOffset(this, e, t);
              });
        var t,
          n,
          i = this[0],
          o = { top: 0, left: 0 },
          r = i && i.ownerDocument;
        return r
          ? ((t = r.documentElement),
            p.contains(t, i)
              ? (typeof i.getBoundingClientRect !== G &&
                  (o = i.getBoundingClientRect()),
                (n = St(r)),
                {
                  top: o.top + n.pageYOffset - t.clientTop,
                  left: o.left + n.pageXOffset - t.clientLeft,
                })
              : o)
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n = this[0],
            i = { top: 0, left: 0 };
          return (
            "fixed" === p.css(n, "position")
              ? (t = n.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (t = this.offset()),
                p.nodeName(e[0], "html") || (i = e.offset()),
                (i.top += p.css(e[0], "borderTopWidth", !0)),
                (i.left += p.css(e[0], "borderLeftWidth", !0))),
            {
              top: t.top - i.top - p.css(n, "marginTop", !0),
              left: t.left - i.left - p.css(n, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent || Ct;
            e && !p.nodeName(e, "html") && "static" === p.css(e, "position");

          )
            e = e.offsetParent;
          return e || Ct;
        });
      },
    }),
    p.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (
      t,
      n
    ) {
      var i = "pageYOffset" === n;
      p.fn[t] = function (o) {
        return N(
          this,
          function (t, o, r) {
            var a = St(t);
            return void 0 === r
              ? a
                ? a[n]
                : t[o]
              : void (a
                  ? a.scrollTo(i ? e.pageXOffset : r, i ? r : e.pageYOffset)
                  : (t[o] = r));
          },
          t,
          o,
          arguments.length,
          null
        );
      };
    }),
    p.each(["top", "left"], function (e, t) {
      p.cssHooks[t] = we(c.pixelPosition, function (e, n) {
        return n
          ? ((n = xe(e, t)), _e.test(n) ? p(e).position()[t] + "px" : n)
          : void 0;
      });
    }),
    p.each({ Height: "height", Width: "width" }, function (e, t) {
      p.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (
        n,
        i
      ) {
        p.fn[i] = function (i, o) {
          var r = arguments.length && (n || "boolean" != typeof i),
            a = n || (!0 === i || !0 === o ? "margin" : "border");
          return N(
            this,
            function (t, n, i) {
              var o;
              return p.isWindow(t)
                ? t.document.documentElement["client" + e]
                : 9 === t.nodeType
                ? ((o = t.documentElement),
                  Math.max(
                    t.body["scroll" + e],
                    o["scroll" + e],
                    t.body["offset" + e],
                    o["offset" + e],
                    o["client" + e]
                  ))
                : void 0 === i
                ? p.css(t, n, a)
                : p.style(t, n, i, a);
            },
            t,
            r ? i : void 0,
            r,
            null
          );
        };
      });
    }),
    (p.fn.size = function () {
      return this.length;
    }),
    (p.fn.andSelf = p.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return p;
      });
  var Et = e.jQuery,
    At = e.$;
  return (
    (p.noConflict = function (t) {
      return e.$ === p && (e.$ = At), t && e.jQuery === p && (e.jQuery = Et), p;
    }),
    typeof t === G && (e.jQuery = e.$ = p),
    p
  );
}),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "object" == typeof exports
      ? e(require("jquery"))
      : e(jQuery);
  })(function (e) {
    var t,
      n = navigator.userAgent,
      i = /iphone/i.test(n),
      o = /chrome/i.test(n),
      r = /android/i.test(n);
    (e.mask = {
      definitions: { 9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]" },
      autoclear: !0,
      dataName: "rawMaskFn",
      placeholder: "_",
    }),
      e.fn.extend({
        caret: function (e, t) {
          var n;
          if (
            0 !== this.length &&
            !this.is(":hidden") &&
            this.get(0) === document.activeElement
          )
            return "number" == typeof e
              ? ((t = "number" == typeof t ? t : e),
                this.each(function () {
                  this.setSelectionRange
                    ? this.setSelectionRange(e, t)
                    : this.createTextRange &&
                      ((n = this.createTextRange()).collapse(!0),
                      n.moveEnd("character", t),
                      n.moveStart("character", e),
                      n.select());
                }))
              : (this[0].setSelectionRange
                  ? ((e = this[0].selectionStart), (t = this[0].selectionEnd))
                  : document.selection &&
                    document.selection.createRange &&
                    ((n = document.selection.createRange()),
                    (e = 0 - n.duplicate().moveStart("character", -1e5)),
                    (t = e + n.text.length)),
                { begin: e, end: t });
        },
        unmask: function () {
          return this.trigger("unmask");
        },
        mask: function (n, a) {
          var s, l, u, c, d, f, p;
          if (!n && this.length > 0) {
            var h = e(this[0]).data(e.mask.dataName);
            return h ? h() : void 0;
          }
          return (
            (a = e.extend(
              {
                autoclear: e.mask.autoclear,
                placeholder: e.mask.placeholder,
                completed: null,
              },
              a
            )),
            (s = e.mask.definitions),
            (l = []),
            (u = f = n.length),
            (c = null),
            (n = String(n)),
            e.each(n.split(""), function (e, t) {
              "?" == t
                ? (f--, (u = e))
                : s[t]
                ? (l.push(new RegExp(s[t])),
                  null === c && (c = l.length - 1),
                  e < u && (d = l.length - 1))
                : l.push(null);
            }),
            this.trigger("unmask").each(function () {
              var h = e(this),
                m = e.map(n.split(""), function (e, t) {
                  if ("?" != e) return s[e] ? _(t) : e;
                }),
                g = m.join(""),
                v = h.val();
              function y() {
                if (a.completed) {
                  for (var e = c; e <= d; e++)
                    if (l[e] && m[e] === _(e)) return;
                  a.completed.call(h);
                }
              }
              function _(e) {
                return e < a.placeholder.length
                  ? a.placeholder.charAt(e)
                  : a.placeholder.charAt(0);
              }
              function b(e) {
                for (; ++e < f && !l[e]; );
                return e;
              }
              function x(e, t) {
                var n, i;
                if (!(e < 0)) {
                  for (n = e, i = b(t); n < f; n++)
                    if (l[n]) {
                      if (!(i < f && l[n].test(m[i]))) break;
                      (m[n] = m[i]), (m[i] = _(i)), (i = b(i));
                    }
                  T(), h.caret(Math.max(c, e));
                }
              }
              function w(e) {
                k(), h.val() != v && h.change();
              }
              function $(e, t) {
                var n;
                for (n = e; n < t && n < f; n++) l[n] && (m[n] = _(n));
              }
              function T() {
                h.val(m.join(""));
              }
              function k(e) {
                var t,
                  n,
                  i,
                  o = h.val(),
                  r = -1;
                for (t = 0, i = 0; t < f; t++)
                  if (l[t]) {
                    for (m[t] = _(t); i++ < o.length; )
                      if (((n = o.charAt(i - 1)), l[t].test(n))) {
                        (m[t] = n), (r = t);
                        break;
                      }
                    if (i > o.length) {
                      $(t + 1, f);
                      break;
                    }
                  } else m[t] === o.charAt(i) && i++, t < u && (r = t);
                return (
                  e
                    ? T()
                    : r + 1 < u
                    ? a.autoclear || m.join("") === g
                      ? (h.val() && h.val(""), $(0, f))
                      : T()
                    : (T(), h.val(h.val().substring(0, r + 1))),
                  u ? t : c
                );
              }
              h.data(e.mask.dataName, function () {
                return e
                  .map(m, function (e, t) {
                    return l[t] && e != _(t) ? e : null;
                  })
                  .join("");
              }),
                h
                  .one("unmask", function () {
                    h.off(".mask").removeData(e.mask.dataName);
                  })
                  .on("focus.mask", function () {
                    var e;
                    h.prop("readonly") ||
                      (clearTimeout(t),
                      (v = h.val()),
                      (e = k()),
                      (t = setTimeout(function () {
                        h.get(0) === document.activeElement &&
                          (T(),
                          e == n.replace("?", "").length
                            ? h.caret(0, e)
                            : h.caret(e));
                      }, 10)));
                  })
                  .on("blur.mask", w)
                  .on("keydown.mask", function (e) {
                    if (!h.prop("readonly")) {
                      var t,
                        n,
                        o,
                        r = e.which || e.keyCode;
                      (p = h.val()),
                        8 === r || 46 === r || (i && 127 === r)
                          ? ((n = (t = h.caret()).begin),
                            (o = t.end) - n == 0 &&
                              ((n =
                                46 !== r
                                  ? (function (e) {
                                      for (; --e >= 0 && !l[e]; );
                                      return e;
                                    })(n)
                                  : (o = b(n - 1))),
                              (o = 46 === r ? b(o) : o)),
                            $(n, o),
                            x(n, o - 1),
                            e.preventDefault())
                          : 13 === r
                          ? w.call(this, e)
                          : 27 === r &&
                            (h.val(v), h.caret(0, k()), e.preventDefault());
                    }
                  })
                  .on("keypress.mask", function (t) {
                    if (!h.prop("readonly")) {
                      var n,
                        i,
                        o,
                        a = t.which || t.keyCode,
                        s = h.caret();
                      t.ctrlKey ||
                        t.altKey ||
                        t.metaKey ||
                        a < 32 ||
                        !a ||
                        13 === a ||
                        (s.end - s.begin != 0 &&
                          ($(s.begin, s.end), x(s.begin, s.end - 1)),
                        (n = b(s.begin - 1)) < f &&
                          ((i = String.fromCharCode(a)), l[n].test(i)) &&
                          ((function (e) {
                            var t, n, i, o;
                            for (t = e, n = _(e); t < f; t++)
                              if (l[t]) {
                                if (
                                  ((i = b(t)),
                                  (o = m[t]),
                                  (m[t] = n),
                                  !(i < f && l[i].test(o)))
                                )
                                  break;
                                n = o;
                              }
                          })(n),
                          (m[n] = i),
                          T(),
                          (o = b(n)),
                          r
                            ? setTimeout(function () {
                                e.proxy(e.fn.caret, h, o)();
                              }, 0)
                            : h.caret(o),
                          s.begin <= d && y()),
                        t.preventDefault());
                    }
                  })
                  .on("input.mask paste.mask", function () {
                    h.prop("readonly") ||
                      setTimeout(function () {
                        var e = k(!0);
                        h.caret(e), y();
                      }, 0);
                  }),
                o &&
                  r &&
                  h.off("input.mask").on("input.mask", function (e) {
                    var t = h.val(),
                      n = h.caret();
                    if (p && p.length && p.length > t.length) {
                      for (k(!0); n.begin > 0 && !l[n.begin - 1]; ) n.begin--;
                      if (0 === n.begin)
                        for (; n.begin < c && !l[n.begin]; ) n.begin++;
                      h.caret(n.begin, n.begin);
                    } else {
                      k(!0);
                      var i = t.charAt(n.begin);
                      n.begin < f &&
                        (l[n.begin]
                          ? l[n.begin].test(i) && n.begin++
                          : (n.begin++, l[n.begin].test(i) && n.begin++)),
                        h.caret(n.begin, n.begin);
                    }
                    y();
                  }),
                k();
            })
          );
        },
      });
  }),
  (function (e) {
    var t = function (t) {
      (this.origHtmlMargin = parseFloat(e("html").css("margin-top"))),
        (this.options = e.extend({}, e.smartbanner.defaults, t));
      var n = navigator.standalone,
        i = navigator.userAgent;
      if (
        (this.options.force
          ? (this.type = this.options.force)
          : null != i.match(/Windows Phone 8/i) && null !== i.match(/Touch/i)
          ? (this.type = "windows")
          : null != i.match(/iPhone|iPod/i) ||
            (i.match(/iPad/) && this.options.iOSUniversalApp)
          ? null != i.match(/Safari/i) &&
            (null != i.match(/CriOS/i) ||
              window.Number(
                i.substr(i.indexOf("OS ") + 3, 3).replace("_", ".")
              ) < 6) &&
            (this.type = "ios")
          : i.match(/\bSilk\/(.*\bMobile Safari\b)?/) ||
            i.match(/\bKF\w/) ||
            i.match("Kindle Fire")
          ? (this.type = "kindle")
          : null != i.match(/Android/i) && (this.type = "android"),
        this.type &&
          !n &&
          !this.getCookie("sb-closed") &&
          !this.getCookie("sb-installed"))
      ) {
        (this.scale =
          "auto" == this.options.scale
            ? e(window).width() / window.screen.width
            : this.options.scale),
          this.scale < 1 && (this.scale = 1);
        var o = e(
          "android" == this.type
            ? 'meta[name="google-play-app"]'
            : "ios" == this.type
            ? 'meta[name="apple-itunes-app"]'
            : "kindle" == this.type
            ? 'meta[name="kindle-fire-app"]'
            : 'meta[name="msApplication-ID"]'
        );
        if (0 != o.length) {
          if ("windows" == this.type)
            this.appId = e('meta[name="msApplication-PackageFamilyName"]').attr(
              "content"
            );
          else {
            var r = /app-id=([^\s,]+)/.exec(o.attr("content"));
            if (!r) return;
            this.appId = r[1];
          }
          (this.title = this.options.title
            ? this.options.title
            : o.data("title") ||
              e("title")
                .text()
                .replace(/\s*[|\-·].*$/, "")),
            (this.author = this.options.author
              ? this.options.author
              : o.data("author") ||
                (e('meta[name="author"]').length
                  ? e('meta[name="author"]').attr("content")
                  : window.location.hostname)),
            (this.iconUrl = o.data("icon-url")),
            (this.price = o.data("price")),
            "function" == typeof this.options.onInstall
              ? (this.options.onInstall = this.options.onInstall)
              : (this.options.onInstall = function () {}),
            "function" == typeof this.options.onClose
              ? (this.options.onClose = this.options.onClose)
              : (this.options.onClose = function () {}),
            this.create(),
            this.show(),
            this.listen();
        }
      }
    };
    (t.prototype = {
      constructor: t,
      create: function () {
        var t,
          n = this.options.url
            ? this.options.url
            : ("windows" == this.type
                ? "ms-windows-store:navigate?appid="
                : "android" == this.type
                ? "market://details?id="
                : "kindle" == this.type
                ? "amzn://apps/android?asin="
                : "https://itunes.apple.com/" +
                  this.options.appStoreLanguage +
                  "/app/id") + this.appId,
          i = this.price || this.options.price,
          o = i
            ? i +
              " - " +
              ("android" == this.type
                ? this.options.inGooglePlay
                : "kindle" == this.type
                ? this.options.inAmazonAppStore
                : "ios" == this.type
                ? this.options.inAppStore
                : this.options.inWindowsStore)
            : "",
          r =
            null === this.options.iconGloss
              ? "ios" == this.type
              : this.options.iconGloss;
        "android" == this.type &&
          this.options.GooglePlayParams &&
          (n = n + "&referrer=" + this.options.GooglePlayParams);
        var a =
          '<div id="smartbanner" class="' +
          this.type +
          '"><div class="sb-container"><a href="#" class="sb-close">&times;</a><span class="sb-icon"></span><div class="sb-info"><strong>' +
          this.title +
          "</strong><span>" +
          this.author +
          "</span><span>" +
          o +
          '</span></div><a href="' +
          n +
          '" class="sb-button"><span>' +
          this.options.button +
          "</span></a></div></div>";
        this.options.layer
          ? e(this.options.appendToSelector).append(a)
          : e(this.options.appendToSelector).prepend(a),
          this.options.icon
            ? (t = this.options.icon)
            : this.iconUrl
            ? (t = this.iconUrl)
            : e('link[rel="apple-touch-icon-precomposed"]').length > 0
            ? ((t = e('link[rel="apple-touch-icon-precomposed"]').attr("href")),
              null === this.options.iconGloss && (r = !1))
            : e('link[rel="apple-touch-icon"]').length > 0
            ? (t = e('link[rel="apple-touch-icon"]').attr("href"))
            : e('meta[name="msApplication-TileImage"]').length > 0
            ? (t = e('meta[name="msApplication-TileImage"]').attr("content"))
            : e('meta[name="msapplication-TileImage"]').length > 0 &&
              (t = e('meta[name="msapplication-TileImage"]').attr("content")),
          t
            ? (e("#smartbanner .sb-icon").css(
                "background-image",
                "url(" + t + ")"
              ),
              r && e("#smartbanner .sb-icon").addClass("gloss"))
            : e("#smartbanner").addClass("no-icon"),
          (this.bannerHeight = e("#smartbanner").outerHeight() + 2),
          this.scale > 1 &&
            (e("#smartbanner")
              .css("top", parseFloat(e("#smartbanner").css("top")) * this.scale)
              .css(
                "height",
                parseFloat(e("#smartbanner").css("height")) * this.scale
              )
              .hide(),
            e("#smartbanner .sb-container")
              .css("-webkit-transform", "scale(" + this.scale + ")")
              .css("-msie-transform", "scale(" + this.scale + ")")
              .css("-moz-transform", "scale(" + this.scale + ")")
              .css("width", e(window).width() / this.scale)),
          e("#smartbanner").css(
            "position",
            this.options.layer ? "absolute" : "static"
          );
      },
      listen: function () {
        e("#smartbanner .sb-close").on("click", e.proxy(this.close, this)),
          e("#smartbanner .sb-button").on("click", e.proxy(this.install, this));
      },
      show: function (t) {
        var n = e("#smartbanner");
        if ((n.stop(), this.options.layer))
          n
            .animate({ top: 0, display: "block" }, this.options.speedIn)
            .addClass("shown")
            .show(),
            e(this.pushSelector).animate(
              {
                paddingTop:
                  this.origHtmlMargin + this.bannerHeight * this.scale,
              },
              this.options.speedIn,
              "swing",
              t
            );
        else if (e.support.transition) {
          n.animate({ top: 0 }, this.options.speedIn).addClass("shown");
          e(this.pushSelector)
            .addClass("sb-animation")
            .one(e.support.transition.end, function () {
              e("html").removeClass("sb-animation"), t && t();
            })
            .emulateTransitionEnd(this.options.speedIn)
            .css(
              "margin-top",
              this.origHtmlMargin + this.bannerHeight * this.scale
            );
        } else n.slideDown(this.options.speedIn).addClass("shown");
      },
      hide: function (t) {
        var n = e("#smartbanner");
        if ((n.stop(), this.options.layer))
          n
            .animate(
              { top: -1 * this.bannerHeight * this.scale, display: "block" },
              this.options.speedIn
            )
            .removeClass("shown"),
            e(this.pushSelector).animate(
              { paddingTop: this.origHtmlMargin },
              this.options.speedIn,
              "swing",
              t
            );
        else if (e.support.transition) {
          "android" !== this.type
            ? n
                .css("top", -1 * this.bannerHeight * this.scale)
                .removeClass("shown")
            : n.css({ display: "none" }).removeClass("shown");
          e(this.pushSelector)
            .addClass("sb-animation")
            .one(e.support.transition.end, function () {
              e("html").removeClass("sb-animation"), t && t();
            })
            .emulateTransitionEnd(this.options.speedOut)
            .css("margin-top", this.origHtmlMargin);
        } else n.slideUp(this.options.speedOut).removeClass("shown");
      },
      close: function (e) {
        e.preventDefault(),
          this.hide(),
          this.setCookie("sb-closed", "true", this.options.daysHidden),
          this.options.onClose(e);
      },
      install: function (e) {
        this.options.hideOnInstall && this.hide(),
          this.setCookie("sb-installed", "true", this.options.daysReminder),
          this.options.onInstall(e);
      },
      setCookie: function (e, t, n) {
        var i = new Date();
        i.setDate(i.getDate() + n),
          (t =
            encodeURI(t) + (null == n ? "" : "; expires=" + i.toUTCString())),
          (document.cookie = e + "=" + t + "; path=/;");
      },
      getCookie: function (e) {
        var t,
          n,
          i,
          o = document.cookie.split(";");
        for (t = 0; t < o.length; t++)
          if (
            ((n = o[t].substr(0, o[t].indexOf("="))),
            (i = o[t].substr(o[t].indexOf("=") + 1)),
            (n = n.replace(/^\s+|\s+$/g, "")) == e)
          )
            return decodeURI(i);
        return null;
      },
      switchType: function () {
        var t = this;
        this.hide(function () {
          t.type = "android" == t.type ? "ios" : "android";
          var n = e(
            "android" == t.type
              ? 'meta[name="google-play-app"]'
              : 'meta[name="apple-itunes-app"]'
          ).attr("content");
          (t.appId = /app-id=([^\s,]+)/.exec(n)[1]),
            e("#smartbanner").detach(),
            t.create(),
            t.show();
        });
      },
    }),
      (e.smartbanner = function (n) {
        var i = e(window),
          o = i.data("smartbanner"),
          r = "object" == typeof n && n;
        o || i.data("smartbanner", (o = new t(r))),
          "string" == typeof n && o[n]();
      }),
      (e.smartbanner.defaults = {
        title: null,
        author: null,
        price: "FREE",
        appStoreLanguage: "us",
        inAppStore: "On the App Store",
        inGooglePlay: "In Google Play",
        inAmazonAppStore: "In the Amazon Appstore",
        inWindowsStore: "In the Windows Store",
        GooglePlayParams: null,
        icon: null,
        iconGloss: null,
        button: "VIEW",
        url: null,
        scale: "auto",
        speedIn: 300,
        speedOut: 400,
        daysHidden: 15,
        daysReminder: 90,
        force: null,
        hideOnInstall: !0,
        layer: !1,
        iOSUniversalApp: !0,
        appendToSelector: "body",
        pushSelector: "html",
      }),
      (e.smartbanner.Constructor = t),
      void 0 === e.support.transition &&
        ((e.fn.emulateTransitionEnd = function (t) {
          var n = !1,
            i = this;
          e(this).one(e.support.transition.end, function () {
            n = !0;
          });
          return (
            setTimeout(function () {
              n || e(i).trigger(e.support.transition.end);
            }, t),
            this
          );
        }),
        e(function () {
          e.support.transition = (function () {
            var e = document.createElement("smartbanner"),
              t = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend",
              };
            for (var n in t) if (void 0 !== e.style[n]) return { end: t[n] };
            return !1;
          })();
        }));
  })(window.jQuery),
  (function (e, t, n) {
    "use strict";
    "undefined" != typeof module && module.exports
      ? (module.exports = n())
      : "function" == typeof define && define.amd
      ? define(n)
      : (t.Fingerprint2 = n());
  })(0, this, function () {
    "use strict";
    Array.prototype.indexOf ||
      (Array.prototype.indexOf = function (e, t) {
        var n;
        if (null == this) throw new TypeError("'this' is null or undefined");
        var i = Object(this),
          o = i.length >>> 0;
        if (0 === o) return -1;
        var r = +t || 0;
        if ((Math.abs(r) === 1 / 0 && (r = 0), r >= o)) return -1;
        for (n = Math.max(r >= 0 ? r : o - Math.abs(r), 0); n < o; ) {
          if (n in i && i[n] === e) return n;
          n++;
        }
        return -1;
      });
    var e = function (e) {
      (this.options = this.extend(e, {
        swfContainerId: "fingerprintjs2",
        swfPath: "flash/compiled/FontList.swf",
        detectScreenOrientation: !0,
        sortPluginsFor: [/palemoon/i],
        userDefinedFonts: [],
      })),
        (this.nativeForEach = Array.prototype.forEach),
        (this.nativeMap = Array.prototype.map);
    };
    return (
      (e.prototype = {
        extend: function (e, t) {
          if (null == e) return t;
          for (var n in e) null != e[n] && t[n] !== e[n] && (t[n] = e[n]);
          return t;
        },
        log: function (e) {
          window.console && console.log(e);
        },
        get: function (e) {
          var t = [];
          (t = this.userAgentKey(t)),
            (t = this.languageKey(t)),
            (t = this.colorDepthKey(t)),
            (t = this.pixelRatioKey(t)),
            (t = this.screenResolutionKey(t)),
            (t = this.availableScreenResolutionKey(t)),
            (t = this.timezoneOffsetKey(t)),
            (t = this.sessionStorageKey(t)),
            (t = this.localStorageKey(t)),
            (t = this.indexedDbKey(t)),
            (t = this.addBehaviorKey(t)),
            (t = this.openDatabaseKey(t)),
            (t = this.cpuClassKey(t)),
            (t = this.platformKey(t)),
            (t = this.doNotTrackKey(t)),
            (t = this.pluginsKey(t)),
            (t = this.canvasKey(t)),
            (t = this.webglKey(t)),
            (t = this.adBlockKey(t)),
            (t = this.hasLiedLanguagesKey(t)),
            (t = this.hasLiedResolutionKey(t)),
            (t = this.hasLiedOsKey(t)),
            (t = this.hasLiedBrowserKey(t)),
            (t = this.touchSupportKey(t));
          var n = this;
          this.fontsKey(t, function (t) {
            var i = [];
            n.each(t, function (e) {
              var t = e.value;
              void 0 !== e.value.join && (t = e.value.join(";")), i.push(t);
            });
            var o = n.x64hash128(i.join("~~~"), 31);
            return e(o, t);
          });
        },
        userAgentKey: function (e) {
          return (
            this.options.excludeUserAgent ||
              e.push({ key: "user_agent", value: this.getUserAgent() }),
            e
          );
        },
        getUserAgent: function () {
          return navigator.userAgent;
        },
        languageKey: function (e) {
          return (
            this.options.excludeLanguage ||
              e.push({
                key: "language",
                value:
                  navigator.language ||
                  navigator.userLanguage ||
                  navigator.browserLanguage ||
                  navigator.systemLanguage ||
                  "",
              }),
            e
          );
        },
        colorDepthKey: function (e) {
          return (
            this.options.excludeColorDepth ||
              e.push({ key: "color_depth", value: screen.colorDepth }),
            e
          );
        },
        pixelRatioKey: function (e) {
          return (
            this.options.excludePixelRatio ||
              e.push({ key: "pixel_ratio", value: this.getPixelRatio() }),
            e
          );
        },
        getPixelRatio: function () {
          return window.devicePixelRatio || "";
        },
        screenResolutionKey: function (e) {
          return this.options.excludeScreenResolution
            ? e
            : this.getScreenResolution(e);
        },
        getScreenResolution: function (e) {
          var t;
          return (
            void 0 !==
              (t =
                this.options.detectScreenOrientation &&
                screen.height > screen.width
                  ? [screen.height, screen.width]
                  : [screen.width, screen.height]) &&
              e.push({ key: "resolution", value: t }),
            e
          );
        },
        availableScreenResolutionKey: function (e) {
          return this.options.excludeAvailableScreenResolution
            ? e
            : this.getAvailableScreenResolution(e);
        },
        getAvailableScreenResolution: function (e) {
          var t;
          return (
            screen.availWidth &&
              screen.availHeight &&
              (t = this.options.detectScreenOrientation
                ? screen.availHeight > screen.availWidth
                  ? [screen.availHeight, screen.availWidth]
                  : [screen.availWidth, screen.availHeight]
                : [screen.availHeight, screen.availWidth]),
            void 0 !== t && e.push({ key: "available_resolution", value: t }),
            e
          );
        },
        timezoneOffsetKey: function (e) {
          return (
            this.options.excludeTimezoneOffset ||
              e.push({
                key: "timezone_offset",
                value: new Date().getTimezoneOffset(),
              }),
            e
          );
        },
        sessionStorageKey: function (e) {
          return (
            !this.options.excludeSessionStorage &&
              this.hasSessionStorage() &&
              e.push({ key: "session_storage", value: 1 }),
            e
          );
        },
        localStorageKey: function (e) {
          return (
            !this.options.excludeSessionStorage &&
              this.hasLocalStorage() &&
              e.push({ key: "local_storage", value: 1 }),
            e
          );
        },
        indexedDbKey: function (e) {
          return (
            !this.options.excludeIndexedDB &&
              this.hasIndexedDB() &&
              e.push({ key: "indexed_db", value: 1 }),
            e
          );
        },
        addBehaviorKey: function (e) {
          return (
            document.body &&
              !this.options.excludeAddBehavior &&
              document.body.addBehavior &&
              e.push({ key: "add_behavior", value: 1 }),
            e
          );
        },
        openDatabaseKey: function (e) {
          return (
            !this.options.excludeOpenDatabase &&
              window.openDatabase &&
              e.push({ key: "open_database", value: 1 }),
            e
          );
        },
        cpuClassKey: function (e) {
          return (
            this.options.excludeCpuClass ||
              e.push({ key: "cpu_class", value: this.getNavigatorCpuClass() }),
            e
          );
        },
        platformKey: function (e) {
          return (
            this.options.excludePlatform ||
              e.push({
                key: "navigator_platform",
                value: this.getNavigatorPlatform(),
              }),
            e
          );
        },
        doNotTrackKey: function (e) {
          return (
            this.options.excludeDoNotTrack ||
              e.push({ key: "do_not_track", value: this.getDoNotTrack() }),
            e
          );
        },
        canvasKey: function (e) {
          return (
            !this.options.excludeCanvas &&
              this.isCanvasSupported() &&
              e.push({ key: "canvas", value: this.getCanvasFp() }),
            e
          );
        },
        webglKey: function (e) {
          return this.options.excludeWebGL
            ? ("undefined" == typeof NODEBUG &&
                this.log(
                  "Skipping WebGL fingerprinting per excludeWebGL configuration option"
                ),
              e)
            : this.isWebGlSupported()
            ? (e.push({ key: "webgl", value: this.getWebglFp() }), e)
            : ("undefined" == typeof NODEBUG &&
                this.log(
                  "Skipping WebGL fingerprinting because it is not supported in this browser"
                ),
              e);
        },
        adBlockKey: function (e) {
          return (
            this.options.excludeAdBlock ||
              e.push({ key: "adblock", value: this.getAdBlock() }),
            e
          );
        },
        hasLiedLanguagesKey: function (e) {
          return (
            this.options.excludeHasLiedLanguages ||
              e.push({
                key: "has_lied_languages",
                value: this.getHasLiedLanguages(),
              }),
            e
          );
        },
        hasLiedResolutionKey: function (e) {
          return (
            this.options.excludeHasLiedResolution ||
              e.push({
                key: "has_lied_resolution",
                value: this.getHasLiedResolution(),
              }),
            e
          );
        },
        hasLiedOsKey: function (e) {
          return (
            this.options.excludeHasLiedOs ||
              e.push({ key: "has_lied_os", value: this.getHasLiedOs() }),
            e
          );
        },
        hasLiedBrowserKey: function (e) {
          return (
            this.options.excludeHasLiedBrowser ||
              e.push({
                key: "has_lied_browser",
                value: this.getHasLiedBrowser(),
              }),
            e
          );
        },
        fontsKey: function (e, t) {
          return this.options.excludeJsFonts
            ? this.flashFontsKey(e, t)
            : this.jsFontsKey(e, t);
        },
        flashFontsKey: function (e, t) {
          return this.options.excludeFlashFonts
            ? ("undefined" == typeof NODEBUG &&
                this.log(
                  "Skipping flash fonts detection per excludeFlashFonts configuration option"
                ),
              t(e))
            : this.hasSwfObjectLoaded()
            ? this.hasMinFlashInstalled()
              ? void 0 === this.options.swfPath
                ? ("undefined" == typeof NODEBUG &&
                    this.log(
                      "To use Flash fonts detection, you must pass a valid swfPath option, skipping Flash fonts enumeration"
                    ),
                  t(e))
                : void this.loadSwfAndDetectFonts(function (n) {
                    e.push({ key: "swf_fonts", value: n.join(";") }), t(e);
                  })
              : ("undefined" == typeof NODEBUG &&
                  this.log(
                    "Flash is not installed, skipping Flash fonts enumeration"
                  ),
                t(e))
            : ("undefined" == typeof NODEBUG &&
                this.log(
                  "Swfobject is not detected, Flash fonts enumeration is skipped"
                ),
              t(e));
        },
        jsFontsKey: function (e, t) {
          var n = this;
          return setTimeout(function () {
            var i = ["monospace", "sans-serif", "serif"],
              o = [
                "Andale Mono",
                "Arial",
                "Arial Black",
                "Arial Hebrew",
                "Arial MT",
                "Arial Narrow",
                "Arial Rounded MT Bold",
                "Arial Unicode MS",
                "Bitstream Vera Sans Mono",
                "Book Antiqua",
                "Bookman Old Style",
                "Calibri",
                "Cambria",
                "Cambria Math",
                "Century",
                "Century Gothic",
                "Century Schoolbook",
                "Comic Sans",
                "Comic Sans MS",
                "Consolas",
                "Courier",
                "Courier New",
                "Garamond",
                "Geneva",
                "Georgia",
                "Helvetica",
                "Helvetica Neue",
                "Impact",
                "Lucida Bright",
                "Lucida Calligraphy",
                "Lucida Console",
                "Lucida Fax",
                "LUCIDA GRANDE",
                "Lucida Handwriting",
                "Lucida Sans",
                "Lucida Sans Typewriter",
                "Lucida Sans Unicode",
                "Microsoft Sans Serif",
                "Monaco",
                "Monotype Corsiva",
                "MS Gothic",
                "MS Outlook",
                "MS PGothic",
                "MS Reference Sans Serif",
                "MS Sans Serif",
                "MS Serif",
                "MYRIAD",
                "MYRIAD PRO",
                "Palatino",
                "Palatino Linotype",
                "Segoe Print",
                "Segoe Script",
                "Segoe UI",
                "Segoe UI Light",
                "Segoe UI Semibold",
                "Segoe UI Symbol",
                "Tahoma",
                "Times",
                "Times New Roman",
                "Times New Roman PS",
                "Trebuchet MS",
                "Verdana",
                "Wingdings",
                "Wingdings 2",
                "Wingdings 3",
              ];
            n.options.extendedJsFonts &&
              (o = o.concat([
                "Abadi MT Condensed Light",
                "Academy Engraved LET",
                "ADOBE CASLON PRO",
                "Adobe Garamond",
                "ADOBE GARAMOND PRO",
                "Agency FB",
                "Aharoni",
                "Albertus Extra Bold",
                "Albertus Medium",
                "Algerian",
                "Amazone BT",
                "American Typewriter",
                "American Typewriter Condensed",
                "AmerType Md BT",
                "Andalus",
                "Angsana New",
                "AngsanaUPC",
                "Antique Olive",
                "Aparajita",
                "Apple Chancery",
                "Apple Color Emoji",
                "Apple SD Gothic Neo",
                "Arabic Typesetting",
                "ARCHER",
                "ARNO PRO",
                "Arrus BT",
                "Aurora Cn BT",
                "AvantGarde Bk BT",
                "AvantGarde Md BT",
                "AVENIR",
                "Ayuthaya",
                "Bandy",
                "Bangla Sangam MN",
                "Bank Gothic",
                "BankGothic Md BT",
                "Baskerville",
                "Baskerville Old Face",
                "Batang",
                "BatangChe",
                "Bauer Bodoni",
                "Bauhaus 93",
                "Bazooka",
                "Bell MT",
                "Bembo",
                "Benguiat Bk BT",
                "Berlin Sans FB",
                "Berlin Sans FB Demi",
                "Bernard MT Condensed",
                "BernhardFashion BT",
                "BernhardMod BT",
                "Big Caslon",
                "BinnerD",
                "Blackadder ITC",
                "BlairMdITC TT",
                "Bodoni 72",
                "Bodoni 72 Oldstyle",
                "Bodoni 72 Smallcaps",
                "Bodoni MT",
                "Bodoni MT Black",
                "Bodoni MT Condensed",
                "Bodoni MT Poster Compressed",
                "Bookshelf Symbol 7",
                "Boulder",
                "Bradley Hand",
                "Bradley Hand ITC",
                "Bremen Bd BT",
                "Britannic Bold",
                "Broadway",
                "Browallia New",
                "BrowalliaUPC",
                "Brush Script MT",
                "Californian FB",
                "Calisto MT",
                "Calligrapher",
                "Candara",
                "CaslonOpnface BT",
                "Castellar",
                "Centaur",
                "Cezanne",
                "CG Omega",
                "CG Times",
                "Chalkboard",
                "Chalkboard SE",
                "Chalkduster",
                "Charlesworth",
                "Charter Bd BT",
                "Charter BT",
                "Chaucer",
                "ChelthmITC Bk BT",
                "Chiller",
                "Clarendon",
                "Clarendon Condensed",
                "CloisterBlack BT",
                "Cochin",
                "Colonna MT",
                "Constantia",
                "Cooper Black",
                "Copperplate",
                "Copperplate Gothic",
                "Copperplate Gothic Bold",
                "Copperplate Gothic Light",
                "CopperplGoth Bd BT",
                "Corbel",
                "Cordia New",
                "CordiaUPC",
                "Cornerstone",
                "Coronet",
                "Cuckoo",
                "Curlz MT",
                "DaunPenh",
                "Dauphin",
                "David",
                "DB LCD Temp",
                "DELICIOUS",
                "Denmark",
                "DFKai-SB",
                "Didot",
                "DilleniaUPC",
                "DIN",
                "DokChampa",
                "Dotum",
                "DotumChe",
                "Ebrima",
                "Edwardian Script ITC",
                "Elephant",
                "English 111 Vivace BT",
                "Engravers MT",
                "EngraversGothic BT",
                "Eras Bold ITC",
                "Eras Demi ITC",
                "Eras Light ITC",
                "Eras Medium ITC",
                "EucrosiaUPC",
                "Euphemia",
                "Euphemia UCAS",
                "EUROSTILE",
                "Exotc350 Bd BT",
                "FangSong",
                "Felix Titling",
                "Fixedsys",
                "FONTIN",
                "Footlight MT Light",
                "Forte",
                "FrankRuehl",
                "Fransiscan",
                "Freefrm721 Blk BT",
                "FreesiaUPC",
                "Freestyle Script",
                "French Script MT",
                "FrnkGothITC Bk BT",
                "Fruitger",
                "FRUTIGER",
                "Futura",
                "Futura Bk BT",
                "Futura Lt BT",
                "Futura Md BT",
                "Futura ZBlk BT",
                "FuturaBlack BT",
                "Gabriola",
                "Galliard BT",
                "Gautami",
                "Geeza Pro",
                "Geometr231 BT",
                "Geometr231 Hv BT",
                "Geometr231 Lt BT",
                "GeoSlab 703 Lt BT",
                "GeoSlab 703 XBd BT",
                "Gigi",
                "Gill Sans",
                "Gill Sans MT",
                "Gill Sans MT Condensed",
                "Gill Sans MT Ext Condensed Bold",
                "Gill Sans Ultra Bold",
                "Gill Sans Ultra Bold Condensed",
                "Gisha",
                "Gloucester MT Extra Condensed",
                "GOTHAM",
                "GOTHAM BOLD",
                "Goudy Old Style",
                "Goudy Stout",
                "GoudyHandtooled BT",
                "GoudyOLSt BT",
                "Gujarati Sangam MN",
                "Gulim",
                "GulimChe",
                "Gungsuh",
                "GungsuhChe",
                "Gurmukhi MN",
                "Haettenschweiler",
                "Harlow Solid Italic",
                "Harrington",
                "Heather",
                "Heiti SC",
                "Heiti TC",
                "HELV",
                "Herald",
                "High Tower Text",
                "Hiragino Kaku Gothic ProN",
                "Hiragino Mincho ProN",
                "Hoefler Text",
                "Humanst 521 Cn BT",
                "Humanst521 BT",
                "Humanst521 Lt BT",
                "Imprint MT Shadow",
                "Incised901 Bd BT",
                "Incised901 BT",
                "Incised901 Lt BT",
                "INCONSOLATA",
                "Informal Roman",
                "Informal011 BT",
                "INTERSTATE",
                "IrisUPC",
                "Iskoola Pota",
                "JasmineUPC",
                "Jazz LET",
                "Jenson",
                "Jester",
                "Jokerman",
                "Juice ITC",
                "Kabel Bk BT",
                "Kabel Ult BT",
                "Kailasa",
                "KaiTi",
                "Kalinga",
                "Kannada Sangam MN",
                "Kartika",
                "Kaufmann Bd BT",
                "Kaufmann BT",
                "Khmer UI",
                "KodchiangUPC",
                "Kokila",
                "Korinna BT",
                "Kristen ITC",
                "Krungthep",
                "Kunstler Script",
                "Lao UI",
                "Latha",
                "Leelawadee",
                "Letter Gothic",
                "Levenim MT",
                "LilyUPC",
                "Lithograph",
                "Lithograph Light",
                "Long Island",
                "Lydian BT",
                "Magneto",
                "Maiandra GD",
                "Malayalam Sangam MN",
                "Malgun Gothic",
                "Mangal",
                "Marigold",
                "Marion",
                "Marker Felt",
                "Market",
                "Marlett",
                "Matisse ITC",
                "Matura MT Script Capitals",
                "Meiryo",
                "Meiryo UI",
                "Microsoft Himalaya",
                "Microsoft JhengHei",
                "Microsoft New Tai Lue",
                "Microsoft PhagsPa",
                "Microsoft Tai Le",
                "Microsoft Uighur",
                "Microsoft YaHei",
                "Microsoft Yi Baiti",
                "MingLiU",
                "MingLiU_HKSCS",
                "MingLiU_HKSCS-ExtB",
                "MingLiU-ExtB",
                "Minion",
                "Minion Pro",
                "Miriam",
                "Miriam Fixed",
                "Mistral",
                "Modern",
                "Modern No. 20",
                "Mona Lisa Solid ITC TT",
                "Mongolian Baiti",
                "MONO",
                "MoolBoran",
                "Mrs Eaves",
                "MS LineDraw",
                "MS Mincho",
                "MS PMincho",
                "MS Reference Specialty",
                "MS UI Gothic",
                "MT Extra",
                "MUSEO",
                "MV Boli",
                "Nadeem",
                "Narkisim",
                "NEVIS",
                "News Gothic",
                "News GothicMT",
                "NewsGoth BT",
                "Niagara Engraved",
                "Niagara Solid",
                "Noteworthy",
                "NSimSun",
                "Nyala",
                "OCR A Extended",
                "Old Century",
                "Old English Text MT",
                "Onyx",
                "Onyx BT",
                "OPTIMA",
                "Oriya Sangam MN",
                "OSAKA",
                "OzHandicraft BT",
                "Palace Script MT",
                "Papyrus",
                "Parchment",
                "Party LET",
                "Pegasus",
                "Perpetua",
                "Perpetua Titling MT",
                "PetitaBold",
                "Pickwick",
                "Plantagenet Cherokee",
                "Playbill",
                "PMingLiU",
                "PMingLiU-ExtB",
                "Poor Richard",
                "Poster",
                "PosterBodoni BT",
                "PRINCETOWN LET",
                "Pristina",
                "PTBarnum BT",
                "Pythagoras",
                "Raavi",
                "Rage Italic",
                "Ravie",
                "Ribbon131 Bd BT",
                "Rockwell",
                "Rockwell Condensed",
                "Rockwell Extra Bold",
                "Rod",
                "Roman",
                "Sakkal Majalla",
                "Santa Fe LET",
                "Savoye LET",
                "Sceptre",
                "Script",
                "Script MT Bold",
                "SCRIPTINA",
                "Serifa",
                "Serifa BT",
                "Serifa Th BT",
                "ShelleyVolante BT",
                "Sherwood",
                "Shonar Bangla",
                "Showcard Gothic",
                "Shruti",
                "Signboard",
                "SILKSCREEN",
                "SimHei",
                "Simplified Arabic",
                "Simplified Arabic Fixed",
                "SimSun",
                "SimSun-ExtB",
                "Sinhala Sangam MN",
                "Sketch Rockwell",
                "Skia",
                "Small Fonts",
                "Snap ITC",
                "Snell Roundhand",
                "Socket",
                "Souvenir Lt BT",
                "Staccato222 BT",
                "Steamer",
                "Stencil",
                "Storybook",
                "Styllo",
                "Subway",
                "Swis721 BlkEx BT",
                "Swiss911 XCm BT",
                "Sylfaen",
                "Synchro LET",
                "System",
                "Tamil Sangam MN",
                "Technical",
                "Teletype",
                "Telugu Sangam MN",
                "Tempus Sans ITC",
                "Terminal",
                "Thonburi",
                "Traditional Arabic",
                "Trajan",
                "TRAJAN PRO",
                "Tristan",
                "Tubular",
                "Tunga",
                "Tw Cen MT",
                "Tw Cen MT Condensed",
                "Tw Cen MT Condensed Extra Bold",
                "TypoUpright BT",
                "Unicorn",
                "Univers",
                "Univers CE 55 Medium",
                "Univers Condensed",
                "Utsaah",
                "Vagabond",
                "Vani",
                "Vijaya",
                "Viner Hand ITC",
                "VisualUI",
                "Vivaldi",
                "Vladimir Script",
                "Vrinda",
                "Westminster",
                "WHITNEY",
                "Wide Latin",
                "ZapfEllipt BT",
                "ZapfHumnst BT",
                "ZapfHumnst Dm BT",
                "Zapfino",
                "Zurich BlkEx BT",
                "Zurich Ex BT",
                "ZWAdobeF",
              ])),
              (o = o.concat(n.options.userDefinedFonts));
            var r = document.getElementsByTagName("body")[0],
              a = document.createElement("div"),
              s = document.createElement("div"),
              l = {},
              u = {},
              c = function () {
                var e = document.createElement("span");
                return (
                  (e.style.position = "absolute"),
                  (e.style.left = "-9999px"),
                  (e.style.fontSize = "72px"),
                  (e.innerHTML = "mmmmmmmmmmlli"),
                  e
                );
              },
              d = function (e, t) {
                var n = c();
                return (n.style.fontFamily = "'" + e + "'," + t), n;
              },
              f = function (e) {
                for (var t = !1, n = 0; n < i.length; n++)
                  if (
                    (t =
                      e[n].offsetWidth !== l[i[n]] ||
                      e[n].offsetHeight !== u[i[n]])
                  )
                    return t;
                return t;
              },
              p = (function () {
                for (var e = [], t = 0, n = i.length; t < n; t++) {
                  var o = c();
                  (o.style.fontFamily = i[t]), a.appendChild(o), e.push(o);
                }
                return e;
              })();
            r.appendChild(a);
            for (var h = 0, m = i.length; h < m; h++)
              (l[i[h]] = p[h].offsetWidth), (u[i[h]] = p[h].offsetHeight);
            var g = (function () {
              for (var e = {}, t = 0, n = o.length; t < n; t++) {
                for (var r = [], a = 0, l = i.length; a < l; a++) {
                  var u = d(o[t], i[a]);
                  s.appendChild(u), r.push(u);
                }
                e[o[t]] = r;
              }
              return e;
            })();
            r.appendChild(s);
            for (var v = [], y = 0, _ = o.length; y < _; y++)
              f(g[o[y]]) && v.push(o[y]);
            r.removeChild(s),
              r.removeChild(a),
              e.push({ key: "js_fonts", value: v }),
              t(e);
          }, 1);
        },
        pluginsKey: function (e) {
          return (
            this.options.excludePlugins ||
              (this.isIE()
                ? this.options.excludeIEPlugins ||
                  e.push({ key: "ie_plugins", value: this.getIEPlugins() })
                : e.push({
                    key: "regular_plugins",
                    value: this.getRegularPlugins(),
                  })),
            e
          );
        },
        getRegularPlugins: function () {
          for (var e = [], t = 0, n = navigator.plugins.length; t < n; t++)
            e.push(navigator.plugins[t]);
          return (
            this.pluginsShouldBeSorted() &&
              (e = e.sort(function (e, t) {
                return e.name > t.name ? 1 : e.name < t.name ? -1 : 0;
              })),
            this.map(
              e,
              function (e) {
                var t = this.map(e, function (e) {
                  return [e.type, e.suffixes].join("~");
                }).join(",");
                return [e.name, e.description, t].join("::");
              },
              this
            )
          );
        },
        getIEPlugins: function () {
          var e = [];
          if (
            (Object.getOwnPropertyDescriptor &&
              Object.getOwnPropertyDescriptor(window, "ActiveXObject")) ||
            "ActiveXObject" in window
          ) {
            e = this.map(
              [
                "AcroPDF.PDF",
                "Adodb.Stream",
                "AgControl.AgControl",
                "DevalVRXCtrl.DevalVRXCtrl.1",
                "MacromediaFlashPaper.MacromediaFlashPaper",
                "Msxml2.DOMDocument",
                "Msxml2.XMLHTTP",
                "PDF.PdfCtrl",
                "QuickTime.QuickTime",
                "QuickTimeCheckObject.QuickTimeCheck.1",
                "RealPlayer",
                "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)",
                "RealVideo.RealVideo(tm) ActiveX Control (32-bit)",
                "Scripting.Dictionary",
                "SWCtl.SWCtl",
                "Shell.UIHelper",
                "ShockwaveFlash.ShockwaveFlash",
                "Skype.Detection",
                "TDCCtl.TDCCtl",
                "WMPlayer.OCX",
                "rmocx.RealPlayer G2 Control",
                "rmocx.RealPlayer G2 Control.1",
              ],
              function (e) {
                try {
                  return new ActiveXObject(e), e;
                } catch (e) {
                  return null;
                }
              }
            );
          }
          return (
            navigator.plugins && (e = e.concat(this.getRegularPlugins())), e
          );
        },
        pluginsShouldBeSorted: function () {
          for (
            var e = !1, t = 0, n = this.options.sortPluginsFor.length;
            t < n;
            t++
          ) {
            var i = this.options.sortPluginsFor[t];
            if (navigator.userAgent.match(i)) {
              e = !0;
              break;
            }
          }
          return e;
        },
        touchSupportKey: function (e) {
          return (
            this.options.excludeTouchSupport ||
              e.push({ key: "touch_support", value: this.getTouchSupport() }),
            e
          );
        },
        hasSessionStorage: function () {
          try {
            return !!window.sessionStorage;
          } catch (e) {
            return !0;
          }
        },
        hasLocalStorage: function () {
          try {
            return !!window.localStorage;
          } catch (e) {
            return !0;
          }
        },
        hasIndexedDB: function () {
          return !!window.indexedDB;
        },
        getNavigatorCpuClass: function () {
          return navigator.cpuClass ? navigator.cpuClass : "unknown";
        },
        getNavigatorPlatform: function () {
          return navigator.platform ? navigator.platform : "unknown";
        },
        getDoNotTrack: function () {
          return navigator.doNotTrack ? navigator.doNotTrack : "unknown";
        },
        getTouchSupport: function () {
          var e = 0,
            t = !1;
          void 0 !== navigator.maxTouchPoints
            ? (e = navigator.maxTouchPoints)
            : void 0 !== navigator.msMaxTouchPoints &&
              (e = navigator.msMaxTouchPoints);
          try {
            document.createEvent("TouchEvent"), (t = !0);
          } catch (e) {}
          return [e, t, "ontouchstart" in window];
        },
        getCanvasFp: function () {
          var e = [],
            t = document.createElement("canvas");
          (t.width = 2e3), (t.height = 200), (t.style.display = "inline");
          var n = t.getContext("2d");
          return (
            n.rect(0, 0, 10, 10),
            n.rect(2, 2, 6, 6),
            e.push(
              "canvas winding:" +
                (!1 === n.isPointInPath(5, 5, "evenodd") ? "yes" : "no")
            ),
            (n.textBaseline = "alphabetic"),
            (n.fillStyle = "#f60"),
            n.fillRect(125, 1, 62, 20),
            (n.fillStyle = "#069"),
            this.options.dontUseFakeFontInCanvas
              ? (n.font = "11pt Arial")
              : (n.font = "11pt no-real-font-123"),
            n.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15),
            (n.fillStyle = "rgba(102, 204, 0, 0.2)"),
            (n.font = "18pt Arial"),
            n.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45),
            (n.globalCompositeOperation = "multiply"),
            (n.fillStyle = "rgb(255,0,255)"),
            n.beginPath(),
            n.arc(50, 50, 50, 0, 2 * Math.PI, !0),
            n.closePath(),
            n.fill(),
            (n.fillStyle = "rgb(0,255,255)"),
            n.beginPath(),
            n.arc(100, 50, 50, 0, 2 * Math.PI, !0),
            n.closePath(),
            n.fill(),
            (n.fillStyle = "rgb(255,255,0)"),
            n.beginPath(),
            n.arc(75, 100, 50, 0, 2 * Math.PI, !0),
            n.closePath(),
            n.fill(),
            (n.fillStyle = "rgb(255,0,255)"),
            n.arc(75, 75, 75, 0, 2 * Math.PI, !0),
            n.arc(75, 75, 25, 0, 2 * Math.PI, !0),
            n.fill("evenodd"),
            e.push("canvas fp:" + t.toDataURL()),
            e.join("~")
          );
        },
        getWebglFp: function () {
          var e,
            t = function (t) {
              return (
                e.clearColor(0, 0, 0, 1),
                e.enable(e.DEPTH_TEST),
                e.depthFunc(e.LEQUAL),
                e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT),
                "[" + t[0] + ", " + t[1] + "]"
              );
            };
          if (!(e = this.getWebglCanvas())) return null;
          var n = [],
            i = e.createBuffer();
          e.bindBuffer(e.ARRAY_BUFFER, i);
          var o = new Float32Array([
            -0.2,
            -0.9,
            0,
            0.4,
            -0.26,
            0,
            0,
            0.732134444,
            0,
          ]);
          e.bufferData(e.ARRAY_BUFFER, o, e.STATIC_DRAW),
            (i.itemSize = 3),
            (i.numItems = 3);
          var r = e.createProgram(),
            a = e.createShader(e.VERTEX_SHADER);
          e.shaderSource(
            a,
            "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"
          ),
            e.compileShader(a);
          var s = e.createShader(e.FRAGMENT_SHADER);
          return (
            e.shaderSource(
              s,
              "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"
            ),
            e.compileShader(s),
            e.attachShader(r, a),
            e.attachShader(r, s),
            e.linkProgram(r),
            e.useProgram(r),
            (r.vertexPosAttrib = e.getAttribLocation(r, "attrVertex")),
            (r.offsetUniform = e.getUniformLocation(r, "uniformOffset")),
            e.enableVertexAttribArray(r.vertexPosArray),
            e.vertexAttribPointer(
              r.vertexPosAttrib,
              i.itemSize,
              e.FLOAT,
              !1,
              0,
              0
            ),
            e.uniform2f(r.offsetUniform, 1, 1),
            e.drawArrays(e.TRIANGLE_STRIP, 0, i.numItems),
            null != e.canvas && n.push(e.canvas.toDataURL()),
            n.push("extensions:" + e.getSupportedExtensions().join(";")),
            n.push(
              "webgl aliased line width range:" +
                t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))
            ),
            n.push(
              "webgl aliased point size range:" +
                t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))
            ),
            n.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)),
            n.push(
              "webgl antialiasing:" +
                (e.getContextAttributes().antialias ? "yes" : "no")
            ),
            n.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)),
            n.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)),
            n.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)),
            n.push(
              "webgl max anisotropy:" +
                (function (e) {
                  var t,
                    n =
                      e.getExtension("EXT_texture_filter_anisotropic") ||
                      e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") ||
                      e.getExtension("MOZ_EXT_texture_filter_anisotropic");
                  return n
                    ? (0 ===
                        (t = e.getParameter(
                          n.MAX_TEXTURE_MAX_ANISOTROPY_EXT
                        )) && (t = 2),
                      t)
                    : null;
                })(e)
            ),
            n.push(
              "webgl max combined texture image units:" +
                e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)
            ),
            n.push(
              "webgl max cube map texture size:" +
                e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)
            ),
            n.push(
              "webgl max fragment uniform vectors:" +
                e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)
            ),
            n.push(
              "webgl max render buffer size:" +
                e.getParameter(e.MAX_RENDERBUFFER_SIZE)
            ),
            n.push(
              "webgl max texture image units:" +
                e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)
            ),
            n.push(
              "webgl max texture size:" + e.getParameter(e.MAX_TEXTURE_SIZE)
            ),
            n.push(
              "webgl max varying vectors:" +
                e.getParameter(e.MAX_VARYING_VECTORS)
            ),
            n.push(
              "webgl max vertex attribs:" + e.getParameter(e.MAX_VERTEX_ATTRIBS)
            ),
            n.push(
              "webgl max vertex texture image units:" +
                e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)
            ),
            n.push(
              "webgl max vertex uniform vectors:" +
                e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)
            ),
            n.push(
              "webgl max viewport dims:" +
                t(e.getParameter(e.MAX_VIEWPORT_DIMS))
            ),
            n.push("webgl red bits:" + e.getParameter(e.RED_BITS)),
            n.push("webgl renderer:" + e.getParameter(e.RENDERER)),
            n.push(
              "webgl shading language version:" +
                e.getParameter(e.SHADING_LANGUAGE_VERSION)
            ),
            n.push("webgl stencil bits:" + e.getParameter(e.STENCIL_BITS)),
            n.push("webgl vendor:" + e.getParameter(e.VENDOR)),
            n.push("webgl version:" + e.getParameter(e.VERSION)),
            e.getShaderPrecisionFormat
              ? (n.push(
                  "webgl vertex shader high float precision:" +
                    e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT)
                      .precision
                ),
                n.push(
                  "webgl vertex shader high float precision rangeMin:" +
                    e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT)
                      .rangeMin
                ),
                n.push(
                  "webgl vertex shader high float precision rangeMax:" +
                    e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT)
                      .rangeMax
                ),
                n.push(
                  "webgl vertex shader medium float precision:" +
                    e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT)
                      .precision
                ),
                n.push(
                  "webgl vertex shader medium float precision rangeMin:" +
                    e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT)
                      .rangeMin
                ),
                n.push(
                  "webgl vertex shader medium float precision rangeMax:" +
                    e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT)
                      .rangeMax
                ),
                n.push(
                  "webgl vertex shader low float precision:" +
                    e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT)
                      .precision
                ),
                n.push(
                  "webgl vertex shader low float precision rangeMin:" +
                    e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT)
                      .rangeMin
                ),
                n.push(
                  "webgl vertex shader low float precision rangeMax:" +
                    e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT)
                      .rangeMax
                ),
                n.push(
                  "webgl fragment shader high float precision:" +
                    e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT)
                      .precision
                ),
                n.push(
                  "webgl fragment shader high float precision rangeMin:" +
                    e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT)
                      .rangeMin
                ),
                n.push(
                  "webgl fragment shader high float precision rangeMax:" +
                    e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT)
                      .rangeMax
                ),
                n.push(
                  "webgl fragment shader medium float precision:" +
                    e.getShaderPrecisionFormat(
                      e.FRAGMENT_SHADER,
                      e.MEDIUM_FLOAT
                    ).precision
                ),
                n.push(
                  "webgl fragment shader medium float precision rangeMin:" +
                    e.getShaderPrecisionFormat(
                      e.FRAGMENT_SHADER,
                      e.MEDIUM_FLOAT
                    ).rangeMin
                ),
                n.push(
                  "webgl fragment shader medium float precision rangeMax:" +
                    e.getShaderPrecisionFormat(
                      e.FRAGMENT_SHADER,
                      e.MEDIUM_FLOAT
                    ).rangeMax
                ),
                n.push(
                  "webgl fragment shader low float precision:" +
                    e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT)
                      .precision
                ),
                n.push(
                  "webgl fragment shader low float precision rangeMin:" +
                    e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT)
                      .rangeMin
                ),
                n.push(
                  "webgl fragment shader low float precision rangeMax:" +
                    e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT)
                      .rangeMax
                ),
                n.push(
                  "webgl vertex shader high int precision:" +
                    e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT)
                      .precision
                ),
                n.push(
                  "webgl vertex shader high int precision rangeMin:" +
                    e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT)
                      .rangeMin
                ),
                n.push(
                  "webgl vertex shader high int precision rangeMax:" +
                    e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT)
                      .rangeMax
                ),
                n.push(
                  "webgl vertex shader medium int precision:" +
                    e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT)
                      .precision
                ),
                n.push(
                  "webgl vertex shader medium int precision rangeMin:" +
                    e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT)
                      .rangeMin
                ),
                n.push(
                  "webgl vertex shader medium int precision rangeMax:" +
                    e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT)
                      .rangeMax
                ),
                n.push(
                  "webgl vertex shader low int precision:" +
                    e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT)
                      .precision
                ),
                n.push(
                  "webgl vertex shader low int precision rangeMin:" +
                    e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT)
                      .rangeMin
                ),
                n.push(
                  "webgl vertex shader low int precision rangeMax:" +
                    e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT)
                      .rangeMax
                ),
                n.push(
                  "webgl fragment shader high int precision:" +
                    e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT)
                      .precision
                ),
                n.push(
                  "webgl fragment shader high int precision rangeMin:" +
                    e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT)
                      .rangeMin
                ),
                n.push(
                  "webgl fragment shader high int precision rangeMax:" +
                    e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT)
                      .rangeMax
                ),
                n.push(
                  "webgl fragment shader medium int precision:" +
                    e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT)
                      .precision
                ),
                n.push(
                  "webgl fragment shader medium int precision rangeMin:" +
                    e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT)
                      .rangeMin
                ),
                n.push(
                  "webgl fragment shader medium int precision rangeMax:" +
                    e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT)
                      .rangeMax
                ),
                n.push(
                  "webgl fragment shader low int precision:" +
                    e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT)
                      .precision
                ),
                n.push(
                  "webgl fragment shader low int precision rangeMin:" +
                    e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT)
                      .rangeMin
                ),
                n.push(
                  "webgl fragment shader low int precision rangeMax:" +
                    e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT)
                      .rangeMax
                ),
                n.join("~"))
              : ("undefined" == typeof NODEBUG &&
                  this.log(
                    "WebGL fingerprinting is incomplete, because your browser does not support getShaderPrecisionFormat"
                  ),
                n.join("~"))
          );
        },
        getAdBlock: function () {
          var e = document.createElement("div");
          (e.innerHTML = "&nbsp;"), (e.className = "adsbox");
          var t = !1;
          try {
            document.body.appendChild(e),
              (t =
                0 ===
                document.getElementsByClassName("adsbox")[0].offsetHeight),
              document.body.removeChild(e);
          } catch (e) {
            t = !1;
          }
          return t;
        },
        getHasLiedLanguages: function () {
          if (void 0 !== navigator.languages)
            try {
              if (
                navigator.languages[0].substr(0, 2) !==
                navigator.language.substr(0, 2)
              )
                return !0;
            } catch (e) {
              return !0;
            }
          return !1;
        },
        getHasLiedResolution: function () {
          return (
            screen.width < screen.availWidth ||
            screen.height < screen.availHeight
          );
        },
        getHasLiedOs: function () {
          var e,
            t = navigator.userAgent.toLowerCase(),
            n = navigator.oscpu,
            i = navigator.platform.toLowerCase();
          if (
            ((e =
              t.indexOf("windows phone") >= 0
                ? "Windows Phone"
                : t.indexOf("win") >= 0
                ? "Windows"
                : t.indexOf("android") >= 0
                ? "Android"
                : t.indexOf("linux") >= 0
                ? "Linux"
                : t.indexOf("iphone") >= 0 || t.indexOf("ipad") >= 0
                ? "iOS"
                : t.indexOf("mac") >= 0
                ? "Mac"
                : "Other"),
            ("ontouchstart" in window ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0) &&
              "Windows Phone" !== e &&
              "Android" !== e &&
              "iOS" !== e &&
              "Other" !== e)
          )
            return !0;
          if (void 0 !== n) {
            if (
              (n = n.toLowerCase()).indexOf("win") >= 0 &&
              "Windows" !== e &&
              "Windows Phone" !== e
            )
              return !0;
            if (n.indexOf("linux") >= 0 && "Linux" !== e && "Android" !== e)
              return !0;
            if (n.indexOf("mac") >= 0 && "Mac" !== e && "iOS" !== e) return !0;
            if (
              0 === n.indexOf("win") &&
              0 === n.indexOf("linux") &&
              n.indexOf("mac") >= 0 &&
              "other" !== e
            )
              return !0;
          }
          return (
            (i.indexOf("win") >= 0 &&
              "Windows" !== e &&
              "Windows Phone" !== e) ||
            ((i.indexOf("linux") >= 0 ||
              i.indexOf("android") >= 0 ||
              i.indexOf("pike") >= 0) &&
              "Linux" !== e &&
              "Android" !== e) ||
            ((i.indexOf("mac") >= 0 ||
              i.indexOf("ipad") >= 0 ||
              i.indexOf("ipod") >= 0 ||
              i.indexOf("iphone") >= 0) &&
              "Mac" !== e &&
              "iOS" !== e) ||
            (0 === i.indexOf("win") &&
              0 === i.indexOf("linux") &&
              i.indexOf("mac") >= 0 &&
              "other" !== e) ||
            (void 0 === navigator.plugins &&
              "Windows" !== e &&
              "Windows Phone" !== e)
          );
        },
        getHasLiedBrowser: function () {
          var e,
            t = navigator.userAgent.toLowerCase(),
            n = navigator.productSub;
          if (
            ("Chrome" ===
              (e =
                t.indexOf("firefox") >= 0
                  ? "Firefox"
                  : t.indexOf("opera") >= 0 || t.indexOf("opr") >= 0
                  ? "Opera"
                  : t.indexOf("chrome") >= 0
                  ? "Chrome"
                  : t.indexOf("safari") >= 0
                  ? "Safari"
                  : t.indexOf("trident") >= 0
                  ? "Internet Explorer"
                  : "Other") ||
              "Safari" === e ||
              "Opera" === e) &&
            "20030107" !== n
          )
            return !0;
          var i,
            o = eval.toString().length;
          if (37 === o && "Safari" !== e && "Firefox" !== e && "Other" !== e)
            return !0;
          if (39 === o && "Internet Explorer" !== e && "Other" !== e) return !0;
          if (33 === o && "Chrome" !== e && "Opera" !== e && "Other" !== e)
            return !0;
          try {
            throw "a";
          } catch (e) {
            try {
              e.toSource(), (i = !0);
            } catch (e) {
              i = !1;
            }
          }
          return !(!i || "Firefox" === e || "Other" === e);
        },
        isCanvasSupported: function () {
          var e = document.createElement("canvas");
          return !(!e.getContext || !e.getContext("2d"));
        },
        isWebGlSupported: function () {
          if (!this.isCanvasSupported()) return !1;
          var e,
            t = document.createElement("canvas");
          try {
            e =
              t.getContext &&
              (t.getContext("webgl") || t.getContext("experimental-webgl"));
          } catch (t) {
            e = !1;
          }
          return !!window.WebGLRenderingContext && !!e;
        },
        isIE: function () {
          return (
            "Microsoft Internet Explorer" === navigator.appName ||
            !(
              "Netscape" !== navigator.appName ||
              !/Trident/.test(navigator.userAgent)
            )
          );
        },
        hasSwfObjectLoaded: function () {
          return void 0 !== window.swfobject;
        },
        hasMinFlashInstalled: function () {
          return swfobject.hasFlashPlayerVersion("9.0.0");
        },
        addFlashDivNode: function () {
          var e = document.createElement("div");
          e.setAttribute("id", this.options.swfContainerId),
            document.body.appendChild(e);
        },
        loadSwfAndDetectFonts: function (e) {
          window.___fp_swf_loaded = function (t) {
            e(t);
          };
          var t = this.options.swfContainerId;
          this.addFlashDivNode();
          var n = { onReady: "___fp_swf_loaded" };
          swfobject.embedSWF(
            this.options.swfPath,
            t,
            "1",
            "1",
            "9.0.0",
            !1,
            n,
            { allowScriptAccess: "always", menu: "false" },
            {}
          );
        },
        getWebglCanvas: function () {
          var e = document.createElement("canvas"),
            t = null;
          try {
            t = e.getContext("webgl") || e.getContext("experimental-webgl");
          } catch (e) {}
          return t || (t = null), t;
        },
        each: function (e, t, n) {
          if (null !== e)
            if (this.nativeForEach && e.forEach === this.nativeForEach)
              e.forEach(t, n);
            else if (e.length === +e.length) {
              for (var i = 0, o = e.length; i < o; i++)
                if (t.call(n, e[i], i, e) === {}) return;
            } else
              for (var r in e)
                if (e.hasOwnProperty(r) && t.call(n, e[r], r, e) === {}) return;
        },
        map: function (e, t, n) {
          var i = [];
          return null == e
            ? i
            : this.nativeMap && e.map === this.nativeMap
            ? e.map(t, n)
            : (this.each(e, function (e, o, r) {
                i[i.length] = t.call(n, e, o, r);
              }),
              i);
        },
        x64Add: function (e, t) {
          (e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]]),
            (t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]]);
          var n = [0, 0, 0, 0];
          return (
            (n[3] += e[3] + t[3]),
            (n[2] += n[3] >>> 16),
            (n[3] &= 65535),
            (n[2] += e[2] + t[2]),
            (n[1] += n[2] >>> 16),
            (n[2] &= 65535),
            (n[1] += e[1] + t[1]),
            (n[0] += n[1] >>> 16),
            (n[1] &= 65535),
            (n[0] += e[0] + t[0]),
            (n[0] &= 65535),
            [(n[0] << 16) | n[1], (n[2] << 16) | n[3]]
          );
        },
        x64Multiply: function (e, t) {
          (e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]]),
            (t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]]);
          var n = [0, 0, 0, 0];
          return (
            (n[3] += e[3] * t[3]),
            (n[2] += n[3] >>> 16),
            (n[3] &= 65535),
            (n[2] += e[2] * t[3]),
            (n[1] += n[2] >>> 16),
            (n[2] &= 65535),
            (n[2] += e[3] * t[2]),
            (n[1] += n[2] >>> 16),
            (n[2] &= 65535),
            (n[1] += e[1] * t[3]),
            (n[0] += n[1] >>> 16),
            (n[1] &= 65535),
            (n[1] += e[2] * t[2]),
            (n[0] += n[1] >>> 16),
            (n[1] &= 65535),
            (n[1] += e[3] * t[1]),
            (n[0] += n[1] >>> 16),
            (n[1] &= 65535),
            (n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0]),
            (n[0] &= 65535),
            [(n[0] << 16) | n[1], (n[2] << 16) | n[3]]
          );
        },
        x64Rotl: function (e, t) {
          return 32 === (t %= 64)
            ? [e[1], e[0]]
            : t < 32
            ? [
                (e[0] << t) | (e[1] >>> (32 - t)),
                (e[1] << t) | (e[0] >>> (32 - t)),
              ]
            : ((t -= 32),
              [
                (e[1] << t) | (e[0] >>> (32 - t)),
                (e[0] << t) | (e[1] >>> (32 - t)),
              ]);
        },
        x64LeftShift: function (e, t) {
          return 0 === (t %= 64)
            ? e
            : t < 32
            ? [(e[0] << t) | (e[1] >>> (32 - t)), e[1] << t]
            : [e[1] << (t - 32), 0];
        },
        x64Xor: function (e, t) {
          return [e[0] ^ t[0], e[1] ^ t[1]];
        },
        x64Fmix: function (e) {
          return (
            (e = this.x64Xor(e, [0, e[0] >>> 1])),
            (e = this.x64Multiply(e, [4283543511, 3981806797])),
            (e = this.x64Xor(e, [0, e[0] >>> 1])),
            (e = this.x64Multiply(e, [3301882366, 444984403])),
            (e = this.x64Xor(e, [0, e[0] >>> 1]))
          );
        },
        x64hash128: function (e, t) {
          (e = e || ""), (t = t || 0);
          for (
            var n = e.length % 16,
              i = e.length - n,
              o = [0, t],
              r = [0, t],
              a = [0, 0],
              s = [0, 0],
              l = [2277735313, 289559509],
              u = [1291169091, 658871167],
              c = 0;
            c < i;
            c += 16
          )
            (a = [
              (255 & e.charCodeAt(c + 4)) |
                ((255 & e.charCodeAt(c + 5)) << 8) |
                ((255 & e.charCodeAt(c + 6)) << 16) |
                ((255 & e.charCodeAt(c + 7)) << 24),
              (255 & e.charCodeAt(c)) |
                ((255 & e.charCodeAt(c + 1)) << 8) |
                ((255 & e.charCodeAt(c + 2)) << 16) |
                ((255 & e.charCodeAt(c + 3)) << 24),
            ]),
              (s = [
                (255 & e.charCodeAt(c + 12)) |
                  ((255 & e.charCodeAt(c + 13)) << 8) |
                  ((255 & e.charCodeAt(c + 14)) << 16) |
                  ((255 & e.charCodeAt(c + 15)) << 24),
                (255 & e.charCodeAt(c + 8)) |
                  ((255 & e.charCodeAt(c + 9)) << 8) |
                  ((255 & e.charCodeAt(c + 10)) << 16) |
                  ((255 & e.charCodeAt(c + 11)) << 24),
              ]),
              (a = this.x64Multiply(a, l)),
              (a = this.x64Rotl(a, 31)),
              (a = this.x64Multiply(a, u)),
              (o = this.x64Xor(o, a)),
              (o = this.x64Rotl(o, 27)),
              (o = this.x64Add(o, r)),
              (o = this.x64Add(this.x64Multiply(o, [0, 5]), [0, 1390208809])),
              (s = this.x64Multiply(s, u)),
              (s = this.x64Rotl(s, 33)),
              (s = this.x64Multiply(s, l)),
              (r = this.x64Xor(r, s)),
              (r = this.x64Rotl(r, 31)),
              (r = this.x64Add(r, o)),
              (r = this.x64Add(this.x64Multiply(r, [0, 5]), [0, 944331445]));
          switch (((a = [0, 0]), (s = [0, 0]), n)) {
            case 15:
              s = this.x64Xor(
                s,
                this.x64LeftShift([0, e.charCodeAt(c + 14)], 48)
              );
            case 14:
              s = this.x64Xor(
                s,
                this.x64LeftShift([0, e.charCodeAt(c + 13)], 40)
              );
            case 13:
              s = this.x64Xor(
                s,
                this.x64LeftShift([0, e.charCodeAt(c + 12)], 32)
              );
            case 12:
              s = this.x64Xor(
                s,
                this.x64LeftShift([0, e.charCodeAt(c + 11)], 24)
              );
            case 11:
              s = this.x64Xor(
                s,
                this.x64LeftShift([0, e.charCodeAt(c + 10)], 16)
              );
            case 10:
              s = this.x64Xor(
                s,
                this.x64LeftShift([0, e.charCodeAt(c + 9)], 8)
              );
            case 9:
              (s = this.x64Xor(s, [0, e.charCodeAt(c + 8)])),
                (s = this.x64Multiply(s, u)),
                (s = this.x64Rotl(s, 33)),
                (s = this.x64Multiply(s, l)),
                (r = this.x64Xor(r, s));
            case 8:
              a = this.x64Xor(
                a,
                this.x64LeftShift([0, e.charCodeAt(c + 7)], 56)
              );
            case 7:
              a = this.x64Xor(
                a,
                this.x64LeftShift([0, e.charCodeAt(c + 6)], 48)
              );
            case 6:
              a = this.x64Xor(
                a,
                this.x64LeftShift([0, e.charCodeAt(c + 5)], 40)
              );
            case 5:
              a = this.x64Xor(
                a,
                this.x64LeftShift([0, e.charCodeAt(c + 4)], 32)
              );
            case 4:
              a = this.x64Xor(
                a,
                this.x64LeftShift([0, e.charCodeAt(c + 3)], 24)
              );
            case 3:
              a = this.x64Xor(
                a,
                this.x64LeftShift([0, e.charCodeAt(c + 2)], 16)
              );
            case 2:
              a = this.x64Xor(
                a,
                this.x64LeftShift([0, e.charCodeAt(c + 1)], 8)
              );
            case 1:
              (a = this.x64Xor(a, [0, e.charCodeAt(c)])),
                (a = this.x64Multiply(a, l)),
                (a = this.x64Rotl(a, 31)),
                (a = this.x64Multiply(a, u)),
                (o = this.x64Xor(o, a));
          }
          return (
            (o = this.x64Xor(o, [0, e.length])),
            (r = this.x64Xor(r, [0, e.length])),
            (o = this.x64Add(o, r)),
            (r = this.x64Add(r, o)),
            (o = this.x64Fmix(o)),
            (r = this.x64Fmix(r)),
            (o = this.x64Add(o, r)),
            (r = this.x64Add(r, o)),
            ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) +
              ("00000000" + (o[1] >>> 0).toString(16)).slice(-8) +
              ("00000000" + (r[0] >>> 0).toString(16)).slice(-8) +
              ("00000000" + (r[1] >>> 0).toString(16)).slice(-8)
          );
        },
      }),
      (e.VERSION = "1.4.1"),
      e
    );
  }),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : e(jQuery);
  })(function (e, t) {
    var n = 6,
      i = e.event.add,
      o = e.event.remove,
      r = function (t, n, i) {
        e.event.trigger(n, i, t);
      },
      a =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (e, t) {
          return window.setTimeout(function () {
            e();
          }, 25);
        },
      s = { textarea: !0, input: !0, select: !0, button: !0 },
      l = { move: "mousemove", cancel: "mouseup dragstart", end: "mouseup" },
      u = { move: "touchmove", cancel: "touchend", end: "touchend" };
    function c() {
      return !0;
    }
    function d() {
      return !1;
    }
    function f(e) {
      e.preventDefault();
    }
    function p(e) {
      s[e.target.tagName.toLowerCase()] || e.preventDefault();
    }
    function h(e, t) {
      var n, i;
      if (e.identifiedTouch) return e.identifiedTouch(t);
      for (n = -1, i = e.length; ++n < i; )
        if (e[n].identifier === t) return e[n];
    }
    function m(e, t) {
      var n = h(e.changedTouches, t.identifier);
      if (n && (n.pageX !== t.pageX || n.pageY !== t.pageY)) return n;
    }
    function g(e) {
      w(e, e.data, e, y);
    }
    function v(e) {
      y();
    }
    function y() {
      o(document, l.move, g), o(document, l.cancel, v);
    }
    function _(e) {
      var t = e.data,
        n = m(e, t);
      n && w(e, t, n, x);
    }
    function b(e) {
      var t = e.data;
      h(e.changedTouches, t.identifier) && x(t.identifier);
    }
    function x(e) {
      o(document, "." + e, _), o(document, "." + e, b);
    }
    function w(e, t, i, o) {
      var a = i.pageX - t.startX,
        s = i.pageY - t.startY;
      a * a + s * s < n * n ||
        (function (e, t, n, i, o, a) {
          var s, l;
          t.target;
          (s = e.targetTouches),
            (l = e.timeStamp - t.timeStamp),
            (t.type = "movestart"),
            (t.distX = i),
            (t.distY = o),
            (t.deltaX = i),
            (t.deltaY = o),
            (t.pageX = n.pageX),
            (t.pageY = n.pageY),
            (t.velocityX = i / l),
            (t.velocityY = o / l),
            (t.targetTouches = s),
            (t.finger = s ? s.length : 1),
            (t._handled = $),
            (t._preventTouchmoveDefault = function () {
              e.preventDefault();
            }),
            r(t.target, t),
            a(t.identifier);
        })(e, t, i, a, s, o);
    }
    function $() {
      return (this._handled = c), !1;
    }
    function T(e) {
      e._handled();
    }
    function k(e) {
      var t = e.data.event,
        n = e.data.timer;
      A(t, e, e.timeStamp, n);
    }
    function C(e) {
      var t = e.data.event,
        n = e.data.timer;
      o(document, l.move, k),
        o(document, l.end, C),
        M(t, n, function () {
          setTimeout(function () {
            o(t.target, "click", d);
          }, 0);
        });
    }
    function S(e) {
      var t = e.data.event,
        n = e.data.timer,
        i = m(e, t);
      i &&
        (e.preventDefault(),
        (t.targetTouches = e.targetTouches),
        A(t, i, e.timeStamp, n));
    }
    function E(e) {
      var t = e.data.event,
        n = e.data.timer;
      h(e.changedTouches, t.identifier) &&
        (!(function (e) {
          o(document, "." + e.identifier, S),
            o(document, "." + e.identifier, E);
        })(t),
        M(t, n));
    }
    function A(e, t, n, i) {
      var o = n - e.timeStamp;
      (e.type = "move"),
        (e.distX = t.pageX - e.startX),
        (e.distY = t.pageY - e.startY),
        (e.deltaX = t.pageX - e.pageX),
        (e.deltaY = t.pageY - e.pageY),
        (e.velocityX = 0.3 * e.velocityX + (0.7 * e.deltaX) / o),
        (e.velocityY = 0.3 * e.velocityY + (0.7 * e.deltaY) / o),
        (e.pageX = t.pageX),
        (e.pageY = t.pageY),
        i.kick();
    }
    function M(e, t, n) {
      t.end(function () {
        return (e.type = "moveend"), r(e.target, e), n && n();
      });
    }
    (e.event.special.movestart = {
      setup: function (e, t, n) {
        return i(this, "movestart.move", T), !0;
      },
      teardown: function (e) {
        return (
          o(this, "dragstart drag", f),
          o(this, "mousedown touchstart", p),
          o(this, "movestart", T),
          !0
        );
      },
      add: function (e) {
        "move" !== e.namespace &&
          "moveend" !== e.namespace &&
          (i(this, "dragstart." + e.guid + " drag." + e.guid, f, t, e.selector),
          i(this, "mousedown." + e.guid, p, t, e.selector));
      },
      remove: function (e) {
        "move" !== e.namespace &&
          "moveend" !== e.namespace &&
          (o(this, "dragstart." + e.guid + " drag." + e.guid),
          o(this, "mousedown." + e.guid));
      },
      _default: function (e) {
        var n, o;
        e._handled() &&
          ((o = {
            event: (n = {
              target: e.target,
              startX: e.startX,
              startY: e.startY,
              pageX: e.pageX,
              pageY: e.pageY,
              distX: e.distX,
              distY: e.distY,
              deltaX: e.deltaX,
              deltaY: e.deltaY,
              velocityX: e.velocityX,
              velocityY: e.velocityY,
              timeStamp: e.timeStamp,
              identifier: e.identifier,
              targetTouches: e.targetTouches,
              finger: e.finger,
            }),
            timer: new (function (e) {
              var t = e,
                n = !1,
                i = !1;
              function o(e) {
                n ? (t(), a(o), (i = !0), (n = !1)) : (i = !1);
              }
              (this.kick = function (e) {
                (n = !0), i || o();
              }),
                (this.end = function (e) {
                  var o = t;
                  e &&
                    (i
                      ? ((t = n
                          ? function () {
                              o(), e();
                            }
                          : e),
                        (n = !0))
                      : e());
                });
            })(function (t) {
              r(e.target, n);
            }),
          }),
          e.identifier === t
            ? (i(e.target, "click", d),
              i(document, l.move, k, o),
              i(document, l.end, C, o))
            : (e._preventTouchmoveDefault(),
              i(document, u.move + "." + e.identifier, S, o),
              i(document, u.end + "." + e.identifier, E, o)));
      },
    }),
      (e.event.special.move = {
        setup: function () {
          i(this, "movestart.move", e.noop);
        },
        teardown: function () {
          o(this, "movestart.move", e.noop);
        },
      }),
      (e.event.special.moveend = {
        setup: function () {
          i(this, "movestart.moveend", e.noop);
        },
        teardown: function () {
          o(this, "movestart.moveend", e.noop);
        },
      }),
      i(document, "mousedown.move", function (e) {
        var t;
        (function (e) {
          return 1 === e.which && !e.ctrlKey && !e.altKey;
        })(e) &&
          ((t = {
            target: e.target,
            startX: e.pageX,
            startY: e.pageY,
            timeStamp: e.timeStamp,
          }),
          i(document, l.move, g, t),
          i(document, l.cancel, v, t));
      }),
      i(document, "touchstart.move", function (e) {
        var t, n;
        s[e.target.tagName.toLowerCase()] ||
          ((n = {
            target: (t = e.changedTouches[0]).target,
            startX: t.pageX,
            startY: t.pageY,
            timeStamp: e.timeStamp,
            identifier: t.identifier,
          }),
          i(document, u.move + "." + t.identifier, _, n),
          i(document, u.cancel + "." + t.identifier, b, n));
      }),
      "function" == typeof Array.prototype.indexOf &&
        (function (e, t) {
          for (var n = ["changedTouches", "targetTouches"], i = n.length; i--; )
            -1 === e.event.props.indexOf(n[i]) && e.event.props.push(n[i]);
        })(e);
  }),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : e(jQuery);
  })(function (e, t) {
    var n = e.event.add,
      i = e.event.remove,
      o = function (t, n, i) {
        e.event.trigger(n, i, t);
      },
      r = { threshold: 0, sensitivity: 6 };
    function a(e) {
      var t, n, i;
      (t = e.target.offsetWidth),
        (n = e.target.offsetHeight),
        (i = {
          distX: e.distX,
          distY: e.distY,
          velocityX: e.velocityX,
          velocityY: e.velocityY,
          finger: e.finger,
        }),
        e.distX > e.distY
          ? e.distX > -e.distY
            ? (e.distX / t > r.threshold ||
                ((e.velocityX * e.distX) / t) * r.sensitivity > 1) &&
              ((i.type = "swiperight"), o(e.currentTarget, i))
            : (-e.distY / n > r.threshold ||
                ((e.velocityY * e.distY) / t) * r.sensitivity > 1) &&
              ((i.type = "swipeup"), o(e.currentTarget, i))
          : e.distX > -e.distY
          ? (e.distY / n > r.threshold ||
              ((e.velocityY * e.distY) / t) * r.sensitivity > 1) &&
            ((i.type = "swipedown"), o(e.currentTarget, i))
          : (-e.distX / t > r.threshold ||
              ((e.velocityX * e.distX) / t) * r.sensitivity > 1) &&
            ((i.type = "swipeleft"), o(e.currentTarget, i));
    }
    function s(t) {
      var n = e.data(t, "event_swipe");
      return n || ((n = { count: 0 }), e.data(t, "event_swipe", n)), n;
    }
    e.event.special.swipe = e.event.special.swipeleft = e.event.special.swiperight = e.event.special.swipeup = e.event.special.swipedown = {
      setup: function (e, t, i) {
        if (!(s(this).count++ > 0)) return n(this, "moveend", a), !0;
      },
      teardown: function () {
        if (!(--s(this).count > 0)) return i(this, "moveend", a), !0;
      },
      settings: r,
    };
  }),
  $(document).ready(function () {
    $.smartbanner &&
      $(function () {
        $.smartbanner({
          button: "ОТКРЫТЬ",
          price: "Бесплатно",
          inAppStore: "в App Store",
        });
      });
    var e, t, n, i, o, r;
    $.getScript(
      "//www.googleadservices.com/pagead/conversion.js",
      function () {}
    ),
      (e = window),
      (t = document),
      (n = "script"),
      (i = "ga"),
      (e.GoogleAnalyticsObject = i),
      (e.ga =
        e.ga ||
        function () {
          (e.ga.q = e.ga.q || []).push(arguments);
        }),
      (e.ga.l = Number(new Date())),
      (o = t.createElement(n)),
      (r = t.getElementsByTagName(n)[0]),
      (o.async = 1),
      (o.src = "//www.google-analytics.com/analytics.js"),
      r.parentNode.insertBefore(o, r),
      ga("create", "UA-68612697-1", "auto"),
      ga("send", "pageview"),
      (function (e, t, n) {
        (t[n] = t[n] || []).push(function () {
          try {
            t.yaCounter6405355 = new Ya.Metrika2({
              id: 6405355,
              clickmap: !0,
              trackLinks: !0,
              accurateTrackBounce: !0,
              webvisor: !0,
            });
          } catch (e) {}
        });
        var i = e.getElementsByTagName("script")[0],
          o = e.createElement("script"),
          r = function () {
            i.parentNode.insertBefore(o, i);
          };
        (o.type = "text/javascript"),
          (o.async = !0),
          (o.src = "https://mc.yandex.ru/metrika/tag.js"),
          "[object Opera]" == t.opera
            ? e.addEventListener("DOMContentLoaded", r, !1)
            : r();
      })(document, window, "yandex_metrika_callbacks2"),
      (function (e, t, n, i, o) {
        e[n] =
          e[n] ||
          function () {
            (e[n].q = e[n].q || []).push(arguments);
          };
        var r = t.createElement(o),
          a = t.getElementsByTagName(o)[0];
        (r.async = !0),
          (r.src = "//tags.soloway.ru/DSPCounter.js"),
          a.parentNode.insertBefore(r, a);
      })(window, document, "DSPCounter", 0, "script"),
      DSPCounter("send", { sid: "212742", user_id: "" });
  }),
  $(document).ready(function () {
    $("#atnivirus .bottom_open").click(function () {
      $(".bottom_desk").fadeToggle(200);
    }),
      $("#atnivirus .bottom_close_box").click(function () {
        $(".bottom_desk").fadeOut(200);
      }),
      $("#atnivirus_type .bottom_open").click(function () {
        $(".bottom_desk").fadeToggle(200);
      }),
      $("#atnivirus_type .bottom_close_box").click(function () {
        $(".bottom_desk").fadeOut(200);
      }),
      $("#atnivirus_type .dop_info_open").click(function () {
        var e = $(this).attr("data-ID");
        $(".product_norm .av_" + e).toggleClass("open"),
          $(".dop_info_text.av_" + e).fadeToggle(200);
      }),
      $("#atnivirus_type .dop_info_bottom_close_box").click(function () {
        var e = $(this).attr("data-ID");
        $(".product_norm .av_" + e).removeClass("open"),
          $(".dop_info_text.av_" + e).fadeOut(200);
      }),
      $("#atnivirus_type .info_text_large_botton_box").click(function () {
        $(".description_full").fadeToggle(200);
      }),
      $("#atnivirus_type .description_full_bottom_close_box").click(
        function () {
          $(".description_full").fadeOut(200);
        }
      ),
      $("#atnivirus_for_tarif .dop_info_open_package").click(function () {
        $("#atnivirus_for_tarif .bottom").toggleClass("open");
      }),
      $("#atnivirus_for_tarif .dop_info_bottom_close_box_package").click(
        function () {
          $("#atnivirus_for_tarif .bottom").toggleClass("open");
        }
      );
  }),
  $(document).ready(function () {
    with ((Banner = new Function()))
      (prototype.items = []),
        (prototype.cur = 0),
        (prototype.cur_prev = 0),
        (prototype.position = 0),
        (prototype.timer = !1),
        (prototype.animate = 500),
        (prototype.do_it = !0),
        (prototype.init = function () {
          var e = new Date(),
            t = e.getDate(),
            n = e.getHours();
          function i() {
            banner.bind_slide_a(),
              $(window).width() >= 1024
                ? banner.bind_slide_a()
                : banner.unbind_slide_a();
          }
          if (
            ((items =
              1 == t && n <= 15
                ? $("#banner #slider .avans")
                : $("#banner #slider .today")),
            items.length &&
              ($("#banner").removeClass("hidden"), $("#banner").show()),
            i(),
            $(window).resize(function () {
              i();
            }),
            items.length <= 1)
          )
            return (
              $("#banner #btn_right,#banner #btn_left").css(
                "visibility",
                "hidden"
              ),
              $(items).css("display", "block"),
              !1
            );
          var o = this;
          $("#banner #btn_left").click(function () {
            o.prev();
          }),
            $("#banner #btn_right").click(function () {
              o.next();
            }),
            (this.items = this.shuffle(items)),
            this.set(this.items[0], !1),
            $("#banner .sknt-ctrl").click(function (e) {
              return (
                !!o.do_it &&
                ((o.cur_prev = o.cur),
                (o.cur = $(this).attr("rel")),
                o.cur_prev || (o.cur_prev = 0),
                o.cur != o.cur_prev &&
                  void (o.cur > o.cur_prev
                    ? o.set(o.items[o.cur], "next")
                    : o.set(o.items[o.cur], "prev")))
              );
            });
          var r = 0,
            a = 0,
            s = 0,
            l = 0;
          $(this.items).on("movestart", function (e) {
            ((e.distX > e.distY && e.distX < -e.distY) ||
              (e.distX < e.distY && e.distX > -e.distY)) &&
              e.preventDefault(),
              (r = ($("#banner #slider").width() * banner.position) / 100);
          }),
            $(this.items).on("move", function (e) {
              if (!banner.do_it) return !1;
              clearTimeout(banner.timer),
                (banner.timer = !1),
                (a = r + e.distX),
                banner.cur > 0 &&
                  banner.cur < banner.items.length - 1 &&
                  ((s = banner.cur + 1), (l = banner.cur - 1)),
                0 == banner.cur && ((s = 1), (l = banner.items.length - 1)),
                banner.cur == banner.items.length - 1 &&
                  ((s = 0), (l = banner.cur - 1)),
                e.distX > 0
                  ? ($(banner.items[s]).hide(),
                    $(banner.items[l]).css(
                      "left",
                      -1 * banner.position - 100 + "%"
                    ),
                    $(banner.items[l]).show())
                  : ($(banner.items[l]).hide(),
                    $(banner.items[s]).css(
                      "left",
                      -1 * banner.position + 100 + "%"
                    ),
                    $(banner.items[s]).show()),
                $("#banner #slider").css("transition-duration", "0ms"),
                $("#banner #slider").css("-webkit-transition-duration", "0ms"),
                $("#banner #slider").css(
                  "transform",
                  "translateX(" + a + "px)"
                ),
                $("#banner #slider").css(
                  "-webkit-transform",
                  "translateX(" + a + "px)"
                );
            }),
            $(this.items).on("swipeleft", function (e) {
              e.distX < -60
                ? banner.next()
                : ((banner.do_it = !1),
                  $("#banner #slider").css(
                    "transition-duration",
                    banner.animate + "ms"
                  ),
                  $("#banner #slider").css(
                    "-webkit-transition-duration",
                    banner.animate + "ms"
                  ),
                  $("#banner #slider").css(
                    "transform",
                    "translateX(" + r + "px)"
                  ),
                  $("#banner #slider").css(
                    "-webkit-transform",
                    "translateX(" + r + "px)"
                  ),
                  setTimeout(function () {
                    (banner.do_it = !0), banner.set_timer(1e4);
                  }, banner.animate));
            }),
            $(this.items).on("swiperight", function (e) {
              e.distX > 60
                ? banner.prev()
                : ((banner.do_it = !1),
                  $("#banner #slider").css(
                    "transition-duration",
                    banner.animate + "ms"
                  ),
                  $("#banner #slider").css(
                    "-webkit-transition-duration",
                    banner.animate + "ms"
                  ),
                  $("#banner #slider").css(
                    "transform",
                    "translateX(" + r + "px)"
                  ),
                  $("#banner #slider").css(
                    "-webkit-transform",
                    "translateX(" + r + "px)"
                  ),
                  setTimeout(function () {
                    (banner.do_it = !0), banner.set_timer(1e4);
                  }, banner.animate));
            });
        }),
        (prototype.next = function () {
          if (!this.do_it) return !1;
          (this.cur_prev = this.cur),
            this.cur < this.items.length - 1 ? this.cur++ : (this.cur = 0),
            this.set(this.items[this.cur], "next");
        }),
        (prototype.prev = function () {
          if (!this.do_it) return !1;
          (this.cur_prev = this.cur),
            0 == this.cur ? (this.cur = this.items.length - 1) : this.cur--,
            this.set(this.items[this.cur], "prev");
        }),
        (prototype.set = function (e, t) {
          (this.do_it = !1),
            (item_obj = $(this.items[this.cur])),
            (item_prev_obj = $(this.items[this.cur_prev])),
            "next" == t &&
              ((this.position -= 100),
              item_obj.css("left", -1 * this.position + "%"),
              item_obj.show(),
              $("#banner #slider").css(
                "transition-duration",
                this.animate + "ms"
              ),
              $("#banner #slider").css(
                "-webkit-transition-duration",
                this.animate + "ms"
              ),
              $("#banner #slider").css(
                "transform",
                "translateX(" + this.position + "%)"
              ),
              $("#banner #slider").css(
                "-webkit-transform",
                "translateX(" + this.position + "%)"
              ),
              setTimeout(function () {
                item_prev_obj.hide();
              }, this.animate)),
            "prev" == t &&
              ((this.position += 100),
              item_obj.css("left", -1 * this.position + "%"),
              item_obj.show(),
              $("#banner #slider").css(
                "transition-duration",
                this.animate + "ms"
              ),
              $("#banner #slider").css(
                "-webkit-transition-duration",
                this.animate + "ms"
              ),
              $("#banner #slider").css(
                "transform",
                "translateX(" + this.position + "%)"
              ),
              $("#banner #slider").css(
                "-webkit-transform",
                "translateX(" + this.position + "%)"
              ),
              setTimeout(function () {
                item_prev_obj.hide();
              }, this.animate)),
            t || (item_obj.show(), (banner.do_it = !0));
          var n = this;
          setTimeout(function () {
            0 == n.cur
              ? ((n.position = 0),
                (n.cur_prev = 0),
                $(n.items[0]).css("left", "0%"),
                $(n.items[0]).show(),
                $("#banner #slider").css("transition-duration", "0ms"),
                $("#banner #slider").css("-webkit-transition-duration", "0ms"),
                $("#banner #slider").css(
                  "transform",
                  "translateX(" + n.position + "%)"
                ),
                $("#banner #slider").css(
                  "-webkit-transform",
                  "translateX(" + n.position + "%)"
                ),
                setTimeout(function () {
                  n.do_it = !0;
                }, 100))
              : (n.do_it = !0);
          }, this.animate),
            this.timer && (clearTimeout(this.timer), (this.timer = !1)),
            (th = this);
          var i = item_obj.children(".slide_a").attr("data-timer");
          !i || i < 1 ? (i = "10000") : (i += "000"), this.set_timer(i);
        }),
        (prototype.set_timer = function (e) {
          this.timer = setTimeout(function () {
            banner.next();
          }, e);
        }),
        (prototype.shuffle = function (e) {
          for (
            var t, n, i = e.length;
            i;
            t = parseInt(Math.random() * i), n = e[--i], e[i] = e[t], e[t] = n
          );
          return e;
        }),
        (prototype.do_not_click = function () {
          return !1;
        }),
        (prototype.bind_slide_a = function () {
          $("#banner .slide_a").css("cursor", "default"),
            $("#banner .slide_a").bind("click", this.do_not_click);
        }),
        (prototype.unbind_slide_a = function () {
          $("#banner .slide_a").each(function (e, t) {
            $(t).attr("href") &&
              ($(t).css("cursor", "pointer"),
              $(t).unbind("click", this.do_not_click));
          });
        });
    var banner = new Banner();
    banner.init();
  }),
  $(document).ready(function () {
    with ((banner_line = new Function()))
      (prototype.items = []),
        (prototype.cur = 0),
        (prototype.max = 0),
        (prototype.position = 0),
        (prototype.this_obj = !0),
        (prototype.init = function (e) {
          (this.this_obj = e),
            (this.items = $(this.this_obj).find(".slide_one")),
            (this.max = this.items.length),
            this.resize();
          var t = this;
          $(window).resize(function () {
            t.resize();
          }),
            $(this.this_obj + " .button_left").click(function () {
              t.prev();
            }),
            $(this.this_obj + " .button_right").click(function () {
              t.next();
            });
          var n = 0,
            i = 0;
          $(this.this_obj).on("movestart", function (e) {
            ((e.distX > e.distY && e.distX < -e.distY) ||
              (e.distX < e.distY && e.distX > -e.distY)) &&
              e.preventDefault(),
              (n = ($(t.this_obj + " .slider").width() * t.position) / 100);
          }),
            $(this.this_obj).on("move", function (e) {
              i = n + e.distX;
              var o = t.cur + Math.abs(t.cur * t.max);
              o || (o = t.max),
                e.distX >= 0
                  ? ($(window).innerWidth(!0)[0].innerWidth >= 1024
                      ? ($(t.items[(o - 1) % t.max]).css(
                          "left",
                          ((t.cur - 1) / 3) * 100 + "%"
                        ),
                        $(t.items[(o - 2) % t.max]).css(
                          "left",
                          ((t.cur - 2) / 3) * 100 + "%"
                        ),
                        $(t.items[(o - 3) % t.max]).css(
                          "left",
                          ((t.cur - 3) / 3) * 100 + "%"
                        ))
                      : ($(t.items[(o - 1) % t.max]).css(
                          "left",
                          ((t.cur - 1) / 2) * 100 + "%"
                        ),
                        $(t.items[(o - 2) % t.max]).css(
                          "left",
                          ((t.cur - 2) / 2) * 100 + "%"
                        ),
                        $(t.items[(o - 3) % t.max]).css(
                          "left",
                          ((t.cur - 3) / 2) * 100 + "%"
                        )),
                    $(t.items[(o - 1) % t.max]).show(),
                    $(t.items[(o - 2) % t.max]).show(),
                    $(t.items[(o - 3) % t.max]).show())
                  : ($(window).innerWidth(!0)[0].innerWidth >= 1024
                      ? ($(t.items[(o + 1) % t.max]).css(
                          "left",
                          ((t.cur + 1) / 3) * 100 + "%"
                        ),
                        $(t.items[(o + 2) % t.max]).css(
                          "left",
                          ((t.cur + 2) / 3) * 100 + "%"
                        ),
                        $(t.items[(o + 3) % t.max]).css(
                          "left",
                          ((t.cur + 3) / 3) * 100 + "%"
                        ),
                        $(t.items[(o + 4) % t.max]).css(
                          "left",
                          ((t.cur + 4) / 3) * 100 + "%"
                        ),
                        $(t.items[(o + 5) % t.max]).css(
                          "left",
                          ((t.cur + 5) / 3) * 100 + "%"
                        ))
                      : ($(t.items[(o + 1) % t.max]).css(
                          "left",
                          ((t.cur + 1) / 2) * 100 + "%"
                        ),
                        $(t.items[(o + 2) % t.max]).css(
                          "left",
                          ((t.cur + 2) / 2) * 100 + "%"
                        ),
                        $(t.items[(o + 3) % t.max]).css(
                          "left",
                          ((t.cur + 3) / 2) * 100 + "%"
                        ),
                        $(t.items[(o + 4) % t.max]).css(
                          "left",
                          ((t.cur + 4) / 2) * 100 + "%"
                        ),
                        $(t.items[(o + 5) % t.max]).css(
                          "left",
                          ((t.cur + 5) / 2) * 100 + "%"
                        )),
                    $(t.items[(o + 1) % t.max]).show(),
                    $(t.items[(o + 2) % t.max]).show(),
                    $(t.items[(o + 3) % t.max]).show(),
                    $(t.items[(o + 4) % t.max]).show(),
                    $(t.items[(o + 5) % t.max]).show()),
                $(t.this_obj + " .slider_box").css(
                  "transition-duration",
                  "0ms"
                ),
                $(t.this_obj + " .slider_box").css(
                  "-webkit-transition-duration",
                  "0ms"
                ),
                $(t.this_obj + " .slider_box").css(
                  "transform",
                  "translateX(" + i + "px)"
                ),
                $(t.this_obj + " .slider_box").css(
                  "-webkit-transform",
                  "translateX(" + i + "px)"
                );
            }),
            $(this.this_obj).on("swipeleft", function (e) {
              e.distX < -60
                ? t.next()
                : ($(t.this_obj + " .slider_box").css(
                    "transition-duration",
                    "500ms"
                  ),
                  $(t.this_obj + " .slider_box").css(
                    "-webkit-transition-duration",
                    "500ms"
                  ),
                  $(t.this_obj + " .slider_box").css(
                    "transform",
                    "translateX(" + n + "px)"
                  ),
                  $(t.this_obj + " .slider_box").css(
                    "-webkit-transform",
                    "translateX(" + n + "px)"
                  ));
            }),
            $(this.this_obj).on("swiperight", function (e) {
              e.distX > 60
                ? t.prev()
                : ($(t.this_obj + " .slider_box").css(
                    "transition-duration",
                    "500ms"
                  ),
                  $(t.this_obj + " .slider_box").css(
                    "-webkit-transition-duration",
                    "500ms"
                  ),
                  $(t.this_obj + " .slider_box").css(
                    "transform",
                    "translateX(" + n + "px)"
                  ),
                  $(t.this_obj + " .slider_box").css(
                    "-webkit-transform",
                    "translateX(" + n + "px)"
                  ));
            });
        }),
        (prototype.next = function () {
          this.cur++, this.resize();
        }),
        (prototype.prev = function () {
          this.cur--, this.resize();
        }),
        (prototype.resize = function () {
          var e = this.cur + Math.abs(this.cur * this.max);
          $(this.items).hide(),
            $(window).innerWidth(!0)[0].innerWidth >= 1024
              ? ((this.position = (this.cur / 3) * 100 * -1),
                $(this.items[(e - 1) % this.max]).css(
                  "left",
                  ((this.cur - 1) / 3) * 100 + "%"
                ),
                $(this.items[e % this.max]).css(
                  "left",
                  (this.cur / 3) * 100 + "%"
                ),
                $(this.items[(e + 1) % this.max]).css(
                  "left",
                  ((this.cur + 1) / 3) * 100 + "%"
                ),
                $(this.items[(e + 2) % this.max]).css(
                  "left",
                  ((this.cur + 2) / 3) * 100 + "%"
                ),
                $(this.items[(e + 3) % this.max]).css(
                  "left",
                  ((this.cur + 3) / 3) * 100 + "%"
                ))
              : ((this.position = (this.cur / 2) * 100 * -1),
                $(this.items[(e - 1) % this.max]).css(
                  "left",
                  ((this.cur - 1) / 2) * 100 + "%"
                ),
                $(this.items[e % this.max]).css(
                  "left",
                  (this.cur / 2) * 100 + "%"
                ),
                $(this.items[(e + 1) % this.max]).css(
                  "left",
                  ((this.cur + 1) / 2) * 100 + "%"
                ),
                $(this.items[(e + 2) % this.max]).css(
                  "left",
                  ((this.cur + 2) / 2) * 100 + "%"
                ),
                $(this.items[(e + 3) % this.max]).css(
                  "left",
                  ((this.cur + 3) / 2) * 100 + "%"
                )),
            $(this.items[(e - 1) % this.max]).show(),
            $(this.items[e % this.max]).show(),
            $(this.items[(e + 1) % this.max]).show(),
            $(this.items[(e + 2) % this.max]).show(),
            $(this.items[(e + 3) % this.max]).show(),
            $(this.this_obj + " .slider_box").css(
              "transition-duration",
              "500ms"
            ),
            $(this.this_obj + " .slider_box").css(
              "-webkit-transition-duration",
              "500ms"
            ),
            $(this.this_obj + " .slider_box").css(
              "transform",
              "translateX(" + this.position + "%)"
            ),
            $(this.this_obj + " .slider_box").css(
              "-webkit-transform",
              "translateX(" + this.position + "%)"
            ),
            $(this.items[e % this.max]).css("position", "relative"),
            $(this.items[(e - 1) % this.max]).css("position", "absolute"),
            $(this.items[(e + 1) % this.max]).css("position", "absolute"),
            $(this.items[(e + 2) % this.max]).css("position", "absolute"),
            $(this.items[(e + 3) % this.max]).css("position", "absolute");
        });
    var banner_package = new banner_line();
    banner_package.init("#internet_block_package"),
      $("#internet_block_package .block_random_view_box").addClass(
        "first_slider_random"
      );
    var banner_pricelist = new banner_line();
    banner_pricelist.init("#internet_block_dev_pricelist");
    var banner_av = new banner_line();
    banner_av.init("#internet_block_av");
    var banner_tarif_options = new banner_line();
    banner_tarif_options.init("#internet_block_tarif_options");
  }),
  $(document).ready(function () {
    $(".block_transparent .text_full_open_box").click(function () {
      $(".text_full").fadeToggle(200);
    }),
      $(".block_transparent .text_full_close_box").click(function () {
        $(".text_full").fadeOut(200);
      });
  }),
  $(document).ready(function () {
    $(".be_form .info_text_open_no_large_box").click(function () {
      $(".info_text").fadeToggle(200);
    }),
      $(".be_form .info_text_close_no_large_box").click(function () {
        $(".info_text").fadeOut(200);
      }),
      $(".be_form .ur_sorder_info_bottom_box").click(function () {
        $(".info_text_desk").fadeToggle(200);
      }),
      $(".be_form .info_text_desk_close_box").click(function () {
        $(".info_text_desk").fadeOut(200);
      });
    var e = 0;
    function t(t) {
      "38" == t.keyCode &&
        (function () {
          if (e > 0)
            if (
              $(".address_help_one").is(
                '.address_help_one[data-val="' + e + '"]'
              )
            ) {
              var t = $('.address_help_one[data-val="' + e + '"]').prev(
                ".address_help_one"
              );
              $(t).is(".address_help_one") && (e = $(t).attr("data-val"));
            } else {
              var n = $(".address_help_one").first().attr("data-val");
              e = $(".address_help_one").is(
                '.address_help_one[data-val="' + n + '"]'
              )
                ? n
                : 0;
            }
          else {
            var n = $(".address_help_one").first().attr("data-val");
            e = $(".address_help_one").is(
              '.address_help_one[data-val="' + n + '"]'
            )
              ? n
              : 0;
          }
        })(),
        "40" == t.keyCode &&
          (function () {
            if (e > 0)
              if (
                $(".address_help_one").is(
                  '.address_help_one[data-val="' + e + '"]'
                )
              ) {
                var t = $('.address_help_one[data-val="' + e + '"]').next(
                  ".address_help_one"
                );
                $(t).is(".address_help_one") && (e = $(t).attr("data-val"));
              } else {
                var n = $(".address_help_one").first().attr("data-val");
                e = $(".address_help_one").is(
                  '.address_help_one[data-val="' + n + '"]'
                )
                  ? n
                  : 0;
              }
            else {
              var n = $(".address_help_one").first().attr("data-val");
              e = $(".address_help_one").is(
                '.address_help_one[data-val="' + n + '"]'
              )
                ? n
                : 0;
            }
          })(),
        "13" == t.keyCode &&
          (function () {
            e > 0 &&
              $(".address_help_one").is(
                '.address_help_one[data-val="' + e + '"]'
              ) &&
              ($('.address_help_one[data-val="' + e + '"]').click(),
              $(".be_form #address").focusout());
            e = 0;
          })(),
        e > 0 &&
          ($(".address_help_one").removeClass("color_g"),
          $('.address_help_one[data-val="' + e + '"]').addClass("color_g"));
    }
    $(".be_form #address").keyup(function (e) {
      if ("38" == e.keyCode || "40" == e.keyCode || "13" == e.keyCode)
        return t(e), !1;
      var n = $(this).val();
      if ((n = encodeURIComponent(n)).length >= 3) {
        var i = "?cat=sorder&action=get_address_ajax&street=" + n;
        $.get(i, function (n) {
          $(".address_help").html(n), t(e), $(".address_help").fadeIn();
        });
      } else $(".address_help").html(""), $(".address_help").fadeOut();
    }),
      $(document).on("click", ".be_form .address_help_one", function () {
        var t = $(this).text();
        (e = $(this).attr("data-val")),
          $(".address_help_one").removeClass("color_g"),
          $('.address_help_one[data-val="' + e + '"]').addClass("color_g"),
          $(".be_form #address").val(t + ", "),
          $(".address_help").text(""),
          $(".be_form #address").focus();
      }),
      $(document).on("focusin", ".be_form #address", function () {
        $(".address_help").text() && $(".address_help").fadeIn();
      }),
      $(document).on("focusout", ".be_form #address", function () {
        $(".address_help").fadeOut();
      }),
      $("#ur_op_form").keydown(function (e) {
        if (13 == e.keyCode) return e.preventDefault(), !1;
      }),
      $("#ur_sorder_form").keydown(function (e) {
        if (13 == e.keyCode) return e.preventDefault(), !1;
      }),
      $(document).on("click", "#file_box_form .file_box_button", function () {
        $("#file").click();
      }),
      $(document).on("change", "#file", function () {
        var e = $("#file").val();
        $("#file_box_form .file_box_button").addClass("add"),
          $("#file_box_form .file_box_button").text("Изменить резюме"),
          $("#file_box_form .file_box_text").text(e);
      }),
      phone_maks(".be_form #phone"),
      $(".be_form .top_text_line_one_img").on("mouseover", function () {
        $(this).siblings(".top_text_line_one_title").show();
      }),
      $(".be_form .top_text_line_one_img").on("mouseout", function () {
        $(this).siblings(".top_text_line_one_title").hide();
      }),
      $("#default_vacancies_form").submit(function () {
        if (!$("#default_vacancies_form .person_rules_input").prop("checked"))
          return alert("Необходимо согласиться с условиями."), !1;
      });
  }),
  $(document).ready(function () {
    $("#default_form2_div .hide_button").click(function () {
      $("#default_form2_div .hide_button").toggleClass("open"),
        $("#default_form2_div .hide_button").hasClass("open")
          ? ($("#default_form2_div .default_form2_div_text_content").addClass(
              "open"
            ),
            $("#default_form2_div .hide_text").addClass("open"))
          : ($(
              "#default_form2_div .default_form2_div_text_content"
            ).removeClass("open"),
            $("#default_form2_div .hide_text").removeClass("open"));
    });
  }),
  $(document).ready(function () {
    $(".promo_with_desk .info_text_open_no_large_box").click(function () {
      $(".info_text").fadeToggle(200);
    }),
      $(".promo_with_desk .info_text_close_no_large_box").click(function () {
        $(".info_text").fadeOut(200);
      });
  }),
  $(document).ready(function () {
    $("#faq .show_faq").click(function () {
      $("#faq .faq_one").addClass("sel"), $("#faq .faq_one_desk").fadeIn(200);
    }),
      $("#faq .faq_one_title").click(function () {
        $(this).parent(".faq_one").hasClass("sel")
          ? ($("#faq .faq_one").removeClass("sel"),
            $("#faq .faq_one_desk").fadeOut(200))
          : ($("#faq .faq_one").removeClass("sel"),
            $("#faq .faq_one_desk").fadeOut(200),
            $(this).parent(".faq_one").addClass("sel"),
            $(this).siblings(".faq_one_desk").fadeIn(200));
      }),
      $("#sprosite_d .show_faq").click(function () {
        $("#sprosite_d .faq_one").addClass("sel"),
          $("#sprosite_d .faq_one_desk").fadeIn(200);
      }),
      $("#sprosite_d .faq_one_title").click(function () {
        $(this).parent(".faq_one").hasClass("sel")
          ? ($("#sprosite_d .faq_one").removeClass("sel"),
            $("#sprosite_d .faq_one_desk").fadeOut(200))
          : ($("#sprosite_d .faq_one").removeClass("sel"),
            $("#sprosite_d .faq_one_desk").fadeOut(200),
            $(this).parent(".faq_one").addClass("sel"),
            $(this).siblings(".faq_one_desk").fadeIn(200));
      }),
      $("#sprosite_d .show_faq").click(function () {
        $("#sprosite_d .faq_one").addClass("sel"),
          $("#sprosite_d .faq_one_desk").fadeIn(200);
      });
  }),
  $(document).ready(function () {
    function e(e) {
      var t = $(e).parents(".like_box").attr("data-like"),
        n = $(e).parents(".like_box").find(".count"),
        i = "?cat=like&action=add_like&like_id=" + t;
      $.get(i, function (e) {
        if (1 == e) {
          var t = $(n).text();
          (t = parseInt(t) + 1),
            $(n).fadeOut(200),
            setTimeout(function () {
              $(n).text(t),
                $(n).fadeIn(),
                $(n).parent(".like").addClass("like_add");
            }, 200);
        }
      });
    }
    $(".like").click(function () {
      e(this);
    }),
      $(".social_links_icon").click(function () {
        e(this);
      });
  }),
  $(document).ready(function () {
    $("*").is("#yandex_map") &&
      $.getScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU", function () {
        var e, t;
        ymaps.ready(function () {
          (e = new ymaps.Map("yandex_map", {
            center: [60.031751, 30.284966],
            zoom: 13,
          })),
            (t = new ymaps.Placemark([60.031751, 30.284966], {
              hintContent: "Репищева улица, 20",
            })),
            e.geoObjects.add(t);
        });
      });
  }),
  $(document).ready(function () {
    $("#macximum .price_help_p").click(function () {
      var e = $("#macximum .max_footer").offset().top;
      $("html, body").animate({ scrollTop: e }, 500);
    }),
      $("#macximum .responsibility_zone_info_show").click(function () {
        if ($(window).width() >= 640) return !1;
        $("#macximum .responsibility_zone_info_content").slideToggle(),
          $(
            "#macximum .responsibility_zone_info_show .responsibility_zone_info_show_img"
          ).toggleClass("open");
      }),
      $("#macximum .responsibility_zone_info_close").click(function () {
        if ($(window).width() >= 640) return !1;
        $("#macximum .responsibility_zone_info_content").slideUp(),
          $(
            "#macximum .responsibility_zone_info_show .responsibility_zone_info_show_img"
          ).removeClass("open");
      }),
      $("#macximum .max_block_show").click(function () {
        if ($(window).width() >= 640) return !1;
        $(this).parents(".max_block").children(".max_block_info").slideToggle(),
          $(this)
            .parents(".max_block")
            .children(".max_block_top")
            .children(".max_block_show")
            .children(".max_block_show_img")
            .toggleClass("open");
      }),
      $("#macximum .max_block_img").click(function () {
        if ($(window).width() >= 640) return !1;
        $(this).parents(".max_block").children(".max_block_info").slideToggle(),
          $(this)
            .parents(".max_block")
            .children(".max_block_top")
            .children(".max_block_show")
            .children(".max_block_show_img")
            .toggleClass("open");
      }),
      $("#macximum .max_block_info_close").click(function () {
        if ($(window).width() >= 640) return !1;
        $(this).parents(".max_block_info").slideUp(),
          $(this)
            .parents(".max_block")
            .children(".max_block_top")
            .children(".max_block_show")
            .children(".max_block_show_img")
            .removeClass("open");
      }),
      $("#macximum .help_one_1").click(function () {
        var e = $("#macximum .max_block_1").offset().top;
        $("html, body").animate({ scrollTop: e }, 500);
      }),
      $("#macximum .help_one_2").click(function () {
        var e = $("#macximum .max_block_2").offset().top;
        $("html, body").animate({ scrollTop: e }, 500);
      }),
      $("#macximum .help_one_3").click(function () {
        var e = $("#macximum .max_block_3").offset().top;
        $("html, body").animate({ scrollTop: e }, 500);
      }),
      $("#macximum .youtube_pre").on("click", function () {
        $("#macximum .youtube_pre").fadeOut(200);
        var e = $("#macximum .frame"),
          t = e.attr("src");
        e.attr("src", t + "&autoplay=1");
      });
  }),
  $(document).ready(function () {
    0 == $("#main_line menu li.sel").length &&
      $('#main_line menu li[data-id="70"]').addClass("sel"),
      0 == $("header .in_menu nav.sel").length &&
        $('header .in_menu nav[data-parent="70"]').addClass("sel"),
      $(".right_menu .up_div li").click(function () {
        $(this).siblings().removeClass("sel"), $(this).addClass("sel");
        var e = $(this).attr("data-id");
        $(".right_menu .sub_menu").removeClass("sel"),
          $('.right_menu .sub_menu[data-parent="' + e + '"]').addClass("sel");
      }),
      $(".right_menu .sub_menu li").click(function () {
        $(this).toggleClass("open"), $(this).children(".deep").slideToggle(500);
      }),
      0 == $(".right_menu .up_div li.sel").length &&
        ($('.right_menu .up_div li[data-id="70"]').addClass("sel"),
        $('.right_menu .sub_menu[data-parent="70"]').addClass("sel")),
      console.log("Любишь заглядывать в консоль? ахаха прекрати.");
  }),
  $(document).ready(function () {
    function e(e, t) {
      return (
        !($("#canvas_wrap").width() > 1023) &&
        "YMAPS" != e.target.tagName &&
        (e.target.className.indexOf("touch_slider") + 1
          ? (("none" != t && "left" != t) || $("#btn_right").click(), !1)
          : (e.preventDefault(),
            $("#canvas_wrap").addClass("open"),
            $("#touch_menu_btn img").attr("src", "i/gulp/arrow_g.svg"),
            void setTimeout(function () {
              $("#hide_menu").css("background", "rgba(255, 255, 255, 0.2)");
            }, 500)))
      );
    }
    function t(e, t) {
      return (
        !($("#canvas_wrap").width() > 1023) &&
        (e.target.className.indexOf("touch_slider") + 1
          ? (("none" != t && "right" != t) || $("#btn_left").click(), !1)
          : (e.preventDefault(),
            $("#canvas_wrap").removeClass("open"),
            void $("#touch_menu_btn img").attr("src", "i/gulp/menu_g.svg")))
      );
    }
    $("#touch_menu_btn").on("click", function (t) {
      e(t), $("#canvas_wrap").width();
    }),
      $("#hide_menu").on("click", function (e) {
        return t(e), !1;
      });
    var n = {},
      i = {},
      o = "none",
      r = !1,
      a = !1;
    function s() {
      var e = window.pageYOffset,
        t = $(window).height();
      (e + t >
        $(".right_menu .up_div").height() +
          $(".right_menu .sub_menu.sel").height() +
          50) &
      (e > 0)
        ? $(".right_menu_up_only").css("top", e + t)
        : $(".right_menu_up_only").css("top", "100%");
    }
    document.addEventListener(
      "touchstart",
      function (e) {
        (o = "none"),
          (a = !1),
          (n.x = e.changedTouches[0].pageX),
          (n.y = e.changedTouches[0].pageY);
      },
      !1
    ),
      document.addEventListener(
        "touchmove",
        function (s) {
          (i.x = s.changedTouches[0].pageX), (i.y = s.changedTouches[0].pageY);
          var l = Math.abs(n.x - i.x),
            u = 3 * Math.abs(n.y - i.y);
          "yes" == a &&
            s.target.className.indexOf("touch_slider") + 1 &&
            s.preventDefault(),
            l > 40 &&
              l > u &&
              (a || (a = "yes"),
              "yes" != a ||
                r ||
                ((r = !0),
                i.x < n.x ? (e(s, o), (o = "right")) : (t(s, o), (o = "left")),
                (n.x = i.x),
                (n.y = i.y),
                setTimeout(function () {
                  r = !1;
                }, 500))),
            (l > 40 || u > 20) && l < u && (a || (a = "no")),
            "yes" == a && s.preventDefault();
        },
        !1
      ),
      s(),
      $(window).scroll(function () {
        s();
      }),
      $(window).resize(function () {
        s();
      }),
      $(".right_menu_up_only").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
      }),
      $(".right_menu .up_div li").click(function () {
        s();
      });
  }),
  $(document).ready(function () {
    function e() {
      var e = $("header").outerHeight();
      "none" != $("#banner").css("display") && (e += $("#banner").height()),
        $(window).scrollTop() > e
          ? $("#path").addClass("pos_fixed")
          : $("#path").removeClass("pos_fixed");
    }
    e(),
      $(window).scroll(function () {
        e();
      }),
      $(window).resize(function () {
        e();
      }),
      $("#path .only_up").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
      });
  }),
  $(document).ready(function () {
    function e() {
      var e = document.form1.amount.value,
        t = document.form1.user_id.value,
        n = /^[0-9]{3,6}$/i,
        i = /(^[0-9]{1,5}$)|(^[0-9]{1,5}[.][0-9]{1,2}$)/i;
      n.test(t)
        ? (document.form1.user_id.style.backgroundColor = "#afffaf")
        : (document.form1.user_id.style.backgroundColor = "#ff9f9f"),
        !i.test(e) || parseFloat(e) < 10 || parseFloat(e) > 1e4
          ? (document.form1.amount.style.backgroundColor = "#ff9f9f")
          : (document.form1.amount.style.backgroundColor = "#afffaf"),
        n.test(t) && i.test(e) && parseFloat(e) >= 10 && parseFloat(e) <= 1e4
          ? (document.form1.button.disabled = !1)
          : (document.form1.button.disabled = !0);
    }
    $(".pay_gpb_content #user_id").keyup(function () {
      e();
    }),
      $(".pay_gpb_content #amount").keyup(function () {
        e();
      }),
      $("#autopay_page .dop_info_open").click(function () {
        $("#autopay_page .bottom").toggleClass("open");
      }),
      $("#autopay_page .dop_info_bottom_close_box").click(function () {
        $("#autopay_page .bottom").removeClass("open");
      }),
      $("#avans_page .dop_info_open").click(function () {
        $("#avans_page .bottom").toggleClass("open");
      }),
      $("#avans_page .dop_info_bottom_close_box").click(function () {
        $("#avans_page .bottom").removeClass("open");
      });
  }),
  $(document).ready(function () {
    var e, t, n, i, o, r;
    (e = window),
      (t = document),
      (n = "script"),
      e.fbq ||
        ((i = e.fbq = function () {
          i.callMethod
            ? i.callMethod.apply(i, arguments)
            : i.queue.push(arguments);
        }),
        e._fbq || (e._fbq = i),
        (i.push = i),
        (i.loaded = !0),
        (i.version = "2.0"),
        (i.queue = []),
        ((o = t.createElement(n)).async = !0),
        (o.src = "https://connect.facebook.net/en_US/fbevents.js"),
        (r = t.getElementsByTagName(n)[0]).parentNode.insertBefore(o, r)),
      fbq("init", "917690818594741"),
      fbq("track", "PageView"),
      window.location.href.includes("sorder/success.htm") &&
        fbq("track", "Lead");
  }),
  $(document).ready(function () {
    function e() {
      $("#popap").fadeOut();
    }
    function t() {
      $("#popap2").fadeOut();
    }
    $("#tarif .content_center .title").click(function () {
      $(window).resize(),
        $("html, body").animate({ scrollTop: 0 }, 500),
        $("#popap.abo").fadeIn();
    }),
      $(window).resize(function () {
        var e = $("header").outerHeight(),
          t = $("#banner").height(),
          n = $("#popap").outerHeight(),
          i = $("#popap2").outerHeight();
        "none" == $("#banner").css("display") && (t = 0),
          $("#popap").css("top", -e - t),
          $("#popap").css("height", n + e + t),
          $("#popap2").css("top", -e - t),
          $("#popap2").css("height", i + e + t);
      }),
      $("#popap .popap_bg").click(function () {
        e();
      }),
      $("#popap .close_box").click(function () {
        e();
      }),
      $("#popap .close").click(function () {
        e();
      }),
      $("#default_vacancies_form .person_rules .show_text").click(function () {
        return (
          $(window).resize(),
          $("html, body").animate({ scrollTop: 0 }, 500),
          $("#popap").fadeIn(),
          !1
        );
      }),
      $("#tarif .ruls_pay").click(function () {
        $(window).resize(),
          $("html, body").animate({ scrollTop: 0 }, 500),
          $("#popap2").fadeIn();
      }),
      $("#popap2 .popap_bg").click(function () {
        t();
      }),
      $("#popap2 .close_box").click(function () {
        t();
      }),
      $("#popap2 .close").click(function () {
        t();
      });
  }),
  $(document).ready(function () {
    $("#price_list .desc_full_open_box").click(function () {
      $(".desc_full").fadeToggle(200);
    }),
      $("#price_list .desc_full_close_box").click(function () {
        $(".desc_full").fadeOut(200);
      }),
      $("#price_list_device .dop_info_open_box").click(function () {
        $(".bottom").toggleClass("open"), $(".dop_info_desk").fadeToggle(200);
      }),
      $("#price_list_device .dop_info_close_box").click(function () {
        $(".bottom").removeClass("open"), $(".dop_info_desk").fadeOut(200);
      });
  }),
  (window.onload = function () {
    function e(e) {
      var t = document.cookie.match(
        new RegExp(
          "(?:^|; )" +
            e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
            "=([^;]*)"
        )
      );
      return t ? decodeURIComponent(t[1]) : 0;
    }
    function t() {
      $(".promo_popap").fadeOut();
    }
    $(".promo_popap .promo_popap_bg").click(function () {
      t();
    }),
      $(".promo_popap .close_box").click(function () {
        t();
      }),
      $(".promo_popap .close").click(function () {
        t();
      }),
      $(".promo_popap").each(function (t) {
        var n = $(this).attr("data-id"),
          i = 1e3 * $(this).attr("data-time"),
          o = $(this).attr("data-count");
        setTimeout(function t() {
          new Date().getTime() >= e("promo_popap_" + n) &&
          o >= e("promo_popap_" + n + "_count")
            ? (function (t) {
                $("html, body").animate({ scrollTop: 0 }, 500),
                  $(".promo_popap[data-id=" + t + "]").fadeIn();
                var n = new Date().getTime() + 36e5;
                document.cookie = "promo_popap_" + t + "=" + n;
                var i = e("promo_popap_" + t + "_count");
                console.log(i),
                  (document.cookie =
                    "promo_popap_" + t + "_count=" + (parseInt(i) + 1));
              })(n)
            : setTimeout(t, i);
        }, i);
      });
  }),
  $(document).ready(function () {
    $(".promo_with_desk .desc_full_open_box").click(function () {
      $(".desc_full").fadeToggle(200);
    }),
      $(".promo_with_desk .desc_full_close_box").click(function () {
        $(".desc_full").fadeOut(200);
      });
  }),
  $(document).ready(function () {
    var e = 0,
      t = !1,
      n = 0,
      i = !1,
      o = "";
    function r(t) {
      "38" == t.keyCode &&
        (function () {
          if (e > 0)
            if (
              $(".street_help_one").is('.street_help_one[data-val="' + e + '"]')
            ) {
              var t = $('.street_help_one[data-val="' + e + '"]').prev(
                ".street_help_one"
              );
              $(t).is(".street_help_one") && (e = $(t).attr("data-val"));
            } else {
              var n = $(".street_help_one").first().attr("data-val");
              e = $(".street_help_one").is(
                '.street_help_one[data-val="' + n + '"]'
              )
                ? n
                : 0;
            }
          else {
            var n = $(".street_help_one").first().attr("data-val");
            e = $(".street_help_one").is(
              '.street_help_one[data-val="' + n + '"]'
            )
              ? n
              : 0;
          }
        })(),
        "40" == t.keyCode &&
          (function () {
            if (e > 0)
              if (
                $(".street_help_one").is(
                  '.street_help_one[data-val="' + e + '"]'
                )
              ) {
                var t = $('.street_help_one[data-val="' + e + '"]').next(
                  ".street_help_one"
                );
                $(t).is(".street_help_one") && (e = $(t).attr("data-val"));
              } else {
                var n = $(".street_help_one").first().attr("data-val");
                e = $(".street_help_one").is(
                  '.street_help_one[data-val="' + n + '"]'
                )
                  ? n
                  : 0;
              }
            else {
              var n = $(".street_help_one").first().attr("data-val");
              e = $(".street_help_one").is(
                '.street_help_one[data-val="' + n + '"]'
              )
                ? n
                : 0;
            }
          })(),
        "13" == t.keyCode &&
          (function () {
            e > 0 &&
              $(".street_help_one").is(
                '.street_help_one[data-val="' + e + '"]'
              ) &&
              (location.href = $('.street_help_one[data-val="' + e + '"]').attr(
                "href"
              ));
            e = 0;
          })(),
        e > 0 &&
          ($(".street_help_one").removeClass("color_g"),
          $('.street_help_one[data-val="' + e + '"]').addClass("color_g"));
    }
    $("#sorder_box #street").keyup(function (e) {
      if ("38" == e.keyCode || "40" == e.keyCode || "13" == e.keyCode)
        return r(e), !1;
      var t = $(this).val(),
        n = $('input[name="tarif_type"]').val(),
        i = $('input[name="tarif_period_id"]').val();
      if (
        ((t = encodeURIComponent(t)),
        (n = encodeURIComponent(n)),
        t.length >= 3)
      ) {
        var o =
          "?cat=sorder&action=get_street_ajax&street=" +
          t +
          "&tarif_type=" +
          n +
          "&tarif_period_id=" +
          i;
        $.post(o, function (t) {
          $(".street_help").html(t),
            r(e),
            t.length
              ? $(".help_no_street").hide()
              : $(".help_no_street").show();
        });
      } else $(".street_help").html(""), $(".help_no_street").hide();
      t.length
        ? ($("#sorder_map").hide(),
          $(".text_info").css("visibility", "hidden"),
          $(".text_info_bottom").css("visibility", "hidden"))
        : ($("#sorder_map").show(),
          $(".text_info").css("visibility", "visible"),
          $(".text_info_bottom").css("visibility", "visible"));
    }),
      $(document).on("click", "#sorder_box .del_text_street", function () {
        $("#street").val(""), $("#street").keyup();
      });
    $("#sorder_street .bottom_open").click(function () {
      $("#sorder_street .bottom_text").fadeToggle(200);
    }),
      $("#sorder_street .bottom_close_box").click(function () {
        $("#sorder_street .bottom_text").fadeOut(200);
      }),
      phone_maks("#send_order #phone_mandatory"),
      phone_maks("#send_order #phone"),
      $("#sorder_home .orange_home_box").click(function () {
        $("#sorder_home .orange_home_text").fadeToggle(200);
      }),
      $("#sorder_home .orange_home_close_box").click(function () {
        $("#sorder_home .orange_home_text").fadeOut(200);
      });
    var a,
      s,
      l =
        ((a = "yclid"),
        !!(s = (s = window.location.search).match(
          new RegExp(a + "=([^&=]+)")
        )) && s[1]);
    if (l) {
      var u = "",
        c = window.location.pathname;
      if (((c = c.replace(/\//gi, "\\/")), document.referrer)) {
        var d = new URL(document.referrer);
        u = (function (e, t) {
          var n = e.search;
          return !!(n = n.match(new RegExp(t + "=([^&=]+)"))) && n[1];
        })(d, "q");
      }
      new Fingerprint2().get(function (e, t) {
        $.get(
          "/sorder.htm?action=save_log&token=" +
            e +
            "&yclid=" +
            l +
            "&q=" +
            u +
            "&title=" +
            c
        );
      });
    }
    function f(e) {
      $("#send_order").removeClass("err_promo_code"),
        (t = !1),
        (e = JSON.parse(e)),
        $(".promo_code_title").hide(),
        e.ok
          ? ($('[name="promo_code"]').val(o),
            $(".promo_code_btn_check").html("Верно!"),
            i && "input" in e && $(".block_promocode").append(e.input),
            $('[name="promo_code_no_check"]').removeClass("err"),
            $('[name="promo_code_no_check"]').addClass("success"))
          : ($("#promo_code").removeAttr("disabled"),
            $(".promo_code_btn_check").removeAttr("disabled"),
            $('[name="promo_code_no_check"]').addClass("err"),
            "captcha" in e &&
              (grecaptcha.reset(),
              $(".recaptcha_box").show(),
              (i = !0),
              $("#promo_code_fail").show()),
            $("#promo_code").focus(),
            "WRONG_FIELD[promo_no_access]" == e.err &&
              $("#send_order").addClass("err_promo_code"));
    }
    function p() {
      if (!t) {
        var e = $("#promo_code"),
          r = {};
        "" != e.val()
          ? i && "" == grecaptcha.getResponse()
            ? $("#promo_code_fail").show()
            : (n++,
              (r = {
                promo_code: e.val(),
                count_check_promocode: n,
                key: $('form [name="key"]').val(),
              }),
              i && (r["g-recaptcha-response"] = grecaptcha.getResponse()),
              (o = e.val()),
              $("#promo_code").attr("disabled", !0),
              $(".promo_code_btn_check").attr("disabled", !0),
              $.post("?cat=sorder&action=check_promo_code", r, f),
              (t = !0))
          : e.focus();
      }
    }
    $("#promo_code").on("keydown", function (e) {
      if (13 == e.keyCode) return p(), !1;
    }),
      $(".promo_code_btn_check").on("click", function () {
        p();
      });
  }),
  $(document).ready(function () {
    $("#tarif .element_help_img").on("mouseover", function () {
      $(this).siblings(".element_help_title").show();
    }),
      $("#tarif .element_help_img").on("mouseout", function () {
        $(this).siblings(".element_help_title").hide();
      }),
      $("#tarif .top_text_line_one_img").on("mouseover", function () {
        $(this).siblings(".top_text_line_one_title").show();
      }),
      $("#tarif .top_text_line_one_img").on("mouseout", function () {
        $(this).siblings(".top_text_line_one_title").hide();
      }),
      $("#tarifs .top_text_line_one_img").on("mouseover", function () {
        $(this).siblings(".top_text_line_one_title").show();
      }),
      $("#tarifs .top_text_line_one_img").on("mouseout", function () {
        $(this).siblings(".top_text_line_one_title").hide();
      }),
      $("#package_for_tarif .dop_info_open_package").click(function () {
        $("#package_for_tarif .bottom").toggleClass("open");
      }),
      $("#package_for_tarif .dop_info_bottom_close_box_package").click(
        function () {
          $("#package_for_tarif .bottom").removeClass("open");
        }
      ),
      $("#tarif .abonement_open_box").click(function () {
        $("#tarif .bottom").toggleClass("open");
      }),
      $("#tarif .close_box").click(function () {
        $("#tarif .bottom").removeClass("open");
      }),
      $("#tarif .ruls_open_box").click(function () {
        $("#tarif .bottom").toggleClass("open");
      }),
      $("#tarif .desk_open_box").click(function () {
        $("#tarif .bottom").toggleClass("open");
      }),
      $("#ur_internet .top_text_line_one_img").on("mouseover", function () {
        $(this).siblings(".top_text_line_one_title").show();
      }),
      $("#ur_internet .top_text_line_one_img").on("mouseout", function () {
        $(this).siblings(".top_text_line_one_title").hide();
      }),
      $("#tarif .internet_top_text_left .ul_tarif li:eq(1)").click(function () {
        $("html, body").animate(
          {
            scrollTop:
              $("#package_for_tarif").offset().top - $("#path").outerHeight(),
          },
          500
        );
      }),
      $("#tarif .tv_top_text_left .ul_tarif li:eq(0)").click(function () {
        $("html, body").animate(
          {
            scrollTop:
              $("#package_for_tarif").offset().top - $("#path").outerHeight(),
          },
          500
        );
      });
  }),
  $(document).ready(function () {
    $("#tarifs_options .desc_full_open_box").click(function () {
      $(".desc_full").fadeToggle(200);
    }),
      $("#tarifs_options .desc_full_close_box").click(function () {
        $(".desc_full").fadeOut(200);
      }),
      $("#tarifs_options_one .dop_info_open_box").click(function () {
        $(".bottom").toggleClass("open"), $(".dop_info_desk").fadeToggle(200);
      }),
      $("#tarifs_options_one .dop_info_close_box").click(function () {
        $(".bottom").removeClass("open"), $(".dop_info_desk").fadeOut(200);
      });
  }),
  $(document).ready(function () {
    $("#tel .desc_full_open_box").click(function () {
      $(".desc_full").fadeToggle(200);
    }),
      $("#tel .desc_full_close_box").click(function () {
        $(".desc_full").fadeOut(200);
      });
  }),
  $(document).ready(function () {
    phone_maks("#vacancies_cc input[name=phone]");
  }),
  $(document).ready(function () {
    $("#static_page .refusal_form").length &&
      $("#static_page .refusal_form").on("submit", function () {
        var e = $(this).find("textarea");
        if ("" === e.val()) return e.addClass("err"), e.focus(), !1;
      });
  }),
  (function (e, t) {
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define([], t)
      : "object" == typeof exports
      ? (exports.validators = t())
      : (e.validators = t());
  })(window, function () {
    return (function (e) {
      var t = {};
      function n(i) {
        if (t[i]) return t[i].exports;
        var o = (t[i] = { i: i, l: !1, exports: {} });
        return e[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
      }
      return (
        (n.m = e),
        (n.c = t),
        (n.d = function (e, t, i) {
          n.o(e, t) ||
            Object.defineProperty(e, t, {
              configurable: !1,
              enumerable: !0,
              get: i,
            });
        }),
        (n.r = function (e) {
          Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.n = function (e) {
          var t =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return n.d(t, "a", t), t;
        }),
        (n.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = "/"),
        n((n.s = 25))
      );
    })([
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "withParams", {
            enumerable: !0,
            get: function () {
              return o.default;
            },
          }),
          (t.regex = t.ref = t.len = t.req = void 0);
        var i,
          o = (i = n(23)) && i.__esModule ? i : { default: i };
        function r(e) {
          return (r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        var a = function (e) {
          if (Array.isArray(e)) return Boolean(e.length);
          if (void 0 === e || null === e) return !1;
          if (!1 === e) return !0;
          if (e instanceof Date) return !isNaN(e.getTime());
          if ("object" === r(e)) {
            for (var t in e) return !0;
            return !1;
          }
          return Boolean(String(e).length);
        };
        (t.req = a),
          (t.len = function (e) {
            return Array.isArray(e)
              ? e.length
              : "object" === r(e)
              ? Object.keys(e).length
              : String(e).length;
          }),
          (t.ref = function (e, t, n) {
            return "function" == typeof e ? e.call(t, n) : n[e];
          }),
          (t.regex = function (e, t) {
            return (0, o.default)({ type: e }, function (e) {
              return !a(e) || t.test(e);
            });
          });
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var i = (0, n(0).regex)("decimal", /^[-]?\d*(\.\d+)?$/);
        t.default = i;
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var i = (0, n(0).regex)("integer", /(^[0-9]*$)|(^-[0-9]+$)/);
        t.default = i;
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var i = n(0);
        t.default = function (e) {
          return (0, i.withParams)({ type: "maxValue", max: e }, function (t) {
            return (
              !(0, i.req)(t) ||
              ((!/\s/.test(t) || t instanceof Date) && Number(t) <= Number(e))
            );
          });
        };
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var i = n(0);
        t.default = function (e) {
          return (0, i.withParams)({ type: "minValue", min: e }, function (t) {
            return (
              !(0, i.req)(t) ||
              ((!/\s/.test(t) || t instanceof Date) && Number(t) >= Number(e))
            );
          });
        };
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var i = n(0);
        t.default = function (e) {
          return (0, i.withParams)({ type: "not" }, function (t, n) {
            return !(0, i.req)(t) || !e.call(this, t, n);
          });
        };
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var i = n(0);
        t.default = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return (0, i.withParams)({ type: "and" }, function () {
            for (
              var e = this, n = arguments.length, i = new Array(n), o = 0;
              o < n;
              o++
            )
              i[o] = arguments[o];
            return (
              t.length > 0 &&
              t.reduce(function (t, n) {
                return t && n.apply(e, i);
              }, !0)
            );
          });
        };
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var i = n(0);
        t.default = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return (0, i.withParams)({ type: "or" }, function () {
            for (
              var e = this, n = arguments.length, i = new Array(n), o = 0;
              o < n;
              o++
            )
              i[o] = arguments[o];
            return (
              t.length > 0 &&
              t.reduce(function (t, n) {
                return t || n.apply(e, i);
              }, !1)
            );
          });
        };
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var i = (0, n(0).regex)(
          "url",
          /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i
        );
        t.default = i;
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var i = n(0);
        t.default = function (e) {
          return (0, i.withParams)({ type: "sameAs", eq: e }, function (t, n) {
            return t === (0, i.ref)(e, this, n);
          });
        };
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var i = n(0);
        t.default = function (e) {
          return (0, i.withParams)(
            { type: "requiredUnless", prop: e },
            function (t, n) {
              return Boolean((0, i.ref)(e, this, n)) || (0, i.req)(t);
            }
          );
        };
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var i = n(0);
        t.default = function (e) {
          return (0, i.withParams)({ type: "requiredIf", prop: e }, function (
            t,
            n
          ) {
            return !(0, i.ref)(e, this, n) || (0, i.req)(t);
          });
        };
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var i = n(0),
          o = (0, i.withParams)({ type: "required" }, function (e) {
            return "string" == typeof e ? (0, i.req)(e.trim()) : (0, i.req)(e);
          });
        t.default = o;
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var i = n(0);
        t.default = function (e) {
          return (0, i.withParams)({ type: "minLength", min: e }, function (t) {
            return !(0, i.req)(t) || (0, i.len)(t) >= e;
          });
        };
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var i = n(0);
        t.default = function (e) {
          return (0, i.withParams)({ type: "maxLength", max: e }, function (t) {
            return !(0, i.req)(t) || (0, i.len)(t) <= e;
          });
        };
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var i = n(0);
        t.default = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : ":";
          return (0, i.withParams)({ type: "macAddress" }, function (t) {
            if (!(0, i.req)(t)) return !0;
            if ("string" != typeof t) return !1;
            var n =
              "string" == typeof e && "" !== e
                ? t.split(e)
                : 12 === t.length || 16 === t.length
                ? t.match(/.{2}/g)
                : null;
            return (
              null !== n && (6 === n.length || 8 === n.length) && n.every(o)
            );
          });
        };
        var o = function (e) {
          return e.toLowerCase().match(/^[0-9a-f]{2}$/);
        };
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var i = n(0),
          o = (0, i.withParams)({ type: "ipAddress" }, function (e) {
            if (!(0, i.req)(e)) return !0;
            if ("string" != typeof e) return !1;
            var t = e.split(".");
            return 4 === t.length && t.every(r);
          });
        t.default = o;
        var r = function (e) {
          if (e.length > 3 || 0 === e.length) return !1;
          if ("0" === e[0] && "0" !== e) return !1;
          if (!e.match(/^\d+$/)) return !1;
          var t = 0 | Number(e);
          return t >= 0 && t <= 255;
        };
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var i = (0, n(0).regex)(
          "email",
          /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/
        );
        t.default = i;
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var i = n(0);
        t.default = function (e, t) {
          return (0, i.withParams)(
            { type: "between", min: e, max: t },
            function (n) {
              return (
                !(0, i.req)(n) ||
                ((!/\s/.test(n) || n instanceof Date) &&
                  Number(e) <= Number(n) &&
                  Number(t) >= Number(n))
              );
            }
          );
        };
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var i = (0, n(0).regex)("numeric", /^[0-9]*$/);
        t.default = i;
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var i = (0, n(0).regex)("alphaNum", /^[a-zA-Z0-9]*$/);
        t.default = i;
      },
      function (e, t) {
        var n;
        n = (function () {
          return this;
        })();
        try {
          n = n || Function("return this")() || (0, eval)("this");
        } catch (e) {
          "object" == typeof window && (n = window);
        }
        e.exports = n;
      },
      function (e, t, n) {
        (function (e) {
          function n(e) {
            return (n =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  })(e);
          }
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.withParams = void 0);
          var i = "undefined" != typeof window ? window : void 0 !== e ? e : {},
            o = i.vuelidate
              ? i.vuelidate.withParams
              : function (e, t) {
                  return "object" === n(e) && void 0 !== t
                    ? t
                    : e(function () {});
                };
          t.withParams = o;
        }.call(this, n(21)));
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var i = n(22).withParams;
        t.default = i;
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var i = (0, n(0).regex)("alpha", /^[a-zA-Z]*$/);
        t.default = i;
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "alpha", {
            enumerable: !0,
            get: function () {
              return i.default;
            },
          }),
          Object.defineProperty(t, "alphaNum", {
            enumerable: !0,
            get: function () {
              return o.default;
            },
          }),
          Object.defineProperty(t, "numeric", {
            enumerable: !0,
            get: function () {
              return r.default;
            },
          }),
          Object.defineProperty(t, "between", {
            enumerable: !0,
            get: function () {
              return a.default;
            },
          }),
          Object.defineProperty(t, "email", {
            enumerable: !0,
            get: function () {
              return s.default;
            },
          }),
          Object.defineProperty(t, "ipAddress", {
            enumerable: !0,
            get: function () {
              return l.default;
            },
          }),
          Object.defineProperty(t, "macAddress", {
            enumerable: !0,
            get: function () {
              return u.default;
            },
          }),
          Object.defineProperty(t, "maxLength", {
            enumerable: !0,
            get: function () {
              return c.default;
            },
          }),
          Object.defineProperty(t, "minLength", {
            enumerable: !0,
            get: function () {
              return d.default;
            },
          }),
          Object.defineProperty(t, "required", {
            enumerable: !0,
            get: function () {
              return f.default;
            },
          }),
          Object.defineProperty(t, "requiredIf", {
            enumerable: !0,
            get: function () {
              return p.default;
            },
          }),
          Object.defineProperty(t, "requiredUnless", {
            enumerable: !0,
            get: function () {
              return h.default;
            },
          }),
          Object.defineProperty(t, "sameAs", {
            enumerable: !0,
            get: function () {
              return m.default;
            },
          }),
          Object.defineProperty(t, "url", {
            enumerable: !0,
            get: function () {
              return g.default;
            },
          }),
          Object.defineProperty(t, "or", {
            enumerable: !0,
            get: function () {
              return v.default;
            },
          }),
          Object.defineProperty(t, "and", {
            enumerable: !0,
            get: function () {
              return y.default;
            },
          }),
          Object.defineProperty(t, "not", {
            enumerable: !0,
            get: function () {
              return _.default;
            },
          }),
          Object.defineProperty(t, "minValue", {
            enumerable: !0,
            get: function () {
              return b.default;
            },
          }),
          Object.defineProperty(t, "maxValue", {
            enumerable: !0,
            get: function () {
              return x.default;
            },
          }),
          Object.defineProperty(t, "integer", {
            enumerable: !0,
            get: function () {
              return w.default;
            },
          }),
          Object.defineProperty(t, "decimal", {
            enumerable: !0,
            get: function () {
              return $.default;
            },
          }),
          (t.helpers = void 0);
        var i = k(n(24)),
          o = k(n(20)),
          r = k(n(19)),
          a = k(n(18)),
          s = k(n(17)),
          l = k(n(16)),
          u = k(n(15)),
          c = k(n(14)),
          d = k(n(13)),
          f = k(n(12)),
          p = k(n(11)),
          h = k(n(10)),
          m = k(n(9)),
          g = k(n(8)),
          v = k(n(7)),
          y = k(n(6)),
          _ = k(n(5)),
          b = k(n(4)),
          x = k(n(3)),
          w = k(n(2)),
          $ = k(n(1)),
          T = (function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                  var i =
                    Object.defineProperty && Object.getOwnPropertyDescriptor
                      ? Object.getOwnPropertyDescriptor(e, n)
                      : {};
                  i.get || i.set
                    ? Object.defineProperty(t, n, i)
                    : (t[n] = e[n]);
                }
            return (t.default = e), t;
          })(n(0));
        function k(e) {
          return e && e.__esModule ? e : { default: e };
        }
        t.helpers = T;
      },
    ]);
  }),
  $(document).ready(function () {
    var e = !0;
    function t() {
      var e = document.getElementsByTagName("video")[0];
      e.paused
        ? ($("#video_block .stop_video").hide(), e.play())
        : ($("#video_block .stop_video").show(), e.pause());
    }
    function n() {
      (e = !0),
        document.getElementsByTagName("video")[0].pause(),
        $("body").css("overflow", "auto"),
        $("html, body").animate(
          {
            scrollTop:
              $("#video_block").offset().top - $("#path").outerHeight(),
          },
          0
        ),
        $("#video_block .video_box").fadeOut(),
        $("#video_block .video_bg").fadeOut();
    }
    $("#video_block .video_icon_start").click(function () {
      e = !1;
      var t = document.getElementsByTagName("video")[0];
      $("#video_block .stop_video").hide(),
        $("#video_block .video_bg").fadeIn(),
        $("#video_block .video_box").fadeIn(),
        t.play(),
        $("html, body").animate(
          { scrollTop: $("#video_block .video_box").offset().top },
          0
        ),
        $("body").css("overflow", "hidden");
    }),
      $("#video_block #video").click(function () {
        t();
      }),
      $("#video_block .stop_video").click(function () {
        t();
      }),
      $("#video_block .close_video").click(function () {
        n();
      }),
      $("#video_block .video_bg").click(function () {
        n();
      }),
      document.addEventListener("touchmove", function (t) {
        e || t.preventDefault();
      }),
      $(window).resize(function () {
        e ||
          $("html, body").animate(
            { scrollTop: $("#video_block .video_box").offset().top },
            0
          );
      });
  }),
  (function (e, t) {
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define([], t)
      : "object" == typeof exports
      ? (exports.vuelidate = t())
      : (e.vuelidate = t());
  })(window, function () {
    return (function (e) {
      var t = {};
      function n(i) {
        if (t[i]) return t[i].exports;
        var o = (t[i] = { i: i, l: !1, exports: {} });
        return e[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
      }
      return (
        (n.m = e),
        (n.c = t),
        (n.d = function (e, t, i) {
          n.o(e, t) ||
            Object.defineProperty(e, t, {
              configurable: !1,
              enumerable: !0,
              get: i,
            });
        }),
        (n.r = function (e) {
          Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.n = function (e) {
          var t =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return n.d(t, "a", t), t;
        }),
        (n.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = "/"),
        n((n.s = 28))
      );
    })({
      26: function (e, t, n) {
        function i(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function o(e) {
          return (o =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.pushParams = s),
          (t.popParams = l),
          (t.withParams = function (e, t) {
            return "object" === o(e) && void 0 !== t
              ? ((n = e),
                (i = t),
                c(function (e) {
                  return function () {
                    e(n);
                    for (
                      var t = arguments.length, o = new Array(t), r = 0;
                      r < t;
                      r++
                    )
                      o[r] = arguments[r];
                    return i.apply(this, o);
                  };
                }))
              : c(e);
            var n, i;
          }),
          (t._setTarget = t.target = void 0);
        var r = [],
          a = null;
        function s() {
          null !== a && r.push(a), (t.target = a = {});
        }
        function l() {
          var e = a,
            n = (t.target = a = r.pop() || null);
          return (
            n && (Array.isArray(n.$sub) || (n.$sub = []), n.$sub.push(e)), e
          );
        }
        function u(e) {
          if ("object" !== o(e) || Array.isArray(e))
            throw new Error("params must be an object");
          t.target = a = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                o = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols &&
                (o = o.concat(
                  Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                  })
                )),
                o.forEach(function (t) {
                  i(e, t, n[t]);
                });
            }
            return e;
          })({}, a, e);
        }
        function c(e) {
          var t = e(u);
          return function () {
            s();
            try {
              for (
                var e = arguments.length, n = new Array(e), i = 0;
                i < e;
                i++
              )
                n[i] = arguments[i];
              return t.apply(this, n);
            } finally {
              l();
            }
          };
        }
        (t.target = a),
          (t._setTarget = function (e) {
            t.target = a = e;
          });
      },
      27: function (e, t, n) {
        function i(e) {
          return null === e || void 0 === e;
        }
        function o(e) {
          return null !== e && void 0 !== e;
        }
        function r(e, t) {
          return t.tag === e.tag && t.key === e.key;
        }
        function a(e) {
          var t = e.tag;
          e.vm = new t({ data: e.args });
        }
        function s(e, t, n) {
          var i,
            r,
            a = {};
          for (i = t; i <= n; ++i) o((r = e[i].key)) && (a[r] = i);
          return a;
        }
        function l(e, t, n) {
          for (; t <= n; ++t) a(e[t]);
        }
        function u(e, t, n) {
          for (; t <= n; ++t) {
            var i = e[t];
            o(i) && (i.vm.$destroy(), (i.vm = null));
          }
        }
        function c(e, t) {
          e !== t &&
            ((t.vm = e.vm),
            (function (e) {
              for (var t = Object.keys(e.args), n = 0; n < t.length; n++)
                t.forEach(function (t) {
                  e.vm[t] = e.args[t];
                });
            })(t));
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.patchChildren = function (e, t) {
            o(e) && o(t)
              ? e !== t &&
                (function (e, t) {
                  for (
                    var n,
                      d,
                      f,
                      p = 0,
                      h = 0,
                      m = e.length - 1,
                      g = e[0],
                      v = e[m],
                      y = t.length - 1,
                      _ = t[0],
                      b = t[y];
                    p <= m && h <= y;

                  )
                    i(g)
                      ? (g = e[++p])
                      : i(v)
                      ? (v = e[--m])
                      : r(g, _)
                      ? (c(g, _), (g = e[++p]), (_ = t[++h]))
                      : r(v, b)
                      ? (c(v, b), (v = e[--m]), (b = t[--y]))
                      : r(g, b)
                      ? (c(g, b), (g = e[++p]), (b = t[--y]))
                      : r(v, _)
                      ? (c(v, _), (v = e[--m]), (_ = t[++h]))
                      : (i(n) && (n = s(e, p, m)),
                        i((d = o(_.key) ? n[_.key] : null))
                          ? (a(_), (_ = t[++h]))
                          : r((f = e[d]), _)
                          ? (c(f, _), (e[d] = void 0), (_ = t[++h]))
                          : (a(_), (_ = t[++h])));
                  p > m ? l(t, h, y) : h > y && u(e, p, m);
                })(e, t)
              : o(t)
              ? l(t, 0, t.length - 1)
              : o(e) && u(e, 0, e.length - 1);
          }),
          (t.h = function (e, t, n) {
            return { tag: e, key: t, args: n };
          });
      },
      28: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Vuelidate = T),
          Object.defineProperty(t, "withParams", {
            enumerable: !0,
            get: function () {
              return o.withParams;
            },
          }),
          (t.default = t.validationMixin = void 0);
        var i = n(27),
          o = n(26);
        function r(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++)
                  n[t] = e[t];
                return n;
              }
            })(e) ||
            (function (e) {
              if (
                Symbol.iterator in Object(e) ||
                "[object Arguments]" === Object.prototype.toString.call(e)
              )
                return Array.from(e);
            })(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance"
              );
            })()
          );
        }
        function a(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols &&
              (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
              )),
              i.forEach(function (t) {
                s(e, t, n[t]);
              });
          }
          return e;
        }
        function s(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function l(e) {
          return (l =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        var u = function () {
            return null;
          },
          c = function (e, t, n) {
            return e.reduce(function (e, i) {
              return (e[n ? n(i) : i] = t(i)), e;
            }, {});
          };
        function d(e) {
          return "function" == typeof e;
        }
        function f(e) {
          return null !== e && ("object" === l(e) || d(e));
        }
        var p = function (e, t, n, i) {
            if ("function" == typeof n) return n.call(e, t, i);
            n = Array.isArray(n) ? n : n.split(".");
            for (var o = 0; o < n.length; o++) {
              if (!t || "object" !== l(t)) return i;
              t = t[n[o]];
            }
            return void 0 === t ? i : t;
          },
          h = "__isVuelidateAsyncVm",
          m = {
            $invalid: function () {
              var e = this,
                t = this.proxy;
              return (
                this.nestedKeys.some(function (t) {
                  return e.refProxy(t).$invalid;
                }) ||
                this.ruleKeys.some(function (e) {
                  return !t[e];
                })
              );
            },
            $dirty: function () {
              var e = this;
              return (
                Boolean(this.dirty) ||
                (0 !== this.nestedKeys.length &&
                  this.nestedKeys.every(function (t) {
                    return e.refProxy(t).$dirty;
                  }))
              );
            },
            $anyDirty: function () {
              var e = this;
              return (
                Boolean(this.dirty) ||
                (0 !== this.nestedKeys.length &&
                  this.nestedKeys.some(function (t) {
                    return e.refProxy(t).$anyDirty;
                  }))
              );
            },
            $error: function () {
              return this.$dirty && !this.$pending && this.$invalid;
            },
            $anyError: function () {
              var e = this;
              return (
                Boolean(this.$error) ||
                this.nestedKeys.some(function (t) {
                  return e.refProxy(t).$anyError;
                })
              );
            },
            $pending: function () {
              var e = this;
              return (
                this.ruleKeys.some(function (t) {
                  return e.getRef(t).$pending;
                }) ||
                this.nestedKeys.some(function (t) {
                  return e.refProxy(t).$pending;
                })
              );
            },
            $params: function () {
              var e = this,
                t = this.validations;
              return a(
                {},
                c(this.nestedKeys, function (e) {
                  return (t[e] && t[e].$params) || null;
                }),
                c(this.ruleKeys, function (t) {
                  return e.getRef(t).$params;
                })
              );
            },
          };
        function g(e) {
          this.dirty = e;
          var t = this.proxy,
            n = e ? "$touch" : "$reset";
          this.nestedKeys.forEach(function (e) {
            t[e][n]();
          });
        }
        var v = {
            $touch: function () {
              g.call(this, !0);
            },
            $reset: function () {
              g.call(this, !1);
            },
            $flattenParams: function () {
              var e = this.proxy,
                t = [];
              for (var n in this.$params)
                if (this.isNested(n)) {
                  for (var i = e[n].$flattenParams(), o = 0; o < i.length; o++)
                    i[o].path.unshift(n);
                  t = t.concat(i);
                } else t.push({ path: [], name: n, params: this.$params[n] });
              return t;
            },
          },
          y = Object.keys(m),
          _ = Object.keys(v),
          b = null,
          x = function (e) {
            if (b) return b;
            var t = e.extend({
                computed: {
                  refs: function () {
                    var e = this._vval;
                    (this._vval = this.children),
                      (0, i.patchChildren)(e, this._vval);
                    var t = {};
                    return (
                      this._vval.forEach(function (e) {
                        t[e.key] = e.vm;
                      }),
                      t
                    );
                  },
                },
                beforeCreate: function () {
                  this._vval = null;
                },
                beforeDestroy: function () {
                  this._vval &&
                    ((0, i.patchChildren)(this._vval), (this._vval = null));
                },
                methods: {
                  getModel: function () {
                    return this.lazyModel
                      ? this.lazyModel(this.prop)
                      : this.model;
                  },
                  getModelKey: function (e) {
                    var t = this.getModel();
                    if (t) return t[e];
                  },
                  hasIter: function () {
                    return !1;
                  },
                },
              }),
              n = t.extend({
                data: function () {
                  return {
                    rule: null,
                    lazyModel: null,
                    model: null,
                    lazyParentModel: null,
                    rootModel: null,
                  };
                },
                methods: {
                  runRule: function (t) {
                    var n = this.getModel();
                    (0, o.pushParams)();
                    var i,
                      r = this.rule.call(this.rootModel, n, t),
                      a =
                        f((i = r)) && d(i.then)
                          ? (function (e, t) {
                              var n = new e({ data: { p: !0, v: !1 } });
                              return (
                                t.then(
                                  function (e) {
                                    (n.p = !1), (n.v = e);
                                  },
                                  function (e) {
                                    throw ((n.p = !1), (n.v = !1), e);
                                  }
                                ),
                                (n[h] = !0),
                                n
                              );
                            })(e, r)
                          : r,
                      s = (0, o.popParams)();
                    return {
                      output: a,
                      params:
                        s && s.$sub
                          ? s.$sub.length > 1
                            ? s
                            : s.$sub[0]
                          : null,
                    };
                  },
                },
                computed: {
                  run: function () {
                    var e = this,
                      t = this.lazyParentModel();
                    if (Array.isArray(t) && t.__ob__) {
                      var n = t.__ob__.dep;
                      n.depend();
                      var i = n.constructor.target;
                      if (!this._indirectWatcher) {
                        var o = i.constructor;
                        this._indirectWatcher = new o(
                          this,
                          function () {
                            return e.runRule(t);
                          },
                          null,
                          { lazy: !0 }
                        );
                      }
                      var r = this.getModel();
                      if (!this._indirectWatcher.dirty && this._lastModel === r)
                        return this._indirectWatcher.depend(), i.value;
                      (this._lastModel = r),
                        this._indirectWatcher.evaluate(),
                        this._indirectWatcher.depend();
                    } else
                      this._indirectWatcher &&
                        (this._indirectWatcher.teardown(),
                        (this._indirectWatcher = null));
                    return this._indirectWatcher
                      ? this._indirectWatcher.value
                      : this.runRule(t);
                  },
                  $params: function () {
                    return this.run.params;
                  },
                  proxy: function () {
                    var e = this.run.output;
                    return e[h] ? Boolean(e.v) : Boolean(e);
                  },
                  $pending: function () {
                    var e = this.run.output;
                    return Boolean(e[h]) && e.p;
                  },
                },
                destroyed: function () {
                  this._indirectWatcher &&
                    (this._indirectWatcher.teardown(),
                    (this._indirectWatcher = null));
                },
              }),
              s = t.extend({
                data: function () {
                  return {
                    dirty: !1,
                    validations: null,
                    lazyModel: null,
                    model: null,
                    prop: null,
                    lazyParentModel: null,
                    rootModel: null,
                  };
                },
                methods: a({}, v, {
                  refProxy: function (e) {
                    return this.getRef(e).proxy;
                  },
                  getRef: function (e) {
                    return this.refs[e];
                  },
                  isNested: function (e) {
                    return "function" != typeof this.validations[e];
                  },
                }),
                computed: a({}, m, {
                  nestedKeys: function () {
                    return this.keys.filter(this.isNested);
                  },
                  ruleKeys: function () {
                    var e = this;
                    return this.keys.filter(function (t) {
                      return !e.isNested(t);
                    });
                  },
                  keys: function () {
                    return Object.keys(this.validations).filter(function (e) {
                      return "$params" !== e;
                    });
                  },
                  proxy: function () {
                    var e = this,
                      t = c(this.keys, function (t) {
                        return {
                          enumerable: !0,
                          configurable: !0,
                          get: function () {
                            return e.refProxy(t);
                          },
                        };
                      }),
                      n = c(y, function (t) {
                        return {
                          enumerable: !0,
                          configurable: !0,
                          get: function () {
                            return e[t];
                          },
                        };
                      }),
                      i = c(_, function (t) {
                        return {
                          enumerable: !1,
                          configurable: !0,
                          get: function () {
                            return e[t];
                          },
                        };
                      }),
                      o = this.hasIter()
                        ? {
                            $iter: {
                              enumerable: !0,
                              value: Object.defineProperties({}, a({}, t)),
                            },
                          }
                        : {};
                    return Object.defineProperties(
                      {},
                      a(
                        {},
                        t,
                        o,
                        {
                          $model: {
                            enumerable: !0,
                            get: function () {
                              var t = e.lazyParentModel();
                              return null != t ? t[e.prop] : null;
                            },
                            set: function (t) {
                              var n = e.lazyParentModel();
                              null != n && ((n[e.prop] = t), e.$touch());
                            },
                          },
                        },
                        n,
                        i
                      )
                    );
                  },
                  children: function () {
                    var e = this;
                    return r(
                      this.nestedKeys.map(function (t) {
                        return x(e, t);
                      })
                    )
                      .concat(
                        r(
                          this.ruleKeys.map(function (t) {
                            return w(e, t);
                          })
                        )
                      )
                      .filter(Boolean);
                  },
                }),
              }),
              l = s.extend({
                methods: {
                  isNested: function (e) {
                    return void 0 !== this.validations[e]();
                  },
                  getRef: function (e) {
                    var t = this;
                    return {
                      get proxy() {
                        return t.validations[e]() || !1;
                      },
                    };
                  },
                },
              }),
              g = s.extend({
                computed: {
                  keys: function () {
                    var e = this.getModel();
                    return f(e) ? Object.keys(e) : [];
                  },
                  tracker: function () {
                    var e = this,
                      t = this.validations.$trackBy;
                    return t
                      ? function (n) {
                          return "".concat(p(e.rootModel, e.getModelKey(n), t));
                        }
                      : function (e) {
                          return "".concat(e);
                        };
                  },
                  getModelLazy: function () {
                    var e = this;
                    return function () {
                      return e.getModel();
                    };
                  },
                  children: function () {
                    var e = this,
                      t = this.validations,
                      n = this.getModel(),
                      o = a({}, t);
                    delete o.$trackBy;
                    var r = {};
                    return this.keys
                      .map(function (t) {
                        var a = e.tracker(t);
                        return r.hasOwnProperty(a)
                          ? null
                          : ((r[a] = !0),
                            (0, i.h)(s, a, {
                              validations: o,
                              prop: t,
                              lazyParentModel: e.getModelLazy,
                              model: n[t],
                              rootModel: e.rootModel,
                            }));
                      })
                      .filter(Boolean);
                  },
                },
                methods: {
                  isNested: function () {
                    return !0;
                  },
                  getRef: function (e) {
                    return this.refs[this.tracker(e)];
                  },
                  hasIter: function () {
                    return !0;
                  },
                },
              }),
              x = function (e, t) {
                if ("$each" === t)
                  return (0, i.h)(g, t, {
                    validations: e.validations[t],
                    lazyParentModel: e.lazyParentModel,
                    prop: t,
                    lazyModel: e.getModel,
                    rootModel: e.rootModel,
                  });
                var n = e.validations[t];
                if (Array.isArray(n)) {
                  var o = e.rootModel,
                    r = c(
                      n,
                      function (e) {
                        return function () {
                          return p(o, o.$v, e);
                        };
                      },
                      function (e) {
                        return Array.isArray(e) ? e.join(".") : e;
                      }
                    );
                  return (0, i.h)(l, t, {
                    validations: r,
                    lazyParentModel: u,
                    prop: t,
                    lazyModel: u,
                    rootModel: o,
                  });
                }
                return (0, i.h)(s, t, {
                  validations: n,
                  lazyParentModel: e.getModel,
                  prop: t,
                  lazyModel: e.getModelKey,
                  rootModel: e.rootModel,
                });
              },
              w = function (e, t) {
                return (0, i.h)(n, t, {
                  rule: e.validations[t],
                  lazyParentModel: e.lazyParentModel,
                  lazyModel: e.getModel,
                  rootModel: e.rootModel,
                });
              };
            return (b = { VBase: t, Validation: s });
          },
          w = null,
          $ = {
            data: function () {
              var e = this.$options.validations;
              return (
                e &&
                  (this._vuelidate = (function (e, t) {
                    var n = (function (e) {
                        if (w) return w;
                        for (var t = e.constructor; t.super; ) t = t.super;
                        return (w = t), t;
                      })(e),
                      o = x(n),
                      r = o.Validation;
                    return new (0, o.VBase)({
                      computed: {
                        children: function () {
                          var n = "function" == typeof t ? t.call(e) : t;
                          return [
                            (0, i.h)(r, "$v", {
                              validations: n,
                              lazyParentModel: u,
                              prop: "$v",
                              model: e,
                              rootModel: e,
                            }),
                          ];
                        },
                      },
                    });
                  })(this, e)),
                {}
              );
            },
            beforeCreate: function () {
              var e = this.$options;
              e.validations &&
                (e.computed || (e.computed = {}),
                e.computed.$v ||
                  (e.computed.$v = function () {
                    return this._vuelidate
                      ? this._vuelidate.refs.$v.proxy
                      : null;
                  }));
            },
            beforeDestroy: function () {
              this._vuelidate &&
                (this._vuelidate.$destroy(), (this._vuelidate = null));
            },
          };
        function T(e) {
          e.mixin($);
        }
        t.validationMixin = $;
        var k = T;
        t.default = k;
      },
    });
  });
