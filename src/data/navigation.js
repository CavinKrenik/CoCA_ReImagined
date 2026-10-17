import { liveLinks } from '../config/links'

export const quickLinks = [
  { eyebrow: 'Explore', title: 'Exhibitions', description: 'What’s on now, what’s next, and what you may have missed.', href: liveLinks.exhibitions },
  { eyebrow: 'Plan', title: 'Events & Calendar', description: 'Openings, talks, workshops, performances, and community events.', href: liveLinks.events },
  { eyebrow: 'Artists', title: 'Calls for Art', description: 'Open opportunities, deadlines, eligibility, and how to apply.', href: liveLinks.calls },
  { eyebrow: 'Archive', title: 'Digital Archive', description: 'Explore CoCA’s exhibitions, artists, and history by year.', href: liveLinks.archive },
]

export const mobileQuickLinks = [
  { eyebrow: 'See art', title: 'Exhibitions', color: 'var(--sky)', href: liveLinks.exhibitions },
  { eyebrow: 'Meet artists', title: 'Artists', color: 'var(--lime)', href: liveLinks.directory },
  { eyebrow: 'Visit', title: 'Plan your trip', color: 'var(--purple)', href: liveLinks.maps },
  { eyebrow: 'Support', title: 'Join + Give', color: 'var(--orange)', href: liveLinks.join },
]

export const footerColumns = [
  { title: 'Explore', items: [['Exhibitions', liveLinks.exhibitions], ['Events & Calendar', liveLinks.events], ['ShowWalls', liveLinks.showwalls], ['Digital Archive', liveLinks.archive], ['Shop', liveLinks.shop]] },
  { title: 'Artists', items: [['Calls for Art', liveLinks.calls], ['Member Directory', liveLinks.directory], ['News & Stories', liveLinks.home]] },
  { title: 'Visit & About', items: [['Visit CoCA', liveLinks.events], ['Accessibility', liveLinks.contact], ['Mission', liveLinks.mission], ['Team', liveLinks.mission], ['Press', liveLinks.home]] },
  { title: 'Support', items: [['Membership', liveLinks.join], ['Donate', liveLinks.join], ['Volunteer & Internships', liveLinks.join], ['Corporate Sponsorship', liveLinks.join]] },
]
