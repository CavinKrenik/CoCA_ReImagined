export default function Brand({ footer = false }) {
  return (
    <a className={`brand ${footer ? 'brand--footer' : ''}`} href="#top" aria-label="CoCA Seattle home">
      <img src={footer ? './assets/coca-logo-footer.svg' : './assets/coca-logo-header.svg'} alt="CoCA" />
      <span>Center on Contemporary Art</span>
    </a>
  )
}
