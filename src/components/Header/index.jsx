import styles from '../Header/styles.module.css'
import logoImg from '../../assets/logo.png'

export function Header() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_img}>
        <a href="">
          <img src={logoImg} alt="" />
        </a>
      </div>

      <ul className={styles.navlinks}>
        <li>
          <a href="">Home</a>
        </li>

        <li>
          <a href="">Sobre</a>
        </li>

        <li>
          <a href="">Modelos</a>
        </li>

        <li>
          <a href="">Depoimentos</a>
        </li>

        <li>
          <a href="">Nosso Time</a>
        </li>

        <li>
          <a href="">Contato</a>
        </li>
      </ul>

      <div className={styles.signin}>
        <button className={styles.signin_button}>Entrar</button>
        <button className={styles.register}>Registrar</button>
      </div>
    </nav>



  )
}