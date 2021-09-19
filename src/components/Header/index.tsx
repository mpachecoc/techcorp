import { ActiveLink } from '../ActiveLink'

import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.png" alt="TechCorp.dev"/>
        <p>TechCorp.dev</p>
        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href="#" activeClassName={styles.active}>
            <a>Technologies (soon)</a>
          </ActiveLink>
        </nav>
      </div>
    </header>
  );
}