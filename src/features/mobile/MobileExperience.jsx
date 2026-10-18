import { useEffect, useRef, useState } from 'react'
import ActionButton from '../../components/ui/ActionButton'
import ExternalLink from '../../components/ui/ExternalLink'
import TextLink from '../../components/ui/TextLink'
import SocialLinks from '../../components/ui/SocialLinks'
import { LIVE_SITE, liveLinks } from '../../config/links'
import { mobileQuickLinks } from '../../data/navigation'

function MobileHeader({ onMenu }) {
  return (
    <header className="mobile-header">
      <div><span>Thu–Sat 11–4</span><ExternalLink href={`${LIVE_SITE}/search`}>Search&nbsp;⌕</ExternalLink></div>
      <nav><img src="./assets/coca-logo-mobile.svg" alt="CoCA" /><button onClick={onMenu} aria-label="Open navigation"><img src="./assets/menu.svg" alt="" /></button></nav>
    </header>
  )
}

function MobilePage({ page }) {
  if (page === 0) return <section className="mobile-page mobile-intro"><span className="eyebrow">Center on Contemporary Art</span><h1>Art lives here.</h1><p>Artist-led since 1980. Exhibitions, experiments, and creative community in Seattle.</p><ActionButton href={liveLinks.maps}>Plan your visit</ActionButton><ExternalLink href={liveLinks.current} className="mobile-intro-art"><img src="./assets/iscocaalive_img.webp" alt="A collage of posters and ephemera from CoCA's exhibition history" /><span><small>Now at CoCA</small><strong>Is CoCA Still Alive?</strong></span></ExternalLink></section>
  if (page === 1) return <section className="mobile-page mobile-explore"><h2>Choose your path</h2><div className="mobile-quick-grid">{mobileQuickLinks.map(item => <ExternalLink href={item.href} style={{ background: item.color }} key={item.title}><span>{item.eyebrow}</span><strong>{item.title}</strong></ExternalLink>)}</div><div className="explore-note"><span className="eyebrow">Four quick pages</span><h3>Browse without the endless scroll.</h3><p>Use the arrows below to move through the site.</p></div></section>
  if (page === 2) return (
    <section className="mobile-page mobile-artists">
      <div className="mobile-artist-links">
        <h2>Built with artists</h2>
        <p>Discover artist projects, public programs, and the people shaping CoCA.</p>
        <TextLink href={liveLinks.directory}>Artist directory</TextLink>
        <TextLink href={liveLinks.events}>Public programs</TextLink>
        <TextLink href={liveLinks.calls}>Opportunities</TextLink>
      </div>
      <div className="mobile-artist-feature">
        <img src="./assets/saldanha.webp" alt="Crocodile Tears by Suneeva Saldanha" />
        <div className="mobile-artist-caption">
          <div>
            <span className="eyebrow">Featured artwork</span>
            <strong>Crocodile Tears</strong>
            <small>Suneeva Saldanha</small>
          </div>
          <ExternalLink href={liveLinks.maps}>Visit CoCA</ExternalLink>
        </div>
      </div>
    </section>
  )
  return <section className="mobile-page mobile-support"><div><h2>Keep art moving.</h2><p>Your support helps artists take risks and keeps contemporary art accessible.</p><ActionButton href={liveLinks.join}>Donate or become a member</ActionButton><ExternalLink href={liveLinks.join} className="support-inline">Volunteer&nbsp; · &nbsp;Sponsor&nbsp; · &nbsp;Partner</ExternalLink></div><div className="mobile-contact"><img src="./assets/coca-logo-mobile.svg" alt="CoCA" /><span className="eyebrow muted">Contact + visit</span><a href="tel:+12067281980">(206) 728-1980</a><a href="mailto:info@cocaseattle.org">info@cocaseattle.org</a><p>114 Third Ave S, Seattle, WA 98104</p><SocialLinks className="mobile-socials" /></div></section>
}

export default function MobileExperience() {
  const [page, setPage] = useState(0)
  const [menu, setMenu] = useState(false)
  const touchStart = useRef(null)
  const move = direction => setPage(value => (value + direction + 4) % 4)

  useEffect(() => {
    const onKey = event => {
      if (event.key === 'ArrowRight') move(1)
      if (event.key === 'ArrowLeft') move(-1)
      if (event.key === 'Escape') setMenu(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="mobile-experience" onTouchStart={event => { touchStart.current = event.touches[0].clientX }} onTouchEnd={event => { if (touchStart.current == null) return; const distance = event.changedTouches[0].clientX - touchStart.current; touchStart.current = null; if (Math.abs(distance) > 70) move(distance < 0 ? 1 : -1) }}>
      <MobileHeader onMenu={() => setMenu(true)} />
      <div className="mobile-stage" key={page}><MobilePage page={page} /></div>
      <nav className="mobile-pagination" aria-label="Mobile concept pages"><button onClick={() => move(-1)} aria-label="Previous page">←</button><div>{[0, 1, 2, 3].map(index => <button className={page === index ? 'active' : ''} onClick={() => setPage(index)} aria-label={`Go to page ${index + 1}`} key={index} />)}<small>{page + 1} / 4</small></div><button onClick={() => move(1)} aria-label="Next page">→</button></nav>
      {menu && <div className="mobile-menu"><button onClick={() => setMenu(false)} aria-label="Close navigation">×</button><a onClick={() => { setPage(0); setMenu(false) }}>Current exhibition</a><a onClick={() => { setPage(1); setMenu(false) }}>Explore</a><a onClick={() => { setPage(2); setMenu(false) }}>Artists + Visit</a><a onClick={() => { setPage(3); setMenu(false) }}>Support + Contact</a><ExternalLink href={liveLinks.home}>Open current CoCA site</ExternalLink></div>}
    </div>
  )
}
