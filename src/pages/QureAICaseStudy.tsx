import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const QureAICaseStudy: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Wait briefly for DOM and scripts
    const timer = setTimeout(() => {
      // Split text animation
      const splitTexts = containerRef.current?.querySelectorAll('.qure-split-text');
      if (splitTexts && (window as any).SplitType) {
        splitTexts.forEach(el => {
          const split = new ((window as any).SplitType)(el as HTMLElement, { types: 'lines,words' });
          split.lines?.forEach((line: HTMLElement) => {
            const w = document.createElement('div');
            w.classList.add('line-wrapper');
            line.parentNode?.insertBefore(w, line);
            w.appendChild(line);
          });

          gsap.fromTo(split.words, 
            { yPercent: 100, opacity: 0 },
            {
              yPercent: 0, opacity: 1, duration: 1, stagger: 0.02, ease: 'power4.out',
              scrollTrigger: { trigger: el, start: 'top 85%' }
            }
          );
        });
      }

      // Background color inversion & particle fade
      const triggerEl = containerRef.current?.querySelector('.qure-intro');
      if (triggerEl) {
        gsap.to(document.body, {
          backgroundColor: '#000000',
          duration: 1.5,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: triggerEl,
            start: 'top 50%',
            end: 'top 10%',
            scrub: true
          }
        });

        if ((window as any).particlesMaterial) {
          gsap.to((window as any).particlesMaterial, {
            opacity: 0,
            duration: 1.5,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: triggerEl,
              start: 'top 50%',
              end: 'top 10%',
              scrub: true
            }
          });
        }
      }

      // Bento box reveals
      const bentoCards = containerRef.current?.querySelectorAll('.qure-bento-card');
      if (bentoCards) {
        gsap.fromTo(bentoCards,
          { opacity: 0, scale: 0.9, y: 50 },
          {
            opacity: 1, scale: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: '.qure-bento-grid', start: 'top 85%' }
          }
        );
      }

      // Number counter animation
      const counters = containerRef.current?.querySelectorAll('.qure-counter');
      if (counters) {
        counters.forEach((counter: any) => {
          const target = parseFloat(counter.getAttribute('data-target') || '0');
          const prefix = counter.getAttribute('data-prefix') || '';
          const suffix = counter.getAttribute('data-suffix') || '';
          
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 2.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: counter,
              start: 'top 85%'
            },
            onUpdate: () => {
              counter.innerText = prefix + Math.floor(obj.val) + suffix;
            }
          });
        });
      }

      // Panel reveals
      const panels = containerRef.current?.querySelectorAll('.qure-panel');
      if (panels) {
        panels.forEach((panel) => {
          gsap.fromTo(panel,
            { opacity: 0, y: 100 },
            {
              opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
              scrollTrigger: { trigger: panel, start: 'top 80%' }
            }
          );
        });
      }

      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(t => t.kill());
      gsap.to(document.body, { backgroundColor: '#020018', duration: 0 });
      if ((window as any).particlesMaterial) {
        gsap.to((window as any).particlesMaterial, { opacity: 0.6, duration: 0 });
      }
    };
  }, []);

  return (
    <main id="main-content" className="qure-wrapper" ref={containerRef}>
      <Helmet>
        <title>Qure.ai SEO Case Study | Healthcare AI SEO for the US Market</title>
        <meta name="description" content="See how Impulse Digital rebuilt Qure.ai’s US SEO structure from a one-page presence into a search-led system that generated 20 organic leads in one month." />
        <link rel="canonical" href="https://www.theimpulsedigital.com/case-studies/qure-ai-healthcare-ai-seo-case-study" />
      </Helmet>

      {/* Hero Section (Image Only) */}
      <section className="qure-hero">
        <img 
          src={`${import.meta.env.BASE_URL}images/case-study-image/quire-qi/QureAI title.png`} 
          alt="Qure.ai Case Study Hero" 
          className="qure-hero-img-full"
        />
      </section>

      {/* Hero Content moved below */}
      <section className="qure-section qure-hero-content-block">
        <div className="qure-container">
          <span className="qure-meta">Qure.ai</span>
          <h1 className="qure-hero-title qure-split-text">When serious buyers search, a single page is not enough</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="qure-section qure-intro">
        <div className="qure-container qure-narrow">
          <p className="qure-lead qure-split-text">
            In healthcare AI, search is not casual. 
          </p>
          <p className="qure-body qure-split-text">
            The people searching are not browsing for ideas. They are hospitals, radiology teams, clinical decision-makers, and enterprise buyers looking for specific solutions. 
          </p>
          <p className="qure-body qure-split-text">
            Qure.ai’s US presence earlier sat on a one-page structure. That meant one page had to do too much: explain the category, hold clinical credibility, rank for high-intent searches, and create business enquiries. 
          </p>
          <div className="qure-callout">
            <h3 className="qure-quote qure-split-text">
              It needed more than SEO optimisation.<br/>
              It needed a proper search-led structure.
            </h3>
          </div>
        </div>
      </section>

      {/* Results Preview Bento */}
      <section className="qure-section">
        <div className="qure-container">
          <div className="qure-bento-grid">
            <div className="qure-bento-card qure-bg-glass">
              <h4 className="qure-stat qure-counter" data-target="20">0</h4>
              <p>organic leads generated in one month</p>
            </div>
            <div className="qure-bento-card qure-bg-glass">
              <h4 className="qure-stat qure-counter" data-target="31" data-suffix="%">0%</h4>
              <p>of website sessions came from organic search</p>
            </div>
            <div className="qure-bento-card qure-bg-glass">
              <h4 className="qure-stat qure-counter" data-target="42" data-suffix="%">0%</h4>
              <p>organic engagement rate</p>
            </div>
            <div className="qure-bento-card qure-bg-glass">
              <h4 className="qure-stat qure-counter" data-target="3" data-prefix="+">+0</h4>
              <p>Domain Authority improved from 46 to 49</p>
            </div>
            <div className="qure-bento-card qure-bg-glass qure-bento-wide">
              <h4 className="qure-stat" style={{ fontSize: '3rem' }}>Page 1 Rankings</h4>
              <p>High-value diagnostic AI keywords moved to Page 1. Priority keywords entered the Top 10 after optimisation cycles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating Panels: The Situation & Challenge */}
      <section className="qure-section">
        <div className="qure-container">
          
          <div className="qure-panel qure-bg-glass">
            <div className="qure-panel-corner">
              <svg viewBox="801 344 274 272" xmlns="http://www.w3.org/2000/svg">
                <path d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" />
              </svg>
            </div>
            <div className="qure-panel-content">
              <h2 className="qure-h2 qure-split-text">The situation</h2>
              <p className="qure-body qure-split-text">
                Qure.ai operates in a category where credibility matters before conversion. Healthcare buyers need clear language, specific solutions, and enough depth to believe the platform understands their world.
              </p>
              <p className="qure-body qure-split-text">
                But a one-page US website limited both discovery and decision-making. There was not enough structure for Google, not enough depth for different buyer intents, not enough internal linking to build authority, and not enough page-level focus to convert search demand into leads.
              </p>
            </div>
          </div>

          <div className="qure-panel qure-bg-glass qure-panel-right">
            <div className="qure-panel-corner">
              <svg viewBox="801 344 274 272" xmlns="http://www.w3.org/2000/svg">
                <path d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" />
              </svg>
            </div>
            <div className="qure-panel-content">
              <h2 className="qure-h2 qure-split-text">The challenge</h2>
              <p className="qure-body qure-split-text">
                Healthcare SEO cannot be treated like regular SEO. The language has to be careful. The claims have to stay controlled. The keywords have to reflect how hospitals, radiology teams, and enterprise buyers actually search.
              </p>
              <p className="qure-body qure-split-text">
                The job was not to chase traffic. It was to bring the right buyers to the right pages, with enough confidence to take the next step.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Structured List Section */}
      <section className="qure-section">
        <div className="qure-container">
          <div className="qure-grid-2">
            
            <div className="qure-list-box">
              <h2 className="qure-h2 qure-split-text" style={{ color: '#aa3bff' }}>What needed to change</h2>
              <p className="qure-body qure-split-text">The US website needed to move from a single-page presence to a structured SEO system. Each page needed a clear purpose:</p>
              <ul className="qure-bullets">
                <li>Some had to speak to solutions.</li>
                <li>Some had to support product discovery.</li>
                <li>Some had to build evidence and authority.</li>
                <li>Some had to move users closer to enquiry.</li>
              </ul>
              <p className="qure-body qure-split-text">The structure had to work for both search engines and serious healthcare buyers.</p>
            </div>

            <div className="qure-list-box">
              <h2 className="qure-h2 qure-split-text" style={{ color: '#aa3bff' }}>What Impulse worked on</h2>
              <p className="qure-body qure-split-text">Impulse rebuilt the SEO foundation around B2B healthcare intent:</p>
              <div className="qure-tags-grid">
                <span className="qure-tag">website and market audit</span>
                <span className="qure-tag">B2B intent keyword research</span>
                <span className="qure-tag">US healthcare keyword validation</span>
                <span className="qure-tag">keyword-to-page mapping</span>
                <span className="qure-tag">new multi-page structure</span>
                <span className="qure-tag">SEO landing page creation</span>
                <span className="qure-tag">on-page SEO across metadata</span>
                <span className="qure-tag">content optimisation</span>
                <span className="qure-tag">blog strategy</span>
                <span className="qure-tag">internal linking architecture</span>
                <span className="qure-tag">technical SEO fixes</span>
                <span className="qure-tag">relevant backlink creation</span>
                <span className="qure-tag">continuous optimisation</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The Healthcare Layer Block */}
      <section className="qure-section">
        <div className="qure-container qure-narrow">
          <div className="qure-emphasis-box qure-bg-glass">
            <h2 className="qure-h2 qure-split-text">The healthcare layer</h2>
            <p className="qure-body qure-split-text">
              The content needed discipline. In healthcare AI, sounding impressive is not enough. In fact, it can be risky. The copy had to stay specific, useful, and careful.
            </p>
            <div className="qure-features-list">
              <div className="qure-feature">Search-friendly, but not inflated.</div>
              <div className="qure-feature">Clinical enough to feel credible.</div>
              <div className="qure-feature">Clear enough for enterprise buyers to act on.</div>
            </div>
            <p className="qure-body qure-split-text" style={{ marginTop: '2rem' }}>
              That balance shaped the keyword validation, page structure, and content optimisation.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion Panels */}
      <section className="qure-section" style={{ paddingBottom: '10rem' }}>
        <div className="qure-container">
          <div className="qure-grid-2">
            
            <div className="qure-panel qure-bg-glass">
              <div className="qure-panel-corner">
                <svg viewBox="801 344 274 272" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" />
                </svg>
              </div>
              <h2 className="qure-h2 qure-split-text">What changed</h2>
              <p className="qure-body qure-split-text">
                The US website became easier to find and easier to understand.
              </p>
              <ul className="qure-bullets">
                <li>Search engines had more structured content to crawl.</li>
                <li>Healthcare buyers had more relevant pages to land on.</li>
                <li>Blogs supported core solution pages instead of standing alone.</li>
                <li>Internal links helped connect the topic ecosystem.</li>
                <li>Conversion tracking showed whether SEO was contributing to leads.</li>
              </ul>
              <p className="qure-body qure-split-text" style={{ fontWeight: 600, color: '#fff' }}>
                The site was no longer just present in the US market. It had started working as an acquisition channel.
              </p>
            </div>

            <div className="qure-panel qure-bg-glass" style={{ border: '1px solid rgba(170, 59, 255, 0.3)' }}>
              <div className="qure-panel-corner">
                <svg viewBox="801 344 274 272" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" />
                </svg>
              </div>
              <h2 className="qure-h2 qure-split-text" style={{ color: '#aa3bff' }}>From a page to a pipeline</h2>
              <p className="qure-body qure-split-text">
                A single page can introduce a company. It cannot carry the search demand of a serious healthcare AI platform in the US market.
              </p>
              <p className="qure-body qure-split-text">
                For Qure.ai, the shift was structural: more pages, sharper keyword mapping, cleaner technical foundations, stronger healthcare language, better internal links, and tracked lead contribution.
              </p>
              <p className="qure-body qure-split-text" style={{ fontWeight: 600, color: '#fff' }}>
                From a thin US presence to a search-led path for the right buyers to find Qure.ai, understand its relevance, and start a conversation.
              </p>
              
              {/* CTA Button */}
              <a href="/contact" className="qure-cta-button">Build an SEO structure serious buyers can actually find</a>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        .qure-wrapper {
          color: #ffffff;
          background: transparent;
          position: relative;
          z-index: 2;
          margin-top: -100px;
        }

        .qure-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 4vw;
        }

        .qure-narrow {
          max-width: 900px;
        }

        /* Typography */
        .qure-section {
          padding: 6rem 0;
        }

        .qure-meta {
          font-family: var(--font-mono, monospace);
          font-size: 1.2rem;
          letter-spacing: 0.15em;
          color: #aa3bff; /* Purple brand color */
          text-transform: uppercase;
          display: block;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .qure-hero-title {
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(3rem, 6vw, 6rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .qure-h2 {
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          margin-bottom: 2rem;
          letter-spacing: -0.02em;
        }

        .qure-lead {
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          line-height: 1.4;
          font-weight: 600;
          margin-bottom: 3rem;
          color: #fff;
        }

        .qure-body {
          font-size: 1.2rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.75);
          margin-bottom: 1.5rem;
        }

        .qure-quote {
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(1.8rem, 3vw, 2.8rem);
          font-weight: 700;
          line-height: 1.2;
          color: #aa3bff;
          margin: 4rem 0;
          border-left: 4px solid #aa3bff;
          padding-left: 2rem;
        }

        /* Hero */
        .qure-hero {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .qure-hero::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 300px;
          background: linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
          pointer-events: none;
        }

        .qure-hero-img-full {
          width: 100%;
          height: 120vh;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        /* Content block directly below hero */
        .qure-hero-content-block {
          padding-top: 6rem !important;
          padding-bottom: 2rem !important;
          text-align: center;
        }

        /* Glass / Bento styling */
        .qure-bg-glass {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
        }

        /* Bento Grid */
        .qure-bento-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .qure-bento-card {
          padding: 3rem 2rem;
          text-align: center;
          transition: transform 0.4s;
        }

        .qure-bento-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.06);
        }

        .qure-bento-wide {
          grid-column: span 4;
          text-align: left;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .qure-stat {
          font-family: var(--font-heading);
          font-size: 4.5rem;
          font-weight: 800;
          color: #aa3bff;
          line-height: 1;
          margin-bottom: 1rem;
        }

        .qure-bento-card p {
          font-size: 1.1rem;
          color: rgba(255,255,255,0.8);
          line-height: 1.5;
          margin: 0;
        }

        /* Panels */
        .qure-panel {
          padding: 5rem;
          margin-bottom: 3rem;
          max-width: 900px;
          position: relative;
          overflow: hidden;
          transition: transform 0.4s ease, border-color 0.4s ease;
        }

        .qure-panel:hover {
          transform: translateY(-5px);
          border-color: rgba(170, 59, 255, 0.4);
        }

        .qure-panel-corner {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 450px;
          height: 450px;
          opacity: 0.03;
          transition: opacity 0.5s ease, transform 0.6s cubic-bezier(0.2, 1, 0.3, 1);
          pointer-events: none;
          z-index: 0;
        }

        .qure-panel:hover .qure-panel-corner {
          opacity: 0.15;
          transform: translate(-50%, -50%) scale(1.05) rotate(-5deg);
        }

        .qure-panel-corner svg {
          width: 100%;
          height: 100%;
        }

        .qure-panel-corner path {
          fill: none;
          stroke: #aa3bff;
          stroke-width: 3;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 2000;
          stroke-dashoffset: 2000;
          transition: stroke-dashoffset 1.5s cubic-bezier(0.2, 1, 0.3, 1);
        }

        .qure-panel:hover .qure-panel-corner path {
          stroke-dashoffset: 0;
        }

        .qure-panel-content {
          position: relative;
          z-index: 2;
        }

        .qure-panel-right {
          margin-left: auto;
        }

        .qure-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }

        /* Lists & Tags */
        .qure-bullets {
          list-style: none;
          padding: 0;
          margin: 2rem 0;
        }

        .qure-bullets li {
          font-size: 1.15rem;
          line-height: 1.6;
          color: rgba(255,255,255,0.8);
          margin-bottom: 1rem;
          padding-left: 2rem;
          position: relative;
        }

        .qure-bullets li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: #aa3bff;
        }

        .qure-tags-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 2rem;
        }

        .qure-tag {
          padding: 0.8rem 1.5rem;
          background: rgba(170, 59, 255, 0.1);
          border: 1px solid rgba(170, 59, 255, 0.2);
          border-radius: 30px;
          color: #aa3bff;
          font-size: 0.95rem;
          font-weight: 500;
        }

        /* Emphasis Box */
        .qure-emphasis-box {
          padding: 4rem;
          text-align: center;
          border-top: 2px solid #aa3bff;
        }

        .qure-features-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin: 3rem 0;
        }

        .qure-feature {
          font-size: 1.4rem;
          font-weight: 600;
          color: #fff;
          padding: 1.5rem;
          background: rgba(255,255,255,0.03);
          border-radius: 8px;
        }

        /* CTA */
        .qure-cta-button {
          display: inline-block;
          margin-top: 3rem;
          padding: 1.5rem 3rem;
          background: #aa3bff;
          color: #fff;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.2rem;
          text-decoration: none;
          border-radius: 40px;
          text-transform: uppercase;
          transition: all 0.3s;
        }

        .qure-cta-button:hover {
          background: #fff;
          color: #aa3bff;
          transform: translateY(-4px);
          box-shadow: 0 10px 20px rgba(170, 59, 255, 0.3);
        }

        /* Line Wrappers for GSAP */
        .line-wrapper {
          overflow: hidden;
          padding-bottom: 0.2em;
          margin-bottom: -0.2em;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .qure-bento-grid {
            grid-template-columns: 1fr 1fr;
          }
          .qure-bento-wide {
            grid-column: span 2;
          }
          .qure-grid-2 {
            grid-template-columns: 1fr;
          }
          .qure-panel {
            padding: 3rem 2rem;
          }
        }

        @media (max-width: 768px) {
          .qure-hero-img-full {
            height: 70vh;
            object-fit: cover;
          }
          .qure-bento-grid {
            grid-template-columns: 1fr;
          }
          .qure-bento-wide {
            grid-column: span 1;
          }
          .qure-section {
            padding: 4rem 0;
          }
        }
      `}</style>
    </main>
  );
};

export default QureAICaseStudy;
