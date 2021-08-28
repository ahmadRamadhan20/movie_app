import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className={styles.Wrapper}>
      <div className={stles.Container}>
        <div className={styles.Logo}>
          <Link to="/">
            Home
          </Link>
        </div>
      </div>
    </div>
  )
}