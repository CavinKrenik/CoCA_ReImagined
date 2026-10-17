import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import ActionButton from '../../components/ui/ActionButton'
import ContentCard from '../../components/ui/ContentCard'
import ExternalLink from '../../components/ui/ExternalLink'
import TextLink from '../../components/ui/TextLink'
import { liveLinks } from '../../config/links'
import { quickLinks } from '../../data/navigation'

export default function DesktopSite() {
  return (
    <div className="desktop-site" id="top">
      <Header />
      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">Contemporary art in Seattle</span>
            <h1>Art should<br />move you.</h1>
            <p>Discover boundary-pushing exhibitions, meet working artists, and take part in Seattle’s longest-running contemporary art community.</p>
            <div className="button-row"><ActionButton href={liveLinks.maps}>Plan your visit</ActionButton><ActionButton inverse href={liveLinks.exhibitions}>View exhibitions</ActionButton></div>
            <span className="eyebrow">Free admission&nbsp; • &nbsp;All ages welcome</span>
          </div>
          <div className="hero-art">
            <img className="hero-feature-image" src="./assets/iscocaalive_img.webp" alt="A collage of posters and ephemera from CoCA's exhibition history" />
            <ExternalLink href={liveLinks.current} className="art-caption"><span className="eyebrow">Now at CoCA</span><strong>Is CoCA Still Alive?</strong><small>46 Years of Purpose</small></ExternalLink>
          </div>
        </section>

        <section className="mission-section" id="mission" aria-labelledby="mission-heading">
          <div className="mission-label"><span className="eyebrow">Our mission</span><span>Serving the Pacific Northwest since 1980</span></div>
          <div className="mission-copy"><h2 id="mission-heading">CoCA serves the Pacific Northwest as a catalyst and forum for the advancement, development, and understanding of Contemporary Art.</h2><ExternalLink href={liveLinks.mission}>Read the full mission</ExternalLink></div>
        </section>

        <section className="quick-section" id="explore">
          <div className="section-heading"><h2>Start exploring</h2><span className="eyebrow muted">Organized around visitor needs</span></div>
          <div className="quick-grid">{quickLinks.map(item => <ContentCard item={item} key={item.title} />)}</div>
        </section>

        <section className="split-section artists-section" id="artists">
          <div><span className="eyebrow">For artists</span><h2>Artists belong here.</h2><p>Find open calls, connect through the member directory, and follow stories from the people shaping contemporary art in the Northwest.</p></div>
          <div className="link-list"><TextLink href={liveLinks.calls}>Calls for Art</TextLink><TextLink href={liveLinks.directory}>Member Directory</TextLink><TextLink href={liveLinks.home}>News &amp; Stories</TextLink></div>
        </section>

        <section className="visit-section" id="visit">
          <div className="visit-art">
            <img className="visit-feature-image" src="./assets/saldanha.webp" alt="Crocodile Tears by Suneeva Saldanha" />
            <div className="visit-art-caption"><span className="eyebrow">Featured artwork</span><strong>Crocodile Tears</strong><small>Suneeva Saldanha</small></div>
          </div>
          <div className="visit-copy"><span className="eyebrow muted">Plan your visit</span><h2>Make room for something unexpected.</h2><p><strong>Hours</strong> Thu–Sat, 11am–4pm</p><p><strong>Admission</strong> Free; donations welcome</p><p><strong>Access</strong> Transit, parking, and accessibility details</p><div className="button-row"><ActionButton href={liveLinks.maps}>Directions</ActionButton><ActionButton inverse href={liveLinks.events}>Visit details</ActionButton></div></div>
        </section>

        <section className="split-section support-section" id="support">
          <div><span className="eyebrow">Support CoCA</span><h2>Keep contemporary art moving.</h2><p>Memberships, donations, volunteers, and sponsors keep exhibitions free and artists visible.</p></div>
          <div className="link-list"><TextLink href={liveLinks.join}>Become a member</TextLink><TextLink href={liveLinks.join}>Donate online</TextLink><TextLink href={liveLinks.join}>Volunteer or intern</TextLink><TextLink href={liveLinks.join}>Corporate sponsorship</TextLink></div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
