import { useState } from "react"
import Link from "next/link"

import styles from "./passwor-input.module.scss"

export const PasswordInput = ({ register, errors }: any) => {
  const [show, setShow] = useState(false)
  return (
    <>
      <div className={`form-group mt-2 ${styles.group}`}>
        <label htmlFor="phoneNumber">
          <span className={styles.span_red}>*</span>كلمة المرور
        </label>

        <div className={styles.passwordIcon}>
          <i
            className={`${show ? "fas fa-eye-slash":"fas fa-eye"}`}
            onClick={() => {
              setShow(!show)
            }}
          ></i>
        </div>
        <input
          {...register("password", {
            required: "يجب ادخال كلمة المرور",
            minLength: { value: 7, message: "كلمة المرور يجب أن تكون أكثر من 6 أحرف" },
          })}
          type={show ? "text" : "password"}
          className={`form-control  input ${errors.password ? "input_error" : "input_normal"}`}
          name="password"
          dir="rtl"
          placeholder="أدخل كلمة المرور"
        />

        {errors.password && <span className={styles.errorMessage}>{errors.password.message}</span>}
        <Link href="#">
          <a className={`${styles.forget}`}>! نسيت كلمة المرور</a>
        </Link>
      </div>
    </>
  )
}
