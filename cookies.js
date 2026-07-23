/**
 * Cookie Consent Manager - Professional Edition
 * Lightweight, GDPR-compliant, dependency-free
 * 
 * @version 2.0.0
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
    // Storage Handler (unchanged)
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
    // Analytics (unchanged)
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
    // Professional Banner UI (UPGRADED)
    // ============================
    const Banner = {
        existingConsent: Storage.get(CONFIG.storageKey),
        
        // Inject base animation styles once
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
                    animation: slideUpBanner 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
                }
                @media (max-width: 640px) {
                    #${CONFIG.bannerId} > div {
                        flex-direction: column !important;
                        align-items: stretch !important;
                        gap: 16px !important;
                    }
                    #${CONFIG.bannerId} .cookie-actions {
                        justify-content: center !important;
                    }
                    #${CONFIG.bannerId} .cookie-actions button {
                        flex: 1 !important;
                        justify-content: center !important;
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

            // --- PROFESSIONAL STYLES (Larger, Bolder, Modern) ---
            banner.style.cssText = `
                position: fixed;
                bottom: 24px;
                left: 24px;
                right: 24px;
                background: #1e1e2a;
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
                background: rgba(30, 30, 42, 0.96);
                color: #f0f0f5;
                padding: 24px 32px;
                border-radius: 16px;
                z-index: 2147483647;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                font-size: 16px;
                line-height: 1.6;
                box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05) inset;
                border-left: 6px solid #4CAF50;
                box-sizing: border-box;
                max-width: 1200px;
                margin: 0 auto;
                transition: all 0.3s ease;
            `;

            banner.innerHTML = `
                <div style="
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                    width: 100%;
                ">
                    <div style="flex: 2 1 280px;">
                        <p style="
                            margin: 0 0 6px 0;
                            font-weight: 600;
                            font-size: 18px;
                            color: #ffffff;
                            letter-spacing: -0.3px;
                        ">
                            🍪 We value your privacy
                        </p>
                        <p style="
                            margin: 0;
                            color: #c8c8d4;
                            font-size: 15px;
                            max-width: 600px;
                        ">
                            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                            By clicking "Accept", you consent to our use of cookies. 
                            <a href="${CONFIG.privacyUrl}" style="
                                color: #8ab4f8;
                                font-weight: 500;
                                text-decoration: none;
                                border-bottom: 1px solid rgba(138, 180, 248, 0.3);
                                transition: border-color 0.2s;
                            " onmouseover="this.style.borderColor='#8ab4f8'" 
                               onmouseout="this.style.borderColor='rgba(138,180,248,0.3)'">
                                Learn More
                            </a>
                        </p>
                    </div>
                    <div class="cookie-actions" style="
                        display: flex;
                        gap: 12px;
                        flex-wrap: wrap;
                        flex-shrink: 0;
                    ">
                        <button id="rejectCookiesBtn" style="
                            background: transparent;
                            color: #c8c8d4;
                            border: 1.5px solid #4a4a5a;
                            padding: 10px 28px;
                            border-radius: 40px;
                            cursor: pointer;
                            font-weight: 500;
                            font-size: 15px;
                            transition: all 0.25s ease;
                            backdrop-filter: blur(4px);
                            letter-spacing: 0.3px;
                        " onmouseover="this.style.background='rgba(255,255,255,0.05)';this.style.borderColor='#8888aa'"
                           onmouseout="this.style.background='transparent';this.style.borderColor='#4a4a5a'"
                           onfocus="this.style.outline='2px solid #8ab4f8';this.style.outlineOffset='3px'"
                           onblur="this.style.outline='none'">
                            ✕ Reject
                        </button>
                        <button id="acceptCookiesBtn" style="
                            background: #2d7a3a;
                            color: white;
                            border: none;
                            padding: 10px 36px;
                            border-radius: 40px;
                            cursor: pointer;
                            font-weight: 600;
                            font-size: 15px;
                            transition: all 0.25s ease;
                            box-shadow: 0 4px 16px rgba(45, 122, 58, 0.35);
                            letter-spacing: 0.3px;
                        " onmouseover="this.style.background='#369649';this.style.boxShadow='0 6px 24px rgba(45,122,58,0.5)';this.style.transform='translateY(-2px)'"
                           onmouseout="this.style.background='#2d7a3a';this.style.boxShadow='0 4px 16px rgba(45,122,58,0.35)';this.style.transform='translateY(0)'"
                           onfocus="this.style.outline='2px solid #8ab4f8';this.style.outlineOffset='3px'"
                           onblur="this.style.outline='none'">
                            ✓ Accept
                        </button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(banner);
            this.attachEvents();
            if (CONFIG.debug) console.log('Professional cookie banner displayed');
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
    // Public API (unchanged)
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
