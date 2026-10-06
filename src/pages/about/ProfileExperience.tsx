import { Box, Chip, Paper, Stack, Typography } from '@mui/material'
import { aboutStyles } from './about.styles'

type ProfileExperienceProps = {
    experience: {
        title: string
        items: {
            id: string
            organization: string
            role: string
            location: string
            startDate: string
            endDate: string | null
            summary: string
            contributions: string[]
            technologies: string[]
        }[]
    }
}

export default function ProfileExperience({
    experience,
}: ProfileExperienceProps) {
    return (
        <Box
            component="section"
            aria-labelledby="experience-heading"
            sx={aboutStyles.experience}
        >
            <Typography component="p" variant="subtitle2" sx={aboutStyles.greeting}>
                Experience
            </Typography>
            <Typography
                component="h2"
                variant="h5"
                id="experience-heading"
                sx={{ mb: 3 }}
            >
                {experience.title}
            </Typography>
            <Stack spacing={3}>
                {experience.items.map((item) => (
                    <Paper
                        component="article"
                        variant="outlined"
                        key={item.id}
                        aria-labelledby={`${item.id}-heading`}
                        sx={aboutStyles.experienceCard}
                    >
                        <Box sx={aboutStyles.experienceMeta}>
                            <Typography variant="subtitle2" color="primary.main">
                                <time dateTime={item.startDate}>
                                    {item.startDate}
                                </time>
                                {' – '}
                                {item.endDate ? (
                                    <time dateTime={item.endDate}>
                                        {item.endDate}
                                    </time>
                                ) : (
                                    'Present'
                                )}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.location}
                            </Typography>
                            {!item.endDate && (
                                <Chip
                                    label="Current role"
                                    size="small"
                                    color="primary"
                                    sx={{ mt: 1.5, alignSelf: 'flex-start' }}
                                />
                            )}
                        </Box>
                        <Box sx={{ minWidth: 0 }}>
                            <Typography component="h3" variant="h5" id={`${item.id}-heading`}>
                                {item.organization}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                color="primary.main"
                                sx={{ mt: 0.5 }}
                            >
                                {item.role}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                                {item.summary}
                            </Typography>
                            <Box component="ul" sx={aboutStyles.experienceContributions}>
                                {item.contributions.slice(0, 3).map((contribution) => (
                                    <Typography component="li" variant="body2" key={contribution}>
                                        {contribution}
                                    </Typography>
                                ))}
                            </Box>
                            {item.contributions.length > 3 && (
                                <Box component="details" sx={aboutStyles.experienceDetails}>
                                    <Box component="summary">
                                        More contributions ({item.contributions.length - 3})
                                    </Box>
                                    <Box component="ul" sx={aboutStyles.experienceContributions}>
                                        {item.contributions.slice(3).map((contribution) => (
                                            <Typography
                                                component="li"
                                                variant="body2"
                                                key={contribution}
                                            >
                                                {contribution}
                                            </Typography>
                                        ))}
                                    </Box>
                                </Box>
                            )}
                            <Stack
                                direction="row"
                                useFlexGap
                                sx={{ mt: 3, flexWrap: 'wrap', gap: 1 }}
                                aria-label="Technologies used"
                            >
                                {item.technologies.map((technology) => (
                                    <Chip
                                        key={technology}
                                        label={technology}
                                        size="small"
                                        variant="outlined"
                                    />
                                ))}
                            </Stack>
                        </Box>
                    </Paper>
                ))}
            </Stack>
        </Box>
    )
}
