import styles from 'styles/kusa.module.css'

export default function Kusa() {
  return (
    <div className={styles.box}>
      <h1>Prep Mart</h1>
      <ul className={styles.col_3}>
        <li>
          <h2 className={styles.meat}>Meat</h2>
          <ul className={styles.menu}>
            <li>Beef</li>
            <li>Chicken</li>
            <li>Other</li>
          </ul>
        </li>
        <li>
          <h2 className={styles.fish}>Fish</h2>
          <ul className={styles.menu}>
            <li>Tuna</li>
            <li>Shrimp</li>
            <li>Other</li>
          </ul>
        </li>
        <li>
          <h2 className={styles.vegetable}>Vegetable</h2>
          <ul className={styles.menu}>
            <li>Tomato</li>
            <li>Lettuce</li>
            <li>Other</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
