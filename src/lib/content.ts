/** Mirrors triplog black accent (palette.ts) for the dark landing surface. */
export const ACCENT = '#FFFFFF'
export const INK = '#191919'

export const BEFORE_TRIP_CARDS = [
  {
    title: 'Countdown',
    copy: 'Watch the days drop with your crew — departure feels closer every glance.',
  },
  {
    title: 'Group Saving',
    copy: 'Pool the trip fund, see who contributed, and stay on track without spreadsheets.',
  },
  {
    title: 'Inspiration',
    copy: 'Drop TikToks, map pins, and links the whole crew should see.',
  },
  {
    title: 'Shared Notes',
    copy: 'Itinerary scraps, packing lists, and “don’t forget” moments — together.',
  },
] as const

export const FEATURE_STAGES = [
  {
    id: 'countdown' as const,
    label: 'Countdown',
    caption: 'Days, hours, minutes to departure',
  },
  {
    id: 'notes' as const,
    label: 'Notes',
    caption: 'Write ideas the crew can act on',
  },
  {
    id: 'inspiration' as const,
    label: 'Inspiration',
    caption: 'Save spots and links for later',
  },
  {
    id: 'saving' as const,
    label: 'Group Saving',
    caption: 'Fund the trip, ranked by contribution',
  },
] as const

export const BENTO_ITEMS = [
  { title: 'Create Trips', copy: 'Spin up a journey with dates, cover, and crew.', span: 'md:col-span-2' },
  { title: 'Invite Friends', copy: 'Share a code. Grow the squad.', span: '' },
  { title: 'Group Saving', copy: 'Track group money without awkward spreadsheets.', span: '' },
  { title: 'Inspiration', copy: 'Links and spots that become plans.', span: '' },
  { title: 'Notes', copy: 'Write together. Stay aligned.', span: 'md:col-span-2' },
  { title: 'Countdown', copy: 'Feel the departure clock with your crew.', span: '' },
  { title: 'Disposable Camera', copy: 'Capture the trip. Keep it private or share.', span: '' },
  { title: '2FA', copy: 'Keep your account locked down.', span: '' },
  { title: 'Themes', copy: 'Light, dark, and accents that feel like you.', span: 'md:col-span-2' },
] as const

export const HOW_STEPS = [
  {
    step: '01',
    title: 'Create',
    copy: 'Start a trip with dates, a cover, and the vibe you want.',
  },
  {
    step: '02',
    title: 'Invite',
    copy: 'Pull friends in with a link. Set roles. Get everyone ready.',
  },
  {
    step: '03',
    title: 'Travel',
    copy: 'Countdown, save, note, inspire, capture — all in one place.',
  },
] as const

export const MEMORY_PHOTOS = [
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80',
  'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80',
  'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80',
  'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=600&q=80',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
  'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&q=80',
  'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&q=80',
  'https://images.unsplash.com/photo-1488646953014-aaec046cb70b?w=600&q=80',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80',
] as const

export const PLUS_GAMES = [
  { title: 'Imposter', copy: 'Find who’s bluffing before the destination drops.' },
  { title: 'Truth or Dare', copy: 'Turn transit time into crew lore.' },
  { title: 'Secret Missions', copy: 'Silent challenges. Loud memories.' },
] as const

export const TESTIMONIALS = [
  {
    quote:
      'We stopped living in 14 group chats. Triplog became the trip itself — countdown to disposable camera.',
    name: 'Maya R.',
    role: 'Crew of 6 · Lisbon',
  },
  {
    quote:
      'The savings tracker ended the awkward money talks. We just traveled.',
    name: 'Jordan K.',
    role: 'Weekend escapes',
  },
  {
    quote:
      'Disposable Camera Mode is the feature we didn’t know we needed. Pure vibes. Zero curation stress.',
    name: 'Aisha N.',
    role: 'Road trip duo',
  },
] as const
