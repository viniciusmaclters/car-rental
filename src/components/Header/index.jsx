import styles from '../Header/styles.module.css'
import logoImg from '../../assets/logo.png'
import { Link, Outlet } from 'react-router-dom'

export function Header() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_img}>
        <a href="/">
          <img src={logoImg} alt="" />
        </a>
      </div>

      <ul className={styles.navlinks}>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="about">Sobre</Link>
        </li>

        <li>
          <Link to="models">Modelos</Link>
        </li>

        <li>
          <Link to="depositions">Depoimentos</Link>
        </li>

        <li>
          <Link to="team">Nosso Time</Link>
        </li>

        <li>
          <Link to="contact">Contato</Link>
        </li>
      </ul>

      <div className={styles.signin}>
        <a className={styles.signin_button}>Entrar</a>
        <a className={styles.register}>Registrar</a>
      </div>
      <Outlet />
    </nav>
  )
}