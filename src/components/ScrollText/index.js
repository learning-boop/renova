import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ScrollText.css';

const WORDS = ['Medical', 'Precision'];

function ScrollText() {
  const sectionRef = useRef(null);

  // Parallax — image moves slower than the page scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  // Scroll-driven text reveal — words start faintly visible, reach full opacity
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const words = section.querySelectorAll('.scroll-text__word');
    const n = words.length;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / scrollable));
      words.forEach((word, i) => {
        const threshold = i / n;
        const p = Math.max(0, Math.min(1, (progress - threshold) / (1 / n)));
        // Start at 15% opacity (always partially visible as bg text), reveal to 100%
        word.style.opacity = 0.15 + p * 0.85;
        word.style.transform = `translateY(${(1 - p) * 18}px)`;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="scroll-text" ref={sectionRef}>
      <div className="scroll-text__sticky">

        {/* Layer 1 — giant background text */}
        <div className="scroll-text__bg" aria-hidden="true">
          {WORDS.map((word, i) => (
            <span key={i} className="scroll-text__word">{word}</span>
          ))}
        </div>

        {/* Layer 2 — doctor image, centered, overlaps the text */}
        <div className="scroll-text__img-wrap">
          <motion.img
            src="/assets/doctor_renove.png"
            alt="Dr. Sophia Renova"
            className="scroll-text__doctor-img"
            style={{ y: imgY }}
          />
        </div>

        {/* Layer 3 — small description, bottom-left */}
        <p className="scroll-text__para">
          Precision meets artistry<br />in every treatment<br />we deliver.
        </p>

        {/* Layer 3 — label, top-right */}
        <span className="scroll-text__label">
          Refined<br />Through Years
        </span>

      </div>
    </section>
  );
}

export default ScrollText;