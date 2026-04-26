---
layout: default
title: Contact Us | SmartGuideHubs
description: Get in touch with SmartGuideHubs for review requests, partnership opportunities, or general inquiries. Our team typically responds within 24-48 hours.
permalink: /contact/
canonical_url: https://smartguidehubs.com/contact/
---

<style>
  /* Page‑specific styles – can be moved to site.css later */
  :root {
    --primary: #2563eb;
    --primary-dark: #1d4ed8;
    --primary-light: #3b82f6;
    --primary-lighter: #dbeafe;
    --secondary: #7c3aed;
    --secondary-light: #ede9fe;
    --gray-50: #f9fafb;
    --gray-100: #f3f4f6;
    --gray-200: #e5e7eb;
    --gray-300: #d1d5db;
    --gray-400: #9ca3af;
    --gray-500: #6b7280;
    --gray-600: #4b5563;
    --gray-700: #374151;
    --gray-800: #1f2937;
    --gray-900: #111827;
    --text-primary: var(--gray-900);
    --text-secondary: var(--gray-600);
    --text-muted: var(--gray-500);
    --border-light: var(--gray-200);
    --border-focus: var(--primary);
    --bg-body: var(--gray-50);
    --bg-card: #ffffff;
    --space-xs: 0.5rem;
    --space-sm: 1rem;
    --space-md: 1.5rem;
    --space-lg: 2rem;
    --space-xl: 3rem;
    --shadow-sm: 0 1px 3px rgba(0,0,0,0.1);
    --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.1);
    --shadow-focus: 0 0 0 4px rgba(37, 99, 235, 0.15);
    --radius-sm: 6px;
    --radius-md: 8px;
    --radius-lg: 12px;
  }

  .page-header {
    background: linear-gradient(to right, #ffffff, #fafafa);
    border-bottom: 1px solid var(--border-light);
    padding: var(--space-xl) 0;
  }
  .kicker {
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    color: var(--primary);
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: var(--space-xs);
  }
  h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: -0.02em;
    margin: 0 0 var(--space-xs) 0;
    color: var(--gray-900);
  }
  .intro {
    font-size: 1.1rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0;
  }
  .content {
    padding: var(--space-xl) 0;
  }
  .layout {
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: var(--space-lg);
    align-items: start;
  }
  .card {
    background: var(--bg-card);
    border-radius: var(--radius-lg);
    padding: var(--space-lg);
    box-shadow: var(--shadow-md);
    border: 1px solid var(--border-light);
  }
  .card h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 0 var(--space-md) 0;
    color: var(--gray-900);
  }
  .card h3 {
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-muted);
    margin: 0 0 var(--space-sm) 0;
  }
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-sm);
  }
  .field {
    margin-bottom: var(--space-md);
  }
  label {
    display: block;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-secondary);
    margin-bottom: var(--space-xs);
  }
  input, select, textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 0.95rem;
    font-family: inherit;
    border: 2px solid var(--border-light);
    border-radius: var(--radius-md);
    background: #ffffff;
    color: var(--text-primary);
    transition: all 0.2s ease;
  }
  input:hover, select:hover, textarea:hover {
    border-color: var(--gray-400);
  }
  input:focus, select:focus, textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: var(--shadow-focus);
  }
  textarea {
    resize: vertical;
    min-height: 140px;
  }
  .error {
    color: #dc2626;
    font-size: 0.75rem;
    margin-top: var(--space-xs);
    min-height: 1.25rem;
  }
  .field-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: var(--space-xs);
  }
  .char-count {
    color: var(--text-muted);
    font-size: 0.75rem;
  }
  .checkbox-row {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin: var(--space-md) 0;
    color: var(--text-secondary);
    font-size: 0.9rem;
  }
  .checkbox-row input[type="checkbox"] {
    width: 1.1rem;
    height: 1.1rem;
    accent-color: var(--primary);
    cursor: pointer;
  }
  .btn {
    display: inline-block;
    width: 100%;
    padding: 0.875rem 1.5rem;
    background: var(--primary);
    color: white;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: center;
  }
  .btn:hover {
    background: var(--primary-dark);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
  .btn:active {
    transform: translateY(0);
  }
  .privacy-note {
    margin-top: var(--space-sm);
    text-align: center;
    color: var(--text-muted);
    font-size: 0.75rem;
  }
  .contact-item {
    display: flex;
    gap: var(--space-sm);
    margin-bottom: var(--space-md);
  }
  .contact-icon {
    flex-shrink: 0;
    width: 2rem;
    height: 2rem;
    background: var(--primary-lighter);
    color: var(--primary);
    border-radius: var(--radius-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
  }
  .contact-content {
    flex: 1;
  }
  .contact-label {
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-muted);
    margin-bottom: 0.2rem;
  }
  .contact-value a {
    color: var(--primary);
    text-decoration: none;
  }
  .topic-list {
    display: grid;
    gap: 0.5rem;
  }
  .topic-item {
    padding: 0.6rem 0;
    border-bottom: 1px solid var(--border-light);
    color: var(--text-secondary);
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .topic-item:last-child {
    border-bottom: none;
  }
  .topic-bullet {
    width: 0.4rem;
    height: 0.4rem;
    background: var(--primary);
    border-radius: 50%;
    display: inline-block;
  }
  .success-state {
    text-align: center;
    padding: var(--space-lg) 0;
  }
  .success-icon {
    font-size: 4rem;
    margin-bottom: var(--space-md);
    animation: scaleIn 0.3s ease;
  }
  .success-state h2 {
    margin-bottom: var(--space-xs);
  }
  .success-state p {
    color: var(--text-secondary);
    margin-bottom: var(--space-lg);
  }
  @keyframes scaleIn {
    from { transform: scale(0); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
  .hidden {
    display: none;
  }
  @media (max-width: 768px) {
    .layout { grid-template-columns: 1fr; }
    .form-row { grid-template-columns: 1fr; }
    .card { padding: var(--space-md); }
  }
</style>

<section class="page-header">
  <div class="container">
    <div class="kicker">Get in Touch</div>
    <h1>Contact SmartGuideHubs</h1>
    <p class="intro">Have a question about a review? Want to suggest a tool? Interested in partnerships? We're here to help.</p>
  </div>
</section>

<main class="content">
  <div class="container layout">
    <!-- Contact Form -->
    <section class="card" aria-labelledby="form-heading">
      <form id="contactForm" novalidate>
        <div id="successBox" class="success-state hidden" aria-live="polite">
          <div class="success-icon">✓</div>
          <h2>Message Sent Successfully</h2>
          <p id="successText"></p>
          <button type="button" class="btn" id="resetBtn" style="width: auto; padding: 0.75rem 2rem;">Send Another Message</button>
        </div>
        <div id="formFields">
          <h2 id="form-heading">Send Us a Message</h2>
          <div class="form-row">
            <div class="field">
              <label for="name">Full Name <span aria-hidden="true">*</span></label>
              <input id="name" name="name" type="text" placeholder="Jane Smith" required>
              <div class="error" id="nameError" role="alert"></div>
            </div>
            <div class="field">
              <label for="email">Email Address <span aria-hidden="true">*</span></label>
              <input id="email" name="email" type="email" placeholder="jane@example.com" required>
              <div class="error" id="emailError" role="alert"></div>
            </div>
          </div>
          <div class="field">
            <label for="topic">Topic <span aria-hidden="true">*</span></label>
            <select id="topic" name="topic" required>
              <option value="" disabled selected>Select a topic...</option>
              <option value="general">General Inquiry</option>
              <option value="review">Review Request</option>
              <option value="advertise">Advertise / Sponsorship</option>
              <option value="affiliate">Affiliate Partnership</option>
              <option value="press">Press & Media</option>
              <option value="error">Report an Error</option>
            </select>
            <div class="error" id="topicError" role="alert"></div>
          </div>
          <div class="field">
            <label for="message">Your Message <span aria-hidden="true">*</span></label>
            <textarea id="message" name="message" placeholder="Please provide as much detail as possible..." minlength="20" required></textarea>
            <div class="field-footer">
              <div class="error" id="messageError" role="alert"></div>
              <div class="char-count"><span id="charCountValue">0</span> / 20 minimum</div>
            </div>
          </div>
          <div class="checkbox-row">
            <input type="checkbox" id="newsletter" name="newsletter">
            <label for="newsletter" style="text-transform: none; letter-spacing: normal; font-size: 0.9rem;">Subscribe to our newsletter for new reviews and tool comparisons</label>
          </div>
          <button type="submit" class="btn" id="submitBtn">Send Message →</button>
          <p class="privacy-note">🔒 Your information is never shared with third parties. <a href="/privacy/" style="color: var(--primary); text-decoration: none;">Privacy Policy</a></p>
        </div>
      </form>
    </section>

    <!-- Sidebar -->
    <aside style="display: flex; flex-direction: column; gap: var(--space-md);">
      <section class="card" aria-labelledby="contact-info-heading">
        <h3 id="contact-info-heading">Contact Information</h3>
        <div class="contact-item">
          <div class="contact-icon" aria-hidden="true">✉️</div>
          <div class="contact-content">
            <div class="contact-label">Email</div>
            <div class="contact-value"><a href="mailto:contact@smartguidehubs.com">contact@smartguidehubs.com</a></div>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-icon" aria-hidden="true">📍</div>
          <div class="contact-content">
            <div class="contact-label">Location</div>
            <div class="contact-value">Remote Team, Serving Globally</div>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-icon" aria-hidden="true">🕐</div>
          <div class="contact-content">
            <div class="contact-label">Response Time</div>
            <div class="contact-value">Within 24-48 hours</div>
          </div>
        </div>
      </section>

      <section class="card" aria-labelledby="topics-heading">
        <h3 id="topics-heading">Topics We Cover</h3>
        <div class="topic-list">
          <div class="topic-item"><span class="topic-bullet" aria-hidden="true"></span>Productivity Tools</div>
          <div class="topic-item"><span class="topic-bullet" aria-hidden="true"></span>Project Management</div>
          <div class="topic-item"><span class="topic-bullet" aria-hidden="true"></span>Design Software</div>
          <div class="topic-item"><span class="topic-bullet" aria-hidden="true"></span>Development Tools</div>
          <div class="topic-item"><span class="topic-bullet" aria-hidden="true"></span>Marketing Platforms</div>
          <div class="topic-item"><span class="topic-bullet" aria-hidden="true"></span>AI & Automation</div>
          <div class="topic-item"><span class="topic-bullet" aria-hidden="true"></span>Business Analytics</div>
          <div class="topic-item"><span class="topic-bullet" aria-hidden="true"></span>CRM Software</div>
        </div>
      </section>
    </aside>
  </div>
</main>

<script>
  (function() {
    const form = document.getElementById('contactForm');
    const fieldsWrap = document.getElementById('formFields');
    const successBox = document.getElementById('successBox');
    const successText = document.getElementById('successText');
    const messageInput = document.getElementById('message');
    const charCountSpan = document.getElementById('charCountValue');
    const resetBtn = document.getElementById('resetBtn');
    const submitBtn = document.getElementById('submitBtn');
    const errors = {
      name: document.getElementById('nameError'),
      email: document.getElementById('emailError'),
      topic: document.getElementById('topicError'),
      message: document.getElementById('messageError')
    };

    const showElement = (el) => el.classList.remove('hidden');
    const hideElement = (el) => el.classList.add('hidden');
    const clearErrors = () => { Object.values(errors).forEach(el => { if (el) el.textContent = ''; }); };
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const updateCharCount = () => {
      const length = messageInput.value.length;
      charCountSpan.textContent = length;
      charCountSpan.style.color = length < 20 ? '#dc2626' : 'var(--text-muted)';
    };
    messageInput.addEventListener('input', updateCharCount);

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      clearErrors();
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      const values = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        topic: form.topic.value,
        message: form.message.value.trim(),
        newsletter: form.newsletter.checked
      };
      const validationErrors = {};
      if (!values.name || values.name.length < 2) validationErrors.name = 'Please enter your full name (minimum 2 characters).';
      if (!validateEmail(values.email)) validationErrors.email = 'Please enter a valid email address.';
      if (!values.topic) validationErrors.topic = 'Please select a topic.';
      if (!values.message || values.message.length < 20) validationErrors.message = 'Message must be at least 20 characters.';

      if (Object.keys(validationErrors).length) {
        Object.entries(validationErrors).forEach(([key, val]) => { if (errors[key]) errors[key].textContent = val; });
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message →';
        return;
      }

      try {
        // Replace this with your actual form submission endpoint (e.g., Formspree)
        await new Promise(resolve => setTimeout(resolve, 1000));
        successText.textContent = `Thanks for reaching out, ${values.name}. We'll respond to ${values.email} within 24-48 hours.`;
        hideElement(fieldsWrap);
        showElement(successBox);
        successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } catch (err) {
        alert('There was an error sending your message. Please try again.');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message →';
      }
    });

    resetBtn.addEventListener('click', () => {
      form.reset();
      updateCharCount();
      clearErrors();
      hideElement(successBox);
      showElement(fieldsWrap);
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message →';
      document.getElementById('name').focus();
    });

    updateCharCount();

    // Optional: field validation on blur
    const addBlurValidation = (id, validator) => {
      const field = document.getElementById(id);
      if (field) field.addEventListener('blur', () => {
        const err = validator(field.value);
        if (errors[id]) errors[id].textContent = err || '';
      });
    };
    addBlurValidation('name', (v) => v.trim().length < 2 ? 'Please enter your full name.' : '');
    addBlurValidation('email', (v) => !validateEmail(v) ? 'Please enter a valid email address.' : '');
    addBlurValidation('message', (v) => v.trim().length < 20 ? 'Message must be at least 20 characters.' : '');
  })();
</script>
