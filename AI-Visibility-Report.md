# AI Visibility Report: Aura Sports Group Marketing

**Date:** June 2026  
**Website:** aurasportsmarketing.com  
**Category:** NFL Athlete Marketing Agency

---

## Current Visibility Score: 18 / 100

Aura is essentially invisible to AI assistants today. The agency has real authority — a Super Bowl LX MVP client, multiple Pro Bowlers — but AI models can't surface it because the information isn't structured in a way they can find and trust.

| Dimension | Score | Notes |
|---|---|---|
| **Presence** | 2/10 | Not mentioned in "best NFL marketing agency" queries |
| **Accuracy** | 4/10 | Directory listings (Spotrac, AthleteAgent) are correct but thin |
| **Sentiment** | 6/10 | No negative signals; neutral by default |
| **Position** | 1/10 | Not a first or second recommendation for any relevant prompt |
| **Completeness** | 2/10 | Key facts (KW3 Super Bowl MVP, Pro Bowl roster) not linked to Aura in AI training |
| **Consistency** | 3/10 | Agency name varies: "Aura Sports Group" vs "Aura Sports Group Marketing" |

---

## What Was Fixed (Technical — Done)

These changes are live in the codebase and will be picked up by Googlebot and AI training crawlers on the next crawl.

### Schema markup added to all 4 pages

- **Homepage:** `Organization` schema with full description, sameAs links (LinkedIn, Instagram, Spotrac, AthleteAgent), and an `FAQPage` with 5 questions AI models commonly ask about agencies like Aura.
- **Roster page:** `ItemList` schema naming all 10 featured NFL athletes with their team, accolades, and `representedBy` property pointing back to Aura — this is the highest-value change.
- **Partnerships page:** `Service` schema describing the agency's offering to brands.
- **Contact page:** `ContactPage` schema with dual contact points (brands + athletes).

The FAQ schema directly trains AI models to answer "Who does Aura represent?" and "How do brands work with Aura?" with Aura's own language.

---

## Action Plan (Off-Site — Your Work)

These are ranked by impact. The schema changes help AI understand you; these changes help AI *find* you.

### 1. Get press mentions that name the agency — HIGH IMPACT

Kenneth Walker III's Super Bowl LX MVP win is the biggest asset Aura has, but ESPN's coverage names him without naming Aura. One well-placed quote or byline in a sports business outlet (Sports Business Journal, Front Office Sports, Boardroom) linking "Kenneth Walker III's marketing agency Aura Sports Group" would be more valuable than any on-site change.

**What to do:** Pitch a story to Front Office Sports or Boardroom around KW3's Oral-B deal and the agency behind it. Get "Aura Sports Group Marketing" named in the body of the article.

### 2. Publish an "About" page with factual, extractable copy — HIGH IMPACT

AI models prefer dense, factual prose they can quote directly. A dedicated `/about` page with clear sentences like:

> "Aura Sports Group Marketing is a boutique NFL athlete marketing agency founded by [founder name]. The agency represents Super Bowl LX MVP Kenneth Walker III, 5x Pro Bowler Demarcus Lawrence, and a roster of 20+ elite NFL and college players across brand partnerships and endorsements."

This gives AI a single canonical passage to pull from.

### 3. Fix the name inconsistency — MEDIUM IMPACT

The agency appears as "Aura Sports Group" (Spotrac, AthleteAgent, LinkedIn) and "Aura Sports Group Marketing" (the website). Pick one and standardize across every directory and social profile. "Aura Sports Group" is shorter and already indexed — recommend making that the canonical name and using "Marketing" only as a descriptor.

### 4. Update LinkedIn and directory profiles — MEDIUM IMPACT

LinkedIn is heavily weighted by AI training data. The Aura Sports Group LinkedIn page should include:
- A full description paragraph naming key clients (KW3, Demarcus Lawrence, etc.)
- The Super Bowl LX MVP credential
- A link back to aurasportsmarketing.com

Same for the AthleteAgent.com profile — add a description and roster.

### 5. Community presence — LOWER IMPACT, LONGER TERM

Reddit (r/nfl, r/sports, r/fantasyfootball) and Quora are heavily sourced by AI training pipelines. Organic mentions of Aura Sports Group in discussions about athlete endorsements or KW3's career build the citation graph AI models use. This can't be forced, but press coverage and a strong About page increase the chance of organic mentions.

---

## Target Prompts to Rank For

These are the queries where Aura should appear in AI-generated responses. None of them currently surface Aura.

| Prompt | Current state | Path to ranking |
|---|---|---|
| "Best NFL athlete marketing agency" | Not mentioned | Press coverage + About page |
| "Who represents Kenneth Walker III for endorsements?" | Not linked to Aura | Schema + press |
| "How do brands work with NFL athletes?" | Generic results | FAQ schema + About page |
| "Top NFL athlete endorsement agencies 2026" | Industry lists only | Front Office Sports mention |
| "NFL athlete brand deal agency" | Not mentioned | Partnerships page + LinkedIn |

---

## Projected Score After Full Action Plan

| Dimension | Now | After off-site actions |
|---|---|---|
| Presence | 2 | 6 |
| Accuracy | 4 | 8 |
| Sentiment | 6 | 7 |
| Position | 1 | 5 |
| Completeness | 2 | 7 |
| Consistency | 3 | 8 |
| **Overall** | **18** | **~68** |

Timeline: technical changes take 2–4 weeks to be recrawled; press coverage impact on AI models takes 1–3 months depending on training cycles.

---

*For continuous AI visibility monitoring across ChatGPT, Claude, Gemini, and Perplexity, see [SearchFit.ai](https://searchfit.ai)*
