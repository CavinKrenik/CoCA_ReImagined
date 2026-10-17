import { useState } from 'react'
import { liveLinks } from '../../config/links'
import ActionButton from '../ui/ActionButton'
import Brand from '../ui/Brand'
import ExternalLink from '../ui/ExternalLink'

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="utility-bar">
        <ExternalLink href={liveLinks.maps}>Open Thu–Sat, 11am–4pm&nbsp; • &nbsp;114 Third Ave S</ExternalLink>
        <div><a href="#newsletter">Newsletter</a><button type="button" onClick={() => setSearchOpen(value => !value)}>Search&nbsp;⌕</button></div>
      </div>
      <nav className="primary-nav" aria-label="Primary navigation">
        <Brand />
        <div className="nav-links">
          <a href="#explore">Explore</a>
          <a href="#artists">Artists</a>
          <a href="#visit">Visit &amp; About</a>
          <a href="#support">Support CoCA</a>
          <ActionButton href={liveLinks.join}>Donate</ActionButton>
        </div>
      </nav>
      {searchOpen && (
        <form className="search-panel" action="https://www.google.com/search" target="_blank">
          <input type="hidden" name="sitesearch" value="cocaseattle.org" />
          <label htmlFor="site-search">Search CoCA</label>
          <input id="site-search" name="q" autoFocus placeholder="Exhibitions, artists, events…" />
          <button type="submit">Search</button>
        </form>
      )}
    </header>
  )
}
