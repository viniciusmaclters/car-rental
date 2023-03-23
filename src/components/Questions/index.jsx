import styles from "../Questions/styles.module.css"
import { CaretDown } from "@phosphor-icons/react"

export function Questions() {
  return (
    <div className={styles.questions_container}>
      <div className={styles.questions_header}>
        <h1>Perguntas Frequentes</h1>
        <p>Algumas perguntas frenquentes sobre o processo de reservar e aluguel de veículos no nosso site.</p>
      </div>

      <div className={styles.questions_boxes}>
        <div className={styles.questions_box}>
          <p>1. Qual é o diferencial de alugar com a Rental Car?</p>
          <CaretDown size={22} />
        </div>

        <div className={styles.questions_box}>
          <p>2. Qual é o diferencial de alugar com a Rental Car?</p>
          <CaretDown size={22} />
        </div>

        <div className={styles.questions_box}>
          <p>3. Qual é o diferencial de alugar com a Rental Car?</p>
          <CaretDown size={22} />
        </div>
      </div>
    </div>
  )
}