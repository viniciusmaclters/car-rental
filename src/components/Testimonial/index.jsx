import styles from "../Testimonial/styles.module.css"
import { Quotes } from "@phosphor-icons/react"
import avatar from "../../assets/zinga.jpg"

export function Testimonial() {
  return (
    <div className={styles.testimonial_container}>
      <div className={styles.testimonial_header}>
        <h1>Depoimentos</h1>
        <p>
          Descubra o impacto positivo que tivemos em nossos clientes. 
          Os nossos clientes tem experimentado os nossos serviços e estão ansiosos por partilhar as suas experiências.
        </p>
      </div>

      <div className={styles.testimonial_boxes}>
        <div className={styles.testimonial_box}>
          <p>
            "Alugamos um carro a partir deste website e tivemos uma experiência espantosa! A reserva era fácil e as tarifas de aluguel eram muito acessíveis."
          </p>

          <div className={styles.avatar_box}>
            <div className={styles.avatar_box_name}>
              <img src={avatar} alt="" />
              <span>
                <h4>Vinicius Maclters</h4>
                <p>Governador Valadares</p>
              </span>
              <Quotes className={styles.quotes} size={60} weight="fill" color="#ff4d30" />
            </div>
          </div>

        </div>

        <div className={styles.testimonial_box}>
          <p>
            "Alugamos um carro a partir deste website e tivemos uma experiência espantosa! A reserva era fácil e as tarifas de aluguel eram muito acessíveis."
          </p>

          <div className={styles.avatar_box}>
            <div className={styles.avatar_box_name}>
              <img src={avatar} alt="" />
              <span>
                <h4>Vinicius Maclters</h4>
                <p>Governador Valadares</p>
              </span>
              <Quotes className={styles.quotes} size={60} weight="fill" color="#ff4d30" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}