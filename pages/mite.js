import Link from 'next/link'
import styles from 'styles/mite.module.css'

export default function Mite() {
  return (
    <ul className={styles.nav}>
      <li><Link href="/">TOP</Link></li>
      <li><Link href="/">ABOUT</Link></li>
      <li><Link href="/">NEWS</Link></li>
      <li><Link href="/">LINK</Link></li>
    </ul>
  )
}
