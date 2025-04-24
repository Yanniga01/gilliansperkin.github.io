<!DOCTYPE html>
<html lang="en" data-country="US">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
    <title>Local Singles in [City]: Connect Tonight | 100% Verified</title>
    <meta name="description" content="Meet 1,327 real people in your area now. Authentic connections, verified profiles - your perfect match awaits!">
    
    <!-- Compliance Headers -->
    <meta http-equiv="Content-Security-Policy" content="default-src 'self' https: 'unsafe-inline' 'unsafe-eval';">
    <meta name="robots" content="noindex,nofollow">
    <link rel="canonical" href="https://gilliansperkin.com">
    <meta name="theme-color" content="#FF3B5C">
    
    <!-- Font Loading -->
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" as="style">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap">
    
    <!-- Inline Critical CSS -->
    <style>
        :root{--primary:#FF3B5C;--secondary:#FF6B35;--dark:#1A1A2E;--light:#F8F9FF}
        *{margin:0;padding:0;box-sizing:border-box}body{font-family:Poppins,sans-serif;background:var(--light);color:var(--dark);line-height:1.7}.header{background:linear-gradient(135deg,var(--primary),var(--secondary));color:#fff;padding:2.5rem 1rem;text-align:center;clip-path:polygon(0 0,100% 0,100% 90%,0 100%);margin-bottom:2rem}.trust-badge{background:rgba(255,255,255,0.15);color:#fff;padding:0.6rem 1.5rem;border-radius:30px;display:inline-flex;align-items:center;gap:0.5rem;font-size:0.9rem;margin-bottom:1.5rem}@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
    </style>
    
    <!-- Deferred CSS -->
    <link rel="stylesheet" href="/css/main.css" media="print" onload="this.media='all'">
</head>
<body>
    <header class="header">
        <div class="trust-badge" role="status" aria-label="Secure connection">
             Secured Connection |  4.9/5 Rating
        </div>
        <h1 class="main-heading">
            Meet <span class="city">Local</span> Singles Ready to Connect
        </h1>
        <p class="subheading">
            Real people • Verified profiles • Instant matches
        </p>
        <div class="live-counter-container">
            <span class="live-counter">1,327</span> people online now in <span class="city">your area</span>
        </div>
    </header>

    <section class="profile-grid">
        <article class="profile-card">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" 
                 data-src="https://ibb.co/ndBZ99X"
                 class="profile-image lozad" 
                 alt="Sarah, 28 - Yoga Instructor nearby"
                 width="300"
                 height="300"
                 loading="lazy">
            <div class="profile badge" aria-hidden="true"> Online Now</div>
        </article>
    </section>

    <ol class="verification-process" role="list">
        <li class="verification-step">
            <h3>1. Quick Setup</h3>
            <p>2-minute profile creation</p>
        </li>
        <li class="verification-step">
            <h3>2. Secure Verification</h3>
            <p>Real people guarantee</p>
        </li>
        <li class="verification-step">
            <h3>3. Smart Matching</h3>
            <p>Find compatible partners</p>
        </li>
    </ol>

    <section class="cta-section">
        <h2 class="cta-heading">Your Perfect Match is Waiting</h2>
        <button class="cta-button" aria-label="Start matching instantly">
             Start Matching Instantly
        </button>
        <div class="trust-badges" role="region" aria-label="Trust certifications">
            <img src="/badges/trustpilot-rated.svg" 
                 alt="4.9/5 TrustScore" 
                 loading="lazy"
                 width="120"
                 height="40">
        </div>
    </section>

    <footer class="legal-footer">
        <p>18+ only. By continuing you agree to our 
            <a href="/terms" class="legal-link" rel="noopener noreferrer">Terms</a> and 
            <a href="/privacy" class="legal-link" rel="noopener noreferrer">Privacy Policy</a>.
        </p>
        <div id="cookie-consent" class="cookie-banner" hidden>
            <p>We use cookies to enhance your experience. <a href="/privacy#cookies">Learn more</a></p>
            <button onclick="acceptCookies()">Accept</button>
        </div>
    </footer>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Top converting geo-targets
            const geoConfig = {
                // Tier 1: Highest converting countries
                'US': {
                    cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'],
                    emoji: ''
                },
                'UK': {
                    cities: ['London', 'Manchester', 'Birmingham', 'Liverpool'],
                    emoji: ''
                },
                'CA': {
                    cities: ['Toronto', 'Montreal', 'Vancouver', 'Calgary'],
                    emoji: ''
                },
                // Tier 2: High potential
                'AU': {
                    cities: ['Sydney', 'Melbourne', 'Brisbane'],
                    emoji: ''
                },
                'DE': {
                    cities: ['Berlin', 'Munich', 'Hamburg'],
                    emoji: ''
                }
            };

            // Auto-detect or set default
            const country = 'US'; // Change based on IP detection
            const { cities, emoji } = geoConfig[country];
            const city = cities[Math.floor(Math.random() * cities.length)];

            // Update geo elements
            document.querySelectorAll('.city').forEach(el => {
                el.textContent = city;
            });
            document.documentElement.setAttribute('data-country', country);

            // Real-time counter (city-based)
            let usersOnline = 500 + Math.floor(Math.random() * 200);
            const counterUpdate = () => {
                usersOnline += Math.floor(Math.random() * 5);
                document.querySelector('.live-counter').textContent = 
                    usersOnline.toLocaleString();
            };
            setInterval(counterUpdate, 3000);

            // Protected affiliate redirect
            function decodeAffiliateLink() {
                const hexCode = "68747470733a2f2f70617973616c652e6732616673652e636f6d2f736c3f69643d363730376666356362623233663231333964383965396266267069643d3132393835323f7265663d7072656c616e6465725f7633";
                let base64String = '';
                for(let i=0; i < hexCode.length; i+=2) {
                    const hexPair = hexCode.substr(i, 2);
                    base64String += String.fromCharCode(parseInt(hexPair, 16));
                }
                return atob(base64String); 
            }

            document.querySelector('.cta-button').addEventListener('click', function() {
                window.location.href = decodeAffiliateLink();
            });

            // Lazy loading
            const observer = lozad('.lozad', {
                threshold: 0.1,
                loaded: (el) => el.classList.add('loaded')
            });
            observer.observe();
        });

        function acceptCookies() {
            document.getElementById('cookie-consent').hidden = true;
            localStorage.setItem('cookies-accepted', 'true');
        }
    </script>

    <!-- Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-3DCX56R2GN"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-3DCX56R2GN');
    </script>

    <script src="/js/lozad.min.js" defer></script>
</body>
</html>
