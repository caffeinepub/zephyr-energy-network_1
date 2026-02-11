# Specification

## Summary
**Goal:** Swap the Mission section mascot image to use the newly uploaded `plrbidozqqfdsyqmaxw2.webp` asset.

**Planned changes:**
- Add `plrbidozqqfdsyqmaxw2.webp` to `frontend/public/assets/generated/`.
- Update ONLY the MissionSection mascot `<img>` at XPath `/html[1]/body[1]/div[1]/div[1]/main[1]/section[2]/div[1]/div[2]/div[1]/img[1]` so its `src` uses the existing base-aware `assetPath('assets/generated/plrbidozqqfdsyqmaxw2.webp')` helper.
- Leave all other markup, styling, text, and images unchanged.

**User-visible outcome:** The Mission section displays the new uploaded mascot image, and it loads correctly both at `/` and when the app is hosted under a non-root subpath.
