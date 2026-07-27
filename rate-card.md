---
layout: default
title: Advertising & Collaboration Rate Card 2026 | SmartGuideHubs
description: SmartGuideHubs advertising and collaboration rate card for software companies, SaaS brands, and agencies. Independent software reviews for small businesses.
permalink: /rate-card/
canonical_url: https://smartguidehubs.com/rate-card/
sitemap: false
---

<style>
    /* Rate Card specific styles – consistent with other pages */
    .rate-hero {
        background: linear-gradient(135deg, #eff6ff 0%, #ffffff 100%);
        border: 1px solid var(--gray-200, #e2e8f0);
        border-radius: 18px;
        padding: 3rem 2rem;
        margin: 2rem 0 2.5rem;
        text-align: center;
    }
    .rate-hero h1 {
        font-size: clamp(2rem, 4vw, 3rem);
        color: var(--primary-dark, #e54b1b);
        margin-bottom: 0.25rem;
    }
    .rate-hero .sub-headline {
        font-size: 1.1rem;
        color: var(--gray-600, #4b5563);
        margin-bottom: 1rem;
    }
    .rate-hero p {
        max-width: 760px;
        margin: 0 auto 1.5rem;
        color: var(--gray-600, #4b5563);
        font-size: 1.08rem;
        line-height: 1.7;
    }
    .rate-hero .logo-wrapper {
        max-width: 600px;
        margin: 0 auto 1.5rem;
    }
    .rate-hero .logo-wrapper svg {
        width: 100%;
        height: auto;
    }

    .download-btn {
        display: inline-block;
        background: var(--primary, #ff6b35);
        color: white;
        text-decoration: none;
        padding: 0.75rem 1.5rem;
        border-radius: 10px;
        font-weight: 600;
        border: none;
        cursor: pointer;
        font-size: 1rem;
        margin-bottom: 1.5rem;
        transition: background 0.2s;
    }
    .download-btn:hover {
        background: var(--primary-dark, #e54b1b);
    }

    .rate-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 1.5rem;
        margin: 2rem 0;
    }
    .rate-card {
        background: white;
        border: 1px solid var(--gray-200, #e2e8f0);
        border-radius: 16px;
        padding: 1.75rem 1.5rem;
        box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
        display: flex;
        flex-direction: column;
        transition: transform 0.15s ease, box-shadow 0.15s ease;
    }
    .rate-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 32px rgba(15, 23, 42, 0.08);
    }
    .rate-card h3 {
        margin-top: 0;
        margin-bottom: 0.5rem;
        color: var(--primary-dark, #e54b1b);
        font-size: 1.2rem;
        line-height: 1.3;
    }
    .rate-card .price {
        font-size: 2.6rem;
        font-weight: 700;
        color: #111827;
        margin: 0.25rem 0 0.75rem;
        line-height: 1.2;
    }
    .rate-card .price small {
        font-size: 1rem;
        font-weight: 400;
        color: var(--gray-500, #6b7280);
    }
    .rate-card .price .starting {
        display: block;
        font-size: 0.85rem;
        font-weight: 400;
        color: var(--gray-500, #6b7280);
    }
    .rate-card .badge-custom {
        display: inline-block;
        background: var(--primary, #ff6b35);
        color: white;
        font-size: 0.8rem;
        font-weight: 600;
        padding: 0.25rem 1rem;
        border-radius: 30px;
        margin-bottom: 0.75rem;
        align-self: flex-start;
    }
    .rate-card ul {
        margin: 0.75rem 0 0;
        padding-left: 1.2rem;
        flex-grow: 1;
    }
    .rate-card ul li {
        margin-bottom: 0.4rem;
        color: var(--gray-700, #374151);
        font-size: 0.95rem;
        line-height: 1.5;
    }
    .rate-card .note {
        font-size: 0.85rem;
        color: var(--gray-500, #6b7280);
        margin-top: 1rem;
        font-style: italic;
        border-top: 1px solid var(--gray-200, #e2e8f0);
        padding-top: 0.75rem;
    }

    .rate-section {
        background: white;
        border: 1px solid var(--gray-200, #e2e8f0);
        border-radius: 16px;
        padding: 2rem;
        margin: 0 0 1.5rem;
        box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
    }
    .rate-section h2 {
        margin-top: 0;
        margin-bottom: 1rem;
        color: var(--primary-dark, #e54b1b);
        font-size: 1.6rem;
    }
    .rate-section h3 {
        margin-top: 1.5rem;
        margin-bottom: 0.75rem;
        color: var(--primary-dark, #e54b1b);
        font-size: 1.2rem;
    }
    .rate-section p,
    .rate-section li {
        color: var(--gray-700, #374151);
        line-height: 1.75;
    }
    .rate-section ul {
        margin: 0.75rem 0 0;
        padding-left: 1.25rem;
    }
    .rate-section li {
        margin-bottom: 0.4rem;
    }

    .feature-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 0.75rem;
        margin-top: 1rem;
    }
    .feature-item {
        background: #f8fafc;
        border: 1px solid var(--gray-200, #e2e8f0);
        border-radius: 10px;
        padding: 0.65rem 1rem;
        color: var(--gray-700, #374151);
        font-size: 0.95rem;
        text-align: center;
    }

    .topic-strip {
        display: flex;
        flex-wrap: wrap;
        gap: 0.6rem;
        margin-top: 0.5rem;
    }
    .topic-pill {
        background: #f8fafc;
        border: 1px solid var(--gray-200, #e2e8f0);
        border-radius: 999px;
        padding: 0.5rem 1rem;
        color: var(--gray-700, #374151);
        font-size: 0.92rem;
    }

    .contact-card {
        background: #f8fafc;
        border: 1px solid var(--gray-200, #e2e8f0);
        border-radius: 14px;
        padding: 1.5rem;
        margin-top: 1rem;
        text-align: center;
    }
    .contact-card .name {
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--primary-dark, #e54b1b);
    }
    .contact-card .details {
        margin-top: 0.5rem;
    }
    .contact-card .details a {
        color: var(--primary, #ff6b35);
        text-decoration: none;
        font-weight: 500;
    }
    .contact-card .details a:hover {
        text-decoration: underline;
    }

    .breadcrumbs {
        margin-bottom: 1.5rem;
        font-size: 0.9rem;
    }
    .breadcrumbs a {
        color: var(--primary, #ff6b35);
        text-decoration: none;
    }
    .breadcrumbs a:hover {
        text-decoration: underline;
    }

    .rate-cta {
        background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
        border: 1px solid var(--gray-200, #e2e8f0);
        border-radius: 18px;
        padding: 2.25rem;
        text-align: center;
        margin: 2rem 0 0;
        box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
    }
    .rate-cta h2 {
        color: var(--primary-dark, #e54b1b);
        margin-bottom: 0.75rem;
    }
    .rate-cta p {
        color: var(--gray-700, #374151);
        max-width: 680px;
        margin: 0 auto 1.25rem;
        line-height: 1.7;
    }
    .rate-button {
        display: inline-block;
        background: var(--primary, #ff6b35);
        color: white;
        text-decoration: none;
        padding: 0.95rem 1.5rem;
        border-radius: 10px;
        font-weight: 700;
        transition: background 0.2s;
    }
    .rate-button:hover {
        background: var(--primary-dark, #e54b1b);
    }
    .small-note {
        font-size: 0.92rem;
        color: var(--gray-600, #4b5563);
        margin-top: 0.85rem;
    }

    @media (max-width: 768px) {
        .rate-hero {
            padding: 2rem 1rem;
        }
        .rate-section {
            padding: 1.5rem;
        }
        .rate-grid {
            grid-template-columns: 1fr;
        }
    }

    /* Print Styles for PDF download */
    @media print {
        body {
            background: white;
            padding: 0.5in;
            margin: 0;
            font-size: 11pt;
            line-height: 1.5;
            color: #111827;
        }
        .container {
            max-width: 100%;
            padding: 0;
        }
        .download-btn {
            display: none !important;
        }
        .breadcrumbs {
            display: none !important;
        }
        .rate-hero {
            background: white !important;
            border: none !important;
            padding: 1rem 0 !important;
            margin: 0 0 1rem 0 !important;
            box-shadow: none !important;
        }
        .rate-hero .logo-wrapper {
            max-width: 400px;
            margin: 0 auto 0.5rem;
        }
        .rate-hero h1 {
            font-size: 1.8rem;
            color: #e54b1b;
        }
        .rate-hero .sub-headline {
            font-size: 1rem;
            color: #4b5563;
        }
        .rate-hero p {
            font-size: 0.95rem;
            color: #374151;
            max-width: 100%;
            margin: 0.5rem auto;
        }
        .rate-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 0.75rem;
            margin: 1rem 0;
        }
        .rate-card {
            border: 1px solid #d1d5db;
            border-radius: 8px;
            padding: 1rem;
            box-shadow: none !important;
            break-inside: avoid;
            page-break-inside: avoid;
        }
        .rate-card:hover {
            transform: none !important;
            box-shadow: none !important;
        }
        .rate-card .price {
            font-size: 2rem;
        }
        .rate-card ul {
            font-size: 0.85rem;
            padding-left: 1rem;
        }
        .rate-card ul li {
            font-size: 0.85rem;
            margin-bottom: 0.2rem;
        }
        .rate-card .note {
            font-size: 0.8rem;
        }
        .rate-card .badge-custom {
            background: #ff6b35;
            color: white;
            font-size: 0.7rem;
        }
        .rate-section {
            border: 1px solid #d1d5db;
            border-radius: 8px;
            padding: 1rem;
            margin: 0 0 0.75rem;
            box-shadow: none !important;
            break-inside: avoid;
            page-break-inside: avoid;
        }
        .rate-section h2 {
            font-size: 1.3rem;
            color: #e54b1b;
        }
        .rate-section p, .rate-section li {
            font-size: 0.9rem;
            color: #374151;
        }
        .feature-grid {
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            gap: 0.5rem;
        }
        .feature-item {
            background: #f3f4f6;
            border: 1px solid #e5e7eb;
            font-size: 0.85rem;
            padding: 0.4rem 0.6rem;
        }
        .topic-strip {
            gap: 0.4rem;
        }
        .topic-pill {
            background: #f3f4f6;
            border: 1px solid #e5e7eb;
            font-size: 0.8rem;
            padding: 0.3rem 0.7rem;
        }
        .contact-card {
            background: #f9fafb;
            border: 1px solid #e5e7eb;
            padding: 1rem;
        }
        .contact-card .name {
            font-size: 1rem;
        }
        .rate-cta {
            background: white !important;
            border: 1px solid #d1d5db;
            border-radius: 8px;
            padding: 1.5rem;
            margin: 1rem 0 0;
            box-shadow: none !important;
            text-align: center;
        }
        .rate-cta h2 {
            font-size: 1.3rem;
            color: #e54b1b;
        }
        .rate-cta p {
            font-size: 0.9rem;
            color: #374151;
            max-width: 100%;
        }
        .rate-button {
            display: inline-block;
            background: #ff6b35;
            color: white;
            padding: 0.5rem 1.2rem;
            border-radius: 6px;
            font-weight: 600;
            text-decoration: none;
        }
        .small-note {
            font-size: 0.8rem;
            color: #6b7280;
        }
        /* Hide any hover effects */
        .rate-card, .rate-section {
            transition: none !important;
        }
        /* Ensure links are visible */
        a {
            color: #ff6b35;
            text-decoration: none;
        }
        /* Ensure no background gradients in print */
        .rate-hero {
            background: white !important;
        }
        .rate-cta {
            background: white !important;
        }
        /* Page breaks */
        .rate-card, .rate-section {
            break-inside: avoid;
            page-break-inside: avoid;
        }
    }
</style>

<main class="container">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
        <a href="/">Home</a> <span>/</span>
        <span>Rate Card</span>
    </nav>

    <!-- Download Button -->
    <button class="download-btn" onclick="window.print();">📄 Download as PDF</button>

    <!-- Hero -->
    <section class="rate-hero">
        <div class="logo-wrapper">
            <!-- Provided SVG Logo -->
            <svg width="1200" height="260" viewBox="0 0 1200 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc">
                <title id="title">SmartGuideHubs logo</title>
                <desc id="desc">SmartGuideHubs brand mark with icon and wordmark</desc>
                <defs>
                    <linearGradient id="sghGradient" x1="60" y1="40" x2="430" y2="430" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#44e1de"/>
                        <stop offset="1" stop-color="#1d4cff"/>
                    </linearGradient>
                    <linearGradient id="sghTextGradient" x1="470" y1="55" x2="1020" y2="200" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#44e1de"/>
                        <stop offset="1" stop-color="#1d4cff"/>
                    </linearGradient>
                </defs>

                <g transform="translate(0 2) scale(0.5)" fill="none" stroke="url(#sghGradient)" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="230" cy="220" r="150" stroke-width="28"/>
                    <line x1="128" y1="326" x2="52" y2="402" stroke-width="34"/>
                    <path d="M235 130c47 0 85 38 85 85v84c0 17-13 30-30 30h-37" stroke-width="18"/>
                    <path d="M233 129c-32 5-57 32-61 66" stroke-width="18"/>
                    <path d="M142 176h58" stroke-width="13"/>
                    <circle cx="206" cy="176" r="8" stroke-width="10"/>
                    <path d="M132 222h98" stroke-width="13"/>
                    <circle cx="238" cy="222" r="11" stroke-width="10"/>
                    <path d="M144 268h54" stroke-width="13"/>
                    <circle cx="204" cy="268" r="8" stroke-width="10"/>
                    <path d="M186 176l20-22" stroke-width="10"/>
                    <path d="M190 268l20 20" stroke-width="10"/>
                    <path d="M378 292c16 7 31 17 43 31" stroke-width="22"/>
                    <path d="M324 360h26" stroke-width="22"/>
                </g>

                <g font-family="Inter, Segoe UI, Roboto, Helvetica, Arial, sans-serif" font-size="112" font-weight="800" dominant-baseline="middle">
                    <text x="240" y="130" fill="#ffffff">Smart</text>
                    <text x="590" y="130" fill="url(#sghTextGradient)">GuideHubs</text>
                </g>
            </svg>
        </div>

        <h1>Advertising &amp; Collaboration Rate Card (2026)</h1>
        <p class="sub-headline">Independent Software Reviews for Small Businesses &amp; Professionals</p>
        <p>
            Thank you for your interest in partnering with SmartGuideHubs.
            We collaborate with software companies, SaaS brands, agencies, and technology businesses
            to create high-quality content that provides genuine value to our readers.
            Every collaboration is reviewed by our editorial team to ensure it meets our publishing standards.
        </p>
    </section>

    <!-- Pricing Grid -->
    <h2 style="color: var(--primary-dark, #e54b1b); font-size: 1.8rem; margin: 1.5rem 0 1rem;">Collaboration Options</h2>
    <div class="rate-grid">
        <!-- Card 1: Contextual Link -->
        <div class="rate-card">
            <h3>🔗 Contextual Link Placement</h3>
            <div class="price">
                <span class="starting">Starting from</span>
                US$20
            </div>
            <ul>
                <li>Permanent publication</li>
                <li>Editorial review</li>
                <li>Natural contextual placement</li>
                <li>One dofollow link (subject to editorial approval)</li>
            </ul>
        </div>

        <!-- Card 2: Sponsored Guest Article -->
        <div class="rate-card">
            <h3>✍️ Sponsored Guest Article</h3>
            <div class="price">
                <span class="starting">Starting from</span>
                US$40
            </div>
            <ul>
                <li>Editorial review and formatting</li>
                <li>Permanent publication</li>
                <li>Up to 2 approved contextual links</li>
                <li>Author bio section</li>
                <li>SEO-friendly formatting</li>
            </ul>
        </div>

        <!-- Card 3: Dedicated Software Review -->
        <div class="rate-card">
            <h3>⭐ Dedicated Software Review</h3>
            <div class="price">
                <span class="starting">Starting from</span>
                US$75
            </div>
            <ul>
                <li>Independent editorial review</li>
                <li>Original screenshots (where applicable)</li>
                <li>Comparison with competitors</li>
                <li>Permanent publication</li>
            </ul>
            <div class="note">Please note: A sponsored review does not guarantee a positive recommendation.</div>
        </div>

        <!-- Card 4: Software Comparison -->
        <div class="rate-card">
            <h3>⚖️ Software Comparison Feature</h3>
            <div class="price">
                <span class="starting">Custom</span>
                <small>Quote</small>
            </div>
            <ul>
                <li>Feature your software in a relevant comparison article</li>
                <li>Suitable fit for the topic and our audience</li>
                <li>Editorial review and approval</li>
            </ul>
            <div style="margin-top: 0.75rem;">
                <span class="badge-custom">Contact for pricing</span>
            </div>
        </div>

        <!-- Card 5: Long-Term Brand Partnership -->
        <div class="rate-card" style="grid-column: span 1;">
            <h3>🤝 Long-Term Brand Partnership</h3>
            <div class="price">
                <span class="starting">Custom</span>
                <small>Quote</small>
            </div>
            <ul>
                <li>Tailored collaboration opportunities</li>
                <li>Ongoing campaigns and sponsored content</li>
                <li>Product coverage and editorial features</li>
            </ul>
            <div style="margin-top: 0.75rem;">
                <span class="badge-custom">Contact for pricing</span>
            </div>
        </div>
    </div>

    <!-- What's Included -->
    <section class="rate-section">
        <h2>What's Included</h2>
        <p>Every collaboration includes these standard benefits:</p>
        <div class="feature-grid">
            <span class="feature-item">✔ Permanent publication</span>
            <span class="feature-item">✔ Editorial review</span>
            <span class="feature-item">✔ SEO-friendly formatting</span>
            <span class="feature-item">✔ Mobile-friendly presentation</span>
            <span class="feature-item">✔ Author bio (guest articles)</span>
            <span class="feature-item">✔ Natural contextual linking</span>
            <span class="feature-item">✔ Professional formatting</span>
        </div>
    </section>

    <!-- Editorial Standards -->
    <section class="rate-section">
        <h2>Editorial Standards</h2>
        <p>To protect the trust of our readers:</p>
        <ul>
            <li>Every submission is reviewed before publication.</li>
            <li>We may edit content for clarity, grammar, formatting, SEO, and readability.</li>
            <li>We only publish content relevant to our audience.</li>
            <li>Paid collaborations do not guarantee rankings, recommendations, or favourable reviews.</li>
            <li>We reserve the right to decline content that does not meet our editorial standards.</li>
        </ul>
    </section>

    <!-- Accepted Topics -->
    <section class="rate-section">
        <h2>Accepted Topics</h2>
        <p>We welcome collaborations related to:</p>
        <div class="topic-strip">
            <span class="topic-pill">Business Software</span>
            <span class="topic-pill">Accounting Software</span>
            <span class="topic-pill">CRM</span>
            <span class="topic-pill">Project Management</span>
            <span class="topic-pill">SEO Tools</span>
            <span class="topic-pill">AI Software</span>
            <span class="topic-pill">Productivity Tools</span>
            <span class="topic-pill">Email Marketing</span>
            <span class="topic-pill">Small Business Technology</span>
            <span class="topic-pill">Field Service Management</span>
            <span class="topic-pill">Marketing Software</span>
        </div>
    </section>

    <!-- Contact -->
    <section class="rate-section">
        <h2>Contact</h2>
        <div class="contact-card">
            <div class="name">Emmanuel Okoye</div>
            <p style="margin: 0.25rem 0; color: var(--gray-600, #4b5563);">SmartGuideHubs Editorial Team</p>
            <div class="details">
                📧 <a href="mailto:contact@smartguidehubs.com">contact@smartguidehubs.com</a><br>
                🌐 <a href="https://smartguidehubs.com">https://smartguidehubs.com</a>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <div class="rate-cta">
        <h2>Ready to Partner With Us?</h2>
        <p>
            Let's discuss how we can work together to bring your software to our
            audience of decision-stage readers.
        </p>
        <a class="rate-button" href="mailto:contact@smartguidehubs.com">Get in Touch</a>
        <div class="small-note">We aim to respond within 2–5 business days.</div>
    </div>
</main>
