import { useState } from 'react'
import { liveLinks } from '../../config/links'
import { footerColumns } from '../../data/navigation'
import Brand from '../ui/Brand'
import ExternalLink from '../ui/ExternalLink'

function FooterColumn({ title, items }) {
  return <div><span className="eyebrow muted">{title}</span>{items.map(([label, href]) => <ExternalLink href={href} key={label}>{label}</ExternalLink>)}</div>
}

export default function Footer() {
  const [message, setMessage] = useState('')
  const subscribe = event => {
    event.preventDefault()
    setMessage('Thanks! This concept form is ready to connect to CoCA’s newsletter service.')
  }

  return (
    <footer className="site-footer">
      <div className="footer-brand"><Brand footer /><h3>Seattle’s platform for contemporary artists, ideas, and audiences.</h3></div>
      <div className="footer-info">
        <form className="newsletter" id="newsletter" onSubmit={subscribe}><h3>Subscribe to the CoCA newsletter</h3><p>Exhibitions, events, artist calls, and community news.</p><div><input type="email" required placeholder="Email address" aria-label="Email address" /><button>Sign up</button></div>{message && <small role="status">{message}</small>}</form>
        <div><span className="eyebrow muted">Contact &amp; visit</span><p><a href="tel:+12067281980">(206) 728-1980</a></p><p><a href="mailto:info@cocaseattle.org">info@cocaseattle.org</a></p><p>114 Third Ave S<br />Seattle, WA 98104</p><p>Exhibition hours: Thu–Sat, 11am–4pm</p></div>
        <div><span className="eyebrow muted">Follow CoCA</span><div className="socials"><ExternalLink href={liveLinks.instagram}>◎</ExternalLink><ExternalLink href={liveLinks.facebook}>f</ExternalLink><ExternalLink href={liveLinks.youtube}>▶</ExternalLink></div><span className="eyebrow muted">Supported by</span><div className="supporters"><span>4Culture</span><span>Seattle Arts &amp; Culture</span><span>ArtsFund</span></div></div>
      </div>
      <div className="footer-nav">
        {footerColumns.map(column => <FooterColumn key={column.title} {...column} />)}
      </div>
      <div className="footer-legal"><span>© 2026 Center on Contemporary Art</span><span>Homepage concept&nbsp; • &nbsp;Links open the current CoCA website</span></div>
    </footer>
  )
}
