import styles from '../MainContent/styles.module.css'
import { CheckCircle, CaretRight } from '@phosphor-icons/react'
import mainCar from '../../assets/main-car.png'

export function MainContent() {
  return (
    <div className={styles.main_content}>
      <div className={styles.about_content}>
        <p>Planeje sua viagem agora</p>
        <h1>Economize <strong>muito</strong> com o aluguel de nossos veículos</h1>
        <span>Alugue o carro do seus sonhos. Preços imbatíveis, Km livre, retirada e entrega flexível e muito mais!!</span>

        <div>
          <button className={styles.check_button}>
            Reserva
            {/* <CheckCircle size={22} /> */}
          </button>
          <button className={styles.arrow_button}>
            Sobre
            {/* <CaretRight size={22} /> */}
          </button>
        </div>
      </div>

      <div className={styles.main_car}>
        <img src={mainCar} alt="" />
      </div>
    </div>
  )
}