import { Link, useSearchParams } from 'react-router-dom'
import { BrandMark } from '../components/atoms/BrandMark'
import { ThemeToggle } from '../components/atoms/ThemeToggle'
import { Footer } from '../components/organisms/Footer'

const UPDATED = 'November 16, 2026'
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
      'By downloading, accessing, or using Triplog (the “App”), you agree to these Terms & Conditions (“Terms”), which form an End User License Agreement (EULA) between you and Triplog. If you do not agree, do not use the App.',
      'If you downloaded the App from the Apple App Store, these Terms apply together with Apple’s Licensed Application End User License Agreement (https://www.apple.com/legal/internet-services/itunes/dev/stdeula/). Where they differ, these Terms apply to the extent allowed. Apple is not a party to these Terms and is not responsible for the App or its content.',
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
      'Triplog has zero tolerance for objectionable content and abusive users. You agree not to misuse Triplog. That includes, without limitation:',
    ],
    bullets: [
      'Harassing, threatening, or harming others',
      'Uploading illegal, hateful, or infringing content',
      'Attempting to break into, scrape, or disrupt the App or its infrastructure',
      'Impersonating another person or misrepresenting your affiliation',
      'Using the App for spam or unauthorized commercial messaging',
      'Posting sexual, violent, or otherwise objectionable content',
    ],
  },
  {
    title: '6. Reporting and blocking',
    paragraphs: [
      'You can report any moment, note, inspiration, or user profile from inside the App, and you can block any user. Blocking hides their content from you and stops them from sending you crew requests.',
      `We review reports within 24 hours. If content breaks these Terms, we remove it and may suspend or permanently ban the user who posted it. You can also report content by emailing ${SUPPORT_EMAIL}.`,
    ],
  },
  {
    title: '7. Trips, invites, and shared spaces',
    paragraphs: [
      'Trip creators and members control who can join shared trips. Invite links and codes should be shared carefully — anyone with access may see trip content available to members.',
      'We are not responsible for disputes between trip members. You can leave trips or adjust privacy settings where the App provides those controls.',
    ],
  },
  {
    title: '8. Privacy',
    paragraphs: [
      'How we handle personal data is described in our Privacy Policy at triplogco.com/privacy. Features such as hiding your email or location from other users are available in Settings where offered.',
      'Media you choose to download to your device gallery is stored on your device under your device’s rules; clearing Triplog’s cache does not remove gallery saves.',
    ],
  },
  {
    title: '9. Triplog Plus subscriptions',
    paragraphs: [
      'Triplog Plus is an optional auto-renewing subscription that unlocks unlimited trips, trip games, and Disposable Camera. It is offered monthly or yearly. The price is shown in the App before you buy.',
      'Payment is charged to your Apple ID or Google Play account when you confirm the purchase. The subscription renews automatically at the same price for the same period unless you cancel at least 24 hours before the end of the current period. Your account is charged for renewal within 24 hours before the current period ends.',
      'You can manage or cancel your subscription at any time in your App Store or Google Play account settings. Cancelling stops future renewals; you keep Plus until the end of the period you paid for. Deleting the App or your Triplog account does not cancel a subscription.',
      'Refunds are handled by Apple or Google under their policies. Any unused portion of a free trial, if offered, is forfeited when you buy a subscription.',
    ],
  },
  {
    title: '10. Intellectual property',
    paragraphs: [
      'The App, branding, design, and software (excluding Your Content) are owned by Triplog and its licensors. You may not copy, modify, reverse engineer, or redistribute the App except as allowed by law.',
    ],
  },
  {
    title: '11. Disclaimers',
    paragraphs: [
      'The App is provided “as is” and “as available.” Travel plans change, networks fail, and devices differ — we do not guarantee uninterrupted or error-free service, or that countdown timers, maps, or third-party links will always be accurate.',
      'To the fullest extent permitted by law, Triplog disclaims warranties of merchantability, fitness for a particular purpose, and non-infringement.',
    ],
  },
  {
    title: '12. Limitation of liability',
    paragraphs: [
      'To the fullest extent permitted by law, Triplog and its operators will not be liable for indirect, incidental, special, consequential, or punitive damages, or for loss of data, profits, or goodwill arising from your use of the App.',
      'Our total liability for any claim relating to the App will not exceed the greater of (a) the amount you paid us for Triplog in the 12 months before the claim, or (b) fifty U.S. dollars (US$50), except where liability cannot be limited by law.',
    ],
  },
  {
    title: '13. Termination',
    paragraphs: [
      'You may stop using Triplog at any time. We may suspend or terminate access if you violate these Terms or if we need to protect the App or other users. Provisions that should survive (including ownership, disclaimers, and liability limits) will continue after termination.',
    ],
  },
  {
    title: '14. Governing law',
    paragraphs: [
      'These Terms are governed by the laws applicable in the jurisdiction where Triplog’s operators primarily conduct business, without regard to conflict-of-law rules, except where mandatory consumer protections in your country apply.',
    ],
  },
  {
    title: '15. Contact',
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
