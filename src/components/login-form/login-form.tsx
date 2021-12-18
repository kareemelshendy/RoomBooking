import Link from "next/link"
import styles from "./login-form.module.scss"
import { PasswordInput } from "../password-input/password-input"
import { Button } from "../button/button"

export const LoginForm = ({ register, handleSubmit, loginHandler, errors }: any) => {
  return (
    <form onSubmit={handleSubmit(loginHandler)} className={`form mt-3 text-end ${styles.form}`}>
      <div className="form-group  ">
        <label htmlFor="phoneNumber">
          <span className={styles.span_red}>*</span>رقم الهاتف
        </label>
        <input
          {...register("phoneNumber", {
            required: "يجب إدخال رقم الهاتف",
            pattern: {
              value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,9}$/,
              message: "رقم الهاتف غير صالح",
            },
          })}
          type="tel"
          name="phoneNumber"
          className={`form-control input  ${errors.phoneNumber ? "input_error" : "input_normal"}`}
          dir="rtl"
          placeholder="أدخل رقم الهاتف"
        />
        {errors.phoneNumber && <span className={styles.errorMessage}>{errors.phoneNumber.message}</span>}
      </div>
      <PasswordInput register={register} errors={errors} />

      <div className="d-flex">
        <Button mt="mt-3" bgColor="btn-primary" width="w-100" type="submit" title="تسجيل الدخول" />
      </div>

      <p className="pargrapgh-md mt-2">
        ليس لديك حساب!{" "}
        <Link href="#">
          <a className={`${styles.new}`}>إنشاء حساب </a>
        </Link>{" "}
      </p>
    </form>
  )
}
