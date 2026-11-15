import { Link } from 'react-router-dom'
import { BrandMark } from '../components/atoms/BrandMark'
import { ThemeToggle } from '../components/atoms/ThemeToggle'
import { Footer } from '../components/organisms/Footer'

const UPDATED = 'November 15, 2026'
const SUPPORT_EMAIL = 'kaunghtetkyaw.dev@gmail.com'
const MAILTO = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
  'Delete my Triplog account',
)}`

const IN_APP_STEPS = [
  'Open the Triplog app and sign in.',
  'Go to Settings.',
  'Tap “Delete account”.',
  'Tap “Delete” to confirm. You will be signed out straight away.',
]

const DELETED = [
  'Your name, email address, and phone number',
  'Your profile picture',
  'Your home country, city, and location',
  'Your password (replaced with a random value, so nobody can sign in)',
  'Linked Google and Apple sign-in details',
  'Two-factor authentication settings and backup codes',
]

const KEPT = [
  'Moments, notes, and inspirations you shared in trips with other people. These stay visible to those trip members, labelled “Deleted User”. To remove them, delete them in the app before you delete your account.',
  'Trips and savings records shared with other members, so their trip history still adds up',
  'Purchase records held by Apple, Google, and RevenueCat, which they keep under their own policies',
  'Limited records we must keep by law, or to prevent fraud and abuse',
]

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export function DeleteAccountPage() {
  return (
    <main className="min-h-dvh bg-bg text-ink">
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

      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-5 md:px-8 md:py-14">
        <p className="text-sm text-subtle">Last updated {UPDATED}</p>
        <h1 className="font-display mt-3 text-3xl font-semibold tracking-[-0.03em] text-ink md:text-4xl">
          Delete your Triplog account
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
          You can delete your Triplog account and its personal data at any time.
          This page explains how, and what happens to your data.
        </p>

        <div className="mt-10 space-y-10">
          <section className="space-y-3">
            <h2 className="font-display text-xl font-semibold tracking-tight text-ink">
              Option 1: Delete in the app
            </h2>
            <ol className="list-decimal space-y-2 pl-5 text-base leading-relaxed text-muted">
              {IN_APP_STEPS.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p className="text-base leading-relaxed text-muted">
              Your account is deleted immediately.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-semibold tracking-tight text-ink">
              Option 2: Ask us by email
            </h2>
            <p className="text-base leading-relaxed text-muted">
              If you can’t open the app, email{' '}
              <a
                href={MAILTO}
                className="font-medium text-ink underline underline-offset-4"
              >
                {SUPPORT_EMAIL}
              </a>{' '}
              from the email address on your Triplog account, with the subject
              “Delete my Triplog account”. We may ask you to confirm the request
              so nobody else can delete your account. We will delete it within
              30 days and email you when it’s done.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-semibold tracking-tight text-ink">
              What we delete
            </h2>
            <List items={DELETED} />
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-semibold tracking-tight text-ink">
              What we keep
            </h2>
            <List items={KEPT} />
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-semibold tracking-tight text-ink">
              Before you delete
            </h2>
            <List
              items={[
                'Deleting your account doesn’t cancel a Triplog Plus subscription. Cancel it first in the App Store or Google Play subscription settings.',
                'Deletion can’t be undone. You can sign up again later with the same email, but your old data won’t come back.',
                'Save any photos or videos you want to keep to your device first.',
              ]}
            />
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-semibold tracking-tight text-ink">
              Questions
            </h2>
            <p className="text-base leading-relaxed text-muted">
              See our{' '}
              <Link
                to="/privacy"
                className="font-medium text-ink underline underline-offset-4"
              >
                Privacy Policy
              </Link>{' '}
              or email {SUPPORT_EMAIL}.
            </p>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  )
}
