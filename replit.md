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
- December 23, 2025: Added booster shop with geometric shapes (circle, triangle, square, pentagon, hexagon, heptagon), luck values displayed in center. Shop displays 5-15 random boosters. Changed money gain formula to ((rank_rng/75)^0.75)/1.5
- December 23, 2025: Booster system fully functional - click shapes to buy from shop, click owned boosters to activate for next roll
- December 22, 2025: Added spinning 3D dodecahedron (75% opacity) behind Poly rank
- December 22, 2025: Initial import and setup for Replit environment
