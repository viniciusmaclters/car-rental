import classNames from 'classnames'
import styles from '../BookCar/styles.module.css'
import { Car, Asterisk, MapPin, Calendar } from '@phosphor-icons/react'

export function BookCar() {
  return (
    <div className={styles.book_container}>
      <div className={styles.book_content}>
        <h2>Reserve um carro</h2>

        <form className={styles.box_form}>
          <div className={classNames(
            styles.car_selection,
            styles.box_style
          )}>
            <label htmlFor="">
              <Car size={22} />
              Selecione seu carro
              <Asterisk size={12} />
            </label>
            <select name="" id="">
              <option>Selecione seu carro</option>
              <option value="">Hyundai HB20</option>
              <option value="">Chevrolet Onix</option>
              <option value="">Chevrolet Onix Plus</option>
              <option value="">Fiat Mobi</option>
              <option value="">Volkswagen Gol</option>
              <option value="">Renault Kwid</option>
            </select>
          </div>

          <div className={classNames(
            styles.pickup_selection,
            styles.box_style
          )}>
            <label htmlFor="">
              <MapPin size={22} weight="fill" />
              Retirada
              <Asterisk size={12} />
            </label>
            <select name="" id="">
              <option>Selecione local de retirada</option>
              <option value="">Governador Valadares</option>
              <option value="">Periquito</option>
              <option value="">Naque</option>
              <option value="">Ipatinga</option>
              <option value="">Coronel Fabriciano</option>
              <option value="">Antônio dias</option>
            </select>
          </div>

          <div className={classNames(
            styles.drop_selection,
            styles.box_style
          )}>
            <label htmlFor="">
              <MapPin size={22} weight="fill" />
              Devolução
              <Asterisk size={12} />
            </label>
            <select name="" id="">
              <option>Selecione local de devolução</option>
              <option value="">Governador Valadares</option>
              <option value="">Periquito</option>
              <option value="">Naque</option>
              <option value="">Ipatinga</option>
              <option value="">Coronel Fabriciano</option>
              <option value="">Antônio dias</option>
            </select>
          </div>

          <div className={classNames(
            styles.pickup_time,
            styles.box_style
          )}>
            <label htmlFor="">
              <Calendar size={22} />
              Retirada
              <Asterisk size={12} />
            </label>
            <input type="date" name="" id="" />
          </div>

          <div className={classNames(
            styles.drop_time,
            styles.box_style
          )}>
            <label htmlFor="">
              <Calendar size={22} />
              Devolução
              <Asterisk size={12} />
            </label>
            <input type="date" name="" id="" />
          </div>

          <button className={styles.search}>Procurar</button>
        </form>
      </div>
    </div>
  )
}