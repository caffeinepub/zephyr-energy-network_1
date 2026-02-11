# Specification

## Summary
**Goal:** Replace the Mission section mascot image with the user-uploaded photo while keeping asset paths base-aware.

**Planned changes:**
- Add the uploaded .webp image(s) to `frontend/public/assets/generated/`.
- Update only the specified Mission section `<img>` element to use `assetPath('assets/generated/image-1.webp')` (or `image-2.webp` if that is the intended replacement) instead of `assetPath('assets/generated/zen-mascot-logo.dim_512x512.png')`.
- Keep the surrounding layout and all other images/sections unchanged.

**User-visible outcome:** The Mission section displays the uploaded mascot photo instead of the current generated mascot image, and it loads correctly in both local development and subpath deployments.
