export default function Home() {
  return (
    <>
      <header>
        <div className="wrap">
          <nav>
            <a href="#" className="brand">
              <span className="mark">
                <svg viewBox="0 0 24 24" fill="none" stroke="#F7F4EC" strokeWidth="2">
                  <path d="M12 3v18M5 8l-3 5a4 4 0 0 0 8 0l-3-5M19 8l-3 5a4 4 0 0 0 8 0l-3-5M3 8h6M15 8h6M9 21h6" />
                </svg>
              </span>
              LegalLink<span className="flag">UG</span>
            </a>
            <div className="navlinks">
              <a href="#firms">Who it&apos;s for</a>
              <a href="#features">What it does</a>
              <a href="#how">How it works</a>
              <a href="#trust">Accuracy &amp; trust</a>
            </div>
            <a href="#contact" className="nav-cta">
              Request access
            </a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="eyebrow">Built for the law of Uganda</div>
              <h1>
                Research, draft, and review — <em>without leaving the file.</em>
              </h1>
              <p className="hero-sub">
                LegalLink is a virtual legal assistant trained on Ugandan
                statutes, the Constitution, and ULII case law — with your
                firm&apos;s own precedent and house style built in.
              </p>
              <div className="hero-ctas">
                <a href="#contact" className="btn-primary">
                  Request access
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
                <a href="#how" className="btn-secondary">
                  See how it works
                </a>
              </div>
              <div className="hero-trust">
                <span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4M12 2l8 4v6c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-4z" />
                  </svg>
                  Current law, cited to source
                </span>
                <span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4M12 2l8 4v6c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-4z" />
                  </svg>
                  Your case files, kept private
                </span>
              </div>
            </div>

            <div className="casefile">
              <div className="casefile-tab">
                <span className="casefile-label">Workspace — Land &amp; Property</span>
                <div className="casefile-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="casefile-body">
                <p className="casefile-query">
                  &quot;Advise on the Defendant&apos;s right to challenge a
                  lease extension refused under the Land Act.&quot;
                </p>
                <p className="casefile-answer">
                  Under <span className="cite">Land Act Cap 227, s 29</span>,
                  a lawful occupant&apos;s right to renewal is not absolute —
                  the controlling authority in{" "}
                  <span className="cite">Kampala Bottlers Ltd v Damanico (U) Ltd</span>{" "}
                  confirms refusal must be grounded in one of the statutory
                  exceptions...
                  <span className="casefile-cursor"></span>
                </p>
              </div>
              <div className="casefile-footer">
                <span className="casefile-chip">Land Act Cap 227</span>
                <span className="casefile-chip">ULII verified</span>
                <span className="casefile-chip">Firm precedent applied</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="for-firms" id="firms">
        <div className="wrap" style={{ paddingTop: 88, paddingBottom: 88 }}>
          <div className="section-head">
            <div className="section-eyebrow">Who it&apos;s for</div>
            <h2>Built for the way advocates actually work</h2>
            <p className="section-desc">
              Not a generic chatbot with a law degree bolted on — a workspace
              shaped around chambers, case files, and filing deadlines.
            </p>
          </div>
        </div>
        <div className="wrap" style={{ padding: 0 }}>
          <div className="firm-grid">
            <div className="firm-card">
              <span className="num">01</span>
              <h3>Sole advocates &amp; small chambers</h3>
              <p>
                Research and drafting support that would otherwise mean a
                pupil, an associate, or hours in the library — available on
                demand, in the time between client meetings.
              </p>
            </div>
            <div className="firm-card">
              <span className="num">02</span>
              <h3>Firms managing volume</h3>
              <p>
                Land matters, contract disputes, employment claims — case
                types where the pattern is familiar but every file still
                needs the specifics done right.
              </p>
            </div>
            <div className="firm-card">
              <span className="num">03</span>
              <h3>Advocates who value precision</h3>
              <p>
                Every citation is checked against ULII before it reaches
                you. If the law has changed, LegalLink knows — because it
                looks, live, every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features">
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow">What it does</div>
            <h2>One workspace, from first question to filed document</h2>
          </div>

          <div className="feature-row">
            <div>
              <div className="feature-tag">Research</div>
              <h3>Ask a question the way you&apos;d ask a colleague</h3>
              <p>
                Get a reasoned answer grounded in the Constitution, the
                relevant Act, and the governing case law — not a general
                summary of &quot;the law&quot; that could apply anywhere.
              </p>
              <ul className="feature-list">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Statutes cited by Act, chapter, and section
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Case law checked against ULII before every answer
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  The hierarchy of authority stated explicitly, every time
                </li>
              </ul>
            </div>
            <div className="feature-visual">
              <div className="visual-card">
                <div className="visual-card-head">
                  <span className="visual-dot"></span>
                  <span>research query</span>
                </div>
                <div className="visual-line" style={{ width: "88%" }}></div>
                <div className="visual-line" style={{ width: "95%" }}></div>
                <div className="visual-line short"></div>
                <div className="visual-line gold"></div>
              </div>
            </div>
          </div>

          <div className="feature-row reverse">
            <div>
              <div className="feature-tag">Drafting</div>
              <h3>A plaint, a WSD, a demand letter — ready to file</h3>
              <p>
                Ask for a document and it opens beside your conversation,
                formatted to court standard in Times New Roman — editable
                through instruction, not retyping.
              </p>
              <ul className="feature-list">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  &quot;Make it shorter&quot; or &quot;add a prayer for
                  costs&quot; — it revises in place
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Export straight to Word, formatted and ready
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Your firm&apos;s templates and house style, applied
                  automatically
                </li>
              </ul>
            </div>
            <div className="feature-visual">
              <div className="visual-card">
                <div className="visual-card-head">
                  <span className="visual-dot"></span>
                  <span>drafting panel</span>
                </div>
                <div className="visual-line" style={{ width: "70%" }}></div>
                <div className="visual-line" style={{ width: "96%" }}></div>
                <div className="visual-line" style={{ width: "82%" }}></div>
                <div className="doc-chip-demo">
                  <span className="check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Ready to export
                </div>
              </div>
            </div>
          </div>

          <div className="feature-row">
            <div>
              <div className="feature-tag">Case review</div>
              <h3>Upload the whole file, get the full picture</h3>
              <p>
                Pleadings, correspondence, evidence — attach several
                documents at once and ask for a complete analysis,
                weaknesses included, before you&apos;re the one caught by
                surprise in court.
              </p>
              <ul className="feature-list">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  PDFs, scanned or typed, read in full
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Multiple documents analysed together, not one at a time
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Follow-up questions keep full context of every attached
                  file
                </li>
              </ul>
            </div>
            <div className="feature-visual">
              <div className="visual-card">
                <div className="visual-card-head">
                  <span className="visual-dot"></span>
                  <span>attached documents</span>
                </div>
                <div className="doc-chip-demo" style={{ marginTop: 0 }}>
                  <span className="check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Plaint.pdf
                </div>
                <br />
                <div className="doc-chip-demo">
                  <span className="check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Reply_to_defence.pdf
                </div>
                <br />
                <div className="doc-chip-demo">
                  <span className="check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Consent_judgement.pdf
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="how" id="how">
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow">How it works</div>
            <h2>From question to filed document</h2>
            <p className="section-desc">
              No setup beyond your firm&apos;s own materials. No separate
              research step. One workspace, start to finish.
            </p>
          </div>
          <div className="steps">
            <div className="step">
              <span className="step-num">01</span>
              <h4>Ask or attach</h4>
              <p>
                Type a question, or attach the documents for the matter —
                plaints, replies, evidence, correspondence.
              </p>
            </div>
            <div className="step">
              <span className="step-num">02</span>
              <h4>Law is checked live</h4>
              <p>
                Statutes and case law relevant to your question are
                verified against ULII before the answer reaches you.
              </p>
            </div>
            <div className="step">
              <span className="step-num">03</span>
              <h4>Draft opens beside you</h4>
              <p>
                Ask for a document and it appears in its own panel —
                formatted, ready, and editable by instruction.
              </p>
            </div>
            <div className="step">
              <span className="step-num">04</span>
              <h4>Export or file</h4>
              <p>
                Download to Word in your firm&apos;s format, or keep
                refining until it&apos;s ready to go before the court.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-section" id="trust">
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow">Accuracy &amp; trust</div>
            <h2>The law changes. LegalLink checks, every time.</h2>
            <p className="section-desc">
              Legislation gets amended and repealed. An AI trained once and
              left alone will eventually cite law that no longer applies —
              this is how LegalLink avoids that.
            </p>
          </div>
          <div className="trust-grid">
            <div>
              <div className="trust-item">
                <div className="trust-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="11" cy="11" r="7" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
                <div>
                  <h4>Live ULII verification</h4>
                  <p>
                    When your question names an Act, a Rule, or a Cap,
                    LegalLink searches ULII for the current text before
                    answering — not relying on what it learned at training
                    time.
                  </p>
                </div>
              </div>
              <div className="trust-item">
                <div className="trust-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 2 3 7v6c0 5 3.4 8.4 9 10 5.6-1.6 9-5 9-10V7l-9-5z" />
                  </svg>
                </div>
                <div>
                  <h4>Your case files stay yours</h4>
                  <p>
                    Documents you upload are used only to answer your
                    question and are not retained beyond the session, or
                    used to train anything.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="trust-item">
                <div className="trust-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15z" />
                  </svg>
                </div>
                <div>
                  <h4>Your firm&apos;s own precedent</h4>
                  <p>
                    Upload your templates, house style, and past
                    submissions once — every draft after that follows your
                    firm&apos;s voice, not a generic one.
                  </p>
                </div>
              </div>
              <div className="trust-item">
                <div className="trust-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 2 3 7v6c0 5 3.4 8.4 9 10 5.6-1.6 9-5 9-10V7l-9-5zM9 12l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h4>The hierarchy of authority, stated plainly</h4>
                  <p>
                    Constitution, statute, case law — LegalLink tells you
                    which level of authority it&apos;s relying on at each
                    point, the way a careful advocate would.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band" id="contact">
        <div className="wrap">
          <h2>
            Give your practice a research and drafting assistant that knows
            Ugandan law
          </h2>
          <p className="section-desc">
            Request access and we&apos;ll set up your firm&apos;s workspace,
            precedent, and templates.
          </p>
          <div className="hero-ctas">
            <a href="mailto:hello@legallink.ug" className="btn-primary">
              Request access
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="footer-top">
            <div className="footer-col">
              <div className="footer-brand">
                <span className="mark">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#0B1D3E" strokeWidth="2.4">
                    <path d="M12 3v18M5 8l-3 5a4 4 0 0 0 8 0l-3-5M19 8l-3 5a4 4 0 0 0 8 0l-3-5M3 8h6M15 8h6M9 21h6" />
                  </svg>
                </span>
                LegalLink Uganda
              </div>
              <p className="desc">
                A virtual legal assistant trained on the law of the Republic
                of Uganda — built for advocates who need research,
                drafting, and review in one place.
              </p>
            </div>
            <div className="footer-links">
              <div>
                <h5>Product</h5>
                <a href="#firms">Who it&apos;s for</a>
                <a href="#features">What it does</a>
                <a href="#how">How it works</a>
                <a href="#trust">Accuracy &amp; trust</a>
              </div>
              <div>
                <h5>Get in touch</h5>
                <a href="mailto:hello@legallink.ug">hello@legallink.ug</a>
                <a href="#contact">Request access</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © 2026 LegalLink Uganda. Not a substitute for the independent
              judgement of a qualified advocate.
            </span>
            <span>Kampala, Uganda</span>
          </div>
        </div>
      </footer>
    </>
  );
}
