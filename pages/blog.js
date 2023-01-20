import Link from 'next/link'
import styles from 'styles/blog.module.css'

export default function Blog() {
  return (
    <ul>
      <li>
        <h2><Link href="/">Home</Link></h2>
      </li>
      <li>
        <h2><Link href="/">About</Link></h2>
      </li>
      <li>
        <h2><Link href="/">Topics</Link></h2>
      </li>
      <li>
        <h2><Link href="/">Link</Link></h2>
      </li>
    </ul>
  )
}
