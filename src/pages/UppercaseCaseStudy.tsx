import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Contact from '../components/Contact';

const UppercaseCaseStudy: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.add('service-page');

    const { gsap, ScrollTrigger } = window as any;
    if (gsap && ScrollTrigger && containerRef.current) {
      // Split text animations
      const splitTexts = containerRef.current.querySelectorAll('.cs-split-text');
      if ((window as any).SplitType) {
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
              yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.015, ease: 'power4.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
              }
            }
          );
        });
      }

      // Image reveal
      const mediaWrappers = containerRef.current.querySelectorAll('.cs-img-wrapper');
      mediaWrappers.forEach((wrapper: any, index: number) => {
        const direction = index % 2 === 0 ? -100 : 100;
        gsap.fromTo(wrapper,
          { opacity: 0, x: direction },
          {
            opacity: 1, x: 0, duration: 1.2, ease: 'power3.out',
            scrollTrigger: { trigger: wrapper, start: 'top 85%' }
          }
        );
      });

      // Numbered List Stagger
      const numItems = containerRef.current.querySelectorAll('.cs-num-item');
      if (numItems.length) {
        gsap.fromTo(numItems,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
            scrollTrigger: { trigger: '.cs-numbered-list', start: 'top 80%' }
          }
        );
      }

      // Highlight Box Reveal
      const highlightBoxes = containerRef.current.querySelectorAll('.cs-highlight-box');
      highlightBoxes.forEach((box: any) => {
        gsap.fromTo(box,
          { scale: 0.95, opacity: 0 },
          {
            scale: 1, opacity: 1, duration: 1, ease: 'power4.out',
            scrollTrigger: { trigger: box, start: 'top 85%' }
          }
        );
      });

      // Card Reveal
      const cards = containerRef.current.querySelectorAll('.cs-card');
      cards.forEach((card: any, i: number) => {
        gsap.fromTo(card,
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 85%' }
          }
        );
      });
      
      // Background color inversion & particle fade
      const triggerEl = containerRef.current.querySelector('.cs-editorial-grid');
      if (triggerEl) {
        gsap.to(document.body, {
          backgroundColor: '#000000',
          scrollTrigger: {
            trigger: triggerEl,
            start: 'top 50%',
            end: 'top 10%',
            scrub: true
          }
        });

        if ((window as any).particlesMaterial) {
          gsap.fromTo((window as any).particlesMaterial,
            { opacity: 0.6 },
            {
              opacity: 0,
              scrollTrigger: {
                trigger: triggerEl,
                start: 'top 50%',
                end: 'top 10%',
                scrub: true
              }
            }
          );
        }
      }
      
      ScrollTrigger.refresh();
    }

    return () => {
      document.body.classList.remove('service-page');
      const { gsap, ScrollTrigger } = window as any;
      if (gsap) {
        gsap.to(document.body, { backgroundColor: '#020018', duration: 0 });
        if ((window as any).particlesMaterial) {
          gsap.to((window as any).particlesMaterial, { opacity: 0.6, duration: 0 });
        }
      }
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((t: any) => t.kill());
      }
    };
  }, []);

  return (
    <main id="main-content" className="cs-wrapper" ref={containerRef}>
      <Helmet>
        <title>Uppercase Case Study | AI-Led Product Film by Impulse Digital</title>
        <meta name="description" content="See how Impulse Digital turned a crowded New Year moment into a product-led social film for Uppercase, using AI across script, visuals, video, voiceover, and music." />
        <link rel="canonical" href="https://www.theimpulsedigital.com/case-studies/uppercase" />
      </Helmet>

      {/* Hero Section (Image Only) */}
      <section className="cs-hero">
        <img 
          src={`${import.meta.env.BASE_URL}images/case-study-image/uppercase/upper-case-hero-img.png`} 
          alt="Uppercase Case Study Hero" 
          className="cs-hero-img-full"
        />
      </section>

      {/* Editorial Layout */}
      <section className="cs-section" style={{ paddingBottom: '0' }}>
        <div className="cs-container">
          <div className="cs-editorial-grid">
            
            {/* Left: Sticky Sidebar */}
            <div className="cs-editorial-sidebar">
              <div className="cs-sticky-box">
                <span className="cs-meta">UPPERCASE</span>
                <h1 className="cs-hero-title cs-split-text">Carry Your Resolution</h1>
                <p className="cs-hero-subtitle cs-split-text" style={{ fontSize: '1.5rem', marginTop: '1rem', color: '#aa3bff' }}>
                  Turning a crowded New Year moment into a product-led social film
                </p>
                <div style={{ width: '50px', height: '2px', background: '#aa3bff', marginTop: '2rem' }}></div>
              </div>
            </div>

            {/* Right: Scrolling Content */}
            <div className="cs-editorial-content">
              
              <div className="cs-content-block">
                <p className="cs-lead cs-split-text" style={{ fontSize: '2rem', marginBottom: '2rem' }}>
                  Around New Year, the internet fills with the same promise.
                </p>
                <div className="cs-text-block">
                  <p>New goals.</p>
                  <p>New habits.</p>
                  <p>New you.</p>
                  <p>Same scroll.</p>
                </div>
                <p className="cs-body cs-split-text">
                  Uppercase needed to enter that moment without sounding like another brand borrowing the season. The answer came from a simple observation: resolutions do not stay where they are made. They move into workdays, travel, routines, and everything people carry forward after January begins.
                </p>
                <h3 className="cs-quote cs-split-text">
                  "You don’t just set resolutions.<br/>You carry them."
                </h3>
              </div>

              <div className="cs-content-block cs-card cs-bg-glass" style={{ padding: '3rem', margin: '4rem 0' }}>
                <h2 className="cs-h2 cs-split-text">The context</h2>
                <p className="cs-body cs-split-text">
                  New Year marketing is crowded because every brand wants a place in the resolution conversation. The obvious route was easy to see: make another "new year, new you" reel and place the product somewhere inside it. That would have been forgettable.
                </p>
                <p className="cs-body cs-split-text">The film had to do three things cleanly:</p>
                <ul className="cs-list">
                  <li>avoid the usual New Year language</li>
                  <li>make the product feel native to the idea</li>
                  <li>work as a social-first piece of communication</li>
                </ul>
              </div>

              <div className="cs-content-block cs-card cs-bg-glass" style={{ padding: '3rem', margin: '4rem 0' }}>
                <h2 className="cs-h2 cs-split-text">The idea</h2>
                <p className="cs-body cs-split-text">
                  Most resolution stories focus on the moment of setting a goal. We looked at what happens after that. People carry their resolutions into the year. To work. On trips. Through routines. Into the everyday.
                </p>
                <div className="cs-highlight-box">
                  <h4>Carry Your Resolution</h4>
                  <p>A campaign about carrying things forward.<br/>A product people carry.</p>
                </div>
                <p className="cs-body cs-split-text">
                  The connection was simple enough to land quickly, and strong enough to hold a film together.
                </p>
              </div>

              {/* First Full Image (NO CUTTING) */}
              <div className="cs-img-reveal-left cs-img-wrapper">
                <img 
                  src={`${import.meta.env.BASE_URL}images/case-study-image/uppercase/Carry Your Resolution.webp`} 
                  alt="Carry Your Resolution Campaign" 
                  className="cs-media-img" 
                />
              </div>

              <div className="cs-content-block" style={{ margin: '6rem 0' }}>
                <h2 className="cs-h2 cs-split-text">Building the campaign</h2>
                <p className="cs-body cs-split-text">
                  The line was only the starting point. The film needed moments that could make the idea feel lived-in, not just written. We mapped:
                </p>
                <div className="cs-numbered-list">
                  <div className="cs-num-item">
                    <span className="cs-num">01</span>
                    <p>what each moment should feel like</p>
                  </div>
                  <div className="cs-num-item">
                    <span className="cs-num">02</span>
                    <p>where the story should play out</p>
                  </div>
                  <div className="cs-num-item">
                    <span className="cs-num">03</span>
                    <p>how the product should appear</p>
                  </div>
                </div>
                <p className="cs-body cs-split-text">
                  The goal was to make the bag present without making the film feel like a product demonstration. The product had to belong in the story, not interrupt it.
                </p>
              </div>

              {/* Second Full Image (NO CUTTING) */}
              <div className="cs-img-reveal-right cs-img-wrapper">
                <img 
                  src={`${import.meta.env.BASE_URL}images/case-study-image/uppercase/uppercase-bag.webp`} 
                  alt="Uppercase Bag" 
                  className="cs-media-img" 
                />
              </div>

              {/* Centered Emphasis Block */}
              <div className="cs-content-block" style={{ margin: '6rem 0', padding: '4rem', background: 'rgba(170, 59, 255, 0.05)', borderRadius: '16px', border: '1px solid rgba(170, 59, 255, 0.2)' }}>
                <h2 className="cs-h2 cs-split-text" style={{ color: '#aa3bff' }}>The role of the product</h2>
                <p className="cs-body cs-split-text" style={{ fontSize: '1.4rem', lineHeight: 1.6, color: '#fff' }}>
                  The campaign thought and the product met at one clean point: <strong>Carrying things forward.</strong>
                </p>
                <p className="cs-body cs-split-text">
                  That overlap gave the work its centre. The bag did not need a forced explanation. It had a natural reason to be there. A New Year resolution becomes something you carry. Uppercase becomes part of that movement. 
                  <br/><br/><strong style={{ color: '#aa3bff' }}>Simple. Direct. Social-ready.</strong>
                </p>
              </div>

              <div className="cs-content-block cs-card cs-bg-glass" style={{ padding: '3rem', margin: '4rem 0' }}>
                <h2 className="cs-h2 cs-split-text">Where AI came in</h2>
                <p className="cs-body cs-split-text">
                  The film was built using AI across script, visuals, models, video, voiceover, and music. But AI was not treated as the idea. The idea came first. AI helped build around it.
                </p>
                <p className="cs-body cs-split-text">
                  It gave the team speed, flexibility, and the ability to try multiple directions without the usual production constraints. The judgement still had to be human:
                </p>
                <ul className="cs-list">
                  <li>What to say.</li>
                  <li>What to leave out.</li>
                  <li>How the product should appear.</li>
                </ul>
                <p className="cs-body cs-split-text" style={{ fontStyle: 'italic', color: '#aa3bff', marginTop: '1rem' }}>
                  That is the difference between AI output and AI-shaped storytelling.
                </p>
              </div>

              <div className="cs-content-block cs-card cs-bg-glass" style={{ padding: '3rem', margin: '4rem 0' }}>
                <h2 className="cs-h2 cs-split-text">Outcome</h2>
                <p className="cs-body cs-split-text">
                  The reel went live in December 2025 and picked up strong traction on Instagram.
                </p>
                <p className="cs-body cs-split-text" style={{ fontSize: '1.2rem', color: '#fff' }}>
                  The stronger creative outcome was clear: the piece did not feel like an AI experiment. It felt like a campaign film with a product-led idea at the centre.
                </p>
                
                <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <h3 className="cs-h2 cs-split-text" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>What this says about the work</h3>
                  <p className="cs-body cs-split-text">
                    AI can make content faster. But speed without judgement only produces more content. For Uppercase, AI helped compress production. The thinking still had to do the harder job: find a seasonal idea the product could honestly own.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Contact title="Build an AI-led<br/>campaign where the<br/>idea still leads." />

      <style>{`
        .cs-wrapper {
          color: #ffffff;
          background: transparent;
          position: relative;
          z-index: 2;
          margin-top: -100px; /* Pull up behind the header */
        }

        .cs-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 4vw;
        }

        .cs-narrow {
          max-width: 1000px;
        }

        /* Hero Image Only */
        .cs-hero {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .cs-hero::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 300px;
          background: linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
          pointer-events: none;
        }

        .cs-hero-img-full {
          width: 100%;
          height: 120vh;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        /* Content block directly below hero */
        .cs-hero-content-block {
          padding-top: 6rem !important;
          padding-bottom: 2rem !important;
        }

        .cs-meta {
          font-family: var(--font-mono, monospace);
          font-size: 1rem;
          letter-spacing: 0.15em;
          color: #aa3bff;
          text-transform: uppercase;
          display: block;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .cs-hero-title {
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(2.5rem, 4.5vw, 5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -0.03em;
          text-transform: uppercase;
          word-break: break-word;
        }

        .cs-hero-subtitle {
          font-size: clamp(1.2rem, 2vw, 1.8rem);
          max-width: 800px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.4;
          font-weight: 300;
        }

        /* Typography & Layout */
        .cs-section {
          padding: 6rem 0;
        }

        .cs-bg-glass {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .cs-card {
          padding: 4rem;
          border-radius: 16px;
          transition: transform 0.4s ease, background 0.4s ease;
        }

        .cs-card:hover {
          background: rgba(255, 255, 255, 0.04);
          transform: translateY(-8px);
        }

        .cs-numbered-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin: 3rem 0;
        }

        .cs-num-item {
          display: flex;
          align-items: center;
          gap: 2rem;
          padding: 2rem;
          background: rgba(255,255,255,0.02);
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.03);
          transition: all 0.3s ease;
        }

        .cs-num-item:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(170, 59, 255, 0.3);
          transform: translateX(10px);
        }

        .cs-num {
          font-family: var(--font-heading);
          font-size: 2.5rem;
          font-weight: 800;
          color: #aa3bff;
          opacity: 0.8;
          min-width: 60px;
        }

        .cs-num-item p {
          font-size: 1.25rem;
          margin: 0;
          font-weight: 500;
        }

        .cs-lead {
          font-size: clamp(1.5rem, 3vw, 2.5rem);
          line-height: 1.3;
          font-weight: 500;
          margin-bottom: 3rem;
        }

        .cs-h2 {
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          margin-bottom: 2rem;
          text-transform: uppercase;
          letter-spacing: -0.02em;
        }

        .cs-body {
          font-size: 1.125rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.75);
          margin-bottom: 1.5rem;
        }

        .cs-quote {
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(2rem, 3.5vw, 3.5rem);
          font-weight: 800;
          line-height: 1.1;
          color: #aa3bff;
          margin: 4rem 0;
          text-transform: uppercase;
          border-left: 4px solid #aa3bff;
          padding-left: 2rem;
        }

        .cs-text-block {
          margin: 2rem 0;
          padding: 2rem;
          background: rgba(255,255,255,0.03);
          border-left: 2px solid #aa3bff;
          border-radius: 4px;
        }

        .cs-text-block p {
          font-size: 1.25rem;
          color: #fff;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .cs-text-block p:last-child {
          margin-bottom: 0;
        }

        .cs-list {
          list-style: none;
          padding: 0;
          margin: 2rem 0;
        }

        .cs-list li {
          font-size: 1.125rem;
          line-height: 1.6;
          color: rgba(255,255,255,0.8);
          margin-bottom: 1rem;
          padding-left: 1.5rem;
          position: relative;
        }

        .cs-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.6rem;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #aa3bff;
        }

        .cs-highlight-box {
          background: rgba(0,0,0,0.5);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 2.5rem;
          border-radius: 8px;
          margin: 2rem 0;
        }

        .cs-highlight-box h4 {
          font-family: var(--font-mono, monospace);
          color: #aa3bff;
          font-size: 1rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .cs-highlight-box p {
          font-size: 1.25rem;
          font-weight: 500;
          line-height: 1.5;
        }

        /* Editorial Sticky Grid */
        .cs-editorial-grid {
          display: grid;
          grid-template-columns: 40% 1fr;
          gap: 5rem;
          padding: 4rem 0;
        }

        .cs-editorial-sidebar {
          position: relative;
        }

        .cs-sticky-box {
          position: sticky;
          top: 150px;
        }

        .cs-editorial-content {
          display: flex;
          flex-direction: column;
        }

        .cs-content-block {
          max-width: 800px;
        }

        .cs-img-wrapper {
          overflow: hidden;
          border-radius: 16px;
          margin: 4rem 0;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .cs-media-img {
          width: 100%;
          height: auto;
          display: block;
        }

        @media (max-width: 992px) {
          .cs-editorial-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .cs-sticky-box {
            position: relative;
            top: 0;
            margin-bottom: 2rem;
          }
          .cs-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .cs-hero-img-full {
            height: 70vh;
            object-fit: cover;
          }
          .cs-section {
            padding: 5rem 0;
          }
          .cs-media-section {
            padding: 0 4vw;
          }
          .cs-hero {
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </main>
  );
};

export default UppercaseCaseStudy;
