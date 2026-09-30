import { Avatar, Box, Button, Chip, Grid, Stack, Typography } from '@mui/material'
import { aboutStyles } from './about.styles'

type ProfileHeroProps = {
  profile: {
    name: string
    title: string
    headline: string
    introduction: string
    image: { src: string | null; alt: string }
  }
  contactHref?: string
}

export default function ProfileHero({ profile, contactHref }: ProfileHeroProps) {
  const initials = profile.name.split(' ').map((part) => part[0]).slice(0, 2).join('')

  return (
    <Box component="section" aria-labelledby="profile-heading" sx={aboutStyles.hero}>
      <Grid container spacing={{ xs: 5, md: 7 }} sx={{ alignItems: 'center' }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Stack spacing={3} sx={{ alignItems: 'flex-start' }}>
            <Chip label={profile.title} color="primary" />
            <Box>
              <Typography component="p" variant="subtitle2" sx={aboutStyles.greeting}>
                Hi, I’m {profile.name}.
              </Typography>
              <Typography
                component="h1"
                id="profile-heading"
                variant="h1" color="text.primary"
              >
                {profile.headline}
              </Typography>
            </Box>
            <Typography color="text.secondary" sx={aboutStyles.introduction}>
              {profile.introduction}
            </Typography>
            {contactHref && (
              <Button
                variant="contained"
                href={contactHref}
                size="large"
                disableElevation
              >
                Let’s connect <Box component="span" aria-hidden="true" sx={{ ml: 1.5 }}>↗</Box>
              </Button>
            )}
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={aboutStyles.portrait}>
            <Box aria-hidden="true" sx={aboutStyles.decoration} />
            <Avatar
              src={profile.image.src ?? undefined}
              alt={profile.image.alt}
              sx={aboutStyles.avatar}
            >
              {initials}
            </Avatar>
            <Typography component="p" variant="subtitle1" sx={aboutStyles.name}>{profile.name}</Typography>
            <Typography component="p" variant="caption" sx={aboutStyles.role}>{profile.title}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
