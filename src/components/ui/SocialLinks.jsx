import { liveLinks } from '../../config/links'
import ExternalLink from './ExternalLink'

const socialPlatforms = [
  {
    label: 'Instagram',
    href: liveLinks.instagram,
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.25" />
        <circle cx="17.4" cy="6.6" r="1.15" className="icon-fill" />
      </>
    ),
  },
  {
    label: 'Facebook',
    href: liveLinks.facebook,
    icon: <path className="icon-fill" d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V3.9c-.7-.1-1.5-.2-2.3-.2-2.3 0-3.9 1.4-3.9 4.1V10H8.2v3h2.6v8h2.9Z" />,
  },
  {
    label: 'YouTube',
    href: liveLinks.youtube,
    icon: (
      <>
        <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
        <path className="icon-fill" d="m10 9 6 3-6 3V9Z" />
      </>
    ),
  },
]

export default function SocialLinks({ className = '' }) {
  return (
    <div className={`social-links ${className}`.trim()} aria-label="CoCA social media">
      {socialPlatforms.map(({ label, href, icon }) => (
        <ExternalLink href={href} label={label} title={label} key={label}>
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            {icon}
          </svg>
        </ExternalLink>
      ))}
    </div>
  )
}
