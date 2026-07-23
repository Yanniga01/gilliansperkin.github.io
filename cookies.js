/**
 * Cookie Consent Manager - Full-Width Pro Edition
 * Unmissable, GDPR-compliant, dependency-free
 * 
 * @version 2.1.0
 * @license MIT
 */
(function() {
    'use strict';

    // ============================
    // Configuration
    // ============================
    const CONFIG = {
        storageKey: 'reviewSiteCookieConsent',
        gaTrackingId: 'G-3DCX56R2GN',
        privacyUrl: '/privacy',
        bannerId: 'cookieConsentBanner',
        debug: false
    };

    // ============================
    // Storage Handler
    // ============================
    const Storage = {
        isAvailable: true,
        init() {
            try {
                const test = '__storage_test__';
                localStorage.setItem(test, test);
                localStorage.removeItem(test);
            } catch(e) {
                this.isAvailable = false;
                if (CONFIG.debug) console.warn('Cookie consent: localStorage unavailable');
            }
        },
        get(key) {
            if (!this.isAvailable) return null;
            try { return localStorage.getItem(key); } catch(e) { return null; }
        },
        set(key, value) {
            if (!this.isAvailable) return false;
            try { localStorage.setItem(key, value); return true; } catch(e) { return false; }
        }
    };
    Storage.init();

    // ============================
    // Analytics
    // ============================
    const Analytics = {
        loaded: false,
        init() {
            if (this.loaded) return;
            try {
                window.dataLayer = window.dataLayer || [];
                window.gtag = function() { window.dataLayer.push(arguments); };
                window.gtag('consent', 'default', {
                    'analytics_storage': 'granted',
                    'ad_storage': 'denied'
                });
                window.gtag('js', new Date());
                window.gtag('config', CONFIG.gaTrackingId, {
                    'anonymize_ip': true,
                    'allow_google_signals': false,
                    'allow_ad_personalization_signals': false
                });
                const script = document.createElement('script');
                script.src = `https://www.googletagmanager.com/gtag/js?id=${CONFIG.gaTrackingId}`;
                script.async = true;
                script.defer = true;
                document.head.appendChild(script);
                this.loaded = true;
                if (CONFIG.debug) console.log('Analytics initialized');
            } catch(e) {
                if (CONFIG.debug) console.error('Analytics failed:', e);
            }
        }
    };

    // ============================
    // FULL-WIDTH BANNER UI (ENLARGED)
    // ============================
    const Banner = {
        existingConsent: Storage.get(CONFIG.storageKey),
        
        injectStyles() {
            if (document.getElementById('cookieBannerStyles')) return;
            const style = document.createElement('style');
            style.id = 'cookieBannerStyles';
            style.textContent = `
                @keyframes slideUpBanner {
                    from { transform: translateY(100%); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                #${CONFIG.bannerId} {
                    animation: slideUpBanner 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
                }
                /* Mobile: Keep it full-width and stack vertically */
                @media (max-width: 768px) {
                    #${CONFIG.bannerId} {
                        padding: 24px 20px !important;
                    }
                    #${CONFIG.bannerId} > div {
                        flex-direction: column !important;
                        align-items: stretch !important;
                        gap: 20px !important;
                    }
                    #${CONFIG.bannerId} .cookie-actions {
                        justify-content: stretch !important;
                        gap: 12px !important;
                    }
                    #${CONFIG.bannerId} .cookie-actions button {
                        flex: 1 !important;
                        justify-content: center !important;
                        padding: 16px 20px !important;
                        font-size: 17px !important;
                        width: 100% !important;
                    }
                    #${CONFIG.bannerId} .cookie-text {
                        font-size: 16px !important;
                    }
                    #${CONFIG.bannerId} .cookie-headline {
                        font-size: 20px !important;
                    }
                }
                /* Extra small phones */
                @media (max-width: 480px) {
                    #${CONFIG.bannerId} {
                        padding: 20px 16px !important;
                    }
                    #${CONFIG.bannerId} .cookie-actions button {
                        padding: 14px 16px !important;
                        font-size: 16px !important;
                    }
                }
            `;
            document.head.appendChild(style);
        },

        create() {
            if (this.existingConsent === 'accepted') { Analytics.init(); return; }
            if (this.existingConsent === 'rejected') return;
            if (document.getElementById(CONFIG.bannerId)) return;
            
            this.injectStyles();

            const banner = document.createElement('div');
            banner.id = CONFIG.bannerId;
            banner.setAttribute('role', 'dialog');
            banner.setAttribute('aria-label', 'Cookie consent');

            // --- MASSIVE, FULL-WIDTH, EDGE-TO-EDGE STYLES ---
            banner.style.cssText = `
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                width: 100%;
                background: #16161d;
                color: #f0f0f5;
                padding: 32px 48px;
                z-index: 2147483647;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                font-size: 18px;
                line-height: 1.6;
                box-shadow: 0 -8px 40px rgba(0,0,0,0.6);
                border-top: 4px solid #4CAF50;
                box-sizing: border-box;
                transition: all 0.3s ease;
            `;

            banner.innerHTML = `
                <div style="
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: space-between;
                    gap: 28px;
                    max-width: 1400px;
                    margin: 0 auto;
                    width: 100%;
                ">
                    <div style="flex: 3 1 320px;">
                        <p class="cookie-headline" style="
                            margin: 0 0 8px 0;
                            font-weight: 700;
                            font-size: 24px;
                            color: #ffffff;
                            letter-spacing: -0.4px;
                        ">
                            🍪 We value your privacy
                        </p>
                        <p class="cookie-text" style="
                            margin: 0;
                            color: #c8c8d4;
                            font-size: 18px;
                            max-width: 750px;
                            line-height: 1.7;
                        ">
                            We use essential and analytics cookies to improve your experience. 
                            By clicking "Accept", you consent to our use of cookies. 
                            <a href="${CONFIG.privacyUrl}" style="
                                color: #8ab4f8;
                                font-weight: 600;
                                text-decoration: none;
                                border-bottom: 2px solid rgba(138, 180, 248, 0.25);
                                transition: border-color 0.2s;
                                font-size: 18px;
                            " onmouseover="this.style.borderColor='#8ab4f8'" 
                               onmouseout="this.style.borderColor='rgba(138,180,248,0.25)'">
                                Learn more
                            </a>
                        </p>
                    </div>
                    <div class="cookie-actions" style="
                        display: flex;
                        gap: 16px;
                        flex-wrap: wrap;
                        flex-shrink: 0;
                        align-items: center;
                    ">
                        <button id="rejectCookiesBtn" style="
                            background: transparent;
                            color: #d0d0dc;
                            border: 2px solid #4a4a5e;
                            padding: 14px 40px;
                            border-radius: 60px;
                            cursor: pointer;
                            font-weight: 600;
                            font-size: 18px;
                            transition: all 0.25s ease;
                            letter-spacing: 0.5px;
                            min-width: 140px;
                        " onmouseover="this.style.background='rgba(255,255,255,0.08)';this.style.borderColor='#8888aa';this.style.transform='scale(1.02)'"
                           onmouseout="this.style.background='transparent';this.style.borderColor='#4a4a5e';this.style.transform='scale(1)'"
                           onfocus="this.style.outline='3px solid #8ab4f8';this.style.outlineOffset='4px'"
                           onblur="this.style.outline='none'">
                            ✕ Reject
                        </button>
                        <button id="acceptCookiesBtn" style="
                            background: #2d7a3a;
                            color: white;
                            border: none;
                            padding: 14px 56px;
                            border-radius: 60px;
                            cursor: pointer;
                            font-weight: 700;
                            font-size: 18px;
                            transition: all 0.25s ease;
                            box-shadow: 0 6px 24px rgba(45, 122, 58, 0.5);
                            letter-spacing: 0.5px;
                            min-width: 160px;
                        " onmouseover="this.style.background='#3aa84c';this.style.boxShadow='0 8px 32px rgba(45,122,58,0.7)';this.style.transform='scale(1.04)'"
                           onmouseout="this.style.background='#2d7a3a';this.style.boxShadow='0 6px 24px rgba(45,122,58,0.5)';this.style.transform='scale(1)'"
                           onfocus="this.style.outline='3px solid #8ab4f8';this.style.outlineOffset='4px'"
                           onblur="this.style.outline='none'">
                            ✓ Accept
                        </button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(banner);
            this.attachEvents();
            if (CONFIG.debug) console.log('Full-width cookie banner displayed');
        },
        
        attachEvents() {
            const acceptBtn = document.getElementById('acceptCookiesBtn');
            const rejectBtn = document.getElementById('rejectCookiesBtn');
            const banner = document.getElementById(CONFIG.bannerId);
            
            if (acceptBtn) {
                acceptBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    Storage.set(CONFIG.storageKey, 'accepted');
                    banner?.remove();
                    Analytics.init();
                    window.dispatchEvent(new CustomEvent('cookieConsentAccepted'));
                });
            }
            
            if (rejectBtn) {
                rejectBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    Storage.set(CONFIG.storageKey, 'rejected');
                    banner?.remove();
                    window.dispatchEvent(new CustomEvent('cookieConsentRejected'));
                });
            }
        },
        
        init() {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => this.create());
            } else {
                this.create();
            }
        }
    };

    // ============================
    // Initialize
    // ============================
    Banner.init();

    // ============================
    // Public API
    // ============================
    window.CookieConsent = {
        getConsent: () => Storage.get(CONFIG.storageKey),
        reset: () => {
            Storage.set(CONFIG.storageKey, null);
            const banner = document.getElementById(CONFIG.bannerId);
            banner?.remove();
            Banner.create();
        },
        accept: () => {
            const acceptBtn = document.getElementById('acceptCookiesBtn');
            if (acceptBtn) { acceptBtn.click(); } 
            else { Storage.set(CONFIG.storageKey, 'accepted'); Analytics.init(); }
        },
        reject: () => {
            const rejectBtn = document.getElementById('rejectCookiesBtn');
            if (rejectBtn) { rejectBtn.click(); } 
            else { Storage.set(CONFIG.storageKey, 'rejected'); }
        },
        isAnalyticsLoaded: () => Analytics.loaded
    };

})();
