// Copy is taken from tis.edu.in. Images are hot-linked from the original site (see README).
const TIS = 'https://tis.edu.in'
const media = (file) => `${TIS}/_next/static/media/${file}`

export const site = {
  name: 'Tulas International School',
  applyUrl: 'https://admission.tis.edu.in',
  virtualTourUrl: `${TIS}/virtual-tour/`,
  helpline: { label: '+91-98379 83791', href: 'tel:+91-9837983791' },
  email: 'info@tis.edu.in',
  address: {
    label: 'Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun-248011 (Uttarakhand)',
    href: 'https://maps.app.goo.gl/maBF8syXueQkw31E6',
  },
  landlines: [
    { label: '0135-2699444', href: 'tel:0135-2699444' },
    { label: '0135-2699666', href: 'tel:0135-2699666' },
  ],
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'Campus', href: '#campus' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Admission', href: '#admissions' },
]

export const hero = {
  lines: ['Welcome to', 'Tulas', 'International', 'School (TIS)'],
  text: 'TIS is one of India’s top boarding and day schools in Dehradun, India.',
  image: { src: `${TIS}/images/tis-campus-og.jpg`, alt: 'Tulas International School campus in Dehradun India' },
}

export const about = {
  title: 'Boarding and Day School Excellence',
  lead: 'CBSE-affiliated co-ed boarding school in Dehradun, Uttarakhand for boys and girls from Class 4 to 12.',
  paragraphs: [
    'Our CBSE curriculum focuses on academic excellence, holistic development, and preparing students to be global leaders.',
    'We provide world-class education, modern facilities, and a nurturing environment for students to thrive academically, socially, and culturally.',
  ],
  founded: 'Tulas International School was established in 2012 under the aegis of Rishabh Educational Trust to impart education through seamless opportunities.',
}

export const highlights = {
  title: 'At Tulas, we always ask, “What’s the secret to making school awesome?”',
  text: 'It’s all about making learning feel like an adventure—where curiosity leads, creativity thrives, and every day brings something new to discover.',
}

export const stats = [
  { value: '22', label: 'Acre pollution free campus' },
  { value: '16+', label: 'Olympic sports' },
  { value: '24*7', label: 'Medical assistance' },
  { value: '6:1', label: 'Student teacher ratio' },
]

export const rankings = [
  { id: 'dehradun', kicker: '#1', title: 'In Dehradun', body: 'Co-Educational Boarding School in Dehradun by Education Today', className: 'md:col-span-4' },
  { id: 'uttarakhand', kicker: '#2', title: 'In Uttarakhand', body: 'Co-Educational Boarding School in North India by Education Today', className: 'md:col-span-2' },
  { id: 'north-india', kicker: '#1', title: 'In North India', body: 'Co-Educational Boarding School in North India by Outlook', className: 'md:col-span-2' },
  { id: 'india', kicker: '#4', title: 'In India', body: 'Co-Educational Boarding School in India by Education Today', className: 'md:col-span-4' },
]

export const campus = {
  title: 'It’s not just a facility. At Tulas it’s the foundation!',
  text: '16+ sports curated to bring joy and discipline to your life.',
  sports: [
    'Archery', 'Cycling', 'Hockey', 'Swimming', 'Taekwondo', 'Football', 'Shooting Range', 'Horse Riding',
    'Billiards', 'Squash', 'Volleyball', 'Basketball', 'Cricket', 'Lawn Tennis', 'Badminton', 'Table Tennis',
  ],
  images: [
    { src: media('swimming.6fc81e65.webp'), alt: 'Students swimming at TIS' },
    { src: media('polo.973ddbae.webp'), alt: 'Students playing polo at TIS' },
  ],
}

export const gallery = {
  title: 'Let’s do it with Tulas',
  items: [
    { src: media('karate.4020fba5.webp'), alt: 'Students practising karate at TIS', className: 'col-span-2 md:col-span-4 aspect-video' },
    { src: media('dance.88843edb.webp'), alt: 'Students performing a dance at TIS', className: 'md:col-span-2 aspect-portrait' },
    { src: media('Image%202.0c5295c9.webp'), alt: 'Student life at Tulas International School', className: 'md:col-span-2 aspect-square' },
    { src: media('pot.6f7c2ee3.webp'), alt: 'Pottery activity at TIS', className: 'col-span-2 md:col-span-4 aspect-video' },
    { src: media('Image%203.21dc9e69.webp'), alt: 'Student life at Tulas International School', className: 'md:col-span-3 aspect-portrait' },
    { src: media('Image%201.0a814859.webp'), alt: 'Student life at Tulas International School', className: 'md:col-span-3 aspect-square' },
  ],
}

export const admissions = {
  title: 'Admission',
  text: 'Join TIS to be part of a community that encourages leadership, innovation, and lifelong learning.',
  classes: ['Class IV', 'Class V', 'Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X', 'Class XI', 'Class XII'],
  quote: {
    text: 'We have seen a remarkable improvement in our child’s confidence and skills since joining Tulas. The teachers here are genuinely dedicated to bringing out the best in every student, nurturing their strengths and helping them grow in all aspects of life.',
    by: 'From the parents',
  },
}

export const footer = {
  links: [
    { label: 'FAQ', href: `${TIS}/faq/` },
    { label: 'Calendar', href: `${TIS}/MandatoryPDF/TIS_CALENDAR_2024__PDF.pdf` },
    { label: 'Brochure', href: `${TIS}/MandatoryPDF/TIS_BROCHURE.pdf` },
    { label: 'Virtual Tour', href: `${TIS}/virtual-tour/` },
    { label: 'Privacy Policy', href: `${TIS}/privacy-policy/` },
    { label: 'Terms & Conditions', href: `${TIS}/terms-conditions/` },
    { label: 'Disclaimer', href: `${TIS}/disclaimer/` },
    { label: 'Child Welfare & Safety Policy', href: `${TIS}/MandatoryPDF/childWelfarePolicy.pdf` },
    { label: 'Fedena Login', href: 'https://tis.fedena.com/' },
  ],
  socials: [
    { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/tulasinternationalschool/' },
    { id: 'twitter', label: 'Twitter', href: 'https://twitter.com/tulas_intschool?lang=en' },
    { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/school/tulas-international-school/' },
    { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/tulasinternationalschool/?hl=en' },
    { id: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw' },
  ],
  legal: 'Copyright © 2026 Tulas International School, Dehradun | All Rights Reserved',
}
