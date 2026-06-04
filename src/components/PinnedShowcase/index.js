import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion';
import './PinnedShowcase.css';

const ease = [0.76, 0, 0.24, 1];
const easeOut = [0.22, 1, 0.36, 1];

export default function PinnedShowcase({ treatments }) {
  const wrapperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const n = treatments.length;

  const { scrollYProgress } = useScroll({ target: wrapperRef });

  /* progress bar within each step (0→1 inside one step) */
  const stepProgress = useTransform(scrollYProgress, (v) => {
    const raw = (v * n) % 1;
    return raw;
  });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(Math.floor(v * n), n - 1);
    setActiveIndex(idx);
  });

  function scrollToItem(i) {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const top = window.scrollY + rect.top + (i / n) * wrapperRef.current.offsetHeight + 4;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  const t = treatments[activeIndex];

  return (
    <div
      ref={wrapperRef}
      className="ps-wrapper"
      style={{ height: `${n * 100}vh` }}
    >
      <div className="ps-sticky">

        {/* ── vertical nav + progress line ── */}
        <nav className="ps-nav">
          <motion.div
            className="ps-nav__line-fill"
            style={{ scaleY: scrollYProgress }}
          />
          {treatments.map((item, i) => (
            <button
              key={i}
              className={`ps-nav__item${i === activeIndex ? ' ps-nav__item--active' : ''}`}
              onClick={() => scrollToItem(i)}
              aria-label={item.label}
            >
              <span className="ps-nav__num">{item.num}</span>
              <span className="ps-nav__dot" />
            </button>
          ))}
        </nav>

        {/* ── left: text content ── */}
        <div className="ps-left">

          {/* counter */}
          <div className="ps-counter">
            <span className="ps-counter__cur">
              {String(activeIndex + 1).padStart(2, '0')}
            </span>
            <span className="ps-counter__sep" />
            <span className="ps-counter__total">
              {String(n).padStart(2, '0')}
            </span>
          </div>

          {/* tagline / short desc */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`tag-${activeIndex}`}
              className="ps-tagline"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: easeOut }}
            >
              {t.tagline}
            </motion.p>
          </AnimatePresence>

          {/* large treatment name */}
          <AnimatePresence mode="wait">
            <motion.h2
              key={`title-${activeIndex}`}
              className="ps-title"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: easeOut, delay: 0.04 }}
            >
              {t.label}
            </motion.h2>
          </AnimatePresence>

          {/* brief description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${activeIndex}`}
              className="ps-desc"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: easeOut, delay: 0.1 }}
            >
              {t.description.split(' ').slice(0, 22).join(' ')}…
            </motion.p>
          </AnimatePresence>

          {/* CTA */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`cta-${activeIndex}`}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.4, ease: easeOut, delay: 0.14 }}
            >
              <Link to={`/treatments/${t.slug}`} className="ps-cta">
                Explore Treatment
                <span className="ps-cta__arrow">→</span>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── right: image with mask reveal ── */}
        <div className="ps-right">
          <AnimatePresence mode="wait">
            <motion.div
              key={`img-${activeIndex}`}
              className="ps-img-frame"
              initial={{ clipPath: 'inset(0 0 0 100%)' }}
              animate={{ clipPath: 'inset(0 0 0 0%)' }}
              exit={{ clipPath: 'inset(0 100% 0 0)' }}
              transition={{ duration: 0.8, ease }}
            >
              {t.image
                ? <img src={t.image} alt={t.label} className="ps-img" />
                : <div className="ps-img-placeholder" />
              }
            </motion.div>
          </AnimatePresence>

          {/* step progress bar on image bottom */}
          <div className="ps-progress-track">
            <motion.div
              className="ps-progress-fill"
              style={{ scaleX: stepProgress, transformOrigin: 'left' }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
