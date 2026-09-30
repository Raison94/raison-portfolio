import type { SxProps, Theme } from '@mui/material/styles'

// About-specific composition; shared colors and typography live in theme.ts.
export const aboutStyles = {
  hero: { py: { xs: 3, md: 7 } },
  greeting: { color: 'portfolio.greeting', mb: 1.5 },
  introduction: { maxWidth: 590 },
  portrait: {
    position: 'relative', bgcolor: 'portfolio.portrait', border: 1,
    borderColor: 'portfolio.portraitBorder', borderRadius: '120px 120px 24px 24px',
    px: 3, py: 5, maxWidth: 340, mx: 'auto', overflow: 'hidden',
  },
  decoration: {
    position: 'absolute', width: 280, height: 280, border: 1,
    borderColor: 'portfolio.decorationBorder', borderRadius: '50%', top: -80, right: -110,
  },
  avatar: {
    width: { xs: 180, sm: 210 }, height: { xs: 180, sm: 210 }, mx: 'auto',
    bgcolor: 'portfolio.avatar', color: 'primary.main', fontSize: '4rem', fontWeight: 500,
    border: '8px solid', borderColor: 'portfolio.avatarBorder', position: 'relative',
  },
  name: { textAlign: 'center', mt: 3, color: 'portfolio.name' },
  role: { textAlign: 'center', mt: 0.5, color: 'portfolio.role' },
  highlights: { mt: 2, mb: 5 },
  highlightPanel: { height: '100%', p: { xs: 3, sm: 3.5 } },
  accent: { width: 28, height: 4, borderRadius: 2, bgcolor: 'secondary.main', mb: 2.5 },
  highlightHeading: { color: 'portfolio.highlightHeading', mb: 1 },
  skillGroupHeading: { color: 'text.primary', mb: 1.5 },
  skillPanel: {
    display: 'flex', alignItems: 'center', gap: 1.5,
    height: '100%', p: 1.5,
  },
  skillImage: { width: 28, height: 28, objectFit: 'contain', flexShrink: 0 },
} satisfies Record<string, SxProps<Theme>>
