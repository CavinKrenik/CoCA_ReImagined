import ExternalLink from './ExternalLink'

export default function ContentCard({ item }) {
  return (
    <ExternalLink href={item.href} className="content-card">
      <span className="eyebrow">{item.eyebrow}</span>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <strong>Learn more</strong>
    </ExternalLink>
  )
}
