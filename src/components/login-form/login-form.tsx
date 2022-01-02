import Link from "next/link"
import styles from "./login-form.module.scss"
import { PasswordInput } from "../password-input/password-input"
import { Button } from "../button/button"

export const LoginForm = ({ register, handleSubmit, loginHandler, errors, valid, setValid }: any) => {
  return (
    <form onSubmit={handleSubmit(loginHandler)} className={`form mt-3 text-end ${styles.form}`}>
      <div className={`form-group ${styles.group} mb-2`}>
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
      <PasswordInput title="كلمة المرور" register={register} error={errors.password} message={errors?.password?.message} forget={true} name="password" requiredMessage="يجب إدخال كلمة المرور" />

      <div className="d-flex">
        <Button mt="mt-3" bgColor="btn-primary" width="w-100" type="submit" padding="py-9">
          تسجيل الدخول
        </Button>
        {/* <Button mt="mt-3" bgColor="btn-primary" width="w-100" type="button"  padding='btn-p' disabled={true} >تسجيل الدخول</Button> */}
      </div>

      <p className={`${styles.haveAccount} mt-2`}>
        ليس لديك حساب !{" "}
        <Link href="/create-account">
          <a className={`${styles.new}`}> إنشاء حساب </a>
        </Link>{" "}
      </p>
    </form>
  )
}
