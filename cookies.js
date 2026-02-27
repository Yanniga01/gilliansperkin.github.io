/**
 * Cookie Consent Manager for Review Websites
 * Lightweight, GDPR-compliant, and dependency-free
 * 
 * @version 1.1.0
 * @license MIT
 * 
 * Features:
 * - ~2KB minified
 * - No dependencies
 * - Accessible (ARIA labels)
 * - Mobile responsive
 * - Privacy-first (anonymized IP)
 */

(function() {
    'use strict';

    // ============================
    // Configuration
    // ============================
    const CONFIG = {
        storageKey: 'reviewSiteCookieConsent',
        gaTrackingId: 'G-3DCX56R2GN',
        privacyUrl: '/privacy.html',
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
            try {
                return localStorage.getItem(key);
            } catch(e) {
                return null;
            }
        },
        
        set(key, value) {
            if (!this.isAvailable) return false;
            try {
                localStorage.setItem(key, value);
                return true;
            } catch(e) {
                return false;
            }
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
                // Initialize dataLayer
                window.dataLayer = window.dataLayer || [];
                window.gtag = function() { 
                    window.dataLayer.push(arguments); 
                };
                
                // Configure with privacy defaults
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
                
                // Load script asynchronously
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
    // Banner UI
    // ============================
    const Banner = {
        existingConsent: Storage.get(CONFIG.storageKey),
        
        create() {
            // Don't create if consent already given
            if (this.existingConsent === 'accepted') {
                Analytics.init();
                return;
            }
            
            if (this.existingConsent === 'rejected') return;
            
            // Don't create duplicate
            if (document.getElementById(CONFIG.bannerId)) return;
            
            const banner = document.createElement('div');
            banner.id = CONFIG.bannerId;
            banner.setAttribute('role', 'dialog');
            banner.setAttribute('aria-label', 'Cookie consent');
            banner.setAttribute('aria-describedby', 'cookieConsentMessage');
            
            // Inline styles for reliability, zero dependencies
            banner.style.cssText = `
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: #1a1a1a;
                color: #ffffff;
                padding: 16px 20px;
                z-index: 2147483647;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                font-size: 14px;
                line-height: 1.5;
                box-shadow: 0 -4px 12px rgba(0,0,0,0.1);
                display: flex;
                justify-content: center;
                align-items: center;
                box-sizing: border-box;
            `;
            
            banner.innerHTML = `
                <div style="
                    max-width: 1200px;
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: space-between;
                    gap: 16px;
                    margin: 0 auto;
                ">
                    <p id="cookieConsentMessage" style="
                        margin: 0;
                        color: #ffffff;
                        flex: 1 1 300px;
                    ">
                        We use essential and analytics cookies to improve your experience. 
                        By clicking "Accept", you consent to our use of cookies. 
                        <a href="${CONFIG.privacyUrl}" style="
                            color: #66b0ff;
                            text-decoration: underline;
                            transition: opacity 0.2s;
                        " onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">
                            Learn more
                        </a>
                    </p>
                    <div style="
                        display: flex;
                        gap: 12px;
                        flex-wrap: wrap;
                    ">
                        <button id="acceptCookiesBtn" style="
                            background: #28a745;
                            color: white;
                            border: none;
                            padding: 8px 24px;
                            border-radius: 4px;
                            cursor: pointer;
                            font-weight: 600;
                            font-size: 14px;
                            transition: all 0.2s;
                            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                        " onmouseover="this.style.background='#2c974b';this.style.transform='translateY(-1px)'" 
                           onmouseout="this.style.background='#28a745';this.style.transform='translateY(0)'"
                           onfocus="this.style.outline='2px solid #66b0ff';this.style.outlineOffset='2px'"
                           onblur="this.style.outline='none'">
                            Accept
                        </button>
                        <button id="rejectCookiesBtn" style="
                            background: transparent;
                            color: #e0e0e0;
                            border: 1px solid #666;
                            padding: 8px 24px;
                            border-radius: 4px;
                            cursor: pointer;
                            font-weight: 600;
                            font-size: 14px;
                            transition: all 0.2s;
                        " onmouseover="this.style.background='rgba(255,255,255,0.1)';this.style.borderColor='#999'"
                           onmouseout="this.style.background='transparent';this.style.borderColor='#666'"
                           onfocus="this.style.outline='2px solid #66b0ff';this.style.outlineOffset='2px'"
                           onblur="this.style.outline='none'">
                            Reject
                        </button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(banner);
            this.attachEvents();
            
            if (CONFIG.debug) console.log('Cookie banner displayed');
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
                    
                    // Optional: Dispatch custom event for other scripts
                    window.dispatchEvent(new CustomEvent('cookieConsentAccepted'));
                });
            }
            
            if (rejectBtn) {
                rejectBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    Storage.set(CONFIG.storageKey, 'rejected');
                    banner?.remove();
                    
                    // Optional: Dispatch custom event
                    window.dispatchEvent(new CustomEvent('cookieConsentRejected'));
                });
            }
        },
        
        // Check if banner should show on page load
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
    // Public API (optional, but useful)
    // ============================
    window.CookieConsent = {
        /**
         * Get current consent status
         * @returns {string|null} 'accepted', 'rejected', or null
         */
        getConsent: () => Storage.get(CONFIG.storageKey),
        
        /**
         * Reset consent and show banner again
         */
        reset: () => {
            Storage.set(CONFIG.storageKey, null);
            const banner = document.getElementById(CONFIG.bannerId);
            banner?.remove();
            Banner.create();
        },
        
        /**
         * Manually accept cookies
         */
        accept: () => {
            const acceptBtn = document.getElementById('acceptCookiesBtn');
            if (acceptBtn) {
                acceptBtn.click();
            } else {
                Storage.set(CONFIG.storageKey, 'accepted');
                Analytics.init();
            }
        },
        
        /**
         * Manually reject cookies
         */
        reject: () => {
            const rejectBtn = document.getElementById('rejectCookiesBtn');
            if (rejectBtn) {
                rejectBtn.click();
            } else {
                Storage.set(CONFIG.storageKey, 'rejected');
            }
        },
        
        /**
         * Check if analytics are loaded
         */
        isAnalyticsLoaded: () => Analytics.loaded
    };

})();
