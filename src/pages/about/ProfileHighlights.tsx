import { Box, Grid, Paper, Typography } from '@mui/material'
import { aboutStyles } from './about.styles'

type ProfileHighlightsProps = {
  highlights: { id: string; value: string; label: string }[]
}

export default function ProfileHighlights({ highlights }: ProfileHighlightsProps) {
  return (
    <Box component="section" aria-label="Profile highlights" sx={aboutStyles.highlights}>
      <Grid container spacing={2.5}>
        {highlights.map((highlight) => (
          <Grid key={highlight.id} size={{ xs: 12, md: 4 }}>
            <Paper variant="outlined" sx={aboutStyles.highlightPanel}>
              <Box aria-hidden="true" sx={aboutStyles.accent} />
              <Typography component="h2" variant="h5" sx={aboutStyles.highlightHeading}>
                {highlight.value}
              </Typography>
              <Typography variant="body2" color="portfolio.highlightText">{highlight.label}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
