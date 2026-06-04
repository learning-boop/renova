import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import TREATMENTS from '../data/treatments';
import PinnedShowcase from '../components/PinnedShowcase';
import CtaSection from '../components/CtaSection';
import './pages.css';
import './TreatmentDetail.css';

function TreatmentDetail() {
  const { slug } = useParams();
  const treatment = TREATMENTS.find((t) => t.slug === slug);
  const [openFaq, setOpenFaq] = useState(null);

  if (!treatment) return <Navigate to="/services" replace />;

  const isLight = treatment.slug === 'smooth-lines';

  return (
    <>
      {/* ── CINEMATIC HERO ───────────────────────────────── */}
      <section className={`td-hero${isLight ? ' td-hero--light' : ''}`}>
        {/* background image */}
        <div
          className="td-hero__bg"
          style={{ backgroundImage: `url(${treatment.image})` }}
        />
        {/* overlay */}
        <div className="td-hero__overlay" />

        {/* large treatment name */}
        <h1 className="td-hero__title">{treatment.label}</h1>

        {/* centred tagline */}
        <span className="td-hero__tagline">{treatment.tagline}</span>

        {/* bottom-right description */}
        <p className="td-hero__desc">{treatment.description}</p>

        {/* bottom-left scroll indicator */}
        <div className="td-hero__scroll">
          <span className="td-hero__scroll-arrow">↓</span>
        </div>
      </section>

      {/* ── EXPLORE ALL TREATMENTS (pinned showcase) ─────── */}
      <PinnedShowcase treatments={TREATMENTS} />

{/* Services section */}
      <section>
        <div className="td-service-container">
          <h1 className='td-service'>Services</h1>
          <div className="td-service-links">
            {treatment.faqs.map((faq, i) => (
              <div className="td-faq-item" key={i}>
                <button
                  className="td-faq-btn"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="td-faq-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="td-faq-q">{faq.q}</span>
                  <span className="td-faq-toggle">
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                <div className={`td-faq-answer${openFaq === i ? ' td-faq-answer--open' : ''}`}>
                  <p className="td-faq-answer-text">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default TreatmentDetail;
