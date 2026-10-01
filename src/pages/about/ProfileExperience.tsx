import { aboutStyles } from './about.styles'

type ProfileExperienceProps = {
    experience: {
        title: string
        company: string
        location: string
        startDate: string
        endDate: string | null
        description: string,
        items: {
            id: string,
            organization: string,
            role: string,
            location: string,
            startDate: string,
            endDate: string | null,
            summary: string,
            contributions: string[],
            technologies: string[]
        }[]
    }[]
}

export default function ProfileExperience({ experience }: ProfileExperienceProps) {
    return (<>  </>)
}
