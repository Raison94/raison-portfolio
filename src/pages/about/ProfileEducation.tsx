import { Box, Typography, Stack, Paper } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { aboutStyles } from './about.styles'

type ProfileEducationProps = {
    education: {
        title: string
        items: {
            id: string
            institution: string
            degree: string
            field: string
            location: string
            startDate: string
            endDate: string | null
        }[]
    }
}


export default function ProfileEducation({ education }: ProfileEducationProps) {
    return (
        <Box
            component="section"
            aria-labelledby="education-heading"
            sx={aboutStyles.education}
        >
            <Typography
                component="h2"
                variant="h5"
                id="education-heading"
                sx={{ mb: 3 }}
            >
                {education.title}
            </Typography>
            <Stack spacing={3}>
                {education.items.map((item) => (
                    <Paper
                        component="article"
                        variant="outlined"
                        key={item.id}
                        aria-labelledby={`education-${item.id}-heading`}
                        sx={aboutStyles.educationCard}
                    >
                        <Box sx={aboutStyles.educationMeta}>
                            <Box sx={aboutStyles.educationIcon} aria-hidden="true">
                                <FontAwesomeIcon icon={faGraduationCap} />
                            </Box>
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
                        </Box>
                        <Box sx={aboutStyles.educationContent}>
                            <Typography
                                component="h3"
                                variant="h5"
                                id={`education-${item.id}-heading`}
                            >
                                {item.degree}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                color="primary.main"
                                sx={{ mt: 0.75 }}
                            >
                                {item.field}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                                {item.institution}
                            </Typography>
                        </Box>
                    </Paper>
                ))}
            </Stack>
        </Box>
    )
}
