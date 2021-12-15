import React from "react"
import Image from "next/image"
import styles from "./login-hoc.module.scss"
import { useForm } from "react-hook-form"
import { LoginForm } from "../../components/login-form/login-form"
import { useRouter } from "next/router"

interface loginData {
  phoneNumber: "string"
  password: "string"
}

export const LoginHOC = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onTouched", reValidateMode: "onBlur" })

  const loginHandler = (data: loginData) => {
    console.log(data)
    reset()
    router.push("/home")
  }

  return (
    <>
      <div className={styles.login_container}>
        <div className={styles.left}>
          <div className={styles.login_logo}>
            <Image src="/Shapeblue.png" width="66px" height="60px" />
            <div className={styles.logotitle}>
              <h1 className="heading heading-3 heading-semiBold heading-blue">Room Smart</h1>
              <h3 className="heading heading-4  heading-lightGrey">Booking Room</h3>
            </div>
          </div>
          <div className={styles.formContainer}>
            <div className={styles.loginForm}>
              <h2 className="heading heading-2 heading-bold heading-secondary">سجل الدخول الآن</h2>
              <h4 className="heading heading-4 heading-semiBlod heading-lightGrey mt-1">!سجل الدخول .. هناك حجوزات بإنتظارك</h4>
              <LoginForm register={register} handleSubmit={handleSubmit} loginHandler={loginHandler} errors={errors} />
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.overlay}></div>
        </div>
      </div>
    </>
  )
}
