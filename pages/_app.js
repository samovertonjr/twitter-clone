import 'tailwindcss/tailwind.css'
import {
  HomeIcon,
  HomeIconEmpty,
  SearchIcon,
  SearchIconEmpty,
  BellIcon,
  BellIconEmpty,
  MailboxIcon,
  MailboxIconEmpty,
} from '../components/Icons'
import { Link } from '../components/Link'

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex px-4 py-3 border-b">
        <img
          className="w-7 h-7"
          src="https://avatars.dicebear.com/4.5/api/bottts/this-is.svg"
        />
        <p className="ml-6 text-lg font-extrabold">{Component.headerTitle}</p>
      </header>

      <main className="flex-1">
        <Component {...pageProps} />
      </main>

      <footer className="flex border-t">
        <Link
          href="/"
          inactiveIcon={<HomeIconEmpty />}
          activeIcon={<HomeIcon />}
        />

        <Link
          href="/explore"
          inactiveIcon={<SearchIconEmpty />}
          activeIcon={<SearchIcon />}
        />

        <Link
          href="/notifications"
          inactiveIcon={<BellIconEmpty />}
          activeIcon={<BellIcon />}
        />

        <Link
          href="/messages"
          inactiveIcon={<MailboxIconEmpty />}
          activeIcon={<MailboxIcon />}
        />
      </footer>
    </div>
  )
}

export default MyApp
