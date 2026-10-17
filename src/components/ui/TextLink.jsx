import ExternalLink from './ExternalLink'

export default function TextLink({ href, children }) {
  return <ExternalLink href={href} className="text-link"><span>{children}</span></ExternalLink>
}
