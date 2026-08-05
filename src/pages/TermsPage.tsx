import { Link, useSearchParams } from 'react-router-dom'
import { BrandMark } from '../components/atoms/BrandMark'
import { ThemeToggle } from '../components/atoms/ThemeToggle'
import { Footer } from '../components/organisms/Footer'

const UPDATED = 'August 5, 2026'
const SUPPORT_EMAIL = 'kaunghtetkyaw.dev@gmail.com'

type Section = {
  title: string
  paragraphs: string[]
  bullets?: string[]
}

const SECTIONS: Section[] = [
  {
    title: '1. Acceptance of these Terms',
    paragraphs: [
      'By downloading, accessing, or using Triplog (the “App”), you agree to these Terms & Conditions (“Terms”). If you do not agree, do not use the App.',
      'We may update these Terms from time to time. Continued use after changes means you accept the updated Terms. The “Last updated” date at the top of this page shows when they last changed.',
    ],
  },
  {
    title: '2. Who we are',
    paragraphs: [
      'Triplog is a travel companion app that helps you plan trips with friends, capture moments, and keep shared memories in one place.',
      `Questions about these Terms or the App can be sent to ${SUPPORT_EMAIL}.`,
    ],
  },
  {
    title: '3. Accounts',
    paragraphs: [
      'You may need an account to use certain features. You are responsible for providing accurate information, keeping your login credentials secure, and all activity under your account.',
      'You must be able to form a binding contract in your country to create an account. If you are under the age required in your region, you may only use Triplog with a parent or guardian’s permission where the law allows.',
    ],
  },
  {
    title: '4. Your content',
    paragraphs: [
      'You retain ownership of the photos, videos, notes, inspirations, and other content you upload (“Your Content”).',
      'By uploading Your Content, you grant Triplog a limited, worldwide, non-exclusive license to host, store, display, and transmit it as needed to operate the App — for example, showing trip moments to members of a trip you join or create.',
      'You represent that you have the rights to Your Content and that it does not violate the law or anyone else’s rights.',
    ],
  },
  {
    title: '5. Acceptable use',
    paragraphs: [
      'You agree not to misuse Triplog. That includes, without limitation:',
    ],
    bullets: [
      'Harassing, threatening, or harming others',
      'Uploading illegal, hateful, or infringing content',
      'Attempting to break into, scrape, or disrupt the App or its infrastructure',
      'Impersonating another person or misrepresenting your affiliation',
      'Using the App for spam or unauthorized commercial messaging',
    ],
  },
  {
    title: '6. Trips, invites, and shared spaces',
    paragraphs: [
      'Trip creators and members control who can join shared trips. Invite links and codes should be shared carefully — anyone with access may see trip content available to members.',
      'We are not responsible for disputes between trip members. You can leave trips or adjust privacy settings where the App provides those controls.',
    ],
  },
  {
    title: '7. Privacy',
    paragraphs: [
      'How we handle personal data is described in our in-app privacy controls and any privacy policy we publish. Features such as hiding your email or location from other users are available in Settings where offered.',
      'Media you choose to download to your device gallery is stored on your device under your device’s rules; clearing Triplog’s cache does not remove gallery saves.',
    ],
  },
  {
    title: '8. Premium features',
    paragraphs: [
      'Some features may be offered as paid or subscription (“Triplog Plus”) services. Pricing, billing, and cancellation terms will be shown at purchase through the applicable app store. Purchases are also subject to Apple App Store or Google Play terms.',
    ],
  },
  {
    title: '9. Intellectual property',
    paragraphs: [
      'The App, branding, design, and software (excluding Your Content) are owned by Triplog and its licensors. You may not copy, modify, reverse engineer, or redistribute the App except as allowed by law.',
    ],
  },
  {
    title: '10. Disclaimers',
    paragraphs: [
      'The App is provided “as is” and “as available.” Travel plans change, networks fail, and devices differ — we do not guarantee uninterrupted or error-free service, or that countdown timers, maps, or third-party links will always be accurate.',
      'To the fullest extent permitted by law, Triplog disclaims warranties of merchantability, fitness for a particular purpose, and non-infringement.',
    ],
  },
  {
    title: '11. Limitation of liability',
    paragraphs: [
      'To the fullest extent permitted by law, Triplog and its operators will not be liable for indirect, incidental, special, consequential, or punitive damages, or for loss of data, profits, or goodwill arising from your use of the App.',
      'Our total liability for any claim relating to the App will not exceed the greater of (a) the amount you paid us for Triplog in the 12 months before the claim, or (b) fifty U.S. dollars (US$50), except where liability cannot be limited by law.',
    ],
  },
  {
    title: '12. Termination',
    paragraphs: [
      'You may stop using Triplog at any time. We may suspend or terminate access if you violate these Terms or if we need to protect the App or other users. Provisions that should survive (including ownership, disclaimers, and liability limits) will continue after termination.',
    ],
  },
  {
    title: '13. Governing law',
    paragraphs: [
      'These Terms are governed by the laws applicable in the jurisdiction where Triplog’s operators primarily conduct business, without regard to conflict-of-law rules, except where mandatory consumer protections in your country apply.',
    ],
  },
  {
    title: '14. Contact',
    paragraphs: [
      `For help, feedback, or legal notices, email ${SUPPORT_EMAIL}.`,
    ],
  },
]

export function TermsPage() {
  const [params] = useSearchParams()
  const embedded = params.get('embedded') === '1'

  return (
    <main className="min-h-dvh bg-bg text-ink">
      {!embedded ? (
        <header className="border-b border-line">
          <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-5 sm:px-5 md:px-8">
            <Link to="/" className="flex items-center gap-2.5">
              <BrandMark size={32} />
              <span className="font-display text-lg font-semibold tracking-tight">
                Triplog
              </span>
            </Link>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Link
                to="/"
                className="text-sm text-muted transition-colors hover:text-ink"
              >
                Back to home
              </Link>
            </div>
          </div>
        </header>
      ) : null}

      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-5 md:px-8 md:py-14">
        <p className="text-sm text-subtle">Last updated {UPDATED}</p>
        <h1 className="font-display mt-3 text-3xl font-semibold tracking-[-0.03em] text-ink md:text-4xl">
          Terms &amp; Conditions
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
          Please read these Terms carefully before using Triplog. They explain
          your rights and responsibilities when you use our travel companion
          app.
        </p>

        <div className="mt-10 space-y-10">
          {SECTIONS.map((section) => (
            <section key={section.title} className="space-y-3">
              <h2 className="font-display text-xl font-semibold tracking-tight text-ink">
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="text-base leading-relaxed text-muted"
                >
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </article>

      {!embedded ? <Footer /> : null}
    </main>
  )
}
