# Site Setup Plan

Running log of structural/content decisions made while building the site. Not a design doc — just dated entries so later sessions have the "why," not just the diff.

## 2026-09-03 — Access & Memory page, first version

- `src/content/docs/before-you-prompt/access-and-memory.md` was a placeholder ("Content coming soon."), not a raw draft — the actual outline lived outside the Astro project, in `../md/workshop_skeleton_v2.md` (`## [0:33–0:45] ACCESS & MEMORY`, lines 124–147), with supporting material in that same file's Privacy & Security and Research Tools blocks.
- Renamed the file to `.mdx` via `git mv` (slug unaffected — Starlight derives it from the path minus extension) and wrote the seven-section structure: opening pull-quote, why limits exist (Gemini Notebook quota bridge), tokens and the window, Markdown over PDF, connectors, how the model remembers and forgets, working with a model that rereads. Reused only existing CSS classes (`.incident-body`, `.privacy-aside`, `.closing-quote`, `.incident-evidence`) — no new CSS needed.
- Two internal link targets don't exist yet as live pages: the Marker tutorial (currently a stub at `before-workshop/installation-tutorial.md`) and a "hidden prompt injection" incident (planned as opening-incidents case #7 in `workshop_skeleton_v2.md` but never added to `real-world-incidents.mdx`, which currently has 6 cards). Both are mentioned in prose with `{/* TODO: link ... */}` comments in `access-and-memory.mdx` rather than fabricated hrefs.
- One unsourced stat carried over from the draft as-is (context rot degrading quality "near 60% of context capacity, weakens at ~40%") — no citation for it in `workshop_skeleton_v2.md` or `IA_models_research.md`, flagged with a `{/* TODO: verify */}` comment rather than dropped or presented as confirmed.
- Section 2's framing was corrected against the draft during review: a secondary account's primary purpose per the draft is testing/security isolation, not working around Gemini Notebook's product quota — the page argues isolation first, with the quota reset mentioned as a side effect.
