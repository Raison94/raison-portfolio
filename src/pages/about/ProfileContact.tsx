import { Box, Button, Paper, Stack, Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowUpRightFromSquare,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import { aboutStyles } from './about.styles'

type ProfileContactProps = {
    contact: {
        title: string
        description: string
        links: {
            id: string
            label: string
            href: string
        }[]
    }
}

export default function ProfileContact({ contact }: ProfileContactProps) {
    return (
        <Paper
            component="section"
            variant="outlined"
            aria-labelledby="contact-heading"
            sx={aboutStyles.contactPanel}
        >
            <Box sx={aboutStyles.contactContent}>
                <Box sx={aboutStyles.contactIcon} aria-hidden="true">
                    <FontAwesomeIcon icon={faEnvelope} />
                </Box>
                <Box sx={{ minWidth: 0 }}>
                    <Typography component="h2" variant="h5" id="contact-heading">
                        {contact.title}
                    </Typography>
                    <Typography
                        color="text.secondary"
                        variant="body2"
                        sx={{ mt: 1.5, maxWidth: 480 }}
                    >
                        {contact.description}
                    </Typography>
                </Box>
            </Box>
            <Stack
                direction={{ xs: 'column', sm: 'row', md: 'column' }}
                spacing={1.5}
                sx={aboutStyles.contactActions}
            >
                {contact.links.map((link) => {
                    const isEmail = link.href.startsWith('mailto:')
                    const isExternal = /^https?:\/\//i.test(link.href)
                    return (
                        <Button
                            key={link.id}
                            href={link.href}
                            variant={isEmail ? 'contained' : 'outlined'}
                            target={isExternal ? '_blank' : undefined}
                            rel={isExternal ? 'noopener noreferrer' : undefined}
                            aria-label={
                                isExternal ? `${link.label} (opens in a new tab)` : undefined
                            }
                            disableElevation
                            endIcon={
                                <FontAwesomeIcon
                                    icon={isEmail ? faEnvelope : faArrowUpRightFromSquare}
                                    aria-hidden="true"
                                />
                            }
                            sx={aboutStyles.contactLink}
                        >
                            {link.label}
                        </Button>
                    )
                })}
            </Stack>
        </Paper>
    )
}
