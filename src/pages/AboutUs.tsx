import React, { useEffect } from 'react';
import ServiceHero from '../components/Service/ServiceHero';
import ServiceHandoff from '../components/Service/ServiceHandoff';
import Contact from '../components/Contact';

const AboutUs: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('service-page');
    return () => document.body.classList.remove('service-page');
  }, []);

  return (
    <main id="main-content">
      <ServiceHero 
        headlineParts={["About Impulse", " Digital"]}
        headlineAccent="Momentum for brands with appetite."
        description="The best brands are never truly still. They question what has become routine. They improve what is already working. They move before marketing turns into maintenance.<br><br>Impulse Digital helps such brands turn ambition into commercial momentum by bringing strategy, creativity, content, search, performance, technology, AI, and execution into formation."
        buttons={[
          { text: "Start the conversation", link: "#connect", cursor: "HI" },
          { text: "See how we think", link: "#cases-pin", cursor: "EXPLORE" }
        ]}
      />
      <ServiceHandoff />

      {/* Section 1: Maintenance */}
      <section className="svc-section">
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="svc-h2 split-text" style={{ textAlign: 'center', marginBottom: '3rem' }}>Marketing becomes maintenance quietly.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.2rem', color: 'var(--soft-grey)', lineHeight: 1.6, textAlign: 'center' }}>
            <p>It rarely fails all at once.</p>
            <p>The calendar keeps moving. Campaigns keep launching. Reports keep getting made. Meetings keep happening.</p>
            <p>But somewhere along the way, the work starts needing more explanation than it creates movement.</p>
            <p>Leadership starts asking harder questions.</p>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '16px', margin: '2rem 0', border: '1px solid rgba(255,255,255,0.05)' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--white)', fontWeight: 500 }}>
                <li>"What is this doing for the brand?"</li>
                <li>"What is this building over time?"</li>
                <li>"What is this helping us decide?"</li>
                <li>"What is this moving for the business?"</li>
              </ul>
            </div>
            <p style={{ color: 'var(--white)', fontWeight: 600, fontSize: '1.4rem', marginTop: '1rem' }}>That is the drift Impulse exists to resist.</p>
          </div>
        </div>
      </section>

      <ServiceHandoff />

      {/* Section 2: Appetite */}
      <section className="svc-section glass-panel">
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="svc-h2 split-text" style={{ textAlign: 'center', marginBottom: '3rem' }}>Appetite is not size.<br/>It is willingness.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>A startup can have it.</div>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>A legacy business can have it.</div>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>A conglomerate can have it.</div>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>A founder-led company can have it.</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.2rem', color: 'var(--soft-grey)', lineHeight: 1.6, textAlign: 'center' }}>
            <p>Appetite is the willingness to move, question, improve, experiment, challenge default thinking, and expect more from marketing.</p>
            <p style={{ color: 'var(--white)', fontWeight: 600, fontSize: '1.4rem', marginTop: '2rem' }}>That is who we work best with.</p>
            <p>Brands that do not want marketing to simply continue.</p>
            <p>Brands that want it to create momentum.</p>
          </div>
        </div>
      </section>

      <ServiceHandoff />

      {/* Section 3: Formation */}
      <section className="svc-section">
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 className="svc-h2 split-text" style={{ marginBottom: '2rem' }}>Teams go further in formation.</h2>
              <p style={{ fontSize: '1.15rem', color: 'var(--soft-grey)', lineHeight: 1.6, marginBottom: '1.5rem' }}>A brand rarely moves because one channel performs in isolation.</p>
              <p style={{ fontSize: '1.15rem', color: 'var(--soft-grey)', lineHeight: 1.6, marginBottom: '1.5rem' }}>Momentum is built when the thinking, the story, the search presence, the media, the website, the data, the technology, and the execution pull in the same direction.</p>
              <p style={{ fontSize: '1.15rem', color: 'var(--white)', fontWeight: 500, lineHeight: 1.6, marginBottom: '1.5rem' }}>That is why we do not treat strategy as a document and execution as a handoff.</p>
              <p style={{ fontSize: '1.15rem', color: 'var(--soft-grey)', lineHeight: 1.6 }}>The work has to move together.<br/>Otherwise, it becomes activity.</p>
            </div>
            <div style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)', borderRadius: '24px', padding: '3rem', border: '1px solid rgba(255,255,255,0.08)', position: 'relative', overflow: 'hidden' }}>
               <div className="svc-use-corner"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></div>
               <h3 style={{ fontSize: '1.8rem', color: 'var(--white)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Less chasing. More clarity.</h3>
               <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem', color: 'var(--soft-grey)' }}>
                 <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}><span style={{ color: 'var(--accent)', marginTop: '4px' }}>→</span> You get fewer loose ends, fewer avoidable calls, and fewer rounds caused by unclear thinking.</li>
                 <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}><span style={{ color: 'var(--accent)', marginTop: '4px' }}>→</span> You get strategy before the work, not as a post-rationalisation after the work is questioned.</li>
                 <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}><span style={{ color: 'var(--accent)', marginTop: '4px' }}>→</span> You get content, campaigns, websites, search systems, and AI-enabled workflows built to perform, not just exist.</li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      <ServiceHandoff />

      {/* Section 4: Service vs Story */}
      <section className="svc-section">
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 className="svc-h2 split-text" style={{ textAlign: 'center', marginBottom: '4rem' }}>The service is not the story.<br/>The movement is.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            {[
              { title: "Brand Strategy", desc: "Gives the work a commercial foundation." },
              { title: "Content", desc: "Builds authority, not just output." },
              { title: "Search", desc: "Compounds visibility that the brand owns." },
              { title: "Performance", desc: "Makes spend more accountable." },
              { title: "Social Media", desc: "Builds relevance, not just a posting rhythm." },
              { title: "Websites", desc: "Become the place where intent either lands or leaks." },
              { title: "Analytics", desc: "Turns data into clearer decisions." },
              { title: "AI", desc: "Makes the work faster, sharper, and more scalable without lowering the bar." }
            ].map((item, idx) => (
              <div key={idx} style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h4 style={{ color: 'var(--white)', fontSize: '1.2rem', marginBottom: '0.8rem', fontFamily: 'var(--font-heading)' }}>{item.title}</h4>
                <p style={{ color: 'var(--soft-grey)', fontSize: '1rem', lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', color: 'var(--soft-grey)' }}>Used separately, these can become tasks.</p>
            <p style={{ fontSize: '1.4rem', color: 'var(--white)', fontWeight: 600, marginTop: '0.5rem' }}>Used with intent, they become momentum.</p>
          </div>
        </div>
      </section>

      <ServiceHandoff />

      {/* Section 5: Senior Thinking */}
      <section className="svc-section glass-panel">
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="svc-h2 split-text" style={{ marginBottom: '2rem' }}>Senior thinking stays close to the work.</h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--soft-grey)', lineHeight: 1.6, marginBottom: '2rem' }}>Impulse is not built on the idea that strategy happens once and execution figures itself out.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '3rem', textAlign: 'left' }}>
            <div style={{ padding: '1.2rem 1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>A campaign may need a sharper thought.</div>
            <div style={{ padding: '1.2rem 1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>A website may need a clearer path.</div>
            <div style={{ padding: '1.2rem 1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>A search strategy may need stronger commercial context.</div>
            <div style={{ padding: '1.2rem 1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>An AI workflow may need a human filter.</div>
            <div style={{ padding: '1.2rem 1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', gridColumn: '1 / -1', textAlign: 'center' }}>A client conversation may need more honesty than polish.</div>
          </div>
          <p style={{ fontSize: '1.25rem', color: 'var(--white)', fontWeight: 500, marginBottom: '1rem' }}>That is why senior thinking stays close.</p>
          <p style={{ fontSize: '1.15rem', color: 'var(--soft-grey)', opacity: 0.8 }}>Not to slow the work down.<br/>To keep it pointed in the right direction.</p>
        </div>
      </section>

      <ServiceHandoff />

      {/* Section 6: Founders */}
      <section className="svc-section">
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 className="svc-h2 split-text" style={{ textAlign: 'center', marginBottom: '4rem' }}>Our Leadership</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2.5rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', marginBottom: '1.5rem' }}></div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--white)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>Founder 1</h3>
              <p style={{ color: 'var(--accent)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.5rem' }}>Co-Founder</p>
              <p style={{ color: 'var(--soft-grey)', lineHeight: 1.6 }}>Insert separate founder bio here.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2.5rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', marginBottom: '1.5rem' }}></div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--white)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>Founder 2</h3>
              <p style={{ color: 'var(--accent)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.5rem' }}>Co-Founder</p>
              <p style={{ color: 'var(--soft-grey)', lineHeight: 1.6 }}>Insert separate founder bio here.</p>
            </div>
          </div>
        </div>
      </section>

      <ServiceHandoff />

      {/* Section 7: Fit / CTA */}
      <section className="svc-section svc-final-cta glass-panel">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="svc-h2 split-text" style={{ marginBottom: '2rem' }}>Built for brands that expect more.</h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--soft-grey)', lineHeight: 1.6, marginBottom: '1.5rem' }}>We are not the right fit for teams looking for a vendor to simply fulfil briefs.</p>
          <p style={{ fontSize: '1.15rem', color: 'var(--white)', lineHeight: 1.6, marginBottom: '3rem' }}>We work best with brands that want a partner who can think with them, build with them, challenge weak assumptions, and reduce the weight marketing places on their internal team.</p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <span style={{ padding: '0.8rem 1.5rem', background: 'var(--accent)', color: 'var(--bg-dark)', borderRadius: '30px', fontWeight: 600 }}>A sharper question.</span>
            <span style={{ padding: '0.8rem 1.5rem', background: 'var(--accent)', color: 'var(--bg-dark)', borderRadius: '30px', fontWeight: 600 }}>A higher standard.</span>
            <span style={{ padding: '0.8rem 1.5rem', background: 'var(--accent)', color: 'var(--bg-dark)', borderRadius: '30px', fontWeight: 600 }}>A willingness to improve.</span>
          </div>

          <p style={{ fontSize: '1.25rem', color: 'var(--soft-grey)', marginBottom: '3rem' }}>A need for marketing to move the business, not just fill the calendar.<br/><span style={{ color: 'var(--white)' }}>That is where Impulse fits best.</span></p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: 'var(--white)' }}>Move sharper.</h3>
            <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: 'var(--white)' }}>Move together.</h3>
            <h3 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--accent)', marginTop: '0.5rem' }}>Move the business.</h3>
          </div>

          <a href="#connect" className="btn" data-cursor="HI">Start the conversation</a>
        </div>
      </section>

      <Contact title="Let's talk about<br>what your<br>brand needs." />
    </main>
  );
};

export default AboutUs;
