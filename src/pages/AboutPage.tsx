import about from '../data/about'
import ProfileHero from './about/ProfileHero'
import ProfileHighlights from './about/ProfileHighlights'
import ProfileSkills from './about/ProfileSkills'
import ProfileExperience from './about/ProfileExperience'

export default function AboutPage() {
  return (
    <>
      <ProfileHero profile={about.profile} contactHref={about.contact.links.find((link) => link.id === 'email')?.href} />
      <ProfileHighlights highlights={about.highlights} />
      <ProfileSkills skills={about.skills} />
      <ProfileExperience experience={about.experience} />
    </>
  )
}
