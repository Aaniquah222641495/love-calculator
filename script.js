

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