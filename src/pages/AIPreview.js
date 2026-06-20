import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { generateTreatmentPreview } from '../services/api';
import './AIPreview.css';

const TREATMENTS = [
  { slug: 'smooth-lines',      label: 'Smooth Lines',      desc: 'Soften forehead lines, frown lines & crow\'s feet' },
  { slug: 'face-sculpt',       label: 'Face Sculpt',       desc: 'Define cheekbones, jawline & chin' },
  { slug: 'skin-glow',         label: 'Skin Glow',         desc: 'Brighten & rejuvenate dull, tired skin' },
  { slug: 'collagen-restore',  label: 'Collagen Restore',  desc: 'Rebuild natural collagen for firmer skin' },
  { slug: 'clear-skin',        label: 'Clear Skin',        desc: 'Treat acne, pigmentation & congestion' },
  { slug: 'neck-renewal',      label: 'Neck Renewal',      desc: 'Tighten & rejuvenate neck & décolletage' },
  { slug: 'full-face-refresh', label: 'Full Face Refresh', desc: 'A tailored combination for total renewal' },
  { slug: 'stay-youthful',     label: 'Stay Youthful',     desc: 'Preventative treatments for your 20s & 30s' },
];

const STEPS = [
  { n: '01', label: 'Upload',   desc: 'A clear, front-facing photo works best' },
  { n: '02', label: 'Select',   desc: 'Choose the treatment you\'re curious about' },
  { n: '03', label: 'Preview',  desc: 'See your AI-generated result instantly' },
];

function AIPreview() {
  const [file, setFile]           = useState(null);
  const [preview, setPreview]     = useState(null); // local object URL
  const [treatment, setTreatment] = useState('');
  const [loading, setLoading]     = useState(false);
  const [result, setResult]       = useState(null);
  const [error, setError]         = useState('');

  function handleFileChange(e) {
    const f = e.target.files[0];
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
    setResult(null);
    setError('');
  }

  async function handleGenerate() {
    if (!file || !treatment) return;
    setLoading(true);
    setError('');
    setResult(null);
    try {
      const data = await generateTreatmentPreview({ imageFile: file, treatment });
      setResult(data);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  function handleReset() {
    setFile(null);
    setPreview(null);
    setTreatment('');
    setResult(null);
    setError('');
  }

  const selectedTreatment = TREATMENTS.find((t) => t.slug === treatment);

  return (
    <>
      <PageHero
        label="AI Treatment Preview"
        title={<>See Your Future Self<br />Before You Commit</>}
        subtitle="Upload a photo, select a treatment, and discover how natural, confidence-boosting results could look on you — powered by AI."
      />

      {/* How it works */}
      <section className="aip-how">
        <div className="aip-container">
          <p className="aip-eyebrow">How It Works</p>
          <div className="aip-steps">
            {STEPS.map((s) => (
              <div key={s.n} className="aip-step">
                <span className="aip-step__num">{s.n}</span>
                <span className="aip-step__label">{s.label}</span>
                <span className="aip-step__desc">{s.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main tool */}
      <section className="aip-tool">
        <div className="aip-container">

          {!result ? (
            <div className="aip-grid">

              {/* Left — upload + select */}
              <div className="aip-left">
                {/* Step 1 — Upload */}
                <div className="aip-card">
                  <p className="aip-card__label">Step 01 — Upload Your Photo</p>
                  <p className="aip-card__hint">Use a clear, front-facing photo with good natural lighting for the best result.</p>

                  <label className="aip-upload" htmlFor="aip-file-input">
                    {preview ? (
                      <img src={preview} alt="Your uploaded photo" className="aip-upload__img" />
                    ) : (
                      <div className="aip-upload__placeholder">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="aip-upload__icon">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="17 8 12 3 7 8" />
                          <line x1="12" y1="3" x2="12" y2="15" />
                        </svg>
                        <span className="aip-upload__text">Click to upload</span>
                        <span className="aip-upload__sub">JPEG · PNG · WebP · Max 8 MB</span>
                      </div>
                    )}
                    <input
                      id="aip-file-input"
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      onChange={handleFileChange}
                      style={{ display: 'none' }}
                    />
                  </label>

                  {file && (
                    <button className="aip-reupload" onClick={() => { setFile(null); setPreview(null); }}>
                      ✕ Remove photo
                    </button>
                  )}
                </div>

                {/* Step 2 — Select treatment */}
                <div className="aip-card">
                  <p className="aip-card__label">Step 02 — Choose Your Treatment</p>
                  <div className="aip-treatments">
                    {TREATMENTS.map((t) => (
                      <button
                        key={t.slug}
                        className={`aip-treatment-btn ${treatment === t.slug ? 'aip-treatment-btn--active' : ''}`}
                        onClick={() => setTreatment(t.slug)}
                      >
                        <span className="aip-treatment-btn__name">{t.label}</span>
                        <span className="aip-treatment-btn__desc">{t.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — generate panel */}
              <div className="aip-right">
                <div className="aip-generate-panel">
                  <p className="aip-card__label">Step 03 — Generate Your Preview</p>

                  <div className="aip-summary">
                    <div className="aip-summary__row">
                      <span className="aip-summary__key">Photo</span>
                      <span className="aip-summary__val">{file ? file.name : 'Not uploaded yet'}</span>
                    </div>
                    <div className="aip-summary__row">
                      <span className="aip-summary__key">Treatment</span>
                      <span className="aip-summary__val">{selectedTreatment ? selectedTreatment.label : 'Not selected yet'}</span>
                    </div>
                  </div>

                  {error && <p className="aip-error">{error}</p>}

                  <button
                    className="aip-generate-btn"
                    onClick={handleGenerate}
                    disabled={!file || !treatment || loading}
                  >
                    {loading ? (
                      <>
                        <span className="aip-spinner" />
                        Generating your preview…
                      </>
                    ) : 'Generate My Preview'}
                  </button>

                  <p className="aip-generate-note">
                    This may take up to 30 seconds. Your photo is processed securely and never stored permanently.
                  </p>

                  <div className="aip-divider" />

                  <p className="aip-trust">
                    Not sure which treatment is right for you? Our team offers a <strong>free consultation</strong> tailored to your skin, goals and lifestyle.
                  </p>
                  <Link to="/contact" className="aip-consult-link">Book a Free Consultation →</Link>
                </div>
              </div>
            </div>
          ) : (
            /* Result view */
            <div className="aip-result">
              <div className="aip-result__images">
                <div className="aip-result__col">
                  <p className="aip-result__label">Before</p>
                  <img src={preview} alt="Before" className="aip-result__img" />
                </div>
                <div className="aip-result__col">
                  <p className="aip-result__label">After — {selectedTreatment?.label}</p>
                  <img src={result.resultUrl} alt="AI preview after treatment" className="aip-result__img" />
                </div>
              </div>

              <div className="aip-result__footer">
                <p className="aip-result__disclaimer">{result.disclaimer}</p>
                <div className="aip-result__actions">
                  <button className="aip-generate-btn aip-generate-btn--outline" onClick={handleReset}>
                    Try Another Treatment
                  </button>
                  <Link to="/contact" className="aip-generate-btn">
                    Book a Consultation
                  </Link>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>
    </>
  );
}

export default AIPreview;
