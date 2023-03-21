import drive from "../../assets/drive.png"
import operator from "../../assets/operator.png"
import selectCar from "../../assets/select-car.png"

import styles from "../Details/styles.module.css"

export function Details() {
  return (
    <div className={styles.details_container}>
      <div className={styles.container}>
        <div className={styles.details_header}>
          <h3>Planeje sua viagem agora</h3>
          <h1>Com Car Rental é rápido e fácil</h1>
        </div>

        <div className={styles.content}>
          <div className={styles.grid_content}>
            <img src={selectCar} alt="" />
            <strong>Selecione o seu carro</strong>
            <p>Nós oferecemos uma variedade de veículos para todas as suas necessidades.</p>
          </div>

          <div className={styles.grid_content}>
            <img src={operator} alt="" />
            <strong>Entre em contato</strong>
            <p>Nossos operadores estão preparados para atender as suas dúvidas e questões.</p>
          </div>

          <div className={styles.grid_content}>
            <img src={drive} alt="" />
            <strong>Dirija sem preocupação</strong>
            <p>Seja indo viajar ou precisando de um veículo na sua cidade, iremos te atender o mais rápido possível.</p>
          </div>
        </div>
      </div>
    </div>
  )
}