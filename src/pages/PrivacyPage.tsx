import { Link, useSearchParams } from 'react-router-dom'
import { BrandMark } from '../components/atoms/BrandMark'
import { ThemeToggle } from '../components/atoms/ThemeToggle'
import { Footer } from '../components/organisms/Footer'

const UPDATED = 'November 15, 2026'
const SUPPORT_EMAIL = 'kaunghtetkyaw.dev@gmail.com'

type Section = {
  title: string
  paragraphs: string[]
  bullets?: string[]
}

const SECTIONS: Section[] = [
  {
    title: '1. About this policy',
    paragraphs: [
      'This Privacy Policy explains how Triplog (the “App”, “we”, “us”) collects, uses, shares, and protects your information when you use the Triplog mobile app and website. It applies to Triplog only.',
      'By using Triplog, you agree to the practices described here. If you do not agree, please do not use the App.',
    ],
  },
  {
    title: '2. Information you give us',
    paragraphs: ['When you create an account or use Triplog, you may provide:'],
    bullets: [
      'Account details: first and last name, email address, phone number, and password (stored only as a secure hash)',
      'Profile details: profile picture, home country, and home city',
      'Sign-in details from Google or Apple if you choose those options, such as your name, email address, and an account identifier',
      'Trip content: trips, destinations, notes, inspirations, savings contributions, photos, videos, and captions you add',
      'Social connections: friends (“crew”) you add and trips you invite people to or join',
      'Security settings: two-factor authentication secrets and backup codes, if you turn on 2FA',
      'Messages you send us, such as support emails',
    ],
  },
  {
    title: '3. Information collected automatically',
    paragraphs: ['When you use the App, we and our service providers may collect:'],
    bullets: [
      'Device information such as device type, operating system, app version, language, and a push notification identifier',
      'Approximate or precise location while the App is open, only if you grant location permission, so we can send relevant trip alerts',
      'Basic technical logs, such as IP address and request times, needed to keep the service secure and working',
      'Subscription status (for example, whether Triplog Plus is active and when it expires)',
    ],
  },
  {
    title: '4. Device permissions',
    paragraphs: [
      'Triplog asks for permission before accessing these device features. You can change them at any time in your device settings:',
    ],
    bullets: [
      'Camera: to take a profile picture and capture trip moments',
      'Microphone: to record sound when you record a video moment',
      'Photos and media: to choose a profile picture or moment, and to save trip moments to your gallery when you ask',
      'Location (while using the App): to send trip alerts that are relevant to where you are',
      'Notifications: to tell you about trip invites, updates, and reminders',
    ],
  },
  {
    title: '5. How we use your information',
    paragraphs: ['We use your information to:'],
    bullets: [
      'Create and manage your account and sign you in securely',
      'Run core features: planning trips, sharing moments and notes with trip members, and tracking savings',
      'Show your profile to other users so they can find and add you, subject to your privacy settings',
      'Send verification codes, security emails, and service messages',
      'Send push notifications you have allowed',
      'Process and verify Triplog Plus subscriptions',
      'Prevent fraud and abuse, keep the App secure, and fix problems',
      'Meet legal obligations',
    ],
  },
  {
    title: '6. What other users can see',
    paragraphs: [
      'Triplog is built for travelling together, so some information is visible to other people:',
    ],
    bullets: [
      'Your name and profile picture can be seen by other users, for example in search, crew lists, and trips',
      'Members of a trip can see the content shared in that trip, including moments, notes, inspirations, and contributions',
      'Your email and home location may be visible to other users unless you hide them in Settings',
    ],
  },
  {
    title: '7. Your privacy controls',
    paragraphs: ['In Settings you can:'],
    bullets: [
      'Hide your profile from search',
      'Hide your email address from other users',
      'Hide your location from other users',
      'Stop others from downloading moments you share',
      'Turn on two-factor authentication',
      'Delete your account',
    ],
  },
  {
    title: '8. Who we share information with',
    paragraphs: [
      'We do not sell your personal information, and we do not use it for third-party advertising. We share information only with service providers that help us run Triplog, and only as needed for them to do so:',
    ],
    bullets: [
      'Amazon Web Services (AWS): cloud hosting and storage for photos and videos',
      'Resend: sending verification codes and account emails',
      'OneSignal: push notifications and location-based trip alerts',
      'RevenueCat, Apple App Store, and Google Play: processing and verifying purchases and subscriptions',
      'Google and Apple: signing you in when you choose those options',
    ],
  },
  {
    title: '9. Other reasons we may share information',
    paragraphs: [
      'We may also disclose information when the law requires it, to protect the rights, safety, or property of Triplog, our users, or others, or as part of a merger, acquisition, or sale of assets. If that happens, this policy will continue to apply to your information.',
    ],
  },
  {
    title: '10. How long we keep data',
    paragraphs: [
      'We keep your information for as long as your account is active or as needed to provide the App.',
      'When you delete your account, we remove or anonymize your personal details, including your name, email, phone number, profile picture, home location, and security settings. Content you shared in trips with other people, such as moments or notes, may stay visible to those trip members and will be shown as from a “Deleted User”. You can delete that content yourself before deleting your account.',
      'We may keep limited records when the law requires it or to resolve disputes and prevent abuse.',
    ],
  },
  {
    title: '11. Deleting your account and data',
    paragraphs: [
      'You can delete your account at any time in the App under Settings → Delete account.',
      `If you cannot access the App, email ${SUPPORT_EMAIL} from the email address on your account with the subject “Delete my account”, and we will process your request within 30 days. Full steps are at triplogco.com/delete-account.`,
    ],
  },
  {
    title: '12. Security',
    paragraphs: [
      'We use reasonable safeguards to protect your information, including encrypted connections (HTTPS), hashed passwords, access controls, and optional two-factor authentication. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.',
    ],
  },
  {
    title: '13. Your rights',
    paragraphs: [
      'Depending on where you live, you may have rights to access, correct, delete, or receive a copy of your personal information, and to object to or limit certain processing. You can update most of your information in the App. To make any other request, contact us at the email below. We will respond within the time required by law.',
    ],
  },
  {
    title: '14. International transfers',
    paragraphs: [
      'Triplog and its service providers may process your information in countries other than your own. When we do, we take steps to protect it as described in this policy.',
    ],
  },
  {
    title: '15. Children',
    paragraphs: [
      'Triplog is not directed at children under 13, and we do not knowingly collect personal information from them. If you believe a child has given us personal information, contact us and we will delete it.',
    ],
  },
  {
    title: '16. Changes to this policy',
    paragraphs: [
      'We may update this policy from time to time. The “Last updated” date at the top shows when it last changed. If the changes are significant, we will let you know in the App or by email.',
    ],
  },
  {
    title: '17. Contact us',
    paragraphs: [
      `If you have questions about this Privacy Policy or your data, email ${SUPPORT_EMAIL}.`,
    ],
  },
]

export function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
          Your trips and memories are personal. This policy explains what data
          Triplog collects, why we collect it, who we share it with, and the
          choices you have.
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
