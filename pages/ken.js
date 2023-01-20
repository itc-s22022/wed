import Link from 'next/link'
import styles from 'styles/ken.module.css'

export default function Ken () {
  return (
    <ul className={styles.pop_btn}>
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
