import {
  __commonJS
} from "./chunk-JVWSFFO4.js";

// node_modules/.pnpm/@rive-app+canvas@2.25.3/node_modules/@rive-app/canvas/rive.js
var require_rive = __commonJS({
  "node_modules/.pnpm/@rive-app+canvas@2.25.3/node_modules/@rive-app/canvas/rive.js"(exports, module) {
    (function webpackUniversalModuleDefinition(root, factory) {
      if (typeof exports === "object" && typeof module === "object")
        module.exports = factory();
      else if (typeof define === "function" && define.amd)
        define([], factory);
      else if (typeof exports === "object")
        exports["rive"] = factory();
      else
        root["rive"] = factory();
    })(exports, () => {
      return (
        /******/
        (() => {
          "use strict";
          var __webpack_modules__ = [
            ,
            /* 1 */
            /***/
            (__unused_webpack___webpack_module__, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                "default": () => __WEBPACK_DEFAULT_EXPORT__
                /* harmony export */
              });
              var Rive = (() => {
                var _scriptDir = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : void 0;
                return function(moduleArg = {}) {
                  var m = moduleArg, aa, ea;
                  m.ready = new Promise((a, b) => {
                    aa = a;
                    ea = b;
                  });
                  function fa() {
                    function a(g) {
                      const n = d;
                      c = b = 0;
                      d = /* @__PURE__ */ new Map();
                      n.forEach((p) => {
                        try {
                          p(g);
                        } catch (l) {
                          console.error(l);
                        }
                      });
                      this.ob();
                      e && e.Tb();
                    }
                    let b = 0, c = 0, d = /* @__PURE__ */ new Map(), e = null, f = null;
                    this.requestAnimationFrame = function(g) {
                      b || (b = requestAnimationFrame(a.bind(this)));
                      const n = ++c;
                      d.set(n, g);
                      return n;
                    };
                    this.cancelAnimationFrame = function(g) {
                      d.delete(g);
                      b && 0 == d.size && (cancelAnimationFrame(b), b = 0);
                    };
                    this.Rb = function(g) {
                      f && (document.body.remove(f), f = null);
                      g || (f = document.createElement("div"), f.style.backgroundColor = "black", f.style.position = "fixed", f.style.right = 0, f.style.top = 0, f.style.color = "white", f.style.padding = "4px", f.innerHTML = "RIVE FPS", g = function(n) {
                        f.innerHTML = "RIVE FPS " + n.toFixed(1);
                      }, document.body.appendChild(f));
                      e = new function() {
                        let n = 0, p = 0;
                        this.Tb = function() {
                          var l = performance.now();
                          p ? (++n, l -= p, 1e3 < l && (g(1e3 * n / l), n = p = 0)) : (p = l, n = 0);
                        };
                      }();
                    };
                    this.Ob = function() {
                      f && (document.body.remove(f), f = null);
                      e = null;
                    };
                    this.ob = function() {
                    };
                  }
                  function ha(a) {
                    console.assert(true);
                    const b = /* @__PURE__ */ new Map();
                    let c = -Infinity;
                    this.push = function(d) {
                      d = d + ((1 << a) - 1) >> a;
                      b.has(d) && clearTimeout(b.get(d));
                      b.set(d, setTimeout(function() {
                        b.delete(d);
                        0 == b.length ? c = -Infinity : d == c && (c = Math.max(...b.keys()), console.assert(c < d));
                      }, 1e3));
                      c = Math.max(d, c);
                      return c << a;
                    };
                  }
                  const ia = m.onRuntimeInitialized;
                  m.onRuntimeInitialized = function() {
                    ia && ia();
                    let a = m.decodeAudio;
                    m.decodeAudio = function(e, f) {
                      e = a(e);
                      f(e);
                    };
                    let b = m.decodeFont;
                    m.decodeFont = function(e, f) {
                      e = b(e);
                      f(e);
                    };
                    const c = m.FileAssetLoader;
                    m.ptrToAsset = (e) => {
                      let f = m.ptrToFileAsset(e);
                      return f.isImage ? m.ptrToImageAsset(e) : f.isFont ? m.ptrToFontAsset(e) : f.isAudio ? m.ptrToAudioAsset(e) : f;
                    };
                    m.CustomFileAssetLoader = c.extend("CustomFileAssetLoader", { __construct: function({ loadContents: e }) {
                      this.__parent.__construct.call(this);
                      this.Gb = e;
                    }, loadContents: function(e, f) {
                      e = m.ptrToAsset(e);
                      return this.Gb(e, f);
                    } });
                    m.CDNFileAssetLoader = c.extend("CDNFileAssetLoader", { __construct: function() {
                      this.__parent.__construct.call(this);
                    }, loadContents: function(e) {
                      let f = m.ptrToAsset(e);
                      e = f.cdnUuid;
                      if ("" === e) {
                        return false;
                      }
                      (function(g, n) {
                        var p = new XMLHttpRequest();
                        p.responseType = "arraybuffer";
                        p.onreadystatechange = function() {
                          4 == p.readyState && 200 == p.status && n(p);
                        };
                        p.open("GET", g, true);
                        p.send(null);
                      })(f.cdnBaseUrl + "/" + e, (g) => {
                        f.decode(new Uint8Array(g.response));
                      });
                      return true;
                    } });
                    m.FallbackFileAssetLoader = c.extend("FallbackFileAssetLoader", { __construct: function() {
                      this.__parent.__construct.call(this);
                      this.kb = [];
                    }, addLoader: function(e) {
                      this.kb.push(e);
                    }, loadContents: function(e, f) {
                      for (let g of this.kb) {
                        if (g.loadContents(e, f)) {
                          return true;
                        }
                      }
                      return false;
                    } });
                    let d = m.computeAlignment;
                    m.computeAlignment = function(e, f, g, n, p = 1) {
                      return d.call(this, e, f, g, n, p);
                    };
                  };
                  const ja = "createConicGradient createImageData createLinearGradient createPattern createRadialGradient getContextAttributes getImageData getLineDash getTransform isContextLost isPointInPath isPointInStroke measureText".split(" "), ka = new function() {
                    function a() {
                      if (!b) {
                        let B = function(D, w, M) {
                          w = r.createShader(w);
                          r.shaderSource(w, M);
                          r.compileShader(w);
                          M = r.getShaderInfoLog(w);
                          if (0 < (M || "").length) {
                            throw M;
                          }
                          r.attachShader(D, w);
                        };
                        var k = document.createElement("canvas"), t = { alpha: 1, depth: 0, stencil: 0, antialias: 0, premultipliedAlpha: 1, preserveDrawingBuffer: 0, powerPreference: "high-performance", failIfMajorPerformanceCaveat: 0, enableExtensionsByDefault: 1, explicitSwapControl: 1, renderViaOffscreenBackBuffer: 1 };
                        let r;
                        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                          if (r = k.getContext("webgl", t), c = 1, !r) {
                            return console.log("No WebGL support. Image mesh will not be drawn."), false;
                          }
                        } else {
                          if (r = k.getContext("webgl2", t)) {
                            c = 2;
                          } else {
                            if (r = k.getContext("webgl", t)) {
                              c = 1;
                            } else {
                              return console.log("No WebGL support. Image mesh will not be drawn."), false;
                            }
                          }
                        }
                        r = new Proxy(r, { get(D, w) {
                          if (D.isContextLost()) {
                            if (p || (console.error("Cannot render the mesh because the GL Context was lost. Tried to invoke ", w), p = true), "function" === typeof D[w]) {
                              return function() {
                              };
                            }
                          } else {
                            return "function" === typeof D[w] ? function(...M) {
                              return D[w].apply(D, M);
                            } : D[w];
                          }
                        }, set(D, w, M) {
                          if (D.isContextLost()) {
                            p || (console.error("Cannot render the mesh because the GL Context was lost. Tried to set property " + w), p = true);
                          } else {
                            return D[w] = M, true;
                          }
                        } });
                        d = Math.min(r.getParameter(r.MAX_RENDERBUFFER_SIZE), r.getParameter(r.MAX_TEXTURE_SIZE));
                        k = r.createProgram();
                        B(k, r.VERTEX_SHADER, "attribute vec2 vertex;\n                attribute vec2 uv;\n                uniform vec4 mat;\n                uniform vec2 translate;\n                varying vec2 st;\n                void main() {\n                    st = uv;\n                    gl_Position = vec4(mat2(mat) * vertex + translate, 0, 1);\n                }");
                        B(k, r.FRAGMENT_SHADER, "precision highp float;\n                uniform sampler2D image;\n                varying vec2 st;\n                void main() {\n                    gl_FragColor = texture2D(image, st);\n                }");
                        r.bindAttribLocation(k, 0, "vertex");
                        r.bindAttribLocation(k, 1, "uv");
                        r.linkProgram(k);
                        t = r.getProgramInfoLog(k);
                        if (0 < (t || "").trim().length) {
                          throw t;
                        }
                        e = r.getUniformLocation(k, "mat");
                        f = r.getUniformLocation(k, "translate");
                        r.useProgram(k);
                        r.bindBuffer(r.ARRAY_BUFFER, r.createBuffer());
                        r.enableVertexAttribArray(0);
                        r.enableVertexAttribArray(1);
                        r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, r.createBuffer());
                        r.uniform1i(r.getUniformLocation(k, "image"), 0);
                        r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
                        b = r;
                      }
                      return true;
                    }
                    let b = null, c = 0, d = 0, e = null, f = null, g = 0, n = 0, p = false;
                    a();
                    this.hc = function() {
                      a();
                      return d;
                    };
                    this.Mb = function(k) {
                      b.deleteTexture && b.deleteTexture(k);
                    };
                    this.Lb = function(k) {
                      if (!a()) {
                        return null;
                      }
                      const t = b.createTexture();
                      if (!t) {
                        return null;
                      }
                      b.bindTexture(b.TEXTURE_2D, t);
                      b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, k);
                      b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE);
                      b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE);
                      b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.LINEAR);
                      2 == c ? (b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR_MIPMAP_LINEAR), b.generateMipmap(b.TEXTURE_2D)) : b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR);
                      return t;
                    };
                    const l = new ha(8), u = new ha(8), v = new ha(10), x = new ha(10);
                    this.Qb = function(k, t, r, B, D) {
                      if (a()) {
                        var w = l.push(k), M = u.push(t);
                        if (b.canvas) {
                          if (b.canvas.width != w || b.canvas.height != M) {
                            b.canvas.width = w, b.canvas.height = M;
                          }
                          b.viewport(0, M - t, k, t);
                          b.disable(b.SCISSOR_TEST);
                          b.clearColor(0, 0, 0, 0);
                          b.clear(b.COLOR_BUFFER_BIT);
                          b.enable(b.SCISSOR_TEST);
                          r.sort((H, ba) => ba.wb - H.wb);
                          w = v.push(B);
                          g != w && (b.bufferData(b.ARRAY_BUFFER, 8 * w, b.DYNAMIC_DRAW), g = w);
                          w = 0;
                          for (var T of r) {
                            b.bufferSubData(b.ARRAY_BUFFER, w, T.Ta), w += 4 * T.Ta.length;
                          }
                          console.assert(w == 4 * B);
                          for (var ca of r) {
                            b.bufferSubData(b.ARRAY_BUFFER, w, ca.Db), w += 4 * ca.Db.length;
                          }
                          console.assert(w == 8 * B);
                          w = x.push(D);
                          n != w && (b.bufferData(b.ELEMENT_ARRAY_BUFFER, 2 * w, b.DYNAMIC_DRAW), n = w);
                          T = 0;
                          for (var ra of r) {
                            b.bufferSubData(b.ELEMENT_ARRAY_BUFFER, T, ra.indices), T += 2 * ra.indices.length;
                          }
                          console.assert(T == 2 * D);
                          ra = 0;
                          ca = true;
                          w = T = 0;
                          for (const H of r) {
                            H.image.Ka != ra && (b.bindTexture(b.TEXTURE_2D, H.image.Ja || null), ra = H.image.Ka);
                            H.mc ? (b.scissor(H.Ya, M - H.Za - H.jb, H.Ac, H.jb), ca = true) : ca && (b.scissor(0, M - t, k, t), ca = false);
                            r = 2 / k;
                            const ba = -2 / t;
                            b.uniform4f(e, H.ha[0] * r * H.Ba, H.ha[1] * ba * H.Ca, H.ha[2] * r * H.Ba, H.ha[3] * ba * H.Ca);
                            b.uniform2f(f, H.ha[4] * r * H.Ba + r * (H.Ya - H.ic * H.Ba) - 1, H.ha[5] * ba * H.Ca + ba * (H.Za - H.jc * H.Ca) + 1);
                            b.vertexAttribPointer(0, 2, b.FLOAT, false, 0, w);
                            b.vertexAttribPointer(1, 2, b.FLOAT, false, 0, w + 4 * B);
                            b.drawElements(b.TRIANGLES, H.indices.length, b.UNSIGNED_SHORT, T);
                            w += 4 * H.Ta.length;
                            T += 2 * H.indices.length;
                          }
                          console.assert(w == 4 * B);
                          console.assert(T == 2 * D);
                        }
                      }
                    };
                    this.canvas = function() {
                      return a() && b.canvas;
                    };
                  }(), la = m.onRuntimeInitialized;
                  m.onRuntimeInitialized = function() {
                    function a(q) {
                      switch (q) {
                        case l.srcOver:
                          return "source-over";
                        case l.screen:
                          return "screen";
                        case l.overlay:
                          return "overlay";
                        case l.darken:
                          return "darken";
                        case l.lighten:
                          return "lighten";
                        case l.colorDodge:
                          return "color-dodge";
                        case l.colorBurn:
                          return "color-burn";
                        case l.hardLight:
                          return "hard-light";
                        case l.softLight:
                          return "soft-light";
                        case l.difference:
                          return "difference";
                        case l.exclusion:
                          return "exclusion";
                        case l.multiply:
                          return "multiply";
                        case l.hue:
                          return "hue";
                        case l.saturation:
                          return "saturation";
                        case l.color:
                          return "color";
                        case l.luminosity:
                          return "luminosity";
                      }
                    }
                    function b(q) {
                      return "rgba(" + ((16711680 & q) >>> 16) + "," + ((65280 & q) >>> 8) + "," + ((255 & q) >>> 0) + "," + ((4278190080 & q) >>> 24) / 255 + ")";
                    }
                    function c() {
                      0 < M.length && (ka.Qb(w.drawWidth(), w.drawHeight(), M, T, ca), M = [], ca = T = 0, w.reset(512, 512));
                      for (const q of D) {
                        for (const y of q.H) {
                          y();
                        }
                        q.H = [];
                      }
                      D.clear();
                    }
                    la && la();
                    var d = m.RenderPaintStyle;
                    const e = m.RenderPath, f = m.RenderPaint, g = m.Renderer, n = m.StrokeCap, p = m.StrokeJoin, l = m.BlendMode, u = d.fill, v = d.stroke, x = m.FillRule.evenOdd;
                    let k = 1;
                    var t = m.RenderImage.extend("CanvasRenderImage", { __construct: function({ la: q, xa: y } = {}) {
                      this.__parent.__construct.call(this);
                      this.Ka = k;
                      k = k + 1 & 2147483647 || 1;
                      this.la = q;
                      this.xa = y;
                    }, __destruct: function() {
                      this.Ja && (ka.Mb(this.Ja), URL.revokeObjectURL(this.Wa));
                      this.__parent.__destruct.call(this);
                    }, decode: function(q) {
                      var y = this;
                      y.xa && y.xa(y);
                      var F = new Image();
                      y.Wa = URL.createObjectURL(new Blob([q], { type: "image/png" }));
                      F.onload = function() {
                        y.Fb = F;
                        y.Ja = ka.Lb(F);
                        y.size(F.width, F.height);
                        y.la && y.la(y);
                      };
                      F.src = y.Wa;
                    } }), r = e.extend("CanvasRenderPath", { __construct: function() {
                      this.__parent.__construct.call(this);
                      this.T = new Path2D();
                    }, rewind: function() {
                      this.T = new Path2D();
                    }, addPath: function(q, y, F, G, A, I, J) {
                      var K = this.T, X = K.addPath;
                      q = q.T;
                      const Q = new DOMMatrix();
                      Q.a = y;
                      Q.b = F;
                      Q.c = G;
                      Q.d = A;
                      Q.e = I;
                      Q.f = J;
                      X.call(K, q, Q);
                    }, fillRule: function(q) {
                      this.Va = q;
                    }, moveTo: function(q, y) {
                      this.T.moveTo(q, y);
                    }, lineTo: function(q, y) {
                      this.T.lineTo(q, y);
                    }, cubicTo: function(q, y, F, G, A, I) {
                      this.T.bezierCurveTo(q, y, F, G, A, I);
                    }, close: function() {
                      this.T.closePath();
                    } }), B = f.extend("CanvasRenderPaint", { color: function(q) {
                      this.Xa = b(q);
                    }, thickness: function(q) {
                      this.Ib = q;
                    }, join: function(q) {
                      switch (q) {
                        case p.miter:
                          this.Ia = "miter";
                          break;
                        case p.round:
                          this.Ia = "round";
                          break;
                        case p.bevel:
                          this.Ia = "bevel";
                      }
                    }, cap: function(q) {
                      switch (q) {
                        case n.butt:
                          this.Ha = "butt";
                          break;
                        case n.round:
                          this.Ha = "round";
                          break;
                        case n.square:
                          this.Ha = "square";
                      }
                    }, style: function(q) {
                      this.Hb = q;
                    }, blendMode: function(q) {
                      this.Eb = a(q);
                    }, clearGradient: function() {
                      this.ja = null;
                    }, linearGradient: function(q, y, F, G) {
                      this.ja = { yb: q, zb: y, bb: F, cb: G, Ra: [] };
                    }, radialGradient: function(q, y, F, G) {
                      this.ja = { yb: q, zb: y, bb: F, cb: G, Ra: [], ec: true };
                    }, addStop: function(q, y) {
                      this.ja.Ra.push({ color: q, stop: y });
                    }, completeGradient: function() {
                    }, draw: function(q, y, F) {
                      let G = this.Hb;
                      var A = this.Xa, I = this.ja;
                      q.globalCompositeOperation = this.Eb;
                      if (null != I) {
                        A = I.yb;
                        var J = I.zb;
                        const X = I.bb;
                        var K = I.cb;
                        const Q = I.Ra;
                        I.ec ? (I = X - A, K -= J, A = q.createRadialGradient(A, J, 0, A, J, Math.sqrt(I * I + K * K))) : A = q.createLinearGradient(A, J, X, K);
                        for (let da = 0, R = Q.length; da < R; da++) {
                          J = Q[da], A.addColorStop(J.stop, b(J.color));
                        }
                        this.Xa = A;
                        this.ja = null;
                      }
                      switch (G) {
                        case v:
                          q.strokeStyle = A;
                          q.lineWidth = this.Ib;
                          q.lineCap = this.Ha;
                          q.lineJoin = this.Ia;
                          q.stroke(y);
                          break;
                        case u:
                          q.fillStyle = A, q.fill(y, F);
                      }
                    } });
                    const D = /* @__PURE__ */ new Set();
                    let w = null, M = [], T = 0, ca = 0;
                    var ra = m.CanvasRenderer = g.extend("Renderer", { __construct: function(q) {
                      this.__parent.__construct.call(this);
                      this.S = [1, 0, 0, 1, 0, 0];
                      this.C = q.getContext("2d");
                      this.Ua = q;
                      this.H = [];
                    }, save: function() {
                      this.S.push(...this.S.slice(this.S.length - 6));
                      this.H.push(this.C.save.bind(this.C));
                    }, restore: function() {
                      const q = this.S.length - 6;
                      if (6 > q) {
                        throw "restore() called without matching save().";
                      }
                      this.S.splice(q);
                      this.H.push(this.C.restore.bind(this.C));
                    }, transform: function(q, y, F, G, A, I) {
                      const J = this.S, K = J.length - 6;
                      J.splice(K, 6, J[K] * q + J[K + 2] * y, J[K + 1] * q + J[K + 3] * y, J[K] * F + J[K + 2] * G, J[K + 1] * F + J[K + 3] * G, J[K] * A + J[K + 2] * I + J[K + 4], J[K + 1] * A + J[K + 3] * I + J[K + 5]);
                      this.H.push(this.C.transform.bind(this.C, q, y, F, G, A, I));
                    }, rotate: function(q) {
                      const y = Math.sin(q);
                      q = Math.cos(q);
                      this.transform(q, y, -y, q, 0, 0);
                    }, _drawPath: function(q, y) {
                      this.H.push(y.draw.bind(y, this.C, q.T, q.Va === x ? "evenodd" : "nonzero"));
                    }, _drawRiveImage: function(q, y, F) {
                      var G = q.Fb;
                      if (G) {
                        var A = this.C, I = a(y);
                        this.H.push(function() {
                          A.globalCompositeOperation = I;
                          A.globalAlpha = F;
                          A.drawImage(G, 0, 0);
                          A.globalAlpha = 1;
                        });
                      }
                    }, _getMatrix: function(q) {
                      const y = this.S, F = y.length - 6;
                      for (let G = 0; 6 > G; ++G) {
                        q[G] = y[F + G];
                      }
                    }, _drawImageMesh: function(q, y, F, G, A, I, J, K, X, Q) {
                      var da = this.C.canvas.width, R = this.C.canvas.height;
                      const Yb = X - J, Zb = Q - K;
                      J = Math.max(J, 0);
                      K = Math.max(K, 0);
                      X = Math.min(X, da);
                      Q = Math.min(Q, R);
                      const Ga = X - J, Ha = Q - K;
                      console.assert(Ga <= Math.min(Yb, da));
                      console.assert(Ha <= Math.min(Zb, R));
                      if (!(0 >= Ga || 0 >= Ha)) {
                        X = Ga < Yb || Ha < Zb;
                        da = Q = 1;
                        var sa = Math.ceil(Ga * Q), ta = Math.ceil(Ha * da);
                        R = ka.hc();
                        sa > R && (Q *= R / sa, sa = R);
                        ta > R && (da *= R / ta, ta = R);
                        w || (w = new m.DynamicRectanizer(R), w.reset(512, 512));
                        R = w.addRect(sa, ta);
                        0 > R && (c(), D.add(this), R = w.addRect(sa, ta), console.assert(0 <= R));
                        var $b = R & 65535, ac = R >> 16;
                        M.push({ ha: this.S.slice(this.S.length - 6), image: q, Ya: $b, Za: ac, ic: J, jc: K, Ac: sa, jb: ta, Ba: Q, Ca: da, Ta: new Float32Array(G), Db: new Float32Array(A), indices: new Uint16Array(I), mc: X, wb: q.Ka << 1 | (X ? 1 : 0) });
                        T += G.length;
                        ca += I.length;
                        var za = this.C, qd = a(y);
                        this.H.push(function() {
                          za.save();
                          za.resetTransform();
                          za.globalCompositeOperation = qd;
                          za.globalAlpha = F;
                          const bc = ka.canvas();
                          bc && za.drawImage(bc, $b, ac, sa, ta, J, K, Ga, Ha);
                          za.restore();
                        });
                      }
                    }, _clipPath: function(q) {
                      this.H.push(this.C.clip.bind(this.C, q.T, q.Va === x ? "evenodd" : "nonzero"));
                    }, clear: function() {
                      D.add(this);
                      this.H.push(this.C.clearRect.bind(this.C, 0, 0, this.Ua.width, this.Ua.height));
                    }, flush: function() {
                    }, translate: function(q, y) {
                      this.transform(1, 0, 0, 1, q, y);
                    } });
                    m.makeRenderer = function(q) {
                      const y = new ra(q), F = y.C;
                      return new Proxy(y, { get(G, A) {
                        if ("function" === typeof G[A]) {
                          return function(...I) {
                            return G[A].apply(G, I);
                          };
                        }
                        if ("function" === typeof F[A]) {
                          if (-1 < ja.indexOf(A)) {
                            throw Error("RiveException: Method call to '" + A + "()' is not allowed, as the renderer cannot immediately pass through the return                 values of any canvas 2d context methods.");
                          }
                          return function(...I) {
                            y.H.push(F[A].bind(F, ...I));
                          };
                        }
                        return G[A];
                      }, set(G, A, I) {
                        if (A in F) {
                          return y.H.push(() => {
                            F[A] = I;
                          }), true;
                        }
                      } });
                    };
                    m.decodeImage = function(q, y) {
                      new t({ la: y }).decode(q);
                    };
                    m.renderFactory = { makeRenderPaint: function() {
                      return new B();
                    }, makeRenderPath: function() {
                      return new r();
                    }, makeRenderImage: function() {
                      let q = ba;
                      return new t({ xa: () => {
                        q.total++;
                      }, la: () => {
                        q.loaded++;
                        if (q.loaded === q.total) {
                          const y = q.ready;
                          y && (y(), q.ready = null);
                        }
                      } });
                    } };
                    let H = m.load, ba = null;
                    m.load = function(q, y, F = true) {
                      const G = new m.FallbackFileAssetLoader();
                      void 0 !== y && G.addLoader(y);
                      F && (y = new m.CDNFileAssetLoader(), G.addLoader(y));
                      return new Promise(function(A) {
                        let I = null;
                        ba = { total: 0, loaded: 0, ready: function() {
                          A(I);
                        } };
                        I = H(q, G);
                        0 == ba.total && A(I);
                      });
                    };
                    let rd = m.RendererWrapper.prototype.align;
                    m.RendererWrapper.prototype.align = function(q, y, F, G, A = 1) {
                      rd.call(this, q, y, F, G, A);
                    };
                    d = new fa();
                    m.requestAnimationFrame = d.requestAnimationFrame.bind(d);
                    m.cancelAnimationFrame = d.cancelAnimationFrame.bind(d);
                    m.enableFPSCounter = d.Rb.bind(d);
                    m.disableFPSCounter = d.Ob;
                    d.ob = c;
                    m.resolveAnimationFrame = c;
                    m.cleanup = function() {
                      w && w.delete();
                    };
                  };
                  var ma = Object.assign({}, m), na = "./this.program", oa = "object" == typeof window, pa = "function" == typeof importScripts, qa = "", ua, va;
                  if (oa || pa) {
                    pa ? qa = self.location.href : "undefined" != typeof document && document.currentScript && (qa = document.currentScript.src), _scriptDir && (qa = _scriptDir), 0 !== qa.indexOf("blob:") ? qa = qa.substr(0, qa.replace(/[?#].*/, "").lastIndexOf("/") + 1) : qa = "", pa && (va = (a) => {
                      var b = new XMLHttpRequest();
                      b.open("GET", a, false);
                      b.responseType = "arraybuffer";
                      b.send(null);
                      return new Uint8Array(b.response);
                    }), ua = (a, b, c) => {
                      var d = new XMLHttpRequest();
                      d.open("GET", a, true);
                      d.responseType = "arraybuffer";
                      d.onload = () => {
                        200 == d.status || 0 == d.status && d.response ? b(d.response) : c();
                      };
                      d.onerror = c;
                      d.send(null);
                    };
                  }
                  var wa = m.print || console.log.bind(console), xa = m.printErr || console.error.bind(console);
                  Object.assign(m, ma);
                  ma = null;
                  m.thisProgram && (na = m.thisProgram);
                  var ya;
                  m.wasmBinary && (ya = m.wasmBinary);
                  var noExitRuntime = m.noExitRuntime || true;
                  "object" != typeof WebAssembly && Aa("no native wasm support detected");
                  var Ba, z, Ca = false, C, E, Da, Ea, L, N, Fa, Ia;
                  function Ja() {
                    var a = Ba.buffer;
                    m.HEAP8 = C = new Int8Array(a);
                    m.HEAP16 = Da = new Int16Array(a);
                    m.HEAP32 = L = new Int32Array(a);
                    m.HEAPU8 = E = new Uint8Array(a);
                    m.HEAPU16 = Ea = new Uint16Array(a);
                    m.HEAPU32 = N = new Uint32Array(a);
                    m.HEAPF32 = Fa = new Float32Array(a);
                    m.HEAPF64 = Ia = new Float64Array(a);
                  }
                  var Ka, La = [], Ma = [], Na = [];
                  function Oa() {
                    var a = m.preRun.shift();
                    La.unshift(a);
                  }
                  var Pa = 0, Qa = null, Ra = null;
                  function Aa(a) {
                    if (m.onAbort) {
                      m.onAbort(a);
                    }
                    a = "Aborted(" + a + ")";
                    xa(a);
                    Ca = true;
                    a = new WebAssembly.RuntimeError(a + ". Build with -sASSERTIONS for more info.");
                    ea(a);
                    throw a;
                  }
                  function Sa(a) {
                    return a.startsWith("data:application/octet-stream;base64,");
                  }
                  var Ta;
                  Ta = "canvas_advanced.wasm";
                  if (!Sa(Ta)) {
                    var Ua = Ta;
                    Ta = m.locateFile ? m.locateFile(Ua, qa) : qa + Ua;
                  }
                  function Va(a) {
                    if (a == Ta && ya) {
                      return new Uint8Array(ya);
                    }
                    if (va) {
                      return va(a);
                    }
                    throw "both async and sync fetching of the wasm failed";
                  }
                  function Wa(a) {
                    if (!ya && (oa || pa)) {
                      if ("function" == typeof fetch && !a.startsWith("file://")) {
                        return fetch(a, { credentials: "same-origin" }).then((b) => {
                          if (!b.ok) {
                            throw "failed to load wasm binary file at '" + a + "'";
                          }
                          return b.arrayBuffer();
                        }).catch(() => Va(a));
                      }
                      if (ua) {
                        return new Promise((b, c) => {
                          ua(a, (d) => b(new Uint8Array(d)), c);
                        });
                      }
                    }
                    return Promise.resolve().then(() => Va(a));
                  }
                  function Xa(a, b, c) {
                    return Wa(a).then((d) => WebAssembly.instantiate(d, b)).then((d) => d).then(c, (d) => {
                      xa("failed to asynchronously prepare wasm: " + d);
                      Aa(d);
                    });
                  }
                  function Ya(a, b) {
                    var c = Ta;
                    return ya || "function" != typeof WebAssembly.instantiateStreaming || Sa(c) || c.startsWith("file://") || "function" != typeof fetch ? Xa(c, a, b) : fetch(c, { credentials: "same-origin" }).then((d) => WebAssembly.instantiateStreaming(d, a).then(b, function(e) {
                      xa("wasm streaming compile failed: " + e);
                      xa("falling back to ArrayBuffer instantiation");
                      return Xa(c, a, b);
                    }));
                  }
                  var Za, $a, db = { 445532: (a, b, c, d, e) => {
                    if ("undefined" === typeof window || void 0 === (window.AudioContext || window.webkitAudioContext)) {
                      return 0;
                    }
                    if ("undefined" === typeof window.h) {
                      window.h = { Aa: 0 };
                      window.h.I = {};
                      window.h.I.ya = a;
                      window.h.I.capture = b;
                      window.h.I.La = c;
                      window.h.ga = {};
                      window.h.ga.stopped = d;
                      window.h.ga.xb = e;
                      let f = window.h;
                      f.D = [];
                      f.yc = function(g) {
                        for (var n = 0; n < f.D.length; ++n) {
                          if (null == f.D[n]) {
                            return f.D[n] = g, n;
                          }
                        }
                        f.D.push(g);
                        return f.D.length - 1;
                      };
                      f.Cb = function(g) {
                        for (f.D[g] = null; 0 < f.D.length; ) {
                          if (null == f.D[f.D.length - 1]) {
                            f.D.pop();
                          } else {
                            break;
                          }
                        }
                      };
                      f.Sc = function(g) {
                        for (var n = 0; n < f.D.length; ++n) {
                          if (f.D[n] == g) {
                            return f.Cb(n);
                          }
                        }
                      };
                      f.ra = function(g) {
                        return f.D[g];
                      };
                      f.Bb = ["touchend", "click"];
                      f.unlock = function() {
                        for (var g = 0; g < f.D.length; ++g) {
                          var n = f.D[g];
                          null != n && null != n.J && n.state === f.ga.xb && n.J.resume().then(() => {
                            ab(n.pb);
                          }, (p) => {
                            console.error("Failed to resume audiocontext", p);
                          });
                        }
                        f.Bb.map(function(p) {
                          document.removeEventListener(p, f.unlock, true);
                        });
                      };
                      f.Bb.map(function(g) {
                        document.addEventListener(g, f.unlock, true);
                      });
                    }
                    window.h.Aa += 1;
                    return 1;
                  }, 447710: () => {
                    "undefined" !== typeof window.h && (--window.h.Aa, 0 === window.h.Aa && delete window.h);
                  }, 447874: () => void 0 !== navigator.mediaDevices && void 0 !== navigator.mediaDevices.getUserMedia, 447978: () => {
                    try {
                      var a = new (window.AudioContext || window.webkitAudioContext)(), b = a.sampleRate;
                      a.close();
                      return b;
                    } catch (c) {
                      return 0;
                    }
                  }, 448149: (a, b, c, d, e, f) => {
                    if ("undefined" === typeof window.h) {
                      return -1;
                    }
                    var g = {}, n = {};
                    a == window.h.I.ya && 0 != c && (n.sampleRate = c);
                    g.J = new (window.AudioContext || window.webkitAudioContext)(n);
                    g.J.suspend();
                    g.state = window.h.ga.stopped;
                    c = 0;
                    a != window.h.I.ya && (c = b);
                    g.Z = g.J.createScriptProcessor(d, c, b);
                    g.Z.onaudioprocess = function(p) {
                      if (null == g.sa || 0 == g.sa.length) {
                        g.sa = new Float32Array(Fa.buffer, e, d * b);
                      }
                      if (a == window.h.I.capture || a == window.h.I.La) {
                        for (var l = 0; l < b; l += 1) {
                          for (var u = p.inputBuffer.getChannelData(l), v = g.sa, x = 0; x < d; x += 1) {
                            v[x * b + l] = u[x];
                          }
                        }
                        bb(f, d, e);
                      }
                      if (a == window.h.I.ya || a == window.h.I.La) {
                        for (cb(f, d, e), l = 0; l < p.outputBuffer.numberOfChannels; ++l) {
                          for (u = p.outputBuffer.getChannelData(l), v = g.sa, x = 0; x < d; x += 1) {
                            u[x] = v[x * b + l];
                          }
                        }
                      } else {
                        for (l = 0; l < p.outputBuffer.numberOfChannels; ++l) {
                          p.outputBuffer.getChannelData(l).fill(0);
                        }
                      }
                    };
                    a != window.h.I.capture && a != window.h.I.La || navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(function(p) {
                      g.Da = g.J.createMediaStreamSource(p);
                      g.Da.connect(g.Z);
                      g.Z.connect(g.J.destination);
                    }).catch(function(p) {
                      console.log("Failed to get user media: " + p);
                    });
                    a == window.h.I.ya && g.Z.connect(g.J.destination);
                    g.pb = f;
                    return window.h.yc(g);
                  }, 451026: (a) => window.h.ra(a).J.sampleRate, 451099: (a) => {
                    a = window.h.ra(a);
                    void 0 !== a.Z && (a.Z.onaudioprocess = function() {
                    }, a.Z.disconnect(), a.Z = void 0);
                    void 0 !== a.Da && (a.Da.disconnect(), a.Da = void 0);
                    a.J.close();
                    a.J = void 0;
                    a.pb = void 0;
                  }, 451499: (a) => {
                    window.h.Cb(a);
                  }, 451549: (a) => {
                    a = window.h.ra(a);
                    a.J.resume();
                    a.state = window.h.ga.xb;
                  }, 451688: (a) => {
                    a = window.h.ra(a);
                    a.J.suspend();
                    a.state = window.h.ga.stopped;
                  } }, eb = (a) => {
                    for (; 0 < a.length; ) {
                      a.shift()(m);
                    }
                  }, fb = (a, b) => {
                    for (var c = 0, d = a.length - 1; 0 <= d; d--) {
                      var e = a[d];
                      "." === e ? a.splice(d, 1) : ".." === e ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--);
                    }
                    if (b) {
                      for (; c; c--) {
                        a.unshift("..");
                      }
                    }
                    return a;
                  }, gb = (a) => {
                    var b = "/" === a.charAt(0), c = "/" === a.substr(-1);
                    (a = fb(a.split("/").filter((d) => !!d), !b).join("/")) || b || (a = ".");
                    a && c && (a += "/");
                    return (b ? "/" : "") + a;
                  }, hb = (a) => {
                    var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
                    a = b[0];
                    b = b[1];
                    if (!a && !b) {
                      return ".";
                    }
                    b && (b = b.substr(0, b.length - 1));
                    return a + b;
                  }, ib = (a) => {
                    if ("/" === a) {
                      return "/";
                    }
                    a = gb(a);
                    a = a.replace(/\/$/, "");
                    var b = a.lastIndexOf("/");
                    return -1 === b ? a : a.substr(b + 1);
                  }, jb = () => {
                    if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) {
                      return (a) => crypto.getRandomValues(a);
                    }
                    Aa("initRandomDevice");
                  }, kb = (a) => (kb = jb())(a);
                  function lb() {
                    for (var a = "", b = false, c = arguments.length - 1; -1 <= c && !b; c--) {
                      b = 0 <= c ? arguments[c] : "/";
                      if ("string" != typeof b) {
                        throw new TypeError("Arguments to path.resolve must be strings");
                      }
                      if (!b) {
                        return "";
                      }
                      a = b + "/" + a;
                      b = "/" === b.charAt(0);
                    }
                    a = fb(a.split("/").filter((d) => !!d), !b).join("/");
                    return (b ? "/" : "") + a || ".";
                  }
                  var mb = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0, nb = (a, b, c) => {
                    var d = b + c;
                    for (c = b; a[c] && !(c >= d); ) {
                      ++c;
                    }
                    if (16 < c - b && a.buffer && mb) {
                      return mb.decode(a.subarray(b, c));
                    }
                    for (d = ""; b < c; ) {
                      var e = a[b++];
                      if (e & 128) {
                        var f = a[b++] & 63;
                        if (192 == (e & 224)) {
                          d += String.fromCharCode((e & 31) << 6 | f);
                        } else {
                          var g = a[b++] & 63;
                          e = 224 == (e & 240) ? (e & 15) << 12 | f << 6 | g : (e & 7) << 18 | f << 12 | g << 6 | a[b++] & 63;
                          65536 > e ? d += String.fromCharCode(e) : (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023));
                        }
                      } else {
                        d += String.fromCharCode(e);
                      }
                    }
                    return d;
                  }, ob = [], pb = (a) => {
                    for (var b = 0, c = 0; c < a.length; ++c) {
                      var d = a.charCodeAt(c);
                      127 >= d ? b++ : 2047 >= d ? b += 2 : 55296 <= d && 57343 >= d ? (b += 4, ++c) : b += 3;
                    }
                    return b;
                  }, qb = (a, b, c, d) => {
                    if (!(0 < d)) {
                      return 0;
                    }
                    var e = c;
                    d = c + d - 1;
                    for (var f = 0; f < a.length; ++f) {
                      var g = a.charCodeAt(f);
                      if (55296 <= g && 57343 >= g) {
                        var n = a.charCodeAt(++f);
                        g = 65536 + ((g & 1023) << 10) | n & 1023;
                      }
                      if (127 >= g) {
                        if (c >= d) {
                          break;
                        }
                        b[c++] = g;
                      } else {
                        if (2047 >= g) {
                          if (c + 1 >= d) {
                            break;
                          }
                          b[c++] = 192 | g >> 6;
                        } else {
                          if (65535 >= g) {
                            if (c + 2 >= d) {
                              break;
                            }
                            b[c++] = 224 | g >> 12;
                          } else {
                            if (c + 3 >= d) {
                              break;
                            }
                            b[c++] = 240 | g >> 18;
                            b[c++] = 128 | g >> 12 & 63;
                          }
                          b[c++] = 128 | g >> 6 & 63;
                        }
                        b[c++] = 128 | g & 63;
                      }
                    }
                    b[c] = 0;
                    return c - e;
                  };
                  function rb(a, b) {
                    var c = Array(pb(a) + 1);
                    a = qb(a, c, 0, c.length);
                    b && (c.length = a);
                    return c;
                  }
                  var sb = [];
                  function tb(a, b) {
                    sb[a] = { input: [], F: [], V: b };
                    ub(a, vb);
                  }
                  var vb = { open: function(a) {
                    var b = sb[a.node.za];
                    if (!b) {
                      throw new O(43);
                    }
                    a.s = b;
                    a.seekable = false;
                  }, close: function(a) {
                    a.s.V.qa(a.s);
                  }, qa: function(a) {
                    a.s.V.qa(a.s);
                  }, read: function(a, b, c, d) {
                    if (!a.s || !a.s.V.ib) {
                      throw new O(60);
                    }
                    for (var e = 0, f = 0; f < d; f++) {
                      try {
                        var g = a.s.V.ib(a.s);
                      } catch (n) {
                        throw new O(29);
                      }
                      if (void 0 === g && 0 === e) {
                        throw new O(6);
                      }
                      if (null === g || void 0 === g) {
                        break;
                      }
                      e++;
                      b[c + f] = g;
                    }
                    e && (a.node.timestamp = Date.now());
                    return e;
                  }, write: function(a, b, c, d) {
                    if (!a.s || !a.s.V.Oa) {
                      throw new O(60);
                    }
                    try {
                      for (var e = 0; e < d; e++) {
                        a.s.V.Oa(a.s, b[c + e]);
                      }
                    } catch (f) {
                      throw new O(29);
                    }
                    d && (a.node.timestamp = Date.now());
                    return e;
                  } }, wb = { ib: function() {
                    a: {
                      if (!ob.length) {
                        var a = null;
                        "undefined" != typeof window && "function" == typeof window.prompt ? (a = window.prompt("Input: "), null !== a && (a += "\n")) : "function" == typeof readline && (a = readline(), null !== a && (a += "\n"));
                        if (!a) {
                          a = null;
                          break a;
                        }
                        ob = rb(a, true);
                      }
                      a = ob.shift();
                    }
                    return a;
                  }, Oa: function(a, b) {
                    null === b || 10 === b ? (wa(nb(a.F, 0)), a.F = []) : 0 != b && a.F.push(b);
                  }, qa: function(a) {
                    a.F && 0 < a.F.length && (wa(nb(a.F, 0)), a.F = []);
                  }, bc: function() {
                    return { Fc: 25856, Hc: 5, Ec: 191, Gc: 35387, Dc: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] };
                  }, cc: function() {
                    return 0;
                  }, dc: function() {
                    return [24, 80];
                  } }, xb = { Oa: function(a, b) {
                    null === b || 10 === b ? (xa(nb(a.F, 0)), a.F = []) : 0 != b && a.F.push(b);
                  }, qa: function(a) {
                    a.F && 0 < a.F.length && (xa(nb(a.F, 0)), a.F = []);
                  } };
                  function yb(a, b) {
                    var c = a.j ? a.j.length : 0;
                    c >= b || (b = Math.max(b, c * (1048576 > c ? 2 : 1.125) >>> 0), 0 != c && (b = Math.max(b, 256)), c = a.j, a.j = new Uint8Array(b), 0 < a.v && a.j.set(c.subarray(0, a.v), 0));
                  }
                  var P = { O: null, U() {
                    return P.createNode(null, "/", 16895, 0);
                  }, createNode(a, b, c, d) {
                    if (24576 === (c & 61440) || 4096 === (c & 61440)) {
                      throw new O(63);
                    }
                    P.O || (P.O = { dir: { node: { Y: P.l.Y, P: P.l.P, ka: P.l.ka, va: P.l.va, ub: P.l.ub, Ab: P.l.Ab, vb: P.l.vb, sb: P.l.sb, Ea: P.l.Ea }, stream: { ba: P.m.ba } }, file: { node: { Y: P.l.Y, P: P.l.P }, stream: { ba: P.m.ba, read: P.m.read, write: P.m.write, pa: P.m.pa, lb: P.m.lb, nb: P.m.nb } }, link: { node: { Y: P.l.Y, P: P.l.P, ma: P.l.ma }, stream: {} }, $a: { node: { Y: P.l.Y, P: P.l.P }, stream: zb } });
                    c = Ab(a, b, c, d);
                    16384 === (c.mode & 61440) ? (c.l = P.O.dir.node, c.m = P.O.dir.stream, c.j = {}) : 32768 === (c.mode & 61440) ? (c.l = P.O.file.node, c.m = P.O.file.stream, c.v = 0, c.j = null) : 40960 === (c.mode & 61440) ? (c.l = P.O.link.node, c.m = P.O.link.stream) : 8192 === (c.mode & 61440) && (c.l = P.O.$a.node, c.m = P.O.$a.stream);
                    c.timestamp = Date.now();
                    a && (a.j[b] = c, a.timestamp = c.timestamp);
                    return c;
                  }, Kc(a) {
                    return a.j ? a.j.subarray ? a.j.subarray(0, a.v) : new Uint8Array(a.j) : new Uint8Array(0);
                  }, l: { Y(a) {
                    var b = {};
                    b.Jc = 8192 === (a.mode & 61440) ? a.id : 1;
                    b.Mc = a.id;
                    b.mode = a.mode;
                    b.Oc = 1;
                    b.uid = 0;
                    b.Lc = 0;
                    b.za = a.za;
                    16384 === (a.mode & 61440) ? b.size = 4096 : 32768 === (a.mode & 61440) ? b.size = a.v : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
                    b.Bc = new Date(a.timestamp);
                    b.Nc = new Date(a.timestamp);
                    b.Ic = new Date(a.timestamp);
                    b.Jb = 4096;
                    b.Cc = Math.ceil(b.size / b.Jb);
                    return b;
                  }, P(a, b) {
                    void 0 !== b.mode && (a.mode = b.mode);
                    void 0 !== b.timestamp && (a.timestamp = b.timestamp);
                    if (void 0 !== b.size && (b = b.size, a.v != b)) {
                      if (0 == b) {
                        a.j = null, a.v = 0;
                      } else {
                        var c = a.j;
                        a.j = new Uint8Array(b);
                        c && a.j.set(c.subarray(0, Math.min(b, a.v)));
                        a.v = b;
                      }
                    }
                  }, ka() {
                    throw Bb[44];
                  }, va(a, b, c, d) {
                    return P.createNode(a, b, c, d);
                  }, ub(a, b, c) {
                    if (16384 === (a.mode & 61440)) {
                      try {
                        var d = Cb(b, c);
                      } catch (f) {
                      }
                      if (d) {
                        for (var e in d.j) {
                          throw new O(55);
                        }
                      }
                    }
                    delete a.parent.j[a.name];
                    a.parent.timestamp = Date.now();
                    a.name = c;
                    b.j[c] = a;
                    b.timestamp = a.parent.timestamp;
                    a.parent = b;
                  }, Ab(a, b) {
                    delete a.j[b];
                    a.timestamp = Date.now();
                  }, vb(a, b) {
                    var c = Cb(a, b), d;
                    for (d in c.j) {
                      throw new O(55);
                    }
                    delete a.j[b];
                    a.timestamp = Date.now();
                  }, sb(a) {
                    var b = [".", ".."], c;
                    for (c in a.j) {
                      a.j.hasOwnProperty(c) && b.push(c);
                    }
                    return b;
                  }, Ea(a, b, c) {
                    a = P.createNode(a, b, 41471, 0);
                    a.link = c;
                    return a;
                  }, ma(a) {
                    if (40960 !== (a.mode & 61440)) {
                      throw new O(28);
                    }
                    return a.link;
                  } }, m: { read(a, b, c, d, e) {
                    var f = a.node.j;
                    if (e >= a.node.v) {
                      return 0;
                    }
                    a = Math.min(a.node.v - e, d);
                    if (8 < a && f.subarray) {
                      b.set(f.subarray(e, e + a), c);
                    } else {
                      for (d = 0; d < a; d++) {
                        b[c + d] = f[e + d];
                      }
                    }
                    return a;
                  }, write(a, b, c, d, e, f) {
                    b.buffer === C.buffer && (f = false);
                    if (!d) {
                      return 0;
                    }
                    a = a.node;
                    a.timestamp = Date.now();
                    if (b.subarray && (!a.j || a.j.subarray)) {
                      if (f) {
                        return a.j = b.subarray(c, c + d), a.v = d;
                      }
                      if (0 === a.v && 0 === e) {
                        return a.j = b.slice(c, c + d), a.v = d;
                      }
                      if (e + d <= a.v) {
                        return a.j.set(b.subarray(c, c + d), e), d;
                      }
                    }
                    yb(a, e + d);
                    if (a.j.subarray && b.subarray) {
                      a.j.set(b.subarray(c, c + d), e);
                    } else {
                      for (f = 0; f < d; f++) {
                        a.j[e + f] = b[c + f];
                      }
                    }
                    a.v = Math.max(a.v, e + d);
                    return d;
                  }, ba(a, b, c) {
                    1 === c ? b += a.position : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.v);
                    if (0 > b) {
                      throw new O(28);
                    }
                    return b;
                  }, pa(a, b, c) {
                    yb(a.node, b + c);
                    a.node.v = Math.max(a.node.v, b + c);
                  }, lb(a, b, c, d, e) {
                    if (32768 !== (a.node.mode & 61440)) {
                      throw new O(43);
                    }
                    a = a.node.j;
                    if (e & 2 || a.buffer !== C.buffer) {
                      if (0 < c || c + b < a.length) {
                        a.subarray ? a = a.subarray(c, c + b) : a = Array.prototype.slice.call(a, c, c + b);
                      }
                      c = true;
                      Aa();
                      b = void 0;
                      if (!b) {
                        throw new O(48);
                      }
                      C.set(a, b);
                    } else {
                      c = false, b = a.byteOffset;
                    }
                    return { o: b, M: c };
                  }, nb(a, b, c, d) {
                    P.m.write(a, b, 0, d, c, false);
                    return 0;
                  } } };
                  function Db(a, b) {
                    var c = 0;
                    a && (c |= 365);
                    b && (c |= 146);
                    return c;
                  }
                  var Eb = null, Fb = {}, Gb = [], Hb = 1, Ib = null, Jb = true, O = null, Bb = {}, Lb = (a, b = {}) => {
                    a = lb(a);
                    if (!a) {
                      return { path: "", node: null };
                    }
                    b = Object.assign({ gb: true, Qa: 0 }, b);
                    if (8 < b.Qa) {
                      throw new O(32);
                    }
                    a = a.split("/").filter((g) => !!g);
                    for (var c = Eb, d = "/", e = 0; e < a.length; e++) {
                      var f = e === a.length - 1;
                      if (f && b.parent) {
                        break;
                      }
                      c = Cb(c, a[e]);
                      d = gb(d + "/" + a[e]);
                      c.wa && (!f || f && b.gb) && (c = c.wa.root);
                      if (!f || b.fb) {
                        for (f = 0; 40960 === (c.mode & 61440); ) {
                          if (c = Kb(d), d = lb(hb(d), c), c = Lb(d, { Qa: b.Qa + 1 }).node, 40 < f++) {
                            throw new O(32);
                          }
                        }
                      }
                    }
                    return { path: d, node: c };
                  }, Mb = (a) => {
                    for (var b; ; ) {
                      if (a === a.parent) {
                        return a = a.U.mb, b ? "/" !== a[a.length - 1] ? `${a}/${b}` : a + b : a;
                      }
                      b = b ? `${a.name}/${b}` : a.name;
                      a = a.parent;
                    }
                  }, Nb = (a, b) => {
                    for (var c = 0, d = 0; d < b.length; d++) {
                      c = (c << 5) - c + b.charCodeAt(d) | 0;
                    }
                    return (a + c >>> 0) % Ib.length;
                  }, Cb = (a, b) => {
                    var c;
                    if (c = (c = Ob(a, "x")) ? c : a.l.ka ? 0 : 2) {
                      throw new O(c, a);
                    }
                    for (c = Ib[Nb(a.id, b)]; c; c = c.lc) {
                      var d = c.name;
                      if (c.parent.id === a.id && d === b) {
                        return c;
                      }
                    }
                    return a.l.ka(a, b);
                  }, Ab = (a, b, c, d) => {
                    a = new Pb(a, b, c, d);
                    b = Nb(a.parent.id, a.name);
                    a.lc = Ib[b];
                    return Ib[b] = a;
                  }, Qb = (a) => {
                    var b = ["r", "w", "rw"][a & 3];
                    a & 512 && (b += "w");
                    return b;
                  }, Ob = (a, b) => {
                    if (Jb) {
                      return 0;
                    }
                    if (!b.includes("r") || a.mode & 292) {
                      if (b.includes("w") && !(a.mode & 146) || b.includes("x") && !(a.mode & 73)) {
                        return 2;
                      }
                    } else {
                      return 2;
                    }
                    return 0;
                  }, Rb = (a, b) => {
                    try {
                      return Cb(a, b), 20;
                    } catch (c) {
                    }
                    return Ob(a, "wx");
                  }, Sb = () => {
                    for (var a = 0; 4096 >= a; a++) {
                      if (!Gb[a]) {
                        return a;
                      }
                    }
                    throw new O(33);
                  }, Tb = (a) => {
                    a = Gb[a];
                    if (!a) {
                      throw new O(8);
                    }
                    return a;
                  }, Vb = (a, b = -1) => {
                    Ub || (Ub = function() {
                      this.h = {};
                    }, Ub.prototype = {}, Object.defineProperties(Ub.prototype, { object: { get() {
                      return this.node;
                    }, set(c) {
                      this.node = c;
                    } }, flags: { get() {
                      return this.h.flags;
                    }, set(c) {
                      this.h.flags = c;
                    } }, position: { get() {
                      return this.h.position;
                    }, set(c) {
                      this.h.position = c;
                    } } }));
                    a = Object.assign(new Ub(), a);
                    -1 == b && (b = Sb());
                    a.X = b;
                    return Gb[b] = a;
                  }, zb = { open: (a) => {
                    a.m = Fb[a.node.za].m;
                    a.m.open && a.m.open(a);
                  }, ba: () => {
                    throw new O(70);
                  } }, ub = (a, b) => {
                    Fb[a] = { m: b };
                  }, Wb = (a, b) => {
                    var c = "/" === b, d = !b;
                    if (c && Eb) {
                      throw new O(10);
                    }
                    if (!c && !d) {
                      var e = Lb(b, { gb: false });
                      b = e.path;
                      e = e.node;
                      if (e.wa) {
                        throw new O(10);
                      }
                      if (16384 !== (e.mode & 61440)) {
                        throw new O(54);
                      }
                    }
                    b = { type: a, Qc: {}, mb: b, kc: [] };
                    a = a.U(b);
                    a.U = b;
                    b.root = a;
                    c ? Eb = a : e && (e.wa = b, e.U && e.U.kc.push(b));
                  }, S = (a, b, c) => {
                    var d = Lb(a, { parent: true }).node;
                    a = ib(a);
                    if (!a || "." === a || ".." === a) {
                      throw new O(28);
                    }
                    var e = Rb(d, a);
                    if (e) {
                      throw new O(e);
                    }
                    if (!d.l.va) {
                      throw new O(63);
                    }
                    return d.l.va(d, a, b, c);
                  }, Xb = (a, b, c) => {
                    "undefined" == typeof c && (c = b, b = 438);
                    S(a, b | 8192, c);
                  }, cc = (a, b) => {
                    if (!lb(a)) {
                      throw new O(44);
                    }
                    var c = Lb(b, { parent: true }).node;
                    if (!c) {
                      throw new O(44);
                    }
                    b = ib(b);
                    var d = Rb(c, b);
                    if (d) {
                      throw new O(d);
                    }
                    if (!c.l.Ea) {
                      throw new O(63);
                    }
                    c.l.Ea(c, b, a);
                  }, Kb = (a) => {
                    a = Lb(a).node;
                    if (!a) {
                      throw new O(44);
                    }
                    if (!a.l.ma) {
                      throw new O(28);
                    }
                    return lb(Mb(a.parent), a.l.ma(a));
                  }, ec = (a, b, c) => {
                    if ("" === a) {
                      throw new O(44);
                    }
                    if ("string" == typeof b) {
                      var d = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }[b];
                      if ("undefined" == typeof d) {
                        throw Error(`Unknown file open mode: ${b}`);
                      }
                      b = d;
                    }
                    c = b & 64 ? ("undefined" == typeof c ? 438 : c) & 4095 | 32768 : 0;
                    if ("object" == typeof a) {
                      var e = a;
                    } else {
                      a = gb(a);
                      try {
                        e = Lb(a, { fb: !(b & 131072) }).node;
                      } catch (f) {
                      }
                    }
                    d = false;
                    if (b & 64) {
                      if (e) {
                        if (b & 128) {
                          throw new O(20);
                        }
                      } else {
                        e = S(a, c, 0), d = true;
                      }
                    }
                    if (!e) {
                      throw new O(44);
                    }
                    8192 === (e.mode & 61440) && (b &= -513);
                    if (b & 65536 && 16384 !== (e.mode & 61440)) {
                      throw new O(54);
                    }
                    if (!d && (c = e ? 40960 === (e.mode & 61440) ? 32 : 16384 === (e.mode & 61440) && ("r" !== Qb(b) || b & 512) ? 31 : Ob(e, Qb(b)) : 44)) {
                      throw new O(c);
                    }
                    if (b & 512 && !d) {
                      c = e;
                      c = "string" == typeof c ? Lb(c, { fb: true }).node : c;
                      if (!c.l.P) {
                        throw new O(63);
                      }
                      if (16384 === (c.mode & 61440)) {
                        throw new O(31);
                      }
                      if (32768 !== (c.mode & 61440)) {
                        throw new O(28);
                      }
                      if (d = Ob(c, "w")) {
                        throw new O(d);
                      }
                      c.l.P(c, { size: 0, timestamp: Date.now() });
                    }
                    b &= -131713;
                    e = Vb({ node: e, path: Mb(e), flags: b, seekable: true, position: 0, m: e.m, zc: [], error: false });
                    e.m.open && e.m.open(e);
                    !m.logReadFiles || b & 1 || (dc || (dc = {}), a in dc || (dc[a] = 1));
                    return e;
                  }, fc = (a, b, c) => {
                    if (null === a.X) {
                      throw new O(8);
                    }
                    if (!a.seekable || !a.m.ba) {
                      throw new O(70);
                    }
                    if (0 != c && 1 != c && 2 != c) {
                      throw new O(28);
                    }
                    a.position = a.m.ba(a, b, c);
                    a.zc = [];
                  }, gc = () => {
                    O || (O = function(a, b) {
                      this.name = "ErrnoError";
                      this.node = b;
                      this.pc = function(c) {
                        this.aa = c;
                      };
                      this.pc(a);
                      this.message = "FS error";
                    }, O.prototype = Error(), O.prototype.constructor = O, [44].forEach((a) => {
                      Bb[a] = new O(a);
                      Bb[a].stack = "<generic error, no stack>";
                    }));
                  }, hc, jc = (a, b, c) => {
                    a = gb("/dev/" + a);
                    var d = Db(!!b, !!c);
                    ic || (ic = 64);
                    var e = ic++ << 8 | 0;
                    ub(e, { open: (f) => {
                      f.seekable = false;
                    }, close: () => {
                      c && c.buffer && c.buffer.length && c(10);
                    }, read: (f, g, n, p) => {
                      for (var l = 0, u = 0; u < p; u++) {
                        try {
                          var v = b();
                        } catch (x) {
                          throw new O(29);
                        }
                        if (void 0 === v && 0 === l) {
                          throw new O(6);
                        }
                        if (null === v || void 0 === v) {
                          break;
                        }
                        l++;
                        g[n + u] = v;
                      }
                      l && (f.node.timestamp = Date.now());
                      return l;
                    }, write: (f, g, n, p) => {
                      for (var l = 0; l < p; l++) {
                        try {
                          c(g[n + l]);
                        } catch (u) {
                          throw new O(29);
                        }
                      }
                      p && (f.node.timestamp = Date.now());
                      return l;
                    } });
                    Xb(a, d, e);
                  }, ic, kc = {}, Ub, dc, lc = void 0;
                  function mc() {
                    lc += 4;
                    return L[lc - 4 >> 2];
                  }
                  function nc(a) {
                    if (void 0 === a) {
                      return "_unknown";
                    }
                    a = a.replace(/[^a-zA-Z0-9_]/g, "$");
                    var b = a.charCodeAt(0);
                    return 48 <= b && 57 >= b ? `_${a}` : a;
                  }
                  function oc(a, b) {
                    a = nc(a);
                    return { [a]: function() {
                      return b.apply(this, arguments);
                    } }[a];
                  }
                  function pc() {
                    this.M = [void 0];
                    this.hb = [];
                  }
                  var U = new pc(), qc = void 0;
                  function V(a) {
                    throw new qc(a);
                  }
                  var rc = (a) => {
                    a || V("Cannot use deleted val. handle = " + a);
                    return U.get(a).value;
                  }, sc = (a) => {
                    switch (a) {
                      case void 0:
                        return 1;
                      case null:
                        return 2;
                      case true:
                        return 3;
                      case false:
                        return 4;
                      default:
                        return U.pa({ tb: 1, value: a });
                    }
                  };
                  function tc(a) {
                    var b = Error, c = oc(a, function(d) {
                      this.name = a;
                      this.message = d;
                      d = Error(d).stack;
                      void 0 !== d && (this.stack = this.toString() + "\n" + d.replace(/^Error(:[^\n]*)?\n/, ""));
                    });
                    c.prototype = Object.create(b.prototype);
                    c.prototype.constructor = c;
                    c.prototype.toString = function() {
                      return void 0 === this.message ? this.name : `${this.name}: ${this.message}`;
                    };
                    return c;
                  }
                  var uc = void 0, vc = void 0;
                  function W(a) {
                    for (var b = ""; E[a]; ) {
                      b += vc[E[a++]];
                    }
                    return b;
                  }
                  var wc = [];
                  function xc() {
                    for (; wc.length; ) {
                      var a = wc.pop();
                      a.g.fa = false;
                      a["delete"]();
                    }
                  }
                  var yc = void 0, zc = {};
                  function Ac(a, b) {
                    for (void 0 === b && V("ptr should not be undefined"); a.A; ) {
                      b = a.na(b), a = a.A;
                    }
                    return b;
                  }
                  var Bc = {};
                  function Cc(a) {
                    a = Dc(a);
                    var b = W(a);
                    Ec(a);
                    return b;
                  }
                  function Fc(a, b) {
                    var c = Bc[a];
                    void 0 === c && V(b + " has unknown type " + Cc(a));
                    return c;
                  }
                  function Gc() {
                  }
                  var Hc = false;
                  function Ic(a) {
                    --a.count.value;
                    0 === a.count.value && (a.G ? a.L.W(a.G) : a.u.i.W(a.o));
                  }
                  function Jc(a, b, c) {
                    if (b === c) {
                      return a;
                    }
                    if (void 0 === c.A) {
                      return null;
                    }
                    a = Jc(a, b, c.A);
                    return null === a ? null : c.Pb(a);
                  }
                  var Kc = {};
                  function Lc(a, b) {
                    b = Ac(a, b);
                    return zc[b];
                  }
                  var Mc = void 0;
                  function Nc(a) {
                    throw new Mc(a);
                  }
                  function Oc(a, b) {
                    b.u && b.o || Nc("makeClassHandle requires ptr and ptrType");
                    !!b.L !== !!b.G && Nc("Both smartPtrType and smartPtr must be specified");
                    b.count = { value: 1 };
                    return Pc(Object.create(a, { g: { value: b } }));
                  }
                  function Pc(a) {
                    if ("undefined" === typeof FinalizationRegistry) {
                      return Pc = (b) => b, a;
                    }
                    Hc = new FinalizationRegistry((b) => {
                      Ic(b.g);
                    });
                    Pc = (b) => {
                      var c = b.g;
                      c.G && Hc.register(b, { g: c }, b);
                      return b;
                    };
                    Gc = (b) => {
                      Hc.unregister(b);
                    };
                    return Pc(a);
                  }
                  var Qc = {};
                  function Rc(a) {
                    for (; a.length; ) {
                      var b = a.pop();
                      a.pop()(b);
                    }
                  }
                  function Sc(a) {
                    return this.fromWireType(L[a >> 2]);
                  }
                  var Tc = {}, Uc = {};
                  function Y(a, b, c) {
                    function d(n) {
                      n = c(n);
                      n.length !== a.length && Nc("Mismatched type converter count");
                      for (var p = 0; p < a.length; ++p) {
                        Vc(a[p], n[p]);
                      }
                    }
                    a.forEach(function(n) {
                      Uc[n] = b;
                    });
                    var e = Array(b.length), f = [], g = 0;
                    b.forEach((n, p) => {
                      Bc.hasOwnProperty(n) ? e[p] = Bc[n] : (f.push(n), Tc.hasOwnProperty(n) || (Tc[n] = []), Tc[n].push(() => {
                        e[p] = Bc[n];
                        ++g;
                        g === f.length && d(e);
                      }));
                    });
                    0 === f.length && d(e);
                  }
                  function Wc(a) {
                    switch (a) {
                      case 1:
                        return 0;
                      case 2:
                        return 1;
                      case 4:
                        return 2;
                      case 8:
                        return 3;
                      default:
                        throw new TypeError(`Unknown type size: ${a}`);
                    }
                  }
                  function Xc(a, b, c = {}) {
                    var d = b.name;
                    a || V(`type "${d}" must have a positive integer typeid pointer`);
                    if (Bc.hasOwnProperty(a)) {
                      if (c.$b) {
                        return;
                      }
                      V(`Cannot register type '${d}' twice`);
                    }
                    Bc[a] = b;
                    delete Uc[a];
                    Tc.hasOwnProperty(a) && (b = Tc[a], delete Tc[a], b.forEach((e) => e()));
                  }
                  function Vc(a, b, c = {}) {
                    if (!("argPackAdvance" in b)) {
                      throw new TypeError("registerType registeredInstance requires argPackAdvance");
                    }
                    Xc(a, b, c);
                  }
                  function Yc(a) {
                    V(a.g.u.i.name + " instance already deleted");
                  }
                  function Zc() {
                  }
                  function $c(a, b, c) {
                    if (void 0 === a[b].B) {
                      var d = a[b];
                      a[b] = function() {
                        a[b].B.hasOwnProperty(arguments.length) || V(`Function '${c}' called with an invalid number of arguments (${arguments.length}) - expects one of (${a[b].B})!`);
                        return a[b].B[arguments.length].apply(this, arguments);
                      };
                      a[b].B = [];
                      a[b].B[d.ea] = d;
                    }
                  }
                  function ad(a, b, c) {
                    m.hasOwnProperty(a) ? ((void 0 === c || void 0 !== m[a].B && void 0 !== m[a].B[c]) && V(`Cannot register public name '${a}' twice`), $c(m, a, a), m.hasOwnProperty(c) && V(`Cannot register multiple overloads of a function with the same number of arguments (${c})!`), m[a].B[c] = b) : (m[a] = b, void 0 !== c && (m[a].Pc = c));
                  }
                  function bd(a, b, c, d, e, f, g, n) {
                    this.name = a;
                    this.constructor = b;
                    this.N = c;
                    this.W = d;
                    this.A = e;
                    this.Ub = f;
                    this.na = g;
                    this.Pb = n;
                    this.qb = [];
                  }
                  function cd(a, b, c) {
                    for (; b !== c; ) {
                      b.na || V(`Expected null or instance of ${c.name}, got an instance of ${b.name}`), a = b.na(a), b = b.A;
                    }
                    return a;
                  }
                  function dd(a, b) {
                    if (null === b) {
                      return this.Na && V(`null is not a valid ${this.name}`), 0;
                    }
                    b.g || V(`Cannot pass "${ed(b)}" as a ${this.name}`);
                    b.g.o || V(`Cannot pass deleted object as a pointer of type ${this.name}`);
                    return cd(b.g.o, b.g.u.i, this.i);
                  }
                  function fd(a, b) {
                    if (null === b) {
                      this.Na && V(`null is not a valid ${this.name}`);
                      if (this.ua) {
                        var c = this.Pa();
                        null !== a && a.push(this.W, c);
                        return c;
                      }
                      return 0;
                    }
                    b.g || V(`Cannot pass "${ed(b)}" as a ${this.name}`);
                    b.g.o || V(`Cannot pass deleted object as a pointer of type ${this.name}`);
                    !this.ta && b.g.u.ta && V(`Cannot convert argument of type ${b.g.L ? b.g.L.name : b.g.u.name} to parameter type ${this.name}`);
                    c = cd(b.g.o, b.g.u.i, this.i);
                    if (this.ua) {
                      switch (void 0 === b.g.G && V("Passing raw pointer to smart pointer is illegal"), this.tc) {
                        case 0:
                          b.g.L === this ? c = b.g.G : V(`Cannot convert argument of type ${b.g.L ? b.g.L.name : b.g.u.name} to parameter type ${this.name}`);
                          break;
                        case 1:
                          c = b.g.G;
                          break;
                        case 2:
                          if (b.g.L === this) {
                            c = b.g.G;
                          } else {
                            var d = b.clone();
                            c = this.oc(c, sc(function() {
                              d["delete"]();
                            }));
                            null !== a && a.push(this.W, c);
                          }
                          break;
                        default:
                          V("Unsupporting sharing policy");
                      }
                    }
                    return c;
                  }
                  function gd(a, b) {
                    if (null === b) {
                      return this.Na && V(`null is not a valid ${this.name}`), 0;
                    }
                    b.g || V(`Cannot pass "${ed(b)}" as a ${this.name}`);
                    b.g.o || V(`Cannot pass deleted object as a pointer of type ${this.name}`);
                    b.g.u.ta && V(`Cannot convert argument of type ${b.g.u.name} to parameter type ${this.name}`);
                    return cd(b.g.o, b.g.u.i, this.i);
                  }
                  function hd(a, b, c, d) {
                    this.name = a;
                    this.i = b;
                    this.Na = c;
                    this.ta = d;
                    this.ua = false;
                    this.W = this.oc = this.Pa = this.rb = this.tc = this.nc = void 0;
                    void 0 !== b.A ? this.toWireType = fd : (this.toWireType = d ? dd : gd, this.K = null);
                  }
                  function jd(a, b, c) {
                    m.hasOwnProperty(a) || Nc("Replacing nonexistant public symbol");
                    void 0 !== m[a].B && void 0 !== c ? m[a].B[c] = b : (m[a] = b, m[a].ea = c);
                  }
                  var kd = [], ld = (a) => {
                    var b = kd[a];
                    b || (a >= kd.length && (kd.length = a + 1), kd[a] = b = Ka.get(a));
                    return b;
                  }, md = (a, b) => {
                    var c = [];
                    return function() {
                      c.length = 0;
                      Object.assign(c, arguments);
                      if (a.includes("j")) {
                        var d = m["dynCall_" + a];
                        d = c && c.length ? d.apply(null, [b].concat(c)) : d.call(null, b);
                      } else {
                        d = ld(b).apply(null, c);
                      }
                      return d;
                    };
                  };
                  function Z(a, b) {
                    a = W(a);
                    var c = a.includes("j") ? md(a, b) : ld(b);
                    "function" != typeof c && V(`unknown function pointer with signature ${a}: ${b}`);
                    return c;
                  }
                  var nd = void 0;
                  function od(a, b) {
                    function c(f) {
                      e[f] || Bc[f] || (Uc[f] ? Uc[f].forEach(c) : (d.push(f), e[f] = true));
                    }
                    var d = [], e = {};
                    b.forEach(c);
                    throw new nd(`${a}: ` + d.map(Cc).join([", "]));
                  }
                  function pd(a, b, c, d, e) {
                    var f = b.length;
                    2 > f && V("argTypes array size mismatch! Must at least get return value and 'this' types!");
                    var g = null !== b[1] && null !== c, n = false;
                    for (c = 1; c < b.length; ++c) {
                      if (null !== b[c] && void 0 === b[c].K) {
                        n = true;
                        break;
                      }
                    }
                    var p = "void" !== b[0].name, l = f - 2, u = Array(l), v = [], x = [];
                    return function() {
                      arguments.length !== l && V(`function ${a} called with ${arguments.length} arguments, expected ${l} args!`);
                      x.length = 0;
                      v.length = g ? 2 : 1;
                      v[0] = e;
                      if (g) {
                        var k = b[1].toWireType(x, this);
                        v[1] = k;
                      }
                      for (var t = 0; t < l; ++t) {
                        u[t] = b[t + 2].toWireType(x, arguments[t]), v.push(u[t]);
                      }
                      t = d.apply(null, v);
                      if (n) {
                        Rc(x);
                      } else {
                        for (var r = g ? 1 : 2; r < b.length; r++) {
                          var B = 1 === r ? k : u[r - 2];
                          null !== b[r].K && b[r].K(B);
                        }
                      }
                      k = p ? b[0].fromWireType(t) : void 0;
                      return k;
                    };
                  }
                  function sd(a, b) {
                    for (var c = [], d = 0; d < a; d++) {
                      c.push(N[b + 4 * d >> 2]);
                    }
                    return c;
                  }
                  function td(a, b, c) {
                    a instanceof Object || V(`${c} with invalid "this": ${a}`);
                    a instanceof b.i.constructor || V(`${c} incompatible with "this" of type ${a.constructor.name}`);
                    a.g.o || V(`cannot call emscripten binding method ${c} on deleted object`);
                    return cd(a.g.o, a.g.u.i, b.i);
                  }
                  function ud(a) {
                    a >= U.h && 0 === --U.get(a).tb && U.Zb(a);
                  }
                  function vd(a, b, c) {
                    switch (b) {
                      case 0:
                        return function(d) {
                          return this.fromWireType((c ? C : E)[d]);
                        };
                      case 1:
                        return function(d) {
                          return this.fromWireType((c ? Da : Ea)[d >> 1]);
                        };
                      case 2:
                        return function(d) {
                          return this.fromWireType((c ? L : N)[d >> 2]);
                        };
                      default:
                        throw new TypeError("Unknown integer type: " + a);
                    }
                  }
                  function ed(a) {
                    if (null === a) {
                      return "null";
                    }
                    var b = typeof a;
                    return "object" === b || "array" === b || "function" === b ? a.toString() : "" + a;
                  }
                  function wd(a, b) {
                    switch (b) {
                      case 2:
                        return function(c) {
                          return this.fromWireType(Fa[c >> 2]);
                        };
                      case 3:
                        return function(c) {
                          return this.fromWireType(Ia[c >> 3]);
                        };
                      default:
                        throw new TypeError("Unknown float type: " + a);
                    }
                  }
                  function xd(a, b, c) {
                    switch (b) {
                      case 0:
                        return c ? function(d) {
                          return C[d];
                        } : function(d) {
                          return E[d];
                        };
                      case 1:
                        return c ? function(d) {
                          return Da[d >> 1];
                        } : function(d) {
                          return Ea[d >> 1];
                        };
                      case 2:
                        return c ? function(d) {
                          return L[d >> 2];
                        } : function(d) {
                          return N[d >> 2];
                        };
                      default:
                        throw new TypeError("Unknown integer type: " + a);
                    }
                  }
                  var yd = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0, zd = (a, b) => {
                    var c = a >> 1;
                    for (var d = c + b / 2; !(c >= d) && Ea[c]; ) {
                      ++c;
                    }
                    c <<= 1;
                    if (32 < c - a && yd) {
                      return yd.decode(E.subarray(a, c));
                    }
                    c = "";
                    for (d = 0; !(d >= b / 2); ++d) {
                      var e = Da[a + 2 * d >> 1];
                      if (0 == e) {
                        break;
                      }
                      c += String.fromCharCode(e);
                    }
                    return c;
                  }, Ad = (a, b, c) => {
                    void 0 === c && (c = 2147483647);
                    if (2 > c) {
                      return 0;
                    }
                    c -= 2;
                    var d = b;
                    c = c < 2 * a.length ? c / 2 : a.length;
                    for (var e = 0; e < c; ++e) {
                      Da[b >> 1] = a.charCodeAt(e), b += 2;
                    }
                    Da[b >> 1] = 0;
                    return b - d;
                  }, Bd = (a) => 2 * a.length, Cd = (a, b) => {
                    for (var c = 0, d = ""; !(c >= b / 4); ) {
                      var e = L[a + 4 * c >> 2];
                      if (0 == e) {
                        break;
                      }
                      ++c;
                      65536 <= e ? (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023)) : d += String.fromCharCode(e);
                    }
                    return d;
                  }, Dd = (a, b, c) => {
                    void 0 === c && (c = 2147483647);
                    if (4 > c) {
                      return 0;
                    }
                    var d = b;
                    c = d + c - 4;
                    for (var e = 0; e < a.length; ++e) {
                      var f = a.charCodeAt(e);
                      if (55296 <= f && 57343 >= f) {
                        var g = a.charCodeAt(++e);
                        f = 65536 + ((f & 1023) << 10) | g & 1023;
                      }
                      L[b >> 2] = f;
                      b += 4;
                      if (b + 4 > c) {
                        break;
                      }
                    }
                    L[b >> 2] = 0;
                    return b - d;
                  }, Ed = (a) => {
                    for (var b = 0, c = 0; c < a.length; ++c) {
                      var d = a.charCodeAt(c);
                      55296 <= d && 57343 >= d && ++c;
                      b += 4;
                    }
                    return b;
                  }, Fd = {};
                  function Gd(a) {
                    var b = Fd[a];
                    return void 0 === b ? W(a) : b;
                  }
                  var Hd = [];
                  function Id(a) {
                    var b = Hd.length;
                    Hd.push(a);
                    return b;
                  }
                  function Jd(a, b) {
                    for (var c = Array(a), d = 0; d < a; ++d) {
                      c[d] = Fc(N[b + 4 * d >> 2], "parameter " + d);
                    }
                    return c;
                  }
                  var Kd = [], Ld = [], Md = {}, Od = () => {
                    if (!Nd) {
                      var a = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: na || "./this.program" }, b;
                      for (b in Md) {
                        void 0 === Md[b] ? delete a[b] : a[b] = Md[b];
                      }
                      var c = [];
                      for (b in a) {
                        c.push(`${b}=${a[b]}`);
                      }
                      Nd = c;
                    }
                    return Nd;
                  }, Nd, Pd = (a) => 0 === a % 4 && (0 !== a % 100 || 0 === a % 400), Qd = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Rd = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Sd = (a, b, c, d) => {
                    function e(k, t, r) {
                      for (k = "number" == typeof k ? k.toString() : k || ""; k.length < t; ) {
                        k = r[0] + k;
                      }
                      return k;
                    }
                    function f(k, t) {
                      return e(k, t, "0");
                    }
                    function g(k, t) {
                      function r(D) {
                        return 0 > D ? -1 : 0 < D ? 1 : 0;
                      }
                      var B;
                      0 === (B = r(k.getFullYear() - t.getFullYear())) && 0 === (B = r(k.getMonth() - t.getMonth())) && (B = r(k.getDate() - t.getDate()));
                      return B;
                    }
                    function n(k) {
                      switch (k.getDay()) {
                        case 0:
                          return new Date(k.getFullYear() - 1, 11, 29);
                        case 1:
                          return k;
                        case 2:
                          return new Date(k.getFullYear(), 0, 3);
                        case 3:
                          return new Date(k.getFullYear(), 0, 2);
                        case 4:
                          return new Date(k.getFullYear(), 0, 1);
                        case 5:
                          return new Date(k.getFullYear() - 1, 11, 31);
                        case 6:
                          return new Date(k.getFullYear() - 1, 11, 30);
                      }
                    }
                    function p(k) {
                      var t = k.ca;
                      for (k = new Date(new Date(k.da + 1900, 0, 1).getTime()); 0 < t; ) {
                        var r = k.getMonth(), B = (Pd(k.getFullYear()) ? Qd : Rd)[r];
                        if (t > B - k.getDate()) {
                          t -= B - k.getDate() + 1, k.setDate(1), 11 > r ? k.setMonth(r + 1) : (k.setMonth(0), k.setFullYear(k.getFullYear() + 1));
                        } else {
                          k.setDate(k.getDate() + t);
                          break;
                        }
                      }
                      r = new Date(k.getFullYear() + 1, 0, 4);
                      t = n(new Date(k.getFullYear(), 0, 4));
                      r = n(r);
                      return 0 >= g(t, k) ? 0 >= g(r, k) ? k.getFullYear() + 1 : k.getFullYear() : k.getFullYear() - 1;
                    }
                    var l = L[d + 40 >> 2];
                    d = { wc: L[d >> 2], vc: L[d + 4 >> 2], Fa: L[d + 8 >> 2], Sa: L[d + 12 >> 2], Ga: L[d + 16 >> 2], da: L[d + 20 >> 2], R: L[d + 24 >> 2], ca: L[d + 28 >> 2], Rc: L[d + 32 >> 2], uc: L[d + 36 >> 2], xc: l ? l ? nb(E, l) : "" : "" };
                    c = c ? nb(E, c) : "";
                    l = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" };
                    for (var u in l) {
                      c = c.replace(new RegExp(u, "g"), l[u]);
                    }
                    var v = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), x = "January February March April May June July August September October November December".split(" ");
                    l = { "%a": (k) => v[k.R].substring(0, 3), "%A": (k) => v[k.R], "%b": (k) => x[k.Ga].substring(0, 3), "%B": (k) => x[k.Ga], "%C": (k) => f((k.da + 1900) / 100 | 0, 2), "%d": (k) => f(k.Sa, 2), "%e": (k) => e(k.Sa, 2, " "), "%g": (k) => p(k).toString().substring(2), "%G": (k) => p(k), "%H": (k) => f(k.Fa, 2), "%I": (k) => {
                      k = k.Fa;
                      0 == k ? k = 12 : 12 < k && (k -= 12);
                      return f(k, 2);
                    }, "%j": (k) => {
                      for (var t = 0, r = 0; r <= k.Ga - 1; t += (Pd(k.da + 1900) ? Qd : Rd)[r++]) {
                      }
                      return f(k.Sa + t, 3);
                    }, "%m": (k) => f(k.Ga + 1, 2), "%M": (k) => f(k.vc, 2), "%n": () => "\n", "%p": (k) => 0 <= k.Fa && 12 > k.Fa ? "AM" : "PM", "%S": (k) => f(k.wc, 2), "%t": () => "	", "%u": (k) => k.R || 7, "%U": (k) => f(Math.floor((k.ca + 7 - k.R) / 7), 2), "%V": (k) => {
                      var t = Math.floor((k.ca + 7 - (k.R + 6) % 7) / 7);
                      2 >= (k.R + 371 - k.ca - 2) % 7 && t++;
                      if (t) {
                        53 == t && (r = (k.R + 371 - k.ca) % 7, 4 == r || 3 == r && Pd(k.da) || (t = 1));
                      } else {
                        t = 52;
                        var r = (k.R + 7 - k.ca - 1) % 7;
                        (4 == r || 5 == r && Pd(k.da % 400 - 1)) && t++;
                      }
                      return f(t, 2);
                    }, "%w": (k) => k.R, "%W": (k) => f(Math.floor((k.ca + 7 - (k.R + 6) % 7) / 7), 2), "%y": (k) => (k.da + 1900).toString().substring(2), "%Y": (k) => k.da + 1900, "%z": (k) => {
                      k = k.uc;
                      var t = 0 <= k;
                      k = Math.abs(k) / 60;
                      return (t ? "+" : "-") + String("0000" + (k / 60 * 100 + k % 60)).slice(-4);
                    }, "%Z": (k) => k.xc, "%%": () => "%" };
                    c = c.replace(/%%/g, "\0\0");
                    for (u in l) {
                      c.includes(u) && (c = c.replace(new RegExp(u, "g"), l[u](d)));
                    }
                    c = c.replace(/\0\0/g, "%");
                    u = rb(c, false);
                    if (u.length > b) {
                      return 0;
                    }
                    C.set(u, a);
                    return u.length - 1;
                  };
                  function Pb(a, b, c, d) {
                    a || (a = this);
                    this.parent = a;
                    this.U = a.U;
                    this.wa = null;
                    this.id = Hb++;
                    this.name = b;
                    this.mode = c;
                    this.l = {};
                    this.m = {};
                    this.za = d;
                  }
                  Object.defineProperties(Pb.prototype, { read: { get: function() {
                    return 365 === (this.mode & 365);
                  }, set: function(a) {
                    a ? this.mode |= 365 : this.mode &= -366;
                  } }, write: { get: function() {
                    return 146 === (this.mode & 146);
                  }, set: function(a) {
                    a ? this.mode |= 146 : this.mode &= -147;
                  } } });
                  gc();
                  Ib = Array(4096);
                  Wb(P, "/");
                  S("/tmp", 16895, 0);
                  S("/home", 16895, 0);
                  S("/home/web_user", 16895, 0);
                  (() => {
                    S("/dev", 16895, 0);
                    ub(259, { read: () => 0, write: (d, e, f, g) => g });
                    Xb("/dev/null", 259);
                    tb(1280, wb);
                    tb(1536, xb);
                    Xb("/dev/tty", 1280);
                    Xb("/dev/tty1", 1536);
                    var a = new Uint8Array(1024), b = 0, c = () => {
                      0 === b && (b = kb(a).byteLength);
                      return a[--b];
                    };
                    jc("random", c);
                    jc("urandom", c);
                    S("/dev/shm", 16895, 0);
                    S("/dev/shm/tmp", 16895, 0);
                  })();
                  (() => {
                    S("/proc", 16895, 0);
                    var a = S("/proc/self", 16895, 0);
                    S("/proc/self/fd", 16895, 0);
                    Wb({ U: () => {
                      var b = Ab(a, "fd", 16895, 73);
                      b.l = { ka: (c, d) => {
                        var e = Tb(+d);
                        c = { parent: null, U: { mb: "fake" }, l: { ma: () => e.path } };
                        return c.parent = c;
                      } };
                      return b;
                    } }, "/proc/self/fd");
                  })();
                  Object.assign(pc.prototype, { get(a) {
                    return this.M[a];
                  }, has(a) {
                    return void 0 !== this.M[a];
                  }, pa(a) {
                    var b = this.hb.pop() || this.M.length;
                    this.M[b] = a;
                    return b;
                  }, Zb(a) {
                    this.M[a] = void 0;
                    this.hb.push(a);
                  } });
                  qc = m.BindingError = class extends Error {
                    constructor(a) {
                      super(a);
                      this.name = "BindingError";
                    }
                  };
                  U.M.push({ value: void 0 }, { value: null }, { value: true }, { value: false });
                  U.h = U.M.length;
                  m.count_emval_handles = function() {
                    for (var a = 0, b = U.h; b < U.M.length; ++b) {
                      void 0 !== U.M[b] && ++a;
                    }
                    return a;
                  };
                  uc = m.PureVirtualError = tc("PureVirtualError");
                  for (var Td = Array(256), Ud = 0; 256 > Ud; ++Ud) {
                    Td[Ud] = String.fromCharCode(Ud);
                  }
                  vc = Td;
                  m.getInheritedInstanceCount = function() {
                    return Object.keys(zc).length;
                  };
                  m.getLiveInheritedInstances = function() {
                    var a = [], b;
                    for (b in zc) {
                      zc.hasOwnProperty(b) && a.push(zc[b]);
                    }
                    return a;
                  };
                  m.flushPendingDeletes = xc;
                  m.setDelayFunction = function(a) {
                    yc = a;
                    wc.length && yc && yc(xc);
                  };
                  Mc = m.InternalError = class extends Error {
                    constructor(a) {
                      super(a);
                      this.name = "InternalError";
                    }
                  };
                  Zc.prototype.isAliasOf = function(a) {
                    if (!(this instanceof Zc && a instanceof Zc)) {
                      return false;
                    }
                    var b = this.g.u.i, c = this.g.o, d = a.g.u.i;
                    for (a = a.g.o; b.A; ) {
                      c = b.na(c), b = b.A;
                    }
                    for (; d.A; ) {
                      a = d.na(a), d = d.A;
                    }
                    return b === d && c === a;
                  };
                  Zc.prototype.clone = function() {
                    this.g.o || Yc(this);
                    if (this.g.ia) {
                      return this.g.count.value += 1, this;
                    }
                    var a = Pc, b = Object, c = b.create, d = Object.getPrototypeOf(this), e = this.g;
                    a = a(c.call(b, d, { g: { value: { count: e.count, fa: e.fa, ia: e.ia, o: e.o, u: e.u, G: e.G, L: e.L } } }));
                    a.g.count.value += 1;
                    a.g.fa = false;
                    return a;
                  };
                  Zc.prototype["delete"] = function() {
                    this.g.o || Yc(this);
                    this.g.fa && !this.g.ia && V("Object already scheduled for deletion");
                    Gc(this);
                    Ic(this.g);
                    this.g.ia || (this.g.G = void 0, this.g.o = void 0);
                  };
                  Zc.prototype.isDeleted = function() {
                    return !this.g.o;
                  };
                  Zc.prototype.deleteLater = function() {
                    this.g.o || Yc(this);
                    this.g.fa && !this.g.ia && V("Object already scheduled for deletion");
                    wc.push(this);
                    1 === wc.length && yc && yc(xc);
                    this.g.fa = true;
                    return this;
                  };
                  hd.prototype.Vb = function(a) {
                    this.rb && (a = this.rb(a));
                    return a;
                  };
                  hd.prototype.ab = function(a) {
                    this.W && this.W(a);
                  };
                  hd.prototype.argPackAdvance = 8;
                  hd.prototype.readValueFromPointer = Sc;
                  hd.prototype.deleteObject = function(a) {
                    if (null !== a) {
                      a["delete"]();
                    }
                  };
                  hd.prototype.fromWireType = function(a) {
                    function b() {
                      return this.ua ? Oc(this.i.N, { u: this.nc, o: c, L: this, G: a }) : Oc(this.i.N, { u: this, o: a });
                    }
                    var c = this.Vb(a);
                    if (!c) {
                      return this.ab(a), null;
                    }
                    var d = Lc(this.i, c);
                    if (void 0 !== d) {
                      if (0 === d.g.count.value) {
                        return d.g.o = c, d.g.G = a, d.clone();
                      }
                      d = d.clone();
                      this.ab(a);
                      return d;
                    }
                    d = this.i.Ub(c);
                    d = Kc[d];
                    if (!d) {
                      return b.call(this);
                    }
                    d = this.ta ? d.Kb : d.pointerType;
                    var e = Jc(c, this.i, d.i);
                    return null === e ? b.call(this) : this.ua ? Oc(d.i.N, { u: d, o: e, L: this, G: a }) : Oc(d.i.N, { u: d, o: e });
                  };
                  nd = m.UnboundTypeError = tc("UnboundTypeError");
                  var Xd = { __syscall_fcntl64: function(a, b, c) {
                    lc = c;
                    try {
                      var d = Tb(a);
                      switch (b) {
                        case 0:
                          var e = mc();
                          return 0 > e ? -28 : Vb(d, e).X;
                        case 1:
                        case 2:
                          return 0;
                        case 3:
                          return d.flags;
                        case 4:
                          return e = mc(), d.flags |= e, 0;
                        case 5:
                          return e = mc(), Da[e + 0 >> 1] = 2, 0;
                        case 6:
                        case 7:
                          return 0;
                        case 16:
                        case 8:
                          return -28;
                        case 9:
                          return L[Vd() >> 2] = 28, -1;
                        default:
                          return -28;
                      }
                    } catch (f) {
                      if ("undefined" == typeof kc || "ErrnoError" !== f.name) {
                        throw f;
                      }
                      return -f.aa;
                    }
                  }, __syscall_ioctl: function(a, b, c) {
                    lc = c;
                    try {
                      var d = Tb(a);
                      switch (b) {
                        case 21509:
                          return d.s ? 0 : -59;
                        case 21505:
                          if (!d.s) {
                            return -59;
                          }
                          if (d.s.V.bc) {
                            b = [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                            var e = mc();
                            L[e >> 2] = 25856;
                            L[e + 4 >> 2] = 5;
                            L[e + 8 >> 2] = 191;
                            L[e + 12 >> 2] = 35387;
                            for (var f = 0; 32 > f; f++) {
                              C[e + f + 17 >> 0] = b[f] || 0;
                            }
                          }
                          return 0;
                        case 21510:
                        case 21511:
                        case 21512:
                          return d.s ? 0 : -59;
                        case 21506:
                        case 21507:
                        case 21508:
                          if (!d.s) {
                            return -59;
                          }
                          if (d.s.V.cc) {
                            for (e = mc(), b = [], f = 0; 32 > f; f++) {
                              b.push(C[e + f + 17 >> 0]);
                            }
                          }
                          return 0;
                        case 21519:
                          if (!d.s) {
                            return -59;
                          }
                          e = mc();
                          return L[e >> 2] = 0;
                        case 21520:
                          return d.s ? -28 : -59;
                        case 21531:
                          e = mc();
                          if (!d.m.ac) {
                            throw new O(59);
                          }
                          return d.m.ac(d, b, e);
                        case 21523:
                          if (!d.s) {
                            return -59;
                          }
                          d.s.V.dc && (f = [24, 80], e = mc(), Da[e >> 1] = f[0], Da[e + 2 >> 1] = f[1]);
                          return 0;
                        case 21524:
                          return d.s ? 0 : -59;
                        case 21515:
                          return d.s ? 0 : -59;
                        default:
                          return -28;
                      }
                    } catch (g) {
                      if ("undefined" == typeof kc || "ErrnoError" !== g.name) {
                        throw g;
                      }
                      return -g.aa;
                    }
                  }, __syscall_openat: function(a, b, c, d) {
                    lc = d;
                    try {
                      b = b ? nb(E, b) : "";
                      var e = b;
                      if ("/" === e.charAt(0)) {
                        b = e;
                      } else {
                        var f = -100 === a ? "/" : Tb(a).path;
                        if (0 == e.length) {
                          throw new O(44);
                        }
                        b = gb(f + "/" + e);
                      }
                      var g = d ? mc() : 0;
                      return ec(b, c, g).X;
                    } catch (n) {
                      if ("undefined" == typeof kc || "ErrnoError" !== n.name) {
                        throw n;
                      }
                      return -n.aa;
                    }
                  }, _embind_create_inheriting_constructor: function(a, b, c) {
                    a = W(a);
                    b = Fc(b, "wrapper");
                    c = rc(c);
                    var d = [].slice, e = b.i, f = e.N, g = e.A.N, n = e.A.constructor;
                    a = oc(a, function() {
                      e.A.qb.forEach((function(l) {
                        if (this[l] === g[l]) {
                          throw new uc(`Pure virtual function ${l} must be implemented in JavaScript`);
                        }
                      }).bind(this));
                      Object.defineProperty(this, "__parent", { value: f });
                      this.__construct.apply(this, d.call(arguments));
                    });
                    f.__construct = function() {
                      this === f && V("Pass correct 'this' to __construct");
                      var l = n.implement.apply(void 0, [this].concat(d.call(arguments)));
                      Gc(l);
                      var u = l.g;
                      l.notifyOnDestruction();
                      u.ia = true;
                      Object.defineProperties(this, { g: { value: u } });
                      Pc(this);
                      l = u.o;
                      l = Ac(e, l);
                      zc.hasOwnProperty(l) ? V(`Tried to register registered instance: ${l}`) : zc[l] = this;
                    };
                    f.__destruct = function() {
                      this === f && V("Pass correct 'this' to __destruct");
                      Gc(this);
                      var l = this.g.o;
                      l = Ac(e, l);
                      zc.hasOwnProperty(l) ? delete zc[l] : V(`Tried to unregister unregistered instance: ${l}`);
                    };
                    a.prototype = Object.create(f);
                    for (var p in c) {
                      a.prototype[p] = c[p];
                    }
                    return sc(a);
                  }, _embind_finalize_value_object: function(a) {
                    var b = Qc[a];
                    delete Qc[a];
                    var c = b.Pa, d = b.W, e = b.eb, f = e.map((g) => g.Yb).concat(e.map((g) => g.rc));
                    Y([a], f, (g) => {
                      var n = {};
                      e.forEach((p, l) => {
                        var u = g[l], v = p.Wb, x = p.Xb, k = g[l + e.length], t = p.qc, r = p.sc;
                        n[p.Sb] = { read: (B) => u.fromWireType(v(x, B)), write: (B, D) => {
                          var w = [];
                          t(r, B, k.toWireType(w, D));
                          Rc(w);
                        } };
                      });
                      return [{ name: b.name, fromWireType: function(p) {
                        var l = {}, u;
                        for (u in n) {
                          l[u] = n[u].read(p);
                        }
                        d(p);
                        return l;
                      }, toWireType: function(p, l) {
                        for (var u in n) {
                          if (!(u in l)) {
                            throw new TypeError(`Missing field: "${u}"`);
                          }
                        }
                        var v = c();
                        for (u in n) {
                          n[u].write(v, l[u]);
                        }
                        null !== p && p.push(d, v);
                        return v;
                      }, argPackAdvance: 8, readValueFromPointer: Sc, K: d }];
                    });
                  }, _embind_register_bigint: function() {
                  }, _embind_register_bool: function(a, b, c, d, e) {
                    var f = Wc(c);
                    b = W(b);
                    Vc(a, { name: b, fromWireType: function(g) {
                      return !!g;
                    }, toWireType: function(g, n) {
                      return n ? d : e;
                    }, argPackAdvance: 8, readValueFromPointer: function(g) {
                      if (1 === c) {
                        var n = C;
                      } else if (2 === c) {
                        n = Da;
                      } else if (4 === c) {
                        n = L;
                      } else {
                        throw new TypeError("Unknown boolean type size: " + b);
                      }
                      return this.fromWireType(n[g >> f]);
                    }, K: null });
                  }, _embind_register_class: function(a, b, c, d, e, f, g, n, p, l, u, v, x) {
                    u = W(u);
                    f = Z(e, f);
                    n && (n = Z(g, n));
                    l && (l = Z(p, l));
                    x = Z(v, x);
                    var k = nc(u);
                    ad(k, function() {
                      od(`Cannot construct ${u} due to unbound types`, [d]);
                    });
                    Y([a, b, c], d ? [d] : [], function(t) {
                      t = t[0];
                      if (d) {
                        var r = t.i;
                        var B = r.N;
                      } else {
                        B = Zc.prototype;
                      }
                      t = oc(k, function() {
                        if (Object.getPrototypeOf(this) !== D) {
                          throw new qc("Use 'new' to construct " + u);
                        }
                        if (void 0 === w.$) {
                          throw new qc(u + " has no accessible constructor");
                        }
                        var T = w.$[arguments.length];
                        if (void 0 === T) {
                          throw new qc(`Tried to invoke ctor of ${u} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(w.$).toString()}) parameters instead!`);
                        }
                        return T.apply(this, arguments);
                      });
                      var D = Object.create(B, { constructor: { value: t } });
                      t.prototype = D;
                      var w = new bd(u, t, D, x, r, f, n, l);
                      w.A && (void 0 === w.A.oa && (w.A.oa = []), w.A.oa.push(w));
                      r = new hd(u, w, true, false);
                      B = new hd(u + "*", w, false, false);
                      var M = new hd(u + " const*", w, false, true);
                      Kc[a] = { pointerType: B, Kb: M };
                      jd(k, t);
                      return [r, B, M];
                    });
                  }, _embind_register_class_class_function: function(a, b, c, d, e, f, g) {
                    var n = sd(c, d);
                    b = W(b);
                    f = Z(e, f);
                    Y([], [a], function(p) {
                      function l() {
                        od(`Cannot call ${u} due to unbound types`, n);
                      }
                      p = p[0];
                      var u = `${p.name}.${b}`;
                      b.startsWith("@@") && (b = Symbol[b.substring(2)]);
                      var v = p.i.constructor;
                      void 0 === v[b] ? (l.ea = c - 1, v[b] = l) : ($c(v, b, u), v[b].B[c - 1] = l);
                      Y([], n, function(x) {
                        x = pd(u, [x[0], null].concat(x.slice(1)), null, f, g);
                        void 0 === v[b].B ? (x.ea = c - 1, v[b] = x) : v[b].B[c - 1] = x;
                        if (p.i.oa) {
                          for (const k of p.i.oa) {
                            k.constructor.hasOwnProperty(b) || (k.constructor[b] = x);
                          }
                        }
                        return [];
                      });
                      return [];
                    });
                  }, _embind_register_class_class_property: function(a, b, c, d, e, f, g, n) {
                    b = W(b);
                    f = Z(e, f);
                    Y([], [a], function(p) {
                      p = p[0];
                      var l = `${p.name}.${b}`, u = { get() {
                        od(`Cannot access ${l} due to unbound types`, [c]);
                      }, enumerable: true, configurable: true };
                      u.set = n ? () => {
                        od(`Cannot access ${l} due to unbound types`, [c]);
                      } : () => {
                        V(`${l} is a read-only property`);
                      };
                      Object.defineProperty(p.i.constructor, b, u);
                      Y([], [c], function(v) {
                        v = v[0];
                        var x = { get() {
                          return v.fromWireType(f(d));
                        }, enumerable: true };
                        n && (n = Z(g, n), x.set = (k) => {
                          var t = [];
                          n(d, v.toWireType(t, k));
                          Rc(t);
                        });
                        Object.defineProperty(p.i.constructor, b, x);
                        return [];
                      });
                      return [];
                    });
                  }, _embind_register_class_constructor: function(a, b, c, d, e, f) {
                    var g = sd(b, c);
                    e = Z(d, e);
                    Y([], [a], function(n) {
                      n = n[0];
                      var p = `constructor ${n.name}`;
                      void 0 === n.i.$ && (n.i.$ = []);
                      if (void 0 !== n.i.$[b - 1]) {
                        throw new qc(`Cannot register multiple constructors with identical number of parameters (${b - 1}) for class '${n.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
                      }
                      n.i.$[b - 1] = () => {
                        od(`Cannot construct ${n.name} due to unbound types`, g);
                      };
                      Y([], g, function(l) {
                        l.splice(1, 0, null);
                        n.i.$[b - 1] = pd(p, l, null, e, f);
                        return [];
                      });
                      return [];
                    });
                  }, _embind_register_class_function: function(a, b, c, d, e, f, g, n) {
                    var p = sd(c, d);
                    b = W(b);
                    f = Z(e, f);
                    Y([], [a], function(l) {
                      function u() {
                        od(`Cannot call ${v} due to unbound types`, p);
                      }
                      l = l[0];
                      var v = `${l.name}.${b}`;
                      b.startsWith("@@") && (b = Symbol[b.substring(2)]);
                      n && l.i.qb.push(b);
                      var x = l.i.N, k = x[b];
                      void 0 === k || void 0 === k.B && k.className !== l.name && k.ea === c - 2 ? (u.ea = c - 2, u.className = l.name, x[b] = u) : ($c(x, b, v), x[b].B[c - 2] = u);
                      Y([], p, function(t) {
                        t = pd(v, t, l, f, g);
                        void 0 === x[b].B ? (t.ea = c - 2, x[b] = t) : x[b].B[c - 2] = t;
                        return [];
                      });
                      return [];
                    });
                  }, _embind_register_class_property: function(a, b, c, d, e, f, g, n, p, l) {
                    b = W(b);
                    e = Z(d, e);
                    Y([], [a], function(u) {
                      u = u[0];
                      var v = `${u.name}.${b}`, x = { get() {
                        od(`Cannot access ${v} due to unbound types`, [c, g]);
                      }, enumerable: true, configurable: true };
                      x.set = p ? () => {
                        od(`Cannot access ${v} due to unbound types`, [c, g]);
                      } : () => {
                        V(v + " is a read-only property");
                      };
                      Object.defineProperty(u.i.N, b, x);
                      Y([], p ? [c, g] : [c], function(k) {
                        var t = k[0], r = { get() {
                          var D = td(this, u, v + " getter");
                          return t.fromWireType(e(f, D));
                        }, enumerable: true };
                        if (p) {
                          p = Z(n, p);
                          var B = k[1];
                          r.set = function(D) {
                            var w = td(this, u, v + " setter"), M = [];
                            p(l, w, B.toWireType(M, D));
                            Rc(M);
                          };
                        }
                        Object.defineProperty(u.i.N, b, r);
                        return [];
                      });
                      return [];
                    });
                  }, _embind_register_emval: function(a, b) {
                    b = W(b);
                    Vc(a, { name: b, fromWireType: function(c) {
                      var d = rc(c);
                      ud(c);
                      return d;
                    }, toWireType: function(c, d) {
                      return sc(d);
                    }, argPackAdvance: 8, readValueFromPointer: Sc, K: null });
                  }, _embind_register_enum: function(a, b, c, d) {
                    function e() {
                    }
                    c = Wc(c);
                    b = W(b);
                    e.values = {};
                    Vc(a, { name: b, constructor: e, fromWireType: function(f) {
                      return this.constructor.values[f];
                    }, toWireType: function(f, g) {
                      return g.value;
                    }, argPackAdvance: 8, readValueFromPointer: vd(b, c, d), K: null });
                    ad(b, e);
                  }, _embind_register_enum_value: function(a, b, c) {
                    var d = Fc(a, "enum");
                    b = W(b);
                    a = d.constructor;
                    d = Object.create(d.constructor.prototype, { value: { value: c }, constructor: { value: oc(`${d.name}_${b}`, function() {
                    }) } });
                    a.values[c] = d;
                    a[b] = d;
                  }, _embind_register_float: function(a, b, c) {
                    c = Wc(c);
                    b = W(b);
                    Vc(a, { name: b, fromWireType: function(d) {
                      return d;
                    }, toWireType: function(d, e) {
                      return e;
                    }, argPackAdvance: 8, readValueFromPointer: wd(b, c), K: null });
                  }, _embind_register_function: function(a, b, c, d, e, f) {
                    var g = sd(b, c);
                    a = W(a);
                    e = Z(d, e);
                    ad(a, function() {
                      od(`Cannot call ${a} due to unbound types`, g);
                    }, b - 1);
                    Y([], g, function(n) {
                      jd(a, pd(a, [n[0], null].concat(n.slice(1)), null, e, f), b - 1);
                      return [];
                    });
                  }, _embind_register_integer: function(a, b, c, d, e) {
                    b = W(b);
                    -1 === e && (e = 4294967295);
                    e = Wc(c);
                    var f = (n) => n;
                    if (0 === d) {
                      var g = 32 - 8 * c;
                      f = (n) => n << g >>> g;
                    }
                    c = b.includes("unsigned") ? function(n, p) {
                      return p >>> 0;
                    } : function(n, p) {
                      return p;
                    };
                    Vc(a, { name: b, fromWireType: f, toWireType: c, argPackAdvance: 8, readValueFromPointer: xd(b, e, 0 !== d), K: null });
                  }, _embind_register_memory_view: function(a, b, c) {
                    function d(f) {
                      f >>= 2;
                      var g = N;
                      return new e(g.buffer, g[f + 1], g[f]);
                    }
                    var e = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][b];
                    c = W(c);
                    Vc(a, { name: c, fromWireType: d, argPackAdvance: 8, readValueFromPointer: d }, { $b: true });
                  }, _embind_register_std_string: function(a, b) {
                    b = W(b);
                    var c = "std::string" === b;
                    Vc(a, { name: b, fromWireType: function(d) {
                      var e = N[d >> 2], f = d + 4;
                      if (c) {
                        for (var g = f, n = 0; n <= e; ++n) {
                          var p = f + n;
                          if (n == e || 0 == E[p]) {
                            g = g ? nb(E, g, p - g) : "";
                            if (void 0 === l) {
                              var l = g;
                            } else {
                              l += String.fromCharCode(0), l += g;
                            }
                            g = p + 1;
                          }
                        }
                      } else {
                        l = Array(e);
                        for (n = 0; n < e; ++n) {
                          l[n] = String.fromCharCode(E[f + n]);
                        }
                        l = l.join("");
                      }
                      Ec(d);
                      return l;
                    }, toWireType: function(d, e) {
                      e instanceof ArrayBuffer && (e = new Uint8Array(e));
                      var f = "string" == typeof e;
                      f || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Int8Array || V("Cannot pass non-string to std::string");
                      var g = c && f ? pb(e) : e.length;
                      var n = Wd(4 + g + 1), p = n + 4;
                      N[n >> 2] = g;
                      if (c && f) {
                        qb(e, E, p, g + 1);
                      } else {
                        if (f) {
                          for (f = 0; f < g; ++f) {
                            var l = e.charCodeAt(f);
                            255 < l && (Ec(p), V("String has UTF-16 code units that do not fit in 8 bits"));
                            E[p + f] = l;
                          }
                        } else {
                          for (f = 0; f < g; ++f) {
                            E[p + f] = e[f];
                          }
                        }
                      }
                      null !== d && d.push(Ec, n);
                      return n;
                    }, argPackAdvance: 8, readValueFromPointer: Sc, K: function(d) {
                      Ec(d);
                    } });
                  }, _embind_register_std_wstring: function(a, b, c) {
                    c = W(c);
                    if (2 === b) {
                      var d = zd;
                      var e = Ad;
                      var f = Bd;
                      var g = () => Ea;
                      var n = 1;
                    } else {
                      4 === b && (d = Cd, e = Dd, f = Ed, g = () => N, n = 2);
                    }
                    Vc(a, { name: c, fromWireType: function(p) {
                      for (var l = N[p >> 2], u = g(), v, x = p + 4, k = 0; k <= l; ++k) {
                        var t = p + 4 + k * b;
                        if (k == l || 0 == u[t >> n]) {
                          x = d(x, t - x), void 0 === v ? v = x : (v += String.fromCharCode(0), v += x), x = t + b;
                        }
                      }
                      Ec(p);
                      return v;
                    }, toWireType: function(p, l) {
                      "string" != typeof l && V(`Cannot pass non-string to C++ string type ${c}`);
                      var u = f(l), v = Wd(4 + u + b);
                      N[v >> 2] = u >> n;
                      e(l, v + 4, u + b);
                      null !== p && p.push(Ec, v);
                      return v;
                    }, argPackAdvance: 8, readValueFromPointer: Sc, K: function(p) {
                      Ec(p);
                    } });
                  }, _embind_register_value_object: function(a, b, c, d, e, f) {
                    Qc[a] = { name: W(b), Pa: Z(c, d), W: Z(e, f), eb: [] };
                  }, _embind_register_value_object_field: function(a, b, c, d, e, f, g, n, p, l) {
                    Qc[a].eb.push({ Sb: W(b), Yb: c, Wb: Z(d, e), Xb: f, rc: g, qc: Z(n, p), sc: l });
                  }, _embind_register_void: function(a, b) {
                    b = W(b);
                    Vc(a, { fc: true, name: b, argPackAdvance: 0, fromWireType: function() {
                    }, toWireType: function() {
                    } });
                  }, _emscripten_get_now_is_monotonic: () => true, _emval_as: function(a, b, c) {
                    a = rc(a);
                    b = Fc(b, "emval::as");
                    var d = [], e = sc(d);
                    N[c >> 2] = e;
                    return b.toWireType(d, a);
                  }, _emval_call_method: function(a, b, c, d, e) {
                    a = Hd[a];
                    b = rc(b);
                    c = Gd(c);
                    var f = [];
                    N[d >> 2] = sc(f);
                    return a(b, c, f, e);
                  }, _emval_call_void_method: function(a, b, c, d) {
                    a = Hd[a];
                    b = rc(b);
                    c = Gd(c);
                    a(b, c, null, d);
                  }, _emval_decref: ud, _emval_get_method_caller: function(a, b) {
                    var c = Jd(a, b), d = c[0];
                    b = d.name + "_$" + c.slice(1).map(function(g) {
                      return g.name;
                    }).join("_") + "$";
                    var e = Kd[b];
                    if (void 0 !== e) {
                      return e;
                    }
                    var f = Array(a - 1);
                    e = Id((g, n, p, l) => {
                      for (var u = 0, v = 0; v < a - 1; ++v) {
                        f[v] = c[v + 1].readValueFromPointer(l + u), u += c[v + 1].argPackAdvance;
                      }
                      g = g[n].apply(g, f);
                      for (v = 0; v < a - 1; ++v) {
                        c[v + 1].Nb && c[v + 1].Nb(f[v]);
                      }
                      if (!d.fc) {
                        return d.toWireType(p, g);
                      }
                    });
                    return Kd[b] = e;
                  }, _emval_get_module_property: function(a) {
                    a = Gd(a);
                    return sc(m[a]);
                  }, _emval_get_property: function(a, b) {
                    a = rc(a);
                    b = rc(b);
                    return sc(a[b]);
                  }, _emval_incref: function(a) {
                    4 < a && (U.get(a).tb += 1);
                  }, _emval_new_cstring: function(a) {
                    return sc(Gd(a));
                  }, _emval_new_object: function() {
                    return sc({});
                  }, _emval_run_destructors: function(a) {
                    var b = rc(a);
                    Rc(b);
                    ud(a);
                  }, _emval_set_property: function(a, b, c) {
                    a = rc(a);
                    b = rc(b);
                    c = rc(c);
                    a[b] = c;
                  }, _emval_take_value: function(a, b) {
                    a = Fc(a, "_emval_take_value");
                    a = a.readValueFromPointer(b);
                    return sc(a);
                  }, abort: () => {
                    Aa("");
                  }, emscripten_asm_const_int: (a, b, c) => {
                    Ld.length = 0;
                    var d;
                    for (c >>= 2; d = E[b++]; ) {
                      c += 105 != d & c, Ld.push(105 == d ? L[c] : Ia[c++ >> 1]), ++c;
                    }
                    return db[a].apply(null, Ld);
                  }, emscripten_date_now: function() {
                    return Date.now();
                  }, emscripten_get_now: () => performance.now(), emscripten_memcpy_big: (a, b, c) => E.copyWithin(a, b, b + c), emscripten_resize_heap: (a) => {
                    var b = E.length;
                    a >>>= 0;
                    if (2147483648 < a) {
                      return false;
                    }
                    for (var c = 1; 4 >= c; c *= 2) {
                      var d = b * (1 + 0.2 / c);
                      d = Math.min(d, a + 100663296);
                      var e = Math;
                      d = Math.max(a, d);
                      a: {
                        e = e.min.call(e, 2147483648, d + (65536 - d % 65536) % 65536) - Ba.buffer.byteLength + 65535 >>> 16;
                        try {
                          Ba.grow(e);
                          Ja();
                          var f = 1;
                          break a;
                        } catch (g) {
                        }
                        f = void 0;
                      }
                      if (f) {
                        return true;
                      }
                    }
                    return false;
                  }, environ_get: (a, b) => {
                    var c = 0;
                    Od().forEach(function(d, e) {
                      var f = b + c;
                      e = N[a + 4 * e >> 2] = f;
                      for (f = 0; f < d.length; ++f) {
                        C[e++ >> 0] = d.charCodeAt(f);
                      }
                      C[e >> 0] = 0;
                      c += d.length + 1;
                    });
                    return 0;
                  }, environ_sizes_get: (a, b) => {
                    var c = Od();
                    N[a >> 2] = c.length;
                    var d = 0;
                    c.forEach(function(e) {
                      d += e.length + 1;
                    });
                    N[b >> 2] = d;
                    return 0;
                  }, fd_close: function(a) {
                    try {
                      var b = Tb(a);
                      if (null === b.X) {
                        throw new O(8);
                      }
                      b.Ma && (b.Ma = null);
                      try {
                        b.m.close && b.m.close(b);
                      } catch (c) {
                        throw c;
                      } finally {
                        Gb[b.X] = null;
                      }
                      b.X = null;
                      return 0;
                    } catch (c) {
                      if ("undefined" == typeof kc || "ErrnoError" !== c.name) {
                        throw c;
                      }
                      return c.aa;
                    }
                  }, fd_read: function(a, b, c, d) {
                    try {
                      a: {
                        var e = Tb(a);
                        a = b;
                        for (var f, g = b = 0; g < c; g++) {
                          var n = N[a >> 2], p = N[a + 4 >> 2];
                          a += 8;
                          var l = e, u = n, v = p, x = f, k = C;
                          if (0 > v || 0 > x) {
                            throw new O(28);
                          }
                          if (null === l.X) {
                            throw new O(8);
                          }
                          if (1 === (l.flags & 2097155)) {
                            throw new O(8);
                          }
                          if (16384 === (l.node.mode & 61440)) {
                            throw new O(31);
                          }
                          if (!l.m.read) {
                            throw new O(28);
                          }
                          var t = "undefined" != typeof x;
                          if (!t) {
                            x = l.position;
                          } else if (!l.seekable) {
                            throw new O(70);
                          }
                          var r = l.m.read(l, k, u, v, x);
                          t || (l.position += r);
                          var B = r;
                          if (0 > B) {
                            var D = -1;
                            break a;
                          }
                          b += B;
                          if (B < p) {
                            break;
                          }
                          "undefined" !== typeof f && (f += B);
                        }
                        D = b;
                      }
                      N[d >> 2] = D;
                      return 0;
                    } catch (w) {
                      if ("undefined" == typeof kc || "ErrnoError" !== w.name) {
                        throw w;
                      }
                      return w.aa;
                    }
                  }, fd_seek: function(a, b, c, d, e) {
                    b = c + 2097152 >>> 0 < 4194305 - !!b ? (b >>> 0) + 4294967296 * c : NaN;
                    try {
                      if (isNaN(b)) {
                        return 61;
                      }
                      var f = Tb(a);
                      fc(f, b, d);
                      $a = [f.position >>> 0, (Za = f.position, 1 <= +Math.abs(Za) ? 0 < Za ? +Math.floor(Za / 4294967296) >>> 0 : ~~+Math.ceil((Za - +(~~Za >>> 0)) / 4294967296) >>> 0 : 0)];
                      L[e >> 2] = $a[0];
                      L[e + 4 >> 2] = $a[1];
                      f.Ma && 0 === b && 0 === d && (f.Ma = null);
                      return 0;
                    } catch (g) {
                      if ("undefined" == typeof kc || "ErrnoError" !== g.name) {
                        throw g;
                      }
                      return g.aa;
                    }
                  }, fd_write: function(a, b, c, d) {
                    try {
                      a: {
                        var e = Tb(a);
                        a = b;
                        for (var f, g = b = 0; g < c; g++) {
                          var n = N[a >> 2], p = N[a + 4 >> 2];
                          a += 8;
                          var l = e, u = n, v = p, x = f, k = C;
                          if (0 > v || 0 > x) {
                            throw new O(28);
                          }
                          if (null === l.X) {
                            throw new O(8);
                          }
                          if (0 === (l.flags & 2097155)) {
                            throw new O(8);
                          }
                          if (16384 === (l.node.mode & 61440)) {
                            throw new O(31);
                          }
                          if (!l.m.write) {
                            throw new O(28);
                          }
                          l.seekable && l.flags & 1024 && fc(l, 0, 2);
                          var t = "undefined" != typeof x;
                          if (!t) {
                            x = l.position;
                          } else if (!l.seekable) {
                            throw new O(70);
                          }
                          var r = l.m.write(l, k, u, v, x, void 0);
                          t || (l.position += r);
                          var B = r;
                          if (0 > B) {
                            var D = -1;
                            break a;
                          }
                          b += B;
                          "undefined" !== typeof f && (f += B);
                        }
                        D = b;
                      }
                      N[d >> 2] = D;
                      return 0;
                    } catch (w) {
                      if ("undefined" == typeof kc || "ErrnoError" !== w.name) {
                        throw w;
                      }
                      return w.aa;
                    }
                  }, strftime_l: (a, b, c, d) => Sd(a, b, c, d) };
                  (function() {
                    function a(c) {
                      z = c = c.exports;
                      Ba = z.memory;
                      Ja();
                      Ka = z.__indirect_function_table;
                      Ma.unshift(z.__wasm_call_ctors);
                      Pa--;
                      m.monitorRunDependencies && m.monitorRunDependencies(Pa);
                      if (0 == Pa && (null !== Qa && (clearInterval(Qa), Qa = null), Ra)) {
                        var d = Ra;
                        Ra = null;
                        d();
                      }
                      return c;
                    }
                    var b = { env: Xd, wasi_snapshot_preview1: Xd };
                    Pa++;
                    m.monitorRunDependencies && m.monitorRunDependencies(Pa);
                    if (m.instantiateWasm) {
                      try {
                        return m.instantiateWasm(b, a);
                      } catch (c) {
                        xa("Module.instantiateWasm callback failed with error: " + c), ea(c);
                      }
                    }
                    Ya(b, function(c) {
                      a(c.instance);
                    }).catch(ea);
                    return {};
                  })();
                  var Ec = (a) => (Ec = z.free)(a), Wd = (a) => (Wd = z.malloc)(a), ab = m._ma_device__on_notification_unlocked = (a) => (ab = m._ma_device__on_notification_unlocked = z.ma_device__on_notification_unlocked)(a);
                  m._ma_malloc_emscripten = (a, b) => (m._ma_malloc_emscripten = z.ma_malloc_emscripten)(a, b);
                  m._ma_free_emscripten = (a, b) => (m._ma_free_emscripten = z.ma_free_emscripten)(a, b);
                  var bb = m._ma_device_process_pcm_frames_capture__webaudio = (a, b, c) => (bb = m._ma_device_process_pcm_frames_capture__webaudio = z.ma_device_process_pcm_frames_capture__webaudio)(a, b, c), cb = m._ma_device_process_pcm_frames_playback__webaudio = (a, b, c) => (cb = m._ma_device_process_pcm_frames_playback__webaudio = z.ma_device_process_pcm_frames_playback__webaudio)(a, b, c), Vd = () => (Vd = z.__errno_location)(), Dc = (a) => (Dc = z.__getTypeName)(a);
                  m.__embind_initialize_bindings = () => (m.__embind_initialize_bindings = z._embind_initialize_bindings)();
                  m.dynCall_iiji = (a, b, c, d, e) => (m.dynCall_iiji = z.dynCall_iiji)(a, b, c, d, e);
                  m.dynCall_jiji = (a, b, c, d, e) => (m.dynCall_jiji = z.dynCall_jiji)(a, b, c, d, e);
                  m.dynCall_iiiji = (a, b, c, d, e, f) => (m.dynCall_iiiji = z.dynCall_iiiji)(a, b, c, d, e, f);
                  m.dynCall_iij = (a, b, c, d) => (m.dynCall_iij = z.dynCall_iij)(a, b, c, d);
                  m.dynCall_jii = (a, b, c) => (m.dynCall_jii = z.dynCall_jii)(a, b, c);
                  m.dynCall_viijii = (a, b, c, d, e, f, g) => (m.dynCall_viijii = z.dynCall_viijii)(a, b, c, d, e, f, g);
                  m.dynCall_iiiiij = (a, b, c, d, e, f, g) => (m.dynCall_iiiiij = z.dynCall_iiiiij)(a, b, c, d, e, f, g);
                  m.dynCall_iiiiijj = (a, b, c, d, e, f, g, n, p) => (m.dynCall_iiiiijj = z.dynCall_iiiiijj)(a, b, c, d, e, f, g, n, p);
                  m.dynCall_iiiiiijj = (a, b, c, d, e, f, g, n, p, l) => (m.dynCall_iiiiiijj = z.dynCall_iiiiiijj)(a, b, c, d, e, f, g, n, p, l);
                  var Yd;
                  Ra = function Zd() {
                    Yd || $d();
                    Yd || (Ra = Zd);
                  };
                  function $d() {
                    function a() {
                      if (!Yd && (Yd = true, m.calledRun = true, !Ca)) {
                        m.noFSInit || hc || (hc = true, gc(), m.stdin = m.stdin, m.stdout = m.stdout, m.stderr = m.stderr, m.stdin ? jc("stdin", m.stdin) : cc("/dev/tty", "/dev/stdin"), m.stdout ? jc("stdout", null, m.stdout) : cc("/dev/tty", "/dev/stdout"), m.stderr ? jc("stderr", null, m.stderr) : cc("/dev/tty1", "/dev/stderr"), ec("/dev/stdin", 0), ec("/dev/stdout", 1), ec("/dev/stderr", 1));
                        Jb = false;
                        eb(Ma);
                        aa(m);
                        if (m.onRuntimeInitialized) {
                          m.onRuntimeInitialized();
                        }
                        if (m.postRun) {
                          for ("function" == typeof m.postRun && (m.postRun = [m.postRun]); m.postRun.length; ) {
                            var b = m.postRun.shift();
                            Na.unshift(b);
                          }
                        }
                        eb(Na);
                      }
                    }
                    if (!(0 < Pa)) {
                      if (m.preRun) {
                        for ("function" == typeof m.preRun && (m.preRun = [m.preRun]); m.preRun.length; ) {
                          Oa();
                        }
                      }
                      eb(La);
                      0 < Pa || (m.setStatus ? (m.setStatus("Running..."), setTimeout(function() {
                        setTimeout(function() {
                          m.setStatus("");
                        }, 1);
                        a();
                      }, 1)) : a());
                    }
                  }
                  if (m.preInit) {
                    for ("function" == typeof m.preInit && (m.preInit = [m.preInit]); 0 < m.preInit.length; ) {
                      m.preInit.pop()();
                    }
                  }
                  $d();
                  return moduleArg.ready;
                };
              })();
              const __WEBPACK_DEFAULT_EXPORT__ = Rive;
            },
            /* 2 */
            /***/
            (module2) => {
              module2.exports = JSON.parse(`{"name":"@rive-app/canvas","version":"2.25.3","description":"Rive's canvas based web api.","main":"rive.js","homepage":"https://rive.app","repository":{"type":"git","url":"https://github.com/rive-app/rive-wasm/tree/master/js"},"keywords":["rive","animation"],"author":"Rive","contributors":["Luigi Rosso <luigi@rive.app> (https://rive.app)","Maxwell Talbot <max@rive.app> (https://rive.app)","Arthur Vivian <arthur@rive.app> (https://rive.app)","Umberto Sonnino <umberto@rive.app> (https://rive.app)","Matthew Sullivan <matt.j.sullivan@gmail.com> (mailto:matt.j.sullivan@gmail.com)"],"license":"MIT","files":["rive.js","rive.js.map","rive.wasm","rive_fallback.wasm","rive.d.ts","rive_advanced.mjs.d.ts"],"typings":"rive.d.ts","dependencies":{},"browser":{"fs":false,"path":false}}`);
            },
            /* 3 */
            /***/
            (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                Animation: () => (
                  /* reexport safe */
                  _Animation__WEBPACK_IMPORTED_MODULE_0__.Animation
                )
                /* harmony export */
              });
              var _Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(4);
            },
            /* 4 */
            /***/
            (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                Animation: () => (
                  /* binding */
                  Animation
                )
                /* harmony export */
              });
              var Animation = (
                /** @class */
                function() {
                  function Animation2(animation, artboard, runtime, playing) {
                    this.animation = animation;
                    this.artboard = artboard;
                    this.playing = playing;
                    this.loopCount = 0;
                    this.scrubTo = null;
                    this.instance = new runtime.LinearAnimationInstance(animation, artboard);
                  }
                  Object.defineProperty(Animation2.prototype, "name", {
                    /**
                     * Returns the animation's name
                     */
                    get: function() {
                      return this.animation.name;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(Animation2.prototype, "time", {
                    /**
                     * Returns the animation's name
                     */
                    get: function() {
                      return this.instance.time;
                    },
                    /**
                     * Sets the animation's current time
                     */
                    set: function(value) {
                      this.instance.time = value;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(Animation2.prototype, "loopValue", {
                    /**
                     * Returns the animation's loop type
                     */
                    get: function() {
                      return this.animation.loopValue;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(Animation2.prototype, "needsScrub", {
                    /**
                     * Indicates whether the animation needs to be scrubbed.
                     * @returns `true` if the animation needs to be scrubbed, `false` otherwise.
                     */
                    get: function() {
                      return this.scrubTo !== null;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Animation2.prototype.advance = function(time) {
                    if (this.scrubTo === null) {
                      this.instance.advance(time);
                    } else {
                      this.instance.time = 0;
                      this.instance.advance(this.scrubTo);
                      this.scrubTo = null;
                    }
                  };
                  Animation2.prototype.apply = function(mix) {
                    this.instance.apply(mix);
                  };
                  Animation2.prototype.cleanup = function() {
                    this.instance.delete();
                  };
                  return Animation2;
                }()
              );
            },
            /* 5 */
            /***/
            (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                BLANK_URL: () => (
                  /* reexport safe */
                  _sanitizeUrl__WEBPACK_IMPORTED_MODULE_1__.BLANK_URL
                ),
                /* harmony export */
                registerTouchInteractions: () => (
                  /* reexport safe */
                  _registerTouchInteractions__WEBPACK_IMPORTED_MODULE_0__.registerTouchInteractions
                ),
                /* harmony export */
                sanitizeUrl: () => (
                  /* reexport safe */
                  _sanitizeUrl__WEBPACK_IMPORTED_MODULE_1__.sanitizeUrl
                )
                /* harmony export */
              });
              var _registerTouchInteractions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(6);
              var _sanitizeUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(7);
            },
            /* 6 */
            /***/
            (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                registerTouchInteractions: () => (
                  /* binding */
                  registerTouchInteractions
                )
                /* harmony export */
              });
              var _this = void 0;
              var getClientCoordinates = function(event, isTouchScrollEnabled) {
                var _a, _b;
                if (["touchstart", "touchmove"].indexOf(event.type) > -1 && ((_a = event.touches) === null || _a === void 0 ? void 0 : _a.length)) {
                  if (!isTouchScrollEnabled) {
                    event.preventDefault();
                  }
                  return {
                    clientX: event.touches[0].clientX,
                    clientY: event.touches[0].clientY
                  };
                } else if (event.type === "touchend" && ((_b = event.changedTouches) === null || _b === void 0 ? void 0 : _b.length)) {
                  return {
                    clientX: event.changedTouches[0].clientX,
                    clientY: event.changedTouches[0].clientY
                  };
                } else {
                  return {
                    clientX: event.clientX,
                    clientY: event.clientY
                  };
                }
              };
              var registerTouchInteractions = function(_a) {
                var canvas = _a.canvas, artboard = _a.artboard, _b = _a.stateMachines, stateMachines = _b === void 0 ? [] : _b, renderer = _a.renderer, rive = _a.rive, fit = _a.fit, alignment = _a.alignment, _c = _a.isTouchScrollEnabled, isTouchScrollEnabled = _c === void 0 ? false : _c, _d = _a.layoutScaleFactor, layoutScaleFactor = _d === void 0 ? 1 : _d;
                if (!canvas || !stateMachines.length || !renderer || !rive || !artboard || typeof window === "undefined") {
                  return null;
                }
                var _prevEventType = null;
                var _syntheticEventsActive = false;
                var processEventCallback = function(event) {
                  if (_syntheticEventsActive && event instanceof MouseEvent) {
                    if (event.type == "mouseup") {
                      _syntheticEventsActive = false;
                    }
                    return;
                  }
                  _syntheticEventsActive = isTouchScrollEnabled && event.type === "touchend" && _prevEventType === "touchstart";
                  _prevEventType = event.type;
                  var boundingRect = event.currentTarget.getBoundingClientRect();
                  var _a2 = getClientCoordinates(event, isTouchScrollEnabled), clientX = _a2.clientX, clientY = _a2.clientY;
                  if (!clientX && !clientY) {
                    return;
                  }
                  var canvasX = clientX - boundingRect.left;
                  var canvasY = clientY - boundingRect.top;
                  var forwardMatrix = rive.computeAlignment(fit, alignment, {
                    minX: 0,
                    minY: 0,
                    maxX: boundingRect.width,
                    maxY: boundingRect.height
                  }, artboard.bounds, layoutScaleFactor);
                  var invertedMatrix = new rive.Mat2D();
                  forwardMatrix.invert(invertedMatrix);
                  var canvasCoordinatesVector = new rive.Vec2D(canvasX, canvasY);
                  var transformedVector = rive.mapXY(invertedMatrix, canvasCoordinatesVector);
                  var transformedX = transformedVector.x();
                  var transformedY = transformedVector.y();
                  transformedVector.delete();
                  invertedMatrix.delete();
                  canvasCoordinatesVector.delete();
                  forwardMatrix.delete();
                  switch (event.type) {
                    case "mouseout":
                      for (var _i = 0, stateMachines_1 = stateMachines; _i < stateMachines_1.length; _i++) {
                        var stateMachine = stateMachines_1[_i];
                        stateMachine.pointerMove(transformedX, transformedY);
                      }
                      break;
                    case "touchmove":
                    case "mouseover":
                    case "mousemove": {
                      for (var _b2 = 0, stateMachines_2 = stateMachines; _b2 < stateMachines_2.length; _b2++) {
                        var stateMachine = stateMachines_2[_b2];
                        stateMachine.pointerMove(transformedX, transformedY);
                      }
                      break;
                    }
                    case "touchstart":
                    case "mousedown": {
                      for (var _c2 = 0, stateMachines_3 = stateMachines; _c2 < stateMachines_3.length; _c2++) {
                        var stateMachine = stateMachines_3[_c2];
                        stateMachine.pointerDown(transformedX, transformedY);
                      }
                      break;
                    }
                    case "touchend":
                    case "mouseup": {
                      for (var _d2 = 0, stateMachines_4 = stateMachines; _d2 < stateMachines_4.length; _d2++) {
                        var stateMachine = stateMachines_4[_d2];
                        stateMachine.pointerUp(transformedX, transformedY);
                      }
                      break;
                    }
                    default:
                  }
                };
                var callback = processEventCallback.bind(_this);
                canvas.addEventListener("mouseover", callback);
                canvas.addEventListener("mouseout", callback);
                canvas.addEventListener("mousemove", callback);
                canvas.addEventListener("mousedown", callback);
                canvas.addEventListener("mouseup", callback);
                canvas.addEventListener("touchmove", callback, {
                  passive: isTouchScrollEnabled
                });
                canvas.addEventListener("touchstart", callback, {
                  passive: isTouchScrollEnabled
                });
                canvas.addEventListener("touchend", callback);
                return function() {
                  canvas.removeEventListener("mouseover", callback);
                  canvas.removeEventListener("mouseout", callback);
                  canvas.removeEventListener("mousemove", callback);
                  canvas.removeEventListener("mousedown", callback);
                  canvas.removeEventListener("mouseup", callback);
                  canvas.removeEventListener("touchmove", callback);
                  canvas.removeEventListener("touchstart", callback);
                  canvas.removeEventListener("touchend", callback);
                };
              };
            },
            /* 7 */
            /***/
            (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                BLANK_URL: () => (
                  /* binding */
                  BLANK_URL
                ),
                /* harmony export */
                sanitizeUrl: () => (
                  /* binding */
                  sanitizeUrl
                )
                /* harmony export */
              });
              var invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im;
              var htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g;
              var htmlCtrlEntityRegex = /&(newline|tab);/gi;
              var ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
              var urlSchemeRegex = /^.+(:|&colon;)/gim;
              var relativeFirstCharacters = [".", "/"];
              var BLANK_URL = "about:blank";
              function isRelativeUrlWithoutProtocol(url) {
                return relativeFirstCharacters.indexOf(url[0]) > -1;
              }
              function decodeHtmlCharacters(str) {
                var removedNullByte = str.replace(ctrlCharactersRegex, "");
                return removedNullByte.replace(htmlEntitiesRegex, function(match, dec) {
                  return String.fromCharCode(dec);
                });
              }
              function sanitizeUrl(url) {
                if (!url) {
                  return BLANK_URL;
                }
                var sanitizedUrl = decodeHtmlCharacters(url).replace(htmlCtrlEntityRegex, "").replace(ctrlCharactersRegex, "").trim();
                if (!sanitizedUrl) {
                  return BLANK_URL;
                }
                if (isRelativeUrlWithoutProtocol(sanitizedUrl)) {
                  return sanitizedUrl;
                }
                var urlSchemeParseResults = sanitizedUrl.match(urlSchemeRegex);
                if (!urlSchemeParseResults) {
                  return sanitizedUrl;
                }
                var urlScheme = urlSchemeParseResults[0];
                if (invalidProtocolRegex.test(urlScheme)) {
                  return BLANK_URL;
                }
                return sanitizedUrl;
              }
            }
            /******/
          ];
          var __webpack_module_cache__ = {};
          function __webpack_require__(moduleId) {
            var cachedModule = __webpack_module_cache__[moduleId];
            if (cachedModule !== void 0) {
              return cachedModule.exports;
            }
            var module2 = __webpack_module_cache__[moduleId] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            __webpack_modules__[moduleId](module2, module2.exports, __webpack_require__);
            return module2.exports;
          }
          (() => {
            __webpack_require__.d = (exports2, definition) => {
              for (var key in definition) {
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
                  Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
                }
              }
            };
          })();
          (() => {
            __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
          })();
          (() => {
            __webpack_require__.r = (exports2) => {
              if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
              }
              Object.defineProperty(exports2, "__esModule", { value: true });
            };
          })();
          var __webpack_exports__ = {};
          (() => {
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, {
              /* harmony export */
              Alignment: () => (
                /* binding */
                Alignment
              ),
              /* harmony export */
              EventType: () => (
                /* binding */
                EventType
              ),
              /* harmony export */
              Fit: () => (
                /* binding */
                Fit
              ),
              /* harmony export */
              Layout: () => (
                /* binding */
                Layout
              ),
              /* harmony export */
              LoopType: () => (
                /* binding */
                LoopType
              ),
              /* harmony export */
              Rive: () => (
                /* binding */
                Rive
              ),
              /* harmony export */
              RiveEventType: () => (
                /* binding */
                RiveEventType
              ),
              /* harmony export */
              RiveFile: () => (
                /* binding */
                RiveFile
              ),
              /* harmony export */
              RuntimeLoader: () => (
                /* binding */
                RuntimeLoader
              ),
              /* harmony export */
              StateMachineInput: () => (
                /* binding */
                StateMachineInput
              ),
              /* harmony export */
              StateMachineInputType: () => (
                /* binding */
                StateMachineInputType
              ),
              /* harmony export */
              Testing: () => (
                /* binding */
                Testing
              ),
              /* harmony export */
              decodeAudio: () => (
                /* binding */
                decodeAudio
              ),
              /* harmony export */
              decodeFont: () => (
                /* binding */
                decodeFont
              ),
              /* harmony export */
              decodeImage: () => (
                /* binding */
                decodeImage
              )
              /* harmony export */
            });
            var _rive_advanced_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
            var package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
            var _animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
            var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
            var __extends = /* @__PURE__ */ function() {
              var extendStatics = function(d, b) {
                extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                  d2.__proto__ = b2;
                } || function(d2, b2) {
                  for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                };
                return extendStatics(d, b);
              };
              return function(d, b) {
                if (typeof b !== "function" && b !== null)
                  throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                extendStatics(d, b);
                function __() {
                  this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
              };
            }();
            var __awaiter = function(thisArg, _arguments, P, generator) {
              function adopt(value) {
                return value instanceof P ? value : new P(function(resolve) {
                  resolve(value);
                });
              }
              return new (P || (P = Promise))(function(resolve, reject) {
                function fulfilled(value) {
                  try {
                    step(generator.next(value));
                  } catch (e) {
                    reject(e);
                  }
                }
                function rejected(value) {
                  try {
                    step(generator["throw"](value));
                  } catch (e) {
                    reject(e);
                  }
                }
                function step(result) {
                  result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                }
                step((generator = generator.apply(thisArg, _arguments || [])).next());
              });
            };
            var __generator = function(thisArg, body) {
              var _ = { label: 0, sent: function() {
                if (t[0] & 1) throw t[1];
                return t[1];
              }, trys: [], ops: [] }, f, y, t, g;
              return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
                return this;
              }), g;
              function verb(n) {
                return function(v) {
                  return step([n, v]);
                };
              }
              function step(op) {
                if (f) throw new TypeError("Generator is already executing.");
                while (g && (g = 0, op[0] && (_ = 0)), _) try {
                  if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                  if (y = 0, t) op = [op[0] & 2, t.value];
                  switch (op[0]) {
                    case 0:
                    case 1:
                      t = op;
                      break;
                    case 4:
                      _.label++;
                      return { value: op[1], done: false };
                    case 5:
                      _.label++;
                      y = op[1];
                      op = [0];
                      continue;
                    case 7:
                      op = _.ops.pop();
                      _.trys.pop();
                      continue;
                    default:
                      if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                      }
                      if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                      }
                      if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                      }
                      if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                      }
                      if (t[2]) _.ops.pop();
                      _.trys.pop();
                      continue;
                  }
                  op = body.call(thisArg, _);
                } catch (e) {
                  op = [6, e];
                  y = 0;
                } finally {
                  f = t = 0;
                }
                if (op[0] & 5) throw op[1];
                return { value: op[0] ? op[1] : void 0, done: true };
              }
            };
            var Fit;
            (function(Fit2) {
              Fit2["Cover"] = "cover";
              Fit2["Contain"] = "contain";
              Fit2["Fill"] = "fill";
              Fit2["FitWidth"] = "fitWidth";
              Fit2["FitHeight"] = "fitHeight";
              Fit2["None"] = "none";
              Fit2["ScaleDown"] = "scaleDown";
              Fit2["Layout"] = "layout";
            })(Fit || (Fit = {}));
            var Alignment;
            (function(Alignment2) {
              Alignment2["Center"] = "center";
              Alignment2["TopLeft"] = "topLeft";
              Alignment2["TopCenter"] = "topCenter";
              Alignment2["TopRight"] = "topRight";
              Alignment2["CenterLeft"] = "centerLeft";
              Alignment2["CenterRight"] = "centerRight";
              Alignment2["BottomLeft"] = "bottomLeft";
              Alignment2["BottomCenter"] = "bottomCenter";
              Alignment2["BottomRight"] = "bottomRight";
            })(Alignment || (Alignment = {}));
            var Layout = (
              /** @class */
              function() {
                function Layout2(params) {
                  var _a, _b, _c, _d, _e, _f, _g;
                  this.fit = (_a = params === null || params === void 0 ? void 0 : params.fit) !== null && _a !== void 0 ? _a : Fit.Contain;
                  this.alignment = (_b = params === null || params === void 0 ? void 0 : params.alignment) !== null && _b !== void 0 ? _b : Alignment.Center;
                  this.layoutScaleFactor = (_c = params === null || params === void 0 ? void 0 : params.layoutScaleFactor) !== null && _c !== void 0 ? _c : 1;
                  this.minX = (_d = params === null || params === void 0 ? void 0 : params.minX) !== null && _d !== void 0 ? _d : 0;
                  this.minY = (_e = params === null || params === void 0 ? void 0 : params.minY) !== null && _e !== void 0 ? _e : 0;
                  this.maxX = (_f = params === null || params === void 0 ? void 0 : params.maxX) !== null && _f !== void 0 ? _f : 0;
                  this.maxY = (_g = params === null || params === void 0 ? void 0 : params.maxY) !== null && _g !== void 0 ? _g : 0;
                }
                Layout2.new = function(_a) {
                  var fit = _a.fit, alignment = _a.alignment, minX = _a.minX, minY = _a.minY, maxX = _a.maxX, maxY = _a.maxY;
                  console.warn("This function is deprecated: please use `new Layout({})` instead");
                  return new Layout2({ fit, alignment, minX, minY, maxX, maxY });
                };
                Layout2.prototype.copyWith = function(_a) {
                  var fit = _a.fit, alignment = _a.alignment, layoutScaleFactor = _a.layoutScaleFactor, minX = _a.minX, minY = _a.minY, maxX = _a.maxX, maxY = _a.maxY;
                  return new Layout2({
                    fit: fit !== null && fit !== void 0 ? fit : this.fit,
                    alignment: alignment !== null && alignment !== void 0 ? alignment : this.alignment,
                    layoutScaleFactor: layoutScaleFactor !== null && layoutScaleFactor !== void 0 ? layoutScaleFactor : this.layoutScaleFactor,
                    minX: minX !== null && minX !== void 0 ? minX : this.minX,
                    minY: minY !== null && minY !== void 0 ? minY : this.minY,
                    maxX: maxX !== null && maxX !== void 0 ? maxX : this.maxX,
                    maxY: maxY !== null && maxY !== void 0 ? maxY : this.maxY
                  });
                };
                Layout2.prototype.runtimeFit = function(rive) {
                  if (this.cachedRuntimeFit)
                    return this.cachedRuntimeFit;
                  var fit;
                  if (this.fit === Fit.Cover)
                    fit = rive.Fit.cover;
                  else if (this.fit === Fit.Contain)
                    fit = rive.Fit.contain;
                  else if (this.fit === Fit.Fill)
                    fit = rive.Fit.fill;
                  else if (this.fit === Fit.FitWidth)
                    fit = rive.Fit.fitWidth;
                  else if (this.fit === Fit.FitHeight)
                    fit = rive.Fit.fitHeight;
                  else if (this.fit === Fit.ScaleDown)
                    fit = rive.Fit.scaleDown;
                  else if (this.fit === Fit.Layout)
                    fit = rive.Fit.layout;
                  else
                    fit = rive.Fit.none;
                  this.cachedRuntimeFit = fit;
                  return fit;
                };
                Layout2.prototype.runtimeAlignment = function(rive) {
                  if (this.cachedRuntimeAlignment)
                    return this.cachedRuntimeAlignment;
                  var alignment;
                  if (this.alignment === Alignment.TopLeft)
                    alignment = rive.Alignment.topLeft;
                  else if (this.alignment === Alignment.TopCenter)
                    alignment = rive.Alignment.topCenter;
                  else if (this.alignment === Alignment.TopRight)
                    alignment = rive.Alignment.topRight;
                  else if (this.alignment === Alignment.CenterLeft)
                    alignment = rive.Alignment.centerLeft;
                  else if (this.alignment === Alignment.CenterRight)
                    alignment = rive.Alignment.centerRight;
                  else if (this.alignment === Alignment.BottomLeft)
                    alignment = rive.Alignment.bottomLeft;
                  else if (this.alignment === Alignment.BottomCenter)
                    alignment = rive.Alignment.bottomCenter;
                  else if (this.alignment === Alignment.BottomRight)
                    alignment = rive.Alignment.bottomRight;
                  else
                    alignment = rive.Alignment.center;
                  this.cachedRuntimeAlignment = alignment;
                  return alignment;
                };
                return Layout2;
              }()
            );
            var RuntimeLoader = (
              /** @class */
              function() {
                function RuntimeLoader2() {
                }
                RuntimeLoader2.loadRuntime = function() {
                  _rive_advanced_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]({
                    // Loads Wasm bundle
                    locateFile: function() {
                      return RuntimeLoader2.wasmURL;
                    }
                  }).then(function(rive) {
                    var _a;
                    RuntimeLoader2.runtime = rive;
                    while (RuntimeLoader2.callBackQueue.length > 0) {
                      (_a = RuntimeLoader2.callBackQueue.shift()) === null || _a === void 0 ? void 0 : _a(RuntimeLoader2.runtime);
                    }
                  }).catch(function(error) {
                    var errorDetails = {
                      message: (error === null || error === void 0 ? void 0 : error.message) || "Unknown error",
                      type: (error === null || error === void 0 ? void 0 : error.name) || "Error",
                      // Some browsers may provide additional WebAssembly-specific details
                      wasmError: error instanceof WebAssembly.CompileError || error instanceof WebAssembly.RuntimeError,
                      originalError: error
                    };
                    console.debug("Rive WASM load error details:", errorDetails);
                    var backupJsdelivrUrl = "https://cdn.jsdelivr.net/npm/".concat(package_json__WEBPACK_IMPORTED_MODULE_1__.name, "@").concat(package_json__WEBPACK_IMPORTED_MODULE_1__.version, "/rive_fallback.wasm");
                    if (RuntimeLoader2.wasmURL.toLowerCase() !== backupJsdelivrUrl) {
                      console.warn("Failed to load WASM from ".concat(RuntimeLoader2.wasmURL, " (").concat(errorDetails.message, "), trying jsdelivr as a backup"));
                      RuntimeLoader2.setWasmUrl(backupJsdelivrUrl);
                      RuntimeLoader2.loadRuntime();
                    } else {
                      var errorMessage = [
                        "Could not load Rive WASM file from ".concat(RuntimeLoader2.wasmURL, " or ").concat(backupJsdelivrUrl, "."),
                        "Possible reasons:",
                        "- Network connection is down",
                        "- WebAssembly is not supported in this environment",
                        "- The WASM file is corrupted or incompatible",
                        "\nError details:",
                        "- Type: ".concat(errorDetails.type),
                        "- Message: ".concat(errorDetails.message),
                        "- WebAssembly-specific error: ".concat(errorDetails.wasmError),
                        "\nTo resolve, you may need to:",
                        "1. Check your network connection",
                        "2. Set a new WASM source via RuntimeLoader.setWasmUrl()",
                        "3. Call RuntimeLoader.loadRuntime() again"
                      ].join("\n");
                      console.error(errorMessage);
                    }
                  });
                };
                RuntimeLoader2.getInstance = function(callback) {
                  if (!RuntimeLoader2.isLoading) {
                    RuntimeLoader2.isLoading = true;
                    RuntimeLoader2.loadRuntime();
                  }
                  if (!RuntimeLoader2.runtime) {
                    RuntimeLoader2.callBackQueue.push(callback);
                  } else {
                    callback(RuntimeLoader2.runtime);
                  }
                };
                RuntimeLoader2.awaitInstance = function() {
                  return new Promise(function(resolve) {
                    return RuntimeLoader2.getInstance(function(rive) {
                      return resolve(rive);
                    });
                  });
                };
                RuntimeLoader2.setWasmUrl = function(url) {
                  RuntimeLoader2.wasmURL = url;
                };
                RuntimeLoader2.getWasmUrl = function() {
                  return RuntimeLoader2.wasmURL;
                };
                RuntimeLoader2.isLoading = false;
                RuntimeLoader2.callBackQueue = [];
                RuntimeLoader2.wasmURL = "https://unpkg.com/".concat(package_json__WEBPACK_IMPORTED_MODULE_1__.name, "@").concat(package_json__WEBPACK_IMPORTED_MODULE_1__.version, "/rive.wasm");
                return RuntimeLoader2;
              }()
            );
            var StateMachineInputType;
            (function(StateMachineInputType2) {
              StateMachineInputType2[StateMachineInputType2["Number"] = 56] = "Number";
              StateMachineInputType2[StateMachineInputType2["Trigger"] = 58] = "Trigger";
              StateMachineInputType2[StateMachineInputType2["Boolean"] = 59] = "Boolean";
            })(StateMachineInputType || (StateMachineInputType = {}));
            var StateMachineInput = (
              /** @class */
              function() {
                function StateMachineInput2(type, runtimeInput) {
                  this.type = type;
                  this.runtimeInput = runtimeInput;
                }
                Object.defineProperty(StateMachineInput2.prototype, "name", {
                  /**
                   * Returns the name of the input
                   */
                  get: function() {
                    return this.runtimeInput.name;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(StateMachineInput2.prototype, "value", {
                  /**
                   * Returns the current value of the input
                   */
                  get: function() {
                    return this.runtimeInput.value;
                  },
                  /**
                   * Sets the value of the input
                   */
                  set: function(value) {
                    this.runtimeInput.value = value;
                  },
                  enumerable: false,
                  configurable: true
                });
                StateMachineInput2.prototype.fire = function() {
                  if (this.type === StateMachineInputType.Trigger) {
                    this.runtimeInput.fire();
                  }
                };
                StateMachineInput2.prototype.delete = function() {
                  this.runtimeInput = null;
                };
                return StateMachineInput2;
              }()
            );
            var RiveEventType;
            (function(RiveEventType2) {
              RiveEventType2[RiveEventType2["General"] = 128] = "General";
              RiveEventType2[RiveEventType2["OpenUrl"] = 131] = "OpenUrl";
            })(RiveEventType || (RiveEventType = {}));
            var StateMachine = (
              /** @class */
              function() {
                function StateMachine2(stateMachine, runtime, playing, artboard) {
                  this.stateMachine = stateMachine;
                  this.playing = playing;
                  this.artboard = artboard;
                  this.inputs = [];
                  this.instance = new runtime.StateMachineInstance(stateMachine, artboard);
                  this.initInputs(runtime);
                }
                Object.defineProperty(StateMachine2.prototype, "name", {
                  get: function() {
                    return this.stateMachine.name;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(StateMachine2.prototype, "statesChanged", {
                  /**
                   * Returns a list of state names that have changed on this frame
                   */
                  get: function() {
                    var names = [];
                    for (var i = 0; i < this.instance.stateChangedCount(); i++) {
                      names.push(this.instance.stateChangedNameByIndex(i));
                    }
                    return names;
                  },
                  enumerable: false,
                  configurable: true
                });
                StateMachine2.prototype.advance = function(time) {
                  this.instance.advance(time);
                };
                StateMachine2.prototype.advanceAndApply = function(time) {
                  this.instance.advanceAndApply(time);
                };
                StateMachine2.prototype.reportedEventCount = function() {
                  return this.instance.reportedEventCount();
                };
                StateMachine2.prototype.reportedEventAt = function(i) {
                  return this.instance.reportedEventAt(i);
                };
                StateMachine2.prototype.initInputs = function(runtime) {
                  for (var i = 0; i < this.instance.inputCount(); i++) {
                    var input = this.instance.input(i);
                    this.inputs.push(this.mapRuntimeInput(input, runtime));
                  }
                };
                StateMachine2.prototype.mapRuntimeInput = function(input, runtime) {
                  if (input.type === runtime.SMIInput.bool) {
                    return new StateMachineInput(StateMachineInputType.Boolean, input.asBool());
                  } else if (input.type === runtime.SMIInput.number) {
                    return new StateMachineInput(StateMachineInputType.Number, input.asNumber());
                  } else if (input.type === runtime.SMIInput.trigger) {
                    return new StateMachineInput(StateMachineInputType.Trigger, input.asTrigger());
                  }
                };
                StateMachine2.prototype.cleanup = function() {
                  this.inputs.forEach(function(input) {
                    input.delete();
                  });
                  this.inputs.length = 0;
                  this.instance.delete();
                };
                return StateMachine2;
              }()
            );
            var Animator = (
              /** @class */
              function() {
                function Animator2(runtime, artboard, eventManager, animations, stateMachines) {
                  if (animations === void 0) {
                    animations = [];
                  }
                  if (stateMachines === void 0) {
                    stateMachines = [];
                  }
                  this.runtime = runtime;
                  this.artboard = artboard;
                  this.eventManager = eventManager;
                  this.animations = animations;
                  this.stateMachines = stateMachines;
                }
                Animator2.prototype.add = function(animatables, playing, fireEvent) {
                  if (fireEvent === void 0) {
                    fireEvent = true;
                  }
                  animatables = mapToStringArray(animatables);
                  if (animatables.length === 0) {
                    this.animations.forEach(function(a) {
                      return a.playing = playing;
                    });
                    this.stateMachines.forEach(function(m) {
                      return m.playing = playing;
                    });
                  } else {
                    var instancedAnimationNames = this.animations.map(function(a) {
                      return a.name;
                    });
                    var instancedMachineNames = this.stateMachines.map(function(m) {
                      return m.name;
                    });
                    for (var i = 0; i < animatables.length; i++) {
                      var aIndex = instancedAnimationNames.indexOf(animatables[i]);
                      var mIndex = instancedMachineNames.indexOf(animatables[i]);
                      if (aIndex >= 0 || mIndex >= 0) {
                        if (aIndex >= 0) {
                          this.animations[aIndex].playing = playing;
                        } else {
                          this.stateMachines[mIndex].playing = playing;
                        }
                      } else {
                        var anim = this.artboard.animationByName(animatables[i]);
                        if (anim) {
                          var newAnimation = new _animation__WEBPACK_IMPORTED_MODULE_2__.Animation(anim, this.artboard, this.runtime, playing);
                          newAnimation.advance(0);
                          newAnimation.apply(1);
                          this.animations.push(newAnimation);
                        } else {
                          var sm = this.artboard.stateMachineByName(animatables[i]);
                          if (sm) {
                            var newStateMachine = new StateMachine(sm, this.runtime, playing, this.artboard);
                            this.stateMachines.push(newStateMachine);
                          }
                        }
                      }
                    }
                  }
                  if (fireEvent) {
                    if (playing) {
                      this.eventManager.fire({
                        type: EventType.Play,
                        data: this.playing
                      });
                    } else {
                      this.eventManager.fire({
                        type: EventType.Pause,
                        data: this.paused
                      });
                    }
                  }
                  return playing ? this.playing : this.paused;
                };
                Animator2.prototype.initLinearAnimations = function(animatables, playing) {
                  var instancedAnimationNames = this.animations.map(function(a) {
                    return a.name;
                  });
                  for (var i = 0; i < animatables.length; i++) {
                    var aIndex = instancedAnimationNames.indexOf(animatables[i]);
                    if (aIndex >= 0) {
                      this.animations[aIndex].playing = playing;
                    } else {
                      var anim = this.artboard.animationByName(animatables[i]);
                      if (anim) {
                        var newAnimation = new _animation__WEBPACK_IMPORTED_MODULE_2__.Animation(anim, this.artboard, this.runtime, playing);
                        newAnimation.advance(0);
                        newAnimation.apply(1);
                        this.animations.push(newAnimation);
                      }
                    }
                  }
                };
                Animator2.prototype.initStateMachines = function(animatables, playing) {
                  var instancedStateMachineNames = this.stateMachines.map(function(a) {
                    return a.name;
                  });
                  for (var i = 0; i < animatables.length; i++) {
                    var aIndex = instancedStateMachineNames.indexOf(animatables[i]);
                    if (aIndex >= 0) {
                      this.stateMachines[aIndex].playing = playing;
                    } else {
                      var sm = this.artboard.stateMachineByName(animatables[i]);
                      if (sm) {
                        var newStateMachine = new StateMachine(sm, this.runtime, playing, this.artboard);
                        this.stateMachines.push(newStateMachine);
                      } else {
                        this.initLinearAnimations([animatables[i]], playing);
                      }
                    }
                  }
                };
                Animator2.prototype.play = function(animatables) {
                  return this.add(animatables, true);
                };
                Animator2.prototype.pause = function(animatables) {
                  return this.add(animatables, false);
                };
                Animator2.prototype.scrub = function(animatables, value) {
                  var forScrubbing = this.animations.filter(function(a) {
                    return animatables.includes(a.name);
                  });
                  forScrubbing.forEach(function(a) {
                    return a.scrubTo = value;
                  });
                  return forScrubbing.map(function(a) {
                    return a.name;
                  });
                };
                Object.defineProperty(Animator2.prototype, "playing", {
                  /**
                   * Returns a list of names of all animations and state machines currently
                   * playing
                   */
                  get: function() {
                    return this.animations.filter(function(a) {
                      return a.playing;
                    }).map(function(a) {
                      return a.name;
                    }).concat(this.stateMachines.filter(function(m) {
                      return m.playing;
                    }).map(function(m) {
                      return m.name;
                    }));
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Animator2.prototype, "paused", {
                  /**
                   * Returns a list of names of all animations and state machines currently
                   * paused
                   */
                  get: function() {
                    return this.animations.filter(function(a) {
                      return !a.playing;
                    }).map(function(a) {
                      return a.name;
                    }).concat(this.stateMachines.filter(function(m) {
                      return !m.playing;
                    }).map(function(m) {
                      return m.name;
                    }));
                  },
                  enumerable: false,
                  configurable: true
                });
                Animator2.prototype.stop = function(animatables) {
                  var _this = this;
                  animatables = mapToStringArray(animatables);
                  var removedNames = [];
                  if (animatables.length === 0) {
                    removedNames = this.animations.map(function(a) {
                      return a.name;
                    }).concat(this.stateMachines.map(function(m) {
                      return m.name;
                    }));
                    this.animations.forEach(function(a) {
                      return a.cleanup();
                    });
                    this.stateMachines.forEach(function(m) {
                      return m.cleanup();
                    });
                    this.animations.splice(0, this.animations.length);
                    this.stateMachines.splice(0, this.stateMachines.length);
                  } else {
                    var animationsToRemove = this.animations.filter(function(a) {
                      return animatables.includes(a.name);
                    });
                    animationsToRemove.forEach(function(a) {
                      a.cleanup();
                      _this.animations.splice(_this.animations.indexOf(a), 1);
                    });
                    var machinesToRemove = this.stateMachines.filter(function(m) {
                      return animatables.includes(m.name);
                    });
                    machinesToRemove.forEach(function(m) {
                      m.cleanup();
                      _this.stateMachines.splice(_this.stateMachines.indexOf(m), 1);
                    });
                    removedNames = animationsToRemove.map(function(a) {
                      return a.name;
                    }).concat(machinesToRemove.map(function(m) {
                      return m.name;
                    }));
                  }
                  this.eventManager.fire({
                    type: EventType.Stop,
                    data: removedNames
                  });
                  return removedNames;
                };
                Object.defineProperty(Animator2.prototype, "isPlaying", {
                  /**
                   * Returns true if at least one animation is active
                   */
                  get: function() {
                    return this.animations.reduce(function(acc, curr) {
                      return acc || curr.playing;
                    }, false) || this.stateMachines.reduce(function(acc, curr) {
                      return acc || curr.playing;
                    }, false);
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Animator2.prototype, "isPaused", {
                  /**
                   * Returns true if all animations are paused and there's at least one animation
                   */
                  get: function() {
                    return !this.isPlaying && (this.animations.length > 0 || this.stateMachines.length > 0);
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Animator2.prototype, "isStopped", {
                  /**
                   * Returns true if there are no playing or paused animations/state machines
                   */
                  get: function() {
                    return this.animations.length === 0 && this.stateMachines.length === 0;
                  },
                  enumerable: false,
                  configurable: true
                });
                Animator2.prototype.atLeastOne = function(playing, fireEvent) {
                  if (fireEvent === void 0) {
                    fireEvent = true;
                  }
                  var instancedName;
                  if (this.animations.length === 0 && this.stateMachines.length === 0) {
                    if (this.artboard.animationCount() > 0) {
                      this.add([instancedName = this.artboard.animationByIndex(0).name], playing, fireEvent);
                    } else if (this.artboard.stateMachineCount() > 0) {
                      this.add([instancedName = this.artboard.stateMachineByIndex(0).name], playing, fireEvent);
                    }
                  }
                  return instancedName;
                };
                Animator2.prototype.handleLooping = function() {
                  for (var _i = 0, _a = this.animations.filter(function(a) {
                    return a.playing;
                  }); _i < _a.length; _i++) {
                    var animation = _a[_i];
                    if (animation.loopValue === 0 && animation.loopCount) {
                      animation.loopCount = 0;
                      this.stop(animation.name);
                    } else if (animation.loopValue === 1 && animation.loopCount) {
                      this.eventManager.fire({
                        type: EventType.Loop,
                        data: { animation: animation.name, type: LoopType.Loop }
                      });
                      animation.loopCount = 0;
                    } else if (animation.loopValue === 2 && animation.loopCount > 1) {
                      this.eventManager.fire({
                        type: EventType.Loop,
                        data: { animation: animation.name, type: LoopType.PingPong }
                      });
                      animation.loopCount = 0;
                    }
                  }
                };
                Animator2.prototype.handleStateChanges = function() {
                  var statesChanged = [];
                  for (var _i = 0, _a = this.stateMachines.filter(function(sm) {
                    return sm.playing;
                  }); _i < _a.length; _i++) {
                    var stateMachine = _a[_i];
                    statesChanged.push.apply(statesChanged, stateMachine.statesChanged);
                  }
                  if (statesChanged.length > 0) {
                    this.eventManager.fire({
                      type: EventType.StateChange,
                      data: statesChanged
                    });
                  }
                };
                Animator2.prototype.handleAdvancing = function(time) {
                  this.eventManager.fire({
                    type: EventType.Advance,
                    data: time
                  });
                };
                return Animator2;
              }()
            );
            var EventType;
            (function(EventType2) {
              EventType2["Load"] = "load";
              EventType2["LoadError"] = "loaderror";
              EventType2["Play"] = "play";
              EventType2["Pause"] = "pause";
              EventType2["Stop"] = "stop";
              EventType2["Loop"] = "loop";
              EventType2["Draw"] = "draw";
              EventType2["Advance"] = "advance";
              EventType2["StateChange"] = "statechange";
              EventType2["RiveEvent"] = "riveevent";
              EventType2["AudioStatusChange"] = "audiostatuschange";
            })(EventType || (EventType = {}));
            var LoopType;
            (function(LoopType2) {
              LoopType2["OneShot"] = "oneshot";
              LoopType2["Loop"] = "loop";
              LoopType2["PingPong"] = "pingpong";
            })(LoopType || (LoopType = {}));
            var EventManager = (
              /** @class */
              function() {
                function EventManager2(listeners) {
                  if (listeners === void 0) {
                    listeners = [];
                  }
                  this.listeners = listeners;
                }
                EventManager2.prototype.getListeners = function(type) {
                  return this.listeners.filter(function(e) {
                    return e.type === type;
                  });
                };
                EventManager2.prototype.add = function(listener) {
                  if (!this.listeners.includes(listener)) {
                    this.listeners.push(listener);
                  }
                };
                EventManager2.prototype.remove = function(listener) {
                  for (var i = 0; i < this.listeners.length; i++) {
                    var currentListener = this.listeners[i];
                    if (currentListener.type === listener.type) {
                      if (currentListener.callback === listener.callback) {
                        this.listeners.splice(i, 1);
                        break;
                      }
                    }
                  }
                };
                EventManager2.prototype.removeAll = function(type) {
                  var _this = this;
                  if (!type) {
                    this.listeners.splice(0, this.listeners.length);
                  } else {
                    this.listeners.filter(function(l) {
                      return l.type === type;
                    }).forEach(function(l) {
                      return _this.remove(l);
                    });
                  }
                };
                EventManager2.prototype.fire = function(event) {
                  var eventListeners = this.getListeners(event.type);
                  eventListeners.forEach(function(listener) {
                    return listener.callback(event);
                  });
                };
                return EventManager2;
              }()
            );
            var TaskQueueManager = (
              /** @class */
              function() {
                function TaskQueueManager2(eventManager) {
                  this.eventManager = eventManager;
                  this.queue = [];
                }
                TaskQueueManager2.prototype.add = function(task) {
                  this.queue.push(task);
                };
                TaskQueueManager2.prototype.process = function() {
                  while (this.queue.length > 0) {
                    var task = this.queue.shift();
                    if (task === null || task === void 0 ? void 0 : task.action) {
                      task.action();
                    }
                    if (task === null || task === void 0 ? void 0 : task.event) {
                      this.eventManager.fire(task.event);
                    }
                  }
                };
                return TaskQueueManager2;
              }()
            );
            var SystemAudioStatus;
            (function(SystemAudioStatus2) {
              SystemAudioStatus2[SystemAudioStatus2["AVAILABLE"] = 0] = "AVAILABLE";
              SystemAudioStatus2[SystemAudioStatus2["UNAVAILABLE"] = 1] = "UNAVAILABLE";
            })(SystemAudioStatus || (SystemAudioStatus = {}));
            var AudioManager = (
              /** @class */
              function(_super) {
                __extends(AudioManager2, _super);
                function AudioManager2() {
                  var _this = _super !== null && _super.apply(this, arguments) || this;
                  _this._started = false;
                  _this._enabled = false;
                  _this._status = SystemAudioStatus.UNAVAILABLE;
                  return _this;
                }
                AudioManager2.prototype.delay = function(time) {
                  return __awaiter(this, void 0, void 0, function() {
                    return __generator(this, function(_a) {
                      return [2, new Promise(function(resolve) {
                        return setTimeout(resolve, time);
                      })];
                    });
                  });
                };
                AudioManager2.prototype.timeout = function() {
                  return __awaiter(this, void 0, void 0, function() {
                    return __generator(this, function(_a) {
                      return [2, new Promise(function(_, reject) {
                        return setTimeout(reject, 50);
                      })];
                    });
                  });
                };
                AudioManager2.prototype.reportToListeners = function() {
                  this.fire({ type: EventType.AudioStatusChange });
                  this.removeAll();
                };
                AudioManager2.prototype.enableAudio = function() {
                  return __awaiter(this, void 0, void 0, function() {
                    return __generator(this, function(_a) {
                      if (!this._enabled) {
                        this._enabled = true;
                        this._status = SystemAudioStatus.AVAILABLE;
                        this.reportToListeners();
                      }
                      return [
                        2
                        /*return*/
                      ];
                    });
                  });
                };
                AudioManager2.prototype.testAudio = function() {
                  return __awaiter(this, void 0, void 0, function() {
                    var _a;
                    return __generator(this, function(_b) {
                      switch (_b.label) {
                        case 0:
                          if (!(this._status === SystemAudioStatus.UNAVAILABLE && this._audioContext !== null)) return [3, 4];
                          _b.label = 1;
                        case 1:
                          _b.trys.push([1, 3, , 4]);
                          return [4, Promise.race([this._audioContext.resume(), this.timeout()])];
                        case 2:
                          _b.sent();
                          this.enableAudio();
                          return [3, 4];
                        case 3:
                          _a = _b.sent();
                          return [3, 4];
                        case 4:
                          return [
                            2
                            /*return*/
                          ];
                      }
                    });
                  });
                };
                AudioManager2.prototype._establishAudio = function() {
                  return __awaiter(this, void 0, void 0, function() {
                    return __generator(this, function(_a) {
                      switch (_a.label) {
                        case 0:
                          if (!!this._started) return [3, 5];
                          this._started = true;
                          if (!(typeof window == "undefined")) return [3, 1];
                          this.enableAudio();
                          return [3, 5];
                        case 1:
                          this._audioContext = new AudioContext();
                          this.listenForUserAction();
                          _a.label = 2;
                        case 2:
                          if (!(this._status === SystemAudioStatus.UNAVAILABLE)) return [3, 5];
                          return [4, this.testAudio()];
                        case 3:
                          _a.sent();
                          return [4, this.delay(1e3)];
                        case 4:
                          _a.sent();
                          return [3, 2];
                        case 5:
                          return [
                            2
                            /*return*/
                          ];
                      }
                    });
                  });
                };
                AudioManager2.prototype.listenForUserAction = function() {
                  var _this = this;
                  var _clickListener = function() {
                    return __awaiter(_this, void 0, void 0, function() {
                      return __generator(this, function(_a) {
                        this.enableAudio();
                        return [
                          2
                          /*return*/
                        ];
                      });
                    });
                  };
                  document.addEventListener("pointerdown", _clickListener, {
                    once: true
                  });
                };
                AudioManager2.prototype.establishAudio = function() {
                  return __awaiter(this, void 0, void 0, function() {
                    return __generator(this, function(_a) {
                      this._establishAudio();
                      return [
                        2
                        /*return*/
                      ];
                    });
                  });
                };
                Object.defineProperty(AudioManager2.prototype, "systemVolume", {
                  get: function() {
                    if (this._status === SystemAudioStatus.UNAVAILABLE) {
                      this.testAudio();
                      return 0;
                    }
                    return 1;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(AudioManager2.prototype, "status", {
                  get: function() {
                    return this._status;
                  },
                  enumerable: false,
                  configurable: true
                });
                return AudioManager2;
              }(EventManager)
            );
            var audioManager = new AudioManager();
            var FakeResizeObserver = (
              /** @class */
              function() {
                function FakeResizeObserver2() {
                }
                FakeResizeObserver2.prototype.observe = function() {
                };
                FakeResizeObserver2.prototype.unobserve = function() {
                };
                FakeResizeObserver2.prototype.disconnect = function() {
                };
                return FakeResizeObserver2;
              }()
            );
            var MyResizeObserver = globalThis.ResizeObserver || FakeResizeObserver;
            var ObjectObservers = (
              /** @class */
              function() {
                function ObjectObservers2() {
                  var _this = this;
                  this._elementsMap = /* @__PURE__ */ new Map();
                  this._onObservedEntry = function(entry) {
                    var observed = _this._elementsMap.get(entry.target);
                    if (observed !== null) {
                      observed.onResize(entry.target.clientWidth == 0 || entry.target.clientHeight == 0);
                    } else {
                      _this._resizeObserver.unobserve(entry.target);
                    }
                  };
                  this._onObserved = function(entries) {
                    entries.forEach(_this._onObservedEntry);
                  };
                  this._resizeObserver = new MyResizeObserver(this._onObserved);
                }
                ObjectObservers2.prototype.add = function(element, onResize) {
                  var observed = {
                    onResize,
                    element
                  };
                  this._elementsMap.set(element, observed);
                  this._resizeObserver.observe(element);
                  return observed;
                };
                ObjectObservers2.prototype.remove = function(observed) {
                  this._resizeObserver.unobserve(observed.element);
                  this._elementsMap.delete(observed.element);
                };
                return ObjectObservers2;
              }()
            );
            var observers = new ObjectObservers();
            var RiveFile = (
              /** @class */
              function() {
                function RiveFile2(params) {
                  this.enableRiveAssetCDN = true;
                  this.referenceCount = 0;
                  this.src = params.src;
                  this.buffer = params.buffer;
                  if (params.assetLoader)
                    this.assetLoader = params.assetLoader;
                  this.enableRiveAssetCDN = typeof params.enableRiveAssetCDN == "boolean" ? params.enableRiveAssetCDN : true;
                  this.eventManager = new EventManager();
                  if (params.onLoad)
                    this.on(EventType.Load, params.onLoad);
                  if (params.onLoadError)
                    this.on(EventType.LoadError, params.onLoadError);
                }
                RiveFile2.prototype.initData = function() {
                  return __awaiter(this, void 0, void 0, function() {
                    var _a, loader, _b;
                    return __generator(this, function(_c) {
                      switch (_c.label) {
                        case 0:
                          if (!this.src) return [3, 2];
                          _a = this;
                          return [4, loadRiveFile(this.src)];
                        case 1:
                          _a.buffer = _c.sent();
                          _c.label = 2;
                        case 2:
                          if (this.assetLoader) {
                            loader = new this.runtime.CustomFileAssetLoader({
                              loadContents: this.assetLoader
                            });
                          }
                          _b = this;
                          return [4, this.runtime.load(new Uint8Array(this.buffer), loader, this.enableRiveAssetCDN)];
                        case 3:
                          _b.file = _c.sent();
                          if (this.file !== null) {
                            this.eventManager.fire({
                              type: EventType.Load,
                              data: this
                            });
                          } else {
                            this.eventManager.fire({
                              type: EventType.LoadError,
                              data: null
                            });
                            throw new Error(RiveFile2.fileLoadErrorMessage);
                          }
                          return [
                            2
                            /*return*/
                          ];
                      }
                    });
                  });
                };
                RiveFile2.prototype.init = function() {
                  return __awaiter(this, void 0, void 0, function() {
                    var _a;
                    return __generator(this, function(_b) {
                      switch (_b.label) {
                        case 0:
                          if (!this.src && !this.buffer) {
                            throw new Error(RiveFile2.missingErrorMessage);
                          }
                          _a = this;
                          return [4, RuntimeLoader.awaitInstance()];
                        case 1:
                          _a.runtime = _b.sent();
                          return [4, this.initData()];
                        case 2:
                          _b.sent();
                          return [
                            2
                            /*return*/
                          ];
                      }
                    });
                  });
                };
                RiveFile2.prototype.on = function(type, callback) {
                  this.eventManager.add({
                    type,
                    callback
                  });
                };
                RiveFile2.prototype.off = function(type, callback) {
                  this.eventManager.remove({
                    type,
                    callback
                  });
                };
                RiveFile2.prototype.cleanup = function() {
                  var _a;
                  this.referenceCount -= 1;
                  if (this.referenceCount <= 0) {
                    this.removeAllRiveEventListeners();
                    (_a = this.file) === null || _a === void 0 ? void 0 : _a.delete();
                  }
                };
                RiveFile2.prototype.removeAllRiveEventListeners = function(type) {
                  this.eventManager.removeAll(type);
                };
                RiveFile2.prototype.getInstance = function() {
                  if (this.file !== null) {
                    this.referenceCount += 1;
                    return this.file;
                  }
                };
                RiveFile2.missingErrorMessage = "Rive source file or data buffer required";
                RiveFile2.fileLoadErrorMessage = "The file failed to load";
                return RiveFile2;
              }()
            );
            var Rive = (
              /** @class */
              function() {
                function Rive2(params) {
                  var _this = this;
                  var _a;
                  this.loaded = false;
                  this._observed = null;
                  this.readyForPlaying = false;
                  this.artboard = null;
                  this.eventCleanup = null;
                  this.shouldDisableRiveListeners = false;
                  this.automaticallyHandleEvents = false;
                  this.enableRiveAssetCDN = true;
                  this._volume = 1;
                  this._artboardWidth = void 0;
                  this._artboardHeight = void 0;
                  this._devicePixelRatioUsed = 1;
                  this._hasZeroSize = false;
                  this._audioEventListener = null;
                  this.durations = [];
                  this.frameTimes = [];
                  this.frameCount = 0;
                  this.isTouchScrollEnabled = false;
                  this.onCanvasResize = function(hasZeroSize) {
                    _this._hasZeroSize = hasZeroSize;
                    if (!_this._layout.maxX || !_this._layout.maxY) {
                      _this.resizeToCanvas();
                    }
                  };
                  this.renderSecondTimer = 0;
                  this.canvas = params.canvas;
                  if (params.canvas.constructor === HTMLCanvasElement) {
                    this._observed = observers.add(this.canvas, this.onCanvasResize);
                  }
                  this.src = params.src;
                  this.buffer = params.buffer;
                  this.riveFile = params.riveFile;
                  this.layout = (_a = params.layout) !== null && _a !== void 0 ? _a : new Layout();
                  this.shouldDisableRiveListeners = !!params.shouldDisableRiveListeners;
                  this.isTouchScrollEnabled = !!params.isTouchScrollEnabled;
                  this.automaticallyHandleEvents = !!params.automaticallyHandleEvents;
                  this.enableRiveAssetCDN = params.enableRiveAssetCDN === void 0 ? true : params.enableRiveAssetCDN;
                  this.eventManager = new EventManager();
                  if (params.onLoad)
                    this.on(EventType.Load, params.onLoad);
                  if (params.onLoadError)
                    this.on(EventType.LoadError, params.onLoadError);
                  if (params.onPlay)
                    this.on(EventType.Play, params.onPlay);
                  if (params.onPause)
                    this.on(EventType.Pause, params.onPause);
                  if (params.onStop)
                    this.on(EventType.Stop, params.onStop);
                  if (params.onLoop)
                    this.on(EventType.Loop, params.onLoop);
                  if (params.onStateChange)
                    this.on(EventType.StateChange, params.onStateChange);
                  if (params.onAdvance)
                    this.on(EventType.Advance, params.onAdvance);
                  if (params.onload && !params.onLoad)
                    this.on(EventType.Load, params.onload);
                  if (params.onloaderror && !params.onLoadError)
                    this.on(EventType.LoadError, params.onloaderror);
                  if (params.onplay && !params.onPlay)
                    this.on(EventType.Play, params.onplay);
                  if (params.onpause && !params.onPause)
                    this.on(EventType.Pause, params.onpause);
                  if (params.onstop && !params.onStop)
                    this.on(EventType.Stop, params.onstop);
                  if (params.onloop && !params.onLoop)
                    this.on(EventType.Loop, params.onloop);
                  if (params.onstatechange && !params.onStateChange)
                    this.on(EventType.StateChange, params.onstatechange);
                  if (params.assetLoader)
                    this.assetLoader = params.assetLoader;
                  this.taskQueue = new TaskQueueManager(this.eventManager);
                  this.init({
                    src: this.src,
                    buffer: this.buffer,
                    riveFile: this.riveFile,
                    autoplay: params.autoplay,
                    animations: params.animations,
                    stateMachines: params.stateMachines,
                    artboard: params.artboard,
                    useOffscreenRenderer: params.useOffscreenRenderer
                  });
                }
                Rive2.new = function(params) {
                  console.warn("This function is deprecated: please use `new Rive({})` instead");
                  return new Rive2(params);
                };
                Rive2.prototype.onSystemAudioChanged = function() {
                  this.volume = this._volume;
                };
                Rive2.prototype.init = function(_a) {
                  var _this = this;
                  var src = _a.src, buffer = _a.buffer, riveFile = _a.riveFile, animations = _a.animations, stateMachines = _a.stateMachines, artboard = _a.artboard, _b = _a.autoplay, autoplay = _b === void 0 ? false : _b, _c = _a.useOffscreenRenderer, useOffscreenRenderer = _c === void 0 ? false : _c;
                  this.src = src;
                  this.buffer = buffer;
                  this.riveFile = riveFile;
                  if (!this.src && !this.buffer && !this.riveFile) {
                    throw new Error(Rive2.missingErrorMessage);
                  }
                  var startingAnimationNames = mapToStringArray(animations);
                  var startingStateMachineNames = mapToStringArray(stateMachines);
                  this.loaded = false;
                  this.readyForPlaying = false;
                  RuntimeLoader.awaitInstance().then(function(runtime) {
                    _this.runtime = runtime;
                    _this.removeRiveListeners();
                    _this.deleteRiveRenderer();
                    _this.renderer = _this.runtime.makeRenderer(_this.canvas, useOffscreenRenderer);
                    if (!(_this.canvas.width || _this.canvas.height)) {
                      _this.resizeDrawingSurfaceToCanvas();
                    }
                    _this.initData(artboard, startingAnimationNames, startingStateMachineNames, autoplay).then(function() {
                      return _this.setupRiveListeners();
                    }).catch(function(e) {
                      console.error(e);
                    });
                  }).catch(function(e) {
                    console.error(e);
                  });
                };
                Rive2.prototype.setupRiveListeners = function(riveListenerOptions) {
                  var _this = this;
                  if (!this.shouldDisableRiveListeners) {
                    var activeStateMachines = (this.animator.stateMachines || []).filter(function(sm) {
                      return sm.playing && _this.runtime.hasListeners(sm.instance);
                    }).map(function(sm) {
                      return sm.instance;
                    });
                    var touchScrollEnabledOption = this.isTouchScrollEnabled;
                    if (riveListenerOptions && "isTouchScrollEnabled" in riveListenerOptions) {
                      touchScrollEnabledOption = riveListenerOptions.isTouchScrollEnabled;
                    }
                    this.eventCleanup = (0, _utils__WEBPACK_IMPORTED_MODULE_3__.registerTouchInteractions)({
                      canvas: this.canvas,
                      artboard: this.artboard,
                      stateMachines: activeStateMachines,
                      renderer: this.renderer,
                      rive: this.runtime,
                      fit: this._layout.runtimeFit(this.runtime),
                      alignment: this._layout.runtimeAlignment(this.runtime),
                      isTouchScrollEnabled: touchScrollEnabledOption,
                      layoutScaleFactor: this._layout.layoutScaleFactor
                    });
                  }
                };
                Rive2.prototype.removeRiveListeners = function() {
                  if (this.eventCleanup) {
                    this.eventCleanup();
                    this.eventCleanup = null;
                  }
                };
                Rive2.prototype.initializeAudio = function() {
                  var _this = this;
                  var _a;
                  if (audioManager.status == SystemAudioStatus.UNAVAILABLE) {
                    if (((_a = this.artboard) === null || _a === void 0 ? void 0 : _a.hasAudio) && this._audioEventListener === null) {
                      this._audioEventListener = {
                        type: EventType.AudioStatusChange,
                        callback: function() {
                          return _this.onSystemAudioChanged();
                        }
                      };
                      audioManager.add(this._audioEventListener);
                      audioManager.establishAudio();
                    }
                  }
                };
                Rive2.prototype.initArtboardSize = function() {
                  if (!this.artboard)
                    return;
                  this._artboardWidth = this.artboard.width = this._artboardWidth || this.artboard.width;
                  this._artboardHeight = this.artboard.height = this._artboardHeight || this.artboard.height;
                };
                Rive2.prototype.initData = function(artboardName, animationNames, stateMachineNames, autoplay) {
                  var _a;
                  return __awaiter(this, void 0, void 0, function() {
                    var error_1, msg;
                    return __generator(this, function(_b) {
                      switch (_b.label) {
                        case 0:
                          _b.trys.push([0, 3, , 4]);
                          if (!(this.riveFile == null)) return [3, 2];
                          this.riveFile = new RiveFile({
                            src: this.src,
                            buffer: this.buffer,
                            enableRiveAssetCDN: this.enableRiveAssetCDN,
                            assetLoader: this.assetLoader
                          });
                          return [4, this.riveFile.init()];
                        case 1:
                          _b.sent();
                          _b.label = 2;
                        case 2:
                          this.file = this.riveFile.getInstance();
                          this.initArtboard(artboardName, animationNames, stateMachineNames, autoplay);
                          this.initArtboardSize();
                          this.initializeAudio();
                          this.loaded = true;
                          this.eventManager.fire({
                            type: EventType.Load,
                            data: (_a = this.src) !== null && _a !== void 0 ? _a : "buffer"
                          });
                          this.readyForPlaying = true;
                          this.taskQueue.process();
                          this.drawFrame();
                          return [2, Promise.resolve()];
                        case 3:
                          error_1 = _b.sent();
                          msg = "Problem loading file; may be corrupt!";
                          console.warn(msg);
                          this.eventManager.fire({ type: EventType.LoadError, data: msg });
                          return [2, Promise.reject(msg)];
                        case 4:
                          return [
                            2
                            /*return*/
                          ];
                      }
                    });
                  });
                };
                Rive2.prototype.initArtboard = function(artboardName, animationNames, stateMachineNames, autoplay) {
                  if (!this.file) {
                    return;
                  }
                  var rootArtboard = artboardName ? this.file.artboardByName(artboardName) : this.file.defaultArtboard();
                  if (!rootArtboard) {
                    var msg = "Invalid artboard name or no default artboard";
                    console.warn(msg);
                    this.eventManager.fire({ type: EventType.LoadError, data: msg });
                    return;
                  }
                  this.artboard = rootArtboard;
                  rootArtboard.volume = this._volume * audioManager.systemVolume;
                  if (this.artboard.animationCount() < 1) {
                    var msg = "Artboard has no animations";
                    this.eventManager.fire({ type: EventType.LoadError, data: msg });
                    throw msg;
                  }
                  this.animator = new Animator(this.runtime, this.artboard, this.eventManager);
                  var instanceNames;
                  if (animationNames.length > 0 || stateMachineNames.length > 0) {
                    instanceNames = animationNames.concat(stateMachineNames);
                    this.animator.initLinearAnimations(animationNames, autoplay);
                    this.animator.initStateMachines(stateMachineNames, autoplay);
                  } else {
                    instanceNames = [this.animator.atLeastOne(autoplay, false)];
                  }
                  this.taskQueue.add({
                    event: {
                      type: autoplay ? EventType.Play : EventType.Pause,
                      data: instanceNames
                    }
                  });
                };
                Rive2.prototype.drawFrame = function() {
                  this.startRendering();
                };
                Rive2.prototype.draw = function(time, onSecond) {
                  this.frameRequestId = null;
                  var before = performance.now();
                  if (!this.lastRenderTime) {
                    this.lastRenderTime = time;
                  }
                  this.renderSecondTimer += time - this.lastRenderTime;
                  if (this.renderSecondTimer > 5e3) {
                    this.renderSecondTimer = 0;
                    onSecond === null || onSecond === void 0 ? void 0 : onSecond();
                  }
                  var elapsedTime = (time - this.lastRenderTime) / 1e3;
                  this.lastRenderTime = time;
                  var activeAnimations = this.animator.animations.filter(function(a) {
                    return a.playing || a.needsScrub;
                  }).sort(function(first) {
                    return first.needsScrub ? -1 : 1;
                  });
                  for (var _i = 0, activeAnimations_1 = activeAnimations; _i < activeAnimations_1.length; _i++) {
                    var animation = activeAnimations_1[_i];
                    animation.advance(elapsedTime);
                    if (animation.instance.didLoop) {
                      animation.loopCount += 1;
                    }
                    animation.apply(1);
                  }
                  var activeStateMachines = this.animator.stateMachines.filter(function(a) {
                    return a.playing;
                  });
                  for (var _a = 0, activeStateMachines_1 = activeStateMachines; _a < activeStateMachines_1.length; _a++) {
                    var stateMachine = activeStateMachines_1[_a];
                    var numEventsReported = stateMachine.reportedEventCount();
                    if (numEventsReported) {
                      for (var i = 0; i < numEventsReported; i++) {
                        var event_1 = stateMachine.reportedEventAt(i);
                        if (event_1) {
                          if (event_1.type === RiveEventType.OpenUrl) {
                            this.eventManager.fire({
                              type: EventType.RiveEvent,
                              data: event_1
                            });
                            if (this.automaticallyHandleEvents) {
                              var newAnchorTag = document.createElement("a");
                              var _b = event_1, url = _b.url, target = _b.target;
                              var sanitizedUrl = (0, _utils__WEBPACK_IMPORTED_MODULE_3__.sanitizeUrl)(url);
                              url && newAnchorTag.setAttribute("href", sanitizedUrl);
                              target && newAnchorTag.setAttribute("target", target);
                              if (sanitizedUrl && sanitizedUrl !== _utils__WEBPACK_IMPORTED_MODULE_3__.BLANK_URL) {
                                newAnchorTag.click();
                              }
                            }
                          } else {
                            this.eventManager.fire({
                              type: EventType.RiveEvent,
                              data: event_1
                            });
                          }
                        }
                      }
                    }
                    stateMachine.advanceAndApply(elapsedTime);
                  }
                  if (this.animator.stateMachines.length == 0) {
                    this.artboard.advance(elapsedTime);
                  }
                  var renderer = this.renderer;
                  renderer.clear();
                  renderer.save();
                  this.alignRenderer();
                  if (!this._hasZeroSize) {
                    this.artboard.draw(renderer);
                  }
                  renderer.restore();
                  renderer.flush();
                  this.animator.handleLooping();
                  this.animator.handleStateChanges();
                  this.animator.handleAdvancing(elapsedTime);
                  this.frameCount++;
                  var after = performance.now();
                  this.frameTimes.push(after);
                  this.durations.push(after - before);
                  while (this.frameTimes[0] <= after - 1e3) {
                    this.frameTimes.shift();
                    this.durations.shift();
                  }
                  if (this.animator.isPlaying) {
                    this.startRendering();
                  } else if (this.animator.isPaused) {
                    this.lastRenderTime = 0;
                  } else if (this.animator.isStopped) {
                    this.lastRenderTime = 0;
                  }
                };
                Rive2.prototype.alignRenderer = function() {
                  var _a = this, renderer = _a.renderer, runtime = _a.runtime, _layout = _a._layout, artboard = _a.artboard;
                  renderer.align(_layout.runtimeFit(runtime), _layout.runtimeAlignment(runtime), {
                    minX: _layout.minX,
                    minY: _layout.minY,
                    maxX: _layout.maxX,
                    maxY: _layout.maxY
                  }, artboard.bounds, this._devicePixelRatioUsed * _layout.layoutScaleFactor);
                };
                Object.defineProperty(Rive2.prototype, "fps", {
                  get: function() {
                    return this.durations.length;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Rive2.prototype, "frameTime", {
                  get: function() {
                    if (this.durations.length === 0) {
                      return 0;
                    }
                    return (this.durations.reduce(function(a, b) {
                      return a + b;
                    }, 0) / this.durations.length).toFixed(4);
                  },
                  enumerable: false,
                  configurable: true
                });
                Rive2.prototype.cleanup = function() {
                  var _a;
                  this.stopRendering();
                  this.cleanupInstances();
                  if (this._observed !== null) {
                    observers.remove(this._observed);
                  }
                  this.removeRiveListeners();
                  (_a = this.riveFile) === null || _a === void 0 ? void 0 : _a.cleanup();
                  this.riveFile = null;
                  this.file = null;
                  this.deleteRiveRenderer();
                  if (this._audioEventListener !== null) {
                    audioManager.remove(this._audioEventListener);
                    this._audioEventListener = null;
                  }
                };
                Rive2.prototype.deleteRiveRenderer = function() {
                  var _a;
                  (_a = this.renderer) === null || _a === void 0 ? void 0 : _a.delete();
                  this.renderer = null;
                };
                Rive2.prototype.cleanupInstances = function() {
                  if (this.eventCleanup !== null) {
                    this.eventCleanup();
                  }
                  this.stop();
                  if (this.artboard) {
                    this.artboard.delete();
                    this.artboard = null;
                  }
                };
                Rive2.prototype.retrieveTextRun = function(textRunName) {
                  var _a;
                  if (!textRunName) {
                    console.warn("No text run name provided");
                    return;
                  }
                  if (!this.artboard) {
                    console.warn("Tried to access text run, but the Artboard is null");
                    return;
                  }
                  var textRun = this.artboard.textRun(textRunName);
                  if (!textRun) {
                    console.warn("Could not access a text run with name '".concat(textRunName, "' in the '").concat((_a = this.artboard) === null || _a === void 0 ? void 0 : _a.name, "' Artboard. Note that you must rename a text run node in the Rive editor to make it queryable at runtime."));
                    return;
                  }
                  return textRun;
                };
                Rive2.prototype.getTextRunValue = function(textRunName) {
                  var textRun = this.retrieveTextRun(textRunName);
                  return textRun ? textRun.text : void 0;
                };
                Rive2.prototype.setTextRunValue = function(textRunName, textRunValue) {
                  var textRun = this.retrieveTextRun(textRunName);
                  if (textRun) {
                    textRun.text = textRunValue;
                  }
                };
                Rive2.prototype.play = function(animationNames, autoplay) {
                  var _this = this;
                  animationNames = mapToStringArray(animationNames);
                  if (!this.readyForPlaying) {
                    this.taskQueue.add({
                      action: function() {
                        return _this.play(animationNames, autoplay);
                      }
                    });
                    return;
                  }
                  this.animator.play(animationNames);
                  if (this.eventCleanup) {
                    this.eventCleanup();
                  }
                  this.setupRiveListeners();
                  this.startRendering();
                };
                Rive2.prototype.pause = function(animationNames) {
                  var _this = this;
                  animationNames = mapToStringArray(animationNames);
                  if (!this.readyForPlaying) {
                    this.taskQueue.add({
                      action: function() {
                        return _this.pause(animationNames);
                      }
                    });
                    return;
                  }
                  if (this.eventCleanup) {
                    this.eventCleanup();
                  }
                  this.animator.pause(animationNames);
                };
                Rive2.prototype.scrub = function(animationNames, value) {
                  var _this = this;
                  animationNames = mapToStringArray(animationNames);
                  if (!this.readyForPlaying) {
                    this.taskQueue.add({
                      action: function() {
                        return _this.scrub(animationNames, value);
                      }
                    });
                    return;
                  }
                  this.animator.scrub(animationNames, value || 0);
                  this.drawFrame();
                };
                Rive2.prototype.stop = function(animationNames) {
                  var _this = this;
                  animationNames = mapToStringArray(animationNames);
                  if (!this.readyForPlaying) {
                    this.taskQueue.add({
                      action: function() {
                        return _this.stop(animationNames);
                      }
                    });
                    return;
                  }
                  if (this.animator) {
                    this.animator.stop(animationNames);
                  }
                  if (this.eventCleanup) {
                    this.eventCleanup();
                  }
                };
                Rive2.prototype.reset = function(params) {
                  var _a;
                  var artBoardName = params === null || params === void 0 ? void 0 : params.artboard;
                  var animationNames = mapToStringArray(params === null || params === void 0 ? void 0 : params.animations);
                  var stateMachineNames = mapToStringArray(params === null || params === void 0 ? void 0 : params.stateMachines);
                  var autoplay = (_a = params === null || params === void 0 ? void 0 : params.autoplay) !== null && _a !== void 0 ? _a : false;
                  this.cleanupInstances();
                  this.initArtboard(artBoardName, animationNames, stateMachineNames, autoplay);
                  this.taskQueue.process();
                };
                Rive2.prototype.load = function(params) {
                  this.file = null;
                  this.stop();
                  this.init(params);
                };
                Object.defineProperty(Rive2.prototype, "layout", {
                  /**
                   * Returns the current layout. Note that layout should be treated as
                   * immutable. If you want to change the layout, create a new one use the
                   * layout setter
                   */
                  get: function() {
                    return this._layout;
                  },
                  // Sets a new layout
                  set: function(layout) {
                    this._layout = layout;
                    if (!layout.maxX || !layout.maxY) {
                      this.resizeToCanvas();
                    }
                    if (this.loaded && !this.animator.isPlaying) {
                      this.drawFrame();
                    }
                  },
                  enumerable: false,
                  configurable: true
                });
                Rive2.prototype.resizeToCanvas = function() {
                  this._layout = this.layout.copyWith({
                    minX: 0,
                    minY: 0,
                    maxX: this.canvas.width,
                    maxY: this.canvas.height
                  });
                };
                Rive2.prototype.resizeDrawingSurfaceToCanvas = function(customDevicePixelRatio) {
                  if (this.canvas instanceof HTMLCanvasElement && !!window) {
                    var _a = this.canvas.getBoundingClientRect(), width = _a.width, height = _a.height;
                    var dpr = customDevicePixelRatio || window.devicePixelRatio || 1;
                    this.devicePixelRatioUsed = dpr;
                    this.canvas.width = dpr * width;
                    this.canvas.height = dpr * height;
                    this.startRendering();
                    this.resizeToCanvas();
                    if (this.layout.fit === Fit.Layout) {
                      var scaleFactor = this._layout.layoutScaleFactor;
                      this.artboard.width = width / scaleFactor;
                      this.artboard.height = height / scaleFactor;
                    }
                  }
                };
                Object.defineProperty(Rive2.prototype, "source", {
                  // Returns the animation source, which may be undefined
                  get: function() {
                    return this.src;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Rive2.prototype, "activeArtboard", {
                  /**
                   * Returns the name of the active artboard
                   */
                  get: function() {
                    return this.artboard ? this.artboard.name : "";
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Rive2.prototype, "animationNames", {
                  // Returns a list of animation names on the chosen artboard
                  get: function() {
                    if (!this.loaded || !this.artboard) {
                      return [];
                    }
                    var animationNames = [];
                    for (var i = 0; i < this.artboard.animationCount(); i++) {
                      animationNames.push(this.artboard.animationByIndex(i).name);
                    }
                    return animationNames;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Rive2.prototype, "stateMachineNames", {
                  /**
                   * Returns a list of state machine names from the current artboard
                   */
                  get: function() {
                    if (!this.loaded || !this.artboard) {
                      return [];
                    }
                    var stateMachineNames = [];
                    for (var i = 0; i < this.artboard.stateMachineCount(); i++) {
                      stateMachineNames.push(this.artboard.stateMachineByIndex(i).name);
                    }
                    return stateMachineNames;
                  },
                  enumerable: false,
                  configurable: true
                });
                Rive2.prototype.stateMachineInputs = function(name) {
                  if (!this.loaded) {
                    return;
                  }
                  var stateMachine = this.animator.stateMachines.find(function(m) {
                    return m.name === name;
                  });
                  return stateMachine === null || stateMachine === void 0 ? void 0 : stateMachine.inputs;
                };
                Rive2.prototype.retrieveInputAtPath = function(name, path) {
                  if (!name) {
                    console.warn("No input name provided for path '".concat(path, "'"));
                    return;
                  }
                  if (!this.artboard) {
                    console.warn("Tried to access input: '".concat(name, "', at path: '").concat(path, "', but the Artboard is null"));
                    return;
                  }
                  var input = this.artboard.inputByPath(name, path);
                  if (!input) {
                    console.warn("Could not access an input with name: '".concat(name, "', at path:'").concat(path, "'"));
                    return;
                  }
                  return input;
                };
                Rive2.prototype.setBooleanStateAtPath = function(inputName, value, path) {
                  var input = this.retrieveInputAtPath(inputName, path);
                  if (!input)
                    return;
                  if (input.type === StateMachineInputType.Boolean) {
                    input.asBool().value = value;
                  } else {
                    console.warn("Input with name: '".concat(inputName, "', at path:'").concat(path, "' is not a boolean"));
                  }
                };
                Rive2.prototype.setNumberStateAtPath = function(inputName, value, path) {
                  var input = this.retrieveInputAtPath(inputName, path);
                  if (!input)
                    return;
                  if (input.type === StateMachineInputType.Number) {
                    input.asNumber().value = value;
                  } else {
                    console.warn("Input with name: '".concat(inputName, "', at path:'").concat(path, "' is not a number"));
                  }
                };
                Rive2.prototype.fireStateAtPath = function(inputName, path) {
                  var input = this.retrieveInputAtPath(inputName, path);
                  if (!input)
                    return;
                  if (input.type === StateMachineInputType.Trigger) {
                    input.asTrigger().fire();
                  } else {
                    console.warn("Input with name: '".concat(inputName, "', at path:'").concat(path, "' is not a trigger"));
                  }
                };
                Rive2.prototype.retrieveTextAtPath = function(name, path) {
                  if (!name) {
                    console.warn("No text name provided for path '".concat(path, "'"));
                    return;
                  }
                  if (!path) {
                    console.warn("No path provided for text '".concat(name, "'"));
                    return;
                  }
                  if (!this.artboard) {
                    console.warn("Tried to access text: '".concat(name, "', at path: '").concat(path, "', but the Artboard is null"));
                    return;
                  }
                  var text = this.artboard.textByPath(name, path);
                  if (!text) {
                    console.warn("Could not access text with name: '".concat(name, "', at path:'").concat(path, "'"));
                    return;
                  }
                  return text;
                };
                Rive2.prototype.getTextRunValueAtPath = function(textName, path) {
                  var run = this.retrieveTextAtPath(textName, path);
                  if (!run) {
                    console.warn("Could not get text with name: '".concat(textName, "', at path:'").concat(path, "'"));
                    return;
                  }
                  return run.text;
                };
                Rive2.prototype.setTextRunValueAtPath = function(textName, value, path) {
                  var run = this.retrieveTextAtPath(textName, path);
                  if (!run) {
                    console.warn("Could not set text with name: '".concat(textName, "', at path:'").concat(path, "'"));
                    return;
                  }
                  run.text = value;
                };
                Object.defineProperty(Rive2.prototype, "playingStateMachineNames", {
                  // Returns a list of playing machine names
                  get: function() {
                    if (!this.loaded) {
                      return [];
                    }
                    return this.animator.stateMachines.filter(function(m) {
                      return m.playing;
                    }).map(function(m) {
                      return m.name;
                    });
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Rive2.prototype, "playingAnimationNames", {
                  // Returns a list of playing animation names
                  get: function() {
                    if (!this.loaded) {
                      return [];
                    }
                    return this.animator.animations.filter(function(a) {
                      return a.playing;
                    }).map(function(a) {
                      return a.name;
                    });
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Rive2.prototype, "pausedAnimationNames", {
                  // Returns a list of paused animation names
                  get: function() {
                    if (!this.loaded) {
                      return [];
                    }
                    return this.animator.animations.filter(function(a) {
                      return !a.playing;
                    }).map(function(a) {
                      return a.name;
                    });
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Rive2.prototype, "pausedStateMachineNames", {
                  /**
                   *  Returns a list of paused machine names
                   * @returns a list of state machine names that are paused
                   */
                  get: function() {
                    if (!this.loaded) {
                      return [];
                    }
                    return this.animator.stateMachines.filter(function(m) {
                      return !m.playing;
                    }).map(function(m) {
                      return m.name;
                    });
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Rive2.prototype, "isPlaying", {
                  /**
                   * @returns true if any animation is playing
                   */
                  get: function() {
                    return this.animator.isPlaying;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Rive2.prototype, "isPaused", {
                  /**
                   * @returns true if all instanced animations are paused
                   */
                  get: function() {
                    return this.animator.isPaused;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Rive2.prototype, "isStopped", {
                  /**
                   * @returns true if no animations are playing or paused
                   */
                  get: function() {
                    return this.animator.isStopped;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Rive2.prototype, "bounds", {
                  /**
                   * @returns the bounds of the current artboard, or undefined if the artboard
                   * isn't loaded yet.
                   */
                  get: function() {
                    return this.artboard ? this.artboard.bounds : void 0;
                  },
                  enumerable: false,
                  configurable: true
                });
                Rive2.prototype.on = function(type, callback) {
                  this.eventManager.add({
                    type,
                    callback
                  });
                };
                Rive2.prototype.off = function(type, callback) {
                  this.eventManager.remove({
                    type,
                    callback
                  });
                };
                Rive2.prototype.unsubscribe = function(type, callback) {
                  console.warn("This function is deprecated: please use `off()` instead.");
                  this.off(type, callback);
                };
                Rive2.prototype.removeAllRiveEventListeners = function(type) {
                  this.eventManager.removeAll(type);
                };
                Rive2.prototype.unsubscribeAll = function(type) {
                  console.warn("This function is deprecated: please use `removeAllRiveEventListeners()` instead.");
                  this.removeAllRiveEventListeners(type);
                };
                Rive2.prototype.stopRendering = function() {
                  if (this.loaded && this.frameRequestId) {
                    if (this.runtime.cancelAnimationFrame) {
                      this.runtime.cancelAnimationFrame(this.frameRequestId);
                    } else {
                      cancelAnimationFrame(this.frameRequestId);
                    }
                    this.frameRequestId = null;
                  }
                };
                Rive2.prototype.startRendering = function() {
                  if (this.loaded && this.artboard && !this.frameRequestId) {
                    if (this.runtime.requestAnimationFrame) {
                      this.frameRequestId = this.runtime.requestAnimationFrame(this.draw.bind(this));
                    } else {
                      this.frameRequestId = requestAnimationFrame(this.draw.bind(this));
                    }
                  }
                };
                Rive2.prototype.enableFPSCounter = function(fpsCallback) {
                  this.runtime.enableFPSCounter(fpsCallback);
                };
                Rive2.prototype.disableFPSCounter = function() {
                  this.runtime.disableFPSCounter();
                };
                Object.defineProperty(Rive2.prototype, "contents", {
                  /**
                   * Returns the contents of a Rive file: the artboards, animations, and state machines
                   */
                  get: function() {
                    if (!this.loaded) {
                      return void 0;
                    }
                    var riveContents = {
                      artboards: []
                    };
                    for (var i = 0; i < this.file.artboardCount(); i++) {
                      var artboard = this.file.artboardByIndex(i);
                      var artboardContents = {
                        name: artboard.name,
                        animations: [],
                        stateMachines: []
                      };
                      for (var j = 0; j < artboard.animationCount(); j++) {
                        var animation = artboard.animationByIndex(j);
                        artboardContents.animations.push(animation.name);
                      }
                      for (var k = 0; k < artboard.stateMachineCount(); k++) {
                        var stateMachine = artboard.stateMachineByIndex(k);
                        var name_1 = stateMachine.name;
                        var instance = new this.runtime.StateMachineInstance(stateMachine, artboard);
                        var inputContents = [];
                        for (var l = 0; l < instance.inputCount(); l++) {
                          var input = instance.input(l);
                          inputContents.push({ name: input.name, type: input.type });
                        }
                        artboardContents.stateMachines.push({
                          name: name_1,
                          inputs: inputContents
                        });
                      }
                      riveContents.artboards.push(artboardContents);
                    }
                    return riveContents;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Rive2.prototype, "volume", {
                  /**
                   * Getter / Setter for the volume of the artboard
                   */
                  get: function() {
                    if (this.artboard && this.artboard.volume !== this._volume) {
                      this._volume = this.artboard.volume;
                    }
                    return this._volume;
                  },
                  set: function(value) {
                    this._volume = value;
                    if (this.artboard) {
                      this.artboard.volume = value * audioManager.systemVolume;
                    }
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Rive2.prototype, "artboardWidth", {
                  /**
                   * The width of the artboard.
                   *
                   * This will return 0 if the artboard is not loaded yet and a custom
                   * width has not been set.
                   *
                   * Do not set this value manually when using {@link resizeDrawingSurfaceToCanvas}
                   * with a {@link Layout.fit} of {@link Fit.Layout}, as the artboard width is
                   * automatically set.
                   */
                  get: function() {
                    var _a;
                    if (this.artboard) {
                      return this.artboard.width;
                    }
                    return (_a = this._artboardWidth) !== null && _a !== void 0 ? _a : 0;
                  },
                  set: function(value) {
                    this._artboardWidth = value;
                    if (this.artboard) {
                      this.artboard.width = value;
                    }
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Rive2.prototype, "artboardHeight", {
                  /**
                   * The height of the artboard.
                   *
                   * This will return 0 if the artboard is not loaded yet and a custom
                   * height has not been set.
                   *
                   * Do not set this value manually when using {@link resizeDrawingSurfaceToCanvas}
                   * with a {@link Layout.fit} of {@link Fit.Layout}, as the artboard height is
                   * automatically set.
                   */
                  get: function() {
                    var _a;
                    if (this.artboard) {
                      return this.artboard.height;
                    }
                    return (_a = this._artboardHeight) !== null && _a !== void 0 ? _a : 0;
                  },
                  set: function(value) {
                    this._artboardHeight = value;
                    if (this.artboard) {
                      this.artboard.height = value;
                    }
                  },
                  enumerable: false,
                  configurable: true
                });
                Rive2.prototype.resetArtboardSize = function() {
                  if (this.artboard) {
                    this.artboard.resetArtboardSize();
                    this._artboardWidth = this.artboard.width;
                    this._artboardHeight = this.artboard.height;
                  } else {
                    this._artboardWidth = void 0;
                    this._artboardHeight = void 0;
                  }
                };
                Object.defineProperty(Rive2.prototype, "devicePixelRatioUsed", {
                  /**
                   * The device pixel ratio used in rendering and canvas/artboard resizing.
                   *
                   * This value will be overidden by the device pixel ratio used in
                   * {@link resizeDrawingSurfaceToCanvas}. If you use that method, do not set this value.
                   */
                  get: function() {
                    return this._devicePixelRatioUsed;
                  },
                  set: function(value) {
                    this._devicePixelRatioUsed = value;
                  },
                  enumerable: false,
                  configurable: true
                });
                Rive2.missingErrorMessage = "Rive source file or data buffer required";
                return Rive2;
              }()
            );
            var loadRiveFile = function(src) {
              return __awaiter(void 0, void 0, void 0, function() {
                var req, res, buffer;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                    case 0:
                      req = new Request(src);
                      return [4, fetch(req)];
                    case 1:
                      res = _a.sent();
                      return [4, res.arrayBuffer()];
                    case 2:
                      buffer = _a.sent();
                      return [2, buffer];
                  }
                });
              });
            };
            var mapToStringArray = function(obj) {
              if (typeof obj === "string") {
                return [obj];
              } else if (obj instanceof Array) {
                return obj;
              }
              return [];
            };
            var Testing = {
              EventManager,
              TaskQueueManager
            };
            var decodeAudio = function(bytes) {
              return new Promise(function(resolve) {
                return RuntimeLoader.getInstance(function(rive) {
                  rive.decodeAudio(bytes, resolve);
                });
              });
            };
            var decodeImage = function(bytes) {
              return new Promise(function(resolve) {
                return RuntimeLoader.getInstance(function(rive) {
                  rive.decodeImage(bytes, resolve);
                });
              });
            };
            var decodeFont = function(bytes) {
              return new Promise(function(resolve) {
                return RuntimeLoader.getInstance(function(rive) {
                  rive.decodeFont(bytes, resolve);
                });
              });
            };
          })();
          return __webpack_exports__;
        })()
      );
    });
  }
});
export default require_rive();
//# sourceMappingURL=@nolebase_vitepress-plugin-enhanced-readabilities___@nolebase_ui___@rive-app_canvas.js.map