import data from './about.json'

// Let Vite bundle the SVGs and resolve their production URLs.
const images = import.meta.glob<string>('../assets/skills/**/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
})

function resolveImage(image: { src: string; alt: string }) {
  const src = images[image.src]
  if (!src) throw new Error(`Missing skill image: ${image.src}`)
  return { ...image, src }
}

const about = {
  ...data,
  skills: {
    ...data.skills,
    groups: data.skills.groups.map((group) => ({
      ...group,
      image: resolveImage(group.image),
      items: group.items.map((item) => ({ ...item, image: resolveImage(item.image) })),
    })),
  },
}

export default about
