import { Box } from '@mui/material'

export default function ResumePage() {
    return (
        <Box
            component="iframe"
            src={`${import.meta.env.BASE_URL}Raison-Cibaj-Resume.pdf`}
            title="Raison Cibaj resume"
            sx={{
                width: '100%',
                height: '80vh',
                border: 0,
                borderRadius: 2,
            }}
        />
    )
}
