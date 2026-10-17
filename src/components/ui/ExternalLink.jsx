export default function ExternalLink({ href, className = '', children, label, ...props }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer" aria-label={label} {...props}>
      {children}
    </a>
  )
}
