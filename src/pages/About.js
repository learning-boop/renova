import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SeoHead from '../components/SeoHead';
import './About.css';

import drOne   from '../data/images/about/drmatla_one.png';
import drTwo   from '../data/images/about/drmatla_two.png';
import drThree from '../data/images/about/drmatla_three.png';

const stats = [
  { num: '20+',     label: 'Years of Medical\nExperience' },
  { num: '10+',     label: 'Years in Aesthetic\nMedicine' },
  { num: '10,000+', label: 'Aesthetic Procedures\nPerformed' },
  { num: 'CQC',     label: 'Rated Good\nDoctor-Led Clinic' },
  { num: 'APTOS',   label: 'Official Thread Lift\nTrainer UK' },
];

const credentials = [
  'GMC Registered Doctor',
  'MBBS, MRCGP, DFSRH',
  'PGCert Aesthetics & Cosmetic Medicine',
  'Official APTOS Thread Lift Trainer — United Kingdom',
  'Hyacorp Body Filler Trainer',
  'Genefill DX Trainer',
  'Founder & Clinical Director — Kensley Aesthetics',
  'CQC-Registered Clinic · Rated Good',
];

const whyItems = [
  {
    q: 'GMC Registered Doctor-Led Care',
    a: 'Every treatment at Kensley Aesthetics is performed personally by Dr. Tirumala Matla — a fully GMC-registered doctor with over 20 years of clinical experience. You are never treated by a non-medical practitioner.',
  },
  {
    q: 'Official APTOS Thread Lift Trainer UK',
    a: "Dr. Matla is the Official APTOS Thread Lift Trainer for the United Kingdom — recognised as one of the UK's leading specialists in advanced thread lifting techniques, educating medical professionals across the country.",
  },
  {
    q: 'CQC-Registered & Rated Good',
    a: 'Our clinic is registered with and rated Good by the Care Quality Commission — the independent body responsible for patient safety and clinical governance standards across healthcare in England.',
  },
  {
    q: '10,000+ Aesthetic Procedures Performed',
    a: 'With over 10,000 aesthetic procedures carried out throughout his career, Dr. Matla brings a depth and breadth of clinical experience that is exceptional in aesthetic medicine.',
  },
  {
    q: 'Bespoke Plans, Not Templates',
    a: 'Dr. Matla takes time at every consultation to understand your individual goals, anatomy and skin concerns before recommending any treatment. Your plan is built around you — never a standard protocol.',
  },
  {
    q: 'Honest Counsel & Meticulous Detail',
    a: 'Dr. Matla is known for his meticulous attention to detail and honest counsel. If a treatment is not right for you or will not achieve what you hope, he will tell you clearly and recommend an alternative.',
  },
];

function About() {
  const [openItem, setOpenItem] = useState(null);

  return (
    <>
      <SeoHead
        title="About Dr. Matla | GMC Registered Aesthetic Doctor Newcastle"
        description="Meet Dr. Tirumala Matla — GMC Registered Doctor, Official APTOS Thread Lift Trainer UK, and Founder of Kensley Aesthetics. 20+ years of medical experience, 10,000+ procedures performed. CQC-registered clinic in Jesmond, Newcastle."
        path="/about"
      />

      <PageHero
        label="About the Doctor"
        title={<>Dr. Tirumala<br />Matla</>}
        subtitle="GMC Registered Doctor · Founder & Clinical Director · Kensley Aesthetics"
      />

      {/* ── PROFILE ──────────────────────────────────────────── */}
      <section className="ab-profile">
        <div className="ab-profile__img-col">
          <img
            src={drOne}
            alt="Dr. Tirumala Matla — Kensley Aesthetics"
            className="ab-profile__img"
          />
        </div>
        <div className="ab-profile__content-col">
          <span className="ab-eyebrow">GMC Registered Doctor</span>
          <h2 className="ab-profile__name">Dr. Tirumala<br />Matla</h2>
          <p className="ab-profile__role">
            Founder &amp; Clinical Director<br />
            Kensley Aesthetics · Jesmond, Newcastle
          </p>
          <div className="ab-divider" />
          <p className="ab-profile__credentials-line">
            MBBS &nbsp;·&nbsp; MRCGP &nbsp;·&nbsp; DFSRH &nbsp;·&nbsp; PGCert Aesthetics
          </p>
          <blockquote className="ab-profile__quote">
            "My aim is to deliver natural, safe and effective treatments that help
            patients look refreshed, feel confident and achieve their aesthetic
            goals with complete trust and peace of mind."
          </blockquote>
        </div>
      </section>

      {/* ── STATS BAND ───────────────────────────────────────── */}
      <section className="ab-stats-band">
        {stats.map((s) => (
          <div className="ab-stats-band__item" key={s.num}>
            <span className="ab-stats-band__num">{s.num}</span>
            <span className="ab-stats-band__label">
              {s.label.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </span>
          </div>
        ))}
      </section>

      {/* ── CREDENTIALS ──────────────────────────────────────── */}
      <section className="ab-credentials">
        <div className="ab-credentials__inner">
          <div className="ab-credentials__left">
            <span className="ab-eyebrow ab-eyebrow--dark">Qualifications</span>
            <h2 className="ab-credentials__title">Credentials<br />&amp; Training</h2>
            <p className="ab-credentials__desc">
              Dr. Matla holds extensive clinical qualifications and is recognised
              as a leading trainer and educator in advanced aesthetic medicine
              across the United Kingdom.
            </p>
          </div>
          <div className="ab-credentials__right">
            <div className="ab-credentials__grid">
              {credentials.map((c, i) => (
                <div className="ab-credentials__card" key={i}>
                  <span className="ab-credentials__card-num">0{i + 1}</span>
                  <p className="ab-credentials__card-text">{c}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BIOGRAPHY ────────────────────────────────────────── */}
      <section className="ab-bio">
        <div className="ab-bio__inner">
          <div className="ab-bio__content-col">
            <span className="ab-eyebrow">Biography</span>
            <h2 className="ab-bio__title">About the<br />Doctor</h2>
            <div className="ab-divider" />
            <p className="ab-bio__text">
              Dr. Tirumala Matla is a highly experienced medical professional with over
              20 years of clinical experience and more than 10 years dedicated exclusively
              to advanced aesthetic medicine. Throughout his career, he has performed over
              10,000 aesthetic procedures, helping patients achieve natural,
              confidence-enhancing results.
            </p>
            <p className="ab-bio__text">
              Recognised as one of the UK's leading Thread Lift Specialists, Dr. Matla is
              the Official APTOS Thread Lift Trainer for the United Kingdom. He is also a
              Hyacorp Body Filler Trainer and Genefill DX Trainer — reflecting his
              commitment to innovation, education and excellence in aesthetic medicine.
            </p>
            <p className="ab-bio__text">
              As Founder and Clinical Director, he leads a CQC-registered, doctor-led
              clinic in Jesmond, Newcastle upon Tyne — rated Good by the Care Quality
              Commission and operating to the highest standards of patient safety and
              clinical governance.
            </p>
          </div>
          <div className="ab-bio__img-col">
            <img
              src={drTwo}
              alt="Dr. Matla in clinic — Kensley Aesthetics"
              className="ab-bio__img"
            />
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ───────────────────────────────────────── */}
      <section className="ab-why">
        <div className="ab-why__inner">
          <div className="ab-why__header">
            <span className="ab-eyebrow ab-eyebrow--gold">Why Choose Us</span>
            <h2 className="ab-why__title">Why Choose<br />Dr. Matla</h2>
          </div>
          <div className="ab-why__accordion">
            {whyItems.map((item, i) => (
              <div className="ab-why__item" key={i}>
                <button
                  className="ab-why__item-btn"
                  onClick={() => setOpenItem(openItem === i ? null : i)}
                  aria-expanded={openItem === i}
                >
                  <span>{item.q}</span>
                  <span className="ab-why__item-icon">{openItem === i ? '−' : '+'}</span>
                </button>
                <div className={`ab-why__item-body${openItem === i ? ' ab-why__item-body--open' : ''}`}>
                  <p className="ab-why__item-text">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="ab-cta">
        <div className="ab-cta__img-col">
          <img
            src={drThree}
            alt="Dr. Matla — Kensley Aesthetics"
            className="ab-cta__img"
          />
        </div>
        <div className="ab-cta__content-col">
          <span className="ab-eyebrow ab-eyebrow--gold">Ready to Begin</span>
          <h2 className="ab-cta__title">Book a<br />Consultation</h2>
          <p className="ab-cta__text">
            Begin your journey with a personalised consultation with Dr. Matla.
            Discuss your goals, understand your options, and receive an honest,
            expert recommendation.
          </p>
          <Link to="/contact" className="btn-primary">Book a Consultation</Link>
        </div>
      </section>
    </>
  );
}

export default About;
