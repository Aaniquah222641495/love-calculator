

// DOM References
const name1Input    = document.getElementById('name1');
const name2Input    = document.getElementById('name2');
const error1        = document.getElementById('error1');
const error2        = document.getElementById('error2');
const calculateBtn  = document.getElementById('calculateBtn');
const resetBtn      = document.getElementById('resetBtn');
const resultSection = document.getElementById('resultSection');
const percentageNum = document.getElementById('percentageNum');
const progressFill  = document.getElementById('progressFill');
const progressBar   = document.getElementById('progressBar');
const resultLabel   = document.getElementById('resultLabel');
const resultMessage = document.getElementById('resultMessage');

// Result tiers
// Each tier has a label and an array of messages — one is picked randomly
const TIERS = [
  {
    min: 0, max: 20,
    label: '🌱 Just Friends',
    messages: [
      'Eish, yah neh... gerasper 💀 This ain\'t it chief.',
      'Ag no man, the vibes are not vibing at all 😬 Stick to being homies.',
      'Yoh, the ancestors said no on this one bru 🙅',
    ],
  },
  {
    min: 21, max: 40,
    label: '🌷 Cute Connection',
    messages: [
      'Okay there\'s something here but it\'s giving very situationship energy ngl 👀',
      'Ag it\'s cute but don\'t get too excited just yet hey 😅',
      'The vibe is there, it\'s just a bit shy. Nurture it babe 🌱',
    ],
  },
  {
    min: 41, max: 60,
    label: '💕 Growing Romance',
    messages: [
      'Okay shem, the butterflies are doing the most rn 🦋 Don\'t fumble this.',
      'The chemistry is there neh! Keep the energy going bestie ✨',
      'Yoh this could actually be something special, don\'t be a coward 💕',
    ],
  },
  {
    min: 61, max: 80,
    label: '💖 Deeply Smitten',
    messages: [
      'Hawu! The universe said yes babe, don\'t sleep on this one 🌟',
      'Shem, this is giving main character love story energy fr fr 💓',
      'Yoh the ancestors are pleased, this one\'s written in the stars 🔥',
    ],
  },
  {
    min: 81, max: 99,
    label: '💘 Soulmate Vibes',
    messages: [
      'YOOO no ways?! This is too perfect, don\'t fumble it please 😭💫',
      'Eish the vibes are immaculate, the ancestors are ululating rn 🙌',
      'Bestie this is it, this is THE one. Hayibo! 💝',
    ],
  },
  {
    min: 100, max: 100,
    label: '✨ Perfect Match!',
    messages: [
      'HAYIBO! 100%?! The calculator is shook, we are all shook 🎉💖',
      'Yoh no this can\'t be real life, sharp sharp you two are IT 💕✨',
      'Eish the ancestors, God, and the universe all said PERIODT on this one 🌌👑',
    ],
  },
];


 // Generates a  love score from two names.
 //Same pair always gives the same score.

function calculateScore(a, b) {
  // Sort names alphabetically so order doesn't matter
  const combined = [a, b].sort().join('');

  // Hash: sum of charCode * position
  let hash = 0;
  for (let i = 0; i < combined.length; i++) {
    hash += combined.charCodeAt(i) * (i + 1);
  }

  // Spread the distribution
  hash = Math.abs((hash * 2654435761) >>> 0);

  // Map to 1–100
  const raw = (hash % 100) + 1;
  return raw < 10 ? raw + 12 : raw;
}

//Validates a name input field.
 //Shows an inline error if invalid.

function validateInput(input, errorEl) {
  const value = input.value.trim();
  const wrapper = input.closest('.input-wrapper');

  errorEl.textContent = '';
  wrapper.classList.remove('error');

  if (!value) {
    errorEl.textContent = 'Please enter a name ';
    wrapper.classList.add('error');
    return false;
  }

  if (value.length < 2) {
    errorEl.textContent = 'Name must be at least 2 characters~';
    wrapper.classList.add('error');
    return false;
  }

  if (!/^[a-zA-Z\s\-']+$/.test(value)) {
    errorEl.textContent = 'Letters only please! ';
    wrapper.classList.add('error');
    return false;
  }

  return true;
}
// Animates the percentage number from 0 to the target value.
 
function animateCount(target, duration = 1200) {
  const start = performance.now();

  function step(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);

// Slows down the count as it reaches the final number    const eased = 1 - Math.pow(1 - progress, 3);
    percentageNum.textContent = Math.round(eased * target);

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      percentageNum.textContent = target;
    }
  }

  requestAnimationFrame(step);
}

// Returns the matching tier for a given score.

function getTier(score) {
  return TIERS.find(t => score >= t.min && score <= t.max) || TIERS[0];
}