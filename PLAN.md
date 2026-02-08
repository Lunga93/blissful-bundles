# Blissful Bundles - Development Plan

## 1. Project Setup
- [x] Initialize Vite + React project.
- [x] Install dependencies: `firebase`, `jotai`, `framer-motion`, `react-icons`, `lottie-react`.
- [x] Install & Configure Tailwind CSS + DaisyUI.

## 2. Configuration
- [x] Configure `tailwind.config.js` (colors, fonts, plugins).
- [x] Add Tailwind directives to `src/index.css`.
- [x] Create `src/lib/firebase.js` (placeholder for config).

## 3. Core Structure
- [x] Create directories: `components`, `data`, `store`, `assets`.
- [x] Define static product data in `src/data/products.js`.
- [x] Create Jotai atoms in `src/store/atoms.js`.

## 4. Components
- [x] **Hero**: Landing section with smooth scroll.
- [x] **ProductCard**: Individual product display with WhatsApp integration.
- [x] **ProductList**: Grid layout for products.
- [x] **WavingGirl**: Lottie animation component.
- [x] **Footer**: Contact info and links.
- [x] **App**: Assemble all components.

## 5. Firebase Setup (User Action Required)
- [ ] Create Firebase Project.
- [ ] Enable Firestore (Collection: `prices`).
- [ ] Enable Storage (Folder: `products`).
- [ ] Get Config & Add to `.env`.

## 6. Final Polish
- [ ] Verify responsiveness.
- [ ] Check animations.
- [ ] Test WhatsApp links.
