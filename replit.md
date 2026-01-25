# calis RNG Game

## Overview
A Progressive Web App (PWA) RNG (Random Number Generator) game. This is a browser-based idle/clicker game with various RNG mechanics, upgrades, and collectible ranks.

## Project Structure
- `index.html` - Main game file containing all HTML, CSS, and JavaScript
- `manifest.json` - PWA manifest for installable web app
- `sw.js` - Service worker for offline functionality
- `icon-192x192.png` / `icon-512x512.png` - App icons

## How to Run
This is a static website that requires no build step. Simply serve the files with any HTTP server on port 5000:

```bash
python3 -m http.server 5000 --bind 0.0.0.0
```

## Deployment
Configured for static deployment. The entire project directory is served as-is.

## Recent Changes
- January 25, 2026: Implemented SFX for high-value rolls (cowm.wav > 50m, 100t.wav > 1b).
- January 25, 2026: Added "Void" and "nil" variants with custom gradients.
- January 25, 2026: Added "BOOTLEG" secret (1/200b) with sideways oval animation.
- January 25, 2026: Fixed index to show rarity, removed obfuscation, and grayed out undiscovered ranks.
- January 25, 2026: Removed Perfect Base RNG secrets.
- January 25, 2026: Fixed bug with events not loading and dev exclusives not being rollable.
- January 25, 2026: Fixed animation persistence for all ranks.
- January 25, 2026: Added UI sidebar for navigation.
- December 23, 2025: Fixed booster shop interface - added close button, removed Loading placeholder. Changed Force Roll to custom UI with 3 textboxes (Luck, Variant Luck, Secret Luck) and Roll button. Added toggleForceRollUI() and executeCustomForceRoll() functions for debug panel.
- December 23, 2025: Added booster shop auto-refresh - boosters change every 20 seconds when shop is open, includes refreshBoosterShop() function and closeBoosterShop() for cleanup
- December 23, 2025: Updated money gain formula to use actual RNG baseValue: ((baseValue/75)^0.75)/1.5
- December 23, 2025: Complete booster inventory system with variant support. Variant boosters have 1/(x/2.5) spawn chance and cost multiplier (variant_multiplier)^1.25. Variant names displayed under booster shapes with color coding. Boosters save/load properly.
- December 23, 2025: Added booster shop with geometric shapes (circle, triangle, square, pentagon, hexagon, heptagon), luck values displayed in center. Shop displays 5-15 random boosters. Changed money gain formula to ((rank_rng/75)^0.75)/1.5
- December 23, 2025: Booster system fully functional - click shapes to buy from shop, click owned boosters to activate for next roll
- December 22, 2025: Added spinning 3D dodecahedron (75% opacity) behind Poly rank
- December 22, 2025: Initial import and setup for Replit environment
