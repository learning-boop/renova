import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../lib/sanityClient';
import QuickContact from '../components/QuickContact';
import './pages.css';
import './TreatmentDetail.css';

const QUERY = `*[_type == "mainTreatment" && slug.current == $slug][0] {
  num,
  "slug": slug.current,
  label,
  tagline,
  description,
  "image": image.asset->url,
  "image_second": image_second.asset->url,
  benefits,
  ideal,
  faqs[] { q, a },
  prices[] { name, price },
  subTreatments[] {
    title,
    name,
    description,
    "image": image.asset->url
  }
}`

function MainTreatmentDetail() {
  const { slug } = useParams();
  const [treatment, setTreatment] = useState(null);
  const [loading, setLoading]     = useState(true);
  const [openFaq, setOpenFaq]     = useState(null);

  useEffect(() => {
    client.fetch(QUERY, { slug })
      .then(data => { setTreatment(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) return null;
  if (!treatment) return (
    <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
      <p style={{ fontFamily: 'Cormorant, Georgia, serif', fontSize: 22, letterSpacing: 2, color: 'var(--color-primary)' }}>
        Content coming soon
      </p>
      <p style={{ fontSize: 13, color: 'var(--color-primary)', opacity: 0.6 }}>
        This treatment page is being prepared. Check back shortly.
      </p>
    </div>
  );

  return (
    <>
      {/* HERO */}
      <section className="td-hero">
        <div className="td-hero__bg" style={{ backgroundImage: treatment.image ? `url(${treatment.image})` : 'none' }} />
        <div className="td-hero__overlay" />
        <h1 className="td-hero__title">{treatment.label}</h1>
        {treatment.tagline && <span className="td-hero__tagline">{treatment.tagline}</span>}
        {treatment.description && <p className="td-hero__desc">{treatment.description}</p>}
        <div className="td-hero__scroll">
          <span className="td-hero__scroll-arrow">↓</span>
        </div>
      </section>

      {/* FAQS */}
      {treatment.faqs && treatment.faqs.length > 0 && (
        <section>
          <div className="td-service-container">
            <h1 className="td-service">Services</h1>
            <div className="td-service-links">
              {treatment.faqs.map((faq, i) => (
                <div className="td-faq-item" key={i}>
                  <button className="td-faq-btn" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span className="td-faq-q">{faq.q}</span>
                    <span className="td-faq-toggle">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  <div className={`td-faq-answer${openFaq === i ? ' td-faq-answer--open' : ''}`}>
                    <p className="td-faq-answer-text">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* EDITORIAL */}
      {treatment.image_second && (
        <section className="td-editorial">
          <h2 className="td-editorial__hl td-editorial__hl--1">WHAT SHOULD</h2>
          <h2 className="td-editorial__hl td-editorial__hl--2">PERFECT {treatment.label}</h2>
          <div className="td-editorial__img" style={{ backgroundImage: `url(${treatment.image_second})` }} />
          <h2 className="td-editorial__hl td-editorial__hl--3">LOOK LIKE?</h2>
          <div className="td-editorial__quote">
            <span className="td-editorial__quote-mark">"</span>
            <p className="td-editorial__quote-text">{treatment.description}</p>
          </div>
        </section>
      )}

      {/* PRICES */}
      {treatment.prices && treatment.prices.length > 0 && (
        <section className="td-prices">
          <h2 className="td-prices__heading">PRICES</h2>
          <div className="td-prices__list">
            {treatment.prices.map((item, i) => (
              <div className="td-prices__row" key={i}>
                <span className="td-prices__name">{item.name}</span>
                <span className="td-prices__amount">{item.price}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      <QuickContact />
    </>
  );
}

export default MainTreatmentDetail;
