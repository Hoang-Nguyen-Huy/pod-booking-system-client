window.NREUM || (NREUM = {})
NREUM.init = {
  distributed_tracing: { enabled: true },
  privacy: { cookies_enabled: true },
  ajax: { deny_list: ['bam.nr-data.net'] }
}

NREUM.loader_config = {
  accountID: '5142384',
  trustKey: '5142384',
  agentID: '601509570',
  licenseKey: 'NRJS-5bb9a41effe6e72f849',
  applicationID: '601509570'
}
NREUM.info = {
  beacon: 'bam.nr-data.net',
  errorBeacon: 'bam.nr-data.net',
  licenseKey: 'NRJS-5bb9a41effe6e72f849',
  applicationID: '601509570',
  sa: 1
} /*! For license information please see nr-loader-spa-1.270.1.min.js.LICENSE.txt */
;(() => {
  var e,
    t,
    r = {
      8122: (e, t, r) => {
        'use strict'
        r.d(t, { a: () => i })
        var n = r(944)
        function i(e, t) {
          try {
            if (!e || 'object' != typeof e) return (0, n.R)(3)
            if (!t || 'object' != typeof t) return (0, n.R)(4)
            const r = Object.create(Object.getPrototypeOf(t), Object.getOwnPropertyDescriptors(t)),
              o = 0 === Object.keys(r).length ? e : r
            for (let a in o)
              if (void 0 !== e[a])
                try {
                  if (null === e[a]) {
                    r[a] = null
                    continue
                  }
                  Array.isArray(e[a]) && Array.isArray(t[a])
                    ? (r[a] = Array.from(new Set([...e[a], ...t[a]])))
                    : 'object' == typeof e[a] && 'object' == typeof t[a]
                      ? (r[a] = i(e[a], t[a]))
                      : (r[a] = e[a])
                } catch (e) {
                  ;(0, n.R)(1, e)
                }
            return r
          } catch (e) {
            ;(0, n.R)(2, e)
          }
        }
      },
      2555: (e, t, r) => {
        'use strict'
        r.d(t, { Vp: () => c, fn: () => s, x1: () => u })
        var n = r(384),
          i = r(8122)
        const o = {
            beacon: n.NT.beacon,
            errorBeacon: n.NT.errorBeacon,
            licenseKey: void 0,
            applicationID: void 0,
            sa: void 0,
            queueTime: void 0,
            applicationTime: void 0,
            ttGuid: void 0,
            user: void 0,
            account: void 0,
            product: void 0,
            extra: void 0,
            jsAttributes: {},
            userAttributes: void 0,
            atts: void 0,
            transactionName: void 0,
            tNamePlain: void 0
          },
          a = {}
        function s(e) {
          try {
            const t = c(e)
            return !!t.licenseKey && !!t.errorBeacon && !!t.applicationID
          } catch (e) {
            return !1
          }
        }
        function c(e) {
          if (!e) throw new Error('All info objects require an agent identifier!')
          if (!a[e]) throw new Error('Info for '.concat(e, ' was never set'))
          return a[e]
        }
        function u(e, t) {
          if (!e) throw new Error('All info objects require an agent identifier!')
          a[e] = (0, i.a)(t, o)
          const r = (0, n.nY)(e)
          r && (r.info = a[e])
        }
      },
      9417: (e, t, r) => {
        'use strict'
        r.d(t, { D0: () => h, gD: () => g, xN: () => p })
        var n = r(993)
        const i = (e) => {
          if (!e || 'string' != typeof e) return !1
          try {
            document.createDocumentFragment().querySelector(e)
          } catch {
            return !1
          }
          return !0
        }
        var o = r(2614),
          a = r(944),
          s = r(384),
          c = r(8122)
        const u = '[data-nr-mask]',
          d = () => {
            const e = {
              mask_selector: '*',
              block_selector: '[data-nr-block]',
              mask_input_options: {
                color: !1,
                date: !1,
                'datetime-local': !1,
                email: !1,
                month: !1,
                number: !1,
                range: !1,
                search: !1,
                tel: !1,
                text: !1,
                time: !1,
                url: !1,
                week: !1,
                textarea: !1,
                select: !1,
                password: !0
              }
            }
            return {
              ajax: { deny_list: void 0, block_internal: !0, enabled: !0, harvestTimeSeconds: 10, autoStart: !0 },
              distributed_tracing: {
                enabled: void 0,
                exclude_newrelic_header: void 0,
                cors_use_newrelic_header: void 0,
                cors_use_tracecontext_headers: void 0,
                allowed_origins: void 0
              },
              feature_flags: [],
              generic_events: { enabled: !0, harvestTimeSeconds: 30, autoStart: !0 },
              harvest: { tooManyRequestsDelay: 60 },
              jserrors: { enabled: !0, harvestTimeSeconds: 10, autoStart: !0 },
              logging: { enabled: !0, harvestTimeSeconds: 10, autoStart: !0, level: n.p_.INFO },
              metrics: { enabled: !0, autoStart: !0 },
              obfuscate: void 0,
              page_action: { enabled: !0 },
              user_actions: { enabled: !0 },
              page_view_event: { enabled: !0, autoStart: !0 },
              page_view_timing: { enabled: !0, harvestTimeSeconds: 30, autoStart: !0 },
              privacy: { cookies_enabled: !0 },
              proxy: { assets: void 0, beacon: void 0 },
              session: { expiresMs: o.wk, inactiveMs: o.BB },
              session_replay: {
                autoStart: !0,
                enabled: !1,
                harvestTimeSeconds: 60,
                preload: !1,
                sampling_rate: 10,
                error_sampling_rate: 100,
                collect_fonts: !1,
                inline_images: !1,
                fix_stylesheets: !0,
                mask_all_inputs: !0,
                get mask_text_selector() {
                  return e.mask_selector
                },
                set mask_text_selector(t) {
                  i(t)
                    ? (e.mask_selector = ''.concat(t, ',').concat(u))
                    : '' === t || null === t
                      ? (e.mask_selector = u)
                      : (0, a.R)(5, t)
                },
                get block_class() {
                  return 'nr-block'
                },
                get ignore_class() {
                  return 'nr-ignore'
                },
                get mask_text_class() {
                  return 'nr-mask'
                },
                get block_selector() {
                  return e.block_selector
                },
                set block_selector(t) {
                  i(t) ? (e.block_selector += ','.concat(t)) : '' !== t && (0, a.R)(6, t)
                },
                get mask_input_options() {
                  return e.mask_input_options
                },
                set mask_input_options(t) {
                  t && 'object' == typeof t ? (e.mask_input_options = { ...t, password: !0 }) : (0, a.R)(7, t)
                }
              },
              session_trace: { enabled: !0, harvestTimeSeconds: 10, autoStart: !0 },
              soft_navigations: { enabled: !0, harvestTimeSeconds: 10, autoStart: !0 },
              spa: { enabled: !0, harvestTimeSeconds: 10, autoStart: !0 },
              ssl: void 0
            }
          },
          l = {},
          f = 'All configuration objects require an agent identifier!'
        function h(e) {
          if (!e) throw new Error(f)
          if (!l[e]) throw new Error('Configuration for '.concat(e, ' was never set'))
          return l[e]
        }
        function p(e, t) {
          if (!e) throw new Error(f)
          l[e] = (0, c.a)(t, d())
          const r = (0, s.nY)(e)
          r && (r.init = l[e])
        }
        function g(e, t) {
          if (!e) throw new Error(f)
          var r = h(e)
          if (r) {
            for (var n = t.split('.'), i = 0; i < n.length - 1; i++) if ('object' != typeof (r = r[n[i]])) return
            r = r[n[n.length - 1]]
          }
          return r
        }
      },
      5603: (e, t, r) => {
        'use strict'
        r.d(t, { a: () => c, o: () => s })
        var n = r(384),
          i = r(8122)
        const o = {
            accountID: void 0,
            trustKey: void 0,
            agentID: void 0,
            licenseKey: void 0,
            applicationID: void 0,
            xpid: void 0
          },
          a = {}
        function s(e) {
          if (!e) throw new Error('All loader-config objects require an agent identifier!')
          if (!a[e]) throw new Error('LoaderConfig for '.concat(e, ' was never set'))
          return a[e]
        }
        function c(e, t) {
          if (!e) throw new Error('All loader-config objects require an agent identifier!')
          a[e] = (0, i.a)(t, o)
          const r = (0, n.nY)(e)
          r && (r.loader_config = a[e])
        }
      },
      3371: (e, t, r) => {
        'use strict'
        r.d(t, { V: () => f, f: () => l })
        var n = r(8122),
          i = r(384),
          o = r(6154),
          a = r(9324)
        let s = 0
        const c = { buildEnv: a.F3, distMethod: a.Xs, version: a.xv, originTime: o.WN },
          u = {
            customTransaction: void 0,
            disabled: !1,
            isolatedBacklog: !1,
            loaderType: void 0,
            maxBytes: 3e4,
            onerror: void 0,
            origin: '' + o.gm.location,
            ptid: void 0,
            releaseIds: {},
            appMetadata: {},
            session: void 0,
            denyList: void 0,
            timeKeeper: void 0,
            obfuscator: void 0
          },
          d = {}
        function l(e) {
          if (!e) throw new Error('All runtime objects require an agent identifier!')
          if (!d[e]) throw new Error('Runtime for '.concat(e, ' was never set'))
          return d[e]
        }
        function f(e, t) {
          if (!e) throw new Error('All runtime objects require an agent identifier!')
          ;(d[e] = { ...(0, n.a)(t, u), ...c }),
            Object.hasOwnProperty.call(d[e], 'harvestCount') ||
              Object.defineProperty(d[e], 'harvestCount', { get: () => ++s })
          const r = (0, i.nY)(e)
          r && (r.runtime = d[e])
        }
      },
      9324: (e, t, r) => {
        'use strict'
        r.d(t, { F3: () => i, Xs: () => o, Yq: () => a, xv: () => n })
        const n = '1.270.1',
          i = 'PROD',
          o = 'CDN',
          a = '2.0.0-alpha.12'
      },
      6154: (e, t, r) => {
        'use strict'
        r.d(t, {
          A4: () => s,
          OF: () => d,
          RI: () => i,
          WN: () => h,
          bv: () => o,
          gm: () => a,
          lR: () => f,
          m: () => u,
          mw: () => c,
          sb: () => l
        })
        var n = r(1863)
        const i = 'undefined' != typeof window && !!window.document,
          o =
            'undefined' != typeof WorkerGlobalScope &&
            (('undefined' != typeof self &&
              self instanceof WorkerGlobalScope &&
              self.navigator instanceof WorkerNavigator) ||
              ('undefined' != typeof globalThis &&
                globalThis instanceof WorkerGlobalScope &&
                globalThis.navigator instanceof WorkerNavigator)),
          a = i
            ? window
            : 'undefined' != typeof WorkerGlobalScope &&
              (('undefined' != typeof self && self instanceof WorkerGlobalScope && self) ||
                ('undefined' != typeof globalThis && globalThis instanceof WorkerGlobalScope && globalThis)),
          s = 'complete' === a?.document?.readyState,
          c = Boolean('hidden' === a?.document?.visibilityState),
          u = '' + a?.location,
          d = /iPad|iPhone|iPod/.test(a.navigator?.userAgent),
          l = d && 'undefined' == typeof SharedWorker,
          f = (() => {
            const e = a.navigator?.userAgent?.match(/Firefox[/\s](\d+\.\d+)/)
            return Array.isArray(e) && e.length >= 2 ? +e[1] : 0
          })(),
          h = Date.now() - (0, n.t)()
      },
      7295: (e, t, r) => {
        'use strict'
        r.d(t, { Xv: () => a, gX: () => i, iW: () => o })
        var n = []
        function i(e) {
          if (!e || o(e)) return !1
          if (0 === n.length) return !0
          for (var t = 0; t < n.length; t++) {
            var r = n[t]
            if ('*' === r.hostname) return !1
            if (s(r.hostname, e.hostname) && c(r.pathname, e.pathname)) return !1
          }
          return !0
        }
        function o(e) {
          return void 0 === e.hostname
        }
        function a(e) {
          if (((n = []), e && e.length))
            for (var t = 0; t < e.length; t++) {
              let r = e[t]
              if (!r) continue
              0 === r.indexOf('http://') ? (r = r.substring(7)) : 0 === r.indexOf('https://') && (r = r.substring(8))
              const i = r.indexOf('/')
              let o, a
              i > 0 ? ((o = r.substring(0, i)), (a = r.substring(i))) : ((o = r), (a = ''))
              let [s] = o.split(':')
              n.push({ hostname: s, pathname: a })
            }
        }
        function s(e, t) {
          return !(e.length > t.length) && t.indexOf(e) === t.length - e.length
        }
        function c(e, t) {
          return (
            0 === e.indexOf('/') && (e = e.substring(1)),
            0 === t.indexOf('/') && (t = t.substring(1)),
            '' === e || e === t
          )
        }
      },
      1687: (e, t, r) => {
        'use strict'
        r.d(t, { Ak: () => c, Ze: () => l, x3: () => u })
        var n = r(7836),
          i = r(3606),
          o = r(860),
          a = r(2646)
        const s = {}
        function c(e, t) {
          const r = { staged: !1, priority: o.P[t] || 0 }
          d(e), s[e].get(t) || s[e].set(t, r)
        }
        function u(e, t) {
          e && s[e] && (s[e].get(t) && s[e].delete(t), h(e, t, !1), s[e].size && f(e))
        }
        function d(e) {
          if (!e) throw new Error('agentIdentifier required')
          s[e] || (s[e] = new Map())
        }
        function l(e = '', t = 'feature', r = !1) {
          if ((d(e), !e || !s[e].get(t) || r)) return h(e, t)
          ;(s[e].get(t).staged = !0), f(e)
        }
        function f(e) {
          const t = Array.from(s[e])
          t.every(([e, t]) => t.staged) &&
            (t.sort((e, t) => e[1].priority - t[1].priority),
            t.forEach(([t]) => {
              s[e].delete(t), h(e, t)
            }))
        }
        function h(e, t, r = !0) {
          const o = e ? n.ee.get(e) : n.ee,
            s = i.i.handlers
          if (!o.aborted && o.backlog && s) {
            if (r) {
              const e = o.backlog[t],
                r = s[t]
              if (r) {
                for (let t = 0; e && t < e.length; ++t) p(e[t], r)
                Object.entries(r).forEach(([e, t]) => {
                  Object.values(t || {}).forEach((t) => {
                    t[0]?.on && t[0]?.context() instanceof a.y && t[0].on(e, t[1])
                  })
                })
              }
            }
            o.isolatedBacklog || delete s[t], (o.backlog[t] = null), o.emit('drain-' + t, [])
          }
        }
        function p(e, t) {
          var r = e[1]
          Object.values(t[r] || {}).forEach((t) => {
            var r = e[0]
            if (t[0] === r) {
              var n = t[1],
                i = e[3],
                o = e[2]
              n.apply(i, o)
            }
          })
        }
      },
      7836: (e, t, r) => {
        'use strict'
        r.d(t, { P: () => c, ee: () => u })
        var n = r(384),
          i = r(8990),
          o = r(3371),
          a = r(2646),
          s = r(5607)
        const c = 'nr@context:'.concat(s.W),
          u = (function e(t, r) {
            var n = {},
              s = {},
              d = {},
              l = !1
            try {
              l = 16 === r.length && (0, o.f)(r).isolatedBacklog
            } catch (e) {}
            var f = {
              on: p,
              addEventListener: p,
              removeEventListener: function (e, t) {
                var r = n[e]
                if (!r) return
                for (var i = 0; i < r.length; i++) r[i] === t && r.splice(i, 1)
              },
              emit: function (e, r, n, i, o) {
                !1 !== o && (o = !0)
                if (u.aborted && !i) return
                t && o && t.emit(e, r, n)
                for (var a = h(n), c = g(e), d = c.length, l = 0; l < d; l++) c[l].apply(a, r)
                var p = v()[s[e]]
                p && p.push([f, e, r, a])
                return a
              },
              get: m,
              listeners: g,
              context: h,
              buffer: function (e, t) {
                const r = v()
                if (((t = t || 'feature'), f.aborted)) return
                Object.entries(e || {}).forEach(([e, n]) => {
                  ;(s[n] = t), t in r || (r[t] = [])
                })
              },
              abort: function () {
                ;(f._aborted = !0),
                  Object.keys(f.backlog).forEach((e) => {
                    delete f.backlog[e]
                  })
              },
              isBuffering: function (e) {
                return !!v()[s[e]]
              },
              debugId: r,
              backlog: l ? {} : t && 'object' == typeof t.backlog ? t.backlog : {},
              isolatedBacklog: l
            }
            return (
              Object.defineProperty(f, 'aborted', {
                get: () => {
                  let e = f._aborted || !1
                  return e || (t && (e = t.aborted), e)
                }
              }),
              f
            )
            function h(e) {
              return e && e instanceof a.y ? e : e ? (0, i.I)(e, c, () => new a.y(c)) : new a.y(c)
            }
            function p(e, t) {
              n[e] = g(e).concat(t)
            }
            function g(e) {
              return n[e] || []
            }
            function m(t) {
              return (d[t] = d[t] || e(f, t))
            }
            function v() {
              return f.backlog
            }
          })(void 0, 'globalEE'),
          d = (0, n.Zm)()
        d.ee || (d.ee = u)
      },
      2646: (e, t, r) => {
        'use strict'
        r.d(t, { y: () => n })
        class n {
          constructor(e) {
            this.contextId = e
          }
        }
      },
      9908: (e, t, r) => {
        'use strict'
        r.d(t, { d: () => n, p: () => i })
        var n = r(7836).ee.get('handle')
        function i(e, t, r, i, o) {
          o ? (o.buffer([e], i), o.emit(e, t, r)) : (n.buffer([e], i), n.emit(e, t, r))
        }
      },
      3606: (e, t, r) => {
        'use strict'
        r.d(t, { i: () => o })
        var n = r(9908)
        o.on = a
        var i = (o.handlers = {})
        function o(e, t, r, o) {
          a(o || n.d, i, e, t, r)
        }
        function a(e, t, r, i, o) {
          o || (o = 'feature'), e || (e = n.d)
          var a = (t[o] = t[o] || {})
          ;(a[r] = a[r] || []).push([e, i])
        }
      },
      3878: (e, t, r) => {
        'use strict'
        function n(e, t) {
          return { capture: e, passive: !1, signal: t }
        }
        function i(e, t, r = !1, i) {
          window.addEventListener(e, t, n(r, i))
        }
        function o(e, t, r = !1, i) {
          document.addEventListener(e, t, n(r, i))
        }
        r.d(t, { DD: () => o, jT: () => n, sp: () => i })
      },
      5607: (e, t, r) => {
        'use strict'
        r.d(t, { W: () => n })
        const n = (0, r(9566).bz)()
      },
      9566: (e, t, r) => {
        'use strict'
        r.d(t, { LA: () => s, ZF: () => c, bz: () => a, el: () => u })
        var n = r(6154)
        const i = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
        function o(e, t) {
          return e ? 15 & e[t] : (16 * Math.random()) | 0
        }
        function a() {
          const e = n.gm?.crypto || n.gm?.msCrypto
          let t,
            r = 0
          return (
            e && e.getRandomValues && (t = e.getRandomValues(new Uint8Array(30))),
            i
              .split('')
              .map((e) => ('x' === e ? o(t, r++).toString(16) : 'y' === e ? ((3 & o()) | 8).toString(16) : e))
              .join('')
          )
        }
        function s(e) {
          const t = n.gm?.crypto || n.gm?.msCrypto
          let r,
            i = 0
          t && t.getRandomValues && (r = t.getRandomValues(new Uint8Array(e)))
          const a = []
          for (var s = 0; s < e; s++) a.push(o(r, i++).toString(16))
          return a.join('')
        }
        function c() {
          return s(16)
        }
        function u() {
          return s(32)
        }
      },
      2614: (e, t, r) => {
        'use strict'
        r.d(t, { BB: () => a, H3: () => n, g: () => u, iL: () => c, tS: () => s, uh: () => i, wk: () => o })
        const n = 'NRBA',
          i = 'SESSION',
          o = 144e5,
          a = 18e5,
          s = {
            STARTED: 'session-started',
            PAUSE: 'session-pause',
            RESET: 'session-reset',
            RESUME: 'session-resume',
            UPDATE: 'session-update'
          },
          c = { SAME_TAB: 'same-tab', CROSS_TAB: 'cross-tab' },
          u = { OFF: 0, FULL: 1, ERROR: 2 }
      },
      1863: (e, t, r) => {
        'use strict'
        function n() {
          return Math.floor(performance.now())
        }
        r.d(t, { t: () => n })
      },
      7485: (e, t, r) => {
        'use strict'
        r.d(t, { D: () => i })
        var n = r(6154)
        function i(e) {
          if (0 === (e || '').indexOf('data:')) return { protocol: 'data' }
          try {
            const t = new URL(e, location.href),
              r = {
                port: t.port,
                hostname: t.hostname,
                pathname: t.pathname,
                search: t.search,
                protocol: t.protocol.slice(0, t.protocol.indexOf(':')),
                sameOrigin: t.protocol === n.gm?.location?.protocol && t.host === n.gm?.location?.host
              }
            return (
              (r.port && '' !== r.port) ||
                ('http:' === t.protocol && (r.port = '80'), 'https:' === t.protocol && (r.port = '443')),
              r.pathname && '' !== r.pathname
                ? r.pathname.startsWith('/') || (r.pathname = '/'.concat(r.pathname))
                : (r.pathname = '/'),
              r
            )
          } catch (e) {
            return {}
          }
        }
      },
      944: (e, t, r) => {
        'use strict'
        function n(e, t) {
          'function' == typeof console.debug &&
            console.debug(
              'New Relic Warning: https://github.com/newrelic/newrelic-browser-agent/blob/main/docs/warning-codes.md#'.concat(
                e
              ),
              t
            )
        }
        r.d(t, { R: () => n })
      },
      5284: (e, t, r) => {
        'use strict'
        r.d(t, { t: () => c, B: () => s })
        var n = r(7836),
          i = r(6154)
        const o = 'newrelic'
        const a = new Set(),
          s = {}
        function c(e, t) {
          const r = n.ee.get(t)
          ;(s[t] ??= {}),
            e &&
              'object' == typeof e &&
              (a.has(t) ||
                (r.emit('rumresp', [e]),
                (s[t] = e),
                a.add(t),
                (function (e = {}) {
                  try {
                    i.gm.dispatchEvent(new CustomEvent(o, { detail: e }))
                  } catch (e) {}
                })({ loaded: !0 })))
        }
      },
      8990: (e, t, r) => {
        'use strict'
        r.d(t, { I: () => i })
        var n = Object.prototype.hasOwnProperty
        function i(e, t, r) {
          if (n.call(e, t)) return e[t]
          var i = r()
          if (Object.defineProperty && Object.keys)
            try {
              return Object.defineProperty(e, t, { value: i, writable: !0, enumerable: !1 }), i
            } catch (e) {}
          return (e[t] = i), i
        }
      },
      6389: (e, t, r) => {
        'use strict'
        function n(e, t = 500, r = {}) {
          const n = r?.leading || !1
          let i
          return (...r) => {
            n &&
              void 0 === i &&
              (e.apply(this, r),
              (i = setTimeout(() => {
                i = clearTimeout(i)
              }, t))),
              n ||
                (clearTimeout(i),
                (i = setTimeout(() => {
                  e.apply(this, r)
                }, t)))
          }
        }
        function i(e) {
          let t = !1
          return (...r) => {
            t || ((t = !0), e.apply(this, r))
          }
        }
        r.d(t, { J: () => i, s: () => n })
      },
      3304: (e, t, r) => {
        'use strict'
        r.d(t, { A: () => o })
        var n = r(7836)
        const i = () => {
          const e = new WeakSet()
          return (t, r) => {
            if ('object' == typeof r && null !== r) {
              if (e.has(r)) return
              e.add(r)
            }
            return r
          }
        }
        function o(e) {
          try {
            return JSON.stringify(e, i()) ?? ''
          } catch (e) {
            try {
              n.ee.emit('internal-error', [e])
            } catch (e) {}
            return ''
          }
        }
      },
      5289: (e, t, r) => {
        'use strict'
        r.d(t, { GG: () => o, sB: () => a })
        var n = r(3878)
        function i() {
          return 'undefined' == typeof document || 'complete' === document.readyState
        }
        function o(e, t) {
          if (i()) return e()
          ;(0, n.sp)('load', e, t)
        }
        function a(e) {
          if (i()) return e()
          ;(0, n.DD)('DOMContentLoaded', e)
        }
      },
      384: (e, t, r) => {
        'use strict'
        r.d(t, { NT: () => o, US: () => d, Zm: () => a, bQ: () => c, dV: () => s, nY: () => u, pV: () => l })
        var n = r(6154),
          i = r(1863)
        const o = { beacon: 'bam.nr-data.net', errorBeacon: 'bam.nr-data.net' }
        function a() {
          return n.gm.NREUM || (n.gm.NREUM = {}), void 0 === n.gm.newrelic && (n.gm.newrelic = n.gm.NREUM), n.gm.NREUM
        }
        function s() {
          let e = a()
          return (
            e.o ||
              (e.o = {
                ST: n.gm.setTimeout,
                SI: n.gm.setImmediate,
                CT: n.gm.clearTimeout,
                XHR: n.gm.XMLHttpRequest,
                REQ: n.gm.Request,
                EV: n.gm.Event,
                PR: n.gm.Promise,
                MO: n.gm.MutationObserver,
                FETCH: n.gm.fetch,
                WS: n.gm.WebSocket
              }),
            e
          )
        }
        function c(e, t) {
          let r = a()
          ;(r.initializedAgents ??= {}),
            (t.initializedAt = { ms: (0, i.t)(), date: new Date() }),
            (r.initializedAgents[e] = t)
        }
        function u(e) {
          let t = a()
          return t.initializedAgents?.[e]
        }
        function d(e, t) {
          a()[e] = t
        }
        function l() {
          return (
            (function () {
              let e = a()
              const t = e.info || {}
              e.info = { beacon: o.beacon, errorBeacon: o.errorBeacon, ...t }
            })(),
            (function () {
              let e = a()
              const t = e.init || {}
              e.init = { ...t }
            })(),
            s(),
            (function () {
              let e = a()
              const t = e.loader_config || {}
              e.loader_config = { ...t }
            })(),
            a()
          )
        }
      },
      2843: (e, t, r) => {
        'use strict'
        r.d(t, { u: () => i })
        var n = r(3878)
        function i(e, t = !1, r, i) {
          ;(0, n.DD)(
            'visibilitychange',
            function () {
              if (t) return void ('hidden' === document.visibilityState && e())
              e(document.visibilityState)
            },
            r,
            i
          )
        }
      },
      8139: (e, t, r) => {
        'use strict'
        r.d(t, { u: () => f })
        var n = r(7836),
          i = r(3434),
          o = r(8990),
          a = r(6154)
        const s = {},
          c = a.gm.XMLHttpRequest,
          u = 'addEventListener',
          d = 'removeEventListener',
          l = 'nr@wrapped:'.concat(n.P)
        function f(e) {
          var t = (function (e) {
            return (e || n.ee).get('events')
          })(e)
          if (s[t.debugId]++) return t
          s[t.debugId] = 1
          var r = (0, i.YM)(t, !0)
          function f(e) {
            r.inPlace(e, [u, d], '-', p)
          }
          function p(e, t) {
            return e[1]
          }
          return (
            'getPrototypeOf' in Object && (a.RI && h(document, f), h(a.gm, f), h(c.prototype, f)),
            t.on(u + '-start', function (e, t) {
              var n = e[1]
              if (null !== n && ('function' == typeof n || 'object' == typeof n)) {
                var i = (0, o.I)(n, l, function () {
                  var e = {
                    object: function () {
                      if ('function' != typeof n.handleEvent) return
                      return n.handleEvent.apply(n, arguments)
                    },
                    function: n
                  }[typeof n]
                  return e ? r(e, 'fn-', null, e.name || 'anonymous') : n
                })
                this.wrapped = e[1] = i
              }
            }),
            t.on(d + '-start', function (e) {
              e[1] = this.wrapped || e[1]
            }),
            t
          )
        }
        function h(e, t, ...r) {
          let n = e
          for (; 'object' == typeof n && !Object.prototype.hasOwnProperty.call(n, u); ) n = Object.getPrototypeOf(n)
          n && t(n, ...r)
        }
      },
      3434: (e, t, r) => {
        'use strict'
        r.d(t, { Jt: () => o, YM: () => c })
        var n = r(7836),
          i = r(5607)
        const o = 'nr@original:'.concat(i.W)
        var a = Object.prototype.hasOwnProperty,
          s = !1
        function c(e, t) {
          return (
            e || (e = n.ee),
            (r.inPlace = function (e, t, n, i, o) {
              n || (n = '')
              const a = '-' === n.charAt(0)
              for (let s = 0; s < t.length; s++) {
                const c = t[s],
                  u = e[c]
                d(u) || (e[c] = r(u, a ? c + n : n, i, c, o))
              }
            }),
            (r.flag = o),
            r
          )
          function r(t, r, n, s, c) {
            return d(t)
              ? t
              : (r || (r = ''),
                (nrWrapper[o] = t),
                (function (e, t, r) {
                  if (Object.defineProperty && Object.keys)
                    try {
                      return (
                        Object.keys(e).forEach(function (r) {
                          Object.defineProperty(t, r, {
                            get: function () {
                              return e[r]
                            },
                            set: function (t) {
                              return (e[r] = t), t
                            }
                          })
                        }),
                        t
                      )
                    } catch (e) {
                      u([e], r)
                    }
                  for (var n in e) a.call(e, n) && (t[n] = e[n])
                })(t, nrWrapper, e),
                nrWrapper)
            function nrWrapper() {
              var o, a, d, l
              try {
                ;(a = this), (o = [...arguments]), (d = 'function' == typeof n ? n(o, a) : n || {})
              } catch (t) {
                u([t, '', [o, a, s], d], e)
              }
              i(r + 'start', [o, a, s], d, c)
              try {
                return (l = t.apply(a, o))
              } catch (e) {
                throw (i(r + 'err', [o, a, e], d, c), e)
              } finally {
                i(r + 'end', [o, a, l], d, c)
              }
            }
          }
          function i(r, n, i, o) {
            if (!s || t) {
              var a = s
              s = !0
              try {
                e.emit(r, n, i, t, o)
              } catch (t) {
                u([t, r, n, i], e)
              }
              s = a
            }
          }
        }
        function u(e, t) {
          t || (t = n.ee)
          try {
            t.emit('internal-error', e)
          } catch (e) {}
        }
        function d(e) {
          return !(e && 'function' == typeof e && e.apply && !e[o])
        }
      },
      9300: (e, t, r) => {
        'use strict'
        r.d(t, { T: () => n })
        const n = r(860).K.ajax
      },
      3333: (e, t, r) => {
        'use strict'
        r.d(t, { TZ: () => n, Zp: () => i, mq: () => s, nf: () => a, qN: () => o })
        const n = r(860).K.genericEvents,
          i = ['auxclick', 'click', 'copy', 'keydown', 'paste', 'scrollend'],
          o = ['focus', 'blur'],
          a = 4,
          s = 1e3
      },
      6774: (e, t, r) => {
        'use strict'
        r.d(t, { T: () => n })
        const n = r(860).K.jserrors
      },
      993: (e, t, r) => {
        'use strict'
        r.d(t, { ET: () => o, TZ: () => a, p_: () => i })
        var n = r(860)
        const i = { ERROR: 'ERROR', WARN: 'WARN', INFO: 'INFO', DEBUG: 'DEBUG', TRACE: 'TRACE' },
          o = 'log',
          a = n.K.logging
      },
      3785: (e, t, r) => {
        'use strict'
        r.d(t, { R: () => c, b: () => u })
        var n = r(9908),
          i = r(1863),
          o = r(860),
          a = r(3969),
          s = r(993)
        function c(e, t, r = {}, c = s.p_.INFO) {
          ;(0, n.p)(a.xV, ['API/logging/'.concat(c.toLowerCase(), '/called')], void 0, o.K.metrics, e),
            (0, n.p)(s.ET, [(0, i.t)(), t, r, c], void 0, o.K.logging, e)
        }
        function u(e) {
          return 'string' == typeof e && Object.values(s.p_).some((t) => t === e.toUpperCase().trim())
        }
      },
      3969: (e, t, r) => {
        'use strict'
        r.d(t, { TZ: () => n, XG: () => s, rs: () => i, xV: () => a, z_: () => o })
        const n = r(860).K.metrics,
          i = 'sm',
          o = 'cm',
          a = 'storeSupportabilityMetrics',
          s = 'storeEventMetrics'
      },
      6630: (e, t, r) => {
        'use strict'
        r.d(t, { T: () => n })
        const n = r(860).K.pageViewEvent
      },
      782: (e, t, r) => {
        'use strict'
        r.d(t, { T: () => n })
        const n = r(860).K.pageViewTiming
      },
      6344: (e, t, r) => {
        'use strict'
        r.d(t, {
          BB: () => d,
          G4: () => o,
          Qb: () => l,
          TZ: () => i,
          Ug: () => a,
          _s: () => s,
          bc: () => u,
          yP: () => c
        })
        var n = r(2614)
        const i = r(860).K.sessionReplay,
          o = {
            RECORD: 'recordReplay',
            PAUSE: 'pauseReplay',
            REPLAY_RUNNING: 'replayRunning',
            ERROR_DURING_REPLAY: 'errorDuringReplay'
          },
          a = 0.12,
          s = { DomContentLoaded: 0, Load: 1, FullSnapshot: 2, IncrementalSnapshot: 3, Meta: 4, Custom: 5 },
          c = { [n.g.ERROR]: 15e3, [n.g.FULL]: 3e5, [n.g.OFF]: 0 },
          u = {
            RESET: { message: 'Session was reset', sm: 'Reset' },
            IMPORT: { message: 'Recorder failed to import', sm: 'Import' },
            TOO_MANY: { message: '429: Too Many Requests', sm: 'Too-Many' },
            TOO_BIG: { message: 'Payload was too large', sm: 'Too-Big' },
            CROSS_TAB: { message: 'Session Entity was set to OFF on another tab', sm: 'Cross-Tab' },
            ENTITLEMENTS: { message: 'Session Replay is not allowed and will not be started', sm: 'Entitlement' }
          },
          d = 5e3,
          l = { API: 'api' }
      },
      5270: (e, t, r) => {
        'use strict'
        r.d(t, { Aw: () => c, CT: () => u, SR: () => s })
        var n = r(384),
          i = r(9417),
          o = r(7767),
          a = r(6154)
        function s(e) {
          return !!(0, n.dV)().o.MO && (0, o.V)(e) && !0 === (0, i.gD)(e, 'session_trace.enabled')
        }
        function c(e) {
          return !0 === (0, i.gD)(e, 'session_replay.preload') && s(e)
        }
        function u(e, t) {
          const r = t.correctAbsoluteTimestamp(e)
          return {
            originalTimestamp: e,
            correctedTimestamp: r,
            timestampDiff: e - r,
            originTime: a.WN,
            correctedOriginTime: t.correctedOriginTime,
            originTimeDiff: Math.floor(a.WN - t.correctedOriginTime)
          }
        }
      },
      3738: (e, t, r) => {
        'use strict'
        r.d(t, {
          He: () => i,
          Kp: () => s,
          Lc: () => u,
          Rz: () => d,
          TZ: () => n,
          bD: () => o,
          d3: () => a,
          jx: () => l,
          uP: () => c
        })
        const n = r(860).K.sessionTrace,
          i = 'bstResource',
          o = 'resource',
          a = '-start',
          s = '-end',
          c = 'fn' + a,
          u = 'fn' + s,
          d = 'pushState',
          l = 1e3
      },
      3962: (e, t, r) => {
        'use strict'
        r.d(t, { AM: () => o, O2: () => s, Qu: () => c, TZ: () => a, ih: () => u, tC: () => i })
        var n = r(860)
        const i = ['click', 'keydown', 'submit'],
          o = 'api',
          a = n.K.softNav,
          s = { INITIAL_PAGE_LOAD: '', ROUTE_CHANGE: 1, UNSPECIFIED: 2 },
          c = { INTERACTION: 1, AJAX: 2, CUSTOM_END: 3, CUSTOM_TRACER: 4 },
          u = { IP: 'in progress', FIN: 'finished', CAN: 'cancelled' }
      },
      7378: (e, t, r) => {
        'use strict'
        r.d(t, {
          $p: () => x,
          BR: () => b,
          Kp: () => R,
          L3: () => y,
          Lc: () => c,
          NC: () => o,
          SG: () => d,
          TZ: () => i,
          U6: () => p,
          UT: () => m,
          d3: () => w,
          dT: () => f,
          e5: () => A,
          gx: () => v,
          l9: () => l,
          oW: () => h,
          op: () => g,
          rw: () => u,
          tH: () => E,
          uP: () => s,
          wW: () => T,
          xq: () => a
        })
        var n = r(384)
        const i = r(860).K.spa,
          o = ['click', 'submit', 'keypress', 'keydown', 'keyup', 'change'],
          a = 999,
          s = 'fn-start',
          c = 'fn-end',
          u = 'cb-start',
          d = 'api-ixn-',
          l = 'remaining',
          f = 'interaction',
          h = 'spaNode',
          p = 'jsonpNode',
          g = 'fetch-start',
          m = 'fetch-done',
          v = 'fetch-body-',
          b = 'jsonp-end',
          y = (0, n.dV)().o.ST,
          w = '-start',
          R = '-end',
          x = '-body',
          T = 'cb' + R,
          A = 'jsTime',
          E = 'fetch'
      },
      4234: (e, t, r) => {
        'use strict'
        r.d(t, { W: () => o })
        var n = r(7836),
          i = r(1687)
        class o {
          constructor(e, t) {
            ;(this.agentIdentifier = e), (this.ee = n.ee.get(e)), (this.featureName = t), (this.blocked = !1)
          }
          deregisterDrain() {
            ;(0, i.x3)(this.agentIdentifier, this.featureName)
          }
        }
      },
      7767: (e, t, r) => {
        'use strict'
        r.d(t, { V: () => o })
        var n = r(9417),
          i = r(6154)
        const o = (e) => i.RI && !0 === (0, n.gD)(e, 'privacy.cookies_enabled')
      },
      425: (e, t, r) => {
        'use strict'
        r.d(t, { j: () => j })
        var n = r(860),
          i = r(2555),
          o = r(3371),
          a = r(9908),
          s = r(7836),
          c = r(1687),
          u = r(5289),
          d = r(6154),
          l = r(944),
          f = r(3969),
          h = r(384),
          p = r(6344)
        const g = [
            'setErrorHandler',
            'finished',
            'addToTrace',
            'addRelease',
            'addPageAction',
            'setCurrentRouteName',
            'setPageViewName',
            'setCustomAttribute',
            'interaction',
            'noticeError',
            'setUserId',
            'setApplicationVersion',
            'start',
            p.G4.RECORD,
            p.G4.PAUSE,
            'log',
            'wrapLogger'
          ],
          m = ['setErrorHandler', 'finished', 'addToTrace', 'addRelease']
        var v = r(1863),
          b = r(2614),
          y = r(993),
          w = r(3785),
          R = r(2646),
          x = r(3434)
        function T(e, t, r, n) {
          if ('object' != typeof t || !t || 'string' != typeof r || !r || 'function' != typeof t[r]) return (0, l.R)(29)
          const i = (function (e) {
              return (e || s.ee).get('logger')
            })(e),
            o = (0, x.YM)(i),
            a = new R.y(s.P)
          return (a.level = n.level), (a.customAttributes = n.customAttributes), o.inPlace(t, [r], 'wrap-logger-', a), i
        }
        function A() {
          const e = (0, h.pV)()
          g.forEach((t) => {
            e[t] = (...r) =>
              (function (t, ...r) {
                let n = []
                return (
                  Object.values(e.initializedAgents).forEach((e) => {
                    e && e.api ? e.exposed && e.api[t] && n.push(e.api[t](...r)) : (0, l.R)(38, t)
                  }),
                  n.length > 1 ? n : n[0]
                )
              })(t, ...r)
          })
        }
        const E = {}
        var S = r(9417),
          N = r(5603),
          O = r(5284)
        const I = (e) => {
          const t = e.startsWith('http')
          ;(e += '/'), (r.p = t ? e : 'https://' + e)
        }
        let _ = !1
        function j(e, t = {}, g, R) {
          let { init: x, info: j, loader_config: P, runtime: C = {}, exposed: k = !0 } = t
          C.loaderType = g
          const L = (0, h.pV)()
          j || ((x = L.init), (j = L.info), (P = L.loader_config)),
            (0, S.xN)(e.agentIdentifier, x || {}),
            (0, N.a)(e.agentIdentifier, P || {}),
            (j.jsAttributes ??= {}),
            d.bv && (j.jsAttributes.isWorker = !0),
            (0, i.x1)(e.agentIdentifier, j)
          const H = (0, S.D0)(e.agentIdentifier),
            D = [j.beacon, j.errorBeacon]
          _ ||
            (H.proxy.assets && (I(H.proxy.assets), D.push(H.proxy.assets)),
            H.proxy.beacon && D.push(H.proxy.beacon),
            A(),
            (0, h.US)('activatedFeatures', O.B),
            (e.runSoftNavOverSpa &&= !0 === H.soft_navigations.enabled && H.feature_flags.includes('soft_nav'))),
            (C.denyList = [...(H.ajax.deny_list || []), ...(H.ajax.block_internal ? D : [])]),
            (C.ptid = e.agentIdentifier),
            (0, o.V)(e.agentIdentifier, C),
            (e.ee = s.ee.get(e.agentIdentifier)),
            void 0 === e.api &&
              (e.api = (function (e, t, h = !1) {
                t || (0, c.Ak)(e, 'api')
                const g = {}
                var R = s.ee.get(e),
                  x = R.get('tracer')
                ;(E[e] = b.g.OFF),
                  R.on(p.G4.REPLAY_RUNNING, (t) => {
                    E[e] = t
                  })
                var A = 'api-',
                  S = A + 'ixn-'
                function N(t, r, n, o) {
                  const a = (0, i.Vp)(e)
                  return (
                    null === r
                      ? delete a.jsAttributes[t]
                      : (0, i.x1)(e, { ...a, jsAttributes: { ...a.jsAttributes, [t]: r } }),
                    _(A, n, !0, o || null === r ? 'session' : void 0)(t, r)
                  )
                }
                function O() {}
                ;(g.log = function (e, { customAttributes: t = {}, level: r = y.p_.INFO } = {}) {
                  ;(0, a.p)(f.xV, ['API/log/called'], void 0, n.K.metrics, R), (0, w.R)(R, e, t, r)
                }),
                  (g.wrapLogger = (e, t, { customAttributes: r = {}, level: i = y.p_.INFO } = {}) => {
                    ;(0, a.p)(f.xV, ['API/wrapLogger/called'], void 0, n.K.metrics, R),
                      T(R, e, t, { customAttributes: r, level: i })
                  }),
                  m.forEach((e) => {
                    g[e] = _(A, e, !0, 'api')
                  }),
                  (g.addPageAction = _(A, 'addPageAction', !0, n.K.genericEvents)),
                  (g.setPageViewName = function (t, r) {
                    if ('string' == typeof t)
                      return (
                        '/' !== t.charAt(0) && (t = '/' + t),
                        ((0, o.f)(e).customTransaction = (r || 'http://custom.transaction') + t),
                        _(A, 'setPageViewName', !0)()
                      )
                  }),
                  (g.setCustomAttribute = function (e, t, r = !1) {
                    if ('string' == typeof e) {
                      if (['string', 'number', 'boolean'].includes(typeof t) || null === t)
                        return N(e, t, 'setCustomAttribute', r)
                      ;(0, l.R)(40, typeof t)
                    } else (0, l.R)(39, typeof e)
                  }),
                  (g.setUserId = function (e) {
                    if ('string' == typeof e || null === e) return N('enduser.id', e, 'setUserId', !0)
                    ;(0, l.R)(41, typeof e)
                  }),
                  (g.setApplicationVersion = function (e) {
                    if ('string' == typeof e || null === e)
                      return N('application.version', e, 'setApplicationVersion', !1)
                    ;(0, l.R)(42, typeof e)
                  }),
                  (g.start = () => {
                    try {
                      ;(0, a.p)(f.xV, ['API/start/called'], void 0, n.K.metrics, R), R.emit('manual-start-all')
                    } catch (e) {
                      ;(0, l.R)(23, e)
                    }
                  }),
                  (g[p.G4.RECORD] = function () {
                    ;(0, a.p)(f.xV, ['API/recordReplay/called'], void 0, n.K.metrics, R),
                      (0, a.p)(p.G4.RECORD, [], void 0, n.K.sessionReplay, R)
                  }),
                  (g[p.G4.PAUSE] = function () {
                    ;(0, a.p)(f.xV, ['API/pauseReplay/called'], void 0, n.K.metrics, R),
                      (0, a.p)(p.G4.PAUSE, [], void 0, n.K.sessionReplay, R)
                  }),
                  (g.interaction = function (e) {
                    return new O().get('object' == typeof e ? e : {})
                  })
                const I = (O.prototype = {
                  createTracer: function (e, t) {
                    var r = {},
                      i = this,
                      o = 'function' == typeof t
                    return (
                      (0, a.p)(f.xV, ['API/createTracer/called'], void 0, n.K.metrics, R),
                      h || (0, a.p)(S + 'tracer', [(0, v.t)(), e, r], i, n.K.spa, R),
                      function () {
                        if ((x.emit((o ? '' : 'no-') + 'fn-start', [(0, v.t)(), i, o], r), o))
                          try {
                            return t.apply(this, arguments)
                          } catch (e) {
                            const t = 'string' == typeof e ? new Error(e) : e
                            throw (x.emit('fn-err', [arguments, this, t], r), t)
                          } finally {
                            x.emit('fn-end', [(0, v.t)()], r)
                          }
                      }
                    )
                  }
                })
                function _(e, t, r, i) {
                  return function () {
                    return (
                      (0, a.p)(f.xV, ['API/' + t + '/called'], void 0, n.K.metrics, R),
                      i && (0, a.p)(e + t, [(0, v.t)(), ...arguments], r ? null : this, i, R),
                      r ? void 0 : this
                    )
                  }
                }
                function j() {
                  r.e(478)
                    .then(r.bind(r, 8778))
                    .then(({ setAPI: t }) => {
                      t(e), (0, c.Ze)(e, 'api')
                    })
                    .catch((e) => {
                      ;(0, l.R)(27, e), R.abort()
                    })
                }
                return (
                  [
                    'actionText',
                    'setName',
                    'setAttribute',
                    'save',
                    'ignore',
                    'onEnd',
                    'getContext',
                    'end',
                    'get'
                  ].forEach((e) => {
                    I[e] = _(S, e, void 0, h ? n.K.softNav : n.K.spa)
                  }),
                  (g.setCurrentRouteName = h ? _(S, 'routeName', void 0, n.K.softNav) : _(A, 'routeName', !0, n.K.spa)),
                  (g.noticeError = function (t, r) {
                    'string' == typeof t && (t = new Error(t)),
                      (0, a.p)(f.xV, ['API/noticeError/called'], void 0, n.K.metrics, R),
                      (0, a.p)('err', [t, (0, v.t)(), !1, r, !!E[e]], void 0, n.K.jserrors, R)
                  }),
                  d.RI ? (0, u.GG)(() => j(), !0) : j(),
                  g
                )
              })(e.agentIdentifier, R, e.runSoftNavOverSpa)),
            void 0 === e.exposed && (e.exposed = k),
            (_ = !0)
        }
      },
      8374: (e, t, r) => {
        r.nc = (() => {
          try {
            return document?.currentScript?.nonce
          } catch (e) {}
          return ''
        })()
      },
      860: (e, t, r) => {
        'use strict'
        r.d(t, { K: () => n, P: () => i })
        const n = {
            ajax: 'ajax',
            genericEvents: 'generic_events',
            jserrors: 'jserrors',
            logging: 'logging',
            metrics: 'metrics',
            pageAction: 'page_action',
            pageViewEvent: 'page_view_event',
            pageViewTiming: 'page_view_timing',
            sessionReplay: 'session_replay',
            sessionTrace: 'session_trace',
            softNav: 'soft_navigations',
            spa: 'spa'
          },
          i = {
            [n.pageViewEvent]: 1,
            [n.pageViewTiming]: 2,
            [n.metrics]: 3,
            [n.jserrors]: 4,
            [n.spa]: 5,
            [n.ajax]: 6,
            [n.sessionTrace]: 7,
            [n.softNav]: 8,
            [n.sessionReplay]: 9,
            [n.logging]: 10,
            [n.genericEvents]: 11
          }
      }
    },
    n = {}
  function i(e) {
    var t = n[e]
    if (void 0 !== t) return t.exports
    var o = (n[e] = { exports: {} })
    return r[e](o, o.exports, i), o.exports
  }
  ;(i.m = r),
    (i.d = (e, t) => {
      for (var r in t) i.o(t, r) && !i.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] })
    }),
    (i.f = {}),
    (i.e = (e) => Promise.all(Object.keys(i.f).reduce((t, r) => (i.f[r](e, t), t), []))),
    (i.u = (e) => ({ 212: 'nr-spa-compressor', 249: 'nr-spa-recorder', 478: 'nr-spa' })[e] + '-1.270.1.min.js'),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (e = {}),
    (t = 'NRBA-1.270.1.PROD:'),
    (i.l = (r, n, o, a) => {
      if (e[r]) e[r].push(n)
      else {
        var s, c
        if (void 0 !== o)
          for (var u = document.getElementsByTagName('script'), d = 0; d < u.length; d++) {
            var l = u[d]
            if (l.getAttribute('src') == r || l.getAttribute('data-webpack') == t + o) {
              s = l
              break
            }
          }
        if (!s) {
          c = !0
          var f = {
            478: 'sha512-OzGDefNEv1U1WnY/i5IndOrzzUVPyOsBoW6I18N4PVpcZvOUYcDYbwxpfb3o8cZQHPrpCh04PfV8m/8FPBRaqA==',
            249: 'sha512-npSDnSvIWlH1EdNDlW5UdvOJSl75lkQhJ/hOY+u3HTSk6XbU8qcfp3sjGljy98GAm4MHZ/e4cKbInmk0DGeeWg==',
            212: 'sha512-t24Sn2EoGCHKjdudc4jQUcIMBSZbcTcGxHzHQ38aBn6deMJwe/zhBe/B9Rf13lNWzJW33Ki9hQcKsOsQ5+j/HA=='
          }
          ;((s = document.createElement('script')).charset = 'utf-8'),
            (s.timeout = 120),
            i.nc && s.setAttribute('nonce', i.nc),
            s.setAttribute('data-webpack', t + o),
            (s.src = r),
            0 !== s.src.indexOf(window.location.origin + '/') && (s.crossOrigin = 'anonymous'),
            f[a] && (s.integrity = f[a])
        }
        e[r] = [n]
        var h = (t, n) => {
            ;(s.onerror = s.onload = null), clearTimeout(p)
            var i = e[r]
            if ((delete e[r], s.parentNode && s.parentNode.removeChild(s), i && i.forEach((e) => e(n)), t)) return t(n)
          },
          p = setTimeout(h.bind(null, void 0, { type: 'timeout', target: s }), 12e4)
        ;(s.onerror = h.bind(null, s.onerror)), (s.onload = h.bind(null, s.onload)), c && document.head.appendChild(s)
      }
    }),
    (i.r = (e) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (i.p = 'https://js-agent.newrelic.com/'),
    (() => {
      var e = { 38: 0, 788: 0 }
      i.f.j = (t, r) => {
        var n = i.o(e, t) ? e[t] : void 0
        if (0 !== n)
          if (n) r.push(n[2])
          else {
            var o = new Promise((r, i) => (n = e[t] = [r, i]))
            r.push((n[2] = o))
            var a = i.p + i.u(t),
              s = new Error()
            i.l(
              a,
              (r) => {
                if (i.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                  var o = r && ('load' === r.type ? 'missing' : r.type),
                    a = r && r.target && r.target.src
                  ;(s.message = 'Loading chunk ' + t + ' failed.\n(' + o + ': ' + a + ')'),
                    (s.name = 'ChunkLoadError'),
                    (s.type = o),
                    (s.request = a),
                    n[1](s)
                }
              },
              'chunk-' + t,
              t
            )
          }
      }
      var t = (t, r) => {
          var n,
            o,
            [a, s, c] = r,
            u = 0
          if (a.some((t) => 0 !== e[t])) {
            for (n in s) i.o(s, n) && (i.m[n] = s[n])
            if (c) c(i)
          }
          for (t && t(r); u < a.length; u++) (o = a[u]), i.o(e, o) && e[o] && e[o][0](), (e[o] = 0)
        },
        r = (self['webpackChunk:NRBA-1.270.1.PROD'] = self['webpackChunk:NRBA-1.270.1.PROD'] || [])
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)))
    })(),
    (() => {
      'use strict'
      i(8374)
      var e = i(944),
        t = i(6344),
        r = i(9566)
      class n {
        agentIdentifier
        constructor(e = (0, r.LA)(16)) {
          this.agentIdentifier = e
        }
        #e(t, ...r) {
          if ('function' == typeof this.api?.[t]) return this.api[t](...r)
          ;(0, e.R)(35, t)
        }
        addPageAction(e, t) {
          return this.#e('addPageAction', e, t)
        }
        setPageViewName(e, t) {
          return this.#e('setPageViewName', e, t)
        }
        setCustomAttribute(e, t, r) {
          return this.#e('setCustomAttribute', e, t, r)
        }
        noticeError(e, t) {
          return this.#e('noticeError', e, t)
        }
        setUserId(e) {
          return this.#e('setUserId', e)
        }
        setApplicationVersion(e) {
          return this.#e('setApplicationVersion', e)
        }
        setErrorHandler(e) {
          return this.#e('setErrorHandler', e)
        }
        finished(e) {
          return this.#e('finished', e)
        }
        addRelease(e, t) {
          return this.#e('addRelease', e, t)
        }
        start(e) {
          return this.#e('start', e)
        }
        recordReplay() {
          return this.#e(t.G4.RECORD)
        }
        pauseReplay() {
          return this.#e(t.G4.PAUSE)
        }
        addToTrace(e) {
          return this.#e('addToTrace', e)
        }
        setCurrentRouteName(e) {
          return this.#e('setCurrentRouteName', e)
        }
        interaction() {
          return this.#e('interaction')
        }
        log(e, t) {
          return this.#e('log', e, t)
        }
        wrapLogger(e, t, r) {
          return this.#e('wrapLogger', e, t, r)
        }
      }
      var o = i(860),
        a = i(9417)
      const s = Object.values(o.K)
      function c(e) {
        const t = {}
        return (
          s.forEach((r) => {
            t[r] = (function (e, t) {
              return !0 === (0, a.gD)(t, ''.concat(e, '.enabled'))
            })(r, e)
          }),
          t
        )
      }
      var u = i(425)
      var d = i(1687),
        l = i(4234),
        f = i(5289),
        h = i(6154),
        p = i(5270),
        g = i(7767),
        m = i(6389)
      class v extends l.W {
        constructor(e, t, r = !0) {
          super(e.agentIdentifier, t),
            (this.auto = r),
            (this.abortHandler = void 0),
            (this.featAggregate = void 0),
            (this.onAggregateImported = void 0),
            !1 === e.init[this.featureName].autoStart && (this.auto = !1),
            this.auto
              ? (0, d.Ak)(e.agentIdentifier, t)
              : this.ee.on(
                  'manual-start-all',
                  (0, m.J)(() => {
                    ;(0, d.Ak)(e.agentIdentifier, this.featureName), (this.auto = !0), this.importAggregator(e)
                  })
                )
        }
        importAggregator(t, r = {}) {
          if (this.featAggregate || !this.auto) return
          let n
          this.onAggregateImported = new Promise((e) => {
            n = e
          })
          const a = async () => {
            let a
            try {
              if ((0, g.V)(this.agentIdentifier)) {
                const { setupAgentSession: e } = await i.e(478).then(i.bind(i, 6526))
                a = e(this.agentIdentifier)
              }
            } catch (t) {
              ;(0, e.R)(20, t),
                this.ee.emit('internal-error', [t]),
                this.featureName === o.K.sessionReplay && this.abortHandler?.()
            }
            if (t.sharedAggregator) await t.sharedAggregator
            else {
              t.sharedAggregator = i.e(478).then(i.bind(i, 5987))
              const { Aggregator: e } = await t.sharedAggregator
              t.sharedAggregator = new e()
            }
            try {
              if (!this.#t(this.featureName, a)) return (0, d.Ze)(this.agentIdentifier, this.featureName), void n(!1)
              const { lazyFeatureLoader: e } = await i.e(478).then(i.bind(i, 6103)),
                { Aggregate: o } = await e(this.featureName, 'aggregate')
              ;(this.featAggregate = new o(t, r)), n(!0)
            } catch (t) {
              ;(0, e.R)(34, t),
                this.abortHandler?.(),
                (0, d.Ze)(this.agentIdentifier, this.featureName, !0),
                n(!1),
                this.ee && this.ee.abort()
            }
          }
          h.RI ? (0, f.GG)(() => a(), !0) : a()
        }
        #t(e, t) {
          switch (e) {
            case o.K.sessionReplay:
              return (0, p.SR)(this.agentIdentifier) && !!t
            case o.K.sessionTrace:
              return !!t
            default:
              return !0
          }
        }
      }
      var b = i(6630)
      class y extends v {
        static featureName = b.T
        constructor(e, t = !0) {
          super(e, b.T, t), this.importAggregator(e)
        }
      }
      var w = i(384)
      var R = i(9908),
        x = i(2843),
        T = i(3878),
        A = i(782),
        E = i(1863)
      class S extends v {
        static featureName = A.T
        constructor(e, t = !0) {
          super(e, A.T, t),
            h.RI &&
              ((0, x.u)(() => (0, R.p)('docHidden', [(0, E.t)()], void 0, A.T, this.ee), !0),
              (0, T.sp)('pagehide', () => (0, R.p)('winPagehide', [(0, E.t)()], void 0, A.T, this.ee)),
              this.importAggregator(e))
        }
      }
      var N = i(3969)
      class O extends v {
        static featureName = N.TZ
        constructor(e, t = !0) {
          super(e, N.TZ, t), this.importAggregator(e)
        }
      }
      var I = i(6774),
        _ = i(3304)
      class j {
        constructor(e, t, r, n, i) {
          ;(this.name = 'UncaughtError'),
            (this.message = 'string' == typeof e ? e : (0, _.A)(e)),
            (this.sourceURL = t),
            (this.line = r),
            (this.column = n),
            (this.__newrelic = i)
        }
      }
      function P(e) {
        return L(e)
          ? e
          : new j(
              void 0 !== e?.message ? e.message : e,
              e?.filename || e?.sourceURL,
              e?.lineno || e?.line,
              e?.colno || e?.col,
              e?.__newrelic
            )
      }
      function C(e) {
        let t = 'Unhandled Promise Rejection'
        if (L(e?.reason))
          try {
            return (e.reason.message = t + ': ' + e.reason.message), P(e.reason)
          } catch (t) {
            return P(e.reason)
          }
        if (void 0 === e.reason) return P(t)
        const r = P(e.reason)
        return (r.message = t + ': ' + r?.message), r
      }
      function k(e) {
        if (e.error instanceof SyntaxError && !/:\d+$/.test(e.error.stack?.trim())) {
          const t = new j(e.message, e.filename, e.lineno, e.colno, e.error.__newrelic)
          return (t.name = SyntaxError.name), t
        }
        return L(e.error) ? e.error : P(e)
      }
      function L(e) {
        return e instanceof Error && !!e.stack
      }
      class H extends v {
        static featureName = I.T
        #r = !1
        constructor(e, r = !0) {
          super(e, I.T, r)
          try {
            this.removeOnAbort = new AbortController()
          } catch (e) {}
          this.ee.on('internal-error', (e) => {
            this.abortHandler &&
              (0, R.p)('ierr', [P(e), (0, E.t)(), !0, {}, this.#r], void 0, this.featureName, this.ee)
          }),
            this.ee.on(t.G4.REPLAY_RUNNING, (e) => {
              this.#r = e
            }),
            h.gm.addEventListener(
              'unhandledrejection',
              (e) => {
                this.abortHandler &&
                  (0, R.p)(
                    'err',
                    [C(e), (0, E.t)(), !1, { unhandledPromiseRejection: 1 }, this.#r],
                    void 0,
                    this.featureName,
                    this.ee
                  )
              },
              (0, T.jT)(!1, this.removeOnAbort?.signal)
            ),
            h.gm.addEventListener(
              'error',
              (e) => {
                this.abortHandler &&
                  (0, R.p)('err', [k(e), (0, E.t)(), !1, {}, this.#r], void 0, this.featureName, this.ee)
              },
              (0, T.jT)(!1, this.removeOnAbort?.signal)
            ),
            (this.abortHandler = this.#n),
            this.importAggregator(e)
        }
        #n() {
          this.removeOnAbort?.abort(), (this.abortHandler = void 0)
        }
      }
      var D = i(8990)
      let M = 1
      const K = 'nr@id'
      function U(e) {
        const t = typeof e
        return !e || ('object' !== t && 'function' !== t)
          ? -1
          : e === h.gm
            ? 0
            : (0, D.I)(e, K, function () {
                return M++
              })
      }
      function V(e) {
        if ('string' == typeof e && e.length) return e.length
        if ('object' == typeof e) {
          if ('undefined' != typeof ArrayBuffer && e instanceof ArrayBuffer && e.byteLength) return e.byteLength
          if ('undefined' != typeof Blob && e instanceof Blob && e.size) return e.size
          if (!('undefined' != typeof FormData && e instanceof FormData))
            try {
              return (0, _.A)(e).length
            } catch (e) {
              return
            }
        }
      }
      var G = i(8139),
        F = i(7836),
        B = i(3434)
      const W = {},
        z = ['open', 'send']
      function q(t) {
        var r = t || F.ee
        const n = (function (e) {
          return (e || F.ee).get('xhr')
        })(r)
        if (W[n.debugId]++) return n
        ;(W[n.debugId] = 1), (0, G.u)(r)
        var i = (0, B.YM)(n),
          o = h.gm.XMLHttpRequest,
          a = h.gm.MutationObserver,
          s = h.gm.Promise,
          c = h.gm.setInterval,
          u = 'readystatechange',
          d = ['onload', 'onerror', 'onabort', 'onloadstart', 'onloadend', 'onprogress', 'ontimeout'],
          l = [],
          f = (h.gm.XMLHttpRequest = function (t) {
            const r = new o(t),
              a = n.context(r)
            try {
              n.emit('new-xhr', [r], a),
                r.addEventListener(
                  u,
                  ((s = a),
                  function () {
                    var e = this
                    e.readyState > 3 && !s.resolved && ((s.resolved = !0), n.emit('xhr-resolved', [], e)),
                      i.inPlace(e, d, 'fn-', y)
                  }),
                  (0, T.jT)(!1)
                )
            } catch (t) {
              ;(0, e.R)(15, t)
              try {
                n.emit('internal-error', [t])
              } catch (e) {}
            }
            var s
            return r
          })
        function p(e, t) {
          i.inPlace(t, ['onreadystatechange'], 'fn-', y)
        }
        if (
          ((function (e, t) {
            for (var r in e) t[r] = e[r]
          })(o, f),
          (f.prototype = o.prototype),
          i.inPlace(f.prototype, z, '-xhr-', y),
          n.on('send-xhr-start', function (e, t) {
            p(e, t),
              (function (e) {
                l.push(e), a && (g ? g.then(b) : c ? c(b) : ((m = -m), (v.data = m)))
              })(t)
          }),
          n.on('open-xhr-start', p),
          a)
        ) {
          var g = s && s.resolve()
          if (!c && !s) {
            var m = 1,
              v = document.createTextNode(m)
            new a(b).observe(v, { characterData: !0 })
          }
        } else
          r.on('fn-end', function (e) {
            ;(e[0] && e[0].type === u) || b()
          })
        function b() {
          for (var e = 0; e < l.length; e++) p(0, l[e])
          l.length && (l = [])
        }
        function y(e, t) {
          return t
        }
        return n
      }
      var Z = 'fetch-',
        Y = Z + 'body-',
        X = ['arrayBuffer', 'blob', 'json', 'text', 'formData'],
        J = h.gm.Request,
        Q = h.gm.Response,
        ee = 'prototype'
      const te = {}
      function re(e) {
        const t = (function (e) {
          return (e || F.ee).get('fetch')
        })(e)
        if (!(J && Q && h.gm.fetch)) return t
        if (te[t.debugId]++) return t
        function r(e, r, n) {
          var i = e[r]
          'function' == typeof i &&
            (e[r] = function () {
              var e,
                r = [...arguments],
                o = {}
              t.emit(n + 'before-start', [r], o), o[F.P] && o[F.P].dt && (e = o[F.P].dt)
              var a = i.apply(this, r)
              return (
                t.emit(n + 'start', [r, e], a),
                a.then(
                  function (e) {
                    return t.emit(n + 'end', [null, e], a), e
                  },
                  function (e) {
                    throw (t.emit(n + 'end', [e], a), e)
                  }
                )
              )
            })
        }
        return (
          (te[t.debugId] = 1),
          X.forEach((e) => {
            r(J[ee], e, Y), r(Q[ee], e, Y)
          }),
          r(h.gm, 'fetch', Z),
          t.on(Z + 'end', function (e, r) {
            var n = this
            if (r) {
              var i = r.headers.get('content-length')
              null !== i && (n.rxSize = i), t.emit(Z + 'done', [null, r], n)
            } else t.emit(Z + 'done', [e], n)
          }),
          t
        )
      }
      var ne = i(7485),
        ie = i(5603)
      class oe {
        constructor(e) {
          this.agentIdentifier = e
        }
        generateTracePayload(e) {
          if (!this.shouldGenerateTrace(e)) return null
          var t = (0, ie.o)(this.agentIdentifier)
          if (!t) return null
          var n = (t.accountID || '').toString() || null,
            i = (t.agentID || '').toString() || null,
            o = (t.trustKey || '').toString() || null
          if (!n || !i) return null
          var a = (0, r.ZF)(),
            s = (0, r.el)(),
            c = Date.now(),
            u = { spanId: a, traceId: s, timestamp: c }
          return (
            (e.sameOrigin || (this.isAllowedOrigin(e) && this.useTraceContextHeadersForCors())) &&
              ((u.traceContextParentHeader = this.generateTraceContextParentHeader(a, s)),
              (u.traceContextStateHeader = this.generateTraceContextStateHeader(a, c, n, i, o))),
            ((e.sameOrigin && !this.excludeNewrelicHeader()) ||
              (!e.sameOrigin && this.isAllowedOrigin(e) && this.useNewrelicHeaderForCors())) &&
              (u.newrelicHeader = this.generateTraceHeader(a, s, c, n, i, o)),
            u
          )
        }
        generateTraceContextParentHeader(e, t) {
          return '00-' + t + '-' + e + '-01'
        }
        generateTraceContextStateHeader(e, t, r, n, i) {
          return i + '@nr=0-1-' + r + '-' + n + '-' + e + '----' + t
        }
        generateTraceHeader(e, t, r, n, i, o) {
          if (!('function' == typeof h.gm?.btoa)) return null
          var a = { v: [0, 1], d: { ty: 'Browser', ac: n, ap: i, id: e, tr: t, ti: r } }
          return o && n !== o && (a.d.tk = o), btoa((0, _.A)(a))
        }
        shouldGenerateTrace(e) {
          return this.isDtEnabled() && this.isAllowedOrigin(e)
        }
        isAllowedOrigin(e) {
          var t = !1,
            r = {}
          if (
            ((0, a.gD)(this.agentIdentifier, 'distributed_tracing') &&
              (r = (0, a.D0)(this.agentIdentifier).distributed_tracing),
            e.sameOrigin)
          )
            t = !0
          else if (r.allowed_origins instanceof Array)
            for (var n = 0; n < r.allowed_origins.length; n++) {
              var i = (0, ne.D)(r.allowed_origins[n])
              if (e.hostname === i.hostname && e.protocol === i.protocol && e.port === i.port) {
                t = !0
                break
              }
            }
          return t
        }
        isDtEnabled() {
          var e = (0, a.gD)(this.agentIdentifier, 'distributed_tracing')
          return !!e && !!e.enabled
        }
        excludeNewrelicHeader() {
          var e = (0, a.gD)(this.agentIdentifier, 'distributed_tracing')
          return !!e && !!e.exclude_newrelic_header
        }
        useNewrelicHeaderForCors() {
          var e = (0, a.gD)(this.agentIdentifier, 'distributed_tracing')
          return !!e && !1 !== e.cors_use_newrelic_header
        }
        useTraceContextHeadersForCors() {
          var e = (0, a.gD)(this.agentIdentifier, 'distributed_tracing')
          return !!e && !!e.cors_use_tracecontext_headers
        }
      }
      var ae = i(9300),
        se = i(7295),
        ce = ['load', 'error', 'abort', 'timeout'],
        ue = ce.length,
        de = (0, w.dV)().o.REQ,
        le = (0, w.dV)().o.XHR
      class fe extends v {
        static featureName = ae.T
        constructor(e, t = !0) {
          super(e, ae.T, t),
            (this.dt = new oe(e.agentIdentifier)),
            (this.handler = (e, t, r, n) => (0, R.p)(e, t, r, n, this.ee))
          try {
            const e = { xmlhttprequest: 'xhr', fetch: 'fetch', beacon: 'beacon' }
            h.gm?.performance?.getEntriesByType('resource').forEach((t) => {
              if (t.initiatorType in e && 0 !== t.responseStatus) {
                const r = { status: t.responseStatus },
                  n = { rxSize: t.transferSize, duration: Math.floor(t.duration), cbTime: 0 }
                he(r, t.name),
                  this.handler('xhr', [r, n, t.startTime, t.responseEnd, e[t.initiatorType]], void 0, o.K.ajax)
              }
            })
          } catch (e) {}
          re(this.ee),
            q(this.ee),
            (function (e, t, r, n) {
              function i(e) {
                var t = this
                ;(t.totalCbs = 0),
                  (t.called = 0),
                  (t.cbTime = 0),
                  (t.end = x),
                  (t.ended = !1),
                  (t.xhrGuids = {}),
                  (t.lastSize = null),
                  (t.loadCaptureCalled = !1),
                  (t.params = this.params || {}),
                  (t.metrics = this.metrics || {}),
                  e.addEventListener(
                    'load',
                    function (r) {
                      A(t, e)
                    },
                    (0, T.jT)(!1)
                  ),
                  h.lR ||
                    e.addEventListener(
                      'progress',
                      function (e) {
                        t.lastSize = e.loaded
                      },
                      (0, T.jT)(!1)
                    )
              }
              function a(e) {
                ;(this.params = { method: e[0] }), he(this, e[1]), (this.metrics = {})
              }
              function s(t, r) {
                e.loader_config.xpid && this.sameOrigin && r.setRequestHeader('X-NewRelic-ID', e.loader_config.xpid)
                var i = n.generateTracePayload(this.parsedOrigin)
                if (i) {
                  var o = !1
                  i.newrelicHeader && (r.setRequestHeader('newrelic', i.newrelicHeader), (o = !0)),
                    i.traceContextParentHeader &&
                      (r.setRequestHeader('traceparent', i.traceContextParentHeader),
                      i.traceContextStateHeader && r.setRequestHeader('tracestate', i.traceContextStateHeader),
                      (o = !0)),
                    o && (this.dt = i)
                }
              }
              function c(e, r) {
                var n = this.metrics,
                  i = e[0],
                  o = this
                if (n && i) {
                  var a = V(i)
                  a && (n.txSize = a)
                }
                ;(this.startTime = (0, E.t)()),
                  (this.body = i),
                  (this.listener = function (e) {
                    try {
                      'abort' !== e.type || o.loadCaptureCalled || (o.params.aborted = !0),
                        ('load' !== e.type ||
                          (o.called === o.totalCbs &&
                            (o.onloadCalled || 'function' != typeof r.onload) &&
                            'function' == typeof o.end)) &&
                          o.end(r)
                    } catch (e) {
                      try {
                        t.emit('internal-error', [e])
                      } catch (e) {}
                    }
                  })
                for (var s = 0; s < ue; s++) r.addEventListener(ce[s], this.listener, (0, T.jT)(!1))
              }
              function u(e, t, r) {
                ;(this.cbTime += e),
                  t ? (this.onloadCalled = !0) : (this.called += 1),
                  this.called !== this.totalCbs ||
                    (!this.onloadCalled && 'function' == typeof r.onload) ||
                    'function' != typeof this.end ||
                    this.end(r)
              }
              function d(e, t) {
                var r = '' + U(e) + !!t
                this.xhrGuids && !this.xhrGuids[r] && ((this.xhrGuids[r] = !0), (this.totalCbs += 1))
              }
              function l(e, t) {
                var r = '' + U(e) + !!t
                this.xhrGuids && this.xhrGuids[r] && (delete this.xhrGuids[r], (this.totalCbs -= 1))
              }
              function f() {
                this.endTime = (0, E.t)()
              }
              function p(e, r) {
                r instanceof le && 'load' === e[0] && t.emit('xhr-load-added', [e[1], e[2]], r)
              }
              function g(e, r) {
                r instanceof le && 'load' === e[0] && t.emit('xhr-load-removed', [e[1], e[2]], r)
              }
              function m(e, t, r) {
                t instanceof le &&
                  ('onload' === r && (this.onload = !0),
                  ('load' === (e[0] && e[0].type) || this.onload) && (this.xhrCbStart = (0, E.t)()))
              }
              function v(e, r) {
                this.xhrCbStart && t.emit('xhr-cb-time', [(0, E.t)() - this.xhrCbStart, this.onload, r], r)
              }
              function b(e) {
                var t,
                  r = e[1] || {}
                if (
                  ('string' == typeof e[0]
                    ? 0 === (t = e[0]).length && h.RI && (t = '' + h.gm.location.href)
                    : e[0] && e[0].url
                      ? (t = e[0].url)
                      : h.gm?.URL && e[0] && e[0] instanceof URL
                        ? (t = e[0].href)
                        : 'function' == typeof e[0].toString && (t = e[0].toString()),
                  'string' == typeof t && 0 !== t.length)
                ) {
                  t && ((this.parsedOrigin = (0, ne.D)(t)), (this.sameOrigin = this.parsedOrigin.sameOrigin))
                  var i = n.generateTracePayload(this.parsedOrigin)
                  if (i && (i.newrelicHeader || i.traceContextParentHeader))
                    if (e[0] && e[0].headers) s(e[0].headers, i) && (this.dt = i)
                    else {
                      var o = {}
                      for (var a in r) o[a] = r[a]
                      ;(o.headers = new Headers(r.headers || {})),
                        s(o.headers, i) && (this.dt = i),
                        e.length > 1 ? (e[1] = o) : e.push(o)
                    }
                }
                function s(e, t) {
                  var r = !1
                  return (
                    t.newrelicHeader && (e.set('newrelic', t.newrelicHeader), (r = !0)),
                    t.traceContextParentHeader &&
                      (e.set('traceparent', t.traceContextParentHeader),
                      t.traceContextStateHeader && e.set('tracestate', t.traceContextStateHeader),
                      (r = !0)),
                    r
                  )
                }
              }
              function y(e, t) {
                ;(this.params = {}),
                  (this.metrics = {}),
                  (this.startTime = (0, E.t)()),
                  (this.dt = t),
                  e.length >= 1 && (this.target = e[0]),
                  e.length >= 2 && (this.opts = e[1])
                var r,
                  n = this.opts || {},
                  i = this.target
                'string' == typeof i
                  ? (r = i)
                  : 'object' == typeof i && i instanceof de
                    ? (r = i.url)
                    : h.gm?.URL && 'object' == typeof i && i instanceof URL && (r = i.href),
                  he(this, r)
                var o = ('' + ((i && i instanceof de && i.method) || n.method || 'GET')).toUpperCase()
                ;(this.params.method = o), (this.body = n.body), (this.txSize = V(n.body) || 0)
              }
              function w(e, t) {
                if (((this.endTime = (0, E.t)()), this.params || (this.params = {}), (0, se.iW)(this.params))) return
                let n
                ;(this.params.status = t ? t.status : 0),
                  'string' == typeof this.rxSize && this.rxSize.length > 0 && (n = +this.rxSize)
                const i = { txSize: this.txSize, rxSize: n, duration: (0, E.t)() - this.startTime }
                r('xhr', [this.params, i, this.startTime, this.endTime, 'fetch'], this, o.K.ajax)
              }
              function x(e) {
                const t = this.params,
                  n = this.metrics
                if (!this.ended) {
                  this.ended = !0
                  for (let t = 0; t < ue; t++) e.removeEventListener(ce[t], this.listener, !1)
                  t.aborted ||
                    (0, se.iW)(t) ||
                    ((n.duration = (0, E.t)() - this.startTime),
                    this.loadCazptureCalled || 4 !== e.readyState ? null == t.status && (t.status = 0) : A(this, e),
                    (n.cbTime = this.cbTime),
                    r('xhr', [t, n, this.startTime, this.endTime, 'xhr'], this, o.K.ajax))
                }
              }
              function A(e, r) {
                e.params.status = r.status
                var n = (function (e, t) {
                  var r = e.responseType
                  return 'json' === r && null !== t
                    ? t
                    : 'arraybuffer' === r || 'blob' === r || 'json' === r
                      ? V(e.response)
                      : 'text' === r || '' === r || void 0 === r
                        ? V(e.responseText)
                        : void 0
                })(r, e.lastSize)
                if ((n && (e.metrics.rxSize = n), e.sameOrigin)) {
                  var i = r.getResponseHeader('X-NewRelic-App-Data')
                  i &&
                    ((0, R.p)(N.rs, ['Ajax/CrossApplicationTracing/Header/Seen'], void 0, o.K.metrics, t),
                    (e.params.cat = i.split(', ').pop()))
                }
                e.loadCaptureCalled = !0
              }
              t.on('new-xhr', i),
                t.on('open-xhr-start', a),
                t.on('open-xhr-end', s),
                t.on('send-xhr-start', c),
                t.on('xhr-cb-time', u),
                t.on('xhr-load-added', d),
                t.on('xhr-load-removed', l),
                t.on('xhr-resolved', f),
                t.on('addEventListener-end', p),
                t.on('removeEventListener-end', g),
                t.on('fn-end', v),
                t.on('fetch-before-start', b),
                t.on('fetch-start', y),
                t.on('fn-start', m),
                t.on('fetch-done', w)
            })(e, this.ee, this.handler, this.dt),
            this.importAggregator(e)
        }
      }
      function he(e, t) {
        var r = (0, ne.D)(t),
          n = e.params || e
        ;(n.hostname = r.hostname),
          (n.port = r.port),
          (n.protocol = r.protocol),
          (n.host = r.hostname + ':' + r.port),
          (n.pathname = r.pathname),
          (e.parsedOrigin = r),
          (e.sameOrigin = r.sameOrigin)
      }
      const pe = {},
        ge = ['pushState', 'replaceState']
      function me(e) {
        const t = (function (e) {
          return (e || F.ee).get('history')
        })(e)
        return !h.RI || pe[t.debugId]++ || ((pe[t.debugId] = 1), (0, B.YM)(t).inPlace(window.history, ge, '-')), t
      }
      var ve = i(3738)
      const { He: be, bD: ye, d3: we, Kp: Re, TZ: xe, Lc: Te, uP: Ae, Rz: Ee } = ve
      class Se extends v {
        static featureName = xe
        constructor(e, t = !0) {
          super(e, xe, t)
          if (!(0, g.V)(this.agentIdentifier)) return void this.deregisterDrain()
          const r = this.ee
          let n
          me(r),
            (this.eventsEE = (0, G.u)(r)),
            this.eventsEE.on(Ae, function (e, t) {
              this.bstStart = (0, E.t)()
            }),
            this.eventsEE.on(Te, function (e, t) {
              ;(0, R.p)('bst', [e[0], t, this.bstStart, (0, E.t)()], void 0, o.K.sessionTrace, r)
            }),
            r.on(Ee + we, function (e) {
              ;(this.time = (0, E.t)()), (this.startPath = location.pathname + location.hash)
            }),
            r.on(Ee + Re, function (e) {
              ;(0, R.p)(
                'bstHist',
                [location.pathname + location.hash, this.startPath, this.time],
                void 0,
                o.K.sessionTrace,
                r
              )
            })
          try {
            ;(n = new PerformanceObserver((e) => {
              const t = e.getEntries()
              ;(0, R.p)(be, [t], void 0, o.K.sessionTrace, r)
            })),
              n.observe({ type: ye, buffered: !0 })
          } catch (e) {}
          this.importAggregator(e, { resourceObserver: n })
        }
      }
      var Ne = i(2614)
      class Oe extends v {
        static featureName = t.TZ
        #i
        #o
        constructor(e, r = !0) {
          let n
          super(e, t.TZ, r), (this.replayRunning = !1), (this.#o = e)
          try {
            n = JSON.parse(localStorage.getItem(''.concat(Ne.H3, '_').concat(Ne.uh)))
          } catch (e) {}
          ;(0, p.SR)(e.agentIdentifier) && this.ee.on(t.G4.RECORD, () => this.#a()),
            this.#s(n) ? ((this.#i = n?.sessionReplayMode), this.#c()) : this.importAggregator(e),
            this.ee.on('err', (e) => {
              this.replayRunning &&
                ((this.errorNoticed = !0), (0, R.p)(t.G4.ERROR_DURING_REPLAY, [e], void 0, this.featureName, this.ee))
            }),
            this.ee.on(t.G4.REPLAY_RUNNING, (e) => {
              this.replayRunning = e
            })
        }
        #s(e) {
          return (
            (e && (e.sessionReplayMode === Ne.g.FULL || e.sessionReplayMode === Ne.g.ERROR)) ||
            (0, p.Aw)(this.agentIdentifier)
          )
        }
        #u = !1
        async #c(e) {
          if (!this.#u) {
            this.#u = !0
            try {
              const { Recorder: t } = await Promise.all([i.e(478), i.e(249)]).then(i.bind(i, 2496))
              ;(this.recorder ??= new t({
                mode: this.#i,
                agentIdentifier: this.agentIdentifier,
                trigger: e,
                ee: this.ee
              })),
                this.recorder.startRecording(),
                (this.abortHandler = this.recorder.stopRecording)
            } catch (e) {}
            this.importAggregator(this.#o, { recorder: this.recorder, errorNoticed: this.errorNoticed })
          }
        }
        #a() {
          this.featAggregate
            ? this.featAggregate.mode !== Ne.g.FULL && this.featAggregate.initializeRecording(Ne.g.FULL, !0)
            : ((this.#i = Ne.g.FULL),
              this.#c(t.Qb.API),
              this.recorder &&
                this.recorder.parent.mode !== Ne.g.FULL &&
                ((this.recorder.parent.mode = Ne.g.FULL),
                this.recorder.stopRecording(),
                this.recorder.startRecording(),
                (this.abortHandler = this.recorder.stopRecording)))
        }
      }
      var Ie = i(3962)
      class _e extends v {
        static featureName = Ie.TZ
        constructor(e, t = !0) {
          if ((super(e, Ie.TZ, t), !h.RI || !(0, w.dV)().o.MO)) return
          const r = me(this.ee),
            n = (0, G.u)(this.ee),
            i = () => (0, R.p)('newURL', [(0, E.t)(), '' + window.location], void 0, this.featureName, this.ee)
          r.on('pushState-end', i), r.on('replaceState-end', i)
          try {
            this.removeOnAbort = new AbortController()
          } catch (e) {}
          ;(0, T.sp)(
            'popstate',
            (e) => (0, R.p)('newURL', [e.timeStamp, '' + window.location], void 0, this.featureName, this.ee),
            !0,
            this.removeOnAbort?.signal
          )
          let o = !1
          const a = new ((0, w.dV)().o.MO)((e, t) => {
              o ||
                ((o = !0),
                requestAnimationFrame(() => {
                  ;(0, R.p)('newDom', [(0, E.t)()], void 0, this.featureName, this.ee), (o = !1)
                }))
            }),
            s = (0, m.s)(
              (e) => {
                ;(0, R.p)('newUIEvent', [e], void 0, this.featureName, this.ee),
                  a.observe(document.body, { attributes: !0, childList: !0, subtree: !0, characterData: !0 })
              },
              100,
              { leading: !0 }
            )
          n.on('fn-start', ([e]) => {
            Ie.tC.includes(e?.type) && s(e)
          })
          for (let e of Ie.tC) document.addEventListener(e, () => {})
          ;(this.abortHandler = function () {
            this.removeOnAbort?.abort(), a.disconnect(), (this.abortHandler = void 0)
          }),
            this.importAggregator(e, { domObserver: a })
        }
      }
      var je = i(7378)
      const Pe = {},
        Ce = ['appendChild', 'insertBefore', 'replaceChild']
      function ke(e) {
        const t = (function (e) {
          return (e || F.ee).get('jsonp')
        })(e)
        if (!h.RI || Pe[t.debugId]) return t
        Pe[t.debugId] = !0
        var r = (0, B.YM)(t),
          n = /[?&](?:callback|cb)=([^&#]+)/,
          i = /(.*)\.([^.]+)/,
          o = /^(\w+)(\.|$)(.*)$/
        function a(e, t) {
          if (!e) return t
          const r = e.match(o),
            n = r[1]
          return a(r[3], t[n])
        }
        return (
          r.inPlace(Node.prototype, Ce, 'dom-'),
          t.on('dom-start', function (e) {
            !(function (e) {
              if (!e || 'string' != typeof e.nodeName || 'script' !== e.nodeName.toLowerCase()) return
              if ('function' != typeof e.addEventListener) return
              var o = ((s = e.src), (c = s.match(n)), c ? c[1] : null)
              var s, c
              if (!o) return
              var u = (function (e) {
                var t = e.match(i)
                if (t && t.length >= 3) return { key: t[2], parent: a(t[1], window) }
                return { key: e, parent: window }
              })(o)
              if ('function' != typeof u.parent[u.key]) return
              var d = {}
              function l() {
                t.emit('jsonp-end', [], d),
                  e.removeEventListener('load', l, (0, T.jT)(!1)),
                  e.removeEventListener('error', f, (0, T.jT)(!1))
              }
              function f() {
                t.emit('jsonp-error', [], d),
                  t.emit('jsonp-end', [], d),
                  e.removeEventListener('load', l, (0, T.jT)(!1)),
                  e.removeEventListener('error', f, (0, T.jT)(!1))
              }
              r.inPlace(u.parent, [u.key], 'cb-', d),
                e.addEventListener('load', l, (0, T.jT)(!1)),
                e.addEventListener('error', f, (0, T.jT)(!1)),
                t.emit('new-jsonp', [e.src], d)
            })(e[0])
          }),
          t
        )
      }
      const Le = {}
      function He(e) {
        const t = (function (e) {
          return (e || F.ee).get('promise')
        })(e)
        if (Le[t.debugId]) return t
        Le[t.debugId] = !0
        var r = t.context,
          n = (0, B.YM)(t),
          i = h.gm.Promise
        return (
          i &&
            (function () {
              function e(r) {
                var o = t.context(),
                  a = n(r, 'executor-', o, null, !1)
                const s = Reflect.construct(i, [a], e)
                return (
                  (t.context(s).getCtx = function () {
                    return o
                  }),
                  s
                )
              }
              ;(h.gm.Promise = e),
                Object.defineProperty(e, 'name', { value: 'Promise' }),
                (e.toString = function () {
                  return i.toString()
                }),
                Object.setPrototypeOf(e, i),
                ['all', 'race'].forEach(function (r) {
                  const n = i[r]
                  e[r] = function (e) {
                    let i = !1
                    ;[...(e || [])].forEach((e) => {
                      this.resolve(e).then(a('all' === r), a(!1))
                    })
                    const o = n.apply(this, arguments)
                    return o
                    function a(e) {
                      return function () {
                        t.emit('propagate', [null, !i], o, !1, !1), (i = i || !e)
                      }
                    }
                  }
                }),
                ['resolve', 'reject'].forEach(function (r) {
                  const n = i[r]
                  e[r] = function (e) {
                    const r = n.apply(this, arguments)
                    return e !== r && t.emit('propagate', [e, !0], r, !1, !1), r
                  }
                }),
                (e.prototype = i.prototype)
              const o = i.prototype.then
              ;(i.prototype.then = function (...e) {
                var i = this,
                  a = r(i)
                ;(a.promise = i), (e[0] = n(e[0], 'cb-', a, null, !1)), (e[1] = n(e[1], 'cb-', a, null, !1))
                const s = o.apply(this, e)
                return (a.nextPromise = s), t.emit('propagate', [i, !0], s, !1, !1), s
              }),
                (i.prototype.then[B.Jt] = o),
                t.on('executor-start', function (e) {
                  ;(e[0] = n(e[0], 'resolve-', this, null, !1)), (e[1] = n(e[1], 'resolve-', this, null, !1))
                }),
                t.on('executor-err', function (e, t, r) {
                  e[1](r)
                }),
                t.on('cb-end', function (e, r, n) {
                  t.emit('propagate', [n, !0], this.nextPromise, !1, !1)
                }),
                t.on('propagate', function (e, r, n) {
                  ;(this.getCtx && !r) ||
                    (this.getCtx = function () {
                      if (e instanceof Promise) var r = t.context(e)
                      return r && r.getCtx ? r.getCtx() : this
                    })
                })
            })(),
          t
        )
      }
      const De = {},
        Me = 'setTimeout',
        Ke = 'setInterval',
        Ue = 'clearTimeout',
        Ve = '-start',
        Ge = [Me, 'setImmediate', Ke, Ue, 'clearImmediate']
      function Fe(e) {
        const t = (function (e) {
          return (e || F.ee).get('timer')
        })(e)
        if (De[t.debugId]++) return t
        De[t.debugId] = 1
        var r = (0, B.YM)(t)
        return (
          r.inPlace(h.gm, Ge.slice(0, 2), Me + '-'),
          r.inPlace(h.gm, Ge.slice(2, 3), Ke + '-'),
          r.inPlace(h.gm, Ge.slice(3), Ue + '-'),
          t.on(Ke + Ve, function (e, t, n) {
            e[0] = r(e[0], 'fn-', null, n)
          }),
          t.on(Me + Ve, function (e, t, n) {
            ;(this.method = n), (this.timerDuration = isNaN(e[1]) ? 0 : +e[1]), (e[0] = r(e[0], 'fn-', this, n))
          }),
          t
        )
      }
      const Be = {}
      function We(e) {
        const t = (function (e) {
          return (e || F.ee).get('mutation')
        })(e)
        if (!h.RI || Be[t.debugId]) return t
        Be[t.debugId] = !0
        var r = (0, B.YM)(t),
          n = h.gm.MutationObserver
        return (
          n &&
            ((window.MutationObserver = function (e) {
              return this instanceof n ? new n(r(e, 'fn-')) : n.apply(this, arguments)
            }),
            (MutationObserver.prototype = n.prototype)),
          t
        )
      }
      const { TZ: ze, d3: qe, Kp: Ze, $p: Ye, wW: Xe, e5: Je, tH: Qe, uP: $e, rw: et, Lc: tt } = je
      class rt extends v {
        static featureName = ze
        constructor(e, t = !0) {
          if ((super(e, ze, t), !h.RI)) return
          try {
            this.removeOnAbort = new AbortController()
          } catch (e) {}
          let r,
            n = 0
          const i = this.ee.get('tracer'),
            o = ke(this.ee),
            a = He(this.ee),
            s = Fe(this.ee),
            c = q(this.ee),
            u = this.ee.get('events'),
            d = re(this.ee),
            l = me(this.ee),
            f = We(this.ee)
          function p(e, t) {
            l.emit('newURL', ['' + window.location, t])
          }
          function g() {
            n++, (r = window.location.hash), (this[$e] = (0, E.t)())
          }
          function m() {
            n--, window.location.hash !== r && p(0, !0)
            var e = (0, E.t)()
            ;(this[Je] = ~~this[Je] + e - this[$e]), (this[tt] = e)
          }
          function v(e, t) {
            e.on(t, function () {
              this[t] = (0, E.t)()
            })
          }
          this.ee.on($e, g),
            a.on(et, g),
            o.on(et, g),
            this.ee.on(tt, m),
            a.on(Xe, m),
            o.on(Xe, m),
            this.ee.on('fn-err', (...t) => {
              t[2]?.__newrelic?.[e.agentIdentifier] ||
                (0, R.p)('function-err', [...t], void 0, this.featureName, this.ee)
            }),
            this.ee.buffer([$e, tt, 'xhr-resolved'], this.featureName),
            u.buffer([$e], this.featureName),
            s.buffer(['setTimeout' + Ze, 'clearTimeout' + qe, $e], this.featureName),
            c.buffer([$e, 'new-xhr', 'send-xhr' + qe], this.featureName),
            d.buffer([Qe + qe, Qe + '-done', Qe + Ye + qe, Qe + Ye + Ze], this.featureName),
            l.buffer(['newURL'], this.featureName),
            f.buffer([$e], this.featureName),
            a.buffer(['propagate', et, Xe, 'executor-err', 'resolve' + qe], this.featureName),
            i.buffer([$e, 'no-' + $e], this.featureName),
            o.buffer(['new-jsonp', 'cb-start', 'jsonp-error', 'jsonp-end'], this.featureName),
            v(d, Qe + qe),
            v(d, Qe + '-done'),
            v(o, 'new-jsonp'),
            v(o, 'jsonp-end'),
            v(o, 'cb-start'),
            l.on('pushState-end', p),
            l.on('replaceState-end', p),
            window.addEventListener('hashchange', p, (0, T.jT)(!0, this.removeOnAbort?.signal)),
            window.addEventListener('load', p, (0, T.jT)(!0, this.removeOnAbort?.signal)),
            window.addEventListener(
              'popstate',
              function () {
                p(0, n > 1)
              },
              (0, T.jT)(!0, this.removeOnAbort?.signal)
            ),
            (this.abortHandler = this.#n),
            this.importAggregator(e)
        }
        #n() {
          this.removeOnAbort?.abort(), (this.abortHandler = void 0)
        }
      }
      var nt = i(3333)
      class it extends v {
        static featureName = nt.TZ
        constructor(e, t = !0) {
          super(e, nt.TZ, t)
          const r = [e.init.page_action.enabled, e.init.user_actions.enabled]
          h.RI &&
            e.init.user_actions.enabled &&
            (nt.Zp.forEach((e) => (0, T.sp)(e, (e) => (0, R.p)('ua', [e], void 0, this.featureName, this.ee), !0)),
            nt.qN.forEach((e) => (0, T.sp)(e, (e) => (0, R.p)('ua', [e], void 0, this.featureName, this.ee)))),
            r.some((e) => e) ? this.importAggregator(e) : this.deregisterDrain()
        }
      }
      var ot = i(993),
        at = i(3785)
      class st extends v {
        static featureName = ot.TZ
        constructor(e, t = !0) {
          super(e, ot.TZ, t)
          const r = this.ee
          this.ee.on('wrap-logger-end', function ([e]) {
            const { level: t, customAttributes: n } = this
            ;(0, at.R)(r, e, n, t)
          }),
            this.importAggregator(e)
        }
      }
      new (class extends n {
        constructor(t, r) {
          super(r),
            h.gm
              ? ((this.features = {}),
                (0, w.bQ)(this.agentIdentifier, this),
                (this.desiredFeatures = new Set(t.features || [])),
                this.desiredFeatures.add(y),
                (this.runSoftNavOverSpa = [...this.desiredFeatures].some((e) => e.featureName === o.K.softNav)),
                (0, u.j)(this, t, t.loaderType || 'agent'),
                this.run())
              : (0, e.R)(21)
        }
        get config() {
          return { info: this.info, init: this.init, loader_config: this.loader_config, runtime: this.runtime }
        }
        run() {
          try {
            const t = c(this.agentIdentifier),
              r = [...this.desiredFeatures]
            r.sort((e, t) => o.P[e.featureName] - o.P[t.featureName]),
              r.forEach((r) => {
                if (!t[r.featureName] && r.featureName !== o.K.pageViewEvent) return
                if (this.runSoftNavOverSpa && r.featureName === o.K.spa) return
                if (!this.runSoftNavOverSpa && r.featureName === o.K.softNav) return
                const n = (function (e) {
                  switch (e) {
                    case o.K.ajax:
                      return [o.K.jserrors]
                    case o.K.sessionTrace:
                      return [o.K.ajax, o.K.pageViewEvent]
                    case o.K.sessionReplay:
                      return [o.K.sessionTrace]
                    case o.K.pageViewTiming:
                      return [o.K.pageViewEvent]
                    default:
                      return []
                  }
                })(r.featureName).filter((e) => !(e in this.features))
                n.length > 0 && (0, e.R)(36, { targetFeature: r.featureName, missingDependencies: n }),
                  (this.features[r.featureName] = new r(this))
              })
          } catch (t) {
            ;(0, e.R)(22, t)
            for (const e in this.features) this.features[e].abortHandler?.()
            const r = (0, w.Zm)()
            delete r.initializedAgents[this.agentIdentifier]?.api,
              delete r.initializedAgents[this.agentIdentifier]?.features,
              delete this.sharedAggregator
            return r.ee.get(this.agentIdentifier).abort(), !1
          }
        }
      })({ features: [fe, y, S, Se, Oe, O, H, it, st, _e, rt], loaderType: 'spa' })
    })()
})()
