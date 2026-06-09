import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent, } from 'framer-motion';
import './PinnedShowcase.css';

const ease = [0.76, 0, 0.24, 1];
const easeOut = [0.22, 1, 0.36, 1];

export default function PinnedShowcase({ items, treatmentSlug, fallbackImage }) {
  const wrapperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const n = items.length;

  const { scrollYProgress } = useScroll({ target: wrapperRef });

  const stepProgress = useTransform(scrollYProgress, (v) => (v * n) % 1);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(Math.floor(v * n), n - 1);
    setActiveIndex(idx);
  });

  const t = items[activeIndex];

  return (
    <div
      ref={wrapperRef}
      className="ps-wrapper"
      style={{ height: `${n * 100}vh` }}
    >
      <div className="ps-sticky">

        {/* ── left: sub-treatment content ── */}
        <div className="ps-left">

          {/* sub-treatment title — gold label */}
          <AnimatePresence mode="wait">
            <motion.span
              key={`title-${activeIndex}`}
              className="ps-tagline"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: easeOut }}
            >
              {t.title}
            </motion.span>
          </AnimatePresence>

          {/* sub-treatment name — main heading */}
          <AnimatePresence mode="wait">
            <motion.h2
              key={`name-${activeIndex}`}
              className="ps-title"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: easeOut, delay: 0.04 }}
            >
              {t.name}
            </motion.h2>
          </AnimatePresence>

          {/* sub-treatment description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${activeIndex}`}
              className="ps-desc"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: easeOut, delay: 0.1 }}
            >
              {t.description}
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
              <Link to={`/treatments/${treatmentSlug}`} className="ps-cta">
                Book Consultation
                <span className="ps-cta__arrow">→</span>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── right: image per sub-treatment ── */}
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
              {(t.image || fallbackImage)
                ? <img src={t.image || fallbackImage} alt={t.name} className="ps-img" />
                : <div className="ps-img-placeholder" />
              }
            </motion.div>
          </AnimatePresence>

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
