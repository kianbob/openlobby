# OpenLobby — Project Guide

## What is this?
Data journalism site exposing $4.4B+ in annual federal lobbying. Built on Senate LDA (Lobbying Disclosure Act) filings data, 2018-2025.

## Tech Stack
- Next.js 15+ with App Router, TypeScript, Tailwind CSS v4
- Static JSON data files in public/data/
- Deployed on Vercel
- Recharts for visualizations

## Design System
- Light theme, Playfair Display serif headings, indigo/blue accents (#4f46e5 primary, #312e81 dark)
- Professional data journalism aesthetic (same family as OpenFeds, OpenSpending, OpenMedicare)
- Sister sites: openmedicaid.org, openfeds.org, openspending.us, openmedicare.us, thedataproject.ai

## Key Data Entities
- **Clients** — organizations paying for lobbying (Amazon, Pfizer, NRA, etc.)
- **Registrants** — lobbying firms (K Street)
- **Lobbyists** — individual lobbyists (many are former government officials — "revolving door")
- **Filings** — quarterly LD-2 reports with income/expense amounts
- **Issues** — 76 general issue categories (healthcare, defense, taxes, etc.)

## Important Constraints
- Python OOM-kills on this Mac (16GB) — use Node.js for data processing
- Don't include "| OpenLobby" in page titles — root layout template adds it
- ShareButtons component requires `url` prop as full URL
- Breadcrumbs uses `name` not `label`
- No CSS-only opacity/fade animations (breaks SSR)
- Recharts must use dynamic() import with ssr: false
