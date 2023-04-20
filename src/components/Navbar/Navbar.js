import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <Link className={styles.logo} to="/"><span>Saka </span>nieruchomości</Link>
        <ul>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
              to="/">O nas</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
              to="/oferty">Oferty</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
              to="/zgloszenia">Zgłoszenia</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
              to="/kredyty">Kredyty</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
              to="/cennik">Cennik</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;