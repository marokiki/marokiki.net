"use client";

import { useState, useEffect } from "react";

const COOKIE_NAME = "lang_pref";

function setCookie(name, value, days = 365) {
    const maxAge = days * 24 * 60 * 60;
    document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}`;
}

function readCookie(name) {
    const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
    return m ? decodeURIComponent(m[1]) : null;
}

export default function LanguageToggle() {
    const [pref, setPref] = useState(null);

    useEffect(() => {
        setPref(readCookie(COOKIE_NAME));
    }, []);

    const chooseJa = () => {
        setCookie(COOKIE_NAME, "ja");
        setPref("ja");
        // navigate to root
        if (window.location.pathname.startsWith("/en")) {
            window.location.href = window.location.pathname.replace(/^\/en/, "") || "/";
        }
    };

    const chooseEn = () => {
        setCookie(COOKIE_NAME, "en");
        setPref("en");
        if (!window.location.pathname.startsWith("/en")) {
            window.location.href = `/en${window.location.pathname}`;
        }
    };

    return (
        <div className="ml-2 mt-1 flex items-center">
            <button onClick={chooseJa} className={`p-2 rounded border ${pref === 'ja' ? 'opacity-100' : 'opacity-70'}`} aria-label="日本語">
                JA
            </button>
            <button onClick={chooseEn} className={`p-2 rounded border ml-2 ${pref === 'en' ? 'opacity-100' : 'opacity-70'}`} aria-label="English">
                EN
            </button>
        </div>
    );
}
