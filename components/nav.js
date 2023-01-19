import Link from 'next/link'

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link legacyBehavior href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/mite">
            <a>見て</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/nani">
            <a>何</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/kusa">
            <a>草</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
