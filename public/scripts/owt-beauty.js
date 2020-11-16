/*
 * Intel WebRTC SDK version 4.3.1
 * Copyright (c) 2020 Intel <http://webrtc.intel.com>
 * Homepage: http://webrtc.intel.com
 */
! function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Owt = e()
    }
}(function() {
    return function() {
        return function e(t, n, r) {
            function i(a, s) {
                if (!n[a]) {
                    if (!t[a]) {
                        var c = "function" == typeof require && require;
                        if (!s && c) return c(a, !0);
                        if (o) return o(a, !0);
                        var u = new Error("Cannot find module '" + a + "'");
                        throw u.code = "MODULE_NOT_FOUND", u
                    }
                    var d = n[a] = {
                        exports: {}
                    };
                    t[a][0].call(d.exports, function(e) {
                        return i(t[a][1][e] || e)
                    }, d, d.exports, e, t, n, r)
                }
                return n[a].exports
            }
            for (var o = "function" == typeof require && require, a = 0; a < r.length; a++) i(r[a]);
            return i
        }
    }()({
        1: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.Base64 = void 0;
            var r = function() {
                var e, t, n, r = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/"],
                    i = [];
                for (n = 0; n < r.length; n += 1) i[r[n]] = n;
                var o = function(n) {
                        e = n, t = 0
                    },
                    a = function() {
                        if (!e) return -1;
                        if (t >= e.length) return -1;
                        var n = 255 & e.charCodeAt(t);
                        return t += 1, n
                    },
                    s = function() {
                        if (!e) return -1;
                        for (;;) {
                            if (t >= e.length) return -1;
                            var n = e.charAt(t);
                            if (t += 1, i[n]) return i[n];
                            if ("A" === n) return 0
                        }
                    },
                    c = function(e) {
                        return 1 === (e = e.toString(16)).length && (e = "0" + e), e = "%" + e, unescape(e)
                    };
                return {
                    encodeBase64: function(e) {
                        var t, n;
                        o(e), t = "";
                        var i = new Array(3);
                        for (n = !1; !n && -1 !== (i[0] = a());) i[1] = a(), i[2] = a(), t += r[i[0] >> 2], -1 !== i[1] ? (t += r[i[0] << 4 & 48 | i[1] >> 4], -1 !== i[2] ? (t += r[i[1] << 2 & 60 | i[2] >> 6], t += r[63 & i[2]]) : (t += r[i[1] << 2 & 60], t += "=", n = !0)) : (t += r[i[0] << 4 & 48], t += "=", t += "=", n = !0);
                        return t
                    },
                    decodeBase64: function(e) {
                        var t, n;
                        o(e), t = "";
                        var r = new Array(4);
                        for (n = !1; !n && -1 !== (r[0] = s()) && -1 !== (r[1] = s());) r[2] = s(), r[3] = s(), t += c(r[0] << 2 & 255 | r[1] >> 4), -1 !== r[2] ? (t += c(r[1] << 4 & 255 | r[2] >> 2), -1 !== r[3] ? t += c(r[2] << 6 & 255 | r[3]) : n = !0) : n = !0;
                        return t
                    }
                }
            }();
            n.Base64 = r
        }, {}],
        2: [function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.VideoEncodingParameters = n.VideoCodecParameters = n.VideoCodec = n.AudioEncodingParameters = n.AudioCodecParameters = n.AudioCodec = void 0;
            n.AudioCodec = {
                PCMU: "pcmu",
                PCMA: "pcma",
                OPUS: "opus",
                G722: "g722",
                ISAC: "iSAC",
                ILBC: "iLBC",
                AAC: "aac",
                AC3: "ac3",
                NELLYMOSER: "nellymoser"
            };
            n.AudioCodecParameters = function e(t, n, i) {
                r(this, e), this.name = t, this.channelCount = n, this.clockRate = i
            };
            n.AudioEncodingParameters = function e(t, n) {
                r(this, e), this.codec = t, this.maxBitrate = n
            };
            n.VideoCodec = {
                VP8: "vp8",
                VP9: "vp9",
                H264: "h264",
                H265: "h265"
            };
            n.VideoCodecParameters = function e(t, n) {
                r(this, e), this.name = t, this.profile = n
            };
            n.VideoEncodingParameters = function e(t, n) {
                r(this, e), this.codec = t, this.maxBitrate = n
            }
        }, {}],
        3: [function(e, t, n) {
            "use strict";

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function i(e, t) {
                return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function o(e) {
                return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && s(e, t)
            }

            function s(e, t) {
                return (s = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.MuteEvent = n.ErrorEvent = n.MessageEvent = n.OwtEvent = n.EventDispatcher = void 0;
            n.EventDispatcher = function() {
                var e = {
                    dispatcher: {}
                };
                e.dispatcher.eventListeners = {}, this.addEventListener = function(t, n) {
                    void 0 === e.dispatcher.eventListeners[t] && (e.dispatcher.eventListeners[t] = []), e.dispatcher.eventListeners[t].push(n)
                }, this.removeEventListener = function(t, n) {
                    if (e.dispatcher.eventListeners[t]) {
                        var r = e.dispatcher.eventListeners[t].indexOf(n); - 1 !== r && e.dispatcher.eventListeners[t].splice(r, 1)
                    }
                }, this.clearEventListener = function(t) {
                    e.dispatcher.eventListeners[t] = []
                }, this.dispatchEvent = function(t) {
                    e.dispatcher.eventListeners[t.type] && e.dispatcher.eventListeners[t.type].map(function(e) {
                        e(t)
                    })
                }
            };
            var u = function e(t) {
                c(this, e), this.type = t
            };
            n.OwtEvent = u;
            var d = function(e) {
                function t(e, n) {
                    var r;
                    return c(this, t), (r = i(this, o(t).call(this, e))).origin = n.origin, r.message = n.message, r.to = n.to, r
                }
                return a(t, u), t
            }();
            n.MessageEvent = d;
            var l = function(e) {
                function t(e, n) {
                    var r;
                    return c(this, t), (r = i(this, o(t).call(this, e))).error = n.error, r
                }
                return a(t, u), t
            }();
            n.ErrorEvent = l;
            var f = function(e) {
                function t(e, n) {
                    var r;
                    return c(this, t), (r = i(this, o(t).call(this, e))).kind = n.kind, r
                }
                return a(t, u), t
            }();
            n.MuteEvent = f
        }, {}],
        4: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var r = e("./mediastream-factory.js");
            Object.keys(r).forEach(function(e) {
                "default" !== e && "__esModule" !== e && Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return r[e]
                    }
                })
            });
            var i = e("./stream.js");
            Object.keys(i).forEach(function(e) {
                "default" !== e && "__esModule" !== e && Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return i[e]
                    }
                })
            });
            var o = e("./mediaformat.js");
            Object.keys(o).forEach(function(e) {
                "default" !== e && "__esModule" !== e && Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return o[e]
                    }
                })
            })
        }, {
            "./mediaformat.js": 6,
            "./mediastream-factory.js": 7,
            "./stream.js": 10
        }],
        5: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r = function() {
                var e = function() {},
                    t = {
                        DEBUG: 0,
                        TRACE: 1,
                        INFO: 2,
                        WARNING: 3,
                        ERROR: 4,
                        NONE: 5
                    };
                t.log = window.console.log.bind(window.console);
                var n = function(e) {
                        return "function" == typeof window.console[e] ? window.console[e].bind(window.console) : window.console.log.bind(window.console)
                    },
                    r = function(r) {
                        t.debug = r <= 0 ? n("log") : e, t.trace = r <= 1 ? n("trace") : e, t.info = r <= 2 ? n("info") : e, t.warning = r <= 3 ? n("warn") : e, t.error = r <= 4 ? n("error") : e
                    };
                return r(0), t.setLogLevel = r, t
            }();
            n.default = r
        }, {}],
        6: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.Resolution = n.TrackKind = n.VideoSourceInfo = n.AudioSourceInfo = void 0;
            n.AudioSourceInfo = {
                MIC: "mic",
                SCREENCAST: "screen-cast",
                FILE: "file",
                MIXED: "mixed"
            };
            n.VideoSourceInfo = {
                CAMERA: "camera",
                SCREENCAST: "screen-cast",
                FILE: "file",
                MIXED: "mixed"
            };
            n.TrackKind = {
                AUDIO: "audio",
                VIDEO: "video",
                AUDIO_AND_VIDEO: "av"
            };
            n.Resolution = function e(t, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.width = t, this.height = n
            }
        }, {}],
        7: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.MediaStreamFactory = n.StreamConstraints = n.VideoTrackConstraints = n.AudioTrackConstraints = void 0;
            var r, i = a(e("./utils.js")),
                o = ((r = e("./logger.js")) && r.__esModule, a(e("./mediaformat.js")));

            function a(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                        } return t.default = e, t
            }

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function c(e) {
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            n.AudioTrackConstraints = function e(t) {
                if (u(this, e), !Object.values(o.AudioSourceInfo).some(function(e) {
                        return e === t
                    })) throw new TypeError("Invalid source.");
                this.source = t, this.deviceId = void 0
            };
            n.VideoTrackConstraints = function e(t) {
                if (u(this, e), !Object.values(o.VideoSourceInfo).some(function(e) {
                        return e === t
                    })) throw new TypeError("Invalid source.");
                this.source = t, this.deviceId = void 0, this.resolution = void 0, this.frameRate = void 0
            };

            function d(e) {
                return "object" === c(e.video) && e.video.source === o.VideoSourceInfo.SCREENCAST
            }
            n.StreamConstraints = function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                u(this, e), this.audio = t, this.video = n
            };
            var l = function() {
                function e() {
                    u(this, e)
                }
                var t, n, r;
                return t = e, r = [{
                    key: "createMediaStream",
                    value: function(e) {
                        if ("object" !== c(e) || !e.audio && !e.video) return Promise.reject(new TypeError("Invalid constrains"));
                        if (!d(e) && "object" === c(e.audio) && e.audio.source === o.AudioSourceInfo.SCREENCAST) return Promise.reject(new TypeError("Cannot share screen without video."));
                        if (d(e) && "object" === c(e.audio) && e.audio.source !== o.AudioSourceInfo.SCREENCAST) return Promise.reject(new TypeError("Cannot capture video from screen cast while capture audio from other source."));
                        if (!e.audio && !e.video) return Promise.reject(new TypeError("At least one of audio and video must be requested."));
                        var t = Object.create({});
                        return "object" === c(e.audio) && e.audio.source === o.AudioSourceInfo.MIC ? (t.audio = Object.create({}), i.isEdge() ? t.audio.deviceId = e.audio.deviceId : t.audio.deviceId = {
                            exact: e.audio.deviceId
                        }) : e.audio.source === o.AudioSourceInfo.SCREENCAST ? t.audio = !0 : t.audio = e.audio, "object" === c(e.video) ? (t.video = Object.create({}), "number" == typeof e.video.frameRate && (t.video.frameRate = e.video.frameRate), e.video.resolution && e.video.resolution.width && e.video.resolution.height && (e.video.source === o.VideoSourceInfo.SCREENCAST ? (t.video.width = e.video.resolution.width, t.video.height = e.video.resolution.height) : (t.video.width = Object.create({}), t.video.width.exact = e.video.resolution.width, t.video.height = Object.create({}), t.video.height.exact = e.video.resolution.height)), "string" == typeof e.video.deviceId && (t.video.deviceId = {
                            exact: e.video.deviceId
                        }), i.isFirefox() && e.video.source === o.VideoSourceInfo.SCREENCAST && (t.video.mediaSource = "screen")) : t.video = e.video, d(e) ? navigator.mediaDevices.getDisplayMedia(t) : navigator.mediaDevices.getUserMedia(t)
                    }
                }], (n = null) && s(t.prototype, n), r && s(t, r), e
            }();
            n.MediaStreamFactory = l
        }, {
            "./logger.js": 5,
            "./mediaformat.js": 6,
            "./utils.js": 11
        }],
        8: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.PublishOptions = n.Publication = n.PublicationSettings = n.VideoPublicationSettings = n.AudioPublicationSettings = void 0;
            var r = o(e("./utils.js")),
                i = (o(e("./mediaformat.js")), e("../base/event.js"));

            function o(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                        } return t.default = e, t
            }

            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function s(e) {
                return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function c(e, t) {
                return (c = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function u(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            n.AudioPublicationSettings = function e(t) {
                d(this, e), this.codec = t
            };
            n.VideoPublicationSettings = function e(t, n, r, i, o, a) {
                d(this, e), this.codec = t, this.resolution = n, this.frameRate = r, this.bitrate = i, this.keyFrameInterval = o, this.rid = a
            };
            n.PublicationSettings = function e(t, n) {
                d(this, e), this.audio = t, this.video = n
            };
            var l = function(e) {
                function t(e, n, i, o, c) {
                    var l, f, p;
                    return d(this, t), f = this, l = !(p = s(t).call(this)) || "object" !== a(p) && "function" != typeof p ? u(f) : p, Object.defineProperty(u(u(l)), "id", {
                        configurable: !1,
                        writable: !1,
                        value: e || r.createUuid()
                    }), l.stop = n, l.getStats = i, l.mute = o, l.unmute = c, l
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && c(e, t)
                }(t, i.EventDispatcher), t
            }();
            n.Publication = l;
            n.PublishOptions = function e(t, n) {
                d(this, e), this.audio = t, this.video = n
            }
        }, {
            "../base/event.js": 3,
            "./mediaformat.js": 6,
            "./utils.js": 11
        }],
        9: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.reorderCodecs = function(e, t, n) {
                if (!n || 0 === n.length) return e;
                n = "audio" === t ? n.concat(l) : n.concat(f);
                var r = e.split("\r\n"),
                    i = c(r, "m=", t);
                if (null === i) return e;
                var a = r[i].split(" ");
                a.splice(0, 3);
                var s = [],
                    h = !0,
                    v = !1,
                    m = void 0;
                try {
                    for (var _, b = n[Symbol.iterator](); !(h = (_ = b.next()).done); h = !0)
                        for (var g = _.value, y = 0; y < r.length; y++) {
                            var S = u(r, y, -1, "a=rtpmap", g);
                            if (null !== S) {
                                var P = d(r[S]);
                                P && (s.push(P), y = S)
                            }
                        }
                } catch (e) {
                    v = !0, m = e
                } finally {
                    try {
                        h || null == b.return || b.return()
                    } finally {
                        if (v) throw m
                    }
                }
                s = function(e, t) {
                    var n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var a, s = t[Symbol.iterator](); !(n = (a = s.next()).done); n = !0) {
                            var u = a.value,
                                d = c(e, "a=fmtp", "apt=" + u);
                            if (null !== d) {
                                var l = o(e[d]);
                                t.push(l.pt)
                            }
                        }
                    } catch (e) {
                        r = !0, i = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return t
                }(r, s), r[i] = function(e, t) {
                    var n = e.split(" ").slice(0, 3);
                    return (n = n.concat(t)).join(" ")
                }(r[i], s);
                var w = !0,
                    O = !1,
                    E = void 0;
                try {
                    for (var j, C = a[Symbol.iterator](); !(w = (j = C.next()).done); w = !0) {
                        var T = j.value; - 1 === s.indexOf(T) && (r = p(r, T))
                    }
                } catch (e) {
                    O = !0, E = e
                } finally {
                    try {
                        w || null == C.return || C.return()
                    } finally {
                        if (O) throw E
                    }
                }
                return e = r.join("\r\n")
            }, n.addLegacySimulcast = function(e, t, n) {
                var r, i;
                if (!(n && n > 1)) return e;
                var o = e.split("\r\n"),
                    a = c(o, "m=", t);
                if (null === a) return e;
                var s = u(o, a + 1, -1, "m=");
                null === s && (s = o.length);
                var d = function(e) {
                        var t = e.split(" "),
                            n = t[0].split(":")[1];
                        return n
                    },
                    l = new Set,
                    f = new Set,
                    p = new Set,
                    h = [],
                    v = [],
                    m = a + 1;
                for (; m < s;) {
                    var _ = o[m];
                    if ("" === _) break;
                    if (_.indexOf("a=ssrc:") > -1) {
                        var b = d(o[m]);
                        if (f.add(b), _.indexOf("cname") > -1 || _.indexOf("msid") > -1)
                            for (var g = 1; g < n; g++) {
                                var y = parseInt(b) + g + "";
                                h.push(_.replace(b, y))
                            } else l.add(_)
                    }
                    if (_.indexOf("a=ssrc-group:FID") > -1) {
                        var S = _.split(" ");
                        p.add(S[2]);
                        for (var P = 1; P < n; P++) {
                            var w = parseInt(S[1]) + P + "",
                                O = parseInt(S[2]) + P + "";
                            v.push(_.replace(S[1], w).replace(S[2], O))
                        }
                    }
                    m++
                }
                var E = m;
                return f.forEach(function(e) {
                    if (!p.has(e)) {
                        var t = "a=ssrc-group:SIM";
                        t = t + " " + e;
                        for (var r = 1; r < n; r++) t = t + " " + (parseInt(e) + r);
                        v.push(t)
                    }
                }), h.sort(), (r = o).splice.apply(r, [E, 0].concat(v)), (i = o).splice.apply(i, [E, 0].concat(h)), o = o.filter(function(e) {
                    return !l.has(e)
                }), e = o.join("\r\n")
            }, n.setMaxBitrate = function(e, t) {
                var n = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var a, s = t[Symbol.iterator](); !(n = (a = s.next()).done); n = !0) {
                        var c = a.value;
                        c.maxBitrate && (e = i(e, c.codec.name, "x-google-max-bitrate", c.maxBitrate.toString()))
                    }
                } catch (e) {
                    r = !0, o = e
                } finally {
                    try {
                        n || null == s.return || s.return()
                    } finally {
                        if (r) throw o
                    }
                }
                return e
            };
            var r;
            (r = e("./logger.js")) && r.__esModule;

            function i(e, t, n, r) {
                var i = e.split("\r\n");
                i.length <= 1 && (i = e.split("\n"));
                var u = s(i, t),
                    l = {};
                if (null === u) {
                    var f = c(i, "a=rtpmap", t);
                    if (null === f) return e;
                    var p = d(i[f]);
                    l.pt = p.toString(), l.params = {}, l.params[n] = r, i.splice(f + 1, 0, a(l))
                } else(l = o(i[u])).params[n] = r, i[u] = a(l);
                return e = i.join("\r\n")
            }

            function o(e) {
                var t = {},
                    n = e.indexOf(" "),
                    r = e.substring(n + 1).split(";"),
                    i = new RegExp("a=fmtp:(\\d+)"),
                    o = e.match(i);
                if (!o || 2 !== o.length) return null;
                t.pt = o[1];
                for (var a = {}, s = 0; s < r.length; ++s) {
                    var c = r[s].split("=");
                    2 === c.length && (a[c[0]] = c[1])
                }
                return t.params = a, t
            }

            function a(e) {
                if (!e.hasOwnProperty("pt") || !e.hasOwnProperty("params")) return null;
                var t = e.pt,
                    n = e.params,
                    r = [],
                    i = 0;
                for (var o in n) r[i] = o + "=" + n[o], ++i;
                return 0 === i ? null : "a=fmtp:" + t.toString() + " " + r.join(";")
            }

            function s(e, t) {
                var n = function(e, t) {
                    var n = c(e, "a=rtpmap", t);
                    return n ? d(e[n]) : null
                }(e, t);
                return n ? c(e, "a=fmtp:" + n.toString()) : null
            }

            function c(e, t, n) {
                return u(e, 0, -1, t, n)
            }

            function u(e, t, n, r, i) {
                for (var o = -1 !== n ? n : e.length, a = t; a < o; ++a)
                    if (0 === e[a].indexOf(r) && (!i || -1 !== e[a].toLowerCase().indexOf(i.toLowerCase()))) return a;
                return null
            }

            function d(e) {
                var t = new RegExp("a=rtpmap:(\\d+) [a-zA-Z0-9-]+\\/\\d+"),
                    n = e.match(t);
                return n && 2 === n.length ? n[1] : null
            }
            var l = ["CN", "telephone-event"],
                f = ["red", "ulpfec"];

            function p(e, t) {
                for (var n = new RegExp("a=(rtpmap|rtcp-fb|fmtp):" + t + "\\s"), r = e.length - 1; r > 0; r--) e[r].match(n) && e.splice(r, 1);
                return e
            }
        }, {
            "./logger.js": 5
        }],
        10: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.StreamEvent = n.RemoteStream = n.LocalStream = n.Stream = n.StreamSourceInfo = void 0;
            (r = e("./logger.js")) && r.__esModule;
            var r, i = e("./event.js"),
                o = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e)
                            if (Object.prototype.hasOwnProperty.call(e, n)) {
                                var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                                r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                            } return t.default = e, t
                }(e("./utils.js"));

            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function s(e, t) {
                return !t || "object" !== a(t) && "function" != typeof t ? l(e) : t
            }

            function c(e) {
                return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function u(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && d(e, t)
            }

            function d(e, t) {
                return (d = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function l(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, t) {
                return t.some(function(t) {
                    return t === e
                })
            }
            n.StreamSourceInfo = function e(t, n) {
                if (f(this, e), !p(t, [void 0, "mic", "screen-cast", "file", "mixed"])) throw new TypeError("Incorrect value for audioSourceInfo");
                if (!p(n, [void 0, "camera", "screen-cast", "file", "encoded-file", "raw-file", "mixed"])) throw new TypeError("Incorrect value for videoSourceInfo");
                this.audio = t, this.video = n
            };
            var h = function(e) {
                function t(e, n, r) {
                    var i;
                    if (f(this, t), i = s(this, c(t).call(this)), e && !(e instanceof MediaStream) || "object" !== a(n)) throw new TypeError("Invalid stream or sourceInfo.");
                    if (e && (e.getAudioTracks().length > 0 && !n.audio || e.getVideoTracks().length > 0 && !n.video)) throw new TypeError("Missing audio source info or video source info.");
                    return Object.defineProperty(l(l(i)), "mediaStream", {
                        configurable: !1,
                        writable: !0,
                        value: e
                    }), Object.defineProperty(l(l(i)), "source", {
                        configurable: !1,
                        writable: !1,
                        value: n
                    }), Object.defineProperty(l(l(i)), "attributes", {
                        configurable: !0,
                        writable: !1,
                        value: r
                    }), i
                }
                return u(t, i.EventDispatcher), t
            }();
            n.Stream = h;
            var v = function(e) {
                function t(e, n, r) {
                    var i;
                    if (f(this, t), !(e instanceof MediaStream)) throw new TypeError("Invalid stream.");
                    return i = s(this, c(t).call(this, e, n, r)), Object.defineProperty(l(l(i)), "id", {
                        configurable: !1,
                        writable: !1,
                        value: o.createUuid()
                    }), i
                }
                return u(t, h), t
            }();
            n.LocalStream = v;
            var m = function(e) {
                function t(e, n, r, i, a) {
                    var u;
                    return f(this, t), u = s(this, c(t).call(this, r, i, a)), Object.defineProperty(l(l(u)), "id", {
                        configurable: !1,
                        writable: !1,
                        value: e || o.createUuid()
                    }), Object.defineProperty(l(l(u)), "origin", {
                        configurable: !1,
                        writable: !1,
                        value: n
                    }), u.settings = void 0, u.extraCapabilities = void 0, u
                }
                return u(t, h), t
            }();
            n.RemoteStream = m;
            var _ = function(e) {
                function t(e, n) {
                    var r;
                    return f(this, t), (r = s(this, c(t).call(this, e))).stream = n.stream, r
                }
                return u(t, i.OwtEvent), t
            }();
            n.StreamEvent = _
        }, {
            "./event.js": 3,
            "./logger.js": 5,
            "./utils.js": 11
        }],
        11: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.isFirefox = function() {
                return null !== window.navigator.userAgent.match("Firefox")
            }, n.isChrome = function() {
                return null !== window.navigator.userAgent.match("Chrome")
            }, n.isSafari = i, n.isEdge = function() {
                return null !== window.navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)
            }, n.createUuid = function() {
                return "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                    var t = 16 * Math.random() | 0,
                        n = "x" === e ? t : 3 & t | 8;
                    return n.toString(16)
                })
            }, n.sysInfo = function() {
                var e = Object.create({});
                e.sdk = {
                    version: r,
                    type: "JavaScript"
                };
                var t = navigator.userAgent,
                    n = /Chrome\/([0-9\.]+)/.exec(t);
                n ? e.runtime = {
                    name: "Chrome",
                    version: n[1]
                } : (n = /Firefox\/([0-9\.]+)/.exec(t)) ? e.runtime = {
                    name: "Firefox",
                    version: n[1]
                } : (n = /Edge\/([0-9\.]+)/.exec(t)) ? e.runtime = {
                    name: "Edge",
                    version: n[1]
                } : i() ? (n = /Version\/([0-9\.]+) Safari/.exec(t), e.runtime = {
                    name: "Safari"
                }, e.runtime.version = n ? n[1] : "Unknown") : e.runtime = {
                    name: "Unknown",
                    version: "Unknown"
                };
                (n = /Windows NT ([0-9\.]+)/.exec(t)) ? e.os = {
                    name: "Windows NT",
                    version: n[1]
                }: (n = /Intel Mac OS X ([0-9_\.]+)/.exec(t)) ? e.os = {
                    name: "Mac OS X",
                    version: n[1].replace(/_/g, ".")
                } : (n = /iPhone OS ([0-9_\.]+)/.exec(t)) ? e.os = {
                    name: "iPhone OS",
                    version: n[1].replace(/_/g, ".")
                } : (n = /X11; Linux/.exec(t)) ? e.os = {
                    name: "Linux",
                    version: "Unknown"
                } : (n = /Android( ([0-9\.]+))?/.exec(t)) ? e.os = {
                    name: "Android",
                    version: n[1] || "Unknown"
                } : (n = /CrOS/.exec(t)) ? e.os = {
                    name: "Chrome OS",
                    version: "Unknown"
                } : e.os = {
                    name: "Unknown",
                    version: "Unknown"
                };
                return e.capabilities = {
                    continualIceGathering: !1,
                    unifiedPlan: !0,
                    streamRemovable: "Firefox" !== e.runtime.name
                }, e
            };
            var r = "4.3.1";

            function i() {
                return /^((?!chrome|android).)*safari/i.test(window.navigator.userAgent)
            }
        }, {}],
        12: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.ConferencePeerConnectionChannel = void 0;
            var r, i = (r = e("../base/logger.js")) && r.__esModule ? r : {
                    default: r
                },
                o = e("../base/event.js"),
                a = e("../base/mediaformat.js"),
                s = e("../base/publication.js"),
                c = e("./subscription.js"),
                u = e("./error.js"),
                d = f(e("../base/utils.js")),
                l = f(e("../base/sdputils.js"));

            function f(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                        } return t.default = e, t
            }

            function p(e) {
                return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function h(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function v(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function m(e) {
                return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function _(e, t) {
                return (_ = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var b = function(e) {
                function t(e, n) {
                    var r;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), (r = v(this, m(t).call(this)))._config = e, r._options = null, r._videoCodecs = void 0, r._signaling = n, r._pc = null, r._internalId = null, r._pendingCandidates = [], r._subscribePromise = null, r._publishPromise = null, r._subscribedStream = null, r._publishedStream = null, r._publication = null, r._subscription = null, r._disconnectTimer = null, r._ended = !1, r._stopped = !1, r
                }
                var n, r, f;
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && _(e, t)
                }(t, o.EventDispatcher), n = t, (r = [{
                    key: "onMessage",
                    value: function(e, t) {
                        switch (e) {
                            case "progress":
                                "soac" === t.status ? this._sdpHandler(t.data) : "ready" === t.status ? this._readyHandler() : "error" === t.status && this._errorHandler(t.data);
                                break;
                            case "stream":
                                this._onStreamEvent(t);
                                break;
                            default:
                                i.default.warning("Unknown notification from MCU.")
                        }
                    }
                }, {
                    key: "publish",
                    value: function(e, t, n) {
                        var r = this;
                        if (void 0 === t && (t = {
                                audio: !!e.mediaStream.getAudioTracks().length,
                                video: !!e.mediaStream.getVideoTracks().length
                            }), "object" !== p(t)) return Promise.reject(new TypeError("Options should be an object."));
                        if (this._isRtpEncodingParameters(t.audio) && this._isOwtEncodingParameters(t.video) || this._isOwtEncodingParameters(t.audio) && this._isRtpEncodingParameters(t.video)) return Promise.reject(new u.ConferenceError("Mixing RTCRtpEncodingParameters and AudioEncodingParameters/VideoEncodingParameters is not allowed."));
                        if (void 0 === t.audio && (t.audio = !!e.mediaStream.getAudioTracks().length), void 0 === t.video && (t.video = !!e.mediaStream.getVideoTracks().length), t.audio && !e.mediaStream.getAudioTracks().length || t.video && !e.mediaStream.getVideoTracks().length) return Promise.reject(new u.ConferenceError("options.audio/video is inconsistent with tracks presented in the MediaStream."));
                        if (!(!1 !== t.audio && null !== t.audio || !1 !== t.video && null !== t.video)) return Promise.reject(new u.ConferenceError("Cannot publish a stream without audio and video."));
                        if ("object" === p(t.audio)) {
                            if (!Array.isArray(t.audio)) return Promise.reject(new TypeError("options.audio should be a boolean or an array."));
                            var a = !0,
                                s = !1,
                                c = void 0;
                            try {
                                for (var l, f = t.audio[Symbol.iterator](); !(a = (l = f.next()).done); a = !0) {
                                    var h = l.value;
                                    if (!h.codec || "string" != typeof h.codec.name || void 0 !== h.maxBitrate && "number" != typeof h.maxBitrate) return Promise.reject(new TypeError("options.audio has incorrect parameters."))
                                }
                            } catch (e) {
                                s = !0, c = e
                            } finally {
                                try {
                                    a || null == f.return || f.return()
                                } finally {
                                    if (s) throw c
                                }
                            }
                        }
                        if ("object" === p(t.video) && !Array.isArray(t.video)) return Promise.reject(new TypeError("options.video should be a boolean or an array."));
                        if (this._isOwtEncodingParameters(t.video)) {
                            var v = !0,
                                m = !1,
                                _ = void 0;
                            try {
                                for (var b, g = t.video[Symbol.iterator](); !(v = (b = g.next()).done); v = !0) {
                                    var y = b.value;
                                    if (!y.codec || "string" != typeof y.codec.name || void 0 !== y.maxBitrate && "number" != typeof y.maxBitrate || void 0 !== y.codec.profile && "string" != typeof y.codec.profile) return Promise.reject(new TypeError("options.video has incorrect parameters."))
                                }
                            } catch (e) {
                                m = !0, _ = e
                            } finally {
                                try {
                                    v || null == g.return || g.return()
                                } finally {
                                    if (m) throw _
                                }
                            }
                        }
                        this._options = t;
                        var S = {};
                        if (this._createPeerConnection(), e.mediaStream.getAudioTracks().length > 0 && !1 !== t.audio && null !== t.audio) {
                            if (e.mediaStream.getAudioTracks().length > 1 && i.default.warning("Publishing a stream with multiple audio tracks is not fully supported."), "boolean" != typeof t.audio && "object" !== p(t.audio)) return Promise.reject(new u.ConferenceError("Type of audio options should be boolean or an object."));
                            S.audio = {}, S.audio.source = e.source.audio
                        } else S.audio = !1;
                        if (e.mediaStream.getVideoTracks().length > 0 && !1 !== t.video && null !== t.video) {
                            e.mediaStream.getVideoTracks().length > 1 && i.default.warning("Publishing a stream with multiple video tracks is not fully supported."), S.video = {}, S.video.source = e.source.video;
                            var P = e.mediaStream.getVideoTracks()[0].getSettings();
                            S.video.parameters = {
                                resolution: {
                                    width: P.width,
                                    height: P.height
                                },
                                framerate: P.frameRate
                            }
                        } else S.video = !1;
                        return this._publishedStream = e, this._signaling.sendSignalingMessage("publish", {
                            media: S,
                            attributes: e.attributes
                        }).then(function(i) {
                            var a = new o.MessageEvent("id", {
                                message: i.id,
                                origin: r._remoteId
                            });
                            r.dispatchEvent(a), r._internalId = i.id;
                            var s = {};
                            if ("function" == typeof r._pc.addTransceiver) {
                                var c = Promise.resolve();
                                if (S.audio && e.mediaStream.getAudioTracks().length > 0) {
                                    var u = {
                                        direction: "sendonly"
                                    };
                                    r._isRtpEncodingParameters(t.audio) && (u.sendEncodings = t.audio);
                                    var l = r._pc.addTransceiver(e.mediaStream.getAudioTracks()[0], u);
                                    if (d.isFirefox()) {
                                        var f = l.sender.getParameters();
                                        f.encodings = u.sendEncodings, c = l.sender.setParameters(f)
                                    }
                                }
                                if (S.video && e.mediaStream.getVideoTracks().length > 0) {
                                    var p = {
                                        direction: "sendonly"
                                    };
                                    r._isRtpEncodingParameters(t.video) && (p.sendEncodings = t.video, r._videoCodecs = n);
                                    var h = r._pc.addTransceiver(e.mediaStream.getVideoTracks()[0], p);
                                    if (d.isFirefox()) {
                                        var v = h.sender.getParameters();
                                        v.encodings = p.sendEncodings, c = c.then(function() {
                                            return h.sender.setParameters(v)
                                        })
                                    }
                                }
                                return c.then(function() {
                                    return s
                                })
                            }
                            if (S.audio && e.mediaStream.getAudioTracks().length > 0) {
                                var m = !0,
                                    _ = !1,
                                    b = void 0;
                                try {
                                    for (var g, y = e.mediaStream.getAudioTracks()[Symbol.iterator](); !(m = (g = y.next()).done); m = !0) {
                                        var P = g.value;
                                        r._pc.addTrack(P, e.mediaStream)
                                    }
                                } catch (e) {
                                    _ = !0, b = e
                                } finally {
                                    try {
                                        m || null == y.return || y.return()
                                    } finally {
                                        if (_) throw b
                                    }
                                }
                            }
                            if (S.video && e.mediaStream.getVideoTracks().length > 0) {
                                var w = !0,
                                    O = !1,
                                    E = void 0;
                                try {
                                    for (var j, C = e.mediaStream.getVideoTracks()[Symbol.iterator](); !(w = (j = C.next()).done); w = !0) {
                                        var T = j.value;
                                        r._pc.addTrack(T, e.mediaStream)
                                    }
                                } catch (e) {
                                    O = !0, E = e
                                } finally {
                                    try {
                                        w || null == C.return || C.return()
                                    } finally {
                                        if (O) throw E
                                    }
                                }
                            }
                            return s.offerToReceiveAudio = !1, s.offerToReceiveVideo = !1, s
                        }).then(function(e) {
                            var n;
                            r._pc.createOffer(e).then(function(e) {
                                return t && (e.sdp = r._setRtpReceiverOptions(e.sdp, t)), e
                            }).then(function(e) {
                                return n = e, r._pc.setLocalDescription(e)
                            }).then(function() {
                                r._signaling.sendSignalingMessage("soac", {
                                    id: r._internalId,
                                    signaling: n
                                })
                            }).catch(function(e) {
                                i.default.error("Failed to create offer or set SDP. Message: " + e.message), r._unpublish(), r._rejectPromise(e), r._fireEndedEventOnPublicationOrSubscription()
                            })
                        }).catch(function(e) {
                            r._unpublish(), r._rejectPromise(e), r._fireEndedEventOnPublicationOrSubscription()
                        }), new Promise(function(e, t) {
                            r._publishPromise = {
                                resolve: e,
                                reject: t
                            }
                        })
                    }
                }, {
                    key: "subscribe",
                    value: function(e, t) {
                        console.log('subscribe FROM owt');
                        var n = this;
                        if (void 0 === t && (t = {
                                audio: !!e.settings.audio,
                                video: !!e.settings.video
                            }), "object" !== p(t)) return Promise.reject(new TypeError("Options should be an object."));
                        if (void 0 === t.audio && (t.audio = !!e.settings.audio), void 0 === t.video && (t.video = !!e.settings.video), void 0 !== t.audio && "object" !== p(t.audio) && "boolean" != typeof t.audio && null !== t.audio || void 0 !== t.video && "object" !== p(t.video) && "boolean" != typeof t.video && null !== t.video) return Promise.reject(new TypeError("Invalid options type."));
                        if (t.audio && !e.settings.audio || t.video && !e.settings.video) return Promise.reject(new u.ConferenceError("options.audio/video cannot be true or an object if there is no audio/video track in remote stream."));
                        if (!1 === t.audio && !1 === t.video) return Promise.reject(new u.ConferenceError("Cannot subscribe a stream without audio and video."));
                        this._options = t;
                        var r = {};
                        if (t.audio) {
                            if ("object" === p(t.audio) && Array.isArray(t.audio.codecs) && 0 === t.audio.codecs.length) return Promise.reject(new TypeError("Audio codec cannot be an empty array."));
                            r.audio = {}, r.audio.from = e.id
                        } else r.audio = !1;
                        if (t.video) {
                            if ("object" === p(t.video) && Array.isArray(t.video.codecs) && 0 === t.video.codecs.length) return Promise.reject(new TypeError("Video codec cannot be an empty array."));
                            r.video = {}, r.video.from = e.id, (t.video.resolution || t.video.frameRate || t.video.bitrateMultiplier && 1 !== t.video.bitrateMultiplier || t.video.keyFrameInterval) && (r.video.parameters = {
                                resolution: t.video.resolution,
                                framerate: t.video.frameRate,
                                bitrate: t.video.bitrateMultiplier ? "x" + t.video.bitrateMultiplier.toString() : void 0,
                                keyFrameInterval: t.video.keyFrameInterval
                            }), t.video.rid && (r.video.simulcastRid = t.video.rid, delete r.video.parameters, t.video = !0)
                        } else r.video = !1;
                        return this._subscribedStream = e, this._signaling.sendSignalingMessage("subscribe", {
                            media: r
                        }).then(function(e) {
                            var a = new o.MessageEvent("id", {
                                message: e.id,
                                origin: n._remoteId
                            });
                            n.dispatchEvent(a), n._internalId = e.id, n._createPeerConnection();
                            var s = {};
                            "function" == typeof n._pc.addTransceiver ? (r.audio && n._pc.addTransceiver("audio", {
                                direction: "recvonly"
                            }), r.video && n._pc.addTransceiver("video", {
                                direction: "recvonly"
                            })) : (s.offerToReceiveAudio = !!t.audio, s.offerToReceiveVideo = !!t.video), n._pc.createOffer(s).then(function(e) {
                                t && (e.sdp = n._setRtpReceiverOptions(e.sdp, t)), n._pc.setLocalDescription(e).then(function() {
                                    n._signaling.sendSignalingMessage("soac", {
                                        id: n._internalId,
                                        signaling: e
                                    })
                                }, function(e) {
                                    i.default.error("Set local description failed. Message: " + JSON.stringify(e))
                                })
                            }, function(e) {
                                i.default.error("Create offer failed. Error info: " + JSON.stringify(e))
                            }).catch(function(e) {
                                i.default.error("Failed to create offer or set SDP. Message: " + e.message), n._unsubscribe(), n._rejectPromise(e), n._fireEndedEventOnPublicationOrSubscription()
                            })
                        }).catch(function(e) {
                            n._unsubscribe(), n._rejectPromise(e), n._fireEndedEventOnPublicationOrSubscription()
                        }), new Promise(function(e, t) {
                            n._subscribePromise = {
                                resolve: e,
                                reject: t
                            }
                        })
                    }
                }, {
                    key: "_unpublish",
                    value: function() {
                        this._stopped || (this._stopped = !0, this._signaling.sendSignalingMessage("unpublish", {
                            id: this._internalId
                        }).catch(function(e) {
                            i.default.warning("MCU returns negative ack for unpublishing, " + e)
                        }), this._pc && "closed" !== this._pc.signalingState && this._pc.close())
                    }
                }, {
                    key: "_unsubscribe",
                    value: function() {
                        this._stopped || (this._stopped = !0, this._signaling.sendSignalingMessage("unsubscribe", {
                            id: this._internalId
                        }).catch(function(e) {
                            i.default.warning("MCU returns negative ack for unsubscribing, " + e)
                        }), this._pc && "closed" !== this._pc.signalingState && this._pc.close())
                    }
                }, {
                    key: "_muteOrUnmute",
                    value: function(e, t, n) {
                        var r = this,
                            i = t ? "stream-control" : "subscription-control",
                            a = e ? "pause" : "play";
                        return this._signaling.sendSignalingMessage(i, {
                            id: this._internalId,
                            operation: a,
                            data: n
                        }).then(function() {
                            if (!t) {
                                var i = e ? "mute" : "unmute";
                                r._subscription.dispatchEvent(new o.MuteEvent(i, {
                                    kind: n
                                }))
                            }
                        })
                    }
                }, {
                    key: "_applyOptions",
                    value: function(e) {
                        if ("object" !== p(e) || "object" !== p(e.video)) return Promise.reject(new u.ConferenceError("Options should be an object."));
                        var t = {};
                        return t.resolution = e.video.resolution, t.framerate = e.video.frameRate, t.bitrate = e.video.bitrateMultiplier ? "x" + e.video.bitrateMultiplier.toString() : void 0, t.keyFrameInterval = e.video.keyFrameInterval, this._signaling.sendSignalingMessage("subscription-control", {
                            id: this._internalId,
                            operation: "update",
                            data: {
                                video: {
                                    parameters: t
                                }
                            }
                        }).then()
                    }
                }, {
                    key: "_onRemoteStreamAdded",
                    value: function(e) {
                        console.log(e.streams);
                        i.default.debug("Remote stream added."), this._subscribedStream ? this._subscribedStream.mediaStream = e.streams[0] : i.default.warning("Received remote stream without subscription.")
                    }
                }, {
                    key: "_onLocalIceCandidate",
                    value: function(e) {
                        e.candidate ? "stable" !== this._pc.signalingState ? this._pendingCandidates.push(e.candidate) : this._sendCandidate(e.candidate) : i.default.debug("Empty candidate.")
                    }
                }, {
                    key: "_fireEndedEventOnPublicationOrSubscription",
                    value: function() {
                        if (!this._ended) {
                            this._ended = !0;
                            var e = new o.OwtEvent("ended");
                            this._publication ? (this._publication.dispatchEvent(e), this._publication.stop()) : this._subscription && (this._subscription.dispatchEvent(e), this._subscription.stop())
                        }
                    }
                }, {
                    key: "_rejectPromise",
                    value: function(e) {
                        if (!e) new u.ConferenceError("Connection failed or closed.");
                        this._publishPromise ? (this._publishPromise.reject(e), this._publishPromise = void 0) : this._subscribePromise && (this._subscribePromise.reject(e), this._subscribePromise = void 0)
                    }
                }, {
                    key: "_onIceConnectionStateChange",
                    value: function(e) {
                        e && e.currentTarget && (i.default.debug("ICE connection state changed to " + e.currentTarget.iceConnectionState), "closed" !== e.currentTarget.iceConnectionState && "failed" !== e.currentTarget.iceConnectionState || ("failed" === e.currentTarget.iceConnectionState ? this._handleError("connection failed.") : this._fireEndedEventOnPublicationOrSubscription()))
                    }
                }, {
                    key: "_onConnectionStateChange",
                    value: function(e) {
                        "closed" !== this._pc.connectionState && "failed" !== this._pc.connectionState || ("failed" === this._pc.connectionState ? this._handleError("connection failed.") : this._fireEndedEventOnPublicationOrSubscription())
                    }
                }, {
                    key: "_sendCandidate",
                    value: function(e) {
                        this._signaling.sendSignalingMessage("soac", {
                            id: this._internalId,
                            signaling: {
                                type: "candidate",
                                candidate: {
                                    candidate: "a=" + e.candidate,
                                    sdpMid: e.sdpMid,
                                    sdpMLineIndex: e.sdpMLineIndex
                                }
                            }
                        })
                    }
                }, {
                    key: "_createPeerConnection",
                    value: function() {
                        var e = this,
                            t = this._config.rtcConfiguration || {};
                        d.isChrome() && (t.sdpSemantics = "unified-plan"), this._pc = new RTCPeerConnection(t), this._pc.onicecandidate = function(t) {
                            e._onLocalIceCandidate.apply(e, [t])
                        }, this._pc.ontrack = function(t) {
                            e._onRemoteStreamAdded.apply(e, [t])
                        }, this._pc.oniceconnectionstatechange = function(t) {
                            e._onIceConnectionStateChange.apply(e, [t])
                        }, this._pc.onconnectionstatechange = function(t) {
                            e._onConnectionStateChange.apply(e, [t])
                        }
                    }
                }, {
                    key: "_getStats",
                    value: function() {
                        return this._pc ? this._pc.getStats() : Promise.reject(new u.ConferenceError("PeerConnection is not available."))
                    }
                }, {
                    key: "_readyHandler",
                    value: function() {
                        var e = this;
                        this._subscribePromise ? (this._subscription = new c.Subscription(this._internalId, function() {
                            e._unsubscribe()
                        }, function() {
                            return e._getStats()
                        }, function(t) {
                            return e._muteOrUnmute(!0, !1, t)
                        }, function(t) {
                            return e._muteOrUnmute(!1, !1, t)
                        }, function(t) {
                            return e._applyOptions(t)
                        }), this._subscribedStream.addEventListener("ended", function() {
                            e._subscription.dispatchEvent("ended", new o.OwtEvent("ended"))
                        }), this._subscribePromise.resolve(this._subscription)) : this._publishPromise && (this._publication = new s.Publication(this._internalId, function() {
                            return e._unpublish(), Promise.resolve()
                        }, function() {
                            return e._getStats()
                        }, function(t) {
                            return e._muteOrUnmute(!0, !0, t)
                        }, function(t) {
                            return e._muteOrUnmute(!1, !0, t)
                        }), this._publishPromise.resolve(this._publication)), this._publishPromise = null, this._subscribePromise = null
                    }
                }, {
                    key: "_sdpHandler",
                    value: function(e) {
                        var t = this;
                        "answer" === e.type && ((this._publication || this._publishPromise) && this._options && (e.sdp = this._setRtpSenderOptions(e.sdp, this._options)), this._pc.setRemoteDescription(e).then(function() {
                            if (t._pendingCandidates.length > 0) {
                                var e = !0,
                                    n = !1,
                                    r = void 0;
                                try {
                                    for (var i, o = t._pendingCandidates[Symbol.iterator](); !(e = (i = o.next()).done); e = !0) {
                                        var a = i.value;
                                        t._sendCandidate(a)
                                    }
                                } catch (e) {
                                    n = !0, r = e
                                } finally {
                                    try {
                                        e || null == o.return || o.return()
                                    } finally {
                                        if (n) throw r
                                    }
                                }
                            }
                        }, function(e) {
                            i.default.error("Set remote description failed: " + e), t._rejectPromise(e), t._fireEndedEventOnPublicationOrSubscription()
                        }))
                    }
                }, {
                    key: "_errorHandler",
                    value: function(e) {
                        return this._handleError(e)
                    }
                }, {
                    key: "_handleError",
                    value: function(e) {
                        var t = new u.ConferenceError(e);
                        if (this._publishPromise || this._subscribePromise) return this._rejectPromise(t);
                        if (!this._ended) {
                            var n = this._publication || this._subscription;
                            if (n) {
                                var r = new o.ErrorEvent("error", {
                                    error: t
                                });
                                n.dispatchEvent(r), this._fireEndedEventOnPublicationOrSubscription()
                            } else i.default.warning("Neither publication nor subscription is available.")
                        }
                    }
                }, {
                    key: "_setCodecOrder",
                    value: function(e, t) {
                        if (this._publication || this._publishPromise) {
                            if (t.audio) {
                                var n = Array.from(t.audio, function(e) {
                                    return e.codec.name
                                });
                                e = l.reorderCodecs(e, "audio", n)
                            }
                            if (t.video) {
                                var r = Array.from(t.video, function(e) {
                                    return e.codec.name
                                });
                                e = l.reorderCodecs(e, "video", r)
                            }
                        } else {
                            if (t.audio && t.audio.codecs) {
                                var i = Array.from(t.audio.codecs, function(e) {
                                    return e.name
                                });
                                e = l.reorderCodecs(e, "audio", i)
                            }
                            if (t.video && t.video.codecs) {
                                var o = Array.from(t.video.codecs, function(e) {
                                    return e.name
                                });
                                e = l.reorderCodecs(e, "video", o)
                            }
                        }
                        return e
                    }
                }, {
                    key: "_setMaxBitrate",
                    value: function(e, t) {
                        return "object" === p(t.audio) && (e = l.setMaxBitrate(e, t.audio)), "object" === p(t.video) && (e = l.setMaxBitrate(e, t.video)), e
                    }
                }, {
                    key: "_setRtpSenderOptions",
                    value: function(e, t) {
                        return this._isRtpEncodingParameters(t.audio) || this._isRtpEncodingParameters(t.video) ? e : e = this._setMaxBitrate(e, t)
                    }
                }, {
                    key: "_setRtpReceiverOptions",
                    value: function(e, t) {
                        return this._isRtpEncodingParameters(t.video) && d.isSafari() && t.video.length > 1 && (e = l.addLegacySimulcast(e, "video", t.video.length)), this._isRtpEncodingParameters(t.video) && this._videoCodecs ? e = l.reorderCodecs(e, "video", this._videoCodecs) : this._isRtpEncodingParameters(t.audio) || this._isRtpEncodingParameters(t.video) ? e : e = this._setCodecOrder(e, t)
                    }
                }, {
                    key: "_onStreamEvent",
                    value: function(e) {
                        var t, n;
                        (this._publication && e.id === this._publication.id ? t = this._publication : this._subscribedStream && e.id === this._subscribedStream.id && (t = this._subscription), t) && ("audio.status" === e.data.field ? n = a.TrackKind.AUDIO : "video.status" === e.data.field ? n = a.TrackKind.VIDEO : i.default.warning("Invalid data field for stream update info."), "active" === e.data.value ? t.dispatchEvent(new o.MuteEvent("unmute", {
                            kind: n
                        })) : "inactive" === e.data.value ? t.dispatchEvent(new o.MuteEvent("mute", {
                            kind: n
                        })) : i.default.warning("Invalid data value for stream update info."))
                    }
                }, {
                    key: "_isRtpEncodingParameters",
                    value: function(e) {
                        if (!Array.isArray(e)) return !1;
                        var t = e[0];
                        return t.codecPayloadType || t.dtx || t.active || t.ptime || t.maxFramerate || t.scaleResolutionDownBy || t.rid
                    }
                }, {
                    key: "_isOwtEncodingParameters",
                    value: function(e) {
                        return !!Array.isArray(e) && !!e[0].codec
                    }
                }]) && h(n.prototype, r), f && h(n, f), t
            }();
            n.ConferencePeerConnectionChannel = b
        }, {
            "../base/event.js": 3,
            "../base/logger.js": 5,
            "../base/mediaformat.js": 6,
            "../base/publication.js": 8,
            "../base/sdputils.js": 9,
            "../base/utils.js": 11,
            "./error.js": 14,
            "./subscription.js": 21
        }],
        13: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.ConferenceClient = void 0;
            var r, i = m(e("../base/event.js")),
                o = e("./signaling.js"),
                a = (r = e("../base/logger.js")) && r.__esModule ? r : {
                    default: r
                },
                s = e("../base/base64.js"),
                c = e("./error.js"),
                u = m(e("../base/utils.js")),
                d = m(e("../base/stream.js")),
                l = e("./participant.js"),
                f = e("./info.js"),
                p = e("./channel.js"),
                h = e("./mixedstream.js"),
                v = m(e("./streamutils.js"));

            function m(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                        } return t.default = e, t
            }
            var _ = 1,
                b = 2,
                g = 3,
                y = function(e, t) {
                    var n = new i.OwtEvent(e, t);
                    return n.participant = t.participant, n
                };
            n.ConferenceClient = function(e, t) {
                Object.setPrototypeOf(this, new i.EventDispatcher), e = e || {};
                var n, r, m = this,
                    S = _,
                    P = t || new o.SioSignaling,
                    w = new Map,
                    O = new Map,
                    E = new Map,
                    j = new Map;

                function C(e, t) {
                    if ("soac" === e || "progress" === e) {
                        if (!j.has(t.id)) return void a.default.warning("Cannot find a channel for incoming data.");
                        j.get(t.id).onMessage(e, t)
                    } else "stream" === e ? "add" === t.status ? function(e) {
                        var t = T(e);
                        w.set(t.id, t);
                        var n = new d.StreamEvent("streamadded", {
                            stream: t
                        });
                        m.dispatchEvent(n)
                    }(t.data) : "remove" === t.status ? function(e) {
                        if (w.has(e.id)) {
                            var t = w.get(e.id),
                                n = new i.OwtEvent("ended");
                            w.delete(t.id), t.dispatchEvent(n)
                        } else a.default.warning("Cannot find specific remote stream "+e.id)
                    }(t) : "update" === t.status && ("audio.status" === t.data.field || "video.status" === t.data.field ? j.forEach(function(n) {
                        n.onMessage(e, t)
                    }) : "activeInput" === t.data.field ? function(e) {
                        if (w.has(e.id)) {
                            var t = w.get(e.id),
                                n = new h.ActiveAudioInputChangeEvent("activeaudioinputchange", {
                                    activeAudioInputStreamId: e.data.value
                                });
                            t.dispatchEvent(n)
                        } else a.default.warning("Cannot find specific remote stream.")
                    }(t) : "video.layout" === t.data.field ? function(e) {
                        if (w.has(e.id)) {
                            var t = w.get(e.id),
                                n = new h.LayoutChangeEvent("layoutchange", {
                                    layout: e.data.value
                                });
                            t.dispatchEvent(n)
                        } else a.default.warning("Cannot find specific remote stream.")
                    }(t) : "." === t.data.field ? function(e) {
                        if (w.has(e.id)) {
                            var t = w.get(e.id);
                            t.settings = v.convertToPublicationSettings(e.media), t.extraCapabilities = v.convertToSubscriptionCapabilities(e.media);
                            var n = new i.OwtEvent("updated");
                            t.dispatchEvent(n)
                        } else a.default.warning("Cannot find specific remote stream.")
                    }(t.data.value) : a.default.warning("Unknown stream event from MCU.")) : "text" === e ? function(e) {
                        var t = new i.MessageEvent("messagereceived", {
                            message: e.message,
                            origin: e.from,
                            to: e.to
                        });
                        m.dispatchEvent(t)
                    }(t) : "participant" === e && function(e) {
                        if ("join" === e.action) {
                            e = e.data;
                            var t = new l.Participant(e.id, e.role, e.user);
                            O.set(e.id, t);
                            var n = new y("participantjoined", {
                                participant: t
                            });
                            m.dispatchEvent(n)
                        } else if ("leave" === e.action) {
                            var r = e.data;
                            if (!O.has(r)) return void a.default.warning("Received leave message from MCU for an unknown participant.");
                            var o = O.get(r);
                            O.delete(r), o.dispatchEvent(new i.OwtEvent("left"))
                        }
                    }(t)
                }

                function T(e) {
                    if ("mixed" === e.type) return new h.RemoteMixedStream(e);
                    var t, n;
                    e.media.audio && (t = e.media.audio.source), e.media.video && (n = e.media.video.source);
                    var r = new d.RemoteStream(e.id, e.info.owner, void 0, new d.StreamSourceInfo(t, n), e.info.attributes);
                    return r.settings = v.convertToPublicationSettings(e.media), r.extraCapabilities = v.convertToSubscriptionCapabilities(e.media), r
                }

                function k(e, t) {
                    return P.send(e, t)
                }

                function I() {
                    var t = Object.create(i.EventDispatcher);
                    t.sendSignalingMessage = k;
                    var n = new p.ConferencePeerConnectionChannel(e, t);
                    return n.addEventListener("id", function(e) {
                        j.set(e.message, n)
                    }), n
                }

                function R() {
                    O.clear(), w.clear()
                }
                P.addEventListener("data", function(e) {
                    C(e.message.notification, e.message.data)
                }), P.addEventListener("disconnect", function() {
                    R(), S = _, m.dispatchEvent(new i.OwtEvent("serverdisconnected"))
                }), Object.defineProperty(this, "info", {
                    configurable: !1,
                    get: function() {
                        return r ? new f.ConferenceInfo(r.id, Array.from(O, function(e) {
                            return e[1]
                        }), Array.from(w, function(e) {
                            return e[1]
                        }), n) : null
                    }
                }), this.join = function(e) {
                    return new Promise(function(t, i) {
                        var o = JSON.parse(s.Base64.decodeBase64(e)),
                            a = !0 === o.secure,
                            d = o.host;
                        if ("string" == typeof d)
                            if (-1 === d.indexOf("http") && (d = a ? "https://" + d : "http://" + d), S === _) {
                                S = b;
                                var p = {
                                    token: e,
                                    userAgent: u.sysInfo(),
                                    protocol: "1.1"
                                };
                                P.connect(d, a, p).then(function(e) {
                                    if (S = g, void 0 !== (r = e.room).streams) {
                                        var i = !0,
                                            o = !1,
                                            a = void 0;
                                        try {
                                            for (var s, c = r.streams[Symbol.iterator](); !(i = (s = c.next()).done); i = !0) {
                                                var u = s.value;
                                                "mixed" === u.type && (u.viewport = u.info.label), w.set(u.id, T(u))
                                            }
                                        } catch (e) {
                                            o = !0, a = e
                                        } finally {
                                            try {
                                                i || null == c.return || c.return()
                                            } finally {
                                                if (o) throw a
                                            }
                                        }
                                    }
                                    if (e.room && void 0 !== e.room.participants) {
                                        var d = !0,
                                            p = !1,
                                            h = void 0;
                                        try {
                                            for (var v, m = e.room.participants[Symbol.iterator](); !(d = (v = m.next()).done); d = !0) {
                                                var _ = v.value;
                                                O.set(_.id, new l.Participant(_.id, _.role, _.user)), _.id === e.id && (n = O.get(_.id))
                                            }
                                        } catch (e) {
                                            p = !0, h = e
                                        } finally {
                                            try {
                                                d || null == m.return || m.return()
                                            } finally {
                                                if (p) throw h
                                            }
                                        }
                                    }
                                    t(new f.ConferenceInfo(e.room.id, Array.from(O.values()), Array.from(w.values()), n))
                                }, function(e) {
                                    S = _, i(new c.ConferenceError(e))
                                })
                            } else i(new c.ConferenceError("connection state invalid"));
                        else i(new c.ConferenceError("Invalid host."))
                    })
                }, this.publish = function(e, t, n) {
                    console.log('eeeee', e.mediaStream.id)
                    return e instanceof d.LocalStream ? E.has(e.mediaStream.id) ? Promise.reject(new c.ConferenceError("Cannot publish a published stream.")) : I().publish(e, t, n) : Promise.reject(new c.ConferenceError("Invalid stream."))
                }, this.subscribe = function(e, t) {
                    return e instanceof d.RemoteStream ? I().subscribe(e, t) : Promise.reject(new c.ConferenceError("Invalid stream."))
                }, this.send = function(e, t) {
                    return void 0 === t && (t = "all"), k("text", {
                        to: t,
                        message: e
                    })
                }, this.leave = function() {
                    return P.disconnect().then(function() {
                        R(), S = _
                    })
                }
            }
        }, {
            "../base/base64.js": 1,
            "../base/event.js": 3,
            "../base/logger.js": 5,
            "../base/stream.js": 10,
            "../base/utils.js": 11,
            "./channel.js": 12,
            "./error.js": 14,
            "./info.js": 16,
            "./mixedstream.js": 17,
            "./participant.js": 18,
            "./signaling.js": 19,
            "./streamutils.js": 20
        }],
        14: [function(e, t, n) {
            "use strict";

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function i(e, t) {
                return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function o(e) {
                var t = "function" == typeof Map ? new Map : void 0;
                return (o = function(e) {
                    if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
                    var n;
                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== t) {
                        if (t.has(e)) return t.get(e);
                        t.set(e, r)
                    }

                    function r() {
                        return a(e, arguments, c(this).constructor)
                    }
                    return r.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: r,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), s(r, e)
                })(e)
            }

            function a(e, t, n) {
                return (a = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }() ? Reflect.construct : function(e, t, n) {
                    var r = [null];
                    r.push.apply(r, t);
                    var i = new(Function.bind.apply(e, r));
                    return n && s(i, n.prototype), i
                }).apply(null, arguments)
            }

            function s(e, t) {
                return (s = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function c(e) {
                return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.ConferenceError = void 0;
            var u = function(e) {
                function t(e) {
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), i(this, c(t).call(this, e))
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && s(e, t)
                }(t, o(Error)), t
            }();
            n.ConferenceError = u
        }, {}],
        15: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "ConferenceClient", {
                enumerable: !0,
                get: function() {
                    return r.ConferenceClient
                }
            }), Object.defineProperty(n, "SioSignaling", {
                enumerable: !0,
                get: function() {
                    return i.SioSignaling
                }
            });
            var r = e("./client.js"),
                i = e("./signaling.js")
        }, {
            "./client.js": 13,
            "./signaling.js": 19
        }],
        16: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.ConferenceInfo = void 0;
            n.ConferenceInfo = function e(t, n, r, i) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.id = t, this.participants = n, this.remoteStreams = r, this.self = i
            }
        }, {}],
        17: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.LayoutChangeEvent = n.ActiveAudioInputChangeEvent = n.RemoteMixedStream = void 0;
            var r = a(e("../base/stream.js")),
                i = a(e("./streamutils.js")),
                o = e("../base/event.js");

            function a(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                        } return t.default = e, t
            }

            function s(e) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e, t) {
                return !t || "object" !== s(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function d(e) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function l(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && f(e, t)
            }

            function f(e, t) {
                return (f = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var p = function(e) {
                function t(e) {
                    var n;
                    if (c(this, t), "mixed" !== e.type) throw new TypeError("Not a mixed stream");
                    return (n = u(this, d(t).call(this, e.id, void 0, void 0, new r.StreamSourceInfo("mixed", "mixed")))).settings = i.convertToPublicationSettings(e.media), n.extraCapabilities = new i.convertToSubscriptionCapabilities(e.media), n
                }
                return l(t, r.RemoteStream), t
            }();
            n.RemoteMixedStream = p;
            var h = function(e) {
                function t(e, n) {
                    var r;
                    return c(this, t), (r = u(this, d(t).call(this, e))).activeAudioInputStreamId = n.activeAudioInputStreamId, r
                }
                return l(t, o.OwtEvent), t
            }();
            n.ActiveAudioInputChangeEvent = h;
            var v = function(e) {
                function t(e, n) {
                    var r;
                    return c(this, t), (r = u(this, d(t).call(this, e))).layout = n.layout, r
                }
                return l(t, o.OwtEvent), t
            }();
            n.LayoutChangeEvent = v
        }, {
            "../base/event.js": 3,
            "../base/stream.js": 10,
            "./streamutils.js": 20
        }],
        18: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.Participant = void 0;
            var r = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                        } return t.default = e, t
            }(e("../base/event.js"));

            function i(e) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function o(e) {
                return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function a(e, t) {
                return (a = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function s(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            var c = function(e) {
                function t(e, n, r) {
                    var a, c, u;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), c = this, a = !(u = o(t).call(this)) || "object" !== i(u) && "function" != typeof u ? s(c) : u, Object.defineProperty(s(s(a)), "id", {
                        configurable: !1,
                        writable: !1,
                        value: e
                    }), Object.defineProperty(s(s(a)), "role", {
                        configurable: !1,
                        writable: !1,
                        value: n
                    }), Object.defineProperty(s(s(a)), "userId", {
                        configurable: !1,
                        writable: !1,
                        value: r
                    }), a
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && a(e, t)
                }(t, r.EventDispatcher), t
            }();
            n.Participant = c
        }, {
            "../base/event.js": 3
        }],
        19: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.SioSignaling = void 0;
            var r, i = (r = e("../base/logger.js")) && r.__esModule ? r : {
                    default: r
                },
                o = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e)
                            if (Object.prototype.hasOwnProperty.call(e, n)) {
                                var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                                r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                            } return t.default = e, t
                }(e("../base/event.js")),
                a = e("./error.js"),
                s = e("../base/base64.js");

            function c(e) {
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function u(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function d(e, t) {
                return !t || "object" !== c(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function l(e) {
                return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function f(e, t) {
                return (f = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function p(e, t, n, r) {
                "ok" === e || "success" === e ? n(t) : "error" === e ? r(t) : i.default.error("MCU returns unknown ack.")
            }
            var h = function(e) {
                function t() {
                    var e;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), (e = d(this, l(t).call(this)))._socket = null, e._loggedIn = !1, e._reconnectTimes = 0, e._reconnectionTicket = null, e._refreshReconnectionTicket = null, e
                }
                var n, r, c;
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && f(e, t)
                }(t, o.EventDispatcher), n = t, (r = [{
                    key: "connect",
                    value: function(e, t, n) {
                        var r = this;
                        return new Promise(function(t, i) {
                            var a = {
                                reconnection: !0,
                                reconnectionAttempts: 10,
                                "force new connection": !0
                            };
                            r._socket = io(e, a), ["participant", "text", "stream", "progress"].forEach(function(e) {
                                r._socket.on(e, function(t) {
                                    r.dispatchEvent(new o.MessageEvent("data", {
                                        message: {
                                            notification: e,
                                            data: t
                                        }
                                    }))
                                })
                            }), r._socket.on("reconnecting", function() {
                                r._reconnectTimes++
                            }), r._socket.on("reconnect_failed", function() {
                                r._reconnectTimes >= 10 && r.dispatchEvent(new o.OwtEvent("disconnect"))
                            }), r._socket.on("connect_error", function(t) {
                                i("connect_error:".concat(e))
                            }), r._socket.on("drop", function() {
                                r._reconnectTimes = 10
                            }), r._socket.on("disconnect", function() {
                                r._clearReconnectionTask(), r._reconnectTimes >= 10 && (r._loggedIn = !1, r.dispatchEvent(new o.OwtEvent("disconnect")))
                            }), r._socket.emit("login", n, function(e, n) {
                                "ok" === e && (r._loggedIn = !0, r._onReconnectionTicket(n.reconnectionTicket), r._socket.on("connect", function() {
                                    r._socket.emit("relogin", r._reconnectionTicket, function(e, t) {
                                        "ok" === e ? (r._reconnectTimes = 0, r._onReconnectionTicket(t)) : r.dispatchEvent(new o.OwtEvent("disconnect"))
                                    })
                                })), p(e, n, t, i)
                            })
                        })
                    }
                }, {
                    key: "disconnect",
                    value: function() {
                        var e = this;
                        return !this._socket || this._socket.disconnected ? Promise.reject(new a.ConferenceError("Portal is not connected.")) : new Promise(function(t, n) {
                            e._socket.emit("logout", function(r, i) {
                                e._reconnectTimes = 10, e._socket.disconnect(), p(r, i, t, n)
                            })
                        })
                    }
                }, {
                    key: "send",
                    value: function(e, t) {
                        var n = this;
                        return new Promise(function(r, i) {
                            n._socket.emit(e, t, function(e, t) {
                                p(e, t, r, i)
                            })
                        })
                    }
                }, {
                    key: "_onReconnectionTicket",
                    value: function(e) {
                        var t = this;
                        this._reconnectionTicket = e;
                        var n = JSON.parse(s.Base64.decodeBase64(e)),
                            r = Date.now();
                        if (n.notAfter <= r - 1e4) i.default.warning("Reconnection ticket expires too soon.");
                        else {
                            var o = n.notAfter - r - 6e4;
                            o < 0 && (o = n.notAfter - r - 1e4), this._clearReconnectionTask(), this._refreshReconnectionTicket = setTimeout(function() {
                                t._socket.emit("refreshReconnectionTicket", function(e, n) {
                                    "ok" === e ? t._onReconnectionTicket(n) : i.default.warning("Failed to refresh reconnection ticket.")
                                })
                            }, o)
                        }
                    }
                }, {
                    key: "_clearReconnectionTask",
                    value: function() {
                        clearTimeout(this._refreshReconnectionTicket), this._refreshReconnectionTicket = null
                    }
                }]) && u(n.prototype, r), c && u(n, c), t
            }();
            n.SioSignaling = h
        }, {
            "../base/base64.js": 1,
            "../base/event.js": 3,
            "../base/logger.js": 5,
            "./error.js": 14
        }],
        20: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.convertToPublicationSettings = function(e) {
                var t, n, a, s, c, u, d, l = [],
                    f = [];
                e.audio && (e.audio.format && (t = new o.AudioCodecParameters(e.audio.format.codec, e.audio.format.channelNum, e.audio.format.sampleRate)), l.push(new r.AudioPublicationSettings(t)));
                if (e.video) {
                    var p = !0,
                        h = !1,
                        v = void 0;
                    try {
                        for (var m, _ = e.video.original[Symbol.iterator](); !(p = (m = _.next()).done); p = !0) {
                            var b = m.value;
                            b.format && (n = new o.VideoCodecParameters(b.format.codec, b.format.profile)), b.parameters && (b.parameters.resolution && (a = new i.Resolution(b.parameters.resolution.width, b.parameters.resolution.height)), s = b.parameters.framerate, c = 1e3 * b.parameters.bitrate, u = b.parameters.keyFrameInterval), b.simulcastRid && (d = b.simulcastRid), f.push(new r.VideoPublicationSettings(n, a, s, c, u, d))
                        }
                    } catch (e) {
                        h = !0, v = e
                    } finally {
                        try {
                            p || null == _.return || _.return()
                        } finally {
                            if (h) throw v
                        }
                    }
                }
                return new r.PublicationSettings(l, f)
            }, n.convertToSubscriptionCapabilities = function(e) {
                var t, n;
                if (e.audio) {
                    var r = [];
                    if (e.audio && e.audio.optional && e.audio.optional.format) {
                        var s = !0,
                            d = !1,
                            l = void 0;
                        try {
                            for (var f, p = e.audio.optional.format[Symbol.iterator](); !(s = (f = p.next()).done); s = !0) {
                                var h = f.value,
                                    v = new o.AudioCodecParameters(h.codec, h.channelNum, h.sampleRate);
                                r.push(v)
                            }
                        } catch (e) {
                            d = !0, l = e
                        } finally {
                            try {
                                s || null == p.return || p.return()
                            } finally {
                                if (d) throw l
                            }
                        }
                    }
                    r.sort(), t = new a.AudioSubscriptionCapabilities(r)
                }
                if (e.video) {
                    var m = [];
                    if (e.video && e.video.optional && e.video.optional.format) {
                        var _ = !0,
                            b = !1,
                            g = void 0;
                        try {
                            for (var y, S = e.video.optional.format[Symbol.iterator](); !(_ = (y = S.next()).done); _ = !0) {
                                var P = y.value,
                                    w = new o.VideoCodecParameters(P.codec, P.profile);
                                m.push(w)
                            }
                        } catch (e) {
                            b = !0, g = e
                        } finally {
                            try {
                                _ || null == S.return || S.return()
                            } finally {
                                if (b) throw g
                            }
                        }
                    }
                    if (m.sort(), e.video && e.video.optional && e.video.optional.parameters) {
                        var O = Array.from(e.video.optional.parameters.resolution, function(e) {
                            return new i.Resolution(e.width, e.height)
                        });
                        O.sort(u);
                        var E = Array.from(e.video.optional.parameters.bitrate, function(e) {
                            return function(e) {
                                if ("string" != typeof e || !e.startsWith("x")) return L.Logger.warning("Invalid bitrate multiplier input."), 0;
                                return Number.parseFloat(e.replace(/^x/, ""))
                            }(e)
                        });
                        E.push(1), E.sort(c);
                        var j = JSON.parse(JSON.stringify(e.video.optional.parameters.framerate));
                        j.sort(c);
                        var C = JSON.parse(JSON.stringify(e.video.optional.parameters.keyFrameInterval));
                        C.sort(c), n = new a.VideoSubscriptionCapabilities(m, O, j, E, C)
                    } else n = new a.VideoSubscriptionCapabilities(m, [], [], [1], [])
                }
                return new a.SubscriptionCapabilities(t, n)
            };
            var r = s(e("../base/publication.js")),
                i = s(e("../base/mediaformat.js")),
                o = s(e("../base/codec.js")),
                a = s(e("./subscription.js"));

            function s(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                        } return t.default = e, t
            }

            function c(e, t) {
                return e - t
            }

            function u(e, t) {
                return e.width !== t.width ? e.width - t.width : e.height - t.height
            }
        }, {
            "../base/codec.js": 2,
            "../base/mediaformat.js": 6,
            "../base/publication.js": 8,
            "./subscription.js": 21
        }],
        21: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.Subscription = n.SubscriptionUpdateOptions = n.VideoSubscriptionUpdateOptions = n.SubscribeOptions = n.VideoSubscriptionConstraints = n.AudioSubscriptionConstraints = n.SubscriptionCapabilities = n.VideoSubscriptionCapabilities = n.AudioSubscriptionCapabilities = void 0;
            i(e("../base/mediaformat.js")), i(e("../base/codec.js"));
            var r = e("../base/event.js");

            function i(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                        } return t.default = e, t
            }

            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function a(e) {
                return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function s(e, t) {
                return (s = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function c(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            n.AudioSubscriptionCapabilities = function e(t) {
                u(this, e), this.codecs = t
            };
            n.VideoSubscriptionCapabilities = function e(t, n, r, i, o) {
                u(this, e), this.codecs = t, this.resolutions = n, this.frameRates = r, this.bitrateMultipliers = i, this.keyFrameIntervals = o
            };
            n.SubscriptionCapabilities = function e(t, n) {
                u(this, e), this.audio = t, this.video = n
            };
            n.AudioSubscriptionConstraints = function e(t) {
                u(this, e), this.codecs = t
            };
            n.VideoSubscriptionConstraints = function e(t, n, r, i, o, a) {
                u(this, e), this.codecs = t, this.resolution = n, this.frameRate = r, this.bitrateMultiplier = i, this.keyFrameInterval = o, this.rid = a
            };
            n.SubscribeOptions = function e(t, n) {
                u(this, e), this.audio = t, this.video = n
            };
            n.VideoSubscriptionUpdateOptions = function e() {
                u(this, e), this.resolution = void 0, this.frameRate = void 0, this.bitrateMultipliers = void 0, this.keyFrameInterval = void 0
            };
            n.SubscriptionUpdateOptions = function e() {
                u(this, e), this.video = void 0
            };
            var d = function(e) {
                function t(e, n, r, i, s, d) {
                    var l, f, p;
                    if (u(this, t), f = this, l = !(p = a(t).call(this)) || "object" !== o(p) && "function" != typeof p ? c(f) : p, !e) throw new TypeError("ID cannot be null or undefined.");
                    return Object.defineProperty(c(c(l)), "id", {
                        configurable: !1,
                        writable: !1,
                        value: e
                    }), l.stop = n, l.getStats = r, l.mute = i, l.unmute = s, l.applyOptions = d, l
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && s(e, t)
                }(t, r.EventDispatcher), t
            }();
            n.Subscription = d
        }, {
            "../base/codec.js": 2,
            "../base/event.js": 3,
            "../base/mediaformat.js": 6
        }],
        22: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.Conference = n.P2P = n.Base = void 0;
            var r = a(e("./base/export.js")),
                i = a(e("./p2p/export.js")),
                o = a(e("./conference/export.js"));

            function a(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                        } return t.default = e, t
            }
            var s = r;
            n.Base = s;
            var c = i;
            n.P2P = c;
            var u = o;
            n.Conference = u
        }, {
            "./base/export.js": 4,
            "./conference/export.js": 15,
            "./p2p/export.js": 24
        }],
        23: [function(e, t, n) {
            "use strict";

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function i(e, t) {
                return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function o(e) {
                var t = "function" == typeof Map ? new Map : void 0;
                return (o = function(e) {
                    if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
                    var n;
                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== t) {
                        if (t.has(e)) return t.get(e);
                        t.set(e, r)
                    }

                    function r() {
                        return a(e, arguments, c(this).constructor)
                    }
                    return r.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: r,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), s(r, e)
                })(e)
            }

            function a(e, t, n) {
                return (a = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }() ? Reflect.construct : function(e, t, n) {
                    var r = [null];
                    r.push.apply(r, t);
                    var i = new(Function.bind.apply(e, r));
                    return n && s(i, n.prototype), i
                }).apply(null, arguments)
            }

            function s(e, t) {
                return (s = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function c(e) {
                return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.getErrorByCode = function(e) {
                return {
                    2100: u.P2P_CONN_SERVER_UNKNOWN,
                    2101: u.P2P_CONN_SERVER_UNAVAILABLE,
                    2102: u.P2P_CONN_SERVER_BUSY,
                    2103: u.P2P_CONN_SERVER_NOT_SUPPORTED,
                    2110: u.P2P_CONN_CLIENT_UNKNOWN,
                    2111: u.P2P_CONN_CLIENT_NOT_INITIALIZED,
                    2120: u.P2P_CONN_AUTH_UNKNOWN,
                    2121: u.P2P_CONN_AUTH_FAILED,
                    2201: u.P2P_MESSAGING_TARGET_UNREACHABLE,
                    2400: u.P2P_CLIENT_UNKNOWN,
                    2401: u.P2P_CLIENT_UNSUPPORTED_METHOD,
                    2402: u.P2P_CLIENT_ILLEGAL_ARGUMENT,
                    2403: u.P2P_CLIENT_INVALID_STATE,
                    2404: u.P2P_CLIENT_NOT_ALLOWED,
                    2500: u.P2P_WEBRTC_UNKNOWN,
                    2501: u.P2P_WEBRTC_SDP
                } [e]
            }, n.P2PError = n.errors = void 0;
            var u = {
                P2P_CONN_SERVER_UNKNOWN: {
                    code: 2100,
                    message: "Server unknown error."
                },
                P2P_CONN_SERVER_UNAVAILABLE: {
                    code: 2101,
                    message: "Server is unavaliable."
                },
                P2P_CONN_SERVER_BUSY: {
                    code: 2102,
                    message: "Server is too busy."
                },
                P2P_CONN_SERVER_NOT_SUPPORTED: {
                    code: 2103,
                    message: "Method has not been supported by server."
                },
                P2P_CONN_CLIENT_UNKNOWN: {
                    code: 2110,
                    message: "Client unknown error."
                },
                P2P_CONN_CLIENT_NOT_INITIALIZED: {
                    code: 2111,
                    message: "Connection is not initialized."
                },
                P2P_CONN_AUTH_UNKNOWN: {
                    code: 2120,
                    message: "Authentication unknown error."
                },
                P2P_CONN_AUTH_FAILED: {
                    code: 2121,
                    message: "Wrong username or token."
                },
                P2P_MESSAGING_TARGET_UNREACHABLE: {
                    code: 2201,
                    message: "Remote user cannot be reached."
                },
                P2P_CLIENT_DENIED: {
                    code: 2202,
                    message: "User is denied."
                },
                P2P_CLIENT_UNKNOWN: {
                    code: 2400,
                    message: "Unknown errors."
                },
                P2P_CLIENT_UNSUPPORTED_METHOD: {
                    code: 2401,
                    message: "This method is unsupported in current browser."
                },
                P2P_CLIENT_ILLEGAL_ARGUMENT: {
                    code: 2402,
                    message: "Illegal argument."
                },
                P2P_CLIENT_INVALID_STATE: {
                    code: 2403,
                    message: "Invalid peer state."
                },
                P2P_CLIENT_NOT_ALLOWED: {
                    code: 2404,
                    message: "Remote user is not allowed."
                },
                P2P_WEBRTC_UNKNOWN: {
                    code: 2500,
                    message: "WebRTC error."
                },
                P2P_WEBRTC_SDP: {
                    code: 2502,
                    message: "SDP error."
                }
            };
            n.errors = u;
            var d = function(e) {
                function t(e, n) {
                    var r;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), (r = i(this, c(t).call(this, n))).code = "number" == typeof e ? e : e.code, r
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && s(e, t)
                }(t, o(Error)), t
            }();
            n.P2PError = d
        }, {}],
        24: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "P2PClient", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            }), Object.defineProperty(n, "P2PError", {
                enumerable: !0,
                get: function() {
                    return o.P2PError
                }
            });
            var r, i = (r = e("./p2pclient.js")) && r.__esModule ? r : {
                    default: r
                },
                o = e("./error.js")
        }, {
            "./error.js": 23,
            "./p2pclient.js": 25
        }],
        25: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r = c(e("../base/logger.js")),
                i = e("../base/event.js"),
                o = (s(e("../base/utils.js")), s(e("./error.js"))),
                a = c(e("./peerconnection-channel.js"));

            function s(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                        } return t.default = e, t
            }

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var u = 1,
                d = 2,
                l = 3,
                f = function(e, t) {
                    Object.setPrototypeOf(this, new i.EventDispatcher);
                    var n, s = e,
                        c = t,
                        f = new Map,
                        p = this,
                        h = u;
                    c.onMessage = function(e, t) {
                        r.default.debug("Received signaling message from " + e + ": " + t);
                        var n = JSON.parse(t);
                        "chat-closed" !== n.type ? p.allowedRemoteIds.indexOf(e) >= 0 ? m(e).onMessage(n) : v(e, "chat-closed", o.errors.P2P_CLIENT_DENIED) : f.has(e) && (m(e).onMessage(n), f.delete(e))
                    }, c.onServerDisconnected = function() {
                        h = u, p.dispatchEvent(new i.OwtEvent("serverdisconnected"))
                    }, this.allowedRemoteIds = [], this.connect = function(e) {
                        return h !== u ? (r.default.warning("Invalid connection state: " + h), Promise.reject(new o.P2PError(o.errors.P2P_CLIENT_INVALID_STATE))) : (h = d, new Promise(function(t, r) {
                            c.connect(e).then(function(e) {
                                h = l, t(n = e)
                            }, function(e) {
                                r(new o.P2PError(o.getErrorByCode(e)))
                            })
                        }))
                    }, this.disconnect = function() {
                        h != u && (f.forEach(function(e) {
                            e.stop()
                        }), f.clear(), c.disconnect())
                    }, this.publish = function(e, t) {
                        return h !== l ? Promise.reject(new o.P2PError(o.errors.P2P_CLIENT_INVALID_STATE, "P2P Client is not connected to signaling channel.")) : this.allowedRemoteIds.indexOf(e) < 0 ? Promise.reject(new o.P2PError(o.errors.P2P_CLIENT_NOT_ALLOWED)) : Promise.resolve(m(e).publish(t))
                    }, this.send = function(e, t) {
                        return h !== l ? Promise.reject(new o.P2PError(o.errors.P2P_CLIENT_INVALID_STATE, "P2P Client is not connected to signaling channel.")) : this.allowedRemoteIds.indexOf(e) < 0 ? Promise.reject(new o.P2PError(o.errors.P2P_CLIENT_NOT_ALLOWED)) : Promise.resolve(m(e).send(t))
                    }, this.stop = function(e) {
                        f.has(e) ? (f.get(e).stop(), f.delete(e)) : r.default.warning("No PeerConnection between current endpoint and specific remote endpoint.")
                    }, this.getStats = function(e) {
                        return f.has(e) ? f.get(e).getStats() : Promise.reject(new o.P2PError(o.errors.P2P_CLIENT_INVALID_STATE, "No PeerConnection between current endpoint and specific remote endpoint."))
                    };
                    var v = function(e, t, n) {
                            var r = {
                                type: t
                            };
                            return n && (r.data = n), c.send(e, JSON.stringify(r)).catch(function(e) {
                                if ("number" == typeof e) throw o.getErrorByCode(e)
                            })
                        },
                        m = function(e) {
                            if (!f.has(e)) {
                                var t = Object.create(i.EventDispatcher);
                                t.sendSignalingMessage = v;
                                var r = new a.default(s, n, e, t);
                                r.addEventListener("streamadded", function(e) {
                                    p.dispatchEvent(e)
                                }), r.addEventListener("messagereceived", function(e) {
                                    p.dispatchEvent(e)
                                }), r.addEventListener("ended", function() {
                                    f.delete(e)
                                }), f.set(e, r)
                            }
                            return f.get(e)
                        }
                };
            n.default = f
        }, {
            "../base/event.js": 3,
            "../base/logger.js": 5,
            "../base/utils.js": 11,
            "./error.js": 23,
            "./peerconnection-channel.js": 26
        }],
        26: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = n.P2PPeerConnectionChannelEvent = void 0;
            var r, i = (r = e("../base/logger.js")) && r.__esModule ? r : {
                    default: r
                },
                o = e("../base/event.js"),
                a = e("../base/publication.js"),
                s = l(e("../base/utils.js")),
                c = l(e("./error.js")),
                u = l(e("../base/stream.js")),
                d = l(e("../base/sdputils.js"));

            function l(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                        } return t.default = e, t
            }

            function f(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }

            function p(e) {
                return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function h(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function v(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function m(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function _(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && y(e, t)
            }

            function b(e) {
                var t = "function" == typeof Map ? new Map : void 0;
                return (b = function(e) {
                    if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
                    var n;
                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== t) {
                        if (t.has(e)) return t.get(e);
                        t.set(e, r)
                    }

                    function r() {
                        return g(e, arguments, S(this).constructor)
                    }
                    return r.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: r,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), y(r, e)
                })(e)
            }

            function g(e, t, n) {
                return (g = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }() ? Reflect.construct : function(e, t, n) {
                    var r = [null];
                    r.push.apply(r, t);
                    var i = new(Function.bind.apply(e, r));
                    return n && y(i, n.prototype), i
                }).apply(null, arguments)
            }

            function y(e, t) {
                return (y = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function S(e) {
                return (S = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var P = function(e) {
                function t(e) {
                    var n;
                    return v(this, t), (n = m(this, S(t).call(this, e))).stream = e.stream, n
                }
                return _(t, b(Event)), t
            }();
            n.P2PPeerConnectionChannelEvent = P;
            var w = "message",
                O = "chat-closed",
                E = "chat-track-sources",
                j = "chat-stream-info",
                C = "chat-signal",
                T = "chat-tracks-added",
                k = "chat-tracks-removed",
                I = "chat-data-received",
                R = "chat-ua",
                M = s.sysInfo(),
                A = function(e) {
                    function t(e, n, r, i) {
                        var o;
                        return v(this, t), (o = m(this, S(t).call(this)))._config = e, o._localId = n, o._remoteId = r, o._signaling = i, o._pc = null, o._publishedStreams = new Map, o._pendingStreams = [], o._publishingStreams = [], o._pendingUnpublishStreams = [], o._remoteStreamInfo = new Map, o._remoteStreams = [], o._remoteTrackSourceInfo = new Map, o._publishPromises = new Map, o._unpublishPromises = new Map, o._publishingStreamTracks = new Map, o._publishedStreamTracks = new Map, o._isNegotiationNeeded = !1, o._remoteSideSupportsRemoveStream = !0, o._remoteSideSupportsPlanB = !0, o._remoteSideSupportsUnifiedPlan = !0, o._remoteIceCandidates = [], o._dataChannels = new Map, o._pendingMessages = [], o._dataSeq = 1, o._sendDataPromises = new Map, o._addedTrackIds = [], o._isCaller = !0, o._infoSent = !1, o._disposed = !1, o._createPeerConnection(), o
                    }
                    var n, r, l;
                    return _(t, o.EventDispatcher), n = t, (r = [{
                        key: "publish",
                        value: function(e) {
                            var t = this;
                            return e instanceof u.LocalStream ? this._publishedStreams.has(e) ? Promise.reject(new c.P2PError(c.errors.P2P_CLIENT_ILLEGAL_ARGUMENT, "Duplicated stream.")) : this._areAllTracksEnded(e.mediaStream) ? Promise.reject(new c.P2PError(c.errors.P2P_CLIENT_INVALID_STATE, "All tracks are ended.")) : Promise.all([this._sendClosedMsgIfNecessary(), this._sendSysInfoIfNecessary(), this._sendStreamInfo(e)]).then(function() {
                                return new Promise(function(n, r) {
                                    var i = !0,
                                        o = !1,
                                        a = void 0;
                                    try {
                                        for (var s, c = e.mediaStream.getTracks()[Symbol.iterator](); !(i = (s = c.next()).done); i = !0) {
                                            var u = s.value;
                                            t._pc.addTrack(u, e.mediaStream)
                                        }
                                    } catch (e) {
                                        o = !0, a = e
                                    } finally {
                                        try {
                                            i || null == c.return || c.return()
                                        } finally {
                                            if (o) throw a
                                        }
                                    }
                                    t._onNegotiationneeded(), t._publishingStreams.push(e);
                                    var d = Array.from(e.mediaStream.getTracks(), function(e) {
                                        return e.id
                                    });
                                    t._publishingStreamTracks.set(e.mediaStream.id, d), t._publishPromises.set(e.mediaStream.id, {
                                        resolve: n,
                                        reject: r
                                    })
                                })
                            }) : Promise.reject(new TypeError("Invalid stream."))
                        }
                    }, {
                        key: "send",
                        value: function(e) {
                            var t = this;
                            if ("string" != typeof e) return Promise.reject(new TypeError("Invalid message."));
                            var n = {
                                    id: this._dataSeq++,
                                    data: e
                                },
                                r = new Promise(function(e, r) {
                                    t._sendDataPromises.set(n.id, {
                                        resolve: e,
                                        reject: r
                                    })
                                });
                            return this._dataChannels.has(w) || this._createDataChannel(w), this._sendClosedMsgIfNecessary().catch(function(e) {
                                i.default.debug("Failed to send closed message." + e.message)
                            }), this._sendSysInfoIfNecessary().catch(function(e) {
                                i.default.debug("Failed to send sysInfo." + e.message)
                            }), "open" === this._dataChannels.get(w).readyState ? this._dataChannels.get(w).send(JSON.stringify(n)) : this._pendingMessages.push(n), r
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this._stop(void 0, !0)
                        }
                    }, {
                        key: "getStats",
                        value: function(e) {
                            var t = this;
                            if (this._pc) {
                                if (void 0 === e) return this._pc.getStats();
                                var n = [];
                                return Promise.all([e.getTracks().forEach(function(e) {
                                    t._getStats(e, n)
                                })]).then(function() {
                                    return new Promise(function(e, t) {
                                        e(n)
                                    })
                                })
                            }
                            return Promise.reject(new c.P2PError(c.errors.P2P_CLIENT_INVALID_STATE))
                        }
                    }, {
                        key: "_getStats",
                        value: function(e, t) {
                            return this._pc.getStats(e).then(function(e) {
                                t.push(e)
                            })
                        }
                    }, {
                        key: "onMessage",
                        value: function(e) {
                            this._SignalingMesssageHandler(e)
                        }
                    }, {
                        key: "_sendSdp",
                        value: function(e) {
                            return this._signaling.sendSignalingMessage(this._remoteId, C, e)
                        }
                    }, {
                        key: "_sendSignalingMessage",
                        value: function(e, t) {
                            return this._signaling.sendSignalingMessage(this._remoteId, e, t)
                        }
                    }, {
                        key: "_SignalingMesssageHandler",
                        value: function(e) {
                            switch (i.default.debug("Channel received message: " + e), e.type) {
                                case R:
                                    this._handleRemoteCapability(e.data), this._sendSysInfoIfNecessary();
                                    break;
                                case E:
                                    this._trackSourcesHandler(e.data);
                                    break;
                                case j:
                                    this._streamInfoHandler(e.data);
                                    break;
                                case C:
                                    this._sdpHandler(e.data);
                                    break;
                                case T:
                                    this._tracksAddedHandler(e.data);
                                    break;
                                case k:
                                    this._tracksRemovedHandler(e.data);
                                    break;
                                case I:
                                    this._dataReceivedHandler(e.data);
                                    break;
                                case O:
                                    this._chatClosedHandler(e.data);
                                    break;
                                default:
                                    i.default.error("Invalid signaling message received. Type: " + e.type)
                            }
                        }
                    }, {
                        key: "_tracksAddedHandler",
                        value: function(e) {
                            var t = this,
                                n = !0,
                                r = !1,
                                s = void 0;
                            try {
                                for (var u, d = function() {
                                        var e = u.value;
                                        t._publishingStreamTracks.forEach(function(n, r) {
                                            for (var s = 0; s < n.length; s++) {
                                                if (n[s] === e && (t._publishedStreamTracks.has(r) || t._publishedStreamTracks.set(r, []), t._publishedStreamTracks.get(r).push(n[s]), n.splice(s, 1)), 0 == n.length)
                                                    if ("continue" === function() {
                                                            if (!t._publishPromises.has(r)) return i.default.warning("Cannot find the promise for publishing " + r), "continue";
                                                            var n = t._publishingStreams.findIndex(function(e) {
                                                                    return e.mediaStream.id == r
                                                                }),
                                                                s = t._publishingStreams[n];
                                                            t._publishingStreams.splice(n, 1);
                                                            var u = new a.Publication(e, function() {
                                                                t._unpublish(s).then(function() {
                                                                    u.dispatchEvent(new o.OwtEvent("ended"))
                                                                }, function(e) {
                                                                    i.default.debug("Something wrong happened during stopping a publication. " + e.message)
                                                                })
                                                            }, function() {
                                                                return s && s.mediaStream ? t.getStats(s.mediaStream) : Promise.reject(new c.P2PError(c.errors.P2P_CLIENT_INVALID_STATE, "Publication is not available."))
                                                            });
                                                            t._publishedStreams.set(s, u), t._publishPromises.get(r).resolve(u), t._publishPromises.delete(r)
                                                        }()) continue
                                            }
                                        })
                                    }, l = e[Symbol.iterator](); !(n = (u = l.next()).done); n = !0) d()
                            } catch (e) {
                                r = !0, s = e
                            } finally {
                                try {
                                    n || null == l.return || l.return()
                                } finally {
                                    if (r) throw s
                                }
                            }
                        }
                    }, {
                        key: "_tracksRemovedHandler",
                        value: function(e) {
                            var t = this,
                                n = !0,
                                r = !1,
                                i = void 0;
                            try {
                                for (var o, a = function() {
                                        var e = o.value;
                                        t._publishedStreamTracks.forEach(function(t, n) {
                                            for (var r = 0; r < t.length; r++) t[r] === e && t.splice(r, 1)
                                        })
                                    }, s = e[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) a()
                            } catch (e) {
                                r = !0, i = e
                            } finally {
                                try {
                                    n || null == s.return || s.return()
                                } finally {
                                    if (r) throw i
                                }
                            }
                        }
                    }, {
                        key: "_dataReceivedHandler",
                        value: function(e) {
                            this._sendDataPromises.has(e) ? this._sendDataPromises.get(e).resolve() : i.default.warning("Received unknown data received message. ID: " + e)
                        }
                    }, {
                        key: "_sdpHandler",
                        value: function(e) {
                            "offer" === e.type ? this._onOffer(e) : "answer" === e.type ? this._onAnswer(e) : "candidates" === e.type && this._onRemoteIceCandidate(e)
                        }
                    }, {
                        key: "_trackSourcesHandler",
                        value: function(e) {
                            var t = !0,
                                n = !1,
                                r = void 0;
                            try {
                                for (var i, o = e[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                                    var a = i.value;
                                    this._remoteTrackSourceInfo.set(a.id, a.source)
                                }
                            } catch (e) {
                                n = !0, r = e
                            } finally {
                                try {
                                    t || null == o.return || o.return()
                                } finally {
                                    if (n) throw r
                                }
                            }
                        }
                    }, {
                        key: "_streamInfoHandler",
                        value: function(e) {
                            e ? this._remoteStreamInfo.set(e.id, {
                                source: e.source,
                                attributes: e.attributes,
                                stream: null,
                                mediaStream: null,
                                trackIds: e.tracks
                            }) : i.default.warning("Unexpected stream info.")
                        }
                    }, {
                        key: "_chatClosedHandler",
                        value: function(e) {
                            this._disposed = !0, this._stop(e, !1)
                        }
                    }, {
                        key: "_onOffer",
                        value: function(e) {
                            var t = this;
                            i.default.debug("About to set remote description. Signaling state: " + this._pc.signalingState), e.sdp = this._setRtpSenderOptions(e.sdp, this._config), s.isFirefox() && (e.sdp = this._setCodecOrder(e.sdp));
                            var n = new RTCSessionDescription(e);
                            this._pc.setRemoteDescription(n).then(function() {
                                t._createAndSendAnswer()
                            }, function(e) {
                                i.default.debug("Set remote description failed. Message: " + e.message), t._stop(e, !0)
                            })
                        }
                    }, {
                        key: "_onAnswer",
                        value: function(e) {
                            var t = this;
                            i.default.debug("About to set remote description. Signaling state: " + this._pc.signalingState), e.sdp = this._setRtpSenderOptions(e.sdp, this._config);
                            var n = new RTCSessionDescription(e);
                            this._pc.setRemoteDescription(new RTCSessionDescription(n)).then(function() {
                                i.default.debug("Set remote descripiton successfully."), t._drainPendingMessages()
                            }, function(e) {
                                i.default.debug("Set remote description failed. Message: " + e.message), t._stop(e, !0)
                            })
                        }
                    }, {
                        key: "_onLocalIceCandidate",
                        value: function(e) {
                            e.candidate ? this._sendSdp({
                                type: "candidates",
                                candidate: e.candidate.candidate,
                                sdpMid: e.candidate.sdpMid,
                                sdpMLineIndex: e.candidate.sdpMLineIndex
                            }).catch(function(e) {
                                i.default.warning("Failed to send candidate.")
                            }) : i.default.debug("Empty candidate.")
                        }
                    }, {
                        key: "_onRemoteTrackAdded",
                        value: function(e) {
                            i.default.debug("Remote track added.");
                            var t = !0,
                                n = !1,
                                r = void 0;
                            try {
                                for (var o, a = e.streams[Symbol.iterator](); !(t = (o = a.next()).done); t = !0) {
                                    var s = o.value;
                                    if (!this._remoteStreamInfo.has(s.id)) return void i.default.warning("Missing stream info.");
                                    this._remoteStreamInfo.get(s.id).stream || this._setStreamToRemoteStreamInfo(s)
                                }
                            } catch (e) {
                                n = !0, r = e
                            } finally {
                                try {
                                    t || null == a.return || a.return()
                                } finally {
                                    if (n) throw r
                                }
                            }
                            "connected" === this._pc.iceConnectionState || "completed" === this._pc.iceConnectionState ? this._checkIceConnectionStateAndFireEvent() : this._addedTrackIds.concat(e.track.id)
                        }
                    }, {
                        key: "_onRemoteStreamAdded",
                        value: function(e) {
                            if (i.default.debug("Remote stream added."), this._remoteStreamInfo.has(e.stream.id)) {
                                "connected" === this._pc.iceConnectionState || "completed" === this._pc.iceConnectionState ? this._sendSignalingMessage(T, this._remoteStreamInfo.get(e.stream.id).trackIds) : this._addedTrackIds = this._addedTrackIds.concat(this._remoteStreamInfo.get(e.stream.id).trackIds);
                                var t = this._remoteStreamInfo.get(e.stream.id).source.audio,
                                    n = this._remoteStreamInfo.get(e.stream.id).source.video,
                                    r = new u.StreamSourceInfo(t, n);
                                s.isSafari() && (r.audio || e.stream.getAudioTracks().forEach(function(t) {
                                    e.stream.removeTrack(t)
                                }), r.video || e.stream.getVideoTracks().forEach(function(t) {
                                    e.stream.removeTrack(t)
                                }));
                                var o = this._remoteStreamInfo.get(e.stream.id).attributes,
                                    a = new u.RemoteStream(void 0, this._remoteId, e.stream, r, o);
                                if (a) {
                                    this._remoteStreams.push(a);
                                    var c = new u.StreamEvent("streamadded", {
                                        stream: a
                                    });
                                    this.dispatchEvent(c)
                                }
                            } else i.default.warning("Cannot find source info for stream " + e.stream.id)
                        }
                    }, {
                        key: "_onRemoteStreamRemoved",
                        value: function(e) {
                            i.default.debug("Remote stream removed.");
                            var t = this._remoteStreams.findIndex(function(t) {
                                return t.mediaStream.id === e.stream.id
                            });
                            if (-1 !== t) {
                                var n = this._remoteStreams[t];
                                this._streamRemoved(n), this._remoteStreams.splice(t, 1)
                            }
                        }
                    }, {
                        key: "_onNegotiationneeded",
                        value: function() {
                            i.default.debug("On negotiation needed."), "stable" === this._pc.signalingState ? this._doNegotiate() : this._isNegotiationNeeded = !0
                        }
                    }, {
                        key: "_onRemoteIceCandidate",
                        value: function(e) {
                            var t = new RTCIceCandidate({
                                candidate: e.candidate,
                                sdpMid: e.sdpMid,
                                sdpMLineIndex: e.sdpMLineIndex
                            });
                            this._pc.remoteDescription && "" !== this._pc.remoteDescription.sdp ? (i.default.debug("Add remote ice candidates."), this._pc.addIceCandidate(t).catch(function(e) {
                                i.default.warning("Error processing ICE candidate: " + e)
                            })) : (i.default.debug("Cache remote ice candidates."), this._remoteIceCandidates.push(t))
                        }
                    }, {
                        key: "_onSignalingStateChange",
                        value: function(e) {
                            i.default.debug("Signaling state changed: " + this._pc.signalingState), "closed" === this._pc.signalingState || ("stable" === this._pc.signalingState ? (this._negotiating = !1, this._isNegotiationNeeded ? this._onNegotiationneeded() : (this._drainPendingStreams(), this._drainPendingMessages())) : "have-remote-offer" === this._pc.signalingState && this._drainPendingRemoteIceCandidates())
                        }
                    }, {
                        key: "_onIceConnectionStateChange",
                        value: function(e) {
                            if ("closed" === e.currentTarget.iceConnectionState || "failed" === e.currentTarget.iceConnectionState) {
                                var t = new c.P2PError(c.errors.P2P_WEBRTC_UNKNOWN, "ICE connection failed or closed.");
                                this._stop(t, !0)
                            } else "connected" !== e.currentTarget.iceConnectionState && "completed" !== e.currentTarget.iceConnectionState || (this._sendSignalingMessage(T, this._addedTrackIds), this._addedTrackIds = [], this._checkIceConnectionStateAndFireEvent())
                        }
                    }, {
                        key: "_onDataChannelMessage",
                        value: function(e) {
                            var t = JSON.parse(e.data);
                            i.default.debug("Data channel message received: " + t.data), this._sendSignalingMessage(I, t.id);
                            var n = new o.MessageEvent("messagereceived", {
                                message: t.data,
                                origin: this._remoteId
                            });
                            this.dispatchEvent(n)
                        }
                    }, {
                        key: "_onDataChannelOpen",
                        value: function(e) {
                            i.default.debug("Data Channel is opened."), e.target.label === w && (i.default.debug("Data channel for messages is opened."), this._drainPendingMessages())
                        }
                    }, {
                        key: "_onDataChannelClose",
                        value: function(e) {
                            i.default.debug("Data Channel is closed.")
                        }
                    }, {
                        key: "_streamRemoved",
                        value: function(e) {
                            this._remoteStreamInfo.has(e.mediaStream.id) || i.default.warning("Cannot find stream info."), this._sendSignalingMessage(k, this._remoteStreamInfo.get(e.mediaStream.id).trackIds);
                            var t = new o.OwtEvent("ended");
                            e.dispatchEvent(t)
                        }
                    }, {
                        key: "_isUnifiedPlan",
                        value: function() {
                            if (s.isFirefox()) return !0;
                            var e = new RTCPeerConnection({
                                sdpSemantics: "unified-plan"
                            });
                            return e.getConfiguration() && "plan-b" === e.getConfiguration().sdpSemantics
                        }
                    }, {
                        key: "_createPeerConnection",
                        value: function() {
                            var e = this,
                                t = this._config.rtcConfiguration || {};
                            s.isChrome() && (t.sdpSemantics = "unified-plan"), this._pc = new RTCPeerConnection(t), "function" == typeof this._pc.addTransceiver && s.isSafari() && (this._pc.addTransceiver("audio"), this._pc.addTransceiver("video")), this._isUnifiedPlan() || s.isSafari() ? this._pc.ontrack = function(t) {
                                e._onRemoteTrackAdded.apply(e, [t])
                            } : (this._pc.onaddstream = function(t) {
                                e._onRemoteStreamAdded.apply(e, [t])
                            }, this._pc.onremovestream = function(t) {
                                e._onRemoteStreamRemoved.apply(e, [t])
                            }), this._pc.onicecandidate = function(t) {
                                e._onLocalIceCandidate.apply(e, [t])
                            }, this._pc.onsignalingstatechange = function(t) {
                                e._onSignalingStateChange.apply(e, [t])
                            }, this._pc.ondatachannel = function(t) {
                                i.default.debug("On data channel."), e._dataChannels.has(t.channel.label) || (e._dataChannels.set(t.channel.label, t.channel), i.default.debug("Save remote created data channel.")), e._bindEventsToDataChannel(t.channel)
                            }, this._pc.oniceconnectionstatechange = function(t) {
                                e._onIceConnectionStateChange.apply(e, [t])
                            }
                        }
                    }, {
                        key: "_drainPendingStreams",
                        value: function() {
                            var e = !1;
                            if (i.default.debug("Draining pending streams."), this._pc && "stable" === this._pc.signalingState) {
                                i.default.debug("Peer connection is ready for draining pending streams.");
                                for (var t = 0; t < this._pendingStreams.length; t++) {
                                    var n = this._pendingStreams[t];
                                    if (this._pendingStreams.shift(), n.mediaStream) {
                                        var r = !0,
                                            o = !1,
                                            a = void 0;
                                        try {
                                            for (var s, c = n.mediaStream.getTracks()[Symbol.iterator](); !(r = (s = c.next()).done); r = !0) {
                                                var u = s.value;
                                                this._pc.addTrack(u, n.mediaStream), e = !0
                                            }
                                        } catch (e) {
                                            o = !0, a = e
                                        } finally {
                                            try {
                                                r || null == c.return || c.return()
                                            } finally {
                                                if (o) throw a
                                            }
                                        }
                                        i.default.debug("Added stream to peer connection."), this._publishingStreams.push(n)
                                    }
                                }
                                this._pendingStreams.length = 0;
                                for (var d = 0; d < this._pendingUnpublishStreams.length; d++) this._pendingUnpublishStreams[d].mediaStream && (this._pc.removeStream(this._pendingUnpublishStreams[d].mediaStream), e = !0, this._unpublishPromises.get(this._pendingUnpublishStreams[d].mediaStream.id).resolve(), this._publishedStreams.delete(this._pendingUnpublishStreams[d]), i.default.debug("Remove stream."));
                                this._pendingUnpublishStreams.length = 0
                            }
                            e && this._onNegotiationneeded()
                        }
                    }, {
                        key: "_drainPendingRemoteIceCandidates",
                        value: function() {
                            for (var e = 0; e < this._remoteIceCandidates.length; e++) i.default.debug("Add candidate"), this._pc.addIceCandidate(this._remoteIceCandidates[e]).catch(function(e) {
                                i.default.warning("Error processing ICE candidate: " + e)
                            });
                            this._remoteIceCandidates.length = 0
                        }
                    }, {
                        key: "_drainPendingMessages",
                        value: function() {
                            if (i.default.debug("Draining pending messages."), 0 != this._pendingMessages.length) {
                                var e = this._dataChannels.get(w);
                                if (e && "open" === e.readyState) {
                                    for (var t = 0; t < this._pendingMessages.length; t++) i.default.debug("Sending message via data channel: " + this._pendingMessages[t]), e.send(JSON.stringify(this._pendingMessages[t]));
                                    this._pendingMessages.length = 0
                                } else this._pc && !e && this._createDataChannel(w)
                            }
                        }
                    }, {
                        key: "_sendStreamInfo",
                        value: function(e) {
                            if (!e || !e.mediaStream) return new c.P2PError(c.errors.P2P_CLIENT_ILLEGAL_ARGUMENT);
                            var t = [];
                            return e.mediaStream.getTracks().map(function(n) {
                                t.push({
                                    id: n.id,
                                    source: e.source[n.kind]
                                })
                            }), Promise.all([this._sendSignalingMessage(E, t), this._sendSignalingMessage(j, {
                                id: e.mediaStream.id,
                                attributes: e.attributes,
                                tracks: Array.from(t, function(e) {
                                    return e.id
                                }),
                                source: e.source
                            })])
                        }
                    }, {
                        key: "_sendSysInfoIfNecessary",
                        value: function() {
                            return this._infoSent ? Promise.resolve() : (this._infoSent = !0, this._sendSignalingMessage(R, M))
                        }
                    }, {
                        key: "_sendClosedMsgIfNecessary",
                        value: function() {
                            return null === this._pc.remoteDescription || "" === this._pc.remoteDescription.sdp ? this._sendSignalingMessage(O) : Promise.resolve()
                        }
                    }, {
                        key: "_handleRemoteCapability",
                        value: function(e) {
                            e.sdk && e.sdk && "JavaScript" === e.sdk.type && e.runtime && "Firefox" === e.runtime.name ? (this._remoteSideSupportsRemoveStream = !1, this._remoteSideSupportsPlanB = !1, this._remoteSideSupportsUnifiedPlan = !0) : (this._remoteSideSupportsRemoveStream = !0, this._remoteSideSupportsPlanB = !0, this._remoteSideSupportsUnifiedPlan = !1)
                        }
                    }, {
                        key: "_doNegotiate",
                        value: function() {
                            this._createAndSendOffer()
                        }
                    }, {
                        key: "_setCodecOrder",
                        value: function(e) {
                            if (this._config.audioEncodings) {
                                var t = Array.from(this._config.audioEncodings, function(e) {
                                    return e.codec.name
                                });
                                e = d.reorderCodecs(e, "audio", t)
                            }
                            if (this._config.videoEncodings) {
                                var n = Array.from(this._config.videoEncodings, function(e) {
                                    return e.codec.name
                                });
                                e = d.reorderCodecs(e, "video", n)
                            }
                            return e
                        }
                    }, {
                        key: "_setMaxBitrate",
                        value: function(e, t) {
                            return "object" === p(t.audioEncodings) && (e = d.setMaxBitrate(e, t.audioEncodings)), "object" === p(t.videoEncodings) && (e = d.setMaxBitrate(e, t.videoEncodings)), e
                        }
                    }, {
                        key: "_setRtpSenderOptions",
                        value: function(e, t) {
                            return e = this._setMaxBitrate(e, t)
                        }
                    }, {
                        key: "_setRtpReceiverOptions",
                        value: function(e) {
                            return e = this._setCodecOrder(e)
                        }
                    }, {
                        key: "_createAndSendOffer",
                        value: function() {
                            var e, t = this;
                            this._pc ? (this._isNegotiationNeeded = !1, this._isCaller = !0, this._pc.createOffer().then(function(n) {
                                if (n.sdp = t._setRtpReceiverOptions(n.sdp), e = n, "stable" === t._pc.signalingState) return t._pc.setLocalDescription(n).then(function() {
                                    return t._sendSdp(e)
                                })
                            }).catch(function(e) {
                                i.default.error(e.message + " Please check your codec settings.");
                                var n = new c.P2PError(c.errors.P2P_WEBRTC_SDP, e.message);
                                t._stop(n, !0)
                            })) : i.default.error("Peer connection have not been created.")
                        }
                    }, {
                        key: "_createAndSendAnswer",
                        value: function() {
                            var e, t = this;
                            this._drainPendingStreams(), this._isNegotiationNeeded = !1, this._isCaller = !1, this._pc.createAnswer().then(function(n) {
                                return n.sdp = t._setRtpReceiverOptions(n.sdp), e = n, t._logCurrentAndPendingLocalDescription(), t._pc.setLocalDescription(n)
                            }).then(function() {
                                return t._sendSdp(e)
                            }).catch(function(e) {
                                i.default.error(e.message + " Please check your codec settings.");
                                var n = new c.P2PError(c.errors.P2P_WEBRTC_SDP, e.message);
                                t._stop(n, !0)
                            })
                        }
                    }, {
                        key: "_logCurrentAndPendingLocalDescription",
                        value: function() {
                            i.default.info("Current description: " + this._pc.currentLocalDescription), i.default.info("Pending description: " + this._pc.pendingLocalDescription)
                        }
                    }, {
                        key: "_getAndDeleteTrackSourceInfo",
                        value: function(e) {
                            if (e.length > 0) {
                                var t = e[0].id;
                                if (this._remoteTrackSourceInfo.has(t)) {
                                    var n = this._remoteTrackSourceInfo.get(t);
                                    return this._remoteTrackSourceInfo.delete(t), n
                                }
                                i.default.warning("Cannot find source info for " + t)
                            }
                        }
                    }, {
                        key: "_unpublish",
                        value: function(e) {
                            var t = this;
                            return navigator.mozGetUserMedia || !this._remoteSideSupportsRemoveStream ? (i.default.error("Stopping a publication is not supported on Firefox. Please use P2PClient.stop() to stop the connection with remote endpoint."), Promise.reject(new c.P2PError(c.errors.P2P_CLIENT_UNSUPPORTED_METHOD))) : this._publishedStreams.has(e) ? (this._pendingUnpublishStreams.push(e), new Promise(function(n, r) {
                                t._unpublishPromises.set(e.mediaStream.id, {
                                    resolve: n,
                                    reject: r
                                }), t._drainPendingStreams()
                            })) : Promise.reject(new c.P2PError(c.errors.P2P_CLIENT_ILLEGAL_ARGUMENT))
                        }
                    }, {
                        key: "_createDataChannel",
                        value: function(e) {
                            if (this._dataChannels.has(e)) i.default.warning("Data channel labeled " + e + " already exists.");
                            else if (this._pc) {
                                i.default.debug("Create data channel.");
                                var t = this._pc.createDataChannel(e);
                                this._bindEventsToDataChannel(t), this._dataChannels.set(w, t), this._onNegotiationneeded()
                            } else i.default.debug("PeerConnection is not available before creating DataChannel.")
                        }
                    }, {
                        key: "_bindEventsToDataChannel",
                        value: function(e) {
                            var t = this;
                            e.onmessage = function(e) {
                                t._onDataChannelMessage.apply(t, [e])
                            }, e.onopen = function(e) {
                                t._onDataChannelOpen.apply(t, [e])
                            }, e.onclose = function(e) {
                                t._onDataChannelClose.apply(t, [e])
                            }, e.onerror = function(e) {
                                i.default.debug("Data Channel Error:", error)
                            }
                        }
                    }, {
                        key: "_getStreamByTrack",
                        value: function(e) {
                            var t = [],
                                n = !0,
                                r = !1,
                                i = void 0;
                            try {
                                for (var o, a = this._remoteStreamInfo[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                                    var s = f(o.value, 2),
                                        c = (s[0], s[1]);
                                    if (c.stream && c.stream.mediaStream) {
                                        var u = !0,
                                            d = !1,
                                            l = void 0;
                                        try {
                                            for (var p, h = c.stream.mediaStream.getTracks()[Symbol.iterator](); !(u = (p = h.next()).done); u = !0) {
                                                e === p.value && t.push(c.stream.mediaStream)
                                            }
                                        } catch (e) {
                                            d = !0, l = e
                                        } finally {
                                            try {
                                                u || null == h.return || h.return()
                                            } finally {
                                                if (d) throw l
                                            }
                                        }
                                    }
                                }
                            } catch (e) {
                                r = !0, i = e
                            } finally {
                                try {
                                    n || null == a.return || a.return()
                                } finally {
                                    if (r) throw i
                                }
                            }
                            return t
                        }
                    }, {
                        key: "_areAllTracksEnded",
                        value: function(e) {
                            var t = !0,
                                n = !1,
                                r = void 0;
                            try {
                                for (var i, o = e.getTracks()[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                                    if ("live" === i.value.readyState) return !1
                                }
                            } catch (e) {
                                n = !0, r = e
                            } finally {
                                try {
                                    t || null == o.return || o.return()
                                } finally {
                                    if (n) throw r
                                }
                            }
                            return !0
                        }
                    }, {
                        key: "_stop",
                        value: function(e, t) {
                            var n = e;
                            n || (n = new c.P2PError(c.errors.P2P_CLIENT_UNKNOWN));
                            var r = !0,
                                a = !1,
                                s = void 0;
                            try {
                                for (var u, d = this._dataChannels[Symbol.iterator](); !(r = (u = d.next()).done); r = !0) {
                                    var l = f(u.value, 2);
                                    l[0];
                                    l[1].close()
                                }
                            } catch (e) {
                                a = !0, s = e
                            } finally {
                                try {
                                    r || null == d.return || d.return()
                                } finally {
                                    if (a) throw s
                                }
                            }
                            this._dataChannels.clear(), this._pc && "closed" !== this._pc.iceConnectionState && this._pc.close();
                            var p = !0,
                                h = !1,
                                v = void 0;
                            try {
                                for (var m, _ = this._publishPromises[Symbol.iterator](); !(p = (m = _.next()).done); p = !0) {
                                    var b = f(m.value, 2);
                                    b[0];
                                    b[1].reject(n)
                                }
                            } catch (e) {
                                h = !0, v = e
                            } finally {
                                try {
                                    p || null == _.return || _.return()
                                } finally {
                                    if (h) throw v
                                }
                            }
                            this._publishPromises.clear();
                            var g = !0,
                                y = !1,
                                S = void 0;
                            try {
                                for (var P, w = this._unpublishPromises[Symbol.iterator](); !(g = (P = w.next()).done); g = !0) {
                                    var E = f(P.value, 2);
                                    E[0];
                                    E[1].reject(n)
                                }
                            } catch (e) {
                                y = !0, S = e
                            } finally {
                                try {
                                    g || null == w.return || w.return()
                                } finally {
                                    if (y) throw S
                                }
                            }
                            this._unpublishPromises.clear();
                            var j = !0,
                                C = !1,
                                T = void 0;
                            try {
                                for (var k, I = this._sendDataPromises[Symbol.iterator](); !(j = (k = I.next()).done); j = !0) {
                                    var R = f(k.value, 2);
                                    R[0];
                                    R[1].reject(n)
                                }
                            } catch (e) {
                                C = !0, T = e
                            } finally {
                                try {
                                    j || null == I.return || I.return()
                                } finally {
                                    if (C) throw T
                                }
                            }
                            if (this._sendDataPromises.clear(), this._publishedStreams.forEach(function(e) {
                                    e.dispatchEvent(new o.OwtEvent("ended"))
                                }), this._publishedStreams.clear(), this._remoteStreams.forEach(function(e) {
                                    e.dispatchEvent(new o.OwtEvent("ended"))
                                }), this._remoteStreams = [], !this._disposed) {
                                var M;
                                if (t) e && ((M = JSON.parse(JSON.stringify(e))).message = "Error happened at remote side."), this._sendSignalingMessage(O, M).catch(function(e) {
                                    i.default.debug("Failed to send close." + e.message)
                                });
                                this.dispatchEvent(new Event("ended"))
                            }
                        }
                    }, {
                        key: "_setStreamToRemoteStreamInfo",
                        value: function(e) {
                            var t = this._remoteStreamInfo.get(e.id),
                                n = t.attributes,
                                r = new u.StreamSourceInfo(this._remoteStreamInfo.get(e.id).source.audio, this._remoteStreamInfo.get(e.id).source.video);
                            t.stream = new u.RemoteStream(void 0, this._remoteId, e, r, n), t.mediaStream = e;
                            var o = t.stream;
                            o ? this._remoteStreams.push(o) : i.default.warning("Failed to create RemoteStream.")
                        }
                    }, {
                        key: "_checkIceConnectionStateAndFireEvent",
                        value: function() {
                            var e = this;
                            if ("connected" === this._pc.iceConnectionState || "completed" === this._pc.iceConnectionState) {
                                var t = !0,
                                    n = !1,
                                    r = void 0;
                                try {
                                    for (var i, o = this._remoteStreamInfo[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                                        var a = f(i.value, 2),
                                            s = (a[0], a[1]);
                                        if (s.mediaStream) {
                                            var c = new u.StreamEvent("streamadded", {
                                                stream: s.stream
                                            });
                                            if (this._isUnifiedPlan()) {
                                                var d = !0,
                                                    l = !1,
                                                    p = void 0;
                                                try {
                                                    for (var h, v = s.mediaStream.getTracks()[Symbol.iterator](); !(d = (h = v.next()).done); d = !0) {
                                                        h.value.addEventListener("ended", function(t) {
                                                            var n = e._getStreamByTrack(t.target),
                                                                r = !0,
                                                                i = !1,
                                                                o = void 0;
                                                            try {
                                                                for (var a, s = n[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) {
                                                                    var c = a.value;
                                                                    e._areAllTracksEnded(c) && e._onRemoteStreamRemoved(c)
                                                                }
                                                            } catch (e) {
                                                                i = !0, o = e
                                                            } finally {
                                                                try {
                                                                    r || null == s.return || s.return()
                                                                } finally {
                                                                    if (i) throw o
                                                                }
                                                            }
                                                        })
                                                    }
                                                } catch (e) {
                                                    l = !0, p = e
                                                } finally {
                                                    try {
                                                        d || null == v.return || v.return()
                                                    } finally {
                                                        if (l) throw p
                                                    }
                                                }
                                            }
                                            this._sendSignalingMessage(T, s.trackIds), this._remoteStreamInfo.get(s.mediaStream.id).mediaStream = null, this.dispatchEvent(c)
                                        }
                                    }
                                } catch (e) {
                                    n = !0, r = e
                                } finally {
                                    try {
                                        t || null == o.return || o.return()
                                    } finally {
                                        if (n) throw r
                                    }
                                }
                            }
                        }
                    }]) && h(n.prototype, r), l && h(n, l), t
                }();
            n.default = A
        }, {
            "../base/event.js": 3,
            "../base/logger.js": 5,
            "../base/publication.js": 8,
            "../base/sdputils.js": 9,
            "../base/stream.js": 10,
            "../base/utils.js": 11,
            "./error.js": 23
        }]
    }, {}, [22])(22)
});