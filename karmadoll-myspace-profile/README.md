# KarmaDoll MySpace Profile

A desktop-only, era-authentic MySpace profile concept for [KarmaDoll](https://www.karmadoll.band/).

## Included

- Classic MySpace masthead, navigation, fixed-width profile layout, and friend-space modules
- Karmie voodoo doll profile image
- Actual KarmaDoll band photos in the Friends grid
- Interactive Top Songs player linked to real KarmaDoll performances
- Shows, blurbs, interests, profile details, and comments
- Complete Next.js/Vinext source and build configuration
- Inactive responsive backup in `app/mobile-view-backup.css`

## Layout policy

The live stylesheet intentionally keeps the original 1250px desktop canvas, including horizontal scrolling on narrow screens. The former responsive rules remain backed up but are not imported.

## Development

```bash
npm ci
npm run dev
```

Production build:

```bash
npm run build
```

## Source imagery

The prototype references public image assets hosted by `karmadoll.band`, including the Karmie artwork and current band photos.
