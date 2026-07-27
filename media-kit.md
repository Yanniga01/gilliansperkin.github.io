---
layout: default
title: Media Kit | SmartGuideHubs
description: SmartGuideHubs media kit for potential brand and affiliate partners. Learn about our audience, editorial approach, and partnership opportunities.
permalink: /media-kit/
canonical_url: https://smartguidehubs.com/media-kit/
sitemap: false
---

<style>
/* Media Kit specific styles – consolidated and enhanced */
.media-kit-hero {
  background: linear-gradient(135deg, #eff6ff 0%, #ffffff 100%);
  border: 1px solid var(--gray-200, #e2e8f0);
  border-radius: 18px;
  padding: 3rem 2rem;
  margin: 2rem 0 2.5rem;
  text-align: center;
}
.media-kit-hero h1 {
  font-size: clamp(2rem, 4vw, 3rem);
  color: var(--primary-dark, #e54b1b);
  margin-bottom: 0.5rem;
}
.media-kit-hero .sub-headline {
  font-size: 1.1rem;
  color: var(--gray-600, #4b5563);
  margin-bottom: 1rem;
}
.media-kit-hero p {
  max-width: 760px;
  margin: 0 auto 1.5rem;
  color: var(--gray-600, #4b5563);
  font-size: 1.08rem;
  line-height: 1.7;
}
.media-kit-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  margin-top: 1.25rem;
}
.media-kit-badge {
  background: white;
  border: 1px solid var(--gray-200, #e2e8f0);
  border-radius: 999px;
  padding: 0.65rem 1rem;
  font-size: 0.95rem;
  color: var(--gray-700, #374151);
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
}
.pdf-button {
  display: inline-block;
  background: white;
  border: 1px solid var(--gray-200, #e2e8f0);
  border-radius: 10px;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  color: var(--primary-dark, #e54b1b);
  text-decoration: none;
  transition: background 0.2s;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);
}
.pdf-button:hover {
  background: var(--primary, #ff6b35);
  color: white;
  border-color: var(--primary, #ff6b35);
}

.kit-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
  margin: 2rem 0;
}
.kit-card {
  background: white;
  border: 1px solid var(--gray-200, #e2e8f0);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
}
.kit-card h3 {
  margin-top: 0;
  margin-bottom: 0.75rem;
  color: var(--primary-dark, #e54b1b);
  font-size: 1.1rem;
}
.kit-card p {
  color: var(--gray-700, #374151);
  line-height: 1.7;
}

.kit-section {
  background: white;
  border: 1px solid var(--gray-200, #e2e8f0);
  border-radius: 16px;
  padding: 2rem;
  margin: 0 0 1.5rem;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
}
.kit-section h2 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: var(--primary-dark, #e54b1b);
  font-size: 1.6rem;
}
.kit-section h3 {
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--primary-dark, #e54b1b);
  font-size: 1.2rem;
}
.kit-section p, .kit-section li {
  color: var(--gray-700, #374151);
  line-height: 1.75;
}
.kit-section ul {
  margin: 0.75rem 0 0;
  padding-left: 1.25rem;
}
.kit-section li {
  margin-bottom: 0.65rem;
}

.partner-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin-top: 1.25rem;
}
.partner-option {
  background: #f8fafc;
  border: 1px solid var(--gray-200, #e2e8f0);
  border-radius: 14px;
  padding: 1.25rem;
}
.partner-option strong {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--primary-dark, #e54b1b);
  font-size: 1.05rem;
}
.partner-option .suitable {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: var(--gray-500, #6b7280);
}
.partner-option .suitable strong {
  display: inline;
  color: var(--gray-700, #374151);
  font-size: 0.9rem;
}

.brand-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
}
.brand-pill {
  background: #f8fafc;
  border: 1px solid var(--gray-200, #e2e8f0);
  border-radius: 999px;
  padding: 0.65rem 1rem;
  color: var(--gray-700, #374151);
  font-size: 0.95rem;
}

.audience-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 0.5rem;
}
.audience-tag {
  background: #f8fafc;
  border: 1px solid var(--gray-200, #e2e8f0);
  border-radius: 999px;
  padding: 0.5rem 1rem;
  color: var(--gray-700, #374151);
  font-size: 0.92rem;
}

.do-not-accept-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.75rem;
  margin-top: 1rem;
}
.do-not-accept-item {
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 10px;
  padding: 0.75rem 1rem;
  color: #991b1b;
  font-size: 0.92rem;
  text-align: center;
}

.submission-box {
  background: #f8fafc;
  border: 1px solid var(--gray-200, #e2e8f0);
  border-radius: 14px;
  padding: 1.5rem;
  margin-top: 1rem;
}
.submission-box ul {
  margin: 0.5rem 0 0;
  padding-left: 1.25rem;
}
.submission-box li {
  margin-bottom: 0.4rem;
}

.quote-box {
  background: #f8fafc;
  border-left: 4px solid var(--primary, #ff6b35);
  border-radius: 12px;
  padding: 1.25rem 1.25rem 1.25rem 1rem;
  margin-top: 1rem;
}
.quote-box p {
  margin: 0;
  font-size: 1.02rem;
}

.media-kit-cta {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border: 1px solid var(--gray-200, #e2e8f0);
  border-radius: 18px;
  padding: 2.25rem;
  text-align: center;
  margin: 2rem 0 0;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
}
.media-kit-cta h2 {
  color: var(--primary-dark, #e54b1b);
  margin-bottom: 0.75rem;
}
.media-kit-cta p {
  color: var(--gray-700, #374151);
  max-width: 680px;
  margin: 0 auto 1.25rem;
  line-height: 1.7;
}
.media-kit-button {
  display: inline-block;
  background: var(--primary, #ff6b35);
  color: white;
  text-decoration: none;
  padding: 0.95rem 1.5rem;
  border-radius: 10px;
  font-weight: 700;
  transition: background 0.2s;
}
.media-kit-button:hover {
  background: var(--primary-dark, #e54b1b);
}
.small-note {
  font-size: 0.92rem;
  color: var(--gray-600, #4b5563);
  margin-top: 0.85rem;
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

@media (max-width: 768px) {
  .media-kit-hero {
    padding: 2rem 1rem;
  }
  .kit-section {
    padding: 1.5rem;
  }
  .do-not-accept-grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 480px) {
  .do-not-accept-grid {
    grid-template-columns: 1fr;
  }
  .partner-options {
    grid-template-columns: 1fr;
  }
}
</style>

<main class="container">
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <a href="/">Home</a> <span>/</span>
    <span>Media Kit</span>
  </nav>

  <!-- Hero -->
  <section class="media-kit-hero">
    <h1>SmartGuideHubs Media Kit</h1>
    <p class="sub-headline">
      Partner with us to reach decision-stage readers actively researching software solutions.
    </p>
    <div style="margin-bottom: 1.5rem;">
      <a href="/media-kit-print.html" class="pdf-button" target="_blank">
        📄 Download PDF Version
      </a>
    </div>
    <p>
      SmartGuideHubs is a content-focused platform covering independent software reviews,
      comparisons, pricing guides, and educational content. We help readers understand
      tools clearly before they sign up, subscribe, or buy.
    </p>
    <div class="media-kit-badges">
      <span class="media-kit-badge">✅ Software Reviews</span>
      <span class="media-kit-badge">⚖️ Comparison Guides</span>
      <span class="media-kit-badge">🤝 Affiliate Partnerships</span>
      <span class="media-kit-badge">🔍 Transparent Editorial Approach</span>
    </div>
  </section>

  <!-- 3-Card Overview -->
  <div class="kit-grid">
    <div class="kit-card">
      <h3>🎯 Audience Focus</h3>
      <p>Our content is built for people actively researching business tools, including founders, small business owners, marketers, and freelancers comparing software before making a decision.</p>
    </div>
    <div class="kit-card">
      <h3>✍️ Content Style</h3>
      <p>We focus on clear, useful, conversion-friendly content that explains features, pricing, pros and cons, and who each tool is best for.</p>
    </div>
    <div class="kit-card">
      <h3>🤝 Partnership Fit</h3>
      <p>We are open to product reviews, sponsored educational content, comparison placements, contextual links, and long-term brand collaborations with relevant software companies.</p>
    </div>
  </div>

  <!-- About -->
  <section class="kit-section">
    <h2>About SmartGuideHubs</h2>
    <p>SmartGuideHubs publishes educational content designed to help readers make informed software decisions. Our focus is on business and productivity tools such as email marketing platforms, SEO tools, project management software, document tools, and related SaaS products.</p>
    <p>We aim to simplify buying decisions by presenting tools in a way that is practical, readable, and honest. Instead of publishing generic summaries, we structure content around what real users usually want to know: pricing, usability, features, limitations, and whether a tool is a strong fit for a specific use case.</p>
  </section>

  <!-- Who We Reach -->
  <section class="kit-section">
    <h2>Who We Reach</h2>
    <p>Our readers visit SmartGuideHubs because they are actively searching for software solutions and purchasing advice. They include:</p>
    <div class="audience-tags">
      <span class="audience-tag">Small business owners</span>
      <span class="audience-tag">Entrepreneurs</span>
      <span class="audience-tag">Freelancers</span>
      <span class="audience-tag">Marketing professionals</span>
      <span class="audience-tag">Agencies</span>
      <span class="audience-tag">Consultants</span>
      <span class="audience-tag">Accountants</span>
      <span class="audience-tag">Project managers</span>
      <span class="audience-tag">Business decision-makers</span>
    </div>
    <div class="quote-box" style="margin-top:1.25rem;">
      <p>Our content is built for readers with purchase intent: people who are actively evaluating tools, comparing options, or looking for a trusted recommendation before they sign up.</p>
    </div>
  </section>

  <!-- Why Partner -->
  <section class="kit-section">
    <h2>Why Partner With SmartGuideHubs?</h2>
    <ul>
      <li>We focus on software categories with strong commercial intent</li>
      <li>Our content is designed to support decision-stage readers</li>
      <li>We prioritize clarity, trust, and long-term content value</li>
      <li>We aim for partnerships that feel natural within the content, not forced</li>
      <li>Our readers trust our independent, research-backed recommendations</li>
    </ul>
  </section>

  <!-- Collaboration Opportunities -->
  <section class="kit-section">
    <h2>Collaboration Opportunities</h2>
    <p>We offer several partnership options tailored to your marketing goals.</p>

    <div class="partner-options">
      <div class="partner-option">
        <strong>📝 Sponsored Articles</strong>
        <p style="margin:0.25rem 0 0; font-size:0.95rem;">
          Publish educational, high-quality content that provides genuine value to our readers while introducing your product naturally.
        </p>
        <span class="suitable"><strong>Suitable for:</strong> SaaS companies, Business software, AI tools, Marketing platforms, Productivity software</span>
      </div>

      <div class="partner-option">
        <strong>⭐ Product Reviews</strong>
        <p style="margin:0.25rem 0 0; font-size:0.95rem;">
          We review your software after evaluating features, pricing, usability, and overall value.
        </p>
        <span class="suitable"><strong>Note:</strong> Submitting your product does not guarantee a positive review. All reviews reflect our independent editorial assessment.</span>
      </div>

      <div class="partner-option">
        <strong>⚖️ Software Comparisons</strong>
        <p style="margin:0.25rem 0 0; font-size:0.95rem;">
          Showcase your product alongside competing solutions in professionally researched comparison articles.
        </p>
        <span class="suitable"><strong>Examples:</strong> Product A vs Product B, Best Alternatives, Best Software Lists</span>
      </div>

      <div class="partner-option">
        <strong>🔗 Contextual Link Placements</strong>
        <p style="margin:0.25rem 0 0; font-size:0.95rem;">
          Where appropriate and editorially relevant, we include a contextual reference to your product within an existing article.
        </p>
        <span class="suitable">All placements are reviewed to ensure they improve the reader's experience.</span>
      </div>

      <div class="partner-option">
        <strong>🤝 Brand Partnerships</strong>
        <p style="margin:0.25rem 0 0; font-size:0.95rem;">
          We're open to long-term collaborations including educational campaigns, product launches, resource guides, industry research, and expert interviews.
        </p>
      </div>
    </div>
  </section>

  <!-- Editorial Standards -->
  <section class="kit-section">
    <h2>Our Editorial Standards</h2>
    <p>Every collaboration is reviewed by the SmartGuideHubs Editorial Team. We only publish content that:</p>
    <ul>
      <li>Provides genuine value to readers</li>
      <li>Is original and well researched</li>
      <li>Matches our editorial quality standards</li>
      <li>Is relevant to our audience</li>
      <li>Maintains factual accuracy</li>
    </ul>
    <p>We reserve the right to edit submissions for clarity, formatting, readability, SEO, and consistency.</p>
  </section>

  <!-- What We Do Not Accept -->
  <section class="kit-section">
    <h2>What We Do Not Accept</h2>
    <p>To protect the trust of our readers, we do not accept:</p>
    <div class="do-not-accept-grid">
      <span class="do-not-accept-item">🎰 Gambling or betting content</span>
      <span class="do-not-accept-item">🔞 Adult content</span>
      <span class="do-not-accept-item">🚫 Illegal products or services</span>
      <span class="do-not-accept-item">❌ Misleading claims</span>
      <span class="do-not-accept-item">🤖 AI-generated spam</span>
      <span class="do-not-accept-item">🔑 Keyword stuffing</span>
      <span class="do-not-accept-item">🔗 Low-quality backlinks</span>
      <span class="do-not-accept-item">📢 Irrelevant promotions</span>
    </div>
    <p style="margin-top:1rem;">We also do not guarantee editorial rankings or product positions in our reviews or comparison articles.</p>
  </section>

  <!-- Submission Guidelines -->
  <section class="kit-section">
    <h2>Submission Guidelines</h2>
    <p>If you're interested in working with us, please include:</p>
    <div class="submission-box">
      <ul>
        <li><strong>Company name</strong></li>
        <li><strong>Website URL</strong></li>
        <li><strong>Product or service overview</strong></li>
        <li><strong>Preferred collaboration type</strong> (sponsored article, review, comparison, contextual link, brand partnership)</li>
        <li><strong>Target page(s)</strong> – where you'd like your content to appear</li>
        <li><strong>Desired anchor text</strong> (if applicable)</li>
        <li><strong>Any supporting materials or product access</strong> (trial accounts, demos, media kit)</li>
      </ul>
    </div>
    <p style="margin-top:1rem;">Providing these details helps us review your proposal more efficiently.</p>

    <h3>Response Time</h3>
    <p>We typically respond to partnership enquiries within <strong>2–5 business days</strong>.</p>
  </section>

  <!-- Transparency & Trust -->
  <section class="kit-section">
    <h2>Transparency &amp; Trust</h2>
    <p>SmartGuideHubs values trust. We do not publish fake traffic claims, fake testimonials, or "featured in" statements that cannot be verified.</p>
    <p>When affiliate links are used, we disclose them clearly. We believe trust is built through consistent, useful content and honest presentation, not exaggerated claims.</p>
    <p>Our reputation is built on independence, transparency, and reader trust. Every collaboration is carefully reviewed to ensure it aligns with our editorial mission of helping businesses make informed software decisions.</p>
  </section>

  <!-- Contact -->
  <section class="kit-section">
    <h2>Contact</h2>
    <p>For all advertising, sponsorship, and partnership enquiries, please contact:</p>
    <p style="font-size:1.1rem; font-weight:600; color:var(--primary-dark, #e54b1b);">
      📧 contact@smartguidehubs.com
    </p>
  </section>

  <!-- Final CTA -->
  <div class="media-kit-cta">
    <h2>Let's Discuss a Partnership</h2>
    <p>If your product is a strong fit for professionals, marketers, freelancers, or growing businesses, we would be glad to discuss a partnership opportunity that matches our content style and audience.</p>
    <a class="media-kit-button" href="/contact/">Contact SmartGuideHubs</a>
    <div class="small-note">Use our contact form – we'll reply within 2–5 business days.</div>
  </div>
</main>
