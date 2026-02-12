/**
 * SmartGuideHubs Cookie Consent Manager
 * A lightweight, GDPR-compliant cookie consent solution
 * @version 1.0.0
 * @license MIT
 */

(function() {
  'use strict';

  // ========================================
  // Configuration
  // ========================================
  const CONFIG = {
    BANNER_ID: 'sg-cookie-consent',
    STORAGE_KEY: 'sg_cookie_consent',
    GA_TRACKING_ID: 'G-3DCX56R2GN',
    PRIVACY_POLICY_URL: '/privacy.html',
    BANNER_POSITION: 'bottom', // bottom, top
    THEME: {
      background: '#111',
      text: '#fff',
      accept: '#28a745',
      reject: '#dc3545',
      link: '#4da3ff'
    }
  };

  // ========================================
  // State Management
  // ========================================
  const State = {
    CONSENT_VALUES: {
      ACCEPTED: 'accepted',
      REJECTED: 'rejected',
      PENDING: null
    },

    getConsent() {
      try {
        return localStorage.getItem(CONFIG.STORAGE_KEY);
      } catch (error) {
        console.warn('Failed to access localStorage:', error);
        return null;
      }
    },

    setConsent(value) {
      try {
        localStorage.setItem(CONFIG.STORAGE_KEY, value);
        return true;
      } catch (error) {
        console.error('Failed to save consent:', error);
        return false;
      }
    }
  };

  // ========================================
  // DOM Utilities
  // ========================================
  const DOMUtils = {
    createElement(tag, attributes = {}, children = []) {
      const element = document.createElement(tag);
      
      Object.entries(attributes).forEach(([key, value]) => {
        if (key === 'className') {
          element.className = value;
        } else if (key === 'textContent') {
          element.textContent = value;
        } else {
          element.setAttribute(key, value);
        }
      });

      children.forEach(child => {
        if (typeof child === 'string') {
          element.appendChild(document.createTextNode(child));
        } else {
          element.appendChild(child);
        }
      });

      return element;
    },

    injectStyles(css) {
      const style = DOMUtils.createElement('style', {
        type: 'text/css'
      });
      
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
      
      document.head.appendChild(style);
      return style;
    },

    getElement(id) {
      return document.getElementById(id);
    }
  };

  // ========================================
  // Styles
  // ========================================
  const Styles = {
    generate() {
      const { background, text, accept, reject, link } = CONFIG.THEME;
      
      return `
        #${CONFIG.BANNER_ID} {
          position: fixed;
          ${CONFIG.BANNER_POSITION}: 0;
          left: 0;
          width: 100%;
          background: ${background};
          color: ${text};
          padding: 1rem 1.5rem;
          display: none;
          z-index: 9999;
          box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 0.95rem;
          line-height: 1.5;
          box-sizing: border-box;
          transition: transform 0.3s ease-in-out;
        }

        #${CONFIG.BANNER_ID}.is-visible {
          display: block;
        }

        .sg-cookie-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .sg-cookie-message {
          margin: 0;
          flex: 1 1 300px;
        }

        .sg-cookie-link {
          color: ${link};
          text-decoration: underline;
          text-underline-offset: 2px;
          transition: opacity 0.2s;
        }

        .sg-cookie-link:hover {
          opacity: 0.8;
        }

        .sg-cookie-buttons {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .sg-cookie-btn {
          padding: 0.5rem 1.25rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.2s;
          color: white;
        }

        .sg-cookie-btn:hover {
          transform: translateY(-1px);
          filter: brightness(1.1);
        }

        .sg-cookie-btn:active {
          transform: translateY(0);
        }

        .sg-cookie-btn-accept {
          background: ${accept};
        }

        .sg-cookie-btn-reject {
          background: ${reject};
        }

        @media (max-width: 768px) {
          .sg-cookie-content {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .sg-cookie-buttons {
            width: 100%;
          }
          
          .sg-cookie-btn {
            flex: 1;
            text-align: center;
          }
        }
      `;
    }
  };

  // ========================================
  // Analytics
  // ========================================
  const Analytics = {
    initialized: false,

    init() {
      if (this.initialized || typeof window === 'undefined') {
        return;
      }

      try {
        // Initialize Google Analytics
        window.dataLayer = window.dataLayer || [];
        window.gtag = function() { window.dataLayer.push(arguments); };
        
        window.gtag('js', new Date());
        window.gtag('config', CONFIG.GA_TRACKING_ID, {
          anonymize_ip: true,
          cookie_flags: 'SameSite=None;Secure',
          cookie_expires: 63072000 // 2 years
        });

        // Load GA script
        const script = DOMUtils.createElement('script', {
          src: `https://www.googletagmanager.com/gtag/js?id=${CONFIG.GA_TRACKING_ID}`,
          async: true,
          defer: true
        });

        document.head.appendChild(script);
        this.initialized = true;
        
        // Dispatch custom event
        window.dispatchEvent(new CustomEvent('cookieAnalyticsLoaded'));
        
      } catch (error) {
        console.error('Failed to initialize analytics:', error);
      }
    }
  };

  // ========================================
  // Banner UI
  // ========================================
  const Banner = {
    isVisible: false,

    create() {
      if (DOMUtils.getElement(CONFIG.BANNER_ID)) {
        return DOMUtils.getElement(CONFIG.BANNER_ID);
      }

      const message = `We use cookies to improve your experience and analyze traffic. 
                       Read our `;

      const link = DOMUtils.createElement('a', {
        href: CONFIG.PRIVACY_POLICY_URL,
        className: 'sg-cookie-link'
      }, ['Privacy Policy']);

      const acceptBtn = DOMUtils.createElement('button', {
        id: `${CONFIG.BANNER_ID}-accept`,
        className: 'sg-cookie-btn sg-cookie-btn-accept'
      }, ['Accept']);

      const rejectBtn = DOMUtils.createElement('button', {
        id: `${CONFIG.BANNER_ID}-reject`,
        className: 'sg-cookie-btn sg-cookie-btn-reject'
      }, ['Reject']);

      const buttons = DOMUtils.createElement('div', {
        className: 'sg-cookie-buttons'
      }, [acceptBtn, rejectBtn]);

      const messageSpan = DOMUtils.createElement('span', {}, [message, link, '.']);

      const messageDiv = DOMUtils.createElement('p', {
        className: 'sg-cookie-message'
      }, [messageSpan]);

      const content = DOMUtils.createElement('div', {
        className: 'sg-cookie-content'
      }, [messageDiv, buttons]);

      const banner = DOMUtils.createElement('div', {
        id: CONFIG.BANNER_ID
      }, [content]);

      document.body.appendChild(banner);
      return banner;
    },

    show() {
      const banner = DOMUtils.getElement(CONFIG.BANNER_ID) || this.create();
      banner.classList.add('is-visible');
      this.isVisible = true;
    },

    hide() {
      const banner = DOMUtils.getElement(CONFIG.BANNER_ID);
      if (banner) {
        banner.classList.remove('is-visible');
        this.isVisible = false;
      }
    }
  };

  // ========================================
  // Event Handlers
  // ========================================
  const EventHandlers = {
    handleAccept() {
      if (State.setConsent(State.CONSENT_VALUES.ACCEPTED)) {
        Banner.hide();
        Analytics.init();
        window.dispatchEvent(new CustomEvent('cookieConsentAccepted'));
      }
    },

    handleReject() {
      if (State.setConsent(State.CONSENT_VALUES.REJECTED)) {
        Banner.hide();
        window.dispatchEvent(new CustomEvent('cookieConsentRejected'));
      }
    },

    setupEventListeners() {
      document.addEventListener('click', (e) => {
        const target = e.target;
        
        if (target.id === `${CONFIG.BANNER_ID}-accept`) {
          e.preventDefault();
          this.handleAccept();
        }
        
        if (target.id === `${CONFIG.BANNER_ID}-reject`) {
          e.preventDefault();
          this.handleReject();
        }
      });
    }
  };

  // ========================================
  // Initialization
  // ========================================
  function init() {
    // Prevent double initialization
    if (window.SGCookieConsent?.initialized) {
      return;
    }

    // Set global flag
    window.SGCookieConsent = {
      initialized: true,
      version: '1.0.0',
      config: CONFIG,
      state: State,
      analytics: Analytics
    };

    // Inject styles
    DOMUtils.injectStyles(Styles.generate());

    // Check existing consent
    const existingConsent = State.getConsent();

    if (existingConsent === State.CONSENT_VALUES.ACCEPTED) {
      Analytics.init();
    } else if (!existingConsent) {
      // Create and show banner for pending consent
      Banner.create();
      Banner.show();
    }

    // Setup event listeners
    EventHandlers.setupEventListeners();

    // Dispatch ready event
    window.dispatchEvent(new CustomEvent('cookieConsentReady'));
  }

  // ========================================
  // Start the system
  // ========================================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
