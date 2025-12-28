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
- December 28, 2025: Added SEROTONIN effect - chaotic, fast animation with 15 emoji symbols, updates every 15ms (67x faster than EUPHORIA)
- December 28, 2025: Added Perfect Base RNG Secrets - trigger by rolling exact base RNG values (Unity=1, Decimal=10, Meaning=42, Nice=69, Centum=100, Herbal=420, Numerical=1234, Double Nice=6969, Niner=9999, Myria=10000, Sequential=123456, Million=1000000, π=3.14159...)
- December 28, 2025: Added secret rank + variant combinations (example: Numerical + Shiny = Numerical/Shiny)
- December 28, 2025: Fixed critical shop loading bugs - added booster cost validation, filtered corrupted save data, improved error handling
- December 28, 2025: Fixed variant text sizing - GIANT text x5 (55px), mega x2.5 (27.5px), small x0.75 (8.25px)
- December 28, 2025: Added CSS animation for ranks 1e21-1e30 - background text scales 1.1x to 1.9x over 2 seconds, flickers black/white every 0.8s
- December 28, 2025: Fixed booster currency NaN bug - validate costs are finite and positive, reset invalid currency
- December 28, 2025: Fixed variant boosters not applying to rolls - booster variants now properly add to roll's variant array and multiply display value
- December 28, 2025: Fixed secret luck in force roll - applies custom multiplier to secret chances correctly
- December 28, 2025: Added VARIANT_SECRETS constant with Sound variant (1/299 on Uncommon+Gilded, x855000 RNG)
- December 23, 2025: Fixed booster shop interface - added close button, removed Loading placeholder. Changed Force Roll to custom UI with 3 textboxes (Luck, Variant Luck, Secret Luck) and Roll button. Added toggleForceRollUI() and executeCustomForceRoll() functions for debug panel.
- December 23, 2025: Added booster shop auto-refresh - boosters change every 20 seconds when shop is open, includes refreshBoosterShop() function and closeBoosterShop() for cleanup
- December 23, 2025: Updated money gain formula to use actual RNG baseValue: ((baseValue/75)^0.75)/1.5
- December 23, 2025: Complete booster inventory system with variant support. Variant boosters have 1/(x/2.5) spawn chance and cost multiplier (variant_multiplier)^1.25. Variant names displayed under booster shapes with color coding. Boosters save/load properly.
- December 23, 2025: Added booster shop with geometric shapes (circle, triangle, square, pentagon, hexagon, heptagon), luck values displayed in center. Shop displays 5-15 random boosters. Changed money gain formula to ((rank_rng/75)^0.75)/1.5
- December 23, 2025: Booster system fully functional - click shapes to buy from shop, click owned boosters to activate for next roll
- December 22, 2025: Added spinning 3D dodecahedron (75% opacity) behind Poly rank
- December 22, 2025: Initial import and setup for Replit environment
