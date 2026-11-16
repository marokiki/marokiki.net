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
        <div className="ml-2 flex items-center gap-1" aria-label="Language">
            <button type="button" onClick={chooseJa} className={`min-w-10 px-2 py-1.5 rounded-md border text-sm font-medium transition-colors ${pref === 'ja' ? 'border-primary bg-[var(--accent-bg)] text-[var(--primary-strong)]' : 'border-transparent text-secondary hover:text-foreground hover:border-[var(--card-border)]'}`} aria-label="日本語" aria-pressed={pref === 'ja'}>
                JA
            </button>
            <button type="button" onClick={chooseEn} className={`min-w-10 px-2 py-1.5 rounded-md border text-sm font-medium transition-colors ${pref === 'en' ? 'border-primary bg-[var(--accent-bg)] text-[var(--primary-strong)]' : 'border-transparent text-secondary hover:text-foreground hover:border-[var(--card-border)]'}`} aria-label="English" aria-pressed={pref === 'en'}>
                EN
            </button>
        </div>
    );
}
