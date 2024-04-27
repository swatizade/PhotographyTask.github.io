"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
    [471], {
        18176: (e, t, n) => {
            var a = n(19755);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.fetchInstagramData = i, t.getBlockOrElementRender = function(e) {
                var t, n, i;
                if (null === (t = window.fData) || void 0 === t || !t.initialData || "appRoot" in window) return Promise.resolve("");
                var r = null === (n = window.fData.initialData) || void 0 === n || null === (n = n.app) || void 0 === n ? void 0 : n.psUuid,
                    d = null === (i = window.fData.initialData) || void 0 === i || null === (i = i.app) || void 0 === i ? void 0 : i.ppUuid,
                    u = void 0 === e.getUuid,
                    s = u ? e.getFieldValue("uuid") : e.getUuid(),
                    l = {
                        psu: r,
                        ppu: d
                    };
                return l[u ? "bu" : "eu"] = s, window.axios.get("/pw/render", {
                    params: l,
                    retry: 2
                }).then((function(t) {
                    var n = t.data.data.elementHTML;
                    if (u) {
                        var o = a(n).find(".footer-instagram");
                        e.$block.find(".footer-instagram").html(o)
                    } else e.$element.html(n);
                    return n
                })).catch((function(e) {
                    var t;
                    if (e.isNetworkRelated) return !1;
                    var n = {
                        extra: {
                            isBlock: u,
                            entityUuid: s,
                            publishedPageUuid: d,
                            publishedSiteUuid: r,
                            message: (null === (t = e.response) || void 0 === t || null === (t = t.data) || void 0 === t ? void 0 : t.message) || "[No response message found.]"
                        }
                    };
                    return (0, o.captureException)(e, n), Promise.reject(e)
                }))
            }, t.onInitEvents = function() {
                i()
            }, n(41539), n(88674), n(69826);
            var o = n(41604);

            function i() {
                !!document.querySelector(".js-instagram-images-fetch") && window.axios.get("/getInstagramData", {
                    retry: 2
                }).then((function(e) {
                    return {
                        userMedia: e.data.data.user_media,
                        userProfile: e.data.data.user_profile
                    }
                })).catch((function(e) {
                    return !e.isNetworkRelated && e
                })).then((function(e) {
                    var t = e.userMedia,
                        n = e.userProfile,
                        a = new CustomEvent("userMediaFetched", {
                            detail: t
                        });
                    window.fData.userMedia = t, window.fData.iIC = n || "disconnected", document.dispatchEvent(a)
                })).catch((function(e) {
                    return e
                }))
            }
        },
        38742: (e, t, n) => {
            n(47941);
            var a = n(18176);
            document.addEventListener("DOMContentLoaded", (function() {
                document.body.classList.contains("photo--protected") && (document.addEventListener("dragstart", (function(e) {
                    "IMG" === e.target.nodeName && e.preventDefault()
                })), document.addEventListener("contextmenu", (function(e) {
                    "IMG" === e.target.nodeName && e.preventDefault()
                })));
                var e = document.getElementById("js-payload-pw"),
                    t = "pw-undefined-reload",
                    n = !1;
                try {
                    n = "function" == typeof window.localStorage.setItem
                } catch (e) {}
                if (e) {
                    var o = JSON.parse(e.innerHTML),
                        i = function() {
                            window.PW.i(o), (0, a.onInitEvents)(), n && window.localStorage.getItem(t) && window.localStorage.removeItem(t)
                        };
                    if (window.PW) i();
                    else var r = 20,
                        d = setInterval((function() {
                            if (r -= 1, window.PW) clearInterval(d), i();
                            else if (!r) {
                                if (clearInterval(d), !n || window.localStorage.getItem(t)) throw new Error(n ? "PW seems to be undefined after reload." : "PW seems to be undefined and localStorage is not available.");
                                window.localStorage.setItem(t, "1"), window.location.reload();
                                throw new Error("PW seems to be undefined.")
                            }
                        }), 100)
                }
            }))
        }
    },
    e => {
        e.O(0, [898], (() => {
            return t = 38742, e(e.s = t);
            var t
        }));
        e.O()
    }
]);