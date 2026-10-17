import ExternalLink from './ExternalLink'

export default function ActionButton({ href, children, className = '', inverse = false }) {
  return (
    <ExternalLink href={href} className={`pill-button ${inverse ? 'pill-button--inverse' : ''} ${className}`}>
      <span>{children}</span>
    </ExternalLink>
  )
}
