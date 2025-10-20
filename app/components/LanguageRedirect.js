"use client";

import { useEffect } from "react";

const COOKIE_NAME = "lang_pref";

function readCookie(name) {
    const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
    return m ? decodeURIComponent(m[1]) : null;
}

function setCookie(name, value, days = 365) {
    const maxAge = days * 24 * 60 * 60;
    document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}`;
}

export default function LanguageRedirect() {
    useEffect(() => {
        try {
            const pathname = window.location.pathname || "/";
            // Do nothing on /en paths
            if (pathname.startsWith("/en")) return;

            const pref = readCookie(COOKIE_NAME);
            if (pref === "ja") return; // user explicitly chose Japanese
            if (pref === "en") {
                // user explicitly chose English
                if (!pathname.startsWith("/en")) {
                    window.location.href = `/en${pathname}`;
                }
                return;
            }

            // No preference saved yet: do auto-detect once and save preference
            const lang = navigator.language || navigator.userLanguage || "";
            if (lang && lang.startsWith("en")) {
                // set preference to 'en' (auto)
                setCookie(COOKIE_NAME, "en");
                if (!pathname.startsWith("/en")) {
                    window.location.href = `/en${pathname}`;
                }
            }
        } catch (e) {
            // ignore
        }
    }, []);

    return null;
}
