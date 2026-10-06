import { Box, Grid, Paper, Typography } from '@mui/material'
import { aboutStyles } from './about.styles'

type ProfileSkillsProps = {
    skills: {
        title: string
        groups: {
            id: string
            label: string
            image: {
                src: string
                alt: string
            }
            items: {
                id: string
                name: string
                image: {
                    src: string
                    alt: string
                }
            }[]
        }[]
    }
}

export default function ProfileSkills({ skills }: ProfileSkillsProps) {
    return (
        <Box component="section" aria-label="Profile skills">
            <Typography component="p" variant="subtitle2" sx={aboutStyles.greeting}>
                {skills.title}
            </Typography>
            <Grid container spacing={2.5}>
                {skills.groups.map((group) => (
                    <Box key={group.id} sx={{ width: '100%' }}>
                        <Typography
                            component="h2"
                            variant="h5"
                            sx={aboutStyles.skillGroupHeading}
                        >
                            {group.label}
                        </Typography>
                        <Grid container spacing={1.5}>
                            {group.items.map((item) => (
                                <Grid key={item.id} size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                                    <Paper variant="outlined" sx={aboutStyles.skillPanel}>
                                        <Box
                                            component="img"
                                            src={item.image.src}
                                            alt={item.image.alt}
                                            sx={aboutStyles.skillImage}
                                        />
                                        <Typography variant="body2" color="portfolio.highlightText">
                                            {item.name}
                                        </Typography>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                ))}
            </Grid>
        </Box>
    )
}
