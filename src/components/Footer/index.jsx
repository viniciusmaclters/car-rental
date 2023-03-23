import styles from "../Footer/styles.module.css"
import { Phone, Envelope } from "@phosphor-icons/react"

export function Footer() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_content}>
        <div className={styles.footer_about}>
          <ul>
            <li><strong>CAR</strong> Rental</li>
            <li>Alugue o carro do seus sonhos. Preços imbatíveis, Km livre, retirada e entrega flexível e muito mais!!</li>
            <li>
                <Phone size={22} weight="fill" />
              <a href="tel:+553311111111">(33) 9 1111-1111</a>
            </li>
            <li>
              <Envelope size={22} weight="fill" />
              <a href="mailto:carrental@gmail.com">carrental@gmail.com</a>
            </li>
          </ul>
        </div>

        <div className={styles.footer_company}>
          <ul>
            <li>Empresa</li>
            <li>
              <a href="">Governador Valadares</a>
            </li>
            <li>
              <a href="">Carreiras</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>
        </div>
        
        <div className={styles.footer_hours}>
          <ul>
            <li>Horario de Funcionamento</li>
            <li>Seg - Sex: 08:00 - 18:00</li>
            <li>Sáb: 08:00 - 18:00</li>
            <li>Dom: Fechado</li>
          </ul>
        </div>

        <div className={styles.footer_subscription}>
          <span>Se inscreva</span>
          <p>Se inscreva e fique por dentro das novidades.</p>
          <input type="email" name="" id="" placeholder="Digite seu email" />
          <button>Enviar</button>
        </div>
        
      </div>
    </div>
  )
}