# OpenLobby — Comprehensive Site Plan

## Competitor Analysis

### 1. OpenSecrets (opensecrets.org/federal-lobbying)
**Strengths:** 25+ years of data, trusted brand, industry classification, bill-level data, revolving door section, FARA foreign lobbying
**Weaknesses:** 2015-era UX, donation-gated bulk data, mixes lobbying with campaign finance (dilutes focus), no real investigative journalism, no unique analysis angles, no interactive tools
**What they have that we don't (yet):** Industry classification system (NAICS/CRP codes), bill-level lobbying linkage, state lobbying data

### 2. LobbyView (lobbyview.org) — MIT Academic Project
**Strengths:** IPES Best New Dataset award, revolving door viz, in-house vs K-Street analysis, network analysis of lobbied bills, word clouds of lobbying content, academic credibility
**Weaknesses:** Academic-focused (not consumer), limited to researchers, dated UI, no editorial content
**Unique feature to steal:** Network visualization of which bills get lobbied together

### 3. LobbyingData.com — Commercial Alternative Data
**Strengths:** Real-time (15-min updates), ticker symbol matching to public companies, 24 years history, entity matching across time
**Weaknesses:** Paywall (enterprise pricing), no public-facing editorial, targets hedge funds not citizens
**Unique feature to steal:** Stock ticker matching — we could show lobbying by publicly traded companies with stock price correlation

### 4. Politico Influence (politico.com/newsletters/politico-influence)
**Strengths:** Real-time K Street news, insider knowledge, revolving door coverage
**Weaknesses:** Newsletter format (not searchable data), behind paywall, no data tools
**What they cover:** Tariff lobbying, new hire announcements, industry trends

### 5. Bloomberg Government (bgov.com)
**Strengths:** Top-performing lobbying firms annual report, professional data quality
**Weaknesses:** Expensive subscription, not public
**Key data point:** Brownstein Hyatt #1 firm at $67.9M in 2024

---

## What Makes OpenLobby UNIQUE (vs all competitors)

### 1. The "Lobbying ROI Calculator" — NOBODY does this
Academic research shows $1 in lobbying = $200 in value (22,000% ROI). We can build a tool that:
- Takes a company's lobbying spend
- Cross-references with government contracts they received (USASpending data — we already have this!)
- Shows the "return on lobbying investment"
- Nobody has built this as a public interactive tool

### 2. Cross-Dataset Intelligence — Our Secret Weapon
We have 5 other sites. Nobody else can do this:
- **OpenLobby × OpenSpending**: "Company X spent $5M lobbying → received $500M in government contracts"
- **OpenLobby × OpenFeds**: "Company X lobbied against workforce cuts → agency they depend on was targeted by DOGE"
- **OpenLobby × OpenMedicare**: "PhRMA spent $400M lobbying on drug pricing → Medicare pays $X for their drugs"
- **OpenLobby × DonorSecrets**: "Company X spent $5M lobbying + donated $2M to campaigns of committee members"

### 3. The "Influence Score" — Our ML Angle
Like our fraud model for OpenMedicare, build a scoring system:
- Lobbying spend per dollar of government revenue received
- Number of revolving door lobbyists employed
- Concentration of lobbying on specific legislation
- Growth rate of lobbying spend (acceleration = something big coming)
- Foreign entity involvement
- Score each client on "Influence Intensity" — has never been done publicly

### 4. "The Lobbying Arms Race" — Quarter-over-Quarter Real-Time Tracker
Track which issues are SURGING in lobbying spend right now. Nobody does real-time trend detection:
- AI regulation lobbying just exploded (Meta $26M in 2024)
- Tariff lobbying surging in 2025 (per Politico)
- Crypto lobbying growing fastest
- Build an "Alert System" for lobbying surges

### 5. Text Analysis of Lobbying Descriptions
The LDA filings include FREE TEXT descriptions of what's being lobbied. Nobody is doing NLP on this:
- Extract specific bill numbers mentioned
- Cluster similar lobbying descriptions
- Track how language changes over time
- Build word frequency visualizations per industry

---

## Page Architecture — Full Site Map

### EXPLORE PAGES (Data Directory)
1. `/clients` — Top clients ranked by spending (with search, filter by state/industry)
2. `/clients/[slug]` — Individual client profile (yearly spend, firms, lobbyists, issues)
3. `/firms` — Lobbying firms ranked by income
4. `/firms/[slug]` — Individual firm profile (clients, lobbyists, yearly income)
5. `/lobbyists` — Individual lobbyists (searchable, filterable)
6. `/lobbyists/[slug]` — Lobbyist profile (career path, firms, clients, gov positions)
7. `/issues` — 79 issue codes ranked by spending, clickable
8. `/issues/[code]` — Issue detail (trends, top clients, top firms, descriptions)

### ANALYSIS PAGES (Unique Insights)
9. `/trends` — Spending trends 2018-2025 with interactive Recharts
10. `/revolving-door` — Former government officials now lobbying (with career path timelines)
11. `/foreign` — Foreign entities and their lobbying activities
12. `/industries` — Sector-level view (Healthcare, Defense, Tech, etc.)
13. `/lobbying-roi` — **UNIQUE**: The Lobbying ROI Calculator
14. `/influence-score` — **UNIQUE**: Our scored ranking of most influential clients
15. `/arms-race` — **UNIQUE**: Quarter-by-quarter surge tracker
16. `/text-analysis` — **UNIQUE**: NLP analysis of lobbying descriptions
17. `/cross-reference` — **UNIQUE**: OpenSpending/OpenFeds/OpenMedicare cross-links

### INVESTIGATION ARTICLES (Editorial)
18. `/investigations/doge-vs-lobbying` — ✅ Already built
19. `/investigations/tech-lobbying-war` — Big Tech's $260M lobbying machine
20. `/investigations/pharma-drug-pricing` — $450M spent to keep drug prices high
21. `/investigations/revolving-door-exposed` — The most egregious government-to-K-Street transitions
22. `/investigations/foreign-influence` — Which countries spend the most lobbying the US
23. `/investigations/lobbying-roi` — The 22,000% return on investment
24. `/investigations/tariff-lobbying-surge` — The 2025 tariff lobby explosion
25. `/investigations/crypto-lobbying-explosion` — The fastest-growing lobbying sector
26. `/investigations/defense-contractor-lobbying` — Lockheed, Raytheon, Boeing's influence
27. `/investigations/ai-regulation-fight` — Who's lobbying to shape AI policy
28. `/investigations/tiktok-lobbying` — TikTok's $20M+ fight to stay in America
29. `/investigations/lobbying-statistics` — **SEO**: Evergreen stats page
30. `/investigations/what-is-lobbying` — **SEO**: Explainer for search traffic

### TOOLS (Interactive)
31. `/search` — Universal search across all entities
32. `/compare` — Compare two clients/firms/industries side by side
33. `/lookup` — Look up any client, firm, or lobbyist
34. `/your-tax-dollar` — How lobbying affects what you pay (like OpenSpending's tax calculator)
35. `/downloads` — Data downloads

### PROGRAMMATIC SEO PAGES
36. `/states/[state]` — Lobbying clients by state (50 pages)
37. `/industries/[sector]` — 11 sector pages
38. `/issues/[code]` — 79 issue pages
39. `/clients/[slug]` — Top 2,000 client pages
40. `/firms/[slug]` — Top 1,000 firm pages
41. `/lobbyists/[slug]` — Top 5,000 lobbyist pages (with revolving door flag)

**Total: 8,000+ pages of unique, indexable content**

---

## Key SEO Target Keywords

### High Volume (build dedicated pages)
- "lobbying spending" / "lobbying expenditures"
- "who lobbies congress"
- "lobbying statistics"
- "federal lobbying data"
- "top lobbying firms"
- "biggest lobbying spenders"
- "revolving door lobbying"
- "pharmaceutical lobbying"
- "tech company lobbying"
- "lobbying by industry"
- "DOGE lobbying"

### Long-tail (programmatic pages capture these)
- "[company name] lobbying spending" (e.g., "amazon lobbying spending")
- "[industry] lobbying" (e.g., "oil and gas lobbying")
- "lobbying [issue]" (e.g., "lobbying healthcare reform")
- "who lobbies for [company]"
- "[state] lobbying" (e.g., "texas lobbying")

### Entity-Specific (detail pages)
- "Meta lobbying" / "Facebook lobbying spending"
- "Pfizer lobbying" / "PhRMA lobbying"
- "NRA lobbying spending"
- "Amazon lobbying"
- "Google lobbying"
- "Lockheed Martin lobbying"
- "Boeing lobbying"

---

## Unique Analysis Ideas (Nobody Else Is Doing)

### 1. "Lobbying Weather Map"
Real-time heat map of which issues are getting the most lobbying RIGHT NOW (this quarter vs last). Like a weather radar for influence.

### 2. "The $200 Return"
For publicly traded companies: correlate lobbying spend with government contract wins, tax benefits received, or regulatory outcomes. Show the ROI visually.

### 3. "The Shadow Workforce"
How many former government employees are now lobbying their former agencies? Map the pipeline: Agency → Cooling period → K Street firm → Lobbying same agency.

### 4. "Lobbying Fingerprints"
NLP clustering of lobbying description text. Find companies lobbying on identical issues with identical language — coordinated lobbying campaigns exposed.

### 5. "The Lobbying Arms Race Timeline"
An interactive timeline showing how lobbying spend on specific issues spikes around legislation. When a bill is introduced, watch the money pour in.

### 6. "The Quiet Ones"
Companies that suddenly START lobbying after years of not lobbying. What triggered it? Often a regulatory threat. Track new entrants by quarter.

### 7. "Lobbying vs. Public Interest"
Compare lobbying spending on an issue vs public polling on that issue. When does industry lobbying run COUNTER to public opinion? (e.g., gun control — 90% public support vs massive NRA lobbying against)

### 8. "The Billion Dollar Issues"
Which specific policy debates have attracted the most cumulative lobbying spend? Healthcare reform, tax policy, defense spending — rank the all-time biggest battles.

### 9. "Client Concentration Risk"
Which lobbying firms are most dependent on a single client? If that client stops lobbying, the firm collapses. Fragility analysis of K Street.

### 10. "The Tariff Panic Index"
Real-time in 2025: track tariff-related lobbying filings surge. Map which industries and countries are most actively fighting tariffs.

---

## Cross-Dataset Integration Plan

### OpenSpending × OpenLobby
- Match lobbying clients to USASpending contract recipients
- Calculate: $ lobbied / $ in government contracts received
- Page: "Your Lobbying Tax" — how much of each contract dollar went to lobbying

### OpenFeds × OpenLobby
- Match lobbying issues to federal agencies
- Show which agencies are most lobbied and their workforce trends
- DOGE angle: "Agencies DOGE is cutting vs how much they're being lobbied to save"

### DonorSecrets × OpenLobby
- Same company: how much they lobbied vs how much they donated
- Dual influence map: lobbying + campaign contributions for top 100 companies

### OpenMedicare × OpenLobby
- Pharma lobbying spend vs Medicare drug prices
- "For every $1 Pfizer spends lobbying, Medicare pays $X more for their drugs"

---

## Data We Have vs Data We Need

### Have (from LDA API):
- ✅ Filing amounts (income/expenses)
- ✅ Client names and states
- ✅ Registrant (firm) names
- ✅ Individual lobbyist names
- ✅ Former government positions (covered_position field!)
- ✅ Issue codes (79 categories)
- ✅ Issue descriptions (free text — goldmine for NLP)
- ✅ Foreign entities
- ✅ Filing dates (quarterly)
- ✅ Conviction disclosures

### Could Add Later (enhancement datasets):
- 📋 FARA data (DOJ) — foreign agent registration, separate from LDA
- 📋 LD-203 contribution reports — lobbyist political contributions
- 📋 SEC data — match lobbying clients to public company financials
- 📋 USASpending — match to government contracts (we have this!)
- 📋 Congress.gov — match lobbied bill numbers to legislation
- 📋 FEC data — match to campaign donations (DonorSecrets has this!)

---

## Technical Implementation Priority

### Phase 1 — Core Site (Data arrives → 2 days)
1. Process JSONL → JSON files
2. Wire up listing pages (clients, firms, lobbyists, issues)
3. Build trend charts (Recharts)
4. Client and firm detail pages with real data
5. Search page
6. Deploy to Vercel

### Phase 2 — Unique Analysis (3-5 days)
7. Revolving door analysis (parse covered_position field)
8. Foreign lobbying page
9. Industry/sector groupings
10. Issue surge detection (quarter-over-quarter)
11. 5-8 investigation articles
12. Programmatic SEO pages (states, issues, top clients)

### Phase 3 — Cross-Dataset & Advanced (1 week)
13. OpenSpending cross-reference (contracts vs lobbying)
14. NLP text analysis of lobbying descriptions
15. Influence Score model
16. Lobbying ROI calculator
17. Interactive comparison tools
18. More investigation articles

### Phase 4 — Polish & SEO (ongoing)
19. OG images for all key pages
20. Internal linking
21. Google Search Console optimization
22. Social promotion
23. Domain purchase and DNS setup
