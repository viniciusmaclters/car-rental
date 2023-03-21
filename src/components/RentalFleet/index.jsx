import styles from "../RentalFleet/styles.module.css"
import hyundai from "../../assets/hyundai.png"

export function RentalFleet() {
  return (
    <div className={styles.rental_container}>
      <div className={styles.container_box}>
        <div className={styles.rental_header}>
          <h1>Modelos de Veículos</h1>
          <p>Escolha entre uma variedade de veículos para sua próxima aventura ou viagem de negócios.</p>
        </div>

        <div className={styles.rental_content}>
          <div className={styles.model_buttons}>
            <button className={styles.btn_colored}>Hyundai HB20</button>
            <button className={styles.btn}>Chevrolet Onix</button>
            <button className={styles.btn}>Chevrolet Onix Plus</button>
            <button className={styles.btn}>Fiat Mobi</button>
            <button className={styles.btn}>Volkswagen Gol</button>
            <button className={styles.btn}>Renault Kwid</button>
          </div>

          <div className={styles.car_img}>
            <img src={hyundai} alt="" />
          </div>

          <div className={styles.description}>
            <div className={styles.description_price}>
              <span><strong>R$100</strong> / diária</span>
            </div>

            <div className={styles.description_table}>
              <div className={styles.description_table_col}>
                <span>Marca </span>
                <span>Hyundai</span>
              </div>

              <div className={styles.description_table_col}>
                <span>Modelo </span>
                <span>HB 20</span>
              </div>

              <div className={styles.description_table_col}>
                <span>Ano </span>
                <span>2020</span>
              </div>

              <div className={styles.description_table_col}>
                <span>Portas </span>
                <span>4</span>
              </div>

              <div className={styles.description_table_col}>
                <span>Ar </span>
                <span>Sim</span>
              </div>

              <div className={styles.description_table_col}>
                <span>Tramissão </span>
                <span>Automático</span>
              </div>

              <div className={styles.description_table_col}>
                <span>Combustível </span>
                <span>Flex</span>
              </div>

              <button className={styles.reserve_btn}>Reservar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}