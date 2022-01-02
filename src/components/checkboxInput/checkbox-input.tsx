import { Children } from "react"
import styles from "./checkbox-input.module.scss"
export const CheckBoxInput = ({ children, register, name }: any) => {
  return (
    <>
      <div className={styles.service_group}>
        <input {...register(name)} type="checkbox" id={name} className={styles.input} name={name} />
        <label htmlFor={name} className={styles.service_label}>
          {children}
        </label>
      </div>
    </>
  )
}
