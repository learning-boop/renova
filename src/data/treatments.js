import smoothLinesImg from './images/treatment/smoothlines_one.png';

const TREATMENTS = [
  {
    num: '01',
    label: 'Smooth Lines',
    slug: 'smooth-lines',
    image: smoothLinesImg,
    tagline: 'Soften expression lines without losing natural movement.',
    description:
      'Our Smooth Lines treatment targets dynamic wrinkles caused by repeated facial expressions — crow\'s feet, frown lines, and forehead creases. Using precision-placed relaxant injections, we relax overactive muscles so lines soften naturally while full expression is preserved.',
    benefits: [
      'Visible results within 3–5 days',
      'No downtime required',
      'Natural, rested appearance',
      'Results last 3–4 months',
    ],
    ideal: 'Ideal for anyone looking to soften expression lines and achieve a refreshed look without looking "done".',
    faqs: [
      { q: 'How long do results last?', a: 'Results from Smooth Lines typically last 3–4 months. With regular treatment over time, some clients find their muscles relax further and results extend slightly longer.' },
      { q: 'Is the treatment painful?', a: 'Discomfort is minimal. We use ultra-fine needles and the injections take only a few seconds per area. Most clients describe a brief pinching sensation that passes immediately.' },
      { q: 'How soon will I see results?', a: 'Initial softening begins within 3–5 days. Full results are visible at 14 days, which is when we recommend a follow-up review to ensure the outcome is exactly right for you.' },
      { q: 'Will my face look frozen or unnatural?', a: 'Never. Our philosophy is to preserve natural expression while softening lines. Precise, conservative placement means you still look like yourself — just more rested and refreshed.' },
      { q: 'Is there any downtime?', a: 'There is no downtime. You can return to daily activities immediately. We ask that you avoid strenuous exercise, lying flat, and alcohol for the first 24 hours.' },
    ],
  },
  {
    num: '02',
    label: 'Face Sculpt',
    slug: 'face-sculpt',
    image: '/assets/face_sculpt.png',
    tagline: 'Redefine structure, restore volume, and enhance contours.',
    description:
      'Face Sculpt uses premium dermal fillers to restore lost volume, define cheekbones, refine the jawline, and enhance facial proportions. Each treatment is tailored to your anatomy for a harmonious, naturally sculpted result.',
    benefits: [
      'Immediate, long-lasting results',
      'Customised to your facial structure',
      'Enhances natural contours',
      'Minimal bruising with expert technique',
    ],
    ideal: 'Perfect for those wanting to restore youthful volume or enhance their natural facial structure.',
    faqs: [
      { q: 'How long do dermal fillers last?', a: 'Face Sculpt results typically last 12–18 months depending on the area treated, product used, and individual metabolism. Cheekbone definition tends to last longer than lip volume.' },
      { q: 'Will it look overdone or unnatural?', a: 'Our approach is always harmony and proportion. We work with your natural bone structure, not against it. The goal is enhancement you notice in the mirror — not something others notice immediately.' },
      { q: 'Is there bruising or swelling?', a: 'Mild swelling and occasional bruising are possible, particularly around the lips and under-eyes. These typically resolve within 5–7 days. We use fine cannulas where possible to minimise trauma.' },
      { q: 'Can filler be dissolved if I don\'t like the result?', a: 'Yes. Hyaluronic acid fillers can be dissolved with an enzyme called hyaluronidase if you are ever unhappy with your result. This gives complete peace of mind.' },
      { q: 'What areas can be treated?', a: 'We can treat cheekbones, jawline, chin, temples, under-eyes, nasolabial folds, and lips — often combining multiple areas in one session for a cohesive, balanced outcome.' },
    ],
  },
  {
    num: '03',
    label: 'Skin Glow',
    slug: 'skin-glow',
    image: '/assets/skin_glow.png',
    tagline: 'Deeply hydrate and illuminate from within.',
    description:
      'Skin Glow combines advanced skin-boosting injectables and hydration treatments to deeply nourish the dermis. The result is a luminous, plump complexion that radiates health and vitality — perfect before a big event or as a regular skin ritual.',
    benefits: [
      'Deep hydration lasting weeks',
      'Improved skin texture and elasticity',
      'Luminous, lit-from-within glow',
      'Suitable for all skin types',
    ],
    ideal: 'Best suited for those with dull, dehydrated skin or anyone wanting a radiant boost.',
    faqs: [
      { q: 'How is Skin Glow different from a facial?', a: 'Unlike topical facials, Skin Glow delivers hydration and nutrients directly into the dermis via micro-injections. The results are deeper, longer-lasting, and more transformative than any surface treatment.' },
      { q: 'How long does the glow last?', a: 'Most clients see radiant, plump skin lasting 4–6 weeks. We recommend a course of 3 sessions for optimal long-term improvement in texture and hydration levels.' },
      { q: 'Is it suitable before a big event?', a: 'Yes, it is one of our most popular pre-event treatments. We recommend booking at least 7 days before to allow any minor redness to fully resolve and the glow to fully develop.' },
      { q: 'What skin concerns does it address?', a: 'Skin Glow is ideal for dullness, dehydration, fine surface lines, uneven texture, and loss of radiance. It works beautifully alongside other treatments as part of a complete skin programme.' },
      { q: 'How many sessions do I need?', a: 'You will see a noticeable improvement after one session. For transformative, lasting improvement in skin quality, a course of 3 sessions spaced 4 weeks apart is recommended.' },
    ],
  },
  {
    num: '04',
    label: 'Collagen Restore',
    slug: 'collagen-restore',
    image: '/assets/collagen_restore.png',
    tagline: 'Stimulate your skin\'s own renewal from the inside out.',
    description:
      'Collagen Restore uses bio-stimulating treatments to trigger the skin\'s natural collagen production. Over weeks, skin becomes firmer, thicker, and more resilient — addressing laxity and fine lines with long-lasting, progressive improvement.',
    benefits: [
      'Stimulates natural collagen synthesis',
      'Progressive, long-lasting results',
      'Improves skin firmness and thickness',
      'Minimal downtime',
    ],
    ideal: 'Ideal for those experiencing skin laxity, loss of firmness, or fine lines on the face and neck.',
    faqs: [
      { q: 'When will I see results?', a: 'Unlike immediate filler results, Collagen Restore works progressively. You will notice gradual firming and improvement over 6–12 weeks as your skin produces new collagen. The wait is worth it.' },
      { q: 'How long do results last?', a: 'Results from bio-stimulators can last 18–24 months or longer, making this one of the most durable non-surgical treatments available. A maintenance session once a year keeps skin at its best.' },
      { q: 'Who is the ideal candidate?', a: 'Anyone noticing early-to-moderate skin laxity, thinning skin, or loss of firmness — typically from the mid-30s onwards. It is also excellent as a preventative treatment for those wanting to maintain skin density long-term.' },
      { q: 'Is there any downtime?', a: 'Minimal. Some clients experience mild swelling or small bumps at injection sites for 24–48 hours. These resolve naturally. A light massage technique is used to distribute the product evenly.' },
      { q: 'Can it be combined with other treatments?', a: 'Yes. Collagen Restore pairs exceptionally well with Smooth Lines and Skin Glow. We often design a combined protocol that addresses volume, texture, and firmness simultaneously.' },
    ],
  },
  {
    num: '05',
    label: 'Clear Skin',
    slug: 'clear-skin',
    image: '/assets/clear_skin.png',
    tagline: 'Target blemishes, refine pores, and reveal clarity.',
    description:
      'Clear Skin is a targeted approach to acne-prone and congested skin. Combining medical-grade peels, skin-clearing treatments, and personalised protocols, we address active breakouts, reduce scarring, and regulate oil production for long-term clarity.',
    benefits: [
      'Reduces active breakouts',
      'Minimises acne scarring',
      'Refines enlarged pores',
      'Regulates sebum production',
    ],
    ideal: 'For those struggling with acne, congestion, enlarged pores, or post-acne marks.',
    faqs: [
      { q: 'How many sessions are needed to see results?', a: 'Many clients see a reduction in breakouts after the first session. However, for lasting clarity and scar improvement, a course of 4–6 sessions spaced 3–4 weeks apart is typically recommended.' },
      { q: 'Is it safe for sensitive or reactive skin?', a: 'Yes. We begin with a thorough skin assessment to select the right protocol for your skin\'s tolerance. We always start conservatively and adjust as your skin adapts and strengthens.' },
      { q: 'Will treatments cause purging or flare-ups?', a: 'Some clients experience a brief purging period in the first 1–2 weeks as the skin clears congestion. This is a sign the treatment is working. We guide you through this phase with the right home care.' },
      { q: 'Can you treat acne scarring?', a: 'Yes. Clear Skin includes options specifically targeted at post-acne marks and textural scarring. Improvement is progressive and most significant after a full course of treatment.' },
      { q: 'Do I need to change my skincare routine?', a: 'We provide personalised home care guidance with every Clear Skin programme. The right products at home significantly enhance and extend your in-clinic results.' },
    ],
  },
  {
    num: '06',
    label: 'Neck Renewal',
    slug: 'neck-renewal',
    image: '/assets/neck_renewal.png',
    tagline: 'Restore smoothness and lift to the neck and décolletage.',
    description:
      'The neck is often overlooked but is one of the first areas to show aging. Neck Renewal targets horizontal bands, loose skin, and crepey texture using a combination of relaxants, skin-boosters, and tightening treatments for a visibly smoother, more youthful neck.',
    benefits: [
      'Smooths neck bands and lines',
      'Tightens and lifts loose skin',
      'Improves texture on décolletage',
      'Non-surgical, no recovery time',
    ],
    ideal: 'For those noticing neck lines, banding, or skin laxity in the neck and chest area.',
    faqs: [
      { q: 'What causes neck banding and lines?', a: 'Neck bands are caused by the platysma muscle contracting over time, while horizontal neck lines develop from repeated movement and collagen loss. Both respond well to our targeted combination approach.' },
      { q: 'Is neck treatment more painful than facial treatment?', a: 'The neck is generally no more sensitive than the face. Topical numbing is applied where needed. Most clients find the procedure very comfortable.' },
      { q: 'How soon will I notice an improvement?', a: 'Relaxant effects on neck bands begin within 7–10 days. Skin texture improvements from skin-boosters develop over 4–6 weeks as hydration and collagen levels increase.' },
      { q: 'Can the décolletage area be treated too?', a: 'Yes. Neck Renewal extends to the décolletage, addressing crepey texture, fine lines, and sun damage in that area. Many clients choose to treat both neck and décolletage in one session.' },
      { q: 'How often is treatment needed?', a: 'We recommend an initial course of 2 sessions, then maintenance every 4–6 months. With consistent treatment, the neck and chest area show steady, compounding improvement.' },
    ],
  },
  {
    num: '07',
    label: 'Full Face Refresh',
    slug: 'full-face-refresh',
    image: '/assets/full_face_refresh.png',
    tagline: 'A complete facial rejuvenation tailored to you.',
    description:
      'Full Face Refresh is our comprehensive anti-aging protocol — combining the most effective elements of our treatments for a holistic renewal. From smoothing lines to restoring volume and improving skin quality, this is the ultimate facial transformation experience.',
    benefits: [
      'Comprehensive anti-aging protocol',
      'Addresses multiple concerns at once',
      'Cohesive, natural-looking outcome',
      'Tailored plan for your goals',
    ],
    ideal: 'For those ready to address multiple areas and achieve a comprehensive, refreshed appearance.',
    faqs: [
      { q: 'What is included in a Full Face Refresh?', a: 'The protocol is designed entirely around your individual concerns. It may combine relaxant injections, dermal fillers, skin-boosters, and peels — selected and sequenced for the most cohesive, natural result.' },
      { q: 'How is this different from booking individual treatments?', a: 'Full Face Refresh is planned as a single holistic strategy. Each element is chosen to complement the others, ensuring every area is balanced and the overall result looks unified, not piecemeal.' },
      { q: 'Is it done in one appointment?', a: 'Some elements can be combined in one appointment. Others — particularly skin treatments — may be staged across 2–3 sessions for the safest and most effective outcome. We plan this clearly at your consultation.' },
      { q: 'How long do the results last?', a: 'Different elements have different durations — relaxants last 3–4 months, fillers 12–18 months, and skin treatments build cumulatively. We create a maintenance plan to keep your results looking their best year-round.' },
      { q: 'Is a consultation required first?', a: 'Yes, always. The Full Face Refresh begins with a thorough facial assessment and honest conversation about your goals. No treatment is planned without full understanding of what you want to achieve.' },
    ],
  },
  {
    num: '08',
    label: 'Stay Youthful',
    slug: 'stay-youthful',
    image: '/assets/stay_youthful.png',
    tagline: 'A proactive programme to preserve your best skin.',
    description:
      'Stay Youthful is our preventative maintenance programme designed for those who want to age beautifully. Regular, subtle treatments keep skin at its best — preventing deep lines before they form and maintaining radiance year-round.',
    benefits: [
      'Prevents deep lines from forming',
      'Maintains consistent skin quality',
      'Personalised ongoing treatment plan',
      'Long-term value and results',
    ],
    ideal: 'Best for those in their late 20s and beyond who want to preserve their skin proactively.',
    faqs: [
      { q: 'Is it too early to start preventative treatment in my 20s?', a: 'Not at all. The most effective anti-aging strategy is prevention. Starting small, regular treatments before deep lines form means you will need less intervention as you age — not more.' },
      { q: 'What does the Stay Youthful programme involve?', a: 'We create a personalised annual treatment calendar, typically combining light relaxant doses, skin-boosters, and targeted peels at optimal intervals throughout the year. It is subtle, consistent, and highly effective.' },
      { q: 'How is this different from treating existing concerns?', a: 'Rather than correcting established lines and volume loss, Stay Youthful maintains your skin before those changes occur. Think of it as skin investment — compounding returns over time.' },
      { q: 'Is there a commitment or contract involved?', a: 'No contracts, ever. We recommend and plan a programme together, but you are always free to adjust or pause. Our goal is a long-term relationship built on trust, not obligation.' },
      { q: 'How often will I need appointments?', a: 'Most clients on the Stay Youthful programme visit 3–4 times per year. Your personalised calendar will outline the ideal timing for each treatment type to maintain continuous, natural-looking results.' },
    ],
  },
];

export default TREATMENTS;
