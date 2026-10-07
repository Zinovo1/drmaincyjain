/** SEO treatment landing pages — Gurugram-focused slugs and copy. */

function slugify(title) {
  return `${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}-gurugram`;
}

const treatmentSeeds = [
  {
    title: "Normal Delivery",
    summary: "Natural childbirth with continuous monitoring and emotional support.",
    icon: "icofont-baby",
    intro:
      "Dr Maincy Jain supports natural childbirth at Navkar Clinic and partner hospitals in Gurugram with attentive monitoring, clear communication, and postpartum guidance for mother and baby.",
    bullets: [
      "Labour monitoring and birth planning",
      "Partner-friendly delivery support",
      "Post-delivery follow-up at Sector 63 OPD",
    ],
  },
  {
    title: "High-Risk Pregnancy",
    summary: "Expert care for diabetes, hypertension, twins, and complex cases.",
    icon: "icofont-heart-beat",
    intro:
      "High-risk pregnancy care in Gurugram for gestational diabetes, hypertension, multiple pregnancies, and other complex obstetric conditions with coordinated hospital support when needed.",
    bullets: [
      "Close antenatal surveillance",
      "Twin and multiple pregnancy care",
      "Coordination with Cloudnine, Motherhood & Max Hospital",
    ],
  },
  {
    title: "PCOS / PCOD",
    summary: "Hormonal therapy, lifestyle counselling, and fertility support.",
    icon: "icofont-female",
    intro:
      "PCOS and PCOD management in Gurugram with personalised hormonal therapy, lifestyle counselling, cycle regulation, and fertility planning under one specialist.",
    bullets: [
      "Hormonal assessment and treatment",
      "Weight and metabolic counselling",
      "Fertility planning when required",
    ],
  },
  {
    title: "Infertility Treatment",
    summary: "Evaluation, counselling, and coordinated fertility care.",
    icon: "icofont-heart-beat-alt",
    intro:
      "Infertility evaluation and counselling in Gurugram with a stepwise approach to diagnosis, treatment options, and referral coordination when advanced fertility care is needed.",
    bullets: [
      "Couple counselling and work-up",
      "Ovulation and cycle support",
      "Referral coordination when indicated",
    ],
  },
  {
    title: "Painless Delivery",
    summary: "Epidural and modern pain-management options during labour.",
    icon: "icofont-injection-syringe",
    intro:
      "Painless delivery options including epidural analgesia during labour, discussed in advance so families can make informed choices for childbirth in Gurugram.",
    bullets: [
      "Pre-labour counselling on pain relief",
      "Epidural and medical pain management",
      "Safe monitoring throughout labour",
    ],
  },
  {
    title: "Laparoscopic Surgery",
    summary: "Minimally invasive procedures for fibroids, cysts, and endometriosis.",
    icon: "icofont-ui-zoom-in",
    intro:
      "Laparoscopic gynaecological surgery in Gurugram by a fellowship-trained minimal access surgeon — for ovarian cysts, fibroids, endometriosis, and related conditions (not robotic surgery).",
    bullets: [
      "Minimally invasive gynaecology",
      "Shorter recovery vs open surgery",
      "Fellowship in minimal access surgery",
    ],
  },
  {
    title: "Prenatal Care",
    summary: "Routine check-ups, scans, nutrition, and birth readiness.",
    icon: "icofont-stethoscope",
    intro:
      "Complete prenatal care in Gurugram including routine antenatal visits, growth scans, nutrition advice, and birth preparedness at Navkar Clinic, Sector 63.",
    bullets: [
      "Scheduled antenatal visits",
      "Nutrition and supplement guidance",
      "Birth plan and hospital coordination",
    ],
  },
  {
    title: "Menopause Management",
    summary: "Symptom relief, HRT guidance, and long-term wellness.",
    icon: "icofont-leaf",
    intro:
      "Menopause and perimenopause care in Gurugram — hot flashes, sleep, bone health, and hormone therapy guidance tailored to each patient.",
    bullets: [
      "Symptom assessment and relief",
      "HRT counselling when appropriate",
      "Long-term wellness screening",
    ],
  },
  {
    title: "Cesarean Section",
    summary: "Planned and emergency C-section with rapid recovery protocols.",
    icon: "icofont-surgeon-alt",
    intro:
      "Planned and emergency caesarean delivery in Gurugram with clear counselling before surgery and structured post-operative recovery support.",
    bullets: [
      "Elective and emergency C-section",
      "Pre-surgery counselling",
      "Post-operative mother-baby care",
    ],
  },
  {
    title: "Family Planning",
    summary: "Contraception counselling and reproductive health guidance.",
    icon: "icofont-users-social",
    intro:
      "Family planning and contraception counselling in Gurugram — oral pills, IUDs, implants, and long-term reproductive health planning.",
    bullets: [
      "Contraception options explained",
      "Pre-conception counselling",
      "Follow-up at Navkar Clinic",
    ],
  },
  {
    title: "Fibroid Treatment",
    summary: "Medical and minimally invasive surgical options.",
    icon: "icofont-pulse",
    intro:
      "Uterine fibroid evaluation and treatment in Gurugram including medical management and laparoscopic surgical options when required.",
    bullets: [
      "Ultrasound and symptom assessment",
      "Medical management",
      "Laparoscopic myomectomy when indicated",
    ],
  },
  {
    title: "Well Woman Checkup",
    summary: "Preventive screening, Pap smears, and hormonal assessments.",
    icon: "icofont-check-circled",
    intro:
      "Annual well-woman health checkups in Gurugram including breast exam, Pap smear counselling, and preventive screening for women of all ages.",
    bullets: [
      "Preventive gynaecology screening",
      "Pap smear and breast exam",
      "Hormonal and metabolic checks",
    ],
  },
];

export const TREATMENT_PAGES = treatmentSeeds.map((item) => {
  const slug = slugify(item.title);
  const metaTitle = `${item.title} in Gurugram | Dr Maincy Jain`;
  const metaDescription = `${item.summary} Consult Dr Maincy Jain, obstetrician & gynaecologist at Navkar Clinic, Sector 63, Gurugram. Call +91 95991 33359.`;

  return {
    ...item,
    slug,
    path: `/treatments/${slug}/`,
    metaTitle,
    metaDescription,
  };
});

export function getTreatmentBySlug(slug) {
  return TREATMENT_PAGES.find((page) => page.slug === slug);
}

export function getAllTreatmentSlugs() {
  return TREATMENT_PAGES.map((page) => page.slug);
}
