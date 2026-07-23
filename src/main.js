import './styles.css';
import { hamburgerEventListener } from './scripts/hamburgerMenu';
import { confettiEventListener } from './scripts/confetti';
import { darkModeEventListener } from './scripts/darkMode';
import { timelineEventListener } from './scripts/timelineManager';
import { extrasEventListener } from './scripts/extrasButton';
import { typingAnimation } from './scripts/typingAnimation';
import { randomText } from './scripts/randomText';
import { pageLoader } from './scripts/pageLoader';

document.addEventListener("DOMContentLoaded", () => {
    hamburgerEventListener();
    confettiEventListener();
    darkModeEventListener();
    timelineEventListener();
    extrasEventListener();
    typingAnimation();
    randomText();
    pageLoader();
})
